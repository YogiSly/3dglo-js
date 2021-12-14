(()=>{"use strict";const e=e=>e<10?`0${e}`:e,t=({timing:e,draw:t,duration:o})=>{let n=performance.now();requestAnimationFrame((function a(l){let c=(l-n)/o;c>1&&(c=1);let r=e(c);t(r),c<1&&requestAnimationFrame(a)}))},o=({formId:e,someElem:t=[]})=>{const o=document.getElementById(e),n=document.createElement("div");let a=!1,l=!1,c=!1,r=!1;o.noValidate=!0;try{o.addEventListener("submit",(s=>{s.preventDefault(),(()=>{const s=o.querySelectorAll("input"),i=new FormData(o),d={};var u;n.innerHTML="<img src='./src/images/load.png'>",o.append(n),i.forEach(((e,t)=>{d[t]=e})),t.forEach((e=>{const t=document.getElementById(e.id);e.type,d[e.id]=t.textContent})),function(t){let o=!1;return a=!1,l=!1,c=!1,r=!1,t.forEach((e=>{"user_name"===e.attributes.name.value&&(/^[а-яА-Я]{2,}$/gi.test(e.value)?a=!0:(e.setCustomValidity(""),e.reportValidity())),"user_email"===e.attributes.name.value&&(/^[\da-zA-Z\-@\.]{5,}$/gi.test(e.value)?c=!0:(e.setCustomValidity(""),e.reportValidity())),"user_phone"===e.attributes.name.value&&(/^[\d\-\+\(\)]{11,}$/gi.test(e.value)?l=!0:(e.setCustomValidity(""),e.reportValidity())),"user_message"===e.attributes.name.value&&(/^[\dа-яА-Я\-\(\)\,\.\!\?\:\;]*$/gi.test(e.value)?r=!0:(e.setCustomValidity(""),e.reportValidity())),e.setCustomValidity("Заполните данные")})),("form2"===e&&!0===a&&!0===l&&!0===c&&!0===r||"form2"!=e&&!0===a&&!0===c&&!0===l)&&(o=!0),o}(s)?(u=d,fetch("https://jsonplaceholder.typicode.com/posts",{method:"POST",body:JSON.stringify(u),headers:{"Content-Type":"application/json"}}).then((e=>e.json()))).then((e=>{n.textContent="Спасибо! Наш менеджер с вами свяжется",setTimeout((()=>{n.textContent=""}),5e3),s.forEach((e=>{e.value=""}))})).catch((e=>{n.textContent="Ошибка..."})):n.textContent=""})()}))}catch(e){console.log(e.message)}};(t=>{const o=document.getElementById("timer-hours"),n=document.getElementById("timer-minutes"),a=document.getElementById("timer-seconds"),l=()=>{let t=(()=>{let e=(new Date("20 december 2021").getTime()-(new Date).getTime())/1e3;return{timeRemaining:e,hours:Math.floor(e/60/60),minutes:Math.floor(e/60%60),seconds:Math.floor(e%60)}})();t.timeRemaining<0?(clearInterval(l),o.textContent="00",n.textContent="00",a.textContent="00"):(o.textContent=e(t.hours),n.textContent=e(t.minutes),a.textContent=e(t.seconds))};setInterval(l,1e3)})(),(()=>{const e=document.querySelector("menu"),t=()=>{e.classList.toggle("active-menu")};document.addEventListener("click",(e=>{e.target.closest(".menu")&&t()})),e.addEventListener("click",(e=>{(e.target.closest("menu>ul>li>a")||e.target.classList.contains("close-btn"))&&t()}))})(),(()=>{const e=document.querySelector(".popup"),o=document.querySelectorAll(".popup-btn");e.style.opacity=0,o.forEach((o=>{o.addEventListener("click",(()=>{e.style.display="block",window>768?t({duration:700,timing:e=>Math.pow(e,5),draw(t){e.style.opacity=t}}):e.style.opacity=1}))})),e.addEventListener("click",(o=>{window>768?o.target.closest(".popup-content")&&!o.target.classList.contains("popup-close")||(t({duration:550,timing:e=>Math.pow(e,5),draw(t){e.style.opacity=1-t}}),setTimeout((()=>{e.style.display="none"}),550)):(e.style.opacity=0,e.style.display="none")}))})(),(()=>{const e=document.querySelectorAll(".calc-item");document.querySelectorAll("input[type='text']:not(.calc-item)"),document.querySelectorAll("input[placeholder='Ваше сообщение']"),document.querySelectorAll("input[type='email']"),document.querySelectorAll("input[type='tel']"),e.forEach((e=>{e.addEventListener("input",(()=>{e.value=e.value.replace(/[^\d\.]+/gi,"")}))}))})(),(()=>{const e=document.querySelector(".service-header"),t=document.querySelectorAll(".service-header-tab"),o=document.querySelectorAll(".service-tab");e.addEventListener("click",(e=>{if(e.target.closest(".service-header-tab")){const n=e.target.closest(".service-header-tab");t.forEach(((e,t)=>{e===n?(e.classList.add("active"),o[t].classList.remove("d-none")):(e.classList.remove("active"),o[t].classList.add("d-none"))}))}}))})(),(()=>{const e=document.querySelector(".portfolio-content"),t=document.querySelectorAll(".portfolio-item"),o=document.querySelector(".portfolio-dots"),n=document.createElement("li");let a=document.querySelectorAll(".dot"),l=0,c=0;n.classList.add("dot");for(let e=0;e<t.length;e++)0===e?(o.append(n),n.classList.add("dot-active")):o.insertAdjacentHTML("beforeend",'<li class="dot"></li>');a=document.querySelectorAll(".dot");const r=(e,t,o)=>{e[t].classList.remove(o)},s=(e,t,o)=>{e[t].classList.add(o)},i=()=>{r(t,l,"portfolio-item-active"),r(a,l,"dot-active"),l++,l>=t.length&&(l=0),s(t,l,"portfolio-item-active"),s(a,l,"dot-active")},d=(e=1500)=>{c=setInterval(i,e)};d(),e.addEventListener("click",(e=>{e.preventDefault(),e.target.matches(".dot, .portfolio-btn")&&(r(t,l,"portfolio-item-active"),r(a,l,"dot-active"),e.target.matches("#arrow-right")?l++:e.target.matches("#arrow-left")?l--:e.target.classList.contains("dot")&&a.forEach(((t,o)=>{e.target===t&&(l=o)})),l>=t.length&&(l=0),l<0&&(l=t.length-1),s(t,l,"portfolio-item-active"),s(a,l,"dot-active"))})),e.addEventListener("mouseenter",(e=>{e.target.matches(".dot, .portfolio-btn")&&clearInterval(c)}),!0),e.addEventListener("mouseleave",(e=>{e.target.matches(".dot, .portfolio-btn")&&d(2e3)}),!0)})(),((e=100)=>{const t=document.querySelector(".calc-block"),o=document.querySelector(".calc-type"),n=document.querySelector(".calc-square"),a=document.querySelector(".calc-count"),l=document.querySelector(".calc-day"),c=document.getElementById("total");t.addEventListener("input",(t=>{t.target!==o&&t.target!==n&&t.target!==a&&t.target!==l||(()=>{const t=+o.options[o.selectedIndex].value,r=n.value;let s=0,i=1,d=1;a.value>1&&(i+=+a.value/10),l.value&&l.value<5?d=2:l.value&&l.value<10&&(d=1.5),s=o.value&&n.value?e*t*r*i*d:0,c.textContent=s})()}))})(),o({formId:"form1",someElem:[{type:"block",id:"total"}]}),o({formId:"form3",someElem:[{type:"block",id:"total"}]}),o({formId:"form2",someElem:[{type:"block",id:"total"}]})})();