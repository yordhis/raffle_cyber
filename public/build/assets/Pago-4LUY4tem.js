import{bO as k,o as d,e as i,a as o,bG as C,T as M,c as I,w as m,f as V,j as t,b as u,i as x,q as f,v as h,t as l,g as p,bu as $,k as E,F as B}from"./app-D0LO5Wnf.js";import{_ as D}from"./ClientLayout-UtxXCK20.js";import{_}from"./InputLabel-vSaDj9Nr.js";import{P}from"./PrimaryButton-1fs_vIz9.js";import"./NavLink-qoj8A4UG.js";import"./_plugin-vue_export-helper-x3n3nnut.js";import"./Banner-BfHG-4_P.js";const{Axios:O,AxiosError:T,CanceledError:U,isCancel:j,CancelToken:A,VERSION:S,all:N,Cancel:F,isAxiosError:z,spread:R,toFormData:L,AxiosHeaders:G,HttpStatusCode:H,formToJSON:q,getAdapter:Z,mergeConfig:J}=k,K=Object.freeze(Object.defineProperty({__proto__:null,Axios:O,AxiosError:T,AxiosHeaders:G,Cancel:F,CancelToken:A,CanceledError:U,HttpStatusCode:H,VERSION:S,all:N,default:k,formToJSON:q,getAdapter:Z,isAxiosError:z,isCancel:j,mergeConfig:J,spread:R,toFormData:L},Symbol.toStringTag,{value:"Module"}));function Q(s,y){return d(),i("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor","aria-hidden":"true","data-slot":"icon"},[o("path",{"fill-rule":"evenodd",d:"M4 10a.75.75 0 0 1 .75-.75h10.5a.75.75 0 0 1 0 1.5H4.75A.75.75 0 0 1 4 10Z","clip-rule":"evenodd"})])}function W(s,y){return d(),i("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor","aria-hidden":"true","data-slot":"icon"},[o("path",{d:"M10.75 4.75a.75.75 0 0 0-1.5 0v4.5h-4.5a.75.75 0 0 0 0 1.5h4.5v4.5a.75.75 0 0 0 1.5 0v-4.5h4.5a.75.75 0 0 0 0-1.5h-4.5v-4.5Z"})])}const X=C(K),{default:Y}=X,ee="https://exchange.vcoud.com/";function te(s,y="-"){const e={á:"a",é:"e",í:"i",ó:"o",ú:"u"};for(const[g,b]of Object.entries(e))s=s.toLowerCase().replace(g,b).replace(" ",y);return s}function oe(s){return s.split(" ")[0]==="Dólar"&&s!=="Dólar Today"?s==="Dólar Monitor"?"EnParaleloVzla":s.split(" ")[1]:s}async function ae(s,y,e){let g={};const b=await Y.get(ee+"coins/latest");try{if(b.status!==200)throw new Error(`Error de comunicación CriptoDolar. Codigo: ${b.status}`);const w=b.data;for(const c of w)if(c.type.includes("bolivar")||c.type.includes("bancove")){const v={title:oe(c.name),price:c.price,price_old:c.priceOld,type:c.type==="bancove"?"bank":"monitor",lastUpdate:c.updatedAt};g[te(v.title)]=v}if(!(s in g))return g;try{const c=g[s.toLowerCase()];if(y){const v=c[y];if(v===void 0)throw new Error("Consulte la documentación de la biblioteca: https://github.com/fcoagz/consulta-dolar-venezuela");return y==="price"&&e?`Bs. ${v}`:v}else return c}catch(c){console.error(`KeyError: ${c.message}`)}}catch(w){console.error(w)}}var se={getMonitor:ae};const ne={class:""},le={class:"h-full"},re=o("div",{class:"flex justify-center my-2"},[o("span",{class:"p-2 box-decoration-slice bg-gradient-to-r from-orange-600 to-pink-500 text-white px-2 text-6xl"}," Realizar pago ")],-1),de={class:"flex justify-center flex-wrap"},ie={class:"bg-white rounded-2xl p-4 mx-10 my-5"},ce={key:0},me={key:1,class:"p-0 m-0 text-red-500"},ue={key:2,class:"p-0 m-0 text-red-500"},pe={key:3,class:"p-0 m-0 text-red-500"},xe={key:4,class:"p-0 m-0 text-red-500"},fe={class:"sm:flex sm:justify-between"},_e={class:"py-2 pr-2"},ye={key:0,class:"p-0 m-0 text-red-500"},he={class:"xs:flex xs:justify-between sm:invisible"},ge={class:"py-2"},ve={key:0,class:"p-0 m-0 text-red-500"},be={class:"flex justify-between"},we={class:"border p-2 mx-2"},Pe=o("div",{class:"border p-2 mx-2"},"Costo por voleto: 2$",-1),ke={key:5,class:"p-0 m-0 text-red-500"},Ce=o("option",{disabled:"",value:"0"},"SELECCIONE MÉTODO DE PAGO",-1),Me=["value"],Ie={key:6,class:"p-0 m-0 text-red-500"},Ve={key:8,class:"p-0 m-0 text-red-500"},$e={key:9,class:"p-0 m-0 text-red-500"},Ee=["value"],Be=o("button",{class:"w-full text-center ease-in duration-300 bg-green-500 hover:bg-orange-700 shadow-lg shadow-green-500/50 rounded-lg p-2 my-2 text-white text-2xl"}," NOTIFICAR PAGO ",-1),De={key:0,class:"p-4 m-5 xs:p-0 rounded fixed top-10"},Oe={class:"p-6 max-w-sm mx-auto bg-gray-950 rounded-xl shadow-lg flex items-center space-x-0"},Te={class:"p-2"},Ue=o("div",{class:"text-2xl font-medium text-white text-center"},"Datos del método:",-1),je={class:"text-slate-950 text-2xl text-center text-white"},Ae={class:"text-slate-300 text-center"},Se={class:"text-orange-500 text-2xl text-center"},Ne={class:"text-slate-300 text-center"},Fe={class:"text-orange-500 text-2xl text-center"},ze={class:"text-slate-300 text-center"},Re={class:"text-orange-500 text-2xl text-center"},Le={class:"text-slate-300 text-center"},Ge={class:"text-orange-500 text-2xl text-center"},He={class:"text-slate-300 text-center"},qe={class:"text-orange-500 text-2xl text-center"},Ze={class:"text-slate-300 text-center"},Je={class:"text-orange-500 text-2xl text-center"},Ke={class:"text-slate-300 text-center"},Qe={class:"text-orange-500 text-2xl text-center"},We={class:"text-center text-white"},nt={__name:"Pago",props:{raffle:{type:Object},methodPayments:{type:Object}},setup(s){const y=s,e=M({name:null,card_id:null,phone:null,email:null,raffle_id:y.raffle.id,amount:2,total:0,tasa:0,payment_date:"",payment_method_id:0,file:null,reference_number:null,monitor_tasa:{},sorteo:y.raffle.title,modalInfoMetodoPago:!1,btnDisabled:!1}),g=async r=>{await se.getMonitor("BCV","lastUpdate").then(a=>{r.monitor_tasa=a.bcv,localStorage.setItem("tasa",a.bcv.price)}).catch(a=>{console.log(a),g(r)}),r.tasa==0?r.tasa=parseFloat(localStorage.getItem("tasa")):r.tasa,r.total=parseFloat(r.tasa)*r.amount};g(e);const b=r=>{if(r.amount<2)return r.amount=2;r.total=parseFloat(r.tasa)*r.amount},w=()=>e.modalInfoMetodoPago=!1,c=r=>{r?e.modalInfoMetodoPago=!0:e.modalInfoMetodoPago=!1},v=r=>{switch(r){case"+":e.amount++;break;case"-":e.amount--;break;default:e.amount=2;break}b(e)};return(r,a)=>(d(),I(D,{title:"Realizar pago"},{header:m(()=>[]),default:m(()=>[o("section",ne,[o("div",le,[re,o("div",de,[o("div",ie,[o("form",{onSubmit:a[17]||(a[17]=V(n=>t(e).post("/compras"),["prevent"]))},[u(_,{class:"text-xl"},{default:m(()=>[x("Premio")]),_:1}),f(o("input",{class:"rounded-2xl my-2 w-full bg-orange-500 text-center text-2xl",readonly:"",type:"text","onUpdate:modelValue":a[0]||(a[0]=n=>t(e).sorteo=n)},null,512),[[h,t(e).sorteo]]),f(o("input",{class:"",readonly:"",type:"hidden","onUpdate:modelValue":a[1]||(a[1]=n=>t(e).raffle_id=n)},null,512),[[h,t(e).raffle_id]]),t(e).errors.raffle_id?(d(),i("div",ce,l(t(e).errors.raffle_id),1)):p("",!0),u(_,{class:"text-xl"},{default:m(()=>[x("Nombre Completo")]),_:1}),f(o("input",{class:"rounded-2xl my-2 w-full",type:"text","onUpdate:modelValue":a[2]||(a[2]=n=>t(e).name=n),placeholder:"Ingrese nombre completo"},null,512),[[h,t(e).name]]),t(e).errors.name?(d(),i("div",me,l(t(e).errors.name),1)):p("",!0),u(_,{class:"text-xl"},{default:m(()=>[x("Rif o número de identificación")]),_:1}),f(o("input",{class:"rounded-2xl my-2 w-full",type:"text","onUpdate:modelValue":a[3]||(a[3]=n=>t(e).card_id=n),placeholder:"Ingrese número de identificación"},null,512),[[h,t(e).card_id]]),t(e).errors.card_id?(d(),i("div",ue,l(t(e).errors.card_id),1)):p("",!0),u(_,{class:"text-xl"},{default:m(()=>[x("Teléfono movil")]),_:1}),f(o("input",{class:"rounded-2xl my-2 w-full",type:"text","onUpdate:modelValue":a[4]||(a[4]=n=>t(e).phone=n),placeholder:"Ingrese número contacto"},null,512),[[h,t(e).phone]]),t(e).errors.phone?(d(),i("div",pe,l(t(e).errors.phone),1)):p("",!0),u(_,{class:"text-xl"},{default:m(()=>[x("E-mail")]),_:1}),f(o("input",{class:"rounded-2xl my-2 w-full",type:"text","onUpdate:modelValue":a[5]||(a[5]=n=>t(e).email=n),placeholder:"Ingrese correo electrónico"},null,512),[[h,t(e).email]]),t(e).errors.email?(d(),i("div",xe,l(t(e).errors.email),1)):p("",!0),o("div",fe,[o("div",_e,[u(_,{class:"text-xl"},{default:m(()=>[x("Cantidad de voletos")]),_:1}),f(o("input",{class:"w-full rounded-2xl sm:my-2 text-center text-1xl",type:"number",onInput:a[6]||(a[6]=n=>b(t(e))),"onUpdate:modelValue":a[7]||(a[7]=n=>t(e).amount=n)},null,544),[[h,t(e).amount]]),t(e).errors.amount?(d(),i("div",ye,l(t(e).errors.amount),1)):p("",!0)]),o("div",he,[u(P,{type:"button",class:"mx-10 sm:h-5",onClick:a[8]||(a[8]=n=>v("+"))},{default:m(()=>[u(t(W),{style:{width:"18px"}})]),_:1}),u(P,{type:"button",class:"mx-10 sm:h-5",onClick:a[9]||(a[9]=n=>v("-"))},{default:m(()=>[u(t(Q),{style:{width:"18px"}})]),_:1})]),o("div",ge,[u(_,{class:"text-xl"},{default:m(()=>[x("Monto a cancelar en BS")]),_:1}),f(o("input",{class:"w-full rounded-2xl my-2 text-center",readonly:"",type:"number","onUpdate:modelValue":a[10]||(a[10]=n=>t(e).total=n)},null,512),[[h,t(e).total]]),t(e).errors.total?(d(),i("div",ve,l(t(e).errors.total),1)):p("",!0)])]),o("div",be,[o("div",we,"Tasa "+l(t(e).monitor_tasa.title)+": "+l(t(e).tasa)+" Bs",1),Pe]),u(_,{class:"text-xl"},{default:m(()=>[x("Fecha de pago")]),_:1}),f(o("input",{class:"rounded-2xl my-2 w-full",type:"date","onUpdate:modelValue":a[11]||(a[11]=n=>t(e).payment_date=n)},null,512),[[h,t(e).payment_date]]),t(e).errors.payment_date?(d(),i("div",ke,l(t(e).errors.payment_date),1)):p("",!0),u(_,{class:"text-xl"},{default:m(()=>[x("Método de pago")]),_:1}),f(o("select",{class:"rounded-2xl my-2 w-full",id:"select_metodo_pago","onUpdate:modelValue":a[12]||(a[12]=n=>t(e).payment_method_id=n),onChange:a[13]||(a[13]=n=>c(t(e).payment_method_id))},[Ce,(d(!0),i(B,null,E(s.methodPayments,n=>(d(),i("option",{key:n.id,value:n.id},l(n.name),9,Me))),128))],544),[[$,t(e).payment_method_id]]),t(e).errors.payment_method_id?(d(),i("div",Ie,l(t(e).errors.payment_method_id),1)):p("",!0),t(e).modalInfoMetodoPago?p("",!0):(d(),i("button",{key:7,type:"button",onClick:a[14]||(a[14]=n=>c(t(e).payment_method_id)),class:"w-full text-center ease-in duration-300 bg-gray-950 hover:bg-orange-700 shadow-lg shadow-green-500/50 rounded-lg p-2 my-2 text-white text-sm text-center"}," Ver datos de pago ")),u(_,{class:"text-xl"},{default:m(()=>[x("Agrega capture o vauche de pago")]),_:1}),o("input",{class:"rounded-2xl my-2 p-4 w-full block w-full text-sm text-slate-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-green-50 file:text-black-700 hover:file:bg-orange-100",accept:"image/*",type:"file",onInput:a[15]||(a[15]=n=>t(e).file=n.target.files[0])},null,32),t(e).errors.file?(d(),i("div",Ve,l(t(e).errors.file),1)):p("",!0),u(_,{class:"text-xl"},{default:m(()=>[x("Número de referencia del pago")]),_:1}),f(o("input",{class:"rounded-2xl my-2 w-full",type:"number","onUpdate:modelValue":a[16]||(a[16]=n=>t(e).reference_number=n),placeholder:"Ingrese número de referencia"},null,512),[[h,t(e).reference_number]]),t(e).errors.reference_number?(d(),i("div",$e,l(t(e).errors.reference_number),1)):p("",!0),t(e).progress?(d(),i("progress",{key:10,value:t(e).progress.percentage,class:"w-full",max:"100"},l(t(e).progress.percentage)+"% ",9,Ee)):p("",!0),Be],32)]),t(e).modalInfoMetodoPago?(d(),i("div",De,[o("div",Oe,[o("div",Te,[Ue,o("p",je,l(s.methodPayments[t(e).payment_method_id-1].name),1),o("p",Ae,l(s.methodPayments[t(e).payment_method_id-1].phone?"Teléfono":""),1),o("p",Se,l(s.methodPayments[t(e).payment_method_id-1].phone?s.methodPayments[t(e).payment_method_id-1].phone:""),1),o("p",Ne,l(s.methodPayments[t(e).payment_method_id-1].account?"Cuenta Bancaria":""),1),o("p",Fe,l(s.methodPayments[t(e).payment_method_id-1].account?s.methodPayments[t(e).payment_method_id-1].account:""),1),o("p",ze,l(s.methodPayments[t(e).payment_method_id-1].account_type?"Tipo de cuenta":""),1),o("p",Re,l(s.methodPayments[t(e).payment_method_id-1].account_type?s.methodPayments[t(e).payment_method_id-1].account_type:""),1),o("p",Le,l(s.methodPayments[t(e).payment_method_id-1].bank?"Banco":""),1),o("p",Ge,l(s.methodPayments[t(e).payment_method_id-1].bank?s.methodPayments[t(e).payment_method_id-1].bank:""),1),o("p",He,l(s.methodPayments[t(e).payment_method_id-1].bank_code?"Código":""),1),o("p",qe,l(s.methodPayments[t(e).payment_method_id-1].bank_code?s.methodPayments[t(e).payment_method_id-1].bank_code:""),1),o("p",Ze,l(s.methodPayments[t(e).payment_method_id-1].card_id?"Documento de identidad":""),1),o("p",Je,l(s.methodPayments[t(e).payment_method_id-1].card_id?s.methodPayments[t(e).payment_method_id-1].card_id:""),1),o("p",Ke,l(s.methodPayments[t(e).payment_method_id-1].titular?"Titular":""),1),o("p",Qe,l(s.methodPayments[t(e).payment_method_id-1].titular?s.methodPayments[t(e).payment_method_id-1].titular:""),1),o("p",We,[o("button",{class:"bg-red-600 p-2 m-2 rounded-xl",onClick:a[18]||(a[18]=n=>w())},"Cerrar")])])])])):p("",!0)])])])]),_:1}))}};export{nt as default};