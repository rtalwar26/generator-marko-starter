// Compiled using marko@4.13.10 - DO NOT EDIT
"use strict";

var marko_template = module.exports = require("marko/src/html").t(__filename),
    marko_componentType = "/app$1.0.0/src/routes/mobile/components/app/index.marko",
    marko_component = require("./component"),
    components_helpers = require("marko/src/components/helpers"),
    marko_renderer = components_helpers.r,
    marko_defineComponent = components_helpers.c,
    marko_loadTemplate = require("marko/src/runtime/helper-loadTemplate"),
    home_page_template = marko_loadTemplate(require.resolve("../../routes/home-page")),
    marko_helpers = require("marko/src/runtime/html/helpers"),
    marko_loadTag = marko_helpers.t,
    home_page_tag = marko_loadTag(home_page_template),
    about_page_template = marko_loadTemplate(require.resolve("../../routes/about-page")),
    about_page_tag = marko_loadTag(about_page_template);

function render(input, out, __component, component, state) {
  var data = input;

  out.w("<div id=\"app\"><div class=\"statusbar\"></div><div class=\"view view-main\">");

  home_page_tag({}, out, __component, "3");

  about_page_tag({}, out, __component, "4");

  out.w("</div></div>");
}

marko_template._ = marko_renderer(render, {
    ___type: marko_componentType
  }, marko_component);

marko_template.Component = marko_defineComponent(marko_component, marko_template._);

marko_template.meta = {
    id: "/app$1.0.0/src/routes/mobile/components/app/index.marko",
    component: "./",
    tags: [
      "../../routes/home-page",
      "../../routes/about-page"
    ]
  };
