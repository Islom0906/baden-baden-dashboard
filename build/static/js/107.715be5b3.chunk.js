"use strict";(self.webpackChunkbaden_baden=self.webpackChunkbaden_baden||[]).push([[107],{98107:(e,n,t)=>{t.r(n),t.d(n,{default:()=>E});var l=t(72791),o=t(83099),a=t(47528),i=t(50390),r=t(87309),c=t(34571),s=t(92883),d=t(31752),u=t(82622),p=t(16030),m=t(77221),v=t(57689),f=t(80184);const y=e=>{let{data:n,deleteHandle:t}=e;const l=(0,p.I0)(),y=(0,v.s0)(),C=[{title:"Title Landmark Ru",dataIndex:"title_ru",id:"title_ru",render:e=>(0,f.jsx)("p",{children:e})},{title:"Intermediate distance",dataIndex:"landmarks",id:"landmarks",render:e=>(0,f.jsx)(o.Z,{direction:"vertical",children:null===e||void 0===e?void 0:e.map((e=>(0,f.jsxs)(a.Z,{children:[null===e||void 0===e?void 0:e.title_ru," : ",null===e||void 0===e?void 0:e.distance,null===e||void 0===e?void 0:e.distance_type]},null===e||void 0===e?void 0:e.id)))})},{title:"Image",dataIndex:"image",id:"image",render:e=>(0,f.jsx)(i.Z,{width:50,src:e})},{title:"Action",id:"action",render:(e,n)=>(0,f.jsxs)(o.Z,{size:20,children:[(0,f.jsx)(r.Z,{onClick:()=>{return e=n.id,localStorage.setItem("editDataId",e),l({type:m.Pb,payload:e}),void y("/landmark/add");var e},type:"primary",icon:(0,f.jsx)(d.Z,{}),children:"Edit"}),(0,f.jsx)(c.Z,{title:"Are you sure to delete this task?",description:"Delete the task ",onConfirm:()=>(async e=>{t("/about/landmarkcategories",e)})(n.id),children:(0,f.jsx)(r.Z,{type:"danger",icon:(0,f.jsx)(u.Z,{}),children:"Delete"})})]})}];return(0,f.jsx)("div",{children:(0,f.jsx)(s.Z,{columns:C,dataSource:n,rowKey:e=>e.id})})};var C=t(50419),x=t(66106),g=t(30914),h=t(49389),b=t(37083),Z=t(79286),k=t(27169),j=t(91933);const E=()=>{const e=(0,v.s0)(),n=(0,p.I0)(),{mutate:t,isSuccess:a,isLoading:i}=(0,j.useMutation)((e=>{let{url:n,id:t}=e;return k.Z.deleteData(n,t)})),{data:c,isLoading:s,refetch:d}=(0,j.useQuery)("landmark-get",(()=>k.Z.getData("/about/landmarkcategories/")),{onError:e=>{C.ZP.error(e)}}),[u,E]=(0,l.useState)([]),[O,w]=(0,l.useState)(!1);(0,l.useEffect)((()=>{a&&d()}),[a]);return(0,f.jsx)("div",{className:"site-space-compact-wrapper",children:(0,f.jsxs)(o.Z,{direction:"vertical",style:{width:"100%"},children:[(0,f.jsxs)(x.Z,{gutter:20,children:[(0,f.jsx)(g.Z,{span:16,children:(0,f.jsx)(h.default,{onChange:e=>(e=>{w(""!==e);const n=null===c||void 0===c?void 0:c.filter((n=>n.title_ru.toLowerCase().includes(e.toLowerCase())||n.title_uz.toLowerCase().includes(e.toLowerCase())));E(n)})(e.target.value)})}),(0,f.jsx)(g.Z,{span:8,children:(0,f.jsx)(r.Z,{type:"primary",icon:(0,f.jsx)(Z.Z,{}),style:{width:"100%"},onClick:()=>{n({type:m.Pb,payload:""}),e("/landmark/add")},children:"Add"})})]}),(0,f.jsx)(b.Z,{size:"medium",spinning:s||i,children:(0,f.jsx)(y,{data:O?u:c,deleteHandle:(e,n)=>{t({url:e,id:n})}})})]})})}},34571:(e,n,t)=>{t.d(n,{Z:()=>k});var l=t(87462),o=t(29439),a=t(10187),i=t(81694),r=t.n(i),c=t(75179),s=t(11354),d=t(72791),u=t(71929),p=t(69228),m=t(61113),v=t(87309),f=t(2571),y=t(41783),C=t(93486),x=t(70454),g=t(57924),h=function(e){var n=e.prefixCls,t=e.okButtonProps,o=e.cancelButtonProps,a=e.title,i=e.cancelText,r=e.okText,c=e.okType,s=e.icon,p=e.showCancel,m=void 0===p||p,h=e.close,b=e.onConfirm,Z=e.onCancel,k=d.useContext(u.E_).getPrefixCls;return d.createElement(C.Z,{componentName:"Popconfirm",defaultLocale:x.Z.Popconfirm},(function(e){return d.createElement("div",{className:"".concat(n,"-inner-content")},d.createElement("div",{className:"".concat(n,"-message")},s&&d.createElement("span",{className:"".concat(n,"-message-icon")},s),d.createElement("div",{className:"".concat(n,"-message-title")},(0,g.Z)(a))),d.createElement("div",{className:"".concat(n,"-buttons")},m&&d.createElement(v.Z,(0,l.Z)({onClick:Z,size:"small"},o),null!==i&&void 0!==i?i:e.cancelText),d.createElement(y.Z,{buttonProps:(0,l.Z)((0,l.Z)({size:"small"},(0,f.n)(c)),t),actionFn:b,close:h,prefixCls:k("btn"),quitOnNullishReturnValue:!0,emitEvent:!0},null!==r&&void 0!==r?r:e.okText)))}))},b=void 0,Z=function(e,n){var t={};for(var l in e)Object.prototype.hasOwnProperty.call(e,l)&&n.indexOf(l)<0&&(t[l]=e[l]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var o=0;for(l=Object.getOwnPropertySymbols(e);o<l.length;o++)n.indexOf(l[o])<0&&Object.prototype.propertyIsEnumerable.call(e,l[o])&&(t[l[o]]=e[l[o]])}return t};const k=d.forwardRef((function(e,n){var t=e.prefixCls,i=e.placement,v=void 0===i?"top":i,f=e.trigger,y=void 0===f?"click":f,C=e.okType,x=void 0===C?"primary":C,g=e.icon,k=void 0===g?d.createElement(a.Z,null):g,j=e.children,E=e.overlayClassName,O=e.onOpenChange,w=e.onVisibleChange,P=Z(e,["prefixCls","placement","trigger","okType","icon","children","overlayClassName","onOpenChange","onVisibleChange"]),N=d.useContext(u.E_).getPrefixCls,I=(0,c.Z)(!1,{value:void 0!==e.open?e.open:e.visible,defaultValue:void 0!==e.defaultOpen?e.defaultOpen:e.defaultVisible}),S=(0,o.Z)(I,2),_=S[0],T=S[1],L=function(e,n){T(e,!0),null===w||void 0===w||w(e,n),null===O||void 0===O||O(e,n)},D=N("popover",t),R=N("popconfirm",t),V=r()(R,E);return d.createElement(p.Z,(0,l.Z)({},P,{trigger:y,prefixCls:D,placement:v,onOpenChange:function(n){var t=e.disabled;void 0!==t&&t||L(n)},open:_,ref:n,overlayClassName:V,_overlay:d.createElement(h,(0,l.Z)({okType:x,icon:k},e,{prefixCls:D,close:function(e){L(!1,e)},onConfirm:function(n){var t;return null===(t=e.onConfirm)||void 0===t?void 0:t.call(b,n)},onCancel:function(n){var t;L(!1,n),null===(t=e.onCancel)||void 0===t||t.call(b,n)}}))}),(0,m.Tm)(j,{onKeyDown:function(e){var n,t;d.isValidElement(j)&&(null===(t=null===j||void 0===j?void 0:(n=j.props).onKeyDown)||void 0===t||t.call(n,e)),function(e){e.keyCode===s.Z.ESC&&_&&L(!1,e)}(e)}}))}))},47528:(e,n,t)=>{t.d(n,{Z:()=>b});var l=t(4942),o=t(87462),a=t(29439),i=t(60732),r=t(81694),c=t.n(r),s=t(41818),d=t(72791),u=t(71929),p=t(54466),m=t(12833),v=function(e,n){var t={};for(var l in e)Object.prototype.hasOwnProperty.call(e,l)&&n.indexOf(l)<0&&(t[l]=e[l]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var o=0;for(l=Object.getOwnPropertySymbols(e);o<l.length;o++)n.indexOf(l[o])<0&&Object.prototype.propertyIsEnumerable.call(e,l[o])&&(t[l[o]]=e[l[o]])}return t};const f=function(e){var n=e.prefixCls,t=e.className,a=e.checked,i=e.onChange,r=e.onClick,s=v(e,["prefixCls","className","checked","onChange","onClick"]),p=(0,d.useContext(u.E_).getPrefixCls)("tag",n),m=c()(p,(0,l.Z)((0,l.Z)({},"".concat(p,"-checkable"),!0),"".concat(p,"-checkable-checked"),a),t);return d.createElement("span",(0,o.Z)({},s,{className:m,onClick:function(e){null===i||void 0===i||i(!a),null===r||void 0===r||r(e)}}))};var y=function(e,n){var t={};for(var l in e)Object.prototype.hasOwnProperty.call(e,l)&&n.indexOf(l)<0&&(t[l]=e[l]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var o=0;for(l=Object.getOwnPropertySymbols(e);o<l.length;o++)n.indexOf(l[o])<0&&Object.prototype.propertyIsEnumerable.call(e,l[o])&&(t[l[o]]=e[l[o]])}return t},C=new RegExp("^(".concat(p.Y.join("|"),")(-inverse)?$")),x=new RegExp("^(".concat(p.E.join("|"),")$")),g=function(e,n){var t=e.prefixCls,r=e.className,p=e.style,v=e.children,f=e.icon,g=e.color,h=e.onClose,b=e.closeIcon,Z=e.closable,k=void 0!==Z&&Z,j=y(e,["prefixCls","className","style","children","icon","color","onClose","closeIcon","closable"]),E=d.useContext(u.E_),O=E.getPrefixCls,w=E.direction,P=d.useState(!0),N=(0,a.Z)(P,2),I=N[0],S=N[1];d.useEffect((function(){"visible"in j&&S(j.visible)}),[j.visible]);var _=function(){return!!g&&(C.test(g)||x.test(g))},T=(0,o.Z)({backgroundColor:g&&!_()?g:void 0},p),L=_(),D=O("tag",t),R=c()(D,(0,l.Z)((0,l.Z)((0,l.Z)((0,l.Z)({},"".concat(D,"-").concat(g),L),"".concat(D,"-has-color"),g&&!L),"".concat(D,"-hidden"),!I),"".concat(D,"-rtl"),"rtl"===w),r),V=function(e){e.stopPropagation(),null===h||void 0===h||h(e),e.defaultPrevented||"visible"in j||S(!1)},z="onClick"in j||v&&"a"===v.type,A=(0,s.Z)(j,["visible"]),K=f||null,B=K?d.createElement(d.Fragment,null,K,d.createElement("span",null,v)):v,F=d.createElement("span",(0,o.Z)({},A,{ref:n,className:R,style:T}),B,k?b?d.createElement("span",{className:"".concat(D,"-close-icon"),onClick:V},b):d.createElement(i.Z,{className:"".concat(D,"-close-icon"),onClick:V}):null);return z?d.createElement(m.Z,null,F):F},h=d.forwardRef(g);h.CheckableTag=f;const b=h}}]);
//# sourceMappingURL=107.715be5b3.chunk.js.map