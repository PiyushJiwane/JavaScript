// js code for mentioned requirement in index.html

let urlData=window.open("https://codewithharry.com/videos/javascript-tutorials-in-hindi-1","_blank");

console.log(urlData.document.links);

for(let i=0;i<urlData.length;i++){if(urlData[i].href.includes("javascript")){console.log(urlData[i].href)}}


