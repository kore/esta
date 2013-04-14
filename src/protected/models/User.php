<?php

/**
 * Dies ist die Modelklasse für Tabelle "user".
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

/** The followings are the available columns in table 'user':
 * @property string $id
 * @property string $username
 * @property string $password
 * @property string $activationKey
 * @property integer $createtime
 * @property string $firstname
 * @property integer $state
 * @property string $lastname
 * @property string $email
 * @property string $title
 * @property integer $lastLogin
 * @property integer $badLogins
 * @property integer $bannedUntil
 *
 * The followings are the available model relations:
 * @property Appointment[] $appointments
 * @property ParentChild[] $parentChildren
 * @property UserRole[] $userRoles
 * @author Christian Ehringfeld <c.ehringfeld@t-online.de>
 */
class User extends CActiveRecord {

    /** @var string  Passwortwiederholung */
    public $password_repeat = null;

    /** @var integer Rolle als ID */
    public $role = null;

    /** @var string Rollenname */
    public $roleName = null;

    /** @var string StatusName */
    public $stateName = null;

    /** @var string Sicherheitscode */
    public $verifyCode = null;

    /** @var string TAN Nummer bei Registrierung */
    public $tan = null;

    /** @var array Array mit den Rollennamen */
    static private $a_roleName = null;

    /**
     * Returns the static model of the specified AR class.
     * @param string $className active record class name.
     * @return User the static model class
     */
    public static function model($className = __CLASS__) {
        return parent::model($className);
    }

    /**
     * Tabellenname
     * @return string the associated database table name
     */
    public function tableName() {
        return 'user';
    }

    /**
     * Regeln für die Validierung
     * @return array validation rules for model attributes.
     */
    public function rules() {
        return array(
            array('firstname, lastname', 'required'),
            array('email', 'length', 'min' => 1, 'on' => array('update'), 'allowEmpty' =>
                empty($this->password) && empty($this->email) &&
                !$this->isNewRecord && $this->state == 0 && $this->role == 3),
            array('email', 'required', 'except' => array('update')),
            array('email', "unique"),
            array('email', 'email'),
            array('state', 'numerical', 'integerOnly' => true),
            array('firstname, lastname, email', 'length', 'max' => 45),
            array('password', 'length', 'max' => 64, 'min' => 8, 'on' => 'insert'),
            array('password', 'length', 'max' => 128, 'min' => 8,
                'on' => array('update', 'insert'),
                'allowEmpty' => strlen($this->password) == 0 && !Yii::app()->user->isGuest),
            array('tan', 'length',
                'min' => Yii::app()->params['tanSize'],
                'max' => Yii::app()->params['tanSize'],),
            array('tan', 'numerical', 'integerOnly' => TRUE,
                'allowEmpty' => !$this->isNewRecord || !Yii::app()->user->isGuest
            ),
            array('password', 'compare', "on" => "insert"),
            array('password_repeat', 'safe'), //allow bulk assignment
            array('verifyCode', 'captcha', 'allowEmpty' => !Yii::app()->user->isGuest || !$this->isNewRecord || !CCaptcha::checkRequirements()),
            array('id, username, firstname, state, lastname, email, role,roleName,stateName,title', 'safe', 'on' => 'search'),
        );
    }

    /**
     * Relationen ( Appointments HAS_MANY , parentChildren HAS_MANY, userRoles HAS_ONE )
     * @return array relational rules.
     */
    public function relations() {
        // NOTE: you may need to adjust the relation name and the related
        // class name for the relations automatically generated below.
        return array(
            'appointments' => array(self::HAS_MANY, 'Appointment', 'user_id'),
            'parentChildren' => array(self::HAS_MANY, 'ParentChild', 'user_id'),
            'userRoles' => array(self::HAS_ONE, 'UserRole', 'user_id'),
        );
    }

    /**
     * Verschlüsselt ein Passwort mit Applikationssalt in sha512
     * @author Christian Ehringfeld <c.ehringfeld@t-online.de>
     * @param string $password Zu salzendes Passwort
     * @param string $salt Salt
     * @return string encrypted and salted password with sha512
     */
    public static function encryptPassword($password, $salt) {
        $saltedPw = $salt . $password;
        return hash('sha512', $saltedPw);
    }

    /**
     * Attributlabels
     * @return array customized attribute labels (name=>label)
     */
    public function attributeLabels() {
        return array(
            'id' => 'ID',
            'username' => 'Benutzername',
            'password' => 'Passwort',
            'password_repeat' => 'Passwort wiederholen',
            'firstname' => 'Vorname',
            'state' => 'Status',
            'stateName' => 'Status',
            'lastname' => 'Nachname',
            'email' => 'E-Mail',
            'createtime' => 'Registrierungsdatum',
            'role' => 'Rolle',
            'roleName' => 'Rolle',
            'verifyCode' => 'Sicherheitscode',
            'title' => 'Titel',
        );
    }

    /**
     * Retrieves a list of models based on the current search/filter conditions.
     * @return CActiveDataProvider the data provider that can return the models based on the search/filter conditions.
     */
    public function search() {
        $criteria = new CDbCriteria();
        $criteria->with = array('userRoles');
        $criteria->together = true;
        $criteria->compare('firstname', $this->firstname, true);
        $criteria->compare('lastname', $this->lastname, true);
        $criteria->compare('id', $this->id, true);
        $criteria->compare('username', $this->username, true);
        $criteria->compare('state', $this->state);
        $criteria->compare('email', $this->email, true);
        $criteria->compare('state', $this->state, true);
        $criteria->compare('title', $this->title, true);
        $criteria->compare('userRoles.role_id', $this->role, true);
        $sort = new CSort;
        $sort->attributes = array(
            'defaultOrder' => 'id ASC',
            'id' => array(
                'asc' => 'id',
                'desc' => 'id desc'),
            'username' => array(
                'asc' => 'username',
                'desc' => 'username desc'),
            'firstname' => array(
                'asc' => 'firstname',
                'desc' => 'firstname desc'),
            'lastname' => array(
                'asc' => 'lastname',
                'desc' => 'lastname desc'),
            'title' => array(
                'asc' => 'title',
                'desc' => 'title desc'),
            'state' => array(
                'asc' => 'state',
                'desc' => 'state desc'),
            'role' => array(
                'asc' => 'userRoles.role_id',
                'desc' => 'userRoles.role_id desc'),
        );
        return new CActiveDataProvider($this, array(
            'criteria' => $criteria,
            'pagination' => array('pageSize' => 20),
            'sort' => $sort,
        ));
    }

    /**
     * Erstellt CActiveDataProvider mit CDbCriteria mit Suche nach Lehrerbenutzern 
     * @author Christian Ehringfeld <c.ehringfeld@t-online.de>
     * @return \CActiveDataProvider
     */
    public function searchTeacher() {
        $this->role = 2;
        return new CActiveDataProvider($this, array(
            'criteria' => self::searchCriteriaTeacherAutoComplete(),
            'pagination' => array('pageSize' => 20),
        ));
    }

    /**
     * Suche für die Autovervollständigung bei getTeacher()
     * @author Christian Ehringfeld <c.ehringfeld@t-online.de>
     * @return \CDbCriteria
     * 
     */
    public function searchCriteriaTeacherAutoComplete() {
        $criteria = new CDbCriteria;
        $match = addcslashes(ucfirst($this->lastname), '%_');
        $criteria->addCondition('lastname LIKE :match');
        $criteria->params = array(':match' => "$match%");
        $criteria->compare('state', $this->state, true);
        $criteria->with = array('userRoles');
        $criteria->select = 'title,firstname,lastname,id';
        $criteria->addCondition('userRoles.role_id="' . $this->role . '"');
        $criteria->limit = 10;
        return $criteria;
    }

    /**
     * Suchkriterien um alle User mit UserRollen zu löschen
     * @author Christian Ehringfeld <c.ehringfeld@t-online.de>
     * @deprecated since version 1.2
     * @return \CDbCriteria 
     */
    public static function deleteAllCriteria() {
        $criteria = new CDbCriteria();
        $criteria->with = array('userRoles');
        $criteria->addCondition('userRoles.role_id="2"', "OR");
        $criteria->addCondition('userRoles.role_id="3"', "OR");
        $criteria->select = 'id';
        return $criteria;
    }

    /**
     * Loescht Benutzer mit einer bestimmten Rolle
     * @author Christian Ehringfeld <c.ehringfeld@t-online.de>
     * @param integer $role
     */
    public function deleteUsersWithRole($role) {
        if (is_int($role)) {
            $criteria = new CDbCriteria();
            $criteria->with = array('userRoles');
            $criteria->addCondition('userRoles.role_id="' . $role . '"');
            $criteria->select = 'id';
            $a_delete = User::model()->findAll($criteria);
            foreach ($a_delete as $record) {
                $record->delete();
            }
        }
    }

    /**
     * Erstellt automatisch für createtime einen Timestamp
     * @author Christian Ehringfeld <c.ehringfeld@t-online.de>
     * @return array gibt für das Attribut createtime den aktuellen Timestamp zurück
     */
    public function behaviors() {
        if ($this->isNewRecord) {
            return array(
                'CTimestampBehavior' => array(
                    'class' => 'zii.behaviors.CTimestampBehavior',
                    'createAttribute' => 'createtime',
                )
            );
        } else {
            return array();
        }
    }

    /**
     * Setzt auch nicht in DB persistierte Variablen
     * @author Christian Ehringfeld <c.ehringfeld@t-online.de>
     * @param array $attributes Attribute die festgelegt werden sollen 
     * @param boolean $safe
     * @return boolean
     */
    public function setAttributes($attributes, $safe = true) {
        foreach ($attributes as $name => $value) {
            $this->setAttribute($name, $value);
        }
        return true;
    }

    /**
     * Setzt ein Attribut
     * @param string $name
     * @param string $value
     * @author Christian Ehringfeld <c.ehringfeld@t-online.de>
     */
    public function setAttribute($name, $value) {
        parent::setAttribute($name, $value);
    }

    /**
     * weist einem neuen Nutzer eine Rolle zu
     * @author Christian Ehringfeld <c.ehringfeld@t-online.de>
     * @return boolean Rückgabewert der Methode afterSave() CActiveRecord
     */
    public function afterSave() {
        if ($this->isNewRecord) {
            if (!Yii::app()->user->checkAccess('1')) {
                $tan = Tan::model()->findByAttributes(array('tan' => $this->tan));
                $tan->used = true;
                $tan->update();
            }
            $userRole = New UserRole();
            $userRole->user_id = $this->id;
            if (Yii::app()->user->isGuest) {
                $userRole->role_id = Role::model()->findByAttributes(array('id' => '3'))->id;
            } else {
                $userRole->role_id = Role::model()->findByAttributes(array('id' => $this->role))->id;
            }
            $userRole->save();
        } else {
            $userRole = UserRole::model()->findByAttributes(array('user_id' => $this->id));
            $userRole->role_id = $this->role;
            $userRole->save();
        }

        return parent::afterSave();
    }

    /**
     * löscht den UserRole Eintrag + ElternKind Verknüpfung + Kinder
     * @author Christian Ehringfeld <c.ehringfeld@t-online.de>
     * @return boolean Rückgabewert der Elternklassemethoden
     */
    public function beforeDelete() {
        UserRole::model()->deleteAllByAttributes(array('user_id' => $this->id));
        BlockedAppointment::model()->deleteAllByAttributes(array('user_id' => $this->id));
        $a_appointment = Appointment::model()->findAllByAttributes(array('user_id' => $this->id));
        for ($x = 0; $x < count($a_appointment); $x++) {
            $a_appointment[$x]->delete();
        }
        $a_parentChild = ParentChild::model()->findAllByAttributes(array('user_id' => $this->id));
        for ($i = 0; $i < count($a_parentChild); $i++) {
            $a_appointment = Appointment::model()->findAllByAttributes(array('parent_child_id' => $a_parentChild[$i]->id));
            for ($x = 0; $x < count($a_appointment); $x++) {
                $a_appointment[$x]->delete();
            }
            $childId = $a_parentChild[$i]->child_id;
            ParentChild::model()->deleteByPk($a_parentChild[$i]->id);
            Child::model()->deleteByPk($childId);
        }
        return parent::beforeDelete();
    }

    /**
     *  verschlüsselt das Passwort und generiert einen Aktivierungsschlüssel, setzt die E-Mail Adresse als Username fest
     * @author Christian Ehringfeld <c.ehringfeld@t-online.de>
     * @return boolean Rückgabewert der parent methode
     */
    public function beforeSave() {
        if ($this->isNewRecord) {
            if (Yii::app()->user->isGuest) {
                $this->state = 0;
            }
            $this->activationKey = self::generateActivationKey();
            if (empty($this->username) && !empty($this->email)) {
                $this->username = $this->email;
            }
            $this->lastname = ucfirst($this->lastname);
            $this->firstname = ucfirst($this->firstname);
        }
        if (strlen($this->password) < 128 && strlen($this->password) > 0) {
            $this->password = $this->encryptPassword($this->password, Yii::app()->params["salt"]);
        } else {
            $this->password = User::model()->findByPk($this->id)->password;
        }
        return parent::beforeSave();
    }

    /**
     * Generiert einen Aktivierungsschlüssel und speichert diesen im aktuellen Objekt
     * @author Christian Ehringfeld <c.ehringfeld@t-online.de>
     */
    public function generateActivationKey() {
        return sha1(mt_rand(10000, 99999) . time() . $this->email);
    }

    /**
     * Setzt den StateName und gibt ihn zurück
     * @author Christian Ehringfeld <c.ehringfeld@t-online.de>
     * @return string 0=NichtAktiv 1=Aktiv 2=Gesperrt
     */
    public function getStateName() {
        switch ($this->state) {
            case 0:
                $this->stateName = 'Nicht aktiv';
                break;
            case 1:
                $this->stateName = 'Aktiv';
                break;
            case 2:
                $this->stateName = 'Gesperrt';
                break;
            default:
                $this->stateName = $this->state;
        }
        return $this->stateName;
    }

    /**
     * Gibt den Status als String aus ( echo )
     * @author Christian Ehringfeld <c.ehringfeld@t-online.de>
     * @param integer $state Status ID des Users
     */
    static public function getFormattedState($state) {
        switch ($state) {
            case '0':
                echo 'Nicht aktiv';
                break;
            case '1':
                echo 'Aktiv';
                break;
            case '2':
                echo 'Gesperrt';
                break;
        }
    }

    public static function getStateNameAndValue() {
        return array(array('value' => '0', 'name' => 'Nicht aktiv'), array('value' => '1', 'name' => 'Aktiv'), array('value' => '2', 'name' => 'Gesperrt'));
    }

    /**
     * Gibt Rolle als String aus ( echo )
     *  0 = Admin 1=Verwaltung 2=Lehrer 3= Eltern
     * @author Christian Ehringfeld <c.ehringfeld@t-online.de>
     * @param integer $role Rollen ID des Users
     */
    static public function getFormattedRole($role) {
        if (is_null(self::$a_roleName)) {
            self::$a_roleName = Role::model()->findAll();
        }
        echo self::$a_roleName[$role]->title;
    }

    /**
     * Führt zunächst die Elternmethode beforeValidate() aus und 
     * prüft wenn diese true zurückgibt und es keiner neuer Eintrag ist ob die TAN schon benutzt wurde 
     * @author Christian Ehringfeld <c.ehringfeld@t-online.de>
     * @return boolean
     */
    public function beforeValidate() {
        $rc = parent::beforeValidate();
        if ($rc && Yii::app()->user->isGuest && $this->isNewRecord) {
            $tan = Tan::model()->findByAttributes(array('tan' => $this->tan));
            if ($tan !== null) {
                if ($tan->used) {
                    $this->addError('tan', 'Leider wurde Ihre TAN schon benutzt.');
                }
            } else {
                $this->addError('tan', 'Leider konnte die eingegebene TAN nicht identifiziert werden.');
            }
        }
        return $rc;
    }

    /**
     * gibt true zurück wenn der gegebene Benutzer die entsprechende Rolle hat
     * @author Christian Ehringfeld <c.ehringfeld@t-online.de>
     * @param integer $userId Benutzer ID
     * @param integer $roleId Rollen ID
     * @return boolean
     */
    public static function hasRole($userId, $roleId) {
        $rc = false;
        if (is_int($userId) && is_int($roleId) && UserRole::model()->countByAttributes(
                        array('user_id' => $userId, 'role_id' => $roleId)) == 1) {
            $rc = true;
        }
        return $rc;
    }

    /**
     * Setzt diverse Attribute
     * @param type $email Email
     * @param type $firstname Vorname
     * @param type $lastname Nachname
     * @param type $state Status
     * @param type $role Rolle
     * @author Christian Ehringfeld <c.ehringfeld@t-online.de>
     */
    public function setSomeAttributes($email, $firstname, $lastname, $state, $role) {
        $this->email = $email;
        $this->username = $this->email;
        $this->firstname = $firstname;
        $this->lastname = $lastname;
        $this->state = $state;
        $this->role = $role;
    }

    /**
     * Verwendet entweder das Standardpasswort oder den Passwortgenerator
     * @author Christian Ehringfeld <c.ehringfeld@t-online.de>
     * @return string Klartextpasswort zur Anzeige
     */
    public function generatePassword() {
        if (Yii::app()->params['randomTeacherPassword']) {
            $passGen = new PasswordGenerator();
            $this->password = $passGen->generate();
        } else {
            $this->password = Yii::app()->params['defaultTeacherPassword'];
        }
        $password = $this->password;
        $this->password_repeat = $user->password;
        if ($this->save() && Yii::app()->params['randomTeacherPassword']) {
            $mail = new Mail();
            $mail->sendRandomUserPassword($user->email, $password);
        }
        return $password;
    }

}