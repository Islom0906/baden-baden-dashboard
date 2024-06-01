"use strict";(self.webpackChunkbaden_baden=self.webpackChunkbaden_baden||[]).push([[605],{53016:(e,t,i)=>{i.d(t,{Z:()=>l});i(72791);var a=i(2409),s=i(49389),r=i(80184);const l=e=>{let{label:t,name:i,required:l,required_text:n,warning:d}=e;return(0,r.jsx)(a.Z.Item,{label:d?(0,r.jsxs)("div",{children:[(0,r.jsx)("p",{children:t}),(0,r.jsx)("br",{}),(0,r.jsx)("p",{children:d})]}):(0,r.jsx)("div",{children:t}),name:i,rules:[{required:l,message:n}],children:(0,r.jsx)(s.default,{})})}},59605:(e,t,i)=>{i.r(t),i.d(t,{default:()=>j});var a=i(72791),s=i(2409),r=i(50419),l=i(66106),n=i(30914),d=i(93086),o=i(87309),u=i(91933),c=i(27169),m=i(72018),p=i(57689),v=i(16030),x=i(68117),g=i(77221),h=i(53016),b=i(80184);const f={image:[],title_uz:"",title_ru:"",title_en:""},j=()=>{const[e]=s.Z.useForm(),t=(0,p.s0)(),{editId:i}=(0,v.v9)((e=>e.editData)),j=(0,v.I0)(),[Z,_]=(0,a.useState)([]),{mutate:w,data:F,isLoading:S,isSuccess:y}=(0,u.useMutation)((e=>{let{url:t,data:i}=e;return c.Z.postData(t,i)}),{onSuccess:()=>{r.ZP.success("Success")},onError:e=>{for(let t in e.response.data)r.ZP.error("".concat(t,": ").concat(e.response.data[t][0]))}}),{isLoading:q,data:I,refetch:E,isSuccess:L}=(0,u.useQuery)(["edit-service",i],(()=>c.Z.getDataByID("/about/index-service-section",i)),{enabled:!1}),{mutate:V,isLoading:D,data:P,isSuccess:k}=(0,u.useMutation)((e=>{let{url:t,data:i,id:a}=e;return c.Z.editData(t,i,a)}),{onSuccess:()=>{r.ZP.success("Success")},onError:e=>{for(let t in e.response.data)r.ZP.error("".concat(t,": ").concat(e.response.data[t][0]))}});(0,a.useEffect)((()=>{k&&j({type:g.Pb,payload:""}),(y||k)&&t("/service")}),[F,P]),(0,a.useEffect)((()=>{""!==i&&E()}),[i]),(0,a.useEffect)((()=>{""===i&&e.setFieldsValue(f)}),[]),(0,a.useEffect)((()=>{const t=[{uid:null===I||void 0===I?void 0:I.id,name:null===I||void 0===I?void 0:I.id,status:"done",url:null===I||void 0===I?void 0:I.image}];if(L){const i={title_uz:null===I||void 0===I?void 0:I.title_uz,title_ru:null===I||void 0===I?void 0:I.title_ru,title_en:null===I||void 0===I?void 0:I.title_en,image:t};_(t),e.setFieldsValue(i)}}),[I]);(0,a.useEffect)((()=>{const t=JSON.parse(localStorage.getItem("myFormValues"));t&&(t.images=[],e.setFieldsValue(t));const i=()=>{localStorage.setItem("myFormValues",JSON.stringify(e.getFieldsValue()))};return window.addEventListener("beforeunload",i),()=>{localStorage.removeItem("editDataId"),localStorage.removeItem("myFormValues"),window.removeEventListener("beforeunload",i)}}),[]);return(0,b.jsx)("div",{children:S||q||D?(0,b.jsx)(m.QP,{}):(0,b.jsxs)(s.Z,{form:e,name:"basic",labelCol:{span:24},wrapperCol:{span:24},style:{maxWidth:"100%"},initialValues:f,onFinish:e=>{var t;const a=new FormData;var s;(a.append("title_uz",e.title_uz),a.append("title_ru",e.title_ru),a.append("title_en",e.title_en),null!==(t=Z[0])&&void 0!==t&&t.originFileObj)&&a.append("image",null===(s=Z[0])||void 0===s?void 0:s.originFileObj);L?V({url:"/about/index-service-section",data:a,id:i}):w({url:"/about/index-service-section/",data:a})},onFinishFailed:e=>{console.log("Failed:",e)},autoComplete:"off",children:[(0,b.jsxs)(l.Z,{gutter:20,children:[(0,b.jsx)(n.Z,{span:24,children:(0,b.jsx)(h.Z,{required:!0,required_text:"\u041d\u0435\u043e\u0431\u0445\u043e\u0434\u0438\u043c\u043e \u0432\u0432\u0435\u0441\u0442\u0438 \u0437\u0430\u0433\u043e\u043b\u043e\u0432\u043e\u043a",label:"\u0417\u0430\u0433\u043e\u043b\u043e\u0432\u043e\u043a Ru",name:"title_ru"})}),(0,b.jsx)(n.Z,{span:24,children:(0,b.jsx)(h.Z,{required:!0,required_text:"Sarlavha kiritish kerak",label:"Sarlavha Uz",name:"title_uz"})}),(0,b.jsx)(n.Z,{span:24,children:(0,b.jsx)(h.Z,{required:!0,required_text:"A title is required",label:"Title En",name:"title_en"})})]}),(0,b.jsx)(l.Z,{gutter:20,children:(0,b.jsx)(n.Z,{span:12,children:(0,b.jsx)(s.Z.Item,{label:"\u0418\u0437\u043e\u0431\u0440\u0430\u0436\u0435\u043d\u0438\u0435",name:"image",rules:[{required:!0,message:"\u0422\u0440\u0435\u0431\u0443\u0435\u0442\u0441\u044f \u0438\u0437\u043e\u0431\u0440\u0430\u0436\u0435\u043d\u0438\u0435"}],children:(0,b.jsx)(x.Z,{children:(0,b.jsx)(d.Z,{maxCount:1,fileList:Z,listType:"picture-card",onChange:t=>{let{fileList:i}=t;_(i),e.setFieldsValue({image:i})},onPreview:async e=>{let t=e.url;t||(t=await new Promise((t=>{const i=new FileReader;i.readAsDataURL(e.originFileObj),i.onload=()=>t(i.result)})));const i=new Image;i.src=t;const a=window.open(t);null===a||void 0===a||a.document.write(i.outerHTML)},beforeUpload:()=>!1,children:Z.length>0?"":"Upload"})})})})}),(0,b.jsx)(o.Z,{type:"primary",htmlType:"submit",style:{width:"100%",marginTop:"20px"},children:L?"\u0418\u0437\u043c\u0435\u043d\u0438\u0442\u044c":"\u0421\u043e\u0437\u0434\u0430\u0442\u044c"})]})})}}}]);
//# sourceMappingURL=605.b40ff4ba.chunk.js.map