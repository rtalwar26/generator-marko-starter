// Compiled using marko@4.13.5 - DO NOT EDIT
"use strict";

var marko_template = module.exports = require("marko/src/html").t(__filename),
    marko_componentType = "/ustadji$1.0.0/src/components/a-rel/component-browser",
    marko_component = require("./component"),
    components_helpers = require("marko/src/components/helpers"),
    marko_renderer = components_helpers.r,
    marko_helpers = require("marko/src/runtime/html/helpers"),
    marko_loadTag = marko_helpers.t,
    include_tag = marko_loadTag(require("marko/src/taglibs/core/include-tag")),
    marko_escapeXmlAttr = marko_helpers.xa;

function render(input, out, __component, component, state) {
  var data = input;

  out.w("<a class=\"" +
    marko_escapeXmlAttr(input.class) +
    "\" href=\"" +
    marko_escapeXmlAttr(input.href) +
    "\">");

  include_tag({
      _target: input.content
    }, out, __component, "1");

  out.w("</a>");
}

marko_template._ = marko_renderer(render, {
    ___split: true,
    ___type: marko_componentType
  }, marko_component);

marko_template.meta = {
    id: "/ustadji$1.0.0/src/components/a-rel/component-browser",
    component: "./component-browser",
    deps: [
      "marko/src/components"
    ],
    tags: [
      "marko/src/taglibs/core/include-tag"
    ]
  };
