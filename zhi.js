const pet = document.getElementById("pet-container");
//粒子特效
const particles = document.getElementById("particles");
const colors = ["#A5E5F8", "#E5C46B", "#FFFFFF"];
//不耐烦
const angry = document.getElementById("pet-container");

// 是否正在拖动
let isDragging = false;

// 鼠标与图片左上角的距离
let offsetX = 0;
let offsetY = 0;

// 按下鼠标
pet.addEventListener("pointerdown", function(e) {

    isDragging = true;

    // 计算鼠标在图片中的位置
    const rect = pet.getBoundingClientRect();

    offsetX = e.clientX - rect.left;
    offsetY = e.clientY - rect.top;

    // 固定定位，方便自由移动
    pet.style.position = "fixed";
    pet.style.left = rect.left + "px";
    pet.style.top = rect.top + "px";

    // 防止拖动时鼠标脱离图片
    pet.setPointerCapture(e.pointerId);

});

// 移动鼠标
pet.addEventListener("pointermove", function(e) {

    if (!isDragging) return;

    pet.style.left = (e.clientX - offsetX) + "px";
    pet.style.top = (e.clientY - offsetY) + "px";

});

// 松开鼠标
pet.addEventListener("pointerup", function() {

    isDragging = false;

});

// 取消拖动
pet.addEventListener("pointercancel", function() {

    isDragging = false;

});
if(isDragging === true){
     angry.src = "璇芷生气.png";  
}
if(isDragging === false){
     angry.src = "xuanzhi.png";  
}
for (let i = 0; i < 50; i++) {
const star = document.createElement("span");
star.textContent = "";
star.className = "particle";
star.style.position = "absolute";
//Math.floor():向下取整
const randomIndex = Math.floor(Math.random() * colors.length);
star.style.color = colors[randomIndex];
//Math.random():随机生成一个0~1之间的数字
star.style.left = Math.random()*100+"vw";
star.style.top = Math.random()*100+"vh";
particles.appendChild(star);
//随机移动时间
const timing = Math.random()*5 + 5;
// 随机水平移动距离
const moveX = (Math.random() - 0.5) * 300;
// 随机垂直移动距离
const moveY = (Math.random() - 0.5) * 300;
// 把随机距离交给 CSS
star.style.setProperty("--move-x", moveX + "px");
star.style.setProperty("--move-y", moveY + "px");
//把时间交给CSS
star.style.setProperty("--timing",timing+"s");
}
