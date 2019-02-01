// @ts-ignore
'use strict';

const gulp = require('gulp');
const build = require('@microsoft/sp-build-web');
const typescript = require('typescript');

build.addSuppression(`Warning - [sass] The local CSS class 'ms-Grid' is not camelCase and will not be type-safe.`);

build.TypeScriptConfiguration.setTypescriptCompiler(typescript);

build.configureWebpack.mergeConfig({
  additionalConfiguration: (generatedConfiguration) => {
    return generatedConfiguration
  }
});

build.tslint.mergeConfig({
  useDefaultConfigAsBase: false,
});

build.initialize(gulp);
