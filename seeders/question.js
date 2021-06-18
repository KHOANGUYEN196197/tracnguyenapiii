const questionSeeding = async (db) => {
  const categories = await db.category.findAll({});
  const questions = [];
  // for (const item of categories) {
  //   let levelId = 1;
  //   for (let i = 1; i <= 20; i++) {
  //     questions.push({
  //       content: `Câu hỏi cateId-${item.id} quesNumber-${i} level-${levelId}`,
  //       cateId: item.id,
  //       levelId,
  //     });
  //     if (i % 5 === 0) levelId++;
  //   }
  // }
  // return db.question.bulkCreate(questions);
  return db.question.bulkCreate([
    ///////////////10
    {
      content:
        "Với thắng lợi của Cách mạng tháng Hai năm 1917, Nga trở thành nước",
      cateId: 10,
      levelId: 1,
    },
    {
      content:
        "Hạn chế của các cuộc khởi nghĩa chống thực dân Pháp cuối thế kỷ XIX ở Việt Nam là",
      cateId: 10,
      levelId: 1,
    },
    {
      content:
        "Nội dung nào không phải là nguyên nhân thất bại của cuộc kháng chiến chống thực dân Pháp xâm lược ở Việt Nam (1858 - 1884)? ",
      cateId: 10,
      levelId: 1,
    },
    {
      content:
        "Yếu tố nào quyết định sự xuất hiện của khuynh hướng tư sản ở Việt Nam đầu thế kỉ XX?  ",
      cateId: 10,
      levelId: 1,
    },
    {
      content: "Hội nghị Pốtxđam (1945) thông qua quyết định nào? ",
      cateId: 10,
      levelId: 1,
    },

    {
      content:
        "Từ năm 1950 đến nửa đầu những năm 70 của thế kỉ XX, quốc gia nào có nền công nghiệp đứng thứ hai thế giới?",
      cateId: 10,
      levelId: 2,
    },
    {
      content:
        "Hiệp định về những cơ sở của quan hệ giữa Đông Đức và Tây Đức (1972) và Định ước Henxinki (1975) đều chủ trương ",
      cateId: 10,
      levelId: 2,
    },
    {
      content:
        "Đầu năm 1930, khuynh hướng vô sản thắng thế hoàn toàn khuynh hướng tư sản ở Việt Nam vì  ",
      cateId: 10,
      levelId: 2,
    },
    {
      content:
        "Đặc điểm của phong trào dân tộc dân chủ ở Việt Nam từ sau Chiến tranh thế giới thứ nhất đến đầu năm 1930 là ",
      cateId: 10,
      levelId: 2,
    },
    {
      content:
        "Cuộc bãi công của công nhân Ba Son (tháng 8 - 1925) là mốc đánh dấu phong trào công nhân Việt Nam ",
      cateId: 10,
      levelId: 2,
    },

    {
      content:
        "Cơ quan ngôn luận của Đông Dương Cộng sản Đảng (1929) là tờ báo ",
      cateId: 10,
      levelId: 3,
    },
    {
      content: "Năm 1921, Nguyễn Ái Quốc đã ",
      cateId: 10,
      levelId: 3,
    },
    {
      content:
        "Điểm mới của Nghị quyết Hội nghị lần thứ 8 Ban Chấp hành Trung ương tháng 5 - 1941 so với Luận cương chính trị tháng 10 - 1930 của Đảng Cộng sản Đông Dương là chủ trương",
      cateId: 10,
      levelId: 3,
    },
    {
      content:
        "Cuộc chiến đấu của quân dân Việt Nam tại các đô thị phía Bắc vĩ tuyến 16 từ cuối năm 1946 đến đầu năm 1947 có nhiệm vụ trọng tâm là",
      cateId: 10,
      levelId: 3,
    },
    {
      content:
        "Trong những năm 1953 - 1954, để can thiệp sâu vào chiến tranh Đông Dương, Mĩ đã",
      cateId: 10,
      levelId: 3,
    },

    {
      content:
        "Trong chiến dịch Hồ Chí Minh năm 1975, lực lượng chính trị giữ vai trò ",
      cateId: 10,
      levelId: 4,
    },
    {
      content:
        "Cuộc kháng chiến chống Mĩ, cứu nước (1954 - 1975) của nhân dân Việt Nam thắng lợi là một sự kiện có tầm quan trọng quốc tế to lớn và tính thời đại sâu sắc vì đã",
      cateId: 10,
      levelId: 4,
    },
    {
      content:
        "Sự kiện nào mở ra kỉ nguyên độc lập, thống nhất, đi lên chủ nghĩa xã hội của Việt Nam?",
      cateId: 10,
      levelId: 4,
    },
    {
      content:
        "Nội dung nào thể hiện sự linh hoạt, sáng tạo của Bộ Chính trị Trung ương Đảng trong việc đề ra kế hoạch giải phóng hoàn toàn miền Nam trong hai năm 1975 và 1976?",
      cateId: 10,
      levelId: 4,
    },
    {
      content:
        "Nội dung nào không phải là ý nghĩa của Hiệp định Pari năm 1973 về Việt Nam?",
      cateId: 10,
      levelId: 4,
    },
    ///////////////////6

    {
      content:
        "Kế hoạch 5 năm khôi phục kinh tế sau chiến tranh ở Liên Xô diễn ra trong khoảng thời gian nào ?",
      cateId: 6,
      levelId: 1,
    },
    {
      content:
        "Những thành tựu của kế hoạch khôi phục kinh tế sau chiến tranh ở Liên Xô (1945 - 1950) là",
      cateId: 6,
      levelId: 1,
    },
    {
      content: "Liên Xô chế tạo thành công bom nguyên tử vào thời gian nào? ",
      cateId: 6,
      levelId: 1,
    },
    {
      content: "Việc Liên Xô chế tạo thành công bom nguyên tử có ý nghĩa gì ?",
      cateId: 6,
      levelId: 1,
    },
    {
      content:
        "Nội dung nào phản ánh đúng vị trí của kinh tế Liên Xô trong nền kinh tế thế giới từ những năm 1950 đến nửa đầu những năm 70 của thế kỉ XX?",
      cateId: 6,
      levelId: 1,
    },

    {
      content: " Vào năm 1957, Liên Xô đã",
      cateId: 6,
      levelId: 2,
    },
    {
      content:
        "Một trong những thành công của Liên Xô trong hơn 20 năm xây dựng chủ nghĩa xã hội (1950 - những năm 70) là :",
      cateId: 6,
      levelId: 2,
    },
    {
      content: "Yuri Ga-ga-rin là ai ?",
      cateId: 6,
      levelId: 2,
    },
    {
      content:
        "Sau hơn 20 năm xây dựng chủ nghĩa xã hội, Liên Xô đã đạt được thành tựu lớn trong lĩnh vực giáo dục là?",
      cateId: 6,
      levelId: 2,
    },
    {
      content:
        " Thuận lợi lớn của Liên Xô sau Chiến tranh thế giới thứ hai là:",
      cateId: 6,
      levelId: 2,
    },

    {
      content: "Trong những năm 1946 – 1950, nhân dân Liên Xô đã",
      cateId: 6,
      levelId: 3,
    },
    {
      content:
        " Kế hoạch 5 năm khôi phục kinh tế (1946 – 1950) ở Liên Xô đã hoàn thành trước thời hạn",
      cateId: 6,
      levelId: 3,
    },
    {
      content:
        "Trong giai đoạn 1945 – 1950, Liên Xô đạt được thành tựu nào sau đây?",
      cateId: 6,
      levelId: 3,
    },
    {
      content:
        "Từ năm 1950 đến những năm 1970, nhân dân Liên Xô đã thực hiện nhiệm vụ nào sau đây?",
      cateId: 6,
      levelId: 3,
    },
    {
      content:
        "Công cuộc xây dựng cơ sở vật chất – kĩ thuật của chủ nghĩa xã hội ở Liên Xô từ năm 1950 đến những năm 1970 được thực hiện bởi",
      cateId: 6,
      levelId: 3,
    },

    {
      content:
        "Từ năm 1950 đến những năm 70 của thế kỉ XX, Liên Xô đi đầu thế giới trong những ngành nào?",
      cateId: 6,
      levelId: 4,
    },
    {
      content:
        "Từ năm 1950 đến những năm 70 của thế kỉ XX, Liên Xô trở thành cường quốc công nghiệp đứng thứ mấy trên thế giới?",
      cateId: 6,
      levelId: 4,
    },
    {
      content:
        "Thành tựu về mặt xã hội của Liên Xô trong khoảng 20 năm xây dựng cơ sở vật chất – kĩ thuật của chủ nghĩa xã hội (1950 – nửa đầu những năm 70) là",
      cateId: 6,
      levelId: 4,
    },
    {
      content:
        "Chính sách đối ngoại của Liên Xô sau Chiến tranh thế giới thứ hai là",
      cateId: 6,
      levelId: 4,
    },
    {
      content:
        "Nội dung nào không phản ánh đúng chính sách đối ngoại của Liên Xô sau Chiến tranh thế giới thứ hai?",
      cateId: 6,
      levelId: 4,
    },
    ////////////////7
    {
      content:
        "Liên xô phóng thành công vệ tinh nhân tạo lên quỹ đạo Trái Đất vào năm nào?",
      cateId: 7,
      levelId: 1,
    },
    {
      content:
        "Năm 1961 diễn ra sự kiện gì trong công cuộc chinh phục vũ trụ ở Liên Xô?",
      cateId: 7,
      levelId: 1,
    },
    {
      content: "Đến đầu những năm 70 của thế kỷ XX, Liên Xô đã",
      cateId: 7,
      levelId: 1,
    },
    {
      content:
        "Sau Chiến tranh thế giới thứ hai, Liên Xô tiến hành khôi phục kinh tế trong điều kiện",
      cateId: 7,
      levelId: 1,
    },
    {
      content:
        "Nhân dân Liên Xô nhanh chóng hoàn thành thắng lợi kế hoạch 5 năm khôi phục kinh tế (1946 - 1950) nhờ vào",
      cateId: 7,
      levelId: 1,
    },

    {
      content:
        "Những năm đầu sau khi Liên Xô tan rã, Liên bang Nga thực hiện chính sách đối ngoại ngả về phương Tây với hy vọng",
      cateId: 7,
      levelId: 2,
    },
    {
      content:
        "Từ năm 2000, khi Putin lên làm Tổng thống, tình hình kinh tế nước Nga như thế nào?",
      cateId: 7,
      levelId: 2,
    },
    {
      content:
        "Nội dung nào không phản ánh đúng nguyên nhiên khiến chủ nghĩa xã hội sụp đổ ở Liên Xô và các nước Đông Âu?",
      cateId: 7,
      levelId: 2,
    },
    {
      content:
        "Hậu quả lớn nhất mà Chiến tranh thế giới thứ hai để lại đối với Liên Xô là",
      cateId: 7,
      levelId: 2,
    },
    {
      content:
        "Đến nửa đầu những năm 70 của thế kỷ XX, Liên Xô được mệnh danh là",
      cateId: 7,
      levelId: 2,
    },

    {
      content:
        "Với chủ trương bảo vệ hòa bình thế giới, giúp đỡ các nước chủ nghĩa xã hội và ủng hộ phong trào giải phóng dân tộc, Liên Xô trở thành",
      cateId: 7,
      levelId: 3,
    },
    {
      content:
        "Tổ chức hiệp ước Vác-sa-va trở thành một đối trọng với khối quân sự nào của Mĩ ?",
      cateId: 7,
      levelId: 3,
    },
    {
      content:
        "Ý nghĩa quan trọng nhất của sự kiện Liên Xô chế tạo thành công bom nguyên tử là",
      cateId: 7,
      levelId: 3,
    },
    {
      content:
        "Chính sách đối ngoại của Liên bang Nga từ năm 1991 đến năm 2000 là ngả về phương Tây và khôi phục, phát triển quan hệ với các nước",
      cateId: 7,
      levelId: 3,
    },
    {
      content:
        "Nội dung nào không phản ánh đúng nguyên nhân khiến Liên Xô trở thành chỗ dựa cho phong trào hòa bình và cách mạng thế giới?",
      cateId: 7,
      levelId: 3,
    },

    {
      content:
        "Chính sách đối ngoại của Liên Xô từ năm 1945 đến nửa đầu những năm 70 thế kỉ XX là gì?",
      cateId: 7,
      levelId: 4,
    },
    {
      content:
        "Điểm tương đồng trong công cuộc công cuộc cải tổ ở Liên Xô và công cuộc đổi mới đất nước ở Việt Nam là",
      cateId: 7,
      levelId: 4,
    },
    {
      content:
        "Kế hoạch 5 năm khôi phục kinh tế của Liên Xô đã hoàn thành trong thời gian",
      cateId: 7,
      levelId: 4,
    },
    {
      content:
        "Năm 1961, Liên Xô đạt được thành tựu gì trong lĩnh vực khoa học – kĩ thuật?",
      cateId: 7,
      levelId: 4,
    },
    {
      content:
        "Từ 1950 đến nửa đầu những năm 70 của thế kỉ XX, Liên Xô thực hiện chính sách đối ngoại nào?",
      cateId: 7,
      levelId: 4,
    },
    /////////////8
    {
      content: "Nước nào dưới đây không thuộc khu vực Đông Bắc Á?",
      cateId: 8,
      levelId: 1,
    },
    {
      content:
        "Trước Chiến tranh thế giới thứ hai, quốc gia nào ở Đông Bắc Á không bị chủ nghĩa thực dân nô dịch?",
      cateId: 8,
      levelId: 1,
    },
    {
      content:
        "Sau Chiến tranh thế giới thứ hai, bán đảo Triều Tiên bị chia cắt làm hai miền theo vĩ tuyến",
      cateId: 8,
      levelId: 1,
    },
    {
      content:
        "Sau thắng lợi của cách mạng Trung Quốc (1949), chính quyền Tưởng Giới Thạch phải rút chạy ra",
      cateId: 8,
      levelId: 1,
    },
    {
      content:
        "Nước Cộng hòa Nhân dân Trung Hoa được thành lập vào thời gian nào?",
      cateId: 8,
      levelId: 1,
    },

    {
      content: "Ba “con rồng” kinh tế châu Á thuộc Đông Bắc Á là",
      cateId: 8,
      levelId: 2,
    },
    {
      content:
        "Thắng lợi của cách mạng Trung Quốc năm 1949 có ý nghĩa như thế nào đối với đất nước này?",
      cateId: 8,
      levelId: 2,
    },
    {
      content:
        " Ý nghĩa quốc tế của sự ra đời nước Cộng hòa Nhân dân Trung Hoa (10/1949) là",
      cateId: 8,
      levelId: 2,
    },
    {
      content:
        "Trong thế kỉ XX, quốc gia nào ở khu vực Đông Bắc Á trở thành nền kinh tế lớn thứ hai thế giới?",
      cateId: 8,
      levelId: 2,
    },
    {
      content:
        "Trong những năm 80 – 90 của thế kỉ XX và những năm đầu thế kỉ XXI, nền kinh tế của quốc gia nào ở Đông Bắc Á có tốc độ tăng trưởng nhanh và cao nhất thế giới?",
      cateId: 8,
      levelId: 2,
    },

    {
      content:
        "Nước Cộng hoà Nhân dân Trung Hoa chính thức thiết lập quan hệ ngoại giao với Việt Nam vào thời gian nào ?",
      cateId: 8,
      levelId: 3,
    },
    {
      content:
        "Chiến tranh giữa hai miền Triều Tiên (1950 – 1953) chấm dứt với hiệp định đình chiến ở",
      cateId: 8,
      levelId: 3,
    },
    {
      content: "Cuộc nội chiến ở Trung Quốc (1946 – 1949) diễn ra giữa",
      cateId: 8,
      levelId: 3,
    },
    {
      content:
        "Nội dung nào không phản ánh đúng ý nghĩa lịch sử của sự ra đời nước Cộng hòa Nhân dân Trung Hoa (1949)?",
      cateId: 8,
      levelId: 3,
    },
    {
      content: "Hiểu như thế nào về Chủ nghĩa xã hội mang màu sắc Trung Quốc ?",
      cateId: 8,
      levelId: 3,
    },

    {
      content:
        "Người đề xướng đường lối cải cách – mở cửa đất nước Trung Quốc là",
      cateId: 8,
      levelId: 4,
    },
    {
      content:
        "Đảng và Nhà nước Trung Quốc xác định trọng tâm của đường lối cải cách và mở cửa là",
      cateId: 8,
      levelId: 4,
    },
    {
      content:
        "Điểm nổi bật của nền kinh tế Trung Quốc trong thời kì đổi mới (1978 - 2000) là",
      cateId: 8,
      levelId: 4,
    },
    {
      content:
        "Nội dung nào phản ánh đúng tình hình kinh tế Trung Quốc trong những năm 1978 – 1998?",
      cateId: 8,
      levelId: 4,
    },
    {
      content: "Trung Quốc chế tạo thành công bom nguyên tử vào năm :",
      cateId: 8,
      levelId: 4,
    },
    //////////////////9
    {
      content: "Khoảng 20 năm sau Chiến tranh thế giới thứ hai, Mĩ trở thànhc",
      cateId: 9,
      levelId: 1,
    },
    {
      content:
        "Dấu hiệu nào chứng tỏ sau Chiến tranh thế giới thứ hai, Mĩ là trung tâm kinh tế - tài chính lớn nhất thế giới?",
      cateId: 9,
      levelId: 1,
    },
    {
      content:
        "Yếu tố nào không phải là nguyên nhân dẫn đến sự phát triển của kinh tế Mĩ sau Chiến tranh thế giới thứ hai?",
      cateId: 9,
      levelId: 1,
    },
    {
      content:
        "Một thành tựu lớn của kinh tế Mĩ trong những năm 1945 – 1973 chứng tỏ Mĩ đã rất thành công khi tiến hành cuộc cách mạng xanh trong nông nghiệp là",
      cateId: 9,
      levelId: 1,
    },
    {
      content:
        "Nhận định nào dưới đây về thành tựu khoa học - kĩ thuật của Mĩ sau Chiến tranh thế giới thứ hai là sai ?",
      cateId: 9,
      levelId: 1,
    },

    {
      content:
        "Tên các vị tổng thống Mĩ từ năm 1945 đến đầu những năm 70 của thế kỉ XX là",
      cateId: 9,
      levelId: 2,
    },
    {
      content:
        "Sau Chiến tranh thế giới thứ hai, chính sách đối ngoại của Mĩ thể hiện tham vọng:",
      cateId: 9,
      levelId: 2,
    },
    {
      content:
        "Mục tiêu nào của Mĩ trong “Chiến lược toàn cầu” được áp dụng sau Chiến tranh thế giới thứ hai?",
      cateId: 9,
      levelId: 2,
    },
    {
      content:
        "Mĩ đã làm gì để thực hiện Chiến lược toàn cầu trong những năm 1945 - 1973?",
      cateId: 9,
      levelId: 2,
    },
    {
      content:
        "Một trong những nguyên nhân khiến kinh tế Mĩ phát triển nhanh chóng sau Chiến tranh thế giới thứ hai là",
      cateId: 9,
      levelId: 2,
    },

    {
      content:
        " Nội dung nào không phản ánh đúng nguyên nhân dẫn đến sự phát triển kinh tế Mĩ sau Chiến tranh thế giới thứ hai?",
      cateId: 9,
      levelId: 3,
    },
    {
      content:
        "Đặc điểm nổi bật của kinh tế Mĩ trong thập niên 70 của thế kỉ XX là",
      cateId: 9,
      levelId: 3,
    },
    {
      content: "Tổng thống nào của Mĩ đã phát động Chiến tranh lạnh?",
      cateId: 9,
      levelId: 3,
    },
    {
      content:
        "Một trong những nguyên nhân khiến Xô - Mĩ tuyên bố chấm dứt Chiến tranh lạnh là",
      cateId: 9,
      levelId: 3,
    },
    {
      content: "Tình hình kinh tế Mĩ trong thập niên 80 của thế kỉ XX là :",
      cateId: 9,
      levelId: 3,
    },

    {
      content: "Trong thập niên 90 của thế kỉ XX, kinh tế Mĩ",
      cateId: 9,
      levelId: 4,
    },
    {
      content:
        "Tham vọng thiết lập trật tự thế giới “đơn cực” của Mĩ trong thời kì hậu Chiến tranh lạnh dựa trên cơ sở nào?",
      cateId: 9,
      levelId: 4,
    },
    {
      content: "Chiến lược Cam kết và mở rộng của Mĩ do ai đề xướng?",
      cateId: 9,
      levelId: 4,
    },
    {
      content:
        "Chiêu bài mà Mĩ sử dụng để can thiệp vào công việc nội bộ của nước khác được đề ra trong chiến lược Cam kết và mở rộng là gì ?",
      cateId: 9,
      levelId: 4,
    },
    {
      content: "Cuộc khủng bố ngày 11/9/2001 ở nước Mĩ cho thấy",
      cateId: 9,
      levelId: 4,
    },
    ///////////////1
    {
      content:
        "Ứng với công thức C4H8O2 có bao nhiêu este là đồng phân của nhau ?",
      cateId: 1,
      levelId: 1,
    },
    {
      content: "Este có mùi dứa là",
      cateId: 1,
      levelId: 1,
    },
    {
      content:
        "Đun nóng este HCOOCH3 với một lượng vừa đủ dung dịch NaOH, sản phẩm thu được là",
      cateId: 1,
      levelId: 1,
    },
    {
      content:
        "Este nào sau đây khi phản ứng với dung dịch NaOH dư, đun nóng không tạo ra hai muối ?",
      cateId: 1,
      levelId: 1,
    },
    {
      content:
        "Thuỷ phân hoàn toàn 3,7 gam chất X có công thức phân tử C3H6O2 trong 100 gam dung dịch NaOH 4%, cô cạn dung dịch sau phản ứng thu được 5,4 gam chất rắn. Công thức cấu tạo của X là",
      cateId: 1,
      levelId: 1,
    },

    {
      content: "Hãy chọn định nghĩa đúng trong các định nghĩa sau:",
      cateId: 1,
      levelId: 2,
    },
    {
      content: "Chất nào dưới đây không phải là este",
      cateId: 1,
      levelId: 2,
    },
    {
      content: "Công thức tổng quát của este no, đơn chức, mạch hở là?",
      cateId: 1,
      levelId: 2,
    },
    {
      content: "Este nào sau đây thuộc loại este đa chức:",
      cateId: 1,
      levelId: 2,
    },
    {
      content:
        "Trong các chất: este, axit, ancol có cùng số nguyên tử cacbon thì chất có nhiệt độ sôi thấp nhất là",
      cateId: 1,
      levelId: 2,
    },

    {
      content:
        "Cho một axit không no mạch hở chứa 1 liên kết đôi C=C, đơn chức tác dụng với 1 rượu không no, đơn chức, mạch hở chứa 1 liên kết đôi C=C thu được este Z có công thức tổng quát là:",
      cateId: 1,
      levelId: 3,
    },
    {
      content: "Số đồng phân este của chất có CTPT C4H6O2 là:",
      cateId: 1,
      levelId: 3,
    },
    {
      content:
        "Este X có chứa vòng benzen có công thức phân tử là C8H8O2 . Hãy cho biết X có bao nhiêu công thức cấu tạo?",
      cateId: 1,
      levelId: 3,
    },
    {
      content: "Số đồng phân của chất có CTPT C2H4O2 là:",
      cateId: 1,
      levelId: 3,
    },
    {
      content:
        "Cho vào 2 ống nghiệm, mỗi ống nghiệm 2 ml etyl axetat, sau đó thêm vào ống thứ nhất 1 ml dung dịch H2SO4 20% và ống thứ hai 1 ml dung dịch NaOH 30% dư. Sau đó lắc đều cả 2 ống nghiệm, lắp ống sinh hàn đồng thời đun cách thủy trong khoảng 5 phút. Hiện tượng trong 2 ống nghiệm là",
      cateId: 1,
      levelId: 3,
    },

    {
      content:
        "Este X không no, mạch hở có tỉ khối hơi so với khí oxi bằng 3,125 và khi tham gia phản ứng xà phòng hóa tạo ra 1 andehit và 1 muối của axit hữu cơ. Số đồng phân cấu tạo của X phù hợp:",
      cateId: 1,
      levelId: 4,
    },
    {
      content:
        "Cho các phản ứng: X + 3NaOH t0 → C6H5ONa + CH4 + CH3CHO + H2O. Công thức phân tử của X là",
      cateId: 1,
      levelId: 4,
    },
    {
      content: "Xà phòng hoá chất nào sau đây thu được glixerol?",
      cateId: 1,
      levelId: 4,
    },
    {
      content: "Chất nào sau đây có phân tử khối lớn nhất?",
      cateId: 1,
      levelId: 4,
    },
    {
      content: "Triolein không phản ứng với chất nào sau đây? ",
      cateId: 1,
      levelId: 4,
    },
    ///////////////////2
    {
      content:
        "Đốt cháy hoàn toàn 0,9 gam một loại gluxit X thu được 1,32 gam CO2 và 0,54 gam H2O . X là chất nào trong số các chất sau?",
      cateId: 2,
      levelId: 1,
    },
    {
      content:
        "Cho 50 ml dung dịch glucozơ chưa rõ nồng độ tác dụng với một lượng dư dung dịch AgNO3/NH 3 , đun nóng thu được 2,16 gam bạc kết tủa. Nồng độ mol của dung dịch glucozơ đã dùng là",
      cateId: 2,
      levelId: 1,
    },
    {
      content:
        "Lượng glucozơ cần dùng để tạo ra 1,82 gam sobitol với hiệu suất 80% là",
      cateId: 2,
      levelId: 1,
    },
    {
      content:
        "Lên men dung dịch chứa 300 gam glucozơ thu được 92 gam ancol etylic. Hiệu suất quá trình lên men tạo thành ancol etylic là",
      cateId: 2,
      levelId: 1,
    },
    {
      content: "Cacbohidrat (gluxit, saccarit) là:",
      cateId: 2,
      levelId: 1,
    },

    {
      content: "Cacbohiđat được chia thành?",
      cateId: 2,
      levelId: 2,
    },
    {
      content: "Glucozơ không thuộc loại:",
      cateId: 2,
      levelId: 2,
    },
    {
      content: "Mô tả nào dưới đây không đúng với glucozơ ?",
      cateId: 2,
      levelId: 2,
    },
    {
      content:
        "Bệnh nhân phải tiếp đường (truyền dung dịch đường vào tĩnh mạch), đó là loại đường nào?",
      cateId: 2,
      levelId: 2,
    },
    {
      content:
        "Tính chất của glucozơ là: kết tinh (1), có vị ngọt (2), thủy phân trong nước (3), thể hiện tính chất của poliancol (4), thể hiện tính chất của axit (5), thể hiện tính chất của anđehit (6), thể hiện tính chất của ete (7). Những tính chất đúng là:",
      cateId: 2,
      levelId: 2,
    },

    {
      content: "Chọn sơ đồ phản ứng đúng của glucozơ",
      cateId: 2,
      levelId: 3,
    },
    {
      content:
        "Cho sơ đồ chuyển hoá: Glucozơ → X → Y → CH3COOH . Hai chất X, Y lần lượt là",
      cateId: 2,
      levelId: 3,
    },
    {
      content:
        "Tính lượng kết tủa bạc thu được khi tiến hành tráng gương hoàn toàn dd chứa 18g glucozơ. (Biết H = 85%)",
      cateId: 2,
      levelId: 3,
    },
    {
      content:
        "Khi cho 36 g hỗn hợp X gồm gluczơ và fructozơ tác dụng với dung dịch AgNO3/NH3 dư thì thu được bao nhiêu g Ag?",
      cateId: 2,
      levelId: 3,
    },
    {
      content: "Chất nào sau đây là đisaccarit?",
      cateId: 2,
      levelId: 3,
    },

    {
      content: "Chất nào sau đây có cấu trúc mạch phân nhánh ?",
      cateId: 2,
      levelId: 4,
    },
    {
      content: "Nhận định nào sau đây không đúng ?",
      cateId: 2,
      levelId: 4,
    },
    {
      content: "Khi thuỷ phân saccarozơ, sản phẩm thu được là",
      cateId: 2,
      levelId: 4,
    },
    {
      content: "Phát biểu nào sau đây là đúng ?",
      cateId: 2,
      levelId: 4,
    },
    {
      content: "Đường saccarozơ (đường mía) thuộc loại saccarit nào?",
      cateId: 2,
      levelId: 4,
    },
    ////////////////3
    {
      content: "Amin no, đơn chức, mạch hở có công thức tổng quát là",
      cateId: 3,
      levelId: 1,
    },
    {
      content: "Chất nào sau đây thuộc loại amin bậc một ?",
      cateId: 3,
      levelId: 1,
    },
    {
      content: "Chất nào sau đây thuộc loại amin bậc hai ?",
      cateId: 3,
      levelId: 1,
    },
    {
      content: "Chất nào sau đây thuộc loại amin bậc ba ?",
      cateId: 3,
      levelId: 1,
    },
    {
      content: "Số đồng phân cấu tạo amin có cùng công thức phân tử C3H9N là",
      cateId: 3,
      levelId: 1,
    },

    {
      content:
        "Amin là hợp chất khi thay thế một hay nhiều nguyên tử hiđro trong phân tử NH3",
      cateId: 3,
      levelId: 2,
    },
    {
      content: "Dãy gồm tất cả các amin là",
      cateId: 3,
      levelId: 2,
    },
    {
      content:
        "Công thức tổng quát của amin no, đơn chức, mạch hở có dạng là?  ",
      cateId: 3,
      levelId: 2,
    },
    {
      content:
        "Cho các chất sau: CH3NH2, CH3NHCH3, (CH3)3N, CH3CH2NH2. Số chất thuộc loại amin bậc I?",
      cateId: 3,
      levelId: 2,
    },
    {
      content: "Trong các chất dưới đây, chất nào là amin béo?",
      cateId: 3,
      levelId: 2,
    },

    {
      content: "Công thức tổng quát của amin mạch hở có dạng là:",
      cateId: 3,
      levelId: 3,
    },
    {
      content:
        "Amin nào trong các amin dưới đây, có chứa 1 vòng benzen và 1 liên kết đôi trong CTCT?",
      cateId: 3,
      levelId: 3,
    },
    {
      content:
        "Tên gọi amin nào sau đây là đúng với công thức cấu tạo tương ứng?",
      cateId: 3,
      levelId: 3,
    },
    {
      content: "Có bao nhiêu amin bậc II có cùng CTPT C4H11N?",
      cateId: 3,
      levelId: 3,
    },
    {
      content:
        "Cho dung dịch metyl amin dư lần lượt vào các dung dịch riêng biệt sau: AlCl3, FeCl3, Zn(NO3)2, Cu(NO3)2, HCl, Na2SO4. Sau khi các phản ứng kết thúc, số kết tủa thu được là",
      cateId: 3,
      levelId: 3,
    },

    {
      content:
        "Đốt cháy hòa toàn hỗn hợp hai amin no, đơn chức, kế tiếp nhau trong dãy đồng đẳng, thu được 1,568 lít khí CO2 (đktc) và 1,8 gam H2O. Số đồng phân cấu tạo thuộc loại amin bậc hai của hai amin đó là:",
      cateId: 3,
      levelId: 4,
    },
    {
      content:
        "Hỗn hợp (X) gồm hai amin đơn chức. Cho 1,52 gam X tác dụng vừa đủ với 200 ml dung dịch HCl thu được 2,98 gam muối. Tổng số mol hai amin và nồng độ mol/l của dung dịch HCl là: ",
      cateId: 3,
      levelId: 4,
    },
    {
      content:
        "Amin X có công thức phân tử trùng với công thức đơn giản nhất. Đốt cháy hoàn toàn 1 lượng X cần dùng vừa đủ 0,475 mol O2, thu được 0,05 mol N2 và 19,5 gam hỗn hợp gồm CO2 và H2O. Công thức phân tử của X là",
      cateId: 3,
      levelId: 4,
    },
    {
      content: "Amino axit là hợp chất hữu cơ trong phân tử có chứa nhóm chức ",
      cateId: 3,
      levelId: 4,
    },
    {
      content: "Công thức của glyxin là",
      cateId: 3,
      levelId: 4,
    },
    /////////////4
    {
      content: "Phát biểu nào sau đây là sai ?",
      cateId: 4,
      levelId: 1,
    },
    {
      content:
        "Xét 2 nguyên tố ở vị trí 19 và 29 trong bảng tuần hoàn. Kết luận nào sau đây là sai ?",
      cateId: 4,
      levelId: 1,
    },
    {
      content:
        "Cấu hình electron nguyên tử của ba nguyên tố X, Y, Z lần lượt là 1s2 2s2 2p6 3s2 , 1s2 2s2 2p6 3s2 3p6 4s1 , 1s2 2s2 2p6 3s1 . Nếu xếp theo chiều tăng dần tính kim loại thì cách sắp xếp nào sau đây đúng ?",
      cateId: 4,
      levelId: 1,
    },
    {
      content: "Kết luận nào sau đây sai?",
      cateId: 4,
      levelId: 1,
    },
    {
      content: "Cấu hình electron nào sau đây là của nguyên tử kim loại?",
      cateId: 4,
      levelId: 1,
    },

    {
      content:
        "Ở trạng thái cơ bản, cấu hình electron của nguyên tử Mg (Z = 12) là",
      cateId: 4,
      levelId: 2,
    },
    {
      content:
        "Một cation kim loại M có cấu hình e ở lớp ngoài cùng là 2s2 2p6. Vậy cấu hình e ở lớp ngoài cùng của nguyên tử kim loại M là :",
      cateId: 4,
      levelId: 2,
    },
    {
      content:
        "Cation M+ có cấu hình electron ở phân lớp ngoài cùng là 3p6. Nguyên tử M là:",
      cateId: 4,
      levelId: 2,
    },
    {
      content:
        "Kim loại M3+ có cấu hình phân lớp ngoài cùng là 3d3. Vị trí của M trong bảng tuần hoàn các nguyên tố hóa học là?",
      cateId: 4,
      levelId: 2,
    },
    {
      content: "Kim loại nào dưới đây không tan trong dung dịch NaOH ?",
      cateId: 4,
      levelId: 2,
    },

    {
      content:
        "Ở trạng thái cơ bản, cấu hình electron ứng với lớp ngoài cùng nào sau đây là của nguyên tố kim loại?",
      cateId: 4,
      levelId: 3,
    },
    {
      content:
        "Cho cấu hình electron: 1s2 2s2 2p6. Dãy nào sau đây gồm các nguyên tử và ion có cấu hình electron như trên?",
      cateId: 4,
      levelId: 3,
    },
    {
      content: "Phát biểu nào sau đây là đúng?",
      cateId: 4,
      levelId: 3,
    },
    {
      content:
        "Một cation kim loại M2+ có cấu hình e ở lớp ngoài cùng là 2s2 2p6. Vậy cấu hình e ở lớp ngoài cùng của nguyên tử kim loại M là :",
      cateId: 4,
      levelId: 3,
    },
    {
      content:
        "M là kim loại trong số các kim loại sau: Cu Ba, Zn, Mg. Dung dịch muối MCl2 phản ứng với dung dịch Na2CO3 hoặc Na2SO4 tạo kết tủa, nhưng không tạo kết tủa khi phản ứng với dung dịch NaOH. Kim loại M là",
      cateId: 4,
      levelId: 3,
    },

    {
      content:
        "Nung nóng 2,13 gam hỗn hợp X gồm 3 kim loại Mg, Zn và Al ở dạng bột với oxi thu được hỗn hợp Y gồm các oxit có khối lượng 3,33 gam. Thể tích dung dịch HCl 1M vừa đủ để phản ứng hết với Y là:",
      cateId: 4,
      levelId: 4,
    },
    {
      content:
        "Cho m (gam) hỗn hợp Al, Mg tác dụng với dung dịch HCl dư thu được 12,32 lít khí (đktc). Mặt khác, cũng m (gam) hỗn hợp trên cho tác dụng với dung dịch NaOH dư thu được 6,72 lít khí (đktc). Tính giá trị của m?",
      cateId: 4,
      levelId: 4,
    },
    {
      content:
        "Để m gam hỗn hợp Mg, Al và Fe trong không khí, sau một thời gian thu được 37,4 gam hỗn hợp X chỉ chứa các oxit. Hòa tan hoàn toàn X vào dung dịch HCl dư, sau phản ứng cô cạn dung dịch, thu được 81,4 gam muối khan. Giá trị của m là",
      cateId: 4,
      levelId: 4,
    },
    {
      content: "Liên kết hoá học chủ yếu trong hợp kim là ",
      cateId: 4,
      levelId: 4,
    },
    {
      content:
        "Một mẫu kim loại thủy ngân có lẫn tạp chất kẽm, thiếc, chì. Để làm sạch các tạp chất này có thể cho mẫu thủy ngân trên tác dụng với lượng dư của dung dịch nào sau đây ?",
      cateId: 4,
      levelId: 4,
    },
    //////////////////5
    {
      content:
        "Các tính chất vật lí (nhiệt độ sôi, nhiệt độ nóng chảy, khối lượng riêng) của các kim loại trong nhóm IA biến đổi có quy luật, trong đó các kim loại nhóm IIA biến đổi không theo quy luật. Để giải thích hiện tượng này có thể dựa vào",
      cateId: 5,
      levelId: 1,
    },
    {
      content:
        "Cho các chất sau : Ca(OH)2 , KOH , CaCO3 , Ca(HCO3)2 , KNO3 , Mg(OH)2 . Số chất bị nhiệt phân có chất khí trong sản phẩm tạo thành là",
      cateId: 5,
      levelId: 1,
    },
    {
      content:
        "Để bảo quản các kim loại kiềm, có thể thực hiện cách nào sau đây ?",
      cateId: 5,
      levelId: 1,
    },
    {
      content:
        "Một loại nước cứng tạm thời chứa ion Ca2+. Cô cạn 100 ml dung dịch nước cứng này thu được 156,8 ml CO2 (đktc). Để loại bỏ tính cứng tạm thời của 1 lít nước cứng này cần dùng tối thiếu số ml dung dịch NaOH 0,1M là",
      cateId: 5,
      levelId: 1,
    },
    {
      content:
        "Sắt tác dụng với H2O ở nhiệt độ cao hơn 570 ° C thì tạo ra H 2 và sản phẩm rắn là",
      cateId: 5,
      levelId: 1,
    },

    {
      content:
        "Cấu hình electron lớp ngoài cùng của nguyên tử kim loại kiềm là",
      cateId: 5,
      levelId: 2,
    },
    {
      content:
        "Cation M+ có cấu hình electron ở lớp ngoài cùng là 2s22p6. M+ là cation nào sau đây?",
      cateId: 5,
      levelId: 2,
    },
    {
      content: "Kết luận nào sau đây là đúng?",
      cateId: 5,
      levelId: 2,
    },
    {
      content: "Kim loại được dùng làm tế bào quang điện là",
      cateId: 5,
      levelId: 2,
    },
    {
      content: "Trong tự nhiên, kim loại kiềm không tồn tại ở dạng tự do vì",
      cateId: 5,
      levelId: 2,
    },

    {
      content:
        "Cấu hình electron của nguyên tố X là 1s2 2s2 2p6 3s2 3p6 4s1. Vậy X có đặc điểm :",
      cateId: 5,
      levelId: 3,
    },
    {
      content: "Khi nói về kim loại kiềm, phát biểu nào sau đây là sai ?",
      cateId: 5,
      levelId: 3,
    },
    {
      content:
        "Kim loại kiềm là những nguyên tố hoạt động rất mạnh cho nên trong tự nhiên chúng tồn tại dưới dạng?",
      cateId: 5,
      levelId: 3,
    },
    {
      content:
        "Cho miếng kim loại Na vào dung dịch CuSO4. Hiện tượng xảy ra là",
      cateId: 5,
      levelId: 3,
    },
    {
      content:
        "Đun nóng dung dịch KHCO3 sau đó để nguội rồi nhúng quỳ tím vào dung dịch thu được. Hiện tượng xảy ra là",
      cateId: 5,
      levelId: 3,
    },

    {
      content: "Để bảo quản kim loại kiềm, có thể thực hiện cách nào?",
      cateId: 5,
      levelId: 4,
    },
    {
      content:
        "Cho hỗn hợp chứa BaO và K hòa tan hòa tan vào lượng nước dư, thu được sản phẩm gồm:",
      cateId: 5,
      levelId: 4,
    },
    {
      content:
        "Trong dung dịch A có chứa các cation: K+,Ag+, Fe2+, Ba2+. Nếu trong dung dịch A chỉ chứa một loại anion, thì anion đó là:",
      cateId: 5,
      levelId: 4,
    },
    {
      content: "Chất nào sau đây là thạch cao sống:",
      cateId: 5,
      levelId: 4,
    },
    {
      content: "Nước cứng là:",
      cateId: 5,
      levelId: 4,
    },
    //cate 25

    {
      content:
        "Chọn phát biểu sai trong các phương án sau:",
      cateId: 25,
      levelId: 1,
    },
    {
      content:
        "Trong các phương trình sau phương trình nào không biểu thị cho dao động điều hòa ?",
      cateId: 25,
      levelId: 1,
    },
    {
      content:
        "Một vật dao động điều hoà theo phương trình x = A cos ( ωt + φ ) (A > 0; ω > 0) Pha của dao động ở thời điểm t là",
      cateId: 25,
      levelId: 1,
    },
    {
      content:
        "Trong dao động điều hòa của một vật thì tập hợp 2 đại lượng nào sau đây là không đổi theo thời gian?",
      cateId: 25,
      levelId: 1,
    },
    {
      content:
        "Chọn phát biểu đúng:",
      cateId: 25,
      levelId: 1,
    },

    {
      content:
        "Một vật dao động điều hoà dọc theo trục Ox với phương trình:  Nếu chọn gốc toạ độ O tại vị trí cân bằng của vật thì gốc thời gian t = 1s là lúc vật:",
      cateId: 25,
      levelId: 2,
    },
    {
      content:
        "Một vật dao động điều hòa theo phương trình li độ x = 5cosπt (cm). Tốc độ cực đại của vật bằng:",
      cateId: 25,
      levelId: 2,
    },
    {
      content: "Một vật nhỏ dao động điều hòa với li độ x = 10 cos ( πt + π/6 ) (x tính bằng cm, t tính bằng s). Lấy π/2 = 10 . Gia tốc của vật có độ lớn cực đại là",
      cateId: 25,
      levelId: 2,
    },
    {
      content: "Một vật dao động điều hòa có phương trình: x = 5 cos ( 2 πt + π/6 ) (cm, s). Lấy ( π = 3 ,14 ) . Tốc độ của vật khi có li độ (x = 3cm ) là :",
      cateId: 25,
      levelId: 2,
    },
    {
      content: "Một vật đang dao động điều hoà, khi vật chuyển động từ vị trí biên về vị trí cân bằng thì",
      cateId: 25,
      levelId: 2,
    },

    {
      content:
        "Một con lắc lò xo có khối lượng vật nhỏ là m 1 = 300 g dao động điều hòa với chu kì 1s. Nếu thay vật nhỏ có khối lượng m 1 bằng vật nhỏ có khối lượng m 2 thì con lắc dao động với chu kì 0,5 s. Giá trị m 2 bằng:",
      cateId: 25,
      levelId: 3,
    },
    {
      content: "Một con lắc lò xo treo thẳng đứng, dao động điều hòa với chu kì 0,4 s. Khi vật nhỏ của con lắc ở vị trí cân bằng, lò xo có độ dài 44 cm. Lấy g = 10 m/s2; π2 = 10. Chiều dài tự nhiên của lò xo là",
      cateId: 25,
      levelId: 3,
    },
    {
      content:
        "Một con lắc lò xo thẳng đứng, đầu dưới treo vật m dao động theo phương thẳng đứng trùng với trục của lò xo với phương trình x = 2 cosωt (cm) (gốc tọa độ tại vị trí cân bằng. Biết tại vị trí cân bằng lò xo dãn một đoạn lớn hơn 2 cm. Tỉ số giữa lực cực đại và cực tiểu tác dụng vào điểm treo trong quá trình dao động là 3. Lấy gia tốc trọng trường g = π m/s . Tần số góc dao động của vật là",
      cateId: 25,
      levelId: 3,
    },
    {
      content:
        "Một con lắc lò xo treo thẳng đứng, đầu dưới có vật khối lượng 0,5 kg, độ cứng của lò xo 100 N/m. Chọn gốc tọa độ O tại vị trí cân bằng, trục Ox thẳng đứng, chiều dương hướng xuống. Lấy g = 10 m/s  . Khi vật có li độ + 2 cm, lực tác dụng của lò xo vào điểm treo có độ lớn",
      cateId: 25,
      levelId: 3,
    },
    {
      content:
        "Một con lắc lò xo treo thẳng đứng gồm lò xo nhẹ có độ cứng k và vật dao động m. Sau khi kích thích cho vật dao động điều hòa thì trong 1 chu kì khoảng thời gian mà lực kéo về ngược chiều lực đàn hồi tác dụng lên vật gấp đôi thời gian lò xo bị nén trong một chu kì và bằng 2/15 s Tính A.",
      cateId: 25,
      levelId: 3,
    },

    {
      content: "Con lắc lò xo đang dao động điều hòa, vận tốc của vật bằng không khi vật đi qua:",
      cateId: 25,
      levelId: 4,
    },
    {
      content:
        "Một con lắc lò xo dao động không ma sát trên một mặt phẳng ngang. Phát biểu nào sau đây sai:",
      cateId: 25,
      levelId: 4,
    },
    {
      content:
        "Một con lắc lò xo dao động điều hòa có biên độ A, vật ở vị trí biên khi lò xo ở vị trí:",
      cateId: 25,
      levelId: 4,
    },
    {
      content: "Chu kì dao động của con lắc lò xo phụ thuộc vào:",
      cateId: 25,
      levelId: 4,
    },
    {
      content: "Một con lắc lò xo đang dao động điều hòa. Biên độ dao động phụ thuộc vào:",
      cateId: 25,
      levelId: 4,
    },
    //cate 26
    {
      content:
        "Sóng cơ truyền được trong các môi trường",
      cateId: 26,
      levelId: 1,
    },
    {
      content:
        "Sóng ngang là:",
      cateId: 26,
      levelId: 1,
    },
    {
      content:
        "Sóng ngang:",
      cateId: 26,
      levelId: 1,
    },
    {
      content:
        "Sóng dọc là:",
      cateId: 26,
      levelId: 1,
    },
    {
      content:
        "Sóng dọc:",
      cateId: 26,
      levelId: 1,
    },

    {
      content:
        "Chọn câu trả lời đúng. Để phân loại sóng ngang hay sóng dọc người ta dựa vào:",
      cateId: 26,
      levelId: 2,
    },
    {
      content:
        "Tốc độ truyền sóng trong một môi trường:",
      cateId: 26,
      levelId: 2,
    },
    {
      content: "Một sóng cơ học lan truyền trong một môi trường A có vận tốc v A và khi truyền trong môi trường B có vận tốc v = 2vA . Bước sóng trong môi trường B sẽ:",
      cateId: 26,
      levelId: 2,
    },
    {
      content: "Chọn cụm từ thích hợp nhất điền vào chỗ trống. Khi sóng cơ truyền càng xa nguồn thì .... càng giảm?",
      cateId: 26,
      levelId: 2,
    },
    {
      content: "Một sóng cơ có bước sóng λ1 truyền từ không khí vào nước. Khi ở trong nước, người ta đo được bước sóng λ2 . Biết chiết suất của nước bằng 4/3. Bước sóng λ2 bằng:",
      cateId: 26,
      levelId: 2,
    },

    {
      content:
        "Một dây đàn hồi dài có đầu A dao động theo phương vuông góc với sợi dây. Tốc độ truyền sóng trên dây là 4m/s. Xét một điểm M trên dây và cách A một đoạn 40cm, người ta thấy M luôn luôn dao động lệch pha so với A một góc Δφ = ( k + 0,5 ) π với k là số nguyên. Tính tần số, biết tần số f có giá trị trong khoảng từ 8Hz đến 13Hz.",
      cateId: 26,
      levelId: 3,
    },
    {
      content: "Hai điểm M, N cùng nằm trên một hướng truyền sóng và cách nhau một phần ba bước sóng. Biên độ sóng không đổi trong quá trình truyền. Tại một thời điểm, khi li dộ dao động của phần tử tại M là 3cm thì li độ dao động của phần tử tại N là -3cm. Biên độ dao động sóng bằng",
      cateId: 26,
      levelId: 3,
    },
    {
      content:
        "Một sóng cơ học lan truyền trên mặt nước với tốc độ 25cm/s. Phương trình sóng tại nguồn là u = 3 cos πt ( c m ) . Vận tốc của phần tử vật chất tại điểm M cách O một khoảng 25cm tại thời điểm t=2,5s là:",
      cateId: 26,
      levelId: 3,
    },
    {
      content:
        "Sóng truyền từ O đến M với vận tốc v=40cm/s, phương trình sóng tại O là u 0 = 4 sin π/2t ( cm ) . Biết vào thời điểm t thì li độ của phần từ M là 3cm và đang chuyển động theo chiều dương, vậy lúc t+6(s) li độ của M là:",
      cateId: 26,
      levelId: 3,
    },
    {
      content:
        "Nguồn sóng ở O dao động với tần số 10Hz, dao động truyền đi với vận tốc 0,4m/s theo phương Oy; trên phương này có hai điểm P và Q với PQ=15cm. Biên độ sóng bằng a=1cm và không thay đổi khi lan truyền. Nếu tại thời điểm t nào đó P có li độ 1cm thì li độ tại Q là:",
      cateId: 26,
      levelId: 3,
    },

    {
      content: "Hai nguồn sóng kết hợp giống hệt nhau được đặt cách nhau một khoảng cách x trên đường kính của một vòng tròn bán kính R (x < R) và đối xứng qua tâm của vòng tròn. Biết rằng mỗi nguồn đều phát sóng có bước sóng λ và x = 9 λ . Số điểm dao động cực đại trên vòng tròn là:",
      cateId: 26,
      levelId: 4,
    },
    {
      content:
        "Trên mặt nước, hai nguồn kết hợp A, B cách nhau 40cm luôn dao động cùng pha, có bước sóng 6cm. Hai điểm CD nằm trên mặt nước mà ABCD là một hình chữ nhật, AD=30cm. Số điểm cực đại và đứng yên trên đoạn CD lần lượt",
      cateId: 26,
      levelId: 4,
    },
    {
      content:
        "Hai nguồn sóng kết hợp trên mặt nước S1 , S2 dao động với phương trình u1 = a sin ( ωt ) ; u2 = a cos ( ωt ) ; S1 S2 = 9λ . Điểm M gần nhất trên trung trực của S1 S2 dao động cùng pha với u1 cách S1 , S2 bao nhiêu.",
      cateId: 26,
      levelId: 4,
    },
    {
      content: "Hai nguồn sóng kết hợp, đặt tại A và B cách nhau 20 cm dao động theo phương trình u = a cos( ωt ) trên mặt nước, coi biên độ không đổi, bước sóng λ = 3 cm . Gọi O là trung điểm của AB. Một điểm nằm trên đường trung trực AB, dao động cùng pha với các nguồn A và B, cách A hoặc B một đoạn nhỏ nhất là:",
      cateId: 26,
      levelId: 4,
    },
    {
      content: "Trên mặt nước có hai nguồn kết hợp AB cùng pha cách nhau một đoạn 12cm đang dao động vuông góc với mặt nước  tạo ra sóng với bước sóng 1,6cm. Gọi C là một điểm trên mặt nước  cách đều hai nguồn và cách trung điểm O của đoạn AB một khoản 8cm. Hỏi trên đoạn CO, số điểm dao động cùng pha với nguồn là:",
      cateId: 26,
      levelId: 4,
    },
    //cate 27
    {
      content:
        "Cho một khung dây dẫn phẳng có diện tích S quay đều với tốc độ góc quanh một trục vuông góc với các đường cảm ứng từ → B . Trong khung dây xuất hiện:",
      cateId: 27,
      levelId: 1,
    },
    {
      content:
        "Một khung dây gồm N vòng dây, quay đều trong từ trường đều B với tốc độ góc ω , tiết diện khung dây là S, trục quay vuông góc với đường sức từ. Suất điện động trong khung dây có giá trị hiệu dụng là:",
      cateId: 27,
      levelId: 1,
    },
    {
      content:
        "Suất điện động cảm ứng trong một khung dây phẳng có biểu thức e = E0 cos ( ωt + φ ) . Khung gồm N vòng dây. Từ thông cực đại qua mõi vòng dây của khung dây là:",
      cateId: 27,
      levelId: 1,
    },
    {
      content:
        "Một khung dây gồm N vòng dây, quay đều trong từ trường đều B với tốc độ góc ω , tiết diện khung dây là S, trục quay vuông góc với đường sức từ. Suất điện động cực đại trong khung dây có giá trị hiệu dụng là:",
      cateId: 27,
      levelId: 1,
    },
    {
      content:
        "Suất điện động trong khung dây có tần số phụ thuộc vào yếu tố nào khi cho khung dây quay đều quanh trục vuông góc với đường sức từ của một từ trường đều?",
      cateId: 27,
      levelId: 1,
    },

    {
      content:
        "Một khung dây dẫn có diện tích S = 50 cm gồm 150 vòng dây quay đều với vận tốc n vòng/phút trong một từ trường đều → B vuông góc với trục quay Δ và có độ lớn B = 0 , 02 T . Từ thông cực đại gửi qua khung là:",
      cateId: 27,
      levelId: 2,
    },
    {
      content:
        "Một khung dây dẫn quay đều quanh trục quay Δ với tốc độ 150 vòng/phút trong từ trường đều có cảm ứng từ → B vuông góc với trục quay của khung. Từ thông cực đại gửi qua khung dây là 10π ( Wb ) . Suất điện động hiệu dụng trong khung dây bằng:",
      cateId: 27,
      levelId: 2,
    },
    {
      content: "Cuộn dây có N = 100 vòng, mỗi vòng có diện tích S = 300 cm . Đặt trong từ trường đều có cảm ứng từ  sao cho trục của cuộn dây song song với các đường sức từ B = 0,2T . Quay đều cuộn dây để sau Δt = 0,5s trục của nó vuông góc với các đường sức từ thì suất điện động cảm ứng trung bình trong cuộn dây là:",
      cateId: 27,
      levelId: 2,
    },
    {
      content: "Từ thông qua khung dây có biểu thức: ϕ = ϕ0 cos 40πt . Trong 1s dòng điện trong khung dây đổi chiều:",
      cateId: 27,
      levelId: 2,
    },
    {
      content: "Một khung dây hình chữ nhật quay đều với tốc độ góc 3000 vòng/phút quanh trục xx’ trong từ trường đều có đường cảm ứng từ vuông góc với trục quay xx’. Suất điện động cma rứng trong khung biến thiên điều hòa với chu kì:",
      cateId: 27,
      levelId: 2,
    },

    {
      content:
        "Một mạch điện xoay chiều có u là điện áp tức thời ở hai đầu đoạn mạch và i là cường độ tức thời qua mạch. Chọn phát biểu sai",
      cateId: 27,
      levelId: 3,
    },
    {
      content: "Chọn phát biểu sai:",
      cateId: 27,
      levelId: 3,
    },
    {
      content:
        "Điều nào sau đây là đúng khi nói về đoạn mạch xoay chiều chỉ có điện trở thuần?",
      cateId: 27,
      levelId: 3,
    },
    {
      content:
        "Điều nào sau đây là sai khi nói về đoạn mạch xoay chiều chỉ có điện trở thuần?",
      cateId: 27,
      levelId: 3,
    },
    {
      content:
        "Mắc điện trở R = 55Ω vào mạng điện xoay chiều có điện áp u = 110 cos ( 100πt + π/2 ) (V) . Nhiệt lượng tỏa ra ở R trong 10 phút là:",
      cateId: 27,
      levelId: 3,
    },

    {
      content: "Một máy phát điện xoay chiều với khung dây có 500 vòng, từ thông cực đại qua mỗi vòng dây là 0,2mWb, tốc độ góc của khung dây là 3000 vòng/phút. Biên độ của suất điện động là: ",
      cateId: 27,
      levelId: 4,
    },
    {
      content:
        "Một máy phát điện xoay chiều một pha phát ra suất điện động e = 100√2 cos ( 100πt ) ( V ) . Nếu rô to quay với tốc độ 600 vòng/ phút thì số cặp cực của máy phát điện là:",
      cateId: 27,
      levelId: 4,
    },
    {
      content:
        "Một máy phát điện xoay chiều với một khung dây có 1000 vòng, quay đều trong từ trường đều có B = 0,11T , diện tích mỗi vòng dây là 90 cm2 , suất điện động cảm ứng trong khung có giá trị hiệu dụng là 220V. Chu kì của suất điện động là:",
      cateId: 27,
      levelId: 4,
    },
    {
      content: "Nối hai cực của một máy phát điện xoay chiều một pha vào hai đầu đoạn mạch AB gồm điện trở thuần R mắc nối tiếp với cuộn cảm thuần. Bỏ qua điện trở các cuộn dây của máy phát. Khi rô to của máy quay đều với tốc độ n vòng/phút thì cường độ dòng điện hiệu dụng trong đoạn mạch là 1A. Khi rô to của máy quay đều với tốc độ 3n vòng/phút thì cường độ dòng điện hiệu dụng trong đoạn mạch là √3 A . Nếu rô to của máy quay đều với tốc độ 2n vòng/phút thì cảm kháng của đoạn mạch AB là:",
      cateId: 27,
      levelId: 4,
    },
    {
      content: "Đặt một điện áp xoay chiều có trị số hiệu dụng U=100V vào hai đầu một động cơ điện xoay chiều thì công suất cơ học của động cơ là 160W. Động cơ có điện trở thuần R = 4Ω và hệ số công suất là 0,88. Biết hiệu suất của động cơ không nhỏ hơn 50% . Cường độ dòng điện hiệu dụng qua động cơ là:",
      cateId: 27,
      levelId: 4,
    },
    //cate 28
    {
      content:
        "Trong thí nghiệm Hec-xơ, nếu sử dụng ánh sáng hồ quang điện sau khi đi qua tấm kính thủy tinh dày thì:",
      cateId: 28,
      levelId: 1,
    },
    {
      content:
        "Hiện tượng quang điện ngoài là hiện tượng electron bị bật ra khỏi bề mặt kim loại khi:",
      cateId: 28,
      levelId: 1,
    },
    {
      content:
        "Chiếu một bức xạ đơn sắc có bước sóng vào một tấm kim loại có giới hạn quang điện ngoài là λ0 thì thấy có hiện tượng quang điện xảy ra (electron bứt ra khỏi kim loại). Với c là tốc độ photon trong chân không. Khi đó, ta có mối quan hệ đúng là:",
      cateId: 28,
      levelId: 1,
    },
    {
      content:
        "Giới hạn quang điện của mỗi kim loại là:",
      cateId: 28,
      levelId: 1,
    },
    {
      content:
        "Theo thuyết lượng tử ánh sáng của Einstein thì một hạt ánh sáng (photon) của ánh sáng đơn sắc có tần số f phải có năng lượng là:",
      cateId: 28,
      levelId: 1,
    },

    {
      content:
        "Nếu chiếu một chùm tia hồng ngoại vào tấm kẽm tích điện âm thì:",
      cateId: 28,
      levelId: 2,
    },
    {
      content:
        "Giới hạn quang điện phụ thuộc vào:",
      cateId: 28,
      levelId: 2,
    },
    {
      content: "Cho biết công thoát của Kali là: A= 3,6.10 − 19J . Chiếu vào kali lần lượt bốn bức xạ λ1 = 0,4 μm ; λ2 = 0,5 μm ; λ3 = 0 6 μm ; λ4 = 0,7 μm ; Những bức xạ nào có thể gây ra hiện tượng quang điện đối với Kali?",
      cateId: 28,
      levelId: 2,
    },
    {
      content: "Dùng thuyết lượng tử ánh sáng không thể giải thích được:",
      cateId: 28,
      levelId: 2,
    },
    {
      content: "Gọi năng lượng của photon ánh sáng đỏ, ánh sáng lục và ánh sáng vàng lần lượt là εĐ , εL , εV . Sắp xếp chúng theo thứ tự năng lượng giảm dần là:",
      cateId: 28,
      levelId: 2,
    },

    {
      content:
        "Chiếu bức xạ có bước sóng 533nm lên tấm kim loại có công thoát A = 3.10 J . Dùng màn chắn tách ra một chùm hẹp các electron quang điện và cho bay vào từ trường theo phương vuông góc với đường cảm ứng từ. Biết bán kính cực đại của quỹ đạo của các electron quang điện là 22,75mm. Độ lớn cảm ứng từ B của từ trường là:",
      cateId: 28,
      levelId: 3,
    },
    {
      content: "Chiếu ánh sáng có bước sóng 5000A vào catot của tế bào quang điện có công thoát e là 1,88eV. Sau đó tách ra một chùm hẹp các quang e có vận tốc v0 rồi hướng vào miền không gian có điện trường đều có cường độ điện trường E và từ trường đều cảm ứng từ B sao cho E , B , v0 vuông góc với nhau từng đôi một. Độ lớn cường độ điện trường là E = 2.10 V/m . Để e vẫn chuyển động thẳng đều không thay đổi hướng ban đầu của nó thì cảm ứng từ B có độ lớn là:",
      cateId: 28,
      levelId: 3,
    },
    {
      content:
        "Cho chùm hẹp các electron quang điện và hướng nó vào một từ trường đều cảm ứng từ B = 10 (T) theo phương vuông góc với từ trường. Biết khối lượng và điện tích của electron lền lượt là 9,1.10kg và −1,6.10C . Chu kì của electron trong từ trường là:",
      cateId: 28,
      levelId: 3,
    },
    {
      content:
        "Khi chiếu một photon có năng lượng 5,5eV vào tấm kim loại có công thoát 2eV. Cho rằng năng lượng mà quang electron hấp thụ một phần dùng để giải phóng nó, phần còn lại hoàn toàn biến thành động năng của nó. Tách ra một electron rồi cho bay từ M đến N trong một điện trường với hiệu điện thế . Động năng của electron tại điểm N là:",
      cateId: 28,
      levelId: 3,
    },
    {
      content:
        "Cho chùm hẹp các electron quang điện có tốc độ 10(m/s) bay dọc theo đường sức trong một điện trường đều có cường độ 9,1(V/m) sao cho hướng của vận tốc ngược hướng với điện trường. Tính quãng đường đi được sau thời gian 1000ns. Biết khối lượng và điện tích của electron lần lượt là 9,1kg và −1.6C",
      cateId: 28,
      levelId: 3,
    },

    {
      content: "Biết công thoát của các kim loại: canxi, kali, bạc và đồng lần lượt là 2,89eV; 2,26eV; 4,78eV và 4,14eV. Chiếu bức xạ có bước sóng 0 , 33 μm vào bề mặt các kim loại trên. Hiện tượng quang điện ngoài xảy ra với các kim loại nào sau đây?",
      cateId: 28,
      levelId: 4,
    },
    {
      content:
        "Một chất quang dẫn có giới hạn quang điện là 1,88 μm . Lấy c = 3 .10m/s . Hiện tượng quang điện trong xảy ra khi chiếu vào chất này ánh sáng có tần số nhỏ nhất là:",
      cateId: 28,
      levelId: 4,
    },
    {
      content:
        "Lần lượt chiếu vào catot của một tế bào quang điện các bức xạ điện từ gồm các bức xạ có bước sóng λ1 = 0,26 μm và λ2 = 1,2λ 1 bức xạ có bước sóng thì vận tốc ban đầu cực đại của các electron quang điện bứt ra từ catot lần lượt là v1 và v2 với v2 = 3v1/4 . Giới hạn quang điện λ 0 của kim loại làm catot nay là:",
      cateId: 28,
      levelId: 4,
    },
    {
      content: "Một nguồn sáng công suất 6W đặt trong không khí phát ra ánh sáng đơn sắc có bước sóng 625nm. Biết h = 6 Js ; c = 3.10m/s . Số photon do nguồn sáng đó phát ra trong một đơn vị thời gian gần đúng là:",
      cateId: 28,
      levelId: 4,
    },
    {
      content: "Kim loại có công thoát electron là A =3,61J . Khi chiếu lần lượt vào kim loại này hai bức xạ có bước sóng  và thì hiện tượng quang điện:",
      cateId: 28,
      levelId: 4,
    },
    //cate29
    {
      content:
        "Tán sắc ánh sáng là?",
      cateId: 29,
      levelId: 1,
    },
    {
      content:
        "Khi một chùm ánh sáng song song, hẹp truyền qua một lăng kính thì bị phân tách thành các chùm sáng đơn sắc khác nhau. Đây là hiện tượng",
      cateId: 29,
      levelId: 1,
    },
    {
      content:
        "Sự phân tách một chùm sáng phức tạp tạo thành các chùm sáng đơn sắc là:",
      cateId: 29,
      levelId: 1,
    },
    {
      content:
        "Khi nói về ánh sáng đơn sắc, phát biểu nào dưới đây sai?",
      cateId: 29,
      levelId: 1,
    },
    {
      content:
        "Phát biểu nào dưới đây là không đúng?",
      cateId: 29,
      levelId: 1,
    },

    {
      content:
        "Nhận định nào sau đây đúng?",
      cateId: 29,
      levelId: 2,
    },
    {
      content:
        "Cho bốn ánh sáng đơn sắc: đỏ, tím, cam và lục. Chiết suất của thuỷ tinh có giá trị lớn nhất đối với ánh sáng",
      cateId: 29,
      levelId: 2,
    },
    {
      content: "Khi rọi một chùm hẹp ánh sáng Mặt trời xuống mặt nước trong một bể bơi thì thấy ở đáy bể một vệt sáng. Vệt sáng này",
      cateId: 29,
      levelId: 2,
    },
    {
      content: "Khi sóng ánh sáng truyền từ một môi trường này sang một môi trường khác thì",
      cateId: 29,
      levelId: 2,
    },
    {
      content: "Khi truyền ánh sáng từ môi trường này sang môi trường khác, đại lượng nào trong các đại lượng sau không thay đổi:",
      cateId: 29,
      levelId: 2,
    },

    {
      content:
        "Một bể nước sau 1,2m. Một chùm ánh sáng mặt trời chiếu vào mặt nước dưới góc tới i sao cho sini = 0,8 . Chiết suất của nước đối với ánh sáng đỏ là 1,331 và đối với ánh sáng tím là 1,343. Bề rộng của dải quang phổ dưới đáy bể là:",
      cateId: 29,
      levelId: 3,
    },
    {
      content: "Góc chiết quang của lăng kính bằng A = 60 . Chiếu một tia sáng trắng vào mặt bên của lăng kính theo phương vuông góc với mặt phẳng phân giác của góc chiết quang. Đặt một màn quan sát, sau lăng kính, song song với mặt phẳng phân giác của góc chiết quang của lăng kính và cách mặt này 2m. Chiết suất của lăng kính đối với tia đỏ là nd = 1,5 và đối với tia tím là nt = 1,56 . Độ rộng của quang phổ liên tục trên màn quan sát bằng:",
      cateId: 29,
      levelId: 3,
    },
    {
      content:
        "Chiết suất của nước đối với tia vàng là nV= 4/3 . Chiếu một chùm sáng trắng từ nước ra không khí dưới góc tới i sao cho sini= 3/4 thì chùm sáng ló ra không khí là:",
      cateId: 29,
      levelId: 3,
    },
    {
      content:
        "Một lăng kính có góc chiết quang A = 5∘ , chiết suất của lăng kính đối với tia đỏ nđ = 1,64 và đối với tia tím là nt = 1,68. Chiếu tia sáng trắng tới mặt bên của lăng kính dưới góc tới rất nhỏ. Góc lệch giữa tia ló màu đỏ và tia tím ra khỏi lăng kính là:",
      cateId: 29,
      levelId: 3,
    },
    {
      content:
        "Góc chiết quang của lăng kính bằng A = 6∘ . Chiếu một tia sáng trắng vào mặt bên của lăng kính theo phương vuông góc với mặt phẳng phân giác của góc chiết quang. Đặt một màn quan sát, sau lăng kính, song song với mặt phẳng phân giác của góc chiết quang của lăng kính và cách mặt này 2m. Chiết suất của lăng kính đối với tia đỏ là nd = 1,5 và đối với tia tím là nt = 1,56. Độ rộng của quang phổ liên tục trên màn quan sát bằng:",
      cateId: 29,
      levelId: 3,
    },

    {
      content: "Máy quang phổ là dụng cụ dùng để:",
      cateId: 29,
      levelId: 4,
    },
    {
      content:
        "Khi nói về quang phổ, phát biểu nào sau đây là đúng?",
      cateId: 29,
      levelId: 4,
    },
    {
      content:
        "Trong máy quang phổ lăng kính, lăng kính có tác dụng",
      cateId: 29,
      levelId: 4,
    },
    {
      content: "Chùm tia sáng ló ra khỏi lăng kính của một máy quang phổ, trước khi đi qua thấu kính buồng tối là",
      cateId: 29,
      levelId: 4,
    },
    {
      content: "Chiếu ánh sáng trắng do một nguồn nóng sáng phát ra vào khe hẹp F của một máy quang phổ lăng kính thì trên tấm kính ảnh (hoặc tấm kính mờ) của buồng ảnh sẽ thu được:",
      cateId: 29,
      levelId: 4,
    },
    //cate11
    {
      content:
        "Đặc điểm nào sau đây không đúng với tình hình xuất khẩu của nước ta từ sau Đổi mới đến nay?",
      cateId: 11,
      levelId: 1,
    },
    {
      content:
        "Trong công cuộc đổi mới ở nước ta, lĩnh vực nào được đổi mới đầu tiên?",
      cateId: 11,
      levelId: 1,
    },
    {
      content:
        "Việt Nam không tham gia vào tổ chức nào sau đây?",
      cateId: 11,
      levelId: 1,
    },
    {
      content:
        "Nước gia nhập ASEAN vào năm 1995 là",
      cateId: 11,
      levelId: 1,
    },
    {
      content:
        "Một trong những định hướng chính để đẩy mạnh công cuộc Đổi mới ở nước ta không phải là",
      cateId: 11,
      levelId: 1,
    },

    {
      content:
        "Công cuộc đổi mới kinh tế nước ta được manh nha từ năm nào sau đây?",
      cateId: 11,
      levelId: 2,
    },
    {
      content:
        "Công cuộc đổi mới tạo nên tốc độ tăng trưởng kinh tế nước ta cao nhất (9,5 %) vào năm nào sau đây?",
      cateId: 11,
      levelId: 2,
    },
    {
      content: "Chính sách nào sau đây không phải là đường lối đổi mới nước ta sau đại hội Đảng lần thứ VI?",
      cateId: 11,
      levelId: 2,
    },
    {
      content: "Kết quả lớn nhất đạt được trên lĩnh vực hội nhập mở cửa của nước ta thể hiện ở khía cạnh nào sau đây?",
      cateId: 11,
      levelId: 2,
    },
    {
      content: "Định hướng quan trọng nhất để đẩy mạnh công cuộc đổi mới và hội nhập ở nước ta là",
      cateId: 11,
      levelId: 2,
    },

    {
      content:
        "Hiện nay Việt Nam là một trong những nước đứng đầu thế giới về xuất khẩu các loại nông sản nào sau đây?",
      cateId: 11,
      levelId: 3,
    },
    {
      content: "Sự kiện nào sau đây có ý nghĩa đặc biệt diễn ra vào giữa thập niên 90 đánh dấu xu thế hội nhập của nước ta?",
      cateId: 11,
      levelId: 3,
    },
    {
      content:
        "Việt Nam gia nhập ASEAN năm nào?",
      cateId: 11,
      levelId: 3,
    },
    {
      content:
        "Sau Đổi mới, thị trường buôn bán của nước ta ngày càng mở rộng theo hướng",
      cateId: 11,
      levelId: 3,
    },
    {
      content:
        "Việt Nam chính thức gia nhập tổ chức Thương mại thế giới vào năm nào? ",
      cateId: 11,
      levelId: 3,
    },

    {
      content: "Định hướng chính để đẩy mạnh công cuộc đổi mới và hội nhập ở nước ta không phải là",
      cateId: 11,
      levelId: 4,
    },
    {
      content:
        "Định hướng nào sau đây không phải là một trong những định hướng chính để đẩy mạnh công cuộc Đổi mới ở nước ta?",
      cateId: 11,
      levelId: 4,
    },
    {
      content:
        "Công cuộc đổi mới ở nước ta được manh nha từ năm nào và lĩnh vực nào sau đây?",
      cateId: 11,
      levelId: 4,
    },
    {
      content: "Sau khi thống nhất đất nước, nước ta tiến hành xây dựng nền kinh tế từ xuất phát điểm là nền sản xuất",
      cateId: 11,
      levelId: 4,
    },
    {
      content: "Nguyên nhân chính tốc độ tăng trưởng xuất khẩu của nước ta trong những năm gần đây là do",
      cateId: 11,
      levelId: 4,
    },
    //cate12
    {
      content:
        "Xu hướng chuyển dịch của cơ cấu ngành kinh tế ở nước ta là",
      cateId: 12,
      levelId: 1,
    },
    {
      content:
        "Nhận định nào dưới đây không đúng với sự chuyển dịch cơ cấu ngành công nghiệp nước ta hiện nay?",
      cateId: 12,
      levelId: 1,
    },
    {
      content:
        "Sau khi gia nhập WTO khu vực kinh tế nào tăng nhanh về tỉ trọng?",
      cateId: 12,
      levelId: 1,
    },
    {
      content:
        "Căn cứ vào Atlat Địa lí Việt Nam trang 17, cho biết các trung tâm kinh tế có quy mô trên 100 nghìn tỉ đồng là",
      cateId: 12,
      levelId: 1,
    },
    {
      content:
        "Căn cứ vào Atlat Địa lí Việt Nam trang 17, cho biết tỉnh/thành phố có GDP bình quân tính theo đầu người năm 2007 từ 15 - 18 triệu đồng là",
      cateId: 12,
      levelId: 1,
    },

    {
      content:
        "Căn cứ vào Atlat Địa lí Việt Nam trang 17, cho biết khu kinh tế ven biển Dung Quất vùng Duyên hải Nam Trung Bộ thuộc tỉnh nào sau đây?",
      cateId: 12,
      levelId: 2,
    },
    {
      content:
        "Phát biểu nào sau đây không đúng với khu vực kinh tế Nhà nước?",
      cateId: 12,
      levelId: 2,
    },
    {
      content: "Từ Đổi mới đến nay, nhiều loại hình dịch vụ mới ra đời là",
      cateId: 12,
      levelId: 2,
    },
    {
      content: "Căn cứ vào Atlat Địa lí Việt Nam trang 17, cho biết nhận xét nào sau đây không đúng về sự chuyển dịch GDP?",
      cateId: 12,
      levelId: 2,
    },
    {
      content: "Trong ngành trồng trọt ở nước ta hiện nay, xu hướng là giảm tỉ trọng cây lương thực, tăng tỉ trọng cây công nghiệp, nhằm mục đích nào sau đây?",
      cateId: 12,
      levelId: 2,
    },

    {
      content:
        "Đặc điểm nào sau đây không đúng với sự chuyển dịch cơ cấu nội bộ ngành nông nghiệp?",
      cateId: 12,
      levelId: 3,
    },
    {
      content: "Việc phát huy thế mạnh của từng vùng đã dẫn tới",
      cateId: 12,
      levelId: 3,
    },
    {
      content:
        "Ở khu vực II, công nghiệp có xu hướng chuyển dịch cơ cấu ngành sản xuất và đa dạng hóa sản phẩm để",
      cateId: 12,
      levelId: 3,
    },
    {
      content:
        "Hiện nay Việt Nam được xem là một thị trường đầu tư khá hấp dẫn đối với nước ngoài chủ yếu là do",
      cateId: 12,
      levelId: 3,
    },
    {
      content:
        "Tại sao phải chuyển dịch cơ cấu kinh tế nước ta?",
      cateId: 12,
      levelId: 3,
    },

    {
      content: "Dựa vào Atlat Địa lí Việt Nam trang 15, cho biết các đô thị nào sau đây có quy mô dân số trên 1 triệu người?",
      cateId: 12,
      levelId: 4,
    },
    {
      content:
        "Căn cứ vào Atlat Địa lí Việt Nam trang 15, cho biết đô thị nào sau đây thuộc tỉnh Quảng Trị?",
      cateId: 12,
      levelId: 4,
    },
    {
      content:
        "Căn cứ vào Atlat Địa lí Việt Nam trang 4 - 5, cho biết thành phố nào sau đây không trực thuộc Trung ương?",
      cateId: 12,
      levelId: 4,
    },
    {
      content: "Căn cứ vào Át Lát Địa lí Việt Nam trang 15, hãy cho biết các đô thị nào sau đây ở nước ta là đô thị loại 3?",
      cateId: 12,
      levelId: 4,
    },
    {
      content: "Căn cứ vào Atlat Địa lí Việt Nam trang 25, các lễ hội truyền thống ở Đồng bằng sông Hồng là:",
      cateId: 12,
      levelId: 4,
    },
    //cate13
    {
      content:
        "Các dãy núi ở miền Tây Bắc và Bắc Trung Bộ có hướng chính là",
      cateId: 13,
      levelId: 1,
    },
    {
      content:
        "Hướng nghiêng chung của địa hình nước ta là",
      cateId: 13,
      levelId: 1,
    },
    {
      content:
        "Hướng chính của các dãy núi ở miền Bắc và Đông Bắc Bắc Bộ là",
      cateId: 13,
      levelId: 1,
    },
    {
      content:
        "Khu vực đồi núi của nước ta không phải là nơi có",
      cateId: 13,
      levelId: 1,
    },
    {
      content:
        "Đặc điểm nào sau đây không đúng với địa hình Việt Nam?",
      cateId: 13,
      levelId: 1,
    },

    {
      content:
        "Mặc dù nước ta có 3/4 (ba phần tư) diện tích lãnh thổ là đồi núi, nhưng tính chất nhiệt đới vẫn được bảo toàn, nguyên nhân là do",
      cateId: 13,
      levelId: 2,
    },
    {
      content:
        "Mặc dù nước ta có 3/4 (ba phần tư) diện tích lãnh thổ là đồi núi, nhưng tính chất nhiệt đới vẫn được bảo toàn, nguyên nhân là do",
      cateId: 13,
      levelId: 2,
    },
    {
      content: "Dạng địa hình chiếm diện tích lớn nhất trên lãnh thổ nước ta là",
      cateId: 13,
      levelId: 2,
    },
    {
      content: "Tây Bắc – Đông Nam là hướng chính của vùng núi nào nước ta? ",
      cateId: 13,
      levelId: 2,
    },
    {
      content: "Địa hình bán bình nguyên thể hiện rõ nhất ở",
      cateId: 13,
      levelId: 2,
    },

    {
      content:
        "Nhận định nào sau đây không phải là hạn chế của vùng đồi núi nước ta?",
      cateId: 13,
      levelId: 3,
    },
    {
      content: "Sự khác nhau rõ nét về địa hình giữa sườn đông và sườn tây của dãy Trường Sơn Nam là",
      cateId: 13,
      levelId: 3,
    },
    {
      content:
        "Nhận định nào sau đây không đúng với đặc điểm địa hình vùng núi nước ta?",
      cateId: 13,
      levelId: 3,
    },
    {
      content:
        "Điểm giống nhau chủ yếu của địa hình vùng đồi núi Đông Bắc và Tây Bắc là",
      cateId: 13,
      levelId: 3,
    },
    {
      content:
        "Đặc điểm địa hình có ý nghĩa lớn trong việc bảo toàn tính chất nhiệt đới ẩm gió mùa của thiên nhiên nước ta là",
      cateId: 13,
      levelId: 3,
    },

    {
      content: "Địa hình nào sau đây ứng với tên của vùng núi có các bộ phận: phía đông là dãy núi cao, đồ sộ; phía tây là địa hình núi trung bình; ở giữa thấp hơn là các dãy núi xen các sơn nguyên và cao nguyên đá vôi?",
      cateId: 13,
      levelId: 4,
    },
    {
      content:
        "“Địa thế cao hai đầu, thấp ở giữa, chạy theo hướng tây bắc - đông nam”. Đó là đặc điểm của vùng núi nào sau đây?",
      cateId: 13,
      levelId: 4,
    },
    {
      content:
        "Trong khu vực địa hình đồi núi của nước ta, chiếm ưu thế là",
      cateId: 13,
      levelId: 4,
    },
    {
      content: "Địa hình đồi trung du thể hiện rõ nhất ở",
      cateId: 13,
      levelId: 4,
    },
    {
      content: "Vùng núi Trường Sơn Bắc được giới hạn từ",
      cateId: 13,
      levelId: 4,
    },
    //cate 14
    {
      content:
        "Trong những năm qua, tổng diện tích rừng nước ta đang tăng dần lên nhưng",
      cateId: 14,
      levelId: 1,
    },
    {
      content:
        "Tổng diện tích đất trồng rừng của nước ta, chiếm tỉ lệ lớn nhất là",
      cateId: 14,
      levelId: 1,
    },
    {
      content:
        "Tổng diện tích đất trồng rừng của nước ta, chiếm tỉ lệ lớn nhất là",
      cateId: 14,
      levelId: 1,
    },
    {
      content:
        "Một trong những nguyên tắc quản lí, sử dụng và phát triển rừng phòng hộ là",
      cateId: 14,
      levelId: 1,
    },
    {
      content:
        "Một trong những nguyên tắc quản lí, sử dụng và phát triển rừng sản xuất là",
      cateId: 14,
      levelId: 1,
    },

    {
      content:
        "Nguyên tắc quản lí, sử dụng và phát triển rừng đặc dụng là",
      cateId: 14,
      levelId: 2,
    },
    {
      content:
        "Sự suy giảm đa dạng sinh học ở nước ta không có biểu hiện nào dưới đây?",
      cateId: 14,
      levelId: 2,
    },
    {
      content: "Biện pháp nào dưới đay không sử dụng bảo vệ đa dạng sinh học ở nước ta?",
      cateId: 14,
      levelId: 2,
    },
    {
      content: "Hai vấn đề lớn nhất trong việc sử dụng tài nguyên nước ta hiện nay là",
      cateId: 14,
      levelId: 2,
    },
    {
      content: "Giải thích tại sao ở vùng đồng bằng Duyên hải miền Trung ít bị ngập úng hơn các vùng đồng bằng khác?",
      cateId: 14,
      levelId: 2,
    },

    {
      content:
        "Tại sao những năm gần đây nguồn tài nguyên sinh vật dưới nước ở nước ta bị giảm sút rõ rệt?",
      cateId: 14,
      levelId: 3,
    },
    {
      content: "Việc bảo vệ tài nguyên rừng nước ta có ý nghĩa chủ yếu về",
      cateId: 14,
      levelId: 3,
    },
    {
      content:
        "Cần phải đặt vấn đề sử dụng hợp lý và bảo vệ tài nguyên thiên nhiên nước ta, vì",
      cateId: 14,
      levelId: 3,
    },
    {
      content:
        "Giải thích tại sao ở các khu bảo tồn thiên nhiên, vườn quốc gia,… không khuyết khích phát triển du lịch sinh thái một cách ồ ạt?",
      cateId: 14,
      levelId: 3,
    },
    {
      content:
        "Vì sao môi trường nông thôn Việt Nam ô nhiễm nghiêm trọng trong những năm gần đây?",
      cateId: 14,
      levelId: 3,
    },

    {
      content: "Ở nước ta, rừng không được phân chia thành",
      cateId: 14,
      levelId: 4,
    },
    {
      content:
        "Nhận định nào sau đây không phải vấn đề quan trọng trong việc sử dụng tài nguyên nước hiện nay ở nước ta?",
      cateId: 14,
      levelId: 4,
    },
    {
      content:
        "Để hạn chế xói mòn trên đất dốc phải áp dụng tổng hợp biện pháp nào dưới đây?",
      cateId: 14,
      levelId: 4,
    },
    {
      content: "Để bảo vệ nguồn gen động, thực vật quý hiếm khỏi nguy cơ tuyệt chủng thì nước ta đã",
      cateId: 14,
      levelId: 4,
    },
    {
      content: "Mục tiêu ban hành “sách đỏ Việt Nam” là",
      cateId: 14,
      levelId: 4,
    },
    //cate15
    {
      content:
        "Về dân số, nước ta đứng thứ ba trong khu vực Đông Nam Á sau?",
      cateId: 15,
      levelId: 1,
    },
    {
      content:
        "Về dân số, so với các quốc gia trên thế giới, nước ta là nước?",
      cateId: 15,
      levelId: 1,
    },
    {
      content:
        "Dân số nước ta tăng nhanh, đặc biệt là vào thời gian nào sau đây? ",
      cateId: 15,
      levelId: 1,
    },
    {
      content:
        "Hơn 3 triệu người Việt hiện đang sinh sống ở nước ngoài, tập chung nhiều nhất ở",
      cateId: 15,
      levelId: 1,
    },
    {
      content:
        "Hiện tại cơ cấu nước ta có đặc điểm nào sau đây? ",
      cateId: 15,
      levelId: 1,
    },

    {
      content:
        "Hiện tại, nước ta đang trong giai đoạn “Cơ cấu dân số vàng” điều đó có nghĩa là",
      cateId: 15,
      levelId: 2,
    },
    {
      content:
        "Vùng có mật độ dân số cao nhất nước ta là",
      cateId: 15,
      levelId: 2,
    },
    {
      content: "Vùng nào ở nước ta có mật độ dân số thấp nhất?",
      cateId: 15,
      levelId: 2,
    },
    {
      content: "Tỉ trọng của các nhóm tuổi trong cơ cấu dân số ở nước ta đang chuyển biến theo hướng nào sau đây? ",
      cateId: 15,
      levelId: 2,
    },
    {
      content: "Số dân thành thị nước ta tăng nhanh trong những năm gần đây chủ yếu là do nguyên nhân nào sau đây?",
      cateId: 15,
      levelId: 2,
    },

    {
      content:
        "Vùng nào sau đây có số dân đô thị lớn nhất nước ta hiện nay?",
      cateId: 15,
      levelId: 3,
    },
    {
      content: "Phát biểu nào sau đây không đúng về đô thị hóa ở nước ta?",
      cateId: 15,
      levelId: 3,
    },
    {
      content:
        "Đặc điểm của đô thị nước ta hiện nay là",
      cateId: 15,
      levelId: 3,
    },
    {
      content:
        "Phát biểu nào sau đây đúng với đô thị hóa ở nước ta hiện nay?",
      cateId: 15,
      levelId: 3,
    },
    {
      content:
        "Đô thị hóa ở nước ta có đặc điểm là",
      cateId: 15,
      levelId: 3,
    },

    {
      content: "Vùng có nhiều đô thị trực thuộc Trung Ương nhất ở nước ta là",
      cateId: 15,
      levelId: 4,
    },
    {
      content:
        "Các đô thị thời Pháp thuộc có chức năng chủ yếu là",
      cateId: 15,
      levelId: 4,
    },
    {
      content:
        "Sự chuyển dịch cơ cấu dân số thành thị và nông thôn phù hợp với quá trình công nghiệp hóa, hiện đại hóa ở nước ta là",
      cateId: 15,
      levelId: 4,
    },
    {
      content: "Để giảm tình trạng di dân tự do vào các đô thị, giải pháp lâu dài và chủ yếu là",
      cateId: 15,
      levelId: 4,
    },
    {
      content: "Quá trình đô thị hóa của nước ta đã nảy sinh những hậu quả về các vấn đề nào sau đây?",
      cateId: 15,
      levelId: 4,
    },
    //cate16
    {
      content:
        "2 mạch tổng hợp liên tục, còn trên mạch khuôn còn lại, mạch mới được tổng hợp ngắt quãng theo từng đoạn. Hiện tượng này xảy ra do",
      cateId: 16,
      levelId: 1,
    },
    {
      content:
        "Tính thoái hóa của mã di truyền là hiện tượng nhiều bộ ba khác nhau cùng mã hóa cho một loại axit amin. Những mã di truyền nào sau đây có tính thoái hóa?",
      cateId: 16,
      levelId: 1,
    },
    {
      content:
        "Vùng nhân của vi khuẩn Helicobacter pylori có một phân tử ADN và ADN chỉ chứa N14 . Đưa một vi khuẩn Helicobacter pylori vào trong môi trường dinh dưỡng chỉ chứa N15 phóng xạ và vi khuẩn sinh sản theo hình thức phân đôi tạo ra 16 vi khuẩn con. Khẳng định nào sau đây đúng?",
      cateId: 16,
      levelId: 1,
    },
    {
      content:
        "Tính đặc hiệu của mã di truyền được thể hiện như thế nào?",
      cateId: 16,
      levelId: 1,
    },
    {
      content:
        "Khi nói về quá trình nhân đôi ADN, phát biểu nào sau đây sai?",
      cateId: 16,
      levelId: 1,
    },

    {
      content:
        "Các bộ ba trên mARN có vai trò quy định tín hiệu kết thúc quá trình dịch mã là:",
      cateId: 16,
      levelId: 2,
    },
    {
      content:
        "Sự nhân đôi ADN ở sinh vật nhân thực khác với sự nhân đôi của ADN ở E. coli về:",
      cateId: 16,
      levelId: 2,
    },
    {
      content: "Ở cấp độ phân tử, thông tin di truyền được truyền từ tế bào mẹ sang tế bào con nhờ cơ chế",
      cateId: 16,
      levelId: 2,
    },
    {
      content: "Từ 3 loại nucleotit khác nhau sẽ tạo được nhiều nhất bao nhiêu loại bộ mã khác nhau?",
      cateId: 16,
      levelId: 2,
    },
    {
      content: "Enzim ADN polimeraza có vai trò gì trong quá trình tái bản ADN?",
      cateId: 16,
      levelId: 2,
    },

    {
      content:
        "Một gen ở sinh vậy nhân sơ có số lượng các loại nucleotit trên một mạch là A = 70; G = 100; X = 90; T = 80. Gen này nhân đôi một lần, số nucleotit loại X mà môi trường nội bào cần cung cấp cho quá trình này là:",
      cateId: 16,
      levelId: 3,
    },
    {
      content: "Một gen dài 5100A, số nucleotit loại A của gen bằng 2/3 số lượng một loại nucleotit khác. Gen này thực hiện tái bản liên tiếp 4 lần. Số nucleotit mỗi loại mà môi trường nội bào cung cấp cho quá trình tái bản trên là:",
      cateId: 16,
      levelId: 3,
    },
    {
      content:
        "Dựa vào đâu để phân loại gen cấu trúc và gen điều hòa?",
      cateId: 16,
      levelId: 3,
    },
    {
      content:
        "Nguyên tắc bán bảo tồn được thể hiện trong cơ chế nhân đôi ADN có nghĩa là:",
      cateId: 16,
      levelId: 3,
    },
    {
      content:
        "Loại enzim nào sau đây trực tiếp tham gia vào quá trình phiên mã các gen cấu trúc ở sinh vật nhân sơ?",
      cateId: 16,
      levelId: 3,
    },

    {
      content: "Sự hoạt động đồng thời của nhiều riboxom trên cùng một phân tử mARN có vai trò",
      cateId: 16,
      levelId: 4,
    },
    {
      content:
        "Mạch khuôn của gen có đoạn 3’ TATGGGXATGTA 5’ thì mARN được phiên mã từ mạch khuôn này có trình tự nucleotit là",
      cateId: 16,
      levelId: 4,
    },
    {
      content:
        "Một trong những điểm giống nhau giữa quá trình nhân đôi ADN và quá trình phiên mã ở sinh vật nhân thực là",
      cateId: 16,
      levelId: 4,
    },
    {
      content: "Phân tử mARN ở tế bào nhân sơ được phiên mã từ một gen có 3000 nucleotit sau đó tham gia vào quá trình dịch mã. Quá trình tổng hợp protein có 5 riboxom cùng trượt trên mARN đó 4 lần . Số axit amin môi trường cần cung cấp để hoàn tất quá trình dịch mã trên là",
      cateId: 16,
      levelId: 4,
    },
    {
      content: "Thành phần nào sau đây không tham gia trực tiếp vào quá trình dịch mã?",
      cateId: 16,
      levelId: 4,
    },
    //cate17
    {
      content:
        "Khi đề xuất giả thuyết mỗi tính trạng do một một cặp nhân tố di truyền quy định, các nhân tố di truyền trong tế bào không hòa trộn với nhau và phân li đồng đều về các giao tử. Menđen kiểm tra giả thuyết của mình bằng cách nào?",
      cateId: 17,
      levelId: 1,
    },
    {
      content:
        "Theo Menđen, cơ chế chi phối sự di truyền và biểu hiện của một cặp tính trạng tương phản qua các thế hệ là do",
      cateId: 17,
      levelId: 1,
    },
    {
      content:
        "Điều nào sau đây không đúng với quy luật phân li của Menđen?",
      cateId: 17,
      levelId: 1,
    },
    {
      content:
        "Cơ sở tế bào học của quy luật phân li là",
      cateId: 17,
      levelId: 1,
    },
    {
      content:
        "Cho cây lúa hạt tròn lai với cây lúa hạt dài, F1 thu được 100% cây lúa hạt dài. Cho F1 tự thụ phấn được F2. Trong số cây lúa hạt dài F2, tính theo lí thuyết thì số cây lúa hạt dài khi tự thụ phấn cho F3 toàn lúa hạt dài chiếm tỉ lệ",
      cateId: 17,
      levelId: 1,
    },

    {
      content:
        "Trong trường hợp gen trội không hoàn toàn, tỉ lệ phân li kiểu hình 1:1 ở F1 sẽ xuất hiện trong kết quả của phép lai nào dưới đây?",
      cateId: 17,
      levelId: 2,
    },
    {
      content:
        "Ở người mắt nâu (N) là trội đối với mắt xanh (n). Bố mắt nâu, mẹ mắt nâu, sinh con có đứa mắt nâu có đứa mắt xanh, kiểu gen của bố mẹ sẽ là:",
      cateId: 17,
      levelId: 2,
    },
    {
      content: "Bệnh bạch tạng do một alen lặn nằm trên NST thường quy định, alen trội tương ứng quy định tính trạng bình thường. Trong một gia đình, người bố bị bạch tạng, còn người mẹ bình thường nhưng có bố mắc bệnh bạch tạng. Cặp bố mẹ này sinh con mắc bệnh với xác suất là",
      cateId: 17,
      levelId: 2,
    },
    {
      content: "Ở người, bệnh pheninketo niệu do đột biến gen gen lặn nằm trên NST thường quy định. Bố và mẹ bình thường sinh đứa con gái đầu lòng bị bệnh pheninketo niệu. Xác suất để họ sinh đứa con tiếp theo là con trai và không bị bệnh trên là",
      cateId: 17,
      levelId: 2,
    },
    {
      content: "Ở cừu, gen quy định màu lông nằm trên NST thường. Alen A quy định màu lông trắng là trội hoàn toàn so với alen a quy định lông đen. Một cừu đực được lai với một cừu cái, cả 2 đều dị hợp. Cừu non sinh ra là một cừu đực trắng. Nếu tiến hành lai trở lại với mẹ thì xác suất để có một con cừu cái lông đen là bao nhiêu?",
      cateId: 17,
      levelId: 2,
    },

    {
      content:
        "Một cặp vợ chồng đều có nhóm máu AB. Xác suất để đứa con đầu lòng của họ là con gái mang nhóm máu là A hoặc B sẽ là",
      cateId: 17,
      levelId: 3,
    },
    {
      content: "Ở đậu Hà Lan, alen A quy định thân cao trội hoàn toàn so với alen a quy định thân thấp. Cho cây thân cao (P) tự thụ phấn, thu được F1 gồm 75% cây thân cao và 25% cây thân thấp. Cho tất cả các cây thân cao F1 giao phấn với các cây thân thấp. Theo lí thuyết, thu được đời con có kiểu hình phân li theo tỉ lệ:",
      cateId: 17,
      levelId: 3,
    },
    {
      content:
        "Ở người, dạng tóc do một gen gồm 2 alen (A, a) nằm trên NST thường quy định. Người chồng tóc xoăn có bố, mẹ đều tóc xoăn và em gái tóc thẳng; người vợ tóc xoăn có bố tóc xoăn, mẹ và em trai tóc thẳng. Tính theo lí thuyết thì xác suất cặp vợ chồng này sinh được 1 con gái tóc xoăn là",
      cateId: 17,
      levelId: 3,
    },
    {
      content:
        "Để giải thích tỉ lệ phân li ở F2 xấp xỉ 3:1, Menđen tiến hành",
      cateId: 17,
      levelId: 3,
    },
    {
      content:
        "Quy luật phân li đúng với hiện tượng trội không hoàn toàn do:",
      cateId: 17,
      levelId: 3,
    },

    {
      content: "Bố mẹ truyền nguyên vẹn cho con cái",
      cateId: 17,
      levelId: 4,
    },
    {
      content:
        "Trong phép lai một cặp tính trạng của Menđen, để các alen của một cặp gen phân li đều về các giao tử thì cần có điều kiện gì?",
      cateId: 17,
      levelId: 4,
    },
    {
      content:
        "Sử dụng phép lai nào sau đây có thể xác định được kiểu gen của cơ thể mang kiểu hình trội?",
      cateId: 17,
      levelId: 4,
    },
    {
      content: "Cơ sở tế bào học của quy luật phân li là",
      cateId: 17,
      levelId: 4,
    },
    {
      content: "Một loài thực vật, alen A qui định thân cao trội hoàn toàn so với alen a qui định thân thấp. Biết rằng không xảy ra đột biến. Theo lí thuyết, phép lai nào sau đây cho đời con chỉ xuất hiện cây thân cao?",
      cateId: 17,
      levelId: 4,
    },
    //cate18
    {
      content:
        "Một loài động vật giới đực XX, giới cái XY. Trên hai cặp nhiễm sắc thể thường xét hai gen phân li độc lập có số alen lần lượt là 2 và 3; trên đoạn tương đồng của nhiễm sắc thể X xét 2 gen đều có 2 alen. Cho các cá thể đồng hợp về tất cả các gen lai với nhau. Xác định số phép lai có thể có?",
      cateId: 18,
      levelId: 1,
    },
    {
      content:
        "Hai quần thể Chuột đồng (I và II) có kích thước lớn, sống cách biệt nhau. Tần số alen A quy định chiều dài lông ở quần thể I là 0,7 và quần thể II là 0,4. Một nhóm cá thể từ quần thể I di cư sang quần thể II. Sau vài thế hệ giao phối, người ta khảo sát thấy tần số alen A ở quần thể II là 0,415. Số cá thể di cư của quần thể I chiếm bao nhiều % so với quần thể II?",
      cateId: 18,
      levelId: 1,
    },
    {
      content:
        "Quần thể tự thụ phấn có vốn gen",
      cateId: 18,
      levelId: 1,
    },
    {
      content:
        "Ở một loài động vật, alen A quy định lông xám trội hoàn toàn so với alen a quy định lông đen. Gen này năm trên nhiễm sắc thể thường. Một quần thể của loài này ở thế hệ xuất phát (P) có cấu trúc di truyền 6AA: 0,3Aa : 0,1 aa. Giả sử ở quần thể này, những cá thể có cùng màu lông chỉ giao phối ngẫu nhiên với nhau mà không giao phối với các cá thể có màu lông khác và quần thể không chịu tác động của các nhân tố tiến hóa khác. Theo lí thuyết, tỉ lệ cá thể lông đen ở F1 là",
      cateId: 18,
      levelId: 1,
    },
    {
      content:
        "Khi nói về di truyền quần thể, nhận xét nào sau đây không chính xác?",
      cateId: 18,
      levelId: 1,
    },

    {
      content:
        "Một loài động vật, alen trội là trội hoàn toàn, tần số alen A = 0,3 và a = 0,7. Cho biết quần thể ở trạng thái cân bằng di truyền.",
      cateId: 18,
      levelId: 2,
    },
    {
      content:
        "Một quần thể có cấu trúc như sau: 300AA : 450Aa : 340aa. Số lượng alen a trong quần thể trên là",
      cateId: 18,
      levelId: 2,
    },
    {
      content: "Một quần thể thực vật ngẫu phối thế hệ xuất phát đang ở trạng thái cân bằng di truyền có tần số alen A = 0,6. Biết rằng alen A trội hoàn toàn so với alen a. Theo lí thuyết, nhận định nào sau đây đúng?",
      cateId: 18,
      levelId: 2,
    },
    {
      content: "Một quần thể thực vật giao phấn ngẫu nhiên, alen A quy định thân cao trội hoàn toàn so với alen a quy định thân thấp. Xét thế hệ xuất phát (P) của quần thể này có thành phần kiểu gen như sau: 0,3AA: 0,6Aa : 0,1 aa.",
      cateId: 18,
      levelId: 2,
    },
    {
      content: "Trong một quần thể của một loài ngẫu phối, tỉ lệ giao tử mang alen đột biến là 10%. Theo lí thuyết, tỉ lệ hợp tử mang gen đột biến là",
      cateId: 18,
      levelId: 2,
    },

    {
      content:
        "Xét một gen có hai alen A và a, alen A quy định hoa đỏ trội hoàn toàn so với alen a quy định hoa trắng. Trong một quần thể tự thụ phấn, ở thế hệ P có 40% số cây có kiểu gen dị hợp. Theo lí thuyết, ở thế hệ F4,",
      cateId: 18,
      levelId: 3,
    },
    {
      content: "Một người đàn ông có nhóm máu A từ một quần thể người Châu Mỹ có tỉ lệ người mang nhóm máu O là 4% và nhóm máu B là 21% kết hôn với người phụ nữ có nhóm máu A từ một quần thể người Châu Á có tỉ lệ người có nhóm máu O là 9% và nhóm máu A là 27%. Biết rằng, các quần thể trên đang ở trạng thái cân bằng di truyền. Xác suất để cặp vợ chồng này sinh được 2 người con khác giới tính, cùng nhóm máu A là bao nhiêu?",
      cateId: 18,
      levelId: 3,
    },
    {
      content:
        "Trong các phát biểu sau đây, phát biểu nào đúng?",
      cateId: 18,
      levelId: 3,
    },
    {
      content:
        "Cấu trúc di truyền của quần thể tự phối có những đặc điểm nào sau đây?",
      cateId: 18,
      levelId: 3,
    },
    {
      content:
        "Trong 1 quần thể giao phối, nhận định nào dưới đây là đúng?",
      cateId: 18,
      levelId: 3,
    },

    {
      content: "Ở quần thể của 1 loài lưỡng bội, xét 1 gen nằm trên NST thường có 9 alen. Trong điều kiện không có đột biến, trong quần thể sẽ có tối đa bao nhiêu loại kiểu gen đồng hợp và gen nói trên?",
      cateId: 18,
      levelId: 4,
    },
    {
      content:
        "Ở quần thể của 1 loài lưỡng bội, xét gen I nằm trên cặp NST thường số 1 có 3 alen, gen II nằm trên cặp NST thường số 2 có 6 alen. Trong điều kiện không có đột biến, trong quần thể sẽ có tối đa bao nhiêu loại kiểu gen dị hợp về cả 2 gen nói",
      cateId: 18,
      levelId: 4,
    },
    {
      content:
        "Một quần thể chuột khởi đầu có số lượng 3000 con, trong đó chuột lông xám đồng hợp là 2100 con, chuột lông xám dị hợp là 300 con, chuột lông trắng là 600 con. Biết màu lông do 1 gen gồm 2 alen (A và a) quy định. Tần số tương đối của mỗi alen trong quần thể trên là:",
      cateId: 18,
      levelId: 4,
    },
    {
      content: "Một quần thể ban đầu có tỉ lệ kiểu gen aa chiếm 0,1, còn lại kiểu gen AA và Aa. Sau 5 thế hệ tự phối bắt buộc, tỉ lệ của thể dị hợp trong quần thể còn lại là 0,01875. Tỉ lệ các kiểu gen trong quần thể ban đầu là",
      cateId: 18,
      levelId: 4,
    },
    {
      content: "Ở 1 loài thực vật lưỡng bội sinh sản bằng tự thụ phấn, alen A quy định quả tròn, a quy định quả bầu dục. Thế hệ xuất phát của 1 quần thể có 100% cây quả tròn. Ở thế hệ F3 tỉ lệ kiểu hình là 13 tròn : 7 bầu dục. Ở thế hệ xuất phát, trong số các cây quả tròn thì cây thuần chủng chiếm tỉ lệ là",
      cateId: 18,
      levelId: 4,
    },
    //cate19
    {
      content:
        "Hiện tượng con lai có năng suất, phẩm chất, sức chống chịu, khả năng sinh trưởng và phát triển vượt trội bố mẹ gọi là:",
      cateId: 19,
      levelId: 1,
    },
    {
      content:
        "Nguồn nguyên liệu làm cơ sở vật chất để tạo giống mới là",
      cateId: 19,
      levelId: 1,
    },
    {
      content:
        "Phát biểu nào sau đây là đúng về ưu thế lai?",
      cateId: 19,
      levelId: 1,
    },
    {
      content:
        "Khi nói về ưu thế lai, phát biểu nào sau đây là đúng?",
      cateId: 19,
      levelId: 1,
    },
    {
      content:
        "Khi nói về ưu thế lai, phát biểu nào sau đây sai?",
      cateId: 19,
      levelId: 1,
    },

    {
      content:
        "Đối với cây trồng, để duy trì và cùng cố ưu thế lai người ta có thể sử dụng",
      cateId: 19,
      levelId: 2,
    },
    {
      content:
        "Thành tựu chọn giống cây trồng nổi bật nhất ở nước ta là chọn giống",
      cateId: 19,
      levelId: 2,
    },
    {
      content: "Phát Biểu Nào Sau Đây Đúng",
      cateId: 19,
      levelId: 2,
    },
    {
      content: "Khi nói về ưu thế lai, phát biểu nào sau đây đúng",
      cateId: 19,
      levelId: 2,
    },
    {
      content: "Trong các phương pháp sau đây, phương pháp nào tạo nguồn biến dị di truyền cho chọn giống?",
      cateId: 19,
      levelId: 2,
    },

    {
      content:
        "Hiện tượng con lai có năng suất, phẩm chất, sức chống chịu, khả năng sinh trưởng và phát triển vượt trội so với bố mẹ gọi là:",
      cateId: 19,
      levelId: 3,
    },
    {
      content: "Phương pháp tạo ra ưu thế lai cao nhất là",
      cateId: 19,
      levelId: 3,
    },
    {
      content:
        "Phép lai nào sau đây được sử dụng để tạo ra ưu thế lai?",
      cateId: 19,
      levelId: 3,
    },
    {
      content:
        "Tạo giống thuần chủng bằng phương pháp dựa trên biến dị tổ hợp chỉ áp dụng có hiệu quả với:",
      cateId: 19,
      levelId: 3,
    },
    {
      content:
        "Trong tạo giống bằng ưu thế lại, người ta không dùng con lai F1 làm giống vì:",
      cateId: 19,
      levelId: 3,
    },

    {
      content: "Ưu thế lai là hiện tượng",
      cateId: 19,
      levelId: 4,
    },
    {
      content:
        "Phát biểu nào dưới đây không đúng với ưu thế lai?",
      cateId: 19,
      levelId: 4,
    },
    {
      content:
        "Trong phương pháp chọn giống sử dụng ưu thế lai, các con lai F1 có ưu thế lai được sử dụng vào mục đích:",
      cateId: 19,
      levelId: 4,
    },
    {
      content: "Trong việc tạo ưu thế lai, lai thuận và lai nghịch giữa các dòng thuần chủng giúp chúng ta:",
      cateId: 19,
      levelId: 4,
    },
    {
      content: "Một cơ thể có kiểu gen AaBb tự thụ phấn. Theo lí thuyết, sẽ tạo ra tối đa bao nhiêu dòng thuần chủng?",
      cateId: 19,
      levelId: 4,
    },
    //cate20
    {
      content:
        "Di truyền y học là? ",
      cateId: 20,
      levelId: 1,
    },
    {
      content:
        "Những đặc điểm nào sau đây về bệnh pheninketo niệu là đúng?",
      cateId: 20,
      levelId: 1,
    },
    {
      content:
        "Trong các bệnh/ hội chứng bệnh sau đây ở người, bệnh/ hội chứng nào do đột biến số lượng NST gây nên?",
      cateId: 20,
      levelId: 1,
    },
    {
      content:
        "Khi nói về ung thư,phát biểu nào sau đây đúng?",
      cateId: 20,
      levelId: 1,
    },
    {
      content:
        "Phát biểu nào sau đây là đúng khi nói về hội chứng Đao ở người?",
      cateId: 20,
      levelId: 1,
    },

    {
      content:
        "Bệnh máu khó đông ở người do gen đột biến lặn a nằm trên NST giới tính X quy định. Gen A quy định máu đông bình thường. Trường hợp nào sau đây cho đời con có tất cả con gái đều bình thường và tất cả con trai đều mắc bệnh máu khó đông?",
      cateId: 20,
      levelId: 2,
    },
    {
      content:
        "Đối với 1 bệnh di truyền do gen đột biến trội nằm trên NST thường quy định, nếu 1 trong 2 bố mẹ bình thường, người kia mắc bệnh thì khả năng con của con họ mắc bệnh là:",
      cateId: 20,
      levelId: 2,
    },
    {
      content: "Ở người, gen quy định máu khó đông nằm trên NST X, không có alen tương ứng trên NST Y. Một người đàn ông bị bệnh lấy vợ bình thường, sinh con trai bị bệnh. Dự đoán nào sau đây đúng?",
      cateId: 20,
      levelId: 2,
    },
    {
      content: "Ở người gen A quy định nhìn bình thường, gen a quy định bệnh mù màu. Gen này nằm trên nhiễm sắc thể X, không có alen tương ứng trên Y. Cặp bố mẹ nào sau đây có thể sinh cả con trai và con gái bị bệnh mù màu:",
      cateId: 20,
      levelId: 2,
    },
    {
      content: "Dạng đột biến cấu trúc nhiễm sắc thể có ý nghĩa trong công nghiệp sản xuất bia là",
      cateId: 20,
      levelId: 2,
    },

    {
      content:
        "phát biểu đúng là:",
      cateId: 20,
      levelId: 3,
    },
    {
      content: "Gánh nặng của di truyền là?",
      cateId: 20,
      levelId: 3,
    },
    {
      content:
        "Trong những biện pháp sau, biện pháp cần thực hiện để bảo vệ vốn gen của loài người?",
      cateId: 20,
      levelId: 3,
    },
    {
      content:
        "Khi nói về nhiệm vụ của Di truyền y học tư vấn, phát biểu nào sau đây không đúng?",
      cateId: 20,
      levelId: 3,
    },
    {
      content:
        "Liệu pháp gen là?",
      cateId: 20,
      levelId: 3,
    },

    {
      content: "Bệnh pheniketo niệu và bệnh bạch tạng ở người do 2 gen lặn nằm trên 2 cặp NST thường khác nhau quy định. Một cặp vợ chồng có kiểu gen dị hợp về cả 2 cặp gen này dự định sinh con. Xác suất họ sinh 2 đứa con trong đó có 1 đứa mắc 1 trong 2 bệnh này, còn 1 đứa bị cả 2 bệnh là bao nhiêu?",
      cateId: 20,
      levelId: 4,
    },
    {
      content:
        "Người ta đã sử dụng kĩ thuật nào sau đây để phát hiện sớm bệnh pheninketo niệu ở người?",
      cateId: 20,
      levelId: 4,
    },
    {
      content:
        "Quy trình kĩ thuật của liệu pháp gen không có bước nào sau đây?",
      cateId: 20,
      levelId: 4,
    },
    {
      content: "Ở người, xét 1 bệnh do alen trội nằm trên NST giới tính X quy định. Trong các đặc điểm di truyền sau đây, đặc điểm nào di truyền của bệnh này?",
      cateId: 20,
      levelId: 4,
    },
    {
      content: "Ở người, kiểu tóc do một gen gồm 2 alen (A, a) nằm trên NST thường quy định. Người chồng tóc xoăn có bố, mẹ đều tóc xoăn và em gái tóc thẳng. Người vợ tóc xoăn có bố tóc xoăn, mẹ và em trai tóc thẳng. Tính theo lí thuyết thì xác suất cặp vợ chồng này sinh được con gái đầu lòng tóc thẳng là?",
      cateId: 20,
      levelId: 4,
    },
    //cate21
    {
      content:
        "Cần tiến hành cập nhật hồ sơ học sinh của nhà trường trong các trường hợp nào sau đây?",
      cateId: 21,
      levelId: 1,
    },
    {
      content:
        "Các bước xây dựng CSDL là:",
      cateId: 21,
      levelId: 1,
    },
    {
      content:
        "Chức năng của hệ quản trị CSDL là:",
      cateId: 21,
      levelId: 1,
    },
    {
      content:
        "Đối tượng nào dùng để lưu dữ liệu, chưa thông tin về một chủ thể xác định và bao gồm nhiều hàng, mỗi hàng chứa các thông tin về một cá thể xác định của chủ thể đó?",
      cateId: 21,
      levelId: 1,
    },
    {
      content:
        "Trường nào dưới đây có thể được dùng làm khoá chính?",
      cateId: 21,
      levelId: 1,
    },

    {
      content:
        "Tính chất nào sau đây quy định cách hiển thị và in dữ liệu?",
      cateId: 21,
      levelId: 2,
    },
    {
      content:
        "Trong các phát biểu sau, phát biểu nào sai?",
      cateId: 21,
      levelId: 2,
    },
    {
      content: "Trong Access, muốn làm việc với đối tượng bảng, tại cửa sổ CSDL ta chọn nhãn :",
      cateId: 21,
      levelId: 2,
    },
    {
      content: "Chọn kiểu dữ liệu nào cho truờng Họ tên, Địa Chỉ…",
      cateId: 21,
      levelId: 2,
    },
    {
      content: "Chọn kiểu dữ liệu nào cho truờng điểm Toán, Lý, Hoá, Tin....",
      cateId: 21,
      levelId: 2,
    },

    {
      content:
        "Trong Access, nút lệnh Create Table  có chức năng gì?",
      cateId: 21,
      levelId: 3,
    },
    {
      content: "Trong Access, nút lệnh Filter có chức năng gì?",
      cateId: 21,
      levelId: 3,
    },
    {
      content:
        "Trong Access, nút lệnh prirts có chức năng gì?",
      cateId: 21,
      levelId: 3,
    },
    {
      content:
        "Trường Email có giá trị là: lop12A3@gmail.com. Hãy cho biết trường Email có kiểu dữ liệu gì?",
      cateId: 21,
      levelId: 3,
    },
    {
      content:
        "Dữ liệu kiểu số đếm, tăng tự động cho bản ghi mới là:",
      cateId: 21,
      levelId: 3,
    },

    {
      content: "Công việc tạo và thay đổi cấu trúc bảng được thực hiện trong chế độ nào?",
      cateId: 21,
      levelId: 4,
    },
    {
      content:
        "Người có vai trò quan trọng trong việc phân công quyền truy cập và sử dụng CSDL là:",
      cateId: 21,
      levelId: 4,
    },
    {
      content:
        "Trong Access, dữ liệu kiểu ngày giờ là:",
      cateId: 21,
      levelId: 4,
    },
    {
      content: "Trong Access, chế độ thiết kế thực hiện công việc gì?",
      cateId: 21,
      levelId: 4,
    },
    {
      content: "Người có nhu cầu khai thác thông tin từ CSDL là:",
      cateId: 21,
      levelId: 4,
    },
    //cate22
    {
      content:
        "Mô hình dữ liệu quan hệ được E. F. Codd đề xuất năm nào?",
      cateId: 22,
      levelId: 1,
    },
    {
      content:
        "Mô hình phổ biến để xây dựng ứng dụng CSDL quan hệ là:",
      cateId: 22,
      levelId: 1,
    },
    {
      content:
        "Thao tác nào sau đây không thuộc loại tạo lập CSDL quan hệ?",
      cateId: 22,
      levelId: 1,
    },
    {
      content:
        "Trong hệ CSDL quan hệ, miền là:",
      cateId: 22,
      levelId: 1,
    },
    {
      content:
        "Thao tác nào sau đây không là thao tác khai thác CSDL quan hệ?",
      cateId: 22,
      levelId: 1,
    },

    {
      content:
        "Việc đầu tiên để tạo lập một CSDL quan hệ là:",
      cateId: 22,
      levelId: 2,
    },
    {
      content:
        "Tìm phương án sai. Thao tác sắp xếp bản ghi:",
      cateId: 22,
      levelId: 2,
    },
    {
      content: "Thao tác nào sau đây không phải là thao tác cập nhật dữ liệu?",
      cateId: 22,
      levelId: 2,
    },
    {
      content: "Truy vấn cơ sở dữ liệu là gì?",
      cateId: 22,
      levelId: 2,
    },
    {
      content: "Các khái niệm dùng để mô tả các yếu tố nào sẽ tạo thành mô hình dữ liệu quan hệ?",
      cateId: 22,
      levelId: 2,
    },
    {
      content:
        "Muốn xóa liên kết giữa hai bảng, ta thực hiện theo cách nào sau đây?",
      cateId: 22,
      levelId: 3,
    },

    {
      content:
        "Chọn phát biểu đúng. Biểu mẫu được thiết kế để:",
      cateId: 22,
      levelId: 3,
    },
    {
      content: "Mọi thao tác như xem, tạo, sửa, xóa liên kết đều được thực hiện trong cửa sổ nào sau đây?",
      cateId: 22,
      levelId: 3,
    },
    {
      content:
        "Hai chế độ thường dùng để làm việc với mẫu hỏi là:",
      cateId: 22,
      levelId: 3,
    },
    {
      content:
        "Trong CSDL QuanLi_HS, để tìm các học sinh nữ có địa chỉ ở Hà Nội, ta sử dụng biểu thức lọc nào sau đây?",
      cateId: 22,
      levelId: 3,
    },
    {
      content:
        "Hãy chọn phương án ghép đúng nhất. Với báo cáo, ta không thể làm được việc gì trong những việc sau?",
      cateId: 22,
      levelId: 4,
    },

    {
      content: "Thuật ngữ “bộ” dùng trong hệ CSDL quan hệ là để chỉ đối tượng nào sau đây?",
      cateId: 22,
      levelId: 4,
    },
    {
      content:
        "Để nâng cao hiệu quả của việc bảo mật, ta cần:",
      cateId: 22,
      levelId: 4,
    },
    {
      content:
        "Phép cập nhật cấu trúc nào dưới đây làm thay đổi giá trị các dữ liệu hiện có trong bảng?",
      cateId: 22,
      levelId: 4,
    },
    {
      content: "Các yếu tố của hệ thống bảo vệ có thể thay đổi trong quá trình khai thác hệ CSDL gọi là:",
      cateId: 22,
      levelId: 4,
    },
    //cate23
    {
      content:
        "Trong Access Thuộc tính Validation Text của trường A sẽ quy định",
      cateId: 23,
      levelId: 1,
    },
    {
      content:
        "Trong Aceess Trong một truy vấn (Query) ta có thể nhóm dữ liệu tối đa bao nhiêu trường",
      cateId: 23,
      levelId: 1,
    },
    {
      content:
        "Trong Aceess Tên Table",
      cateId: 23,
      levelId: 1,
    },
    {
      content:
        "Access là hệ QT CSDL dành cho:",
      cateId: 23,
      levelId: 1,
    },
    {
      content:
        "Các chức năng chính của Access?",
      cateId: 23,
      levelId: 1,
    },

    {
      content:
        "Bước đầu tiên khi tạo một CSDL mới?",
      cateId: 23,
      levelId: 2,
    },
    {
      content:
        "Các đối tượng cơ bản trong Access là:",
      cateId: 23,
      levelId: 2,
    },
    {
      content: "Để định dạng, tính toán, tổng hợp và in dữ liệu, ta dùng:",
      cateId: 23,
      levelId: 2,
    },
    {
      content: "Trong Acess, để mở CSDL đã lưu, thao tác thực hiện lệnh nào sau đây là đúng?",
      cateId: 23,
      levelId: 2,
    },
    {
      content: "Kết thúc phiên làm việc với Access bằng cách thực hiện thao tác:",
      cateId: 23,
      levelId: 2,
    },

    {
      content:
        "Trong Access, muốn in dữ liệu ra giấy, ta thực hiện",
      cateId: 23,
      levelId: 3,
    },
    {
      content: "Khẳng định nào sau đây là sai?",
      cateId: 23,
      levelId: 3,
    },
    {
      content:
        "Trong Access, khi nhập dữ liệu cho bảng, giá trị của field GIOI_TINH là True. Khi đó field GIOI_TINH được xác định kiểu dữ liệu gì ?",
      cateId: 23,
      levelId: 3,
    },
    {
      content:
        "Khi chọn kiểu dữ liệu cho trường THÀNH_TIỀN (bắt buộc kèm theo đơn vị tiền tệ), phải chọn loại nào?",
      cateId: 23,
      levelId: 3,
    },
    {
      content:
        "Chọn kiểu dữ liệu nào cho truờng điểm “Tóan”, “Lý”,...",
      cateId: 23,
      levelId: 3,
    },

    {
      content: "Trong Access khi ta nhập dữ liệu cho trường “Ghi chú” trong CSDL (dữ liệu kiểu văn bản) mà nhiều hơn 255 kí tự thì ta cần phải định nghĩa trường đó theo kiểu nào?",
      cateId: 23,
      levelId: 4,
    },
    {
      content:
        "Trong Access, muốn nhập dữ liệu vào cho một bảng, ta thực hiện :",
      cateId: 23,
      levelId: 4,
    },
    {
      content:
        "Cập nhật dữ liệu là:",
      cateId: 23,
      levelId: 4,
    },
    {
      content: "Trong khi nhập dữ liệu cho bảng, muốn chèn thêm một bản ghi mới, ta thực hiện : Insert  ...........",
      cateId: 23,
      levelId: 4,
    },
    {
      content: "Bảng đã được hiển thị ở chế độ trang dữ liệu, với một trường đã chọn, muốn sắp xếp các bản ghi theo thứ tự tăng, thao tác thực hiện lệnh nào sau đây là đúng?",
      cateId: 23,
      levelId: 4,
    },
    //cate24
    {
      content:
        "Khi cần in dữ liệu theo một mẫu cho trước, cần sử dụng đối tượng:",
      cateId: 24,
      levelId: 1,
    },
    {
      content:
        "Báo cáo thường được sử dụng để:",
      cateId: 24,
      levelId: 1,
    },
    {
      content:
        "Để làm việc với báo cáo, chọn đối tượng nào trong bảng chọn đối tượng?",
      cateId: 24,
      levelId: 1,
    },
    {
      content:
        "Đối tượng nào sau đây không thể cập nhật dữ liệu?",
      cateId: 24,
      levelId: 1,
    },
    {
      content:
        "Giả sử bảng HOCSINH gồm có các trường MAHS, HOTEN, DIEM. LOP. Muốn hiển thị thông tin điểm cao nhất của mỗi lớp để sử dụng lâu dài, trong Access ta sử dụng đối tượng nào trong các đối tượng sau?",
      cateId: 24,
      levelId: 1,
    },

    {
      content:
        "Hai chế độ thường dùng để làm việc với mẫu hỏi là:",
      cateId: 24,
      levelId: 2,
    },
    {
      content:
        "Hai chế độ thường dùng để làm việc với mẫu hỏi là:",
      cateId: 24,
      levelId: 2,
    },
    {
      content: "Hai chế độ thường dùng để làm việc với mẫu hỏi là:",
      cateId: 24,
      levelId: 2,
    },
    {
      content: "Hai chế độ thường dùng để làm việc với mẫu hỏi là:",
      cateId: 24,
      levelId: 2,
    },
    {
      content: "Hai chế độ thường dùng để làm việc với mẫu hỏi là:",
      cateId: 24,
      levelId: 2,
    },

    {
      content:
        "Hai chế độ thường dùng để làm việc với mẫu hỏi là:",
      cateId: 24,
      levelId: 3,
    },
    {
      content: "Hai chế độ thường dùng để làm việc với mẫu hỏi là:",
      cateId: 24,
      levelId: 3,
    },
    {
      content:
        "Hai chế độ thường dùng để làm việc với mẫu hỏi là:",
      cateId: 24,
      levelId: 3,
    },
    {
      content:
        "Hai chế độ thường dùng để làm việc với mẫu hỏi là:",
      cateId: 24,
      levelId: 3,
    },
    {
      content:
        "Hai chế độ thường dùng để làm việc với mẫu hỏi là:",
      cateId: 24,
      levelId: 3,
    },

    {
      content: "Hai chế độ thường dùng để làm việc với mẫu hỏi là:",
      cateId: 24,
      levelId: 4,
    },
    {
      content:
        "Hai chế độ thường dùng để làm việc với mẫu hỏi là:",
      cateId: 24,
      levelId: 4,
    },
    {
      content:
        "Hai chế độ thường dùng để làm việc với mẫu hỏi là:",
      cateId: 24,
      levelId: 4,
    },
    {
      content: "Hai chế độ thường dùng để làm việc với mẫu hỏi là:",
      cateId: 24,
      levelId: 4,
    },
    {
      content: "Hai chế độ thường dùng để làm việc với mẫu hỏi là:",
      cateId: 24,
      levelId: 4,
    },
  ]);
};

module.exports = questionSeeding;
