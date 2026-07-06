// Hiển thị ngày giờ
function hienThiGio() {
    const ngay = new Date();
    const gio = ngay.toLocaleString("vi-VN");
    const hienthi = document.getElementById("time");

    if (hienthi) {
        hienthi.innerHTML = "📅 " + gio;
    }
}

setInterval(hienThiGio, 1000);

// Kiểm tra đăng nhập
function dangNhap() {
    let user = document.getElementById("username").value;
    let pass = document.getElementById("password").value;

    if (user === "" || pass === "") {
        alert("Vui lòng nhập đầy đủ tên đăng nhập và mật khẩu!");
        return false;
    }

    alert("Đăng nhập thành công! Xin chào " + user);
    return false;
}

// Tìm kiếm
function timKiem() {
    let key = document.getElementById("search").value;

    if (key === "") {
        alert("Vui lòng nhập từ khóa!");
    } else {
        alert("Bạn đang tìm: " + key);
    }
}