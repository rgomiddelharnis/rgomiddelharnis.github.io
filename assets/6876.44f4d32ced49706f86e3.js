(self.webpackChunk_basthon_basthon_notebook=self.webpackChunk_basthon_basthon_notebook||[]).push([[6876],{96876:(e,t,r)=>{!function(e){"use strict";e.defineMode("javascript",(function(t,r){var n,a,i=t.indentUnit,o=r.statementIndent,s=r.jsonld,c=r.json||s,u=!1!==r.trackScope,l=r.typescript,f=r.wordCharacters||/[\w$\xa1-\uffff]/,d=function(){function e(e){return{type:e,style:"keyword"}}var t=e("keyword a"),r=e("keyword b"),n=e("keyword c"),a=e("keyword d"),i=e("operator"),o={type:"atom",style:"atom"};return{if:e("if"),while:t,with:t,else:r,do:r,try:r,finally:r,return:a,break:a,continue:a,new:e("new"),delete:n,void:n,throw:n,debugger:e("debugger"),var:e("var"),const:e("var"),let:e("var"),function:e("function"),catch:e("catch"),for:e("for"),switch:e("switch"),case:e("case"),default:e("default"),in:i,typeof:i,instanceof:i,true:o,false:o,null:o,undefined:o,NaN:o,Infinity:o,this:e("this"),class:e("class"),super:e("atom"),yield:n,export:e("export"),import:e("import"),extends:n,await:n}}(),p=/[+\-*&%=<>!?|~^@]/,m=/^@(context|id|value|language|type|container|list|set|reverse|index|base|vocab|graph)"/;function k(e,t,r){return n=e,a=r,t}function v(e,t){var r,n=e.next();if('"'==n||"'"==n)return t.tokenize=(r=n,function(e,t){var n,a=!1;if(s&&"@"==e.peek()&&e.match(m))return t.tokenize=v,k("jsonld-keyword","meta");for(;null!=(n=e.next())&&(n!=r||a);)a=!a&&"\\"==n;return a||(t.tokenize=v),k("string","string")}),t.tokenize(e,t);if("."==n&&e.match(/^\d[\d_]*(?:[eE][+\-]?[\d_]+)?/))return k("number","number");if("."==n&&e.match(".."))return k("spread","meta");if(/[\[\]{}\(\),;\:\.]/.test(n))return k(n);if("="==n&&e.eat(">"))return k("=>","operator");if("0"==n&&e.match(/^(?:x[\dA-Fa-f_]+|o[0-7_]+|b[01_]+)n?/))return k("number","number");if(/\d/.test(n))return e.match(/^[\d_]*(?:n|(?:\.[\d_]*)?(?:[eE][+\-]?[\d_]+)?)?/),k("number","number");if("/"==n)return e.eat("*")?(t.tokenize=y,y(e,t)):e.eat("/")?(e.skipToEnd(),k("comment","comment")):et(e,t,1)?(function(e){for(var t,r=!1,n=!1;null!=(t=e.next());){if(!r){if("/"==t&&!n)return;"["==t?n=!0:n&&"]"==t&&(n=!1)}r=!r&&"\\"==t}}(e),e.match(/^\b(([gimyus])(?![gimyus]*\2))+\b/),k("regexp","string-2")):(e.eat("="),k("operator","operator",e.current()));if("`"==n)return t.tokenize=w,w(e,t);if("#"==n&&"!"==e.peek())return e.skipToEnd(),k("meta","meta");if("#"==n&&e.eatWhile(f))return k("variable","property");if("<"==n&&e.match("!--")||"-"==n&&e.match("->")&&!/\S/.test(e.string.slice(0,e.start)))return e.skipToEnd(),k("comment","comment");if(p.test(n))return">"==n&&t.lexical&&">"==t.lexical.type||(e.eat("=")?"!"!=n&&"="!=n||e.eat("="):/[<>*+\-|&?]/.test(n)&&(e.eat(n),">"==n&&e.eat(n))),"?"==n&&e.eat(".")?k("."):k("operator","operator",e.current());if(f.test(n)){e.eatWhile(f);var a=e.current();if("."!=t.lastType){if(d.propertyIsEnumerable(a)){var i=d[a];return k(i.type,i.style,a)}if("async"==a&&e.match(/^(\s|\/\*([^*]|\*(?!\/))*?\*\/)*[\[\(\w]/,!1))return k("async","keyword",a)}return k("variable","variable",a)}}function y(e,t){for(var r,n=!1;r=e.next();){if("/"==r&&n){t.tokenize=v;break}n="*"==r}return k("comment","comment")}function w(e,t){for(var r,n=!1;null!=(r=e.next());){if(!n&&("`"==r||"$"==r&&e.eat("{"))){t.tokenize=v;break}n=!n&&"\\"==r}return k("quasi","string-2",e.current())}var b="([{}])";function h(e,t){t.fatArrowAt&&(t.fatArrowAt=null);var r=e.string.indexOf("=>",e.start);if(!(r<0)){if(l){var n=/:\s*(?:\w+(?:<[^>]*>|\[\])?|\{[^}]*\})\s*$/.exec(e.string.slice(e.start,r));n&&(r=n.index)}for(var a=0,i=!1,o=r-1;o>=0;--o){var s=e.string.charAt(o),c=b.indexOf(s);if(c>=0&&c<3){if(!a){++o;break}if(0==--a){"("==s&&(i=!0);break}}else if(c>=3&&c<6)++a;else if(f.test(s))i=!0;else if(/["'\/`]/.test(s))for(;;--o){if(0==o)return;if(e.string.charAt(o-1)==s&&"\\"!=e.string.charAt(o-2)){o--;break}}else if(i&&!a){++o;break}}i&&!a&&(t.fatArrowAt=o)}}var x={atom:!0,number:!0,variable:!0,string:!0,regexp:!0,this:!0,import:!0,"jsonld-keyword":!0};function g(e,t,r,n,a,i){this.indented=e,this.column=t,this.type=r,this.prev=a,this.info=i,null!=n&&(this.align=n)}function j(e,t){if(!u)return!1;for(var r=e.localVars;r;r=r.next)if(r.name==t)return!0;for(var n=e.context;n;n=n.prev)for(r=n.vars;r;r=r.next)if(r.name==t)return!0}function M(e,t,r,n,a){var i=e.cc;for(A.state=e,A.stream=a,A.marked=null,A.cc=i,A.style=t,e.lexical.hasOwnProperty("align")||(e.lexical.align=!0);;)if((i.length?i.pop():c?H:B)(r,n)){for(;i.length&&i[i.length-1].lex;)i.pop()();return A.marked?A.marked:"variable"==r&&j(e,n)?"variable-2":t}}var A={state:null,column:null,marked:null,cc:null};function V(){for(var e=arguments.length-1;e>=0;e--)A.cc.push(arguments[e])}function E(){return V.apply(null,arguments),!0}function z(e,t){for(var r=t;r;r=r.next)if(r.name==e)return!0;return!1}function I(e){var t=A.state;if(A.marked="def",u){if(t.context)if("var"==t.lexical.info&&t.context&&t.context.block){var n=T(e,t.context);if(null!=n)return void(t.context=n)}else if(!z(e,t.localVars))return void(t.localVars=new C(e,t.localVars));r.globalVars&&!z(e,t.globalVars)&&(t.globalVars=new C(e,t.globalVars))}}function T(e,t){if(t){if(t.block){var r=T(e,t.prev);return r?r==t.prev?t:new $(r,t.vars,!0):null}return z(e,t.vars)?t:new $(t.prev,new C(e,t.vars),!1)}return null}function _(e){return"public"==e||"private"==e||"protected"==e||"abstract"==e||"readonly"==e}function $(e,t,r){this.prev=e,this.vars=t,this.block=r}function C(e,t){this.name=e,this.next=t}var S=new C("this",new C("arguments",null));function q(){A.state.context=new $(A.state.context,A.state.localVars,!1),A.state.localVars=S}function O(){A.state.context=new $(A.state.context,A.state.localVars,!0),A.state.localVars=null}function P(){A.state.localVars=A.state.context.vars,A.state.context=A.state.context.prev}function N(e,t){var r=function(){var r=A.state,n=r.indented;if("stat"==r.lexical.type)n=r.lexical.indented;else for(var a=r.lexical;a&&")"==a.type&&a.align;a=a.prev)n=a.indented;r.lexical=new g(n,A.stream.column(),e,null,r.lexical,t)};return r.lex=!0,r}function U(){var e=A.state;e.lexical.prev&&(")"==e.lexical.type&&(e.indented=e.lexical.indented),e.lexical=e.lexical.prev)}function W(e){return function t(r){return r==e?E():";"==e||"}"==r||")"==r||"]"==r?V():E(t)}}function B(e,t){return"var"==e?E(N("vardef",t),Ae,W(";"),U):"keyword a"==e?E(N("form"),G,B,U):"keyword b"==e?E(N("form"),B,U):"keyword d"==e?A.stream.match(/^\s*$/,!1)?E():E(N("stat"),K,W(";"),U):"debugger"==e?E(W(";")):"{"==e?E(N("}"),O,ue,U,P):";"==e?E():"if"==e?("else"==A.state.lexical.info&&A.state.cc[A.state.cc.length-1]==U&&A.state.cc.pop()(),E(N("form"),G,B,U,_e)):"function"==e?E(qe):"for"==e?E(N("form"),O,$e,B,P,U):"class"==e||l&&"interface"==t?(A.marked="keyword",E(N("form","class"==e?e:t),We,U)):"variable"==e?l&&"declare"==t?(A.marked="keyword",E(B)):l&&("module"==t||"enum"==t||"type"==t)&&A.stream.match(/^\s*\w/,!1)?(A.marked="keyword","enum"==t?E(Ye):"type"==t?E(Pe,W("operator"),me,W(";")):E(N("form"),Ve,W("{"),N("}"),ue,U,U)):l&&"namespace"==t?(A.marked="keyword",E(N("form"),H,B,U)):l&&"abstract"==t?(A.marked="keyword",E(B)):E(N("stat"),re):"switch"==e?E(N("form"),G,W("{"),N("}","switch"),O,ue,U,U,P):"case"==e?E(H,W(":")):"default"==e?E(W(":")):"catch"==e?E(N("form"),q,F,B,U,P):"export"==e?E(N("stat"),De,U):"import"==e?E(N("stat"),Je,U):"async"==e?E(B):"@"==t?E(H,B):V(N("stat"),H,W(";"),U)}function F(e){if("("==e)return E(Ne,W(")"))}function H(e,t){return J(e,t,!1)}function D(e,t){return J(e,t,!0)}function G(e){return"("!=e?V():E(N(")"),K,W(")"),U)}function J(e,t,r){if(A.state.fatArrowAt==A.stream.start){var n=r?Z:Y;if("("==e)return E(q,N(")"),se(Ne,")"),U,W("=>"),n,P);if("variable"==e)return V(q,Ve,W("=>"),n,P)}var a=r?Q:L;return x.hasOwnProperty(e)?E(a):"function"==e?E(qe,a):"class"==e||l&&"interface"==t?(A.marked="keyword",E(N("form"),Ue,U)):"keyword c"==e||"async"==e?E(r?D:H):"("==e?E(N(")"),K,W(")"),U,a):"operator"==e||"spread"==e?E(r?D:H):"["==e?E(N("]"),Xe,U,a):"{"==e?ce(ae,"}",null,a):"quasi"==e?V(R,a):"new"==e?E(function(e){return function(t){return"."==t?E(e?te:ee):"variable"==t&&l?E(ge,e?Q:L):V(e?D:H)}}(r)):E()}function K(e){return e.match(/[;\}\)\],]/)?V():V(H)}function L(e,t){return","==e?E(K):Q(e,t,!1)}function Q(e,t,r){var n=0==r?L:Q,a=0==r?H:D;return"=>"==e?E(q,r?Z:Y,P):"operator"==e?/\+\+|--/.test(t)||l&&"!"==t?E(n):l&&"<"==t&&A.stream.match(/^([^<>]|<[^<>]*>)*>\s*\(/,!1)?E(N(">"),se(me,">"),U,n):"?"==t?E(H,W(":"),a):E(a):"quasi"==e?V(R,n):";"!=e?"("==e?ce(D,")","call",n):"."==e?E(ne,n):"["==e?E(N("]"),K,W("]"),U,n):l&&"as"==t?(A.marked="keyword",E(me,n)):"regexp"==e?(A.state.lastType=A.marked="operator",A.stream.backUp(A.stream.pos-A.stream.start-1),E(a)):void 0:void 0}function R(e,t){return"quasi"!=e?V():"${"!=t.slice(t.length-2)?E(R):E(K,X)}function X(e){if("}"==e)return A.marked="string-2",A.state.tokenize=w,E(R)}function Y(e){return h(A.stream,A.state),V("{"==e?B:H)}function Z(e){return h(A.stream,A.state),V("{"==e?B:D)}function ee(e,t){if("target"==t)return A.marked="keyword",E(L)}function te(e,t){if("target"==t)return A.marked="keyword",E(Q)}function re(e){return":"==e?E(U,B):V(L,W(";"),U)}function ne(e){if("variable"==e)return A.marked="property",E()}function ae(e,t){return"async"==e?(A.marked="property",E(ae)):"variable"==e||"keyword"==A.style?(A.marked="property","get"==t||"set"==t?E(ie):(l&&A.state.fatArrowAt==A.stream.start&&(r=A.stream.match(/^\s*:\s*/,!1))&&(A.state.fatArrowAt=A.stream.pos+r[0].length),E(oe))):"number"==e||"string"==e?(A.marked=s?"property":A.style+" property",E(oe)):"jsonld-keyword"==e?E(oe):l&&_(t)?(A.marked="keyword",E(ae)):"["==e?E(H,le,W("]"),oe):"spread"==e?E(D,oe):"*"==t?(A.marked="keyword",E(ae)):":"==e?V(oe):void 0;var r}function ie(e){return"variable"!=e?V(oe):(A.marked="property",E(qe))}function oe(e){return":"==e?E(D):"("==e?V(qe):void 0}function se(e,t,r){function n(a,i){if(r?r.indexOf(a)>-1:","==a){var o=A.state.lexical;return"call"==o.info&&(o.pos=(o.pos||0)+1),E((function(r,n){return r==t||n==t?V():V(e)}),n)}return a==t||i==t?E():r&&r.indexOf(";")>-1?V(e):E(W(t))}return function(r,a){return r==t||a==t?E():V(e,n)}}function ce(e,t,r){for(var n=3;n<arguments.length;n++)A.cc.push(arguments[n]);return E(N(t,r),se(e,t),U)}function ue(e){return"}"==e?E():V(B,ue)}function le(e,t){if(l){if(":"==e)return E(me);if("?"==t)return E(le)}}function fe(e,t){if(l&&(":"==e||"in"==t))return E(me)}function de(e){if(l&&":"==e)return A.stream.match(/^\s*\w+\s+is\b/,!1)?E(H,pe,me):E(me)}function pe(e,t){if("is"==t)return A.marked="keyword",E()}function me(e,t){return"keyof"==t||"typeof"==t||"infer"==t||"readonly"==t?(A.marked="keyword",E("typeof"==t?D:me)):"variable"==e||"void"==t?(A.marked="type",E(xe)):"|"==t||"&"==t?E(me):"string"==e||"number"==e||"atom"==e?E(xe):"["==e?E(N("]"),se(me,"]",","),U,xe):"{"==e?E(N("}"),ve,U,xe):"("==e?E(se(he,")"),ke,xe):"<"==e?E(se(me,">"),me):"quasi"==e?V(we,xe):void 0}function ke(e){if("=>"==e)return E(me)}function ve(e){return e.match(/[\}\)\]]/)?E():","==e||";"==e?E(ve):V(ye,ve)}function ye(e,t){return"variable"==e||"keyword"==A.style?(A.marked="property",E(ye)):"?"==t||"number"==e||"string"==e?E(ye):":"==e?E(me):"["==e?E(W("variable"),fe,W("]"),ye):"("==e?V(Oe,ye):e.match(/[;\}\)\],]/)?void 0:E()}function we(e,t){return"quasi"!=e?V():"${"!=t.slice(t.length-2)?E(we):E(me,be)}function be(e){if("}"==e)return A.marked="string-2",A.state.tokenize=w,E(we)}function he(e,t){return"variable"==e&&A.stream.match(/^\s*[?:]/,!1)||"?"==t?E(he):":"==e?E(me):"spread"==e?E(he):V(me)}function xe(e,t){return"<"==t?E(N(">"),se(me,">"),U,xe):"|"==t||"."==e||"&"==t?E(me):"["==e?E(me,W("]"),xe):"extends"==t||"implements"==t?(A.marked="keyword",E(me)):"?"==t?E(me,W(":"),me):void 0}function ge(e,t){if("<"==t)return E(N(">"),se(me,">"),U,xe)}function je(){return V(me,Me)}function Me(e,t){if("="==t)return E(me)}function Ae(e,t){return"enum"==t?(A.marked="keyword",E(Ye)):V(Ve,le,Ie,Te)}function Ve(e,t){return l&&_(t)?(A.marked="keyword",E(Ve)):"variable"==e?(I(t),E()):"spread"==e?E(Ve):"["==e?ce(ze,"]"):"{"==e?ce(Ee,"}"):void 0}function Ee(e,t){return"variable"!=e||A.stream.match(/^\s*:/,!1)?("variable"==e&&(A.marked="property"),"spread"==e?E(Ve):"}"==e?V():"["==e?E(H,W("]"),W(":"),Ee):E(W(":"),Ve,Ie)):(I(t),E(Ie))}function ze(){return V(Ve,Ie)}function Ie(e,t){if("="==t)return E(D)}function Te(e){if(","==e)return E(Ae)}function _e(e,t){if("keyword b"==e&&"else"==t)return E(N("form","else"),B,U)}function $e(e,t){return"await"==t?E($e):"("==e?E(N(")"),Ce,U):void 0}function Ce(e){return"var"==e?E(Ae,Se):"variable"==e?E(Se):V(Se)}function Se(e,t){return")"==e?E():";"==e?E(Se):"in"==t||"of"==t?(A.marked="keyword",E(H,Se)):V(H,Se)}function qe(e,t){return"*"==t?(A.marked="keyword",E(qe)):"variable"==e?(I(t),E(qe)):"("==e?E(q,N(")"),se(Ne,")"),U,de,B,P):l&&"<"==t?E(N(">"),se(je,">"),U,qe):void 0}function Oe(e,t){return"*"==t?(A.marked="keyword",E(Oe)):"variable"==e?(I(t),E(Oe)):"("==e?E(q,N(")"),se(Ne,")"),U,de,P):l&&"<"==t?E(N(">"),se(je,">"),U,Oe):void 0}function Pe(e,t){return"keyword"==e||"variable"==e?(A.marked="type",E(Pe)):"<"==t?E(N(">"),se(je,">"),U):void 0}function Ne(e,t){return"@"==t&&E(H,Ne),"spread"==e?E(Ne):l&&_(t)?(A.marked="keyword",E(Ne)):l&&"this"==e?E(le,Ie):V(Ve,le,Ie)}function Ue(e,t){return"variable"==e?We(e,t):Be(e,t)}function We(e,t){if("variable"==e)return I(t),E(Be)}function Be(e,t){return"<"==t?E(N(">"),se(je,">"),U,Be):"extends"==t||"implements"==t||l&&","==e?("implements"==t&&(A.marked="keyword"),E(l?me:H,Be)):"{"==e?E(N("}"),Fe,U):void 0}function Fe(e,t){return"async"==e||"variable"==e&&("static"==t||"get"==t||"set"==t||l&&_(t))&&A.stream.match(/^\s+#?[\w$\xa1-\uffff]/,!1)?(A.marked="keyword",E(Fe)):"variable"==e||"keyword"==A.style?(A.marked="property",E(He,Fe)):"number"==e||"string"==e?E(He,Fe):"["==e?E(H,le,W("]"),He,Fe):"*"==t?(A.marked="keyword",E(Fe)):l&&"("==e?V(Oe,Fe):";"==e||","==e?E(Fe):"}"==e?E():"@"==t?E(H,Fe):void 0}function He(e,t){if("!"==t)return E(He);if("?"==t)return E(He);if(":"==e)return E(me,Ie);if("="==t)return E(D);var r=A.state.lexical.prev;return V(r&&"interface"==r.info?Oe:qe)}function De(e,t){return"*"==t?(A.marked="keyword",E(Re,W(";"))):"default"==t?(A.marked="keyword",E(H,W(";"))):"{"==e?E(se(Ge,"}"),Re,W(";")):V(B)}function Ge(e,t){return"as"==t?(A.marked="keyword",E(W("variable"))):"variable"==e?V(D,Ge):void 0}function Je(e){return"string"==e?E():"("==e?V(H):"."==e?V(L):V(Ke,Le,Re)}function Ke(e,t){return"{"==e?ce(Ke,"}"):("variable"==e&&I(t),"*"==t&&(A.marked="keyword"),E(Qe))}function Le(e){if(","==e)return E(Ke,Le)}function Qe(e,t){if("as"==t)return A.marked="keyword",E(Ke)}function Re(e,t){if("from"==t)return A.marked="keyword",E(H)}function Xe(e){return"]"==e?E():V(se(D,"]"))}function Ye(){return V(N("form"),Ve,W("{"),N("}"),se(Ze,"}"),U,U)}function Ze(){return V(Ve,Ie)}function et(e,t,r){return t.tokenize==v&&/^(?:operator|sof|keyword [bcd]|case|new|export|default|spread|[\[{}\(,;:]|=>)$/.test(t.lastType)||"quasi"==t.lastType&&/\{\s*$/.test(e.string.slice(0,e.pos-(r||0)))}return q.lex=O.lex=!0,P.lex=!0,U.lex=!0,{startState:function(e){var t={tokenize:v,lastType:"sof",cc:[],lexical:new g((e||0)-i,0,"block",!1),localVars:r.localVars,context:r.localVars&&new $(null,null,!1),indented:e||0};return r.globalVars&&"object"==typeof r.globalVars&&(t.globalVars=r.globalVars),t},token:function(e,t){if(e.sol()&&(t.lexical.hasOwnProperty("align")||(t.lexical.align=!1),t.indented=e.indentation(),h(e,t)),t.tokenize!=y&&e.eatSpace())return null;var r=t.tokenize(e,t);return"comment"==n?r:(t.lastType="operator"!=n||"++"!=a&&"--"!=a?n:"incdec",M(t,r,n,a,e))},indent:function(t,n){if(t.tokenize==y||t.tokenize==w)return e.Pass;if(t.tokenize!=v)return 0;var a,s=n&&n.charAt(0),c=t.lexical;if(!/^\s*else\b/.test(n))for(var u=t.cc.length-1;u>=0;--u){var l=t.cc[u];if(l==U)c=c.prev;else if(l!=_e&&l!=P)break}for(;("stat"==c.type||"form"==c.type)&&("}"==s||(a=t.cc[t.cc.length-1])&&(a==L||a==Q)&&!/^[,\.=+\-*:?[\(]/.test(n));)c=c.prev;o&&")"==c.type&&"stat"==c.prev.type&&(c=c.prev);var f=c.type,d=s==f;return"vardef"==f?c.indented+("operator"==t.lastType||","==t.lastType?c.info.length+1:0):"form"==f&&"{"==s?c.indented:"form"==f?c.indented+i:"stat"==f?c.indented+(function(e,t){return"operator"==e.lastType||","==e.lastType||p.test(t.charAt(0))||/[,.]/.test(t.charAt(0))}(t,n)?o||i:0):"switch"!=c.info||d||0==r.doubleIndentSwitch?c.align?c.column+(d?0:1):c.indented+(d?0:i):c.indented+(/^(?:case|default)\b/.test(n)?i:2*i)},electricInput:/^\s*(?:case .*?:|default:|\{|\})$/,blockCommentStart:c?null:"/*",blockCommentEnd:c?null:"*/",blockCommentContinue:c?null:" * ",lineComment:c?null:"//",fold:"brace",closeBrackets:"()[]{}''\"\"``",helperType:c?"json":"javascript",jsonldMode:s,jsonMode:c,expressionAllowed:et,skipExpression:function(t){M(t,"atom","atom","true",new e.StringStream("",2,null))}}})),e.registerHelper("wordChars","javascript",/[\w$]/),e.defineMIME("text/javascript","javascript"),e.defineMIME("text/ecmascript","javascript"),e.defineMIME("application/javascript","javascript"),e.defineMIME("application/x-javascript","javascript"),e.defineMIME("application/ecmascript","javascript"),e.defineMIME("application/json",{name:"javascript",json:!0}),e.defineMIME("application/x-json",{name:"javascript",json:!0}),e.defineMIME("application/manifest+json",{name:"javascript",json:!0}),e.defineMIME("application/ld+json",{name:"javascript",jsonld:!0}),e.defineMIME("text/typescript",{name:"javascript",typescript:!0}),e.defineMIME("application/typescript",{name:"javascript",typescript:!0})}(r(4631))}}]);
//# sourceMappingURL=6876.44f4d32ced49706f86e3.js.map