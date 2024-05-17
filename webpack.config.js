const path = require('path');

module.exports = {
  entry: './src/index.js',
  mode:'development',
  output: {
    filename: 'main.js',
    // eslint-disable-next-line no-undef
    path: path.resolve(__dirname, 'dist'),
    clean:true
  },
  module: {
     
    rules: [
      {
        test: /\.(js|jsx|ts|tsx)$/,
        exclude: /node_modules/,
        use: 'babel-loader'
      },
    
    ]
  }
    
  
};