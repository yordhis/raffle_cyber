import{B as w,q as k,T as C,o as d,c as M,w as p,a as o,i as V,b as m,g as x,l as f,s as g,u as t,e as c,t as n,f as _,x as B,h as D,F as T}from"./app-ihMdpKU3.js";import{_ as U}from"./ClientLayout-hBxUc2tx.js";import{_ as y}from"./InputLabel-rCkZft1B.js";import"./NavLink-X_kq0xot.js";import"./_plugin-vue_export-helper-x3n3nnut.js";const{Axios:$,AxiosError:E,CanceledError:P,isCancel:I,CancelToken:A,VERSION:N,all:R,Cancel:S,isAxiosError:j,spread:z,toFormData:F,AxiosHeaders:O,HttpStatusCode:L,formToJSON:q,getAdapter:H,mergeConfig:J}=w,K=Object.freeze(Object.defineProperty({__proto__:null,Axios:$,AxiosError:E,AxiosHeaders:O,Cancel:S,CancelToken:A,CanceledError:P,HttpStatusCode:L,VERSION:N,all:R,default:w,formToJSON:q,getAdapter:H,isAxiosError:j,isCancel:I,mergeConfig:J,spread:z,toFormData:F},Symbol.toStringTag,{value:"Module"})),G=k(K),{default:Q}=G,W="https://exchange.vcoud.com/";function X(u,r="-"){const e={á:"a",é:"e",í:"i",ó:"o",ú:"u"};for(const[h,v]of Object.entries(e))u=u.toLowerCase().replace(h,v).replace(" ",r);return u}function Y(u){return u.split(" ")[0]==="Dólar"&&u!=="Dólar Today"?u==="Dólar Monitor"?"EnParaleloVzla":u.split(" ")[1]:u}async function Z(u,r,e){let h={};const v=await Q.get(W+"coins/latest");try{if(v.status!==200)throw new Error(`Error de comunicación CriptoDolar. Codigo: ${v.status}`);const b=v.data;for(const i of b)if(i.type.includes("bolivar")||i.type.includes("bancove")){const l={title:Y(i.name),price:i.price,price_old:i.priceOld,type:i.type==="bancove"?"bank":"monitor",lastUpdate:i.updatedAt};h[X(l.title)]=l}if(!(u in h))return h;try{const i=h[u.toLowerCase()];if(r){const l=i[r];if(l===void 0)throw new Error("Consulte la documentación de la biblioteca: https://github.com/fcoagz/consulta-dolar-venezuela");return r==="price"&&e?`Bs. ${l}`:l}else return i}catch(i){console.error(`KeyError: ${i.message}`)}}catch(b){console.error(b)}}var ee={getMonitor:Z};const te={class:""},oe={class:"h-full"},ae=o("div",{class:"flex justify-center my-2"},[o("span",{class:"p-2 box-decoration-slice bg-gradient-to-r from-orange-600 to-pink-500 text-white px-2 text-6xl"}," Realizar pago ")],-1),se={class:"flex justify-center flex-wrap"},ne={class:"bg-white rounded-2xl p-4 mx-10 my-5"},re={key:0},le={key:1,class:"p-0 m-0 text-red-500"},de={key:2,class:"p-0 m-0 text-red-500"},ie={key:3,class:"p-0 m-0 text-red-500"},ce={key:4,class:"p-0 m-0 text-red-500"},ue={class:"sm:flex sm:justify-between"},pe={class:"py-2 pr-2"},_e={key:0,class:"p-0 m-0 text-red-500"},me={class:"py-2"},xe={key:0,class:"p-0 m-0 text-red-500"},fe={class:"flex justify-between"},ye={class:"border p-2 mx-2"},ge=o("div",{class:"border p-2 mx-2"},"Costo por voleto: 2$",-1),he={key:5,class:"p-0 m-0 text-red-500"},ve=["value"],be={key:6,class:"p-0 m-0 text-red-500"},we={key:7,class:"p-0 m-0 text-red-500"},ke={key:8,class:"p-0 m-0 text-red-500"},Ce=["value"],Me=o("button",{class:"w-full text-center ease-in duration-300 bg-green-500 hover:bg-orange-700 shadow-lg shadow-green-500/50 rounded-lg p-2 my-2 text-white text-2xl text-center"}," Registrar pago ",-1),Ve={key:0,class:"p-4 m-1 xs:p-0 rounded fixed"},Be={class:"p-6 max-w-sm mx-auto bg-gray-950 rounded-xl shadow-lg flex items-center space-x-0"},De={class:"p-2"},Te=o("div",{class:"text-2xl font-medium text-white text-center"},"Datos del método:",-1),Ue={class:"text-slate-950 text-2xl text-center text-white"},$e={class:"text-slate-300 text-center"},Ee={class:"text-orange-500 text-2xl text-center"},Pe={class:"text-slate-300 text-center"},Ie={class:"text-orange-500 text-2xl text-center"},Ae={class:"text-slate-300 text-center"},Ne={class:"text-orange-500 text-2xl text-center"},Re={class:"text-slate-300 text-center"},Se={class:"text-orange-500 text-2xl text-center"},je={class:"text-slate-300 text-center"},ze={class:"text-orange-500 text-2xl text-center"},Fe={class:"text-slate-300 text-center"},Oe={class:"text-orange-500 text-2xl text-center"},Le={class:"text-center text-white"},Qe={__name:"Pago",setup(u){const r=[{id:1,name:"Pago Movil",phone:"0414-3534569",account:null,account_type:null,bank:"Banco de Venezuela",bank_code:"0102",card_id:"24823972"},{id:2,name:"Transferencia",phone:null,account:"01054578124512456352",account_type:"Corriente",bank:"Banco Mercantil",bank_code:"0105",card_id:"24823972"}],e=C({name:null,card_id:null,phone:null,email:null,raffle_id:1,amount:2,total:0,tasa:0,payment_date:"",payment_method_id:null,file:null,reference_number:null,monitor_tasa:{},rifa:"FERARRI",modalInfoMetodoPago:!1,btnDisabled:!1});(async l=>{await ee.getMonitor("BCV","lastUpdate").then(a=>{l.monitor_tasa=a.bcv,l.tasa=a.bcv.price,l.total=parseFloat(a.bcv.price)*l.amount})})(e);const v=l=>{if(l.amount<2)return l.amount=2;l.total=parseFloat(l.tasa)*l.amount},b=()=>e.modalInfoMetodoPago=!1,i=()=>{console.log(e.payment_method_id),console.log(e.modalInfoMetodoPago),e.modalInfoMetodoPago=!0,console.log(e.modalInfoMetodoPago)};return(l,a)=>(d(),M(U,{title:"Realizar pago"},{header:p(()=>[]),default:p(()=>[o("section",te,[o("div",oe,[ae,o("div",se,[o("div",ne,[o("form",{onSubmit:a[14]||(a[14]=V(s=>t(e).post("/compras"),["prevent"]))},[m(y,{class:"text-xl"},{default:p(()=>[x("Premio")]),_:1}),f(o("input",{class:"rounded-2xl my-2 w-full bg-orange-500 text-center text-2xl",readonly:"",type:"text","onUpdate:modelValue":a[0]||(a[0]=s=>t(e).rifa=s)},null,512),[[g,t(e).rifa]]),f(o("input",{class:"",readonly:"",type:"hidden","onUpdate:modelValue":a[1]||(a[1]=s=>t(e).raffle_id=s)},null,512),[[g,t(e).raffle_id]]),t(e).errors.raffle_id?(d(),c("div",re,n(t(e).errors.raffle_id),1)):_("",!0),m(y,{class:"text-xl"},{default:p(()=>[x("Nombre Completo")]),_:1}),f(o("input",{class:"rounded-2xl my-2 w-full",type:"text","onUpdate:modelValue":a[2]||(a[2]=s=>t(e).name=s)},null,512),[[g,t(e).name]]),t(e).errors.name?(d(),c("div",le,n(t(e).errors.name),1)):_("",!0),m(y,{class:"text-xl"},{default:p(()=>[x("Rif o número de identificación")]),_:1}),f(o("input",{class:"rounded-2xl my-2 w-full",type:"text","onUpdate:modelValue":a[3]||(a[3]=s=>t(e).card_id=s)},null,512),[[g,t(e).card_id]]),t(e).errors.card_id?(d(),c("div",de,n(t(e).errors.card_id),1)):_("",!0),m(y,{class:"text-xl"},{default:p(()=>[x("Teléfono movil")]),_:1}),f(o("input",{class:"rounded-2xl my-2 w-full",type:"text","onUpdate:modelValue":a[4]||(a[4]=s=>t(e).phone=s)},null,512),[[g,t(e).phone]]),t(e).errors.phone?(d(),c("div",ie,n(t(e).errors.phone),1)):_("",!0),m(y,{class:"text-xl"},{default:p(()=>[x("E-mail")]),_:1}),f(o("input",{class:"rounded-2xl my-2 w-full",type:"text","onUpdate:modelValue":a[5]||(a[5]=s=>t(e).email=s)},null,512),[[g,t(e).email]]),t(e).errors.email?(d(),c("div",ce,n(t(e).errors.email),1)):_("",!0),o("div",ue,[o("div",pe,[m(y,{class:"text-xl"},{default:p(()=>[x("Cantidad de voletos")]),_:1}),f(o("input",{class:"w-full rounded-2xl my-2 text-center text-1xl",type:"number",onClick:a[6]||(a[6]=s=>v(t(e))),"onUpdate:modelValue":a[7]||(a[7]=s=>t(e).amount=s)},null,512),[[g,t(e).amount]]),t(e).errors.amount?(d(),c("div",_e,n(t(e).errors.amount),1)):_("",!0)]),o("div",me,[m(y,{class:"text-xl"},{default:p(()=>[x("Monto a cancelar en BS")]),_:1}),f(o("input",{class:"w-full rounded-2xl my-2 text-center",readonly:"",type:"number","onUpdate:modelValue":a[8]||(a[8]=s=>t(e).total=s)},null,512),[[g,t(e).total]]),t(e).errors.total?(d(),c("div",xe,n(t(e).errors.total),1)):_("",!0)])]),o("div",fe,[o("div",ye,"Tasa "+n(t(e).monitor_tasa.title)+": "+n(t(e).tasa)+" Bs",1),ge]),m(y,{class:"text-xl"},{default:p(()=>[x("Fecha de pago")]),_:1}),f(o("input",{class:"rounded-2xl my-2 w-full",type:"date","onUpdate:modelValue":a[9]||(a[9]=s=>t(e).payment_date=s)},null,512),[[g,t(e).payment_date]]),t(e).errors.payment_date?(d(),c("div",he,n(t(e).errors.payment_date),1)):_("",!0),m(y,{class:"text-xl"},{default:p(()=>[x("Método de pago")]),_:1}),f(o("select",{class:"rounded-2xl my-2 w-full",id:"select_metodo_pago","onUpdate:modelValue":a[10]||(a[10]=s=>t(e).payment_method_id=s),onChange:a[11]||(a[11]=s=>i(t(e).payment_method_id))},[(d(),c(T,null,D(r,s=>o("option",{key:s.id,value:s.id,selected:""},n(s.name),9,ve)),64))],544),[[B,t(e).payment_method_id]]),t(e).errors.payment_method_id?(d(),c("div",be,n(t(e).errors.payment_method_id),1)):_("",!0),m(y,{class:"text-xl"},{default:p(()=>[x("Agrega capture o vauche de pago")]),_:1}),o("input",{class:"rounded-2xl my-2 p-4 w-full",accept:"image/*",type:"file",onInput:a[12]||(a[12]=s=>t(e).file=s.target.files[0])},null,32),t(e).errors.file?(d(),c("div",we,n(t(e).errors.file),1)):_("",!0),m(y,{class:"text-xl"},{default:p(()=>[x("Número de referencia del pago")]),_:1}),f(o("input",{class:"rounded-2xl my-2 w-full",type:"number","onUpdate:modelValue":a[13]||(a[13]=s=>t(e).reference_number=s)},null,512),[[g,t(e).reference_number]]),t(e).errors.reference_number?(d(),c("div",ke,n(t(e).errors.reference_number),1)):_("",!0),t(e).progress?(d(),c("progress",{key:9,value:t(e).progress.percentage,max:"100"},n(t(e).progress.percentage)+"% ",9,Ce)):_("",!0),Me],32)]),t(e).modalInfoMetodoPago?(d(),c("div",Ve,[o("div",Be,[o("div",De,[Te,o("p",Ue,n(r[t(e).payment_method_id-1].name),1),o("p",$e,n(r[t(e).payment_method_id-1].phone?"Teléfono":""),1),o("p",Ee,n(r[t(e).payment_method_id-1].phone?r[t(e).payment_method_id-1].phone:""),1),o("p",Pe,n(r[t(e).payment_method_id-1].account?"Cuenta Bancaria":""),1),o("p",Ie,n(r[t(e).payment_method_id-1].account?r[t(e).payment_method_id-1].account:""),1),o("p",Ae,n(r[t(e).payment_method_id-1].account_type?"Tipo de cuenta":""),1),o("p",Ne,n(r[t(e).payment_method_id-1].account_type?r[t(e).payment_method_id-1].account_type:""),1),o("p",Re,n(r[t(e).payment_method_id-1].bank?"Banco":""),1),o("p",Se,n(r[t(e).payment_method_id-1].bank?r[t(e).payment_method_id-1].bank:""),1),o("p",je,n(r[t(e).payment_method_id-1].bank_code?"Código":""),1),o("p",ze,n(r[t(e).payment_method_id-1].bank_code?r[t(e).payment_method_id-1].bank_code:""),1),o("p",Fe,n(r[t(e).payment_method_id-1].card_id?"Documento de identidad":""),1),o("p",Oe,n(r[t(e).payment_method_id-1].card_id?r[t(e).payment_method_id-1].card_id:""),1),o("p",Le,[o("button",{class:"bg-red-600 p-2 m-2 rounded-xl",onClick:a[15]||(a[15]=s=>b())},"Cerrar")])])])])):_("",!0)])])])]),_:1}))}};export{Qe as default};