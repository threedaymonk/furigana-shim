// furigana.js - 2012-07-19T11:51:54Z - https://github.com/threedaymonk/furigana-shim
(function(e,t){var n="ruby{display:inline-table;text-align:center;border-collapse:collapse;vertical-align:bottom;}rb,rt{white-space:nowrap;margin:0;padding:0;}rt{font-size:60%;line-height:1.1;display:table-header-group;}rb{display:table-row;}rp{display:none;}",r=function(e){var n=t.getElementsByTagName("head")[0],r=t.createElement("style");r.setAttribute("type","text/css"),r.appendChild(t.createTextNode(e)),n.insertBefore(r,n.childNodes[0])},i=function(){var i=t.createElement("ruby"),s=t.createElement("rt");t.body.appendChild(i),i.appendChild(s);if(typeof e.getComputedStyle!="function")return;if(e.getComputedStyle(s).display==="block")return;r(n),t.body.removeChild(i)},s=function(t){var n=e.onload;typeof n=="function"?e.onload=function(){n(),t()}:e.onload=t};s(i)})(window,document);