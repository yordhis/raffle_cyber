import{A as p,_ as d,b as f,a as v}from"./NavLink-giwlmuyC.js";import{_ as i}from"./ResponsiveNavLink-jw_7uw7I.js";import{h as _,o as n,e as l,a as e,b as t,w as o,j as g,s as b,i as a,t as h,n as u,r as m,g as x}from"./app-I8GZrc-a.js";const y={class:"min-h-screen bg-gray-100"},w={class:"bg-orange-600 shadow-lg border-b border-gray-100"},k={class:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"},$={class:"flex justify-between h-16"},C={class:"flex"},M={class:"shrink-0 flex items-center"},P={class:"hidden space-x-8 sm:-my-px sm:ms-10 sm:flex"},j={class:"hidden space-x-8 sm:-my-px sm:ms-10 sm:flex"},B={class:"hidden space-x-8 sm:-my-px sm:ms-10 sm:flex"},N={class:"hidden space-x-8 sm:-my-px sm:ms-10 sm:flex"},L={class:"hidden space-x-8 sm:-my-px sm:ms-10 sm:flex"},S={class:"hidden sm:flex sm:items-center sm:ms-6"},V={class:"ms-3 relative"},A={class:"inline-flex rounded-md"},E={type:"button",class:"inline-flex items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md text-gray-500 bg-white hover:text-gray-700 focus:outline-none transition ease-in-out duration-150"},z=e("svg",{class:"ms-2 -me-0.5 h-4 w-4",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor"},[e("path",{"fill-rule":"evenodd",d:"M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z","clip-rule":"evenodd"})],-1),D={class:"-me-2 flex items-center sm:hidden"},O={class:"h-6 w-6",stroke:"currentColor",fill:"none",viewBox:"0 0 24 24"},T={class:"pt-2 pb-3 space-y-1"},q={class:"pt-2 pb-3 space-y-1"},F={class:"pt-2 pb-3 space-y-1"},G={class:"pt-2 pb-3 space-y-1"},H={class:"pt-2 pb-3 space-y-1"},I={class:"pt-4 pb-1 border-t border-gray-200"},J={class:"px-4"},K={class:"font-medium text-base text-gray-800"},Q={class:"font-medium text-sm text-gray-500"},R={class:"mt-3 space-y-1"},U={key:0,class:"bg-white shadow"},W={class:"max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8"},te={__name:"AuthenticatedLayout",setup(X){const r=_(!1);return(s,c)=>(n(),l("div",null,[e("div",y,[e("nav",w,[e("div",k,[e("div",$,[e("div",C,[e("div",M,[t(g(b),{href:s.route("dashboard")},{default:o(()=>[t(p,{class:"block h-9 w-auto fill-current text-gray-800"})]),_:1},8,["href"])]),e("div",P,[t(d,{href:s.route("dashboard"),active:s.route().current("dashboard")},{default:o(()=>[a(" Panel ")]),_:1},8,["href","active"])]),e("div",j,[t(d,{href:s.route("sorteos.index"),active:s.route().current("sorteos.index")},{default:o(()=>[a(" Sorteos ")]),_:1},8,["href","active"])]),e("div",B,[t(d,{href:s.route("sorteos.index"),active:s.route().current("sorteos.index")},{default:o(()=>[a(" Clientes ")]),_:1},8,["href","active"])]),e("div",N,[t(d,{href:s.route("sorteos.index"),active:s.route().current("sorteos.index")},{default:o(()=>[a(" Pagos ")]),_:1},8,["href","active"])]),e("div",L,[t(d,{href:s.route("sorteos.index"),active:s.route().current("sorteos.index")},{default:o(()=>[a(" Estadisticas ")]),_:1},8,["href","active"])])]),e("div",S,[e("div",V,[t(v,{align:"right",width:"48"},{trigger:o(()=>[e("span",A,[e("button",E,[a(h(s.$page.props.auth.user.name)+" ",1),z])])]),content:o(()=>[t(f,{href:s.route("profile.edit")},{default:o(()=>[a(" Perfil ")]),_:1},8,["href"]),t(f,{href:s.route("logout"),method:"post",as:"button"},{default:o(()=>[a(" Cerrar sesión ")]),_:1},8,["href"])]),_:1})])]),e("div",D,[e("button",{onClick:c[0]||(c[0]=Y=>r.value=!r.value),class:"inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 focus:text-gray-500 transition duration-150 ease-in-out"},[(n(),l("svg",O,[e("path",{class:u({hidden:r.value,"inline-flex":!r.value}),"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M4 6h16M4 12h16M4 18h16"},null,2),e("path",{class:u({hidden:!r.value,"inline-flex":r.value}),"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M6 18L18 6M6 6l12 12"},null,2)]))])])])]),e("div",{class:u([{block:r.value,hidden:!r.value},"sm:hidden"])},[e("div",T,[t(i,{href:s.route("dashboard"),active:s.route().current("dashboard")},{default:o(()=>[a(" Panel ")]),_:1},8,["href","active"])]),e("div",q,[t(i,{href:s.route("dashboard"),active:s.route().current("dashboard")},{default:o(()=>[a(" Sorteos ")]),_:1},8,["href","active"])]),e("div",F,[t(i,{href:s.route("dashboard"),active:s.route().current("dashboard")},{default:o(()=>[a(" Clientes ")]),_:1},8,["href","active"])]),e("div",G,[t(i,{href:s.route("dashboard"),active:s.route().current("dashboard")},{default:o(()=>[a(" Pagos ")]),_:1},8,["href","active"])]),e("div",H,[t(i,{href:s.route("dashboard"),active:s.route().current("dashboard")},{default:o(()=>[a(" Estadisticas ")]),_:1},8,["href","active"])]),e("div",I,[e("div",J,[e("div",K,h(s.$page.props.auth.user.name),1),e("div",Q,h(s.$page.props.auth.user.email),1)]),e("div",R,[t(i,{href:s.route("profile.edit")},{default:o(()=>[a(" Profile ")]),_:1},8,["href"]),t(i,{href:s.route("logout"),method:"post",as:"button"},{default:o(()=>[a(" Log Out ")]),_:1},8,["href"])])])],2)]),s.$slots.header?(n(),l("header",U,[e("div",W,[m(s.$slots,"header")])])):x("",!0),e("main",null,[m(s.$slots,"default")])])]))}};export{te as _};