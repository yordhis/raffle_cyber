import{aQ as x,aV as w,d as u,h as k,o as d,e as _,a as o,r as i,m as v,bx as m,b as C,w as f,n as c,O as $,c as y,j as h,p as b}from"./app-Cvy-upqa.js";const S={class:"relative"},E={__name:"Dropdown",props:{align:{type:String,default:"right"},width:{type:String,default:"48"},contentClasses:{type:String,default:"py-1 bg-white"}},setup(t){const n=t,a=r=>{e.value&&r.key==="Escape"&&(e.value=!1)};x(()=>document.addEventListener("keydown",a)),w(()=>document.removeEventListener("keydown",a));const l=u(()=>({48:"w-48"})[n.width.toString()]),p=u(()=>n.align==="left"?"ltr:origin-top-left rtl:origin-top-right start-0":n.align==="right"?"ltr:origin-top-right rtl:origin-top-left end-0":"origin-top"),e=k(!1);return(r,s)=>(d(),_("div",S,[o("div",{onClick:s[0]||(s[0]=g=>e.value=!e.value)},[i(r.$slots,"trigger")]),v(o("div",{class:"fixed inset-0 z-40",onClick:s[1]||(s[1]=g=>e.value=!1)},null,512),[[m,e.value]]),C($,{"enter-active-class":"transition ease-out duration-200","enter-from-class":"opacity-0 scale-95","enter-to-class":"opacity-100 scale-100","leave-active-class":"transition ease-in duration-75","leave-from-class":"opacity-100 scale-100","leave-to-class":"opacity-0 scale-95"},{default:f(()=>[v(o("div",{class:c(["absolute z-50 mt-2 rounded-md shadow-lg",[l.value,p.value]]),style:{display:"none"},onClick:s[2]||(s[2]=g=>e.value=!1)},[o("div",{class:c(["rounded-md ring-1 ring-black ring-opacity-5",t.contentClasses])},[i(r.$slots,"content")],2)],2),[[m,e.value]])]),_:3})]))}},L={__name:"DropdownLink",props:{href:{type:String,required:!0}},setup(t){return(n,a)=>(d(),y(h(b),{href:t.href,class:"block w-full px-4 py-2 text-start text-sm leading-5 text-gray-700 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 transition duration-150 ease-in-out"},{default:f(()=>[i(n.$slots,"default")]),_:3},8,["href"]))}},z={__name:"NavLink",props:{href:{type:String,required:!0},active:{type:Boolean}},setup(t){const n=t,a=u(()=>n.active?"inline-flex items-center px-1 pt-1 border-b-2 border-indigo-400 text-sm font-medium leading-5 text-gray-900 focus:outline-none focus:border-indigo-700 transition duration-150 ease-in-out":"inline-flex items-center px-1 pt-1 border-b-2 border-transparent text-sm font-medium leading-5 text-gray-500 hover:text-gray-700 hover:border-gray-300 focus:outline-none focus:text-gray-700 focus:border-gray-300 transition duration-150 ease-in-out");return(l,p)=>(d(),y(h(b),{href:t.href,class:c(a.value)},{default:f(()=>[i(l.$slots,"default")]),_:3},8,["href","class"]))}};export{z as _,E as a,L as b};
