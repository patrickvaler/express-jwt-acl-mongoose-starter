/**
 * Default config for all environment types
 * @type {{db: string, apiPort: number}}
 */
const defaultConfig = {
  db: 'mongodb://localhost:27017/express-jwt-acl-mongoose-starter',
  apiPort: 3000,
  secret:
    '5QdYLbXsONJJDkoEyQPk3aR7vng721veBww9pPglW1tRzp4nnUz3f4AewUPZl9YyyK590vdErx2KBfTu66GOrUOZs6CO9XzMAmQ8hddNqA7oVuV0cUuvEl7Hskqbor',
  jwt: {
    session: false,
    secret:
      '5QdYLbXsONJJDkoEyQPk3aR7vng721veBww9pPglW1tRzp4nnUz3f4AewUPZl9YyyK590vdErx2KBfTu66GOrUOZs6CO9XzMAmQ8hddNqA7oVuV0cUuvEl7Hskqbor'
  }
};

/**
 * Enviroment specific configuration
 * @type {{prod: {}, dev: {}, test: {apiPort: number}}}
 */
const envConfig = {
  prod: {},
  dev: {},
  test: {
    apiPort: 3100
  }
};

/**
 * Loads config based on the current environment
 * @returns {*}
 */
function loadConfig() {
  const env = process.env.NODE_ENV || 'dev';

  if (!envConfig[env]) {
    throw new Error(
      `Environment config for environment '${env}' not found. process.env.NODE_ENV must be one of '${Object.keys(
        envConfig
      )}'`
    );
  }

  console.log('[INFO] config loaded for environment: ', env);

  // merge default config with environment specific config
  return Object.assign({}, defaultConfig, envConfig[env]);
}

export default loadConfig();
