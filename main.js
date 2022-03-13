var $ = document.getElementById.bind(document);

/**
 * BT1: quản lý tuyển sinh
 * - Đầu vào: người dùng nhập diemChuan, diemMon_1,
 *  diemMon_2, diemMon_3, khuVuc, doiTuong, tongDiem, ketQuaDauRot
 * 
 * - Xử lý: 
 * B1: tạo hàm tính tổng điểm 3 môn thi
 * B2: tạo hàm tính điểm ưu tiên 
 *   Khu vực: A = 2, B = 1, C = 0.5, X = 0;
 *   Đối tượng: 1 = 2.5, 2 = 1.5, 3 = 1, 0 = 0;
 * B3: tạo hàm kiểm tra đậu rớt
 * B4: tính tổng điểm
 * B5: kiểm tra đậu rớt
 * 
 * - Đầu ra: in kết quả đậu rớt và tổng điểm đạt được
 */


// Hàm tính tổng điểm 3 môn thi;
function tongDiem3Mon(x, y, z){
    return x + y + z;
};

// Hàm tính điểm ưu tiên
function diemUuTien(kv, dt){
    switch (kv) {
        case "A": kv = 2; break;
        case "B": kv = 1; break;
        case "C": kv = 0.5; break;
        case "X": kv = 0; break;
    };

    switch (dt) {
        case 0: dt = 0; break;
        case 1: dt = 2.5; break;
        case 2: dt = 1.5; break;
        case 3: dt = 1; break;
    };

    return kv + dt;
};

// Hàm tính tổng điểm 3 môn thi;
function tongDiem3Mon(x, y, z){
    return x + y + z;
};

// Hàm kiểm tra đậu rớt
function kiemTraDauRot(td, dc, dm_1, dm_2, dm_3){
    if(td >= dc && (dm_1 > 0 && dm_2 > 0 && dm_3 > 0)){
        return true;
    }else {
        return false;
    };
};

$("btnKetQua").onclick = function(){
    var diemChuan = $("diemChuan").value;
    var diemMon_1 = $("diemMon_1").value *1;
    var diemMon_2 = $("diemMon_2").value *1;
    var diemMon_3 = $("diemMon_3").value *1;
    var khuVuc = $("khuVuc").value;
    var doiTuong = $("doiTuong").value *1;
    var ketQuaDauRot;
    var tongDiem;

    tongDiem = tongDiem3Mon(diemMon_1, diemMon_2, diemMon_3) + diemUuTien(khuVuc, doiTuong);
    ketQuaDauRot = kiemTraDauRot(tongDiem, diemChuan, diemMon_1, diemMon_2, diemMon_3);
    if(ketQuaDauRot){
        ketQuaDauRot = "Đậu";
    }else{
        ketQuaDauRot = "Rớt";
    };


    $("ketQuaDauRot").innerHTML = ketQuaDauRot;
    $("ketQuaTongDiem").innerHTML = "Tổng số điểm đạt được là: " + tongDiem;

};