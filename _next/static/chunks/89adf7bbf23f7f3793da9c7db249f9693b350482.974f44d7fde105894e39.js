(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[4],{"1OyB":function(e,t,n){"use strict";function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}n.d(t,"a",(function(){return r}))},"4b23":function(e,t,n){"use strict";n.d(t,"a",(function(){return r}));let r=(e=21)=>crypto.getRandomValues(new Uint8Array(e)).reduce(((e,t)=>e+=(t&=63)<36?t.toString(36):t<62?(t-26).toString(36).toUpperCase():t>62?"-":"_"),"")},H82b:function(e,t){},JUPW:function(e,t,n){"use strict";n.d(t,"a",(function(){return o})),n.d(t,"b",(function(){return a}));var r="https://services.devexpress.com/Survey/api/Survey/";function o(e,t,n){var o=new XMLHttpRequest;o.open("GET",r+"GetCompletionStatus?surveyId="+e+"&clientId="+t),o.setRequestHeader("Content-Type","application/x-www-form-urlencoded"),o.onload=o.onerror=function(){var e=JSON.parse(o.response);n(200===o.status,e,o.response)},o.send()}function a(e,t,n,o){var a=new XMLHttpRequest;a.open("POST",r+"SaveResult"),a.setRequestHeader("Content-Type","application/json; charset=utf-8");var i={SurveyId:e,ClientId:t,SurveyResult:JSON.stringify(n),IsPartialCompleted:o},c=JSON.stringify(i);a.send(c)}},KQm4:function(e,t,n){"use strict";function r(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function o(e){return function(e){if(Array.isArray(e))return r(e)}(e)||function(e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(e)||function(e,t){if(e){if("string"===typeof e)return r(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?r(e,t):void 0}}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}n.d(t,"a",(function(){return o}))},exZ4:function(e,t,n){"use strict";function r(e,t,n){for(var r=e.target;!r.classList.contains(t);)r=r.parentNode;r&&(r.classList.toggle("s-visible"),n())}function o(e,t){for(var n=document.querySelectorAll(e.captionSelector),o=0;o<n.length;o++)n[o].addEventListener("click",(function(n){return r(n,e.classname,t)}))}n.d(t,"a",(function(){return o}))},g4pe:function(e,t,n){e.exports=n("8Kt/")},sieU:function(e,t,n){"use strict";var r=n("q1tI"),o=n.n(r),a=n("g4pe"),i=n.n(a),c=n("KQm4"),l=n("ehK1"),u=o.a.createElement,s=["Framework","Resources"];var f=function(e){var t=e.breadcrumbsNav,n=Object(c.a)(t).filter((function(e){return-1===s.indexOf(e.name)&&e.id&&e.url}));if(n.length<=1)return null;var o=n.map((function(e,t,n){return function(e,t){return u(r.Fragment,{key:e.name},!t&&u(l.a,{force:!0,tocItem:e},u("a",{dangerouslySetInnerHTML:{__html:e.name}})),t&&u("span",{"aria-current":"location",className:"text-black"},e.name),!t&&u("span",{"aria-hidden":"true",className:"text-black px-1"},"\u2192"))}(e,t===n.length-1)}));return u("nav",{"aria-label":"breadcrumbs",className:"breadcrumbs"},o)},d=n("MTo2");function p(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var m=o.a.createElement,v=function(e){var t=e.onClick;return m("button",{className:"w-5 h-5 flex justify-center items-center fixed right-2 top-2 hover:bg-gray-100 active:bg-gray-200 focus:bg-gray-200 outline-none",onClick:t},m("svg",{xmlns:"http://www.w3.org/2000/svg",width:"20",height:"20",fill:"none"},m("path",{fill:"#4B5563",fillRule:"evenodd",d:"M4.23 4.23a.783.783 0 0 1 1.106 0L10 8.892l4.664-4.664a.783.783 0 0 1 1.107 1.107L11.107 10l4.664 4.664a.783.783 0 0 1-1.107 1.107L10 11.107 5.336 15.77a.783.783 0 0 1-1.107-1.107L8.893 10 4.23 5.336a.783.783 0 0 1 0-1.107Z",clipRule:"evenodd"})))},b=n("p46w"),h=n.n(b),y=o.a.createElement,g=function(){var e=Object(r.useState)(!1),t=e[0],n=e[1],o="".concat("scroll-button"," ").concat(t?"":"scroll-invisible"),a=function(){var e=document.body.scrollTop>20||document.documentElement.scrollTop>20;n(e)},i=function(){a()};return Object(r.useEffect)((function(){return window.addEventListener("scroll",i),a(),function(){return window.removeEventListener("scroll",i)}}),[i]),y("button",{id:"back-to-top",className:o,onClick:function(){window.scrollTo(0,0)}},y("svg",{xmlns:"http://www.w3.org/2000/svg",width:"44",height:"44",fill:"none"},y("path",{fill:"#fff",fillRule:"evenodd",d:"m12.1 18.92 8.91-8.91a1.4 1.4 0 0 1 1.98 0l8.91 8.91a1.4 1.4 0 0 1-1.98 1.98l-6.42-6.52V33h-3V14.38l-6.42 6.52a1.4 1.4 0 0 1-1.98-1.98Z",clipRule:"evenodd"})))},w=o.a.createElement,k=function(e){var t=e.text,n=e.isPrimary,r=void 0===n||n,o=e.onClick,a="info-btn ".concat(r?"":"secondary");return w("button",{type:"button",className:a,onClick:o},t)},S=n("4b23"),N=n("JUPW"),O=o.a.createElement;function x(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function j(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?x(Object(n),!0).forEach((function(t){p(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):x(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var I,E="0e2e20ec-5f3b-4a1a-b39f-28ebcc89d974",C={topic:"",isPageHelpful:!1,howToImprove:""};!function(e){e.None="none",e.AskForFeedback="ask-for-feedback",e.ShowFeedbackInput="show-feedback-input",e.FeedbackSent="feedback-sent",e.SuggestionSent="suggestion-sent"}(I||(I={}));var A=function(e){var t=e.widgetState,n=e.textAreaRef;switch(t){case I.AskForFeedback:return O("span",{className:"text-sm leading-5 text-gray-900"},"Was this page helpful?");case I.ShowFeedbackInput:return O(o.a.Fragment,null,O("span",{className:"text-sm leading-5 text-gray-900"},"Your feedback has been sent"),O("textarea",{className:"h-24 resize-none mt-2 text-sm leading-5 p-2 border-2 border-gray-500 rounded-sm focus:border-blue-500 outline-none w-full",placeholder:"What can we do to improve this help topic?",ref:n}));case I.SuggestionSent:return O("span",{className:"text-sm leading-5 text-gray-900"},"Thanks for your feedback!",O("br",null),"Any other suggestions? ",O("a",{href:"https://github.com/DevExpress/testcafe/issues/new?assignees=&labels=TYPE%3A+enhancement&template=feature_request.yaml"},"Tell us here"),".");case I.FeedbackSent:return O("span",{className:"text-sm leading-5 text-gray-900"},"Thanks for your feedback!");default:return null}},F=function(){var e=Object(r.useState)(I.AskForFeedback),t=e[0],n=e[1],a=Object(r.useState)(C),i=a[0],c=a[1],l=Object(r.useRef)(null),u=Object(S.a)(),s=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:i;Object(N.b)(E,u,e,!1);var t=e.isPageHelpful?I.FeedbackSent:I.SuggestionSent;n(t),c(e)},f=function(e){"Escape"===(null===e||void 0===e?void 0:e.key)&&n(I.None)};if(Object(r.useEffect)((function(){var e,t,r=null===(e=window)||void 0===e||null===(t=e.location)||void 0===t?void 0:t.pathname;if(i.topic!==r){c(j(j({},C),{},{topic:r}));var o=window.innerWidth>768?I.AskForFeedback:I.None;n(o)}})),Object(r.useEffect)((function(){return document.addEventListener("keyup",f),function(){return document.removeEventListener("keyup",f)}}),[f]),!h.a.get("cookie_message_accepted"))return null;var d="flex ".concat(t===I.ShowFeedbackInput?"flex-row-reverse":"flex-row"),p="feedback-element-content ".concat(t===I.AskForFeedback||t===I.FeedbackSent?"w-56":"w-72");return O("div",{className:"feedback-element"},t===I.None&&O("button",{className:"info-btn show-feedback",onClick:function(){n(I.AskForFeedback)}},"Feedback")||O("div",{className:p},O(v,{onClick:function(){n(I.None)}}),O(A,{widgetState:t,textAreaRef:l}),t!==I.FeedbackSent&&t!==I.SuggestionSent&&O("div",{className:d},O("div",{className:"buttons-container mt-3 flex items-center gap-x-2"},t===I.ShowFeedbackInput&&O(o.a.Fragment,null,O(k,{text:"No thanks",onClick:function(){s()},isPrimary:!1}),O(k,{text:"Send",onClick:function(){var e;s(j(j({},i),{},{howToImprove:null===l||void 0===l||null===(e=l.current)||void 0===e?void 0:e.value}))}})),t===I.AskForFeedback&&O(o.a.Fragment,null,O(k,{text:"Yes",onClick:function(){s(j(j({},i),{},{isPageHelpful:!0}))}}),O(k,{text:"No",onClick:function(){n(I.ShowFeedbackInput),c(j(j({},i),{},{isPageHelpful:!1}))}}))))),O(g,null))},L=n("ORh2"),P=n("4kkf"),M=o.a.createElement,R=function(e){var t=e.headers.map((function(e){return M("li",{key:e.id},M("a",{href:"#".concat(e.id),className:"scrollspy-link"},e.title))}));return M("nav",{className:"scrollspy"},M("span",{className:"scrollspy-title"},"On this page"),M("ul",null,t))},T=n("1OyB"),_=n("vuIU");function D(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function H(e,t){return(H=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function V(e){return(V="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function z(e,t){return!t||"object"!==V(t)&&"function"!==typeof t?D(e):t}function U(e){return(U=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}n("H82b");var q=o.a.createElement;function J(e,t){var n;if("undefined"===typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(n=function(e,t){if(!e)return;if("string"===typeof e)return W(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return W(e,t)}(e))||t&&e&&"number"===typeof e.length){n&&(e=n);var r=0,o=function(){};return{s:o,n:function(){return r>=e.length?{done:!0}:{done:!1,value:e[r++]}},e:function(e){throw e},f:o}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var a,i=!0,c=!1;return{s:function(){n=e[Symbol.iterator]()},n:function(){var e=n.next();return i=e.done,e},e:function(e){c=!0,a=e},f:function(){try{i||null==n.return||n.return()}finally{if(c)throw a}}}}function W(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function B(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=U(e);if(t){var o=U(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return z(this,n)}}var K=q("svg",{width:"36",height:"36",xmlns:"http://www.w3.org/2000/svg"},q("path",{d:"M11 12h14v2H11zM11 17h14v2H11zM11 22h14v2H11z"})),Z=q("svg",{width:"36",height:"36",xmlns:"http://www.w3.org/2000/svg"},q("path",{d:"M12 22l9.9-9.9 1.414 1.415-9.9 9.9z"}),q("path",{d:"M13.414 12l9.9 9.9-1.415 1.414-9.9-9.9z"}));function Q(e){return!e||0===e.length}var Y=function(e){!function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&H(e,t)}(n,e);var t=B(n);function n(e){var r;return Object(T.a)(this,n),p(D(r=t.call(this,e)),"menuItemClicked",void 0),p(D(r),"renderChildren",(function(e,t){if(Q(e))return null;var n=e.map((function(e){return t(e)}));return q("ul",null,n)})),p(D(r),"lvl1",(function(e){var t,o=!Q(e.items),a="What's New"===(null===(t=r.props.root)||void 0===t?void 0:t.name);if((!o||a)&&e.id){var i="l-2 root-lvl";return n.isActive(r.props,e)&&(i+=" active"),q("li",{key:e.name,className:i},q("div",null,q(l.a,{tocItem:e},q("a",{onClick:function(){return r.click3lvl()}},e.name))))}return o&&!a?q("li",{key:e.name,className:"l-1"},q("span",null,e.name),r.renderChildren(e.items,r.lvl2)):null})),p(D(r),"lvl2",(function(e){var t=null,o="l-2";return n.isActive(r.props,e)&&(o+=" active"),e.opened&&r.props.showLeafs&&(o+=" opened"),!Q(e.items)&&r.props.showLeafs&&(t=function(e){return q("svg",{onClick:e.onClick,xmlns:"http://www.w3.org/2000/svg",width:"20",height:"20",fill:"none",viewBox:"0 0 20 20"},q("path",{d:"M4.7 10l1.13-1.13 5.3 5.3L10 15.3z"}),q("path",{d:"M15.3 10l-1.13-1.13-5.3 5.3L10 15.3z"}))}({onClick:function(){return r.toggleMenuItem(e)}})),q("li",{key:e.name,className:o},q("div",{className:"flex"},q(l.a,{tocItem:e,force:!0},q("a",{onClick:function(){return r.click2lvl(e)}},e.name)),t),e.opened&&r.props.showLeafs&&r.renderChildren(e.items,r.lvl3))})),p(D(r),"lvl3",(function(e){var t="l-3";return n.isActive(r.props,e)&&(t+=" active"),q("li",{key:e.name,className:t},q(l.a,{tocItem:e},q("a",{onClick:function(){return r.click3lvl()}},e.name)))})),r.menuItemClicked=!1,r.state=n.createState(e,!1),r}return Object(_.a)(n,[{key:"shouldComponentUpdate",value:function(){return!this.menuItemClicked||(this.menuItemClicked=!1,!1)}},{key:"render",value:function(){var e=this,t="sidebar ",n=K;return t+=this.props.isDocumentation?"sidebar-documentation ":" ",this.state.mobile&&(t+="mobile-opened",n=Z),q("nav",{className:t},q("div",{className:"title"},q("button",{"aria-label":"Navigation bar toggle",onClick:function(){return e.toggleMobileView()}},n),q("span",null,this.props.activeItems.length?this.props.activeItems[0].name:"")),this.renderChildren(this.state.items,this.lvl1))}},{key:"toggleMenuItem",value:function(e){e.opened=!e.opened,this.setState(this.state)}},{key:"toggleMobileView",value:function(){var e=!this.state.mobile;this.setMobileView(e)}},{key:"setMobileView",value:function(e){this.setState(Object.assign({},this.state,{mobile:e}))}},{key:"hideMobileView",value:function(){this.setMobileView(!1)}},{key:"click2lvl",value:function(e){e.opened=!0,e.url&&(this.menuItemClicked=!0),this.hideMobileView()}},{key:"click3lvl",value:function(){this.menuItemClicked=!0,this.hideMobileView()}}],[{key:"createState",value:function(e,t){var r,o=(r=e.items,JSON.parse(JSON.stringify(r)));return n.walk(o,(function(t){t.opened=n.isActive(e,t)})),{items:o,mobile:t,root:e.root}}},{key:"walk",value:function(e,t){var r,o=J(e);try{for(o.s();!(r=o.n()).done;){var a=r.value;t(a),a.items&&n.walk(a.items,t)}}catch(i){o.e(i)}finally{o.f()}}},{key:"getDerivedStateFromProps",value:function(e,t){return(t.root&&t.root.id)!==(e.root&&e.root.id)?n.createState(e,!!t.mobile):null}},{key:"isActive",value:function(e,t){return!!e.activeItems.find((function(e){return e.id===t.id}))}}]),n}(o.a.Component),G=n("DnWk"),X=n("4Qw9"),$=n("+Oug"),ee=n("o0o1"),te=n.n(ee);function ne(e,t,n,r,o,a,i){try{var c=e[a](i),l=c.value}catch(u){return void n(u)}c.done?t(l):Promise.resolve(l).then(r,o)}function re(e){return function(){var t=this,n=arguments;return new Promise((function(r,o){var a=e.apply(t,n);function i(e){ne(a,r,o,i,c,"next",e)}function c(e){ne(a,r,o,i,c,"throw",e)}i(void 0)}))}}var oe=[],ae=[];function ie(){return document.body.scrollTop+document.documentElement.scrollTop}function ce(){return le.apply(this,arguments)}function le(){return(le=re(te.a.mark((function e(){var t;return te.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=Object(c.a)(document.querySelectorAll("img")).filter((function(e){return!e.complete})).map((function(e){return new Promise((function(t){e.addEventListener("load",t),e.addEventListener("error",t)}))})),e.next=3,Promise.all(t);case 3:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function ue(){return se.apply(this,arguments)}function se(){return(se=re(te.a.mark((function e(){var t;return te.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(oe&&0!==oe.length){e.next=2;break}return e.abrupt("return");case 2:e.next=4;break;case 4:return e.next=6,ce();case 6:t=oe.map((function(e){return document.getElementById(e.id)})).filter((function(e){return!!e})),(ae=t.map((function(e){return{y:e.getBoundingClientRect().top+ie(),id:e.id,link:document.querySelector('.scrollspy-link[href="#'+e.id+'"]').parentNode}}))).length&&(ae[0].y=0),ae.reverse(),fe();case 11:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function fe(){var e=ae.find((function(e){var t=e.y;return ie()>=Math.floor(t)-1}));e&&(ae.forEach((function(e){var t=e.link;t.className=t.className.replace(" scrollspy-active","")})),e.link.className+=" scrollspy-active")}var de=n("exZ4"),pe=n("c+yx"),me=o.a.createElement,ve=function(e){var t=Object(r.useState)(!Object(pe.c)()),n=t[0],o=t[1],a=e.content.headers.length>0,i=e.sidebarNav.items.length>0,c=["left",i?"with-sidebar":""];return Object(r.useEffect)((function(){var t=function(){!function(e){window.removeEventListener("resize",ue),window.removeEventListener("load",ue),window.removeEventListener("scroll",fe),e&&0!==e.length&&(oe=e,ue(),window.addEventListener("resize",ue),window.addEventListener("load",ue),window.addEventListener("scroll",fe))}(e.content.headers)};Object(de.a)({classname:"spoiler",captionSelector:".spoiler .spoiler-caption"},t),Object(G.a)(),Object($.a)(e.publishDates),t(),Object(X.a)()})),me("div",null,me(P.a,{isDocumentation:!1,activeItems:e.headerNav.activeItems,items:e.headerNav.items}),me("div",{className:"middle"},me("main",null,me("div",{className:c.join(" ")},i&&me(Y,{isDocumentation:e.isDocumentation,showLeafs:e.sidebarNav.showLeafs,root:e.sidebarNav.root,items:e.sidebarNav.items,activeItems:e.sidebarNav.activeItems})),me("div",{className:"content sm:px-12"},me(f,{breadcrumbsNav:e.breadcrumbsNav}),e.children),me("div",{className:a?"right":"right right-no-scrollspy"},a&&me(R,{headers:e.content.headers})))),me(L.a,null),me(d.a,{onAcceptCookie:function(){return o(!0)}}),n&&me(F,null))},be=o.a.createElement;t.a=function(e){var t=e.content,n=e.headerNav,r=e.sidebarNav,a=e.breadcrumbsNav,c=e.isDocumentation,l=e.publishDates,u=be(o.a.Fragment,null);return u=e.children?be("div",null,e.children):be("div",{dangerouslySetInnerHTML:{__html:t.html}}),be(ve,{isDocumentation:c,headerNav:n,sidebarNav:r,breadcrumbsNav:a,content:t,publishDates:l},function(e,t){var n=e.map((function(e){return e.name})).reverse().join(" | "),r=e[e.length-1].url,o=null===t||void 0===t?void 0:t.schema,a=(null===t||void 0===t?void 0:t.description)||"";return be(i.a,null,be("meta",{property:"og:url",content:r}),be("meta",{property:"og:title",content:n}),be("meta",{name:"description",content:a}),be("link",{rel:"canonical",href:pe.a+r}),be("title",null,n),o&&be("script",{type:"application/ld+json",dangerouslySetInnerHTML:{__html:o}}))}(a,t),u)}},vuIU:function(e,t,n){"use strict";function r(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function o(e,t,n){return t&&r(e.prototype,t),n&&r(e,n),e}n.d(t,"a",(function(){return o}))}}]);