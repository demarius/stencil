#!/usr/bin/env node

var context, fs = require('fs');
require('./proof')(3, function (async, ok, compare) {

  async(function (stencil, resolver) {
    context = stencil.create(__dirname + '/', resolver.create());
    context.generate('fixtures/directive.stencil', { greeting: "Hello, World!" }, async());
  },
  
  function (actual, fixture) {
    fixture('fixtures/directive.xml', async());
  },
  
  function (expected, actual, ok, compare) {
    ok(compare(actual.document, expected), 'generate');
    context.regenerate(actual, { greeting: "Hello, World!" }, async());
  }, 

  function (actual, expected, ok, compare) {
    ok(compare(actual.document, expected), 'regenerate');
    context.reconstitute(actual.document, async());
  },
  
  function (actual) {
    context.regenerate(actual, { greeting: "Hello, World!" }, async());
  },

  function (actual, expected, ok, compare) {
    ok(compare(actual.document, expected), 'reconstitute');
  });
});