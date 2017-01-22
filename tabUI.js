
function removeSelectClass(obj){
  var classes = obj.className.split(" ");
  var changeClass = "";
  classes.forEach(function(iter){
    if(iter !== "selectedTab")
      changeClass += iter + " ";
  });
  obj.className = changeClass;
}

document.querySelectorAll(".tab").forEach(function(iter){
  iter.addEventListener("click",function(){
    removeSelectClass(document.querySelector(".selectedTab"));
    this.className += " selectedTab";
    console.log(this.getAttribute("tab-url"));
  });
});
