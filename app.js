// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let listaAmigos = [];
function agregarAmigo() {
    // Validacion del nombre que no sea en blanco...
    const nombre = document.getElementById('amigo').value;
    if (nombre){
        listaAmigos.push(nombre);
        insertarAmigo();
        limpiarInput();
    }else{
        alert('Por favor, ingrese un nombre!!!');
    }        
    console.log(listaAmigos);
    
    /**
        //crear un elemento li
        let li = document.createElement('li');
        li.innerHTML = nombre;
        //agregar el li al ul
        let ul = document.getElementById('listaAmigos');
        ul.appendChild(li);
        //borrar el valor del input para un nuevo
        limpiarInput();
    */   
}
function limpiarInput(){
    //borrar el valor del input para un nuevo
    document.getElementById('amigo').value = '';
}


function sortearAmigo(){
    //Validar que la lista de amigos no este vacia
    if(listaAmigos.length === 0){
        alert('Por favor, ingrese al menos un amigo!!!');
        return;
    }else {
        //Utilizar la funcion random para sortear un amigo
        let amigoSorteado = listaAmigos[Math.floor(Math.random() * listaAmigos.length)];
        console.log(amigoSorteado);
        //mostrar el amigo sorteado
        document.getElementById('resultado').innerHTML = `El amigo secreto es...${amigoSorteado}!!!!`;
    }
}

function insertarAmigo(){
    const nameList = document.getElementById('listaAmigos');
    nameList.innerHTML = '';
    listaAmigos.forEach((amigo) => {
        const li = document.createElement('li');
        li.innerHTML = amigo;
        nameList.appendChild(li);
    });

}