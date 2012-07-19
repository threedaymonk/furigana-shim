.PHONY: clean

furigana.js: furigana.min.js furigana.min.css
	ruby release.rb < $< > $@

%.min.css: %.max.css
	csstidy $< --template=highest $@

%.min.js: %.max.js
	uglifyjs < $< > $@

clean:
	rm -f *.min.js *.min.css furigana.js
