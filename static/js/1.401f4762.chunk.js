(this.webpackJsonpdeveb=this.webpackJsonpdeveb||[]).push([[1],{85:function(e,t,a){"use strict";a.r(t);var n=a(79),c=a.n(n),s=a(81),r=a(32),i=a(15),l=a(8),o=a(7),j=a(2),m=a(22),d=a(23),h=a(41),b=a(5),u=a(24),f=a(25),p=a(31),g=a(26),O=a(39),x={needs:["Branding","Web design","Site from scratch","UI/UX","Web animation","Application design","HTML/CSS coding","Back-end","Development","Maintenance","Other"],budgets:["Under 10K","10-20K","20-50K","50-100K","+100K"]},v={needs:["Branding","Web design","UI/UX","Web animation","Application design","HTML/CSS","Site from scratch","Back-end","Maintenance","Other"],budgets:["Under 10K","10-20K","20-50K","50-100K","+100K"]},w=a(9),y=a(6),N=a(82),k=a(1),S=a.p+"static/media/light-line.e26f9b60.svg";try{window.addEventListener("test",null,Object.defineProperty({},"passive",{get:function(){!0}}))}catch(P){}document.createElement("div");var A=a(0);function _(e){var t=e.showToggle;return Object(A.jsxs)("div",{className:"thanks-container",onClick:function(){return t()},children:[Object(A.jsx)("h2",{children:"Thanks!"}),Object(A.jsx)("p",{children:"You will hear back from us shortly."})]})}var C,M="url(".concat(S,")");t.default=function(){var e,t=Object(b.b)().setReset,a=Object(b.b)(),n=a.isMobile,S=a.changePointer,P=(null===(e=Object(w.f)().state)||void 0===e||e.contact,Object(j.useRef)()),E=Object(j.useState)(!1),B=Object(o.a)(E,2),T=B[0],K=(B[1],Object(j.useRef)(null)),L=Object(j.useRef)(null),R=Object(j.useState)({needs:[],budgets:[]}),F=Object(o.a)(R,2),H=F[0],U=F[1];Object(j.useEffect)((function(){return U(n?v:x),function(){}}),[n]);var z=Object(j.useState)(!1),I=Object(o.a)(z,2),W=I[0],G=I[1],q=Object(j.useState)(!1),D=Object(o.a)(q,2),Y=D[0],J=D[1],Z=Object(j.useState)(!1),X=Object(o.a)(Z,2),Q=X[0],$=X[1],V=Object(j.useState)([]),ee=Object(o.a)(V,2),te=ee[0],ae=ee[1],ne=Object(j.useState)(-1),ce=Object(o.a)(ne,2),se=ce[0],re=ce[1],ie=Object(j.useState)({name:"",email:"",message:""}),le=Object(o.a)(ie,2),oe=le[0],je=le[1],me=Object(j.useState)([]),de=Object(o.a)(me,2),he=de[0],be=de[1],ue=Object(j.useState)({name:"",email:""}),fe=Object(o.a)(ue,2),pe=fe[0],ge=fe[1],Oe=Object(j.useState)("Send request"),xe=Object(o.a)(Oe,2),ve=xe[0],we=xe[1],ye=Object(j.useState)("Send"),Ne=Object(o.a)(ye,2),ke=(Ne[0],Ne[1]),Se=function(e){"name"===e.target.name&&ge(Object(l.a)(Object(l.a)({},pe),{},{name:""})),"email"===e.target.name&&ge(Object(l.a)(Object(l.a)({},pe),{},{email:""}));var t=e.target.name,a=Object(l.a)(Object(l.a)({},oe),{},Object(i.a)({},t,e.target.value));return je(a)},Ae=function(e,t){if("need"===e){var a=te.includes(t);ae(a?te.filter((function(e){return e!==t})):[].concat(Object(r.a)(te),[t]))}else"budg"===e&&re(se===t?-1:t)},_e=function(){var e=Object(s.a)(c.a.mark((function e(){var t,a,n,s,r,i;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!Y){e.next=2;break}return e.abrupt("return");case 2:if(ge({name:"",email:""}),Ee(!0)){e.next=5;break}return e.abrupt("return");case 5:return e.prev=5,e.next=8,L.current.executeAsync();case 8:e.next=14;break;case 10:return e.prev=10,e.t0=e.catch(5),console.log("Google recaptcha failed"),e.abrupt("return");case 14:return J(!0),Pe(!0),(t={}).name=oe.name,t.email=oe.email,oe.message&&(t.message=oe.message),a=H.needs,n=H.budgets,te&&(s=a.filter((function(e,t){return te.includes(t)})),t.needs=s.join(" - ")),se&&(t.budg=n[se]),r=new FormData,he&&he.forEach((function(e){r.append("attachs",e)})),e.next=27,fetch("https://deveb-api.herokuapp.com/");case 27:return e.next=29,fetch("https://deveb-api.herokuapp.com/api/send",{method:"post",body:r||{},headers:t});case 29:return i=e.sent,e.next=32,i.json();case 32:(i=e.sent).success?(J(!1),Pe(!1),G(!0),S({isHover:!0,color:{bg:"#ffffff",txt:"#000000"},text:"\u2715",blend:!0,fsize:"20px"}),je({name:"",email:"",message:""}),ae([]),re(-1),be([])):(J(!1),Pe(!1));case 34:case"end":return e.stop()}}),e,null,[[5,10]])})));return function(){return e.apply(this,arguments)}}(),Ce=function e(){Me(),C=setTimeout((function(){return e()}),500)};Object(j.useEffect)((function(){Y?Ce():"Send request"!==ve&&(clearTimeout(C),C=null,we("Send request"))}),[Y]);var Me=function(){var e=document.querySelector("section.sec-form form div.btn-container button span.btn-more-title span").innerText,t="S"===e[0]?e.split(" "):["",e],a="",n="";"send"===t[0].toLowerCase()?(a="Sending .",n="."):t[1]&&(1===t[1].length?(a="Sending ..",n=".."):2===t[1].length?(a="Sending ...",n="..."):3===t[1].length&&(a="Sending .",n=".")),we(a),ke(n)},Pe=function(e){e?k.a.to(".circle",{width:"70px",height:"70px",yoyo:!0,repeat:-1,duration:.5}):k.a.fromTo(".circle",{width:"48px",height:"48px"},{width:"48px",height:"48px",yoyo:!1,repeat:-1})},Ee=function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=!0,a={name:"",email:""};return Be()||(t=!1,e&&(a.name="Please fill your name")),Te()||(t=!1,e&&(a.email="Please enter a valid email")),t||ge(a),t};var Be=function(){return!(oe.name.length<2)},Te=function(){return!(!oe.email||(e=oe.email.trim(),!/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(String(e).toLowerCase())));var e},Ke=function(e){"name"!==e||Be()?"email"!==e||Te()||ge({name:pe.name,email:"Please enter a valid email"}):ge({email:pe.email,name:"Please fill your name"})};return Object(j.useEffect)((function(){t(),W||S({isHover:!1})}),[W]),Object(j.useEffect)((function(){var e=Ee();e&&!Q?$(!0):!e&&Q&&$(!1)}),[oe]),Object(A.jsxs)(A.Fragment,{children:[W?Object(A.jsx)(_,{showToggle:function(){return G(!1)}}):Object(A.jsxs)("section",{"data-scroll-container":!0,className:"sec-form mb ".concat(Y?"sending-form-effect":""," only-contact"),children:[Object(A.jsxs)("header",{children:[Object(A.jsxs)("h6",{children:["We are always happy to help"," ",Object(A.jsx)("img",{src:"/assets/emojie/angel.png",alt:"angel-emojie"})]}),Object(A.jsx)("h1",{children:"Get in touch"})]}),Object(A.jsxs)("form",{onSubmit:function(e){return e.preventDefault()},children:[Object(A.jsxs)("div",{className:"options-btns needs",children:[Object(A.jsx)("p",{children:"I need"}),H.needs.map((function(e,t){return Object(A.jsx)(h.a,{txt:e,isActive:te.includes(t),trigger:function(){return Ae("need",t)}},t)}))]}),Object(A.jsxs)("div",{className:"form-inputs",children:[Object(A.jsxs)("div",{className:"am-input",children:[Object(A.jsx)("input",{type:"text",placeholder:"Your name",name:"name",value:oe.name,onChange:Se,className:pe.name?"err":"",onBlur:function(){return Ke("name")}}),Object(A.jsx)("div",{className:"input-moving-line",children:Object(A.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"100%",height:"100%",viewBox:"0 0 1200 60",preserveAspectRatio:"none",children:Object(A.jsx)("path",{fill:"none",stroke:pe.name.length?"#FF6666":"#6E6E73",d:"M0,56.5c0,0,298.666,0,399.333,0C448.336,56.5,513.994,46,597,46c77.327,0,135,10.5,200.999,10.5c95.996,0,402.001,0,402.001,0"})})}),pe.name&&Object(A.jsx)("span",{className:"input-err",children:pe.name})]}),Object(A.jsxs)("div",{className:"am-input",children:[Object(A.jsx)("input",{type:"text",placeholder:"Your email",name:"email",value:oe.email,onChange:Se,className:pe.email?"err":"",autoComplete:"off",onBlur:function(){return Ke("email")}}),Object(A.jsx)("div",{className:"input-moving-line",children:Object(A.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"100%",height:"100%",viewBox:"0 0 1200 60",preserveAspectRatio:"none",children:Object(A.jsx)("path",{fill:"none",stroke:pe.email.length?"#FF6666":"#6E6E73",d:"M0,56.5c0,0,298.666,0,399.333,0C448.336,56.5,513.994,46,597,46c77.327,0,135,10.5,200.999,10.5c95.996,0,402.001,0,402.001,0"})})}),pe.email&&Object(A.jsx)("span",{className:"input-err",children:pe.email})]}),Object(A.jsxs)("div",{className:"am-input full-w",children:[Object(A.jsx)("textarea",{className:"full-w",type:"text",placeholder:"About your project",name:"message",value:oe.message,onChange:function(e){Se(e);var t=e.target;t.style.height="",t.style.height=Math.max(t.scrollHeight,23)+"px"}}),Object(A.jsx)("div",{className:"input-moving-line",style:{backgroundImage:M},children:Object(A.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"100%",height:"100%",viewBox:"0 0 1200 60",preserveAspectRatio:"none",children:Object(A.jsx)("path",{fill:"none",stroke:"#6E6E73",d:"M0,56.5c0,0,298.666,0,399.333,0C448.336,56.5,513.994,46,597,46c77.327,0,135,10.5,200.999,10.5c95.996,0,402.001,0,402.001,0"})})})]})]}),Object(A.jsxs)("div",{className:"att-btn",children:[Object(A.jsx)("label",{htmlFor:"filename",ref:K}),Object(A.jsxs)(h.a,{isActive:!1,trigger:function(){},refrence:K,primary:!0,children:[" ",Object(A.jsxs)("span",{children:[Object(A.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 17.009 17",children:Object(A.jsx)("g",{id:"attach-interface-clip-symbol",transform:"translate(12.524 -0.146)",children:Object(A.jsx)("g",{id:"Group_335","data-name":"Group 335",transform:"translate(-12.524 0.146)",children:Object(A.jsx)("path",{id:"Path_273","data-name":"Path 273",d:"M11.08,7.579a1.076,1.076,0,0,0,.047-1.6,1.149,1.149,0,0,0-1.647,0L8.056,7.4a3.476,3.476,0,0,0-.177,5.024,3.532,3.532,0,0,0,5.074-.127l2.4-2.4a5.664,5.664,0,0,0,0-8l-.1-.1a5.663,5.663,0,0,0-8,0l-5.6,5.6a5.664,5.664,0,0,0,0,8l.1.1a5.621,5.621,0,0,0,6.48,1.06c.585-.286,1.221-.829.8-1.59A1.175,1.175,0,0,0,7.4,14.529,3.952,3.952,0,0,1,3.351,13.9l-.1-.1a3.4,3.4,0,0,1,0-4.8l5.6-5.6a3.4,3.4,0,0,1,4.8,0l.1.1a3.4,3.4,0,0,1,0,4.8l-2.4,2.4a1.274,1.274,0,0,1-1.873.127A1.223,1.223,0,0,1,9.657,9Z",transform:"translate(0 -0.146)"})})})}),"Add attachment"]})]}),Object(A.jsx)("input",{className:"hd",type:"file",id:"filename",name:"filename",onChange:function(e){he?he.map((function(e){return e.name})).includes(e.target.files[0].name)||be([].concat(Object(r.a)(he),[e.target.files[0]])):be(e.target.files[0])},multiple:"multiple"}),he?Object(A.jsx)("div",{className:"attachs",children:he.map((function(e,t){var a=e.name;return Object(A.jsxs)("div",{className:"attach",onClick:function(){return function(e){var t=he.filter((function(t,a){return a!==e}));be(t)}(t)},children:[Object(A.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-6 w-6",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:Object(A.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M6 18L18 6M6 6l12 12"})}),Object(A.jsx)("span",{children:a})]},t)}))}):"",Object(A.jsx)(N.a,{sitekey:"6LcLMYIfAAAAAI23mMBl5bohz5-SMNJQ5yzcTO0S",size:"invisible",ref:L})]}),Object(A.jsxs)(A.Fragment,{children:[Object(A.jsxs)("div",{className:"options-btns budgets",children:[Object(A.jsx)("p",{children:"Budget (USD)"}),H.budgets.map((function(e,t){return Object(A.jsx)(h.a,{txt:e,isActive:se===t,trigger:function(){return Ae("budg",t)}},t)}))]}),Object(A.jsx)("div",{className:"google-captcha",children:Object(A.jsxs)("span",{children:["This site is protected by reCAPTCHA and the Google"," ",Object(A.jsxs)("a",{href:"https://policies.google.com/privacy",target:"_blank",rel:"noopener",children:[" ","Privacy Policy"," "]})," ","and"," ",Object(A.jsxs)("a",{href:"https://policies.google.com/terms",target:"_blank",rel:"noopener",children:[" ","Terms of Service"," "]})," ","apply."]})}),n?Object(A.jsx)(d.a,{text:ve,trigger:_e,exClass:"con-lg-send",active:Q}):Object(A.jsx)(m.a,{text:ve,trigger:_e,active:Q,movable:!1})]})]}),n?null:Object(A.jsx)("div",{className:"con-foot",children:Object(A.jsxs)("div",{className:"footer-foot con-fot",children:[Object(A.jsxs)("div",{className:"footer-secs l",children:[Object(A.jsx)("h5",{onClick:function(){return function(){var e=P.current,t=document.createRange();window.getSelection().removeAllRanges(),t.selectNode(e),window.getSelection().addRange(t),document.execCommand("copy"),window.getSelection().removeAllRanges(),S({isHover:!0,color:{bg:"#ffffff",txt:"#3d7299"},text:"copied \u2713"})}()},onMouseEnter:function(){return S({isHover:!0,color:{bg:"#ffffff",txt:"#3d7299"},text:"Click to copy"})},onMouseLeave:function(){return S(!1)},className:T?"active":"",ref:P,children:"am@am-arc.com"}),Object(A.jsx)("p",{children:"Mechnykova St, 2, Kyiv, 02000"})]}),Object(A.jsxs)("div",{className:"footer-secs r",children:[Object(A.jsxs)("div",{children:[Object(A.jsx)("a",{href:"https://www.behance.net/amirmohseni",target:"_blank",children:Object(A.jsx)("img",{className:"be",src:f.a})}),Object(A.jsx)("a",{href:"https://www.upwork.com/fl/am1amirmohseni",target:"_blank",children:Object(A.jsx)("img",{className:"up",src:p.a})}),Object(A.jsx)("a",{href:"https://www.instagram.com/am__arc/?hl=en",target:"_blank",children:Object(A.jsx)("img",{className:"insta",src:g.a})}),Object(A.jsx)("a",{href:"https://t.me/am_arc_com",target:"_blank",children:Object(A.jsx)("img",{className:"tele",src:O.a})}),Object(A.jsxs)("a",{href:"https://api.whatsapp.com/send?phone=380970006043",target:"_blank",children:[" ",Object(A.jsx)("img",{className:"whats",src:u.a})]})]}),Object(A.jsx)(y.b,{to:"/privacyandpolicy",children:Object(A.jsx)("p",{children:"Privacy Policy"})})]})]})})]}),n?Object(A.jsx)("div",{style:{height:"50vh"},children:Object(A.jsx)("section",{id:"bab",className:"sec-form footer-sec fot",children:Object(A.jsx)("div",{className:"trig",children:Object(A.jsxs)("div",{className:"footer-foot",children:[Object(A.jsxs)("div",{className:"footer-secs l",children:[Object(A.jsx)("h5",{children:"am@am-arc.com"}),Object(A.jsx)("p",{children:"Mechnykova St, 2, Kyiv, 02000"}),Object(A.jsx)(y.b,{to:"/privacyandpolicy",children:Object(A.jsx)("p",{children:"Privacy Policy"})})]}),Object(A.jsx)("div",{className:"footer-secs r",children:Object(A.jsxs)("div",{children:[Object(A.jsx)("a",{href:"https://www.upwork.com/fl/am1amirmohseni",target:"_blank",children:Object(A.jsx)("img",{className:"up",src:p.a})}),Object(A.jsx)("a",{href:"https://www.behance.net/amirmohseni",target:"_blank",children:Object(A.jsx)("img",{className:"be",src:f.a})}),Object(A.jsx)("a",{href:"https://t.me/am_arc_com",target:"_blank",children:Object(A.jsx)("img",{className:"tele",src:O.a})}),Object(A.jsx)("a",{href:"https://www.instagram.com/am__arc/?hl=en",target:"_blank",children:Object(A.jsx)("img",{className:"insta",src:g.a})}),Object(A.jsxs)("a",{href:"https://api.whatsapp.com/send?phone=380970006043",target:"_blank",children:[" ",Object(A.jsx)("img",{className:"whats",src:u.a})]})]})})]})})})}):null]})}}}]);
//# sourceMappingURL=1.401f4762.chunk.js.map