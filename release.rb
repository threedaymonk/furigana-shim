#!/usr/bin/env ruby
require "time"
url = "https://github.com/threedaymonk/furigana-shim"
puts "// furigana.js - #{Time.now.utc.xmlschema} - #{url}"
puts ARGF.read.sub "/* CSS */", File.read("furigana.min.css")
