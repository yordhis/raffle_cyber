import{T as u,o as l,c as d,w as i,b as t,j as s,bN as c,e as f,t as p,g as _,a,i as w,n as g,f as y}from"./app-BKwBw6Bj.js";import{_ as b}from"./GuestLayout-3cYHx_SL.js";import{_ as x}from"./InputError-3kzRVno5.js";import{_ as k}from"./InputLabel-yV-sU3Sj.js";import{P as V}from"./PrimaryButton-CNwdAQv8.js";import{_ as h}from"./TextInput-GSi7My4e.js";import"./_plugin-vue_export-helper-x3n3nnut.js";const v=a("div",{class:"mb-4 text-sm text-gray-600"}," Forgot your password? No problem. Just let us know your email address and we will email you a password reset link that will allow you to choose a new one. ",-1),N={key:0,class:"mb-4 font-medium text-sm text-green-600"},B={class:"flex items-center justify-end mt-4"},q={__name:"ForgotPassword",props:{status:{type:String}},setup(o){const e=u({email:""}),m=()=>{e.post(route("password.email"))};return(P,r)=>(l(),d(b,null,{default:i(()=>[t(s(c),{title:"Forgot Password"}),v,o.status?(l(),f("div",N,p(o.status),1)):_("",!0),a("form",{onSubmit:y(m,["prevent"])},[a("div",null,[t(k,{for:"email",value:"Email"}),t(h,{id:"email",type:"email",class:"mt-1 block w-full",modelValue:s(e).email,"onUpdate:modelValue":r[0]||(r[0]=n=>s(e).email=n),required:"",autofocus:"",autocomplete:"username"},null,8,["modelValue"]),t(x,{class:"mt-2",message:s(e).errors.email},null,8,["message"])]),a("div",B,[t(V,{class:g({"opacity-25":s(e).processing}),disabled:s(e).processing},{default:i(()=>[w(" Email Password Reset Link ")]),_:1},8,["class","disabled"])])],32)]),_:1}))}};export{q as default};
