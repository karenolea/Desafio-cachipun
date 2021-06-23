//se solicita al usuario la cantidad de veces que se va a jugar
let numeroJuegos = parseInt( prompt("Ingrese la cantidad de veces que va a jugar"));
//Se crea un arreglo con las posibles respuestas de la máquina
let respuestasMaquina = ["Piedra", "Papel", "Tijera"]

//variable que cuenta las ganadas por el usuario
let ganadasUsuario = 0;
//variable que cuenta las ganadas por la máquina
let ganadasMaquina = 0;

//Ciclo que itera la cantidad de veces que ingresó el usuario
for(let i = 1; i <= numeroJuegos; i++){
    //Se lee la opción ingresada por el usuario
    let eleccion = prompt("Elija Piedra, Papel o Tijera");
    eleccion = eleccion.toUpperCase();
    //Se genera la opción elegida por la máquina de manera aleatoria
    let respuestaElegidaMaquina = Math.floor(Math.random()*3);

    //Se almacena en una variable el valor dentro del arreglo. Índice generado aleatoriamente
    let eleccionMaquina = respuestasMaquina[respuestaElegidaMaquina];
    eleccionMaquina = eleccionMaquina.toUpperCase();

    //imprime la opción elegida por el usuario
    console.log("El usuario eligió " + eleccion);
    //imprime la opción que eligió la máquina de manera aleatoria
    console.log("La máquina eligió " + eleccionMaquina + " Número generado aleatoriamente: " + respuestaElegidaMaquina);

    if(eleccion == eleccionMaquina){
        console.log("Es un empate");
    } else {
        switch (eleccion){
            case 'PIEDRA':
                if(eleccionMaquina == "PAPEL"){
                    console.log("Usted Ha Perdido Contra la Máquina");
                    ganadasMaquina++;
                }
                if(eleccionMaquina == "TIJERA"){
                    console.log("Felicidades! Le ha Ganado a la Máquina");
                    ganadasUsuario++;
                }
                break;
            case 'PAPEL':
                if(eleccionMaquina == "TIJERA"){
                    console.log("Usted Ha Perdido Contra la Máquina");
                    ganadasMaquina++;
                }
                if(eleccionMaquina == "PIEDRA"){
                    console.log("Felicidades! Le ha Ganado a la Máquina");
                    ganadasUsuario++;
                }
                break;
            case 'TIJERA':
                if(eleccionMaquina == "PIEDRA"){
                    console.log("Usted Ha Perdido Contra la Máquina");
                    ganadasMaquina++;
                }
                if(eleccionMaquina == "PAPEL"){
                    console.log("Felicidades! Le ha Ganado a la Máquina");
                    ganadasUsuario++;
                }
                break;
            default:
                console.log("No ingresaste una opción válida");
                i--;
        }

    }
}
if(ganadasMaquina > ganadasUsuario){
    console.log(`La máquina te ha ganado por ${ganadasMaquina} a  ${ganadasUsuario}`);
} 
else if(ganadasUsuario > ganadasMaquina){
    console.log(`Le has ganado a la máquina por ${ganadasUsuario} a ${ganadasMaquina}`);
}
else{
    console.log("La máquina y tú han empatado");
}