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
    let inputId = grupoIdDeUsuarioLogueado + '-' + usuarioId + '-' + tareaId;
    const comentario = document.getElementById(inputId).value;

    if (validarInput(comentario, 'El campo comentario está vacío! Por favor Ingrese uno válido')) {

        grupoDeTrabajos.forEach(grupoDeTrabajo => {
            if (grupoDeTrabajo.id == grupoIdDeUsuarioLogueado) {
                grupoDeTrabajo.usuarios.forEach(usuario => {
                    if (usuario.id == usuarioId) {
                        console.log(usuario.id)
                        usuario.tareas.forEach(tarea => {
                            if (tarea.id == tareaId) {
                                console.log(tarea.id)
                                listaDeComentarios = document.getElementById('comentarios-' + tarea.id);
                                let usuario = obtenerUsuario(usuarioLogueado);
                                const p = document.createElement('p');
                                const span = document.createElement('span');
                                span.innerHTML = usuario.nombreCompleto;
                                p.innerHTML = comentario;
                                p.appendChild(span);
                                listaDeComentarios.appendChild(p);
                            }
                        })
                    }
                })
            }
        });
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
                        let tareaId = contarTareas() + 1;
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
                    componenteTarea = document.getElementById('tarea-' + id);
                    componenteTarea.style.display = 'none';


                }

            })


        }
    });
}

function contarComentarios() {
    let contador = 0;
    grupoDeTrabajos.forEach(grupoDeTrabajo => {
        grupoDeTrabajo.usuarios.forEach(usuario => {
            usuario.tareas.forEach(tareas => {
                contador += tareas.comentarios.length;
            })
        })
    });

    if (contador > 0) {
        return contador;
    }
}

function contarTareas() {
    let contador = 0;
    grupoDeTrabajos.forEach(grupoDeTrabajo => {
        grupoDeTrabajo.usuarios.forEach(usuario => {
            contador += usuario.tareas.length;
        })
    });

    if (contador > 0) {
        return contador;
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
            let botonTareaId = 'tarea-' + tarea.id;

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
                const componenteTarea = document.createElement('div');
                componenteTarea.id = 'tarea-' + tarea.id;
                componenteTarea.style.backgroundColor = grupoDeTrabajo.color;

                const encabezadoTarea = document.createElement('div');
                encabezadoTarea.setAttribute('class', 'plegable');
                const divNombreDeTarea = document.createElement('p');


                divNombreDeTarea.innerHTML = tarea.nombre;
                encabezadoTarea.appendChild(divNombreDeTarea);

                componenteTarea.appendChild(encabezadoTarea);

                const listaDeComentarios = document.createElement('div');
                listaDeComentarios.id = 'comentarios-' + tarea.id;
                const comentarios = document.createElement('div');
                comentarios.setAttribute('class', 'comentarios');
                comentarios.appendChild(listaDeComentarios);
                componenteTarea.appendChild(comentarios);


                content.appendChild(componenteTarea);
                divTareas.appendChild(content);

                grupoIdDeUsuarioLogueado = Number(localStorage.getItem('grupoIdDeUsuarioLogueado'));
                if ((grupoId == grupoIdDeUsuarioLogueado) && (tarea.puedeComentar)) {

                    const buttonEliminarTarea = document.createElement('a');
                    const imagenEliminarTarea = document.createElement('img');
                    imagenEliminarTarea.src = "./images/remove-icon.png";
                    buttonEliminarTarea.setAttribute("onclick", 'eliminarTarea(' + tarea.id + ')');
                    buttonEliminarTarea.appendChild(imagenEliminarTarea);

                    encabezadoTarea.appendChild(buttonEliminarTarea);


                    let usuarioId = usuario.id;
                    let tareaId = tarea.id;
                    const input = document.createElement('input');
                    input.placeholder = "Agregar comentario";
                    input.id = grupoIdDeUsuarioLogueado + '-' + usuarioId + '-' + tareaId;

                    const buttonAgregarComentario = document.createElement('button');
                    buttonAgregarComentario.setAttribute("onclick", 'agregarComentario(' + grupoIdDeUsuarioLogueado + ',' + usuarioId + ',' + tareaId + ')');
                    buttonAgregarComentario.innerHTML = "Agregar";

                    const formulario = document.createElement('div');
                    formulario.style.backgroundColor = grupoDeTrabajo.color;
                    formulario.style.opacity = "0.6";
                    formulario.setAttribute('class', 'section-agregar-comentario');
                    formulario.appendChild(input);
                    formulario.appendChild(buttonAgregarComentario);
                    comentarios.appendChild(formulario);
                }

                tarea.comentarios.forEach(comentario => {
                    let usuario = obtenerUsuario(comentario.id);
                    const p = document.createElement('p');
                    const span = document.createElement('span');
                    span.innerHTML = usuario.nombreCompleto;
                    p.innerHTML = comentario.nombre;
                    p.appendChild(span);
                    listaDeComentarios.appendChild(p);
                })

                encabezadoTarea.addEventListener("click", function () {
                    this.classList.toggle("active");
                    var content = this.nextElementSibling;
                    if (content.style.display === "block") {
                        content.style.display = "none";
                    } else {
                        content.style.display = "block";
                    }
                });

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

function obtenerUsuario(id) {
    let encontrado = {
        nombreCompleto: "",
        flag: false
    }
    grupoDeTrabajos.find(grupoDeTrabajo => {
        return grupoDeTrabajo.usuarios.forEach(usuario => {
            if (usuario.id == id) {
                encontrado.nombreCompleto = usuario.nombreCompleto;
                encontrado.flag = true;
            }
        });
    });

    if (encontrado.flag) {
        return encontrado;
    }


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
