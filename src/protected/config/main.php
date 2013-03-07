<?php

// uncomment the following to define a path alias
// Yii::setPathOfAlias('local','path/to/local-folder');
// This is the main Web application configuration. Any writable
// CWebApplication properties can be configured here.
return array(
    'basePath' => dirname(__FILE__) . DIRECTORY_SEPARATOR . '..',
    'name' => 'Elternsprechtagsplattform der Brühlwiesenschule',
    'language' => 'de',
    // preloading 'log' component
    'preload' => array('log'),
    // autoloading model and component classes
    'import' => array(
        'application.models.*',
        'application.components.*',
    ),
// application components
    'components' => array(
//        'user' => array(
//            'class' => 'application.modules.user.components.YumWebUser',
//            'allowAutoLogin' => true,
//            'loginUrl' => array('//user/user/login'),
//        ),
        // uncomment the following to enable URLs in path-format
        'urlManager' => array(
            //   'urlFormat'=>'path',
            'rules' => array(
                '<controller:\w+>/<id:\d+>' => '<controller>/view',
                '<controller:\w+>/<action:\w+>/<id:\d+>' => '<controller>/<action>', // this is the rule you absolutely need for update to work
                '<controller:\w+>/<action:\w+>' => '<controller>/<action>',
                '<action>' => 'site/<action>'
            ),
        ),
        'authManager' => array(
            'class' => 'CDbAuthManager',
            'connectionID' => 'db',
        ),
        'db' => array(
            'connectionString' => 'mysql:host=localhost;dbname=estdb',
            'emulatePrepare' => true,
            'enableProfiling' => true,
            'username' => 'estdb',
            'password' => 'qwertzuiop',
            'charset' => 'utf8',
            'tablePrefix' => '',
        ),
        'errorHandler' => array(
            // use 'site/error' action to display errors
            'errorAction' => 'site/error',
        ),
        'log' => array(
            'class' => 'CLogRouter',
            'routes' => array(
                array(
                    'class' => 'ext.yii-debug-toolbar.YiiDebugToolbarRoute',
                    'class' => 'CFileLogRoute',
                    'levels' => 'error,warning',
                ),
            // uncomment the following to show log messages on web pages
            /* array(
              'class'=>'CWebLogRoute',
              ), */
            ),
        ),
        'cache' => array(
            'class' => 'system.caching.CDbCache',
            'connectionID' => 'db'
        ),
        'session' => array(
            'sessionName' => 'SiteSession',
            'class' => 'CHttpSession',
            'autoStart' => true,
        ),
    ),
    'modules' => array(
        'gii' => array(
            'class' => 'system.gii.GiiModule',
            'password' => 'test',
            // If removed, Gii defaults to localhost only. Edit carefully to taste.
            'ipFilters' => array('127.0.0.1', '::1'),
        ),
    ),
    // application-level parameters that can be accessed
    // using Yii::app()->params['paramName']
    'params' => array(
        // this is used in contact page
        'adminEmail' => 'test@test.de',
        "salt" => 'e9HOiJFfDhyvcBMin5G8CBTR98wK',)
);


