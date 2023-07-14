const path = require('path');
module.exports = {
  entry: './src/index.js', // Specify the entry point of your application
  output: {
    filename: 'bundle.js', // Specify the output bundle file
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
          },
        },
      },

      
      // Additional rules for other file types if needed
    ],
  },
  resolve: {
    modules: [path.resolve(__dirname, 'src'), 'node_modules'],
    fallback: {
        assert: require.resolve('assert'),
        crypto: require.resolve('crypto-browserify'),
        http: require.resolve('stream-http'),
        https: require.resolve('https-browserify'),
        os: require.resolve('os-browserify/browser'),
        stream: require.resolve('stream-browserify'),
        querystring: require.resolve("querystring-es3"),
        constants: require.resolve("constants-browserify"),
        fs: false,
        net: false,
        zlib: false,
        
    }
},
target: "webworker",
externals: [
  "child_process",
  "dns",
  "fs",
  "net",
  "tls"
],

};