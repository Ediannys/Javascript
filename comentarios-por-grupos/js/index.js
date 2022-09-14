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

function validarComentario(comentario) {

    if (comentario.length == 0) {
        alert('El comentario está vacío');
        return false;
    } else {
        return true;
    }

}

function agregarComentario(grupoIdDeUsuarioLogueado, usuarioId, tareaId) {

    let usuarioLogueado = Number(localStorage.getItem('usuarioLogueado'));
    let inputId = grupoIdDeUsuarioLogueado + '_' + usuarioId + '_' + tareaId;
    const comentario = document.getElementById(inputId).value;
    flagComentarioAgregado = false;

    if (validarComentario(comentario)) {

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


function iniciarSesion() {
    localStorage.setItem('grupoIdDeUsuarioLogueado', 1);
    localStorage.setItem('usuarioLogueado', 2);
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
                const button = document.createElement('button');
                button.setAttribute('class', 'collapsible');
                button.id = 'tarea_' + tarea.id;
                button.style.backgroundColor = grupoDeTrabajo.color;
                button.innerHTML = tarea.nombre;

                const comentarios = document.createElement('div');
                comentarios.setAttribute('class', 'comentarios');

                content.appendChild(button);
                content.appendChild(comentarios);
                divTareas.appendChild(content);

                grupoIdDeUsuarioLogueado = Number(localStorage.getItem('grupoIdDeUsuarioLogueado'));
                if ((grupoId == grupoIdDeUsuarioLogueado) && (tarea.puedeComentar)) {


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

iniciarSesion();
inicializarBuscador();
listarTareasYcomentarios();
