var $ = document.getElementById.bind(document);

/**
 * input: 5
 * output: 2
 * 
 * Khu vực: A = 2, B = 1, C = 0.5, X = 0;
 * Đối tượng: 1 = 2.5, 2 = 1.5, 3 = 1, 0 = 0;
 * 
 * Đậu nếu tongDiem >= diemChuan && (diemMon_1 > 0 && diemMon_2 > 0 && diemMon_3 > 0)
 * ngược lại thì Rớt
 * 
 * tongDiem = tongDiem3mon + điểm ưu tiên(khu vực + đối tượng)
 *  
 * 2 hàm : 1 hàm tính đậu(true) rớt(flase)
 * 1 hàm tính tổng điểm;
 * 
 * để biết đậu rớt thì phải tính tổng điểm trước
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

// Hàm xét đậu rớt
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
    }


    $("ketQuaDauRot").innerHTML = ketQuaDauRot;
    $("ketQuaTongDiem").innerHTML = "Tổng số điểm đạt được là: " + tongDiem;

};