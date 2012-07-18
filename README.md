furigana-shim
=============

Internet Explorer and Chrome support the display of _furigana_ glosses above
text in the form of the `<ruby>` element. Firefox doesn’t. This small shim
adds appropriate CSS to make `<ruby>` work properly in Firefox and (possibly)
other browsers that don’t natively support it.

Use
---

Mark up your ruby as described in the
[2001 W3C ruby recommendation](http://www.w3.org/TR/ruby/). The important point
to note is that you must use both `<rb>` and `<rt>` (`<rp>` is optional) and
put only one set inside each `<ruby>` block:

```html
<ruby><rb>漢字</rb><rp>（</rp><rt>かんじ</rt><rp>）</rp></ruby>
```

[Download the shim](https://github.com/threedaymonk/furigana-shim/downloads)
and add it to the `<head>` of the document:

```html
<script src="furigana-0.0.1.min.js"></script>
```

That’s it!
