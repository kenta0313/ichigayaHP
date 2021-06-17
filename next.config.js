module.exports = {
    webpack: (config) => {
      config.module.rules.push({
            test: /\.(png|jpe?g|gif|svg|woff|woff2|ttf|eot|ico)$/,
            loader: 'file-loader?name=assets/[name].[hash].[ext]',
            options: {
                name: '[path][name].[ext]',//
              },
      })

      return config
    },
  }