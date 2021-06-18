const categorySeeding = (db) => {
  return db.category.bulkCreate([

    { name: "Chương 1: Este-Lipit", subjectId: 1 },//1 done
    { name: "Chương 2: Cacbohidrat", subjectId: 1 },//2 done
    { name: "Chương 3: Amin, amino axit và polime", subjectId:  1},//3 done
    { name: "Chương 4: Đại cương về kim loại", subjectId:  1},//4 done
    { name: "Chương 5: Kim loại Kiềm, kiềm thổ, nhôm", subjectId:  1},//5 done

    { name: "Chương 1: Sự Hình Thành Trật Tự Thế Giới Mới Sau Chiến Tranh Thế Giới Thứ Hai (1945 - 1949) ", subjectId: 3 },//6 done
    { name: "Chương 2: Liên Xô Và Các Nước Đông Âu (1945 - 1991). Liên Bang Nga (1991 - 2000)  ", subjectId:  3},//7 done
    { name: "Chương 3: Các Nước Á, Phi và Mĩ Latinh (1945 - 2000) ", subjectId:  3},//8 done
    { name: "Chương 4: Mĩ, Tây Âu, Nhật Bản (1945 - 2000) ", subjectId:  3},//9 done
    { name: "Chương 5: Quan Hệ Quốc Tế (1945 - 2000) ", subjectId:  3},//10 done


    { name: "Chương 1: Địa Lý Việt Nam", subjectId: 4 }, //11done
    { name: "Chương 2: Địa Lý Kinh Tế", subjectId:  4},//12done
    { name: "Chương 3: Đặc Điểm Chung Của Tự Nhiên ", subjectId:  4},//13done
    { name: "Chương 4: Vấn Đề Sử Dụng Và Bảo Vệ Tự Nhiên", subjectId:  4},//14done
    { name: "Chương 5: Địa Lí Dân Cư ", subjectId:  4},//15done


    { name: "Chương 1: Cơ Chế Di Truyền Và Biến Dị", subjectId: 5},//16done
    { name: "Chương 2: Tính Quy Luật Của Hiện Tượng Di Truyền ", subjectId:  5},//17done
    { name: "Chương 3: Di Truyền Học Quần Thể", subjectId:  5},//18done
    { name: "Chương 4: Ứng Dụng Di Truyền Học", subjectId:  5},//19done
    { name: "Chương 5: Di Truyền Con Người", subjectId:  5},//20done


    { name: "Chương 1: Khái Niệm Về Hệ Cơ Sở Dữ Liệu", subjectId: 6},//21done
    { name: "Chương 2: Hệ Quản Trị Cơ Sở Dữ Liệu Microsoft Access ", subjectId:  6},//22done
    { name: "Chương 3: Hệ Cơ Sở Dữ Liệu Quan Hệ", subjectId: 6 },//23done
    { name: "Chương 4: Kiến Trúc Và Bảo Mật Các Hệ Cơ Sở Dữ Liệu", subjectId: 6 },//24done

    { name: "Chương 1: Giao Động Cơ", subjectId: 2},//25done
    { name: "Chương 2: Sóng Cơ Và Sóng Âm", subjectId: 2},//26done
    { name: "Chương 3: Dòng Điện Xoay Chiều", subjectId: 2},//27done
    { name: "Chương 4: Lượng Tử Ánh Sáng", subjectId: 2},//28done
    { name: "Chương 5: Sóng Ánh Sáng", subjectId: 2},//29done
  ]);
};

module.exports = categorySeeding;
