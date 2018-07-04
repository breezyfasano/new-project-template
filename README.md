New Project Template
========

The following template is my very basic setup for a new project. So far includes Gulp.js, auto Sass compiling, and BrowserSync auto refresh.

__Before you begin coding in a new download/fork of this repo, make sure you run the following commands inside your folder:__

```
$ npm install gulp --save-dev
$ npm install gulp-sass --save-dev
$ npm install browser-sync --save-dev
```
-------

__You also must have Node.js and Gulp installed globally on your machine. See the bottom of this document for help on that.__

Run the command ```$ gulp watch``` to start watching Sass and Javascript files for changes, compiling all Sass, and auto reload your browser after each change. Don't forget to change your package.json!

__Note:__ The '$' is not included in the actual CLI command. It is just there to represent the CLI command itself. Run everything after '$'.

This boilerplate was created with the help of the [CSS-Tricks Gulp for Beginners](https://css-tricks.com/gulp-for-beginners/) tutorial. For further explanation, troubleshooting, and additional Gulp tasks check it out.

Thanks CSS Tricks :sparkling_heart:

## How to Install Node.js and Gulp Locally
---

### Install Node.js
To install Node.js, you can use the handy installer available on their website [here](https://nodejs.org/en/). 

### Install Gulp Globally

#### For Mac:

```
$ sudo npm install gulp -g
```

#### For PC:

```
$ npm install gulp -g
```