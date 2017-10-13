var imgCont = document.getElementById('work');
var np = [{nombre:"Tayman proyect",url:"img-1.jpg"},
          {nombre:"Kerala proyect",url:"img-2.jpg"},
          {nombre:"The brass coq proyect",url:"img-3.jpg"},
          {nombre:"Sungenre proyect",url:"img-4.jpg"},
          {nombre:"Mitragyna speciosa proyect",url:"img-5.jpg"},
          {nombre:"Foam king proyect",url:"img-6.jpg"},
          {nombre:"Volition proyect",url:"img-7.jpg"},
          {nombre:"Ink proyect",url:"img-8.jpg"},
          {nombre:"Expanding the boundaries of learning proyect",url:"img-9.jpg"},
          {nombre:"Owls apples proyect",url:"img-10.jpg"},
          {nombre:"Shrewood proyect",url:"img-11.jpg"},
          {nombre:"Platinum proyect",url:"img-12.jpg"}];
console.log(np);
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

// var arrayImgs = ['','TYMAN GROUp','NALIA ORGANICS','BRANSS COQ','TYMAN GROUP','NALIA ORGANICS','BRANSS COQ','TYMAN GROUP','NALIA ORGANICS','BRANSS COQ','TYMAN GROUP','NALIA ORGANICS','BRANSS COQ'];
// window.addEventListener('load',function(){
//   var dfm = document.createDocumentFragment();
//   for (var i = 1; i < arrayImgs.length; i++) {
//     dfm.appendChild(crearImgWork("assets/img/img-"+i+".jpg",arrayImgs[i],i));
//   }
//   document.getElementById('container-work').appendChild(dfm);
// });
// document.getElementsByClassName('close')[0].addEventListener('click',function(e){
//   document.getElementById('modal').classList.toggle('OpenClose');
// });
// function crearImgWork(url,descripcion,id){
//   var figure = document.createElement('figure');
//   figure.setAttribute('class','box-work');
//   figure.setAttribute('id','img-'+id);
//   var img = document.createElement('img');
//   img.setAttribute('src',url);
//   img.setAttribute('class','img-work');
//   img.setAttribute('alt',"name");
//   var figcaption = document.createElement('figcaption');
//   figcaption.setAttribute('class','text-uppercase text-bold')
//   figcaption.innerHTML = descripcion;
//   figure.appendChild(img);
//   figure.appendChild(figcaption);
//   img.addEventListener('click',function(e){
//     console.log(e.target);
//     var img = document.createElement('img');
//     img.setAttribute('src',e.target.getAttribute('src'));
//     document.getElementById('modal-img').setAttribute('src',e.target.getAttribute('src'));
//     // document.getElementById('modal').style.display = 'block';
//     document.getElementById('modal').classList.toggle('OpenClose');
//   });
//   return figure;
// }
