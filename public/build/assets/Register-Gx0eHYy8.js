import{T as p,o as c,c as w,w as n,b as a,j as s,bL as _,a as l,i as d,bM as g,n as V,f as b}from"./app-Q_W_1sbo.js";import{_ as v}from"./GuestLayout-EApZvYg3.js";import{_ as t,a as m}from"./TextInput-2ARoTP-l.js";import{_ as i}from"./InputLabel-7y7ZFVT4.js";import{P as y}from"./PrimaryButton-5eAoiLdd.js";import"./_plugin-vue_export-helper-x3n3nnut.js";const x={class:"mt-4"},k={class:"mt-4"},q={class:"mt-4"},B={class:"flex items-center justify-end mt-4"},j={__name:"Register",setup(N){const e=p({name:"",email:"",password:"",password_confirmation:""}),u=()=>{e.post(route("register"),{onFinish:()=>e.reset("password","password_confirmation")})};return(f,o)=>(c(),w(v,null,{default:n(()=>[a(s(_),{title:"Register"}),l("form",{onSubmit:b(u,["prevent"])},[l("div",null,[a(i,{for:"name",value:"Name"}),a(t,{id:"name",type:"text",class:"mt-1 block w-full",modelValue:s(e).name,"onUpdate:modelValue":o[0]||(o[0]=r=>s(e).name=r),required:"",autofocus:"",autocomplete:"name"},null,8,["modelValue"]),a(m,{class:"mt-2",message:s(e).errors.name},null,8,["message"])]),l("div",x,[a(i,{for:"email",value:"Email"}),a(t,{id:"email",type:"email",class:"mt-1 block w-full",modelValue:s(e).email,"onUpdate:modelValue":o[1]||(o[1]=r=>s(e).email=r),required:"",autocomplete:"username"},null,8,["modelValue"]),a(m,{class:"mt-2",message:s(e).errors.email},null,8,["message"])]),l("div",k,[a(i,{for:"password",value:"Password"}),a(t,{id:"password",type:"password",class:"mt-1 block w-full",modelValue:s(e).password,"onUpdate:modelValue":o[2]||(o[2]=r=>s(e).password=r),required:"",autocomplete:"new-password"},null,8,["modelValue"]),a(m,{class:"mt-2",message:s(e).errors.password},null,8,["message"])]),l("div",q,[a(i,{for:"password_confirmation",value:"Confirm Password"}),a(t,{id:"password_confirmation",type:"password",class:"mt-1 block w-full",modelValue:s(e).password_confirmation,"onUpdate:modelValue":o[3]||(o[3]=r=>s(e).password_confirmation=r),required:"",autocomplete:"new-password"},null,8,["modelValue"]),a(m,{class:"mt-2",message:s(e).errors.password_confirmation},null,8,["message"])]),l("div",B,[a(s(g),{href:f.route("login"),class:"underline text-sm text-gray-600 hover:text-gray-900 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"},{default:n(()=>[d(" Already registered? ")]),_:1},8,["href"]),a(y,{class:V(["ms-4",{"opacity-25":s(e).processing}]),disabled:s(e).processing},{default:n(()=>[d(" Register ")]),_:1},8,["class","disabled"])])],32)]),_:1}))}};export{j as default};