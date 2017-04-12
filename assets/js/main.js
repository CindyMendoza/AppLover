var imgCont = document.getElementById('work');
var pronam = ["Tayman proyect","Kerala proyect","The brass coq proyect",
                "Sungenre proyect","Mitragyna speciosa proyect","Foam king proyect",
                "Volition proyect","Ink proyect","Expanding the boundaries of learning proyect",
                "Owls apples proyect","Shrewood proyect","Platinum proyect"];
var divMod,divImg,img,spanName;
window.addEventListener('load', function() {
  for(var i=0;i<12;i++){
    divMod=document.createElement("div");
    divImg = document.createElement("div");
    img = document.createElement("img");
    spanName = document.createElement("span");
    img.setAttribute("src", "assets/img/img-"+(i+1)+".jpg");
    img.setAttribute("class", "img-work");
    img.setAttribute("alt",pronam[i]);
    img.setAttribute("onclick","modal("+ i +")");
    spanName.innerText=pronam[i];
    spanName.setAttribute("class","text-uppercase");
    divImg.setAttribute('class', "div-img");
    divMod.setAttribute("class","div-mod");
    divImg.appendChild(img);
    divImg.appendChild(spanName);
    divMod.appendChild(divImg);
    imgCont.appendChild(divMod);
  }

});

function modal(i){
  var divsMod = document.querySelectorAll(".div-mod")
  var divsImg = document.querySelectorAll('.div-img');
  var btnX = document.createElement("button");
  var spans = document.querySelectorAll("span");
  divsMod[i].classList.remove("div-mod");
  divsImg[i].classList.remove("div-img");
  spans[i].style.display="none";
  btnX.innerText="X";
  btnX.setAttribute("class","close");
  divsMod[i].classList.add("modal");
  divsImg[i].classList.add("modal-content");
  divsImg[i].appendChild(btnX);

  document.getElementsByClassName("close")[0].addEventListener("click" , function(){
    divsMod[i].classList.remove("modal");
    divsImg[i].classList.remove("modal-content");
    divsMod[i].classList.add("div-mod");
    divsImg[i].classList.add("div-img");
    spans[i].style.display="block";
  });

}
