Structure
=========
* `Gruntfile.js` contains the build configuration
* `src/` contains the sources

Preparation
===========
1. Install [Node.js](https://nodejs.org/en/download/)  v6.9.4+
2. Make sure you have grunt and bower installed

    ```sudo npm install -g grunt```

    ```sudo npm install -g bower```


3. Install the npm dependencies: `npm install`
4. Install bower dependencies: `bower install`

Build tasks
===========


Running application
----------------------

* `grunt http-server:prod` will run the application in production mode
    * it loads up _http://localhost:8080 in a browser

* `grunt http-server:dev` will run the application in development execution.
    * it loads up _http://localhost:8282 in a browser
    * files in the /web/src directory are served
    * livereload

livereload
-----
This task watches if there are any changes in the files in the following directories: `'src/**/*.js', 'src/css/**/*.css', 'src/views/**/*.html', 'src/index.html`. If there is a change, the whole application reloads.


jshint
------
`grunt jshint` will run JSHint on all JavaScript sources.

`grunt jshint:ci` will run JSHint on all JavaScript sources and write an XML file with the results.


build
----------------------
`grunt build` will make a production build of the admin application at `/dist`.

Described in details, `grunt build` runs these tasks in this order:
1. `grunt clean:dist` - cleans the everything from the dist directory before building the app.
2. `grunt copy` - copies all files from web/src/resources and /web/src/index.html in web/dist and all fonts from src/lib/bootstrap/fonts in dist/fonts
3. `grunt cssmin:build` - the CSS is minified (using [cssmin](https://github.com/gruntjs/grunt-contrib-cssmin)).
4. `grunt babel` - runs [babel](http://babeljs.io/) - an ECMAScript 6 to ECMAScript 5 compiler which allows ES6 features to be used in production.
5. `grunt build-js` - this task consists of a few others:
    * `grunt ngtemplates:views` - minifies and combines all html templates from web/src/views to web/dist/src/es5-app/src/templates.js
    * `grunt uglify:lib`, `grunt uglify:app`, `grunt uglify:module` - the JS is minified (using [uglifyjs](https://github.com/mishoo/UglifyJS)).
    * `grunt clean:postBuildJs` - cleans src/js/templates.js
6. `grunt processhtml:dist` - processes html files at build time to modify them depending on the release environment
