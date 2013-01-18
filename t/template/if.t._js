#!/usr/bin/env node

var context, fs = require('fs');
require('./proof')(1, function (async) {
  async(function (stencil, resolver) {
    context = stencil.create(__dirname + '/', resolver.create());
    context.generate('fixtures/if.stencil', async());
  }, function (actual, fixture) {
    fixture('fixtures/if.xml', async());
  }, function (expected, actual, ok, compare) {
    ok(compare(actual.node, expected), 'called');
  });
});

// vim: set ft=javascript: