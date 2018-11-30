// Compiled using marko@4.13.10 - DO NOT EDIT
"use strict";

var marko_template = module.exports = require("marko/src/html").t(__filename),
    marko_componentType = "/app$1.0.0/src/routes/mobile/routes/home-page/index.marko",
    components_helpers = require("marko/src/components/helpers"),
    marko_renderer = components_helpers.r,
    marko_defineComponent = components_helpers.c;

function render(input, out, __component, component, state) {
  var data = input;

  out.w("<div id=\"home\" data-name=\"home\" class=\"page page-current\"><div class=\"navbar\"><div class=\"navbar-inner sliding\"><div class=\"title\">Home </div></div></div><div class=\"toolbar\"><div class=\"toolbar-inner\"><a href=\"#\" class=\"link\">Link 1</a><a href=\"#\" class=\"link\">Link 2</a></div></div><div class=\"page-content\"><p>Page content goes here</p><a href=\"/about\">About app</a></div></div>");
}

marko_template._ = marko_renderer(render, {
    ___implicit: true,
    ___type: marko_componentType
  });

marko_template.Component = marko_defineComponent({}, marko_template._);

marko_template.meta = {
    id: "/app$1.0.0/src/routes/mobile/routes/home-page/index.marko"
  };
