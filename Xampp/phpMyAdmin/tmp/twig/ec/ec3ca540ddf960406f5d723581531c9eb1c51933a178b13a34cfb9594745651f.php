<?php

use Twig\Environment;
use Twig\Error\LoaderError;
use Twig\Error\RuntimeError;
use Twig\Extension\SandboxExtension;
use Twig\Markup;
use Twig\Sandbox\SecurityError;
use Twig\Sandbox\SecurityNotAllowedTagError;
use Twig\Sandbox\SecurityNotAllowedFilterError;
use Twig\Sandbox\SecurityNotAllowedFunctionError;
use Twig\Source;
use Twig\Template;

/* database/events/index.twig */
class __TwigTemplate_145c9c5f0325b6e9e21907b11f4d5b4ae2c7150b9009a7d3cab39776af19c954 extends \Twig\Template
{
    private $source;
    private $macros = [];

    public function __construct(Environment $env)
    {
        parent::__construct($env);

        $this->source = $this->getSourceContext();

        $this->parent = false;

        $this->blocks = [
        ];
    }

    protected function doDisplay(array $context, array $blocks = [])
    {
        $macros = $this->macros;
        // line 1
        echo "<form id=\"rteListForm\" class=\"ajax\" action=\"";
        echo PhpMyAdmin\Url::getFromRoute("/database/events");
        echo "\">
  ";
        // line 2
        echo PhpMyAdmin\Url::getHiddenInputs(($context["db"] ?? null));
        echo "

  <fieldset>
    <legend>
      ";
        // line 6
        echo _gettext("Events");
        // line 7
        echo "      ";
        echo \PhpMyAdmin\Html\MySQLDocumentation::show("EVENTS");
        echo "
    </legend>

    <div id=\"nothing2display\"";
        // line 10
        echo (( !twig_test_empty(($context["items"] ?? null))) ? (" class=\"hide\"") : (""));
        echo ">
      ";
        // line 11
        echo _gettext("There are no events to display.");
        // line 12
        echo "    </div>

    <table id=\"eventsTable\" class=\"table table-light table-striped table-hover";
        // line 14
        echo ((twig_test_empty(($context["items"] ?? null))) ? (" hide") : (""));
        echo " w-auto data\">
      <thead class=\"thead-light\">
      <tr>
        <th></th>
        <th>";
        // line 18
        echo _gettext("Name");
        echo "</th>
        <th>";
        // line 19
        echo _gettext("Status");
        echo "</th>
        <th colspan=\"3\">";
        // line 20
        echo _gettext("Action");
        echo "</th>
        <th>";
        // line 21
        echo _gettext("Type");
        echo "</th>
      </tr>
      </thead>
      <tbody>
      <tr class=\"hide\">";
        // line 25
        $context['_parent'] = $context;
        $context['_seq'] = twig_ensure_traversable(range(0, 6));
        foreach ($context['_seq'] as $context["_key"] => $context["i"]) {
            echo "<td></td>";
        }
        $_parent = $context['_parent'];
        unset($context['_seq'], $context['_iterated'], $context['_key'], $context['i'], $context['_parent'], $context['loop']);
        $context = array_intersect_key($context, $_parent) + $_parent;
        echo "</tr>

      ";
        // line 27
        $context['_parent'] = $context;
        $context['_seq'] = twig_ensure_traversable(($context["items"] ?? null));
        foreach ($context['_seq'] as $context["_key"] => $context["event"]) {
            // line 28
            echo "        <tr";
            echo ((($context["is_ajax"] ?? null)) ? (" class=\"ajaxInsert hide\"") : (""));
            echo ">
          <td>
            <input type=\"checkbox\" class=\"checkall\" name=\"item_name[]\" value=\"";
            // line 30
            echo twig_escape_filter($this->env, twig_get_attribute($this->env, $this->source, $context["event"], "name", [], "any", false, false, false, 30), "html", null, true);
            echo "\">
          </td>
          <td>
            <span class=\"drop_sql hide\">";
            // line 33
            echo twig_escape_filter($this->env, sprintf("DROP EVENT IF EXISTS %s", PhpMyAdmin\Util::backquote(twig_get_attribute($this->env, $this->source, $context["event"], "name", [], "any", false, false, false, 33))), "html", null, true);
            echo "</span>
            <strong>";
            // line 34
            echo twig_escape_filter($this->env, twig_get_attribute($this->env, $this->source, $context["event"], "name", [], "any", false, false, false, 34), "html", null, true);
            echo "</strong>
          </td>
          <td>
            ";
            // line 37
            echo twig_escape_filter($this->env, twig_get_attribute($this->env, $this->source, $context["event"], "status", [], "any", false, false, false, 37), "html", null, true);
            echo "
          </td>
          <td>
            ";
            // line 40
            if (($context["has_privilege"] ?? null)) {
                // line 41
                echo "              <a class=\"ajax edit_anchor\" href=\"";
                echo PhpMyAdmin\Url::getFromRoute("/database/events", ["db" =>                 // line 42
($context["db"] ?? null), "edit_item" => true, "item_name" => twig_get_attribute($this->env, $this->source,                 // line 44
$context["event"], "name", [], "any", false, false, false, 44)]);
                // line 45
                echo "\">
                ";
                // line 46
                echo \PhpMyAdmin\Html\Generator::getIcon("b_edit", _gettext("Edit"));
                echo "
              </a>
            ";
            } else {
                // line 49
                echo "              ";
                echo \PhpMyAdmin\Html\Generator::getIcon("bd_edit", _gettext("Edit"));
                echo "
            ";
            }
            // line 51
            echo "          </td>
          <td>
            <a class=\"ajax export_anchor\" href=\"";
            // line 53
            echo PhpMyAdmin\Url::getFromRoute("/database/events", ["db" =>             // line 54
($context["db"] ?? null), "export_item" => true, "item_name" => twig_get_attribute($this->env, $this->source,             // line 56
$context["event"], "name", [], "any", false, false, false, 56)]);
            // line 57
            echo "\">
              ";
            // line 58
            echo \PhpMyAdmin\Html\Generator::getIcon("b_export", _gettext("Export"));
            echo "
            </a>
          </td>
          <td>
            ";
            // line 62
            if (($context["has_privilege"] ?? null)) {
                // line 63
                echo "              ";
                echo PhpMyAdmin\Html\Generator::linkOrButton(PhpMyAdmin\Url::getFromRoute("/sql", ["db" =>                 // line 65
($context["db"] ?? null), "sql_query" => sprintf("DROP EVENT IF EXISTS %s", PhpMyAdmin\Util::backquote(twig_get_attribute($this->env, $this->source,                 // line 66
$context["event"], "name", [], "any", false, false, false, 66))), "goto" => PhpMyAdmin\Url::getFromRoute("/database/events", ["db" =>                 // line 67
($context["db"] ?? null)])]), \PhpMyAdmin\Html\Generator::getIcon("b_drop", _gettext("Drop")), ["class" => "ajax drop_anchor"]);
                // line 71
                echo "
            ";
            } else {
                // line 73
                echo "              ";
                echo \PhpMyAdmin\Html\Generator::getIcon("bd_drop", _gettext("Drop"));
                echo "
            ";
            }
            // line 75
            echo "          </td>
          <td>
            ";
            // line 77
            echo twig_escape_filter($this->env, twig_get_attribute($this->env, $this->source, $context["event"], "type", [], "any", false, false, false, 77), "html", null, true);
            echo "
          </td>
        </tr>
      ";
        }
        $_parent = $context['_parent'];
        unset($context['_seq'], $context['_iterated'], $context['_key'], $context['event'], $context['_parent'], $context['loop']);
        $context = array_intersect_key($context, $_parent) + $_parent;
        // line 81
        echo "      </tbody>
    </table>

    ";
        // line 84
        if ( !twig_test_empty(($context["items"] ?? null))) {
            // line 85
            echo "      <div class=\"withSelected\">
        <img class=\"selectallarrow\" src=\"";
            // line 86
            echo twig_escape_filter($this->env, ($context["select_all_arrow_src"] ?? null), "html", null, true);
            echo "\" width=\"38\" height=\"22\" alt=\"";
            echo _gettext("With selected:");
            echo "\">
        <input type=\"checkbox\" id=\"rteListForm_checkall\" class=\"checkall_box\" title=\"";
            // line 87
            echo _gettext("Check all");
            echo "\">
        <label for=\"rteListForm_checkall\">";
            // line 88
            echo _gettext("Check all");
            echo "</label>
        <em class=\"with-selected\">";
            // line 89
            echo _gettext("With selected:");
            echo "</em>

        <button class=\"btn btn-link mult_submit\" type=\"submit\" name=\"submit_mult\" value=\"export\" title=\"";
            // line 91
            echo _gettext("Export");
            echo "\">
          ";
            // line 92
            echo \PhpMyAdmin\Html\Generator::getIcon("b_export", _gettext("Export"));
            echo "
        </button>
        <button class=\"btn btn-link mult_submit\" type=\"submit\" name=\"submit_mult\" value=\"drop\" title=\"";
            // line 94
            echo _gettext("Drop");
            echo "\">
          ";
            // line 95
            echo \PhpMyAdmin\Html\Generator::getIcon("b_drop", _gettext("Drop"));
            echo "
        </button>
      </div>
    ";
        }
        // line 99
        echo "  </fieldset>
</form>

<div class=\"doubleFieldset\">
  <fieldset class=\"left\">
    <legend>";
        // line 104
        echo _pgettext(        "Create new event", "New");
        echo "</legend>
    <div class=\"wrap\">
      ";
        // line 106
        if (($context["has_privilege"] ?? null)) {
            // line 107
            echo "        <a class=\"ajax add_anchor\" href=\"";
            echo PhpMyAdmin\Url::getFromRoute("/database/events", ["db" => ($context["db"] ?? null), "add_item" => true]);
            echo "\">
          ";
            // line 108
            echo \PhpMyAdmin\Html\Generator::getIcon("b_event_add");
            echo "
          ";
            // line 109
            echo _gettext("Add event");
            // line 110
            echo "        </a>
      ";
        } else {
            // line 112
            echo "        ";
            echo \PhpMyAdmin\Html\Generator::getIcon("bd_event_add");
            echo "
        ";
            // line 113
            echo _gettext("Add event");
            // line 114
            echo "      ";
        }
        // line 115
        echo "      ";
        echo \PhpMyAdmin\Html\MySQLDocumentation::show("CREATE_EVENT");
        echo "
    </div>
  </fieldset>

  <fieldset class=\"right\">
    <legend>";
        // line 120
        echo _gettext("Event scheduler status");
        echo "</legend>
    <div class=\"wrap\">
      <div class=\"wrapper toggleAjax hide\">
        <div class=\"toggleButton\">
          <div title=\"";
        // line 124
        echo _gettext("Click to toggle");
        echo "\" class=\"toggle-container ";
        echo ((($context["scheduler_state"] ?? null)) ? ("on") : ("off"));
        echo "\">
            <img src=\"";
        // line 125
        echo twig_escape_filter($this->env, ($context["theme_image_path"] ?? null), "html", null, true);
        echo "toggle-";
        echo twig_escape_filter($this->env, ($context["text_dir"] ?? null), "html", null, true);
        echo ".png\">
            <table class=\"pma-table nospacing nopadding\">
              <tbody>
              <tr>
                <td class=\"toggleOn\">
                  <span class=\"hide\">";
        // line 131
        echo PhpMyAdmin\Url::getFromRoute("/sql", ["db" =>         // line 132
($context["db"] ?? null), "goto" => PhpMyAdmin\Url::getFromRoute("/database/events", ["db" =>         // line 133
($context["db"] ?? null)]), "sql_query" => "SET GLOBAL event_scheduler=\"ON\""]);
        // line 136
        echo "</span>
                  <div>";
        // line 137
        echo _gettext("ON");
        echo "</div>
                </td>
                <td><div>&nbsp;</div></td>
                <td class=\"toggleOff\">
                  <span class=\"hide\">";
        // line 142
        echo PhpMyAdmin\Url::getFromRoute("/sql", ["db" =>         // line 143
($context["db"] ?? null), "goto" => PhpMyAdmin\Url::getFromRoute("/database/events", ["db" =>         // line 144
($context["db"] ?? null)]), "sql_query" => "SET GLOBAL event_scheduler=\"OFF\""]);
        // line 147
        echo "</span>
                  <div>";
        // line 148
        echo _gettext("OFF");
        echo "</div>
                </td>
              </tr>
              </tbody>
            </table>
            <span class=\"hide callback\">Functions.slidingMessage(data.sql_query);</span>
            <span class=\"hide text_direction\">";
        // line 154
        echo twig_escape_filter($this->env, ($context["text_dir"] ?? null), "html", null, true);
        echo "</span>
          </div>
        </div>
      </div>
    </div>
  </fieldset>
  <div class=\"clearfloat\"></div>
</div>
";
    }

    public function getTemplateName()
    {
        return "database/events/index.twig";
    }

    public function isTraitable()
    {
        return false;
    }

    public function getDebugInfo()
    {
        return array (  360 => 154,  351 => 148,  348 => 147,  346 => 144,  345 => 143,  344 => 142,  337 => 137,  334 => 136,  332 => 133,  331 => 132,  330 => 131,  320 => 125,  314 => 124,  307 => 120,  298 => 115,  295 => 114,  293 => 113,  288 => 112,  284 => 110,  282 => 109,  278 => 108,  273 => 107,  271 => 106,  266 => 104,  259 => 99,  252 => 95,  248 => 94,  243 => 92,  239 => 91,  234 => 89,  230 => 88,  226 => 87,  220 => 86,  217 => 85,  215 => 84,  210 => 81,  200 => 77,  196 => 75,  190 => 73,  186 => 71,  184 => 67,  183 => 66,  182 => 65,  180 => 63,  178 => 62,  171 => 58,  168 => 57,  166 => 56,  165 => 54,  164 => 53,  160 => 51,  154 => 49,  148 => 46,  145 => 45,  143 => 44,  142 => 42,  140 => 41,  138 => 40,  132 => 37,  126 => 34,  122 => 33,  116 => 30,  110 => 28,  106 => 27,  94 => 25,  87 => 21,  83 => 20,  79 => 19,  75 => 18,  68 => 14,  64 => 12,  62 => 11,  58 => 10,  51 => 7,  49 => 6,  42 => 2,  37 => 1,);
    }

    public function getSourceContext()
    {
        return new Source("", "database/events/index.twig", "D:\\Xampp\\phpMyAdmin\\templates\\database\\events\\index.twig");
    }
}
