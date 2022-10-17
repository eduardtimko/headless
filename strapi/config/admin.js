module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '5f1fea5f9155c8636710a3b1e8ca0611'),
  },
  apiToken: {
    salt: env('API_TOKEN_SALT', 'fe5VHj/Vh8b2RWEIF8rdNw==')
  }
});
