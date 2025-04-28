const environment = process.env.REACT_APP_ENVIRONMENT

const environmentValues = {
  dev: 'dev',
  staging: 'staging',
  production: 'production'
}

const config = {
  environment,
  api: {
    URL: environment === environmentValues.dev
      ? process.env.REACT_APP_DEV_API_PATH
      : environment === environmentValues.staging
        ? process.env.REACT_APP_STAGING_API_PATH
        : process.env.REACT_APP_PRODUCTION_API_PATH
  },
  websocket: {
    URL: environment === environmentValues.dev
      ? process.env.REACT_APP_DEV_WEBSOCKET_API_PATH
      : environment === environmentValues.staging
        ? process.env.REACT_APP_STAGING_WEBSOCKET_API_PATH
        : process.env.REACT_APP_PRODUCTION_WEBSOCKET_API_PATH
  }
}

export default config
