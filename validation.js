function kiemTraNhap() {
	var inputTen = document.forms["form1"]["username"];
	//var inputTen = document.form1.username;
	var theP = document.getElementById("thongbao");
	if (inputTen.value == "") {
		//alert("Nhập vào 1 giá trị");
		theP.style.display = "block";
		theP.innerHTML = "Hãy nhập vào giá trị";
		theP.style.color = "red";
		return false;
	}
	else {
		// alert("Bạn đã nhập !!");
		theP.style.display = "none";
		return true;	
	}
}

		function kiemTraTatCaKiTu(idTag) {
			var inputTag = document.getElementById(idTag);
			var letters = /^[A-Za-z]+$/;
			var thongBao = document.getElementById("thongbao1");
			if (inputTag.value.match(letters)) {
				thongBao.style.display = "none";
				return true;
			}
			else {
				thongBao.style.display = "block";
				thongBao.innerHTML = "HÃY NHẬP TẤT CẢ ĐỀU LÀ KÍ TỰ";
				thongBao.style.color = "red";
				return false;
			}
		}

		function kiemTraTatCaLaSo(idTag) {
			var inputTag = document.getElementById(idTag);
			var letters = /^[0-9]+$/;
			var thongBao = document.getElementById("thongbao1");
			if (inputTag.value.match(letters)) {
				thongBao.style.display = "none";
				return true;
			}
			else {
				thongBao.style.display = "block";
				thongBao.innerHTML = "HÃY NHẬP TẤT CẢ ĐỀU LÀ SỐ";
				thongBao.style.color = "red";
				return false;
			}
		}

function onDangKi() {
	var divDangKi = document.getElementById("divdangki");
	var divDangNhap = document.getElementById("divdangnhap");
	divdangki.style.display = "block";
	divDangNhap.style.display = "none";
}

function onDangNhap() {
	var divDangKi = document.getElementById("divdangki");
	var divDangNhap = document.getElementById("divdangnhap");
	divdangki.style.display = "none";
	divDangNhap.style.display = "block";
}

function kiemTraBatBuocDangKi() {
	var pThongBao = document.getElementById("pthongbao");
	pThongBao.innerHTML = "";
	var nghenghiep = document.getElementById("nghenghiep");
	var nam = document.getElementById("nam");
	var nu = document.getElementById("nu");
	if (frmDangKi.tendangnhap.value == "" || frmDangKi.matkhau.value == ""
		|| frmDangKi.email.value == "" || frmDangKi.tuoi.value == "") {
		pThongBao.style.display = "block";
		frmDangKi.tendangnhap.style.border = "solid 2px red";
		frmDangKi.matkhau.style.border = "solid 2px red";
		frmDangKi.email.style.border = "solid 2px red";
		frmDangKi.tuoi.style.border = "solid 2px red"; 
		pThongBao.innerHTML = "Bạn cần nhập dữ liệu cho các trường đầy đủ" + "<br>";
		return false;
	}
	else if (nghenghiep.selectedIndex == 0) {
		pThongBao.style.display = "block";
		pThongBao.innerHTML = "Bạn phải chọn Nghề nghiệp <br>";
		return false;
	}
	else if (nam.checked == false && nu.checked == false) {
		pThongBao.style.display = "block";
		pThongBao.innerHTML = "Bạn phải chọn Giới tính <br>";
		return false;
	}
	else {
		pThongBao.style.display = "none";
		return true;
	}
}

function kiemTraLength(idTag, minLength, maxLength) {
	var inputText = document.getElementById(idTag);
	var field = inputText.value;
	var pThongBao = document.getElementById("pthongbao");
	pThongBao.innerHTML = "";
	if (field.length < minLength || field.length > maxLength) {
		pThongBao.style.display = "block";
		pThongBao.innerHTML = "Tên đăng nhập từ " + minLength + " đến " + maxLength + " kí tự";
		return false;
	}
	else {
		pThongBao.style.display = "none";
		return true;
	}
}

function kiemTraTuoi(minTuoi, maxTuoi, idTagThongBao) {
	var pThongBao = document.getElementById(idTagThongBao);
	var tuoi = document.getElementById("tuoi");
	var letters = /^[0-9]+$/;
	if (tuoi.value.match(letters)) {
		if (parseInt(tuoi.value) > maxTuoi || parseInt(tuoi.value) < minTuoi) {
			pThongBao.style.display = "block";
			pThongBao.innerHTML = "Tuổi phải nằm trong khoảng " + minTuoi + " đến " + maxTuoi;
			return false;	
		}
		pThongBao.style.display = "none";
		return true;
	}
	else {
		pThongBao.style.display = "block";
		pThongBao.innerHTML = "Tuổi phải là số nguyên";
		return false;
	}
}

function kiemTraEmail(idTag) {
	var inputTag = document.getElementById(idTag);
	var letters = /^([\w\.])+@([A-Za-z0-9\-])+\.([A-Za-z]{2,4})(\.[A-Za-z]{2,4})?$/;
	var pThongBao = document.getElementById("pthongbao");
	if (inputTag.value.match(letters)) {
		pThongBao.style.display = "none";
		return true;
	}
	else {
		pThongBao.style.display = "block";
		pThongBao.innerHTML = "Hãy nhập email hợp lệ";
		return false;
	}
}

function kiemTraHopLe() {
	return kiemTraBatBuocDangKi() && kiemTraLength("tendangnhap", 1, 30)
		&& kiemTraEmail("email") && kiemTraTuoi(18, 40, "pthongbao");
}