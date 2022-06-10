function circulo(){
    /*Creamos la variable figura para capturar el elemento con la funcion "getElemenById"*/
    var figura = document.getElementById("figura");
    /*Agregamos "toggle" que sirve para agregar y quitar algo*/
    figura.classList.toggle("circulo")
}

function rombo(){
    var figura = document.getElementById("figura");
    figura.classList.toggle("rombo");
}

function rectanguloh(){
    var figura = document.getElementById("figura");
    figura.classList.toggle("rectanguloh");
}

function rectangulov(){
    var figura = document.getElementById("figura");
    figura.classList.toggle("rectangulov");
}

function arriba(){
    var figura = document.getElementById("figura");
    figura.classList.toggle("arriba");
}

function abajo(){
    var figura = document.getElementById("figura");
    figura.classList.toggle("abajo");
}

function izquierda(){
    var figura = document.getElementById("figura");
    figura.classList.toggle("izquierda");
}

function derecha(){
    var figura = document.getElementById("figura");
    figura.classList.toggle("derecha");
}

function diagonal(){
    var figura = document.getElementById("figura");
    figura.classList.toggle("diagonal");
}

function triangulo(){
    var figura = document.getElementById("figura");
    figura.classList.toggle("triangulo");
}

function gif(){
    var figura = document.getElementById("figura");
    figura.classList.toggle("gif");
}

function paralelo(){
    var figura = document.getElementById("figura");
    figura.classList.toggle("paralelo");
}

function trapecio(){
    var figura = document.getElementById("figura");
    figura.classList.toggle("trapecio");
}

function ovalo(){
    var figura = document.getElementById("figura");
    figura.classList.toggle("ovalo");
}

function semi(){
    var figura = document.getElementById("figura");
    figura.classList.toggle("semi");
}

function cuarto(){
    var figura = document.getElementById("figura");
    figura.classList.toggle("cuarto");
}


/*CAPTURAR DATOS*/

function capturardatos(){
    /*Capturamos los valores de cada uno de los formularios*/
    var nombres = document.getElementById("nombres").value;
    var edad = document.getElementById("edad").value;
    var fecha = document.getElementById("fecha").value;
    var genero = document.getElementById("genero").value;
    var email = document.getElementById("email").value;
    var descripcion = document.getElementById("descripcion").value;
    var color = document.getElementById("color").value;
    
    /*Capturamos los elementos a los cuales les asginaremos los valores*/

    var mFoto = document.getElementById("mFoto");
    var mNombre = document.getElementById("mNombre");
    var mEdad = document.getElementById("mEdad");
    var mFecha = document.getElementById("mFecha");
    var mGenero = document.getElementById("mGenero");
    var mEmail = document.getElementById("mEmail");
    var mDescripcion = document.getElementById("mDescripcion");
    var contAvatar = document.getElementById("contAvatar");

    mNombre.textContent = nombres;
    mEdad.textContent = edad;
    mFecha.textContent = fecha;
    mGenero.textContent = genero;
    mEmail.textContent = email;
    mDescripcion.textContent = descripcion;

    if ( genero == "Femenino"){
        mFoto.src = "img/iconm.png";
    } else if ( genero == "Masculino"){
        mFoto.src = "img/iconh.png";
    } else if (genero == "Otro"){
        mFoto.src = "img/icono.png";
    } else {
        mFoto.src = "img/iconu.png";
    }

    switch (color){
        case "Rojo":
            var contenedor = document.getElementById("contAvatar");
            contenedor.classList.add("Rojo");
            break;
            case "Azul":
                var contenedor = document.getElementById("contAvatar");
                contenedor.classList.add("Azul");
                break;
                case "Rosa":
                    var contenedor = document.getElementById("contAvatar");
                    contenedor.classList.add("Rosa");
                    break;
                    case "Verde":
                        var contenedor = document.getElementById("contAvatar");
                        contenedor.classList.add("Verde");
                        break;
                        case "Blanco":
                            var contenedor = document.getElementById("contAvatar");
                            contenedor.classList.add("Blanco");
                            break;

    }
}

