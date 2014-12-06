#!/bin/bash

js_code=`cat waldbeere.js | perl -MURI::Escape -pe '$_ = uri_escape($_)'`
echo -n "js_code=${js_code}&compilation_level=ADVANCED_OPTIMIZATIONS&output_format=text&output_info=compiled_code" > waldbeere.js.tmp
wget -q -O - --post-file=waldbeere.js.tmp http://closure-compiler.appspot.com/compile > waldbeere.min.js
rm waldbeere.js.tmp
