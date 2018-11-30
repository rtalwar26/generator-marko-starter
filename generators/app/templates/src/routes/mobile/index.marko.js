// Compiled using marko@4.13.10 - DO NOT EDIT
"use strict";

var marko_template = module.exports = require("marko/src/html").t(__filename),
    marko_componentType = "/app$1.0.0/src/routes/mobile/index.marko",
    components_helpers = require("marko/src/components/helpers"),
    marko_renderer = components_helpers.r,
    marko_defineComponent = components_helpers.c,
    hasRenderBodyKey = Symbol.for("hasRenderBody"),
    marko_loadTemplate = require("marko/src/runtime/helper-loadTemplate"),
    app_template = marko_loadTemplate(require.resolve("./components/app")),
    marko_helpers = require("marko/src/runtime/html/helpers"),
    marko_loadTag = marko_helpers.t,
    app_tag = marko_loadTag(app_template),
    mobile_layout_template = marko_loadTemplate(require.resolve("../../components/mobile-layout")),
    mobile_layout_tag = marko_loadTag(mobile_layout_template);

function render(input, out, __component, component, state) {
  var data = input;

  mobile_layout_tag({
      title: {
          renderBody: function renderBody(out) {
            out.w("Mobile App");
          }
        },
      content: {
          renderBody: function renderBody(out) {
            app_tag({
                renderBody: function renderBody(out) {
                  out.w(" ");
                }
              }, out, __component, "3");
          }
        },
      [hasRenderBodyKey]: true
    }, out, __component, "0");
}

marko_template._ = marko_renderer(render, {
    ___implicit: true,
    ___type: marko_componentType
  });

marko_template.Component = marko_defineComponent({}, marko_template._);

marko_template.meta = {
    id: "/app$1.0.0/src/routes/mobile/index.marko",
    tags: [
      "./components/app",
      "../../components/mobile-layout"
    ]
  };
