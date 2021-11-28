var res=document.getElementById("res");
var btn=document.getElementById("cat");
btn.addEventListener("click",getDog);

function getDog(){
    fetch("https://random.dog/woof.json")
    .then((response)=>response.json())
    .then((data)=>{
        res.innerHTML=`<img src="${data.url}">`;
    })
};
