(this["webpackJsonpgoit-react-hw-04-hooks-images"]=this["webpackJsonpgoit-react-hw-04-hooks-images"]||[]).push([[0],{32:function(e,n,t){},78:function(e,n,t){"use strict";t.r(n);var a=t(0),r=t.n(a),o=t(9),i=t.n(o),c=(t(32),t(15)),s=t(6),l=t(7),d=t(14),u=t.n(d),b=t(24),p=t(11),j=t.n(p);j.a.defaults.baseURL="https://pixabay.com/api/",j.a.defaults.params={image_type:"photo",key:"22629706-2b1c8bc2d7db5f907a7256f2f"};var g,h,f,m,x,O,v,w,y,k=function(){var e=Object(b.a)(u.a.mark((function e(n,t){var a;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,j.a.get("",{params:{page:t,q:n}});case 2:return a=e.sent,e.abrupt("return",a.data.hits);case 4:case"end":return e.stop()}}),e)})));return function(n,t){return e.apply(this,arguments)}}(),S=t(3),C=t(4),E=C.a.div(g||(g=Object(S.a)(["\n  padding-bottom: 24px;\n  display: grid;\n  grid-template-columns: 1fr;\n  grid-gap: 16px;\n"]))),L=C.a.form(h||(h=Object(S.a)(["\n  display: flex;\n  align-items: center;\n  width: 100%;\n  max-width: 600px;\n  background-color: white;\n  border-radius: 3px;\n  overflow: hidden;\n"]))),I=C.a.button(f||(f=Object(S.a)(["\n  display: inline-block;\n  width: 48px;\n  height: 48px;\n  border: 0;\n  background-image: url('https://image.flaticon.com/icons/svg/149/149852.svg');\n  background-size: 40%;\n  background-repeat: no-repeat;\n  background-position: center;\n  cursor: pointer;\n  outline: none;\n"]))),M=C.a.span(m||(m=Object(S.a)(["\n  padding: 0;\n  position: absolute;\n  width: 1px;\n  height: 1px;\n  overflow: hidden;\n  border: 0;\n"]))),z=C.a.input(x||(x=Object(S.a)(["\n  padding: 0 4px;\n  display: inline-block;\n  width: 100%;\n  font: inherit;\n  font-size: 20px;\n  border: none;\n  outline: none;\n  &::placeholder {\n    font: inherit;\n    font-size: 18px;\n  }\n"]))),R=C.a.header(O||(O=Object(S.a)(["\n  padding: 12px 24px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  top: 0;\n  left: 0;\n  position: sticky;\n  min-height: 64px;\n  color: white;\n  background-color: blue;\n"]))),U=t(1),N=function(e){var n=e.onSearch;return Object(U.jsx)(R,{children:Object(U.jsxs)(L,{onSubmit:function(e){e.preventDefault(),n(e.target.elements.imageName.value)},children:[Object(U.jsx)(I,{type:"submit",children:Object(U.jsx)(M,{children:"Search"})}),Object(U.jsx)(z,{type:"text",name:"imageName",autoComplete:"off",autoFocus:!0,placeholder:"Search images and photos"})]})})},T=C.a.ul(v||(v=Object(S.a)(["\n  margin: 0 auto;\n  padding: 0;\n  display: grid;\n  max-width: calc(100vw - 48px);\n  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));\n  grid-gap: 16px;\n  list-style: none;\n"])));function q(e){var n=e.children;return Object(U.jsx)(T,{children:n})}var J=C.a.li(w||(w=Object(S.a)(["\n\n"]))),P=C.a.img(y||(y=Object(S.a)(["\n  display: block;\n  cursor: pointer;\n\n"])));function B(e){var n=e.images,t=e.selectedImg,a=e.toggleModal;return n.map((function(e){return Object(U.jsx)(J,{children:Object(U.jsx)(P,{src:e.webformatURL,alt:"","data-src":e.largeImageURL,onClick:function(){return n=e.largeImageURL,t(n),void a();var n}})},e.id)}))}var D,F=t(2),H=t.n(F),Y=C.a.button(D||(D=Object(S.a)(["\n  margin: 0 auto;\n  padding: 8px 16px;\n  display: inline-block;\n  min-width: 180px;\n  text-align: center;\n  text-decoration: none;\n  font-family: inherit;\n  font-size: 18px;\n  font-style: normal;\n  font-weight: 500;\n  line-height: 24px;\n  border: 0;\n  border-radius: 5px;\n  background-color: blue;\n  color: white;\n  cursor: pointer;\n"])));function _(e){var n=e.onClick;return Object(U.jsx)(Y,{type:"button",onClick:n,children:"Load more"})}_.propType={onClick:H.a.func};var A,G,K,Q=t(26),V=t.n(Q),W=C.a.div(A||(A=Object(S.a)(["\n  display: flex;\n  justify-content: center;\n"]))),X=function(){return Object(U.jsx)(W,{children:Object(U.jsx)(V.a,{type:"Puff",color:"#4a0e4e",height:90,width:90,timeout:3e3})})},Z=C.a.div(G||(G=Object(S.a)(["\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100vw;\n  height: 100vh;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  background-color: rgba(0, 0, 0, 0.8);\n"]))),$=C.a.div(K||(K=Object(S.a)(["\n  max-width: calc(100vw - 48px);\n  max-height: calc(100vh - 24px);\n"])));function ee(e){var n=e.largeImg,t=e.toggleModal;Object(a.useEffect)((function(){var e=function(e){"Escape"===e.code&&t()};return window.addEventListener("keydown",e),function(){window.removeEventListener("keydown",e)}}),[t]);return Object(U.jsx)(Z,{onClick:function(e){e.target===e.currentTarget&&t()},children:Object(U.jsx)($,{children:Object(U.jsx)("img",{src:n,alt:""})})})}t(77);var ne="idle",te="resolved",ae="rejected";function re(){var e=Object(a.useState)(null),n=Object(s.a)(e,2),t=n[0],r=n[1],o=Object(a.useState)([]),i=Object(s.a)(o,2),d=i[0],u=i[1],b=Object(a.useState)(ne),p=Object(s.a)(b,2),j=p[0],g=p[1],h=Object(a.useState)(1),f=Object(s.a)(h,2),m=f[0],x=f[1],O=Object(a.useState)(!1),v=Object(s.a)(O,2),w=v[0],y=v[1],S=Object(a.useState)(""),C=Object(s.a)(S,2),L=C[0],I=C[1];Object(a.useEffect)((function(){if(t){try{g(ne),k(t,m).then((function(e){if(0===e.length)return l.b.error("No matches found");u((function(n){return[].concat(Object(c.a)(n),Object(c.a)(e))})),g(te)}))}catch(e){g(ae),l.b.error("Error")}m>1&&window.scrollTo({top:document.documentElement.scrollHeight,behavior:"smooth"})}}),[t,m]);var M=function(){y(!w)};return Object(U.jsxs)(E,{children:[Object(U.jsx)(N,{onSearch:function(e){if(t!==e){if(""===e.trim())return g(ne),l.b.error("Please enter your search data");u([]),r(e),x(1)}else Object(l.b)("Your request has already been completed, please enter a new one")}}),"pending"===j&&Object(U.jsx)(X,{}),Object(U.jsx)(q,{children:Object(U.jsx)(B,{images:d,toggleModal:M,selectedImg:function(e){return I(e)}})}),d.length>11&&Object(U.jsx)(_,{onClick:function(){return x(m+1)}}),w&&Object(U.jsx)(ee,{largeImg:L,showLoader:w,toggleModal:M}),Object(U.jsx)(l.a,{autoClose:3e3})]})}i.a.render(Object(U.jsx)(r.a.StrictMode,{children:Object(U.jsx)(re,{})}),document.getElementById("root"))}},[[78,1,2]]]);
//# sourceMappingURL=main.64ed1151.chunk.js.map