import fields from './fields';

module.exports = () => configContext => ({
  extensions: {
    'ucbnh-objectexit': {
      fields: fields(configContext),
    },
  },
});
