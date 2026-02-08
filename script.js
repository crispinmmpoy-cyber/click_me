let growCount = 0;

const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");
const clickMeLink = document.getElementById("clickMeLink");

noBtn.addEventListener("click", () => {
growCount++;
const scale = 1 + growCount * 0.18;
yesBtn.style.transform = `scale(${scale})`;
});

yesBtn.addEventListener("click", () => {
alert("YAY!!! 💖💘💖");
});

clickMeLink.addEventListener("click", (e) => {
e.preventDefault();
alert("Now press YES 😄");
});
