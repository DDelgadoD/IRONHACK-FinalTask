import{T as c}from"./Tasks.62839f67.js";import{i as n}from"./index.f467990a.js";import{r as a,o as r,b as p,q as i}from"./index.c5878270.js";import"./auth.0cac87a3.js";import"./index.c87fc7b0.js";const C={__name:"Completed",setup(m){const s=a(!1),o=a(void 0),l=a(void 0),t=a({discarded:[],completed:[],active:[]}),d=a("Tareas Completadas"),u=a({edit:!0,completed:!1,destroy:!1});return r(async()=>{o.value=await n(),o.value.map(e=>e.discarded?t.value.discarded.push(e):e.completed?t.value.completed.push(e):t.value.active.push(e)),l.value=t.value.completed,console.log("task Completed: ",t.value),s.value=!0}),(e,v)=>(p(),i(c,{title:d.value,loaded:s.value,tasks:l.value,buttons:u.value},null,8,["title","loaded","tasks","buttons"]))}};export{C as default};
