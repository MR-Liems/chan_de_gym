function chinhSideBar() {
    const sidebar = document.querySelector('.sidebar');
    const openSidebarButton = document.getElementById('openSidebar');

    sidebar.classList.toggle('closed');

    if (sidebar.classList.contains('closed')) {
        openSidebarButton.style.display = 'block'; // Hiển thị nút mở sidebar khi sidebar bị đóng
    } else {
        openSidebarButton.style.display = 'none'; // Ẩn nút khi sidebar mở
    }
}
