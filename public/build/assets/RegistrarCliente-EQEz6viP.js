import{T as h,o as a,c as y,w as l,b as n,a as s,f as g,j as t,i,m as d,v as m,e as u,t as c,g as p}from"./app-2IcnOxOv.js";import{_ as v}from"./ClientLayout-B-dpkUYs.js";import"./index-q-LvwgpM.js";import{_}from"./InputLabel-pN8IzQ3I.js";import"./NavLink-Sexf7HNs.js";import"./_plugin-vue_export-helper-x3n3nnut.js";import"./Banner-85N6elia.js";const w={__name:"BarraDePasos",setup(x){return(e,f)=>null}},b={class:""},k={class:"h-full"},V=s("div",{class:"flex justify-center my-2"},[s("span",{class:"box-decoration-slice bg-gradient-to-r from-orange-600 to-pink-500 text-white px-2 text-6xl"}," Ingresa tus datos ")],-1),B={class:"flex justify-center"},N={class:"bg-white rounded-2xl p-4 mx-10"},C={key:0,class:"p-0 m-0 text-red-500"},T={key:1,class:"p-0 m-0 text-red-500"},U={key:2,class:"p-0 m-0 text-red-500"},$={key:3,class:"p-0 m-0 text-red-500"},j=s("button",{class:"w-full text-center ease-in duration-300 bg-green-500 hover:bg-orange-700 shadow-lg shadow-green-500/50 rounded-lg p-2 my-2 text-white text-2xl text-center"}," Guardar mis datos ",-1),P={__name:"RegistrarCliente",setup(x){const e=h({name:null,card_id:null,phone:null,email:null});return(f,o)=>(a(),y(v,{title:"Registrar datos de contacto"},{header:l(()=>[n(w)]),default:l(()=>[s("section",b,[s("div",k,[V,s("div",B,[s("div",N,[s("form",{onSubmit:o[4]||(o[4]=g(r=>t(e).post("/clientes"),["prevent"]))},[n(_,{class:"text-xl"},{default:l(()=>[i("Nombre Completo")]),_:1}),d(s("input",{class:"rounded-2xl my-2 w-full",type:"text","onUpdate:modelValue":o[0]||(o[0]=r=>t(e).name=r)},null,512),[[m,t(e).name]]),t(e).errors.name?(a(),u("div",C,c(t(e).errors.name),1)):p("",!0),n(_,{class:"text-xl"},{default:l(()=>[i("Rif o número de identificación")]),_:1}),d(s("input",{class:"rounded-2xl my-2 w-full",type:"text","onUpdate:modelValue":o[1]||(o[1]=r=>t(e).card_id=r)},null,512),[[m,t(e).card_id]]),t(e).errors.card_id?(a(),u("div",T,c(t(e).errors.card_id),1)):p("",!0),n(_,{class:"text-xl"},{default:l(()=>[i("Teléfono movil")]),_:1}),d(s("input",{class:"rounded-2xl my-2 w-full",type:"text","onUpdate:modelValue":o[2]||(o[2]=r=>t(e).phone=r)},null,512),[[m,t(e).phone]]),t(e).errors.phone?(a(),u("div",U,c(t(e).errors.phone),1)):p("",!0),n(_,{class:"text-xl"},{default:l(()=>[i("E-mail")]),_:1}),d(s("input",{class:"rounded-2xl my-2 w-full",type:"text","onUpdate:modelValue":o[3]||(o[3]=r=>t(e).email=r)},null,512),[[m,t(e).email]]),t(e).errors.email?(a(),u("div",$,c(t(e).errors.email),1)):p("",!0),j],32)])])])])]),_:1}))}};export{P as default};