let btnAgregar = document.getElementById("btnAgregar");
const txtNombre=document.getElementById("Name");
const txtNumber=document.getElementById("Number");
const alertValidaciones=document.getElementById("alertValidaciones");
const alertValidacionesTexto=document.getElementById("alertValidacionesTexto");
const tablaListaCompras=document.getElementById("tablaListaCompras");
const cuerpoTabla=tablaListaCompras.getElementsByTagName("tbody").item(0);
const contadorProductos= document.getElementById("contadorProductos");
const precioTotal=document.getElementById("precioTotal")
const productosTotal=document.getElementById("productosTotal")
let isValid= true;
let contador= 0;
let precio=0;
let costoTotal=0;
let totalEnProductos=0;


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

function getPrecio() {
    return Math.round((Math.random()*10000))/100;
}

btnAgregar.addEventListener("click", function(event){
    event.preventDefault();
    txtNombre.style.border="";
    txtNumber.style.border="";
    alertValidaciones.style.display="none"
    alertValidacionesTexto.innerHTML="";
    isValid=true;
    //valida nombre del producto
    if(txtNombre.value.length<3)
    {
        txtNombre.style.border="solid red medium"
        alertValidacionesTexto.innerHTML=`El <strong>Nombre</strong> no es correcto.<br>`;
        alertValidaciones.style.display="block";
        isValid= false;
    }
    //valida cantidad
    if(! validarCantidad())
    {
        txtNumber.style.border="solid red medium"
        alertValidacionesTexto.innerHTML+=`El <strong>Cantidad</strong> no es correcto.<br>`;
        alertValidaciones.style.display="block";
        isValid=false;
    }
    if(isValid){
        contador++;
        precio = getPrecio();
        let row =`<tr>
                    <td>${contador}</td>
                    <td>${txtNombre.value}</td>
                    <td>${txtNumber.value}</td>
                    <td>${precio}</td>
                </tr>`
        cuerpoTabla.insertAdjacentHTML("beforeend", row);
        costoTotal+=precio*Number(txtNumber.value);
        totalEnProductos+=Number(txtNumber.value);
        
        contadorProductos.innerText=contador;
        productosTotal.innerText=totalEnProductos;
        precioTotal.innerText="$ "+costoTotal.toFixed(2);

        localStorage.setItem("contador", contador);
        localStorage.setItem("totalEnProductos", totalEnProductos);
        localStorage.setItem("costoTotal", costoTotal);

        txtNombre.value="";
        txtNumber.value="";
        txtNombre.focus();
    }


})
//evento blur se activa cuando un campo pierde el foco osea se 
//sale del campo
txtNombre.addEventListener("blur", function(event){
    //.trim() quia los espacias antes de la primera letra y despues de la ultima letra

    txtNombre.value=txtNombre.value.trim();
;})
//sale del campo
txtNumber.addEventListener("blur", function(event){
    //.trim() quia los espacias antes de la primera letra y despues de la ultima letra

    txtNumber.value=txtNumber.value.trim();
;})

window.addEventListener("load",function(){
    if (this.localStorage.getItem("contador")!=null){
        contador=Number(this.localStorage.getItem("contador"));
        
    }
    if (this.localStorage.getItem("totalEnProductos")!=null){
        totalEnProductos=Number(this.localStorage.getItem("totalEnProductos"));
        
    }
    if (this.localStorage.getItem("costoTotal")!=null){
        costoTotal=Number(this.localStorage.getItem("costoTotal"));
    }
    contadorProductos.innerText=contador;
    productosTotal.innerText=totalEnProductos;
    precioTotal.innerText="$ "+costoTotal.toFixed(2);

});