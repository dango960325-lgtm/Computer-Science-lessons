// Radar chart
const ctx = document.getElementById('radarChart');
new Chart(ctx, {
  type: 'radar',
  data: {
    labels: ['創意', '邏輯', '程式能力', '溝通技巧', '領導能力'],
    datasets: [{
      label: '我的能力',
      data: [70, 60, 50, 80, 70],
      fill: true,
      backgroundColor: 'rgba(135,206,235,0.2)',
      borderColor: 'rgba(135,206,235,1)',
      pointBackgroundColor: 'rgba(135,206,235,1)'
    }]
  },
  options: {
    responsive: true,
    scales: {
      r: {
        suggestedMin: 0,
        suggestedMax: 100,
        pointLabels: { color: "white" }
      }
    }
  }
});

// 流星動畫
const colors = ["white", "#87CEEB", "#dda0dd"]; // 白、藍、粉紫
function createMeteor() {
  if (document.querySelectorAll(".meteor").length >= 6) return;
  const meteor = document.createElement("div");
  meteor.classList.add("meteor");
  meteor.style.left = Math.random() * window.innerWidth + "px";
  meteor.style.top = "-50px";
  meteor.style.background = `linear-gradient(45deg, ${colors[Math.floor(Math.random()*colors.length)]}, transparent)`;
  document.body.appendChild(meteor);
  setTimeout(() => meteor.remove(), 3000);
}
function meteorLoop() {
  createMeteor();
  setTimeout(meteorLoop, Math.random() * 4000 + 2000); // 2~6 秒
}
meteorLoop();

// 回到頂部
const toTop = document.getElementById("toTop");
window.addEventListener("scroll", () => {
  toTop.style.display = window.scrollY > 400 ? "block" : "none";
});
toTop.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

// 語言切換
const toggle = document.getElementById("langToggle");
let lang = "zh";
toggle.addEventListener("click", () => {
  lang = lang === "zh" ? "en" : "zh";
  toggle.innerText = lang === "zh" ? "EN" : "中";
  document.querySelectorAll("[data-zh]").forEach(el => {
    el.innerText = lang === "zh" ? el.dataset.zh : el.dataset.en;
  });
});

// 觀看次數
let count = localStorage.getItem("viewCount") || 0;
count++;
localStorage.setItem("viewCount", count);
document.getElementById("viewCount").innerText = "觀看次數：" + count;
