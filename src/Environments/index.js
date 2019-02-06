const merge = require('lodash.merge');

const config = {
    all: {
        env: process.env.NODE_ENV || 'development',
        isDev: process.env.NODE_ENV !== 'production',
        basename: process.env.PUBLIC_PATH,
        isBrowser: typeof window !== 'undefined'
    },
    test: {},
    production: {
        theGuardian: {
            apiKey: '86b34c36-8141-41c1-abe7-f7a0ef06099a',
            search: 'https://content.guardianapis.com/search',
            article: 'https://content.guardianapis.com'
        }
    },
    development: {
        theGuardian: {
            apiKey: '86b34c36-8141-41c1-abe7-f7a0ef06099a',
            search: 'https://content.guardianapis.com/search',
            article: 'https://content.guardianapis.com'
        }
    }
};

const environment = merge(config.all, config[config.all.env]);

module.exports = {
    environment
};
