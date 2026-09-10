const root=document.documentElement;
const saved=localStorage.getItem("theme");
if(saved) root.dataset.theme=saved;

document.getElementById("themeToggle").addEventListener("click",()=>{
  const dark=root.dataset.theme==="dark";
  root.dataset.theme=dark?"light":"dark";
  localStorage.setItem("theme",root.dataset.theme);
  document.getElementById("themeToggle").textContent=dark?"☾":"☀";
});

document.querySelector(".menu-btn").addEventListener("click",()=>{
  document.querySelector(".nav-links").classList.toggle("open");
});
document.querySelectorAll(".nav-links a").forEach(a=>a.addEventListener("click",()=>{
  document.querySelector(".nav-links").classList.remove("open");
}));
document.getElementById("year").textContent=new Date().getFullYear();
