const pet = document.getElementById("pet-container");

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
const petContainer = document.getElementById("petContainer");

let y = 100;          // 当前高度
let velocity = 0;     // 下落速度
let gravity = 0.5;    // 重力
let ground = 400;     // 地面位置

function fall() {

    // 重力让速度逐渐增加
    velocity += gravity;

    // 根据速度改变位置
    y += velocity;

    // 检查是否碰到地面
    if (y >= ground) {
        y = ground;
        velocity = 0;
    }

    petContainer.style.top = y + "px";

    requestAnimationFrame(fall);
}

fall();
