import{T as n}from"./file_Tasks.181cbe9b.js";import{u as c,i as u}from"./file_index.e10fa390.js";import{r as t,o as i,w as d,b as m,y as p,u as f}from"./file_index.d2c81d65.js";import"./file_Modal.a26b1fd4.js";import"./file_auth.e7040b8e.js";const g={__name:"Completed",setup(k){const a=t(!1),o=t("Tareas Completadas"),l=t({edit:!0,completed:!1,destroy:!1}),e=c(),s=async()=>{console.log("loading..."),await u(),a.value=!0};return i(async()=>{await s()}),d(e.tasks,r=>{console.log("watch"),s()}),(r,_)=>(m(),p(n,{title:o.value,loaded:a.value,tasks:f(e).tasksF.completed,buttons:l.value},null,8,["title","loaded","tasks","buttons"]))}};export{g as default};
