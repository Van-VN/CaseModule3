// let result = window.confirm(`Bạn đã đủ 18 tuổi?`);
function hiddenCheck() {
  document.getElementById("adult-screencheck").style.display = "none";
}

function userTable() {
  document.getElementById("user-mng-table").style.display = "block";
  document.getElementById("data-mng-table").style.display = "none";
}

function dataTable() {
  document.getElementById("user-mng-table").style.display = "none";
  document.getElementById("data-mng-table").style.display = "block";
}
