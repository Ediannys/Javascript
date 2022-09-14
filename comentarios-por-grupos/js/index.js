//DATOS
let grupoDeTrabajos = [{
    id: 1,
    nombre: "grupoDeTrabajoUno",
    color: "#EEB211",
    usuarios: [{
        id: 1,
        nombreCompleto: "Maria Gomez",
        tareas: [{
            id: 1,
            nombre: "Hacer Torta Fria",
            puedeEliminar: true,
            puedeComentar: true,
            comentarios: [{
                id: 1,
                usuarioId: 3,
                nombre: "Comprar pudin de Chocolate"
            },
            {
                id: 2,
                usuarioId: 4,
                nombre: "Comprar Maizena"
            }
            ]
        },
        {
            id: 2,
            nombre: "Hacer Torta de Naranja",
            puedeEliminar: false,
            puedeComentar: true,
            comentarios: [{
                id: 3,
                usuarioId: 3,
                nombre: "Batir la mezcla de forma circular para que crezca la torta"
            },
            {
                id: 4,
                usuarioId: 4,
                nombre: "La rayadura de naranja es el secreto"
            }
            ]
        }
        ]
    },
    {
        id: 2,
        nombreCompleto: "Ediannys González",
        tareas: []
    },
    {
        id: 3,
        nombreCompleto: "Bruno Rey",
        tareas: []
    },
    {
        id: 4,
        nombreCompleto: "Ernesto Cortéz",
        tareas: []
    }
    ]
},
{
    id: 2,
    nombre: "grupoDeTrabajoDos",
    color: "#3369E8",
    usuarios: [{
        id: 5,
        nombreCompleto: "Gustavo Durán",
        tareas: [{
            id: 5,
            nombre: "Hacer los arreglos Florales",
            puedeEliminar: true,
            puedeComentar: true,
            comentarios: [{
                id: 5,
                usuarioId: 6,
                nombre: "Los Tulipanes Rojos son muy bonitos"
            }]
        }]
    },
    {
        id: 6,
        nombreCompleto: "Efraín Ríos",
        tareas: []
    }
    ]
}
]

//FUNCIONES
function agregarComentario(grupoIdDeUsuarioLogueado, usuarioId, tareaId) {

    let usuarioLogueado = Number(localStorage.getItem('usuarioLogueado'));
    let inputId = grupoIdDeUsuarioLogueado + '_' + usuarioId + '_' + tareaId;
    const comentario = document.getElementById(inputId).value;
    flagComentarioAgregado = false;

    if (validarInput(comentario, 'El campo comentario está vacío! Por favor Ingrese uno válido')) {

        grupoDeTrabajos.forEach(grupoDeTrabajo => {
            if (grupoDeTrabajo.id == grupoIdDeUsuarioLogueado) {
                grupoDeTrabajo.usuarios.forEach(usuario => {
                    if (usuario.id == usuarioId) {
                        usuario.tareas.forEach(tarea => {
                            if (tarea.id == tareaId) {
                                let comentarios = tarea.comentarios;
                                let comentarioId = comentarios.length + 1;
                                comentarios.push({
                                    id: comentarioId,
                                    usuarioId: usuarioLogueado,
                                    nombre: comentario
                                })
                                flagComentarioAgregado = true;
                            }
                        })
                    }
                })
            }
        });

        if (flagComentarioAgregado) {
            listarTareasYcomentarios();
        }
    }
}

function agregarTarea() {

    let usuarioLogueado = Number(localStorage.getItem('usuarioLogueado'));
    const tarea = document.getElementById('agregar-tarea').value;
    const flagEliminar = document.getElementById('puede-eliminar').checked;
    const flagComentar = document.getElementById('puede-comentar').checked;
    let flagTareaAgregada = false;

    if (validarInput(tarea, 'El campo tarea está vacío! Por favor Ingrese uno válido')) {

        grupoDeTrabajos.forEach(grupoDeTrabajo => {
            if (grupoDeTrabajo.id == grupoIdDeUsuarioLogueado) {
                grupoDeTrabajo.usuarios.forEach(usuario => {
                    if (usuario.id == usuarioLogueado) {
                        let tareas = usuario.tareas;
                        let tareaId = tareas.length + 1;
                        tareas.push({
                            id: tareaId,
                            nombre: tarea,
                            puedeEliminar: flagEliminar,
                            puedeComentar: flagComentar,
                            comentarios: []
                        })
                        console.log(tareas)
                        flagTareaAgregada = true;
                    }
                })
            }
        });

        if (flagTareaAgregada) {
            listarTareasYcomentarios();
        }
    }
}

function encontrarIndiceDeLaTarea(tareas, id) {
    let contador = 0;
    tareas.forEach(tarea => {
        if (tarea.id == id) {
            if (tarea.puedeEliminar) {

                return contador;

            } else {
                alert('No tienes los permisos necesarios para eliminar esta tarea');
                return -1;
            }
        }
        contador += 1;
    });

}

function eliminarTarea(id) {

    let grupoIdDeUsuarioLogueado = Number(localStorage.getItem('grupoIdDeUsuarioLogueado'));
    let flagTareaEliminada = false;

    grupoDeTrabajos.forEach(grupoDeTrabajo => {
        if (grupoDeTrabajo.id == grupoIdDeUsuarioLogueado) {

            let pos = -1;
            grupoDeTrabajo.usuarios.forEach(usuario => {
                usuario.tareas.forEach((tarea, indice) => {
                    if (tarea.id == id) {
                        pos = indice;
                        return;
                    }
                })

                if (pos != -1) {
                    usuario.tareas.splice(pos, 1);
                    flagTareaEliminada = true;
                }

            })


        }
    });

    if (flagTareaEliminada) {
        listarTareasYcomentarios();
    }


}

function iniciarSesion() {
    localStorage.setItem('grupoIdDeUsuarioLogueado', 1);
    localStorage.setItem('usuarioLogueado', 2);
}

function inicializarBuscador() {
    let tareas = obtenerTareas();
    const buscadorInput = document.getElementById('buscador');
    buscadorInput.addEventListener('input', e => {
        const value = e.target.value;

        tareas.forEach(tarea => {
            let botonTareaId = 'tarea_' + tarea.id;

            let botonTarea = document.getElementById(botonTareaId);
            let tareaTexto = botonTarea.innerHTML;

            if (tareaTexto.toLocaleLowerCase().includes(value.toLocaleLowerCase())) {
                botonTarea.style.display = 'block';
            } else {
                botonTarea.style.display = 'none';
                console.log(false)
            }
        })
    });

}

function listarTareasYcomentarios() {
    const divTareas = document.getElementById('tareas');
    let content = document.getElementById("content");
    divTareas.removeChild(content);
    content = document.createElement('div');
    content.id = "content";
    grupoDeTrabajos.forEach(grupoDeTrabajo => {
        let grupoId = grupoDeTrabajo.id;

        grupoDeTrabajo.usuarios.forEach(usuario => {

            usuario.tareas.forEach(tarea => {
                const divNombreDeTarea = document.createElement('div');
                divNombreDeTarea.setAttribute('class', 'collapsible');
                divNombreDeTarea.id = 'tarea_' + tarea.id;
                divNombreDeTarea.style.backgroundColor = grupoDeTrabajo.color;
                divNombreDeTarea.innerHTML = tarea.nombre;




                const comentarios = document.createElement('div');
                comentarios.setAttribute('class', 'comentarios');

                content.appendChild(divNombreDeTarea);
                content.appendChild(comentarios);
                divTareas.appendChild(content);

                grupoIdDeUsuarioLogueado = Number(localStorage.getItem('grupoIdDeUsuarioLogueado'));
                if ((grupoId == grupoIdDeUsuarioLogueado) && (tarea.puedeComentar)) {

                    const buttonEliminarTarea = document.createElement('button');
                    buttonEliminarTarea.setAttribute("onclick", 'eliminarTarea(' + tarea.id + ')');
                    buttonEliminarTarea.innerHTML = "Eliminar";

                    divNombreDeTarea.appendChild(buttonEliminarTarea);


                    let usuarioId = usuario.id;
                    let tareaId = tarea.id;
                    const input = document.createElement('input');
                    input.id = grupoIdDeUsuarioLogueado + '_' + usuarioId + '_' + tareaId;

                    const buttonAgregarComentario = document.createElement('button');
                    buttonAgregarComentario.setAttribute("onclick", 'agregarComentario(' + grupoIdDeUsuarioLogueado + ',' + usuarioId + ',' + tareaId + ')');
                    buttonAgregarComentario.innerHTML = "Agregar";

                    const formulario = document.createElement('div');
                    formulario.setAttribute('class', 'formulario');
                    formulario.appendChild(input);
                    formulario.appendChild(buttonAgregarComentario);
                    content.appendChild(formulario);
                }


                tarea.comentarios.forEach(comentario => {
                    const p = document.createElement('p');
                    p.innerHTML = comentario.nombre;
                    comentarios.appendChild(p);
                })
            })
        })
    });
}

function obtenerTareas() {
    let tareas = [];
    grupoDeTrabajos.forEach(grupoDeTrabajo => {
        grupoDeTrabajo.usuarios.forEach(usuario => {
            usuario.tareas.forEach(tarea => {
                console.log(tarea)
                tareas.push(tarea)
            })
        })
    });
    return tareas;
}

function validarInput(texto, mensaje) {
    if (texto.length == 0) {
        alert(mensaje);
        return false;
    } else {
        return true;
    }
}


iniciarSesion();
inicializarBuscador();
listarTareasYcomentarios();
