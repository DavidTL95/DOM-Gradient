let colorPicker = document.getElementById("colorPicker");

let color1 = document.getElementById("color1");
let color2 = document.getElementById("color2");
let color3 = document.getElementById("color3");

let colores = [];

let boton = document.getElementById("boton")

let gradient = document.getElementById("gradient");

colorPicker.addEventListener("change", (e) => {

    if(color1.style.backgroundColor === ""){

        color1.style.backgroundColor = e.target.value;
        colores.push(e.target.value);
        
    }else if(color2.style.backgroundColor === ""){

        colores.push(e.target.value);
        color2.style.backgroundColor = e.target.value;

    }else{

        colores.push(e.target.value);
        color3.style.backgroundColor = e.target.value;
        boton.style.display = "inline-block";
    }
})

const cambiarTextoBoton = () => {
    if(boton.innerHTML != "CLEAR"){
            boton.innerHTML = "CLEAR"
    }else{
        boton.innerHTML = "CHANGE COLOR"
    }
}

boton.addEventListener("click", (e) => {

    if(gradient.style.background === ""){

        // gradient.style.background = `linear-gradient(to right, ${color1.style.backgroundColor}, ${color2.style.backgroundColor}, ${color3.style.backgroundColor})`;

        gradient.style.background = `linear-gradient(${parseInt(Math.random() * 360)}deg, ${colores[parseInt(Math.random() * colores.length)]}, ${colores[parseInt(Math.random() * colores.length)]}, ${colores[parseInt(Math.random() * colores.length)]})`;

    }else{
        gradient.style.background = ""
        color1.style.backgroundColor = "";
        color2.style.backgroundColor = "";
        color3.style.backgroundColor = "";
        boton.style.display = "none";
    }

    cambiarTextoBoton();
})

