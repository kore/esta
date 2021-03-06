<?php
/**
 * View Benutzerverwaltung
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
/* @var $this UserController */
/* @var $model User */
$this->setPageTitle(Yii::t('app', 'Benutzerverwaltung'));
$this->breadcrumbs = array(
    'Users' => array('index'),
    'Manage',
);
$this->menu = array(
    array('label' => Yii::t('app', 'Benutzer erstellen'),
        'url' => array('create'),
        'linkOptions' => array('class' => 'small button')),
    array('label' => Yii::t('app', 'Pseudobenutzer erstellen'),
        'url' => array('createDummy'),
        'linkOptions' => array('class' => 'small button')),
    array('label' => Yii::t('app', 'Lehrer importieren'),
        'url' => array('importTeachers'),
        'linkOptions' => array('class' => 'small button')),
);
Yii::app()->clientScript->registerScript('search', "
$('.search-button').click(function(){
	$('.search-form').toggle();
	return false;
});
$('.search-form form').submit(function(){
	$('#user-grid').yiiGridView('update', {
		data: $(this).serialize()
	});
	return false;
});
", CClientScript::POS_READY);
?>
<div class="row">
    <div class="small-12 columns small-centered">
        <h2 class="text-center"><?php echo Yii::t('app', 'Benutzerverwaltung'); ?></h2>
    </div>
</div>
<?php
$this->widget('zii.widgets.grid.CGridView', array(
    'id' => 'user-grid',
    'dataProvider' => $model->search(),
    'filter' => $model,
    'columns' => array(
        array('name' => 'email', 'header' => Yii::t('app', 'E-Mail')),
        array('name' => 'firstname',),
        'lastname',
        array('name' => 'lastLogin',
            'value' => 'Yii::app()->dateFormatter->formatDateTime($data->lastLogin, "short", "short")', 'filter' => false),
        array('name' => 'state',
            'value' => '$data->getFormattedState($data->state)',
            'filter' => CHtml::listData(
                    User::getStateNameAndValue(),
                'value',
                'name'
            ),
        ),
        array('name' => 'role',
            'value' => 'User::getFormattedRole($data->role)',
            'filter' => CHtml::listData(User::getRoles(), 'value', 'name')
        ),
        array(
            'class' => 'CustomButtonColumn',
            'htmlOptions' => array('style' => 'text-align:center;width: 10%;')
        )
    )
));
?>
