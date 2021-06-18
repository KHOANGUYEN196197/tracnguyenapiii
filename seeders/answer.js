const answerSeeding = async (db) => {
  const questions = await db.question.findAll({});
  const answers = [];
  // for (const item of questions) {
  //   for (let i = 1; i <= 4; i++) {
  //     answers.push({
  //       content: `Câu trả lời thứ-${i} questionId-${item.id}`,
  //       isCorrect: i === 1 ? true : false,
  //       questionId: item.id,
  //     });
  //   }
  // }
  // return db.answer.bulkCreate(answers);
  return db.answer.bulkCreate([
    ///cate 10
    { content: "Cộng hòa.", isCorrect: false, questionId: 1 },
    { content: "Quân chủ.", isCorrect: false, questionId: 1 },
    { content: "Quân chủ lập hiến.	", isCorrect: false, questionId: 1 },
    { content: "Xã hội chủ nghĩa.", isCorrect: true, questionId: 1 },

    {
      content: "nặng về phòng thủ, ít chủ động tiến công.",
      isCorrect: false,
      questionId: 2,
    },
    {
      content: "chưa được quần chúng nhân dân ủng hộ.",
      isCorrect: false,
      questionId: 2,
    },
    {
      content: "tinh thần chiến đấu của nghĩa quân chưa quyết liệt.",
      isCorrect: false,
      questionId: 2,
    },
    {
      content: "chỉ diễn ra trên địa bàn rừng núi hiểm trở",
      isCorrect: true,
      questionId: 2,
    },

    {
      content: "Nhân dân thiếu quyết tâm kháng chiến.",
      isCorrect: false,
      questionId: 3,
    },
    {
      content: "Triều đình chỉ chủ trương đàm phán, thương lượng.",
      isCorrect: false,
      questionId: 3,
    },
    {
      content: "Triều đình thiếu đường lối chỉ đạo đúng đắn.",
      isCorrect: false,
      questionId: 3,
    },
    {
      content: "Nhân dân không ủng hộ triều đình kháng chiến.",
      isCorrect: true,
      questionId: 3,
    },

    {
      content: "Những chuyển biến về kinh tế, xã hội, tư tưởng.",
      isCorrect: false,
      questionId: 4,
    },
    {
      content: "Sự xuất hiện của giai cấp tư sản và tiểu tư sản.",
      isCorrect: false,
      questionId: 4,
    },
    {
      content: "Sự lỗi thời của hệ tư tưởng phong kiến.",
      isCorrect: false,
      questionId: 4,
    },
    {
      content: "Sự khủng hoảng, suy yếu của chế độ phong kiến.",
      isCorrect: true,
      questionId: 4,
    },

    {
      content: "Phân công quân đội Đồng minh giải giáp quân Nhật ở Đông Dương.",
      isCorrect: false,
      questionId: 5,
    },
    {
      content:
        "Liên Xô có trách nhiệm tham gia chống quân phiệt Nhật ở châu Á.",
      isCorrect: false,
      questionId: 5,
    },
    {
      content:
        "Thành lập tổ chức Liên hợp quốc để duy trì hòa bình, an ninh thế giới.",
      isCorrect: false,
      questionId: 5,
    },
    {
      content:
        "Liên quân Mĩ - Anh sẽ mở mặt trận ở Tây Âu để tiêu diệt phát xít Đức.",
      isCorrect: true,
      questionId: 5,
    },

    { content: "Liên Xô.", isCorrect: false, questionId: 6 },
    { content: "Anh.", isCorrect: false, questionId: 6 },
    { content: "Mĩ.", isCorrect: false, questionId: 6 },
    { content: "Nhật Bản.", isCorrect: true, questionId: 6 },

    {
      content: "giải quyết các vấn đề tranh chấp bằng biện pháp hòa bình.",
      isCorrect: false,
      questionId: 7,
    },
    {
      content:
        "tiến hành thúc đẩy hợp tác về kinh tế, chính trị và quốc phòng.",
      isCorrect: false,
      questionId: 7,
    },
    {
      content: "giải thể các tổ chức quân sự của Mĩ và Liên Xô tại châu Âu.",
      isCorrect: false,
      questionId: 7,
    },
    {
      content:
        "thủ tiêu tên lửa tầm trung ở châu Âu, cắt giảm vũ khí chiến lược.",
      isCorrect: true,
      questionId: 7,
    },

    {
      content:
        "khuynh hướng vô sản đáp ứng được yêu cầu khách quan của sự nghiệp giải phóng dân tộc",
      isCorrect: false,
      questionId: 8,
    },
    {
      content:
        "khuynh hướng vô sản giải quyết triệt để tất cả mâu thuẫn trong xã hội Việt Nam. ",
      isCorrect: false,
      questionId: 8,
    },
    {
      content:
        "giai cấp công nhân chiếm tỉ lệ lớn nhất trong cơ cấu xã hội Việt Nam. ",
      isCorrect: false,
      questionId: 8,
    },
    {
      content:
        "khuynh hướng vô sản giải quyết được yêu cầu ruộng đất của giai cấp nông dân Việt Nam.",
      isCorrect: true,
      questionId: 8,
    },

    {
      content:
        "sự tồn tại song song của khuynh hướng tư sản và khuynh hướng vô sản.",
      isCorrect: false,
      questionId: 9,
    },
    {
      content:
        "khuynh hướng vô sản phát triển nhờ kinh nghiệm của khuynh hướng tư sản.",
      isCorrect: false,
      questionId: 9,
    },
    {
      content:
        "sau thất bại của khuynh hướng tư sản, khuynh hướng vô sản phát triển mạnh.",
      isCorrect: false,
      questionId: 9,
    },
    {
      content:
        "cả hai khuynh hướng tư sản và vô sản đều sử dụng bạo lực để loại trừ nhau.",
      isCorrect: true,
      questionId: 9,
    },

    {
      content: "bước đầu đấu tranh tự giác.",
      isCorrect: false,
      questionId: 10,
    },
    {
      content: "có một tổ chức công khai lãnh đạo.",
      isCorrect: false,
      questionId: 10,
    },
    {
      content: "hoàn toàn đấu tranh tự giác.",
      isCorrect: false,
      questionId: 10,
    },
    {
      content: "có một đường lối chính trị rõ ràng.",
      isCorrect: true,
      questionId: 10,
    },

    { content: "Búa liềm.", isCorrect: false, questionId: 11 },
    { content: "An Nam trẻ.", isCorrect: false, questionId: 11 },
    { content: "Người nhà quê.", isCorrect: false, questionId: 11 },
    { content: "Chuông rè.", isCorrect: true, questionId: 11 },

    {
      content: "tham gia thành lập Hội Liên hiệp thuộc địa.",
      isCorrect: false,
      questionId: 12,
    },
    {
      content: "thành lập Hội Việt Nam Cách mạng Thanh niên.",
      isCorrect: false,
      questionId: 12,
    },
    {
      content: "tham dự Đại hội V của Quốc tế Cộng sản.",
      isCorrect: false,
      questionId: 12,
    },
    {
      content: "tham dự Hội nghị Quốc tế Nông dân.",
      isCorrect: true,
      questionId: 12,
    },

    {
      content: "thành lập chính quyền nhà nước của toàn dân tộc. ",
      isCorrect: false,
      questionId: 13,
    },
    {
      content: "thành lập ở mỗi nước Đông Dương một đảng riêng. ",
      isCorrect: false,
      questionId: 13,
    },
    {
      content: "hoàn thành triệt để nhiệm vụ cách mạng ruộng đất. ",
      isCorrect: false,
      questionId: 13,
    },
    {
      content: "thành lập hình thức chính quyền công nông binh.",
      isCorrect: true,
      questionId: 13,
    },

    {
      content: "giam chân quân Pháp một thời gian.",
      isCorrect: false,
      questionId: 14,
    },
    {
      content: "giữ thế chủ động trên chiến trường chính Bắc Bộ.",
      isCorrect: false,
      questionId: 14,
    },
    {
      content: "phá hủy toàn bộ phương tiện vật chất của Pháp.",
      isCorrect: false,
      questionId: 14,
    },
    {
      content: "tiêu diệt toàn bộ binh lực Pháp.",
      isCorrect: true,
      questionId: 14,
    },

    {
      content: "tăng cường viện trợ cho Pháp thực hiện kế hoạch Nava.",
      isCorrect: false,
      questionId: 15,
    },
    {
      content: "công nhận Chính phủ Bảo Đại do Pháp dựng nên.",
      isCorrect: false,
      questionId: 15,
    },
    {
      content: "viện trợ cho Pháp triển khai kế hoạch quân sự Rơve.",
      isCorrect: false,
      questionId: 15,
    },
    {
      content: "kí với Pháp Hiệp định phòng thủ chung Đông Dương.",
      isCorrect: true,
      questionId: 15,
    },

    {
      content: "kết thúc chiến tranh trong danh dự.",
      isCorrect: false,
      questionId: 16,
    },
    {
      content: "khóa chặt biên giới Việt - Trung.",
      isCorrect: false,
      questionId: 16,
    },
    {
      content: "cô lập căn cứ địa Việt Bắc.",
      isCorrect: false,
      questionId: 16,
    },
    {
      content: "quốc tế hóa chiến tranh Đông Dương.",
      isCorrect: true,
      questionId: 16,
    },

    { content: "hỗ trợ lực lượng vũ trang.", isCorrect: false, questionId: 17 },
    { content: "quyết định thắng lợi.", isCorrect: false, questionId: 17 },
    { content: "nòng cốt.", isCorrect: false, questionId: 17 },
    { content: "xung kích.", isCorrect: true, questionId: 17 },

    {
      content: "giáng đòn mạnh mẽ vào âm mưu nô dịch của chủ nghĩa thực dân.",
      isCorrect: false,
      questionId: 18,
    },
    {
      content:
        "tạo ra tác động cơ bản làm sụp đổ trật tự thế giới hai cực Ianta.",
      isCorrect: false,
      questionId: 18,
    },
    {
      content:
        "tạo nên cuộc khủng hoảng tâm lí sâu sắc đối với các cựu binh Mĩ.",
      isCorrect: false,
      questionId: 18,
    },
    {
      content: "dẫn đến cuộc khủng hoảng kinh tế - chính trị trầm trọng ở Mĩ.",
      isCorrect: true,
      questionId: 18,
    },

    {
      content: "Cuộc kháng chiến chống Mĩ, cứu nước thắng lợi (1975).",
      isCorrect: false,
      questionId: 19,
    },
    {
      content: "Cuộc kháng chiến chống thực dân Pháp thắng lợi (1954).",
      isCorrect: false,
      questionId: 19,
    },
    {
      content: "Đảng Cộng sản Việt Nam ra đời (1930).",
      isCorrect: false,
      questionId: 19,
    },
    {
      content: "Cách mạng tháng Tám thành công (1945).",
      isCorrect: true,
      questionId: 19,
    },

    {
      content:
        "Nếu thời cơ đến vào đầu hoặc cuối năm 1975 thì lập tức giải phóng trong năm 1975",
      isCorrect: false,
      questionId: 20,
    },
    {
      content:
        "Chủ trương đánh nhanh thắng nhanh và tránh chỗ mạnh, đánh chỗ yếu.",
      isCorrect: false,
      questionId: 20,
    },
    {
      content:
        "Tiến công vào những hướng quan trọng về chiến lược mà địch tương đối yếu.",
      isCorrect: false,
      questionId: 20,
    },
    {
      content:
        "Tổng tiến công và nổi dậy ở Tây Nguyên, Huế - Đà Nẵng rồi tiến về Sài Gòn",
      isCorrect: true,
      questionId: 20,
    },

    ///cate 6
    { content: "1945 – 1949.", isCorrect: false, questionId: 21 },
    { content: "1946- 1950.", isCorrect: false, questionId: 21 },
    { content: "1947-1951.", isCorrect: false, questionId: 21 },
    { content: "1945- 1951.", isCorrect: true, questionId: 21 },

    {
      content:
        "sản lượng công nghiệp và nông nghiệp năm 1950 đạt mức sản lượng năm 1940.",
      isCorrect: false,
      questionId: 22,
    },
    {
      content:
        "sản lượng nông nghiệp, công nghiệp đều vượt mức sản lượng năm 1940.",
      isCorrect: false,
      questionId: 22,
    },
    {
      content:
        "sản lượng công nghiệp tăng 73%, nông nghiệp đạt mức trước chiến tranh.",
      isCorrect: false,
      questionId: 22,
    },
    {
      content: "sản lượng công nghiệp và nông nghiệp đều tăng 73%.",
      isCorrect: true,
      questionId: 22,
    },

    { content: "Năm 1948.", isCorrect: false, questionId: 23 },
    { content: "Năm 1949.", isCorrect: false, questionId: 23 },
    { content: "Năm 1950. ", isCorrect: false, questionId: 23 },
    { content: "Năm 1947.", isCorrect: true, questionId: 23 },

    {
      content: "Khẳng định vai trò to lớn của Liên Xô đối cách mạng thế giới.",
      isCorrect: false,
      questionId: 24,
    },
    {
      content: "Đưa thế giới bước vào thời đại chiến tranh hạt nhân.",
      isCorrect: false,
      questionId: 24,
    },
    {
      content: "Thế độc quyền vũ khí nguyên tử của Mĩ bị phá vỡ.",
      isCorrect: false,
      questionId: 24,
    },
    {
      content: "Khiến Liên Xô trở thành nước đầu tiên sở hữu vũ khí nguyên tử.",
      isCorrect: true,
      questionId: 24,
    },

    {
      content: "Liên Xô là siêu cường kinh tế duy nhất.",
      isCorrect: false,
      questionId: 25,
    },
    {
      content: "Liên Xô là cường quốc công nghiệp thứ hai ở châu Âu.",
      isCorrect: false,
      questionId: 25,
    },
    {
      content: "Liên Xô là cường quốc công nghiệp thứ hai trên thế giới.",
      isCorrect: false,
      questionId: 25,
    },
    {
      content:
        " Liên Xô là một nước có nền nông nghiệp hiện đại nhất thế giới.",
      isCorrect: true,
      questionId: 25,
    },

    {
      content: "đưa con người bay vòng quanh Trái Đất.",
      isCorrect: false,
      questionId: 26,
    },
    {
      content: "phóng thành công vệ tinh nhân tạo.",
      isCorrect: false,
      questionId: 26,
    },
    {
      content: "chế tạo thành công bom nguyên tử. ",
      isCorrect: false,
      questionId: 26,
    },
    {
      content: "đứng đầu thế giới về sản lượng công nghiệp.",
      isCorrect: true,
      questionId: 26,
    },

    {
      content: "đưa con người bay vòng quanh Trái Đất.",
      isCorrect: false,
      questionId: 27,
    },
    {
      content: "phóng thành công vệ tinh nhân tạo.",
      isCorrect: false,
      questionId: 27,
    },
    {
      content: "chế tạo thành công bom nguyên tử. ",
      isCorrect: false,
      questionId: 27,
    },
    {
      content: "đứng đầu thế giới về sản lượng công nghiệp.",
      isCorrect: true,
      questionId: 27,
    },

    {
      content: "Là người đầu tiên thám hiểm Mặt Trăng.",
      isCorrect: false,
      questionId: 28,
    },
    {
      content: "Là nhà du hành vũ trụ đầu tiên bay vòng quanh Trái Đất",
      isCorrect: false,
      questionId: 28,
    },
    {
      content: "Là người đầu tiên thám hiểm sao Hỏa.",
      isCorrect: false,
      questionId: 28,
    },
    {
      content:
        "Là người đã thiết kế - chế tạo thành công vệ tinh nhân tạo Spút-ních.",
      isCorrect: true,
      questionId: 28,
    },

    {
      content: "Hoàn thành phổ cập giáo dục Tiểu học.",
      isCorrect: false,
      questionId: 29,
    },
    {
      content: "Bắt đầu thực hiện phổ cập giáo dục Trung học trong cả nước.",
      isCorrect: false,
      questionId: 29,
    },
    {
      content:
        "Trở thành một trong những nước có mặt bằng dân trí cao nhất thế giới.",
      isCorrect: false,
      questionId: 29,
    },
    {
      content:
        "Là nước đào tạo được một đội ngũ cán bộ khoa học kĩ thuật hùng hậu nhất thế giới.",
      isCorrect: true,
      questionId: 29,
    },

    {
      content: "các nước tư bản dỡ bỏ cấm vận, bao vây.",
      isCorrect: false,
      questionId: 30,
    },
    {
      content: "vị thế, uy tín của được nâng cao trên thế giới.",
      isCorrect: false,
      questionId: 30,
    },
    {
      content: "trở thành chỗ dựa vững chắc cho phong trào cách mạng thế giới.",
      isCorrect: false,
      questionId: 30,
    },
    {
      content:
        "Liên bang Xô Viết được mở rộng, số thành viên tăng lên 15 nước.",
      isCorrect: true,
      questionId: 30,
    },

    {
      content: "tiến hành công cuộc khôi phục kinh tế.",
      isCorrect: false,
      questionId: 31,
    },
    {
      content:
        "tiến hành xây dựng cơ sở vật chất – kĩ thuật của chủ nghĩa xã hội.",
      isCorrect: false,
      questionId: 31,
    },
    {
      content: "tiến hành công cuộc cải tổ đất nước.",
      isCorrect: false,
      questionId: 31,
    },
    {
      content: " tiến hành đấu tranh chống chủ nghĩa phát xít.",
      isCorrect: true,
      questionId: 31,
    },

    { content: "7 tháng.", isCorrect: false, questionId: 32 },
    { content: "8 tháng.", isCorrect: false, questionId: 32 },
    { content: "9 tháng.", isCorrect: false, questionId: 32 },
    { content: "10 tháng.", isCorrect: true, questionId: 32 },

    {
      content: "Chế tạo thành công bom nguyên tử.",
      isCorrect: false,
      questionId: 33,
    },
    {
      content: "Trở thành cường quốc công nghiệp thứ hai thế giới.",
      isCorrect: false,
      questionId: 33,
    },
    {
      content: "Là nước đầu tiên phóng thành công vệ tinh nhân tạo.",
      isCorrect: false,
      questionId: 33,
    },
    {
      content: "Đưa con người bay vòng quanh Trái Đất.",
      isCorrect: true,
      questionId: 33,
    },

    {
      content: "Chiến đấu chống lại chủ nghĩa phát xít.",
      isCorrect: false,
      questionId: 34,
    },
    {
      content: "Tiến hành công cuộc khôi phục kinh tế.",
      isCorrect: false,
      questionId: 34,
    },
    {
      content: "Xây dựng cơ sở vật chất – kĩ thuật của chủ nghĩa xã hội.",
      isCorrect: false,
      questionId: 34,
    },
    {
      content: "Cải tổ đất nước theo con đường cộng sản chủ nghĩa.",
      isCorrect: true,
      questionId: 34,
    },

    { content: "các kế hoạch ngắn hạn.", isCorrect: false, questionId: 35 },
    { content: "các kế hoạch dài hạn.", isCorrect: false, questionId: 35 },
    {
      content: "sự giúp đỡ của các nước đồng minh.",
      isCorrect: false,
      questionId: 35,
    },
    { content: " sự viện trợ của Mĩ.", isCorrect: true, questionId: 35 },

    {
      content: "Công nghiệp nặng, nông nghiệp.",
      isCorrect: false,
      questionId: 36,
    },
    { content: "Tài chính, thương mại.", isCorrect: false, questionId: 36 },
    {
      content: "Công nghiệp nhẹ, công nghiệp nặng.",
      isCorrect: false,
      questionId: 36,
    },
    {
      content: "Công nghiệp vũ trụ, công nghiệp điện hạt nhân.",
      isCorrect: true,
      questionId: 36,
    },

    { content: "Thứ nhất.", isCorrect: false, questionId: 37 },
    { content: "Thứ hai.", isCorrect: false, questionId: 37 },
    { content: "Thứ ba. ", isCorrect: false, questionId: 37 },
    { content: "Thứ tư.", isCorrect: true, questionId: 37 },

    {
      content: "tỉ lệ công nhân chiếm hơn 50 % người lao động trong cả nước.",
      isCorrect: false,
      questionId: 38,
    },
    {
      content: "trở thành quốc gia có nền giáo dục tiên tiến nhất thế giới.",
      isCorrect: false,
      questionId: 38,
    },
    {
      content: "trình độ học vấn của người dân cao nhất thế giới.",
      isCorrect: false,
      questionId: 38,
    },
    {
      content: "tỉ lệ nông dân chiếm 90 % dân số trong cả nước.",
      isCorrect: true,
      questionId: 38,
    },

    { content: "hòa bình, trung lập.", isCorrect: false, questionId: 39 },
    { content: "chi phối đồng minh.", isCorrect: false, questionId: 39 },
    {
      content: "ngăn cản phong trào giải phóng dân tộc.",
      isCorrect: false,
      questionId: 39,
    },
    { content: "bảo vệ hòa bình thế giới.", isCorrect: true, questionId: 39 },

    {
      content: "Khống chế, chi phối các nước xã hội chủ nghĩa trên thế giới.",
      isCorrect: false,
      questionId: 40,
    },
    {
      content: "Thực hiện chính sách ngoại giao nước lớn.",
      isCorrect: false,
      questionId: 40,
    },
    {
      content: "Thực hiện chính sách bảo vệ hòa bình thế giới.",
      isCorrect: false,
      questionId: 40,
    },
    {
      content: "Ủng hộ phong trào giải phóng dân tộc trên thế giới.",
      isCorrect: true,
      questionId: 40,
    },
    //cate 7
    { content: "1955. ", isCorrect: false, questionId: 41 },
    { content: "1957.", isCorrect: false, questionId: 41 },
    { content: "1961.", isCorrect: false, questionId: 41 },
    { content: "1963.", isCorrect: true, questionId: 41 },

    {
      content: "Phóng thành công vệ tinh nhân tạo lên quỹ đạo Trái Đất.",
      isCorrect: false,
      questionId: 42,
    },
    {
      content: "Phóng con tàu đưa người đầu tiên bay vào vũ trụ.",
      isCorrect: false,
      questionId: 42,
    },
    {
      content: "Đưa con người lên Mặt Trăng.",
      isCorrect: false,
      questionId: 42,
    },
    { content: " Đưa con người lên Sao Hỏa.", isCorrect: true, questionId: 42 },

    {
      content:
        "đạt thế cân bằng về sức mạnh kinh tế so với Mĩ và các nước phương Tây.",
      isCorrect: false,
      questionId: 43,
    },
    {
      content:
        "đạt thế cân bằng về sức mạnh hạt nhân so với Mĩ và các nước phương Tây.",
      isCorrect: false,
      questionId: 43,
    },
    {
      content:
        "đạt thế cân bằng sức mạnh về tài chính so với Mĩ và các nước phương Tây.",
      isCorrect: false,
      questionId: 43,
    },
    {
      content:
        "đạt thế cân bằng về chinh phục vũ trụ so với Mĩ và các nước phương Tây.",
      isCorrect: true,
      questionId: 43,
    },

    { content: "thu được nhiều chiến phí.", isCorrect: false, questionId: 44 },
    {
      content: "chiếm được nhiều thuộc địa.",
      isCorrect: false,
      questionId: 44,
    },
    {
      content: "bị tổn thất nặng nề sau chiến tranh.",
      isCorrect: false,
      questionId: 44,
    },
    {
      content: "bán được nhiều vũ khí trong chiến tranh.",
      isCorrect: true,
      questionId: 44,
    },

    {
      content: "sự giúp đỡ của các nước trên thế giới.",
      isCorrect: false,
      questionId: 45,
    },
    { content: "tinh thần tự lực tự cường.", isCorrect: false, questionId: 45 },
    {
      content: "sự giúp đỡ của các nước Đông Âu.",
      isCorrect: false,
      questionId: 45,
    },
    {
      content: "những tiến bộ khoa học - kỹ thuật.",
      isCorrect: true,
      questionId: 45,
    },

    {
      content: "tăng cường hợp tác khoa học - kỹ thuật với các nước châu Âu..",
      isCorrect: false,
      questionId: 46,
    },
    {
      content: "nhận được sự ủng hộ về chính trị và sự viện trợ về kinh tế.",
      isCorrect: false,
      questionId: 46,
    },
    {
      content: "xây dựng một liên minh kinh tế lớn ở châu Âu.",
      isCorrect: false,
      questionId: 46,
    },
    {
      content: "thành lập một liên minh chính trị ở châu Âu.",
      isCorrect: true,
      questionId: 46,
    },

    {
      content: "Tiếp tục khủng hoảng trầm trọng.",
      isCorrect: false,
      questionId: 47,
    },
    {
      content: "Dần dần hồi phục và phát triển.",
      isCorrect: false,
      questionId: 47,
    },
    {
      content: "Tốc độ tăng trưởng kinh tế luôn âm.",
      isCorrect: false,
      questionId: 47,
    },
    {
      content: "Phát triển xen kẽ với khủng hoảng.",
      isCorrect: true,
      questionId: 47,
    },

    {
      content: "Xây dựng mô hình chủ nghĩa xã hội chưa khoa học.",
      isCorrect: false,
      questionId: 48,
    },
    {
      content:
        "Chậm sửa chữa, thay đổi trước những biến động của tình hình thế giới.",
      isCorrect: false,
      questionId: 48,
    },
    {
      content: "Hoạt động chống phá của các thế lực chống chủ nghĩa xã hội.",
      isCorrect: false,
      questionId: 48,
    },
    {
      content: "Không hợp tác với các nước xã hội chủ nghĩa trên thế giới.",
      isCorrect: true,
      questionId: 48,
    },

    {
      content: "khiến hơn 27 triệu người chết.",
      isCorrect: false,
      questionId: 49,
    },
    {
      content: "làm hơn 1710 thành phố bị đổ nát.",
      isCorrect: false,
      questionId: 49,
    },
    {
      content: "tiêu hủy hơn 70.000 làng mạc.",
      isCorrect: false,
      questionId: 49,
    },
    {
      content: "tàn phá hơn 32.000 xí nghiệp.",
      isCorrect: true,
      questionId: 49,
    },

    { content: "cường quốc công nghiệp.", isCorrect: false, questionId: 50 },
    { content: "cường quốc công nghệ.", isCorrect: false, questionId: 50 },
    { content: "cường quốc nông nghiệp.", isCorrect: false, questionId: 50 },
    {
      content: "cường quốc sản xuất phần mềm.",
      isCorrect: true,
      questionId: 50,
    },

    {
      content: "anh cả của hệ thống chủ nghĩa xã hội.",
      isCorrect: false,
      questionId: 51,
    },
    {
      content: "thành trì của nền hòa bình và phong trào cách mạng thế giới.",
      isCorrect: false,
      questionId: 51,
    },
    {
      content: "thủ lĩnh của phe xã hội chủ nghĩa.",
      isCorrect: false,
      questionId: 51,
    },
    {
      content: "thành trì của hệ thống chủ nghĩa xã hội.",
      isCorrect: true,
      questionId: 51,
    },

    { content: "Khối SEATO ", isCorrect: false, questionId: 52 },
    { content: "Khối CENTO", isCorrect: false, questionId: 52 },
    { content: "Khối NATO ", isCorrect: false, questionId: 52 },
    { content: "Khối ANZUSS", isCorrect: true, questionId: 52 },

    {
      content: "cân bằng lực lượng quân sự giữa Mỹ và Liên Xô.",
      isCorrect: false,
      questionId: 53,
    },
    {
      content:
        "đánh dấu bước phát triển nhanh chóng của khoa học kỹ thuật Liên Xô.",
      isCorrect: false,
      questionId: 53,
    },
    {
      content: "phá vỡ thế độc quyền vũ khí nguyên tử của Mỹ.",
      isCorrect: false,
      questionId: 53,
    },
    {
      content: "Liên Xô trở thành cường quốc về vũ khí hạt nhân.",
      isCorrect: true,
      questionId: 53,
    },

    { content: "châu Á.", isCorrect: false, questionId: 54 },
    { content: "châu Âu.", isCorrect: false, questionId: 54 },
    { content: "châu Phi.", isCorrect: false, questionId: 54 },
    { content: "châu Mỹ.", isCorrect: true, questionId: 54 },

    {
      content: "Liên Xô có nền kinh tế vững mạnh, khoa học kỹ thuật tiên tiến.",
      isCorrect: false,
      questionId: 55,
    },
    {
      content: "Liên Xô chủ trương duy trì hòa bình và an ninh thế giới.",
      isCorrect: false,
      questionId: 55,
    },
    {
      content: "Liên Xô ủng hộ phong trào giải phóng dân tộc trên thế giới.",
      isCorrect: false,
      questionId: 55,
    },
    {
      content: "Liên Xô là nước duy nhất trên thế giới sở hữu vũ khí hạt nhân.",
      isCorrect: true,
      questionId: 55,
    },

    {
      content: "Muốn làm bạn với tất cả các nước.",
      isCorrect: false,
      questionId: 56,
    },
    {
      content: "Chỉ quan hệ với các nước lớn.",
      isCorrect: false,
      questionId: 56,
    },
    {
      content: "Tích cực ủng hộ hòa bình và phong trào cách mạng thế giới.",
      isCorrect: false,
      questionId: 56,
    },
    {
      content: "Chỉ làm bạn với các nước xã hội chủ nghĩa.",
      isCorrect: true,
      questionId: 56,
    },

    {
      content: "tiến hành cải tổ về chính trị, cho phép đa nguyên đa đảng.",
      isCorrect: false,
      questionId: 57,
    },
    {
      content:
        "lấy phát triển kinh tế làm trọng tâm, mở rộng hội nhập quốc tế.",
      isCorrect: false,
      questionId: 57,
    },
    {
      content:
        "tiến hành khi đất nước lâm vào tình trạng không ổn định, khủng hoảng kéo dài.",
      isCorrect: false,
      questionId: 57,
    },
    {
      content:
        "Đảng Cộng sản nắm quyền lãnh đạo, kiên trì theo con đường xã hội chủ nghĩa.",
      isCorrect: true,
      questionId: 57,
    },

    { content: "5 năm.", isCorrect: false, questionId: 58 },
    { content: "4 năm 3 tháng.", isCorrect: false, questionId: 58 },
    { content: "4 năm.", isCorrect: false, questionId: 58 },
    { content: "4 năm 9 tháng.", isCorrect: true, questionId: 58 },

    {
      content: "Phóng thành công tên lửa đạn đạo.",
      isCorrect: false,
      questionId: 59,
    },
    {
      content: "Chế tạo thành công bom nguyên tử.",
      isCorrect: false,
      questionId: 59,
    },
    {
      content: "Phóng thành công vệ tinh nhân tạo.",
      isCorrect: false,
      questionId: 59,
    },
    {
      content: "Phóng tàu vũ trụ đưa I. Gagarin bay vòng quanh Trái Đất.",
      isCorrect: true,
      questionId: 59,
    },

    { content: "Bảo vệ hoà bình thế giới.", isCorrect: false, questionId: 60 },
    {
      content: "Đối đầu với các nước Tây Âu.",
      isCorrect: false,
      questionId: 60,
    },
    {
      content: "Muốn làm bạn với tất cả các nước.",
      isCorrect: false,
      questionId: 60,
    },
    {
      content: " Quan hệ chặt chẽ với tất cả các nước.",
      isCorrect: true,
      questionId: 60,
    },
    //cate 8
    { content: "Nhật Bản.", isCorrect: false, questionId: 61 },
    { content: "Hàn Quốc.", isCorrect: false, questionId: 61 },
    { content: "Trung Quốc", isCorrect: false, questionId: 61 },
    { content: "Xingapo.", isCorrect: true, questionId: 61 },

    { content: "Nhật Bản.", isCorrect: false, questionId: 62 },
    { content: "Trung Quốc.", isCorrect: false, questionId: 62 },
    { content: "Thái Lan.", isCorrect: false, questionId: 62 },
    { content: "Đài Loan.", isCorrect: true, questionId: 62 },

    { content: "16 ", isCorrect: false, questionId: 63 },
    { content: "20", isCorrect: false, questionId: 63 },
    { content: "38", isCorrect: false, questionId: 63 },
    { content: "48", isCorrect: true, questionId: 63 },

    { content: "Đài Loan.", isCorrect: false, questionId: 64 },
    { content: "Hồng Công.", isCorrect: false, questionId: 64 },
    { content: "Ma Cao.", isCorrect: false, questionId: 64 },
    { content: "Triều Tiên.", isCorrect: true, questionId: 64 },

    { content: "Năm 1945", isCorrect: false, questionId: 65 },
    { content: "Năm 1949", isCorrect: false, questionId: 65 },
    { content: "Năm 1950 ", isCorrect: false, questionId: 65 },
    { content: "Năm 1955", isCorrect: true, questionId: 65 },

    {
      content: "Hàn Quốc, Hồng Công, Đài Loan.",
      isCorrect: false,
      questionId: 66,
    },
    {
      content: "Trung Quốc, Đài Loan, Nhật Bản.",
      isCorrect: false,
      questionId: 66,
    },
    {
      content: "Triều Tiên, Hàn Quốc, Nhật Bản.",
      isCorrect: false,
      questionId: 66,
    },
    {
      content: "Hàn Quốc, Trun Quốc, Nhật Bản.",
      isCorrect: true,
      questionId: 66,
    },

    {
      content: "Mở ra kỉ nguyên độc lập tự do, tiến lên chủ nghĩa xã hội.",
      isCorrect: false,
      questionId: 67,
    },
    {
      content: "Làm cho ảnh hưởng của chủ nghĩa xã hội lan rộng khắp toàn cầu.",
      isCorrect: false,
      questionId: 67,
    },
    {
      content: "Hoàn thành cuộc cách mạng cã hội chủ nghĩa ở Trung Quốc.",
      isCorrect: false,
      questionId: 67,
    },
    {
      content:
        "Lật đổ chế độ phong kiến, mở đường cho chủ nghĩa xã hội phát triển.",
      isCorrect: true,
      questionId: 67,
    },

    {
      content:
        "kết thúc hơn 100 năm nô dịch và thống trị của để quốc đối với nhân dân Trung Hoa.",
      isCorrect: false,
      questionId: 68,
    },
    {
      content:
        "làm phá sản về cơ bản hệ thống thuộc địa của chủ nghĩa thực dân cũ.",
      isCorrect: false,
      questionId: 68,
    },
    {
      content:
        "mở rộng phạm vi địa lí của chủ nghĩa xã hội từ châu Âu sang châu Á.",
      isCorrect: false,
      questionId: 68,
    },
    {
      content:
        "đưa đất nước Trung Hoa bước vào kỉ nguyên độc lập tự do, tiến lên chủ nghĩa xã hội.",
      isCorrect: true,
      questionId: 68,
    },

    { content: "Trung Quốc.", isCorrect: false, questionId: 69 },
    { content: "Nhật Bản.", isCorrect: false, questionId: 69 },
    { content: "Hàn Quốc.", isCorrect: false, questionId: 69 },
    { content: "Đài Loan.", isCorrect: true, questionId: 69 },

    { content: "Trung Quốc.", isCorrect: false, questionId: 70 },
    { content: "Nhật Bản.", isCorrect: false, questionId: 70 },
    { content: "Hàn Quốc.", isCorrect: false, questionId: 70 },
    { content: "Triều Tiên.", isCorrect: true, questionId: 70 },

    { content: "Năm 1949.", isCorrect: false, questionId: 71 },
    { content: "Năm 1950.", isCorrect: false, questionId: 71 },
    { content: "Năm 1951.", isCorrect: false, questionId: 71 },
    { content: "Năm 1952.", isCorrect: true, questionId: 71 },

    { content: "Pari.", isCorrect: false, questionId: 72 },
    { content: "Bàn Môn Điếm.", isCorrect: false, questionId: 72 },
    { content: "Giơnevơ.", isCorrect: false, questionId: 72 },
    { content: "Vécxai.", isCorrect: true, questionId: 72 },

    {
      content: "Đảng Quốc đại và Quốc dân đảng.",
      isCorrect: false,
      questionId: 73,
    },
    {
      content: "Đảng Cộng sản và Đảng Dân chủ.",
      isCorrect: false,
      questionId: 73,
    },
    {
      content: "Quốc dân đảng và Đảng Cộng sản.",
      isCorrect: false,
      questionId: 73,
    },
    {
      content: "Đảng Cộng hòa và Đảng Dân chủ.",
      isCorrect: true,
      questionId: 73,
    },

    {
      content: "Hoàn thành cuộc cách mạng xã hội chủ nghĩa ở Trung Quốc.",
      isCorrect: false,
      questionId: 74,
    },
    {
      content: "Đưa đất nước bước vào kỉ nguyên độc lập, tự do.",
      isCorrect: false,
      questionId: 74,
    },
    {
      content: "Chấm dứt hơn 100 nô dịch và thống trị của đế quốc.",
      isCorrect: false,
      questionId: 74,
    },
    {
      content: "Cổ vũ mạnh mẽ phong trào giải phóng dân tộc trên thế giới.",
      isCorrect: true,
      questionId: 74,
    },

    {
      content:
        "Là một mô hình chủ nghĩa xã hội hoàn toàn mới, không dựa trên những nguyên lí chung mà chủ nghĩa Mác - Lênin đã đề ra.",
      isCorrect: false,
      questionId: 75,
    },
    {
      content:
        "Mô hình chủ nghĩa xã hội được xây dựng trên nền tảng thống nhất, đoàn kết giữa các đảng phái chính trị.",
      isCorrect: false,
      questionId: 75,
    },
    {
      content:
        "Là mô hình chủ nghĩa xã hội được xây dựng trên cơ sở thành lập các công xã nhân dân - đơn vị kinh tế, đồng thời là đơn vị chính trị căn bản.",
      isCorrect: false,
      questionId: 75,
    },
    {
      content:
        "Là mô hình chủ nghĩa xã hội được xây dựng trên cơ sở những nguyên lí chung của chủ nghĩa Mác - Lênin và những đặc điểm lịch sử cụ thể của Trung Quốc.",
      isCorrect: true,
      questionId: 75,
    },

    { content: "Lưu Thiếu Kì", isCorrect: false, questionId: 76 },
    { content: "Chu Dung Cơ", isCorrect: false, questionId: 76 },
    { content: "Giang Trạch Dân", isCorrect: false, questionId: 76 },
    { content: "Đặng Tiểu Bình", isCorrect: true, questionId: 76 },

    {
      content: "lấy cải cách kinh tế làm trung tâm.",
      isCorrect: false,
      questionId: 77,
    },
    {
      content: "lấy đổi mới chính trị làm trung tâm.",
      isCorrect: false,
      questionId: 77,
    },
    {
      content: "đổi mới kinh tế và đổi mới chính trị được tiến hành đồng thời.",
      isCorrect: false,
      questionId: 77,
    },
    {
      content:
        "đổi mới chính trị là nền tảng, là khâu đột phá để đẩy mạnh đổi mới kinh tế.",
      isCorrect: true,
      questionId: 77,
    },

    {
      content:
        "nền kinh tế nông - công nghiệp phát triển theo hướng tự cấp tự túc.",
      isCorrect: false,
      questionId: 78,
    },
    {
      content: "nền kinh tế kế hoạch hoá tập trung.",
      isCorrect: false,
      questionId: 78,
    },
    {
      content: "nền kinh tế thị trường tự do.",
      isCorrect: false,
      questionId: 78,
    },
    {
      content: "nền kinh tế thị trường xã hội chủ nghĩa.",
      isCorrect: true,
      questionId: 78,
    },

    {
      content:
        "Nền kinh tế đã phục hồi ngang bằng so với thời kì trước Cách mạng văn hoá.",
      isCorrect: false,
      questionId: 79,
    },
    {
      content:
        "Nền kinh tế tăng trưởng chậm do không giải quyết được vấn đề vốn và đổi mới khoa học công nghệ.",
      isCorrect: false,
      questionId: 79,
    },
    {
      content:
        "Nền kinh tế phát triển nhanh chóng, những năm 90 tốc độ tăng trưởng kinh tế cao nhất thế giới.",
      isCorrect: false,
      questionId: 79,
    },
    {
      content:
        "Kinh tế tuy phát triển mạnh, nhưng đời sống nhân dân vẫn chưa được cải thiện.",
      isCorrect: true,
      questionId: 79,
    },

    { content: "1964.", isCorrect: false, questionId: 80 },
    { content: "1965.", isCorrect: false, questionId: 80 },
    { content: "1973.", isCorrect: false, questionId: 80 },
    { content: "1959.", isCorrect: true, questionId: 80 },
    //cate 9
    {
      content: "trung tâm kinh tế - tài chính lớn nhất thế giới.",
      isCorrect: false,
      questionId: 81,
    },
    {
      content: "nước đầu tiên phóng thành công vệ tinh nhân tạo.",
      isCorrect: false,
      questionId: 81,
    },
    {
      content: "một trong ba trung tâm kinh tế - tài chính lớn của thế giới.",
      isCorrect: false,
      questionId: 81,
    },
    {
      content: "trung tâm kinh tế - tài chính thứ hai thế giới.",
      isCorrect: true,
      questionId: 81,
    },

    {
      content:
        "Sản lượng công nghiệp chiếm gần 40% tổng sản lượng công nghiệp thế giới.",
      isCorrect: false,
      questionId: 82,
    },
    {
      content: "Kinh tế Mĩ chiếm gần 40% tổng sản phẩm kinh tế thế giới.",
      isCorrect: false,
      questionId: 82,
    },
    {
      content:
        "Sản lượng nông nghiệp bằng hai lần Anh, Pháp, Tây Đức, Nhật, Italia cộng lại.",
      isCorrect: false,
      questionId: 82,
    },
    {
      content: "Chiếm hơn 50% số lượng tàu bè đi lại trên mặt biển.",
      isCorrect: true,
      questionId: 82,
    },

    {
      content: "Các tập đoàn tư bản lũng đoạn có sức sản xuất, cạnh tranh lớn.",
      isCorrect: false,
      questionId: 83,
    },
    {
      content:
        "Vai trò của Nhà nước trong việc hoạch định chính sách và điều tiết nền kinh tế.",
      isCorrect: false,
      questionId: 83,
    },
    {
      content:
        "Chính sách mới của Tổng thống Rudơven đã phát huy tác dụng trên thực tế.",
      isCorrect: false,
      questionId: 83,
    },
    {
      content:
        "Áp dụng những thành tựu khoa học - kĩ thuật vào trong sản xuất.",
      isCorrect: true,
      questionId: 83,
    },

    {
      content:
        "sản lượng công nghiệp Mĩ chiếm 40% sản lượng công nghiệp toàn thế giới.",
      isCorrect: false,
      questionId: 84,
    },
    {
      content: "công nghiệp tăng 27% so với trước chiến tranh.",
      isCorrect: false,
      questionId: 84,
    },
    {
      content: "kinh tế Mĩ chiếm 25% tổng sản phẩm kinh tế thế giới.",
      isCorrect: false,
      questionId: 84,
    },
    {
      content:
        "sản lượng nông nghiệp bằng hai lần Anh, Pháp, Nhật Bản, Tây Đức và Italia cộng lại.",
      isCorrect: true,
      questionId: 84,
    },

    {
      content: "Mĩ là nước tiên phong trong việc chế tạo công cụ sản xuất mới.",
      isCorrect: false,
      questionId: 85,
    },
    {
      content: "Mĩ là nước tiên phong trong việc tìm ra những vật liệu mới.",
      isCorrect: false,
      questionId: 85,
    },
    {
      content: "Mĩ là nước khởi đầu cuộc cách mạng xanh trong nông nghiệp.",
      isCorrect: false,
      questionId: 85,
    },
    {
      content: "Mĩ là nước đầu tiên phóng thành công vệ tinh nhân tạo.",
      isCorrect: true,
      questionId: 85,
    },

    {
      content: "Truman, Aixenhao, Kennơđi, Giônxơn, Níchxơn.",
      isCorrect: false,
      questionId: 86,
    },
    {
      content: "Rudơven, Aixenhao, Kennơđi, Giônxơn, Níchxơn.",
      isCorrect: false,
      questionId: 86,
    },
    {
      content: "Truman, Rigân, Giônxơn, Níchxơn, Pho.",
      isCorrect: false,
      questionId: 86,
    },
    {
      content: "Truman, Aixenhao, Giônxơn, Níchxơn, Pho.",
      isCorrect: true,
      questionId: 86,
    },

    {
      content: "xác lập vai trò lãnh đạo của Mĩ ở châu Mĩ.",
      isCorrect: false,
      questionId: 87,
    },
    {
      content: "xác lập vai trò lãnh đạo của Mĩ ở châu Á - Thái Bình Dương.",
      isCorrect: false,
      questionId: 87,
    },
    {
      content: "xác lập vai trò lãnh đạo của Mĩ trên toàn cầu.",
      isCorrect: false,
      questionId: 87,
    },
    {
      content: "xác lập vai trò lãnh đạo của Mĩ ở châu Âu.",
      isCorrect: true,
      questionId: 87,
    },

    {
      content:
        "Ngăn chặn, đẩy lùi, tiến tới tiêu diệt hoàn toàn chủ nghĩa phát xít.",
      isCorrect: false,
      questionId: 88,
    },
    {
      content: "Khống chế, chi phối các nước Tư bản chủ nghĩa khác.",
      isCorrect: false,
      questionId: 88,
    },
    {
      content: "Ra sức truy quét, tiêu diệt chủ nghĩa khủng bố.",
      isCorrect: false,
      questionId: 88,
    },
    {
      content: " Khẳng định sức mạnh tuyệt đối của quân đội Mĩ trên toàn cầu.",
      isCorrect: true,
      questionId: 88,
    },

    {
      content:
        "Tạo áp lực quân sự, buộc các nước tư bản sau chiến tranh phải phục tùng Mĩ.",
      isCorrect: false,
      questionId: 89,
    },
    {
      content:
        "Cùng với Anh, Pháp chiến đấu bảo vệ hệ thống thuộc địa cũ trên thế giới.",
      isCorrect: false,
      questionId: 89,
    },
    {
      content: "Hợp tác kinh tế với các nước tư bản đồng minh.",
      isCorrect: false,
      questionId: 89,
    },
    {
      content: "Phát động cuộc Chiến tranh lạnh với Liên Xô.",
      isCorrect: true,
      questionId: 89,
    },

    {
      content: "áp dụng thành tựu khoa học – kĩ thuật vào trong sản xuất.",
      isCorrect: false,
      questionId: 90,
    },
    {
      content:
        "chi phí cho quốc phòng thấp nên có điều kiện phát triển kinh tế.",
      isCorrect: false,
      questionId: 90,
    },
    {
      content: "hợp tác có hiệu quả trong khuôn khổ tổ chức khu vực.",
      isCorrect: false,
      questionId: 90,
    },
    {
      content: "hợp tác có hiệu quả trong các tổ chức quân sự với đồng minh.",
      isCorrect: true,
      questionId: 90,
    },

    {
      content: "Chính sách và biện pháp điều tiết của nhà nước.",
      isCorrect: false,
      questionId: 91,
    },
    {
      content: "Hợp tác toàn diện với các nước đồng minh.",
      isCorrect: false,
      questionId: 91,
    },
    {
      content: "Các tập đoàn tư bản có sức cạnh tranh cao.",
      isCorrect: false,
      questionId: 91,
    },
    {
      content: "Lãnh thổ rộng lớn, tài nguyên thiên nhiên dồi dào.",
      isCorrect: true,
      questionId: 91,
    },

    {
      content: "kinh tế khá ổn định, tốc độ tăng trưởng cao.",
      isCorrect: false,
      questionId: 92,
    },
    {
      content: "lâm vào khủng hoảng, suy thoái kéo dài.",
      isCorrect: false,
      questionId: 92,
    },
    {
      content: "thất bại trong cuộc Chiến tranh ô tô với Nhật Bản.",
      isCorrect: false,
      questionId: 92,
    },
    {
      content: "thất bại trong cuộc chạy đua với Nhật.",
      isCorrect: true,
      questionId: 92,
    },

    { content: "Aixenhao", isCorrect: false, questionId: 93 },
    { content: "Truman", isCorrect: false, questionId: 93 },
    { content: "Kennơdi", isCorrect: false, questionId: 93 },
    { content: "Nichxơn", isCorrect: true, questionId: 93 },

    {
      content:
        "cuộc chạy đua vũ trang giữa hai nước đang đưa nhân loại đứng trước thảm họa chiến tranh hạt nhân.",
      isCorrect: false,
      questionId: 94,
    },
    {
      content:
        "phong trào đấu tranh giành độc lập ở các nước giành được thắng lợi lớn, âm mưu của Mĩ trong chiến lược toàn cầu đã thất bại.",
      isCorrect: false,
      questionId: 94,
    },
    {
      content: "Liên Xô và Mỹ cần ổn định để củng cố vị thế của mình.",
      isCorrect: false,
      questionId: 94,
    },
    {
      content: "chủ nghĩa xã hội đã từng bước sụp đổ ở Đông Âu.",
      isCorrect: true,
      questionId: 94,
    },

    {
      content: "tiếp tục suy giảm so với thập niên 70.",
      isCorrect: false,
      questionId: 95,
    },
    {
      content: "đã được phục hồi và phát triển với tốc độ cao hơn bao giờ hết.",
      isCorrect: false,
      questionId: 95,
    },
    {
      content:
        "dù vẫn có những đợt suy thoái ngắn nhưng vẫn chiếm gần 40% tổng sản phẩm kinh tế toàn cầu.",
      isCorrect: false,
      questionId: 95,
    },
    {
      content:
        "đã phục hồi và phát triển trở lại, nhưng tỉ trọng trong nền kinh tế thế giới đã giảm sút nhiều.",
      isCorrect: true,
      questionId: 95,
    },

    { content: "phát triển nhanh chóng.", isCorrect: false, questionId: 96 },
    {
      content: "lâm vào tình trạng khủng hoảng trầm trọng.",
      isCorrect: false,
      questionId: 96,
    },
    {
      content: "trải qua một số đợt suy thoái ngắn.",
      isCorrect: false,
      questionId: 96,
    },
    { content: "phát triển “thần kì”.", isCorrect: true, questionId: 96 },

    {
      content:
        "Các nước đồng minh Anh, Pháp ủng hộ Mĩ thiết lập trật tự “đơn cực”.",
      isCorrect: false,
      questionId: 97,
    },
    {
      content:
        "Mĩ là nước đứng đầu thế giới về kinh tế, quân sự, khoa học - kĩ thuật.",
      isCorrect: false,
      questionId: 97,
    },
    {
      content: "Liên Xô sụp đổ, Mĩ không còn đối thủ lớn trên trường quốc tế.",
      isCorrect: false,
      questionId: 97,
    },
    {
      content: "Hầu hết các nước mong muốn dựa vào Mĩ để phát triển kinh tế.",
      isCorrect: true,
      questionId: 97,
    },

    { content: "R. Rigân", isCorrect: false, questionId: 98 },
    { content: "G. Bush", isCorrect: false, questionId: 98 },
    { content: "B. Clinton ", isCorrect: false, questionId: 98 },
    { content: "Pho", isCorrect: true, questionId: 98 },

    { content: "Tự do tín ngưỡng.", isCorrect: false, questionId: 99 },
    { content: "Ủng hộ độc lập dân tộc.", isCorrect: false, questionId: 99 },
    { content: " Thúc đẩy dân chủ.", isCorrect: false, questionId: 99 },
    { content: "Chống chủ nghĩa khủng bố.", isCorrect: true, questionId: 99 },

    {
      content: "nước Mĩ cũng rất dễ bị tổn thương.",
      isCorrect: false,
      questionId: 100,
    },
    {
      content: "Chiến tranh lạnh chưa hoàn toàn chấm dứt.",
      isCorrect: false,
      questionId: 100,
    },
    {
      content: "ảnh hưởng tiêu cực của xu thế toàn cầu hóa.",
      isCorrect: false,
      questionId: 100,
    },
    {
      content: "sự suy yếu của lực lượng quân sự Mĩ.",
      isCorrect: true,
      questionId: 100,
    },

    ///cate 1
    {
      content: "2",
      isCorrect: false,
      questionId: 101,
    },
    {
      content: "3",
      isCorrect: false,
      questionId: 101,
    },
    {
      content: "4",
      isCorrect: false,
      questionId: 101,
    },
    {
      content: "5",
      isCorrect: true,
      questionId: 101,
    },

    {
      content:
        "isoamyl axetat",
      isCorrect: false,
      questionId: 102,
    },
    {
      content: "etyl butirat",
      isCorrect: false,
      questionId: 102,
    },
    {
      content:
        "etyl axetat",
      isCorrect: false,
      questionId: 102,
    },
    {
      content: "geranyl axetat",
      isCorrect: true,
      questionId: 102,
    },

    {
      content: "CH3COONa và C2H5OH",
      isCorrect: false,
      questionId: 103,
    },
    {
      content:
        "HCOONa và CH3OH",
      isCorrect: false,
      questionId: 103,
    },
    {
      content:
        "HCOONa và C2H5OH",
      isCorrect: false,
      questionId: 103,
    },
    {
      content:
        "CH3COONa và CH3OH",
      isCorrect: true,
      questionId: 103,
    },

    {
      content:
        "C6H5COOC6H5 (phenyl benzoat).",
      isCorrect: false,
      questionId: 104,
    },
    {
      content: "CH3COO[CH2]2−OOCCH2CH3",
      isCorrect: false,
      questionId: 104,
    },
    {
      content: "CH3OOC−COOCH3",
      isCorrect: false,
      questionId: 104,
    },
    {
      content:
        "CH3COOC6H5 (phenyl axetat).",
      isCorrect: true,
      questionId: 104,
    },

    {
      content: "HCOOC2H5",
      isCorrect: false,
      questionId: 105,
    },
    {
      content: "HCOOC3H7",
      isCorrect: false,
      questionId: 105,
    },
    {
      content: "CH3COOCH3.",
      isCorrect: false,
      questionId: 105,
    },
    {
      content: "CH3COOC2H5",
      isCorrect: true,
      questionId: 105,
    },

    {
      content: "Este là những hợp chất hữu cơ trong phân tử có nhóm chức –COO- liên kết với gốc R và R’",
      isCorrect: false,
      questionId: 106,
    },
    {
      content: " Este là hợp chất sinh ra khi thế nhóm –OH trong nhóm COOH của phân tử axit bằng nhóm -OR'.",
      isCorrect: false,
      questionId: 106,
    },
    {
      content: "Este là sản phẩm phản ứng khi cho rượu tác dụng với axit cacboxylic",
      isCorrect: false,
      questionId: 106,
    },
    {
      content: "Este là sản phẩm phản ứng khi cho rượu tác dụng với axit.",
      isCorrect: true,
      questionId: 106,
    },

    {
      content: "HCOOCH2CH3",
      isCorrect: false,
      questionId: 107,
    },
    {
      content: "CH2=CHCOOH",
      isCorrect: false,
      questionId: 107,
    },
    {
      content: "HCOOCH=CH−CH3",
      isCorrect: false,
      questionId: 107,
    },
    {
      content: "CH3COOCH3",
      isCorrect: true,
      questionId: 107,
    },

    {
      content:
        "RCOOR’",
      isCorrect: false,
      questionId: 108,
    },
    {
      content: "CxHyOz",
      isCorrect: false,
      questionId: 108,
    },
    {
      content: "CnH2nO2",
      isCorrect: false,
      questionId: 108,
    },
    {
      content: "CnH2n−2O2",
      isCorrect: true,
      questionId: 108,
    },

    {
      content:
        "(CH3OOC)2C2H4",
      isCorrect: false,
      questionId: 109,
    },
    {
      content:
        "HCOO-COOHC",
      isCorrect: false,
      questionId: 109,
    },
    {
      content: "C3H5(COOH)3",
      isCorrect: false,
      questionId: 109,
    },
    {
      content: "HOCO−C2H4−OOCH3",
      isCorrect: true,
      questionId: 109,
    },

    {
      content: "Axit",
      isCorrect: false,
      questionId: 110,
    },
    {
      content:
        "Este",
      isCorrect: false,
      questionId: 110,
    },
    {
      content: "Ancol",
      isCorrect: false,
      questionId: 110,
    },
    {
      content: "Không so sánh được",
      isCorrect: true,
      questionId: 110,
    },

    {
      content: "CnH2n−4O4",
      isCorrect: false,
      questionId: 111,
    },
    {
      content: "CnH2n−2O2",
      isCorrect: false,
      questionId: 111,
    },
    {
      content: "CnH2nO2",
      isCorrect: false,
      questionId: 111,
    },
    {
      content: "CnH2n−4O2",
      isCorrect: true,
      questionId: 111,
    },

    {
      content: "3",
      isCorrect: false,
      questionId: 112,
    },
    {
      content: "4",
      isCorrect: false,
      questionId: 112,
    },
    {
      content: "5",
      isCorrect: false,
      questionId: 112,
    },
    {
      content: "6",
      isCorrect: true,
      questionId: 112,
    },

    { content: "4", isCorrect: false, questionId: 113 },
    { content: "5", isCorrect: false, questionId: 113 },
    { content: "6", isCorrect: false, questionId: 113 },
    { content: "7", isCorrect: true, questionId: 113 },

    {
      content:
        "2",
      isCorrect: false,
      questionId: 114,
    },
    {
      content:
        "3",
      isCorrect: false,
      questionId: 114,
    },
    {
      content: "4",
      isCorrect: false,
      questionId: 114,
    },
    {
      content: "5",
      isCorrect: true,
      questionId: 114,
    },

    {
      content: "Chất lỏng trong ống thứ 2 trở thành đồng nhất.",
      isCorrect: false,
      questionId: 115,
    },
    {
      content: "Chất lỏng trong ống thứ nhất trở thành đồng nhất.",
      isCorrect: false,
      questionId: 115,
    },
    {
      content:
        "Chất lỏng trong cả hai ống nghiệm có sự phân tách lớp.",
      isCorrect: false,
      questionId: 115,
    },
    {
      content:
        " Chất lỏng trong cả hai ống nghiệm trở thành đồng nhất.",
      isCorrect: true,
      questionId: 115,
    },

    { content: "3", isCorrect: false, questionId: 116 },
    {
      content: "5",
      isCorrect: false,
      questionId: 116,
    },
    {
      content: "4",
      isCorrect: false,
      questionId: 116,
    },
    { content: "2", isCorrect: true, questionId: 116 },

    {
      content:
        "CC12H20O6.",
      isCorrect: false,
      questionId: 117,
    },
    {
      content:
        "C12H14O4",
      isCorrect: false,
      questionId: 117,
    },
    {
      content: "C11H10O4",
      isCorrect: false,
      questionId: 117,
    },
    {
      content: "C11H12O4",
      isCorrect: true,
      questionId: 117,
    },

    { content: "tristearin", isCorrect: false, questionId: 118 },
    { content: "metyl axetat ", isCorrect: false, questionId: 118 },
    { content: "metyl fomat ", isCorrect: false, questionId: 118 },
    { content: "benzyl axetat", isCorrect: true, questionId: 118 },

    { content: "triolein", isCorrect: false, questionId: 119 },
    { content: "tripanmitin ", isCorrect: false, questionId: 119 },
    { content: "tristearin", isCorrect: false, questionId: 119 },
    { content: "trilinolein", isCorrect: true, questionId: 119 },

    {
      content: "H2 (có xúc tác)",
      isCorrect: false,
      questionId: 120,
    },
    {
      content: "dung dịch NaOH",
      isCorrect: false,
      questionId: 120,
    },
    {
      content: "dung dịch Br2",
      isCorrect: false,
      questionId: 120,
    },
    {
      content: "Cu(OH)2",
      isCorrect: true,
      questionId: 120,
    },
    //CATE2
    {
      content: "glucozơ.",
      isCorrect: false,
      questionId: 121,
    },

    {
      content: "saccarozơ",
      isCorrect: false,
      questionId: 121,
    },
    {
      content: "tinh bột",
      isCorrect: false,
      questionId: 121,
    },
    {
      content: "xenlulozơ",
      isCorrect: true,
      questionId: 121,
    },

    {
      content:
        "0,20M",
      isCorrect: false,
      questionId: 122,
    },
    {
      content: "0,01M",
      isCorrect: false,
      questionId: 122,
    },
    {
      content:
        "0,02M",
      isCorrect: false,
      questionId: 122,
    },
    {
      content: "0,10M",
      isCorrect: true,
      questionId: 122,
    },

    {
      content: "2,25 gam",
      isCorrect: false,
      questionId: 123,
    },
    {
      content:
        "1,80 gam",
      isCorrect: false,
      questionId: 123,
    },
    {
      content:
        "1,82 gam",
      isCorrect: false,
      questionId: 123,
    },
    {
      content:
        "1,44 gam",
      isCorrect: true,
      questionId: 123,
    },

    {
      content:
        "45%",
      isCorrect: false,
      questionId: 124,
    },
    {
      content: "40%",
      isCorrect: false,
      questionId: 124,
    },
    {
      content: "60%",
      isCorrect: false,
      questionId: 124,
    },
    {
      content:
        "80%",
      isCorrect: true,
      questionId: 124,
    },

    {
      content: "Hợp chất đa chức, có công thức chung là Cn(H2O)m",
      isCorrect: false,
      questionId: 125,
    },
    {
      content: "Hợp chất tạp chức, đa số có công thức chung là Cn(H2O)m",
      isCorrect: false,
      questionId: 125,
    },
    {
      content: "Hợp chất chứa nhiều nhóm hidroxyl và nhóm cacboxyl.",
      isCorrect: false,
      questionId: 125,
    },
    {
      content: "Hợp chất chỉ có nguồn gốc từ thực vật.",
      isCorrect: true,
      questionId: 125,
    },

    {
      content: "monosaccarit; đisaccarit và polisaccarit",
      isCorrect: false,
      questionId: 126,
    },
    {
      content: "monosaccarit và polisaccarit",
      isCorrect: false,
      questionId: 126,
    },
    {
      content: "đissaccarit và polisaccarit",
      isCorrect: false,
      questionId: 126,
    },
    {
      content: "monosaccarit và đissaccarit",
      isCorrect: true,
      questionId: 126,
    },

    {
      content: "Hợp chất tạp chức.",
      isCorrect: false,
      questionId: 127,
    },
    {
      content: "Cacbohiđrat.",
      isCorrect: false,
      questionId: 127,
    },
    {
      content: "Monosaccarit.",
      isCorrect: false,
      questionId: 127,
    },
    {
      content: "Đisaccarit.",
      isCorrect: true,
      questionId: 127,
    },

    {
      content:
        "Chất rắn, màu trắng, tan trong nước, có vị ngọt.",
      isCorrect: false,
      questionId: 128,
    },
    {
      content: "Có mặt trong hầu hết các bộ phận của cây và trong quả chín.",
      isCorrect: false,
      questionId: 128,
    },
    {
      content: "Còn có tên là đường nho.",
      isCorrect: false,
      questionId: 128,
    },
    {
      content: "Có 0,1% trong máu người.",
      isCorrect: true,
      questionId: 128,
    },

    {
      content:
        "Glucozơ.",
      isCorrect: false,
      questionId: 129,
    },
    {
      content:
        "Mantozơ.",
      isCorrect: false,
      questionId: 129,
    },
    {
      content: "Saccarozơ.",
      isCorrect: false,
      questionId: 129,
    },
    {
      content: "Fructozơ.",
      isCorrect: true,
      questionId: 129,
    },

    {
      content: "(1), (2), (4), (6).",
      isCorrect: false,
      questionId: 130,
    },
    {
      content:
        "(1), (2), (3), (7).",
      isCorrect: false,
      questionId: 130,
    },
    {
      content: "(3), (5), (6), (7).",
      isCorrect: false,
      questionId: 130,
    },
    {
      content: "(1), (2), (5), (6).",
      isCorrect: true,
      questionId: 130,
    },

    {
      content: "C6H12O6 + Cu(OH)2 → kết tủa đỏ gạch",
      isCorrect: false,
      questionId: 131,
    },
    {
      content: "C6H12O6 → 2CH3–CH(OH)–COOH",
      isCorrect: false,
      questionId: 131,
    },
    {
      content: "C6H12O6 + CuO → Dung dịch màu xanh",
      isCorrect: false,
      questionId: 131,
    },
    {
      content: "C6H12O6 → 2C2H5OH+2CO2",
      isCorrect: true,
      questionId: 131,
    },

    {
      content: "CH3CHO và CH3CH2OH",
      isCorrect: false,
      questionId: 132,
    },
    {
      content: "CH3CH2OH và CH3CHO",
      isCorrect: false,
      questionId: 132,
    },
    {
      content: "CH3CH(OH)COOH và CH3CHO",
      isCorrect: false,
      questionId: 132,
    },
    {
      content: "CH3CH2OH và CH2=CH2.",
      isCorrect: true,
      questionId: 132,
    },

    { content: "21,6g", isCorrect: false, questionId: 133 },
    { content: "10,8g", isCorrect: false, questionId: 133 },
    { content: "18,36g", isCorrect: false, questionId: 133 },
    { content: "2,16g", isCorrect: true, questionId: 133 },

    {
      content:
        "86,4 g.",
      isCorrect: false,
      questionId: 134,
    },
    {
      content:
        "43,2 g.",
      isCorrect: false,
      questionId: 134,
    },
    {
      content: "21,6 g.",
      isCorrect: false,
      questionId: 134,
    },
    {
      content: "10,8 g.",
      isCorrect: true,
      questionId: 134,
    },

    {
      content: "glucozơ",
      isCorrect: false,
      questionId: 135,
    },
    {
      content: "saccarozơ",
      isCorrect: false,
      questionId: 135,
    },
    {
      content:
        "tinh bột",
      isCorrect: false,
      questionId: 135,
    },
    {
      content:
        "xenlulozơ",
      isCorrect: true,
      questionId: 135,
    },

    { content: " amilozơ", isCorrect: false, questionId: 136 },
    {
      content: "amilopectin",
      isCorrect: false,
      questionId: 136,
    },
    {
      content: "saccarozơ ",
      isCorrect: false,
      questionId: 136,
    },
    { content: "xenlulozơ", isCorrect: true, questionId: 136 },

    {
      content:
        "Glucozơ, fructozơ, saccarozơ đều hoà tan được Cu(OH)2.",
      isCorrect: false,
      questionId: 137,
    },
    {
      content:
        "Glucozơ, fructozơ đều có phản ứng tráng bạc",
      isCorrect: false,
      questionId: 137,
    },
    {
      content: "Cho I2 vào dung dịch hồ tinh bột rồi đun nóng thì thu được dung dịch màu xanh tím.",
      isCorrect: false,
      questionId: 137,
    },
    {
      content: "Xenlulozơ phản ứng với HNO3 dư có xúc tác thích hợp tạo xenlulozơ trinitrat",
      isCorrect: true,
      questionId: 137,
    },

    { content: "glucozơ và fructozơ", isCorrect: false, questionId: 138 },
    { content: "glucozơ ", isCorrect: false, questionId: 138 },
    { content: "fructozơ ", isCorrect: false, questionId: 138 },
    { content: "tinh bột", isCorrect: true, questionId: 138 },

    { content: "Saccarozơ làm mất màu nước brom", isCorrect: false, questionId: 139 },
    { content: "Xenlulozơ có cấu trúc mạch phân nhánh ", isCorrect: false, questionId: 139 },
    { content: "Amilopectin có cấu trúc mạch phân nhánh", isCorrect: false, questionId: 139 },
    { content: "Glucozơ bị khử bởi dung dịch AgNO3 trong NH3", isCorrect: true, questionId: 139 },

    {
      content: "Monosaccarit.",
      isCorrect: false,
      questionId: 140,
    },
    {
      content: " Đisaccarit.",
      isCorrect: false,
      questionId: 140,
    },
    {
      content: "Polisaccarit.",
      isCorrect: false,
      questionId: 140,
    },
    {
      content: "Oligosaccarit.",
      isCorrect: true,
      questionId: 140,
    },
    //CATE3
    {
      content: "CnH2nN",
      isCorrect: false,
      questionId: 141,
    },
    {
      content: "CnH2n+1N",
      isCorrect: false,
      questionId: 141,
    },
    {
      content: "CnH2n+3N",
      isCorrect: false,
      questionId: 141,
    },
    {
      content: "CnH2n+2N",
      isCorrect: true,
      questionId: 141,
    },

    {
      content:
        "(CH3)3N",
      isCorrect: false,
      questionId: 142,
    },
    {
      content: "CH3NHCH3",
      isCorrect: false,
      questionId: 142,
    },
    {
      content:
        "CH3NH2",
      isCorrect: false,
      questionId: 142,
    },
    {
      content: "CH3CH2NHCH3",
      isCorrect: true,
      questionId: 142,
    },

    {
      content: "trimetylamin",
      isCorrect: false,
      questionId: 143,
    },
    {
      content:
        "phenylamin",
      isCorrect: false,
      questionId: 143,
    },
    {
      content:
        "metylamin",
      isCorrect: false,
      questionId: 143,
    },
    {
      content:
        "đimetylamin",
      isCorrect: true,
      questionId: 143,
    },

    {
      content:
        "(CH3)3N",
      isCorrect: false,
      questionId: 144,
    },
    {
      content: "CH3−NH2",
      isCorrect: false,
      questionId: 144,
    },
    {
      content: "C2H5−NH2",
      isCorrect: false,
      questionId: 144,
    },
    {
      content:
        "CH3−NH−CH3",
      isCorrect: true,
      questionId: 144,
    },

    {
      content: "2",
      isCorrect: false,
      questionId: 145,
    },
    {
      content: "3",
      isCorrect: false,
      questionId: 145,
    },
    {
      content: "4.",
      isCorrect: false,
      questionId: 145,
    },
    {
      content: "5",
      isCorrect: true,
      questionId: 145,
    },

    {
      content: "bằng một hay nhiều gốc NH2",
      isCorrect: false,
      questionId: 146,
    },
    {
      content: "bằng một hay nhiều gốc hiđrocacbon",
      isCorrect: false,
      questionId: 146,
    },
    {
      content: "bằng một hay nhiều gốc Cl",
      isCorrect: false,
      questionId: 146,
    },
    {
      content: "bằng một hay nhiều gốc ankyl",
      isCorrect: true,
      questionId: 146,
    },

    {
      content: "CH3NH2, CH3COOH, C2H5OH, C6H12O6.",
      isCorrect: false,
      questionId: 147,
    },
    {
      content: "C2H5OH, CH3NH2, C2H6O2, HCOOH.",
      isCorrect: false,
      questionId: 147,
    },
    {
      content: "C2H5NH2, (CH3)3N, CH3CHO, C6H12O6.",
      isCorrect: false,
      questionId: 147,
    },
    {
      content: " C2H5NH2, (CH3)3N, CH3NH2, C6H5NH2.",
      isCorrect: true,
      questionId: 147,
    },

    {
      content:
        "CnH2n+1N",
      isCorrect: false,
      questionId: 148,
    },
    {
      content: "CnH2n+3N",
      isCorrect: false,
      questionId: 148,
    },
    {
      content: "CnH2n+kNk",
      isCorrect: false,
      questionId: 148,
    },
    {
      content: "Không có đáp án phù hợp",
      isCorrect: true,
      questionId: 148,
    },

    {
      content:
        "1",
      isCorrect: false,
      questionId: 149,
    },
    {
      content:
        "2",
      isCorrect: false,
      questionId: 149,
    },
    {
      content: "3",
      isCorrect: false,
      questionId: 149,
    },
    {
      content: "4",
      isCorrect: true,
      questionId: 149,
    },

    {
      content: "CH3NHCH2=CH­2",
      isCorrect: false,
      questionId: 150,
    },
    {
      content:
        "CH2=C(CH3)NH2",
      isCorrect: false,
      questionId: 150,
    },
    {
      content: "H2N(CH2)­6NH2",
      isCorrect: false,
      questionId: 150,
    },
    {
      content: "C6H5NH2",
      isCorrect: true,
      questionId: 150,
    },

    {
      content: "CnH2n+3N.",
      isCorrect: false,
      questionId: 151,
    },
    {
      content: "CnH2n+2+kNk",
      isCorrect: false,
      questionId: 151,
    },
    {
      content: "CnH2n+2-2a+kNk",
      isCorrect: false,
      questionId: 151,
    },
    {
      content: "CnH2n+1N.",
      isCorrect: true,
      questionId: 151,
    },

    {
      content: "C8H9N",
      isCorrect: false,
      questionId: 152,
    },
    {
      content: "C9H9N",
      isCorrect: false,
      questionId: 152,
    },
    {
      content: "C10H10N",
      isCorrect: false,
      questionId: 152,
    },
    {
      content: "Không có đáp án thỏa mãn",
      isCorrect: true,
      questionId: 152,
    },

    { content: "CH3-NH-CH3 metylamin.", isCorrect: false, questionId: 153 },
    { content: "CH3-CH2-CH2NH2 iso-propylamin.", isCorrect: false, questionId: 153 },
    { content: "C6H5NH2 alanin.", isCorrect: false, questionId: 153 },
    { content: "CH3CH(CH3)-NH2 isopropylamin.", isCorrect: true, questionId: 153 },

    {
      content:
        "2",
      isCorrect: false,
      questionId: 154,
    },
    {
      content:
        "3",
      isCorrect: false,
      questionId: 154,
    },
    {
      content: "4",
      isCorrect: false,
      questionId: 154,
    },
    {
      content: "5",
      isCorrect: true,
      questionId: 154,
    },

    {
      content: "2",
      isCorrect: false,
      questionId: 155,
    },
    {
      content: "4",
      isCorrect: false,
      questionId: 155,
    },
    {
      content:
        "1",
      isCorrect: false,
      questionId: 155,
    },
    {
      content:
        "3",
      isCorrect: true,
      questionId: 155,
    },

    { content: "3", isCorrect: false, questionId: 156 },
    {
      content: "4",
      isCorrect: false,
      questionId: 156,
    },
    {
      content: "5",
      isCorrect: false,
      questionId: 156,
    },
    { content: "6", isCorrect: true, questionId: 156 },

    {
      content:
        "0,04 mol và 0,3M..",
      isCorrect: false,
      questionId: 157,
    },
    {
      content:
        "0,02 mol và 0,1M.",
      isCorrect: false,
      questionId: 157,
    },
    {
      content: "0,06 mol và 0,3M.",
      isCorrect: false,
      questionId: 157,
    },
    {
      content: "0,04 mol và 0,2M.",
      isCorrect: true,
      questionId: 157,
    },

    { content: "C3H7N", isCorrect: false, questionId: 158 },
    { content: "C3H9N ", isCorrect: false, questionId: 158 },
    { content: "C2H7N", isCorrect: false, questionId: 158 },
    { content: "C4H11N", isCorrect: true, questionId: 158 },

    { content: "cacboxyl và hiđroxyl", isCorrect: false, questionId: 159 },
    { content: "hiđroxyl và amino ", isCorrect: false, questionId: 159 },
    { content: "cacboxyl và amino", isCorrect: false, questionId: 159 },
    { content: "cacbonyl và amino", isCorrect: true, questionId: 159 },

    {
      content: "CH3NH2",
      isCorrect: false,
      questionId: 160,
    },
    {
      content: "H2NCH(CH3)COOH",
      isCorrect: false,
      questionId: 160,
    },
    {
      content: "H2NCH2COOH",
      isCorrect: false,
      questionId: 160,
    },
    {
      content: "C2H5NH2",
      isCorrect: true,
      questionId: 160,
    },
    //CATE4
    {
      content: "Trong một chu kì, khi điện tích hạt nhân tăng thì tính kim loại tăng dần",
      isCorrect: false,
      questionId: 161,
    },
    {
      content: "Trong một nhóm theo chiều tăng dần của điện tích hạt nhân, tính kim loại tăng, ",
      isCorrect: false,
      questionId: 161,
    },
    {
      content: "Kim loại có độ âm điện bé hơn phi kim trong cùng chu kì.",
      isCorrect: false,
      questionId: 161,
    },
    {
      content: "Đa số các kim loại đều có cấu tạo tinh thể",
      isCorrect: true,
      questionId: 161,
    },

    {
      content:
        "Hai nguyên tố này cùng là kim loại",
      isCorrect: false,
      questionId: 162,
    },
    {
      content: "Hai nguyên tố này thuộc cùng một chu kì",
      isCorrect: false,
      questionId: 162,
    },
    {
      content:
        "Hai nguyên tố này có cùng số e lớp ngoài cùng ở trạng thái cơ bản",
      isCorrect: false,
      questionId: 162,
    },
    {
      content: "Hai nguyên tố này cùng là nguyên tố s",
      isCorrect: true,
      questionId: 162,
    },

    {
      content: "Y < Z < X",
      isCorrect: false,
      questionId: 163,
    },
    {
      content:
        "X < Z < Y",
      isCorrect: false,
      questionId: 163,
    },
    {
      content:
        "X ≤ Y ≤ Z",
      isCorrect: false,
      questionId: 163,
    },
    {
      content:
        "Z < X < Y",
      isCorrect: true,
      questionId: 163,
    },

    {
      content:
        " Các nguyên tố nhóm A có cấu hình e lớp ngoài cùng ns2 đều là các kim loại",
      isCorrect: false,
      questionId: 164,
    },
    {
      content: "Nguyên tố có Z = 19 có bán kính lớn hơn nguyên tố có Z = 11",
      isCorrect: false,
      questionId: 164,
    },
    {
      content: "Li là kim loại có độ âm điện lớn nhất trong số các kim loại kiềm",
      isCorrect: false,
      questionId: 164,
    },
    {
      content:
        "Các nguyên tố nhóm B đều là kim loại",
      isCorrect: true,
      questionId: 164,
    },

    {
      content: "1s2 2s2 2p6 3s1",
      isCorrect: false,
      questionId: 165,
    },
    {
      content: "1s2 2s2 2p3",
      isCorrect: false,
      questionId: 165,
    },
    {
      content: "1s2 2s2 2p5.",
      isCorrect: false,
      questionId: 165,
    },
    {
      content: "1s2 2s2 2p6 3s2 3p6",
      isCorrect: true,
      questionId: 165,
    },

    {
      content: "1s3 2s2 2p6 3s1",
      isCorrect: false,
      questionId: 166,
    },
    {
      content: "1s2 2s2 2p6 3s2",
      isCorrect: false,
      questionId: 166,
    },
    {
      content: "1s2 2s3 2p6 3s2",
      isCorrect: false,
      questionId: 166,
    },
    {
      content: "1s2 2s2 2p6 3s1",
      isCorrect: true,
      questionId: 166,
    },

    {
      content: "3s2",
      isCorrect: false,
      questionId: 167,
    },
    {
      content: "3s2 3p1",
      isCorrect: false,
      questionId: 167,
    },
    {
      content: "3s1",
      isCorrect: false,
      questionId: 167,
    },
    {
      content: " Cả A, B, C đều đúng",
      isCorrect: true,
      questionId: 167,
    },

    {
      content:
        "Rb",
      isCorrect: false,
      questionId: 168,
    },
    {
      content: "Li",
      isCorrect: false,
      questionId: 168,
    },
    {
      content: "K",
      isCorrect: false,
      questionId: 168,
    },
    {
      content: "Na",
      isCorrect: true,
      questionId: 168,
    },

    {
      content:
        "Chu kỳ 4, nhóm VIB",
      isCorrect: false,
      questionId: 169,
    },
    {
      content:
        "Chu kỳ 3, nhóm IIB",
      isCorrect: false,
      questionId: 169,
    },
    {
      content: "Chu kỳ 3, nhóm IIIB",
      isCorrect: false,
      questionId: 169,
    },
    {
      content: "Chu kỳ 4, nhóm VIIIB",
      isCorrect: true,
      questionId: 169,
    },

    {
      content: "Zn",
      isCorrect: false,
      questionId: 170,
    },
    {
      content:
        "Al",
      isCorrect: false,
      questionId: 170,
    },
    {
      content: "Na",
      isCorrect: false,
      questionId: 170,
    },
    {
      content: "Mg",
      isCorrect: true,
      questionId: 170,
    },

    {
      content: "4s2 4p5",
      isCorrect: false,
      questionId: 171,
    },
    {
      content: "3s2 3p3",
      isCorrect: false,
      questionId: 171,
    },
    {
      content: "2s2 2p6",
      isCorrect: false,
      questionId: 171,
    },
    {
      content: "3s1",
      isCorrect: true,
      questionId: 171,
    },

    {
      content: "K+, Cl, Al",
      isCorrect: false,
      questionId: 172,
    },
    {
      content: "Li+, Br, Ne",
      isCorrect: false,
      questionId: 172,
    },
    {
      content: "Na+, Cl, Ar",
      isCorrect: false,
      questionId: 172,
    },
    {
      content: "Na+, F−, Ne",
      isCorrect: true,
      questionId: 172,
    },

    { content: "Ở điều kiện thường, các kim loại đều có khối lượng riêng lớn hơn khối lượng riêng của nước", isCorrect: false, questionId: 173 },
    { content: "Tính chất hóa học đặc trưng của kim loại là tính khử", isCorrect: false, questionId: 173 },
    { content: "Các kim loại đều chỉ có một số oxi hoá duy nhất trong các hợp chất", isCorrect: false, questionId: 173 },
    { content: "Ở điều kiện thường, tất cả các kim loại đều ở trạng thái rắn", isCorrect: true, questionId: 173 },

    {
      content:
        "3s2",
      isCorrect: false,
      questionId: 174,
    },
    {
      content:
        "3s2 3p1",
      isCorrect: false,
      questionId: 174,
    },
    {
      content: "3s1",
      isCorrect: false,
      questionId: 174,
    },
    {
      content: "Cả A, B, C đều đúng",
      isCorrect: true,
      questionId: 174,
    },

    {
      content: "Mg",
      isCorrect: false,
      questionId: 175,
    },
    {
      content: "Cu",
      isCorrect: false,
      questionId: 175,
    },
    {
      content:
        "Ba",
      isCorrect: false,
      questionId: 175,
    },
    {
      content:
        "Zn",
      isCorrect: true,
      questionId: 175,
    },

    { content: "150 ml", isCorrect: false, questionId: 176 },
    {
      content: "225 ml",
      isCorrect: false,
      questionId: 176,
    },
    {
      content: "100 ml",
      isCorrect: false,
      questionId: 176,
    },
    { content: "75 ml", isCorrect: true, questionId: 176 },

    {
      content:
        "28,2 gam.",
      isCorrect: false,
      questionId: 177,
    },
    {
      content:
        "22,8 gam",
      isCorrect: false,
      questionId: 177,
    },
    {
      content: "14,1 gam",
      isCorrect: false,
      questionId: 177,
    },
    {
      content: "11,4 gam",
      isCorrect: true,
      questionId: 177,
    },

    { content: "22,5", isCorrect: false, questionId: 178 },
    { content: "23,4", isCorrect: false, questionId: 178 },
    { content: "25,8", isCorrect: false, questionId: 178 },
    { content: "24,6", isCorrect: true, questionId: 178 },

    { content: "liên kết kim loại và liên kết cộng hoá trị.", isCorrect: false, questionId: 179 },
    { content: "liên kết cộng hoá trị và liên kết ion ", isCorrect: false, questionId: 179 },
    { content: "liên kết ion và tương tác yếu giữa các phân tử (tương tác Van der Waals)", isCorrect: false, questionId: 179 },
    { content: "tương tác yếu giữa các phân tử (tương tác Van der Waals) và liên kết kim loại.", isCorrect: true, questionId: 179 },

    {
      content: "Hg(NO3)2",
      isCorrect: false,
      questionId: 180,
    },
    {
      content: "Zn(NO3)2",
      isCorrect: false,
      questionId: 180,
    },
    {
      content: "Sn(NO3)2",
      isCorrect: false,
      questionId: 180,
    },
    {
      content: "Pb(NO3)2",
      isCorrect: true,
      questionId: 180,
    },
    //CATE5
    {
      content: "điện tích hạt nhân của các nguyên tử",
      isCorrect: false,
      questionId: 181,
    },
    {
      content: "cấu trúc mạng tinh thể",
      isCorrect: false,
      questionId: 181,
    },
    {
      content: "bán kính ion",
      isCorrect: false,
      questionId: 181,
    },
    {
      content: "độ hoạt động hoá học",
      isCorrect: true,
      questionId: 181,
    },

    {
      content:
        "5",
      isCorrect: false,
      questionId: 182,
    },
    {
      content: "4",
      isCorrect: false,
      questionId: 182,
    },
    {
      content:
        "3",
      isCorrect: false,
      questionId: 182,
    },
    {
      content: "1",
      isCorrect: true,
      questionId: 182,
    },

    {
      content: "Để trong lọ thủy tinh có không khí nhưng đậy nắp kín",
      isCorrect: false,
      questionId: 183,
    },
    {
      content:
        "Ngâm trong ancol nguyên chất",
      isCorrect: false,
      questionId: 183,
    },
    {
      content:
        "Để trong lọ thủy tinh có chất hút ẩm và đặt trong bóng tối",
      isCorrect: false,
      questionId: 183,
    },
    {
      content:
        "Ngâm trong dầu hỏa",
      isCorrect: true,
      questionId: 183,
    },

    {
      content:
        "140 ml",
      isCorrect: false,
      questionId: 184,
    },
    {
      content: "70 ml",
      isCorrect: false,
      questionId: 184,
    },
    {
      content: "700 ml",
      isCorrect: false,
      questionId: 184,
    },
    {
      content:
        "1400 ml",
      isCorrect: true,
      questionId: 184,
    },

    {
      content: "FeO",
      isCorrect: false,
      questionId: 185,
    },
    {
      content: "Fe3O4",
      isCorrect: false,
      questionId: 185,
    },
    {
      content: "Fe2O3.",
      isCorrect: false,
      questionId: 185,
    },
    {
      content: "Fe(OH)2",
      isCorrect: true,
      questionId: 185,
    },

    {
      content: "ns1",
      isCorrect: false,
      questionId: 186,
    },
    {
      content: "ns2",
      isCorrect: false,
      questionId: 186,
    },
    {
      content: "ns2 np1",
      isCorrect: false,
      questionId: 186,
    },
    {
      content: "(n–1)dx nsy",
      isCorrect: true,
      questionId: 186,
    },

    {
      content: "Ag+",
      isCorrect: false,
      questionId: 187,
    },
    {
      content: "Cu+",
      isCorrect: false,
      questionId: 187,
    },
    {
      content: "Na+",
      isCorrect: false,
      questionId: 187,
    },
    {
      content: "K+",
      isCorrect: true,
      questionId: 187,
    },

    {
      content:
        "Từ Li đến Cs, bán kính nguyên tử tăng dần nên nhiệt độ nóng chảy và nhiệt độ sôi tăng dần",
      isCorrect: false,
      questionId: 188,
    },
    {
      content: "Các kim loại từ Li đến Cs đều có ánh kim",
      isCorrect: false,
      questionId: 188,
    },
    {
      content: "Từ Li đến Cs, điện tích hạt nhân tăng dần, khả năng tách e hóa trị giảm dần",
      isCorrect: false,
      questionId: 188,
    },
    {
      content: "Kim loại kiềm có tính khử mạnh nên thế điện cực rất dương",
      isCorrect: true,
      questionId: 188,
    },

    {
      content:
        "Na",
      isCorrect: false,
      questionId: 189,
    },
    {
      content:
        "K",
      isCorrect: false,
      questionId: 189,
    },
    {
      content: "Br",
      isCorrect: false,
      questionId: 189,
    },
    {
      content: "Cs",
      isCorrect: true,
      questionId: 189,
    },

    {
      content: " Thành phần của chúng trong tự nhiên rất nhỏ",
      isCorrect: false,
      questionId: 190,
    },
    {
      content:
        "Đây là những kim loại hoạt động rất mạnh",
      isCorrect: false,
      questionId: 190,
    },
    {
      content: "Đây là các kim loại chỉ điều chế được bằng phương pháp điện phân",
      isCorrect: false,
      questionId: 190,
    },
    {
      content: "Đây là những kim loại dễ tan trong nước",
      isCorrect: true,
      questionId: 190,
    },

    {
      content: "là nguyên tố thuộc chu kì 4, nhóm IA",
      isCorrect: false,
      questionId: 191,
    },
    {
      content: "là nguyên tố cuối cùng của chu kì 4",
      isCorrect: false,
      questionId: 191,
    },
    {
      content: "là một kim loại có tính khử yếu",
      isCorrect: false,
      questionId: 191,
    },
    {
      content: "tất cả đặc điểm trên đều đúng",
      isCorrect: true,
      questionId: 191,
    },

    {
      content: "Kim loại kiềm có nhiệt độ nóng chảy và nhiệt độ sôi thấp",
      isCorrect: false,
      questionId: 192,
    },
    {
      content: "Trong tự nhiên, các kim loại kiềm chỉ tồn tại ở dạng hợp chất",
      isCorrect: false,
      questionId: 192,
    },
    {
      content: "Từ Li đến Cs, khả năng phản ứng với nước giảm dần",
      isCorrect: false,
      questionId: 192,
    },
    {
      content: "Các kim loại kiềm có màu trắng bạc và có tính ánh kim",
      isCorrect: true,
      questionId: 192,
    },

    { content: "Tinh thể kim loại kiềm", isCorrect: false, questionId: 193 },
    { content: "Đơn chất", isCorrect: false, questionId: 193 },
    { content: "Hợp chất", isCorrect: false, questionId: 193 },
    { content: "Dáp án khác", isCorrect: true, questionId: 193 },

    {
      content:
        "Bề mặt kim loại có màu đỏ, dung dịch nhạt màu",
      isCorrect: false,
      questionId: 194,
    },
    {
      content:
        "Bề mặt kim loại có màu đỏ và có kết tủa xanh",
      isCorrect: false,
      questionId: 194,
    },
    {
      content: "Sủi bọt khí không màu, có kết tủa màu xanh",
      isCorrect: false,
      questionId: 194,
    },
    {
      content: "Sủi bọt khí không màu, có kết tủa màu đỏ",
      isCorrect: true,
      questionId: 194,
    },

    {
      content: "Quỳ tím chuyển đỏ",
      isCorrect: false,
      questionId: 195,
    },
    {
      content: "Quỳ tím chuyển xanh",
      isCorrect: false,
      questionId: 195,
    },
    {
      content:
        "Quỳ tím không đổi màu",
      isCorrect: false,
      questionId: 195,
    },
    {
      content:
        "Quỳ tím mất màu",
      isCorrect: true,
      questionId: 195,
    },

    { content: "Ngâm trong ancol nguyên chất", isCorrect: false, questionId: 196 },
    {
      content: "Ngâm trong dầu hỏa",
      isCorrect: false,
      questionId: 196,
    },
    {
      content: " Để trong lọ thủy tinh có không khí rồi đậy kín nắp",
      isCorrect: false,
      questionId: 196,
    },
    { content: " Để ngoài không khí", isCorrect: true, questionId: 196 },

    {
      content:
        "KOH.",
      isCorrect: false,
      questionId: 197,
    },
    {
      content:
        "Ba(OH)2",
      isCorrect: false,
      questionId: 197,
    },
    {
      content: "KOH, Ba(OH)2",
      isCorrect: false,
      questionId: 197,
    },
    {
      content: "KOH, Ba(OH)2, H2",
      isCorrect: true,
      questionId: 197,
    },

    { content: "Cl-", isCorrect: false, questionId: 198 },
    { content: "NO3-", isCorrect: false, questionId: 198 },
    { content: "SO42-", isCorrect: false, questionId: 198 },
    { content: "CO32-", isCorrect: true, questionId: 198 },

    { content: "CaO", isCorrect: false, questionId: 199 },
    { content: "CaSO4 ", isCorrect: false, questionId: 199 },
    { content: "CaSO4.H2O", isCorrect: false, questionId: 199 },
    { content: "CaSO4.2H2O", isCorrect: true, questionId: 199 },

    {
      content: "Nước chứa nhiều ion Ca2+ và Mg2+",
      isCorrect: false,
      questionId: 200,
    },
    {
      content: "Nước chứa ít ion Ca2+ và Mg2+",
      isCorrect: false,
      questionId: 200,
    },
    {
      content: "Nước không chứa ion Ca2+ và Mg2+",
      isCorrect: false,
      questionId: 200,
    },
    {
      content: "B và C đúng",
      isCorrect: true,
      questionId: 200,
    },
    //cate25
    {
      content: "Dao động điều hòa thì tuần hoàn",
      isCorrect: false,
      questionId: 201,
    },
    {
      content: "Dao động là chuyển động qua lại quanh một vị trí đặc biệt gọi là vị trí cân bằng",
      isCorrect: false,
      questionId: 201,
    },
    {
      content: "Dao động điều hòa là dao động trong đó li độ của vật là một hàm tan (hay cotan) của thời gian",
      isCorrect: false,
      questionId: 201,
    },
    {
      content: "Dao động tuần hoàn là dao động mà trạng thái của vật được lặp lại như cũ, theo hướng cũ sau những khoảng thời gian bằng nhau xác định.",
      isCorrect: true,
      questionId: 201,
    },

    {
      content:
        "x = 2sin(2πt + π/6) (cm)",
      isCorrect: false,
      questionId: 202,
    },
    {
      content: "x = 3tcos(100πt + π/6)  (cm)",
      isCorrect: false,
      questionId: 202,
    },
    {
      content:
        "x = - 3cos5πt  (cm)",
      isCorrect: false,
      questionId: 202,
    },
    {
      content: "x = 1 + 5cosπt  (cm)",
      isCorrect: true,
      questionId: 202,
    },

    {
      content: "ω",
      isCorrect: false,
      questionId: 203,
    },
    {
      content:
        "φ",
      isCorrect: false,
      questionId: 203,
    },
    {
      content:
        "cos(ωt+φ)",
      isCorrect: false,
      questionId: 203,
    },
    {
      content:
        "(ωt+φ)",
      isCorrect: true,
      questionId: 203,
    },

    {
      content: "Biên độ, tần số.",
      isCorrect: false,
      questionId: 204,
    },
    {
      content: "Biên độ, gia tốc.",
      isCorrect: false,
      questionId: 204,
    },
    {
      content: "Vận tốc, tần số.",
      isCorrect: false,
      questionId: 204,
    },
    {
      content: "Li độ, vận tốc.",
      isCorrect: true,
      questionId: 204,
    },

    {
      content:
        "Quãng đường vật đi được trong một chu kì dao động là 2A",
      isCorrect: false,
      questionId: 205,
    },
    {
      content: "Độ dời lớn nhất của vật trong quá trình dao động là A",
      isCorrect: false,
      questionId: 205,
    },
    {
      content: "Độ dài quỹ đạo chuyển động của vật là 4A",
      isCorrect: false,
      questionId: 205,
    },
    {
      content:
        "Quãng đường vật đi được trong nửa chu kì dao động là A/2",
      isCorrect: true,
      questionId: 205,
    },

    {
      content: "Ở vị trí li độ cực đại thuộc phần dương của trục Ox",
      isCorrect: false,
      questionId: 206,
    },
    {
      content: "Qua vị trí cân bằng O ngược chiều dương của trục Ox",
      isCorrect: false,
      questionId: 206,
    },
    {
      content: "Ở vị trí li độ cực đại thuộc phần âm của trục Ox",
      isCorrect: false,
      questionId: 206,
    },
    {
      content: "Qua vị trí cân bằng O theo chiều dương của trục Ox",
      isCorrect: true,
      questionId: 206,
    },

    {
      content: "π(cm/s)",
      isCorrect: false,
      questionId: 207,
    },
    {
      content: "5/π(cm/s)",
      isCorrect: false,
      questionId: 207,
    },
    {
      content: "5π(cm/s)",
      isCorrect: false,
      questionId: 207,
    },
    {
      content: "5(cm/s)",
      isCorrect: true,
      questionId: 207,
    },

    {
      content:
        "100πcm/s2",
      isCorrect: false,
      questionId: 208,
    },
    {
      content: "100cm/s2",
      isCorrect: false,
      questionId: 208,
    },
    {
      content: "10cm/s2",
      isCorrect: false,
      questionId: 208,
    },
    {
      content: "10πcm/s2",
      isCorrect: true,
      questionId: 208,
    },

    {
      content:
        "50,24(cm/s)",
      isCorrect: false,
      questionId: 209,
    },
    {
      content:
        "2,512(cm/s)",
      isCorrect: false,
      questionId: 209,
    },
    {
      content: "25,12(cm/s)",
      isCorrect: false,
      questionId: 209,
    },
    {
      content: "12,56(cm/s)",
      isCorrect: true,
      questionId: 209,
    },

    {
      content: "Vật chuyển động nhanh dần đều",
      isCorrect: false,
      questionId: 210,
    },
    {
      content:
        "Vật chuyển động chậm dần đều",
      isCorrect: false,
      questionId: 210,
    },
    {
      content: "Gia tốc cùng hướng với chuyển động",
      isCorrect: false,
      questionId: 210,
    },
    {
      content: "Gia tốc có độ lớn tăng dần",
      isCorrect: true,
      questionId: 210,
    },

    {
      content: "100 g",
      isCorrect: false,
      questionId: 211,
    },
    {
      content: "150 g",
      isCorrect: false,
      questionId: 211,
    },
    {
      content: "25 g",
      isCorrect: false,
      questionId: 211,
    },
    {
      content: "75 g",
      isCorrect: true,
      questionId: 211,
    },

    {
      content: "40 cm",
      isCorrect: false,
      questionId: 212,
    },
    {
      content: "36 cm",
      isCorrect: false,
      questionId: 212,
    },
    {
      content: "38 cm",
      isCorrect: false,
      questionId: 212,
    },
    {
      content: "42 cm",
      isCorrect: true,
      questionId: 212,
    },

    { content: "5π rad/s", isCorrect: false, questionId: 213 },
    { content: "10π rad/s", isCorrect: false, questionId: 213 },
    { content: "2.5π rad/s", isCorrect: false, questionId: 213 },
    { content: "5 rad/s", isCorrect: true, questionId: 213 },

    {
      content:
        "3N và hướng xuống",
      isCorrect: false,
      questionId: 214,
    },
    {
      content:
        "7N và hướng xuống",
      isCorrect: false,
      questionId: 214,
    },
    {
      content: "3N và hướng lên",
      isCorrect: false,
      questionId: 214,
    },
    {
      content: "7N và hướng lên",
      isCorrect: true,
      questionId: 214,
    },

    {
      content: "8/3 cm",
      isCorrect: false,
      questionId: 215,
    },
    {
      content: "3/2 cm",
      isCorrect: false,
      questionId: 215,
    },
    {
      content:
        "4/3 cm",
      isCorrect: false,
      questionId: 215,
    },
    {
      content:
        "8 cm",
      isCorrect: true,
      questionId: 215,
    },

    { content: "Vị trí mà lò xo có chiều dài lớn nhất", isCorrect: false, questionId: 216 },
    {
      content: " Vị trí mà lò xo không bị biến dạng",
      isCorrect: false,
      questionId: 216,
    },
    {
      content: "Vị trí mà lực đàn hồi bằng không",
      isCorrect: false,
      questionId: 216,
    },
    { content: "Vị trí cân bằng", isCorrect: true, questionId: 216 },

    {
      content:
        "Dao động của con lắc là dao động tuần hoàn",
      isCorrect: false,
      questionId: 217,
    },
    {
      content:
        "Dao động của con lắc là dao động điều hòa",
      isCorrect: false,
      questionId: 217,
    },
    {
      content: "Thời gian thực hiện một dao động càng lớn khi biên độ càng lớn",
      isCorrect: false,
      questionId: 217,
    },
    {
      content: "Số dao động thực hiện được trong 1s tỉ lệ thuận với căn bậc hai của độ cứng k",
      isCorrect: true,
      questionId: 217,
    },

    { content: "Vị trí mà lò xo có chiều dài lớn nhất hoặc ngắn nhất", isCorrect: false, questionId: 218 },
    { content: "Vị trí mà lò xo không bị biến dạng", isCorrect: false, questionId: 218 },
    { content: "Vị trí mà lực đàn hồi bằng không", isCorrect: false, questionId: 218 },
    { content: "Vị trí cân bằng", isCorrect: true, questionId: 218 },

    { content: "Gia tốc của sự rơi tự do", isCorrect: false, questionId: 219 },
    { content: "Biên độ của dao động ", isCorrect: false, questionId: 219 },
    { content: "Điều kiện kích thích ban đầu", isCorrect: false, questionId: 219 },
    { content: "Khối lượng của vật nặng", isCorrect: true, questionId: 219 },

    {
      content: "Độ cứng lò xo",
      isCorrect: false,
      questionId: 220,
    },
    {
      content: "Khối lượng vật nặng",
      isCorrect: false,
      questionId: 220,
    },
    {
      content: "Điều kiện kích thích ban đầu",
      isCorrect: false,
      questionId: 220,
    },
    {
      content: "Gia tốc của sự rơi tự do",
      isCorrect: true,
      questionId: 220,
    },
    //cate26
    {
      content: "khí, chân không và rắn.",
      isCorrect: false,
      questionId: 221,
    },
    {
      content: "lỏng, khí và chân không",
      isCorrect: false,
      questionId: 221,
    },
    {
      content: "chân không, rắn và lỏng",
      isCorrect: false,
      questionId: 221,
    },
    {
      content: "rắn, lỏng và khí.",
      isCorrect: true,
      questionId: 221,
    },

    {
      content:
        "Sóng trong đó các phần tử của môi trường dao động theo cả hai phương vuông góc và song song với phương truyền.",
      isCorrect: false,
      questionId: 222,
    },
    {
      content: "Sóng trong đó các phần tử của môi trường dao động theo phương song song với phương truyền sóng.",
      isCorrect: false,
      questionId: 222,
    },
    {
      content:
        "Sóng trong đó các phần tử của môi trường dao động theo phương vuông góc với phương truyền sóng",
      isCorrect: false,
      questionId: 222,
    },
    {
      content: "Sóng trong đó các phần tử của môi trường dao động theo phương trùng với phương truyền sóng.",
      isCorrect: true,
      questionId: 222,
    },

    {
      content: "Chỉ truyền được trong chất rắn",
      isCorrect: false,
      questionId: 223,
    },
    {
      content:
        "Truyền được trong chất rắn và bề mặt chất lỏng",
      isCorrect: false,
      questionId: 223,
    },
    {
      content:
        "Truyền được trong chất rắn, chất lỏng và chất khí",
      isCorrect: false,
      questionId: 223,
    },
    {
      content:
        "Không truyền được trong chất rắn",
      isCorrect: true,
      questionId: 223,
    },

    {
      content:
        "Sóng trong đó các phần tử của môi trường dao động theo phương trùng với phương truyền sóng.",
      isCorrect: false,
      questionId: 224,
    },
    {
      content: "Sóng trong đó các phần tử của môi trường dao động theo phương vuông góc với phương truyền sóng.",
      isCorrect: false,
      questionId: 224,
    },
    {
      content: "Sóng trong đó các phần tử của môi trường dao động theo phương bất kì với phương truyền sóng.",
      isCorrect: false,
      questionId: 224,
    },
    {
      content:
        "Sóng trong đó các phần tử của môi trường dao động theo phương song song với phương truyền sóng.",
      isCorrect: true,
      questionId: 224,
    },

    {
      content: "Chỉ truyền được trong chất rắn",
      isCorrect: false,
      questionId: 225,
    },
    {
      content: "Truyền được trong chất rắn, chất lỏng và chất khí ",
      isCorrect: false,
      questionId: 225,
    },
    {
      content: "Truyền được trong chất rắn, chất lỏng, chất khí và trong chân không",
      isCorrect: false,
      questionId: 225,
    },
    {
      content: "Không truyền được trong chất rắn",
      isCorrect: true,
      questionId: 225,
    },

    {
      content: "Tốc độ truyền sóng và bước sóng.",
      isCorrect: false,
      questionId: 226,
    },
    {
      content: "Phương truyền sóng và tần số sóng.",
      isCorrect: false,
      questionId: 226,
    },
    {
      content: "Phương truyền sóng và tốc độ truyền sóng.",
      isCorrect: false,
      questionId: 226,
    },
    {
      content: "Phương dao động và phương truyền sóng.",
      isCorrect: true,
      questionId: 226,
    },

    {
      content: "Phụ thuộc vào bản chất môi trường và tần số sóng",
      isCorrect: false,
      questionId: 227,
    },
    {
      content: "Phụ thuộc vào bản chất môi trường và biên độ sóng",
      isCorrect: false,
      questionId: 227,
    },
    {
      content: "Chỉ phụ thuộc vào bản chất môi trường",
      isCorrect: false,
      questionId: 227,
    },
    {
      content: "Tăng theo cường độ sóng",
      isCorrect: true,
      questionId: 227,
    },

    {
      content:
        "Lớn gấp hai lần bước sóng trong môi trường A",
      isCorrect: false,
      questionId: 228,
    },
    {
      content: "Bằng bước sóng trong môi trường A",
      isCorrect: false,
      questionId: 228,
    },
    {
      content: " Bằng một nửa bước sóng trong môi trường A",
      isCorrect: false,
      questionId: 228,
    },
    {
      content: "Lớn gấp bốn lần bước sóng trong môi trường A",
      isCorrect: true,
      questionId: 228,
    },

    {
      content:
        "Biên độ sóng.",
      isCorrect: false,
      questionId: 229,
    },
    {
      content:
        "Tần số sóng.",
      isCorrect: false,
      questionId: 229,
    },
    {
      content: "Bước sóng.",
      isCorrect: false,
      questionId: 229,
    },
    {
      content: "Biên độ và năng lượng sóng.",
      isCorrect: true,
      questionId: 229,
    },

    {
      content: "λ2 = 0,75 λ1",
      isCorrect: false,
      questionId: 230,
    },
    {
      content:
        "λ2 = λ1",
      isCorrect: false,
      questionId: 230,
    },
    {
      content: "λ2 = 4/3 λ1",
      isCorrect: false,
      questionId: 230,
    },
    {
      content: "λ2 = 0,5 λ1",
      isCorrect: true,
      questionId: 230,
    },

    {
      content: "8.5 Hz",
      isCorrect: false,
      questionId: 231,
    },
    {
      content: "10 Hz",
      isCorrect: false,
      questionId: 231,
    },
    {
      content: "12 Hz",
      isCorrect: false,
      questionId: 231,
    },
    {
      content: "12.5 Hz",
      isCorrect: true,
      questionId: 231,
    },

    {
      content: "3 Cm",
      isCorrect: false,
      questionId: 232,
    },
    {
      content: "4 Cm",
      isCorrect: false,
      questionId: 232,
    },
    {
      content: "5 Cm",
      isCorrect: false,
      questionId: 232,
    },
    {
      content: "6 Cm",
      isCorrect: true,
      questionId: 232,
    },

    { content: "25 cm/s", isCorrect: false, questionId: 233 },
    { content: "3π cm/s", isCorrect: false, questionId: 233 },
    { content: "0 cm/s", isCorrect: false, questionId: 233 },
    { content: "-3π cm/s", isCorrect: true, questionId: 233 },

    {
      content:
        "-3 Cm",
      isCorrect: false,
      questionId: 234,
    },
    {
      content:
        "-2 Cm",
      isCorrect: false,
      questionId: 234,
    },
    {
      content: "2 Cm",
      isCorrect: false,
      questionId: 234,
    },
    {
      content: "3 Cm",
      isCorrect: true,
      questionId: 234,
    },

    {
      content: "1 Cm",
      isCorrect: false,
      questionId: 235,
    },
    {
      content: "-1 Cm",
      isCorrect: false,
      questionId: 235,
    },
    {
      content:
        "0 Cm",
      isCorrect: false,
      questionId: 235,
    },
    {
      content:
        "2 Cm",
      isCorrect: true,
      questionId: 235,
    },

    { content: "17", isCorrect: false, questionId: 236 },
    {
      content: "34",
      isCorrect: false,
      questionId: 236,
    },
    {
      content: "19",
      isCorrect: false,
      questionId: 236,
    },
    { content: "38", isCorrect: true, questionId: 236 },

    {
      content:
        "5 và 6",
      isCorrect: false,
      questionId: 237,
    },
    {
      content:
        "7 và 6",
      isCorrect: false,
      questionId: 237,
    },
    {
      content: "13 và 12",
      isCorrect: false,
      questionId: 237,
    },
    {
      content: "11 và 10",
      isCorrect: true,
      questionId: 237,
    },

    { content: "45λ/8", isCorrect: false, questionId: 238 },
    { content: "39λ/8", isCorrect: false, questionId: 238 },
    { content: "43λ/8", isCorrect: false, questionId: 238 },
    { content: "41λ/8", isCorrect: true, questionId: 238 },

    { content: "12 Cm", isCorrect: false, questionId: 239 },
    { content: "10 Cm ", isCorrect: false, questionId: 239 },
    { content: "13.5 Cm", isCorrect: false, questionId: 239 },
    { content: "15 Cm", isCorrect: true, questionId: 239 },

    {
      content: "2",
      isCorrect: false,
      questionId: 240,
    },
    {
      content: "3",
      isCorrect: false,
      questionId: 240,
    },
    {
      content: "4",
      isCorrect: false,
      questionId: 240,
    },
    {
      content: "5",
      isCorrect: true,
      questionId: 240,
    },
    //cate27
    {
      content: "Hiện tượng tự cảm",
      isCorrect: false,
      questionId: 241,
    },
    {
      content: "Suất điện động cảm ứng",
      isCorrect: false,
      questionId: 241,
    },
    {
      content: "Dòng điện một chiều",
      isCorrect: false,
      questionId: 241,
    },
    {
      content: "Suất điện động tự cảm",
      isCorrect: true,
      questionId: 241,
    },

    {
      content:
        "NBS ω √2",
      isCorrect: false,
      questionId: 242,
    },
    {
      content: "1/2 NBS ω √2",
      isCorrect: false,
      questionId: 242,
    },
    {
      content:
        ".NBS ω",
      isCorrect: false,
      questionId: 242,
    },
    {
      content: "NBS/ω",
      isCorrect: true,
      questionId: 242,
    },

    {
      content: "Nω/E0",
      isCorrect: false,
      questionId: 243,
    },
    {
      content:
        "NωE0",
      isCorrect: false,
      questionId: 243,
    },
    {
      content:
        "NE0/ω",
      isCorrect: false,
      questionId: 243,
    },
    {
      content:
        "E0/Nω",
      isCorrect: true,
      questionId: 243,
    },

    {
      content:
        "NBS ω √2",
      isCorrect: false,
      questionId: 244,
    },
    {
      content: "1/2NBS ω √2",
      isCorrect: false,
      questionId: 244,
    },
    {
      content: "NBS ω",
      isCorrect: false,
      questionId: 244,
    },
    {
      content:
        "NBS/ω",
      isCorrect: true,
      questionId: 244,
    },

    {
      content: "Số vòng dây N của khung dây",
      isCorrect: false,
      questionId: 245,
    },
    {
      content: "Tốc độ góc của khung dây",
      isCorrect: false,
      questionId: 245,
    },
    {
      content: "Diện tích của khung dây",
      isCorrect: false,
      questionId: 245,
    },
    {
      content: "Độ lớn của cảm ứng từ B của từ trường",
      isCorrect: true,
      questionId: 245,
    },

    {
      content: "0,015Wb",
      isCorrect: false,
      questionId: 246,
    },
    {
      content: "0,15Wb",
      isCorrect: false,
      questionId: 246,
    },
    {
      content: "1,5Wb",
      isCorrect: false,
      questionId: 246,
    },
    {
      content: "15Wb",
      isCorrect: true,
      questionId: 246,
    },

    {
      content: "25V",
      isCorrect: false,
      questionId: 247,
    },
    {
      content: "25√2 V",
      isCorrect: false,
      questionId: 247,
    },
    {
      content: "50V",
      isCorrect: false,
      questionId: 247,
    },
    {
      content: "50√2V",
      isCorrect: true,
      questionId: 247,
    },

    {
      content:
        "0,6 v",
      isCorrect: false,
      questionId: 248,
    },
    {
      content: "3,6 v",
      isCorrect: false,
      questionId: 248,
    },
    {
      content: "1,2 v",
      isCorrect: false,
      questionId: 248,
    },
    {
      content: "3,8 v",
      isCorrect: true,
      questionId: 248,
    },

    {
      content:
        "20 lần",
      isCorrect: false,
      questionId: 249,
    },
    {
      content:
        "40 lần",
      isCorrect: false,
      questionId: 249,
    },
    {
      content: "60 lần",
      isCorrect: false,
      questionId: 249,
    },
    {
      content: "80 lần",
      isCorrect: true,
      questionId: 249,
    },

    {
      content: "3,14 s",
      isCorrect: false,
      questionId: 250,
    },
    {
      content:
        "0,314 s",
      isCorrect: false,
      questionId: 250,
    },
    {
      content: "0,02s",
      isCorrect: false,
      questionId: 250,
    },
    {
      content: "0,2 s",
      isCorrect: true,
      questionId: 250,
    },

    {
      content: "u và i luôn biến thiên cùng tần số ",
      isCorrect: false,
      questionId: 251,
    },
    {
      content: "Mạch chỉ có điện trở u và i vuông pha ",
      isCorrect: false,
      questionId: 251,
    },
    {
      content: "Mạch chỉ có cuộn cảm thuần u sớm pha hơn i một góc π/2",
      isCorrect: false,
      questionId: 251,
    },
    {
      content: "Mạch chỉ có tụ điện u trễ pha hơn i một góc π/2",
      isCorrect: true,
      questionId: 251,
    },

    {
      content: "Dòng điện xoay chiều qua điện trở thuần R chỉ có tác dụng nhiệt. ",
      isCorrect: false,
      questionId: 252,
    },
    {
      content: "Điện áp ở hai đầu đoạn mạch chỉ có điện trở thuần biến thiên điều hòa cùng tần số với cường độ dòng điện. ",
      isCorrect: false,
      questionId: 252,
    },
    {
      content: "Cường độ dòng điện qua đoạn mạch chỉ có điện trở thuần biến thiên điều hòa cùng pha với điện áp. ",
      isCorrect: false,
      questionId: 252,
    },
    {
      content: " Nhiệt lượng tỏa ra ở điện trở thuần tỉ lệ với cường độ hiệu dụng qua nó. ",
      isCorrect: true,
      questionId: 252,
    },

    { content: " Dòng điện qua điện trở và điện áp hai đầu điện trở luôn cùng pha. ", isCorrect: false, questionId: 253 },
    { content: "Pha của dòng điện qua điện trở luôn bằng không. ", isCorrect: false, questionId: 253 },
    { content: "Mối liên hệ giữa cường độ dòng điện và điện áp hiệu dụng là U = I/R", isCorrect: false, questionId: 253 },
    { content: "Nếu điện áp ở hai đầu điện trở là u = U sin ( ωt + φ ) (V) ⇒ i = I sin ( ωt ) ( A )", isCorrect: true, questionId: 253 },

    {
      content:
        "Dòng điện qua điện trở và điện áp hai đầu điện trở luôn cùng pha. ",
      isCorrect: false,
      questionId: 254,
    },
    {
      content:
        "Pha của dòng điện qua điện trở luôn bằng không. ",
      isCorrect: false,
      questionId: 254,
    },
    {
      content: "Mối liên hệ giữa cường độ dòng điện và điện áp hiệu dụng là I = U/R",
      isCorrect: false,
      questionId: 254,
    },
    {
      content: "Nếu điện áp ở hai đầu điện trở là u = U sin ( ωt + φ ) (V) ⇒ i = I sin ( ωt ) ( A )",
      isCorrect: true,
      questionId: 254,
    },

    {
      content: "32kJ",
      isCorrect: false,
      questionId: 255,
    },
    {
      content: "66kJ",
      isCorrect: false,
      questionId: 255,
    },
    {
      content:
        "33000J",
      isCorrect: false,
      questionId: 255,
    },
    {
      content:
        "13,2kJ",
      isCorrect: true,
      questionId: 255,
    },

    { content: "62,8 V", isCorrect: false, questionId: 256 },
    {
      content: "47,1 V",
      isCorrect: false,
      questionId: 256,
    },
    {
      content: "15,7 V",
      isCorrect: false,
      questionId: 256,
    },
    { content: "31,4 V", isCorrect: true, questionId: 256 },

    {
      content:
        "5",
      isCorrect: false,
      questionId: 257,
    },
    {
      content:
        "4",
      isCorrect: false,
      questionId: 257,
    },
    {
      content: "10",
      isCorrect: false,
      questionId: 257,
    },
    {
      content: "8",
      isCorrect: true,
      questionId: 257,
    },

    { content: "0,02s", isCorrect: false, questionId: 258 },
    { content: "0,028s", isCorrect: false, questionId: 258 },
    { content: "0,014s", isCorrect: false, questionId: 258 },
    { content: "0,01s", isCorrect: true, questionId: 258 },

    { content: "R/√3", isCorrect: false, questionId: 259 },
    { content: "R√3 ", isCorrect: false, questionId: 259 },
    { content: "2R/√3", isCorrect: false, questionId: 259 },
    { content: "2R√3", isCorrect: true, questionId: 259 },

    {
      content: "I =2A",
      isCorrect: false,
      questionId: 260,
    },
    {
      content: "I =20A",
      isCorrect: false,
      questionId: 260,
    },
    {
      content: "2√2A",
      isCorrect: false,
      questionId: 260,
    },
    {
      content: "I =2A hoặc I =20A",
      isCorrect: true,
      questionId: 260,
    },
    //cate28
    {
      content: "Hiệu ứng quang điện chỉ xảy ra khi cường độ của chùm sáng kích thích đủ lớn.",
      isCorrect: false,
      questionId: 261,
    },
    {
      content: "Hiệu ứng quang điện vẫn xảy ra vì giới hạn quang điện của kẽm là ánh sáng nhìn thấy.",
      isCorrect: false,
      questionId: 261,
    },
    {
      content: "Hiệu ứng quang điện không xảy ra vì thủy tinh hấp thụ hết tia tử ngoại.",
      isCorrect: false,
      questionId: 261,
    },
    {
      content: "Hiệu ứng quang điện vẫn xảy ra vì thủy tinh hấp thụ hết tia tử ngoại.",
      isCorrect: true,
      questionId: 261,
    },

    {
      content:
        "Chiếu vào kim loại ánh sáng thích hợp.",
      isCorrect: false,
      questionId: 262,
    },
    {
      content: "Tấm kim loại bị nhiễm điện do tiếp xúc với vật đã bị nhiễm điện khác.",
      isCorrect: false,
      questionId: 262,
    },
    {
      content:
        "Kim loại bị nung nóng đến nhiệt độ rất cao.",
      isCorrect: false,
      questionId: 262,
    },
    {
      content: "Đặt tấm kim loại vào trong một điện trường mạnh.",
      isCorrect: true,
      questionId: 262,
    },

    {
      content: "λ0>λ",
      isCorrect: false,
      questionId: 263,
    },
    {
      content:
        "λ ≥ hc/λ0",
      isCorrect: false,
      questionId: 263,
    },
    {
      content:
        " λ<hc/λ0",
      isCorrect: false,
      questionId: 263,
    },
    {
      content:
        "λ≤λ0",
      isCorrect: true,
      questionId: 263,
    },

    {
      content:
        "Bước sóng dài nhất của bức xạ chiếu vào kim loại đó mà gây ra được hiện tượng quang điện.",
      isCorrect: false,
      questionId: 264,
    },
    {
      content: "Bước sóng ngắn nhất của bức xạ chiếu vào kim loại đó mà gây ra được hiện tượng quang điện.",
      isCorrect: false,
      questionId: 264,
    },
    {
      content: "Công nhỏ nhất dùng để bứt electron ra khỏi bề mặt kim loại đó.",
      isCorrect: false,
      questionId: 264,
    },
    {
      content:
        "Công lớn nhất dùng để bứt electron ra khỏi bề mặt kim loại đó.",
      isCorrect: true,
      questionId: 264,
    },

    {
      content: "ε=hf",
      isCorrect: false,
      questionId: 265,
    },
    {
      content: "ε=hcf",
      isCorrect: false,
      questionId: 265,
    },
    {
      content: "ε=hf",
      isCorrect: false,
      questionId: 265,
    },
    {
      content: "ε=cf",
      isCorrect: true,
      questionId: 265,
    },

    {
      content: " Tấm kẽm mất dần điện tích dương.",
      isCorrect: false,
      questionId: 266,
    },
    {
      content: "Tấm kẽm trở nên trung hòa về điện.",
      isCorrect: false,
      questionId: 266,
    },
    {
      content: "Tấm kẽm mất dần điện tích âm.",
      isCorrect: false,
      questionId: 266,
    },
    {
      content: "Điện tích âm của tấm kẽm không đổi",
      isCorrect: true,
      questionId: 266,
    },

    {
      content: "Bản chất của kim loại",
      isCorrect: false,
      questionId: 267,
    },
    {
      content: "Điện áp giữa anot và catot của tế bào quang điện.",
      isCorrect: false,
      questionId: 267,
    },
    {
      content: "Bước sóng của ánh sáng chiếu vào catot.",
      isCorrect: false,
      questionId: 267,
    },
    {
      content: "Điện trường giữa anot và catot.",
      isCorrect: true,
      questionId: 267,
    },

    {
      content:
        "λ3 ; λ4",
      isCorrect: false,
      questionId: 268,
    },
    {
      content: " λ1 ; λ2",
      isCorrect: false,
      questionId: 268,
    },
    {
      content: "Chỉ có λ1",
      isCorrect: false,
      questionId: 268,
    },
    {
      content: "λ1 ; λ2 ; λ3",
      isCorrect: true,
      questionId: 268,
    },

    {
      content:
        "Hiện tượng quang điện ngoài",
      isCorrect: false,
      questionId: 269,
    },
    {
      content:
        " Hiện tượng giao thoa ánh sáng",
      isCorrect: false,
      questionId: 269,
    },
    {
      content: "Hiện tượng quang – phát quang",
      isCorrect: false,
      questionId: 269,
    },
    {
      content: "Nguyên tắc hoạt động của pin quang điện",
      isCorrect: true,
      questionId: 269,
    },

    {
      content: "εL > εV > εĐ",
      isCorrect: false,
      questionId: 270,
    },
    {
      content:
        "εV > εL > εĐ",
      isCorrect: false,
      questionId: 270,
    },
    {
      content: "εL > εĐ > εV",
      isCorrect: false,
      questionId: 270,
    },
    {
      content: "εĐ > εV > εL",
      isCorrect: true,
      questionId: 270,
    },

    {
      content: "2,5T",
      isCorrect: false,
      questionId: 271,
    },
    {
      content: "-2,5T",
      isCorrect: false,
      questionId: 271,
    },
    {
      content: "1,5T",
      isCorrect: false,
      questionId: 271,
    },
    {
      content: "-2,5T",
      isCorrect: true,
      questionId: 271,
    },

    {
      content: "4,616 T",
      isCorrect: false,
      questionId: 272,
    },
    {
      content: "0,04251 T",
      isCorrect: false,
      questionId: 272,
    },
    {
      content: "0,4616 T",
      isCorrect: false,
      questionId: 272,
    },
    {
      content: "0,04338 T",
      isCorrect: true,
      questionId: 272,
    },

    { content: "2 μs", isCorrect: false, questionId: 273 },
    { content: "0,26 μs", isCorrect: false, questionId: 273 },
    { content: "0,36 μs", isCorrect: false, questionId: 273 },
    { content: "1 μs", isCorrect: true, questionId: 273 },

    {
      content:
        "3,5 eV",
      isCorrect: false,
      questionId: 274,
    },
    {
      content:
        "5,5 eV",
      isCorrect: false,
      questionId: 274,
    },
    {
      content: "1,5 eV",
      isCorrect: false,
      questionId: 274,
    },
    {
      content: "2,5 eV",
      isCorrect: true,
      questionId: 274,
    },

    {
      content: "2,5 m",
      isCorrect: false,
      questionId: 275,
    },
    {
      content: "0,2 m",
      isCorrect: false,
      questionId: 275,
    },
    {
      content:
        "1,6 m",
      isCorrect: false,
      questionId: 275,
    },
    {
      content:
        "1,8 m",
      isCorrect: true,
      questionId: 275,
    },

    { content: "Kali và đồng.", isCorrect: false, questionId: 276 },
    {
      content: "Kali và canxi",
      isCorrect: false,
      questionId: 276,
    },
    {
      content: "Bạc và đồng",
      isCorrect: false,
      questionId: 276,
    },
    { content: "Canxi và bạc", isCorrect: true, questionId: 276 },

    {
      content:
        "1,452.1014 Hz",
      isCorrect: false,
      questionId: 277,
    },
    {
      content:
        "1,596.1014 Hz",
      isCorrect: false,
      questionId: 277,
    },
    {
      content: "1,875.1014 Hz",
      isCorrect: false,
      questionId: 277,
    },
    {
      content: "1,956.1014 Hz",
      isCorrect: true,
      questionId: 277,
    },

    { content: "0,42 μm", isCorrect: false, questionId: 278 },
    { content: "1,00 μm", isCorrect: false, questionId: 278 },
    { content: "0,90 μm", isCorrect: false, questionId: 278 },
    { content: "1,45 μm", isCorrect: true, questionId: 278 },

    { content: "5,38", isCorrect: false, questionId: 279 },
    { content: "3,72", isCorrect: false, questionId: 279 },
    { content: "1,89", isCorrect: false, questionId: 279 },
    { content: "2,62", isCorrect: true, questionId: 279 },

    {
      content: "Xảy ra với bức xạ λ2 , không xảy ra với bức xạ null",
      isCorrect: false,
      questionId: 280,
    },
    {
      content: "Xảy ra với bức xạ λ1 , không xảy ra với bức xạ λ2",
      isCorrect: false,
      questionId: 280,
    },
    {
      content: "Xảy ra với cả 2 bức xạ",
      isCorrect: false,
      questionId: 280,
    },
    {
      content: "Không xảy ra với cả 2 bức xạ",
      isCorrect: true,
      questionId: 280,
    },
    //cate29
    {
      content: "Sự phân tách ánh sáng đơn sắc thành các ánh sáng màu",
      isCorrect: false,
      questionId: 281,
    },
    {
      content: " Sự phân tách một chùm ánh sáng đỏ thành các chùm sáng đơn sắc",
      isCorrect: false,
      questionId: 281,
    },
    {
      content: "Sự phân tách một chùm ánh sáng phức tạp thành các chùm sáng đơn sắc",
      isCorrect: false,
      questionId: 281,
    },
    {
      content: "Sự phân tách một chùm ánh sáng tím thành các chùm sáng đơn sắc",
      isCorrect: true,
      questionId: 281,
    },

    {
      content:
        "Giao thoa ánh sáng",
      isCorrect: false,
      questionId: 282,
    },
    {
      content: "Tán sắc ánh sáng",
      isCorrect: false,
      questionId: 282,
    },
    {
      content:
        "Nhiễu xạ ánh sáng",
      isCorrect: false,
      questionId: 282,
    },
    {
      content: "Phản xạ ánh sáng",
      isCorrect: true,
      questionId: 282,
    },

    {
      content: "Sự nhiễu xạ ánh sáng",
      isCorrect: false,
      questionId: 283,
    },
    {
      content:
        "Sự giao thoa ánh sáng",
      isCorrect: false,
      questionId: 283,
    },
    {
      content:
        "Sự tán sắc ánh sáng",
      isCorrect: false,
      questionId: 283,
    },
    {
      content:
        "Sự phản xạ ánh sáng",
      isCorrect: true,
      questionId: 283,
    },

    {
      content:
        "Tần số của ánh sáng đỏ nhỏ hơn tần số của ánh sáng tím",
      isCorrect: false,
      questionId: 284,
    },
    {
      content: "Ánh sáng đơn sắc không bị tán sắc khi truyền qua lăng kính",
      isCorrect: false,
      questionId: 284,
    },
    {
      content: "Chiết suất của một môi trường trong suốt đối với các ánh sáng đơn sắc khác nhau là khác nhau",
      isCorrect: false,
      questionId: 284,
    },
    {
      content:
        "Chiết suất của thủy tinh đối với ánh sáng đỏ lớn hơn chiết suất của thủy tinh đối với ánh sáng lục",
      isCorrect: true,
      questionId: 284,
    },

    {
      content: "Hiện tượng tán sắc ánh sáng là hiện tượng khi một chùm ánh sáng phức tạp truyền qua một lăng kính bị phân tách thành các sáng đơn sắc khác nhau",
      isCorrect: false,
      questionId: 285,
    },
    {
      content: "Ánh sáng trắng là tập hợp của vô số ánh sáng đơn sắc khác nhau, có màu biến thiên liên tục từ đỏ đến tím",
      isCorrect: false,
      questionId: 285,
    },
    {
      content: "Ánh sáng có bước sóng càng dài thì chiết suất của môi trường đối với ánh sáng càng lớn ",
      isCorrect: false,
      questionId: 285,
    },
    {
      content: "Ánh sáng đơn sắc không bị tán sắc khi đi qua lăng kính",
      isCorrect: true,
      questionId: 285,
    },

    {
      content: "Chiết suất tuyệt đối của ánh sáng tím lớn nhất",
      isCorrect: false,
      questionId: 286,
    },
    {
      content: "Vận tốc truyền ánh sáng của ánh sáng tím lớn nhất",
      isCorrect: false,
      questionId: 286,
    },
    {
      content: "Góc lệch khi đi qua lăng kính của ánh sáng tím nhỏ nhất",
      isCorrect: false,
      questionId: 286,
    },
    {
      content: "Chiết suất tuyệt đối của ánh sáng cam lớn hơn của ánh sáng chàm",
      isCorrect: true,
      questionId: 286,
    },

    {
      content: "Lục",
      isCorrect: false,
      questionId: 287,
    },
    {
      content: "Cam",
      isCorrect: false,
      questionId: 287,
    },
    {
      content: "Đỏ",
      isCorrect: false,
      questionId: 287,
    },
    {
      content: "Tím",
      isCorrect: true,
      questionId: 287,
    },

    {
      content:
        "Có màu trắng dù chiếu xiên hay vuông góc",
      isCorrect: false,
      questionId: 288,
    },
    {
      content: "Có nhiều màu dù chiếu xien hay chiếu vuông góc",
      isCorrect: false,
      questionId: 288,
    },
    {
      content: "Có nhiều màu khi chiếu xiên và có màu trắng khi chiếu vuông góc",
      isCorrect: false,
      questionId: 288,
    },
    {
      content: "Chỉ có một màu dù chiếu xiên hay chiếu vuông góc",
      isCorrect: true,
      questionId: 288,
    },

    {
      content:
        "Tần số không đổi nhưng bước sóng thay đổi",
      isCorrect: false,
      questionId: 289,
    },
    {
      content:
        "Bước sóng không đổi nhưng tần số thay đổi",
      isCorrect: false,
      questionId: 289,
    },
    {
      content: "Tần số và bước sóng đều không đổi",
      isCorrect: false,
      questionId: 289,
    },
    {
      content: "Tần số và bước sóng đều thay đổi",
      isCorrect: true,
      questionId: 289,
    },

    {
      content: "Tần số, bước sóng, vận tốc",
      isCorrect: false,
      questionId: 290,
    },
    {
      content:
        "Bước sóng và màu sắc",
      isCorrect: false,
      questionId: 290,
    },
    {
      content: "Tần số và màu sắc",
      isCorrect: false,
      questionId: 290,
    },
    {
      content: "Tần số, bước sóng, vận tốc và màu sắc",
      isCorrect: true,
      questionId: 290,
    },

    {
      content: "2,5 Cm",
      isCorrect: false,
      questionId: 291,
    },
    {
      content: "1,25 Cm",
      isCorrect: false,
      questionId: 291,
    },
    {
      content: "2 Cm",
      isCorrect: false,
      questionId: 291,
    },
    {
      content: "1,5 Cm",
      isCorrect: true,
      questionId: 291,
    },

    {
      content: "6,28 mm",
      isCorrect: false,
      questionId: 292,
    },
    {
      content: "12,57 mm",
      isCorrect: false,
      questionId: 292,
    },
    {
      content: "9,30 mm",
      isCorrect: false,
      questionId: 292,
    },
    {
      content: "0,72 mm",
      isCorrect: true,
      questionId: 292,
    },

    { content: "Dải màu từ đỏ đến tím", isCorrect: false, questionId: 293 },
    { content: "Dải màu từ vàng đến tím", isCorrect: false, questionId: 293 },
    { content: "Dải sáng trắng", isCorrect: false, questionId: 293 },
    { content: "Dải màu từ đỏ đến vàng", isCorrect: true, questionId: 293 },

    {
      content:
        "0,2 rad",
      isCorrect: false,
      questionId: 294,
    },
    {
      content:
        "0,2∘",
      isCorrect: false,
      questionId: 294,
    },
    {
      content: "0,02 rad",
      isCorrect: false,
      questionId: 294,
    },
    {
      content: "0,02∘",
      isCorrect: true,
      questionId: 294,
    },

    {
      content: "6,28 mm",
      isCorrect: false,
      questionId: 295,
    },
    {
      content: "12,57 mm",
      isCorrect: false,
      questionId: 295,
    },
    {
      content:
        "9,03 mm",
      isCorrect: false,
      questionId: 295,
    },
    {
      content:
        "0,72 mm",
      isCorrect: true,
      questionId: 295,
    },

    { content: "Phân tích một chùm sáng phức tạp thành những thành phần đơn sắc.", isCorrect: false, questionId: 296 },
    {
      content: "Đo bước sóng các vạch phổ.",
      isCorrect: false,
      questionId: 296,
    },
    {
      content: "Tiến hành các phép phân tích quang phổ.",
      isCorrect: false,
      questionId: 296,
    },
    { content: "Quan sát và chụp quang phổ của các vật.", isCorrect: true, questionId: 296 },

    {
      content:
        "Quang phổ liên tục của nguyên tố nào thì đặc trưng cho nguyên tố đó",
      isCorrect: false,
      questionId: 297,
    },
    {
      content:
        "Các chất khí ở áp suất lớn bị nung nóng thì phát ra quang phổ vạch",
      isCorrect: false,
      questionId: 297,
    },
    {
      content: " Mỗi nguyên tố hóa học có một quang phổ vạch đặc trưng của nguyên tố ấy",
      isCorrect: false,
      questionId: 297,
    },
    {
      content: "Các chất rắn bị nung nóng thì phát ra quang phổ vạch",
      isCorrect: true,
      questionId: 297,
    },

    { content: "nhiễu xạ ánh sáng. ", isCorrect: false, questionId: 298 },
    { content: "tăng cường chùm sáng.", isCorrect: false, questionId: 298 },
    { content: "tán sắc ánh sáng.", isCorrect: false, questionId: 298 },
    { content: "giao thoa ánh sáng.", isCorrect: true, questionId: 298 },

    { content: "Tập hợp nhiều chùm song song, mỗi chùm có một màu.", isCorrect: false, questionId: 299 },
    { content: "Chùm tia hội tụ gồm nhiều màu đơn sắc khác nhau. ", isCorrect: false, questionId: 299 },
    { content: "Tập hợp nhiều chùm tia song song màu trắng.", isCorrect: false, questionId: 299 },
    { content: "Chùm phân kì gồm nhiều màu đơn sắc khác nhau.", isCorrect: true, questionId: 299 },

    {
      content: "Ánh sáng trắng",
      isCorrect: false,
      questionId: 300,
    },
    {
      content: "Một dải có màu từ đỏ đến tím nối liền nhau một cách liên tục.",
      isCorrect: false,
      questionId: 300,
    },
    {
      content: "Các vạch màu sáng, tối xen kẽ nhau.",
      isCorrect: false,
      questionId: 300,
    },
    {
      content: "Bảy vạch sáng từ đỏ đến tím, ngăn cách nhau bằng những khoảng tối",
      isCorrect: true,
      questionId: 300,
    },

    //cate11
    {
      content: "Kim ngạch xuất khẩu nhìn chung tăng qua các năm.",
      isCorrect: false,
      questionId: 301,
    },
    {
      content: "Hoa Kì, Trung Quốc, Nhật Bản là các thị trường lớn.",
      isCorrect: false,
      questionId: 301,
    },
    {
      content: "Kim ngạch xuất khẩu luôn luôn cao hơn nhập khẩu.",
      isCorrect: false,
      questionId: 301,
    },
    {
      content: "Thị trường được mở rộng và đa dạng hóa.",
      isCorrect: true,
      questionId: 301,
    },

    {
      content:
        "Công nghiệp.",
      isCorrect: false,
      questionId: 302,
    },
    {
      content: "Dịch vụ.",
      isCorrect: false,
      questionId: 302,
    },
    {
      content:
        "Nông nghiệp.",
      isCorrect: false,
      questionId: 302,
    },
    {
      content: "Thương mại.",
      isCorrect: true,
      questionId: 302,
    },

    {
      content: "ASEAN",
      isCorrect: false,
      questionId: 303,
    },
    {
      content:
        "WTO",
      isCorrect: false,
      questionId: 303,
    },
    {
      content:
        "OPEC",
      isCorrect: false,
      questionId: 303,
    },
    {
      content:
        "APEC",
      isCorrect: true,
      questionId: 303,
    },

    {
      content:
        "Lào",
      isCorrect: false,
      questionId: 304,
    },
    {
      content: "Bru-nây",
      isCorrect: false,
      questionId: 304,
    },
    {
      content: "Việt Nam",
      isCorrect: false,
      questionId: 304,
    },
    {
      content:
        "Mi-an-ma",
      isCorrect: true,
      questionId: 304,
    },

    {
      content: "đẩy mạnh hội nhập kinh tế quốc tế để tăng thêm sức mạnh quốc gia",
      isCorrect: false,
      questionId: 305,
    },
    {
      content: "đẩy mạnh phát triển kinh tế ở các vùng núi, biên giới, hải đảo, vùng sâu, vùng xa.",
      isCorrect: false,
      questionId: 305,
    },
    {
      content: "phát triển nền văn hoá mới đậm đà bản sắc dân tộc. ",
      isCorrect: false,
      questionId: 305,
    },
    {
      content: "đẩy mạnh công nghiệp hoá, hiện đại hoá gắn với phát triển tri thức.",
      isCorrect: true,
      questionId: 305,
    },

    {
      content: "1987",
      isCorrect: false,
      questionId: 306,
    },
    {
      content: "1979",
      isCorrect: false,
      questionId: 306,
    },
    {
      content: "1986",
      isCorrect: false,
      questionId: 306,
    },
    {
      content: "1976",
      isCorrect: true,
      questionId: 306,
    },

    {
      content: "1992",
      isCorrect: false,
      questionId: 307,
    },
    {
      content: "1993",
      isCorrect: false,
      questionId: 307,
    },
    {
      content: "1995",
      isCorrect: false,
      questionId: 307,
    },
    {
      content: "1999",
      isCorrect: true,
      questionId: 307,
    },

    {
      content:
        "Dân chủ hóa đời sống kinh tế xã hội.",
      isCorrect: false,
      questionId: 308,
    },
    {
      content: "Xây dựng nền kinh tế thị trường, đinh hướng XHCN",
      isCorrect: false,
      questionId: 308,
    },
    {
      content: "Tăng cường giao lưu hợp tác với các nước.",
      isCorrect: false,
      questionId: 308,
    },
    {
      content: "Xây dựng nền kinh tế quan liêu bao cấp.",
      isCorrect: true,
      questionId: 308,
    },

    {
      content:
        "Du lịch phát triển mạnh.",
      isCorrect: false,
      questionId: 309,
    },
    {
      content:
        "Thu hút được nhiều vốn đầu tư nước ngoài.",
      isCorrect: false,
      questionId: 309,
    },
    {
      content: "Xuất khẩu lao động ngày càng tăng.",
      isCorrect: false,
      questionId: 309,
    },
    {
      content: "Thúc đẩy nông nghiệp phát triển.",
      isCorrect: true,
      questionId: 309,
    },

    {
      content: "tăng cường đầu tư, hợp tác với nước ngoài.",
      isCorrect: false,
      questionId: 310,
    },
    {
      content:
        "đẩy mạnh tăng trưởng và xóa đói giảm nghèo.",
      isCorrect: false,
      questionId: 310,
    },
    {
      content: "đẩy mạnh quá trình công nghiệp hóa, hiện đại hóa.",
      isCorrect: false,
      questionId: 310,
    },
    {
      content: "khai thác hợp lí nguồn tài nguyên thiên nhiên.",
      isCorrect: true,
      questionId: 310,
    },

    {
      content: "Cà phê, cao su, hồ tiêu.",
      isCorrect: false,
      questionId: 311,
    },
    {
      content: " Cao su, chè, hồ tiêu.",
      isCorrect: false,
      questionId: 311,
    },
    {
      content: "Cà phê, cao su, chè.",
      isCorrect: false,
      questionId: 311,
    },
    {
      content: "Cà phê, chè, hồ tiêu.",
      isCorrect: true,
      questionId: 311,
    },

    {
      content: "Phát triển khoa học - kĩ thuật - công nghệ; giáo dục và đào tạo.",
      isCorrect: false,
      questionId: 312,
    },
    {
      content: "Đầu tư phát triển các ngành công nghiệp nặng, coi đó là khâu then chốt.",
      isCorrect: false,
      questionId: 312,
    },
    {
      content: "Phát triển công nghiệp nhẹ, nông nghiệp gắn với công nghiệp chế biến.",
      isCorrect: false,
      questionId: 312,
    },
    {
      content: "Gia nhập APEC và bình thường hoá quan hệ với Hoa Kì.",
      isCorrect: true,
      questionId: 312,
    },

    { content: "1995", isCorrect: false, questionId: 313 },
    { content: "1997", isCorrect: false, questionId: 313 },
    { content: "1967", isCorrect: false, questionId: 313 },
    { content: "1999", isCorrect: true, questionId: 313 },

    {
      content:
        "tăng mạnh thi trường Đông Nam Á.",
      isCorrect: false,
      questionId: 314,
    },
    {
      content:
        "chú trọng vào thị trường Nga và Đông Âu.",
      isCorrect: false,
      questionId: 314,
    },
    {
      content: "đa dạng hóa và đa phương hóa.",
      isCorrect: false,
      questionId: 314,
    },
    {
      content: "tiếp cận với thị trường châu Phi, châu Mĩ.",
      isCorrect: true,
      questionId: 314,
    },

    {
      content: "2000",
      isCorrect: false,
      questionId: 315,
    },
    {
      content: "2002",
      isCorrect: false,
      questionId: 315,
    },
    {
      content:
        "2005",
      isCorrect: false,
      questionId: 315,
    },
    {
      content:
        "2007",
      isCorrect: true,
      questionId: 315,
    },

    { content: "thực hiện chiến lược toàn diện về tăng trưởng và xóa đói giảm nghèo.", isCorrect: false, questionId: 316 },
    {
      content: "phát triển kinh tế một cách nhanh chóng dựa trên tài nguyên sẵn có.",
      isCorrect: false,
      questionId: 316,
    },
    {
      content: "đẩy mạnh hội nhập kinh tế quốc tế để tăng tiềm lực kinh tế quốc gia.",
      isCorrect: false,
      questionId: 316,
    },
    { content: "đẩy mạnh công nghiệp hóa, hiện đại hóa gắn với nền kinh tế tri thức.", isCorrect: true, questionId: 316 },

    {
      content:
        "Đẩy mạnh hội nhập kinh tế quốc tế để tăng thêm sức mạnh quốc gia.",
      isCorrect: false,
      questionId: 317,
    },
    {
      content:
        "Đẩy mạnh công nghiệp hoá, hiện đại hoá gắn với phát triển tri thức.",
      isCorrect: false,
      questionId: 317,
    },
    {
      content: "Đẩy mạnh phát triển kinh tế ở các vùng núi, biên giới, vùng sâu,...",
      isCorrect: false,
      questionId: 317,
    },
    {
      content: "Phát triển nền văn hoá mới mang đậm đà bản sắc dân tộc.",
      isCorrect: true,
      questionId: 317,
    },

    { content: "Cuối thập kỉ 60 của thế kỉ XX và đầu tiên từ lĩnh vực công nghiệp nặng.", isCorrect: false, questionId: 318 },
    { content: "Đầu thập kỉ 70 của thế kỉ XX và đầu tiên từ lĩnh vực công nghiệp nhẹ và dịch vụ.", isCorrect: false, questionId: 318 },
    { content: "Từ năm 1979 và đầu tiên lĩnh vực nông nghiệp khoán sản phẩm trong hợp tác xã.", isCorrect: false, questionId: 318 },
    { content: "Từ năm 1986 và đầu tiên trong lĩnh vực công nghiệp, sau đó là nông nghiệp, dịch vụ.", isCorrect: true, questionId: 318 },

    { content: "công nghiệp. ", isCorrect: false, questionId: 319 },
    { content: "công - nông nghiệp.", isCorrect: false, questionId: 319 },
    { content: "nông - công nghiệp.", isCorrect: false, questionId: 319 },
    { content: " nông nghiệp lạc hậu.", isCorrect: true, questionId: 319 },

    {
      content: "hàng hóa của nước ta được nhiều nước ưa dùng.",
      isCorrect: false,
      questionId: 320,
    },
    {
      content: "chính sách hướng ra xuất khẩu, tự do hóa thương mại. ",
      isCorrect: false,
      questionId: 320,
    },
    {
      content: "nhiều sản phẩm với giá thành sản phẩm xuất khẩu thấp.",
      isCorrect: false,
      questionId: 320,
    },
    {
      content: "bình thường hóa quan hệ và kí kết các hiệp định thương mại với Hoa Kì.",
      isCorrect: true,
      questionId: 320,
    },
    //cate12
    {
      content: "Tăng tỉ trọng khu vực III, giảm tỉ trọng khu vực II.",
      isCorrect: false,
      questionId: 321,
    },
    {
      content: "Tăng tỉ trọng khu vực I, giảm tỉ trọng khu vực II.",
      isCorrect: false,
      questionId: 321,
    },
    {
      content: "Tăng tỉ trọng khu vực II, giảm ti trọng khu vực I.",
      isCorrect: false,
      questionId: 321,
    },
    {
      content: "Tăng ti trọng khu vực II, giảm tỉ trọng khu vực III.",
      isCorrect: true,
      questionId: 321,
    },

    {
      content:
        "Giảm tỉ trọng công nghiệp chế biến.",
      isCorrect: false,
      questionId: 322,
    },
    {
      content: "Tăng tỉ trọng công nghiệp chế biến.",
      isCorrect: false,
      questionId: 322,
    },
    {
      content:
        "Giảm tỉ trọng công nghiệp khai thác.",
      isCorrect: false,
      questionId: 322,
    },
    {
      content: "Giảm tỉ trọng công nghiệp sản xuất, phân phối điện, khí đốt, nước.",
      isCorrect: true,
      questionId: 322,
    },

    {
      content: "Kinh tế nhà nước.",
      isCorrect: false,
      questionId: 323,
    },
    {
      content:
        "Kinh tế tập thể.",
      isCorrect: false,
      questionId: 323,
    },
    {
      content:
        "Kinh tế có vốn đầu tư nước ngoài.",
      isCorrect: false,
      questionId: 323,
    },
    {
      content:
        "Kinh tế tư nhân.",
      isCorrect: true,
      questionId: 323,
    },

    {
      content:
        "Hà Nội, TP. Hồ Chí Minh.",
      isCorrect: false,
      questionId: 324,
    },
    {
      content: "TP. Hồ Chí Minh, Đà Nẵng.",
      isCorrect: false,
      questionId: 324,
    },
    {
      content: "Hà Nội, Hải Phòng.",
      isCorrect: false,
      questionId: 324,
    },
    {
      content:
        "Hải Phòng, Đà Nẵng.",
      isCorrect: true,
      questionId: 324,
    },

    {
      content: "TP. Hồ Chí Minh.",
      isCorrect: false,
      questionId: 325,
    },
    {
      content: "Bà Rịa – Vũng Tàu.",
      isCorrect: false,
      questionId: 325,
    },
    {
      content: "Bình Định.",
      isCorrect: false,
      questionId: 325,
    },
    {
      content: "Khánh Hòa.",
      isCorrect: true,
      questionId: 325,
    },

    {
      content: "Quy Nhơn",
      isCorrect: false,
      questionId: 326,
    },
    {
      content: "Phú Yên",
      isCorrect: false,
      questionId: 326,
    },
    {
      content: "Quảng Ngãi",
      isCorrect: false,
      questionId: 326,
    },
    {
      content: "Ninh Thuận",
      isCorrect: true,
      questionId: 326,
    },

    {
      content: "Giữ vai trò chủ đạo trong nền kinh tế.",
      isCorrect: false,
      questionId: 327,
    },
    {
      content: "Quản lí các ngành và lĩnh vực kinh tế then chốt.",
      isCorrect: false,
      questionId: 327,
    },
    {
      content: "Tỉ trọng trong cơ cấu GDP ngày càng giảm.",
      isCorrect: false,
      questionId: 327,
    },
    {
      content: "Chiếm tỉ trọng lớn nhất trong cơ cấu GDP.",
      isCorrect: true,
      questionId: 327,
    },

    {
      content:
        "viễn thông, tư vấn đầu tư, thương mại.",
      isCorrect: false,
      questionId: 328,
    },
    {
      content: "viễn thông, ngân hàng, chuyển giao công nghệ.",
      isCorrect: false,
      questionId: 328,
    },
    {
      content: "viễn thông, tư vấn đầu tư, chuyển giao công nghệ.",
      isCorrect: false,
      questionId: 328,
    },
    {
      content: "viễn thông, tư vấn đầu tư, giao thông vận tải.",
      isCorrect: true,
      questionId: 328,
    },

    {
      content:
        "Tỉ trọng nông - lâm - thủy sản giảm.",
      isCorrect: false,
      questionId: 329,
    },
    {
      content:
        "Tỉ trọng công nghiệp - xây dựng tăng.",
      isCorrect: false,
      questionId: 329,
    },
    {
      content: "Tỉ trọng dịch vụ biến động.",
      isCorrect: false,
      questionId: 329,
    },
    {
      content: "Tỉ trọng khu vực dịch vụ tăng.",
      isCorrect: true,
      questionId: 329,
    },

    {
      content: "Phát huy lợi thế về đất đai, khí hậu.",
      isCorrect: false,
      questionId: 330,
    },
    {
      content:
        "Chuyển nền nông nghiệp sang sản xuất hàng hoá.",
      isCorrect: false,
      questionId: 330,
    },
    {
      content: " Nâng cao hiệu quả kinh tế nông nghiệp.",
      isCorrect: false,
      questionId: 330,
    },
    {
      content: "Tạo ra nhiều sản phẩm xuất khẩu.",
      isCorrect: true,
      questionId: 330,
    },

    {
      content: "Tỉ trọng dịch vụ nông nghiệp thấp, ít chuyển biến",
      isCorrect: false,
      questionId: 331,
    },
    {
      content: "Tăng tỉ trọng của nông nghiệp, giảm tỉ trọng của ngư nghiệp.",
      isCorrect: false,
      questionId: 331,
    },
    {
      content: "Giảm tỉ trọng ngành trồng trọt, tăng tỉ trọng ngành chăn nuôi.",
      isCorrect: false,
      questionId: 331,
    },
    {
      content: "Giảm tỉ trọng cây lương thực thực, tăng tỉ trọng cây công nghiệp.",
      isCorrect: true,
      questionId: 331,
    },

    {
      content: "sự chuyển dịch cơ cấu kinh tế và phân hóa sản xuất giữa các vùng.",
      isCorrect: false,
      questionId: 332,
    },
    {
      content: "phân hóa sản xuất giữa các vùng và hình thành vùng kinh tế trọng điểm.",
      isCorrect: false,
      questionId: 332,
    },
    {
      content: "chuyển dịch cơ cấu kinh tế và hình các trung tâm công nghiệp.",
      isCorrect: false,
      questionId: 332,
    },
    {
      content: "hình thành vùng kinh tế trọng điểm và dich vụ tư vấn đầu tư.",
      isCorrect: true,
      questionId: 332,
    },

    { content: "tận dụng các thế mạnh về khoáng sản, nguồn lao động.", isCorrect: false, questionId: 333 },
    { content: "phù hợp hơn với yêu cầu của thị trường và sử dụng tốt lao động.", isCorrect: false, questionId: 333 },
    { content: "phù hợp với yêu cầu của thị trường và tăng hiệu quả đầu tư. ", isCorrect: false, questionId: 333 },
    { content: "tăng hiệu quả đầu tư và tận dụng các thế mạnh về khoáng sản.", isCorrect: true, questionId: 333 },

    {
      content:
        "Chính trị ổn định.",
      isCorrect: false,
      questionId: 334,
    },
    {
      content:
        "Tài nguyên và lao động dồi dào.",
      isCorrect: false,
      questionId: 334,
    },
    {
      content: "Có luật đầu tư hấp dẫn.",
      isCorrect: false,
      questionId: 334,
    },
    {
      content: "Vị trí địa lý thuận lợi.",
      isCorrect: true,
      questionId: 334,
    },

    {
      content: "Cải thiện chất lượng tăng trưởng kinh tế.",
      isCorrect: false,
      questionId: 335,
    },
    {
      content: "Đẩy nhanh tốc độ tăng trưởng kinh tế.",
      isCorrect: false,
      questionId: 335,
    },
    {
      content:
        "Đảm bảo tăng trưởng kinh tế bền vững.",
      isCorrect: false,
      questionId: 335,
    },
    {
      content:
        "Nâng cao sức cạnh tranh của nền kinh tế.",
      isCorrect: true,
      questionId: 335,
    },

    { content: "TP. Hồ Chí Minh, Đà Nẵng, Hải Phòng.", isCorrect: false, questionId: 336 },
    {
      content: "Hà Nội, Đà Nẵng, Hải Phòng. ",
      isCorrect: false,
      questionId: 336,
    },
    {
      content: "Hải Phòng, Cần Thơ, Hà Nội.",
      isCorrect: false,
      questionId: 336,
    },
    { content: " Hà Nội, Hải Phòng, TP. Hồ Chí Minh", isCorrect: true, questionId: 336 },

    {
      content:
        "Đồng Hới.",
      isCorrect: false,
      questionId: 337,
    },
    {
      content:
        "Đông Hà.",
      isCorrect: false,
      questionId: 337,
    },
    {
      content: "Hồng Lĩnh.",
      isCorrect: false,
      questionId: 337,
    },
    {
      content: "Cửa Lò.",
      isCorrect: true,
      questionId: 337,
    },

    { content: "Biên Hòa.", isCorrect: false, questionId: 338 },
    { content: "Hà Nội.", isCorrect: false, questionId: 338 },
    { content: "Đà Nẵng.", isCorrect: false, questionId: 338 },
    { content: "Cần Thơ.", isCorrect: true, questionId: 338 },

    { content: "Đồng Hới, Hưng Yên, Tân An, Kon Tum.", isCorrect: false, questionId: 339 },
    { content: "Thái Bình, Đà Lạt, Cà Mau, Trà Vinh.", isCorrect: false, questionId: 339 },
    { content: "Sơn La, Thái Nguyên, Pleiku, Cao Bằng.", isCorrect: false, questionId: 339 },
    { content: "Lạng Sơn, Quy Nhơn, Vĩnh Long, Quảng Trị.", isCorrect: true, questionId: 339 },

    {
      content: "Đền Hùng, Chùa Hương, Bà Chúa Xứ.",
      isCorrect: false,
      questionId: 340,
    },
    {
      content: "Hội chọi trâu, Phú Giầy, Tây Sơn.",
      isCorrect: false,
      questionId: 340,
    },
    {
      content: "Yên Tử, Hội chọi trâu, Cổ Loa.",
      isCorrect: false,
      questionId: 340,
    },
    {
      content: "Cổ Loa, Phú Giầy, Chùa Hương.",
      isCorrect: true,
      questionId: 340,
    },
    //cate13
    {
      content: "tây - đông.",
      isCorrect: false,
      questionId: 341,
    },
    {
      content: "bắc - nam.",
      isCorrect: false,
      questionId: 341,
    },
    {
      content: "tây nam - đông bắc.",
      isCorrect: false,
      questionId: 341,
    },
    {
      content: "tây bắc - đông nam.",
      isCorrect: true,
      questionId: 341,
    },

    {
      content:
        "bắc - nam.",
      isCorrect: false,
      questionId: 342,
    },
    {
      content: "tây nam - đông bắc.",
      isCorrect: false,
      questionId: 342,
    },
    {
      content:
        "tây bắc - đông nam.",
      isCorrect: false,
      questionId: 342,
    },
    {
      content: "tây - đông.",
      isCorrect: true,
      questionId: 342,
    },

    {
      content: "vòng cung.",
      isCorrect: false,
      questionId: 343,
    },
    {
      content:
        "tây bắc - đông nam.",
      isCorrect: false,
      questionId: 343,
    },
    {
      content:
        "tây - đông.",
      isCorrect: false,
      questionId: 343,
    },
    {
      content:
        "bắc - nam.",
      isCorrect: true,
      questionId: 343,
    },

    {
      content:
        "địa hình dốc, bị chia cắt mạnh. ",
      isCorrect: false,
      questionId: 344,
    },
    {
      content: "nhiều hẻm vực, lắm sông suối.",
      isCorrect: false,
      questionId: 344,
    },
    {
      content: "hạn hán, ngập lụt thường xuyên.",
      isCorrect: false,
      questionId: 344,
    },
    {
      content:
        "xói mòn và trượt lở đất nhiều.",
      isCorrect: true,
      questionId: 344,
    },

    {
      content: "Địa hình vùng nhiệt đới ẩm gió mùa.",
      isCorrect: false,
      questionId: 345,
    },
    {
      content: "Hầu hết là địa hình núi cao.",
      isCorrect: false,
      questionId: 345,
    },
    {
      content: "Có sự phân bậc rõ rệt theo độ cao.",
      isCorrect: false,
      questionId: 345,
    },
    {
      content: "Đồi núi chiếm phần lớn diện tích.",
      isCorrect: true,
      questionId: 345,
    },

    {
      content: "chịu tác động của Tín phong bán cầu Bắc.",
      isCorrect: false,
      questionId: 346,
    },
    {
      content: "chịu tác động của gió mùa Tây Nam.",
      isCorrect: false,
      questionId: 346,
    },
    {
      content: "địa hình phân hóa đa dạng.",
      isCorrect: false,
      questionId: 346,
    },
    {
      content: "địa hình chủ yếu là đồi núi thấp.",
      isCorrect: true,
      questionId: 346,
    },

    {
      content: "Có các cao nguyen badan xếp tầng.",
      isCorrect: false,
      questionId: 347,
    },
    {
      content: "Có nhiều núi cao hàng đầu cả nước.",
      isCorrect: false,
      questionId: 347,
    },
    {
      content: "Hướng chủ yếu là tây bắc – đông nam.",
      isCorrect: false,
      questionId: 347,
    },
    {
      content: "Gồm nhiều dãy núi chạy song song.",
      isCorrect: true,
      questionId: 347,
    },

    {
      content:
        "núi cao. ",
      isCorrect: false,
      questionId: 348,
    },
    {
      content: "đồi núi thấp.",
      isCorrect: false,
      questionId: 348,
    },
    {
      content: "đồng bằng.",
      isCorrect: false,
      questionId: 348,
    },
    {
      content: "núi trung bình.",
      isCorrect: true,
      questionId: 348,
    },

    {
      content:
        "Vùng bán bình nguyên.",
      isCorrect: false,
      questionId: 349,
    },
    {
      content:
        " Vùng đồi trung du.",
      isCorrect: false,
      questionId: 349,
    },
    {
      content: "Dãy núi vùng Đông Bắc.",
      isCorrect: false,
      questionId: 349,
    },
    {
      content: "Dãy núi vùng Tây Bắc.",
      isCorrect: true,
      questionId: 349,
    },

    {
      content: "Tây Nguyên.",
      isCorrect: false,
      questionId: 350,
    },
    {
      content:
        "Đông Nam Bộ.",
      isCorrect: false,
      questionId: 350,
    },
    {
      content: "Trung du và miền núi Bắc Bộ.",
      isCorrect: false,
      questionId: 350,
    },
    {
      content: "Bắc Trung Bộ.",
      isCorrect: true,
      questionId: 350,
    },

    {
      content: "Xói mòn, rửa trôi.",
      isCorrect: false,
      questionId: 351,
    },
    {
      content: "Địa hình hiểm trở, chia cắt mạnh.",
      isCorrect: false,
      questionId: 351,
    },
    {
      content: " Ngập lụt.",
      isCorrect: false,
      questionId: 351,
    },
    {
      content: "Lở đất, lũ quét.",
      isCorrect: true,
      questionId: 351,
    },

    {
      content: "Địa hình cao hơn phía đông cao hơn phía tây.",
      isCorrect: false,
      questionId: 352,
    },
    {
      content: "Vùng núi gồm các khối núi và cao nguyên.",
      isCorrect: false,
      questionId: 352,
    },
    {
      content: "Tính bất đối xứng giữa 2 sườn rõ nét.",
      isCorrect: false,
      questionId: 352,
    },
    {
      content: "Địa hình của sườn đông thoải, phía tây dốc.",
      isCorrect: true,
      questionId: 352,
    },

    { content: "Tây Bắc là khu vực núi cao đồ sộ bậc nhất nước ta.", isCorrect: false, questionId: 353 },
    { content: "Trường Sơn Nam gồm khối núi và cao nguyên.", isCorrect: false, questionId: 353 },
    { content: "Đông Bắc là vùng núi thấp, chạy theo hướng Tây Bắc – Đông Nam.", isCorrect: false, questionId: 353 },
    { content: "Trường Sơn Bắc là các dãy núi song song, so le nhau, cao hai đầu thấp ở giữa.", isCorrect: true, questionId: 353 },

    {
      content:
        "đồi núi thấp chiếm ưu thế.",
      isCorrect: false,
      questionId: 354,
    },
    {
      content:
        "có nhiều sơn nguyên, cao nguyên.",
      isCorrect: false,
      questionId: 354,
    },
    {
      content: "có nhiều khối núi cao đồ sộ.",
      isCorrect: false,
      questionId: 354,
    },
    {
      content: "nghiêng theo hướng tây bắc – đông nam.",
      isCorrect: true,
      questionId: 354,
    },

    {
      content: "đồi núi chiếm phần lớn diện tích nhưng chủ yếu là đồi núi thấp.",
      isCorrect: false,
      questionId: 355,
    },
    {
      content: "đồi núi chiếm phần lớn diện tích, trong đó có nhiều vùng núi độ cao đạt trên 2000m.",
      isCorrect: false,
      questionId: 355,
    },
    {
      content:
        "các dãy núi chạy theo hai hướng chính là tây bắc - đông nam và hướng vòng cung.",
      isCorrect: false,
      questionId: 355,
    },
    {
      content:
        "đồng bằng chỉ chiếm 1/4 diện tích và phân bố chủ yếu ở ven biển.",
      isCorrect: true,
      questionId: 355,
    },

    { content: "Tây Bắc.", isCorrect: false, questionId: 356 },
    {
      content: "Trường Sơn Bắc.",
      isCorrect: false,
      questionId: 356,
    },
    {
      content: " Đông Bắc.",
      isCorrect: false,
      questionId: 356,
    },
    { content: "Trường Sơn Nam.", isCorrect: true, questionId: 356 },

    {
      content:
        "Trường Sơn Bắc.",
      isCorrect: false,
      questionId: 357,
    },
    {
      content:
        "Trường Sơn Nam.",
      isCorrect: false,
      questionId: 357,
    },
    {
      content: "Đông Bắc.",
      isCorrect: false,
      questionId: 357,
    },
    {
      content: "Tây Bắc.",
      isCorrect: true,
      questionId: 357,
    },

    { content: "núi cao.", isCorrect: false, questionId: 358 },
    { content: "bán bình nguyên và đồi trung du.", isCorrect: false, questionId: 358 },
    { content: "núi trung bình.", isCorrect: false, questionId: 358 },
    { content: "đồi núi thấp.", isCorrect: true, questionId: 358 },

    { content: "rìa phía tây và tây nam đồng bằng sông Hồng", isCorrect: false, questionId: 359 },
    { content: "rìa phía đông và đông nam đồng bằng sông Hồng.", isCorrect: false, questionId: 359 },
    { content: "rìa phía bắc và phía tây đồng bằng sông Hông.", isCorrect: false, questionId: 359 },
    { content: "rìa phía bắc và đông bắc đồng bằng sông Hồng.", isCorrect: true, questionId: 359 },

    {
      content: "sông Mã tới dãy Bạch Mã.",
      isCorrect: false,
      questionId: 360,
    },
    {
      content: "nam sông Cả tới dãy Hoành Sơn.",
      isCorrect: false,
      questionId: 360,
    },
    {
      content: "dãy Hoành Sơn tới dãy Bạch Mã.",
      isCorrect: false,
      questionId: 360,
    },
    {
      content: "nam sông Cả tới dãy Bạch Mã.",
      isCorrect: true,
      questionId: 360,
    },
    //cate14
    {
      content: "Diện tích rừng tự nhiên vẫn giảm.",
      isCorrect: false,
      questionId: 361,
    },
    {
      content: "Diện tích rừng trồng vẫn không tăng.",
      isCorrect: false,
      questionId: 361,
    },
    {
      content: "Độ che phủ rừng vẫn giảm.",
      isCorrect: false,
      questionId: 361,
    },
    {
      content: "Tài nguyên rừng vẫn bị suy thoái.",
      isCorrect: true,
      questionId: 361,
    },

    {
      content:
        "rừng giàu.",
      isCorrect: false,
      questionId: 362,
    },
    {
      content: "rừng nghèo và rừng phục hồi.",
      isCorrect: false,
      questionId: 362,
    },
    {
      content:
        "rừng trồng chưa khai thác được.",
      isCorrect: false,
      questionId: 362,
    },
    {
      content: "đất trống, đồi núi trọc.",
      isCorrect: true,
      questionId: 362,
    },

    {
      content: "Độ che phủ rừng cả nước là 30 – 40%, vùng núi thấp phải đạt 50 – 60%.",
      isCorrect: false,
      questionId: 363,
    },
    {
      content:
        "Độ che phủ rừng cả nước là 20 – 30%, vùng núi thấp phải đạt 40 – 50%.",
      isCorrect: false,
      questionId: 363,
    },
    {
      content:
        "Độ che phủ rừng cả nước là 40 – 45%, vùng núi thấp phải đạt 60 – 70%. ",
      isCorrect: false,
      questionId: 363,
    },
    {
      content:
        "Độ che phủ rừng cả nước là 45 – 50%, vùng núi thấp phải đạt 70 – 80%.",
      isCorrect: true,
      questionId: 363,
    },

    {
      content:
        "bảo vệ cảnh quan, đa dạng sinh vật của các vườn quốc gia và khu bảo tồn thiên nhiên.",
      isCorrect: false,
      questionId: 364,
    },
    {
      content: "đảm bảo duy trì phát triển diện tích rừng và chất lượng.",
      isCorrect: false,
      questionId: 364,
    },
    {
      content: " trồng rừng trên đất trống, đòi núi trọc.",
      isCorrect: false,
      questionId: 364,
    },
    {
      content:
        "duy trì và phát triển hoàn cảnh rừng, độ phì và chất lượng rừng.",
      isCorrect: true,
      questionId: 364,
    },

    {
      content: "bảo vệ cảnh quan, đa dạng sinh vật của các vườn quốc gia và khu bảo tồn thiên nhiên. ",
      isCorrect: false,
      questionId: 365,
    },
    {
      content: "có kế hoạch, biện pháp bảo vệ, nuôi dưỡng rừng hiện có.",
      isCorrect: false,
      questionId: 365,
    },
    {
      content: "trồng rừng trên đất trống, đòi núi trọc.",
      isCorrect: false,
      questionId: 365,
    },
    {
      content: "duy trì và phát triển hoàn cảnh rừng, độ phì và chất lượng rừng.",
      isCorrect: true,
      questionId: 365,
    },

    {
      content: "bảo vệ cảnh quan, đa dạng sinh vật của các vườn quốc gia và khu bảo tồn thiên nhiên.",
      isCorrect: false,
      questionId: 366,
    },
    {
      content: "trồng rừng trên đất trống, đòi núi trọc.",
      isCorrect: false,
      questionId: 366,
    },
    {
      content: " đảm bảo duy trì phát triển diện tích rừng và chất lượng.",
      isCorrect: false,
      questionId: 366,
    },
    {
      content: "duy trì và phát triển hoàn cảnh rừng, độ phì và chất lượng rừng.",
      isCorrect: true,
      questionId: 366,
    },

    {
      content: "Suy giảm về số lượng loài.",
      isCorrect: false,
      questionId: 367,
    },
    {
      content: "Suy giảm thể trạng của các cá thể trong loài.",
      isCorrect: false,
      questionId: 367,
    },
    {
      content: "Suy giảm về hệ sinh thái.",
      isCorrect: false,
      questionId: 367,
    },
    {
      content: "Suy giảm về nguồn gen quý hiểm.",
      isCorrect: true,
      questionId: 367,
    },

    {
      content:
        "Quy định về việc khai thác.",
      isCorrect: false,
      questionId: 368,
    },
    {
      content: "Ban hành sách Đỏ Việt Nam.",
      isCorrect: false,
      questionId: 368,
    },
    {
      content: "Cấm tuyệt đối việc khai thác tài nguyên thiên nhiên.",
      isCorrect: false,
      questionId: 368,
    },
    {
      content: "Xây dựng và mở rộng hệ thống các vườn quốc gia và các khu bảo tồn thiên nhiên.",
      isCorrect: true,
      questionId: 368,
    },

    {
      content:
        "nguồn nước có nguy cơ cạn kiệt và ô nhiễm môi trường nước.",
      isCorrect: false,
      questionId: 369,
    },
    {
      content:
        "ngập lụt vào mùa mưa, thiếu nước vào mùa khô và nguy cơ cạn kiệt nguồn nước ngầm.",
      isCorrect: false,
      questionId: 369,
    },
    {
      content: "ngập lụt vào mùa mưa, thiếu nước vào mùa khô và ô nhiễm môi trường nước.",
      isCorrect: false,
      questionId: 369,
    },
    {
      content: "ô nhiểm môi trường nước và nguồn nước có sự phân hóa theo các vùng miền.",
      isCorrect: true,
      questionId: 369,
    },

    {
      content: "Lượng mưa ở Duyên hải miền Trung thấp hơn",
      isCorrect: false,
      questionId: 370,
    },
    {
      content:
        "Lượng mưa lớn nhưng rải ra trong nhiều tháng nên mưa nhỏ hơn.",
      isCorrect: false,
      questionId: 370,
    },
    {
      content: "Do địa hình dốc ra biển lại không có đê nên dễ thoát nước.",
      isCorrect: false,
      questionId: 370,
    },
    {
      content: "Mật độ dân cư thấp hơn, ít có những công trình xây dựng lớn.",
      isCorrect: true,
      questionId: 370,
    },

    {
      content: "Ô nhiễm môi trường nước và khai thác quá mức.",
      isCorrect: false,
      questionId: 371,
    },
    {
      content: "Khai thác quá mức và các dịch bệnh.",
      isCorrect: false,
      questionId: 371,
    },
    {
      content: "Dịch bệnh và các hiện tượng thời tiết thất thường.",
      isCorrect: false,
      questionId: 371,
    },
    {
      content: "Thời tiết thất thường và khai thác quá mức.",
      isCorrect: true,
      questionId: 371,
    },

    {
      content: "giá trị kinh tế.",
      isCorrect: false,
      questionId: 372,
    },
    {
      content: "cảnh quan môi trường tự nhiên.",
      isCorrect: false,
      questionId: 372,
    },
    {
      content: "cân bằng môi trường sinh thái.",
      isCorrect: false,
      questionId: 372,
    },
    {
      content: "bảo vệ sự đa dạng sinh vật.",
      isCorrect: true,
      questionId: 372,
    },

    { content: "thiên nhiên, bão lũ, hạn hán thường xuyên xảy ra.", isCorrect: false, questionId: 373 },
    { content: "đảm bảo tốt nhất cho sự phát triển bền vững lâu dài.", isCorrect: false, questionId: 373 },
    { content: "dân số tăng nhanh, đời sống xã hội nâng cao.", isCorrect: false, questionId: 373 },
    { content: "khoa học kỹ thuật có nhiều tiến bộ.", isCorrect: true, questionId: 373 },

    {
      content:
        "Khu bảo tồn thiên nhiên được xếp vào loại rừng đặc dụng ở nước ta.",
      isCorrect: false,
      questionId: 374,
    },
    {
      content:
        "Khu bảo tồn thiên nhiên được xếp vào loại rừng cần bảo tồn ở nước ta.",
      isCorrect: false,
      questionId: 374,
    },
    {
      content: "Khu bảo tồn thiên nhiên được xếp vào loại rừng quý hiếm ở nước ta.",
      isCorrect: false,
      questionId: 374,
    },
    {
      content: "Khu bảo tồn thiên nhiên được xếp vào loại rừng nghiên cứu ở nước ta.",
      isCorrect: true,
      questionId: 374,
    },

    {
      content: "Hoạt động của giao thông vận tải.",
      isCorrect: false,
      questionId: 375,
    },
    {
      content: " Chất thải của các khu quần cư.",
      isCorrect: false,
      questionId: 375,
    },
    {
      content:
        "Hoạt động của việc khai thác khoáng sản.",
      isCorrect: false,
      questionId: 375,
    },
    {
      content:
        "Hoạt động của sản xuất nông nghiệp và các cơ sở tiểu thủ công nghiệp.",
      isCorrect: true,
      questionId: 375,
    },

    { content: "rừng vườn quốc gia.", isCorrect: false, questionId: 376 },
    {
      content: "rừng sản xuất.",
      isCorrect: false,
      questionId: 376,
    },
    {
      content: "rừng phòng hộ.",
      isCorrect: false,
      questionId: 376,
    },
    { content: "rừng đặc dụng.", isCorrect: true, questionId: 376 },

    {
      content:
        "Lãng phí tài nguyên nước. ",
      isCorrect: false,
      questionId: 377,
    },
    {
      content:
        "Ô nhiễm môi trường nước. ",
      isCorrect: false,
      questionId: 377,
    },
    {
      content: "Thiếu nước vào mùa khô.",
      isCorrect: false,
      questionId: 377,
    },
    {
      content: "Ngập lụt vào mùa mưa.",
      isCorrect: true,
      questionId: 377,
    },

    { content: "Phát triển mạnh thủy lợi kết hợp trồng rừng.", isCorrect: false, questionId: 378 },
    { content: "Thực hiện các kĩ thuật canh tác.", isCorrect: false, questionId: 378 },
    { content: "Thủy lợi kết hợp các kĩ thuật canh tác.", isCorrect: false, questionId: 378 },
    { content: "Phát triển mô hình nông – lâm.", isCorrect: true, questionId: 378 },

    { content: "Xây dựng và mở rộng hệ thống vườn quốc gia và các khu bảo tồn.", isCorrect: false, questionId: 379 },
    { content: "Ban hành “sách đỏ Việt Nam”.", isCorrect: false, questionId: 379 },
    { content: "Cân bằng giữa phát triển dân số với khả năng sử dụng hợp lí tài nguyên.", isCorrect: false, questionId: 379 },
    { content: "Cấm khai thác gỗ quý, gỗ trong rừng cấm, săn bắn động vật trái phép.", isCorrect: true, questionId: 379 },

    {
      content: "đảm bảo sử dụng lâu dài các nguồn lợi sinh vật của đất nước.",
      isCorrect: false,
      questionId: 380,
    },
    {
      content: "bảo vệ nguồn gen động, thực vật quý hiếm khỏi nguy cơ tuyệt chủng.",
      isCorrect: false,
      questionId: 380,
    },
    {
      content: "bảo tồn các loài động, thực vật quý hiếm.",
      isCorrect: false,
      questionId: 380,
    },
    {
      content: "kiểm kê các loài động, thực vật ở Việt Nam.",
      isCorrect: true,
      questionId: 380,
    },
    //cate15
    {
      content: "Inđônêxia, Thái Lan.",
      isCorrect: false,
      questionId: 381,
    },
    {
      content: "Malaixia, Philippines.",
      isCorrect: false,
      questionId: 381,
    },
    {
      content: "Inđônêxia, Malaixia.",
      isCorrect: false,
      questionId: 381,
    },
    {
      content: "Inđônêxia, Philippines.",
      isCorrect: true,
      questionId: 381,
    },

    {
      content:
        "Đông dân (đứng thứ 13 trong số 200 quốc gia và vùng lãnh thổ).",
      isCorrect: false,
      questionId: 382,
    },
    {
      content: "Khá đông dân (đứng thứ 30 trong số 200 quốc gia và vùng lãnh thổ).",
      isCorrect: false,
      questionId: 382,
    },
    {
      content:
        "Trung bình (đứng thứ 90 trong số 200 quốc gia và vùng lãnh thổ).",
      isCorrect: false,
      questionId: 382,
    },
    {
      content: "Ít dân (đứng thứ 130 trong số 200 quốc gia và vùng lãnh thổ).",
      isCorrect: true,
      questionId: 382,
    },

    {
      content: "Nửa đầu thế kỉ XIX.",
      isCorrect: false,
      questionId: 383,
    },
    {
      content:
        "Nửa sau thế kỉ XIX.",
      isCorrect: false,
      questionId: 383,
    },
    {
      content:
        "Nửa đầu thế kỉ XX.",
      isCorrect: false,
      questionId: 383,
    },
    {
      content:
        "Nửa sau thế kỉ XX.",
      isCorrect: true,
      questionId: 383,
    },

    {
      content:
        "Liên bang Nga.",
      isCorrect: false,
      questionId: 384,
    },
    {
      content: "Hoa Kì, Ôxtrâylia.",
      isCorrect: false,
      questionId: 384,
    },
    {
      content: "các nước Đông Âu.",
      isCorrect: false,
      questionId: 384,
    },
    {
      content:
        "Anh và một số nước Tây Âu khác.",
      isCorrect: true,
      questionId: 384,
    },

    {
      content: "Là cơ cấu dân số trẻ.",
      isCorrect: false,
      questionId: 385,
    },
    {
      content: "Đang biến đổi chậm theo hướng già hóa.",
      isCorrect: false,
      questionId: 385,
    },
    {
      content: "Đang biến đổi nhanh theo hướng già hóa.",
      isCorrect: false,
      questionId: 385,
    },
    {
      content: " Là cơ cấu dân số già.",
      isCorrect: true,
      questionId: 385,
    },

    {
      content: "số trẻ sơ sinh chiếm hơn 2/3 dân số.",
      isCorrect: false,
      questionId: 386,
    },
    {
      content: "số người ở độ tuổi 0-14 chiếm hơn 2/3 dân số.",
      isCorrect: false,
      questionId: 386,
    },
    {
      content: "số người ở độ tuổi 15-59 chiếm hơn 2/3 dân số.",
      isCorrect: false,
      questionId: 386,
    },
    {
      content: "số người ở độ tuổi trên 60 trở lên chiếm hơn 2/3 dân số.",
      isCorrect: true,
      questionId: 386,
    },

    {
      content: "Đồng bằng sông Hồng.",
      isCorrect: false,
      questionId: 387,
    },
    {
      content: "Đồng bằng sông Cửu Long.",
      isCorrect: false,
      questionId: 387,
    },
    {
      content: "Duyên hải Nam Trung Bộ.",
      isCorrect: false,
      questionId: 387,
    },
    {
      content: "Đông Nam bộ.",
      isCorrect: true,
      questionId: 387,
    },

    {
      content:
        "Đông Bắc.",
      isCorrect: false,
      questionId: 388,
    },
    {
      content: "Tây Bắc.",
      isCorrect: false,
      questionId: 388,
    },
    {
      content: "Bắc Trung Bộ.",
      isCorrect: false,
      questionId: 388,
    },
    {
      content: "Tây Nguyên.",
      isCorrect: true,
      questionId: 388,
    },

    {
      content:
        "Nhóm 0 – 14 tuổi tăng, nhóm 15 – 59 tuổi giảm, nhóm 60 tuổi trở lên giảm.",
      isCorrect: false,
      questionId: 389,
    },
    {
      content:
        "Nhóm 0 – 14 tuổi giảm, nhóm 15 – 59 tuổi tăng, nhóm 60 tuổi trở lên tăng.",
      isCorrect: false,
      questionId: 389,
    },
    {
      content: "Nhóm 0 – 14 tuổi tăng, nhóm 15 – 59 tuổi giảm, nhóm 60 tuổi trở lên tăng.",
      isCorrect: false,
      questionId: 389,
    },
    {
      content: "Nhóm 0 – 14 tuổi giảm, nhóm 15 – 59 tuổi tăng, nhóm 60 tuổi trở lên giảm.",
      isCorrect: true,
      questionId: 389,
    },

    {
      content: "Tác động của hội nhập kinh tế toàn cầu. ",
      isCorrect: false,
      questionId: 390,
    },
    {
      content:
        "Tác động của quá trình công nghiệp hóa.",
      isCorrect: false,
      questionId: 390,
    },
    {
      content: "Ở đô thị có cơ sở hạ tầng ngày càng tốt.",
      isCorrect: false,
      questionId: 390,
    },
    {
      content: "Ở đô thị dễ kiếm việc làm có thu nhập.",
      isCorrect: true,
      questionId: 390,
    },

    {
      content: "Đông Nam Bộ.",
      isCorrect: false,
      questionId: 391,
    },
    {
      content: "Duyên hải Nam Trung Bộ.",
      isCorrect: false,
      questionId: 391,
    },
    {
      content: "Đồng bằng sông Cửu Long.",
      isCorrect: false,
      questionId: 391,
    },
    {
      content: "Trung du và miền núi Bắc Bộ.",
      isCorrect: true,
      questionId: 391,
    },

    {
      content: "Tỉ lệ dân đô thị có xu hướng tăng.",
      isCorrect: false,
      questionId: 392,
    },
    {
      content: "Quá trình đô thị hóa diễn ra chậm.",
      isCorrect: false,
      questionId: 392,
    },
    {
      content: "Trình độ đô thị hóa chưa cao.",
      isCorrect: false,
      questionId: 392,
    },
    {
      content: "Phân bố đô thị đồng đều cả nước.",
      isCorrect: true,
      questionId: 392,
    },

    { content: "đều có quy mô rất lớn.", isCorrect: false, questionId: 393 },
    { content: "có nhiều loại khác nhau.", isCorrect: false, questionId: 393 },
    { content: "phân bố đồng đều cả nước.", isCorrect: false, questionId: 393 },
    { content: "cơ sở hạ tầng hiện đại.", isCorrect: true, questionId: 393 },

    {
      content:
        "Tỉ lệ dân thành thị không thay đổi.",
      isCorrect: false,
      questionId: 394,
    },
    {
      content:
        "Số đô thị giống nhau ở các vùng.",
      isCorrect: false,
      questionId: 394,
    },
    {
      content: "Số dân ở đô thị nhỏ hơn nông thôn. ",
      isCorrect: false,
      questionId: 394,
    },
    {
      content: "Trình độ đô thị hóa còn rất thấp.",
      isCorrect: true,
      questionId: 394,
    },

    {
      content: "phân bố đô thị đều giữa các vùng.",
      isCorrect: false,
      questionId: 395,
    },
    {
      content: "quá trình đô thị hóa diễn ra nhanh.",
      isCorrect: false,
      questionId: 395,
    },
    {
      content:
        "trình độ đô thị hóa thấp.",
      isCorrect: false,
      questionId: 395,
    },
    {
      content:
        "tỉ lệ dân thành thị giảm.",
      isCorrect: true,
      questionId: 395,
    },

    { content: "Đồng bằng sông Hồng.", isCorrect: false, questionId: 396 },
    {
      content: "Đồng bằng sông Cửu Long.",
      isCorrect: false,
      questionId: 396,
    },
    {
      content: "Đông Nam Bộ.",
      isCorrect: false,
      questionId: 396,
    },
    { content: "Miền Trung.", isCorrect: true, questionId: 396 },

    {
      content:
        "Thương mại, du lịch.",
      isCorrect: false,
      questionId: 397,
    },
    {
      content:
        "Hành chính, quân sự.",
      isCorrect: false,
      questionId: 397,
    },
    {
      content: "Du lịch, công nghiệp.",
      isCorrect: false,
      questionId: 397,
    },
    {
      content: "Công nghiệp, thương mại.",
      isCorrect: true,
      questionId: 397,
    },

    { content: "Tỉ trọng dân số nông thôn tăng, tỉ trọng dân số thành thị giảm.", isCorrect: false, questionId: 398 },
    { content: "Tỉ trọng dân số nông thôn giảm, tỉ trọng dân số thành thị không tăng.", isCorrect: false, questionId: 398 },
    { content: "Tỉ trọng dân số thành thị giảm, tỉ trọng dân số nông thôn không tăng.", isCorrect: false, questionId: 398 },
    { content: "Tỉ trọng dân số thành thị tăng, tỉ trọng dân số nông thôn giảm.", isCorrect: true, questionId: 398 },

    { content: "phát triển mạng lưới đô thị hợp lí đi đôi với xóa đói giảm nghèo ở nông thôn, đẩy mạnh công nghiệp hóa nông thôn.", isCorrect: false, questionId: 399 },
    { content: "xây dựng hệ thống cơ sở hạ tầng ở đô thị.", isCorrect: false, questionId: 399 },
    { content: "hạn chế sự gia tăng dân số tự nhiên ở cả nông thôn và thành thị.", isCorrect: false, questionId: 399 },
    { content: "phát triển và mở rộng mạng lưới các đô thị để tăng sức chứa dân cư.", isCorrect: true, questionId: 399 },

    {
      content: "Môi trường, an ninh trật tự xã hội.",
      isCorrect: false,
      questionId: 400,
    },
    {
      content: "An ninh trật tự xã hội, gia tăng dân số tự nhiên.",
      isCorrect: false,
      questionId: 400,
    },
    {
      content: "Việc làm, mật độ dân số.",
      isCorrect: false,
      questionId: 400,
    },
    {
      content: "Gia tăng dân số tự nhiên, việc làm.",
      isCorrect: true,
      questionId: 400,
    },
    //cate16
    {
      content: "mạch mới luôn luôn được tổng hợp theo chiều tháo xoắn của ADN",
      isCorrect: false,
      questionId: 401,
    },
    {
      content: "mạch mới luôn luôn được tổng hợp theo chiều 3’ à 5’",
      isCorrect: false,
      questionId: 401,
    },
    {
      content: "mạch mới luôn luôn được tổng hợp theo chiều 5’ à 3’",
      isCorrect: false,
      questionId: 401,
    },
    {
      content: "mạch mới luôn luôn được tổng hợp theo hướng ngược chiều tháo xoắn của ADN",
      isCorrect: true,
      questionId: 401,
    },

    {
      content:
        "5’AUG3’, 5’UGG3’",
      isCorrect: false,
      questionId: 402,
    },
    {
      content: "5’XAG3’, 5’AUG3’",
      isCorrect: false,
      questionId: 402,
    },
    {
      content:
        "5’UUU3’, 5’AUG3’",
      isCorrect: false,
      questionId: 402,
    },
    {
      content: "5’UXG3’. 5’AGX3’",
      isCorrect: true,
      questionId: 402,
    },

    {
      content: "Trong 16 phân tử ADN con được tạo ra ở vùng nhân, có 15 mạch được tổng hợp liên tục, 15 mạch được tổng hợp gián đoạn.",
      isCorrect: false,
      questionId: 403,
    },
    {
      content:
        "Trong 16 phân tử ADN con được tạo ra ở vùng nhân, có 16 mạch được tổng hợp liên tục, 16 mạch được tổng hợp gián đoạn.",
      isCorrect: false,
      questionId: 403,
    },
    {
      content:
        "Trong quá trình nhận đôi ADN, enzim nối ligaza chỉ tác động lên một trong hai mạch đơn mới được tổng hợp từ một phân tử mẹ ADN.",
      isCorrect: false,
      questionId: 403,
    },
    {
      content:
        "Tất cả phân tử ADN ở vùng nhân của các vi khuẩn con đều có những đơn phân chứa N15.",
      isCorrect: true,
      questionId: 403,
    },

    {
      content:
        "Tính đặc hiệu của mã di truyền được thể hiện như thế nào? A. Mọi loài sinh vật đều có chung một bộ mã di truyền",
      isCorrect: false,
      questionId: 404,
    },
    {
      content: "Mỗi axit amin thường được mã hóa bởi nhiều bộ ba.",
      isCorrect: false,
      questionId: 404,
    },
    {
      content: "Mỗi bộ ba chỉ mã hóa cho một loại axit amin",
      isCorrect: false,
      questionId: 404,
    },
    {
      content:
        "Mã di truyền được dọc theo cụm nối tiếp, không gối nhau.",
      isCorrect: true,
      questionId: 404,
    },

    {
      content: "Enzim ADN polimeraza tổng hợp và kéo dài mạch mới theo chiều 3 → 5",
      isCorrect: false,
      questionId: 405,
    },
    {
      content: "Enzim ligaza (enzim nối) nối các đoạn Okazaki thành mạch đơn hoàn chỉnh",
      isCorrect: false,
      questionId: 405,
    },
    {
      content: "Quá trình nhận đôi ADN diễn ra theo nguyên tắc bổ sung và nguyên t bán bảo tồn",
      isCorrect: false,
      questionId: 405,
    },
    {
      content: "Nhờ các enzim tháo xoắn, hai mạch đơn của ADN tách nhau dần tạo nên chạc chữ Y",
      isCorrect: true,
      questionId: 405,
    },

    {
      content: "3’UAG5’ ; 3’UAA5’ ; 3’UGA5’",
      isCorrect: false,
      questionId: 406,
    },
    {
      content: "3’GAU5’ ; 3’AAU5’ ; 3’AGU5’",
      isCorrect: false,
      questionId: 406,
    },
    {
      content: "3’UAG5’ ; 3’UAA5’ ; 3’AGU5’",
      isCorrect: false,
      questionId: 406,
    },
    {
      content: "3’GAU5’; 3’AAU5’ ; 3’AUG5’",
      isCorrect: true,
      questionId: 406,
    },

    {
      content: "Chiều tổng hợp và Các enzim tham gia.",
      isCorrect: false,
      questionId: 407,
    },
    {
      content: "Các enzim tham gia và Thành phần tham gia và Số lượng các đơn vị nhân đôi.",
      isCorrect: false,
      questionId: 407,
    },
    {
      content: "Các enzim tham gia và Số lượng các đơn vị nhân đôi.",
      isCorrect: false,
      questionId: 407,
    },
    {
      content: "Nguyên tắc nhân đôi",
      isCorrect: true,
      questionId: 407,
    },

    {
      content:
        "giảm phân và thụ tinh",
      isCorrect: false,
      questionId: 408,
    },
    {
      content: "nhân đôi ADN",
      isCorrect: false,
      questionId: 408,
    },
    {
      content: "phiên mã",
      isCorrect: false,
      questionId: 408,
    },
    {
      content: "dịch mã",
      isCorrect: true,
      questionId: 408,
    },

    {
      content:
        "27",
      isCorrect: false,
      questionId: 409,
    },
    {
      content:
        "48",
      isCorrect: false,
      questionId: 409,
    },
    {
      content: "16",
      isCorrect: false,
      questionId: 409,
    },
    {
      content: "9",
      isCorrect: true,
      questionId: 409,
    },

    {
      content: "Sử dụng đồng thời cả 2 mạch khuôn để tổng hợp ADN mới.",
      isCorrect: false,
      questionId: 410,
    },
    {
      content:
        "Lắp ráp nucleotit tự do theo nguyên tắc bổ sung với mỗi mạch khuôn của ADN theo chiều 5’ → 3’",
      isCorrect: false,
      questionId: 410,
    },
    {
      content: "Sử dụng một mạch khuôn để tổng hợp mạch mới theo chiều 3’ → 5’",
      isCorrect: false,
      questionId: 410,
    },
    {
      content: "Chỉ xúc tác tháo xoắn ADN mà không tổng hợp mạch mới",
      isCorrect: true,
      questionId: 410,
    },

    {
      content: "100",
      isCorrect: false,
      questionId: 411,
    },
    {
      content: "190",
      isCorrect: false,
      questionId: 411,
    },
    {
      content: "90",
      isCorrect: false,
      questionId: 411,
    },
    {
      content: "180",
      isCorrect: true,
      questionId: 411,
    },

    {
      content: "A=T= 9000; G=X=13500",
      isCorrect: false,
      questionId: 412,
    },
    {
      content: "A=T= 2400; G=X=3600",
      isCorrect: false,
      questionId: 412,
    },
    {
      content: "A=T=9600; G=X=14400",
      isCorrect: false,
      questionId: 412,
    },
    {
      content: "A=T=18000; G=X=27000",
      isCorrect: true,
      questionId: 412,
    },

    { content: "Dựa vào cấu trúc của gen", isCorrect: false, questionId: 413 },
    { content: "Dựa vào sự biểu hiện kiểu hình của gen", isCorrect: false, questionId: 413 },
    { content: "Dựa vào kiểu tác động của gen", isCorrect: false, questionId: 413 },
    { content: "Dựa vào chức năng sản phẩm của gen", isCorrect: true, questionId: 413 },

    {
      content:
        "trong 2 phân tử ADN mới được hình thành, mỗi phân tử gồm có 1 mạch là của ADN ban đầu và 1 mạch mới tổng hợp.",
      isCorrect: false,
      questionId: 414,
    },
    {
      content:
        "Sự nhân đôi xảy ra trên 2 mạch của phân tử ADN theo 2 hướng và ngược chiều nhau.",
      isCorrect: false,
      questionId: 414,
    },
    {
      content: "trong 2 phân tử ADN mới được hình thành, 1 phân tử giống với phân tử ADN mẹ còn phân tử kia có cấu trúc thay đổi.",
      isCorrect: false,
      questionId: 414,
    },
    {
      content: "2 phân tử ADN mới được hình thành hoàn toàn giống nhau và giống với ADN mẹ ban đầu.",
      isCorrect: true,
      questionId: 414,
    },

    {
      content: "ADN polimeraza",
      isCorrect: false,
      questionId: 415,
    },
    {
      content: "Ligaza",
      isCorrect: false,
      questionId: 415,
    },
    {
      content:
        "Restrictaza",
      isCorrect: false,
      questionId: 415,
    },
    {
      content:
        "ARN polimeraza",
      isCorrect: true,
      questionId: 415,
    },

    { content: "làm tăng năng suất tổng hợp protein cùng loại", isCorrect: false, questionId: 416 },
    {
      content: "đảm bảo cho quá trình dịch mã diễn ra chính xác",
      isCorrect: false,
      questionId: 416,
    },
    {
      content: "đảm bảo cho quá trình dịch mã diễn ra liên tục ",
      isCorrect: false,
      questionId: 416,
    },
    { content: "làm tăng năng suất tổng hợp protein khác loại", isCorrect: true, questionId: 416 },

    {
      content:
        "3’AUAXXXGUAXAU5’",
      isCorrect: false,
      questionId: 417,
    },
    {
      content:
        "5’AUAXXXGUAXAU3’",
      isCorrect: false,
      questionId: 417,
    },
    {
      content: " 3’ATAXXXGTAXAT5’ ",
      isCorrect: false,
      questionId: 417,
    },
    {
      content: "5’ATAXXXGTAXAT3’",
      isCorrect: true,
      questionId: 417,
    },

    { content: "đều có sự xúc tác của enzim ADN polimeraza để lắp ráp với các nucleotit trên mạch khuôn theo nguyên tắc bổ sung.", isCorrect: false, questionId: 418 },
    { content: "các quá trình thường thực hiện một lần trong một tế bào.", isCorrect: false, questionId: 418 },
    { content: "diễn ra trên toàn bộ phân tử ADN.", isCorrect: false, questionId: 418 },
    { content: "việc lắp ghép các đơn phân được thực hiện trên cơ sở nguyên tắc bổ sung.", isCorrect: true, questionId: 418 },

    { content: "9980", isCorrect: false, questionId: 419 },
    { content: "2500", isCorrect: false, questionId: 419 },
    { content: "9995", isCorrect: false, questionId: 419 },
    { content: "2495", isCorrect: true, questionId: 419 },

    {
      content: "ADN",
      isCorrect: false,
      questionId: 420,
    },
    {
      content: "mARN",
      isCorrect: false,
      questionId: 420,
    },
    {
      content: "tARN",
      isCorrect: false,
      questionId: 420,
    },
    {
      content: "Riboxom",
      isCorrect: true,
      questionId: 420,
    },
    //cate17
    {
      content: "Cho F1 lai phân tích",
      isCorrect: false,
      questionId: 421,
    },
    {
      content: "Cho F2 tự thụ phấn",
      isCorrect: false,
      questionId: 421,
    },
    {
      content: "Cho F1 giao phấn với nhau",
      isCorrect: false,
      questionId: 421,
    },
    {
      content: "Cho F1 tự thụ phấn",
      isCorrect: true,
      questionId: 421,
    },

    {
      content:
        "sự phân li và tổ hợp của cặp nhân tố di truyền trong giảm phân và thụ tinh",
      isCorrect: false,
      questionId: 422,
    },
    {
      content: "sự tổ hợp của cặp NST tương đồng trong thụ tinh",
      isCorrect: false,
      questionId: 422,
    },
    {
      content:
        "sự phân li và tổ hợp của cặp NST tương đồng trong giảm phân và thụ tinh",
      isCorrect: false,
      questionId: 422,
    },
    {
      content: "sự phân li và tổ hợp của cặp nhân tố di truyền trong giảm phân",
      isCorrect: true,
      questionId: 422,
    },

    {
      content: "Mỗi tính trạng của cơ thể do một cặp nhân tố di truyển quy định",
      isCorrect: false,
      questionId: 423,
    },
    {
      content:
        "Mỗi tính trạng của cơ thể do nhiều cặp gen quy định",
      isCorrect: false,
      questionId: 423,
    },
    {
      content:
        "Do sự phân li đồng đều của cặp nhân tố di truyền nên mỗi giao tử chỉ chứa một nhân tố của cặp",
      isCorrect: false,
      questionId: 423,
    },
    {
      content:
        "F1 tuy là cơ thể lai nhưng khi tạo giao tử thì giao tử là thuần khiết",
      isCorrect: true,
      questionId: 423,
    },

    {
      content:
        "sự phân li và tổ hợp của cặp nhân tố di truyền trong giảm phân và thụ tinh",
      isCorrect: false,
      questionId: 424,
    },
    {
      content: "sự phân li của cặp NST tương đồng trong giảm phân",
      isCorrect: false,
      questionId: 424,
    },
    {
      content: "sự phân li và tổ hợp của cặp NST tương đồng trong giảm phân và thụ tinh",
      isCorrect: false,
      questionId: 424,
    },
    {
      content:
        "sự tổ hợp của cặp NST trong thụ tinh",
      isCorrect: true,
      questionId: 424,
    },

    {
      content: "1/4",
      isCorrect: false,
      questionId: 425,
    },
    {
      content: "1/3",
      isCorrect: false,
      questionId: 425,
    },
    {
      content: "3/4",
      isCorrect: false,
      questionId: 425,
    },
    {
      content: "2/3",
      isCorrect: true,
      questionId: 425,
    },

    {
      content: "Aa x Aa",
      isCorrect: false,
      questionId: 426,
    },
    {
      content: "aa x aa",
      isCorrect: false,
      questionId: 426,
    },
    {
      content: "AA x Aa",
      isCorrect: false,
      questionId: 426,
    },
    {
      content: "AA x AA",
      isCorrect: true,
      questionId: 426,
    },

    {
      content: "Đều có kiểu gen Nn",
      isCorrect: false,
      questionId: 427,
    },
    {
      content: "Đều có kiểu gen Nn",
      isCorrect: false,
      questionId: 427,
    },
    {
      content: "Bố có kiểu gen NN, mẹ có kiểu gen Nn hoặc ngược lại",
      isCorrect: false,
      questionId: 427,
    },
    {
      content: "Bố có kiểu gen Nn, mẹ có kiểu gen nn hoặc ngược lại",
      isCorrect: true,
      questionId: 427,
    },

    {
      content:
        "Thể đồng hợp cho 1 loại giao tử, thể dị hợp cho 2 loại giao tử với tỉ lệ 1:1",
      isCorrect: false,
      questionId: 428,
    },
    {
      content: "Mỗi cá thể đời P cho 2 loại giao tử mang gen khác nhau",
      isCorrect: false,
      questionId: 428,
    },
    {
      content: "Mõi cá thể đời F1 cho 1 loại giao tử mang gen khác nhau",
      isCorrect: false,
      questionId: 428,
    },
    {
      content: "Cơ thể lai F1 cho 2 loại giao tử khác nhau với tỉ lệ 3:1",
      isCorrect: true,
      questionId: 428,
    },

    {
      content:
        "75% con gái",
      isCorrect: false,
      questionId: 429,
    },
    {
      content:
        " 25% tổng số con",
      isCorrect: false,
      questionId: 429,
    },
    {
      content: "75% con trai",
      isCorrect: false,
      questionId: 429,
    },
    {
      content: "50% tổng số con",
      isCorrect: true,
      questionId: 429,
    },

    {
      content: "1/2",
      isCorrect: false,
      questionId: 430,
    },
    {
      content:
        "1/3",
      isCorrect: false,
      questionId: 430,
    },
    {
      content: "3/4",
      isCorrect: false,
      questionId: 430,
    },
    {
      content: "1/8",
      isCorrect: true,
      questionId: 430,
    },

    {
      content: "1/4",
      isCorrect: false,
      questionId: 431,
    },
    {
      content: "1/6",
      isCorrect: false,
      questionId: 431,
    },
    {
      content: "1/8",
      isCorrect: false,
      questionId: 431,
    },
    {
      content: "1/12",
      isCorrect: true,
      questionId: 431,
    },

    {
      content: "6,25%",
      isCorrect: false,
      questionId: 432,
    },
    {
      content: "12,5%",
      isCorrect: false,
      questionId: 432,
    },
    {
      content: "50%",
      isCorrect: false,
      questionId: 432,
    },
    {
      content: "25%",
      isCorrect: true,
      questionId: 432,
    },

    { content: "3 cây thân thấp : 1 cây thân cao", isCorrect: false, questionId: 433 },
    { content: "2 cây thân cao : 1 cây thân thấp", isCorrect: false, questionId: 433 },
    { content: "1 cây thân cao : 1 cây thân thấp", isCorrect: false, questionId: 433 },
    { content: "3 cây thân cao : 1 cây thân thấp", isCorrect: true, questionId: 433 },

    {
      content:
        "5/12",
      isCorrect: false,
      questionId: 434,
    },
    {
      content:
        "3/8",
      isCorrect: false,
      questionId: 434,
    },
    {
      content: "1/4",
      isCorrect: false,
      questionId: 434,
    },
    {
      content: "3/4",
      isCorrect: true,
      questionId: 434,
    },

    {
      content: "Cho các cây F1 tự thụ phấn và phân tích sự phân li ở đời con của từng cây",
      isCorrect: false,
      questionId: 435,
    },
    {
      content: "Cho các cây F2 lai phân tích và phân tích sự phân li ở đời con của từng cây",
      isCorrect: false,
      questionId: 435,
    },
    {
      content:
        "Cho các cây F2 lai với nhau và phân tích sự phân li ở đời con của từng cây",
      isCorrect: false,
      questionId: 435,
    },
    {
      content:
        "Cho các cây F2 lai thuận nghịch và phân tích sự phân li ở đời con của từng cây",
      isCorrect: true,
      questionId: 435,
    },

    { content: "Trong trường hợp trội không hoàn toàn các alen vẫn phân li đồng đều về các giao tử", isCorrect: false, questionId: 436 },
    {
      content: "F1 chỉ thu được 1 loại kiểu hình nếu P thuần chủng khác biệt nhau bởi 1 cặp tính trạng tương phản",
      isCorrect: false,
      questionId: 436,
    },
    {
      content: "Hiện tượng trội không hoàn toàn chỉ nói về tính trạng trung gian giữa bố và mẹ",
      isCorrect: false,
      questionId: 436,
    },
    { content: "Tỉ lệ kiểu gen ở F2 là 1:2:1 nếu P thuần chủng khác biệt nhau bởi 1 cặp tính trạng tương phản", isCorrect: true, questionId: 436 },

    {
      content:
        "Kiểu hình",
      isCorrect: false,
      questionId: 437,
    },
    {
      content:
        "Kiểu gen",
      isCorrect: false,
      questionId: 437,
    },
    {
      content: "Gen (alen)",
      isCorrect: false,
      questionId: 437,
    },
    {
      content: "Nhiễm sắc thể",
      isCorrect: true,
      questionId: 437,
    },

    { content: "Số lượng cá thể con lai phải lớn.", isCorrect: false, questionId: 438 },
    { content: "Bố mẹ phải thuần chủng về cặp tính trạng đem lai.", isCorrect: false, questionId: 438 },
    { content: "Quá trình giảm phân phải diễn ra bình thường", isCorrect: false, questionId: 438 },
    { content: "Alen trội phải trội hoàn toàn so với alen lặn.", isCorrect: true, questionId: 438 },

    { content: "Lai thuận nghịch", isCorrect: false, questionId: 439 },
    { content: "Lai phân tích", isCorrect: false, questionId: 439 },
    { content: "Lai khác dòng", isCorrect: false, questionId: 439 },
    { content: "Lai khác loài", isCorrect: true, questionId: 439 },

    {
      content: "Aa x Aa",
      isCorrect: false,
      questionId: 440,
    },
    {
      content: "Aa x aa",
      isCorrect: false,
      questionId: 440,
    },
    {
      content: "aa x aa",
      isCorrect: false,
      questionId: 440,
    },
    {
      content: "Aa x AA",
      isCorrect: true,
      questionId: 440,
    },
    //cate18
    {
      content: "96",
      isCorrect: false,
      questionId: 441,
    },
    {
      content: "448",
      isCorrect: false,
      questionId: 441,
    },
    {
      content: "24",
      isCorrect: false,
      questionId: 441,
    },
    {
      content: "576",
      isCorrect: true,
      questionId: 441,
    },

    {
      content:
        "5,26%",
      isCorrect: false,
      questionId: 442,
    },
    {
      content: "3,75%",
      isCorrect: false,
      questionId: 442,
    },
    {
      content:
        "5,9%",
      isCorrect: false,
      questionId: 442,
    },
    {
      content: "7,5%",
      isCorrect: true,
      questionId: 442,
    },

    {
      content: "Rất đa dạng.",
      isCorrect: false,
      questionId: 443,
    },
    {
      content:
        "Thích nghi cao.",
      isCorrect: false,
      questionId: 443,
    },
    {
      content:
        "Kém đa dạng.",
      isCorrect: false,
      questionId: 443,
    },
    {
      content:
        "Phong phú.",
      isCorrect: true,
      questionId: 443,
    },

    {
      content:
        "1/8",
      isCorrect: false,
      questionId: 444,
    },
    {
      content: "1/80",
      isCorrect: false,
      questionId: 444,
    },
    {
      content: "1/40",
      isCorrect: false,
      questionId: 444,
    },
    {
      content:
        "1/36",
      isCorrect: true,
      questionId: 444,
    },

    {
      content: "Quần thể đạt tới trạng thái cân bằng khi không có sự tác động của các nhân tố tiến hóa và quá trình giao phối hoàn toàn ngẫu nhiên.",
      isCorrect: false,
      questionId: 445,
    },
    {
      content: "Xét về mặt di truyền, mỗi quần thể thường có một vốn gen đặc trưng thể hiện thông qua tần số alen và thành phần kiểu gen.",
      isCorrect: false,
      questionId: 445,
    },
    {
      content: "Đặc điểm di truyền nổi bật của quần thể ngẫu phối là sự đa dạng về kiểu gen và kiểu hình.",
      isCorrect: false,
      questionId: 445,
    },
    {
      content: "Hiện tượng giao phối cận huyết góp phần tạo nên sự cân bằng di truyền trong quần thể nên không có ý nghĩa đối với tiến hóa.",
      isCorrect: true,
      questionId: 445,
    },

    {
      content: "Tỉ lệ cá thể mang alen lặn trong quần thể chiếm 91%.",
      isCorrect: false,
      questionId: 446,
    },
    {
      content: "Tỉ lệ kiểu gen đồng hợp trong số cá thể mang kiểu hình trội chiếm 9%.",
      isCorrect: false,
      questionId: 446,
    },
    {
      content: "Lấy ngẫu nhiên một cá thể trội trong quần thể thì xác suất gặp các thể mang alen lặn là 13/17",
      isCorrect: false,
      questionId: 446,
    },
    {
      content: " Nếu loại bỏ các cá thể mang kiểu hình lặn và cho các cá thể còn lại giao phối ngẫu nhiên thì phải sau 2 thế hệ mới cân bằng di truyền.",
      isCorrect: true,
      questionId: 446,
    },

    {
      content: "340",
      isCorrect: false,
      questionId: 447,
    },
    {
      content: "680",
      isCorrect: false,
      questionId: 447,
    },
    {
      content: "790",
      isCorrect: false,
      questionId: 447,
    },
    {
      content: "1130",
      isCorrect: true,
      questionId: 447,
    },

    {
      content:
        "Chỉ khi có nhân tố đột biến thì quần thể mới xuất hiện kiểu gen mới.",
      isCorrect: false,
      questionId: 448,
    },
    {
      content: "Ở F2, trong các cá thể mang kiểu hình trội thì những cá thể mang kiểu gen dị hợp chiếm trên 50%",
      isCorrect: false,
      questionId: 448,
    },
    {
      content: "Nếu quần thể chỉ chịu tác động của nhân tố đột biến thì tần số alen của quần thể luôn được duy trì ổn định qua các thế hệ",
      isCorrect: false,
      questionId: 448,
    },
    {
      content: "Nếu quần thể chuyển sang tự thụ phấn thì sau một thế hệ tần số alen A = 0,7",
      isCorrect: true,
      questionId: 448,
    },

    {
      content:
        "Nếu những cây có cùng kiểu gen ở (P) mới giao phấn với nhau thì thành phần kiểu gen ở F1 là 0,45AA: 0,3Aa : 0,25aa.",
      isCorrect: false,
      questionId: 449,
    },
    {
      content:
        "Nếu cho các cây thân cao (P) giao phấn ngẫu nhiên thì ở F1, cây thân cao có tỉ lệ nhỏ hơn 90%.",
      isCorrect: false,
      questionId: 449,
    },
    {
      content: "Quần thể trên sẽ cân bằng di truyền sau 1 thế hệ giao phấn ngẫu nhiên.",
      isCorrect: false,
      questionId: 449,
    },
    {
      content: " Nếu lấy hạt phấn của các cây thân cao ở (P) thụ phấn cho các cây thân thấp thì tỉ lệ thân cao ở F1 trên 65%.",
      isCorrect: true,
      questionId: 449,
    },

    {
      content: "19%",
      isCorrect: false,
      questionId: 450,
    },
    {
      content:
        "1%",
      isCorrect: false,
      questionId: 450,
    },
    {
      content: "2%",
      isCorrect: false,
      questionId: 450,
    },
    {
      content: "5%",
      isCorrect: true,
      questionId: 450,
    },

    {
      content: "Tỉ lệ kiểu gen d ị hợp giảm đi 18,75% so với thế hệ P.",
      isCorrect: false,
      questionId: 451,
    },
    {
      content: "Tỉ lệ kiểu hình hoa trắng tăng thêm 18,75% so với thế hệ P.",
      isCorrect: false,
      questionId: 451,
    },
    {
      content: "Tỉ lệ kiểu gen đồng hợp trội t ăng thêm 17,5% so với thế hệ P.",
      isCorrect: false,
      questionId: 451,
    },
    {
      content: "Tỉ lệ kiểu hình hoa đỏ giảm đi 37,5% so với thế hệ P.",
      isCorrect: true,
      questionId: 451,
    },

    {
      content: "42,87%",
      isCorrect: false,
      questionId: 452,
    },
    {
      content: "85,73%",
      isCorrect: false,
      questionId: 452,
    },
    {
      content: "36,73%",
      isCorrect: false,
      questionId: 452,
    },
    {
      content: "46,36%",
      isCorrect: true,
      questionId: 452,
    },

    { content: "Tần số tương đối của 1 alen được tính bằng tỉ lệ phần trăm các kiểu hình của alen đó trong quần thể.", isCorrect: false, questionId: 453 },
    { content: "Vốn gen của quần thể là tập hợp tất cả các alen có trong quần thể tại một thời điểm xác định.", isCorrect: false, questionId: 453 },
    { content: "Tần số alen của các gen giống nhau ở các quần thể.", isCorrect: false, questionId: 453 },
    { content: "Cấu trúc di truyền của quần thể thể hiện thông qua tần số alen và tần số kiểu gen.", isCorrect: true, questionId: 453 },

    {
      content:
        "Đa dạng và phong phú về kiểu gen.",
      isCorrect: false,
      questionId: 454,
    },
    {
      content:
        "Quần thể bị phân hóa dần thành những dòng thuần có kiểu gen khác nhau.",
      isCorrect: false,
      questionId: 454,
    },
    {
      content: "Tần số thể dị hợp giảm và tần số thể đồng hợp tăng qua các thế hệ.",
      isCorrect: false,
      questionId: 454,
    },
    {
      content: "Tần số alen thường không thay đổi qua các thế hệ.",
      isCorrect: true,
      questionId: 454,
    },

    {
      content: "Tần số tương đối của các alen trong 1 gen nào đó là không đặc trưng cho từng quần thể.",
      isCorrect: false,
      questionId: 455,
    },
    {
      content: "Tần số tương đối của các alen trong 1 kiểu gen nào đó trong quần thể thay đổi qua các thế hệ.",
      isCorrect: false,
      questionId: 455,
    },
    {
      content:
        "Tần số tương đối của các alen trong 1gen nào đó là đặc trưng cho từng quần thể.",
      isCorrect: false,
      questionId: 455,
    },
    {
      content:
        "Tần số tương đối của các kiểu gen có tính đặc trưng cho từng quần thể.",
      isCorrect: true,
      questionId: 455,
    },

    { content: "9 kiểu gen", isCorrect: false, questionId: 456 },
    {
      content: "18 kiểu gen",
      isCorrect: false,
      questionId: 456,
    },
    {
      content: "45 kiểu gen",
      isCorrect: false,
      questionId: 456,
    },
    { content: "36 kiểu gen", isCorrect: true, questionId: 456 },

    {
      content:
        "30",
      isCorrect: false,
      questionId: 457,
    },
    {
      content:
        "60",
      isCorrect: false,
      questionId: 457,
    },
    {
      content: "45",
      isCorrect: false,
      questionId: 457,
    },
    {
      content: "32",
      isCorrect: true,
      questionId: 457,
    },

    { content: "A = 0,7 ; a = 0,3", isCorrect: false, questionId: 458 },
    { content: "A = 0,6 ; a = 0,4 ", isCorrect: false, questionId: 458 },
    { content: "A = 0,75 ; a = 0,25", isCorrect: false, questionId: 458 },
    { content: "A = 0,8 ; a = 0,2", isCorrect: true, questionId: 458 },

    { content: "0,3 AA : 0,6 Aa : 0,1 aa", isCorrect: false, questionId: 459 },
    { content: "0,6 AA : 0,3 Aa : 0,1 aa", isCorrect: false, questionId: 459 },
    { content: "0,0375 AA : 0,8625 Aa : 0,1 aa", isCorrect: false, questionId: 459 },
    { content: "0,8625 AA : 0,0375 Aa : 0,1 aa", isCorrect: true, questionId: 459 },

    {
      content: "20%",
      isCorrect: false,
      questionId: 460,
    },
    {
      content: "10%",
      isCorrect: false,
      questionId: 460,
    },
    {
      content: "25%",
      isCorrect: false,
      questionId: 460,
    },
    {
      content: "35%",
      isCorrect: true,
      questionId: 460,
    },
    //cate19
    {
      content: "Thoái hóa giống",
      isCorrect: false,
      questionId: 461,
    },
    {
      content: "Ưu thế lai",
      isCorrect: false,
      questionId: 461,
    },
    {
      content: "Bất thụ",
      isCorrect: false,
      questionId: 461,
    },
    {
      content: "Siêu trội",
      isCorrect: true,
      questionId: 461,
    },

    {
      content:
        "Biến dị thường biến",
      isCorrect: false,
      questionId: 462,
    },
    {
      content: "Các biến dị đột biến",
      isCorrect: false,
      questionId: 462,
    },
    {
      content:
        "Các ADN tái tổ hợp",
      isCorrect: false,
      questionId: 462,
    },
    {
      content: "Các biến dị tổ hợp",
      isCorrect: true,
      questionId: 462,
    },

    {
      content: "Ưu thế lai biểu hiện cao nhất ở đời F1, sau đó giảm dần qua các thế hệ.",
      isCorrect: false,
      questionId: 463,
    },
    {
      content:
        "Ưu thế lai biểu hiện ở đời F1, sau đó tăng dần qua các thế hệ.",
      isCorrect: false,
      questionId: 463,
    },
    {
      content:
        "Ưu thế lai biểu hiện ở con lai cao hay thấp không phụ thuộc vào số lượng cặp gen đồng dị hợp tử có trong kiểu gen.",
      isCorrect: false,
      questionId: 463,
    },
    {
      content:
        "Ưu thế lai biểu hiện ở con lai cao hay thấp phụ thuộc vào số lượng cặp gen đồng dị hợp tử có trong kiểu gen.",
      isCorrect: true,
      questionId: 463,
    },

    {
      content:
        "Khi lai giữa 2 cá thể thuộc cùng 1 dòng thuần chủng luôn cho con lai có ưu thế lai.",
      isCorrect: false,
      questionId: 464,
    },
    {
      content: "Khi lai giữa 2 dòng thuần chủng có kiểu gen khác nhau, ưu thế lai biểu hiện ở đời F1 sau đó tăng dần qua các thế hệ.",
      isCorrect: false,
      questionId: 464,
    },
    {
      content: "Khi lai giữa 2 dòng thuần chủng có kiểu gen khác nhau, phép lai thuận có thể không cho ưu thế lai nhưng phép lai nghịch lại có thể cho ưu thế lai và ngược lại.",
      isCorrect: false,
      questionId: 464,
    },
    {
      content:
        "Các con lai F1 có ưu thế lai luôn được giữ lại làm giống.",
      isCorrect: true,
      questionId: 464,
    },

    {
      content: "Ưu thế lai tỉ lệ thuận với số lượng cặp gen dị hợp tử có trong kiểu gen của con lai.",
      isCorrect: false,
      questionId: 465,
    },
    {
      content: "Ưu thế lai biểu hiện cao nhất ở đời F1 của phép lai khác dòng.",
      isCorrect: false,
      questionId: 465,
    },
    {
      content: "Ưu thế lai có thể được duy trì và củng cố bằng phương pháp tự thụ phấn hoặc giao phối gần.",
      isCorrect: false,
      questionId: 465,
    },
    {
      content: "Ưu thế lai được ứng dụng trong phép lai kinh tế.",
      isCorrect: true,
      questionId: 465,
    },

    {
      content: "Sinh sản sinh dưỡng",
      isCorrect: false,
      questionId: 466,
    },
    {
      content: "Sinh sản hữu tính",
      isCorrect: false,
      questionId: 466,
    },
    {
      content: "Tự thụ phấn",
      isCorrect: false,
      questionId: 466,
    },
    {
      content: "Lai khác thứ",
      isCorrect: true,
      questionId: 466,
    },

    {
      content: "Lúa",
      isCorrect: false,
      questionId: 467,
    },
    {
      content: "Cà chua",
      isCorrect: false,
      questionId: 467,
    },
    {
      content: "Dưa hấu",
      isCorrect: false,
      questionId: 467,
    },
    {
      content: "Nho",
      isCorrect: true,
      questionId: 467,
    },

    {
      content:
        "Một trong những giả thuyết để giải thích cơ sở di truyền của ưu thế lai được nhiều người thừa nhận là giả thuyết siêu trội.",
      isCorrect: false,
      questionId: 468,
    },
    {
      content: "Để tạo ra những con lai có kiểu gen đồng nhất người ta thường sử dụng phương pháp gây đột biến.",
      isCorrect: false,
      questionId: 468,
    },
    {
      content: "Người ta tạo ra những con lai khác dòng có ưu thế lai cao để sử dụng vào mục đích kinh tế.",
      isCorrect: false,
      questionId: 468,
    },
    {
      content: "Khi lai giữa các dòng tế bào xoma thuộc cùng 1 loài sẽ tạo ra các thể song nhị bội.",
      isCorrect: true,
      questionId: 468,
    },

    {
      content:
        "Ưu thế lai biểu hiện cao nhất ở đời F1, sau đó giảm dần qua các thế hệ.",
      isCorrect: false,
      questionId: 469,
    },
    {
      content:
        "Ở con lai, ưu thế lai cao hay thấp không phụ thuộc vào trạng thái dị hợp tử về nhiều cặp gen khác nhau.",
      isCorrect: false,
      questionId: 469,
    },
    {
      content: "Khi lai giữa 2 cá thể thuộc cùng 1 dòng thuần chủng luôn cho con lai có ưu thế lai.",
      isCorrect: false,
      questionId: 469,
    },
    {
      content: "Các con lai F1 có ưu thế lai luôn được giữ lại làm giống.",
      isCorrect: true,
      questionId: 469,
    },

    {
      content: "Gây đột biến. ",
      isCorrect: false,
      questionId: 470,
    },
    {
      content:
        "Lai hữu tính.",
      isCorrect: false,
      questionId: 470,
    },
    {
      content: "Tạo ADN tái tổ hợp.",
      isCorrect: false,
      questionId: 470,
    },
    {
      content: "Lai tế bào sinh dưỡng.",
      isCorrect: true,
      questionId: 470,
    },

    {
      content: "Bất thụ.",
      isCorrect: false,
      questionId: 471,
    },
    {
      content: "Thoái hóa giống.",
      isCorrect: false,
      questionId: 471,
    },
    {
      content: "Ưu thế lai.",
      isCorrect: false,
      questionId: 471,
    },
    {
      content: "Siêu trội.",
      isCorrect: true,
      questionId: 471,
    },

    {
      content: "Lai khác thứ.",
      isCorrect: false,
      questionId: 472,
    },
    {
      content: "Lai tế bào.",
      isCorrect: false,
      questionId: 472,
    },
    {
      content: "Lai khác dòng.",
      isCorrect: false,
      questionId: 472,
    },
    {
      content: "Lai khác loài.",
      isCorrect: true,
      questionId: 472,
    },

    { content: "Lai khác dòng", isCorrect: false, questionId: 473 },
    { content: "Lai phân tích", isCorrect: false, questionId: 473 },
    { content: "Lai thuận nghịch", isCorrect: false, questionId: 473 },
    { content: "Lai tế bào", isCorrect: true, questionId: 473 },

    {
      content:
        "Bào tử, hạt phấn.",
      isCorrect: false,
      questionId: 474,
    },
    {
      content:
        "Vật nuôi, vi sinh vật.",
      isCorrect: false,
      questionId: 474,
    },
    {
      content: "Cây trồng, vi sinh vật.",
      isCorrect: false,
      questionId: 474,
    },
    {
      content: "Vật nuôi, cây trồng.",
      isCorrect: true,
      questionId: 474,
    },

    {
      content: "Tỉ lệ tổ gen đồng hợp lặn tăng",
      isCorrect: false,
      questionId: 475,
    },
    {
      content: "Các gen tác động qua lại với nhau dễ gây đột biến gen",
      isCorrect: false,
      questionId: 475,
    },
    {
      content:
        "Tần số hoán vị gen cao, tạo điều kiện cho các gen quý tổ hợp lại trong 1 nhóm gen",
      isCorrect: false,
      questionId: 475,
    },
    {
      content:
        "Đời con sẽ phân li, ưu thế lai giảm dần",
      isCorrect: true,
      questionId: 475,
    },

    { content: "Con lai có năng suất thấp, sức chống chống chịu kém, khả năng sinh trưởng và phát triển chậm hơn so với các dạng bố mẹ.", isCorrect: false, questionId: 476 },
    {
      content: "Con lai có năng suất thấp, sức chống chống chịu cao, khả năng sinh trưởng và phát triển cao vượt trội so với các dạng bố mẹ.",
      isCorrect: false,
      questionId: 476,
    },
    {
      content: "Con lai có năng suất kém, sức chống chống chịu cao, khả năng sinh trưởng và phát triển kén hơn so với các dạng bố mẹ.",
      isCorrect: false,
      questionId: 476,
    },
    { content: "Con lai có năng suất, sức chống chống chịu, khả năng sinh trưởng và phát triển cao vượt trội so với các dạng bố mẹ.", isCorrect: true, questionId: 476 },

    {
      content:
        "Ưu thế lai là hiện tượng con lai có sức sống, khả năng chống chịu cao hơn các dạng bố mẹ",
      isCorrect: false,
      questionId: 477,
    },
    {
      content:
        "Ưu thế lai biểu hiện cao nhất ở F1 và giảm dần qua các thế hệ.",
      isCorrect: false,
      questionId: 477,
    },
    {
      content: "Ưu thế lai được tạo ra chủ yếu bằng cách lai giữa các dòng thuần có kiểu gen khác nhau.",
      isCorrect: false,
      questionId: 477,
    },
    {
      content: "Cơ thể có ưu thế lai được sử dụng làm giống vì cho năng suất cao.",
      isCorrect: true,
      questionId: 477,
    },

    { content: "Làm giống để truyền các đặc điểm tốt mà nó có cho thế hệ sau vì qua mỗi thế hệ các gen tốt sẽ dần được tích lũy.", isCorrect: false, questionId: 478 },
    { content: "Sử dụng con lai F1 cho lai tạo với các cá thể khác để tạo ra con giống mới phối hợp được các đặc điểm ưu thế của nhiều giống.", isCorrect: false, questionId: 478 },
    { content: " Sử dụng con lai này để sinh sản ra thế hệ sau làm giống thương phẩm vì qua mỗi thế hệ lai, các đặc điểm ưu thế được tích lũy.", isCorrect: false, questionId: 478 },
    { content: "Sử dụng trực tiếp F1 vào mục đích thương mại mà không sử dụng làm giống vì qua mỗi thế hệ ưu thế lai sẽ giảm dần.", isCorrect: true, questionId: 478 },

    { content: "Phát hiện các đặc điểm được tạo ra từ hiện tượng hoán vị gen để tìm tổ hợp lai có giá trị kinh tế nhất.", isCorrect: false, questionId: 479 },
    { content: "Xác định được sự tác động của các gen di truyền liên kết giới tính cũng như vai trò của tế bào chất lên sự biểu hiện của gen nhân.", isCorrect: false, questionId: 479 },
    { content: "Thấy sự khác nhau khi các locus nằm trên NST thường tương tác với nhau để cùng tạo ra kiểu hình.", isCorrect: false, questionId: 479 },
    { content: "Thấy sự biểu hiện khác nhau của các locus nằm trên các NST thường khác nhau.", isCorrect: true, questionId: 479 },

    {
      content: "8",
      isCorrect: false,
      questionId: 480,
    },
    {
      content: "4",
      isCorrect: false,
      questionId: 480,
    },
    {
      content: "1",
      isCorrect: false,
      questionId: 480,
    },
    {
      content: "2",
      isCorrect: true,
      questionId: 480,
    },
    //cate20
    {
      content: "Ngành khoa học vận dụng những hiểu biết về Di truyền học người vào y học để giải thích, chẩn đoán các tật, bệnh di truyền",
      isCorrect: false,
      questionId: 481,
    },
    {
      content: "Ngành khoa học vận dụng những hiểu biết về Di truyền học người vào y học để điều trị trong 1 số trường hợp bệnh lí",
      isCorrect: false,
      questionId: 481,
    },
    {
      content: "Ngành khoa học vận dụng những hiểu biết về Di truyền học người vào y học chỉ để phòng ngừa, hạn chế các bệnh, tật di truyền",
      isCorrect: false,
      questionId: 481,
    },
    {
      content: "Ngành khoa học vận dụng những hiểu biết về Di truyền học người vào y học giúp cho việc giải thích, chẩn đoán, phòng ngừa, hạn chế các bệnh tật di truyền và điều trị trong 1 số trường hợp bệnh lí.",
      isCorrect: true,
      questionId: 481,
    },

    {
      content:
        "Bệnh gây rối loạn trao đổi chất trong cơ thể.",
      isCorrect: false,
      questionId: 482,
    },
    {
      content: "Cơ chế gây bệnh ở mức độ tế bào.",
      isCorrect: false,
      questionId: 482,
    },
    {
      content:
        "Bệnh được chữa trị hoàn toàn nếu phát hiện sớm ở trẻ em.",
      isCorrect: false,
      questionId: 482,
    },
    {
      content: "Thiếu enzim xúc tác chuyển hóa pheninalanin thành tirozin.",
      isCorrect: true,
      questionId: 482,
    },

    {
      content: "Ung thư máu.",
      isCorrect: false,
      questionId: 483,
    },
    {
      content:
        "Hội chứng tiếng khóc mèo kêu.",
      isCorrect: false,
      questionId: 483,
    },
    {
      content:
        "Hội chứng đao.",
      isCorrect: false,
      questionId: 483,
    },
    {
      content:
        "Hội chứng đao.",
      isCorrect: true,
      questionId: 483,
    },

    {
      content:
        "Ung thư là 1 loại bệnh được hiểu đầy đủ là sự tăng sinh không kiểm soát được của một số loại tế bào trong cơ thể dẫn đến sự hình thành các khối u chèn ép các cơ quan trong cơ thể.",
      isCorrect: false,
      questionId: 484,
    },
    {
      content: "U ác tính khác với u lành tính là các tế bào của khối u có khả năng tách khỏi mô ban đầu di chuyển đến nơi khác, tạo nên nhiều khối u khác nhau.",
      isCorrect: false,
      questionId: 484,
    },
    {
      content: "Nguyên nhân gây ra ung thư có thể là do đột biến gen, đột biến NST.",
      isCorrect: false,
      questionId: 484,
    },
    {
      content:
        "Ung thư là 1 trong những bệnh nan y chưa có thuốc chữa.",
      isCorrect: true,
      questionId: 484,
    },

    {
      content: "Người bị hội chứng Đao trong tế bào có 47 NST.",
      isCorrect: false,
      questionId: 485,
    },
    {
      content: "Hội chứng Đao do đột biến lệch bội thể 1 nhiễm ở NST số 21.",
      isCorrect: false,
      questionId: 485,
    },
    {
      content: "Người bị hội chứng Đao thường thấp bé, má phệ, cổ rụt, khe mắt xếch, lưỡi dày, dị tật tim,… và khoảng 50% bệnh nhân chết trong 5 năm đầu.",
      isCorrect: false,
      questionId: 485,
    },
    {
      content: "Hội chứng Đao ít xuất hiện ở những trẻ được sinh ra khi người mẹ đã lớn tuổi.",
      isCorrect: true,
      questionId: 485,
    },

    {
      content: "XaXa x XaY",
      isCorrect: false,
      questionId: 486,
    },
    {
      content: "XAXa x XAY",
      isCorrect: false,
      questionId: 486,
    },
    {
      content: "XaXa x XAY",
      isCorrect: false,
      questionId: 486,
    },
    {
      content: "XAXA x XaY",
      isCorrect: true,
      questionId: 486,
    },

    {
      content: "50%",
      isCorrect: false,
      questionId: 487,
    },
    {
      content: "25%",
      isCorrect: false,
      questionId: 487,
    },
    {
      content: "0%",
      isCorrect: false,
      questionId: 487,
    },
    {
      content: "75%",
      isCorrect: true,
      questionId: 487,
    },

    {
      content:
        "Người vợ mang alen gây bệnh",
      isCorrect: false,
      questionId: 488,
    },
    {
      content: "Tất cả các con gái của họ đều không bị bệnh này",
      isCorrect: false,
      questionId: 488,
    },
    {
      content: "Xác suất sinh ra 1 người con trai bình thường của họ là 50%",
      isCorrect: false,
      questionId: 488,
    },
    {
      content: "Bệnh này chỉ biểu hiện ở nam mà không biểu hiện ở nữ.",
      isCorrect: true,
      questionId: 488,
    },

    {
      content:
        "XAXAxXaY",
      isCorrect: false,
      questionId: 489,
    },
    {
      content:
        "XAXaxXAY",
      isCorrect: false,
      questionId: 489,
    },
    {
      content: "XAXaxXaY",
      isCorrect: false,
      questionId: 489,
    },
    {
      content: "XaXaxXAY",
      isCorrect: true,
      questionId: 489,
    },

    {
      content: "Đột biến mất đoạn.",
      isCorrect: false,
      questionId: 490,
    },
    {
      content:
        "Đột biến đảo đoạn.",
      isCorrect: false,
      questionId: 490,
    },
    {
      content: "Đột biến lặp đoạn.",
      isCorrect: false,
      questionId: 490,
    },
    {
      content: "Đột biến chuyển đoạn.",
      isCorrect: true,
      questionId: 490,
    },

    {
      content: "Ở người gen tổng hợp một loại mARN được lặp lại tới 200 lần là biều hiện của điều hòa sau dịch mã.",
      isCorrect: false,
      questionId: 491,
    },
    {
      content: "Ung thư là bệnh do đột biến gen hoặc đột biến NST gây nên, không chịu ảnh hưởng của môi trường.",
      isCorrect: false,
      questionId: 491,
    },
    {
      content: "Trong chu kì tế bào, thời điểm dễ xảy ra đột biến gen nhất là pha S.",
      isCorrect: false,
      questionId: 491,
    },
    {
      content: "Dạng đột biến thay thế có thể tự phát sinh tự phát trong tể bào.",
      isCorrect: true,
      questionId: 491,
    },

    {
      content: "Bộ gen người này càng có sự biến đổi theo hướng thoái hóa",
      isCorrect: false,
      questionId: 492,
    },
    {
      content: "Tồn tại trong hệ gen người có nhiều gen ở trạng thái đồng hợp tử",
      isCorrect: false,
      questionId: 492,
    },
    {
      content: "Trong vốn gen của quần thể người tồn tại các gen đột biến gây chết hoặc nửa gây chết.",
      isCorrect: false,
      questionId: 492,
    },
    {
      content: "Do sự phân li đa dạng, hệ gen người gồm những gen xấu",
      isCorrect: true,
      questionId: 492,
    },

    { content: "Tạo môi trường sạch nhằm hạn chế tác nhân gây đột biến.", isCorrect: false, questionId: 493 },
    { content: "Khi bị mắc bệnh di truyền bắt buộc không được kết hôn.", isCorrect: false, questionId: 493 },
    { content: "Sàng lọc xét nghiệm trước sinh với những người có nguy cơ sinh con bị khuyết tật di truyền.", isCorrect: false, questionId: 493 },
    { content: "Sử dụng liệu pháp gen – kĩ thuật tương lai.", isCorrect: true, questionId: 493 },

    {
      content:
        "Góp phần chế tạo ra 1 số loại thuốc chữa bệnh di truyền",
      isCorrect: false,
      questionId: 494,
    },
    {
      content:
        "Định hướng sinh đẻ để dự phòng và hạn chế hậu quả xấu của các bệnh di truyền",
      isCorrect: false,
      questionId: 494,
    },
    {
      content: "Cho lời khuyên trong kết hôn giữa những người có nguy cơ mang gen gây bệnh ở trạng thái dị hợp",
      isCorrect: false,
      questionId: 494,
    },
    {
      content: "Chẩn đoán, cung cấp thông tin và cho lời khuyên và khả năng mắc 1 loại bệnh di truyền nào đó ở thế sau",
      isCorrect: true,
      questionId: 494,
    },

    {
      content: "Kĩ thuật chữa trị bệnh bằng cách thay thế các gen đột biến gây bệnh trong cơ thể người bằng các gen lành",
      isCorrect: false,
      questionId: 495,
    },
    {
      content: "Việc chữa trị các bệnh di truyền bằng cách phục hồi các chức năng của các gen bị đột biến",
      isCorrect: false,
      questionId: 495,
    },
    {
      content:
        "Việc chữa trị các bệnh di truyền bằng cách loại bỏ các gen bị đột biến gây bệnh ra khỏi tế bào",
      isCorrect: false,
      questionId: 495,
    },
    {
      content:
        "Việc chữa trị các bệnh di truyền bằng cách đưa vào cơ thể người bệnh loại thuốc đặc biệt nhằm làm bất hoạt các gen gây bệnh",
      isCorrect: true,
      questionId: 495,
    },

    { content: "1/8", isCorrect: false, questionId: 496 },
    {
      content: "3/8",
      isCorrect: false,
      questionId: 496,
    },
    {
      content: "3/64",
      isCorrect: false,
      questionId: 496,
    },
    { content: "1/4", isCorrect: true, questionId: 496 },

    {
      content:
        "Sinh thiết tua nhau thai lấy tế bào phôi cho phân tích protein",
      isCorrect: false,
      questionId: 497,
    },
    {
      content:
        "Sinh thiết tua nhau thai lấy tế bào phôi cho phân tích ADN",
      isCorrect: false,
      questionId: 497,
    },
    {
      content: "Chọc dò dịch ối lấy tế bào phôi cho phân tích NST thường",
      isCorrect: false,
      questionId: 497,
    },
    {
      content: "Chọc dò dịch ối lấy tế bào phôi cho phân tích NST giới tính X",
      isCorrect: true,
      questionId: 497,
    },

    { content: "Tế bào mang ADN tái tổ hợp mang gen lành được đưa vào cơ thể bệnh nhân để sản sinh ra những tế bào bình thường thay thế những tế bào bệnh", isCorrect: false, questionId: 498 },
    { content: "Dùng virut sống trong cơ thể người làm thể truyền sau khi đã loại bỏ những gen gây bệnh của virut", isCorrect: false, questionId: 498 },
    { content: "Dùng plasmit làm thể truyền để chuyển gen lành vào cơ thể người bệnh", isCorrect: false, questionId: 498 },
    { content: "Thể truyền được gắn gen lành cho xâm nhập vào tế bào của bệnh nhân", isCorrect: true, questionId: 498 },

    { content: "Bố và mẹ đều bị bệnh, sinh con có đứa bị bệnh có đứa không bị bệnh.", isCorrect: false, questionId: 499 },
    { content: "Bố và mẹ đều không bị bệnh, sinh con có đứa bị bệnh có đứa không bị bệnh.", isCorrect: false, questionId: 499 },
    { content: "Bố bị bệnh, mẹ không bị bệnh thì con trai không bị bệnh, con gái bị bệnh.", isCorrect: false, questionId: 499 },
    { content: "Bố không bị bệnh, mẹ bị bệnh thì con gái không bị bệnh, con trai có đứa bị bệnh, có đứa không bị bệnh.", isCorrect: true, questionId: 499 },

    {
      content: "5/12",
      isCorrect: false,
      questionId: 500,
    },
    {
      content: "3/4",
      isCorrect: false,
      questionId: 500,
    },
    {
      content: "1/12",
      isCorrect: false,
      questionId: 500,
    },
    {
      content: "3/8",
      isCorrect: true,
      questionId: 500,
    },
    //cate21
    {
      content: "Sắp xếp danh sách học sinh theo thứ tự tăng dần của tên",
      isCorrect: false,
      questionId: 501,
    },
    {
      content: "Tìm học sinh có điểm môn toán cao nhất khối",
      isCorrect: false,
      questionId: 501,
    },
    {
      content: "Tính tỉ lệ học sinh trên trung bình môn Tin của từng lớp",
      isCorrect: false,
      questionId: 501,
    },
    {
      content: "Một học sinh mới chuyển từ trường khác đến",
      isCorrect: true,
      questionId: 501,
    },

    {
      content:
        "Khảo sát → Kiểm thử → Thiết kế",
      isCorrect: false,
      questionId: 502,
    },
    {
      content: "Thiết kế → Khảo sát → Kiểm thử",
      isCorrect: false,
      questionId: 502,
    },
    {
      content:
        "Thiết kế → Kiểm thử → Khảo sát",
      isCorrect: false,
      questionId: 502,
    },
    {
      content: " Khảo sát → Thiết kế → Kiểm thử",
      isCorrect: true,
      questionId: 502,
    },

    {
      content: "Cung cấp môi trường tạo lập CSDL",
      isCorrect: false,
      questionId: 503,
    },
    {
      content:
        "Cung cấp môi trường cập nhật và khai thác dữ liệu",
      isCorrect: false,
      questionId: 503,
    },
    {
      content:
        "Cung cấp công cụ kiểm soát, điều khiển truy cập vào CSDL.",
      isCorrect: false,
      questionId: 503,
    },
    {
      content:
        "Cả ba ý trên",
      isCorrect: true,
      questionId: 503,
    },

    {
      content:
        "Mẫu hỏi (query)",
      isCorrect: false,
      questionId: 504,
    },
    {
      content: "Biểu mẫu (form)",
      isCorrect: false,
      questionId: 504,
    },
    {
      content: "Báo cáo (report)",
      isCorrect: false,
      questionId: 504,
    },
    {
      content:
        "Bảng (table)",
      isCorrect: true,
      questionId: 504,
    },

    {
      content: "Địa chỉ",
      isCorrect: false,
      questionId: 505,
    },
    {
      content: "Điểm trung bình",
      isCorrect: false,
      questionId: 505,
    },
    {
      content: "Ngày sinh",
      isCorrect: false,
      questionId: 505,
    },
    {
      content: "Mã học sinh",
      isCorrect: true,
      questionId: 505,
    },

    {
      content: "Caption",
      isCorrect: false,
      questionId: 506,
    },
    {
      content: "Default Value",
      isCorrect: false,
      questionId: 506,
    },
    {
      content: "Field Size",
      isCorrect: false,
      questionId: 506,
    },
    {
      content: "Format",
      isCorrect: true,
      questionId: 506,
    },

    {
      content: "Trường (field): là cột của bảng, thể hiện một thuộc tính của chủ thể cần quản lí",
      isCorrect: false,
      questionId: 507,
    },
    {
      content: "Bản ghi (record): là hàng của bảng, gồm dữ liệu về các thuộc tính của chủ thể được quản lí.",
      isCorrect: false,
      questionId: 507,
    },
    {
      content: "Kiểu dữ liệu (Data Type): là kiểu của dữ liệu lưu trong một trường.",
      isCorrect: false,
      questionId: 507,
    },
    {
      content: "Một trường có thể có nhiều kiểu dữ liệu",
      isCorrect: true,
      questionId: 507,
    },

    {
      content:
        "Reports",
      isCorrect: false,
      questionId: 508,
    },
    {
      content: "Tables",
      isCorrect: false,
      questionId: 508,
    },
    {
      content: "Forms",
      isCorrect: false,
      questionId: 508,
    },
    {
      content: "Queries",
      isCorrect: true,
      questionId: 508,
    },

    {
      content:
        "Yes/No",
      isCorrect: false,
      questionId: 509,
    },
    {
      content:
        "Number",
      isCorrect: false,
      questionId: 509,
    },
    {
      content: "Currency",
      isCorrect: false,
      questionId: 509,
    },
    {
      content: "Text",
      isCorrect: true,
      questionId: 509,
    },

    {
      content: "AutoNumber",
      isCorrect: false,
      questionId: 510,
    },
    {
      content:
        " Yes/No",
      isCorrect: false,
      questionId: 510,
    },
    {
      content: "Currency",
      isCorrect: false,
      questionId: 510,
    },
    {
      content: "Number",
      isCorrect: true,
      questionId: 510,
    },

    {
      content: "Chở về dữ liệu ban đầu sau khi lọc",
      isCorrect: false,
      questionId: 511,
    },
    {
      content: "Tìm kiếm và thay thế",
      isCorrect: false,
      questionId: 511,
    },
    {
      content: "Xoá bản ghi",
      isCorrect: false,
      questionId: 511,
    },
    {
      content: "Thêm bản ghi mới",
      isCorrect: true,
      questionId: 511,
    },

    {
      content: "Lọc theo ô dữ liệu đang chọn",
      isCorrect: false,
      questionId: 512,
    },
    {
      content: "Sắp xếp các bản ghi theo thứ tự tăng dần",
      isCorrect: false,
      questionId: 512,
    },
    {
      content: "Sắp xếp các bản ghi theo thứ tự giảm dần",
      isCorrect: false,
      questionId: 512,
    },
    {
      content: "Lọc theo mẫu",
      isCorrect: true,
      questionId: 512,
    },

    { content: "Chuyển sang chế độ trang dữ liệu", isCorrect: false, questionId: 513 },
    { content: "Chuyển sang chế độ thiết kế", isCorrect: false, questionId: 513 },
    { content: "Lưu cấu trúc bảng", isCorrect: false, questionId: 513 },
    { content: "In dữ liệu từ bảng", isCorrect: true, questionId: 513 },

    {
      content:
        "AutoNumber",
      isCorrect: false,
      questionId: 514,
    },
    {
      content:
        "Number",
      isCorrect: false,
      questionId: 514,
    },
    {
      content: "Currency",
      isCorrect: false,
      questionId: 514,
    },
    {
      content: "Text",
      isCorrect: true,
      questionId: 514,
    },

    {
      content: "Number",
      isCorrect: false,
      questionId: 515,
    },
    {
      content: "Date/Time",
      isCorrect: false,
      questionId: 515,
    },
    {
      content:
        "Currency",
      isCorrect: false,
      questionId: 515,
    },
    {
      content:
        "AutoNumber",
      isCorrect: true,
      questionId: 515,
    },

    { content: "Chế độ trang dữ liệu", isCorrect: false, questionId: 516 },
    {
      content: "Chế độ dòng dữ liệu",
      isCorrect: false,
      questionId: 516,
    },
    {
      content: "Chế độ trạng thái thiết kế",
      isCorrect: false,
      questionId: 516,
    },
    { content: "Chế độ thiết kế", isCorrect: true, questionId: 516 },

    {
      content:
        "Người lập trình ứng dụng",
      isCorrect: false,
      questionId: 517,
    },
    {
      content:
        "Người dùng",
      isCorrect: false,
      questionId: 517,
    },
    {
      content: "Người kiểm thử",
      isCorrect: false,
      questionId: 517,
    },
    {
      content: "Người quản trị CSDL",
      isCorrect: true,
      questionId: 517,
    },

    { content: "Number", isCorrect: false, questionId: 518 },
    { content: "Currency", isCorrect: false, questionId: 518 },
    { content: "AutoNumber", isCorrect: false, questionId: 518 },
    { content: "Date/Time", isCorrect: true, questionId: 518 },

    { content: "Cập nhật và thay đổi dữ liệu", isCorrect: false, questionId: 519 },
    { content: "Tạo và thay đổi cấu trúc bảng", isCorrect: false, questionId: 519 },
    { content: "Cả A và B đều đúng", isCorrect: false, questionId: 519 },
    { content: "Cả A và B đều sai", isCorrect: true, questionId: 519 },

    {
      content: "Người lập trình ứng dụng",
      isCorrect: false,
      questionId: 520,
    },
    {
      content: "Người dùng",
      isCorrect: false,
      questionId: 520,
    },
    {
      content: "Người quản trị CSDL",
      isCorrect: false,
      questionId: 520,
    },
    {
      content: "Cả ba ý trên",
      isCorrect: true,
      questionId: 520,
    },
    //cate22
    {
      content: "1975",
      isCorrect: false,
      questionId: 521,
    },
    {
      content: "2000",
      isCorrect: false,
      questionId: 521,
    },
    {
      content: "1995",
      isCorrect: false,
      questionId: 521,
    },
    {
      content: "1970",
      isCorrect: true,
      questionId: 521,
    },

    {
      content:
        "Mô hình phân cấp",
      isCorrect: false,
      questionId: 522,
    },
    {
      content: "Mô hình cơ sở quan hệ",
      isCorrect: false,
      questionId: 522,
    },
    {
      content:
        "Mô hình hướng đối tượng",
      isCorrect: false,
      questionId: 522,
    },
    {
      content: "Tạo cấu trúc bảng",
      isCorrect: true,
      questionId: 522,
    },

    {
      content: "Chọn khoá chính",
      isCorrect: false,
      questionId: 523,
    },
    {
      content:
        "Ðặt tên bảng và lưu cấu trúc bảng",
      isCorrect: false,
      questionId: 523,
    },
    {
      content:
        "Tạo cấu trúc bảng",
      isCorrect: false,
      questionId: 523,
    },
    {
      content:
        "Nhập dữ liệu ban đầu",
      isCorrect: true,
      questionId: 523,
    },

    {
      content:
        "Kiểu dữ liệu của một bảng",
      isCorrect: false,
      questionId: 524,
    },
    {
      content: "Tập các thuộc tính trong một bảng",
      isCorrect: false,
      questionId: 524,
    },
    {
      content: "Tập các kiểu dữ liệu trong Access",
      isCorrect: false,
      questionId: 524,
    },
    {
      content:
        "Kiểu dữ liệu của một thuộc tính",
      isCorrect: true,
      questionId: 524,
    },

    {
      content: "Sắp xếp các bản ghi",
      isCorrect: false,
      questionId: 525,
    },
    {
      content: "Kết xuất báo cáo",
      isCorrect: false,
      questionId: 525,
    },
    {
      content: "Xem dữ liệu",
      isCorrect: false,
      questionId: 525,
    },
    {
      content: "Thêm bản ghi mới",
      isCorrect: true,
      questionId: 525,
    },

    {
      content: "Tạo ra một hay nhiều biểu mẫu",
      isCorrect: false,
      questionId: 526,
    },
    {
      content: "Tạo ra một hay nhiều báo cáo",
      isCorrect: false,
      questionId: 526,
    },
    {
      content: "Tạo ra một hay nhiều mẫu hỏi",
      isCorrect: false,
      questionId: 526,
    },
    {
      content: "Tạo ra một hay nhiều bảng",
      isCorrect: true,
      questionId: 526,
    },

    {
      content: "Để tổ chức lưu trữ dữ liệu hợp lí hơn",
      isCorrect: false,
      questionId: 527,
    },
    {
      content: "Không làm thay đổi dữ liệu trên đĩa",
      isCorrect: false,
      questionId: 527,
    },
    {
      content: "Có thể thực hiện sắp xếp trên một vài trường với mức ưu tiên khác nhau",
      isCorrect: false,
      questionId: 527,
    },
    {
      content: "Chỉ thực hiện sắp xếp trên một trường",
      isCorrect: true,
      questionId: 527,
    },

    {
      content:
        "Nhập dữ liệu ban đầu",
      isCorrect: false,
      questionId: 528,
    },
    {
      content: "Thêm, xóa bản ghi",
      isCorrect: false,
      questionId: 528,
    },
    {
      content: "Sửa những dữ liệu chưa phù hợp",
      isCorrect: false,
      questionId: 528,
    },
    {
      content: "Sao chép CSDL thành bản sao dự phòng",
      isCorrect: true,
      questionId: 528,
    },

    {
      content:
        "Là yêu cầu máy thực hiện lệnh gì đó.",
      isCorrect: false,
      questionId: 529,
    },
    {
      content:
        "Là một giao diện để hiển thị thông tin.",
      isCorrect: false,
      questionId: 529,
    },
    {
      content: "Là một đối tượng để nhập dữ liệu vào bảng.",
      isCorrect: false,
      questionId: 529,
    },
    {
      content: "Là một dạng bộ lọc; có khả năng thu thập thông tin từ nhiều bảng trong một CSDL quan hệ",
      isCorrect: true,
      questionId: 529,
    },

    {
      content: "Cấu trúc dữ liệu",
      isCorrect: false,
      questionId: 530,
    },
    {
      content:
        "Các ràng buộc dữ liệu",
      isCorrect: false,
      questionId: 530,
    },
    {
      content: "Các thao tác, phép toán trên dữ liệu",
      isCorrect: false,
      questionId: 530,
    },
    {
      content: "Tất cả đều đúng",
      isCorrect: true,
      questionId: 530,
    },

    {
      content: "Chọn hai bảng và nhấn phím Delete",
      isCorrect: false,
      questionId: 531,
    },
    {
      content: "Chọn tất cả các bảng và nhấn phím Delete",
      isCorrect: false,
      questionId: 531,
    },
    {
      content: "Nháy đúp vào đường liên kết rồi nhấn phím Delete",
      isCorrect: false,
      questionId: 531,
    },
    {
      content: "Chọn đường liên kết giữa hai bảng đó và nhấn phím Delete",
      isCorrect: true,
      questionId: 531,
    },

    {
      content: "Hiển thị dữ liệu trong bảng dưới dạng thuận tiện để xem, nhập và sửa dữ liệu",
      isCorrect: false,
      questionId: 532,
    },
    {
      content: "Thực hiện các thao tác thông qua các nút lệnh",
      isCorrect: false,
      questionId: 532,
    },
    {
      content: "Lưu trữ dữ liệu",
      isCorrect: false,
      questionId: 532,
    },
    {
      content: "Câu A và B đúng",
      isCorrect: true,
      questionId: 532,
    },

    { content: "Show Table", isCorrect: false, questionId: 533 },
    { content: "Form Wizard", isCorrect: false, questionId: 533 },
    { content: "Design View", isCorrect: false, questionId: 533 },
    { content: "Relationship", isCorrect: true, questionId: 533 },

    {
      content:
        "Chế độ trang dữ liệu, chế độ mẫu hỏi",
      isCorrect: false,
      questionId: 534,
    },
    {
      content:
        "Chế độ mẫu hỏi, chế độ biểu mẫu",
      isCorrect: false,
      questionId: 534,
    },
    {
      content: "Chế độ biểu mẫu, chế độ thiết kế",
      isCorrect: false,
      questionId: 534,
    },
    {
      content: "Chế độ thiết kế, chế độ trang dữ liệu",
      isCorrect: true,
      questionId: 534,
    },

    {
      content: "[GT]= “Nữ” OR [DiaChi] = “Hà Nội”",
      isCorrect: false,
      questionId: 535,
    },
    {
      content: "GT= [Nữ] AND DiaChi = [Hà Nội]",
      isCorrect: false,
      questionId: 535,
    },
    {
      content:
        "GT: “Nữ” NOT DiaChi = “ Hà Nội ”",
      isCorrect: false,
      questionId: 535,
    },
    {
      content:
        "[GT]= “Nữ” AND [DiaChi] = “Hà Nội”",
      isCorrect: true,
      questionId: 535,
    },

    { content: "Chọn trường đưa vào báo cáo", isCorrect: false, questionId: 536 },
    {
      content: "Gộp nhóm dữ liệu",
      isCorrect: false,
      questionId: 536,
    },
    {
      content: "Thay đổi kích thước các trường trong báo cáo",
      isCorrect: false,
      questionId: 536,
    },
    { content: " Lọc những bản ghi thỏa mãn một điều kiện nào đó", isCorrect: true, questionId: 536 },

    {
      content:
        "Kiểu dữ liệu của một thuộc tính",
      isCorrect: false,
      questionId: 537,
    },
    {
      content:
        "Bảng",
      isCorrect: false,
      questionId: 537,
    },
    {
      content: "Cột",
      isCorrect: false,
      questionId: 537,
    },
    {
      content: "Hàng",
      isCorrect: true,
      questionId: 537,
    },

    { content: "Thường xuyên sao chép dữ liệu", isCorrect: false, questionId: 538 },
    { content: "Thường xuyên nâng cấp phần cứng, phần mềm", isCorrect: false, questionId: 538 },
    { content: "Giảm số lần đăng nhập vào hệ thống", isCorrect: false, questionId: 538 },
    { content: "Thường xuyên thay đổi các yếu tố của hệ thống bảo vệ", isCorrect: true, questionId: 538 },

    { content: "Thêm một trường vào cuối bảng", isCorrect: false, questionId: 539 },
    { content: "Đổi tên một trường", isCorrect: false, questionId: 539 },
    { content: "Chèn một trường vào giữa các trường hiện có", isCorrect: false, questionId: 539 },
    { content: "Thay đổi kiểu dữ liệu của một trường", isCorrect: true, questionId: 539 },

    {
      content: "Biên bản hệ thống",
      isCorrect: false,
      questionId: 540,
    },
    {
      content: "Bảng phân quyền truy cập",
      isCorrect: false,
      questionId: 540,
    },
    {
      content: "Mã hóa thông tin",
      isCorrect: false,
      questionId: 540,
    },
    {
      content: "Các tham số bảo vệ",
      isCorrect: true,
      questionId: 540,
    },
    //cate23
    {
      content: "Dòng thông báo lỗi khi nhập giá trị của trường A không hợp lệ",
      isCorrect: false,
      questionId: 541,
    },
    {
      content: "Dòng thông báo xuất hiện khi con trỏ di chuyển vào cột A",
      isCorrect: false,
      questionId: 541,
    },
    {
      content: "Điều kiện đòi hỏi để con trỏ có thể di chuyển vào cột A",
      isCorrect: false,
      questionId: 541,
    },
    {
      content: "Điều kiện hợp lệ dữ liệu để giới hạn miền giá trị nhập vào trường A",
      isCorrect: true,
      questionId: 541,
    },

    {
      content:
        "256",
      isCorrect: false,
      questionId: 542,
    },
    {
      content: "10",
      isCorrect: false,
      questionId: 542,
    },
    {
      content:
        "128",
      isCorrect: false,
      questionId: 542,
    },
    {
      content: "255",
      isCorrect: true,
      questionId: 542,
    },

    {
      content: "Có khoảng trắng",
      isCorrect: false,
      questionId: 543,
    },
    {
      content:
        "Có chiều dài tên tùy ý",
      isCorrect: false,
      questionId: 543,
    },
    {
      content:
        "Không có khoảng trắng",
      isCorrect: false,
      questionId: 543,
    },
    {
      content:
        "Có chiều dài tối đa là 64 ký tự, không nên dùng khoảng trắng và không nên sử dụng tiếng Việt có dấu",
      isCorrect: true,
      questionId: 543,
    },

    {
      content:
        "Máy tính cá nhân",
      isCorrect: false,
      questionId: 544,
    },
    {
      content: "Các mạng máy tính trong mạng toàn cầu",
      isCorrect: false,
      questionId: 544,
    },
    {
      content: "Các máy tính chạy trong mạng cục bộ",
      isCorrect: false,
      questionId: 544,
    },
    {
      content:
        "Cả A và C",
      isCorrect: true,
      questionId: 544,
    },

    {
      content: "Lập bảng",
      isCorrect: false,
      questionId: 545,
    },
    {
      content: "Tính toán và khai thác dữ liệu",
      isCorrect: false,
      questionId: 545,
    },
    {
      content: "Lưu trữ dữ liệu",
      isCorrect: false,
      questionId: 545,
    },
    {
      content: "Ba câu trên đều đúng",
      isCorrect: true,
      questionId: 545,
    },

    {
      content: "Chọn nút Create",
      isCorrect: false,
      questionId: 546,
    },
    {
      content: "Chọn File -> New",
      isCorrect: false,
      questionId: 546,
    },
    {
      content: "Nhập tên cơ sở dữ liệu",
      isCorrect: false,
      questionId: 546,
    },
    {
      content: "Chọn Blank Database",
      isCorrect: true,
      questionId: 546,
    },

    {
      content: "Bảng, Macro, Biểu mẫu, Mẫu hỏi",
      isCorrect: false,
      questionId: 547,
    },
    {
      content: "Bảng, Macro, Biểu mẫu, Báo cáo",
      isCorrect: false,
      questionId: 547,
    },
    {
      content: "Bảng, Mẫu hỏi, Biểu mẫu, Báo cáo",
      isCorrect: false,
      questionId: 547,
    },
    {
      content: "Bảng, Macro, Môđun, Báo cáo",
      isCorrect: true,
      questionId: 547,
    },

    {
      content:
        "Table",
      isCorrect: false,
      questionId: 548,
    },
    {
      content: "Form",
      isCorrect: false,
      questionId: 548,
    },
    {
      content: "Query",
      isCorrect: false,
      questionId: 548,
    },
    {
      content: "Report",
      isCorrect: true,
      questionId: 548,
    },

    {
      content:
        "Create table by using wizard",
      isCorrect: false,
      questionId: 549,
    },
    {
      content:
        "File/open/",
      isCorrect: false,
      questionId: 549,
    },
    {
      content: "File/new/Blank Database",
      isCorrect: false,
      questionId: 549,
    },
    {
      content: "Create Table in Design View",
      isCorrect: true,
      questionId: 549,
    },

    {
      content: "File/Close",
      isCorrect: false,
      questionId: 550,
    },
    {
      content:
        "Nháy vào nút (X) nằm ở góc trên bên phải màn hình làm việc của Access",
      isCorrect: false,
      questionId: 550,
    },
    {
      content: "File/Exit",
      isCorrect: false,
      questionId: 550,
    },
    {
      content: "Câu B hoặc C",
      isCorrect: true,
      questionId: 550,
    },

    {
      content: "Edit – Print",
      isCorrect: false,
      questionId: 551,
    },
    {
      content: "File – Print",
      isCorrect: false,
      questionId: 551,
    },
    {
      content: "Windows – Print",
      isCorrect: false,
      questionId: 551,
    },
    {
      content: "Tools – Print",
      isCorrect: true,
      questionId: 551,
    },

    {
      content: "Lọc là một công cụ của hệ QT CSDL cho phép tìm ra những bản ghi thỏa mãn một số điều kiện nào đó phục vụ tìm kiếm",
      isCorrect: false,
      questionId: 552,
    },
    {
      content: "Lọc tìm được các bản ghi trong nhiều bảng thỏa mãn với điều kiện lọc",
      isCorrect: false,
      questionId: 552,
    },
    {
      content: "Sử dụng lọc theo ô dữ liệu đang chọn để tìm nhanh các bản ghi có dữ liệu trùng với ô đang chọn",
      isCorrect: false,
      questionId: 552,
    },
    {
      content: "Sử dụng lọc theo mẫu để tìm các bản ghi thỏa mãn các tiêu chí phức tạp",
      isCorrect: true,
      questionId: 552,
    },

    { content: "Yes/No", isCorrect: false, questionId: 553 },
    { content: "Boolean", isCorrect: false, questionId: 553 },
    { content: "True/False", isCorrect: false, questionId: 553 },
    { content: "Date/Time", isCorrect: true, questionId: 553 },

    {
      content:
        "Number",
      isCorrect: false,
      questionId: 554,
    },
    {
      content:
        "Currency",
      isCorrect: false,
      questionId: 554,
    },
    {
      content: "Text",
      isCorrect: false,
      questionId: 554,
    },
    {
      content: "Date/time",
      isCorrect: true,
      questionId: 554,
    },

    {
      content: "AutoNumber",
      isCorrect: false,
      questionId: 555,
    },
    {
      content: "Yes/No",
      isCorrect: false,
      questionId: 555,
    },
    {
      content:
        "Number",
      isCorrect: false,
      questionId: 555,
    },
    {
      content:
        "Currency",
      isCorrect: true,
      questionId: 555,
    },

    { content: "Text", isCorrect: false, questionId: 556 },
    {
      content: "Currenc",
      isCorrect: false,
      questionId: 556,
    },
    {
      content: "Longint",
      isCorrect: false,
      questionId: 556,
    },
    { content: "Memo", isCorrect: true, questionId: 556 },

    {
      content:
        "Nhập trực tiếp trong chế độ trang dữ liệu",
      isCorrect: false,
      questionId: 557,
    },
    {
      content:
        "Nháy đúp trái chuột lên tên bảng cần nhập dữ liệu",
      isCorrect: false,
      questionId: 557,
    },
    {
      content: "Dùng biểu mẫu",
      isCorrect: false,
      questionId: 557,
    },
    {
      content: "A và B",
      isCorrect: true,
      questionId: 557,
    },

    { content: "Thay đổi dữ liệu trong các bảng", isCorrect: false, questionId: 558 },
    { content: "Thay đổi dữ liệu trong các bảng gồm: thêm bản ghi mới, chỉnh sửa, xóa bản ghi", isCorrect: false, questionId: 558 },
    { content: "Thay đổi cấu trúc của bảng", isCorrect: false, questionId: 558 },
    { content: "Thay đổi cách hiển thị dữ liệu trong bảng", isCorrect: true, questionId: 558 },

    { content: "Record", isCorrect: false, questionId: 559 },
    { content: "New Record", isCorrect: false, questionId: 559 },
    { content: "Rows", isCorrect: false, questionId: 559 },
    { content: "New Rows", isCorrect: true, questionId: 559 },

    {
      content: "Edit/ Sort Ascending",
      isCorrect: false,
      questionId: 560,
    },
    {
      content: "Insert/New Record",
      isCorrect: false,
      questionId: 560,
    },
    {
      content: "Record/Sort/Sort Ascending",
      isCorrect: false,
      questionId: 560,
    },
    {
      content: "Record/Sort/Sort Descending",
      isCorrect: true,
      questionId: 560,
    },
    //cate24
    {
      content: "Báo cáo",
      isCorrect: false,
      questionId: 561,
    },
    {
      content: "Bảng",
      isCorrect: false,
      questionId: 561,
    },
    {
      content: "Mẫu hỏi",
      isCorrect: false,
      questionId: 561,
    },
    {
      content: "Biểu mẫu",
      isCorrect: true,
      questionId: 561,
    },

    {
      content:
        "Thể hiện được sự so sánh và tổng hợp thông tin từ các nhóm dữ liệu",
      isCorrect: false,
      questionId: 562,
    },
    {
      content: "Trình bày nội dung văn bản theo mẫu quy định",
      isCorrect: false,
      questionId: 562,
    },
    {
      content:
        "A và B đều đúng",
      isCorrect: false,
      questionId: 562,
    },
    {
      content: "A và B đều sai",
      isCorrect: true,
      questionId: 562,
    },

    {
      content: "Tables",
      isCorrect: false,
      questionId: 563,
    },
    {
      content:
        "Forms",
      isCorrect: false,
      questionId: 563,
    },
    {
      content:
        "Queries",
      isCorrect: false,
      questionId: 563,
    },
    {
      content:
        "Reports",
      isCorrect: true,
      questionId: 563,
    },

    {
      content:
        "Bảng, biểu mẫu",
      isCorrect: false,
      questionId: 564,
    },
    {
      content: "Mẫu hỏi, báo cáo",
      isCorrect: false,
      questionId: 564,
    },
    {
      content: "Báo cáo",
      isCorrect: false,
      questionId: 564,
    },
    {
      content:
        "Bảng",
      isCorrect: true,
      questionId: 564,
    },

    {
      content: "Reports",
      isCorrect: false,
      questionId: 565,
    },
    {
      content: "Queries",
      isCorrect: false,
      questionId: 565,
    },
    {
      content: "Forms",
      isCorrect: false,
      questionId: 565,
    },
    {
      content: "Table",
      isCorrect: true,
      questionId: 565,
    },

    {
      content: "Bộ nhớ trong, Bộ nhớ ngoài",
      isCorrect: false,
      questionId: 566,
    },
    {
      content: "Cache, Bộ nhớ ngoài",
      isCorrect: false,
      questionId: 566,
    },
    {
      content: "Bộ nhớ ngoài, ROM",
      isCorrect: false,
      questionId: 566,
    },
    {
      content: "Đĩa quang, Bộ nhớ trong",
      isCorrect: true,
      questionId: 566,
    },

    {
      content: "Chia sẻ tài nguyên",
      isCorrect: false,
      questionId: 567,
    },
    {
      content: "Nhãn hiệu của một số thiết bị kết nối mạng",
      isCorrect: false,
      questionId: 567,
    },
    {
      content: "Thực hiện lệnh in trong mạng cục bộ ",
      isCorrect: false,
      questionId: 567,
    },
    {
      content: "Một phần mềm hỗ trợ sử dụng mạng cục bộ",
      isCorrect: true,
      questionId: 567,
    },

    {
      content:
        "Chọn thư mục hay tâp tin cần xóa -> Delete",
      isCorrect: false,
      questionId: 568,
    },
    {
      content: "Chọn thư mục hay tâp tin cần xóa -> Ctrl + Delete",
      isCorrect: false,
      questionId: 568,
    },
    {
      content: "Chọn thư mục hay tâp tin cần xóa -> Alt + Delete",
      isCorrect: false,
      questionId: 568,
    },
    {
      content: "Chọn thư mục hay tâp tin cần xóa -> Shift + Delete",
      isCorrect: true,
      questionId: 568,
    },

    {
      content:
        "Bàn phím (Keyboard), Chuột (Mouse), Máy in (Printer)",
      isCorrect: false,
      questionId: 569,
    },
    {
      content:
        "Máy quét ảnh (Scaner).",
      isCorrect: false,
      questionId: 569,
    },
    {
      content: "Bàn phím (Keyboard), Chuột (Mouse) và Máy quét ảnh (Scaner).",
      isCorrect: false,
      questionId: 569,
    },
    {
      content: "Máy quét ảnh (Scaner), Chuột (Mouse)",
      isCorrect: true,
      questionId: 569,
    },

    {
      content: "Cung cấp và xử lý các phần cứng và phần mềm",
      isCorrect: false,
      questionId: 570,
    },
    {
      content:
        "Nghiên cứu phương pháp, kỹ thuật xử lý thông tin bằng máy tính điện tử",
      isCorrect: false,
      questionId: 570,
    },
    {
      content: "Nghiên cứu về công nghệ phần cứng và phần mềm",
      isCorrect: false,
      questionId: 570,
    },
    {
      content: "Là một phần mềm chạy trên máy tính, dùng để điều hành, quản lý các thiết bị phần cứng và các tài nguyên phần mềm trên máy tính",
      isCorrect: true,
      questionId: 570,
    },

    {
      content: "Bấm tổ hợp phím Ctrl – Enter",
      isCorrect: false,
      questionId: 571,
    },
    {
      content: "Bấm phím Enter",
      isCorrect: false,
      questionId: 571,
    },
    {
      content: "Bấm tổ hợp phím Shift – Enter",
      isCorrect: false,
      questionId: 571,
    },
    {
      content: "Word tự động, không cần bấm phím",
      isCorrect: true,
      questionId: 571,
    },

    {
      content: "Primary memory",
      isCorrect: false,
      questionId: 572,
    },
    {
      content: "Receive memory",
      isCorrect: false,
      questionId: 572,
    },
    {
      content: "Secondary memory",
      isCorrect: false,
      questionId: 572,
    },
    {
      content: "Random access memory.",
      isCorrect: true,
      questionId: 572,
    },

    { content: "RAM", isCorrect: false, questionId: 573 },
    { content: "ROM", isCorrect: false, questionId: 573 },
    { content: "ROUTER", isCorrect: false, questionId: 573 },
    { content: "CPU", isCorrect: true, questionId: 573 },

    {
      content:
        "Google Driver",
      isCorrect: false,
      questionId: 574,
    },
    {
      content:
        "Mediafile",
      isCorrect: false,
      questionId: 574,
    },
    {
      content: "OneDriver",
      isCorrect: false,
      questionId: 574,
    },
    {
      content: "Cả 3 câu trên đều đúng",
      isCorrect: true,
      questionId: 574,
    },

    {
      content: "Menu Pad",
      isCorrect: false,
      questionId: 575,
    },
    {
      content: "Menu Options",
      isCorrect: false,
      questionId: 575,
    },
    {
      content:
        "Menu Bar",
      isCorrect: false,
      questionId: 575,
    },
    {
      content:
        "Tất cả đều sai",
      isCorrect: true,
      questionId: 575,
    },

    { content: "In màn hình hiện hành ra máy in", isCorrect: false, questionId: 576 },
    {
      content: "Không có công dụng gì khi sử dụng 1 mình nó.",
      isCorrect: false,
      questionId: 576,
    },
    {
      content: "In văn bản hiện hành ra máy in",
      isCorrect: false,
      questionId: 576,
    },
    { content: "Chụp màn hình hiện hành", isCorrect: true, questionId: 576 },

    {
      content:
        "Tạo một văn bản mới",
      isCorrect: false,
      questionId: 577,
    },
    {
      content:
        "Chức năng thay thế nội dung trong soạn thảo",
      isCorrect: false,
      questionId: 577,
    },
    {
      content: "Định dạng chữ hoa",
      isCorrect: false,
      questionId: 577,
    },
    {
      content: "Lưu nội dung tập tin văn bản vào đĩa",
      isCorrect: true,
      questionId: 577,
    },

    { content: "Shift + End", isCorrect: false, questionId: 578 },
    { content: "Alt + End", isCorrect: false, questionId: 578 },
    { content: "Ctrl + End", isCorrect: false, questionId: 578 },
    { content: "Ctrl + Alt + End", isCorrect: true, questionId: 578 },

    { content: "View-Symbol", isCorrect: false, questionId: 579 },
    { content: "Format-Symbol", isCorrect: false, questionId: 579 },
    { content: "Tools-Symbol", isCorrect: false, questionId: 579 },
    { content: "Insert-Symbol", isCorrect: true, questionId: 579 },

    {
      content: "Maximum",
      isCorrect: false,
      questionId: 580,
    },
    {
      content: "Minimum",
      isCorrect: false,
      questionId: 580,
    },
    {
      content: "Restore down",
      isCorrect: false,
      questionId: 580,
    },
    {
      content: "Close",
      isCorrect: true,
      questionId: 580,
    },
  ]);
};

module.exports = answerSeeding;
