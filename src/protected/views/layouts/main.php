<?php
/**
 * Mainlayout
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
/** @var $this Controller */
?>
<!DOCTYPE html>
<!--[if IE 8]><html class="no-js lt-ie9" lang="en"><![endif]-->
<!--[if gt IE 8]><!--><html class="no-js" lang="en"><!--<![endif]-->
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width">
        <link rel="icon" href="<?php echo Yii::app()->request->baseUrl; ?>/favicon.ico">
        <?php
        Yii::app()->clientScript->registerPackage('css');
        if (!preg_match('/MSIE [^9|10]/', $_SERVER['HTTP_USER_AGENT'])) {
            Yii::app()->clientScript->registerPackage('javascript');
            Yii::app()->clientScript->registerPackage('jquery');
            if (Yii::app()->user->checkAccess('1')) {
                Yii::app()->clientScript->registerPackage('admin');
            }
        }
        ?>
        <link rel="stylesheet" type="text/css" media="print" href="<?php echo Yii::app()->request->baseUrl; ?>/css/print.css">
        <script type="text/javascript" src="<?php echo Yii::app()->request->baseUrl; ?>/js/modernizr.foundation.js"></script>
        <title><?php echo CHtml::encode($this->pageTitle); ?></title>
    </head>
    <body>
        <div class="wrapper">
            <!-- HEADER -->
            <div class="row contain-to-grid" id="header_row">
                <div class="eleven columns offset-by-one">
                    <div class="header" title="Elternsprechtag"></div>
                    <div class="header-school-logo">
                        <div id="logo_artikel">der&nbsp;&nbsp;</div>
                        <div id="logo_school_border">
                            <img id="logo_school" src="<?php echo Yii::app()->request->baseUrl; ?>/img/logo.png" alt="<?php echo Yii::app()->params['schoolName'] ?>">
                        </div>
                    </div>
                </div>
            </div>
            <?php if (!Yii::app()->user->isGuest) { ?>
                <div class="row contain-to-grid sticky" id="js_menu" style="visibility:hidden">
                    <div class="twelve columns text-center">
                        <a href="" data-reveal-id="MenuModal" >
                            <span class="menu-icon" aria-hidden="true" data-icon="&#xe016;">&nbsp;Menü</span>
                        </a>
                    </div>
                </div> <? } ?>

            <?php
            if (!Yii::app()->user->isGuest) {
                $this->widget('zii.widgets.CMenu', array(
                    'htmlOptions' => array('class' => 'nav-bar js_hide nojs_menu'),
                    'encodeLabel' => false,
                    'items' => array(//0=Administration 1=Verwaltung 2= Lehrer 3=Eltern
                        $this->generateMenuItem("&#xe002;", "Ihre Termine", "/Appointment/index", !Yii::app()->user->isAdmin() && Yii::app()->user->checkAccessRole("2", "3")),
                        $this->generateMenuItem("&#xe00b;", "Termine vereinbaren", "/Appointment/getTeacher", Yii::app()->user->checkAccess('3') && !Yii::app()->user->isAdmin()),
                        $this->generateMenuItem("&#xe00b;", "Termine blockieren", "/Appointment/createBlockApp", Yii::app()->user->checkAccessNotAdmin('2') && Yii::app()->params['allowBlockingAppointments'] && !(Yii::app()->params['allowBlockingOnlyForManagement'] && Yii::app()->user->checkAccessNotAdmin('2'))),
                        $this->generateMenuItem("&#xe007;", "Elternsprechtagsverwaltung", "/Date/admin", Yii::app()->user->checkAccess('0')),
                        $this->generateMenuItem("&#xe007;", "Terminverwaltung", "/Appointment/admin", Yii::app()->user->checkAccess('1')),
                        $this->generateMenuItem("&#xe00a;", "Eltern und Kinder", "/ParentChild/admin", Yii::app()->user->checkAccess('1')),
                        $this->generateMenuItem("&#xe00a;", "Ihre Kinder", "/ParentChild/index", Yii::app()->user->checkAccess('3') && !Yii::app()->user->isAdmin()),
                        $this->generateMenuItem("&#xe00a;", "Benutzerverwaltung", "/User/admin", Yii::app()->user->checkAccess('1')),
                        $this->generateMenuItem('&#xe00a;', "Gruppenverwaltung", "Group/admin", Yii::app()->user->checkAccess('1')),
                        $this->generateMenuItem("&#xe007;", "Tanverwaltung", "Tan/genTans", Yii::app()->user->checkAccessRole('2', '1') || Yii::app()->user->isAdmin()),
                        $this->generateMenuItem("&#xe007;", "Konfiguration", "site/config", Yii::app()->user->checkAccess('0')),
                        $this->generateMenuItem("&#xe007;", "Ihr Benutzerkonto", "/User/account", !Yii::app()->user->isGuest()),
                        $this->generateMenuItem("&#xe006;", "Logout", "/site/logout", !Yii::app()->user->isGuest())),
                    'activeCssClass' => 'active'
                ));
            }
            ?>
            <div class="push hide-on-print"></div>
            <div class="row hide-on-print">
                <div class="twelve columns centered">
                    <?php if (Yii::app()->user->hasFlash('success')) { ?>
                        <div class="alert-box">
                            <?php echo Yii::app()->user->getFlash('success'); ?>
                        </div>
                    <?php } else if (Yii::app()->user->hasFlash('failMsg')) { ?>
                        <div class="alert-box">
                            <?php echo Yii::app()->user->getFlash('failMsg'); ?>            
                        </div>
                    <?php } ?>
                </div>
            </div>
            <div class="row print-only">
                <div class="twelve columns text-center">
                    <h5><?php echo (!empty(Yii::app()->params['schoolName'])) ? 'Elternsprechtag der ' . Yii::app()->params['schoolName'] : 'ESTA - Elternsprechtagsapplikations'; ?></h5>
                </div>
            </div>
            <?php
            echo $content;
            ?>
            <div class="push"></div>
        </div> <!-- /WRAPPER -->
        <!-- FOOTER -->
        <div id="footer">
            <div class="row">
                <div class="twelve columns">
                    <span id="print_button" class="nav-icons small button js_show" aria-hidden="true" data-icon="&#xe001;" onClick="window.print();">&nbsp;Drucken</span>
                    <hr />
                    <div class="row">
                        <div class="six columns">
                            <p>Copyright &copy; <?php
                                echo date('Y') . ' ';
                                echo (!empty(Yii::app()->params['schoolName'])) ? Yii::app()->params['schoolName'] : 'ESTA - Team';
                                ?> <br>
                            </p>
                        </div>
                        <div class="six columns"> 
                            <?php
                            $this->widget('zii.widgets.CMenu', array(
                                'htmlOptions' => array('class' => 'link-list right'),
                                'items' => array(
                                    array('label' => 'Statistik', 'url' => array('/site/statistics'), 'visible' => (!Yii::app()->user->isGuest() && Yii::app()->user->checkAccess('0'))),
                                    array('label' => 'FAQ', 'url' => array('/site/page', 'view' => 'faq')),
                                    array('label' => 'Impressum', 'url' => array('/site/page', 'view' => 'impressum')),
                                    array('label' => 'Kontakt', 'url' => array('/site/contact')),
                            )));
                            ?>
                        </div>
                    </div>
                </div>
            </div>
        </div> 	<!-- /FOOTER -->
        <!-- MODALS -->
        <div id="MenuModal" class="reveal-modal [small] nav-menu">
        </div>
        <div class="infobox" style="display: none;">
            <p></p>
        </div>
    </body>
</html>
