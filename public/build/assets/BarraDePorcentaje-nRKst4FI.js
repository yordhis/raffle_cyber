import{o as l,e as o,a as t,t as a,aH as s}from"./app-ZfzDyCp1.js";const r={class:"w-full"},i={for:"progreso",class:"text-white py-5"},n={class:"w-100 border rounded-2xl p-1 my-2 animate-pulse"},u={__name:"BarraDePorcentaje",props:{title:String,total_sold:Number,limit_number:Number},setup(e){return(c,d)=>(l(),o("div",r,[t("label",i,a(e.title),1),t("div",n,[t("div",{class:"bg-orange-500 rounded-2xl text-center text-white",style:s("width:"+e.total_sold*100/e.limit_number+"%;")},a((e.total_sold*100/e.limit_number).toFixed(2))+"%",5)])]))}};export{u as _};
