(()=>{"use strict";const e=e=>e<10?`0${e}`:e;(t=>{const n=document.getElementById("timer-hours"),l=document.getElementById("timer-minutes"),c=document.getElementById("timer-seconds"),r=()=>{let t=(()=>{let e=(new Date("06 december 2021").getTime()-(new Date).getTime())/1e3;return{timeRemaining:e,hours:Math.floor(e/60/60),minutes:Math.floor(e/60%60),seconds:Math.floor(e%60)}})();t.timeRemaining<0?(clearInterval(r),n.textContent="00",l.textContent="00",c.textContent="00"):(n.textContent=e(t.hours),l.textContent=e(t.minutes),c.textContent=e(t.seconds))};setInterval(r,1e3)})(),(()=>{const e=document.querySelector(".menu"),t=document.querySelector("menu"),n=t.querySelector(".close-btn"),l=t.querySelectorAll("ul>li>a"),c=()=>{t.classList.toggle("active-menu")};e.addEventListener("click",c),n.addEventListener("click",c);for(let e=0;e<l.length;e++)l[e].addEventListener("click",c);l.forEach((e=>e.addEventListener("click",c)))})(),(()=>{const e=document.querySelector(".popup"),t=document.querySelectorAll(".form-btn"),n=e.querySelector(".popup-close");t.forEach((t=>{t.addEventListener("click",(()=>{e.style.display="block"}))})),n.addEventListener("click",(()=>{e.style.display="none"}))})(),(()=>{const e=document.querySelectorAll(".calc-item"),t=document.querySelectorAll("input[type='text']"),n=document.querySelectorAll("input[placeholder='Ваше сообщение']"),l=document.querySelectorAll("input[type='email']");document.querySelectorAll("input[type='tel']"),e.forEach((e=>{e.addEventListener("input",(()=>{e.value=e.value.replace(/[^\d\.]+/gi,"")}))})),t.forEach((e=>{e.addEventListener("input",(()=>{e.value=e.value.replace(/[^а-яА-Я\- ]+/gi,"")}))})),n.forEach((e=>{e.addEventListener("input",(()=>{e.value=e.value.replace(/[^а-яА-Я\- ]+/gi,"")}))})),l.forEach((e=>{e.addEventListener("input",(()=>{e.value=e.value.replace(/[^a-zA-Z\@\-\_\.\!\~\*]+/gi,"")}))})),e.forEach((e=>{e.addEventListener("input",(()=>{e.value=e.value.replace(/[^\d\(\)\-]+/gi,"")}))}))})()})();