"use strict";(self.webpackChunkbaden_baden=self.webpackChunkbaden_baden||[]).push([[588],{53016:(e,a,t)=>{t.d(a,{Z:()=>r});t(72791);var i=t(2409),l=t(49389),s=t(80184);const r=e=>{let{label:a,name:t,required:r,required_text:n,warning:d}=e;return(0,s.jsx)(i.Z.Item,{label:d?(0,s.jsxs)("div",{children:[(0,s.jsx)("p",{children:a}),(0,s.jsx)("br",{}),(0,s.jsx)("p",{children:d})]}):(0,s.jsx)("div",{children:a}),name:t,rules:[{required:r,message:n}],children:(0,s.jsx)(l.default,{})})}},63159:(e,a,t)=>{t.d(a,{Z:()=>r});t(72791);var i=t(2409),l=t(13344),s=t(80184);const r=e=>{let{label:a,name:t,required:r,required_text:n}=e;return(0,s.jsx)(i.Z.Item,{label:a,name:t,rules:[{required:r,message:n}],children:(0,s.jsx)(l.Z,{style:{width:"100%"}})})}},48588:(e,a,t)=>{t.r(a),t.d(a,{default:()=>k});var i=t(72791),l=t(521),s=t(2409),r=t(50419),n=t(66106),d=t(30914),o=t(93086),u=t(83734),c=t(87309),m=t(91933),v=t(27169),g=t(72018),x=t(57689),p=t(16030),h=t(68117),Z=t(68747),j=t(77221),b=t(53016),_=t(63159),f=t(80184);const{Title:y}=l.default,q={image:[],title_uz:"",title_ru:"",title_en:"",landmarks:[{distance:"",distance_type:"",title_uz:"",title_ru:"",title_en:""}]},k=()=>{const[e]=s.Z.useForm(),a=(0,x.s0)(),{editId:t}=(0,p.v9)((e=>e.editData)),l=(0,p.I0)(),[k,w]=(0,i.useState)([]),{mutate:S,data:F,isLoading:I,isSuccess:E}=(0,m.useMutation)((e=>{let{url:a,formData:t}=e;return v.Z.postData(a,t)}),{onSuccess:()=>{r.ZP.success("Success")},onError:e=>{for(let a in e.response.data)r.ZP.error("".concat(a,": ").concat(e.response.data[a][0]))}}),{mutate:L,data:P,isLoading:C,isSuccess:D}=(0,m.useMutation)((e=>{let{url:a,data:t}=e;return v.Z.postData(a,t)}),{onSuccess:()=>{r.ZP.success("Success")},onError:e=>{for(let a in e.response.data)r.ZP.error("".concat(a,": ").concat(e.response.data[a][0]))}}),{isLoading:z,data:V,refetch:M,isSuccess:T}=(0,m.useQuery)(["edit-landmark",t],(()=>v.Z.getDataByID("/about/landmarkcategories",t)),{enabled:!1}),{mutate:R,isLoading:U,data:J,isSuccess:O}=(0,m.useMutation)((e=>{let{url:a,data:t,id:i}=e;return v.Z.editData(a,t,i)}),{onSuccess:()=>{r.ZP.success("Success")},onError:e=>{for(let a in e.response.data)r.ZP.error("".concat(a,": ").concat(e.response.data[a][0]))}}),{mutate:A}=(0,m.useMutation)((e=>{let{url:a,ids:t}=e;return v.Z.deleteImages(a,t)}),{onSuccess:()=>r.ZP.success("Success"),onError:e=>r.ZP.error(e.message)});(0,i.useEffect)((()=>{O&&l({type:j.Pb,payload:""}),(D||O)&&a("/landmark")}),[P,J]),(0,i.useEffect)((()=>{""!==t&&M()}),[t]),(0,i.useEffect)((()=>{""===t&&e.setFieldsValue(q)}),[]),(0,i.useEffect)((()=>{let a=null;if(void 0!==V&&(a=[{uid:null===V||void 0===V?void 0:V.image.id,name:null===V||void 0===V?void 0:V.image.id,status:"done",url:null===V||void 0===V?void 0:V.image.image}]),T){var t;const i={title_uz:null===V||void 0===V?void 0:V.title_uz,title_ru:null===V||void 0===V?void 0:V.title_ru,title_en:null===V||void 0===V?void 0:V.title_en,image:null===V||void 0===V||null===(t=V.image)||void 0===t?void 0:t.id,landmarks:null===V||void 0===V?void 0:V.landmarks};w(a),e.setFieldsValue(i)}}),[V]);(0,i.useEffect)((()=>{const a=JSON.parse(localStorage.getItem("myFormValues"));a&&(a.images=[],e.setFieldsValue(a));const t=()=>{localStorage.setItem("myFormValues",JSON.stringify(e.getFieldsValue()))};return window.addEventListener("beforeunload",t),()=>{localStorage.removeItem("editDataId"),localStorage.removeItem("myFormValues"),window.removeEventListener("beforeunload",t)}}),[]),(0,i.useEffect)((()=>{if(E){var a,t,i;const l=[{uid:null===F||void 0===F||null===(a=F.images[0])||void 0===a?void 0:a.id,name:null===F||void 0===F||null===(t=F.images[0])||void 0===t?void 0:t.id,status:"done",url:null===F||void 0===F||null===(i=F.images[0])||void 0===i?void 0:i.url}];e.setFieldsValue({image:l}),w(l)}}),[F]);const B=(0,i.useMemo)((()=>[{value:"km",label:"\u041a\u043c"},{value:"m",label:"\u041c"}]),[]);return(0,f.jsx)("div",{children:C||z||U||I?(0,f.jsx)(g.QP,{}):(0,f.jsxs)(s.Z,{form:e,name:"basic",labelCol:{span:24},wrapperCol:{span:24},style:{maxWidth:"100%"},initialValues:q,onFinish:e=>{var a;const i={image:null===(a=k[0])||void 0===a?void 0:a.uid,title_uz:e.title_uz,title_ru:e.title_ru,title_en:e.title_en,landmarks:null===e||void 0===e?void 0:e.landmarks};console.log(i),T?R({url:"/about/landmarkcategories",data:i,id:t}):L({url:"/about/landmarkcategories/",data:i})},onFinishFailed:e=>{console.log("Failed:",e)},autoComplete:"off",children:[(0,f.jsxs)(n.Z,{gutter:20,children:[(0,f.jsx)(d.Z,{span:8,children:(0,f.jsx)(b.Z,{required:!0,required_text:"\u041d\u0435\u043e\u0431\u0445\u043e\u0434\u0438\u043c\u043e \u0432\u0432\u0435\u0441\u0442\u0438 \u0437\u0430\u0433\u043e\u043b\u043e\u0432\u043e\u043a",label:"\u0417\u0430\u0433\u043e\u043b\u043e\u0432\u043e\u043a Ru",name:"title_ru"})}),(0,f.jsx)(d.Z,{span:8,children:(0,f.jsx)(b.Z,{required:!0,required_text:"Sarlavha kiritish kerak",label:"Sarlavha Uz",name:"title_uz"})}),(0,f.jsx)(d.Z,{span:8,children:(0,f.jsx)(b.Z,{required:!0,required_text:"A title is required",label:"Title En",name:"title_en"})})]}),(0,f.jsx)(n.Z,{gutter:20,children:(0,f.jsx)(d.Z,{span:12,children:(0,f.jsx)(s.Z.Item,{label:"\u0418\u0437\u043e\u0431\u0440\u0430\u0436\u0435\u043d\u0438\u0435",name:"image",rules:[{required:!0,message:"\u0422\u0440\u0435\u0431\u0443\u0435\u0442\u0441\u044f \u0438\u0437\u043e\u0431\u0440\u0430\u0436\u0435\u043d\u0438\u0435"}],children:(0,f.jsx)(h.Z,{children:(0,f.jsx)(o.Z,{maxCount:1,fileList:k,listType:"picture-card",onChange:e=>{let{fileList:a}=e;const t=new FormData;0!==a.length&&(t.append("uploaded_images",a[0].originFileObj),S({url:"/about/images/",formData:t}))},onPreview:async e=>{let a=e.url;a||(a=await new Promise((a=>{const t=new FileReader;t.readAsDataURL(e.originFileObj),t.onload=()=>a(t.result)})));const t=new Image;t.src=a;const i=window.open(a);null===i||void 0===i||i.document.write(t.outerHTML)},onRemove:a=>{const t={image_ids:[null===a||void 0===a?void 0:a.uid]};A({url:"/about/images/delete",ids:t}),w([]),e.setFieldsValue({image:[]})},beforeUpload:()=>!1,children:k.length>0?"":"Upload"})})})})}),(0,f.jsx)(y,{level:3,children:"\u041e\u0440\u0438\u0435\u043d\u0442\u0438\u0440\u044b \u043f\u043e\u0431\u043b\u0438\u0437\u043e\u0441\u0442\u0438"}),(0,f.jsx)(s.Z.List,{name:"landmarks",children:(e,a)=>{let{add:t,remove:i}=a;return(0,f.jsxs)(f.Fragment,{children:[e.map(((e,a)=>(0,f.jsxs)("div",{style:{marginBottom:20},children:[(0,f.jsxs)(n.Z,{gutter:20,children:[(0,f.jsx)(d.Z,{span:8,children:(0,f.jsx)(b.Z,{required:!0,required_text:"\u0423\u043a\u0430\u0436\u0438\u0442\u0435 \u043d\u0430\u0437\u0432\u0430\u043d\u0438\u0435 \u043c\u0435\u0441\u0442\u043e\u043f\u043e\u043b\u043e\u0436\u0435\u043d\u0438\u044f.",label:"\u041d\u0430\u0437\u0432\u0430\u043d\u0438\u0435 \u043c\u0435\u0441\u0442\u043e\u043f\u043e\u043b\u043e\u0436\u0435\u043d\u0438\u044f Ru ".concat(a+1),name:[e.name,"title_ru"]})}),(0,f.jsx)(d.Z,{span:8,children:(0,f.jsx)(b.Z,{required:!0,required_text:"Joylashuv nomi kiritish talab qilinadi",label:"Joylashuv nomi Uz ".concat(a+1),name:[e.name,"title_uz"]})}),(0,f.jsx)(d.Z,{span:8,children:(0,f.jsx)(b.Z,{required:!0,required_text:"A location name is required",label:"Location name En ".concat(a+1),name:[e.name,"title_en"]})}),(0,f.jsx)(d.Z,{span:12,children:(0,f.jsx)(_.Z,{required:!0,required_text:"\u0422\u0440\u0435\u0431\u0443\u0435\u0442\u0441\u044f \u0438\u043d\u0442\u0435\u0440\u0432\u0430\u043b",label:"\u0420\u0430\u0441\u0441\u0442\u043e\u044f\u043d\u0438\u0435 \u043c\u0435\u0436\u0434\u0443 ".concat(a+1),name:[e.name,"distance"]})}),(0,f.jsx)(d.Z,{span:12,children:(0,f.jsx)(s.Z.Item,{label:"\u0415\u0434\u0438\u043d\u0438\u0446\u0430 \u0440\u0430\u0441\u0441\u0442\u043e\u044f\u043d\u0438\u044f",name:[e.name,"distance_type"],rules:[{required:!0,message:"\u0412\u044b \u0434\u043e\u043b\u0436\u043d\u044b \u0432\u044b\u0431\u0440\u0430\u0442\u044c"}],wrapperCol:{span:24},children:(0,f.jsx)(u.default,{style:{width:"100%"},placeholder:"\u0412\u044b\u0431\u0435\u0440\u0438\u0442\u0435 \u0435\u0434\u0438\u043d\u0438\u0446\u0443 \u0438\u0437\u043c\u0435\u0440\u0435\u043d\u0438\u044f \u0440\u0430\u0441\u0441\u0442\u043e\u044f\u043d\u0438\u044f",optionLabelProp:"label",options:B})})})]}),(0,f.jsx)(Z.Z,{onClick:()=>i(e.name)})]},e.fieldKey))),(0,f.jsx)(s.Z.Item,{children:(0,f.jsx)(c.Z,{type:"primary",onClick:()=>t(),block:!0,style:{backgroundColor:"#28a745"},children:"\u041e\u0442\u043a\u0440\u044b\u0442\u044c \u043d\u043e\u0432\u044b\u0439 \u0440\u0430\u0437\u0434\u0435\u043b \u0434\u043b\u044f \u0445\u0430\u0440\u0430\u043a\u0442\u0435\u0440\u0438\u0441\u0442\u0438\u043a\u0430"})})]})}}),(0,f.jsx)(c.Z,{type:"primary",htmlType:"submit",style:{width:"100%",marginTop:"20px"},children:T?"\u0418\u0437\u043c\u0435\u043d\u0438\u0442\u044c":"\u0421\u043e\u0437\u0434\u0430\u0442\u044c"})]})})}}}]);
//# sourceMappingURL=588.a5c38952.chunk.js.map