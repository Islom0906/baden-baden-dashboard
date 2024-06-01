"use strict";(self.webpackChunkbaden_baden=self.webpackChunkbaden_baden||[]).push([[26],{15026:(e,n,t)=>{t.r(n),t.d(n,{default:()=>O});var l=t(72791),o=t(50419),i=t(83099),a=t(66106),r=t(30914),c=t(49389),s=t(87309),d=t(37083),u=t(79286),p=t(57689),f=t(27169),m=t(91933),v=t(77221),x=t(16030),C=t(47528),y=t(50390),b=t(34571),h=t(92883),g=t(31752),Z=t(82622),j=t(80184);const E=e=>{let{data:n,deleteHandle:t}=e;const l=(0,x.I0)(),o=(0,p.s0)(),a=[{title:"Title Ru",dataIndex:"title_ru",id:"title_ru",render:e=>(0,j.jsx)("p",{children:e})},{title:"Title Uz",dataIndex:"title_uz",id:"title_uz",render:e=>(0,j.jsx)("p",{children:e})},{title:"Title En",dataIndex:"title_en",id:"title_en",render:e=>(0,j.jsx)("p",{children:e})},{title:"Home page",dataIndex:"is_index",id:"is_index",render:e=>(0,j.jsx)(C.Z,{color:e?"#3b5999":"#cd201f",children:e?"\u0414\u0430":"\u041d\u0435\u0442"})},{title:"Image",dataIndex:"inner_image",id:"inner_image",render:e=>(0,j.jsx)(y.Z,{width:50,src:null===e||void 0===e?void 0:e.image})},{title:"Action",id:"action",render:(e,n)=>(0,j.jsxs)(i.Z,{size:20,children:[(0,j.jsx)(s.Z,{onClick:()=>{return e=n.id,localStorage.setItem("editDataId",e),l({type:v.Pb,payload:e}),void o("/facilities/add");var e},type:"primary",icon:(0,j.jsx)(g.Z,{}),children:"Edit"}),(0,j.jsx)(b.Z,{title:"Are you sure to delete this task?",description:"Delete the task ",onConfirm:()=>(async e=>{t("/about/about-facilities",e)})(n.id),children:(0,j.jsx)(s.Z,{type:"danger",icon:(0,j.jsx)(Z.Z,{}),children:"Delete"})})]})}];return(0,j.jsx)("div",{children:(0,j.jsx)(h.Z,{columns:a,dataSource:n,rowKey:e=>e.id})})},O=()=>{const e=(0,p.s0)(),n=(0,x.I0)(),{mutate:t,isSuccess:C,isLoading:y}=(0,m.useMutation)((e=>{let{url:n,id:t}=e;return f.Z.deleteData(n,t)})),{data:b,isLoading:h,refetch:g}=(0,m.useQuery)("facilities-get",(()=>f.Z.getData("/about/all-about-facilities/")),{onError:e=>{o.ZP.error(e)}}),[Z,O]=(0,l.useState)([]),[k,w]=(0,l.useState)(!1);(0,l.useEffect)((()=>{C&&g()}),[C]);return(0,j.jsx)("div",{className:"site-space-compact-wrapper",children:(0,j.jsxs)(i.Z,{direction:"vertical",style:{width:"100%"},children:[(0,j.jsxs)(a.Z,{gutter:20,children:[(0,j.jsx)(r.Z,{span:16,children:(0,j.jsx)(c.default,{onChange:e=>(e=>{w(""!==e);const n=null===b||void 0===b?void 0:b.filter((n=>n.title_ru.toLowerCase().includes(e.toLowerCase())||n.title_uz.toLowerCase().includes(e.toLowerCase())||n.title_en.toLowerCase().includes(e.toLowerCase())));O(n)})(e.target.value)})}),(0,j.jsx)(r.Z,{span:8,children:(0,j.jsx)(s.Z,{type:"primary",icon:(0,j.jsx)(u.Z,{}),style:{width:"100%"},onClick:()=>{n({type:v.Pb,payload:""}),e("/facilities/add")},children:"Add"})})]}),(0,j.jsx)(d.Z,{size:"medium",spinning:h||y,children:(0,j.jsx)(E,{data:k?Z:b,deleteHandle:(e,n)=>{t({url:e,id:n})}})})]})})}},34571:(e,n,t)=>{t.d(n,{Z:()=>j});var l=t(87462),o=t(29439),i=t(10187),a=t(81694),r=t.n(a),c=t(75179),s=t(11354),d=t(72791),u=t(71929),p=t(69228),f=t(61113),m=t(87309),v=t(2571),x=t(41783),C=t(93486),y=t(70454),b=t(57924),h=function(e){var n=e.prefixCls,t=e.okButtonProps,o=e.cancelButtonProps,i=e.title,a=e.cancelText,r=e.okText,c=e.okType,s=e.icon,p=e.showCancel,f=void 0===p||p,h=e.close,g=e.onConfirm,Z=e.onCancel,j=d.useContext(u.E_).getPrefixCls;return d.createElement(C.Z,{componentName:"Popconfirm",defaultLocale:y.Z.Popconfirm},(function(e){return d.createElement("div",{className:"".concat(n,"-inner-content")},d.createElement("div",{className:"".concat(n,"-message")},s&&d.createElement("span",{className:"".concat(n,"-message-icon")},s),d.createElement("div",{className:"".concat(n,"-message-title")},(0,b.Z)(i))),d.createElement("div",{className:"".concat(n,"-buttons")},f&&d.createElement(m.Z,(0,l.Z)({onClick:Z,size:"small"},o),null!==a&&void 0!==a?a:e.cancelText),d.createElement(x.Z,{buttonProps:(0,l.Z)((0,l.Z)({size:"small"},(0,v.n)(c)),t),actionFn:g,close:h,prefixCls:j("btn"),quitOnNullishReturnValue:!0,emitEvent:!0},null!==r&&void 0!==r?r:e.okText)))}))},g=void 0,Z=function(e,n){var t={};for(var l in e)Object.prototype.hasOwnProperty.call(e,l)&&n.indexOf(l)<0&&(t[l]=e[l]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var o=0;for(l=Object.getOwnPropertySymbols(e);o<l.length;o++)n.indexOf(l[o])<0&&Object.prototype.propertyIsEnumerable.call(e,l[o])&&(t[l[o]]=e[l[o]])}return t};const j=d.forwardRef((function(e,n){var t=e.prefixCls,a=e.placement,m=void 0===a?"top":a,v=e.trigger,x=void 0===v?"click":v,C=e.okType,y=void 0===C?"primary":C,b=e.icon,j=void 0===b?d.createElement(i.Z,null):b,E=e.children,O=e.overlayClassName,k=e.onOpenChange,w=e.onVisibleChange,P=Z(e,["prefixCls","placement","trigger","okType","icon","children","overlayClassName","onOpenChange","onVisibleChange"]),_=d.useContext(u.E_).getPrefixCls,N=(0,c.Z)(!1,{value:void 0!==e.open?e.open:e.visible,defaultValue:void 0!==e.defaultOpen?e.defaultOpen:e.defaultVisible}),I=(0,o.Z)(N,2),S=I[0],T=I[1],L=function(e,n){T(e,!0),null===w||void 0===w||w(e,n),null===k||void 0===k||k(e,n)},z=_("popover",t),D=_("popconfirm",t),R=r()(D,O);return d.createElement(p.Z,(0,l.Z)({},P,{trigger:x,prefixCls:z,placement:m,onOpenChange:function(n){var t=e.disabled;void 0!==t&&t||L(n)},open:S,ref:n,overlayClassName:R,_overlay:d.createElement(h,(0,l.Z)({okType:y,icon:j},e,{prefixCls:z,close:function(e){L(!1,e)},onConfirm:function(n){var t;return null===(t=e.onConfirm)||void 0===t?void 0:t.call(g,n)},onCancel:function(n){var t;L(!1,n),null===(t=e.onCancel)||void 0===t||t.call(g,n)}}))}),(0,f.Tm)(E,{onKeyDown:function(e){var n,t;d.isValidElement(E)&&(null===(t=null===E||void 0===E?void 0:(n=E.props).onKeyDown)||void 0===t||t.call(n,e)),function(e){e.keyCode===s.Z.ESC&&S&&L(!1,e)}(e)}}))}))},47528:(e,n,t)=>{t.d(n,{Z:()=>g});var l=t(4942),o=t(87462),i=t(29439),a=t(60732),r=t(81694),c=t.n(r),s=t(41818),d=t(72791),u=t(71929),p=t(54466),f=t(12833),m=function(e,n){var t={};for(var l in e)Object.prototype.hasOwnProperty.call(e,l)&&n.indexOf(l)<0&&(t[l]=e[l]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var o=0;for(l=Object.getOwnPropertySymbols(e);o<l.length;o++)n.indexOf(l[o])<0&&Object.prototype.propertyIsEnumerable.call(e,l[o])&&(t[l[o]]=e[l[o]])}return t};const v=function(e){var n=e.prefixCls,t=e.className,i=e.checked,a=e.onChange,r=e.onClick,s=m(e,["prefixCls","className","checked","onChange","onClick"]),p=(0,d.useContext(u.E_).getPrefixCls)("tag",n),f=c()(p,(0,l.Z)((0,l.Z)({},"".concat(p,"-checkable"),!0),"".concat(p,"-checkable-checked"),i),t);return d.createElement("span",(0,o.Z)({},s,{className:f,onClick:function(e){null===a||void 0===a||a(!i),null===r||void 0===r||r(e)}}))};var x=function(e,n){var t={};for(var l in e)Object.prototype.hasOwnProperty.call(e,l)&&n.indexOf(l)<0&&(t[l]=e[l]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var o=0;for(l=Object.getOwnPropertySymbols(e);o<l.length;o++)n.indexOf(l[o])<0&&Object.prototype.propertyIsEnumerable.call(e,l[o])&&(t[l[o]]=e[l[o]])}return t},C=new RegExp("^(".concat(p.Y.join("|"),")(-inverse)?$")),y=new RegExp("^(".concat(p.E.join("|"),")$")),b=function(e,n){var t=e.prefixCls,r=e.className,p=e.style,m=e.children,v=e.icon,b=e.color,h=e.onClose,g=e.closeIcon,Z=e.closable,j=void 0!==Z&&Z,E=x(e,["prefixCls","className","style","children","icon","color","onClose","closeIcon","closable"]),O=d.useContext(u.E_),k=O.getPrefixCls,w=O.direction,P=d.useState(!0),_=(0,i.Z)(P,2),N=_[0],I=_[1];d.useEffect((function(){"visible"in E&&I(E.visible)}),[E.visible]);var S=function(){return!!b&&(C.test(b)||y.test(b))},T=(0,o.Z)({backgroundColor:b&&!S()?b:void 0},p),L=S(),z=k("tag",t),D=c()(z,(0,l.Z)((0,l.Z)((0,l.Z)((0,l.Z)({},"".concat(z,"-").concat(b),L),"".concat(z,"-has-color"),b&&!L),"".concat(z,"-hidden"),!N),"".concat(z,"-rtl"),"rtl"===w),r),R=function(e){e.stopPropagation(),null===h||void 0===h||h(e),e.defaultPrevented||"visible"in E||I(!1)},V="onClick"in E||m&&"a"===m.type,A=(0,s.Z)(E,["visible"]),H=v||null,K=H?d.createElement(d.Fragment,null,H,d.createElement("span",null,m)):m,B=d.createElement("span",(0,o.Z)({},A,{ref:n,className:D,style:T}),K,j?g?d.createElement("span",{className:"".concat(z,"-close-icon"),onClick:R},g):d.createElement(a.Z,{className:"".concat(z,"-close-icon"),onClick:R}):null);return V?d.createElement(f.Z,null,B):B},h=d.forwardRef(b);h.CheckableTag=v;const g=h}}]);
//# sourceMappingURL=26.d64aab35.chunk.js.map