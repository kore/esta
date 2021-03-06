<?php
/**
 * View um ein neues Passwort einzutragen.
 */
/* * Copyright (C) 2013-2014  Christian Ehringfeld, David Mock, Matthias Unterbusch
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
/**
 * @var $this UserController
 * @var $model NewPw
 * @var $form CActiveForm
 */
$this->setPageTitle(Yii::t('app', 'Passwort ändern'));
?>
<div class="row">
    <div class="small-8 columns small-centered">
        <div class="alert-box secondary">
            <?php echo Yii::t('app', 'Sie können nun Ihr Passwort ändern.'); ?>
        </div>
        <?php
        $form = $this->beginWidget('CActiveForm', array(
            'id' => 'user-form',
            'errorMessageCssClass' => 'error',
            'skin' => false,
        ));
        ?>
        <fieldset>
            <div class="row collapse">
                <div class="small-3 columns">
                    <span class="prefix"><?php echo $form->label($model, 'password'); ?></span>
                </div>
                <div class="small-6 columns">
                    <?php
                    echo $form->passwordField($model, 'password', array('size' => 60, 'maxlength' => 128));
                    echo $form->error($model, 'password');
                    ?>
                </div>
                <div class="small-3 columns">
                    <span class="postfix" style="font-size:.8em;"><?php echo Yii::t('app', 'Mindestlänge 8 Zeichen'); ?></span>
                </div>
            </div>
            <div class="row collapse">
                <div class="small-3 columns">
                    <span class="prefix"><?php echo $form->label($model, 'password_repeat'); ?></span>
                </div>
                <div class="small-9 columns">
                    <?php
                    echo $form->passwordField($model, 'password_repeat', array('size' => 60, 'maxlength' => 128));
                    echo $form->error($model, 'password_repeat');
                    ?>
                </div>
            </div>
            <?php echo CHtml::submitButton(Yii::t('app', 'Absenden'), array('class' => 'small button')); ?>
        </fieldset>
        <?php $this->endWidget(); ?>
    </div>
</div>
