<?php
/**
 * http://www.yiiframework.com/wiki/293/manage-target-language-in-multilingual-applications-a-language-selector-widget-i18n/
 */
class BeginRequest extends CBehavior
{

    // The attachEventHandler() mathod attaches an event handler to an event.
    // So: onBeginRequest, the handleBeginRequest() method will be called.
    public function attach($owner)
    {
        $owner->attachEventHandler('onBeginRequest', array($this, 'handleBeginRequest'));
    }

    public function handleBeginRequest($event)
    {
        $app = Yii::app();
        if (isset($_POST['_lang'])) {
            $app->language = $_POST['_lang'];
            $app->user->setState('_lang', $_POST['_lang']);
            $cookie = new CHttpCookie('_lang', $_POST['_lang']);
            $cookie->expire = time() + (60 * 60 * 24 * 365); // (1 year)
            Yii::app()->request->cookies['_lang'] = $cookie;
        } elseif ($app->user->hasState('_lang')) {
            $app->language = $app->user->getState('_lang');
        } elseif (isset(Yii::app()->request->cookies['_lang'])) {
            $app->language = Yii::app()->request->cookies['_lang']->value;
        }
    }
}
