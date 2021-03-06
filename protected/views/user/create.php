<?php
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
 * View Benutzer erstellen
 * @var $this UserController
 * @var $model User */
$title = Yii::t('app', 'Benutzer anlegen');
if (Yii::app()->user->isGuest()) {
    $title = Yii::t('app', 'Registrierung');
}
$this->setPageTitle($title);
$this->breadcrumbs = array(
    'Users' => array('index'),
    'Create',
);
if (Yii::app()->user->checkAccess(MANAGEMENT)) {
    $this->menu = array(
        array(  'label' => Yii::t('app', 'Benutzer verwalten'),
                'url' => array('admin'),
                'linkOptions' => array('class' => 'small button')),
    );
}
?>
<div class="row">
    <div class="small-9 columns small-centered">
        <fieldset>
            <?php if (Yii::app()->user->isGuest) {
    ?>
                <legend><?php echo Yii::t('app', 'Registrierung'); ?></legend>
                <div class="panel">
                    <p> <?php echo Yii::t('app', 'Geben Sie bitte Ihre E-Mail-Adresse und ein Passwort ein um sich im System zu registrieren.'); ?><br>
                        <?php echo Yii::t('app', 'Sie sollten innerhalb weniger Minuten eine E-Mail empfangen, die einen Link enthält mit dem Sie ihre Registrierung abschlie&szlig;en können.'); ?>
                    </p>
                </div>
            <?php
} else {
        ?>
                <legend><?php echo Yii::t('app', 'Benutzer anlegen'); ?></legend>
                <?php
    }
            echo $this->renderPartial('_form', array('model' => $model));
            ?>
        </fieldset>
        <?php if (Yii::app()->user->isGuest) {
                ?>
            <p class="text-center"><?php echo CHtml::link('<b>' . Yii::t('app', 'Zurück zur Startseite') . '</b>', 'index.php'); ?> </p>
        <?php
            } ?>
    </div>
</div>