# js-gulp-boilerplate
[![Build Status](https://travis-ci.org/UsainBloot/js-gulp-boilerplate.svg)](https://travis-ci.org/UsainBloot/js-gulp-boilerplate)

A JavaScript and SASS based web app boilerplate complete with automated dev and build gulp tasks.

The boilerplate utilises **Gulp** for it's build tasks and **Karma**, **Chai** and **PhantomJS** for unit testing.

## Getting Started
Node and npm are both required to use the boilerplate.
To install simply clone the repo and fetch all required packages using the following command.
```
npm install
```

## Usage
To preprocess all code and create a releasable `/public` folder use
```
gulp
```
When **developing** use
```
gulp dev
```

## Development

When using `gulp dev`, the boilerplate will create a **BrowserSync** session which will serve the `/public` folder to all connections on your network.

### gulp
All build tasks can be found in the the `/gulp/tasks` directory.

The standard `gulp` task can be found in `/gulp/tasks/default.js`.

The development `gulp dev` task can be found in `/gulp/tasks/dev.js`.

The tasks are powered by the `/gulp/config.js` file and the majority of project structure changes should be made here.

### JavaScript

#### Structure
The JavaScript is structered as *pages*, *modules* and *data* and collated using **Browserify**.

You should try to structure JavaScript files based on whether they are page specific (therefore should be in the relevant file in `/source/js/page` folder) otherwise as a *module*.

The entry point is in `/source/js/main.js` and is present on every page. Each page should be required and initialised based on whether the body's class.

These page JavaScript objects should then require any required modules as well as any static data needed.

The overall call stack should look like this...

```
+-- main.js
    |
    +-- page/page.js
        |
        +-- module/module.js
```

#### External Files
All installed external JS files (such as jQuery or D3) should be installed via npm or placed in the `/source/js/vendor` folder. The location to the required input file should be added to `/gulp/config.js`.

### SASS

#### Structure
The SASS file structure contains *mixins*, *pages* and *components*.

The entry point is `/source/scss/main.scss` and is present on every page. No CSS should be written in this file and should be only used to include *mixins* and *pages*.

Each *page* should have a parent selector of the page name set as the body class. The page SASS file should include unique styling only found on this page and include any common *component* or extend any *mixin* needed.

All variables should be stored in `/source/scss/_vars.scss`.

All common fonts or typography styling should be set in `/source/scss/_typography.scss`.

When adding new fonts make sure they are added to the `/source/fonts` folder or if using npm, ensure their file path is stored in the `/gulp/config.js` file.

## Test

The test framework used is **Karma** and **Chai**, while the browser used as default is **PhantomJS**.

All test data should be stored in `/tests/data`.

All tests should be written in the `/tests/unit` folder.

### Usage

To start the Karma test runner in a PhantomJS session
```
npm test
```
