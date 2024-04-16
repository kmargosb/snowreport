const nextConfig = {
    images: {
        remotePatterns: [
            {
              protocol: 'https',
              hostname: 'images.unsplash.com',
              port: '',
              pathname: '**',
            },
            {
                protocol: 'https',
                hostname: 'lh3.googleusercontent.com',
                port: '',
                pathname: '**',
            },
            {
                protocol: 'http',
                hostname: 'openweathermap.org',
                port: '',
                pathname: '**',
            },
            {
                protocol: 'https',
                hostname: 'motor.elpais.com',
                port: '',
                pathname: '**'
            }
          ],
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
