"use strict";(self.webpackChunkbaden_baden=self.webpackChunkbaden_baden||[]).push([[692],{51692:(e,t,i)=>{i.r(t),i.d(t,{default:()=>v});var d=i(50419),r=i(83099),a=i(66106),n=i(30914),s=i(87309),l=i(37083),o=i(79286),c=i(57689),u=i(27169),x=i(91933),p=i(77221),b=i(16030),h=i(92883),j=i(31752),y=i(80184);const Z=e=>{let{data:t}=e;const i=(0,b.I0)(),d=(0,c.s0)(),a=[{title:"Title Ru",dataIndex:"title_ru",id:"title_ru",render:e=>(0,y.jsx)("p",{children:e})},{title:"Sub Title Ru",dataIndex:"sub_title_ru",id:"sub_title_ru",render:e=>(0,y.jsx)("p",{children:e})},{title:"Action",id:"action",render:(e,t)=>(0,y.jsx)(r.Z,{size:20,children:(0,y.jsx)(s.Z,{onClick:()=>{return e=t.id,localStorage.setItem("editDataId",e),i({type:p.Pb,payload:e}),void d("/about-index/add");var e},type:"primary",icon:(0,y.jsx)(j.Z,{}),children:"Edit"})})}];return(0,y.jsx)("div",{children:t[0]&&(0,y.jsx)(h.Z,{columns:a,dataSource:t,rowKey:e=>null===e||void 0===e?void 0:e.id})})},v=()=>{const e=(0,c.s0)(),t=(0,b.I0)(),{data:i,isLoading:h}=(0,x.useQuery)("about-index-get",(()=>u.Z.getData("/about/index-about-section/")),{onError:e=>{d.ZP.error(e)}});return(0,y.jsx)("div",{className:"site-space-compact-wrapper",children:(0,y.jsxs)(r.Z,{direction:"vertical",style:{width:"100%"},children:[(0,y.jsx)(a.Z,{gutter:20,children:(0,y.jsx)(n.Z,{span:8,offset:16,children:(0,y.jsx)(s.Z,{disabled:null===i||void 0===i?void 0:i.title_ru,type:"primary",icon:(0,y.jsx)(o.Z,{}),style:{width:"100%"},onClick:()=>{t({type:p.Pb,payload:""}),e("/about-index/add")},children:"Add"})})}),(0,y.jsx)(l.Z,{size:"medium",spinning:h,children:(0,y.jsx)(Z,{data:[i]})})]})})}}}]);
//# sourceMappingURL=692.dcf8ae33.chunk.js.map