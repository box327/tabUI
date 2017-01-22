
function removeSelectedClass(obj){
  var classes = obj.className.split(" ");
  var changeClass = "";
  classes.forEach(function(iter){
    if(iter !== "selectedTab")
      changeClass += iter + " ";
  });
  obj.className = changeClass;
}

function sectionRedraw(obj){
  var sectionElement = document.querySelector(".eleDisplayShow");
  var nameElement = sectionElement.querySelector(".myName");
  var descElement = sectionElement.querySelector(".myDesc");

    nameElement.innerHTML = obj.title;
    descElement.innerHTML = obj.body;
}

function tabAjax(url){
  var oReq = new XMLHttpRequest();
  oReq.addEventListener("load", function() {
    sectionRedraw(JSON.parse(this.responseText));
  });;
  oReq.open("GET", url);
  oReq.send();
}

document.querySelectorAll(".tab").forEach(function(iter){
  iter.addEventListener("click",function(){
    removeSelectedClass(document.querySelector(".selectedTab"));
    this.className += " selectedTab";

    tabAjax(this.getAttribute("tab-url"));
  });
});
