function showInfo(id, content) {
   document.getElementById(id).innerHTML = content;
}

/*  
    ASSUMING
        - Điểm chuẩn, điểm 3 môn thi, điểm ưu tiên: khu vực | A, B, C - đối tượng | 1, 2, 3
        - Điểm tổng kết >= điểm chuẩn && không có điểm 0 => Trúng tuyển
    
    INPUT
        - Tạo biến admissionScore gán giá trị từ input có id admissionScore
        - Tạo biến score1 gán giá trị từ input có id score1
        - Tạo biến score2 gán giá trị từ input có id score2
        - Tạo biến score3 gán giá trị từ input có id score3
        - Tạo biến location gán giá trị từ input có id location
        - Tạo biến contestant gán giá trị từ input có id contestant
        - Tạo biến total để tính tổng điểm của 3 môn
    
    HANDLE
        - Nếu có 1 điểm 0 thì sẽ trả về kq không trúng tuyển
        - Tính tổng điểm của 3 môn
        - Xét 4 TH với biến location sau đó cho biến total tăng theo quy định
        - Xét 4 TH với biến contestant sau đó cho biến total tăng theo quy định
        - So sánh biến total với admissionScore để quyết định đậu hay không

    OUTPUT
        - Hiển thị kq ra div có id showResult
*/
function calcScore() {
   let admissionScore = +document.getElementById("admissionScore").value;
   let score1 = +document.getElementById("score1").value;
   let score2 = +document.getElementById("score2").value;
   let score3 = +document.getElementById("score3").value;

   let location = document.getElementById("location").value;
   let contestant = +document.getElementById("contestant").value;

   if (!score1 || !score2 || !score3) {
      showInfo("showResult", "<p>Rất tiếc! Bạn không trúng tuyển.</p>");
      return;
   }

   let total = score1 + score2 + score3;

   switch (location) {
      case "X":
         total += 0;
         break;
      case "A":
         total += 2;
         break;
      case "B":
         total += 1;
         break;
      case "C":
         total += 0.5;
         break;
   }

   switch (contestant) {
      case 0:
         total += 0;
         break;
      case 1:
         total += 2.5;
         break;
      case 2:
         total += 1.5;
         break;
      case 3:
         total += 1;
         break;
   }

   if (total >= admissionScore) {
      showInfo("showResult", "<p>Chúc mừng! Bạn đã trúng tuyển.</p>");
   } else {
      showInfo("showResult", "<p>Rất tiếc! Bạn không trúng tuyển.</p>");
   }
}

/*  
    ASSUMING
        - Người dùng nhập họ tên và số kw tiêu thụ
    
    INPUT
        - Tạo biến username để gán giá trị từ input có id username
        - Tạo biến kw để gán giá trị từ input có id kw
    
    HANDLE
        - Formula:
            totalPrice = kw * price (price phụ thuộc vào số kw tiêu thụ của KH)
            + 50kw đầu: 500d/kw
            + 50kw kế: 650d/kw
            + 100kw kế: 850d/kw
            + 150kw kế: 1100d/kw
            + Còn lại: 1300d/kw

    OUTPUT
        - Hiển thị kq ra div có id showTotalPrice
*/
function calcTotalPrice() {
   let username = document.getElementById("username").value;
   let kw = +document.getElementById("kw").value;

   let totalPrice;

   if (!kw || kw < 0) {
      showInfo("showTotalPrice", "<p>Vui lòng nhập số kw tiêu thụ!</p>");
      return;
   }

   if (kw <= 50) {
      totalPrice = kw * 500;
   } else if (kw <= 100) {
      totalPrice = (kw - 50) * 650 + 50 * 500;
   } else if (kw <= 200) {
      totalPrice = (kw - 100) * 850 + 50 * 650 + 50 * 500;
   } else if (kw <= 350) {
      totalPrice = (kw - 200) * 1100 + 100 * 850 + 50 * 650 + 50 * 500;
   } else {
      totalPrice = (kw - 350) * 1300 + 150 * 1100 + 100 * 850 + 50 * 650 + 50;
   }

   showInfo(
      "showTotalPrice",
      "<p>Khách hàng " +
         username +
         "</p>" +
         "<p>Số tiền cần thanh toán: " +
         totalPrice +
         "</p>"
   );
}
