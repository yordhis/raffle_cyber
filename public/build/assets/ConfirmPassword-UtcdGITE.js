import{T as n,o as l,c as d,w as t,b as a,j as o,bN as c,a as e,i as p,n as f,f as u}from"./app-CZJNTp8v.js";import{_}from"./GuestLayout-Iv-zMDiJ.js";import{_ as w}from"./InputError-KKfRWGYV.js";import{_ as b}from"./InputLabel-QnydbOPe.js";import{P as x}from"./PrimaryButton-0b9nyzaG.js";import{_ as g}from"./TextInput--81uibvu.js";import"./_plugin-vue_export-helper-x3n3nnut.js";const h=e("div",{class:"mb-4 text-sm text-gray-600"}," This is a secure area of the application. Please confirm your password before continuing. ",-1),y={class:"flex justify-end mt-4"},j={__name:"ConfirmPassword",setup(P){const s=n({password:""}),i=()=>{s.post(route("password.confirm"),{onFinish:()=>s.reset()})};return(V,r)=>(l(),d(_,null,{default:t(()=>[a(o(c),{title:"Confirm Password"}),h,e("form",{onSubmit:u(i,["prevent"])},[e("div",null,[a(b,{for:"password",value:"Password"}),a(g,{id:"password",type:"password",class:"mt-1 block w-full",modelValue:o(s).password,"onUpdate:modelValue":r[0]||(r[0]=m=>o(s).password=m),required:"",autocomplete:"current-password",autofocus:""},null,8,["modelValue"]),a(w,{class:"mt-2",message:o(s).errors.password},null,8,["message"])]),e("div",y,[a(x,{class:f(["ms-4",{"opacity-25":o(s).processing}]),disabled:o(s).processing},{default:t(()=>[p(" Confirm ")]),_:1},8,["class","disabled"])])],32)]),_:1}))}};export{j as default};