 localStorage.clear();

 var arr=new Array();

 
 if(localStorage.getItem("data")!=null){
     showData();
 }

 document.getElementById("submitNote").addEventListener("click",function(){
     var note=document.getElementById("addNote").value;
     if(note.trim().length>0){
        arr.push(note);
     }
     document.getElementById("addNote").value="";
     console.log(arr);
     localStorage.setItem("data",JSON.stringify(arr));
    showData();
 });

 function showData(){
    var html="";
     let arrList=JSON.parse(localStorage.getItem("data"));
     arrList.forEach(function(item,index){
         html+=`<div class="card" style="width: 15rem;text-align: center; display:inline-block;"><p><div class="card-block"><h4 class="card-title">Note ${index+1}</h4><p class="card-text">${item}</p><a id=${index} onclick="deleteNote(this.id)" class="btn btn-primary">Delete Note</a></div></p></div>`;
     })
     document.getElementById("noteList").innerHTML=html;
 }

 function deleteNote(id){
    let arrList=JSON.parse(localStorage.getItem("data"));
    arrList.splice(id,1);
    arr=arrList;
    localStorage.setItem("data",JSON.stringify(arrList));
    showData();
 }

 function searchText(){
    let arrList=JSON.parse(localStorage.getItem("data"));
    
 }