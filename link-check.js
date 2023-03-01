#!/usr/bin/env node

'use strict';

const markdownLinkCheck = require('markdown-link-check');
const fs = require("fs");
//const glob = require("glob");
const {globSync} = require('glob');
const path = require("path");

//old code: var files = glob.sync("**/*.md", {ignore: ["node_modules/**/*.md"]})
// all markdown files, but don't look in node_modules
const files = globSync("**/*.md", {ignore: "node_modules/**/*.md" });

const config = JSON.parse(fs.readFileSync(".markdown-link-check.json"));
// pass in a signal to cancel the glob walk
config.timeout = '30s'

const opts = JSON.parse(fs.readFileSync(".markdown-link-check.json"));

files.forEach(function(file) {
  var markdown = fs.readFileSync(file).toString();
  let opts = Object.assign({}, config);

  opts.baseUrl = path.dirname(path.resolve(file)) + '/';

  markdownLinkCheck(markdown, opts, function (err, results) {
    if (err) {
        console.error('Error', err);
        return;
    }

    console.log("Reading: " + file);

    results.forEach(function (result) {
      if(result.status === "dead") {
        if (result.statusCode == 500) {
          console.log("Server error on target: " + result.link);
        }
        else {
          process.exitCode = 1
          console.log("Dead: " + result.link);
        }
      }
    });
  });
});
