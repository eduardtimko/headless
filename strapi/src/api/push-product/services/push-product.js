'use strict';

/**
 * push-product service.
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::push-product.push-product');
