// Lấy tất cả các nút có class 'web4-button'
var buttons = document.querySelectorAll(".web4-button");

// Lấy đối tượng modal
var modal = document.getElementById("pop-up");

// Lấy nút đóng modal
var span = document.getElementsByClassName("close")[0];

// Lặp qua tất cả các nút và gán sự kiện onclick
buttons.forEach(function(btn) {
    btn.onclick = function() {
        modal.style.display = "flex";  // Hiển thị và căn giữa modal
    }
});

// Đóng modal khi nhấn vào nút close
span.onclick = function() {
    modal.style.display = "none";
}

// Đóng modal khi click ra ngoài nội dung modal
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}
