const nextConfig = {
    images: {
        domains: ['source.unsplash.com'],
    },
    webpack(config, options) {
        config.module.rules.push({
            test: /\.(mp4|webm|ogg|mp3|wav|flac|aac)(\?.*)?$/,
            use: [
                {
                    loader: 'file-loader',
                    options: {
                        name: '[name].[ext]',
                        publicPath: '/_next/static/videos/',
                        outputPath: 'static/videos/'
                    }
                }
            ]
        });
        return config;
    }
};

module.exports = nextConfig;
