import{T as x,y,o as d,c as v,w as o,a as s,b as i,i as a,j as e,f as b,q as c,v as f,e as n,t as u,g as m}from"./app-CZJNTp8v.js";import{_ as g}from"./NavLinkSub-LPL_FnHn.js";import{S as h}from"./SectionTitle-r7UUjAq-.js";import{_ as w}from"./AuthenticatedLayout-DaQZnjLq.js";import{r as k}from"./TableCellsIcon-QumuhJpa.js";import"./_plugin-vue_export-helper-x3n3nnut.js";import"./ResponsiveNavLink-fJsPFiiK.js";import"./NavLink-Np0Xx6lM.js";const V={class:"flex flex-wrap justify-between"},I=s("div",{class:"text-4xl"}," Formulario para crear sorteo ",-1),C={class:"flex justify-center flex-wrap"},S={class:"bg-white rounded-2xl p-4 mx-10 my-5"},U={key:0,class:"p-0 m-0 text-red-500"},j={key:1,class:"p-0 m-0 text-red-500"},B={class:"sm:flex sm:justify-between"},D={class:"py-2 pr-2"},L={key:0,class:"p-0 m-0 text-red-500"},N={class:"py-2 pr-2"},T={key:0,class:"p-0 m-0 text-red-500"},F={class:"py-2"},$={key:0,class:"p-0 m-0 text-red-500"},M={key:2,class:"p-0 m-0 text-red-500"},q={key:3,class:"p-0 m-0 text-red-500"},z={key:4,class:"p-0 m-0 text-red-500"},A=["value"],E=s("button",{class:"w-full text-center ease-in duration-300 bg-green-500 hover:bg-orange-700 shadow-lg shadow-green-500/50 rounded-lg p-2 my-2 text-white text-2xl text-center"}," Crear Sorteo ",-1),X={__name:"Create",setup(P){const t=x({title:"",description:"",cost:"",start_date:"",end_date:"",limit_number:"",minimum_purchese:"",file:"",status:1});return(_,r)=>{const p=y("InputLabel");return d(),v(w,{title:"Sorteos"},{header:o(()=>[s("div",V,[s("div",null,[i(h,null,{title:o(()=>[I]),description:o(()=>[a(" Debe llenar todos los campos, para configurar correctamente el sorteo. ")]),_:1})]),s("div",null,[i(g,{href:_.route("raffles.index")},{default:o(()=>[i(e(k)),a(" Lista Sorteos ")]),_:1},8,["href"])])])]),default:o(()=>[s("div",C,[s("div",S,[s("form",{onSubmit:r[8]||(r[8]=b(l=>e(t).post(_.route("raffles.store")),["prevent"]))},[i(p,{class:"text-xl"},{default:o(()=>[a("Premio del premio")]),_:1}),c(s("input",{class:"rounded-2xl my-2 w-full",type:"text",placeholder:"Ingrese titulo del premio","onUpdate:modelValue":r[0]||(r[0]=l=>e(t).title=l)},null,512),[[f,e(t).title]]),e(t).errors.title?(d(),n("div",U,u(e(t).errors.title),1)):m("",!0),i(p,{class:"text-xl"},{default:o(()=>[a("Descripción")]),_:1}),c(s("textarea",{class:"rounded-2xl my-2 w-full","onUpdate:modelValue":r[1]||(r[1]=l=>e(t).description=l),placeholder:"Ingrese descripción del premio"},null,512),[[f,e(t).description]]),e(t).errors.description?(d(),n("div",j,u(e(t).errors.description),1)):m("",!0),s("div",B,[s("div",D,[i(p,{class:"text-xl"},{default:o(()=>[a("Limite de bolelos a vender")]),_:1}),c(s("input",{class:"w-full rounded-2xl my-2",placeholder:"Ingrese el límite de venta",type:"number","onUpdate:modelValue":r[2]||(r[2]=l=>e(t).limit_number=l)},null,512),[[f,e(t).limit_number]]),e(t).errors.limit_number?(d(),n("div",L,u(e(t).errors.limit_number),1)):m("",!0)]),s("div",N,[i(p,{class:"text-xl"},{default:o(()=>[a("Cantidad mínima de compra")]),_:1}),c(s("input",{class:"w-full rounded-2xl my-2",placeholder:"Ingrese la cantidad mínima de compra de boletos",type:"number","onUpdate:modelValue":r[3]||(r[3]=l=>e(t).minimum_purchese=l)},null,512),[[f,e(t).minimum_purchese]]),e(t).errors.minimum_purchese?(d(),n("div",T,u(e(t).errors.minimum_purchese),1)):m("",!0)]),s("div",F,[i(p,{class:"text-xl"},{default:o(()=>[a("Costo por boleto")]),_:1}),c(s("input",{class:"w-full rounded-2xl my-2",type:"number",step:"any",placeholder:"Ingrese el costo del boleto","onUpdate:modelValue":r[4]||(r[4]=l=>e(t).cost=l)},null,512),[[f,e(t).cost]]),e(t).errors.cost?(d(),n("div",$,u(e(t).errors.cost),1)):m("",!0)])]),i(p,{class:"text-xl"},{default:o(()=>[a("Fecha de incio del sorteo")]),_:1}),c(s("input",{class:"rounded-2xl my-2 w-full",type:"date","onUpdate:modelValue":r[5]||(r[5]=l=>e(t).start_date=l)},null,512),[[f,e(t).start_date]]),e(t).errors.start_date?(d(),n("div",M,u(e(t).errors.start_date),1)):m("",!0),i(p,{class:"text-xl"},{default:o(()=>[a("Fecha de finalización del sorteo")]),_:1}),c(s("input",{class:"rounded-2xl my-2 w-full",type:"date","onUpdate:modelValue":r[6]||(r[6]=l=>e(t).end_date=l)},null,512),[[f,e(t).end_date]]),e(t).errors.end_date?(d(),n("div",q,u(e(t).errors.end_date),1)):m("",!0),i(p,{class:"text-xl"},{default:o(()=>[a("Añade la imagen del premio")]),_:1}),s("input",{class:"rounded-2xl my-2 p-4 w-full block w-full text-sm text-slate-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-green-50 file:text-black-700 hover:file:bg-orange-100",accept:"image/*",type:"file",onInput:r[7]||(r[7]=l=>e(t).file=l.target.files[0])},null,32),e(t).errors.file?(d(),n("div",z,u(e(t).errors.file),1)):m("",!0),e(t).progress?(d(),n("progress",{key:5,class:"w-full",value:e(t).progress.percentage,max:"100"},u(e(t).progress.percentage)+"% ",9,A)):m("",!0),E],32)])])]),_:1})}}};export{X as default};
