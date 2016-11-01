var $ndcontenedor = document.getElementById("contenedor");
var $ndmenu = document.getElementById("menu_ul");

var index = "index";
var usuarios = "usuarios";
var nosotros = "nosotros";
var contacto = "contacto";

$ndmenu.onclick = function(e){
        
        if(e.target.hasAttribute("href") == true){
                e.target.classList = ["menu_active"];
                var remover = document.getElementsByClassName("menu_active")[0];
                remover.classList = [];

                console.log(e.target.getAttribute("href"));
                if(e.target.getAttribute("href") == "#index"){
                    $ndcontenedor.innerHTML = `<h1>${index}</h1>`;
                    
                }

                if(e.target.getAttribute("href") == "#usuarios"){
                    $ndcontenedor.innerHTML = `<h1>${usuarios}</h1>`;
                    
                }

                if(e.target.getAttribute("href") == "#nosotros"){
                    $ndcontenedor.innerHTML = `<h1>${nosotros}</h1>`;
                    
                }

                if(e.target.getAttribute("href") == "#contacto"){
                    $ndcontenedor.innerHTML = `<h1>${contacto}</h1>`;
                    
                }
        }


}



