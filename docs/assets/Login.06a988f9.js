import{_ as d,B as _,r as u,b as m,c as v,d as e,v as f,x as r,y as c,p as h,i as g}from"./index.6a28fc64.js";import{g as w}from"./index.facc6c43.js";import"./auth.e3ffe497.js";import"./index.75144356.js";const y="/IRONHACK-FinalTask/assets/flying.1ae98977.png";const s=n=>(h("data-v-e2e1286e"),n=n(),g(),n),b={class:"form-container"},I={class:"main"},x={class:"content"},S=s(()=>e("h2",null,"Inicio de Sesi\xF3n",-1)),k=s(()=>e("button",{class:"btn",id:"submit",name:"submit",type:"submit"}," Iniciar sesion ",-1)),B=s(()=>e("p",{class:"tip"},"\xBFNo tienes tu cuenta? \xA1Crea una!",-1)),C=s(()=>e("a",{class:"tip-link",href:"/signup"},"Registrarse",-1)),R=s(()=>e("p",{class:"tip"},"\xBFTe olvidaste tu contrase\xF1a?",-1)),L=s(()=>e("a",{class:"tip-link",href:""},"Recuperar",-1)),N=s(()=>e("div",{class:"form-img"},[e("img",{src:y,alt:"Flying!"})],-1)),T={__name:"Login",setup(n){const l=_(),o=u({email:{content:"",error:!1},password:{content:"",error:!1}}),p=async()=>{const i=await w(o);i?console.log(i):l.push("/")};return(i,t)=>(m(),v("div",b,[e("div",I,[e("div",x,[S,e("form",{onSubmit:t[2]||(t[2]=f(a=>p(),["prevent"]))},[r(e("input",{"onUpdate:modelValue":t[0]||(t[0]=a=>o.value.email.content=a),type:"email",id:"email",name:"email",placeholder:"Correo electronico"},null,512),[[c,o.value.email.content]]),r(e("input",{"onUpdate:modelValue":t[1]||(t[1]=a=>o.value.password.content=a),type:"password",id:"password",name:"password",placeholder:"Contrase\xF1a"},null,512),[[c,o.value.password.content]]),k],32),B,C,R,L]),N])]))}},A=d(T,[["__scopeId","data-v-e2e1286e"]]);export{A as default};