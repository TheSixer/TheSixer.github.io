(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[5405],{5728:function(e,s,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return a(9009)}])},5677:function(e,s,a){"use strict";Object.defineProperty(s,"__esModule",{value:!0}),s.default=function(e,s){let a=r.default,i={loading:e=>{let{error:s,isLoading:a,pastDelay:l}=e;return null}};e instanceof Promise?i.loader=()=>e:"function"==typeof e?i.loader=e:"object"==typeof e&&(i=l({},i,e)),i=l({},i,s);let n=i.loader,d=()=>null!=n?n().then(t):Promise.resolve(t(()=>null));return(i.loadableGenerated&&(i=l({},i,i.loadableGenerated),delete i.loadableGenerated),"boolean"!=typeof i.ssr||i.ssr)?a(l({},i,{loader:d})):(delete i.webpack,delete i.modules,c(a,i))},s.noSSR=c;var l=a(6495).Z,i=a(2648).Z,r=(i(a(7294)),i(a(8976)));function t(e){return{default:(null==e?void 0:e.default)||e}}function c(e,s){return delete s.webpack,delete s.modules,e(s)}("function"==typeof s.default||"object"==typeof s.default&&null!==s.default)&&void 0===s.default.__esModule&&(Object.defineProperty(s.default,"__esModule",{value:!0}),Object.assign(s.default,s),e.exports=s.default)},2254:function(e,s,a){"use strict";Object.defineProperty(s,"__esModule",{value:!0}),s.LoadableContext=void 0;var l=(0,a(2648).Z)(a(7294));let i=l.default.createContext(null);s.LoadableContext=i},8976:function(e,s,a){"use strict";Object.defineProperty(s,"__esModule",{value:!0}),s.default=void 0;var l=a(6495).Z,i=(0,a(2648).Z)(a(7294)),r=a(2254);let t=[],c=[],n=!1;function d(e){let s=e(),a={loading:!0,loaded:null,error:null};return a.promise=s.then(e=>(a.loading=!1,a.loaded=e,e)).catch(e=>{throw a.loading=!1,a.error=e,e}),a}class o{promise(){return this._res.promise}retry(){this._clearTimeouts(),this._res=this._loadFn(this._opts.loader),this._state={pastDelay:!1,timedOut:!1};let{_res:e,_opts:s}=this;e.loading&&("number"==typeof s.delay&&(0===s.delay?this._state.pastDelay=!0:this._delay=setTimeout(()=>{this._update({pastDelay:!0})},s.delay)),"number"==typeof s.timeout&&(this._timeout=setTimeout(()=>{this._update({timedOut:!0})},s.timeout))),this._res.promise.then(()=>{this._update({}),this._clearTimeouts()}).catch(e=>{this._update({}),this._clearTimeouts()}),this._update({})}_update(e){this._state=l({},this._state,{error:this._res.error,loaded:this._res.loaded,loading:this._res.loading},e),this._callbacks.forEach(e=>e())}_clearTimeouts(){clearTimeout(this._delay),clearTimeout(this._timeout)}getCurrentValue(){return this._state}subscribe(e){return this._callbacks.add(e),()=>{this._callbacks.delete(e)}}constructor(e,s){this._loadFn=e,this._opts=s,this._callbacks=new Set,this._delay=null,this._timeout=null,this.retry()}}function h(e){return function(e,s){let a=Object.assign({loader:null,loading:null,delay:200,timeout:null,webpack:null,modules:null},s),l=null;function t(){if(!l){let s=new o(e,a);l={getCurrentValue:s.getCurrentValue.bind(s),subscribe:s.subscribe.bind(s),retry:s.retry.bind(s),promise:s.promise.bind(s)}}return l.promise()}if(!n){let e=a.webpack?a.webpack():a.modules;e&&c.push(s=>{for(let a of e)if(-1!==s.indexOf(a))return t()})}function d(e,s){!function(){t();let e=i.default.useContext(r.LoadableContext);e&&Array.isArray(a.modules)&&a.modules.forEach(s=>{e(s)})}();let c=i.default.useSyncExternalStore(l.subscribe,l.getCurrentValue,l.getCurrentValue);return i.default.useImperativeHandle(s,()=>({retry:l.retry}),[]),i.default.useMemo(()=>{var s;return c.loading||c.error?i.default.createElement(a.loading,{isLoading:c.loading,pastDelay:c.pastDelay,timedOut:c.timedOut,error:c.error,retry:l.retry}):c.loaded?i.default.createElement((s=c.loaded)&&s.default?s.default:s,e):null},[e,c])}return d.preload=()=>t(),d.displayName="LoadableComponent",i.default.forwardRef(d)}(d,e)}function m(e,s){let a=[];for(;e.length;){let l=e.pop();a.push(l(s))}return Promise.all(a).then(()=>{if(e.length)return m(e,s)})}h.preloadAll=()=>new Promise((e,s)=>{m(t).then(e,s)}),h.preloadReady=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];return new Promise(s=>{let a=()=>(n=!0,s());m(c,e).then(a,a)})},window.__NEXT_PRELOADREADY=h.preloadReady,s.default=h},9009:function(e,s,a){"use strict";a.r(s);var l=a(5893),i=a(5152),r=a.n(i),t=a(9656);a(2226);var c=a(1664),n=a.n(c);a(2546);let d=r()(()=>Promise.all([a.e(5655),a.e(4339)]).then(a.bind(a,4339)),{loadableGenerated:{webpack:()=>[4339]},ssr:!1}),o=()=>(0,l.jsxs)(t.Z,{children:[(0,l.jsxs)("section",{className:"hero-area pt-185 rpt-150 rel z-1",children:[(0,l.jsx)("div",{className:"container",children:(0,l.jsxs)("div",{className:"row",children:[(0,l.jsx)("div",{className:"col-lg-8",children:(0,l.jsx)("div",{className:"hero-content wow fadeInLeft delay-0-2s",children:(0,l.jsxs)("h1",{children:["Quant ",(0,l.jsx)("span",{children:"Trader"})," ",(0,l.jsx)("i",{children:"Home"})]})})}),(0,l.jsx)("div",{className:"col-lg-4",children:(0,l.jsx)("div",{className:"hero-right-image mt-20 wow fadeInUp delay-0-4s",children:(0,l.jsx)("img",{src:"assets/images/hero/hero-right.png",alt:"Hero"})})})]})}),(0,l.jsx)("div",{className:"container-fluid",children:(0,l.jsxs)("div",{className:"hero-bottom-image",children:[(0,l.jsx)("img",{src:"assets/images/banner/home-banner.png",alt:"Hero"}),(0,l.jsx)("div",{className:"hero-social",children:(0,l.jsxs)("a",{href:"#",children:[(0,l.jsx)("i",{className:"fab fa-telegram"})," ",(0,l.jsx)("span",{children:"Telegram"})]})})]})}),(0,l.jsx)("div",{className:"hero-bg",children:(0,l.jsx)("img",{src:"assets/images/hero/hero-bg.png",alt:"lines"})})]}),(0,l.jsx)("section",{className:"about-area pt-130 rpt-100 rel z-1",children:(0,l.jsx)("div",{className:"container",children:(0,l.jsxs)("div",{className:"row justify-content-between",children:[(0,l.jsx)("div",{className:"col-xl-5 col-lg-3",children:(0,l.jsx)("div",{className:"about-image rmb-45 wow fadeInUp delay-0-2s",children:(0,l.jsx)("img",{width:300,style:{borderRadius:175},src:"assets/images/background/circle.png",alt:"Circle Text"})})}),(0,l.jsx)("div",{className:"col-xl-7 col-lg-9",children:(0,l.jsxs)("div",{className:"about-content wow fadeInUp delay-0-4s",children:[(0,l.jsxs)("div",{className:"section-title mb-40",children:[(0,l.jsx)("span",{className:"sub-title mb-15",children:"个人介绍"}),(0,l.jsx)("h2",{children:"Our Main Goal to Satisficed Local & Global Clients"})]}),(0,l.jsxs)("div",{className:"content",children:[(0,l.jsx)("p",{children:"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium totam aperiam eaque quae abillo inventore veritatisey et quasi architecto beatae vitae dictasunt explicabo voluptatem."}),(0,l.jsx)(n(),{legacyBehavior:!0,href:"/about",children:(0,l.jsxs)("a",{className:"read-more mt-10",children:["了解更多 ",(0,l.jsx)("i",{className:"far fa-arrow-right"})]})})]})]})})]})})}),(0,l.jsx)("div",{className:"headline-area pt-90 rpt-85 rel z-1",children:(0,l.jsx)("div",{className:"container-fluid",children:(0,l.jsx)("div",{className:"headline-text marquee",children:(0,l.jsxs)("span",{children:["Quant ",(0,l.jsx)("span",{children:" And "})," Trading"]})})})}),(0,l.jsx)("section",{className:"what-we-do-area pt-90 rpt-80 rel z-1",children:(0,l.jsx)("div",{className:"container",children:(0,l.jsxs)("div",{className:"row justify-content-between",children:[(0,l.jsx)("div",{className:"col-xl-5 col-lg-8",children:(0,l.jsxs)("div",{className:"what-we-do-content mb-55",children:[(0,l.jsxs)("div",{className:"section-title mb-60 wow fadeInUp delay-0-2s",children:[(0,l.jsx)("span",{className:"sub-title mb-15",children:"我的目标"}),(0,l.jsx)("h2",{children:"一切皆可量化 & 通往财富自由之路"})]}),(0,l.jsxs)("div",{className:"what-we-do-item wow fadeInUp delay-0-3s",children:[(0,l.jsx)("div",{className:"number",children:(0,l.jsx)("span",{children:"01"})}),(0,l.jsxs)("div",{className:"content",children:[(0,l.jsx)("h5",{children:"优质策略"}),(0,l.jsx)("p",{children:"好的策略是决定量化成功的关键"}),(0,l.jsx)(n(),{legacyBehavior:!0,href:"/service-details",children:(0,l.jsxs)("a",{className:"read-more style-two",children:[(0,l.jsx)("span",{children:"Read More"})," ",(0,l.jsx)("i",{className:"far fa-arrow-right"})]})})]})]}),(0,l.jsxs)("div",{className:"what-we-do-item wow fadeInUp delay-0-5s",children:[(0,l.jsx)("div",{className:"number",children:(0,l.jsx)("span",{children:"02"})}),(0,l.jsxs)("div",{className:"content",children:[(0,l.jsx)("h5",{children:"高质量的程序代码"}),(0,l.jsx)("p",{children:"Quis autem veleum iure reprehe nderitecy quie voluptate velit esse quam nihile"}),(0,l.jsx)(n(),{legacyBehavior:!0,href:"/service-details",children:(0,l.jsxs)("a",{className:"read-more style-two",children:[(0,l.jsx)("span",{children:"Read More"})," ",(0,l.jsx)("i",{className:"far fa-arrow-right"})]})})]})]}),(0,l.jsxs)("div",{className:"what-we-do-item wow fadeInUp delay-0-7s",children:[(0,l.jsx)("div",{className:"number",children:(0,l.jsx)("span",{children:"03"})}),(0,l.jsxs)("div",{className:"content",children:[(0,l.jsx)("h5",{children:"执行力"}),(0,l.jsx)("p",{children:"We denounce with righteous indignation and dislike beguiled demoralized charms"}),(0,l.jsx)(n(),{legacyBehavior:!0,href:"/service-details",children:(0,l.jsxs)("a",{className:"read-more style-two",children:[(0,l.jsx)("span",{children:"Read More"})," ",(0,l.jsx)("i",{className:"far fa-arrow-right"})]})})]})]})]})}),(0,l.jsx)("div",{className:"col-xl-6",children:(0,l.jsx)("div",{className:"what-we-do-image mb-55 wow fadeInRight delay-0-2s",children:(0,l.jsx)("img",{src:"assets/images/about/about-working.jpg",alt:"What We Do"})})})]})})}),(0,l.jsx)("div",{className:"statistics-area pt-75 rpt-45 rel z-1",children:(0,l.jsx)("div",{className:"container",children:(0,l.jsxs)("div",{className:"row justify-content-between",children:[(0,l.jsx)("div",{className:"col-xl-2 col-lg-3 col-6",children:(0,l.jsxs)("div",{className:"counter-item counter-text-wrap wow fadeInUp delay-0-2s",children:[(0,l.jsx)("i",{className:"fal fa-check-circle"}),(0,l.jsx)(d,{end:25}),(0,l.jsx)("span",{className:"counter-title",children:"Years Of Experience"})]})}),(0,l.jsx)("div",{className:"col-xl-2 col-lg-3 col-6",children:(0,l.jsxs)("div",{className:"counter-item counter-text-wrap wow fadeInUp delay-0-3s",children:[(0,l.jsx)("i",{className:"fal fa-check-circle"}),(0,l.jsx)(d,{end:3,extraClass:"k"}),(0,l.jsx)("span",{className:"counter-title",children:"Project’s Complete"})]})}),(0,l.jsx)("div",{className:"col-xl-2 col-lg-3 col-6",children:(0,l.jsxs)("div",{className:"counter-item counter-text-wrap wow fadeInUp delay-0-4s",children:[(0,l.jsx)("i",{className:"fal fa-check-circle"}),(0,l.jsx)(d,{end:48}),(0,l.jsx)("span",{className:"counter-title",children:"Professionals Team Member"})]})}),(0,l.jsx)("div",{className:"col-xl-2 col-lg-3 col-6",children:(0,l.jsxs)("div",{className:"counter-item counter-text-wrap wow fadeInUp delay-0-5s",children:[(0,l.jsx)("i",{className:"fal fa-check-circle"}),(0,l.jsx)(d,{end:92}),(0,l.jsx)("span",{className:"counter-title",children:"Awards Winning"})]})})]})})}),(0,l.jsx)("section",{className:"service-three-area pt-70 rpt-40 rel z-1",children:(0,l.jsxs)("div",{className:"container",children:[(0,l.jsx)("div",{className:"row justify-content-center",children:(0,l.jsx)("div",{className:"col-lg-7",children:(0,l.jsxs)("div",{className:"section-title text-center mb-60 wow fadeInUp delay-0-2s",children:[(0,l.jsx)("span",{className:"sub-title mb-20",children:"我的量化策略"}),(0,l.jsx)("h2",{children:"不定期更新量化策略程序，经得起实盘的检验"})]})})}),(0,l.jsxs)("div",{className:"row",children:[(0,l.jsx)("div",{className:"col-xl-3 col-lg-4 col-md-6",children:(0,l.jsxs)("div",{className:"service-three-item wow fadeInUp delay-0-2s",children:[(0,l.jsxs)("div",{className:"title-icon",children:[(0,l.jsx)("h5",{children:(0,l.jsx)(n(),{legacyBehavior:!0,href:"/service-details",children:(0,l.jsx)("a",{children:"网格交易法"})})}),(0,l.jsx)("img",{src:"assets/images/services/icon1.png",alt:"Icon"})]}),(0,l.jsxs)("div",{className:"content",children:[(0,l.jsx)("p",{children:"We denounce with righteous indignation dislike beguile"}),(0,l.jsx)(n(),{legacyBehavior:!0,href:"/service-details",children:(0,l.jsxs)("a",{className:"read-more style-two",children:[(0,l.jsx)("span",{children:"Read More"})," ",(0,l.jsx)("i",{className:"far fa-arrow-right"})]})})]})]})}),(0,l.jsx)("div",{className:"col-xl-3 col-lg-4 col-md-6",children:(0,l.jsxs)("div",{className:"service-three-item wow fadeInDown delay-0-2s",children:[(0,l.jsxs)("div",{className:"title-icon",children:[(0,l.jsx)("h5",{children:(0,l.jsx)(n(),{legacyBehavior:!0,href:"/service-details",children:(0,l.jsx)("a",{children:"双均线&布林带扛震荡策略"})})}),(0,l.jsx)("img",{src:"assets/images/services/icon2.png",alt:"Icon"})]}),(0,l.jsxs)("div",{className:"content",children:[(0,l.jsx)("p",{children:"At vero eos et accusamus et dignissim ducimbl ditiis"}),(0,l.jsx)(n(),{legacyBehavior:!0,href:"/service-details",children:(0,l.jsxs)("a",{className:"read-more style-two",children:[(0,l.jsx)("span",{children:"Read More"})," ",(0,l.jsx)("i",{className:"far fa-arrow-right"})]})})]})]})}),(0,l.jsx)("div",{className:"col-xl-3 col-lg-4 col-md-6",children:(0,l.jsxs)("div",{className:"service-three-item wow fadeInUp delay-0-2s",children:[(0,l.jsxs)("div",{className:"title-icon",children:[(0,l.jsx)("h5",{children:(0,l.jsx)(n(),{legacyBehavior:!0,href:"/service-details",children:(0,l.jsx)("a",{children:"海龟交易策略"})})}),(0,l.jsx)("img",{src:"assets/images/services/icon3.png",alt:"Icon"})]}),(0,l.jsxs)("div",{className:"content",children:[(0,l.jsx)("p",{children:"To take trivial example which ever undertakes laborious"}),(0,l.jsx)(n(),{legacyBehavior:!0,href:"/service-details",children:(0,l.jsxs)("a",{className:"read-more style-two",children:[(0,l.jsx)("span",{children:"Read More"})," ",(0,l.jsx)("i",{className:"far fa-arrow-right"})]})})]})]})}),(0,l.jsx)("div",{className:"col-xl-3 col-lg-4 col-md-6",children:(0,l.jsxs)("div",{className:"service-three-item wow fadeInDown delay-0-2s",children:[(0,l.jsxs)("div",{className:"title-icon",children:[(0,l.jsx)("h5",{children:(0,l.jsx)(n(),{legacyBehavior:!0,href:"/service-details",children:(0,l.jsx)("a",{children:"马丁格尔交易策略"})})}),(0,l.jsx)("img",{src:"assets/images/services/icon4.png",alt:"Icon"})]}),(0,l.jsxs)("div",{className:"content",children:[(0,l.jsx)("p",{children:"Sed persiciatis unde omnisey natus error voluptatem"}),(0,l.jsx)(n(),{legacyBehavior:!0,href:"/service-details",children:(0,l.jsxs)("a",{className:"read-more style-two",children:[(0,l.jsx)("span",{children:"Read More"})," ",(0,l.jsx)("i",{className:"far fa-arrow-right"})]})})]})]})})]})]})}),(0,l.jsx)("div",{className:"headline-area pt-65 rpt-60 rel z-1",children:(0,l.jsx)("div",{className:"container-fluid",children:(0,l.jsx)("div",{className:"headline-text marquee",children:(0,l.jsxs)("span",{children:[(0,l.jsx)("span",{children:"策略"})," 回测效果"]})})})}),(0,l.jsx)("section",{className:"project-timeline-area pt-90 rpt-75 rel z-1",children:(0,l.jsxs)("div",{className:"container container-1290",children:[(0,l.jsxs)("div",{className:"row justify-content-between align-items-center pb-25",children:[(0,l.jsx)("div",{className:"col-xl-6 col-lg-8",children:(0,l.jsxs)("div",{className:"section-title mb-30 wow fadeInLeft delay-0-2s",children:[(0,l.jsx)("span",{className:"sub-title mb-15",children:"回测结果"}),(0,l.jsxs)("h2",{children:["分享一下我的策略历史",(0,l.jsx)("br",{}),"回测数据"]})]})}),(0,l.jsx)("div",{className:"col-lg-4 text-lg-end",children:(0,l.jsx)(n(),{legacyBehavior:!0,href:"/projects",children:(0,l.jsxs)("a",{className:"theme-btn mb-25 wow fadeInRight delay-0-2s",children:["查看更多 ",(0,l.jsx)("i",{className:"far fa-arrow-right"})]})})})]}),(0,l.jsxs)("div",{className:"project-timeline wow fadeInUp delay-0-2s",children:[(0,l.jsxs)("div",{className:"content",children:[(0,l.jsx)("span",{className:"serial-number",children:"01"}),(0,l.jsx)("h4",{children:(0,l.jsx)(n(),{legacyBehavior:!0,href:"/project-details",children:(0,l.jsx)("a",{children:"网格策略回测2022-04-18至2024-03-07期间 WTI.f 品种"})})})]}),(0,l.jsx)("div",{className:"image",children:(0,l.jsx)("img",{width:374,src:"assets/images/backtesting/grid-result-01.jpg",alt:"Project TimeLine Image"})}),(0,l.jsx)("div",{className:"right-btn",children:(0,l.jsx)(n(),{legacyBehavior:!0,href:"/project-details",children:(0,l.jsx)("a",{className:"details-btn",children:(0,l.jsx)("i",{className:"fal fa-long-arrow-right"})})})})]}),(0,l.jsxs)("div",{className:"project-timeline wow fadeInUp delay-0-2s",children:[(0,l.jsxs)("div",{className:"content",children:[(0,l.jsx)("span",{className:"serial-number",children:"02"}),(0,l.jsx)("h4",{children:(0,l.jsx)(n(),{legacyBehavior:!0,href:"/project-details",children:(0,l.jsx)("a",{children:"PSD, Figma & XD to HTML Design & Development"})})})]}),(0,l.jsx)("div",{className:"image",children:(0,l.jsx)("img",{src:"assets/images/projects/project-timeline2.jpg",alt:"Project TimeLine Image"})}),(0,l.jsx)("div",{className:"right-btn",children:(0,l.jsx)(n(),{legacyBehavior:!0,href:"/project-details",children:(0,l.jsx)("a",{className:"details-btn",children:(0,l.jsx)("i",{className:"fal fa-long-arrow-right"})})})})]}),(0,l.jsxs)("div",{className:"project-timeline wow fadeInUp delay-0-2s",children:[(0,l.jsxs)("div",{className:"content",children:[(0,l.jsx)("span",{className:"serial-number",children:"03"}),(0,l.jsx)("h4",{children:(0,l.jsx)(n(),{legacyBehavior:!0,href:"/project-details",children:(0,l.jsx)("a",{children:"Mobile Application Design & Development"})})})]}),(0,l.jsx)("div",{className:"image",children:(0,l.jsx)("img",{src:"assets/images/projects/project-timeline3.jpg",alt:"Project TimeLine Image"})}),(0,l.jsx)("div",{className:"right-btn",children:(0,l.jsx)(n(),{legacyBehavior:!0,href:"/project-details",children:(0,l.jsx)("a",{className:"details-btn",children:(0,l.jsx)("i",{className:"fal fa-long-arrow-right"})})})})]})]})}),(0,l.jsxs)("section",{className:"team-area pt-70 rpt-40",children:[(0,l.jsx)("div",{className:"container",children:(0,l.jsx)("div",{className:"row justify-content-center",children:(0,l.jsx)("div",{className:"col-lg-9",children:(0,l.jsxs)("div",{className:"section-title text-center mb-55 wow fadeInUp delay-0-2s",children:[(0,l.jsx)("span",{className:"sub-title mb-20",children:"团队成员"}),(0,l.jsx)("h2",{children:"我的小伙伴们"})]})})})}),(0,l.jsx)("div",{className:"container-fluid",children:(0,l.jsxs)("div",{className:"row row-cols-xl-5 row-cols-lg-4 row-cols-md-3 row-cols-sm-2 row-cols-1 justify-content-center",children:[(0,l.jsx)("div",{className:"col",children:(0,l.jsxs)("div",{className:"team-member wow fadeInUp delay-0-2s",children:[(0,l.jsx)("div",{className:"image",children:(0,l.jsx)("img",{src:"assets/images/team/me.png",alt:"Team Member"})}),(0,l.jsxs)("div",{className:"content",children:[(0,l.jsx)("h4",{children:"Patrick V. Schroeder"}),(0,l.jsx)("span",{children:"UI/UX Designer"}),(0,l.jsx)(n(),{legacyBehavior:!0,href:"/team-details",children:(0,l.jsx)("a",{className:"read-more",children:(0,l.jsx)("i",{className:"far fa-arrow-right"})})})]}),(0,l.jsxs)("div",{className:"btn-social",children:[(0,l.jsx)(n(),{legacyBehavior:!0,href:"/team-details",children:(0,l.jsxs)("a",{className:"read-more",children:[(0,l.jsx)("span",{children:"View Details"})," ",(0,l.jsx)("i",{className:"far fa-arrow-right"})]})}),(0,l.jsxs)("div",{className:"social-style-two",children:[(0,l.jsx)("a",{href:"#",children:(0,l.jsx)("i",{className:"fab fa-facebook-f"})}),(0,l.jsx)("a",{href:"#",children:(0,l.jsx)("i",{className:"fab fa-twitter"})}),(0,l.jsx)("a",{href:"#",children:(0,l.jsx)("i",{className:"fab fa-instagram"})}),(0,l.jsx)("a",{href:"#",children:(0,l.jsx)("i",{className:"fab fa-linkedin-in"})})]})]})]})}),(0,l.jsx)("div",{className:"col",children:(0,l.jsxs)("div",{className:"team-member wow fadeInUp delay-0-3s",children:[(0,l.jsx)("div",{className:"image",children:(0,l.jsx)("img",{src:"assets/images/team/member2.jpg",alt:"Team Member"})}),(0,l.jsxs)("div",{className:"content",children:[(0,l.jsx)("h4",{children:"Michael A. Braun"}),(0,l.jsx)("span",{children:"UI/UX Designer"}),(0,l.jsx)(n(),{legacyBehavior:!0,href:"/team-details",children:(0,l.jsx)("a",{className:"read-more",children:(0,l.jsx)("i",{className:"far fa-arrow-right"})})})]}),(0,l.jsxs)("div",{className:"btn-social",children:[(0,l.jsx)(n(),{legacyBehavior:!0,href:"/team-details",children:(0,l.jsxs)("a",{className:"read-more",children:[(0,l.jsx)("span",{children:"View Details"})," ",(0,l.jsx)("i",{className:"far fa-arrow-right"})]})}),(0,l.jsxs)("div",{className:"social-style-two",children:[(0,l.jsx)("a",{href:"#",children:(0,l.jsx)("i",{className:"fab fa-facebook-f"})}),(0,l.jsx)("a",{href:"#",children:(0,l.jsx)("i",{className:"fab fa-twitter"})}),(0,l.jsx)("a",{href:"#",children:(0,l.jsx)("i",{className:"fab fa-instagram"})}),(0,l.jsx)("a",{href:"#",children:(0,l.jsx)("i",{className:"fab fa-linkedin-in"})})]})]})]})}),(0,l.jsx)("div",{className:"col",children:(0,l.jsxs)("div",{className:"team-member wow fadeInUp delay-0-4s",children:[(0,l.jsx)("div",{className:"image",children:(0,l.jsx)("img",{src:"assets/images/team/member3.jpg",alt:"Team Member"})}),(0,l.jsxs)("div",{className:"content",children:[(0,l.jsx)("h4",{children:"James V. Decastro"}),(0,l.jsx)("span",{children:"Senior Marketer"}),(0,l.jsx)(n(),{legacyBehavior:!0,href:"/team-details",children:(0,l.jsx)("a",{className:"read-more",children:(0,l.jsx)("i",{className:"far fa-arrow-right"})})})]}),(0,l.jsxs)("div",{className:"btn-social",children:[(0,l.jsx)(n(),{legacyBehavior:!0,href:"/team-details",children:(0,l.jsxs)("a",{className:"read-more",children:[(0,l.jsx)("span",{children:"View Details"})," ",(0,l.jsx)("i",{className:"far fa-arrow-right"})]})}),(0,l.jsxs)("div",{className:"social-style-two",children:[(0,l.jsx)("a",{href:"#",children:(0,l.jsx)("i",{className:"fab fa-facebook-f"})}),(0,l.jsx)("a",{href:"#",children:(0,l.jsx)("i",{className:"fab fa-twitter"})}),(0,l.jsx)("a",{href:"#",children:(0,l.jsx)("i",{className:"fab fa-instagram"})}),(0,l.jsx)("a",{href:"#",children:(0,l.jsx)("i",{className:"fab fa-linkedin-in"})})]})]})]})})]})})]})]});s.default=o},2226:function(e,s,a){"use strict";a.d(s,{b:function(){return t}});var l=a(5893),i=a(9360);function r(e){let{className:s,extraClass:a,onClick:i,icon:r}=e;return(0,l.jsx)("button",{className:"".concat(s,"  ").concat(a),onClick:i,children:(0,l.jsx)("i",{className:r})})}i.ZP.use([i.Gk,i.tl,i.W_,i.xW,i.pt,i.rj,i.gI,i.oM]);let t={mainSlider:{slidesToShow:1,slidesToScroll:1,infinite:!0,speed:400,arrows:!1,dots:!1,focusOnSelect:!0,autoplay:!0,autoplaySpeed:5e3},galleryFiveActive:{loop:!0,slidesPerView:1,spaceBetween:15,speed:500,rewind:!0,autoplay:{delay:2500,disableOnInteraction:!1},pagination:{el:".work-gallery-dots",clickable:!0},navigation:{nextEl:".work-gallery-next",prevEl:".work-gallery-prev"},breakpoints:{640:{slidesPerView:2,spaceBetween:15},768:{slidesPerView:3,spaceBetween:15},1400:{slidesPerView:4,spaceBetween:15}}},testimonialsThreeActive:{slidesToShow:1,slidesToScroll:1,infinite:!1,speed:400,dots:!0,arrows:!1,focusOnSelect:!0,autoplay:!1,autoplaySpeed:5e3,appendDots:e=>(0,l.jsx)("div",{children:(0,l.jsx)("ul",{children:e.map((e,s)=>(0,l.jsx)("li",{children:e.props.children},s))})}),responsive:[{breakpoint:1200,settings:{slidesToShow:1}}]},testimonialsTwoActive:{slidesToShow:1,slidesToScroll:1,infinite:!0,speed:400,arrows:!0,dots:!0,focusOnSelect:!0,autoplay:!1,autoplaySpeed:5e3,prevArrow:(0,l.jsx)(r,{extraClass:"prev-arrow",icon:"fal fa-chevron-left"}),nextArrow:(0,l.jsx)(r,{extraClass:"next-arrow",icon:"fal fa-chevron-right"}),responsive:[{breakpoint:1200,settings:{slidesToShow:1}}]},testimonialsThreeActiveSwiper:{loop:!0,spaceBetween:30,speed:500,rewind:!0,autoplay:{delay:2500,disableOnInteraction:!1},pagination:{el:".testimonial-three-dots .slick-dots",clickable:!0},navigation:{nextEl:".testimonial-three-next",prevEl:".testimonial-three-prev"}},testimonialsActiveSwiper:{loop:!0,spaceBetween:30,speed:500,rewind:!0,autoplay:{delay:2500,disableOnInteraction:!1},pagination:{el:".testimonial-dots .slick-dots",clickable:!0},navigation:{nextEl:".testimonial-next",prevEl:".testimonial-prev"}},projectSliderActiveSwiper:{loop:!0,spaceBetween:30,slidesPerView:1,speed:500,rewind:!0,autoplay:{delay:2500,disableOnInteraction:!1},navigation:{nextEl:".project-next",prevEl:".project-prev"},breakpoints:{1200:{slidesPerView:2,spaceBetween:30}}},workGallerySliderActiveSwiper:{loop:!0,spaceBetween:30,slidesPerView:1,speed:500,rewind:!0,autoplay:{delay:2500,disableOnInteraction:!1},navigation:{nextEl:".work-gallery-next",prevEl:".work-gallery-prev"},pagination:{el:".work-gallery-dots .slick-dots",clickable:!0},breakpoints:{767:{slidesPerView:2,spaceBetween:30},1200:{slidesPerView:3,spaceBetween:30}}}}},5152:function(e,s,a){e.exports=a(5677)}},function(e){e.O(0,[7854,4856,9656,9774,2888,179],function(){return e(e.s=5728)}),_N_E=e.O()}]);