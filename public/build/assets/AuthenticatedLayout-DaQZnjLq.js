import{_ as f,a as m,b as i}from"./ResponsiveNavLink-fJsPFiiK.js";import{A as v,_ as n}from"./NavLink-Np0Xx6lM.js";import{h as _,o as d,e as l,a as e,b as t,w as a,j as g,z as b,i as o,t as c,n as u,r as p,g as x}from"./app-CZJNTp8v.js";const y={class:"min-h-screen bg-gray-100"},w={class:"bg-orange-600 shadow-lg border-b border-gray-100"},k={class:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"},C={class:"flex justify-between h-16"},$={class:"flex"},M={class:"shrink-0 flex items-center"},P={class:"hidden space-x-8 sm:-my-px sm:ms-10 sm:flex"},j={class:"hidden space-x-8 sm:-my-px sm:ms-10 sm:flex"},B={class:"hidden space-x-8 sm:-my-px sm:ms-10 sm:flex"},N={class:"hidden space-x-8 sm:-my-px sm:ms-10 sm:flex"},S={class:"hidden sm:flex sm:items-center sm:ms-6"},V={class:"ms-3 relative"},z={class:"inline-flex rounded-md"},A={type:"button",class:"inline-flex items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md text-gray-500 bg-white hover:text-gray-700 focus:outline-none transition ease-in-out duration-150"},L=e("svg",{class:"ms-2 -me-0.5 h-4 w-4",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor"},[e("path",{"fill-rule":"evenodd",d:"M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z","clip-rule":"evenodd"})],-1),D={class:"-me-2 flex items-center sm:hidden"},E={class:"h-6 w-6",stroke:"currentColor",fill:"none",viewBox:"0 0 24 24"},T={class:"pt-2 pb-3 space-y-1"},U={class:"pt-2 pb-3 space-y-1"},q={class:"pt-2 pb-3 space-y-1"},F={class:"pt-2 pb-3 space-y-1"},G={class:"pt-2 pb-3 space-y-1"},H={class:"pt-4 pb-1 border-t border-gray-200 text-white"},I={class:"px-4"},J={class:"font-medium text-base"},K={class:"font-medium text-sm text-indigo-100"},O={class:"mt-3 space-y-1"},Q={key:0,class:"bg-white shadow"},R={class:"max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8"},se={__name:"AuthenticatedLayout",setup(W){const r=_(!1);return(s,h)=>(d(),l("div",null,[e("div",y,[e("nav",w,[e("div",k,[e("div",C,[e("div",$,[e("div",M,[t(g(b),{href:s.route("dashboard")},{default:a(()=>[t(v,{class:"block h-9 w-auto fill-current text-gray-800"})]),_:1},8,["href"])]),e("div",P,[t(n,{href:s.route("dashboard"),active:s.route().current("dashboard")},{default:a(()=>[o(" Panel ")]),_:1},8,["href","active"])]),e("div",j,[t(n,{href:s.route("raffles.index"),active:s.route().current("raffles.index")},{default:a(()=>[o(" Sorteos ")]),_:1},8,["href","active"])]),e("div",B,[t(n,{href:s.route("clientes.index"),active:s.route().current("clientes.index")},{default:a(()=>[o(" Clientes ")]),_:1},8,["href","active"])]),e("div",N,[t(n,{href:s.route("pagos.index"),active:s.route().current("pagos.index")},{default:a(()=>[o(" Pagos ")]),_:1},8,["href","active"])])]),e("div",S,[e("div",V,[t(m,{align:"right",width:"48"},{trigger:a(()=>[e("span",z,[e("button",A,[o(c(s.$page.props.auth.user.name)+" ",1),L])])]),content:a(()=>[t(f,{href:s.route("profile.edit")},{default:a(()=>[o(" Perfil ")]),_:1},8,["href"]),t(f,{href:s.route("logout"),method:"post",as:"button"},{default:a(()=>[o(" Cerrar sesión ")]),_:1},8,["href"])]),_:1})])]),e("div",D,[e("button",{onClick:h[0]||(h[0]=X=>r.value=!r.value),class:"inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 focus:text-gray-500 transition duration-150 ease-in-out"},[(d(),l("svg",E,[e("path",{class:u({hidden:r.value,"inline-flex":!r.value}),"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M4 6h16M4 12h16M4 18h16"},null,2),e("path",{class:u({hidden:!r.value,"inline-flex":r.value}),"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M6 18L18 6M6 6l12 12"},null,2)]))])])])]),e("div",{class:u([{block:r.value,hidden:!r.value},"sm:hidden"])},[e("div",T,[t(i,{href:s.route("dashboard"),active:s.route().current("dashboard")},{default:a(()=>[o(" Panel ")]),_:1},8,["href","active"])]),e("div",U,[t(i,{href:s.route("raffles.index"),active:s.route().current("raffles.index")},{default:a(()=>[o(" Sorteos ")]),_:1},8,["href","active"])]),e("div",q,[t(i,{href:s.route("clientes.index"),active:s.route().current("clientes.index")},{default:a(()=>[o(" Clientes ")]),_:1},8,["href","active"])]),e("div",F,[t(i,{href:s.route("pagos.index"),active:s.route().current("pagos.index")},{default:a(()=>[o(" Pagos ")]),_:1},8,["href","active"])]),e("div",G,[t(i,{href:s.route("dashboard"),active:s.route().current("dashboard")},{default:a(()=>[o(" Estadisticas ")]),_:1},8,["href","active"])]),e("div",H,[e("div",I,[e("div",J,c(s.$page.props.auth.user.name.toUpperCase()),1),e("div",K,c(s.$page.props.auth.user.email),1)]),e("div",O,[t(i,{href:s.route("profile.edit"),active:s.route().current("profile.edit")},{default:a(()=>[o(" Perfil ")]),_:1},8,["href","active"]),t(i,{href:s.route("logout"),method:"post",as:"button"},{default:a(()=>[o(" Cerrar sesión ")]),_:1},8,["href"])])])],2)]),s.$slots.header?(d(),l("header",Q,[e("div",R,[p(s.$slots,"header")])])):x("",!0),e("main",null,[p(s.$slots,"default")])])]))}};export{se as _};
