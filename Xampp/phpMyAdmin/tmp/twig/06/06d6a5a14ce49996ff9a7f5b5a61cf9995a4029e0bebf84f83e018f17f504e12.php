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

/* create_tracking_version.twig */
class __TwigTemplate_c2aae71e75d8a682724f1904aa192c42ab992846a49f4a671665bba6bf5a8ffc extends \Twig\Template
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
        echo "<div id=\"div_create_version\">
    <form method=\"post\" action=\"";
        // line 2
        echo PhpMyAdmin\Url::getFromRoute(($context["route"] ?? null), ($context["url_params"] ?? null));
        echo "\">
        ";
        // line 3
        echo PhpMyAdmin\Url::getHiddenInputs(($context["db"] ?? null));
        echo "
        ";
        // line 4
        $context['_parent'] = $context;
        $context['_seq'] = twig_ensure_traversable(($context["selected"] ?? null));
        foreach ($context['_seq'] as $context["_key"] => $context["selected_table"]) {
            // line 5
            echo "            <input type=\"hidden\" name=\"selected[]\" value=\"";
            echo twig_escape_filter($this->env, $context["selected_table"], "html", null, true);
            echo "\">
        ";
        }
        $_parent = $context['_parent'];
        unset($context['_seq'], $context['_iterated'], $context['_key'], $context['selected_table'], $context['_parent'], $context['loop']);
        $context = array_intersect_key($context, $_parent) + $_parent;
        // line 7
        echo "
        <fieldset>
            <legend>
                ";
        // line 10
        if ((twig_length_filter($this->env, ($context["selected"] ?? null)) == 1)) {
            // line 11
            echo "                    ";
            echo twig_escape_filter($this->env, sprintf(_gettext("Create version %1\$s of %2\$s"), (            // line 12
($context["last_version"] ?? null) + 1), ((            // line 13
($context["db"] ?? null) . ".") . (($__internal_f607aeef2c31a95a7bf963452dff024ffaeb6aafbe4603f9ca3bec57be8633f4 = ($context["selected"] ?? null)) && is_array($__internal_f607aeef2c31a95a7bf963452dff024ffaeb6aafbe4603f9ca3bec57be8633f4) || $__internal_f607aeef2c31a95a7bf963452dff024ffaeb6aafbe4603f9ca3bec57be8633f4 instanceof ArrayAccess ? ($__internal_f607aeef2c31a95a7bf963452dff024ffaeb6aafbe4603f9ca3bec57be8633f4[0] ?? null) : null))), "html", null, true);
            // line 14
            echo "
                ";
        } else {
            // line 16
            echo "                    ";
            echo twig_escape_filter($this->env, sprintf(_gettext("Create version %1\$s"), (($context["last_version"] ?? null) + 1)), "html", null, true);
            echo "
                ";
        }
        // line 18
        echo "            </legend>
            <input type=\"hidden\" name=\"version\" value=\"";
        // line 19
        echo twig_escape_filter($this->env, (($context["last_version"] ?? null) + 1), "html", null, true);
        echo "\">
            <p>";
        // line 20
        echo _gettext("Track these data definition statements:");
        echo "</p>

            ";
        // line 22
        if (((($context["type"] ?? null) == "both") || (($context["type"] ?? null) == "table"))) {
            // line 23
            echo "                <input type=\"checkbox\" name=\"alter_table\" value=\"true\"";
            // line 24
            echo ((twig_in_filter("ALTER TABLE", ($context["default_statements"] ?? null))) ? (" checked=\"checked\"") : (""));
            echo ">
                ALTER TABLE<br>
                <input type=\"checkbox\" name=\"rename_table\" value=\"true\"";
            // line 27
            echo ((twig_in_filter("RENAME TABLE", ($context["default_statements"] ?? null))) ? (" checked=\"checked\"") : (""));
            echo ">
                RENAME TABLE<br>
                <input type=\"checkbox\" name=\"create_table\" value=\"true\"";
            // line 30
            echo ((twig_in_filter("CREATE TABLE", ($context["default_statements"] ?? null))) ? (" checked=\"checked\"") : (""));
            echo ">
                CREATE TABLE<br>
                <input type=\"checkbox\" name=\"drop_table\" value=\"true\"";
            // line 33
            echo ((twig_in_filter("DROP TABLE", ($context["default_statements"] ?? null))) ? (" checked=\"checked\"") : (""));
            echo ">
                DROP TABLE<br>
            ";
        }
        // line 36
        echo "            ";
        if ((($context["type"] ?? null) == "both")) {
            // line 37
            echo "                <br>
            ";
        }
        // line 39
        echo "            ";
        if (((($context["type"] ?? null) == "both") || (($context["type"] ?? null) == "view"))) {
            // line 40
            echo "                <input type=\"checkbox\" name=\"alter_view\" value=\"true\"";
            // line 41
            echo ((twig_in_filter("ALTER VIEW", ($context["default_statements"] ?? null))) ? (" checked=\"checked\"") : (""));
            echo ">
                ALTER VIEW<br>
                <input type=\"checkbox\" name=\"create_view\" value=\"true\"";
            // line 44
            echo ((twig_in_filter("CREATE VIEW", ($context["default_statements"] ?? null))) ? (" checked=\"checked\"") : (""));
            echo ">
                CREATE VIEW<br>
                <input type=\"checkbox\" name=\"drop_view\" value=\"true\"";
            // line 47
            echo ((twig_in_filter("DROP VIEW", ($context["default_statements"] ?? null))) ? (" checked=\"checked\"") : (""));
            echo ">
                DROP VIEW<br>
            ";
        }
        // line 50
        echo "            <br>

            <input type=\"checkbox\" name=\"create_index\" value=\"true\"";
        // line 53
        echo ((twig_in_filter("CREATE INDEX", ($context["default_statements"] ?? null))) ? (" checked=\"checked\"") : (""));
        echo ">
            CREATE INDEX<br>
            <input type=\"checkbox\" name=\"drop_index\" value=\"true\"";
        // line 56
        echo ((twig_in_filter("DROP INDEX", ($context["default_statements"] ?? null))) ? (" checked=\"checked\"") : (""));
        echo ">
            DROP INDEX<br>

            <p>";
        // line 59
        echo _gettext("Track these data manipulation statements:");
        echo "</p>
            <input type=\"checkbox\" name=\"insert\" value=\"true\"";
        // line 61
        echo ((twig_in_filter("INSERT", ($context["default_statements"] ?? null))) ? (" checked=\"checked\"") : (""));
        echo ">
            INSERT<br>
            <input type=\"checkbox\" name=\"update\" value=\"true\"";
        // line 64
        echo ((twig_in_filter("UPDATE", ($context["default_statements"] ?? null))) ? (" checked=\"checked\"") : (""));
        echo ">
            UPDATE<br>
            <input type=\"checkbox\" name=\"delete\" value=\"true\"";
        // line 67
        echo ((twig_in_filter("DELETE", ($context["default_statements"] ?? null))) ? (" checked=\"checked\"") : (""));
        echo ">
            DELETE<br>
            <input type=\"checkbox\" name=\"truncate\" value=\"true\"";
        // line 70
        echo ((twig_in_filter("TRUNCATE", ($context["default_statements"] ?? null))) ? (" checked=\"checked\"") : (""));
        echo ">
            TRUNCATE<br>
        </fieldset>

        <fieldset class=\"tblFooters\">
            <input type=\"hidden\" name=\"submit_create_version\" value=\"1\">
            <input class=\"btn btn-primary\" type=\"submit\" value=\"";
        // line 76
        echo _gettext("Create version");
        echo "\">
        </fieldset>
    </form>
</div>
";
    }

    public function getTemplateName()
    {
        return "create_tracking_version.twig";
    }

    public function isTraitable()
    {
        return false;
    }

    public function getDebugInfo()
    {
        return array (  191 => 76,  182 => 70,  177 => 67,  172 => 64,  167 => 61,  163 => 59,  157 => 56,  152 => 53,  148 => 50,  142 => 47,  137 => 44,  132 => 41,  130 => 40,  127 => 39,  123 => 37,  120 => 36,  114 => 33,  109 => 30,  104 => 27,  99 => 24,  97 => 23,  95 => 22,  90 => 20,  86 => 19,  83 => 18,  77 => 16,  73 => 14,  71 => 13,  70 => 12,  68 => 11,  66 => 10,  61 => 7,  52 => 5,  48 => 4,  44 => 3,  40 => 2,  37 => 1,);
    }

    public function getSourceContext()
    {
        return new Source("", "create_tracking_version.twig", "D:\\Xampp\\phpMyAdmin\\templates\\create_tracking_version.twig");
    }
}
