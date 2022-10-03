'use strict';

/**
 * cross-sell service.
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::cross-sell.cross-sell');
