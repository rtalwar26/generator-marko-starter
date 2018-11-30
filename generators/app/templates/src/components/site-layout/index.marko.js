// Compiled using marko@4.13.10 - DO NOT EDIT
"use strict";

var marko_template = module.exports = require("marko/src/html").t(__filename),
    marko_componentType = "/app$1.0.0/src/components/site-layout/index.marko",
    components_helpers = require("marko/src/components/helpers"),
    marko_renderer = components_helpers.r,
    marko_defineComponent = components_helpers.c,
    marko_helpers = require("marko/src/runtime/html/helpers"),
    marko_loadTag = marko_helpers.t,
    include_tag = marko_loadTag(require("marko/src/taglibs/core/include-tag")),
    lasso_head_tag = marko_loadTag(require("lasso/taglib/head-tag")),
    component_globals_tag = marko_loadTag(require("marko/src/components/taglib/component-globals-tag")),
    browser_refresh_tag = marko_loadTag(require("browser-refresh-taglib/refresh-tag")),
    lasso_body_tag = marko_loadTag(require("lasso/taglib/body-tag")),
    init_components_tag = marko_loadTag(require("marko/src/components/taglib/init-components-tag")),
    await_reorderer_tag = marko_loadTag(require("marko/src/taglibs/async/await-reorderer-tag"));

function render(input, out, __component, component, state) {
  var data = input;

  out.w("<!DOCTYPE html><html lang=\"en-US\"><head><meta charset=\"utf-8\"><meta name=\"viewport\" content=\"width=device-width, initial-scale=1\"><title>");

  include_tag({
      _target: input.title
    }, out, __component, "5");

  out.w("</title>");

  lasso_head_tag({}, out, __component, "6");

  out.w("</head><body>");

  component_globals_tag({}, out);

  include_tag({
      _target: input.content
    }, out, __component, "8");

  browser_refresh_tag({}, out, __component, "9");

  lasso_body_tag({}, out, __component, "10");

  init_components_tag({}, out);

  await_reorderer_tag({}, out, __component, "11");

  out.w("</body></html>");
}

marko_template._ = marko_renderer(render, {
    ___implicit: true,
    ___type: marko_componentType
  });

marko_template.Component = marko_defineComponent({}, marko_template._);

marko_template.meta = {
    deps: [
      "package: ./browser.json"
    ],
    id: "/app$1.0.0/src/components/site-layout/index.marko",
    tags: [
      "marko/src/taglibs/core/include-tag",
      "lasso/taglib/head-tag",
      "marko/src/components/taglib/component-globals-tag",
      "browser-refresh-taglib/refresh-tag",
      "lasso/taglib/body-tag",
      "marko/src/components/taglib/init-components-tag",
      "marko/src/taglibs/async/await-reorderer-tag"
    ]
  };
