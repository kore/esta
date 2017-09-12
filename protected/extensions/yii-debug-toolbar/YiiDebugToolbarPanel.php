<?php
/**
 * YiiDebugToolbarPanel class file.
 *
 * @author Sergey Malyshev <malyshev.php@gmail.com>
 */


/**
 * YiiDebugToolbarPanel represents an ...
 *
 * Description of YiiDebugToolbarPanel
 *
 * @author Sergey Malyshev <malyshev.php@gmail.com>
 * @author Igor Golovanov <igor.golovanov@gmail.com>
 * @version $Id$
 * @package YiiDebugToolbar
 * @since 1.1.7
 */
abstract class YiiDebugToolbarPanel extends CWidget implements YiiDebugToolbarPanelInterface
{
    public $i = 'n';

    const VIEWS_PATH = '/views/panels';

    private $_enabled = true;
    private $_id;
    private static $_counter = 0;

    /**
     * Returns the ID of the panel or generates a new one if requested.
     * It uses 'dt' as prefix to avoid clashes with autogenerated IDs from Yii widgets
     * @param boolean $autoGenerate whether to generate an ID if it is not set previously
     * @return string id of the panel.
     */
    public function getId($autoGenerate=true)
    {
        if ($this->_id!==null) {
            return $this->_id;
        } elseif ($autoGenerate) {
            return $this->_id='ydtb-panel-'.self::$_counter++;
        }
    }

    /**
     * @param boolean $value set is panel enabled
     */
    public function setEnabled($value)
    {
        $this->_enabled = CPropertyValue::ensureBoolean($value);
    }

    /**
     * @return boolean $value is panel enabled
     */
    public function getEnabled()
    {
        return $this->_enabled;
    }

    /**
     * Displays a variable.
     * This method achieves the similar functionality as var_dump and print_r
     * but is more robust when handling complex objects such as Yii controllers.
     * @param mixed $var variable to be dumped
     */
    public function dump($var)
    {
        YiiDebug::dump($var);
    }

    /**
     * {@inheritdoc}
     */
    public function getSubTitle()
    {
        return null;
    }

    /**
     * {@inheritdoc}
     */
    public function getMenuSubTitle()
    {
        return null;
    }

    /**
     * Returns the directory containing the view files for this widget.
     * @param boolean $checkTheme not implemented. Only for inheriting CWidget interface.
     * @return string the directory containing the view files for this widget.
     */
    public function getViewPath($checkTheme = false)
    {
        return dirname(__FILE__) . self::VIEWS_PATH;
    }
}
