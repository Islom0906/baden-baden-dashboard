"use strict";(self.webpackChunkbaden_baden=self.webpackChunkbaden_baden||[]).push([[51],{81064:(e,t,n)=>{n.r(t),n.d(t,{default:()=>x});var r=n(50419),a=n(83099),o=n(66106),i=n(30914),c=n(87309),l=n(37083),s=n(79286),d=n(57689),u=n(27169),f=n(91933),m=n(77221),v=n(16030),p=n(50390),y=n(92883),b=n(31752),h=n(80184);const Z=e=>{let{data:t}=e;const n=(0,v.I0)(),r=(0,d.s0)(),o=[{title:"Title Ru",dataIndex:"title_ru",id:"title_ru",render:e=>(0,h.jsx)("p",{children:e})},{title:"Title Uz",dataIndex:"title_uz",id:"title_uz",render:e=>(0,h.jsx)("p",{children:e})},{title:"Title En",dataIndex:"title_en",id:"title_en",render:e=>(0,h.jsx)("p",{children:e})},{title:"Image",dataIndex:"image",id:"image",render:e=>(0,h.jsx)(p.Z,{width:50,src:e})},{title:"Action",id:"action",render:(e,t)=>(0,h.jsx)(a.Z,{size:20,children:(0,h.jsx)(c.Z,{onClick:()=>{return e=t.id,localStorage.setItem("editDataId",e),n({type:m.Pb,payload:e}),void r("/about-page/add");var e},type:"primary",icon:(0,h.jsx)(b.Z,{}),children:"Edit"})})}];return(0,h.jsx)("div",{children:t[0]&&(0,h.jsx)(y.Z,{columns:o,dataSource:t,rowKey:e=>null===e||void 0===e?void 0:e.id})})},x=()=>{const e=(0,d.s0)(),t=(0,v.I0)(),{data:n,isLoading:p}=(0,f.useQuery)("about-page-get",(()=>u.Z.getData("/about/about/")),{onError:e=>{r.ZP.error(e)}});return(0,h.jsx)("div",{className:"site-space-compact-wrapper",children:(0,h.jsxs)(a.Z,{direction:"vertical",style:{width:"100%"},children:[(0,h.jsx)(o.Z,{gutter:20,children:(0,h.jsx)(i.Z,{span:8,offset:16,children:(0,h.jsx)(c.Z,{disabled:null===n||void 0===n?void 0:n.title_ru,type:"primary",icon:(0,h.jsx)(s.Z,{}),style:{width:"100%"},onClick:()=>{t({type:m.Pb,payload:""}),e("/about-page/add")},children:"Add"})})}),(0,h.jsx)(l.Z,{size:"medium",spinning:p,children:(0,h.jsx)(Z,{data:[n]})})]})})}},96196:(e,t,n)=>{n.d(t,{Z:()=>R});var r=n(87462),a=n(29439),o=n(72791),i=n.t(o,2),c=n(32925),l=n(1413),s=n(81694),d=n.n(s),u=n(11354);var f=0;var m=(0,l.Z)({},i).useId;const v=m?function(e){var t=m();return e||t}:function(e){var t=o.useState("ssr-id"),n=(0,a.Z)(t,2),r=n[0],i=n[1];return o.useEffect((function(){var e=f;f+=1,i("rc_unique_".concat(e))}),[]),e||r};var p=n(80520),y=n(54170),b=n(98568);function h(e){var t=e.prefixCls,n=e.style,a=e.visible,i=e.maskProps,c=e.motionName;return o.createElement(b.ZP,{key:"mask",visible:a,motionName:c,leavedClassName:"".concat(t,"-mask-hidden")},(function(e,a){var c=e.className,s=e.style;return o.createElement("div",(0,r.Z)({ref:a,style:(0,l.Z)((0,l.Z)({},s),n),className:d()("".concat(t,"-mask"),c)},i))}))}function Z(e,t,n){var r=t;return!r&&n&&(r="".concat(e,"-").concat(n)),r}function x(e,t){var n=e["page".concat(t?"Y":"X","Offset")],r="scroll".concat(t?"Top":"Left");if("number"!==typeof n){var a=e.document;"number"!==typeof(n=a.documentElement[r])&&(n=a.body[r])}return n}const C=o.memo((function(e){return e.children}),(function(e,t){return!t.shouldUpdate}));var E={width:0,height:0,overflow:"hidden",outline:"none"};const g=o.forwardRef((function(e,t){var n=e.prefixCls,a=e.className,i=e.style,c=e.title,s=e.ariaId,u=e.footer,f=e.closable,m=e.closeIcon,v=e.onClose,p=e.children,y=e.bodyStyle,b=e.bodyProps,h=e.modalRender,Z=e.onMouseDown,x=e.onMouseUp,g=e.holderRef,N=e.visible,k=e.forceRender,w=e.width,I=e.height,R=(0,o.useRef)(),j=(0,o.useRef)();o.useImperativeHandle(t,(function(){return{focus:function(){var e;null===(e=R.current)||void 0===e||e.focus()},changeActive:function(e){var t=document.activeElement;e&&t===j.current?R.current.focus():e||t!==R.current||j.current.focus()}}}));var P,S,_,T={};void 0!==w&&(T.width=w),void 0!==I&&(T.height=I),u&&(P=o.createElement("div",{className:"".concat(n,"-footer")},u)),c&&(S=o.createElement("div",{className:"".concat(n,"-header")},o.createElement("div",{className:"".concat(n,"-title"),id:s},c))),f&&(_=o.createElement("button",{type:"button",onClick:v,"aria-label":"Close",className:"".concat(n,"-close")},m||o.createElement("span",{className:"".concat(n,"-close-x")})));var D=o.createElement("div",{className:"".concat(n,"-content")},_,S,o.createElement("div",(0,r.Z)({className:"".concat(n,"-body"),style:y},b),p),P);return o.createElement("div",{key:"dialog-element",role:"dialog","aria-labelledby":c?s:null,"aria-modal":"true",ref:g,style:(0,l.Z)((0,l.Z)({},i),T),className:d()(n,a),onMouseDown:Z,onMouseUp:x},o.createElement("div",{tabIndex:0,ref:R,style:E,"aria-hidden":"true"}),o.createElement(C,{shouldUpdate:N||k},h?h(D):D),o.createElement("div",{tabIndex:0,ref:j,style:E,"aria-hidden":"true"}))}));var N=o.forwardRef((function(e,t){var n=e.prefixCls,i=e.title,c=e.style,s=e.className,u=e.visible,f=e.forceRender,m=e.destroyOnClose,v=e.motionName,p=e.ariaId,y=e.onVisibleChanged,h=e.mousePosition,Z=(0,o.useRef)(),C=o.useState(),E=(0,a.Z)(C,2),N=E[0],k=E[1],w={};function I(){var e=function(e){var t=e.getBoundingClientRect(),n={left:t.left,top:t.top},r=e.ownerDocument,a=r.defaultView||r.parentWindow;return n.left+=x(a),n.top+=x(a,!0),n}(Z.current);k(h?"".concat(h.x-e.left,"px ").concat(h.y-e.top,"px"):"")}return N&&(w.transformOrigin=N),o.createElement(b.ZP,{visible:u,onVisibleChanged:y,onAppearPrepare:I,onEnterPrepare:I,forceRender:f,motionName:v,removeOnLeave:m,ref:Z},(function(a,u){var f=a.className,m=a.style;return o.createElement(g,(0,r.Z)({},e,{ref:t,title:i,ariaId:p,prefixCls:n,holderRef:u,style:(0,l.Z)((0,l.Z)((0,l.Z)({},m),c),w),className:d()(s,f)}))}))}));N.displayName="Content";const k=N;function w(e){var t=e.prefixCls,n=void 0===t?"rc-dialog":t,i=e.zIndex,c=e.visible,s=void 0!==c&&c,f=e.keyboard,m=void 0===f||f,b=e.focusTriggerAfterClose,x=void 0===b||b,C=e.wrapStyle,E=e.wrapClassName,g=e.wrapProps,N=e.onClose,w=e.afterClose,I=e.transitionName,R=e.animation,j=e.closable,P=void 0===j||j,S=e.mask,_=void 0===S||S,T=e.maskTransitionName,D=e.maskAnimation,z=e.maskClosable,A=void 0===z||z,M=e.maskStyle,O=e.maskProps,U=e.rootClassName,L=(0,o.useRef)(),V=(0,o.useRef)(),K=(0,o.useRef)(),B=o.useState(s),q=(0,a.Z)(B,2),H=q[0],Q=q[1],W=v();function X(e){null===N||void 0===N||N(e)}var Y=(0,o.useRef)(!1),F=(0,o.useRef)(),G=null;return A&&(G=function(e){Y.current?Y.current=!1:V.current===e.target&&X(e)}),(0,o.useEffect)((function(){s&&(Q(!0),(0,p.Z)(V.current,document.activeElement)||(L.current=document.activeElement))}),[s]),(0,o.useEffect)((function(){return function(){clearTimeout(F.current)}}),[]),o.createElement("div",(0,r.Z)({className:d()("".concat(n,"-root"),U)},(0,y.Z)(e,{data:!0})),o.createElement(h,{prefixCls:n,visible:_&&s,motionName:Z(n,T,D),style:(0,l.Z)({zIndex:i},M),maskProps:O}),o.createElement("div",(0,r.Z)({tabIndex:-1,onKeyDown:function(e){if(m&&e.keyCode===u.Z.ESC)return e.stopPropagation(),void X(e);s&&e.keyCode===u.Z.TAB&&K.current.changeActive(!e.shiftKey)},className:d()("".concat(n,"-wrap"),E),ref:V,onClick:G,style:(0,l.Z)((0,l.Z)({zIndex:i},C),{},{display:H?null:"none"})},g),o.createElement(k,(0,r.Z)({},e,{onMouseDown:function(){clearTimeout(F.current),Y.current=!0},onMouseUp:function(){F.current=setTimeout((function(){Y.current=!1}))},ref:K,closable:P,ariaId:W,prefixCls:n,visible:s&&H,onClose:X,onVisibleChanged:function(e){if(e)!function(){var e;(0,p.Z)(V.current,document.activeElement)||null===(e=K.current)||void 0===e||e.focus()}();else{if(Q(!1),_&&L.current&&x){try{L.current.focus({preventScroll:!0})}catch(t){}L.current=null}H&&(null===w||void 0===w||w())}},motionName:Z(n,I,R)}))))}var I=function(e){var t=e.visible,n=e.getContainer,i=e.forceRender,l=e.destroyOnClose,s=void 0!==l&&l,d=e.afterClose,u=o.useState(t),f=(0,a.Z)(u,2),m=f[0],v=f[1];return o.useEffect((function(){t&&v(!0)}),[t]),i||!s||m?o.createElement(c.Z,{open:t||i||m,autoDestroy:!1,getContainer:n,autoLock:t||m},o.createElement(w,(0,r.Z)({},e,{destroyOnClose:s,afterClose:function(){null===d||void 0===d||d(),v(!1)}}))):null};I.displayName="Dialog";const R=I}}]);
//# sourceMappingURL=51.fae70264.chunk.js.map