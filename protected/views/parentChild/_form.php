<?php
/* Copyright (C) 2013-2014  Christian Ehringfeld, David Mock, Matthias Unterbusch
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
 * @var $this ParentChildController
 * @var $model ParentChild
 * @var $form CActiveForm
 */
$form = $this->beginWidget('CActiveForm', array(
    'id' => 'parent-child-form',
    'enableAjaxValidation' => false,
    'errorMessageCssClass' => 'error',
    'skin' => false,
        ));
if (Yii::app()->user->checkAccess(MANAGEMENT)) {
    ?>
    <div class="row collapse">
        <div class="small-4 columns">
            <span class="prefix"><?php echo Yii::t('app', 'Erziehungsberechtigte/r'); ?></span>
        </div>
        <div class="small-8 columns">
            <?php
            $this->widget('zii.widgets.jui.CJuiAutoComplete', array(
                'id' => 'parentChild_user_display',
                'name' => '',
                'value' => $userNameString,
                'sourceUrl' => 'index.php?r=user/search&role=3',
                'options' => array(
                    'minLength' => '1',
                ),
                'htmlOptions' => array( 'disabled' => $parent_disabled,
                ),
            ));
    echo $form->error($model, 'user_id');
    echo $form->hiddenField($model, 'user_id', array('id' => 'parentChild_user_id', 'value' => $model->attributes['user_id'])); ?>
        </div>
    </div>
<?php
} ?>
<div class="row collapse">
    <div class="small-4 columns">
        <span class="prefix"><?php echo Yii::t('app', 'Vorname')?></span>
    </div>
    <div class="small-8 columns mobile-input">
        <?php
        echo $form->textField($model, 'childFirstName');
        echo $form->error($model, 'childFirstName');
        ?>
    </div>
</div>

<div class="row collapse">
    <div class="small-4 columns">
        <span class="prefix"><?php echo Yii::t('app', 'Nachname'); ?></span>
    </div>
    <div class="small-8 columns mobile-input">
        <?php
        echo $form->textField($model, 'childLastName');
        echo $form->error($model, 'childLastName');
        ?>
    </div>
</div>            
<br>
<?php
echo CHtml::submitButton($model->isNewRecord ? Yii::t('app', 'Anlegen') : Yii::t('app', 'Speichern'), array('class' => 'small button'));
$this->endWidget();
?>
