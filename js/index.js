(function(){
  function loadJSON(file, callback) {
    var rawFile = new XMLHttpRequest();
    rawFile.overrideMimeType("application/json");
    rawFile.open("GET", file, true);
    rawFile.onreadystatechange = function() {
      if (rawFile.readyState === 4 && rawFile.status == "200") {
        callback(rawFile.responseText);
      }
    }
    rawFile.send(null);
  }
  loadJSON ("demo.json", function (text) {
    let data = JSON.parse(text);
    console.log(data);
    indexdata(data.index);

  });
  function indexdata(index){
  var indexh1=document.createElement("h1");
  indexh1.textContent="Resume Builder";
  var flex=document.getElementById("main");

  for(i in index){
    var rajesh=document.createElement("div");
    rajesh.classList.add("rajesh");
    var cardimg=document.createElement("div");
  cardimg.classList.add("cardimage");
      var ancr=document.createElement("a");
      ancr.href="demo.html";
      var image=document.createElement("img");
      image.src=index[i].image;
      ancr.appendChild(image);
      cardimg.appendChild(ancr);
      rajesh.appendChild(cardimg);
      var cardcontent=document.createElement("div");
      cardcontent.classList.add("card");
      var h3name=document.createElement("h3");
      h3name.textContent=index[i].name;
      var parades=document.createElement("p");
      parades.textContent=index[i].des;
      var paracomp=document.createElement("p");
      paracomp.textContent=index[i].emp;
      cardcontent.appendChild(h3name);
      cardcontent.appendChild(parades);
      cardcontent.appendChild(paracomp);
      rajesh.appendChild(cardcontent);
      main.appendChild(rajesh);

    }

}


})();
