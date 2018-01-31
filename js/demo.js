(function() {

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
    // console.log(data.edu.graduation);

    demo(data.basics);
    education(data.education);
    project(data.projectexp);
    skills(data.technicalskils);
    study(data.edu);
    award(data.awards);
    publications(data.publications);
    // console.log(data.edu);

  });

  var main=document.getElementById("main");
  var left=document.createElement("div");
  left.classList.add("left");
   var profile=document.createElement("div");
   profile.classList.add("profile");
   //calling the function
  function demo(basics){
   var image= document.createElement("img");
   image.classList.add("image1");
   image.src=basics.image;
   var h1=document.createElement("h1");
   h1.setAttribute("id","name");
   h1.textContent=basics.name;
   var des=document.createElement("h4");
   des.setAttribute("id","des");
   des.textContent=basics.des;

  profile.appendChild(image);
  profile.appendChild(h1);
  profile.appendChild(des);
  left.appendChild(profile);
  left.appendChild(document.createElement("HR"))


//creation of left part 2
var left1=document.createElement("div");
left1.classList.add("left1");

var father=document.createElement("div");
father.classList.add("father");
father.textContent=basics.fname;

var email=document.createElement("div");
email.classList.add("email");
email.textContent=basics.email;

var phone=document.createElement("div");
phone.classList.add("phone");
phone.textContent=basics.phone;

var address=document.createElement("div");
address.classList.add("address");
address.textContent=basics.address;

var state=document.createElement("div");
state.classList.add("state");
state.textContent=basics.state;

var country=document.createElement("div");
country.classList.add("country");
country.textContent=basics.country;

left1.appendChild(father);
left1.appendChild(email);
left1.appendChild(phone);
left1.appendChild(address);
left1.appendChild(state);
left1.appendChild(country);
left.appendChild(left1);

}
var right=document.createElement("div");
right.classList.add("right");

function education(education){

var career=document.createElement("div");
career.classList.add("career");
var h2=document.createElement("h2");
h2.textContent="CAREER OBJECTIVE";
var p=document.createElement("p");
p.textContent=education.cobject;
career.appendChild(h2);
career.appendChild(document.createElement("HR"))
career.appendChild(p);
right.appendChild(career);

var workexperience=document.createElement("div");
workexperience.classList.add("workexperience");
var h2=document.createElement("h2");
h2.textContent="EXPERIENCE";
var p=document.createElement("p");
p.textContent=education.exp;
workexperience.appendChild(h2);
workexperience.appendChild(document.createElement("HR"))
workexperience.appendChild(p);
right.appendChild(workexperience);
}
//Project Experiance
function project(projectexp){
var proexp=document.createElement("div");
proexp.classList.add("projectexp");
var h2=document.createElement("h2");
h2.textContent="PROJECT EXPERIENCE";
var h4=document.createElement("h4");
h4.textContent="DLP(Digital Literacy Program)";
var p=document.createElement("p");
p.textContent=projectexp.dlp;
proexp.appendChild(h2);
proexp.appendChild(document.createElement("HR"))
proexp.appendChild(h4);
proexp.appendChild(p);

var h4=document.createElement("h4");
h4.textContent="FLP(Financial Literacy Program)";
var p=document.createElement("p");
p.textContent=projectexp.flp;
proexp.appendChild(h4);
proexp.appendChild(p);
right.appendChild(proexp);
}
//skills
function skills(technicalskils){
var skills=document.createElement("div");
skills.classList.add("skills");
var h2=document.createElement("h2");
h2.textContent="TECHNICAL SKILLS";
var h4=document.createElement("h4");
h4.textContent="Operating Systems :";
var p=document.createElement("p");
p.textContent=technicalskils.os;
skills.appendChild(h2);
skills.appendChild(document.createElement("HR"))
skills.appendChild(h4);
skills.appendChild(p);
var h4=document.createElement("h4");
h4.textContent="Languages :";
var p=document.createElement("p");
p.textContent=technicalskils.lang;
skills.appendChild(h4);
skills.appendChild(p);
var h4=document.createElement("h4");
h4.textContent="Tools :";
var p=document.createElement("p");
p.textContent=technicalskils.tools;
skills.appendChild(h4);
skills.appendChild(p);
right.appendChild(skills);
}
//Educational
function study(edu){

  var educ=document.createElement("div");
    educ.classList.add("educationalqualification");
    var h2=document.createElement("h2");
    h2.textContent="ACADEMIC PROFILE";
    var grad=document.createElement("h4");
    grad.textContent="Graduation :";
    var p=document.createElement("p");
    p.textContent=edu.graduation;
    educ.appendChild(h2);
    educ.appendChild(document.createElement("HR"))
    educ.appendChild(grad);
    educ.appendChild(p);
  var inter=document.createElement("h4");
  inter.textContent="Intermediate :";
  var pa=document.createElement("p");
  pa.textContent=edu.intermediate;
  educ.appendChild(inter);
  educ.appendChild(pa);
  var ssc=document.createElement("h4");
  ssc.textContent="S S C :";
  var pa=document.createElement("p");
  pa.textContent=edu.ssc;
  educ.appendChild(ssc);
  educ.appendChild(pa);
  right.appendChild(educ);
}
function award(awards){
  var award1=document.createElement("div");
  award1.classList.add("awards");
  var aed=document.createElement("h2");
  aed.textContent="AWARDS";
  var para=document.createElement("p");
  para.textContent=awards.awrds;
  award1.appendChild(aed);
  award1.appendChild(document.createElement("HR"))
  award1.appendChild(para);
  right.appendChild(award1);
}
function publications(publications){
  var publi=document.createElement("div");
  publi.classList.add("publications");
  var aed=document.createElement("h2");
  aed.textContent="PUBLICATIONS";
  publi.appendChild(aed);
  publi.appendChild(document.createElement("HR"))
    for (i in publications) {
    var title=document.createElement("h4");
    title.textContent=publications[i].title;
    var para=document.createElement("p");
    para.textContent=publications[i].pub;
    publi.appendChild(title);
    publi.appendChild(para);
    }

right.appendChild(publi);
}

main.appendChild(left);
main.appendChild(right);


})();
