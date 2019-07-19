module.exports = api => {
  api.cache(false);
  return {
    presets: ['@babel/env', '@babel/react'],
  };
};

