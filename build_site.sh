#!/bin/bash
rm -rf _site
cd jekyll
bundle exec jekyll build
mv _site ..
cd ..
