"use strict";(self.webpackChunkbaden_baden=self.webpackChunkbaden_baden||[]).push([[719],{64719:(e,t,n)=>{n.r(t),n.d(t,{default:()=>w});var i=n(72791),l=n(50419),o=n(83099),a=n(66106),r=n(30914),s=n(49389),c=n(87309),d=n(37083),u=n(79286),p=n(57689),m=n(27169),v=n(91933),f=n(77221),x=n(16030),C=n(50390),h=n(34571),y=n(92883),Z=n(31752),g=n(82622),j=n(80184);const b=e=>{let{data:t,deleteHandle:n}=e;const i=(0,x.I0)(),l=(0,p.s0)(),a=[{title:"Title Ru",dataIndex:"title_ru",id:"title_ru",render:e=>(0,j.jsx)("p",{children:e})},{title:"Title Uz",dataIndex:"title_uz",id:"title_uz",render:e=>(0,j.jsx)("p",{children:e})},{title:"Title En",dataIndex:"title_en",id:"title_en",render:e=>(0,j.jsx)("p",{children:e})},{title:"Link",dataIndex:"link",id:"link",render:e=>(0,j.jsx)("p",{children:e})},{title:"Image",dataIndex:"image",id:"image",render:e=>(0,j.jsx)(C.Z,{width:50,src:e})},{title:"Action",id:"action",render:(e,t)=>(0,j.jsxs)(o.Z,{size:20,children:[(0,j.jsx)(c.Z,{onClick:()=>{return e=t.id,localStorage.setItem("editDataId",e),i({type:f.Pb,payload:e}),void l("/news/add");var e},type:"primary",icon:(0,j.jsx)(Z.Z,{}),children:"Edit"}),(0,j.jsx)(h.Z,{title:"Are you sure to delete this task?",description:"Delete the task ",onConfirm:()=>(async e=>{n("/about/news",e)})(t.id),children:(0,j.jsx)(c.Z,{type:"danger",icon:(0,j.jsx)(g.Z,{}),children:"Delete"})})]})}];return(0,j.jsx)("div",{children:(0,j.jsx)(y.Z,{columns:a,dataSource:t,rowKey:e=>e.id})})},w=()=>{const e=(0,p.s0)(),t=(0,x.I0)(),{mutate:n,isSuccess:C,isLoading:h}=(0,v.useMutation)((e=>{let{url:t,id:n}=e;return m.Z.deleteData(t,n)})),{data:y,isLoading:Z,refetch:g}=(0,v.useQuery)("news-get",(()=>m.Z.getData("/about/news/")),{onError:e=>{l.ZP.error(e)}}),[w,k]=(0,i.useState)([]),[E,O]=(0,i.useState)(!1);(0,i.useEffect)((()=>{C&&g()}),[C]);return(0,j.jsx)("div",{className:"site-space-compact-wrapper",children:(0,j.jsxs)(o.Z,{direction:"vertical",style:{width:"100%"},children:[(0,j.jsxs)(a.Z,{gutter:20,children:[(0,j.jsx)(r.Z,{span:16,children:(0,j.jsx)(s.default,{onChange:e=>(e=>{var t;O(""!==e);const n=null===y||void 0===y||null===(t=y.results)||void 0===t?void 0:t.filter((t=>t.title_ru.toLowerCase().includes(e.toLowerCase())||t.title_uz.toLowerCase().includes(e.toLowerCase())||t.title_en.toLowerCase().includes(e.toLowerCase())));k(n)})(e.target.value)})}),(0,j.jsx)(r.Z,{span:8,children:(0,j.jsx)(c.Z,{type:"primary",icon:(0,j.jsx)(u.Z,{}),style:{width:"100%"},onClick:()=>{t({type:f.Pb,payload:""}),e("/news/add")},children:"Add"})})]}),(0,j.jsx)(d.Z,{size:"medium",spinning:Z||h,children:(0,j.jsx)(b,{data:E?w:null===y||void 0===y?void 0:y.results,deleteHandle:(e,t)=>{n({url:e,id:t})}})})]})})}},34571:(e,t,n)=>{n.d(t,{Z:()=>b});var i=n(87462),l=n(29439),o=n(10187),a=n(81694),r=n.n(a),s=n(75179),c=n(11354),d=n(72791),u=n(71929),p=n(69228),m=n(61113),v=n(87309),f=n(2571),x=n(41783),C=n(93486),h=n(70454),y=n(57924),Z=function(e){var t=e.prefixCls,n=e.okButtonProps,l=e.cancelButtonProps,o=e.title,a=e.cancelText,r=e.okText,s=e.okType,c=e.icon,p=e.showCancel,m=void 0===p||p,Z=e.close,g=e.onConfirm,j=e.onCancel,b=d.useContext(u.E_).getPrefixCls;return d.createElement(C.Z,{componentName:"Popconfirm",defaultLocale:h.Z.Popconfirm},(function(e){return d.createElement("div",{className:"".concat(t,"-inner-content")},d.createElement("div",{className:"".concat(t,"-message")},c&&d.createElement("span",{className:"".concat(t,"-message-icon")},c),d.createElement("div",{className:"".concat(t,"-message-title")},(0,y.Z)(o))),d.createElement("div",{className:"".concat(t,"-buttons")},m&&d.createElement(v.Z,(0,i.Z)({onClick:j,size:"small"},l),null!==a&&void 0!==a?a:e.cancelText),d.createElement(x.Z,{buttonProps:(0,i.Z)((0,i.Z)({size:"small"},(0,f.n)(s)),n),actionFn:g,close:Z,prefixCls:b("btn"),quitOnNullishReturnValue:!0,emitEvent:!0},null!==r&&void 0!==r?r:e.okText)))}))},g=void 0,j=function(e,t){var n={};for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&t.indexOf(i)<0&&(n[i]=e[i]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var l=0;for(i=Object.getOwnPropertySymbols(e);l<i.length;l++)t.indexOf(i[l])<0&&Object.prototype.propertyIsEnumerable.call(e,i[l])&&(n[i[l]]=e[i[l]])}return n};const b=d.forwardRef((function(e,t){var n=e.prefixCls,a=e.placement,v=void 0===a?"top":a,f=e.trigger,x=void 0===f?"click":f,C=e.okType,h=void 0===C?"primary":C,y=e.icon,b=void 0===y?d.createElement(o.Z,null):y,w=e.children,k=e.overlayClassName,E=e.onOpenChange,O=e.onVisibleChange,_=j(e,["prefixCls","placement","trigger","okType","icon","children","overlayClassName","onOpenChange","onVisibleChange"]),P=d.useContext(u.E_).getPrefixCls,T=(0,s.Z)(!1,{value:void 0!==e.open?e.open:e.visible,defaultValue:void 0!==e.defaultOpen?e.defaultOpen:e.defaultVisible}),I=(0,l.Z)(T,2),N=I[0],L=I[1],z=function(e,t){L(e,!0),null===O||void 0===O||O(e,t),null===E||void 0===E||E(e,t)},S=P("popover",n),D=P("popconfirm",n),V=r()(D,k);return d.createElement(p.Z,(0,i.Z)({},_,{trigger:x,prefixCls:S,placement:v,onOpenChange:function(t){var n=e.disabled;void 0!==n&&n||z(t)},open:N,ref:t,overlayClassName:V,_overlay:d.createElement(Z,(0,i.Z)({okType:h,icon:b},e,{prefixCls:S,close:function(e){z(!1,e)},onConfirm:function(t){var n;return null===(n=e.onConfirm)||void 0===n?void 0:n.call(g,t)},onCancel:function(t){var n;z(!1,t),null===(n=e.onCancel)||void 0===n||n.call(g,t)}}))}),(0,m.Tm)(w,{onKeyDown:function(e){var t,n;d.isValidElement(w)&&(null===(n=null===w||void 0===w?void 0:(t=w.props).onKeyDown)||void 0===n||n.call(t,e)),function(e){e.keyCode===c.Z.ESC&&N&&z(!1,e)}(e)}}))}))}}]);
//# sourceMappingURL=719.24abacc4.chunk.js.map