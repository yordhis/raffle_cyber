import{T as c,o as f,c as w,w as n,b as o,j as e,Z as _,a as t,i as V,n as g,f as b}from"./app-2IcnOxOv.js";import{_ as k}from"./GuestLayout-ZsZzvcMZ.js";import{_ as l,a as i}from"./TextInput-heBbC59a.js";import{_ as m}from"./InputLabel-pN8IzQ3I.js";import{P as v}from"./PrimaryButton-cxZIbjf2.js";import"./_plugin-vue_export-helper-x3n3nnut.js";const y={class:"mt-4"},P={class:"mt-4"},q={class:"flex items-center justify-end mt-4"},U={__name:"ResetPassword",props:{email:{type:String,required:!0},token:{type:String,required:!0}},setup(p){const d=p,s=c({token:d.token,email:d.email,password:"",password_confirmation:""}),u=()=>{s.post(route("password.store"),{onFinish:()=>s.reset("password","password_confirmation")})};return(x,a)=>(f(),w(k,null,{default:n(()=>[o(e(_),{title:"Reset Password"}),t("form",{onSubmit:b(u,["prevent"])},[t("div",null,[o(m,{for:"email",value:"Email"}),o(l,{id:"email",type:"email",class:"mt-1 block w-full",modelValue:e(s).email,"onUpdate:modelValue":a[0]||(a[0]=r=>e(s).email=r),required:"",autofocus:"",autocomplete:"username"},null,8,["modelValue"]),o(i,{class:"mt-2",message:e(s).errors.email},null,8,["message"])]),t("div",y,[o(m,{for:"password",value:"Password"}),o(l,{id:"password",type:"password",class:"mt-1 block w-full",modelValue:e(s).password,"onUpdate:modelValue":a[1]||(a[1]=r=>e(s).password=r),required:"",autocomplete:"new-password"},null,8,["modelValue"]),o(i,{class:"mt-2",message:e(s).errors.password},null,8,["message"])]),t("div",P,[o(m,{for:"password_confirmation",value:"Confirm Password"}),o(l,{id:"password_confirmation",type:"password",class:"mt-1 block w-full",modelValue:e(s).password_confirmation,"onUpdate:modelValue":a[2]||(a[2]=r=>e(s).password_confirmation=r),required:"",autocomplete:"new-password"},null,8,["modelValue"]),o(i,{class:"mt-2",message:e(s).errors.password_confirmation},null,8,["message"])]),t("div",q,[o(v,{class:g({"opacity-25":e(s).processing}),disabled:e(s).processing},{default:n(()=>[V(" Reset Password ")]),_:1},8,["class","disabled"])])],32)]),_:1}))}};export{U as default};