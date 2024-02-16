import{d as h,o as n,c as b,w as o,r as v,n as w,j as t,z as k,T as V,y as S,a as s,b as i,i as d,f as I,e as u,t as m,g as c,q as f,v as _}from"./app-BKwBw6Bj.js";import{S as U}from"./SectionTitle-6dB3Lwl3.js";import{_ as j}from"./AuthenticatedLayout-T4Lyk4K9.js";import{r as C}from"./TableCellsIcon-cVv1lZyC.js";import"./_plugin-vue_export-helper-x3n3nnut.js";import"./ResponsiveNavLink-qOriWN8G.js";import"./NavLink-pYRF3fTi.js";const B={__name:"NavLinkSub",props:{href:{type:String,required:!0},active:{type:Boolean}},setup(x){const a=x,e=h(()=>a.active?"inline-flex items-center px-1 pt-1 border-b-4 border-orange-400 text-sm font-medium leading-5 bg-orange-500 text-gray-900 focus:outline-none focus:border-indigo-700 transition duration-150 ease-in-out":"inline-flex items-center px-1 pt-1  border-transparent text-sm font-medium leading-5 text-orange-600  hover:text-gray-700 hover:border-gray-300 focus:outline-none focus:text-gray-700 focus:border-gray-300 transition duration-150 ease-in-out");return(g,y)=>(n(),b(t(k),{href:x.href,class:w(e.value)},{default:o(()=>[v(g.$slots,"default")]),_:3},8,["href","class"]))}},L={class:"flex flex-wrap justify-between"},N=s("div",{class:"text-4xl"}," Formulario para editar sorteo ",-1),z={class:"flex justify-center flex-wrap"},D={class:"bg-white rounded-2xl p-4 mx-10 my-5"},E={class:"flex justify-between"},T={key:0,class:"p-0 m-0 text-red-500"},F=["src"],$={key:0,class:"p-0 m-0 text-red-500"},q={key:1,class:"p-0 m-0 text-red-500"},M={class:"sm:flex sm:justify-between"},P={class:"py-2 pr-2"},G={key:0,class:"p-0 m-0 text-red-500"},O={class:"py-2 pr-2"},A={key:0,class:"p-0 m-0 text-red-500"},H={class:"py-2"},J={key:0,class:"p-0 m-0 text-red-500"},K={key:2,class:"p-0 m-0 text-red-500"},Q={key:3,class:"p-0 m-0 text-red-500"},R=["value"],W=["disabled"],le={__name:"Edit",props:{raffle:{type:Object}},setup(x){const a=x,e=V({title:a.raffle.title,description:a.raffle.description,cost:a.raffle.cost,start_date:a.raffle.start_date,end_date:a.raffle.end_date,limit_number:a.raffle.limit_number,minimum_purchese:a.raffle.minimum_purchese,file:"",status:a.raffle.status}),g=()=>{e.put(route("raffles.update",a.raffle.id))};return(y,r)=>{const p=S("InputLabel");return n(),b(j,{title:"Editar Sorteo"},{header:o(()=>[s("div",L,[s("div",null,[i(U,null,{title:o(()=>[N]),description:o(()=>[d(" Debe llenar todos los campos, para configurar correctamente el sorteo. ")]),_:1})]),s("div",null,[i(B,{href:y.route("raffles.index")},{default:o(()=>[i(t(C)),d(" Lista Sorteos ")]),_:1},8,["href"])])])]),default:o(()=>[s("div",z,[s("div",D,[s("form",{onSubmit:I(g,["prevent"])},[i(p,{class:"text-xl"},{default:o(()=>[d("Edita la imagen del premio")]),_:1}),s("div",E,[s("div",null,[s("input",{class:"rounded-2xl my-2 p-4 w-full block w-full text-sm text-slate-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-green-50 file:text-black-700 hover:file:bg-orange-100",accept:"image/*",type:"file",onInput:r[0]||(r[0]=l=>t(e).file=l.target.files[0])},null,32),t(e).errors.file?(n(),u("div",T,m(t(e).errors.file),1)):c("",!0)]),s("img",{src:a.raffle.file?a.raffle.file:"assets/images/no-image.png",alt:"Premios",class:"bg-gray-500 rounded w-80",loading:"lazy"},null,8,F)]),i(p,{class:"text-xl"},{default:o(()=>[d("Premio del premio")]),_:1}),f(s("input",{class:"rounded-2xl my-2 w-full",type:"text",placeholder:"Ingrese titulo del premio","onUpdate:modelValue":r[1]||(r[1]=l=>t(e).title=l)},null,512),[[_,t(e).title]]),t(e).errors.title?(n(),u("div",$,m(t(e).errors.title),1)):c("",!0),i(p,{class:"text-xl"},{default:o(()=>[d("Descripción")]),_:1}),f(s("textarea",{class:"rounded-2xl my-2 w-full","onUpdate:modelValue":r[2]||(r[2]=l=>t(e).description=l),placeholder:"Ingrese descripción del premio"},null,512),[[_,t(e).description]]),t(e).errors.description?(n(),u("div",q,m(t(e).errors.description),1)):c("",!0),s("div",M,[s("div",P,[i(p,{class:"text-xl"},{default:o(()=>[d("Limite de bolelos a vender")]),_:1}),f(s("input",{class:"w-full rounded-2xl my-2",placeholder:"Ingrese el límite de venta",type:"number","onUpdate:modelValue":r[3]||(r[3]=l=>t(e).limit_number=l)},null,512),[[_,t(e).limit_number]]),t(e).errors.limit_number?(n(),u("div",G,m(t(e).errors.limit_number),1)):c("",!0)]),s("div",O,[i(p,{class:"text-xl"},{default:o(()=>[d("Cantidad mínima de compra")]),_:1}),f(s("input",{class:"w-full rounded-2xl my-2",placeholder:"Ingrese la cantidad mínima de compra de boletos",type:"number","onUpdate:modelValue":r[4]||(r[4]=l=>t(e).minimum_purchese=l)},null,512),[[_,t(e).minimum_purchese]]),t(e).errors.minimum_purchese?(n(),u("div",A,m(t(e).errors.minimum_purchese),1)):c("",!0)]),s("div",H,[i(p,{class:"text-xl"},{default:o(()=>[d("Costo por boleto")]),_:1}),f(s("input",{class:"w-full rounded-2xl my-2",type:"number",step:"any",placeholder:"Ingrese el costo del boleto","onUpdate:modelValue":r[5]||(r[5]=l=>t(e).cost=l)},null,512),[[_,t(e).cost]]),t(e).errors.cost?(n(),u("div",J,m(t(e).errors.cost),1)):c("",!0)])]),i(p,{class:"text-xl"},{default:o(()=>[d("Fecha de incio del sorteo")]),_:1}),f(s("input",{class:"rounded-2xl my-2 w-full",type:"date","onUpdate:modelValue":r[6]||(r[6]=l=>t(e).start_date=l)},null,512),[[_,t(e).start_date]]),t(e).errors.start_date?(n(),u("div",K,m(t(e).errors.start_date),1)):c("",!0),i(p,{class:"text-xl"},{default:o(()=>[d("Fecha de finalización del sorteo")]),_:1}),f(s("input",{class:"rounded-2xl my-2 w-full",type:"date","onUpdate:modelValue":r[7]||(r[7]=l=>t(e).end_date=l)},null,512),[[_,t(e).end_date]]),t(e).errors.end_date?(n(),u("div",Q,m(t(e).errors.end_date),1)):c("",!0),t(e).progress?(n(),u("progress",{key:4,class:"w-full",value:t(e).progress.percentage,max:"100"},m(t(e).progress.percentage)+"% ",9,R)):c("",!0),s("button",{disabled:t(e).processing,type:"submit",class:"w-full text-center ease-in duration-300 bg-green-500 hover:bg-orange-700 shadow-lg shadow-green-500/50 rounded-lg p-2 my-2 text-white text-2xl text-center"}," Guardar cambios ",8,W)],32)])])]),_:1})}}};export{le as default};
