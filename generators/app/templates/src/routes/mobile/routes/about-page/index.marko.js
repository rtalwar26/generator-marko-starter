// Compiled using marko@4.13.10 - DO NOT EDIT
"use strict";

var marko_template = module.exports = require("marko/src/html").t(__filename),
    marko_componentType = "/app$1.0.0/src/routes/mobile/routes/about-page/index.marko",
    marko_component = require("./component"),
    components_helpers = require("marko/src/components/helpers"),
    marko_renderer = components_helpers.r,
    marko_defineComponent = components_helpers.c;

function render(input, out, __component, component, state) {
  var data = input;

  out.w("<div id=\"about\" data-name=\"about\" class=\"page\"><div class=\"navbar\"><div class=\"navbar-inner sliding\"><div class=\"left\"><a class=\"link move-back\"><i class=\"icon icon-back\"></i><span>Back</span></a></div><div class=\"title\">About</div></div></div><div class=\"toolbar\"><div class=\"toolbar-inner\"><a href=\"#\" class=\"link\">Link 3</a><a href=\"#\" class=\"link\">Link 4</a></div></div><div class=\"page-content\"><p>Page content goes here</p><a href=\"/home\">home app</a></div> </div>");
}

marko_template._ = marko_renderer(render, {
    ___type: marko_componentType
  }, marko_component);

marko_template.Component = marko_defineComponent(marko_component, marko_template._);

marko_template.meta = {
    id: "/app$1.0.0/src/routes/mobile/routes/about-page/index.marko",
    component: "./"
  };
