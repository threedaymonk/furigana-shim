// furigana.js - 2012-07-19T13:07:43Z - https://github.com/threedaymonk/furigana-shim
(function(e,t,n){var r="ruby{display:inline-table;text-align:center;border-collapse:collapse;vertical-align:bottom;}body.furigana-opera-patch ruby{vertical-align:1.1em;}rb,rt{white-space:nowrap;margin:0;padding:0;}rt{font-size:60%;line-height:1.1;display:table-header-group;}rb{display:table-row;}rp{display:none;}",i=function(e){var t=n.getElementsByTagName("head")[0],r=n.createElement("style");r.setAttribute("type","text/css"),r.appendChild(n.createTextNode(e)),t.insertBefore(r,t.childNodes[0])},s=function(){var s=n.createElement("ruby"),o=n.createElement("rt");n.body.appendChild(s),s.appendChild(o);if(typeof t.getComputedStyle!="function")return;if(t.getComputedStyle(o).display==="block")return;e.userAgent.match(/^Opera/)&&n.body.classList.add("furigana-opera-patch"),i(r),n.body.removeChild(s)},o=function(e){var n=t.onload;typeof n=="function"?t.onload=function(){n(),e()}:t.onload=e};o(s)})(navigator,window,document);
