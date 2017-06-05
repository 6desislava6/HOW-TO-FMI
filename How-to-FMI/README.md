Structure
=========
* `Gruntfile.js` contains the build configuration
* `app/` contains the sources

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
* `grunt` or

* `grunt http-server:prod` or

* `grunt http-server:dev`

livereload
-----
This task watches if there are any changes in the files in the following directories: `'app/**/*.js', 'app/css/**/*.css', 'app/views/**/*.html', 'app/index.html`. If there is a change, the whole application reloads.


We also use eslint!