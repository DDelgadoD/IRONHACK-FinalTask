import{_,B as u,r as m,a as f,b as v,c as g,d as e,z as h,v as r,A as c,e as w,f as b,g as y,p as k,i as x}from"./file_index.d2c81d65.js";import{g as I}from"./file_index.e10fa390.js";import"./file_auth.e7040b8e.js";const C="/IRONHACK-FinalTask/assets/file_flying.1ae98977.png";const s=a=>(k("data-v-65fc249a"),a=a(),x(),a),R={class:"form-container"},S={class:"main"},L={class:"content"},N=s(()=>e("h2",null,"Inicio de Sesi\xF3n",-1)),V=s(()=>e("button",{class:"btn",id:"submit",name:"submit",type:"submit"}," Iniciar sesion ",-1)),B=s(()=>e("p",{class:"tip"},"\xBFNo tienes tu cuenta? \xA1Crea una!",-1)),T=s(()=>e("p",{class:"tip"},"\xBFTe olvidaste tu contrase\xF1a?",-1)),A=s(()=>e("a",{class:"tip-link",href:""},"Recuperar",-1)),F=s(()=>e("div",{class:"form-img"},[e("img",{src:C,alt:"Flying!"})],-1)),M={__name:"Login",setup(a){const l=u(),o=m({email:{content:"",error:!1},password:{content:"",error:!1}}),p=async()=>{const i=await I(o);i?console.log(i):l.push("/")};return(i,t)=>{const d=f("RouterLink");return v(),g("div",R,[e("div",S,[e("div",L,[N,e("form",{onSubmit:t[2]||(t[2]=h(n=>p(),["prevent"]))},[r(e("input",{"onUpdate:modelValue":t[0]||(t[0]=n=>o.value.email.content=n),type:"email",id:"email",name:"email",placeholder:"Correo electronico"},null,512),[[c,o.value.email.content]]),r(e("input",{"onUpdate:modelValue":t[1]||(t[1]=n=>o.value.password.content=n),type:"password",id:"password",name:"password",placeholder:"Contrase\xF1a"},null,512),[[c,o.value.password.content]]),V],32),B,w(d,{class:"tip-link",to:{name:"signup"}},{default:b(()=>[y("Registrarse")]),_:1}),T,A]),F])])}}},E=_(M,[["__scopeId","data-v-65fc249a"]]);export{E as default};
