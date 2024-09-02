let btnAgregar = document.getElementById("btnAgregar");
const txtNombre=document.getElementById("Name");
const txtNumber=document.getElementById("Number");
const alertValidaciones=document.getElementById("alertValidaciones");
const alertValidacionesTexto=document.getElementById("alertValidacionesTexto");

function validarCantidad()
{
    if (txtNumber.value.length==0) {
        return false;   
    }
    if (isNaN(txtNumber.value)) {
        return false;
    }
    if (Number(txtNumber.value)<0) {
        return false;
        
    }
    return true;
}

btnAgregar.addEventListener("click", function(event){
    event.preventDefault();
    txtNombre.style.border="";
    txtNumber.style.border="";
    alertValidaciones.style.display="none"
    alertValidacionesTexto.innerHTML="";
    //valida nombre del producto
    if(txtNombre.value.length<3)
    {
        txtNombre.style.border="solid red medium"
        alertValidacionesTexto.innerHTML=`El <strong>Nombre</strong> no es correcto.<br>`;
        alertValidaciones.style.display="block";
    }
    //valida cantidad
    if(! validarCantidad())
    {
        txtNumber.style.border="solid red medium"
        alertValidacionesTexto.innerHTML+=`El <strong>Cantidad</strong> no es correcto.<br>`;
        alertValidaciones.style.display="block";
    }


})
//evento blur se activa cuando un campo pierde el foco osea se 
//sale del campo
txtNombre.addEventListener("blur", function(event){
    //.trim() quia los espacias antes de la primera letra y despues de la ultima letra

    txtNombre.value=txtNombre.value.trim();
;})