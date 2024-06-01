"use strict";(self.webpackChunkbaden_baden=self.webpackChunkbaden_baden||[]).push([[39],{53016:(e,t,s)=>{s.d(t,{Z:()=>r});s(72791);var i=s(2409),l=s(49389),a=s(80184);const r=e=>{let{label:t,name:s,required:r,required_text:u,warning:n}=e;return(0,a.jsx)(i.Z.Item,{label:n?(0,a.jsxs)("div",{children:[(0,a.jsx)("p",{children:t}),(0,a.jsx)("br",{}),(0,a.jsx)("p",{children:n})]}):(0,a.jsx)("div",{children:t}),name:s,rules:[{required:r,message:u}],children:(0,a.jsx)(l.default,{})})}},83386:(e,t,s)=>{s.d(t,{Z:()=>r});s(72791);var i=s(2409),l=s(66920),a=s(80184);const r=e=>{let{label:t,name:s,required:r,required_text:u}=e;return(0,a.jsx)(i.Z.Item,{label:t,name:s,rules:[{required:r,message:u}],children:(0,a.jsx)(l.Z,{rows:4})})}},2039:(e,t,s)=>{s.r(t),s.d(t,{default:()=>f});var i=s(72791),l=s(2409),a=s(50419),r=s(66106),u=s(30914),n=s(93086),d=s(87309),o=s(91933),c=s(27169),m=s(72018),_=s(57689),g=s(16030),h=s(68117),b=s(77221),p=s(53016),v=s(83386),x=s(80184);const Z={image_ids:[],title_uz:"",title_ru:"",title_en:"",sub_title_uz:"",sub_title_ru:"",sub_title_en:""},f=()=>{const[e]=l.Z.useForm(),t=(0,_.s0)(),{editId:s}=(0,g.v9)((e=>e.editData)),f=(0,g.I0)(),[j,S]=(0,i.useState)([]),{mutate:q,data:y,isLoading:w,isSuccess:F}=(0,o.useMutation)((e=>{let{url:t,formData:s}=e;return c.Z.postData(t,s)}),{onSuccess:()=>{a.ZP.success("Success")},onError:e=>{for(let t in e.response.data)a.ZP.error("".concat(t,": ").concat(e.response.data[t][0]))}}),{mutate:z,data:E,isLoading:I,isSuccess:P}=(0,o.useMutation)((e=>{let{url:t,data:s}=e;return c.Z.postData(t,s)}),{onSuccess:()=>{a.ZP.success("Success")},onError:e=>{for(let t in e.response.data)a.ZP.error("".concat(t,": ").concat(e.response.data[t][0]))}}),{isLoading:D,data:k,refetch:L,isSuccess:V}=(0,o.useQuery)(["edit-gallery",s],(()=>c.Z.getDataByID("/gallery",s)),{enabled:!1}),{mutate:C,isLoading:T,data:M,isSuccess:R}=(0,o.useMutation)((e=>{let{url:t,data:s,id:i}=e;return c.Z.editData(t,s,i)}),{onSuccess:()=>{a.ZP.success("Success")},onError:e=>{for(let t in e.response.data)a.ZP.error("".concat(t,": ").concat(e.response.data[t][0]))}}),{mutate:U}=(0,o.useMutation)((e=>{let{url:t,ids:s}=e;return c.Z.deleteImages(t,s)}),{onSuccess:()=>a.ZP.success("Success"),onError:e=>a.ZP.error(e.message)});(0,i.useEffect)((()=>{R&&f({type:b.Pb,payload:""}),(P||R)&&t("/gallery")}),[E,M]),(0,i.useEffect)((()=>{""!==s&&L()}),[s]),(0,i.useEffect)((()=>{""===s&&e.setFieldsValue(Z)}),[]),(0,i.useEffect)((()=>{const t=[];if(void 0!==k&&k.images.map((e=>{const s={uid:e.id,name:e.id,status:"done",url:e.image};t.push(s)})),V){const s={title_uz:null===k||void 0===k?void 0:k.title_uz,title_ru:null===k||void 0===k?void 0:k.title_ru,title_en:null===k||void 0===k?void 0:k.title_en,sub_title_uz:null===k||void 0===k?void 0:k.sub_title_uz,sub_title_ru:null===k||void 0===k?void 0:k.sub_title_ru,sub_title_en:null===k||void 0===k?void 0:k.sub_title_en,image_ids:t};S(t),e.setFieldsValue(s)}}),[k]);(0,i.useEffect)((()=>{const t=JSON.parse(localStorage.getItem("myFormValues"));t&&(t.images=[],e.setFieldsValue(t));const s=()=>{localStorage.setItem("myFormValues",JSON.stringify(e.getFieldsValue()))};return window.addEventListener("beforeunload",s),()=>{localStorage.removeItem("editDataId"),localStorage.removeItem("myFormValues"),window.removeEventListener("beforeunload",s)}}),[]),(0,i.useEffect)((()=>{if(F){var t,s,i;const l=[...j],a={uid:null===y||void 0===y||null===(t=y.images[0])||void 0===t?void 0:t.id,name:null===y||void 0===y||null===(s=y.images[0])||void 0===s?void 0:s.id,status:"done",url:null===y||void 0===y||null===(i=y.images[0])||void 0===i?void 0:i.url};l.push(a),e.setFieldsValue({image_ids:[a]}),S(l)}}),[y]);return(0,x.jsx)("div",{children:I||D||T||w?(0,x.jsx)(m.QP,{}):(0,x.jsxs)(l.Z,{form:e,name:"basic",labelCol:{span:24},wrapperCol:{span:24},style:{maxWidth:"100%"},initialValues:Z,onFinish:e=>{const t=[];j.map((e=>{t.push(e.uid)}));const i={image_ids:t,title_uz:e.title_uz,title_ru:e.title_ru,title_en:e.title_en,sub_title_uz:e.sub_title_uz,sub_title_ru:e.sub_title_ru,sub_title_en:e.sub_title_en};V?C({url:"/gallery",data:i,id:s}):z({url:"/gallery/",data:i})},onFinishFailed:e=>{console.log("Failed:",e)},autoComplete:"off",children:[(0,x.jsxs)(r.Z,{gutter:20,children:[(0,x.jsx)(u.Z,{span:24,children:(0,x.jsx)(p.Z,{required:!0,required_text:"\u041d\u0435\u043e\u0431\u0445\u043e\u0434\u0438\u043c\u043e \u0432\u0432\u0435\u0441\u0442\u0438 \u0437\u0430\u0433\u043e\u043b\u043e\u0432\u043e\u043a",label:"\u0417\u0430\u0433\u043e\u043b\u043e\u0432\u043e\u043a Ru",name:"title_ru"})}),(0,x.jsx)(u.Z,{span:24,children:(0,x.jsx)(p.Z,{required:!0,required_text:"Sarlavha kiritish kerak",label:"Sarlavha Uz",name:"title_uz"})}),(0,x.jsx)(u.Z,{span:24,children:(0,x.jsx)(p.Z,{required:!0,required_text:"A title is required",label:"Title En",name:"title_en"})})]}),(0,x.jsxs)(r.Z,{gutter:20,children:[(0,x.jsx)(u.Z,{span:24,children:(0,x.jsx)(v.Z,{required:!0,required_text:"\u041d\u0435\u043e\u0431\u0445\u043e\u0434\u0438\u043c\u043e \u0432\u0432\u0435\u0441\u0442\u0438 \u0437\u0430\u0433\u043e\u043b\u043e\u0432\u043e\u043a",label:"\u041f\u043e\u0434\u0437\u0430\u0433\u043e\u043b\u043e\u0432\u043e\u043a Ru",name:"sub_title_ru"})}),(0,x.jsx)(u.Z,{span:24,children:(0,x.jsx)(v.Z,{required:!0,required_text:"Sarlavha kiritish kerak",label:"Qo'shimcha Sarlavha Uz",name:"sub_title_uz"})}),(0,x.jsx)(u.Z,{span:24,children:(0,x.jsx)(v.Z,{required:!0,required_text:"A title is required",label:"Sub Title En",name:"sub_title_en"})})]}),(0,x.jsx)(r.Z,{gutter:20,children:(0,x.jsx)(u.Z,{span:24,children:(0,x.jsx)(l.Z.Item,{label:"\u0418\u0437\u043e\u0431\u0440\u0430\u0436\u0435\u043d\u0438\u0435",name:"image_ids",rules:[{required:!0,message:"\u0422\u0440\u0435\u0431\u0443\u0435\u0442\u0441\u044f \u0438\u0437\u043e\u0431\u0440\u0430\u0436\u0435\u043d\u0438\u0435"}],children:(0,x.jsx)(h.Z,{children:(0,x.jsx)(n.Z,{maxCount:30,fileList:j,listType:"picture-card",onChange:e=>{let{fileList:t}=e;if(t.length<j.length)return;const s=new FormData;0!==t.length&&(s.append("uploaded_images",t[t.length-1].originFileObj),q({url:"/about/images/",formData:s}))},onPreview:async e=>{let t=e.url;t||(t=await new Promise((t=>{const s=new FileReader;s.readAsDataURL(e.originFileObj),s.onload=()=>t(s.result)})));const s=new Image;s.src=t;const i=window.open(t);null===i||void 0===i||i.document.write(s.outerHTML)},onRemove:t=>{const s=[];j.map((e=>{(null===e||void 0===e?void 0:e.uid)!==(null===t||void 0===t?void 0:t.uid)&&s.push(e)})),!s.length>0&&e.setFieldsValue({image_ids:[]});const i={image_ids:[null===t||void 0===t?void 0:t.uid]};U({url:"/about/images/delete",ids:i}),S(s)},beforeUpload:()=>!1,children:j.length>29?"":"Upload"})})})})}),(0,x.jsx)(d.Z,{type:"primary",htmlType:"submit",style:{width:"100%",marginTop:"20px"},children:V?"\u0418\u0437\u043c\u0435\u043d\u0438\u0442\u044c":"\u0421\u043e\u0437\u0434\u0430\u0442\u044c"})]})})}}}]);
//# sourceMappingURL=39.35d8ae2a.chunk.js.map