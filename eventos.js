let cont = document.getElementById("cont");
let btn = document.getElementById("btn");

cont.addEventListener("click", helloDiv);
//btn.addEventListener("click", remove);
btn.addEventListener("click", let  = (e) => {
    alert('Hola!');
    e.stopPropagation();
});



function helloDiv() {
    alert('¡Hello! Soy el div')
    
}

/*function remove() {
    cont.removeEventListener("click", helloDiv)
}*/









    
