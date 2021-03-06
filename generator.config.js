module.exports = {
  devDependencies: {
    "@babel/core": "^7.8.4",
    "@babel/preset-env": "^7.8.4",
    "babel-loader": "^8.0.6",
    "browser-sync": "^2.26.7",
    "del": "^5.1.0",
    "gulp": "^4.0.2",
    "gulp-autoprefixer": "^7.0.1",
    "gulp-clean-css": "^4.2.0",
    "gulp-imagemin": "^7.1.0",
    "gulp-plumber": "^1.2.1",
    "gulp-pug": "^4.0.1",
    "gulp-rename": "^2.0.0",
    "gulp-sass": "^4.0.2",
    "gulp-svg-sprite": "^1.5.0",
    "gulp-uglify": "^3.0.2",
    "gulp-zip": "^5.0.1",
    "gulp.spritesmith": "^6.11.0",
    "merge-stream": "^2.0.0",
    "node-sass": "^4.13.1",
    "through2": "^3.0.1",
    "vinyl-buffer": "^1.0.1",
    "webpack-stream": "^5.2.1",
  },
  scripts: {
    "clean": "gulp clean",
    "build": "gulp build --mode=development",
    "prod": "gulp build --mode=production",
    "images": "gulp images",
    "sprites": "gulp sprites",
    "zip": "gulp zip",
    "watch": "gulp watch --mode=development"
  },
  dependencies: {
    "bootstrap": "^4.4.1",
    "jquery": "^3.4.1",
  },
  babel: {
    "presets": [
      "@babel/preset-env"
    ]
  }
}