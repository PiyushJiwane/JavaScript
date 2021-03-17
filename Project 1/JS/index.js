var arr = new Array();
var arrData = new Array();
var count = 0;
document.getElementById("addNote").addEventListener("click", function () {
  count++;
  let data = document.getElementById("textarea").value;
  if (data.trim().length > 0) {
    arr.push(data.trim());
    console.log(data.trim());
  }
  document.getElementById("textarea").value = "";
  addDataList(count, data);
  showList();
  console.log(arr.length);
});

// arr.forEach(function(item,index){
//     document.getElementById("noteList").innerHTML=`<div class="card" style="width: 12rem;"><div class="card-body"><h5 class="card-title">Note ${index}</h5><p class="card-text">${item}</p><a href="#" class="btn btn-primary">Delete Note</a></div></div>`;
// })
function addDataList(count, data) {
  arrData.push(`<div class="card" style="width: 12rem;"><div class="card-body"><h5 class="card-title">Note ${count}</h5><p class="card-text">${data}</p><a id="${count}" onclick="deleteNote(this.id)" class="btn btn-primary">Delete Note</a></div></div>`);
}

function showList() {
    console.log("called");
  document.getElementById("noteList").innerHTML = arrData.toString();
}

function deleteNote(id){
    console.log(id-1);
    arrData.splice(id-1,1);
    showList();
}
