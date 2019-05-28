const cursosDisponibles = [
        {
            id : 1,                    
            duracion: 80,
            inversion: 70000,
            descripcion: 'Matemáticas'  
         },
        {
           id:2,
           duracion: 30,
           inversion: 250000,
           descripcion: 'Inglés'    
        },
        {
            id: 3,
            duracion: 40,
            inversion: 0,
            descripcion: 'Programación'
        },
        {
            id: 4,
            duracion: 400,
            inversion: 900000,
            descripcion: 'Teología'
        }
    ];

let interesado = {
    id :{        
        demand:true,
        alias :'i'
    },
    nombre : {      
        demand:true, 
        alias: 'n'
    },
    cedula : {      
        demand:true,  
        alias: 'x'
    }
};    


let mostrarCursoDisponible = (curso,timeout) => {    
    setTimeout(function(timeout){
        console.log('**********************************************');        
        console.log('Curso disponible '+ curso.descripcion + ' id '+ curso.id +'\n ');
        console.log('tiene una duración de '+curso.duracion +' horas \n');
        console.log('y un valor de ' + curso.inversion + ' pesos colombianos \n')        
    }, timeout);
};

let mostrarTodosLosCursosDisponibles = () =>{
    mostrarCursoDisponible(cursosDisponibles[0]);
    mostrarCursoDisponible(cursosDisponibles[1],2000);
    mostrarCursoDisponible(cursosDisponibles[2],4000);       
    mostrarCursoDisponible(cursosDisponibles[3],6000);
};

const fs = require('fs');
let crearArchivo = (interesado) => {
        
    let curso = cursosDisponibles.find(function(cursoDisponible) {
        return cursoDisponible.id == interesado.id})
        
    texto = 'El estudiante ' + interesado.nombre +' \n';
    texto =  texto + ' con cédula '+ interesado.cedula + ' \n';
    texto =  texto + ' se ha matriculado en el curso de ' + curso.descripcion + ' que tiene una duración de ' + curso.duracion + ' y un valor de ' + curso.inversion;    
        
    fs.writeFile ('interesado.txt',texto,(err)=>{
        if(err) throw (err);
        console.log('Se ha hecho el registro');    
    });        
};

let obtenerCurso = (interesado) => {
    let curso = cursosDisponibles.find(function(cursoDisponible) {
        return cursoDisponible.id == interesado.id})
    return curso;
};

//module.exports = {cursosDisponibles,interesado,mostrarTodosLosCursosDisponibles,crearArchivo};
module.exports = {cursosDisponibles,interesado,mostrarTodosLosCursosDisponibles,crearArchivo,obtenerCurso};




