(this.webpackJsonpdeveb=this.webpackJsonpdeveb||[]).push([[0],{119:function(e,t,n){"use strict";n.r(t);var a=n(21),r=n.n(a),c=n(38),i=n(23),s=n(16),o=n(11),l=n(13),d=n(1),h=n.n(d),p=n(41),u=n(42),m=n(66),f=n(12),b=n(43),j=n(44),g=n(46),v=n(45),x=n(47),O={needs:["Branding","Web design","Site from scratch","UI/UX","Web animation","Application design","HTML/CSS coding","Back-end","Development","Maintenance","Other"],budgets:["Under 10K","10-20K","20-50K","50-100K","+100K"]},w={needs:["Branding","Web design","UI/UX","Web animation","Application design","HTML/CSS","Site from scratch","Back-end","Maintenance","Other"],budgets:["Under 10K","10-20K","20-50K","50-100K","+100K"]},y=n(18),k=n(14),S=n(17),_=n.n(S);function N(){return(N=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}function R(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}var C=function(e){var t,n;function a(){var t;return(t=e.call(this)||this).handleExpired=t.handleExpired.bind(R(t)),t.handleErrored=t.handleErrored.bind(R(t)),t.handleChange=t.handleChange.bind(R(t)),t.handleRecaptchaRef=t.handleRecaptchaRef.bind(R(t)),t}n=e,(t=a).prototype=Object.create(n.prototype),t.prototype.constructor=t,t.__proto__=n;var r=a.prototype;return r.getValue=function(){return this.props.grecaptcha&&void 0!==this._widgetId?this.props.grecaptcha.getResponse(this._widgetId):null},r.getWidgetId=function(){return this.props.grecaptcha&&void 0!==this._widgetId?this._widgetId:null},r.execute=function(){var e=this.props.grecaptcha;if(e&&void 0!==this._widgetId)return e.execute(this._widgetId);this._executeRequested=!0},r.executeAsync=function(){var e=this;return new Promise((function(t,n){e.executionResolve=t,e.executionReject=n,e.execute()}))},r.reset=function(){this.props.grecaptcha&&void 0!==this._widgetId&&this.props.grecaptcha.reset(this._widgetId)},r.handleExpired=function(){this.props.onExpired?this.props.onExpired():this.handleChange(null)},r.handleErrored=function(){this.props.onErrored&&this.props.onErrored(),this.executionReject&&(this.executionReject(),delete this.executionResolve,delete this.executionReject)},r.handleChange=function(e){this.props.onChange&&this.props.onChange(e),this.executionResolve&&(this.executionResolve(e),delete this.executionReject,delete this.executionResolve)},r.explicitRender=function(){if(this.props.grecaptcha&&this.props.grecaptcha.render&&void 0===this._widgetId){var e=document.createElement("div");this._widgetId=this.props.grecaptcha.render(e,{sitekey:this.props.sitekey,callback:this.handleChange,theme:this.props.theme,type:this.props.type,tabindex:this.props.tabindex,"expired-callback":this.handleExpired,"error-callback":this.handleErrored,size:this.props.size,stoken:this.props.stoken,hl:this.props.hl,badge:this.props.badge}),this.captcha.appendChild(e)}this._executeRequested&&this.props.grecaptcha&&void 0!==this._widgetId&&(this._executeRequested=!1,this.execute())},r.componentDidMount=function(){this.explicitRender()},r.componentDidUpdate=function(){this.explicitRender()},r.componentWillUnmount=function(){void 0!==this._widgetId&&(this.delayOfCaptchaIframeRemoving(),this.reset())},r.delayOfCaptchaIframeRemoving=function(){var e=document.createElement("div");for(document.body.appendChild(e),e.style.display="none";this.captcha.firstChild;)e.appendChild(this.captcha.firstChild);setTimeout((function(){document.body.removeChild(e)}),5e3)},r.handleRecaptchaRef=function(e){this.captcha=e},r.render=function(){var e=this.props,t=(e.sitekey,e.onChange,e.theme,e.type,e.tabindex,e.onExpired,e.onErrored,e.size,e.stoken,e.grecaptcha,e.badge,e.hl,function(e,t){if(null==e)return{};var n,a,r={},c=Object.keys(e);for(a=0;a<c.length;a++)n=c[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,["sitekey","onChange","theme","type","tabindex","onExpired","onErrored","size","stoken","grecaptcha","badge","hl"]));return h.a.createElement("div",N({},t,{ref:this.handleRecaptchaRef}))},a}(h.a.Component);C.displayName="ReCAPTCHA",C.propTypes={sitekey:_.a.string.isRequired,onChange:_.a.func,grecaptcha:_.a.object,theme:_.a.oneOf(["dark","light"]),type:_.a.oneOf(["image","audio"]),tabindex:_.a.number,onExpired:_.a.func,onErrored:_.a.func,size:_.a.oneOf(["compact","normal","invisible"]),stoken:_.a.string,hl:_.a.string,badge:_.a.oneOf(["bottomright","bottomleft","inline"])},C.defaultProps={onChange:function(){},theme:"light",type:"image",tabindex:0,size:"normal",badge:"bottomright"};var L=n(62),E=n.n(L);function A(){return(A=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}var I={},M=0;var P="onloadcallback";var T,U,B=(T=function(){return"https://"+(("undefined"!==typeof window&&window.recaptchaOptions||{}).useRecaptchaNet?"recaptcha.net":"www.google.com")+"/recaptcha/api.js?onload="+P+"&render=explicit"},U=(U={callbackName:P,globalName:"grecaptcha"})||{},function(e){var t=e.displayName||e.name||"Component",n=function(t){var n,a;function r(e,n){var a;return(a=t.call(this,e,n)||this).state={},a.__scriptURL="",a}a=t,(n=r).prototype=Object.create(a.prototype),n.prototype.constructor=n,n.__proto__=a;var c=r.prototype;return c.asyncScriptLoaderGetScriptLoaderID=function(){return this.__scriptLoaderID||(this.__scriptLoaderID="async-script-loader-"+M++),this.__scriptLoaderID},c.setupScriptURL=function(){return this.__scriptURL="function"===typeof T?T():T,this.__scriptURL},c.asyncScriptLoaderHandleLoad=function(e){var t=this;this.setState(e,(function(){return t.props.asyncScriptOnLoad&&t.props.asyncScriptOnLoad(t.state)}))},c.asyncScriptLoaderTriggerOnScriptLoaded=function(){var e=I[this.__scriptURL];if(!e||!e.loaded)throw new Error("Script is not loaded.");for(var t in e.observers)e.observers[t](e);delete window[U.callbackName]},c.componentDidMount=function(){var e=this,t=this.setupScriptURL(),n=this.asyncScriptLoaderGetScriptLoaderID(),a=U,r=a.globalName,c=a.callbackName,i=a.scriptId;if(r&&"undefined"!==typeof window[r]&&(I[t]={loaded:!0,observers:{}}),I[t]){var s=I[t];return s&&(s.loaded||s.errored)?void this.asyncScriptLoaderHandleLoad(s):void(s.observers[n]=function(t){return e.asyncScriptLoaderHandleLoad(t)})}var o={};o[n]=function(t){return e.asyncScriptLoaderHandleLoad(t)},I[t]={loaded:!1,observers:o};var l=document.createElement("script");for(var d in l.src=t,l.async=!0,U.attributes)l.setAttribute(d,U.attributes[d]);i&&(l.id=i);var h=function(e){if(I[t]){var n=I[t].observers;for(var a in n)e(n[a])&&delete n[a]}};c&&"undefined"!==typeof window&&(window[c]=function(){return e.asyncScriptLoaderTriggerOnScriptLoaded()}),l.onload=function(){var e=I[t];e&&(e.loaded=!0,h((function(t){return!c&&(t(e),!0)})))},l.onerror=function(){var e=I[t];e&&(e.errored=!0,h((function(t){return t(e),!0})))},document.body.appendChild(l)},c.componentWillUnmount=function(){var e=this.__scriptURL;if(!0===U.removeOnUnmount)for(var t=document.getElementsByTagName("script"),n=0;n<t.length;n+=1)t[n].src.indexOf(e)>-1&&t[n].parentNode&&t[n].parentNode.removeChild(t[n]);var a=I[e];a&&(delete a.observers[this.asyncScriptLoaderGetScriptLoaderID()],!0===U.removeOnUnmount&&delete I[e])},c.render=function(){var t=U.globalName,n=this.props,a=(n.asyncScriptOnLoad,n.forwardedRef),r=function(e,t){if(null==e)return{};var n,a,r={},c=Object.keys(e);for(a=0;a<c.length;a++)n=c[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(n,["asyncScriptOnLoad","forwardedRef"]);return t&&"undefined"!==typeof window&&(r[t]="undefined"!==typeof window[t]?window[t]:void 0),r.ref=a,Object(d.createElement)(e,r)},r}(d.Component),a=Object(d.forwardRef)((function(e,t){return Object(d.createElement)(n,A({},e,{forwardedRef:t}))}));return a.displayName="AsyncScriptLoader("+t+")",a.propTypes={asyncScriptOnLoad:_.a.func},E()(a,e)})(C),F=n(2),H=n.p+"static/media/light-line.e26f9b60.svg";try{window.addEventListener("test",null,Object.defineProperty({},"passive",{get:function(){!0}}))}catch(q){}document.createElement("div");var D=n(0);function z(e){var t=e.showToggle;return Object(D.jsxs)("div",{className:"thanks-container",onClick:function(){return t()},children:[Object(D.jsx)("h2",{children:"Thanks!"}),Object(D.jsx)("p",{children:"You will hear back from us shortly."})]})}var K,W="url(".concat(H,")");t.default=function(){var e,t=Object(f.b)().setReset,n=Object(f.b)(),a=n.isMobile,h=n.changePointer,S=(null===(e=Object(y.g)().state)||void 0===e||e.contact,Object(d.useRef)()),_=Object(d.useState)(!1),N=Object(l.a)(_,2),R=N[0],C=(N[1],Object(d.useRef)(null)),L=Object(d.useRef)(),E=F.c.utils.selector(L),A=Object(d.useRef)(null),I=Object(d.useState)({needs:[],budgets:[]}),M=Object(l.a)(I,2),P=M[0],T=M[1];Object(d.useEffect)((function(){return T(a?w:O),function(){}}),[a]),Object(d.useLayoutEffect)((function(){var e=E(".sec-form h6, .sec-form h1");return F.c.set(E("form"),{autoAlpha:0,yPercent:5}),F.c.set(e,{autoAlpha:0,yPercent:30}),function(){}}),[]),Object(d.useEffect)((function(){var e=E(".sec-form h6, .sec-form h1, form");F.c.to(e,{autoAlpha:1,stagger:.08,duration:1.5,delay:.6}),F.c.to(e,{yPercent:0,stagger:.08,duration:.6,delay:.6})}),[]);var U=Object(d.useState)(!1),H=Object(l.a)(U,2),q=H[0],G=H[1],Y=Object(d.useState)(!1),J=Object(l.a)(Y,2),Z=J[0],X=J[1],Q=Object(d.useState)(!1),V=Object(l.a)(Q,2),$=V[0],ee=V[1],te=Object(d.useState)([]),ne=Object(l.a)(te,2),ae=ne[0],re=ne[1],ce=Object(d.useState)(-1),ie=Object(l.a)(ce,2),se=ie[0],oe=ie[1],le=Object(d.useState)({name:"",email:"",message:""}),de=Object(l.a)(le,2),he=de[0],pe=de[1],ue=Object(d.useState)([]),me=Object(l.a)(ue,2),fe=me[0],be=me[1],je=Object(d.useState)({name:"",email:""}),ge=Object(l.a)(je,2),ve=ge[0],xe=ge[1],Oe=Object(d.useState)("Send request"),we=Object(l.a)(Oe,2),ye=we[0],ke=we[1],Se=Object(d.useState)("Send"),_e=Object(l.a)(Se,2),Ne=(_e[0],_e[1]),Re=function(e){"name"===e.target.name&&xe(Object(o.a)(Object(o.a)({},ve),{},{name:""})),"email"===e.target.name&&xe(Object(o.a)(Object(o.a)({},ve),{},{email:""}));var t=e.target.name,n=Object(o.a)(Object(o.a)({},he),{},Object(s.a)({},t,e.target.value));return pe(n)},Ce=function(e,t){if("need"===e){var n=ae.includes(t);re(n?ae.filter((function(e){return e!==t})):[].concat(Object(i.a)(ae),[t]))}else"budg"===e&&oe(se===t?-1:t)},Le=function(){var e=Object(c.a)(r.a.mark((function e(){var t,n,a,c,i,s;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!Z){e.next=2;break}return e.abrupt("return");case 2:if(xe({name:"",email:""}),Me(!0)){e.next=5;break}return e.abrupt("return");case 5:return e.prev=5,e.next=8,A.current.executeAsync();case 8:e.next=14;break;case 10:return e.prev=10,e.t0=e.catch(5),console.log("Google recaptcha failed"),e.abrupt("return");case 14:return X(!0),Ie(!0),(t={}).name=he.name,t.email=he.email,he.message&&(t.message=he.message),n=P.needs,a=P.budgets,ae&&(c=n.filter((function(e,t){return ae.includes(t)})),t.needs=c.join(" - ")),se&&(t.budg=a[se]),i=new FormData,fe&&fe.forEach((function(e){i.append("attachs",e)})),e.next=27,fetch("https://deveb-api.herokuapp.com/");case 27:return e.next=29,fetch("https://deveb-api.herokuapp.com/api/send",{method:"post",body:i||{},headers:t});case 29:return s=e.sent,e.next=32,s.json();case 32:(s=e.sent).success?(X(!1),Ie(!1),G(!0),h({isHover:!0,color:{bg:"#fff",txt:"#000"},text:"\u2715",blend:!0,fsize:"20px"}),pe({name:"",email:"",message:""}),re([]),oe(-1),be([])):(X(!1),Ie(!1));case 34:case"end":return e.stop()}}),e,null,[[5,10]])})));return function(){return e.apply(this,arguments)}}(),Ee=function e(){Ae(),K=setTimeout((function(){return e()}),500)};Object(d.useEffect)((function(){Z?Ee():"Send request"!==ye&&(clearTimeout(K),K=null,ke("Send request"))}),[Z]);var Ae=function(){var e=document.querySelector("section.sec-form form div.btn-container button span.btn-more-title span").innerText,t="S"===e[0]?e.split(" "):["",e],n="",a="";"send"===t[0].toLowerCase()?(n="Sending .",a="."):t[1]&&(1===t[1].length?(n="Sending ..",a=".."):2===t[1].length?(n="Sending ...",a="..."):3===t[1].length&&(n="Sending .",a=".")),ke(n),Ne(a)},Ie=function(e){e?F.c.to(".circle",{width:"70px",height:"70px",yoyo:!0,repeat:-1,duration:.5}):F.c.fromTo(".circle",{width:"48px",height:"48px"},{width:"48px",height:"48px",yoyo:!1,repeat:-1})},Me=function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=!0,n={name:"",email:""};return Te()||(t=!1,e&&(n.name="Please fill your name")),Ue()||(t=!1,e&&(n.email="Please enter a valid email")),t||xe(n),t};function Pe(){var e=S.current,t=document.createRange();window.getSelection().removeAllRanges(),t.selectNode(e),window.getSelection().addRange(t),document.execCommand("copy"),window.getSelection().removeAllRanges(),h({isHover:!0,color:{bg:"#000000",txt:"#ffffff"},text:"copied \u2713"})}var Te=function(){return!(he.name.length<2)},Ue=function(){return!(!he.email||(e=he.email.trim(),!/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(String(e).toLowerCase())));var e},Be=function(e){"name"!==e||Te()?"email"!==e||Ue()||xe({name:ve.name,email:"Please enter a valid email"}):xe({email:ve.email,name:"Please fill your name"})};return Object(d.useEffect)((function(){t(),q||h({isHover:!1})}),[q]),Object(d.useEffect)((function(){var e=Me();e&&!$?ee(!0):!e&&$&&ee(!1)}),[he]),Object(D.jsxs)(D.Fragment,{children:[q?Object(D.jsx)(z,{showToggle:function(){return G(!1)}}):Object(D.jsxs)("section",{"data-scroll-container":!0,ref:L,className:"sec-form mb ".concat(Z?"sending-form-effect":""," only-contact"),children:[Object(D.jsxs)("header",{children:[Object(D.jsxs)("h6",{children:["We are always happy to help"," ",Object(D.jsx)("img",{src:"/assets/emojie/angel.png",alt:"angel-emojie"})]}),Object(D.jsx)("h1",{children:"Get in touch"})]}),Object(D.jsxs)("form",{onSubmit:function(e){return e.preventDefault()},children:[Object(D.jsxs)("div",{className:"options-btns needs",children:[Object(D.jsx)("p",{children:"I need"}),P.needs.map((function(e,t){return Object(D.jsx)(m.a,{txt:e,isActive:ae.includes(t),trigger:function(){return Ce("need",t)}},t)}))]}),Object(D.jsxs)("div",{className:"form-inputs",children:[Object(D.jsxs)("div",{className:"am-input",children:[Object(D.jsx)("input",{type:"text",placeholder:"Your name",name:"name",value:he.name,onChange:Re,className:ve.name?"err":"",onBlur:function(){return Be("name")}}),Object(D.jsx)("div",{className:"input-moving-line",children:Object(D.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"100%",height:"100%",viewBox:"0 0 1200 60",preserveAspectRatio:"none",children:Object(D.jsx)("path",{fill:"none",stroke:ve.name.length?"#FF6666":"#6E6E73",d:"M0,56.5c0,0,298.666,0,399.333,0C448.336,56.5,513.994,46,597,46c77.327,0,135,10.5,200.999,10.5c95.996,0,402.001,0,402.001,0"})})}),ve.name&&Object(D.jsx)("span",{className:"input-err",children:ve.name})]}),Object(D.jsxs)("div",{className:"am-input",children:[Object(D.jsx)("input",{type:"text",placeholder:"Your email",name:"email",value:he.email,onChange:Re,className:ve.email?"err":"",autoComplete:"off",onBlur:function(){return Be("email")}}),Object(D.jsx)("div",{className:"input-moving-line",children:Object(D.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"100%",height:"100%",viewBox:"0 0 1200 60",preserveAspectRatio:"none",children:Object(D.jsx)("path",{fill:"none",stroke:ve.email.length?"#FF6666":"#6E6E73",d:"M0,56.5c0,0,298.666,0,399.333,0C448.336,56.5,513.994,46,597,46c77.327,0,135,10.5,200.999,10.5c95.996,0,402.001,0,402.001,0"})})}),ve.email&&Object(D.jsx)("span",{className:"input-err",children:ve.email})]}),Object(D.jsxs)("div",{className:"am-input full-w",children:[Object(D.jsx)("textarea",{className:"full-w",type:"text",placeholder:"About your project",name:"message",value:he.message,onChange:function(e){Re(e);var t=e.target;t.style.height="",t.style.height=Math.max(t.scrollHeight,23)+"px"}}),Object(D.jsx)("div",{className:"input-moving-line",style:{backgroundImage:W},children:Object(D.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"100%",height:"100%",viewBox:"0 0 1200 60",preserveAspectRatio:"none",children:Object(D.jsx)("path",{fill:"none",stroke:"#6E6E73",d:"M0,56.5c0,0,298.666,0,399.333,0C448.336,56.5,513.994,46,597,46c77.327,0,135,10.5,200.999,10.5c95.996,0,402.001,0,402.001,0"})})})]})]}),Object(D.jsxs)("div",{className:"att-btn",children:[Object(D.jsx)("label",{htmlFor:"filename",ref:C}),Object(D.jsxs)(m.a,{isActive:!1,trigger:function(){},refrence:C,primary:!0,children:[" ",Object(D.jsxs)("span",{children:[Object(D.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 17.009 17",children:Object(D.jsx)("g",{id:"attach-interface-clip-symbol",transform:"translate(12.524 -0.146)",children:Object(D.jsx)("g",{id:"Group_335","data-name":"Group 335",transform:"translate(-12.524 0.146)",children:Object(D.jsx)("path",{id:"Path_273","data-name":"Path 273",d:"M11.08,7.579a1.076,1.076,0,0,0,.047-1.6,1.149,1.149,0,0,0-1.647,0L8.056,7.4a3.476,3.476,0,0,0-.177,5.024,3.532,3.532,0,0,0,5.074-.127l2.4-2.4a5.664,5.664,0,0,0,0-8l-.1-.1a5.663,5.663,0,0,0-8,0l-5.6,5.6a5.664,5.664,0,0,0,0,8l.1.1a5.621,5.621,0,0,0,6.48,1.06c.585-.286,1.221-.829.8-1.59A1.175,1.175,0,0,0,7.4,14.529,3.952,3.952,0,0,1,3.351,13.9l-.1-.1a3.4,3.4,0,0,1,0-4.8l5.6-5.6a3.4,3.4,0,0,1,4.8,0l.1.1a3.4,3.4,0,0,1,0,4.8l-2.4,2.4a1.274,1.274,0,0,1-1.873.127A1.223,1.223,0,0,1,9.657,9Z",transform:"translate(0 -0.146)"})})})}),"Add attachment"]})]}),Object(D.jsx)("input",{className:"hd",type:"file",id:"filename",name:"filename",onChange:function(e){fe?fe.map((function(e){return e.name})).includes(e.target.files[0].name)||be([].concat(Object(i.a)(fe),[e.target.files[0]])):be(e.target.files[0])},multiple:"multiple"}),fe?Object(D.jsx)("div",{className:"attachs",children:fe.map((function(e,t){var n=e.name;return Object(D.jsxs)("div",{className:"attach",onClick:function(){return function(e){var t=fe.filter((function(t,n){return n!==e}));be(t)}(t)},children:[Object(D.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-6 w-6",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:Object(D.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M6 18L18 6M6 6l12 12"})}),Object(D.jsx)("span",{children:n})]},t)}))}):"",Object(D.jsx)(B,{sitekey:"6LcLMYIfAAAAAI23mMBl5bohz5-SMNJQ5yzcTO0S",size:"invisible",ref:A})]}),Object(D.jsxs)(D.Fragment,{children:[Object(D.jsxs)("div",{className:"options-btns budgets",children:[Object(D.jsx)("p",{children:"Budget (USD)"}),P.budgets.map((function(e,t){return Object(D.jsx)(m.a,{txt:e,isActive:se===t,trigger:function(){return Ce("budg",t)}},t)}))]}),Object(D.jsx)("div",{className:"google-captcha",children:Object(D.jsxs)("span",{children:["This site is protected by reCAPTCHA and the Google"," ",Object(D.jsxs)("a",{href:"https://policies.google.com/privacy",target:"_blank",rel:"noopener",children:[" ","Privacy Policy"," "]})," ","and"," ",Object(D.jsxs)("a",{href:"https://policies.google.com/terms",target:"_blank",rel:"noopener",children:[" ","Terms of Service"," "]})," ","apply."]})}),a?Object(D.jsx)(u.a,{text:ye,trigger:Le,exClass:"con-lg-send",active:$}):Object(D.jsx)(p.a,{text:ye,trigger:Le,active:$,movable:!1})]})]}),a?null:Object(D.jsx)("div",{className:"con-foot",children:Object(D.jsxs)("div",{className:"footer-foot con-fot",children:[Object(D.jsxs)("div",{className:"footer-secs l",children:[Object(D.jsx)("h5",{onClick:function(){return Pe()},onMouseEnter:function(){return h({isHover:!0,color:{bg:"#000000",txt:"#FFFFFF"},text:"Click to copy"})},onMouseLeave:function(){return h(!1)},className:R?"active":"",ref:S,children:"info@deveb.com"}),Object(D.jsx)("p",{children:"Mechnykova St, 2, Kyiv, 02000"})]}),Object(D.jsxs)("div",{className:"footer-secs r",children:[Object(D.jsxs)("div",{children:[Object(D.jsx)("a",{href:"https://www.instagram.com/deveb.co/?hl=en",target:"_blank",children:Object(D.jsx)("img",{className:"insta",src:v.a})}),Object(D.jsx)("a",{href:"https://www.instagram.com/am__arc/?hl=en",target:"_blank",children:Object(D.jsx)("img",{className:"drib",src:x.a})}),Object(D.jsx)("a",{href:"https://www.behance.net/amirmohseni",target:"_blank",children:Object(D.jsx)("img",{className:"be",src:j.a})}),Object(D.jsx)("a",{href:"https://t.me/am_arc_com",target:"_blank",children:Object(D.jsx)("img",{className:"git",src:g.a})}),Object(D.jsxs)("a",{href:"https://api.whatsapp.com/send?phone=380970006043",target:"_blank",children:[" ",Object(D.jsx)("img",{className:"whats",src:b.a})]})]}),Object(D.jsx)(k.b,{to:"/privacyandpolicy",children:Object(D.jsx)("p",{children:"Privacy Policy"})})]})]})})]}),a?Object(D.jsx)("div",{style:{height:"50vh"},children:Object(D.jsx)("section",{id:"bab",className:"contact-footer footer-sec fot",children:Object(D.jsx)("div",{className:"trig",children:Object(D.jsxs)("div",{className:"footer-foot",children:[Object(D.jsxs)("div",{className:"footer-secs l",children:[Object(D.jsx)("h5",{onClick:function(){return Pe()},onMouseEnter:function(){return h({isHover:!0,color:{bg:"#000",txt:"#fff"},text:"Click to copy"})},onMouseLeave:function(){return h(!1)},className:R?"active":"",ref:S,children:"Info@deveb.co"}),Object(D.jsx)("p",{children:"Mechnykova St, 2, Kyiv, 02000"})]}),Object(D.jsx)("div",{className:"footer-secs r",children:Object(D.jsxs)("div",{children:[Object(D.jsx)("a",{href:"https://www.instagram.com/deveb.co/?hl=en",target:"_blank",children:Object(D.jsx)("img",{className:"insta",src:v.a})}),Object(D.jsx)("a",{href:"https://www.upwork.com/fl/am1amirmohseni",target:"_blank",children:Object(D.jsx)("img",{className:"drib",src:x.a})}),Object(D.jsx)("a",{href:"https://www.behance.net/amirmohseni",target:"_blank",children:Object(D.jsx)("img",{className:"be",src:j.a})}),Object(D.jsx)("a",{href:"https://t.me/am_arc_com",target:"_blank",children:Object(D.jsx)("img",{className:"git",src:g.a})}),Object(D.jsxs)("a",{href:"https://api.whatsapp.com/send?phone=380970006043",target:"_blank",children:[" ",Object(D.jsx)("img",{className:"whats",src:b.a})]})]})})]})})})}):null]})}}}]);
//# sourceMappingURL=0.54b584d8.chunk.js.map