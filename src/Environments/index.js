const merge = require('lodash.merge');

const config = {
    all: {
        env: process.env.NODE_ENV || 'development',
        isDev: process.env.NODE_ENV !== 'production',
        basename: process.env.PUBLIC_PATH,
        isBrowser: typeof window !== 'undefined'
    },
    test: {},
    production: {},
    development: {
        theGuardian: {
            apiKey: '0d160d0f-71cd-48b0-801f-2fc9cabd2157',
            search: 'https://content.guardianapis.com/search',
            article: 'https://content.guardianapis.com'
        }
    }
};

const environment = merge(config.all, config[config.all.env]);

module.exports = {
    environment
};
