var nombre = document.getElementById('fname');
var apellido = document.getElementById('lname');
var comentario = document.getElementById('subject');


var form = document.getElementById('formulario');
    form.addEventListener('submit', function(evt){
        evt.preventDefault();
        var mensajesError=[];

        if (nombre.value === null || nombre.value === ''){
            mensajesError.push('Ingresa un nombre');
        }
        if (apellido.value === null || apellido.value === ''){
            mensajesError.push('Ingresa un apellido');
        }
        if (comentario.value === null || comentario.value === ''){
            mensajesError.push('Ingresa un comentario');
        }
        
        if(mensajesError.length!=0){
            alert(mensajesError.join(', '));
        }
        else{
            window.location.href = "../googleClase/index.html";
        }
        
    });

