let divElem=document.createElement("div");
if(localStorage.getItem("data")==null){
    var divText=document.createTextNode("Edit Here");
}else{
    var divText=document.createTextNode(localStorage.getItem("data"));
}
divElem.id="divElem";
divElem.appendChild(divText);
document.getElementsByTagName("body")[0].appendChild(divElem);

divElem.addEventListener("click",function(){
    localStorage.setItem("data",divElem.innerText);
    if(!document.getElementById("w3review")){
        divElem.innerHTML=`<textarea id="w3review" name="w3review" rows="4" cols="50">${localStorage.getItem("data")}</textarea>`;
    }
    let textarea=document.getElementById("w3review");
    textarea.addEventListener("blur",function(){
        localStorage.setItem("data",textarea.value);
        divElem.innerHTML=textarea.value;
    });
})
