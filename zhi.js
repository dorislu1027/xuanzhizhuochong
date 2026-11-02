const pet = document.getElementById("pet");

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

