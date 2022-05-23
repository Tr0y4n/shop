const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const serverConfig = {
 entry: path.resolve(__dirname, '..', './server/index.js'),
 target: 'node',
 module: {
  rules: [
   {
    test: /\.(ts|js)x?$/,
    exclude: /node_modules/,
    use: [
     {
      loader: 'babel-loader',
     },
    ],
   },
  ],
 },
 output: {
  path: path.resolve(__dirname, '..', 'dist'),
  filename: 'index.js',
  clean: true,
 },
 //…
};

const clientConfig = {
 entry: path.resolve(__dirname, '..', 'front/index.js'),
 target: 'web', // <=== can be omitted as default is 'web'
 resolve: {
  extensions: ['.tsx', '.ts', '.js', '.jsx'],
 },
 module: {
  rules: [
   {
    test: /\.html$/,
    loader: 'html-loader',
   },
   {
    test: /\.(ts|js)x?$/,
    exclude: /node_modules/,
    use: [
     {
      loader: 'babel-loader',
     },
    ],
    options: {
        ignore: ["./node_modules/mapbox-gl/dist/mapbox-gl.js"],
    }
   },
   {
    test: /\.css$/i,
    use: ['style-loader', 'css-loader'],
   },
   {
    test: /\.s[ac]ss$/i,
    use: [
     // Creates `style` nodes from JS strings
     'style-loader',
     // Translates CSS into CommonJS
     'css-loader',
     // Compiles Sass to CSS
     'sass-loader',
    ],
   },
   {
    test: /\.(?:ico|gif|png|jpg|jpeg)$/i,
    type: 'asset/resource',
    generator: {
     filename: 'static/media/[name][hash][ext]',
    },
   },
   {
    test: /\.(woff(2)?|eot|ttf|otf|svg|)$/,
    type: 'asset/inline',
   },
  ],
 },
 output: {
  path: path.resolve(__dirname, '..', 'dist'),
  filename: 'bundle.js',
 },
 plugins: [
  new HtmlWebpackPlugin({
   template: path.resolve(__dirname, '../public/index.html'),
  }),
 ],
 //…
};

module.exports = [serverConfig, clientConfig];
