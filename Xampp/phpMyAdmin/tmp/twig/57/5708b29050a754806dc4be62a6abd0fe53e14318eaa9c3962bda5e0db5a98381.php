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

/* server/export/index.twig */
class __TwigTemplate_db0a46374cc2c097d10344f329463f475f9338afa063feef322bbb2c38f7ca21 extends \Twig\Template
{
    private $source;
    private $macros = [];

    public function __construct(Environment $env)
    {
        parent::__construct($env);

        $this->source = $this->getSourceContext();

        $this->blocks = [
            'title' => [$this, 'block_title'],
            'selection_options' => [$this, 'block_selection_options'],
        ];
    }

    protected function doGetParent(array $context)
    {
        // line 1
        return "export.twig";
    }

    protected function doDisplay(array $context, array $blocks = [])
    {
        $macros = $this->macros;
        // line 31
        ob_start(function () { return ''; });
        // line 32
        echo "  ";
        echo _gettext("@SERVER@ will become the server name.");
        $context["filename_hint"] = ('' === $tmp = ob_get_clean()) ? '' : new Markup($tmp, $this->env->getCharset());
        // line 1
        $this->parent = $this->loadTemplate("export.twig", "server/export/index.twig", 1);
        $this->parent->display($context, array_merge($this->blocks, $blocks));
    }

    // line 3
    public function block_title($context, array $blocks = [])
    {
        $macros = $this->macros;
        echo _gettext("Exporting databases from the current server");
    }

    // line 5
    public function block_selection_options($context, array $blocks = [])
    {
        $macros = $this->macros;
        // line 6
        echo "  <div class=\"exportoptions\" id=\"databases_and_tables\">
    <h3>";
        // line 7
        echo _gettext("Databases:");
        echo "</h3>

    <div>
      <p>
        <a href=\"#\" id=\"db_select_all\">
          ";
        // line 12
        echo _gettext("Select all");
        // line 13
        echo "        </a>
        /
        <a href=\"#\" id=\"db_unselect_all\">
          ";
        // line 16
        echo _gettext("Unselect all");
        // line 17
        echo "        </a>
      </p>

      <select name=\"db_select[]\" id=\"db_select\" size=\"10\" multiple>
        ";
        // line 21
        $context['_parent'] = $context;
        $context['_seq'] = twig_ensure_traversable(($context["databases"] ?? null));
        foreach ($context['_seq'] as $context["_key"] => $context["database"]) {
            // line 22
            echo "          <option value=\"";
            echo twig_escape_filter($this->env, twig_get_attribute($this->env, $this->source, $context["database"], "name", [], "any", false, false, false, 22), "html", null, true);
            echo "\"";
            echo ((twig_get_attribute($this->env, $this->source, $context["database"], "is_selected", [], "any", false, false, false, 22)) ? (" selected") : (""));
            echo ">
            ";
            // line 23
            echo twig_escape_filter($this->env, twig_get_attribute($this->env, $this->source, $context["database"], "name", [], "any", false, false, false, 23), "html", null, true);
            echo "
          </option>
        ";
        }
        $_parent = $context['_parent'];
        unset($context['_seq'], $context['_iterated'], $context['_key'], $context['database'], $context['_parent'], $context['loop']);
        $context = array_intersect_key($context, $_parent) + $_parent;
        // line 26
        echo "      </select>
    </div>
  </div>
";
    }

    public function getTemplateName()
    {
        return "server/export/index.twig";
    }

    public function isTraitable()
    {
        return false;
    }

    public function getDebugInfo()
    {
        return array (  111 => 26,  102 => 23,  95 => 22,  91 => 21,  85 => 17,  83 => 16,  78 => 13,  76 => 12,  68 => 7,  65 => 6,  61 => 5,  54 => 3,  49 => 1,  45 => 32,  43 => 31,  36 => 1,);
    }

    public function getSourceContext()
    {
        return new Source("", "server/export/index.twig", "D:\\Xampp\\phpMyAdmin\\templates\\server\\export\\index.twig");
    }
}
