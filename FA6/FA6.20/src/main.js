
// ======================================
// 1. LẤY CÁC PHẦN TỬ HTML
// ======================================

const menuToggle = document.getElementById('menuToggle');
const navigation = document.getElementById('mainNav');
const navLinks = document.querySelectorAll('.nav-link');


// ======================================
// 2. XỬ LÝ ĐÓNG / MỞ MOBILE MENU
// ======================================

menuToggle.addEventListener('click', function () {

    // Thêm hoặc xóa class "open"
    const isOpen = navigation.classList.toggle('open');

    // Cập nhật trạng thái truy cập
    menuToggle.setAttribute('aria-expanded', String(isOpen));

});


// ======================================
// 3. XỬ LÝ KHI CHỌN MENU ITEM
// ======================================

navLinks.forEach(function (link) {

    link.addEventListener('click', function () {

        // Xóa trạng thái active của tất cả menu item
        navLinks.forEach(function (item) {
            item.classList.remove('active');
        });

        // Đặt active cho menu item được chọn
        link.classList.add('active');

        // Đóng menu nếu đang ở chế độ mobile
        navigation.classList.remove('open');

        menuToggle.setAttribute('aria-expanded', 'false');

    });

});


// ======================================
// 4. ĐÓNG MENU KHI NHẤN PHÍM ESC
// ======================================

document.addEventListener('keydown', function (event) {

    if (event.key === 'Escape') {

        navigation.classList.remove('open');

        menuToggle.setAttribute('aria-expanded', 'false');

    }

});


// ======================================
// 5. KIỂM TRA JAVASCRIPT
// ======================================

console.log('Lander Landing Page loaded successfully!');
