(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[5],{"/0+H":function(e,t,n){"use strict";t.__esModule=!0,t.isInAmpMode=i,t.useAmp=function(){return i(o.default.useContext(a.AmpStateContext))};var r,o=(r=n("q1tI"))&&r.__esModule?r:{default:r},a=n("lwAK");function i(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.ampFirst,n=void 0!==t&&t,r=e.hybrid,o=void 0!==r&&r,a=e.hasQuery,i=void 0!==a&&a;return n||o&&i}},"5M6V":function(e,t,n){"use strict";(function(e){n.d(t,"a",(function(){return f}));var r=n("q1tI"),o=n.n(r),a=n("8Kt/"),i=n.n(a),u=n("dRp5"),c=n("iXN3"),s=n("ZMKu"),l=o.a.createElement;function f(t){var n,a=Object(r.useState)(!0),f=a[0],d=a[1],p=Object(r.useState)(e.innerWidth>=1024),h=p[0],v=p[1];return Object(r.useEffect)((function(){return n=document.addEventListener("scroll",(function(e){var t,n=null===(t=document.scrollingElement)||void 0===t?void 0:t.scrollTop;d(!(n>=60))})),e.addEventListener("resize",(function(t){e.innerWidth>=1024?v(!0):v(!1)})),function(){document.removeEventListener("scroll",n)}}),[f,h]),l(o.a.Fragment,null,l(i.a,null,l("link",{rel:"icon",href:"/favicon.ico"}),l("meta",{name:"description",content:"Personal website of Rane Gillian created with Next.JS"}),l("link",{href:"https://fonts.googleapis.com/icon?family=Material+Icons",rel:"stylesheet"})),l(u.a,{onTop:f,isLarge:h,categories:t.categories}),l(s.a,null,l(s.c.div,{className:"min-h-screen",key:"mainContainer",initial:"pageInitial",animate:"pageAnimate",exit:"pageExit",variants:{pageInitial:{opacity:0},pageAnimate:{opacity:1,transition:{duration:1,delay:.25,type:"spring",stiffness:500}},pageExit:{opacity:0}}},t.children)),l(c.a,null))}}).call(this,n("yLpj"))},"82gj":function(e,t,n){"use strict";n.d(t,"a",(function(){return o})),n.d(t,"b",(function(){return r}));var r=function(){},o=function(){}},"8Kt/":function(e,t,n){"use strict";n("lSNA");t.__esModule=!0,t.defaultHead=l,t.default=void 0;var r,o=function(e){if(e&&e.__esModule)return e;if(null===e||"object"!==typeof e&&"function"!==typeof e)return{default:e};var t=s();if(t&&t.has(e))return t.get(e);var n={},r=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in e)if(Object.prototype.hasOwnProperty.call(e,o)){var a=r?Object.getOwnPropertyDescriptor(e,o):null;a&&(a.get||a.set)?Object.defineProperty(n,o,a):n[o]=e[o]}n.default=e,t&&t.set(e,n);return n}(n("q1tI")),a=(r=n("Xuae"))&&r.__esModule?r:{default:r},i=n("lwAK"),u=n("FYa8"),c=n("/0+H");function s(){if("function"!==typeof WeakMap)return null;var e=new WeakMap;return s=function(){return e},e}function l(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=[o.default.createElement("meta",{charSet:"utf-8"})];return e||t.push(o.default.createElement("meta",{name:"viewport",content:"width=device-width"})),t}function f(e,t){return"string"===typeof t||"number"===typeof t?e:t.type===o.default.Fragment?e.concat(o.default.Children.toArray(t.props.children).reduce((function(e,t){return"string"===typeof t||"number"===typeof t?e:e.concat(t)}),[])):e.concat(t)}var d=["name","httpEquiv","charSet","itemProp"];function p(e,t){return e.reduce((function(e,t){var n=o.default.Children.toArray(t.props.children);return e.concat(n)}),[]).reduce(f,[]).reverse().concat(l(t.inAmpMode)).filter(function(){var e=new Set,t=new Set,n=new Set,r={};return function(o){var a=!0;if(o.key&&"number"!==typeof o.key&&o.key.indexOf("$")>0){var i=o.key.slice(o.key.indexOf("$")+1);e.has(i)?a=!1:e.add(i)}switch(o.type){case"title":case"base":t.has(o.type)?a=!1:t.add(o.type);break;case"meta":for(var u=0,c=d.length;u<c;u++){var s=d[u];if(o.props.hasOwnProperty(s))if("charSet"===s)n.has(s)?a=!1:n.add(s);else{var l=o.props[s],f=r[s]||new Set;f.has(l)?a=!1:(f.add(l),r[s]=f)}}}return a}}()).reverse().map((function(e,t){var n=e.key||t;return o.default.cloneElement(e,{key:n})}))}function h(e){var t=e.children,n=(0,o.useContext)(i.AmpStateContext),r=(0,o.useContext)(u.HeadManagerContext);return o.default.createElement(a.default,{reduceComponentsToState:p,headManager:r,inAmpMode:(0,c.isInAmpMode)(n)},t)}h.rewind=function(){};var v=h;t.default=v},"9uj6":function(e,t,n){"use strict";n.r(t);var r=/^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|download|draggable|encType|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|inert|itemProp|itemScope|itemType|itemID|itemRef|on|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/,o=function(e){var t={};return function(n){return void 0===t[n]&&(t[n]=e(n)),t[n]}}((function(e){return r.test(e)||111===e.charCodeAt(0)&&110===e.charCodeAt(1)&&e.charCodeAt(2)<91}));t.default=o},Bnag:function(e,t){e.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}},EbDI:function(e,t){e.exports=function(e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}},Ibe6:function(e,t,n){"use strict";n.d(t,"a",(function(){return l})),n.d(t,"b",(function(){return C})),n.d(t,"c",(function(){return T})),n.d(t,"d",(function(){return p})),n.d(t,"e",(function(){return A})),n.d(t,"f",(function(){return S})),n.d(t,"g",(function(){return s})),n.d(t,"h",(function(){return h})),n.d(t,"i",(function(){return y})),n.d(t,"j",(function(){return v})),n.d(t,"k",(function(){return j})),n.d(t,"l",(function(){return f})),n.d(t,"m",(function(){return m})),n.d(t,"n",(function(){return g}));var r=n("mrSG"),o=function(e,t){return function(n){return Math.max(Math.min(n,t),e)}},a=function(e){return e%1?Number(e.toFixed(5)):e},i=/(-)?(\d[\d\.]*)/g,u=/(#[0-9a-f]{6}|#[0-9a-f]{3}|#(?:[0-9a-f]{2}){2,4}|(rgb|hsl)a?\((-?[\d\.]+%?[,\s]+){2,3}\s*\/*\s*[\d\.]+%?\))/gi,c=/^(#[0-9a-f]{3}|#(?:[0-9a-f]{2}){2,4}|(rgb|hsl)a?\((-?[\d\.]+%?[,\s]+){2,3}\s*\/*\s*[\d\.]+%?\))$/i,s={test:function(e){return"number"===typeof e},parse:parseFloat,transform:function(e){return e}},l=Object(r.a)(Object(r.a)({},s),{transform:o(0,1)}),f=Object(r.a)(Object(r.a)({},s),{default:1}),d=function(e){return{test:function(t){return"string"===typeof t&&t.endsWith(e)&&1===t.split(" ").length},parse:parseFloat,transform:function(t){return""+t+e}}},p=d("deg"),h=d("%"),v=d("px"),m=d("vh"),g=d("vw"),y=Object(r.a)(Object(r.a)({},h),{parse:function(e){return h.parse(e)/100},transform:function(e){return h.transform(100*e)}}),b=o(0,255),x=function(e){return void 0!==e.red},k=function(e){return void 0!==e.hue};var w=function(e){return function(t){if("string"!==typeof t)return t;for(var n={},r=function(e){return e.substring(e.indexOf("(")+1,e.lastIndexOf(")"))}(t).replace(/(,|\/)/g," ").split(/ \s*/),o=0;o<4;o++)n[e[o]]=void 0!==r[o]?parseFloat(r[o]):1;return n}},M=Object(r.a)(Object(r.a)({},s),{transform:function(e){return Math.round(b(e))}});function O(e,t){return e.startsWith(t)&&c.test(e)}var j={test:function(e){return"string"===typeof e?O(e,"rgb"):x(e)},parse:w(["red","green","blue","alpha"]),transform:function(e){var t=e.red,n=e.green,r=e.blue,o=e.alpha,i=void 0===o?1:o;return function(e){var t=e.red,n=e.green,r=e.blue,o=e.alpha;return"rgba("+t+", "+n+", "+r+", "+(void 0===o?1:o)+")"}({red:M.transform(t),green:M.transform(n),blue:M.transform(r),alpha:a(l.transform(i))})}},S={test:function(e){return"string"===typeof e?O(e,"hsl"):k(e)},parse:w(["hue","saturation","lightness","alpha"]),transform:function(e){var t=e.hue,n=e.saturation,r=e.lightness,o=e.alpha,i=void 0===o?1:o;return function(e){var t=e.hue,n=e.saturation,r=e.lightness,o=e.alpha;return"hsla("+t+", "+n+", "+r+", "+(void 0===o?1:o)+")"}({hue:Math.round(t),saturation:h.transform(a(n)),lightness:h.transform(a(r)),alpha:a(l.transform(i))})}},A=Object(r.a)(Object(r.a)({},j),{test:function(e){return"string"===typeof e&&O(e,"#")},parse:function(e){var t="",n="",r="";return e.length>4?(t=e.substr(1,2),n=e.substr(3,2),r=e.substr(5,2)):(t=e.substr(1,1),n=e.substr(2,1),r=e.substr(3,1),t+=t,n+=n,r+=r),{red:parseInt(t,16),green:parseInt(n,16),blue:parseInt(r,16),alpha:1}}}),C={test:function(e){return"string"===typeof e&&c.test(e)||x(e)||k(e)},parse:function(e){return j.test(e)?j.parse(e):S.test(e)?S.parse(e):A.test(e)?A.parse(e):e},transform:function(e){return x(e)?j.transform(e):k(e)?S.transform(e):e}},N=function(e){return"number"===typeof e?0:e},T={test:function(e){if("string"!==typeof e||!isNaN(e))return!1;var t=0,n=e.match(i),r=e.match(u);return n&&(t+=n.length),r&&(t+=r.length),t>0},parse:function(e){var t=e,n=[],r=t.match(u);r&&(t=t.replace(u,"${c}"),n.push.apply(n,r.map(C.parse)));var o=t.match(i);return o&&n.push.apply(n,o.map(s.parse)),n},createTransformer:function(e){var t=e,n=0,r=e.match(u),o=r?r.length:0;if(r)for(var c=0;c<o;c++)t=t.replace(r[c],"${c}"),n++;var s=t.match(i),l=s?s.length:0;if(s)for(c=0;c<l;c++)t=t.replace(s[c],"${n}"),n++;return function(e){for(var r=t,i=0;i<n;i++)r=r.replace(i<o?"${c}":"${n}",i<o?C.transform(e[i]):a(e[i]));return r}},getAnimatableNone:function(e){var t=T.parse(e);return T.createTransformer(e)(t.map(N))}}},Ijbi:function(e,t,n){var r=n("WkPL");e.exports=function(e){if(Array.isArray(e))return r(e)}},Lnxd:function(e,t,n){"use strict";n.d(t,"a",(function(){return c}));var r=n("q1tI"),o={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},a=r.createContext&&r.createContext(o),i=function(){return(i=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var o in t=arguments[n])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e}).apply(this,arguments)},u=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var o=0;for(r=Object.getOwnPropertySymbols(e);o<r.length;o++)t.indexOf(r[o])<0&&(n[r[o]]=e[r[o]])}return n};function c(e){return function(t){return r.createElement(s,i({attr:i({},e.attr)},t),function e(t){return t&&t.map((function(t,n){return r.createElement(t.tag,i({key:n},t.attr),e(t.child))}))}(e.child))}}function s(e){var t=function(t){var n,o=e.size||t.size||"1em";t.className&&(n=t.className),e.className&&(n=(n?n+" ":"")+e.className);var a=e.attr,c=e.title,s=u(e,["attr","title"]);return r.createElement("svg",i({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},t.attr,a,s,{className:n,style:i({color:e.color||t.color},t.style,e.style),height:o,width:o,xmlns:"http://www.w3.org/2000/svg"}),c&&r.createElement("title",null,c),e.children)};return void 0!==a?r.createElement(a.Consumer,null,(function(e){return t(e)})):t(o)}},Neuu:function(e,t,n){"use strict";n.d(t,"a",(function(){return ne})),n.d(t,"b",(function(){return G})),n.d(t,"c",(function(){return B})),n.d(t,"d",(function(){return K})),n.d(t,"e",(function(){return X})),n.d(t,"f",(function(){return $})),n.d(t,"g",(function(){return J})),n.d(t,"h",(function(){return Y})),n.d(t,"i",(function(){return U})),n.d(t,"j",(function(){return W})),n.d(t,"k",(function(){return z})),n.d(t,"l",(function(){return u})),n.d(t,"m",(function(){return ge})),n.d(t,"n",(function(){return le})),n.d(t,"o",(function(){return D})),n.d(t,"p",(function(){return F})),n.d(t,"q",(function(){return H})),n.d(t,"r",(function(){return oe})),n.d(t,"s",(function(){return I})),n.d(t,"t",(function(){return q})),n.d(t,"u",(function(){return m})),n.d(t,"v",(function(){return O})),n.d(t,"w",(function(){return v})),n.d(t,"x",(function(){return re})),n.d(t,"y",(function(){return fe}));var r=n("mrSG"),o=n("82gj"),a=n("Ibe6"),i=n("eUsl"),u=function(e,t,n){return Math.min(Math.max(n,e),t)};function c(e){var t,n,r=e.duration,a=void 0===r?800:r,i=e.bounce,c=void 0===i?.25:i,l=e.velocity,f=void 0===l?0:l,d=e.mass,p=void 0===d?1:d;Object(o.b)(a<=1e4,"Spring duration must be 10 seconds or less");var h=1-c;h=u(.05,1,h),a=u(.01,10,a/1e3),h<1?(t=function(e){var t=e*h,n=t*a;return.001-(t-f)/s(e,h)*Math.exp(-n)},n=function(e){var n=e*h*a,r=n*f+f,o=Math.pow(h,2)*Math.pow(e,2)*a,i=Math.exp(-n),u=s(Math.pow(e,2),h);return(.001-t(e)>0?-1:1)*((r-o)*i)/u}):(t=function(e){return Math.exp(-e*a)*((e-f)*a+1)-.001},n=function(e){return Math.exp(-e*a)*(a*a*(f-e))});var v=function(e,t,n){for(var r=n,o=1;o<12;o++)r-=e(r)/t(r);return r}(t,n,5/a);if(isNaN(v))return{stiffness:100,damping:10};var m=Math.pow(v,2)*p;return{stiffness:m,damping:2*h*Math.sqrt(p*m)}}function s(e,t){return e*Math.sqrt(1-t*t)}var l=["duration","bounce"],f=["stiffness","damping","mass"];function d(e,t){return t.some((function(t){return void 0!==e[t]}))}function p(e){var t=e.from,n=void 0===t?0:t,o=e.to,a=void 0===o?1:o,i=e.restSpeed,u=void 0===i?2:i,p=e.restDelta,v=Object(r.d)(e,["from","to","restSpeed","restDelta"]),m={done:!1,value:n},g=function(e){var t=Object(r.a)({velocity:0,stiffness:100,damping:10,mass:1,isResolvedFromDuration:!1},e);if(!d(e,f)&&d(e,l)){var n=c(e);(t=Object(r.a)(Object(r.a)(Object(r.a)({},t),n),{velocity:0,mass:1})).isResolvedFromDuration=!0}return t}(v),y=g.stiffness,b=g.damping,x=g.mass,k=g.velocity,w=g.isResolvedFromDuration,M=h,O=h;function j(){var e=k?-k/1e3:0,t=a-n,r=b/(2*Math.sqrt(y*x)),o=Math.sqrt(y/x)/1e3;if(null!==p&&void 0!==p||(p=Math.abs(a-n)<=1?.01:.4),r<1){var i=s(o,r);M=function(n){var u=Math.exp(-r*o*n);return a-u*((e+r*o*t)/i*Math.sin(i*n)+t*Math.cos(i*n))},O=function(n){var a=Math.exp(-r*o*n);return r*o*a*(Math.sin(i*n)*(e+r*o*t)/i+t*Math.cos(i*n))-a*(Math.cos(i*n)*(e+r*o*t)-i*t*Math.sin(i*n))}}else if(1===r)M=function(n){return a-Math.exp(-o*n)*(t+(e+o*t)*n)};else{var u=o*Math.sqrt(r*r-1);M=function(n){var i=Math.exp(-r*o*n),c=Math.min(u*n,300);return a-i*((e+r*o*t)*Math.sinh(c)+u*t*Math.cosh(c))/u}}}return j(),{next:function(e){var t=M(e);if(w)m.done=e>=v.duration;else{var n=1e3*O(e),r=Math.abs(n)<=u,o=Math.abs(a-t)<=p;m.done=r&&o}return m.value=m.done?a:t,m},flipTarget:function(){var e;k=-k,n=(e=[a,n])[0],a=e[1],j()}}}p.needsInterpolation=function(e,t){return"string"===typeof e||"string"===typeof t};var h=function(e){return 0},v=function(e,t,n){var r=t-e;return 0===r?1:(n-e)/r},m=function(e,t,n){return-n*e+n*t+e},g=function(e,t,n){var r=e*e,o=t*t;return Math.sqrt(Math.max(0,n*(o-r)+r))},y=[a.e,a.k,a.f],b=function(e){return y.find((function(t){return t.test(e)}))},x=function(e){return"'"+e+"' is not an animatable color. Use the equivalent color code instead."},k=function(e,t){var n=b(e),i=b(t);Object(o.a)(!!n,x(e)),Object(o.a)(!!i,x(t)),Object(o.a)(n.transform===i.transform,"Both colors must be hex/RGBA, OR both must be HSLA.");var u=n.parse(e),c=i.parse(t),s=Object(r.a)({},u),l=n===a.f?m:g;return function(e){for(var t in s)"alpha"!==t&&(s[t]=l(u[t],c[t],e));return s.alpha=m(u.alpha,c.alpha,e),n.transform(s)}},w=function(e){return"number"===typeof e},M=function(e,t){return function(n){return t(e(n))}},O=function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];return e.reduce(M)};function j(e,t){return w(e)?function(n){return m(e,t,n)}:a.b.test(e)?k(e,t):N(e,t)}var S=function(e,t){var n=Object(r.f)(e),o=n.length,a=e.map((function(e,n){return j(e,t[n])}));return function(e){for(var t=0;t<o;t++)n[t]=a[t](e);return n}},A=function(e,t){var n=Object(r.a)(Object(r.a)({},e),t),o={};for(var a in n)void 0!==e[a]&&void 0!==t[a]&&(o[a]=j(e[a],t[a]));return function(e){for(var t in o)n[t]=o[t](e);return n}};function C(e){for(var t=a.c.parse(e),n=t.length,r=0,o=0,i=0,u=0;u<n;u++)r||"number"===typeof t[u]?r++:void 0!==t[u].hue?i++:o++;return{parsed:t,numNumbers:r,numRGB:o,numHSL:i}}var N=function(e,t){var n=a.c.createTransformer(t),r=C(e),i=C(t);return Object(o.a)(r.numHSL===i.numHSL&&r.numRGB===i.numRGB&&r.numNumbers>=i.numNumbers,"Complex values '"+e+"' and '"+t+"' too different to mix. Ensure all colors are of the same type."),O(S(r.parsed,i.parsed),n)},T=function(e,t){return function(n){return m(e,t,n)}};function E(e,t,n){for(var r,o=[],i=n||("number"===typeof(r=e[0])?T:"string"===typeof r?a.b.test(r)?k:N:Array.isArray(r)?S:"object"===typeof r?A:void 0),u=e.length-1,c=0;c<u;c++){var s=i(e[c],e[c+1]);if(t){var l=Array.isArray(t)?t[c]:t;s=O(l,s)}o.push(s)}return o}function I(e,t,n){var r=void 0===n?{}:n,a=r.clamp,i=void 0===a||a,c=r.ease,s=r.mixer,l=e.length;Object(o.a)(l===t.length,"Both input and output ranges must be the same length"),Object(o.a)(!c||!Array.isArray(c)||c.length===l-1,"Array of easing functions must be of length `input.length - 1`, as it applies to the transitions **between** the defined values."),e[0]>e[l-1]&&(e=[].concat(e),t=[].concat(t),e.reverse(),t.reverse());var f=E(t,c,s),d=2===l?function(e,t){var n=e[0],r=e[1],o=t[0];return function(e){return o(v(n,r,e))}}(e,f):function(e,t){var n=e.length,r=n-1;return function(o){var a=0,i=!1;if(o<=e[0]?i=!0:o>=e[r]&&(a=r-1,i=!0),!i){for(var u=1;u<n&&!(e[u]>o||u===r);u++);a=u-1}var c=v(e[a],e[a+1],o);return t[a](c)}}(e,f);return i?function(t){return d(u(e[0],e[l-1],t))}:d}var P=function(e){return function(t){return 1-e(1-t)}},L=function(e){return function(t){return t<=.5?e(2*t)/2:(2-e(2*(1-t)))/2}},R=function(e){return function(t){return t*t*((e+1)*t-e)}},_=function(e){var t=R(e);return function(e){return(e*=2)<1?.5*t(e):.5*(2-Math.pow(2,-10*(e-1)))}},q=function(e){return e},D=function(e){return function(t){return Math.pow(t,e)}}(2),H=P(D),F=L(D),U=function(e){return 1-Math.sin(Math.acos(e))},z=P(U),W=L(z),B=R(1.525),X=P(B),K=L(B),G=_(1.525),Y=function(e){if(1===e||0===e)return e;var t=e*e;return e<.36363636363636365?7.5625*t:e<.7272727272727273?9.075*t-9.9*e+3.4:e<.9?12.066481994459833*t-19.63545706371191*e+8.898060941828255:10.8*e*e-20.52*e+10.72},$=P(Y),J=function(e){return e<.5?.5*(1-Y(1-2*e)):.5*Y(2*e-1)+.5};function V(e,t){return e.map((function(){return t||F})).splice(0,e.length-1)}function Z(e){var t=e.from,n=void 0===t?0:t,r=e.to,o=void 0===r?1:r,a=e.ease,i=e.offset,u=e.duration,c=void 0===u?300:u,s={done:!1,value:n},l=Array.isArray(o)?o:[n,o],f=function(e,t){return e.map((function(e){return e*t}))}(null!==i&&void 0!==i?i:function(e){var t=e.length;return e.map((function(e,n){return 0!==n?n/(t-1):0}))}(l),c);function d(){return I(f,l,{ease:Array.isArray(a)?a:V(l,a)})}var p=d();return{next:function(e){return s.value=p(e),s.done=e>=c,s},flipTarget:function(){l.reverse(),p=d()}}}var Q={keyframes:Z,spring:p,decay:function(e){var t=e.velocity,n=void 0===t?0:t,r=e.from,o=void 0===r?0:r,a=e.power,i=void 0===a?.8:a,u=e.timeConstant,c=void 0===u?350:u,s=e.restDelta,l=void 0===s?.5:s,f=e.modifyTarget,d={done:!1,value:o},p=i*n,h=o+p,v=void 0===f?h:f(h);return v!==h&&(p=v-o),{next:function(e){var t=-p*Math.exp(-e/c);return d.done=!(t>l||t<-l),d.value=d.done?v:v+t,d},flipTarget:function(){}}}};function ee(e,t,n){return void 0===n&&(n=0),e-t-n}var te=function(e){var t=function(t){var n=t.delta;return e(n)};return{start:function(){return i.b.update(t,!0,!0)},stop:function(){return i.a.update(t)}}};function ne(e){var t,n,o,a,i,u=e.from,c=e.autoplay,s=void 0===c||c,l=e.driver,f=void 0===l?te:l,d=e.elapsed,h=void 0===d?0:d,v=e.repeat,m=void 0===v?0:v,g=e.repeatType,y=void 0===g?"loop":g,b=e.repeatDelay,x=void 0===b?0:b,k=e.onPlay,w=e.onStop,M=e.onComplete,O=e.onRepeat,j=e.onUpdate,S=Object(r.d)(e,["from","autoplay","driver","elapsed","repeat","repeatType","repeatDelay","onPlay","onStop","onComplete","onRepeat","onUpdate"]),A=S.to,C=0,N=S.duration,T=!1,E=!0,P=function(e){if(Array.isArray(e.to))return Z;if(Q[e.type])return Q[e.type];var t=new Set(Object.keys(e));return t.has("ease")||t.has("duration")&&!t.has("dampingRatio")?Z:t.has("dampingRatio")||t.has("stiffness")||t.has("mass")||t.has("damping")||t.has("restSpeed")||t.has("restDelta")?p:Z}(S);(null===(n=(t=P).needsInterpolation)||void 0===n?void 0:n.call(t,u,A))&&(i=I([0,100],[u,A],{clamp:!1}),u=0,A=100);var L=P(Object(r.a)(Object(r.a)({},S),{from:u,to:A}));function R(){C++,"reverse"===y?h=function(e,t,n,r){return void 0===n&&(n=0),void 0===r&&(r=!0),r?ee(t+-e,t,n):t-(e-t)+n}(h,N,x,E=C%2===0):(h=ee(h,N,x),"mirror"===y&&L.flipTarget()),T=!1,O&&O()}function _(e){if(E||(e=-e),h+=e,!T){var t=L.next(Math.max(0,h));a=t.value,i&&(a=i(a)),T=E?t.done:h<=0}null===j||void 0===j||j(a),T&&(0===C&&(null!==N&&void 0!==N||(N=h)),C<m?function(e,t,n,r){return r?e>=t+n:e<=-n}(h,N,x,E)&&R():(o.stop(),M&&M()))}return s&&(null===k||void 0===k||k(),(o=f(_)).start()),{stop:function(){null===w||void 0===w||w(),o.stop()}}}function re(e,t){return t?e*(1e3/t):0}function oe(e){var t,n=e.from,o=void 0===n?0:n,a=e.velocity,u=void 0===a?0:a,c=e.min,s=e.max,l=e.power,f=void 0===l?.8:l,d=e.timeConstant,p=void 0===d?750:d,h=e.bounceStiffness,v=void 0===h?500:h,m=e.bounceDamping,g=void 0===m?10:m,y=e.restDelta,b=void 0===y?1:y,x=e.modifyTarget,k=e.driver,w=e.onUpdate,M=e.onComplete;function O(e){return void 0!==c&&e<c||void 0!==s&&e>s}function j(e){return void 0===c?s:void 0===s||Math.abs(c-e)<Math.abs(s-e)?c:s}function S(e){null===t||void 0===t||t.stop(),t=ne(Object(r.a)(Object(r.a)({},e),{driver:k,onUpdate:function(t){var n;null===w||void 0===w||w(t),null===(n=e.onUpdate)||void 0===n||n.call(e,t)},onComplete:M}))}function A(e){S(Object(r.a)({type:"spring",stiffness:v,damping:g,restDelta:b},e))}if(O(o))A({from:o,velocity:u,to:j(o)});else{var C=f*u+o;"undefined"!==typeof x&&(C=x(C));var N,T,E=j(C),I=E===c?-1:1;S({type:"decay",from:o,velocity:u,timeConstant:p,power:f,restDelta:b,modifyTarget:x,onUpdate:O(C)?function(e){N=T,T=e,u=re(e-N,Object(i.c)().delta),(1===I&&e>E||-1===I&&e<E)&&A({from:e,to:E,velocity:u})}:void 0})}return{stop:function(){return null===t||void 0===t?void 0:t.stop()}}}var ae=function(e){return e},ie=function(e){return void 0===e&&(e=ae),function(t,n,r){var o=n-r,a=-(0-t+1)*(0-e(Math.abs(o)));return o<=0?n+a:n-a}},ue=(Math.sqrt,function(e){return e.hasOwnProperty("x")&&e.hasOwnProperty("y")}),ce=function(e){return ue(e)&&e.hasOwnProperty("z")},se=function(e,t){return Math.abs(e-t)};function le(e,t){if(w(e)&&w(t))return se(e,t);if(ue(e)&&ue(t)){var n=se(e.x,t.x),r=se(e.y,t.y),o=ce(e)&&ce(t)?se(e.z,t.z):0;return Math.sqrt(Math.pow(n,2)+Math.pow(r,2)+Math.pow(o,2))}}var fe=function(e,t,n){var r=t-e;return((n-e)%r+r)%r+e},de=function(e,t){return 1-3*t+3*e},pe=function(e,t){return 3*t-6*e},he=function(e){return 3*e},ve=function(e,t,n){return((de(t,n)*e+pe(t,n))*e+he(t))*e},me=function(e,t,n){return 3*de(t,n)*e*e+2*pe(t,n)*e+he(t)};function ge(e,t,n,r){if(e===t&&n===r)return q;for(var o=new Float32Array(11),a=0;a<11;++a)o[a]=ve(.1*a,e,n);function i(t){for(var r=0,a=1;10!==a&&o[a]<=t;++a)r+=.1;--a;var i=r+.1*((t-o[a])/(o[a+1]-o[a])),u=me(i,e,n);return u>=.001?function(e,t,n,r){for(var o=0;o<8;++o){var a=me(t,n,r);if(0===a)return t;t-=(ve(t,n,r)-e)/a}return t}(t,i,e,n):0===u?i:function(e,t,n,r,o){var a,i,u=0;do{(a=ve(i=t+(n-t)/2,r,o)-e)>0?n=i:t=i}while(Math.abs(a)>1e-7&&++u<10);return i}(t,r,r+.1,e,n)}return function(e){return 0===e||1===e?e:ve(i(e),t,r)}}},RIqP:function(e,t,n){var r=n("Ijbi"),o=n("EbDI"),a=n("ZhPi"),i=n("Bnag");e.exports=function(e){return r(e)||o(e)||a(e)||i()}},Xuae:function(e,t,n){"use strict";var r=n("RIqP"),o=n("lwsE"),a=n("W8MJ"),i=(n("PJYZ"),n("7W2i")),u=n("a1gu"),c=n("Nsbk");function s(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=c(e);if(t){var o=c(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return u(this,n)}}t.__esModule=!0,t.default=void 0;var l=n("q1tI"),f=function(e){i(n,e);var t=s(n);function n(e){var a;return o(this,n),(a=t.call(this,e))._hasHeadManager=void 0,a.emitChange=function(){a._hasHeadManager&&a.props.headManager.updateHead(a.props.reduceComponentsToState(r(a.props.headManager.mountedInstances),a.props))},a._hasHeadManager=a.props.headManager&&a.props.headManager.mountedInstances,a}return a(n,[{key:"componentDidMount",value:function(){this._hasHeadManager&&this.props.headManager.mountedInstances.add(this),this.emitChange()}},{key:"componentDidUpdate",value:function(){this.emitChange()}},{key:"componentWillUnmount",value:function(){this._hasHeadManager&&this.props.headManager.mountedInstances.delete(this),this.emitChange()}},{key:"render",value:function(){return null}}]),n}(l.Component);t.default=f},YFqc:function(e,t,n){e.exports=n("cTJO")},biSZ:function(e,t,n){"use strict";n.d(t,"a",(function(){return c}));var r=n("q1tI"),o=n.n(r),a=n("YFqc"),i=n.n(a),u=o.a.createElement;function c(e){var t=e.text,n=e.link;return t?u("span",{className:"inline-block uppercase text-xs rounded-md bg-accent-light px-2 py-1 mr-1 mb-2 text-dark"},t):n?u(i.a,{href:"/categories/".concat(n.toLowerCase())},u("a",null,u("span",{className:"inline-block uppercase text-xs rounded-md bg-accent-light px-2 py-1 mr-1 mb-2 text-dark"},n))):null}},cTJO:function(e,t,n){"use strict";var r=n("J4zp"),o=n("284h");t.__esModule=!0,t.default=void 0;var a,i=o(n("q1tI")),u=n("elyg"),c=n("nOHt"),s=new Map,l=window.IntersectionObserver,f={};var d=function(e,t){var n=a||(l?a=new l((function(e){e.forEach((function(e){if(s.has(e.target)){var t=s.get(e.target);(e.isIntersecting||e.intersectionRatio>0)&&(a.unobserve(e.target),s.delete(e.target),t())}}))}),{rootMargin:"200px"}):void 0);return n?(n.observe(e),s.set(e,t),function(){try{n.unobserve(e)}catch(t){console.error(t)}s.delete(e)}):function(){}};function p(e,t,n,r){(0,u.isLocalURL)(t)&&(e.prefetch(t,n,r).catch((function(e){0})),f[t+"%"+n]=!0)}var h=function(e){var t=!1!==e.prefetch,n=i.default.useState(),o=r(n,2),a=o[0],s=o[1],h=(0,c.useRouter)(),v=h&&h.pathname||"/",m=i.default.useMemo((function(){var t=(0,u.resolveHref)(v,e.href);return{href:t,as:e.as?(0,u.resolveHref)(v,e.as):t}}),[v,e.href,e.as]),g=m.href,y=m.as;i.default.useEffect((function(){if(t&&l&&a&&a.tagName&&(0,u.isLocalURL)(g)&&!f[g+"%"+y])return d(a,(function(){p(h,g,y)}))}),[t,a,g,y,h]);var b=e.children,x=e.replace,k=e.shallow,w=e.scroll;"string"===typeof b&&(b=i.default.createElement("a",null,b));var M=i.Children.only(b),O={ref:function(e){e&&s(e),M&&"object"===typeof M&&M.ref&&("function"===typeof M.ref?M.ref(e):"object"===typeof M.ref&&(M.ref.current=e))},onClick:function(e){M.props&&"function"===typeof M.props.onClick&&M.props.onClick(e),e.defaultPrevented||function(e,t,n,r,o,a,i){("A"!==e.currentTarget.nodeName||!function(e){var t=e.currentTarget.target;return t&&"_self"!==t||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&(0,u.isLocalURL)(n))&&(e.preventDefault(),null==i&&(i=r.indexOf("#")<0),t[o?"replace":"push"](n,r,{shallow:a}).then((function(e){e&&i&&(window.scrollTo(0,0),document.body.focus())})))}(e,h,g,y,x,k,w)}};return t&&(O.onMouseEnter=function(e){(0,u.isLocalURL)(g)&&(M.props&&"function"===typeof M.props.onMouseEnter&&M.props.onMouseEnter(e),p(h,g,y,{priority:!0}))}),(e.passHref||"a"===M.type&&!("href"in M.props))&&(O.href=(0,u.addBasePath)(y)),i.default.cloneElement(M,O)};t.default=h},dRp5:function(e,t,n){"use strict";n.d(t,"a",(function(){return d}));var r=n("q1tI"),o=n.n(r),a=n("YFqc"),i=n.n(a),u=n("ZMKu"),c=n("ma3e"),s=o.a.createElement;function l(e){var t=e.categories,n=e.shown,r=e.setToggleCategories,a=e.setToggleMenu;return s(o.a.Fragment,null,s("div",{className:"transition-opacity duration-300 ease-in-out fixed w-full h-full bg-black bottom-0 left-0",style:{transform:n?"translateX(0)":"translateX(100%)",opacity:n?.25:0},onClick:function(){return r(!n)}}),s("nav",{className:"transition-all duration-300 ease-in-out h-full bg-dark shadow-lg fixed top-0 right-0 w-64 max-w-xl ",style:{transform:n?"translateX(0)":"translateX(100%)",zIndex:200}},s("ul",null,s("li",{key:"hide"},s("div",{className:"flex py-2 px-4 hover:text-dark hover:bg-accent-light cursor-pointer text-accent-light ",onClick:function(){return r(!n)}},s("span",{className:"flex ml-auto h-6"},s("b",null,"CLOSE")," \xa0 ",s(c.a,{size:25})))),t.map((function(e){return s("li",{key:e,onClick:function(){r(!1),a(!1)}},s(i.a,{href:"/categories/".concat(e),as:"/categories/".concat(e.toLowerCase())},s("a",{className:"flex py-2 px-4 hover:text-dark hover:bg-accent-light text-accent-light "},e)))})))))}var f=o.a.createElement;function d(e){var t=Object(r.useState)(!1),n=t[0],o=t[1],a=(Object(u.d)().scrollYProgress,Object(r.useState)(!1)),s=a[0],d=a[1];return f(u.c.header,{id:"header",className:"fixed w-full lg:px-16 px-6 lg:py-0 py-2 flex flex-wrap items-center transition duration-500 z-50  "+(e.isLarge?e.onTop?"bg-transparent text-accent-light":"bg-dark text-foreground":n?"bg-dark text-foreground":e.onTop?"bg-transparent text-accent-light":"bg-dark text-foreground")},f("div",{className:"flex-1 flex justify-between items-center"},f(i.a,{href:"/"},f("a",{className:"fill-current"},f("img",{className:"bg-foreground rounded-full",src:"/logo.png",width:"32",height:"32"}))),f("div",{className:"m-0 mr-auto p-0 pl-1 my-auto"},f("h1",{className:"text-2xl"},f("strong",null,"RANE"),"GILLIAN"))),f("div",{className:"transition cursor-pointer lg:hidden focus:outline-none  border border-transparent rounded-md p-1 py-3 relative  hover:text-dark hover:border-accent-dark hover:bg-accent-light",style:{minHeight:42,minWidth:42},onClick:function(){return o(!n)},id:"toggle-menu"},f("div",{className:"container"},f("div",{className:"absolute ",style:{top:"4px"}},f(n?c.d:c.b,{size:32})))),f(u.c.div,{className:"lg:flex lg:items-center lg:w-auto w-full text-foreground lg:h-auto",animate:{height:n?"auto":0},transition:{duration:.3,type:"tween"},id:"menu"},f("nav",{className:n?"visible":"invisible lg:visible"},f("ul",{className:"lg:flex items-center justify-between text-base pt-4 lg:pt-0"},f(u.c.li,{key:"home",animate:{opacity:e.isLarge||n?1:0,y:e.isLarge||n?0:-20},transition:{duration:.3,type:"tween"}},f(i.a,{href:"/",as:"/"},f("a",{className:"lg:py-4 py-3 px-5 block border-b-2 border-transparent "+(e.isLarge?e.onTop?"text-accent-light hover:text-dark hover:border-dark hover:bg-accent-light":"text-foreground hover:text-dark hover:border-accent-dark hover:bg-accent-light":n?"text-foreground hover:text-dark hover:border-accent-dark hover:bg-accent-light":e.onTop?"text-accent-light hover:text-dark hover:border-dark hover:bg-accent-light":"text-foreground hover:text-dark hover:border-accent-dark hover:bg-accent-light"),onClick:function(){return o(!1)}},"Home"))),f(u.c.li,{className:"cursor-pointer",key:"categories",animate:{opacity:e.isLarge||n?1:0,y:e.isLarge||n?0:-20},transition:{duration:.3,type:"tween"}},f("a",{className:"lg:py-4 py-3 px-5 flex border-b-2 border-transparent  "+(e.isLarge?e.onTop?"text-accent-light hover:text-dark hover:border-dark hover:bg-accent-light":"text-foreground hover:text-dark hover:border-accent-dark hover:bg-accent-light":n?"text-foreground hover:text-dark hover:border-accent-dark hover:bg-accent-light":e.onTop?"text-accent-light hover:text-dark hover:border-dark hover:bg-accent-light":"text-foreground hover:text-dark hover:border-accent-dark hover:bg-accent-light"),onClick:function(){return d(!s)}},"Categories\xa0",f(c.c,{className:"mt-1"}))),f(l,{categories:e.categories,shown:s,setToggleCategories:d,setToggleMenu:o}),f(u.c.li,{key:"about",animate:{opacity:e.isLarge||n?1:0,y:e.isLarge||n?0:-20},transition:{duration:.3,type:"tween"}},f(i.a,{href:"/about",as:"/about"},f("a",{className:"lg:py-4 py-3 px-5 block border-b-2 border-transparent "+(e.isLarge?e.onTop?"text-accent-light hover:text-dark hover:border-dark hover:bg-accent-light":"text-foreground hover:text-dark hover:border-accent-dark hover:bg-accent-light":n?"text-foreground hover:text-dark hover:border-accent-dark hover:bg-accent-light":e.onTop?"text-accent-light hover:text-dark hover:border-dark hover:bg-accent-light":"text-foreground hover:text-dark hover:border-accent-dark hover:bg-accent-light"),onClick:function(){return o(!1)}},"About")))))))}},eUsl:function(e,t,n){"use strict";n.d(t,"a",(function(){return v})),n.d(t,"c",(function(){return b}));var r=n("82gj"),o=0,a="undefined"!==typeof window&&void 0!==window.requestAnimationFrame?function(e){return window.requestAnimationFrame(e)}:function(e){var t=Date.now(),n=Math.max(0,16.7-(t-o));o=t+n,setTimeout((function(){return e(o)}),n)},i=1/60*1e3,u=!0,c=!1,s=!1,l={delta:0,timestamp:0},f=["read","update","preRender","render","postRender"],d=function(e){return c=e},p=f.reduce((function(e,t){return e[t]=function(e){var t=[],n=[],o=0,a=!1,i=0,u=new WeakSet,c=new WeakSet,s={cancel:function(e){var t=n.indexOf(e);u.add(e),-1!==t&&n.splice(t,1)},process:function(r){var l,f;if(a=!0,t=(l=[n,t])[0],(n=l[1]).length=0,o=t.length)for(i=0;i<o;i++)(f=t[i])(r),!0!==c.has(f)||u.has(f)||(s.schedule(f),e(!0));a=!1},schedule:function(e,i,s){void 0===i&&(i=!1),void 0===s&&(s=!1),Object(r.a)("function"===typeof e,"Argument must be a function");var l=s&&a,f=l?t:n;u.delete(e),i&&c.add(e),-1===f.indexOf(e)&&(f.push(e),l&&(o=t.length))}};return s}(d),e}),{}),h=f.reduce((function(e,t){var n=p[t];return e[t]=function(e,t,r){return void 0===t&&(t=!1),void 0===r&&(r=!1),c||y(),n.schedule(e,t,r),e},e}),{}),v=f.reduce((function(e,t){return e[t]=p[t].cancel,e}),{}),m=function(e){return p[e].process(l)},g=function(e){c=!1,l.delta=u?i:Math.max(Math.min(e-l.timestamp,40),1),u||(i=l.delta),l.timestamp=e,s=!0,f.forEach(m),s=!1,c&&(u=!1,a(g))},y=function(){c=!0,u=!0,s||a(g)},b=function(){return l};t.b=h},iXN3:function(e,t,n){"use strict";n.d(t,"a",(function(){return a}));var r=n("q1tI"),o=n.n(r).a.createElement;function a(){return o("div",{className:"bg-dark"},o("div",{className:"py-16"}))}},lSNA:function(e,t){e.exports=function(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}},lwAK:function(e,t,n){"use strict";var r;t.__esModule=!0,t.AmpStateContext=void 0;var o=((r=n("q1tI"))&&r.__esModule?r:{default:r}).default.createContext({});t.AmpStateContext=o},mrSG:function(e,t,n){"use strict";n.d(t,"b",(function(){return o})),n.d(t,"a",(function(){return a})),n.d(t,"d",(function(){return i})),n.d(t,"g",(function(){return u})),n.d(t,"c",(function(){return c})),n.d(t,"e",(function(){return s})),n.d(t,"f",(function(){return l}));var r=function(e,t){return(r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])})(e,t)};function o(e,t){function n(){this.constructor=e}r(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)}var a=function(){return(a=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var o in t=arguments[n])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e}).apply(this,arguments)};function i(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var o=0;for(r=Object.getOwnPropertySymbols(e);o<r.length;o++)t.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(e,r[o])&&(n[r[o]]=e[r[o]])}return n}function u(e){var t="function"===typeof Symbol&&Symbol.iterator,n=t&&e[t],r=0;if(n)return n.call(e);if(e&&"number"===typeof e.length)return{next:function(){return e&&r>=e.length&&(e=void 0),{value:e&&e[r++],done:!e}}};throw new TypeError(t?"Object is not iterable.":"Symbol.iterator is not defined.")}function c(e,t){var n="function"===typeof Symbol&&e[Symbol.iterator];if(!n)return e;var r,o,a=n.call(e),i=[];try{for(;(void 0===t||t-- >0)&&!(r=a.next()).done;)i.push(r.value)}catch(u){o={error:u}}finally{try{r&&!r.done&&(n=a.return)&&n.call(a)}finally{if(o)throw o.error}}return i}function s(){for(var e=[],t=0;t<arguments.length;t++)e=e.concat(c(arguments[t]));return e}function l(){for(var e=0,t=0,n=arguments.length;t<n;t++)e+=arguments[t].length;var r=Array(e),o=0;for(t=0;t<n;t++)for(var a=arguments[t],i=0,u=a.length;i<u;i++,o++)r[o]=a[i];return r}},yLpj:function(e,t){var n;n=function(){return this}();try{n=n||new Function("return this")()}catch(r){"object"===typeof window&&(n=window)}e.exports=n}}]);