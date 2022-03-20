
const PORT = 4000;
const NODE_ENV = "development";

const baseConfig = {
  app: {
    port: PORT,
  },
  client: {
    url: "http://localhost:3000",
  },
};

const config = {
  development: {
    ...baseConfig,
  },
  test: {
    ...baseConfig,
  },
  production: {
    ...baseConfig,
  },
};

module.exports = {
  config: config[NODE_ENV]
};
