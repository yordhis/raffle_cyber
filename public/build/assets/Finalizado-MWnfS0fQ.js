import{_ as d}from"./ClientLayout-yrFUYq2r.js";import{T as f,o as u,c as g,w as x,a as t,t as b,b as _}from"./app-WcMOtTmY.js";import{_ as h}from"./BarraDePorcentaje-nDkRk3Xi.js";import"https://cdn.jsdelivr.net/npm/canvas-confetti@1.9.2/dist/confetti.browser.min.js";import"./ResponsiveNavLink-cL23kaWm.js";import"./_plugin-vue_export-helper-x3n3nnut.js";import"./Banner-a4n2TWXW.js";const C={class:"flex-colum justify-center text-center p-4"},v=t("h1",{class:"mt-10 text-4xl text-white"},"¡Ya casi estas participando! ",-1),w={class:"box-decoration-slice bg-gradient-to-r from-orange-600 to-pink-500 text-white px-2 text-4xl"},y=t("p",{class:"text-orange-400 text-2xl"}," Verificaremos tu pago y al corfirmar tu pago te enviaremos tus ¡BOLETOS GANADORES! al correo sumistrado. ",-1),$={__name:"Finalizado",props:{compra:{type:Object}},setup(o){const r=f({idRaffle:o.compra.data.raffle_id});confetti.shapeFromPath({path:"M0 10 L5 0 L10 10z"});let e=2,i=confetti.shapeFromText({text:"🥳",scalar:e}),l=confetti.shapeFromText({text:"🎉",scalar:e});function s(n){confetti({particleCount:100,angle:90,startVelocity:45}),confetti({particleCount:100,angle:150,startVelocity:45}),confetti({shapes:[i],scalar:e,angle:counter}),confetti({shapes:[l],scalar:e,angle:counter})}s();function c(n){s()}function m(){r.get(route("compras.comprar",r.idRaffle))}return(n,a)=>(u(),g(d,{title:"Finalizado"},{default:x(()=>[t("div",C,[v,t("span",w,b(o.compra.client.name.toUpperCase()),1),y,t("button",{onClick:a[0]||(a[0]=p=>c(45)),class:"p-4 mt-2 bg-orange-600 rounded-xl shadow-sm hover:bg-neutral-900 sm:border"}," 🥳 ¡Mas confeti! 🥳 "),t("button",{onClick:a[1]||(a[1]=p=>m()),class:"p-4 mt-2 bg-orange-600 border-collapse rounded-xl shadow-sm hover:bg-neutral-900 sm:border"}," 🎟️ ¡Comprar mas boletos! 🎟️ "),_(h,{title:"¡Total de boletos vendidos!",limit_number:o.compra.sorteo.limit_number,total_sold:o.compra.sorteo.total_sold},null,8,["limit_number","total_sold"])])]),_:1}))}};export{$ as default};
