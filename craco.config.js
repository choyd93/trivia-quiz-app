const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin');

module.exports = {
    plugins: [
        {
            plugin: {
                overrideWebpackConfig: ({ webpackConfig }) => {
                    webpackConfig.resolve.plugins.push(
                        new TsconfigPathsPlugin({}),
                    );
                    return webpackConfig;
                },
            },
        },
    ],
    resolve: {
        alias: {
            process: 'process/browser',
        },
        fallback: { 'process/browser': require.resolve('process/browser') },
    },
};
