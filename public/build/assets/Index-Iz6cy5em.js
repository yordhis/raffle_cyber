import{_ as m}from"./NavLinkSub-LPL_FnHn.js";import{h as C,o as c,c as S,w as i,a as e,b as a,i as s,t as n,j as d,e as _,k as B,n as u,F as k}from"./app-CZJNTp8v.js";import{S as p}from"./SectionTitle-r7UUjAq-.js";import{u as h,S as g}from"./sweetalert2.all-ZnQWWyu2.js";import{D as T}from"./DangerButton-qF4eqipa.js";import{W as E,r as $}from"./WarningButton-hVEQ2DnW.js";import{_ as D}from"./AuthenticatedLayout-DaQZnjLq.js";import{r as F}from"./PlusCircleIcon-hh6CmBVa.js";import{r as I}from"./TrashIcon-45ZE3HVc.js";import"./_plugin-vue_export-helper-x3n3nnut.js";import"./ResponsiveNavLink-fJsPFiiK.js";import"./NavLink-Np0Xx6lM.js";const N={class:"flex flex-wrap justify-between"},V=e("div",{class:"text-4xl"}," Listas de raffles creados ",-1),j={class:"flex flex-wrap justify-center"},q={class:"w-70"},z=["src"],A={class:"w-80 p-4"},L={class:"text-green-500 text-2xl font-semibold"},O=e("p",{class:"text-orange-500"},"Descripción:",-1),U={class:"text-orange-500"},W={class:"text-green-600"},M={class:"text-orange-500"},P={class:"text-red-600"},G={class:"text-orange-500"},H={class:"text-red-600"},J={class:"text-orange-500"},K={class:"text-red-600"},Q={class:"text-orange-500"},R={class:"flex flex-wrap"},X={class:"mx-1"},Y={class:"mt-1"},Z={class:"ml-8 mt-5"},ee=["onClick"],te=e("span",{class:"sr-only"},"Estatus",-1),_e={__name:"Index",props:{message:{type:String,default:""},status:{type:Number,default:""},raffles:{type:Object}},setup(f){const x=C(!0);console.log(x);const b=h({id:""}),w=h({id:""}),v=(l,o)=>(g.mixin({buttonsStyling:!0}).fire({title:"Seguro que desea cambiar el estatus del sorteo "+o.title,icon:"question",showCancelButton:!0,confirmButtonText:"si, Cambiar",cancelButtonText:"Cancelar"}).then(r=>{r.isConfirmed&&(console.log(l),w.put(route("raffles.updateStatus",l)))}),o.status),y=(l,o)=>{g.mixin({buttonsStyling:!0}).fire({title:"Seguro que desea eliminar el sorteo de "+o,icon:"question",showCancelButton:!0,confirmButtonText:"si, Eliminar",cancelButtonText:"Cancelar"}).then(r=>{r.isConfirmed&&(console.log(l),b.delete(route("raffles.destroy",l)))})};return(l,o)=>(c(),S(D,{title:"Sorteos"},{header:i(()=>[e("div",N,[e("div",null,[a(p,null,{title:i(()=>[V]),description:i(()=>[s(" En la siguiente lista puede visualizar, editar y eliminar los raffles creados. "+n(f.message),1)]),_:1})]),e("div",null,[a(m,{href:l.route("raffles.create")},{default:i(()=>[a(d(F)),s(" Crear Sorteo ")]),_:1},8,["href"])])])]),default:i(()=>[e("div",j,[(c(!0),_(k,null,B(f.raffles,t=>(c(),_("div",{key:t.id,class:"bg-white flex flex-col w-80 p-2 m-2"},[e("div",q,[e("img",{src:t.file?t.file:"assets/images/no-image.png",alt:"Premios",class:"",loading:"lazy"},null,8,z)]),e("div",A,[a(p,null,{title:i(()=>[s(n(t.title),1)]),_:2},1024),e("p",L,"Costo: "+n(t.cost)+" $",1),O,e("p",null,n(t.description),1),e("p",U,[s(" Fecha de Inicio: "),e("span",W,n(t.start_date),1)]),e("p",M,[s(" Fecha de Finalización: "),e("span",P,n(t.end_date),1)]),e("p",G,[s(" Limite de boletos: "),e("span",H,n(t.limit_number),1)]),e("p",J,[s(" Mínimo de venta de boletos: "),e("span",K,n(t.minimum_purchese),1)]),e("p",Q,[s(" Estatus del sorteo: "),e("span",{class:u(t.status?"bg-green-500 text-white p-1 rounded-2xl":"bg-red-500 text-white p-1 rounded-2xl")},n(t.status?"ACTIVO":"INACTIVO"),3)])]),e("div",R,[e("div",X,[a(m,{href:l.route("raffles.edit",t.id)},{default:i(()=>[a(E,null,{default:i(()=>[a(d($),{style:{width:"20px"}}),s(" Editar ")]),_:1})]),_:2},1032,["href"])]),e("div",Y,[a(T,{onClick:r=>y(t.id,t.title)},{default:i(()=>[a(d(I),{style:{width:"20px"}}),s(" Eliminar ")]),_:2},1032,["onClick"])]),e("div",Z,[e("button",{type:"button",onClick:r=>t.status=v(t.id,t),class:u(t.status?"bg-orange-500 flex w-8 flex-none cursor-pointer rounded-full p-px ring-1 ring-inset ring-gray-900/5 transition-colors duration-200 ease-in-out focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600":"bg-gray-200 flex w-8 flex-none cursor-pointer rounded-full p-px ring-1 ring-inset ring-gray-900/5 transition-colors duration-200 ease-in-out focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"),role:"switch","aria-checked":"false","aria-labelledby":"switch-1-label"},[te,e("span",{"aria-hidden":"true",class:u(t.status?"translate-x-3.5 h-4 w-4 transform rounded-full bg-white shadow-sm ring-1 ring-gray-900/5 transition duration-200 ease-in-out":"translate-x-0 h-4 w-4 transform rounded-full bg-white shadow-sm ring-1 ring-gray-900/5 transition duration-200 ease-in-out")},null,2)],10,ee)])])]))),128))])]),_:1}))}};export{_e as default};
