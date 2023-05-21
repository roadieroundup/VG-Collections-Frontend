import{j as e,F as N,M as Qe,a as l,B as E,T as v,G as o,R as Ae,b as V,c as S,d as Ke,e as J,A as Ge,f as Xe,L as Oe,g as et,h as tt,C as Q,i as de,k as it,l as ue,I as K,m as nt,u as j,n as rt,o as at,p as ot,q as st,r as lt,s as ct,t as dt,v as ut,w as se,x as le,y as mt,D as ae,z as Ee,E as ht,S as gt,H as pt,J as ft,K as yt,N as xt,O as vt,P as Lt}from"./@mui-f5ddacd1.js";import{r as A,a as Ct}from"./react-0837b3d1.js";import{c as wt}from"./react-dom-a43833d1.js";import{u as re,a as me,P as St}from"./react-redux-eec0bc74.js";import{L as bt,B as Mt}from"./react-router-dom-05bdfec5.js";import{o as kt}from"./jwt-decode-9c18df67.js";import{a as Rt}from"./axios-aba6f0e0.js";import{c as he,a as Pt}from"./@reduxjs-857b09f5.js";import"./hoist-non-react-statics-691fe6cb.js";import"./react-is-1aacdabe.js";import{a as H,d as ge,b as Tt,e as It,f as W,N as At}from"./react-router-36f4361a.js";import{u as q,C as Gt}from"./react-hook-form-9198ff18.js";import{A as Ot,m as $}from"./framer-motion-b9b04a6b.js";import"./@babel-aaa9e0cc.js";import"./@emotion-795bba8a.js";import"./stylis-581c9ed0.js";import"./clsx-1229b3e0.js";import"./react-transition-group-f05bfd49.js";import"./scheduler-04ce0582.js";import"./use-sync-external-store-9bb6e506.js";import"./@remix-run-35d41228.js";import"./immer-b106be54.js";import"./redux-c80fd828.js";import"./redux-thunk-ef899f4c.js";import"./hey-listen-f307a282.js";(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))a(s);new MutationObserver(s=>{for(const d of s)if(d.type==="childList")for(const m of d.addedNodes)m.tagName==="LINK"&&m.rel==="modulepreload"&&a(m)}).observe(document,{childList:!0,subtree:!0});function i(s){const d={};return s.integrity&&(d.integrity=s.integrity),s.referrerpolicy&&(d.referrerPolicy=s.referrerpolicy),s.crossorigin==="use-credentials"?d.credentials="include":s.crossorigin==="anonymous"?d.credentials="omit":d.credentials="same-origin",d}function a(s){if(s.ep)return;s.ep=!0;const d=i(s);fetch(s.href,d)}})();const X=({children:t,title:n="",isOpen:i,closeModal:a})=>e(N,{children:e(Ot,{children:i&&e(Qe,{open:i,onClose:a,"aria-labelledby":"modal-modal-title","aria-describedby":"modal-modal-description",component:$.div,initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},transition:{duration:.2},children:l(E,{sx:{position:"absolute",top:"50%",left:"50%",transform:"translate(-50%, -50%)",width:350,bgcolor:"elevation.4",borderRadius:3,boxShadow:24,p:4},children:[e(v,{variant:"h5",sx:{mb:1},className:"gradient-text",textAlign:"center",children:n}),t]})})})}),Et=()=>({VITE_API_URL:{VITE_API_URL:"https://vg-collections-backend-production.up.railway.app/api",BASE_URL:"/VG-Collections-Frontend/",MODE:"production",DEV:!1,PROD:!0}}),{VITE_API_URL:Vt}=Et();localStorage.getItem("accessToken");localStorage.getItem("refreshToken");const O=Rt.create({baseURL:Vt.VITE_API_URL});O.interceptors.request.use(t=>(t.headers={...t.headers},t));const Ve=he({name:"auth",initialState:{status:"checking",user:{}},reducers:{onChecking:t=>{t.status="checking",t.user={}},onLogin:(t,{payload:n})=>{t.status="authenticated",t.user=n,t.errorMessage=void 0},onLogout:t=>{t.status="unauthenticated",t.user={}},onUpdateUserProfile:(t,{payload:n})=>{t.user=n},onClearUserProfile:t=>{t.user={}}}}),{onChecking:Le,onLogin:ie,onLogout:F,onUpdateUserProfile:ln,onClearUserProfile:Dt}=Ve.actions,De=he({name:"collection",initialState:{gameResults:[],isAddGameModalOpen:void 0,tempList:[],activeGame:{},vgList:{},profile:{}},reducers:{onLoadGameResults:(t,n)=>{t.gameResults=n.payload},onClearGameResults:t=>{t.gameResults=[]},onOpenAddGameModal:(t,n)=>{t.isAddGameModalOpen=n.payload},onCloseAddGameModal:t=>{t.isAddGameModalOpen=void 0},onSetTempList:(t,n)=>{t.tempList=n.payload},onAddGameToTempList:(t,n)=>{t.tempList.push(n.payload)},onRemoveGameInTempList:(t,n)=>{t.tempList=t.tempList.filter(i=>i.id!==n.payload)},onClearTempList:t=>{t.tempList=[]},onSetActiveGame:(t,n)=>{t.activeGame=n.payload},onClearActiveGame:t=>{t.activeGame={}},onSetVgList:(t,n)=>{t.vgList=n.payload},onClearVgList:t=>{t.vgList={}},onChangeSortVgList:(t,n)=>{t.vgList.is_sorted=n.payload},onSetProfile:(t,n)=>{t.profile=n.payload},onClearProfile:t=>{t.profile={}}}}),{onLoadGameResults:jt,onClearGameResults:Ce,onOpenAddGameModal:Bt,onCloseAddGameModal:_t,onSetTempList:$t,onAddGameToTempList:we,onRemoveGameInTempList:Se,onClearTempList:be,onSetActiveGame:Nt,onClearActiveGame:Ut,onSetVgList:ne,onClearVgList:Me,onChangeSortVgList:cn,onSetProfile:zt,onClearProfile:ke}=De.actions,je=he({name:"ui",initialState:{isRegisterModalOpen:!1,isLoginModalOpen:!1,isEditProfileModalOpen:!1,homePageGames:[],homeBgImage:"",tempAvatar:void 0,currentResultsPage:0,currentYourListPage:0,isDeleteListModalOpen:!1,ok:void 0,message:""},reducers:{onOpenRegisterModal:t=>{t.isRegisterModalOpen=!0},onCloseRegisterModal:t=>{t.isRegisterModalOpen=!1},onOpenLoginModal:t=>{t.isLoginModalOpen=!0},onCloseLoginModal:t=>{t.isLoginModalOpen=!1},onOpenEditProfileModal:t=>{t.isEditProfileModalOpen=!0},onCloseEditProfileModal:t=>{t.isEditProfileModalOpen=!1,t.tempAvatar=void 0},onLoadHomePageGames:(t,n)=>{t.homePageGames=n.payload},onSetHomeBgImage:(t,n)=>{t.homeBgImage=n.payload},onSetTempAvatar:(t,n)=>{t.tempAvatar=n.payload},onSetCurrentResultsPage:(t,n)=>{t.currentResultsPage=n.payload},onSetCurrentYourListPage:(t,n)=>{t.currentYourListPage=n.payload},onResetCurrentResultsPage:t=>{t.currentResultsPage=0},onResetCurrentYourListPage:t=>{t.currentYourListPage=0},onOpenDeleteListModal:t=>{t.isDeleteListModalOpen=!0},onCloseDeleteListModal:t=>{t.isDeleteListModalOpen=!1},onSetOk:(t,n)=>{t.ok=n.payload},onResetOk:t=>{t.ok=void 0},onSetMessage:(t,n)=>{t.message=n.payload},onResetMessage:t=>{t.message=""}}}),{onOpenRegisterModal:Ht,onCloseRegisterModal:Be,onOpenLoginModal:qt,onCloseLoginModal:_e,onOpenEditProfileModal:$e,onCloseEditProfileModal:Yt,onLoadHomePageGames:Re,onSetHomeBgImage:Pe,onSetTempAvatar:Wt,onSetCurrentResultsPage:Ft,onSetCurrentYourListPage:Zt,onResetCurrentResultsPage:Jt,onResetCurrentYourListPage:Qt,onOpenDeleteListModal:Kt,onCloseDeleteListModal:Ne,onSetOk:T,onResetOk:I,onSetMessage:w,onResetMessage:R}=je.actions,Xt=Pt({reducer:{ui:je.reducer,auth:Ve.reducer,collection:De.reducer}}),U=()=>{const{status:t,user:n}=re(h=>h.auth),i=me(),a=H();return{status:t,user:n,checkAuthToken:async()=>{const h=localStorage.getItem("accessToken"),g=localStorage.getItem("refreshToken"),c=g?kt(g):null;if(!h||!g){localStorage.clear(),i(F());return}if(c.exp<Date.now()/1e3){localStorage.clear(),i(F()),i(w("Session expired")),i(T(!1)),setTimeout(()=>{i(R()),i(I())},5e3);return}else try{const{data:u}=await O.post("/auth/renew",{refreshToken:`${g}`});localStorage.setItem("accessToken",u.accessToken),localStorage.setItem("refreshToken",u.refreshToken),i(ie({id:u.id,name:u.name,username:u.username,email:u.email,bio:u.bio,image_url:u.image_url}));return}catch{localStorage.clear(),i(F());return}},startRegister:async({username:h,email:g,password:c})=>{i(Le());try{const{data:u}=await O.post("/auth/create",{username:h,email:g,password:c});u.ok===!0&&(localStorage.setItem("accessToken",u.accessToken),localStorage.setItem("refreshToken",u.refreshToken),i(ie({id:u.id,name:u.name,username:u.username,email:u.email,bio:u.bio,image_url:u.image_url})),i(Be()),a(`/profile/${u.id}`),i($e()),i(w("Welcome to VGC!")),i(T(!0)),setTimeout(()=>{i(I()),i(R())},3500))}catch(u){i(F()),i(w(u.response.data.message)),setTimeout(()=>{i(R())},3e3)}},startLogin:async({email:h,password:g})=>{i(Le());try{const{data:c}=await O.post("/auth/login",{email:h,password:g});c.ok===!0&&(localStorage.setItem("accessToken",c.accessToken),localStorage.setItem("refreshToken",c.refreshToken),i(ie({id:c.id,name:c.name,username:c.username,email:c.email,bio:c.bio,image_url:c.image_url})),a(`/profile/${c.id}`),i(_e()),i(w("Welcome back!")),i(T(!0)),setTimeout(()=>{i(I()),i(R())},3500))}catch(c){i(F()),i(w(c.response.data.message)),setTimeout(()=>{i(R())},2500)}},startLogout:()=>{localStorage.clear(),i(F()),a("/"),i(w("Logged out!")),i(T(!0)),setTimeout(()=>{i(I()),i(R())},3500)},startUpdateProfile:async({name:h,bio:g,image:c})=>{const u=new FormData;c&&u.append("image",c[0]),u.append("name",h),u.append("bio",g);try{const{data:y}=await O.put(`/auth/update/${n.id}`,u,{headers:{Authorization:`Bearer ${localStorage.getItem("accessToken")}`}});i(Dt()),i(ie({id:y.id,name:y.name,username:y.username,email:y.email,bio:y.bio,image_url:y.image_url})),window.location.reload(),i(T(!0)),i(w("Profile updated!")),setTimeout(()=>{i(I()),i(R())},3500)}catch(y){i(T(!1)),i(w(y.response.data.message)),setTimeout(()=>{i(I()),i(R())},3500)}}}},b=()=>{const{isRegisterModalOpen:t,isLoginModalOpen:n,isEditProfileModalOpen:i,homePageGames:a,homeBgImage:s,tempAvatar:d,currentResultsPage:m,currentYourListPage:p,isDeleteListModalOpen:r,ok:h,message:g}=re(C=>C.ui),c=me();return{isRegisterModalOpen:t,isLoginModalOpen:n,isEditProfileModalOpen:i,tempAvatar:d,homePageGames:a,homeBgImage:s,currentResultsPage:m,currentYourListPage:p,isDeleteListModalOpen:r,ok:h,message:g,openRegisterModal:()=>{c(Ht())},closeRegisterModal:()=>{c(Be())},openLoginModal:()=>{c(qt())},closeLoginModal:()=>{c(_e())},openEditProfileModal:()=>{c($e())},closeEditProfileModal:()=>{c(Yt())},setTempAvatar:C=>{c(Wt(C))},loadHomePageGames:async()=>{const Y=localStorage.getItem("homePageGames"),ye=JSON.parse(Y),xe=localStorage.getItem("homePageGamesUpdatedAt"),ve=new Date().getTime();if(ye&&xe&&ve-xe<3e5){c(Re(ye));return}else try{const{data:te}=await O.get("/games/home");localStorage.setItem("homePageGames",JSON.stringify(te)),localStorage.setItem("homePageGamesUpdatedAt",ve.toString()),c(Re(te))}catch(te){console.log(te)}},setHomeBgImage:C=>{if(s===""){c(Pe(a[0].bgImage));return}c(Pe(C))},setCurrentResultsPage:C=>{c(Ft(C))},setCurrentYourListPage:C=>{c(Zt(C))},resetCurrentResultsPage:()=>{c(Jt())},resetCurrentYourListPage:()=>{c(Qt())},openDeleteListModal:()=>{c(Kt())},closeDeleteListModal:()=>{c(Ne())},setOk:C=>{c(T(C))},resetOk:()=>{c(I())},setMessage:C=>{c(w(C))},resetMessage:()=>{c(R())}}},B=()=>{const{gameResults:t,isAddGameModalOpen:n,tempList:i,activeGame:a,vgList:s,profile:d}=re(x=>x.collection),{setOk:m}=b(),{user:p}=re(x=>x.auth),r=me(),h=H();return{gameResults:t,isAddGameModalOpen:n,tempList:i,activeGame:a,vgList:s,profile:d,startLoadingGameResults:async({game_title:x})=>{try{r(Ce());const{data:f}=await O.post("/games/search",{game_title:x}),D=f.filter(Z=>!i.some(C=>C.id===Z.id||C.title===Z.title));r(jt(D))}catch(f){r(T(!1)),r(w(f.response.data.message)),setTimeout(()=>{r(I()),r(R())},3500)}},startClearGameResults:()=>{r(Ce())},startOpenAddGameModal:x=>{r(Bt(x))},startCloseAddGameModal:()=>{r(_t())},startAddGame:x=>{i.some(f=>f.id===x.id||f.title===x.title)||r(we(x))},startEditGame:(x,f)=>{r(Se(x)),r(we(f))},startRemoveGame:x=>{r(Se(x))},startClearList:()=>{r(be())},startSetActiveGame:x=>{r(Nt(x))},startClearActiveGame:()=>{r(Ut())},startSavingList:async({title:x,description:f})=>{r(Me());try{const{data:D}=await O.post("vglist/create",{title:x,description:f,list:i,id:p.id},{headers:{Authorization:`Bearer ${localStorage.getItem("accessToken")}`}});r(ne(D.list)),h(`/list/${D.list.id}`),r(T(!0)),r(w(D.message)),setTimeout(()=>{r(I()),r(R())},3500)}catch(D){r(T(!1)),r(w(D.response.data.message)),setTimeout(()=>{r(I()),r(R())},3500)}},startLoadingVgList:async x=>{try{const{data:f}=await O.get(`vglist/${x}`);if(f.list){r(ne(f.list));return}}catch(f){r(w(f.response.data.message))}},startEditVgList:async({title:x,description:f,is_sorted:D,list:Z,id:C})=>{try{const{data:Y}=await O.put(`vglist/update/${C}`,{title:x,description:f,is_sorted:D,list:Z},{headers:{Authorization:`Bearer ${localStorage.getItem("accessToken")}`}});r(ne(Y.list)),D===void 0&&h(`/list/${C}`),r(T(!0)),r(w(Y.message)),setTimeout(()=>{r(I()),r(R())},3500)}catch(Y){r(T(!1)),r(w(Y.response.data.message)),setTimeout(()=>{r(I()),r(R())},3500)}},startDeleteVgList:async x=>{try{const{data:f}=await O.delete(`vglist/delete/${x}`,{headers:{Authorization:`Bearer ${localStorage.getItem("accessToken")}`}});r(Me()),r(Ne()),h(`profile/${p.id}`),r(T(!0)),r(w(f.message)),setTimeout(()=>{r(I()),r(R())},3500)}catch(f){r(T(!1)),r(w(f.response.data.message)),setTimeout(()=>{r(I()),r(R())},3500)}},startLoadingEditPage:async x=>{r(be());try{const{data:f}=await O.get(`vglist/${x}`);if(f.ok===!1){m(f.ok);return}if(f.list){r($t(f.list.games)),r(ne(f.list));return}}catch(f){r(w(f.response.data.message))}},startLoadingProfile:async x=>{r(ke());try{const{data:f}=await O.get(`profile/${x}`);r(zt(f.profile))}catch(f){r(w(f.response.data.message))}},startClearProfile:()=>{r(ke())}}},ei=({game:t})=>{const{isAddGameModalOpen:n,startCloseAddGameModal:i,startClearActiveGame:a,startAddGame:s,startEditGame:d,startRemoveGame:m,tempList:p}=B(),{register:r,control:h,handleSubmit:g,formState:{errors:c},watch:u,reset:y}=q(),L=()=>p.some(M=>M.id===t.id),P=({review:M,rating:_})=>{const z={...t,review:M,rating:_};if(L()){d(t.id,z),a(),i();return}else{i(),s(z),a();return}},k=()=>{m(t.id),i(),a()},G=()=>{i(),a()};return e(X,{title:t.title,isOpen:n===t.id,closeModal:G,children:l(o,{container:!0,direction:"column",children:[e(o,{item:!0,container:!0,xs:12,sx:{justifyContent:"center",alignItems:"center",my:1},children:e(Gt,{name:"rating",control:h,defaultValue:t.rating?t.rating:2.5,render:({field:M})=>e(Ae,{name:"half-rating",precision:.5,value:M.value,onChange:(_,z)=>M.onChange(z)})})}),e(o,{item:!0,container:!0,xs:12,sx:{justifyContent:"center",alignItems:"center",my:1},children:e(V,{...r("review"),name:"review",label:"Your Review",type:"text",fullWidth:!0,defaultValue:t.review?t.review:"",sx:{mr:1}})}),l(o,{container:!0,direction:"row",justifyContent:"space-evenly",alignItems:"center",item:!0,xs:12,sx:{my:1},children:[L()?e(S,{variant:"contained",color:"primary",onClick:k,children:"Remove"}):null,e(S,{variant:"contained",color:"secondary",sx:{color:"white"},fullWidth:!L(),onClick:g(P),children:"Save"})]})]})})},Ue=()=>{var c,u;const{isLoginModalOpen:t,isRegisterModalOpen:n,closeLoginModal:i,ok:a,message:s}=b(),{startLogin:d}=U(),{register:m,handleSubmit:p,formState:{errors:r}}=q(),h=({email:y,password:L})=>{d({email:y,password:L}),a===!0&&i()},g={my:1};return e(X,{title:"Login",isOpen:t,closeModal:i,children:e("form",{onSubmit:p(h),children:l(o,{container:!0,direction:"column",children:[e(o,{item:!0,xs:12,sx:g,children:e(V,{...m("email",{required:"Required",pattern:{value:/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,message:"Invalid email address"}}),name:"email",label:"Email",type:"email",fullWidth:!0,helperText:(c=r.email)==null?void 0:c.message,error:!!r.email})}),e(o,{item:!0,xs:12,sx:g,children:e(V,{...m("password",{required:"Required",minLength:{value:8,message:"Must be at least 8 characters"}}),label:"Password",type:"password",fullWidth:!0,helperText:s.includes("Invalid")&&s||((u=r.password)==null?void 0:u.message),error:!!(s.includes("Invalid")&&s||r.password)})}),e(o,{item:!0,xs:12,sx:g,children:e(S,{variant:"contained",color:"secondary",fullWidth:!0,type:"submit",children:"Let me in!"})})]})})})},ze=()=>{var u,y,L,P;const{isRegisterModalOpen:t,closeRegisterModal:n,ok:i,message:a}=b(),{startRegister:s,user:d}=U(),{register:m,handleSubmit:p,formState:{errors:r},watch:h}=q(),g=({username:k,email:G,password:M})=>{s({username:k,email:G,password:M})},c={my:1};return e(X,{title:"Register",isOpen:t,closeModal:n,BackdropProps:{clickable:!1},children:e("form",{onSubmit:p(g),children:l(o,{container:!0,direction:"column",children:[e(o,{item:!0,xs:12,sx:c,children:e(V,{...m("username",{required:"Required"}),name:"username",label:"User Name",type:"text",fullWidth:!0,helperText:a.includes("Username")&&a||((u=r.username)==null?void 0:u.message),error:!!(a.includes("Username")&&a||r.username)})}),e(o,{item:!0,xs:12,sx:c,children:e(V,{...m("email",{required:"Required",pattern:{value:/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,message:"Invalid email address"}}),name:"email",label:"Email",type:"email",fullWidth:!0,helperText:a.includes("Email")&&a||((y=r.email)==null?void 0:y.message),error:!!(a.includes("Email")&&a||r.email)})}),e(o,{item:!0,xs:12,sx:c,children:e(V,{...m("password",{required:"Required",minLength:{value:8,message:"Must be at least 8 characters"}}),label:"Password",type:"password",fullWidth:!0,helperText:(L=r.password)==null?void 0:L.message,error:!!r.password})}),e(o,{item:!0,xs:12,sx:c,children:e(V,{...m("confirmPassword",{required:"Required",validate:k=>k===h("password")||"The passwords do not match"}),name:"confirmPassword",label:"Confirm Password",type:"password",fullWidth:!0,helperText:(P=r.confirmPassword)==null?void 0:P.message,error:!!r.confirmPassword})}),e(o,{item:!0,xs:12,sx:c,children:e(S,{variant:"contained",color:"secondary",fullWidth:!0,type:"submit",children:"Create Account"})})]})})})},ti=()=>{const{status:t,user:{id:n},startLogout:i}=U(),a=H(),[s,d]=A.useState("recents"),{openRegisterModal:m,openLoginModal:p}=b();return l(N,{children:[e(Ke,{showLabels:!0,className:"bottomBar",sx:{width:"100%",backgroundColor:"elevation.4",bottom:0,position:"fixed",zIndex:7},value:s,onChange:(h,g)=>{g==="register"?m():g==="login"&&p(),d(g)},children:t==="authenticated"?[e(J,{label:"Profile",value:"profile",icon:e(Ge,{}),onClick:()=>{a(`/profile/${n}`)},showLabel:!0}),e(J,{label:"New List",value:"newList",icon:e(Xe,{}),showLabel:!0,onClick:()=>{a("/newList")}}),e(J,{label:"Logout",value:"logout",icon:e(Oe,{}),showLabel:!0,onClick:i})]:[e(J,{label:"Register",value:"register",icon:e(et,{}),showLabel:!0}),e(J,{label:"Login",value:"login",icon:e(tt,{}),showLabel:!0})]}),e(ze,{}),e(Ue,{})]})},ii={initial:{transform:"rotateY(0deg)"},flip:{transform:"rotateY(180deg)"},transition:{duration:.5}},ni={position:"absolute",top:0,left:0,width:"100%",height:"100%",backfaceVisibility:"hidden"},ri={position:"absolute",top:0,left:0,width:"100%",height:"100%",backfaceVisibility:"hidden",transform:"rotateY(180deg)"},ai=({game:t})=>{const[n,i]=A.useState(!1);return l(E,{sx:{width:"35vh",height:"50vh",perspective:"1000px",position:"relative",transformStyle:"preserve-3d"},onMouseEnter:()=>i(!0),onMouseLeave:()=>i(!1),whileHover:{scale:1.05},component:$.div,variants:ii,initial:"initial",animate:n?"flip":"initial",children:[e(Q,{sx:{width:"100%",height:"100%"},component:$.div,style:ni,children:e(de,{sx:{height:"100%",width:"100%"},image:t.image_url})}),l(Q,{sx:{width:"100%",height:"100%",display:"flex",flexDirection:"column",justifyContent:"center"},component:$.div,style:ri,children:[e(it,{sx:{textAlign:"center",marginTop:-10},titleTypographyProps:{variant:"h7",marginTop:-1},subheaderTypographyProps:{fontSize:"0.8rem",marginBottom:-2},title:t.title,subheader:t.year}),l(ue,{sx:{textAlign:"center"},style:{marginBottom:-4},children:[e(v,{fontSize:"0.9rem",children:t.description}),t.review&&l(v,{fontSize:"0.9rem",my:1,fontStyle:"italic",children:['"',t.review,'"']}),e(Ae,{name:"rating",defaultValue:t.rating,precision:.5,readOnly:!0})]})]})]})},oi=Ct.memo(()=>{const[t,n]=A.useState(0),i=A.useRef(null),{homePageGames:a,loadHomePageGames:s,homeBgImage:d,setHomeBgImage:m}=b();A.useEffect(()=>(m(a[t].bgImage),i.current=setTimeout(()=>{n(r=>(r+1)%a.length)},9e3),()=>{clearTimeout(i.current)}),[t,a,m]);const p=r=>{n(r),clearTimeout(i.current)};return e(E,{sx:{position:"inherit",display:"flex"},children:e("section",{className:"carousel",children:a.map((r,h)=>e("img",{onMouseEnter:()=>p(h),className:h===t?"hover":"",src:r.cover,alt:r.name},r.id))})})}),si=({title:t,id:n})=>{const{isDeleteListModalOpen:i,closeDeleteListModal:a}=b(),{startDeleteVgList:s}=B();return e(X,{title:`Delete ${t}?`,isOpen:i,closeModal:a,children:l(o,{container:!0,direction:"column",children:[e(o,{item:!0,xs:12,alignContent:"center",justifyContent:"center",children:e(v,{textAlign:"center",children:"Are you sure about that?"})}),l(o,{container:!0,direction:"row",justifyContent:"space-evenly",alignItems:"center",item:!0,xs:12,sx:{mt:2},children:[e(S,{variant:"outlined",color:"success",onClick:a,children:"Cancel"}),e(S,{variant:"outlined",color:"error",onClick:()=>s(n),children:"Delete"})]})]})})},li=t=>e(K,{...t,disabled:!0,children:e("img",{src:"public/JZLogo.svg",alt:"JZIcon",width:50})}),ci=()=>e(E,{component:"footer",sx:{width:"100%"},children:e(E,{sx:{minHeight:"9vh",bottom:0,width:"100%",mt:"auto",backgroundColor:"elevation.1"},children:l(o,{container:!0,direction:"row",spacing:0,sx:{p:1},alignItems:"center",children:[l(o,{container:!0,item:!0,direction:"row",xs:3,alignContent:"center",children:[e(o,{item:!0,children:e(li,{})}),l(o,{item:!0,sx:{mt:1},children:[e(v,{children:"Jostin Aguilera"}),l(v,{children:["© ",new Date().getFullYear()]})]})]}),e(o,{item:!0,container:!0,xs:9,direction:"row",justifyContent:"flex-end",alignItems:"center",children:e(K,{size:"large",onClick:()=>{window.open("https://github.com/roadieroundup")},children:e(nt,{fontSize:"large"})})})]})})}),He={opacity:1,y:0,transition:{duration:.9}},di={hidden:{opacity:0,y:10},visible:He},ui=()=>{const t=j("(max-width:414px)");return l(N,{children:[l(o,{container:!0,item:!0,xs:12,sm:12,md:6,alignContent:"center",justifyContent:"center",direction:"column",component:$.div,initial:"hidden",animate:"visible",exit:{opacity:0,transition:{duration:1}},variants:{visible:{transition:{staggerChildren:.3}}},children:[e(v,{className:"gradient-text",variant:"h1",align:"center",component:$.h1,variants:{hidden:{opacity:0,y:-20},visible:He},sx:{fontSize:n=>t?n.typography.h2.fontSize:n.typography.h1.fontSize},children:"Video Game Collections"}),e(v,{variant:"h5",sx:{p:5},component:$.h5,variants:di,align:"center",children:"Create and manage your video game collections, and share them with your friends."})]}),e(o,{item:!0,xs:12,sm:12,md:6,alignContent:"center",justifyContent:"center",sx:{px:2},children:e(oi,{})})]})},mi=({games:t,title:n,description:i,games_count:a})=>l(o,{item:!0,mt:2,rowSpacing:2,direction:"column",children:[e(o,{item:!0,display:"flex",xs:12,className:"aqui3",justifyContent:"center",alignItems:"center",marginRight:9,children:e(rt,{sx:{display:"flex",width:"32vh",height:"30vh"},justifyContent:"center",alignItems:"center",children:t.length>0?t.map((s,d)=>e(hi,{game:s,index:d,len:t.length},s.id)):e(v,{variant:"h4",sx:{marginRight:-9},children:"NO GAMES"})})}),l(o,{container:!0,item:!0,direction:"column",xs:12,justifyContent:"center",alignItems:"center",children:[e(o,{item:!0,xs:12,children:e(v,{variant:"h6",children:n})}),e(o,{item:!0,xs:12,children:l(v,{variant:"h7",color:"text.secondary",children:[a," ",a===1?"Game":"Games"]})}),e(o,{item:!0,xs:12,children:e(v,{variant:"p",color:"text.secondary",children:i})})]})]}),hi=({game:t,index:n,len:i})=>e(Q,{sx:{width:"100%",height:"100%",marginRight:-9,position:"relative",zIndex:i-n,boxShadow:"6px 0px 4px 0px rgba(0,0,0,0.75)"},children:e(de,{sx:{height:"100%",width:"100%"},image:t.image_url,title:`Game ${n+1}`})}),gi=({game:t})=>{const n=j("(max-width:414px)"),{startOpenAddGameModal:i,startSetActiveGame:a}=B(),s=()=>{i(t.id),a(t)};return l(N,{children:[l(Q,{sx:{height:n?180:280,width:n?125:150},onClick:()=>s(),children:[e(de,{sx:{width:"100%",height:n?"100%":"70%"},image:t.image_url,title:"game image"}),n?null:l(ue,{sx:{padding:"0.5rem"},children:[e(v,{variant:"p",children:t.title.substr(0,31)+(t.title.length>31?"...":"")}),e("br",{}),e(v,{variant:"p",color:"text.secondary",children:t.date})]})]}),e(ei,{game:t})]})},Te=({name:t,currentPage:n,list:i,setCurrentPage:a})=>{const s=j("(max-width:414px)");j("(max-width:600px)");const d=j("(max-width:899px)"),m=()=>{//! this will change if screen size changes
return s?i.slice(n,n+1):d?i.slice(n,n+2):i.slice(n,n+5)},p=()=>{if(n>0){if(s){a(n-1);return}if(d){a(n-2);return}a(n-5)}},r=()=>{if(n+5<i.length){if(s){a(n+1);return}if(d){a(n+2);return}a(n+5)}};return l(E,{children:[e(v,{variant:"h6",children:t}),l(E,{sx:{width:"100%",height:"40vh",borderRadius:"4px",border:"1px solid grey",padding:"1rem",position:"relative"},children:[e(o,{container:!0,direction:"row",children:m().map(h=>e(o,{item:!0,xs:12,sm:6,md:2.4,sx:{my:s?0:1},display:"flex",alignContent:"center",justifyContent:"center",children:e(gi,{game:h})},h.id))}),i.length>5&&l(o,{container:!0,direction:"row",sx:{position:"absolute",bottom:0,width:"100%",pb:"1rem"},children:[e(o,{container:!0,xs:6,justifyContent:"center",children:e(K,{onClick:p,disabled:n===0,children:e(at,{})})}),e(o,{container:!0,xs:6,justifyContent:"center",children:e(K,{onClick:r,disabled:n+5>=i.length,children:e(ot,{})})})]})]})]})},pi={initial:{y:"-100vh"},animate:{y:0}},pe=()=>l(E,{position:"relative",display:"inline-flex",children:[e(st,{size:150,thickness:1,color:"error"}),e(E,{top:0,left:0,bottom:0,right:0,position:"absolute",display:"flex",alignItems:"center",justifyContent:"center",children:e($.img,{src:"public/JZLogo.svg",alt:"Logo",variants:pi,initial:"initial",animate:"animate",style:{width:"100px"}})})]}),fi=()=>{const{openRegisterModal:t,openLoginModal:n}=b(),{status:i,user:a,startLogout:s}=U(),d=H();A.useState(null);const[m,p]=A.useState(null),r=g=>{p(g.currentTarget)},h=()=>{p(null)};return e(lt,{position:"sticky",elevation:0,sx:{backgroundColor:"elevation.2"},children:l(ct,{sx:{display:"flex",justifyContent:"space-between"},children:[e(dt,{component:bt,color:"inherit",sx:{textDecoration:"none"},to:"/",children:e(v,{variant:"h6",children:"Video Game Collections"})}),e("div",{children:i==="authenticated"?l(N,{children:[e(S,{onClick:r,children:a.username}),l(ut,{sx:{mt:"45px"},anchorEl:m,anchorOrigin:{vertical:"top",horizontal:"right"},transformOrigin:{vertical:"top",horizontal:"right"},open:Boolean(m),onClose:h,children:[l(se,{onClick:()=>{d(`/profile/${a.id}`),h()},children:[e(le,{children:e(Ge,{fontSize:"medium"})}),"Profile"]}),l(se,{onClick:()=>{d("/newlist"),h()},children:[e(le,{children:e(mt,{fontSize:"medium"})}),"New List"]}),e(ae,{}),l(se,{onClick:()=>{s(),h()},children:[e(le,{children:e(Oe,{fontSize:"medium"})}),"Logout"]})]})]}):l(N,{children:[e(S,{onClick:()=>t(),children:"Create Account"}),e(ze,{}),e(S,{onClick:()=>n(),children:"Log In"}),e(Ue,{})]})})]})})},fe=({message:t})=>{const{resetMessage:n}=b(),i=H();return l(E,{sx:{display:"flex",justifyContent:"center",alignItems:"center",flexDirection:"column",minHeight:"100vh"},children:[e(v,{variant:"h1",style:{color:"white"},children:"404"}),e(v,{variant:"h6",style:{color:"white"},children:t}),e(S,{variant:"contained",sx:{my:2},onClick:()=>{n(),i("/")},children:"Back Home"})]})};//! no results found message
const qe=({register:t,handleSubmit:n,errors:i,onSubmitList:a,pageName:s,title:d,description:m,handleCancelButton:p})=>{var P,k;const{gameResults:r,tempList:h}=B(),{currentResultsPage:g,currentYourListPage:c,setCurrentResultsPage:u,setCurrentYourListPage:y}=b(),L=j("(max-width:600px)");return e(o,{container:!0,direction:"column",alignItems:"center",justifyContent:"center",rowSpacing:2,sx:{p:1.5,width:"100%",minHeight:"100vh"},children:l(oe,{children:[e(v,{variant:"h4",children:s}),e(ae,{sx:{height:2,background:G=>`linear-gradient(to right, ${G.palette.primary.main}, ${G.palette.secondary.main})`,width:"25%"}}),l("form",{onSubmit:n(a),children:[l(o,{container:!0,sx:{my:2},columnSpacing:1,children:[l(o,{item:!0,direction:"column",xs:12,sm:6,paddingRight:{xs:0},sx:{},children:[e(o,{item:!0,xs:12,children:e(V,{...t("title",{required:"Required"}),name:"title",label:"Title",type:"text",fullWidth:!0,helperText:(P=i.title)==null?void 0:P.message,error:!!i.title,defaultValue:d})}),L?null:e(Ie,{})]}),e(o,{item:!0,xs:12,sm:6,marginTop:{xs:2,sm:0},children:e(V,{...t("description"),name:"description",label:"Description",type:"text",multiline:!0,rows:4,fullWidth:!0,helperText:(k=i.description)==null?void 0:k.message,error:!!i.description,defaultValue:m})}),L?e(Ie,{}):null,e(o,{item:!0,xs:12,lg:6,paddingRight:{xs:0},sx:{},children:e(Te,{name:"Results",currentPage:g,list:r,setCurrentPage:u})}),e(o,{item:!0,xs:12,lg:6,paddingRight:{xs:0},marginTop:{xs:2,lg:0},sx:{},children:e(Te,{name:"Your List",currentPage:c,list:h,setCurrentPage:y})})]}),l(E,{sx:{display:"flex",justifyContent:"flex-end",marginTop:3,"& > *:not(:first-of-type)":{marginLeft:"10px"}},children:[s==="Edit List"&&e(S,{variant:"contained",color:"error",onClick:p,children:"Cancel"}),e(S,{variant:"contained",color:"primary",type:"submit",children:"Save List"})]})]})]})})},yi={initial:{opacity:0,y:"100"},in:{opacity:1,y:0,transition:{duration:1}}},oe=({children:t})=>e(o,{item:!0,xs:12,sx:{width:"100%",height:"100%"},component:$.div,variants:yi,children:e(Q,{sx:{width:"100%",height:"100%",backgroundColor:"elevation.3"},elevation:0,children:e(ue,{children:t})})}),xi=()=>{const t=j("(max-width:899px)"),n=H(),{user:{id:i}}=U(),{profile:{lists:a,id:s}}=B();return l(oe,{children:[e(v,{variant:"h4",children:"Lists"}),e(ae,{sx:{height:2,background:d=>`linear-gradient(to right, ${d.palette.primary.main}, ${d.palette.secondary.main})`,width:"25%"}}),(a==null?void 0:a.length)===0?e(v,{variant:"h6",children:"No lists yet"}):e(o,{container:!0,className:"AQUIII",children:a==null?void 0:a.map(d=>e(o,{item:!0,xs:12,sm:12,md:12,lg:4,xl:3,className:"AQUII2",rowSpacing:2,onClick:()=>n(`/list/${d.id}`),children:e(mi,{...d})},d.id))}),t?null:e(N,{children:i===s&&e(E,{sx:{display:"flex",justifyContent:"flex-end",marginTop:3},children:e(S,{variant:"contained",color:"primary",onClick:()=>n("/newlist"),children:"New List"})})})]})},ce={my:1},vi=["image/png","image/jpeg"],Li=()=>{var L,P;const{isEditProfileModalOpen:t,closeEditProfileModal:n,tempAvatar:i,setTempAvatar:a}=b(),{startUpdateProfile:s,user:d}=U(),{register:m,handleSubmit:p,formState:{errors:r},watch:h,reset:g}=q(),c=({name:k,bio:G,image:M})=>{const _=!!vi.find(z=>{var ee;return z===((ee=M[0])==null?void 0:ee.type)});if(!(M.length!==0&&!_))if(M[0]===void 0&&!_)s({name:k,bio:G}).then(()=>{y()});else if(M.length===1&&_)s({name:k,bio:G,image:M}).then(()=>{y()});else return},u=({target:k})=>{a(URL.createObjectURL(k.files[0]))},y=()=>{g(),n()};return e(X,{title:"Edit Profile",isOpen:t,closeModal:y,children:e("form",{onSubmit:p(c),children:l(o,{container:!0,direction:"column",children:[l(o,{item:!0,container:!0,xs:12,sx:{justifyContent:"center",alignItems:"center",my:1},children:[e("input",{id:"fileInput",...m("image",{onChange:u}),type:"file",name:"image",accept:"image/png, image/jpeg",style:{display:"none"}}),l(E,{sx:{position:"relative",width:100,height:100,borderRadius:"50%",overflow:"hidden"},children:[e(Ee,{src:i||d.image_url,sx:{width:100,height:100},className:"avatar"}),e(K,{style:{position:"absolute",top:"50%",left:"50%",transform:"translate(-50%, -50%)",display:"flex",justifyContent:"center",alignItems:"center",width:40,height:40,borderRadius:"50%",backgroundColor:"rgba(0, 0, 0, .5)"},onChange:u,onClick:()=>document.getElementById("fileInput").click(),children:e(ht,{fontSize:"small",style:{color:"#fff"}})})]})]}),e(o,{item:!0,xs:12,sx:ce,children:e(V,{...m("name",{required:"Required"}),name:"name",label:"Name",type:"text",fullWidth:!0,helperText:(L=r.name)==null?void 0:L.message,error:!!r.name,defaultValue:d.name})}),e(o,{item:!0,xs:12,sx:ce,children:e(V,{...m("bio",{required:"Required"}),name:"bio",label:"Short bio",type:"text",fullWidth:!0,helperText:(P=r.bio)==null?void 0:P.message,error:!!r.bio,multiline:!0,rows:2,defaultValue:d.bio})}),e(o,{item:!0,xs:12,sx:ce,children:e(S,{variant:"contained",color:"secondary",fullWidth:!0,type:"submit",children:"Save"})})]})})})},Ci={width:75,height:75},wi={fontSize:"0.5rem",p:.3},Si=()=>{var s;const t=j("(max-width:414px)"),{openEditProfileModal:n}=b(),{user:i}=U(),{profile:a}=B();return e(oe,{children:l(o,{container:!0,item:!0,direction:"row",rowSpacing:1,children:[e(o,{item:!0,xs:4,md:2.5,children:e(Ee,{src:a.image_url,alt:"Profile Picture",sx:t?Ci:{width:150,height:150},children:a.name&&a.name.slice(0,1)})}),l(o,{container:!0,item:!0,direction:"column",xs:6,md:4,spacing:1,children:[l(o,{container:!0,item:!0,direction:"row",spacing:1,children:[e(o,{item:!0,xs:6,children:e(v,{variant:"h4",sx:{fontSize:d=>t?d.typography.h6.fontSize:d.typography.h4.fontSize},children:a.name?a.name:a.username})}),l(o,{item:!0,xs:6,children:[i.id===a.id&&e(S,{variant:"contained",size:"small",sx:t?wi:null,onClick:()=>n(),children:"Edit Profile"}),e(Li,{})]})]}),e(o,{item:!0,children:e(v,{variant:"p",color:"text.secondary",children:a.bio})})]}),l(o,{container:!0,item:!0,direction:"row",display:{xs:null,md:"flex"},sx:{width:"100%"},justifyContent:{xs:null,md:"flex-end",lg:"center"},alignItems:{xs:null,md:"center"},xs:12,md:5.5,children:[l(o,{container:!0,item:!0,direction:"column",display:{xs:null,md:"flex"},alignItems:"center",alignContent:{xs:"center",md:"flex-end"},xs:6,md:2,children:[e(o,{item:!0,children:e(v,{variant:"h6",children:(s=a.lists)==null?void 0:s.length})}),e(o,{item:!0,children:e(v,{variant:"p",color:"text.secondary",children:"Lists"})})]}),l(o,{container:!0,item:!0,direction:"column",display:{xs:null,md:"flex"},alignItems:"center",alignContent:{xs:"center",md:"flex-end"},xs:6,md:2,children:[e(o,{item:!0,children:e(v,{variant:"h6",children:"0"})}),e(o,{item:!0,children:e(v,{variant:"p",color:"text.secondary",children:"Friends"})})]})]})]})})},Ie=()=>{var p;const{startLoadingGameResults:t}=B(),{resetCurrentResultsPage:n}=b(),{register:i,handleSubmit:a,formState:{errors:s},watch:d}=q(),m=({game_title:r})=>{n(),t({game_title:r})};return l(o,{item:!0,direction:"row",sx:{my:1.5,display:"flex"},xs:12,children:[e(V,{...i("game_title",{required:"Required"}),name:"game_title",label:"Search games",type:"text",fullWidth:!0,helperText:(p=s.game_title)==null?void 0:p.message,error:!!s.game_title,sx:{mr:1}}),e(S,{variant:"outlined",color:"primary",type:"button",size:"medium",sx:{height:"55px"},onClick:a(m),children:"Search"})]})};function bi(t){return e(ft,{...t,direction:"up"})}const Mi=()=>{const{ok:t,message:n}=b(),[i,a]=A.useState(!1);return A.useEffect(()=>{t!==void 0&&(a(!0),setTimeout(()=>{a(!1)},3e3))},[t]),e(gt,{open:i,autoHideDuration:3e3,TransitionComponent:bi,anchorOrigin:{vertical:"bottom",horizontal:"center"},children:e(pt,{severity:t===!0?"success":"error",sx:{width:"100%"},variant:"filled",children:n})},"SlideTransition")},ki=()=>{const{id:t}=ge(),n=H(),{register:i,handleSubmit:a,formState:{errors:s}}=q(),{tempList:d,vgList:m,startClearGameResults:p,startClearList:r,startLoadingEditPage:h,startEditVgList:g}=B(),{ok:c,resetCurrentResultsPage:u,resetCurrentYourListPage:y,message:L}=b(),P=async({title:G,description:M})=>{try{await g({title:G,description:M,list:d,id:t}),u(),y(),p(),r()}catch(_){console.log(_)}},k=()=>{u(),y(),p(),r(),n(`/list/${t}`)};return j("(max-width:600px)"),A.useEffect(()=>{h(t)},[]),L==="List not found"?e(fe,{message:L}):Object.keys(m).length===0?e(o,{container:!0,direction:"column",alignItems:"center",justifyContent:"center",style:{minHeight:"100vh"},children:e(o,{item:!0,xs:3,children:e(pe,{})})}):e(qe,{register:i,handleSubmit:a,errors:s,onSubmitList:P,pageName:"Edit List",title:m.title,description:m.description,handleCancelButton:k})},Ri=()=>{const{homeBgImage:t}=b();return e(o,{container:!0,direction:"row",alignContent:"center",justifyContent:"center",sx:{minHeight:"100vh",backgroundImage:`linear-gradient(rgba(0, 0, 0, 0.527), rgba(0, 0, 0, 0.7)), url(${t})`,backgroundSize:"cover",backgroundPosition:"center",backgroundRepeat:"no-repeat"},children:e(ui,{})})};//! no results found message
const Pi=()=>{const{register:t,handleSubmit:n,formState:{errors:i}}=q(),{startSavingList:a,startClearGameResults:s,startClearList:d}=B(),{resetCurrentResultsPage:m,resetCurrentYourListPage:p}=b(),r=async({title:h,description:g})=>{try{await a({title:h,description:g}),m(),p(),s(),d()}catch(c){console.log(c)}};return j("(max-width:600px)"),e(qe,{register:t,handleSubmit:n,errors:i,onSubmitList:r,pageName:"New List"})},Ti={initial:{opacity:0,y:"200"},in:{opacity:1,y:0,transition:{duration:1.5,staggerChildren:.5}}},Ii=()=>{const{startLoadingProfile:t}=B(),{id:n}=ge(),{message:i}=b();return A.useEffect(()=>{t(n)},[]),i==="Profile not found"?e(fe,{message:i}):l(o,{container:!0,direction:"column",alignItems:"center",rowSpacing:2,sx:{p:1.5,width:"100%",minHeight:"100vh"},component:$.div,initial:"initial",animate:"in",variants:Ti,children:[e(Si,{}),e(xi,{})]})},Ai=()=>{const{id:t}=ge(),n=H(),{vgList:i,startLoadingVgList:a,startEditVgList:s}=B(),{openDeleteListModal:d,ok:m,message:p}=b(),{user:r}=U();A.useEffect(()=>{a(t)},[]);const h=()=>{n(`/editlist/${t}`)},g=()=>{s({id:t,is_sorted:!i.is_sorted})},c=()=>{d()},u=()=>i.is_sorted?[...i.games].sort((y,L)=>L.rating-y.rating):i.games;if(p==="List not found"){//! create not found component
return e(fe,{message:p})}else return Object.keys(i).length===0?e(o,{container:!0,direction:"column",alignItems:"center",justifyContent:"center",style:{minHeight:"100vh"},children:e(o,{item:!0,xs:3,children:e(pe,{})})}):l(o,{container:!0,direction:"column",alignItems:"center",rowSpacing:2,sx:{p:1.5,width:"100%",minHeight:"100vh"},children:[l(oe,{children:[e(v,{variant:"h4",children:i==null?void 0:i.title}),e(ae,{sx:{height:2,background:y=>`linear-gradient(to right, ${y.palette.primary.main}, ${y.palette.secondary.main})`,width:"25%"}}),l(o,{container:!0,direction:"column",marginTop:2,children:[e(o,{children:e(v,{variant:"p",children:i==null?void 0:i.description})}),e(o,{children:l(v,{variant:"body1",color:"text.secondary",children:["List By ",i==null?void 0:i.owner.name]})}),e(o,{container:!0,marginTop:2,columnSpacing:2,rowSpacing:2,justifyContent:"center",children:u().map(y=>e(o,{item:!0,children:e(ai,{game:y})},y.id))})]}),r.id===i.owner.id&&l(o,{container:!0,marginTop:2,columnSpacing:2,rowSpacing:2,justifyContent:"center",children:[e(o,{item:!0,children:e(S,{variant:"outlined",color:"success",onClick:h,children:"Edit List"})}),e(o,{item:!0,children:l(S,{variant:"outlined",color:"secondary",onClick:g,children:[i.is_sorted?"Unsort List ":"Sort List ","by rating"]})}),e(o,{item:!0,children:e(S,{variant:"outlined",color:"error",onClick:c,children:"Delete List"})})]})]}),e(si,{title:i.title,id:i.id})]})},Gi=()=>{//! CUSTOM HOOK CLASE 290
//! make dummy accounts for project
const{status:t,checkAuthToken:n}=U(),i=j("(max-width:899px)"),{pathname:a}=Tt(),{homePageGames:s,loadHomePageGames:d}=b();return A.useEffect(()=>{n()},[]),A.useEffect(()=>{a==="/"&&d()},[a]),a==="/"&&s.length===0?e(o,{container:!0,direction:"column",alignItems:"center",justifyContent:"center",style:{minHeight:"100vh"},children:e(o,{item:!0,xs:3,children:e(pe,{})})}):e(yt,{direction:"column",justifyContent:"flex-start",alignItems:"center",sx:{width:"100%",minHeight:"100vh"},children:l(N,{children:[i?null:e(fi,{}),l("div",{style:{height:"calc(100vh - 56px)",width:"100%",overflowY:"scroll"},children:[l(It,{children:[e(W,{path:"/",element:e(Ri,{})}),e(W,{path:"/profile/:id",element:e(Ii,{})}),e(W,{path:"/list/:id",element:e(Ai,{})}),e(W,{path:"/*",element:e(At,{to:"/",replace:!0})}),t==="authenticated"&&l(N,{children:[e(W,{path:"/newlist",element:e(Pi,{})}),e(W,{path:"/editlist/:id",element:e(ki,{})})]})]}),i?null:e(ci,{})]}),i?e(ti,{}):null,e(Mi,{})]})})},Oi=({children:t})=>l(xt,{theme:Ei,children:[e(vt,{}),t]}),Ei=Lt({typography:{fontFamily:["Jost","sans - serif"].join(",")},palette:{mode:"dark",primary:{main:"#ae67fa"},secondary:{main:"#f49867"},elevation:{0:"hsla(0, 0%, 7%)",1:"hsla(0, 0%, 12%)",2:"hsla(0, 0%, 19%)",3:"hsla(0, 0%, 20%)",4:"hsla(0, 0%, 21%)",6:"hsla(0, 0%, 23%)",8:"hsla(0, 0%, 24%)",12:"hsla(0, 0%, 26%)",16:"hsla(0, 0%, 27%)",24:"hsla(0, 0%, 28%)"}}}),Vi=()=>e(St,{store:Xt,children:e(Mt,{children:e(Oi,{children:e(Gi,{})})})});wt.createRoot(document.getElementById("root")).render(e(Vi,{}));