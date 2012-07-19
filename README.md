furigana-shim
=============

Firefoxはルビ（振り仮名など）を表示することができない。短いスクリプトでできるようにする。

Internet Explorer and Chrome support the display of _furigana_ glosses above
text in the form of the `<ruby>` element. Firefox doesn’t.

If you’re a _user_ of Firefox, you can fix this omission via an add-on:

* [HTML Ruby](https://addons.mozilla.org/en-US/firefox/addon/html-ruby/)
* [XHTML Ruby Support](https://addons.mozilla.org/en-US/firefox/addon/xhtml-ruby-support/)

If you're a publisher, though, that doesn’t help.

This small shim fixes things from the web developer side by adding appropriate
CSS to make `<ruby>` work properly in Firefox and (possibly) other browsers
that don’t natively support it.

Use
---

Mark up your furigana as described in the
[2001 W3C ruby recommendation](http://www.w3.org/TR/ruby/). The important point
to note is that you must use both `<rb>` and `<rt>` (`<rp>` is optional) and
put only one set inside each `<ruby>` block:

```html
<ruby><rb>漢字</rb><rp>（</rp><rt>かんじ</rt><rp>）</rp></ruby>
```

Download the [compiled and minified shim](https://github.com/threedaymonk/furigana-shim/blob/master/furigana.js)
and add it to the `<head>` of the document:

```html
<script src="furigana.js"></script>
```

That’s it!

Limitations
-----------

Complex ruby – where there are glosses both above and below the text – is not
supported.

Feedback
--------

This has not been extensively tested, so feedback is very welcome, either in
the form of [issues](https://github.com/threedaymonk/furigana-shim/issues) or
via [email to the author](mailto:pbattley@gmail.com).
