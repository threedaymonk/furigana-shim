(function(n, w, d){
  var css = '/* CSS */';

  var addCSS = function(css){
    var head = d.getElementsByTagName('head')[0];
    var styleElement = d.createElement('style');
    styleElement.setAttribute('type', 'text/css');
    styleElement.appendChild(d.createTextNode(css));
    head.insertBefore(styleElement, head.childNodes[0]);
  };

  var shim = function(){
    var ruby = d.createElement('ruby');
    var rt = d.createElement('rt');
    d.body.appendChild(ruby);
    ruby.appendChild(rt);

    // Old IE doesn't support this, but it does ruby already.
    if (typeof w.getComputedStyle !== 'function') return;

    // So far, it seems that webkit styles <rt> as a block if it supports
    // ruby.
    if (w.getComputedStyle(rt)['display'] === 'block') return;

    // No one uses Opera, but let's give it some perfunctory support.
    if (n.userAgent.match(/^Opera/)) {
      d.body.classList.add('furigana-opera-patch');
    }

    addCSS(css);

    d.body.removeChild(ruby);
  };

  var onload = function(f){
    var old = w.onload;
    if (typeof old === 'function') {
      w.onload = function(){ old(); f(); };
    } else {
      w.onload = f;
    };
  };

  onload(shim);
})(navigator, window, document);
