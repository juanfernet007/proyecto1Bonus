// const {interesado,mostrarTodosLosCursosDisponibles,crearArchivo} = require ('./datos.js');
const {interesado,mostrarTodosLosCursosDisponibles,crearArchivo,obtenerCurso} = require ('./datos.js');


const express = require('express')
const app = express()
 


const argv = require('yargs') 
            .command('inscribir','Inscribir interesado al curso',interesado)                       
            .argv


function inscribirInteresado(interesado){                   
    if(interesado.id > 4)
        console.log('Ha ingresado un id que no corresponde a ningún curso');                        
    else if(interesado.id >= 1 && interesado.id <=4){


        curso = obtenerCurso(interesado);
        
        texto = 'El estudiante ' + interesado.nombre;
        texto =  texto + ' con cédula '+ interesado.cedula;
        texto =  texto + ' se ha matriculado en el curso de ' + curso.descripcion + ' que tiene una duración de ' + curso.duracion + ' y un valor de ' + curso.inversion; 

        console.log(texto);

        crearArchivo(interesado);

        app.get('/', function (req, res) {
            res.send(texto)
          })
           
          app.listen(3000)

       console.log('Se ha generado el dato en la pantalla del navegador: ir a localhost:3000 para visualizarlo')   
    }        
    else{                                    
        console.log('ESTOS SON LOS CURSOS DISPONIBLES');        
        mostrarTodosLosCursosDisponibles();                
    }
                
}            

inscribirInteresado(argv);











            





