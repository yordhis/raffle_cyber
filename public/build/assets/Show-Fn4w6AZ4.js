import{_ as p}from"./AppLayout-5x0GdfJM.js";import c from"./DeleteUserForm--ZejHDZV.js";import l from"./LogoutOtherBrowserSessionsForm-Iiw6gZPv.js";import{S as s}from"./SectionBorder-x7UH0mUu.js";import f from"./TwoFactorAuthenticationForm--WsRLAL0.js";import u from"./UpdatePasswordForm-RadtQQrw.js";import _ from"./UpdateProfileInformationForm-Lqp1u27V.js";import{o as e,c as d,w as n,a as i,e as r,b as t,g as a,F as h}from"./app-BKwBw6Bj.js";import"./NavLink-pYRF3fTi.js";import"./_plugin-vue_export-helper-x3n3nnut.js";import"./Banner-sMiC0tXy.js";import"./ResponsiveNavLink-qOriWN8G.js";import"./DangerButton-J6Ip8UTp.js";import"./InputError-3kzRVno5.js";import"./InputLabel-yV-sU3Sj.js";import"./Modal-M3kyMqKu.js";import"./SecondaryButton-GB9fU7Yz.js";import"./TextInput-GSi7My4e.js";import"./ActionMessage-8dFOU1Pr.js";import"./DialogModal-x3k_ZnRp.js";import"./SectionTitle-6dB3Lwl3.js";import"./PrimaryButton-CNwdAQv8.js";const g=i("h2",{class:"font-semibold text-xl text-gray-800 leading-tight"}," Profile ",-1),$={class:"max-w-7xl mx-auto py-10 sm:px-6 lg:px-8"},w={key:0},k={key:1},y={key:2},K={__name:"Show",props:{confirmsTwoFactorAuthentication:Boolean,sessions:Array},setup(m){return(o,x)=>(e(),d(p,{title:"Profile"},{header:n(()=>[g]),default:n(()=>[i("div",null,[i("div",$,[o.$page.props.jetstream.canUpdateProfileInformation?(e(),r("div",w,[t(_,{user:o.$page.props.auth.user},null,8,["user"]),t(s)])):a("",!0),o.$page.props.jetstream.canUpdatePassword?(e(),r("div",k,[t(u,{class:"mt-10 sm:mt-0"}),t(s)])):a("",!0),o.$page.props.jetstream.canManageTwoFactorAuthentication?(e(),r("div",y,[t(f,{"requires-confirmation":m.confirmsTwoFactorAuthentication,class:"mt-10 sm:mt-0"},null,8,["requires-confirmation"]),t(s)])):a("",!0),t(l,{sessions:m.sessions,class:"mt-10 sm:mt-0"},null,8,["sessions"]),o.$page.props.jetstream.hasAccountDeletionFeatures?(e(),r(h,{key:3},[t(s),t(c,{class:"mt-10 sm:mt-0"})],64)):a("",!0)])])]),_:1}))}};export{K as default};
