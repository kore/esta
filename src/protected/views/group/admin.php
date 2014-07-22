<?php
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
/* @var $this GroupController */
/* @var $model Group */
/* @var $dateHasGroup DateHasGroup */
/* @var $userHasGroup UserHasGroup */
$this->setPageTitle( 'Gruppenverwaltung');
$this->menu = array(
    array('label' => 'Gruppe erstellen', 'url' => array('create')),
);
?>
<div class="row">
    <div class="twelve columns centered">
        <h2 class="text-center">Gruppenverwaltung</h2>
    </div>
</div>
<?php
$this->widget('zii.widgets.grid.CGridView', array(
    'id' => 'group-grid',
    'dataProvider' => $model->search(),
    'columns' => array(
        'groupname',
        array(
            'class' => 'CustomButtonColumn',
            'template' => '{update} {delete}',
            'headerHtmlOptions' => array('style' => 'text-align:center;width: 10%;'),
        ),
    ),
));
$this->widget('zii.widgets.grid.CGridView', array(
    'id' => 'dateHasGroup-grid',
    'dataProvider' => $dateHasGroup->search(),
    'columns' => array(
        array('name' => 'date', 'value' => 'date(Yii::app()->params["dateFormat"], strtotime($data->date->date))','headerHtmlOptions' => array('style' => 'width: 45%;')),
        array('name' => 'group', 'value' => '$data->group->groupname','headerHtmlOptions' => array('style' => 'width: 45%;')),
        array('class' => 'CustomButtonColumn', 'template' => '{update} {delete}',
              'buttons' => array(
                    'delete' => array(
                        'url' => '$this->grid->controller->createUrl("/group/deleteDateGroup", array("id"=>$data->id))'
                    ),
                    'update' => array(
                        'url' => '$this->grid->controller->createUrl("/date/update", array("id"=>$data->date->id))'
                    )
                ),
            'headerHtmlOptions' => array('style' => 'text-align:center;width: 10%;')
            ),
    )
));
$this->widget('zii.widgets.grid.CGridView', array(
    'id' => 'userHasGroup-grid',
    'dataProvider' => $userHasGroup->search(),
    'columns' => array(
        array('name' => 'user', 'value' => '$data->user->firstname . " " . $data->user->lastname','headerHtmlOptions' => array('style' => 'width: 45%;')),
        array('name' => 'group', 'value' => '$data->group->groupname','headerHtmlOptions' => array('style' => 'width: 45%;')),
        array('class' => 'CustomButtonColumn', 'template' => '{update} {delete}', 
                'buttons' => array(
                    'delete' => array(
                        'url' => '$this->grid->controller->createUrl("/group/deleteUserGroup", array("id"=>$data->id))'
                    ),
                    'update' => array(
                        'url' => '$this->grid->controller->createUrl("/user/update", array("id"=>$data->user->id))'
                    )
                ),
            'headerHtmlOptions' => array('style' => 'text-align:center;width: 10%;')
            ),
    )
));







