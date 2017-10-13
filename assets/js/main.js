//arreglo con nombres de los proyectos y nombre del archivo
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

//funcion muestra imagenes y envia src al modal

function cargarImg (id,array){
  array.forEach(function(x){
    var divImg = document.createElement("div");
    var img = document.createElement("img");
    var spanName = document.createElement("span");
    img.setAttribute("src", `assets/img/${x.url}`);
    img.setAttribute("class", "img-work");
    spanName.innerText=`${x.nombre}`;
    spanName.setAttribute("class","text-uppercase");
    divImg.setAttribute('class', "div-img");
    divImg.appendChild(img);
    divImg.appendChild(spanName);
    document.getElementById(id).appendChild(divImg);
    img.addEventListener("click",function(e){
      document.getElementById("modal-img").setAttribute("src",e.target.src);
      document.getElementById('modal').style.display = 'block';
    });
  });
}
//cargarImg se ejecuta con evento load
window.addEventListener('load', function() {
  cargarImg("work",np);
});

//close de modal 
document.getElementsByClassName('close')[0].addEventListener('click',function(){
  document.getElementById('modal').style.display = 'none';
});
