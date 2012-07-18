.PHONY: clean

furigana.min.js: furigana.js furigana.min.css
	ruby -p -e '$$_.sub! "/* CSS */", File.read("furigana.min.css")' < $< | uglifyjs > $@

%.min.css: %.css
	csstidy $< --template=highest $@

clean:
	rm -f *.min.js *.min.css
