//

var iSoArr = [];

function kiemTra() {
  // Nhap gia tri input vao o

  var iSo = Number(document.getElementById("iSo").value);

  // them gia tri Vao mang
  iSoArr.push(iSo);

  // xu ly va duyet mang
  var tongSoDuong = 0; // Bai 1: Tổng các số dương trong mảng
  var demSoDuong = 0; // bài 2 đếm các số dương trong mảng
  var soNhoNhat = iSoArr[0]; // bai 3: Tìm số nhỏ nhất trong mảng.
  var soDuongNhoNhat = Infinity; // bai 4: Tìm số dương nhỏ nhất trong mảng.
  //   var demSoChan = 0;
  var soChanCuoiCung = 0; // bai 5: Tìm số chẵn cuối cùng trong mảng. Nếu mảng không có giá trị chẵn thì trả về -1

  var sapXepTang = []; // bai 7: Sắp xếp mảng theo thứ tự tăng dần
  var soNguyenTo = iSoArr[index]; // bai 8: Tìm số nguyên tố đầu tiên trong mảng. Nếu mảng không có số nguyên tố thì trả về – 1.
  var demSoNguyen = 0; //  bai 9: Nhập thêm 1 mảng số thực, tìm xem trong mảng có bao nhiêu số nguyên?
  var demSoAm = 0; //  Bai 10. So sánh số lượng số dương và số lượng số âm xem số nào nhiều hơn.
  var soSanh = "";

  // xu ly
  for (var index = 0; index < iSoArr.length; index++) {
    var value = iSoArr[index];
    if (iSoArr[index] > 0) {
      demSoDuong++;
      tongSoDuong += iSoArr[index];
    }
    if (iSoArr[index] < soNhoNhat) {
      //  tim so nho nhat
      soNhoNhat = iSoArr[index];
    }
    var soNhoNhat = Math.min(...iSoArr);
    if (iSoArr[index] < soDuongNhoNhat && iSoArr[index] > 0) {
      soDuongNhoNhat = iSoArr[index];
    }

    if (iSoArr[index] % 2 == 0) {
      soChanCuoiCung = iSoArr[index];
    } else {
      soChanCuoiCung = -1;
    }
    sapXepTang.sort(function (a, b) {
      sapXepTang = iSoArr;
      return a - b;
    });

    sapXepTang = iSoArr.sort((a, b) => a - b);

    var soHang = 1;
    var dem = 0;

    while (soHang <= iSoArr[index]) {
      if (iSoArr[index] % soHang == 0) {
        dem++;
      }
      soHang++;
      if (dem == 2) {
        soNguyenTo = iSoArr[index];
      } else {
        soNguyenTo = -1;
      }
      break;
    }
    if (iSoArr[index] < 0) {
      demSoAm++;
    }
    if (demSoAm < demSoDuong) {
      soSanh = "Số âm ít hơn số dương";
    } else if (demSoAm > demSoDuong) {
      soSanh = "Số âm nhiều hơn số dương";
    } else {
      soSanh = "Số âm và số dương bằng nhau";
    }
  }
  // Xuất ra màn hình
  document.getElementById("result").innerHTML = `
  <p class="bg-blue-100 text-green-700 p-3 rounded mt-3 w-full">Dãy số: ${iSoArr} </p>
   <p class="bg-blue-100 text-green-700 p-3 rounded mt-3 w-full">Bài 1: Tổng các số dương: ${tongSoDuong} </p>
   <p class="bg-blue-100 text-green-700 p-3 rounded mt-3 w-full">Bài 2: Số dương: ${demSoDuong} </p>
   <p class="bg-blue-100 text-green-700 p-3 rounded mt-3 w-full">Bài 3: Số nhỏ nhất: ${soNhoNhat} </p>
   <p class="bg-blue-100 text-green-700 p-3 rounded mt-3 w-full">Bài 4: Số dương nhỏ nhất: ${soDuongNhoNhat} </p>
   <p class="bg-blue-100 text-green-700 p-3 rounded mt-3 w-full">Bài 5: Số chẵn cuối cùng: ${soChanCuoiCung} </p>
   <p class="bg-blue-100 text-green-700 p-3 rounded mt-3 w-full">Bài 7: Sắp xếp tăng dần: ${sapXepTang} </p>
  <p class="bg-blue-100 text-green-700 p-3 rounded mt-3 w-full">Bài 8: Số nguyên tố đầu tiên: ${soNguyenTo} </p>
   <p class="bg-blue-100 text-green-700 p-3 rounded mt-3 w-full">Bài 10: ${soSanh} </p>
   `;
}
document.getElementById("kiemTra").addEventListener("click", kiemTra);
