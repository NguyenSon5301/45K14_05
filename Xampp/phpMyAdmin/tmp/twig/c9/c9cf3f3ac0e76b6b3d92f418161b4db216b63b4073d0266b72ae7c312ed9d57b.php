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

/* table/tracking/index.twig */
class __TwigTemplate_d99f4380b7342d2e14ac035b2567eeac182f380d1725eceae91437434b463a7a extends \Twig\Template
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
        echo ($context["active_message"] ?? null);
        echo "

<br>

";
        // line 5
        echo ($context["action_message"] ?? null);
        echo "

";
        // line 7
        echo ($context["delete_version"] ?? null);
        echo "

";
        // line 9
        echo ($context["create_version"] ?? null);
        echo "

";
        // line 11
        echo ($context["deactivate_tracking"] ?? null);
        echo "

";
        // line 13
        echo ($context["activate_tracking"] ?? null);
        echo "

";
        // line 15
        echo ($context["message"] ?? null);
        echo "

";
        // line 17
        echo ($context["sql_dump"] ?? null);
        echo "

";
        // line 19
        echo ($context["schema_snapshot"] ?? null);
        echo "

";
        // line 21
        echo ($context["tracking_report_rows"] ?? null);
        echo "

";
        // line 23
        echo ($context["tracking_report"] ?? null);
        echo "

";
        // line 25
        echo ($context["main"] ?? null);
        echo "

<br class=\"clearfloat\">
";
    }

    public function getTemplateName()
    {
        return "table/tracking/index.twig";
    }

    public function isTraitable()
    {
        return false;
    }

    public function getDebugInfo()
    {
        return array (  94 => 25,  89 => 23,  84 => 21,  79 => 19,  74 => 17,  69 => 15,  64 => 13,  59 => 11,  54 => 9,  49 => 7,  44 => 5,  37 => 1,);
    }

    public function getSourceContext()
    {
        return new Source("", "table/tracking/index.twig", "D:\\Xampp\\phpMyAdmin\\templates\\table\\tracking\\index.twig");
    }
}
