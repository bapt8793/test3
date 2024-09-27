function sortie(txt) { 
    document.getElementById("sortie").innerHTML += txt + "<br />"; 
} 
function dragNav(target, evt) { 
    evt.dataTransfer.setData("nomIco", target.id); 
    sortie("L'image <b>" + target.id + "</b> est en train d'être déplacée"); 
} 
function dropNav(target, evt, compatible) { 
    var id = evt.dataTransfer.getData("nomIco"); 
    target.appendChild(document.getElementById(id)); 
 
    if (compatible) { 
        sortie("L'image <b>" + id + "</b> a été déposée dans la  zone compatible"); 
    } else { 
        sortie("L'image <b>" + id + "</b> a été déposée dans la   zone incompatible"); 
    } 
 
    evt.preventDefault(); 
} 