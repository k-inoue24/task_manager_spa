(function(t){function e(e){for(var n,o,c=e[0],u=e[1],i=e[2],h=0,d=[];h<c.length;h++)o=c[h],Object.prototype.hasOwnProperty.call(s,o)&&s[o]&&d.push(s[o][0]),s[o]=0;for(n in u)Object.prototype.hasOwnProperty.call(u,n)&&(t[n]=u[n]);l&&l(e);while(d.length)d.shift()();return r.push.apply(r,i||[]),a()}function a(){for(var t,e=0;e<r.length;e++){for(var a=r[e],n=!0,c=1;c<a.length;c++){var u=a[c];0!==s[u]&&(n=!1)}n&&(r.splice(e--,1),t=o(o.s=a[0]))}return t}var n={},s={app:0},r=[];function o(e){if(n[e])return n[e].exports;var a=n[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,o),a.l=!0,a.exports}o.m=t,o.c=n,o.d=function(t,e,a){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(o.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)o.d(a,n,function(e){return t[e]}.bind(null,n));return a},o.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="/task_manager_spa/";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],u=c.push.bind(c);c.push=e,c=c.slice();for(var i=0;i<c.length;i++)e(c[i]);var l=u;r.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"56d7":function(t,e,a){"use strict";a.r(e);a("e260"),a("e6cf"),a("cca6"),a("a79d");var n=a("7a23"),s={id:"app"},r=Object(n["h"])("div",{class:"title siteTitle"},[Object(n["h"])("a",{href:"/task_manager_spa"},"Mr. Task Manager")],-1),o=Object(n["g"])("本日のタスク"),c=Object(n["g"])("タスク一覧・新規登録"),u=Object(n["g"])("データダウンロード"),i=Object(n["h"])("footer",null," Copyright - Keita Inoue, 2021 All Rights Reserved. ",-1);function l(t,e,a,l,h,d){var b=Object(n["z"])("router-link"),f=Object(n["z"])("router-view");return Object(n["r"])(),Object(n["e"])("div",s,[Object(n["h"])("header",null,[r,Object(n["h"])("nav",null,[Object(n["h"])("ul",null,[Object(n["h"])("li",null,[Object(n["h"])(b,{to:"/task_manager_spa"},{default:Object(n["G"])((function(){return[o]})),_:1})]),Object(n["h"])("li",null,[Object(n["h"])(b,{to:"/task_manager_spa/add"},{default:Object(n["G"])((function(){return[c]})),_:1})]),Object(n["h"])("li",null,[Object(n["h"])(b,{to:"/task_manager_spa/download"},{default:Object(n["G"])((function(){return[u]})),_:1})])])])]),Object(n["h"])("main",null,[Object(n["h"])(f)]),i])}var h={name:"App"};a("ad04");h.render=l;var d=h,b=a("6c02"),f=Object(n["h"])("h1",{class:"title pageTitle"},"本日のタスク",-1),k={class:"remainingTask"},O={class:"title sectionTitle"},j={key:0,class:"taskMessage"},p={key:1,class:"tableWrap"},m={class:"taskTable remainingTable"},g=Object(n["h"])("tr",null,[Object(n["h"])("th",{class:"taskChkHead"},"完了"),Object(n["h"])("th",{class:"taskNameHead"},"タスク名"),Object(n["h"])("th",{class:"taskHourHead"},"予定工数"),Object(n["h"])("th",{class:"taskDeleteHead"})],-1),D={class:"taskChk"},y={class:"taskName"},T={class:"taskHour"},H=Object(n["g"])("h"),v={class:"taskDelete"},w={class:"hourArea"},I=Object(n["h"])("span",null,"残工数",-1),S=Object(n["h"])("div",{class:"sectionDivide"},[Object(n["h"])("span"),Object(n["h"])("span"),Object(n["h"])("span")],-1),Y={class:"addTask"},C={class:"title sectionTitle"},_={class:"tableWrap"},M={class:"taskTable addTable"},E=Object(n["h"])("tr",null,[Object(n["h"])("th",{class:"taskNameHead"},"タスク名"),Object(n["h"])("th",{class:"taskHourHead"},"予定工数")],-1),B={class:"taskName"},V={class:"taskHour"},x=Object(n["g"])("h"),U=Object(n["h"])("button",{class:"btn submitBtn",type:"submit"},"タスク登録",-1),N=Object(n["h"])("div",{class:"sectionDivide"},[Object(n["h"])("span"),Object(n["h"])("span"),Object(n["h"])("span")],-1),A={class:"completedTask"},F={class:"title sectionTitle"},W={key:0,class:"taskMessage"},J={key:1,class:"tableWrap"},R={class:"taskTable doneTable"},G=Object(n["h"])("tr",null,[Object(n["h"])("th",{class:"taskChkHead"},"完了"),Object(n["h"])("th",{class:"taskNameHead"},"完了タスク名"),Object(n["h"])("th",{class:"taskHourHead"},"工数")],-1),P={class:"taskChk"},L={class:"taskName"},z={class:"taskHour"},K=Object(n["g"])("h"),q={class:"hourArea"},Q=Object(n["h"])("span",null,"総工数",-1);function X(t,e,a,s,r,o){return Object(n["r"])(),Object(n["e"])("div",null,[f,Object(n["h"])("section",k,[Object(n["h"])("h2",O,Object(n["B"])(o.todayString)+"の残タスク",1),0==o.remainingHour?(Object(n["r"])(),Object(n["e"])("p",j,"本日の残タスクはありません")):Object(n["f"])("",!0),0!=o.remainingHour?(Object(n["r"])(),Object(n["e"])("div",p,[Object(n["h"])("table",m,[g,(Object(n["r"])(!0),Object(n["e"])(n["a"],null,Object(n["x"])(o.remainingTask,(function(t){return Object(n["r"])(),Object(n["e"])("tr",{key:t.taskId},[Object(n["h"])("td",D,[Object(n["H"])(Object(n["h"])("input",{type:"checkbox","onUpdate:modelValue":function(e){return t.taskDone=e},onChange:function(e){return o.checkConfirm("remaining",t.taskTitle)}},null,40,["onUpdate:modelValue","onChange"]),[[n["D"],t.taskDone]])]),Object(n["h"])("td",y,Object(n["B"])(t.taskTitle),1),Object(n["h"])("td",T,[Object(n["h"])("span",null,Object(n["B"])(t.taskHour),1),H]),Object(n["h"])("td",v,[Object(n["h"])("button",{class:"btn deleteBtn",onClick:function(e){return o.deleteItem(t)}},"削除",8,["onClick"])])])})),128))]),Object(n["h"])("div",w,[I,Object(n["g"])(Object(n["B"])(o.remainingHour)+"h",1)])])):Object(n["f"])("",!0)]),S,Object(n["h"])("section",Y,[Object(n["h"])("h2",C,Object(n["B"])(o.todayString)+"のタスク追加",1),Object(n["h"])("form",{onSubmit:e[3]||(e[3]=Object(n["I"])((function(){return o.addItem&&o.addItem.apply(o,arguments)}),["prevent"]))},[Object(n["h"])("div",_,[Object(n["h"])("table",M,[E,Object(n["h"])("tr",null,[Object(n["h"])("td",B,[Object(n["H"])(Object(n["h"])("input",{class:"taskNameInput",type:"text","onUpdate:modelValue":e[1]||(e[1]=function(t){return r.newTask=t})},null,512),[[n["E"],r.newTask]])]),Object(n["h"])("td",V,[Object(n["H"])(Object(n["h"])("input",{class:"taskHourInput",type:"number",min:"0","onUpdate:modelValue":e[2]||(e[2]=function(t){return r.newHour=t})},null,512),[[n["E"],r.newHour]]),x])])]),U])],32)]),N,Object(n["h"])("section",A,[Object(n["h"])("h2",F,Object(n["B"])(o.todayString)+"の完了タスク",1),0==o.completedHour?(Object(n["r"])(),Object(n["e"])("p",W,"本日の完了タスクはありません")):Object(n["f"])("",!0),0!=o.completedHour?(Object(n["r"])(),Object(n["e"])("div",J,[Object(n["h"])("table",R,[G,(Object(n["r"])(!0),Object(n["e"])(n["a"],null,Object(n["x"])(o.completedTask,(function(t){return Object(n["r"])(),Object(n["e"])("tr",{key:t.taskId},[Object(n["h"])("td",P,[Object(n["H"])(Object(n["h"])("input",{type:"checkbox","onUpdate:modelValue":function(e){return t.taskDone=e},onChange:function(e){return o.checkConfirm("complete",t.taskTitle)}},null,40,["onUpdate:modelValue","onChange"]),[[n["D"],t.taskDone]])]),Object(n["h"])("td",L,Object(n["B"])(t.taskTitle),1),Object(n["h"])("td",z,[Object(n["h"])("span",null,Object(n["B"])(t.taskHour),1),K])])})),128))]),Object(n["h"])("div",q,[Q,Object(n["g"])(Object(n["B"])(o.completedHour)+"h",1)])])):Object(n["f"])("",!0)])])}a("4de4"),a("4160"),a("d3b7"),a("3ca3"),a("159b"),a("ddb0"),a("2b3d");var Z={data:function(){return{formats:{input:["YYYY-MM-DD"],data:["YYYY/MM/DD"]},modelConfig:{type:"string",mask:"YYYY年M月D日（W）"},newTask:"",newHour:"",id:1,todos:[],mode:"single",selectedDate:null}},watch:{todos:{handler:function(){localStorage.setItem("todos",JSON.stringify(this.todos))},deep:!0}},mounted:function(){this.todos=JSON.parse(localStorage.getItem("todos"))||[]},methods:{addItem:function(){var t={taskDay:this.todayString,taskId:this.lastId,taskTitle:this.newTask,taskHour:this.newHour,taskDone:!1};""!=this.newTask&&""!=this.newHour?(this.todos.push(t),this.newTask="",this.newHour=""):alert("タスク名と予定工数をそれぞれ入力してください")},deleteItem:function(t){confirm("タスク名「"+t.taskTitle+"」を削除してよろしいですか？")&&(this.todos=this.todos.filter((function(e){return e.taskId!=t.taskId}),this))},addFutureItem:function(){var t={taskDay:this.selectedDate,taskId:this.lastId,taskTitle:this.newTask,taskHour:this.newHour,taskDone:!1};""!=this.newTask&&""!=this.newHour?(this.todos.push(t),this.newTask="",this.newHour=""):alert("タスク名と予定工数をそれぞれ入力してください")},checkConfirm:function(t,e){var a;a="remaining"==t?"タスク名「"+e+"」を完了にしてよろしいですか？":"タスク「"+e+"」を未完了に戻してよろしいですか？",alert(a)},downloadCSV:function(){var t="\ufeff日付,タスク名,工数（h）\n";this.todos.forEach((function(e){var a=e["taskDay"]+","+e["taskTitle"]+","+e["taskHour"]+"\n";t+=a}));var e=new Blob([t],{type:"text/csv"}),a=document.createElement("a");a.href=window.URL.createObjectURL(e),a.download="all_task.csv",a.click()}},computed:{today:function(){var t=new Date;return t},todayString:function(){var t=new Array("日","月","火","水","木","金","土"),e=this.today.getFullYear()+"年"+(this.today.getMonth()+1)+"月"+this.today.getDate()+"日（"+t[this.today.getDay()]+"）";return e},remainingTask:function(){return this.todos.filter((function(t){return 0==t.taskDone&&t.taskDay==this.todayString}),this)},remainingHour:function(){var t=0;return this.remainingTask.forEach((function(e){t+=parseInt(e.taskHour,10)})),t},completedTask:function(){return this.todos.filter((function(t){return 1==t.taskDone&&t.taskDay==this.todayString}),this)},completedHour:function(){var t=0;return this.completedTask.forEach((function(e){t+=parseInt(e.taskHour,10)})),t},lastId:function(){var t=1;return this.todos.forEach((function(e){t<=e.taskId&&(t=e.taskId+1)})),t},dateSelect:function(){for(var t=[],e=[],a=new Array("日","月","火","水","木","金","土"),n=0;n<9;n++)t[n]=this.today.setDate(this.today.getDate()-n),e[n]=t[n].getFullYear()+"年"+(t[n].getMonth()+1)+"月"+t[n].getDate()+"日（"+a[t[n].getDay()]+"）";return t},futureTask:function(){return this.todos.filter((function(t){return 0==t.taskDone&&t.taskDay==this.selectedDate}),this)},futureDoneTask:function(){return this.todos.filter((function(t){return 1==t.taskDone&&t.taskDay==this.selectedDate}),this)},futureTaskHour:function(){var t=0;return this.futureTask.forEach((function(e){t+=parseInt(e.taskHour,10)})),t},futureDoneTaskHour:function(){var t=0;return this.futureDoneTask.forEach((function(e){t+=parseInt(e.taskHour,10)})),t},archiveTask:function(){return this.todos.filter((function(t){return 0==t.taskDone&&t.taskDay==this.selectedDate}),this)}}};Z.render=X;var $=Z,tt=Object(n["h"])("h1",{class:"title pageTitle"},"タスク一覧・新規登録",-1),et={class:"remainingTask"},at=Object(n["h"])("h2",{class:"title sectionTitle dateTitle"},"日付を選択",-1),nt={class:"calenderWrap"},st={key:0,class:"sectionDivide"},rt=Object(n["h"])("span",null,null,-1),ot=Object(n["h"])("span",null,null,-1),ct=Object(n["h"])("span",null,null,-1),ut={key:0,class:"addTask"},it={class:"title sectionTitle"},lt=Object(n["g"])("のタスク登録"),ht={class:"tableWrap"},dt={class:"taskTable addTable"},bt=Object(n["h"])("tr",null,[Object(n["h"])("th",{class:"taskNameHead"},"タスク名"),Object(n["h"])("th",{class:"taskHourHead"},"予定工数")],-1),ft={class:"taskName"},kt={class:"taskHour"},Ot=Object(n["g"])("h"),jt=Object(n["h"])("button",{class:"btn submitBtn",type:"submit"},"タスク登録",-1),pt={key:0,class:"sectionDivide"},mt=Object(n["h"])("span",null,null,-1),gt=Object(n["h"])("span",null,null,-1),Dt=Object(n["h"])("span",null,null,-1),yt={key:0,class:"futureTask"},Tt={class:"title sectionTitle"},Ht=Object(n["g"])("のタスク一覧"),vt={key:0,class:"taskMessage mb20"},wt={key:1,class:"title borderTitle"},It={key:2,class:"taskMessage mb20"},St={key:3,class:"tableWrap mb20"},Yt={class:"taskTable futureTable"},Ct=Object(n["h"])("tr",null,[Object(n["h"])("th",{class:"taskChkHead"},"完了"),Object(n["h"])("th",{class:"taskNameHead"},"タスク名"),Object(n["h"])("th",{class:"taskHourHead"},"工数")],-1),_t=Object(n["g"])("h"),Mt={class:"hourArea"},Et=Object(n["h"])("span",null,"総工数",-1),Bt={key:4,class:"title borderTitle"},Vt={key:5,class:"taskMessage"},xt={key:6,class:"tableWrap"},Ut={class:"taskTable futureTable"},Nt=Object(n["h"])("tr",null,[Object(n["h"])("th",{class:"taskChkHead"},"完了"),Object(n["h"])("th",{class:"taskNameHead"},"タスク名"),Object(n["h"])("th",{class:"taskHourHead"},"工数")],-1),At=Object(n["g"])("h"),Ft={class:"hourArea"},Wt=Object(n["h"])("span",null,"総工数",-1);function Jt(t,e,a,s,r,o){var c=Object(n["z"])("v-date-picker");return Object(n["r"])(),Object(n["e"])("div",null,[tt,Object(n["h"])("section",et,[at,Object(n["h"])("div",nt,[Object(n["h"])(c,{mode:"single",formats:r.formats,modelValue:r.selectedDate,"onUpdate:modelValue":e[1]||(e[1]=function(t){return r.selectedDate=t}),"model-config":r.modelConfig},null,8,["formats","modelValue","model-config"])])]),Object(n["h"])(n["b"],{name:"fade"},{default:Object(n["G"])((function(){return[null!=r.selectedDate?(Object(n["r"])(),Object(n["e"])("div",st,[rt,ot,ct])):Object(n["f"])("",!0)]})),_:1}),Object(n["h"])(n["b"],{name:"fade"},{default:Object(n["G"])((function(){return[null!=r.selectedDate?(Object(n["r"])(),Object(n["e"])("section",ut,[Object(n["h"])("h2",it,[Object(n["h"])("span",{ref:"selectedDate"},Object(n["B"])(r.selectedDate),513),lt]),Object(n["h"])("form",{onSubmit:e[4]||(e[4]=Object(n["I"])((function(){return o.addFutureItem&&o.addFutureItem.apply(o,arguments)}),["prevent"]))},[Object(n["h"])("div",ht,[Object(n["h"])("table",dt,[bt,Object(n["h"])("tr",null,[Object(n["h"])("td",ft,[Object(n["H"])(Object(n["h"])("input",{class:"taskNameInput",type:"text","onUpdate:modelValue":e[2]||(e[2]=function(t){return r.newTask=t})},null,512),[[n["E"],r.newTask]])]),Object(n["h"])("td",kt,[Object(n["H"])(Object(n["h"])("input",{class:"taskHourInput",type:"number",min:"0","onUpdate:modelValue":e[3]||(e[3]=function(t){return r.newHour=t})},null,512),[[n["E"],r.newHour]]),Ot])])]),jt])],32)])):Object(n["f"])("",!0)]})),_:1}),Object(n["h"])(n["b"],{name:"fade"},{default:Object(n["G"])((function(){return[null!=r.selectedDate?(Object(n["r"])(),Object(n["e"])("div",pt,[mt,gt,Dt])):Object(n["f"])("",!0)]})),_:1}),Object(n["h"])(n["b"],{name:"fade"},{default:Object(n["G"])((function(){return[null!=r.selectedDate?(Object(n["r"])(),Object(n["e"])("section",yt,[Object(n["h"])("h2",Tt,[Object(n["h"])("span",null,Object(n["B"])(r.selectedDate),1),Ht]),0==o.futureTaskHour&&0==o.futureDoneTaskHour?(Object(n["r"])(),Object(n["e"])("p",vt,"タスクが登録されていません")):Object(n["f"])("",!0),0!=o.futureTaskHour||0!=o.futureDoneTaskHour?(Object(n["r"])(),Object(n["e"])("h4",wt,"未完了タスク")):Object(n["f"])("",!0),0==o.futureTaskHour&&0!=o.futureDoneTaskHour?(Object(n["r"])(),Object(n["e"])("p",It,"未完了のタスクはありません")):Object(n["f"])("",!0),0!=o.futureTaskHour?(Object(n["r"])(),Object(n["e"])("div",St,[Object(n["h"])("table",Yt,[Ct,(Object(n["r"])(!0),Object(n["e"])(n["a"],null,Object(n["x"])(o.futureTask,(function(t){return Object(n["r"])(),Object(n["e"])("tr",{key:t.taskId},[Object(n["h"])("td",null,[Object(n["H"])(Object(n["h"])("input",{type:"checkbox","onUpdate:modelValue":function(e){return t.taskDone=e},onChange:function(e){return o.checkConfirm("remaining",t.taskTitle)}},null,40,["onUpdate:modelValue","onChange"]),[[n["D"],t.taskDone]])]),Object(n["h"])("td",null,Object(n["B"])(t.taskTitle),1),Object(n["h"])("td",null,[Object(n["h"])("span",null,Object(n["B"])(t.taskHour),1),_t])])})),128))]),Object(n["h"])("div",Mt,[Et,Object(n["g"])(Object(n["B"])(o.futureTaskHour)+"h",1)])])):Object(n["f"])("",!0),0!=o.futureTaskHour||0!=o.futureDoneTaskHour?(Object(n["r"])(),Object(n["e"])("h4",Bt,"完了タスク")):Object(n["f"])("",!0),0!=o.futureTaskHour&&0==o.futureDoneTaskHour?(Object(n["r"])(),Object(n["e"])("p",Vt,"完了したタスクはありません")):Object(n["f"])("",!0),0!=o.futureDoneTaskHour?(Object(n["r"])(),Object(n["e"])("div",xt,[Object(n["h"])("table",Ut,[Nt,(Object(n["r"])(!0),Object(n["e"])(n["a"],null,Object(n["x"])(o.futureDoneTask,(function(t){return Object(n["r"])(),Object(n["e"])("tr",{key:t.taskId},[Object(n["h"])("td",null,[Object(n["H"])(Object(n["h"])("input",{type:"checkbox","onUpdate:modelValue":function(e){return t.taskDone=e},onChange:function(e){return o.checkConfirm("complete",t.taskTitle)}},null,40,["onUpdate:modelValue","onChange"]),[[n["D"],t.taskDone]])]),Object(n["h"])("td",null,Object(n["B"])(t.taskTitle),1),Object(n["h"])("td",null,[Object(n["h"])("span",null,Object(n["B"])(t.taskHour),1),At])])})),128))]),Object(n["h"])("div",Ft,[Wt,Object(n["g"])(Object(n["B"])(o.futureDoneTaskHour)+"h",1)])])):Object(n["f"])("",!0)])):Object(n["f"])("",!0)]})),_:1})])}var Rt={data:function(){return{formats:{input:["YYYY-MM-DD"],data:["YYYY/MM/DD"]},modelConfig:{type:"string",mask:"YYYY年M月D日（W）"},newTask:"",newHour:"",id:1,todos:[],mode:"single",selectedDate:null}},watch:{todos:{handler:function(){localStorage.setItem("todos",JSON.stringify(this.todos))},deep:!0}},mounted:function(){this.todos=JSON.parse(localStorage.getItem("todos"))||[]},methods:{addItem:function(){var t={taskDay:this.todayString,taskId:this.lastId,taskTitle:this.newTask,taskHour:this.newHour,taskDone:!1};""!=this.newTask&&""!=this.newHour?(this.todos.push(t),this.newTask="",this.newHour=""):alert("タスク名と予定工数をそれぞれ入力してください")},deleteItem:function(t){confirm("タスク名「"+t.taskTitle+"」を削除してよろしいですか？")&&(this.todos=this.todos.filter((function(e){return e.taskId!=t.taskId}),this))},addFutureItem:function(){var t={taskDay:this.selectedDate,taskId:this.lastId,taskTitle:this.newTask,taskHour:this.newHour,taskDone:!1};""!=this.newTask&&""!=this.newHour?(this.todos.push(t),this.newTask="",this.newHour=""):alert("タスク名と予定工数をそれぞれ入力してください")},checkConfirm:function(t,e){var a;a="remaining"==t?"タスク名「"+e+"」を完了にしてよろしいですか？":"タスク「"+e+"」を未完了に戻してよろしいですか？",alert(a)},downloadCSV:function(){var t="\ufeff日付,タスク名,工数（h）\n";this.todos.forEach((function(e){var a=e["taskDay"]+","+e["taskTitle"]+","+e["taskHour"]+"\n";t+=a}));var e=new Blob([t],{type:"text/csv"}),a=document.createElement("a");a.href=window.URL.createObjectURL(e),a.download="all_task.csv",a.click()}},computed:{today:function(){var t=new Date;return t},todayString:function(){var t=new Array("日","月","火","水","木","金","土"),e=this.today.getFullYear()+"年"+(this.today.getMonth()+1)+"月"+this.today.getDate()+"日（"+t[this.today.getDay()]+"）";return e},remainingTask:function(){return this.todos.filter((function(t){return 0==t.taskDone&&t.taskDay==this.todayString}),this)},remainingHour:function(){var t=0;return this.remainingTask.forEach((function(e){t+=parseInt(e.taskHour,10)})),t},completedTask:function(){return this.todos.filter((function(t){return 1==t.taskDone&&t.taskDay==this.todayString}),this)},completedHour:function(){var t=0;return this.completedTask.forEach((function(e){t+=parseInt(e.taskHour,10)})),t},lastId:function(){var t=1;return this.todos.forEach((function(e){t<=e.taskId&&(t=e.taskId+1)})),t},dateSelect:function(){for(var t=[],e=[],a=new Array("日","月","火","水","木","金","土"),n=0;n<9;n++)t[n]=this.today.setDate(this.today.getDate()-n),e[n]=t[n].getFullYear()+"年"+(t[n].getMonth()+1)+"月"+t[n].getDate()+"日（"+a[t[n].getDay()]+"）";return t},futureTask:function(){return this.todos.filter((function(t){return 0==t.taskDone&&t.taskDay==this.selectedDate}),this)},futureDoneTask:function(){return this.todos.filter((function(t){return 1==t.taskDone&&t.taskDay==this.selectedDate}),this)},futureTaskHour:function(){var t=0;return this.futureTask.forEach((function(e){t+=parseInt(e.taskHour,10)})),t},futureDoneTaskHour:function(){var t=0;return this.futureDoneTask.forEach((function(e){t+=parseInt(e.taskHour,10)})),t},archiveTask:function(){return this.todos.filter((function(t){return 0==t.taskDone&&t.taskDay==this.selectedDate}),this)}}};Rt.render=Jt;var Gt=Rt,Pt=Object(n["h"])("h1",{class:"title pageTitle"},"データダウンロード",-1),Lt=Object(n["h"])("p",null,"登録タスクの一覧をCSV形式でダウンロードします。",-1);function zt(t,e,a,s,r,o){return Object(n["r"])(),Object(n["e"])("div",null,[Pt,Lt,Object(n["h"])("button",{class:"btn csvBtn",onClick:e[1]||(e[1]=function(){return o.downloadCSV&&o.downloadCSV.apply(o,arguments)})},"CSVダウンロード")])}var Kt={data:function(){return{formats:{input:["YYYY-MM-DD"],data:["YYYY/MM/DD"]},modelConfig:{type:"string",mask:"YYYY年M月D日（W）"},newTask:"",newHour:"",id:1,todos:[],mode:"single",selectedDate:null}},watch:{todos:{handler:function(){localStorage.setItem("todos",JSON.stringify(this.todos))},deep:!0}},mounted:function(){this.todos=JSON.parse(localStorage.getItem("todos"))||[]},methods:{addItem:function(){var t={taskDay:this.todayString,taskId:this.lastId,taskTitle:this.newTask,taskHour:this.newHour,taskDone:!1};""!=this.newTask&&""!=this.newHour?(this.todos.push(t),this.newTask="",this.newHour=""):alert("タスク名と予定工数をそれぞれ入力してください")},deleteItem:function(t){confirm("タスク名「"+t.taskTitle+"」を削除してよろしいですか？")&&(this.todos=this.todos.filter((function(e){return e.taskId!=t.taskId}),this))},addFutureItem:function(){var t={taskDay:this.selectedDate,taskId:this.lastId,taskTitle:this.newTask,taskHour:this.newHour,taskDone:!1};""!=this.newTask&&""!=this.newHour?(this.todos.push(t),this.newTask="",this.newHour=""):alert("タスク名と予定工数をそれぞれ入力してください")},checkConfirm:function(t,e){var a;a="remaining"==t?"タスク名「"+e+"」を完了にしてよろしいですか？":"タスク「"+e+"」を未完了に戻してよろしいですか？",alert(a)},downloadCSV:function(){var t="\ufeff日付,タスク名,工数（h）\n";this.todos.forEach((function(e){var a=e["taskDay"]+","+e["taskTitle"]+","+e["taskHour"]+"\n";t+=a}));var e=new Blob([t],{type:"text/csv"}),a=document.createElement("a");a.href=window.URL.createObjectURL(e),a.download="all_task.csv",a.click()}},computed:{today:function(){var t=new Date;return t},todayString:function(){var t=new Array("日","月","火","水","木","金","土"),e=this.today.getFullYear()+"年"+(this.today.getMonth()+1)+"月"+this.today.getDate()+"日（"+t[this.today.getDay()]+"）";return e},remainingTask:function(){return this.todos.filter((function(t){return 0==t.taskDone&&t.taskDay==this.todayString}),this)},remainingHour:function(){var t=0;return this.remainingTask.forEach((function(e){t+=parseInt(e.taskHour,10)})),t},completedTask:function(){return this.todos.filter((function(t){return 1==t.taskDone&&t.taskDay==this.todayString}),this)},completedHour:function(){var t=0;return this.completedTask.forEach((function(e){t+=parseInt(e.taskHour,10)})),t},lastId:function(){var t=1;return this.todos.forEach((function(e){t<=e.taskId&&(t=e.taskId+1)})),t},dateSelect:function(){for(var t=[],e=[],a=new Array("日","月","火","水","木","金","土"),n=0;n<9;n++)t[n]=this.today.setDate(this.today.getDate()-n),e[n]=t[n].getFullYear()+"年"+(t[n].getMonth()+1)+"月"+t[n].getDate()+"日（"+a[t[n].getDay()]+"）";return t},futureTask:function(){return this.todos.filter((function(t){return 0==t.taskDone&&t.taskDay==this.selectedDate}),this)},futureDoneTask:function(){return this.todos.filter((function(t){return 1==t.taskDone&&t.taskDay==this.selectedDate}),this)},futureTaskHour:function(){var t=0;return this.futureTask.forEach((function(e){t+=parseInt(e.taskHour,10)})),t},futureDoneTaskHour:function(){var t=0;return this.futureDoneTask.forEach((function(e){t+=parseInt(e.taskHour,10)})),t},archiveTask:function(){return this.todos.filter((function(t){return 0==t.taskDone&&t.taskDay==this.selectedDate}),this)}}};Kt.render=zt;var qt=Kt,Qt=Object(b["a"])({history:Object(b["b"])(),base:"/task_manager_spa/",routes:[{path:"/task_manager_spa",component:$},{path:"/task_manager_spa/add",component:Gt},{path:"/task_manager_spa/download",component:qt}]}),Xt=Qt,Zt=a("7b37"),$t=Object(n["d"])(d);$t.use(Xt),$t.use(Zt["a"]),$t.mount("#app")},ad04:function(t,e,a){"use strict";a("af94")},af94:function(t,e,a){}});
//# sourceMappingURL=app.1d851c27.js.map