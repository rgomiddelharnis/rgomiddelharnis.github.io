(self.webpackChunk_basthon_basthon_notebook=self.webpackChunk_basthon_basthon_notebook||[]).push([[2101],{40790:(e,t,n)=>{!function(e){"use strict";function t(e,t){if(!e.hasOwnProperty(t))throw new Error("Undefined state "+t+" in simple mode")}function n(e,t){if(!e)return/(?:)/;var n="";return e instanceof RegExp?(e.ignoreCase&&(n="i"),e.unicode&&(n+="u"),e=e.source):e=String(e),new RegExp((!1===t?"":"^")+"(?:"+e+")",n)}function a(e,a){(e.next||e.push)&&t(a,e.next||e.push),this.regex=n(e.regex),this.token=function(e){if(!e)return null;if(e.apply)return e;if("string"==typeof e)return e.replace(/\./g," ");for(var t=[],n=0;n<e.length;n++)t.push(e[n]&&e[n].replace(/\./g," "));return t}(e.token),this.data=e}function o(e,t){return function(n,a){if(a.pending){var o=a.pending.shift();return 0==a.pending.length&&(a.pending=null),n.pos+=o.text.length,o.token}if(a.local){if(a.local.end&&n.match(a.local.end)){var r=a.local.endToken||null;return a.local=a.localState=null,r}var l;return r=a.local.mode.token(n,a.localState),a.local.endScan&&(l=a.local.endScan.exec(n.current()))&&(n.pos=n.start+l.index),r}for(var i=e[a.state],d=0;d<i.length;d++){var c=i[d],p=(!c.data.sol||n.sol())&&n.match(c.regex);if(p){c.data.next?a.state=c.data.next:c.data.push?((a.stack||(a.stack=[])).push(a.state),a.state=c.data.push):c.data.pop&&a.stack&&a.stack.length&&(a.state=a.stack.pop()),c.data.mode&&s(t,a,c.data.mode,c.token),c.data.indent&&a.indent.push(n.indentation()+t.indentUnit),c.data.dedent&&a.indent.pop();var u=c.token;if(u&&u.apply&&(u=u(p)),p.length>2&&c.token&&"string"!=typeof c.token){for(var f=2;f<p.length;f++)p[f]&&(a.pending||(a.pending=[])).push({text:p[f],token:c.token[f-1]});return n.backUp(p[0].length-(p[1]?p[1].length:0)),u[0]}return u&&u.join?u[0]:u}}return n.next(),null}}function r(e,t){if(e===t)return!0;if(!e||"object"!=typeof e||!t||"object"!=typeof t)return!1;var n=0;for(var a in e)if(e.hasOwnProperty(a)){if(!t.hasOwnProperty(a)||!r(e[a],t[a]))return!1;n++}for(var a in t)t.hasOwnProperty(a)&&n--;return 0==n}function s(t,a,o,s){var l;if(o.persistent)for(var i=a.persistentStates;i&&!l;i=i.next)(o.spec?r(o.spec,i.spec):o.mode==i.mode)&&(l=i);var d=l?l.mode:o.mode||e.getMode(t,o.spec),c=l?l.state:e.startState(d);o.persistent&&!l&&(a.persistentStates={mode:d,spec:o.spec,state:c,next:a.persistentStates}),a.localState=c,a.local={mode:d,end:o.end&&n(o.end),endScan:o.end&&!1!==o.forceEnd&&n(o.end,!1),endToken:s&&s.join?s[s.length-1]:s}}function l(t,n){return function(a,o,r){if(a.local&&a.local.mode.indent)return a.local.mode.indent(a.localState,o,r);if(null==a.indent||a.local||n.dontIndentStates&&function(e,t){for(var n=0;n<t.length;n++)if(t[n]===e)return!0}(a.state,n.dontIndentStates)>-1)return e.Pass;var s=a.indent.length-1,l=t[a.state];e:for(;;){for(var i=0;i<l.length;i++){var d=l[i];if(d.data.dedent&&!1!==d.data.dedentIfLineStart){var c=d.regex.exec(o);if(c&&c[0]){s--,(d.next||d.push)&&(l=t[d.next||d.push]),o=o.slice(c[0].length);continue e}}}break}return s<0?0:a.indent[s]}}e.defineSimpleMode=function(t,n){e.defineMode(t,(function(t){return e.simpleMode(t,n)}))},e.simpleMode=function(n,r){t(r,"start");var s={},i=r.meta||{},d=!1;for(var c in r)if(c!=i&&r.hasOwnProperty(c))for(var p=s[c]=[],u=r[c],f=0;f<u.length;f++){var g=u[f];p.push(new a(g,r)),(g.indent||g.dedent)&&(d=!0)}var h={startState:function(){return{state:"start",pending:null,local:null,localState:null,indent:d?[]:null}},copyState:function(t){var n={state:t.state,pending:t.pending,local:t.local,localState:null,indent:t.indent&&t.indent.slice(0)};t.localState&&(n.localState=e.copyState(t.local.mode,t.localState)),t.stack&&(n.stack=t.stack.slice(0));for(var a=t.persistentStates;a;a=a.next)n.persistentStates={mode:a.mode,spec:a.spec,state:a.state==t.localState?n.localState:e.copyState(a.mode,a.state),next:n.persistentStates};return n},token:o(s,n),innerMode:function(e){return e.local&&{mode:e.local.mode,state:e.localState}},indent:l(s,i)};if(i)for(var m in i)i.hasOwnProperty(m)&&(h[m]=i[m]);return h}}(n(4631))},62101:(e,t,n)=>{!function(e){"use strict";e.defineSimpleMode("handlebars-tags",{start:[{regex:/\{\{\{/,push:"handlebars_raw",token:"tag"},{regex:/\{\{!--/,push:"dash_comment",token:"comment"},{regex:/\{\{!/,push:"comment",token:"comment"},{regex:/\{\{/,push:"handlebars",token:"tag"}],handlebars_raw:[{regex:/\}\}\}/,pop:!0,token:"tag"}],handlebars:[{regex:/\}\}/,pop:!0,token:"tag"},{regex:/"(?:[^\\"]|\\.)*"?/,token:"string"},{regex:/'(?:[^\\']|\\.)*'?/,token:"string"},{regex:/>|[#\/]([A-Za-z_]\w*)/,token:"keyword"},{regex:/(?:else|this)\b/,token:"keyword"},{regex:/\d+/i,token:"number"},{regex:/=|~|@|true|false/,token:"atom"},{regex:/(?:\.\.\/)*(?:[A-Za-z_][\w\.]*)+/,token:"variable-2"}],dash_comment:[{regex:/--\}\}/,pop:!0,token:"comment"},{regex:/./,token:"comment"}],comment:[{regex:/\}\}/,pop:!0,token:"comment"},{regex:/./,token:"comment"}],meta:{blockCommentStart:"{{--",blockCommentEnd:"--}}"}}),e.defineMode("handlebars",(function(t,n){var a=e.getMode(t,"handlebars-tags");return n&&n.base?e.multiplexingMode(e.getMode(t,n.base),{open:"{{",close:/\}\}\}?/,mode:a,parseDelimiters:!0}):a})),e.defineMIME("text/x-handlebars-template","handlebars")}(n(4631),n(40790),n(87093))}}]);
//# sourceMappingURL=2101.fe4140d9cbff8ff4ce5c.js.map