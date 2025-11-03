const btn = document.getElementById("drawButton");
const p1 = document.getElementById("prize1");
const p2 = document.getElementById("prize2");
const p3 = document.getElementById("prize3");
const message = document.getElementById("final-message");

btn.addEventListener("click", () => {
  btn.disabled = true; // กันกดซ้ำ
  message.classList.add("hidden"); // ซ่อนข้อความสุดท้าย

  // หมุนเลข
  [p1, p2, p3].forEach(el => el.classList.add("spin"));

  let spin = setInterval(() => {
    p1.textContent = "🏆 รางวัลที่ 1: " + Math.floor(Math.random() * 100);
    p2.textContent = "🥈 รางวัลที่ 2: " + Math.floor(Math.random() * 100);
    p3.textContent = "🥉 รางวัลที่ 3: " + Math.floor(Math.random() * 100);
  }, 100);

  // หลัง 2.5 วินาที หยุดหมุนแล้วแสดงผลจริง
  setTimeout(() => {
    clearInterval(spin);
    const prize1 = Math.floor(Math.random() * 100);
    const prize2 = Math.floor(Math.random() * 100);
    const prize3 = Math.floor(Math.random() * 100);

    p1.textContent = `🏆 รางวัลที่ 1: ${prize1}`;
    p2.textContent = `🥈 รางวัลที่ 2: ${prize2}`;
    p3.textContent = `🥉 รางวัลที่ 3: ${prize3}`;

    [p1, p2, p3].forEach(el => el.classList.remove("spin"));

    message.textContent = `🎉 ผลการสุ่มรางวัลคือ ${prize1}, ${prize2}, ${prize3} 🎉`;
    message.classList.remove("hidden");

    btn.disabled = false; }, 2500);
});
