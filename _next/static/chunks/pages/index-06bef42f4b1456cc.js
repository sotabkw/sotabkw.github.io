(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{5301:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return r(3702)}])},638:function(e,t,r){"use strict";function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},s=Object.keys(r);"function"===typeof Object.getOwnPropertySymbols&&(s=s.concat(Object.getOwnPropertySymbols(r).filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable})))),s.forEach((function(t){n(e,t,r[t])}))}return e}t.default=function(e,t){var r=i.default,n={loading:function(e){e.error,e.isLoading;return e.pastDelay,null}};a=e,o=Promise,(null!=o&&"undefined"!==typeof Symbol&&o[Symbol.hasInstance]?o[Symbol.hasInstance](a):a instanceof o)?n.loader=function(){return e}:"function"===typeof e?n.loader=e:"object"===typeof e&&(n=s({},n,e));var a,o;var c=n=s({},n,t);if(c.suspense)throw new Error("Invalid suspense option usage in next/dynamic. Read more: https://nextjs.org/docs/messages/invalid-dynamic-suspense");if(c.suspense)return r(c);n.loadableGenerated&&delete(n=s({},n,n.loadableGenerated)).loadableGenerated;if("boolean"===typeof n.ssr){if(!n.ssr)return delete n.ssr,l(r,n);delete n.ssr}return r(n)};a(r(7294));var i=a(r(4302));function a(e){return e&&e.__esModule?e:{default:e}}function l(e,t){return delete t.webpack,delete t.modules,e(t)}},6319:function(e,t,r){"use strict";var n;Object.defineProperty(t,"__esModule",{value:!0}),t.LoadableContext=void 0;var s=((n=r(7294))&&n.__esModule?n:{default:n}).default.createContext(null);t.LoadableContext=s},4302:function(e,t,r){"use strict";function n(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function s(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},n=Object.keys(r);"function"===typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(r).filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable})))),n.forEach((function(t){s(e,t,r[t])}))}return e}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a,l=(a=r(7294))&&a.__esModule?a:{default:a},o=r(7161),c=r(6319);var d=[],u=[],h=!1;function m(e){var t=e(),r={loading:!0,loaded:null,error:null};return r.promise=t.then((function(e){return r.loading=!1,r.loaded=e,e})).catch((function(e){throw r.loading=!1,r.error=e,e})),r}var f=function(){function e(t,r){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._loadFn=t,this._opts=r,this._callbacks=new Set,this._delay=null,this._timeout=null,this.retry()}var t,r,s;return t=e,(r=[{key:"promise",value:function(){return this._res.promise}},{key:"retry",value:function(){var e=this;this._clearTimeouts(),this._res=this._loadFn(this._opts.loader),this._state={pastDelay:!1,timedOut:!1};var t=this._res,r=this._opts;if(t.loading){if("number"===typeof r.delay)if(0===r.delay)this._state.pastDelay=!0;else{var n=this;this._delay=setTimeout((function(){n._update({pastDelay:!0})}),r.delay)}if("number"===typeof r.timeout){var s=this;this._timeout=setTimeout((function(){s._update({timedOut:!0})}),r.timeout)}}this._res.promise.then((function(){e._update({}),e._clearTimeouts()})).catch((function(t){e._update({}),e._clearTimeouts()})),this._update({})}},{key:"_update",value:function(e){this._state=i({},this._state,{error:this._res.error,loaded:this._res.loaded,loading:this._res.loading},e),this._callbacks.forEach((function(e){return e()}))}},{key:"_clearTimeouts",value:function(){clearTimeout(this._delay),clearTimeout(this._timeout)}},{key:"getCurrentValue",value:function(){return this._state}},{key:"subscribe",value:function(e){var t=this;return this._callbacks.add(e),function(){t._callbacks.delete(e)}}}])&&n(t.prototype,r),s&&n(t,s),e}();function x(e){return function(e,t){var r=function(){if(!s){var t=new f(e,n);s={getCurrentValue:t.getCurrentValue.bind(t),subscribe:t.subscribe.bind(t),retry:t.retry.bind(t),promise:t.promise.bind(t)}}return s.promise()},n=Object.assign({loader:null,loading:null,delay:200,timeout:null,webpack:null,modules:null,suspense:!1},t);n.suspense&&(n.lazy=l.default.lazy(n.loader));var s=null;if(!h&&!n.suspense){var a=n.webpack?n.webpack():n.modules;a&&u.push((function(e){var t=!0,n=!1,s=void 0;try{for(var i,l=a[Symbol.iterator]();!(t=(i=l.next()).done);t=!0){var o=i.value;if(-1!==e.indexOf(o))return r()}}catch(c){n=!0,s=c}finally{try{t||null==l.return||l.return()}finally{if(n)throw s}}}))}var d=n.suspense?function(e,t){return l.default.createElement(n.lazy,i({},e,{ref:t}))}:function(e,t){r();var i=l.default.useContext(c.LoadableContext),a=o.useSubscription(s);return l.default.useImperativeHandle(t,(function(){return{retry:s.retry}}),[]),i&&Array.isArray(n.modules)&&n.modules.forEach((function(e){i(e)})),l.default.useMemo((function(){return a.loading||a.error?l.default.createElement(n.loading,{isLoading:a.loading,pastDelay:a.pastDelay,timedOut:a.timedOut,error:a.error,retry:s.retry}):a.loaded?l.default.createElement(function(e){return e&&e.__esModule?e.default:e}(a.loaded),e):null}),[e,a])};return d.preload=function(){return!n.suspense&&r()},d.displayName="LoadableComponent",l.default.forwardRef(d)}(m,e)}function p(e,t){for(var r=[];e.length;){var n=e.pop();r.push(n(t))}return Promise.all(r).then((function(){if(e.length)return p(e,t)}))}x.preloadAll=function(){return new Promise((function(e,t){p(d).then(e,t)}))},x.preloadReady=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];return new Promise((function(t){var r=function(){return h=!0,t()};p(u,e).then(r,r)}))},window.__NEXT_PRELOADREADY=x.preloadReady;var w=x;t.default=w},3702:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return g}});var n=r(5893),s=(r(7294),function(e){return(0,n.jsxs)("svg",{className:"text-gray-600",xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",children:[(0,n.jsx)("path",{d:"M12,14c2.206,0,4-1.794,4-4s-1.794-4-4-4s-4,1.794-4,4S9.794,14,12,14z M12,8c1.103,0,2,0.897,2,2s-0.897,2-2,2 s-2-0.897-2-2S10.897,8,12,8z"}),(0,n.jsx)("path",{d:"M11.42,21.814C11.594,21.938,11.797,22,12,22s0.406-0.062,0.58-0.186C12.884,21.599,20.029,16.44,20,10 c0-4.411-3.589-8-8-8S4,5.589,4,9.995C3.971,16.44,11.116,21.599,11.42,21.814z M12,4c3.309,0,6,2.691,6,6.005 c0.021,4.438-4.388,8.423-6,9.73C10.389,18.427,5.979,14.441,6,10C6,6.691,8.691,4,12,4z"})]})}),i=function(e){return(0,n.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round",className:"feather feather-mail",children:[(0,n.jsx)("path",{d:"M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"}),(0,n.jsx)("polyline",{points:"22,6 12,13 2,6"})]})},a=function(e){return(0,n.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round",className:"feather feather-github",children:(0,n.jsx)("path",{d:"M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"})})},l=function(e){return(0,n.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round",className:"feather feather-twitter",children:(0,n.jsx)("path",{d:"M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"})})},o=function(){return(0,n.jsx)("div",{className:"md:w-1/3 p-2 relative",children:(0,n.jsxs)("div",{className:"md:fixed",children:[(0,n.jsxs)("div",{className:"md:block",children:[(0,n.jsx)("div",{className:"flex justify-center h-auto",children:(0,n.jsx)("img",{className:"rounded-full self-start",src:"/favicon.ico",width:150,height:150,alt:"\u30d7\u30ed\u30d5\u30a3\u30fc\u30eb\u753b\u50cf"})}),(0,n.jsxs)("div",{className:"mb-12 text-center mt-4 justify-center items-center",children:[(0,n.jsx)("h1",{className:"text-2xl text-gray-800 font-semibold tracking-widest",children:"Sota Watanabe"}),(0,n.jsx)("div",{className:"md:text-sm text-sm text-gray-600 pt-2",children:"Software Engineer"})]})]}),(0,n.jsxs)("div",{className:"mx-4 my-4 md:block pr-12",children:[(0,n.jsx)("div",{className:"my-5 text-lg text-gray-600 flex",children:(0,n.jsxs)("a",{href:"mailto:stst819@icloud.com",className:"text-lg text-blue-300 flex hover:text-blue-400 transition-colors",children:[(0,n.jsx)("div",{className:"mr-2",children:(0,n.jsx)(i,{})}),"stst819@icloud.com"]})}),(0,n.jsxs)("a",{href:"https://github.com/sotabkw",className:"my-5 text-lg text-blue-300 flex hover:text-blue-400 transition-colors",children:[(0,n.jsx)("div",{className:"mr-2",children:(0,n.jsx)(a,{})}),"@sotabkw"]}),(0,n.jsxs)("a",{href:"https://twitter.com/sota_bkw",className:"my-5 text-lg text-blue-300 flex hover:text-blue-400 transition-colors",children:[(0,n.jsx)("div",{className:"mr-2",children:(0,n.jsx)(l,{})}),"@sota_bkw"]}),(0,n.jsxs)("div",{className:"my-5 text-lg text-gray-600 flex",children:[(0,n.jsx)("div",{className:"mr-2",children:(0,n.jsx)(s,{})}),"Hiroshima, Japan"]})]})]})})},c=function(e){return(0,n.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round",className:"feather feather-map-pin",children:[(0,n.jsx)("path",{d:"M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"}),(0,n.jsx)("circle",{cx:"12",cy:"10",r:"3"})]})},d=function(e){return(0,n.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round",className:"feather feather-activity",children:(0,n.jsx)("polyline",{points:"22 12 18 12 15 21 9 3 6 12 2 12"})})},u=function(e){return(0,n.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round",className:"feather feather-calendar",children:[(0,n.jsx)("rect",{x:"3",y:"4",width:"18",height:"18",rx:"2",ry:"2"}),(0,n.jsx)("line",{x1:"16",y1:"2",x2:"16",y2:"6"}),(0,n.jsx)("line",{x1:"8",y1:"2",x2:"8",y2:"6"}),(0,n.jsx)("line",{x1:"3",y1:"10",x2:"21",y2:"10"})]})},h=function(e){var t=e.title,r=e.date,s=e.body,i=e.isLast,a=e.isFirst,l=e.incHref,o=e.isPreset?"text-blue-400":"text-gray-300";return(0,n.jsx)("li",{className:"list-none",children:(0,n.jsx)("article",{children:(0,n.jsxs)("div",{className:"grid md:grid-cols-8 xl:grid-cols-5 items-start relative rounded-xl p-3 sm:p-5 xl:p-6 overflow-hidden",children:[(0,n.jsx)("h3",{className:"font-semibold text-gray-900 md:col-start-3 md:col-span-6 xl:col-start-3 xl:col-span-5 mb-1 ml-9 md:ml-0",children:(0,n.jsx)("div",{className:"flex text-xl font-sans text-gray-800",children:(0,n.jsxs)("a",{href:l,className:"text-lg text-blue-400 flex hover:text-blue-500 transition-colors",children:[(0,n.jsx)("div",{className:"mr-2 flex items-center",children:(0,n.jsx)(c,{})}),t]})})}),(0,n.jsxs)("time",{dateTime:r,className:"md:col-start-1 md:col-span-2 row-start-1 md:row-end-3 flex items-center font-medium mb-1 md:mb-0 text-gray-500",children:[i?(0,n.jsxs)("svg",{viewBox:"0 0 12 12",className:"w-3 h-3 mr-6 overflow-visible ".concat(o),children:[(0,n.jsx)("circle",{cx:"6",cy:"6",r:"6",fill:"currentColor"}),(0,n.jsx)("circle",{cx:"6",cy:"6",r:"11",fill:"none",stroke:"currentColor","stroke-width":"2"}),(0,n.jsx)("path",{d:"M 6 -6 V -30",fill:"none","stroke-width":"2",stroke:"currentColor",className:"text-gray-200"})]}):(0,n.jsxs)("svg",{viewBox:"0 0 12 12",className:"w-3 h-3 mr-6 overflow-visible ".concat(o),children:[(0,n.jsx)("circle",{cx:"6",cy:"6",r:"6",fill:"currentColor"}),(0,n.jsx)("circle",{cx:"6",cy:"6",r:"11",fill:"none",stroke:"currentColor","stroke-width":"2"}),!a&&(0,n.jsx)("path",{d:"M 6 -6 V -30",fill:"none","stroke-width":"2",stroke:"currentColor",className:"text-gray-200"}),(0,n.jsx)("path",{d:"M 6 18 V 500",fill:"none","stroke-width":"2",stroke:"currentColor",className:"text-gray-200"})]}),(0,n.jsxs)("div",{className:"flex text-sm transition-colors font-sans pt-2",children:[(0,n.jsx)("div",{className:"mr-2",children:(0,n.jsx)(u,{})}),r]})]}),s&&(0,n.jsx)("p",{className:"font-sans md:col-start-3 md:col-span-6 xl:col-span-3 ml-9 md:ml-0 text-gray-500",children:(0,n.jsxs)("div",{className:"flex text-sm transition-colors pt-2",children:[(0,n.jsx)("div",{className:"mr-2",children:(0,n.jsx)(d,{})}),s]})})]})})})},m=[{title:"crunchtimer Inc",date:"2020.6 - 2021.7",body:"Web front-end internship in client work",isPresent:!1,incHref:"https://www.crunchtimer.jp/"},{title:"pixiv Inc",date:"2021.10 - 2021.11",body:"Backend and Web front-end internship in pixiv encyclopedia",isPresent:!1,incHref:"https://www.pixiv.co.jp/"},{title:"cyberagent Inc",date:"2021.12 - 2021.12",body:"Web front-end internship in winticket",isPresent:!1,incHref:"https://www.cyberagent.co.jp"},{title:"tacoms Inc",date:"2021.6 - present",body:"Web front-end internship in CAMEL, a centralized delivery order management service",isPresent:!0,incHref:"https://www.camel-delivery.com/?utm_term=%2Btacoms&utm_campaign=KT_%E3%83%96%E3%83%A9%E3%83%B3%E3%83%89%E6%8C%87%E5%90%8D&utm_source=adwords&utm_medium=ppc&hsa_acc=5543580488&hsa_cam=12937585434&hsa_grp=128572927904&hsa_ad=521834286629&hsa_src=g&hsa_tgt=kwd-678200243707&hsa_kw=%2Btacoms&hsa_mt=b&hsa_net=adwords&hsa_ver=3&gclid=CjwKCAjwz5iMBhAEEiwAMEAwGIGEraaAnJP3srRSELX63DoJ4H53lp_Bgl16Qge4KFD48IHICH9ZMBoCGOYQAvD_BwE"}],f=function(e){return(0,n.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"30",height:"30",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"5","stroke-linecap":"round","stroke-linejoin":"round",className:"feather feather-chevron-right",children:(0,n.jsx)("polyline",{points:"9 18 15 12 9 6"})})},x=function(){return(0,n.jsxs)("div",{className:"p-4 bg-blue-50 rounded-3xl",children:[(0,n.jsxs)("h1",{className:"mb-4 text-4xl text-gray-700 font-bold tracking-widest ml-4 flex",children:[(0,n.jsx)("div",{className:"mr-2 flex items-center",children:(0,n.jsx)(f,{})}),"Carrier"]}),(0,n.jsx)("ul",{children:m.map((function(e,t){return(0,n.jsx)("li",{className:"list-none",children:(0,n.jsx)(h,{date:e.date,title:e.title,body:e.body,incHref:e.incHref,isLast:t===m.length-1,isPreset:e.isPresent,isFirst:0===t})},t)}))})]})},p=function(){return(0,n.jsxs)("div",{className:"p-4 bg-blue-50 rounded-3xl",children:[(0,n.jsxs)("h1",{className:"mb-4 text-4xl text-gray-700 font-bold tracking-widest ml-4 flex",children:[(0,n.jsx)("div",{className:"mr-2 flex items-center",children:(0,n.jsx)(f,{})}),"About"]}),(0,n.jsx)("p",{className:"text-lg px-7 font-sans",children:"Hi, my name is Sota. Welcome to my site. I'm a Software Engineer. I like the front-end, so I want to pursue technical pursuits and at the same time pursue how to deliver excellent UI/UX to users as a product. However, I am also interested in the back-end and am currently studying."})]})},w=function(e){var t=e.name,r=e.link,s=r?"hover:bg-blue-500 hover:opacity-100":"";return(0,n.jsx)("a",{href:r,className:"rounded-full text-white\n            bg-blue-400 ".concat(s," duration-300\n            text-xs font-bold\n            mr-1 md:mr-2 mb-4 px-2 md:px-4 py-2\n            opacity-90"),children:t})},v=[{name:"JavaScript",href:"https://developer.mozilla.org/ja/docs/Web/JavaScript"},{name:"TypeScript",href:"https://www.typescriptlang.org/"},{name:"Next.js",href:"https://nextjs.org/"},{name:"React.js",href:"https://reactjs.org/"},{name:"HTML5",href:"http://www.htmq.com/html5/"},{name:"CSS",href:"https://developer.mozilla.org/ja/docs/Web/CSS/Reference"},{name:"Swift",href:"https://docs.swift.org/swift-book/index.html"},{name:"Go",href:"https://go.dev/"},{name:"Atomic Design"},{name:"DDD"},{name:"Clean architecture"},{name:"Git"},{name:"Github Action"}],b=function(){return(0,n.jsxs)("div",{className:"p-4 bg-blue-50 rounded-3xl",children:[(0,n.jsxs)("h1",{className:"mb-4 text-4xl text-gray-700 font-bold tracking-widest ml-4 flex",children:[(0,n.jsx)("div",{className:"mr-2 flex items-center",children:(0,n.jsx)(f,{})}),"Skill"]}),(0,n.jsx)("ul",{className:"mb-6 flex flex-wrap px-7 list-none",children:v.map((function(e,t){return(0,n.jsx)("li",{className:"list-none my-2",children:(0,n.jsx)(w,{name:e.name,link:e.href})},t)}))})]})},j=(0,r(5152).default)(r.e(238).then(r.bind(r,6238)),{loadableGenerated:{webpack:function(){return[6238]}},ssr:!1}),y=function(){var e={about:(0,n.jsx)(p,{}),carrier:(0,n.jsx)(x,{}),skill:(0,n.jsx)(b,{})};return(0,n.jsx)("body",{children:(0,n.jsxs)("div",{className:"mt-6 max-w-screen-lg md:flex mx-auto",children:[(0,n.jsx)(o,{}),(0,n.jsx)("div",{className:"md:w-2/3 p-2 w-full",children:(0,n.jsx)("ul",{children:Object.values(e).map((function(e,t){return(0,n.jsx)("li",{className:"my-8 list-none",children:(0,n.jsx)(j,{children:e})},t)}))})})]})})},g=function(){return(0,n.jsx)(y,{})}},5152:function(e,t,r){e.exports=r(638)}},function(e){e.O(0,[774,888,179],(function(){return t=5301,e(e.s=t);var t}));var t=e.O();_N_E=t}]);