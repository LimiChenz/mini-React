module.exports = {
    entry: "./main.js",
    mode: 'development',
    module: {
      rules: [
        {
          test: /\.js|jsx$/,
          use: {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-env'],
              plugins: [['@babel/plugin-transform-react-jsx',{pragma: 'Zero.createElement'}]],
            },
          },
        },
      ],
    },
}