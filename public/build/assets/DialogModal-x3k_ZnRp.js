import{S as d}from"./SectionTitle-6dB3Lwl3.js";import{o as c,e as r,b as m,w as l,r as e,a as t,c as _}from"./app-BKwBw6Bj.js";import{_ as p}from"./Modal-M3kyMqKu.js";const h={class:"md:grid md:grid-cols-3 md:gap-6"},f={class:"mt-5 md:mt-0 md:col-span-2"},u={class:"px-4 py-5 sm:p-6 bg-white shadow sm:rounded-lg"},S={__name:"ActionSection",setup(o){return(s,i)=>(c(),r("div",h,[m(d,null,{title:l(()=>[e(s.$slots,"title")]),description:l(()=>[e(s.$slots,"description")]),_:3}),t("div",f,[t("div",u,[e(s.$slots,"content")])])]))}},x={class:"px-6 py-4"},g={class:"text-lg font-medium text-gray-900"},w={class:"mt-4 text-sm text-gray-600"},$={class:"flex flex-row justify-end px-6 py-4 bg-gray-100 text-end"},k={__name:"DialogModal",props:{show:{type:Boolean,default:!1},maxWidth:{type:String,default:"2xl"},closeable:{type:Boolean,default:!0}},emits:["close"],setup(o,{emit:s}){const i=s,n=()=>{i("close")};return(a,y)=>(c(),_(p,{show:o.show,"max-width":o.maxWidth,closeable:o.closeable,onClose:n},{default:l(()=>[t("div",x,[t("div",g,[e(a.$slots,"title")]),t("div",w,[e(a.$slots,"content")])]),t("div",$,[e(a.$slots,"footer")])]),_:3},8,["show","max-width","closeable"]))}};export{S as _,k as a};
