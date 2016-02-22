/*!
 * base-is-enabled <https://github.com/node-base/base-is-enabled>
 *
 * Copyright (c) 2016, Brian Woodward.
 * Licensed under the MIT License.
 */

'use strict';

var utils = require('./utils');

/**
 * Create a plugin to add `isEnabled` to an application.
 *
 * @param  {Object} `options` Options to use to when checking for falsey values.
 * @return {Function} Plugin function to pass into `app.use`
 * @api public
 */

module.exports = function isEnabled(options) {
  var opts = utils.extend({prop: 'options'}, options);
  var prop = opts.prop;

  return function plugin(app) {
    if (typeof app.isEnabled === 'function') {
      return;
    }
    this.define('isEnabled', function(key) {
      return utils.isEnabled(this[prop], key, opts);
    })
  };
};

