<?php

/**
 * SiteController für Forms/Static Pages ohne echtes Datenmodell
 */
/* Copyright (C) 2013  Christian Ehringfeld, David Mock, Matthias Unterbusch
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * any later version.
 * 
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with this program.  If not, see <http://www.gnu.org/licenses/>.
 */
class SiteController extends Controller {

    /**
     * Declares class-based actions.
     */
    public function actions() {
        return array(
            'captcha' => array(
                'class' => 'CCaptchaAction',
                'backColor' => 0xFFFFFF,
            ),
            'page' => array(
                'class' => 'CViewAction',
            ),
        );
    }

    /**
     * action um (fast) alle Daten der Anwendung zu löschen
     * @throws CHttpException
     */
    public function actionDeleteAll() {
        if (Yii::app()->user->checkAccess('0')) {
            $model = new DeleteAllForm();
            if (isset($_POST['DeleteAllForm'])) {
                $model->setAttributes($_POST['DeleteAllForm']);
                if ($model->validate()) {
                    $model->delete();
                }
            }
            $this->render('deleteAll', array('model' => $model));
        } else {
            $this->throwFourNullThree();
        }
    }

    /**
     * @param type $option
     * @return mixed
     */
    public static function getDisabledOptions($option) {
        if ($option === 0) {
            return array('options' => array('disabled' => true));
        } else {
            return '';
        }
    }

    /**
     * action für das Konfigurationsskript
     */
    public function actionConfig() {
        if ((Yii::app()->user->checkAccess('0') && Yii::app()->params['installed']) || !Yii::app()->params['installed']) {
            $model = new ConfigForm();
            $optionsMails = self::getDisabledOptions($model->mailsActivated);
            $optionsBans = self::getDisabledOptions($model->banUsers);
            $optionsBlocks = self::getDisabledOptions($model->allowBlockingAppointments);
            if (isset($_POST['ConfigForm'])) {
                $createAdminUser = false;
                $file = Yii::app()->basePath . '/config/params.inc';
                $model->attributes = $_POST['ConfigForm'];
                if ($model->validate()) {
                    if (Yii::app()->params['installed'] == 0) {
                        $createAdminUser = true;
                    }
                    $model->installed = 1;
                    $str = base64_encode(serialize($model->attributes));
                    file_put_contents($file, $str);
                    if ($createAdminUser) {
                        $user = new User();
                        $user->setSomeAttributes($model->adminEmail, 'admin', 'admin', 1, 0);
                        $password = $user->generatePassword();
                        $msg = "Konfiguration aktualisiert. Außerdem wurde ein Administratorkonto erstellt. Ihr Benutzerkontenname lautet: "
                                . $user->email . " Ihr Passwort lautet:" . $password;
                        if ($model->randomTeacherPassword) {
                            $msg .= " .Sollten Sie nun eine Bestätigungsemail erhalten, wurde die Anwendung erfolgreich konfiguriert.";
                        }
                        Yii::app()->user->setFlash('success', $msg);
                        $this->refresh();
                    } else {
                        Yii::app()->user->setFlash('success', 'Konfiguration aktualisiert.');
                    }
                }
            } $this->render('config', array(
                'model' => $model,
                'optionsBans' => $optionsBans,
                'optionsBlocks' => $optionsBlocks,
                'optionsMails' => $optionsMails,
            ));
        } else {
            $this->throwFourNullThree();
        }
    }

    /**
     * This is the default 'index' action that is invoked
     * when an action is not explicitly requested by users.
     */
    public function actionIndex() {
        self::actionLogin();
    }

    /**
     * This is the action to handle external exceptions.
     */
    public function actionError() {
        if ($error = Yii::app()->errorHandler->error) {
            if (Yii::app()->request->isAjaxRequest)
                echo $error['message'];
            else
                $this->render('error', $error);
        }
    }

    /**
     * Displays the contact page
     */
    public function actionContact() {
        $model = new ContactForm;
        if (isset($_POST['ContactForm'])) {
            $model->attributes = $_POST['ContactForm'];
            if ($model->validate()) {
                $name = '=?UTF-8?B?' . base64_encode($model->name) . '?=';
                $subject = '=?UTF-8?B?' . base64_encode($model->subject) . '?=';
                $mail = new Mail;
                if (Yii::app()->params['useSchoolEmailForContactForm']) {
                    $toMail = Yii::app()->params['schoolEmail'];
                } else {
                    $toMail = Yii::app()->params['adminEmail'];
                }
                $mail->sendMail($subject, $model->body, $toMail, $model->email, $name);
                Yii::app()->user->setFlash('contact', 'Vielen Dank dass Sie uns kontaktieren. Wir werden Ihnen so schnell wie möglich antworten.');
                $this->refresh();
            }
        }
        $this->render('contact', array('model' => $model));
    }

    /**
     * Zeigt die Login Seite an
     * @author Christian Ehringfeld <c.ehringfeld@t-online.de>
     */
    public function actionLogin() {
        if (Yii::app()->user->isGuest) {
            $model = new LoginForm;
            if (isset($_POST['LoginForm'])) {
                $model->attributes = $_POST['LoginForm'];
                if ($model->validate() && $model->authenticate()) {
                    if (!Yii::app()->user->isAdmin()) {
                        if (Yii::app()->user->checkAccess('1')) {
                            $this->redirect('index.php?r=/Appointment/admin');
                        }
                        $this->redirect('index.php?r=/Appointment/Index');
                    } else {
                        $this->redirect('index.php?r=/Date/admin');
                    }
                }
            }
            $this->render('login', array('model' => $model));
        } else {
            $this->redirect('index.php?r=User/account');
        }
    }

    /**
     * Logs out the current user and redirect to homepage.
     */
    public function actionLogout() {
        if (!Yii::app()->user->isGuest()) {
            Yii::app()->user->logout();
            $this->redirect(Yii::app()->homeUrl);
        } else {
            $this->throwFourNullThree();
        }
    }

    /**
     * Zeigt die Statistikseite an
     * @author Christian Ehringfeld <c.ehringfeld@t-online.de>
     */
    public function actionStatistics() {
        if (!Yii::app()->user->isGuest()) {
            $appointments = Appointment::model()->count() + BlockedAppointment::model()->count();
            $teachers = UserRole::model()->countByAttributes(array('role_id' => 2));
            $freeAppointments = (DateAndTime::model()->count() * $teachers) - $appointments;
            $this->render('statistics', array('freeApps' => $freeAppointments, 'apps' => $appointments, 'teachers' => $teachers));
        } else {
            $this->throwFourNullThree();
        }
    }

}

