var arr = new Array();

if (localStorage.getItem("data") != null) {
  showData();
}

document.getElementById("submitNote").addEventListener("click", function () {
  var note = document.getElementById("addNote").value;
  var title = document.getElementById("addTitle").value;
  if (note.trim().length > 0 && title.trim().length > 0) {
    let obj = new Object();
    obj.title = title;
    obj.note = note;
    arr.push(obj);
  }
  document.getElementById("addNote").value = "";
  document.getElementById("addTitle").value = "";
  console.log(arr);
  localStorage.setItem("data", JSON.stringify(arr));
  showData();
});

function showData() {
  var html = "";
  let arrList = JSON.parse(localStorage.getItem("data"));
  arrList.forEach(function (item, index) {
    html += `<div class="card" style="width: 15rem;text-align: center; display:inline-block;"><p><div class="card-block"><h4 class="card-title">Note ${
      index + 1
    }</h4><p class="card-text"><b>${item.title}</b></p><p class="card-text">${
      item.note
    }</p><a id=${index} onclick="deleteNote(this.id)" class="btn btn-primary">Delete Note</a></div></p></div>`;
  });
  document.getElementById("noteList").innerHTML = html;
}

function deleteNote(id) {
  let arrList = JSON.parse(localStorage.getItem("data"));
  arrList.splice(id, 1);
  arr = arrList;
  localStorage.setItem("data", JSON.stringify(arrList));
  showData();
}

const log = document.getElementById("search");

log.addEventListener("input", updateValue);

function updateValue(e) {
  var html = "";
  let arrList = JSON.parse(localStorage.getItem("data"));
  arrList.forEach(function (item, index) {
    if (item.note.includes(e.target.value)) {
      console.log(item.title.includes(e.target.value));
      html += `<div class="card" style="width: 15rem;text-align: center; display:inline-block;"><p><div class="card-block"><h4 class="card-title">Note ${
        index + 1
      }</h4><p class="card-text"><b>${item.title}</b></p><p class="card-text">${
        item.note
      }</p><a id=${index} onclick="deleteNote(this.id)" class="btn btn-primary">Delete Note</a></div></p></div>`;
    }
  });
  document.getElementById("noteList").innerHTML = html;
}
