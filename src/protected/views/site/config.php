<?php
/**
 * Konfigurationsseite
 */
/* * Copyright (C) 2013  Christian Ehringfeld, David Mock, Matthias Unterbusch
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
/* @var $this SiteController */
/* @var $model ConfigForm */
/* @var $form CActiveForm */
Yii::app()->clientScript->registerPackage('jquery');
?>
<div class="form">
    <?php
    $form = $this->beginWidget('CActiveForm', array(
        'id' => 'config-form',
        'enableAjaxValidation' => false,
    ));
    ?>
    <div class="row">
        <div class="twelve columns centered">
            <h2 class="text-center">Konfiguration</h2>
        </div>
    </div>
    <div class="row">
        <div class="panel">
            <div class="row">
                <div class="two columns text-center">
                    <span aria-hidden="true" data-icon="&#xe011;" style="font-size:2.5em;"></span>
                </div>
                <div class="ten columns">
                    Bitte führen Sie auf dieser Seite keine Änderungen durch, wenn Sie sich nicht absolut sicher sind.
                    <br> Die Änderungen haben Auswirkungen auf alle Benutzer im System und können sich negativ auf die Funktionalität der Software auswirken.
                </div>
            </div>
        </div>
        <fieldset>
            <legend>Allgemein</legend>
            <div class="row collapse">
                <div class="eight columns">
                    <span class="prefix"><?php echo $form->label($model, 'adminEmail'); ?></span>
                </div>
                <div class="four columns">
                    <?php
                    echo $form->textField($model, 'adminEmail');
                    echo $form->error($model, 'adminEmail');
                    ?>
                </div>
            </div>
            <div class="row collapse">
                <div class="eight columns">
                    <span class="prefix"><?php echo $form->label($model, 'dateFormat'); ?></span>
                </div>
                <div class="four columns">
                    <?php
                    echo $form->textField($model, 'dateFormat');
                    echo $form->error($model, 'dateFormat');
                    ?>
                </div>
            </div>
            <div class="row collapse">
                <div class="eight columns">
                    <span class="prefix"><?php echo $form->label($model, 'timeFormat'); ?></span>
                </div>
                <div class="four columns">
                    <?php
                    echo $form->textField($model, 'timeFormat');
                    echo $form->error($model, 'timeFormat');
                    ?>
                </div>
            </div>
            <div class="row collapse">
                <div class="eight columns">
                    <span class="prefix"><?php echo $form->label($model, 'dateTimeFormat'); ?></span>
                </div>
                <div class="four columns">
                    <?php
                    echo $form->textField($model, 'dateTimeFormat', array('readonly' => 'readonly'));
                    echo $form->error($model, 'dateTimeFormat');
                    ?>
                </div>
            </div>
            <div class="row collapse">
                <div class="eight columns">
                    <span class="prefix"><?php echo $form->label($model, 'randomTeacherPassword'); ?></span>
                </div>
                <div class="four columns styled-select">
                    <?php
                    echo $form->dropDownList($model, 'randomTeacherPassword', array('1' => 'Ja', '0' => 'Nein'));
                    echo $form->error($model, 'randomTeacherPassword');
                    ?>
                </div>
            </div>
            <div class="row collapse">
                <div class="eight columns">
                    <span class="prefix"><?php echo $form->label($model, 'defaultTeacherPassword'); ?></span>
                </div>
                <div class="four columns">
                    <?php
                    echo $form->textField($model, 'defaultTeacherPassword');
                    echo $form->error($model, 'defaultTeacherPassword');
                    ?>
                </div>
            </div>
            <div class="row">
                <div class="eight columns centered panel text-center">
                    Für Datums- und Zeitformate siehe <a href="http://php.net/manual/de/function.date.php">http://php.net/manual/de/function.date.php</a>
                </div>
            </div>
        </fieldset>
        <fieldset>
            <legend>Kontaktinformationen</legend>
            <div class="row collapse">
                <div class="eight columns">
                    <span class="prefix"><?php echo $form->label($model, 'schoolName'); ?></span>
                </div>
                <div class="four columns">
                    <?php
                    echo $form->textField($model, 'schoolName');
                    echo $form->error($model, 'schoolName');
                    ?>
                </div>
            </div>
            <div class="row collapse">
                <div class="eight columns">
                    <span class="prefix"><?php echo $form->label($model, 'schoolStreet'); ?></span>
                </div>
                <div class="four columns">
                    <?php
                    echo $form->textField($model, 'schoolStreet');
                    echo $form->error($model, 'schoolStreet');
                    ?>
                </div>
            </div>
            <div class="row collapse">
                <div class="eight columns">
                    <span class="prefix"><?php echo $form->label($model, 'schoolCity'); ?></span>
                </div>
                <div class="four columns">
                    <?php
                    echo $form->textField($model, 'schoolCity');
                    echo $form->error($model, 'schoolCity');
                    ?>
                </div>
            </div>
            <div class="row collapse">
                <div class="eight columns">
                    <span class="prefix"><?php echo $form->label($model, 'schoolTele'); ?></span>
                </div>
                <div class="four columns">
                    <?php
                    echo $form->textField($model, 'schoolTele');
                    echo $form->error($model, 'schoolTele');
                    ?>
                </div>
            </div>
            <div class="row collapse">
                <div class="eight columns">
                    <span class="prefix"><?php echo $form->label($model, 'schoolFax'); ?></span>
                </div>
                <div class="four columns">
                    <?php
                    echo $form->textField($model, 'schoolFax');
                    echo $form->error($model, 'schoolFax');
                    ?>
                </div>
            </div>
            <div class="row collapse">
                <div class="eight columns">
                    <span class="prefix"><?php echo $form->label($model, 'schoolEmail'); ?></span>
                </div>
                <div class="four columns">
                    <?php
                    echo $form->textField($model, 'schoolEmail');
                    echo $form->error($model, 'schoolEmail');
                    ?>
                </div>
            </div>
            <div class="row collapse">
                <div class="eight columns">
                    <span class="prefix"><?php echo $form->label($model, 'useSchoolEmailForContactForm'); ?></span>
                </div>
                <div class="four columns styled-select">
                    <?php
                    echo $form->dropDownList($model, 'useSchoolEmailForContactForm', array('1' => 'Ja', '0' => 'Nein'));
                    echo $form->error($model, 'useSchoolEmailForContactForm');
                    ?>
                </div>
            </div>
        </fieldset>
        <fieldset>
            <legend>Elternsprechtage</legend>
            <div class="row collapse">
                <div class="eight columns">
                    <span class="prefix"><?php echo $form->label($model, 'maxChild'); ?></span>
                </div>
                <div class="four columns">
                    <?php
                    echo $form->textField($model, 'maxChild');
                    echo $form->error($model, 'maxChild');
                    ?>
                </div>
            </div>
            <div class="row collapse">
                <div class="eight columns">
                    <span class="prefix"><?php echo $form->label($model, 'maxAppointmentsPerChild'); ?></span>
                </div>
                <div class="four columns">
                    <?php
                    echo $form->textField($model, 'maxAppointmentsPerChild');
                    echo $form->error($model, 'maxAppointmentsPerChild');
                    ?>
                </div>
            </div>
            <div class="row collapse">
                <div class="eight columns">
                    <span class="prefix"><?php echo $form->label($model, 'minLengthPerAppointment'); ?></span>
                </div>
                <div class="four columns">
                    <?php
                    echo $form->textField($model, 'minLengthPerAppointment');
                    echo $form->error($model, 'minLengthPerAppointment');
                    ?>
                </div>
            </div>
        </fieldset>
        <fieldset>
            <legend>E-Mail</legend>
            <div class="row collapse">
                <div class="eight columns">
                    <span class="prefix"><?php echo $form->label($model, 'mailsActivated'); ?></span>
                </div>
                <div class="four columns styled-select">
                    <?php
                    echo $form->dropDownList($model, 'mailsActivated', array('1' => 'Ja', '0' => 'Nein'));
                    echo $form->error($model, 'mailsActivated');
                    ?>
                </div>
            </div>
            <div class="row collapse">
                <div class="eight columns">
                    <span class="prefix"><?php echo $form->label($model, 'emailHost'); ?></span>
                </div>
                <div class="four columns">
                    <?php
                    echo $form->textField($model, 'emailHost', $optionsMails);
                    echo $form->error($model, 'emailHost');
                    ?>
                </div>
            </div>
            <div class="row collapse">
                <div class="eight columns">
                    <span class="prefix"><?php echo $form->label($model, 'fromMailHost'); ?></span>
                </div>
                <div class="four columns">
                    <?php
                    echo $form->textField($model, 'fromMailHost', $optionsMails);
                    echo $form->error($model, 'fromMailHost');
                    ?>
                </div>
            </div>
            <div class="row collapse">
                <div class="eight columns">
                    <span class="prefix"><?php echo $form->label($model, 'fromMail'); ?></span>
                </div>
                <div class="four columns">
                    <?php
                    echo $form->textField($model, 'fromMail', $optionsMails);
                    echo $form->error($model, 'fromMail');
                    ?>
                </div>
            </div>
            <div class="row collapse">
                <div class="eight columns">
                    <span class="prefix"><?php echo $form->label($model, 'teacherMail'); ?></span>
                </div>
                <div class="four columns">
                    <?php
                    echo $form->textField($model, 'teacherMail', $optionsMails);
                    echo $form->error($model, 'teacherMail');
                    ?>
                </div>
            </div>
            <div class="row collapse">
                <div class="eight columns">
                    <span class="prefix"><?php echo $form->label($model, 'virtualHost'); ?></span>
                </div>
                <div class="four columns">
                    <?php
                    echo $form->textField($model, 'virtualHost', $optionsMails);
                    echo $form->error($model, 'virtualHost');
                    ?>
                </div>
            </div>
        </fieldset>
        <fieldset>
            <legend>Anti-Spam</legend>
            <div class="row collapse">
                <div class="eight columns">
                    <span class="prefix"><?php echo $form->label($model, 'banUsers'); ?></span>
                </div>
                <div class="four columns styled-select">
                    <?php
                    echo $form->dropDownList($model, 'banUsers', array('1' => 'Ja', '0' => 'Nein'));
                    echo $form->error($model, 'banUsers');
                    ?>
                </div>
            </div>
            <div class="row collapse">
                <div class="eight columns">
                    <span class="prefix"><?php echo $form->label($model, 'durationTempBans'); ?></span>
                </div>
                <div class="four columns">
                    <?php
                    echo $form->textField($model, 'durationTempBans', $optionsBans);
                    echo $form->error($model, 'durationTempBans');
                    ?>
                </div>
            </div>
            <div class="row collapse">
                <div class="eight columns">
                    <span class="prefix"><?php echo $form->label($model, 'maxAttemptsForLogin'); ?></span>
                </div>
                <div class="four columns">
                    <?php
                    echo $form->textField($model, 'maxAttemptsForLogin', $optionsBans);
                    echo $form->error($model, 'maxAttemptsForLogin');
                    ?>
                </div>
            </div>
        </fieldset>
        <fieldset>
            <legend>Terminblockierung</legend>
            <div class="row collapse">
                <div class="eight columns">
                    <span class="prefix"><?php echo $form->label($model, 'allowBlockingAppointments'); ?></span>
                </div>
                <div class="four columns styled-select">
                    <?php
                    echo $form->dropDownList($model, 'allowBlockingAppointments', array('1' => 'Ja', '0' => 'Nein'));
                    echo $form->error($model, 'allowBlockingAppointments');
                    ?>
                </div>
            </div>
            <div class="row collapse">
                <div class="eight columns">
                    <span class="prefix"><?php echo $form->label($model, 'allowBlockingOnlyForManagement'); ?></span>
                </div>
                <div class="four columns styled-select">
                    <?php
                    echo $form->dropDownList($model, 'allowBlockingOnlyForManagement', array('1' => 'Ja', '0' => 'Nein'), $optionsBlocks);
                    echo $form->error($model, 'allowBlockingOnlyForManagement');
                    ?>
                </div>
            </div>
            <div class="row collapse">
                <div class="eight columns">
                    <span class="prefix"><?php echo $form->label($model, 'appointmentBlocksPerDate'); ?></span>
                </div>
                <div class="four columns">
                    <?php
                    echo $form->textField($model, 'appointmentBlocksPerDate', $optionsBlocks);
                    echo $form->error($model, 'appointmentBlocksPerDate');
                    ?>
                </div>
            </div>
            <div class="row collapse">
                <div class="eight columns">
                    <span class="prefix"><?php echo $form->label($model, 'lengthReasonAppointmentBlocked'); ?></span>
                </div>
                <div class="four columns">
                    <?php
                    echo $form->textField($model, 'lengthReasonAppointmentBlocked', $optionsBlocks);
                    echo $form->error($model, 'lengthReasonAppointmentBlocked');
                    ?>
                </div>
            </div>            
        </fieldset>
        <?php if (!Yii::app()->params['installed']) { ?>
        <div class="push"></div>
            <div class="row collapse">
                <div class="eight columns">
                    <span class="prefix"><?php echo $form->label($model, 'salt'); ?></span>
                </div>
                <div class="four columns">
                    <?php
                    echo $form->textField($model, 'salt');
                    echo $form->error($model, 'salt');
                    ?>
                </div>
            </div>
        <div class="push"></div>
        <?php } ?>  
    </div><!-- row -->
    <div class="row">
        <div class="twelve columns">
            <?php echo CHtml::submitButton(Yii::t('App', 'Speichern'), array('class' => 'button')); ?>
        </div>
    </div>
    <?php $this->endWidget(); ?>
</div><!-- form -->