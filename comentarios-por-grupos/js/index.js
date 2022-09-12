let grupoDeTrabajos = [
    {
        id: 1,
        nombre: "grupoDeTrabajoUno",
        color: "#EEB211",
        usuarios:
            [
                {
                    id: 1,
                    nombreCompleto: "Maria Gomez",
                    tareas: [
                        {
                            id: 1,
                            nombre: "Hacer Torta Fria",
                            puedeEliminar: true,
                            puedeComentar: true,
                            comentarios: [
                                {
                                    id: 1,
                                    userId: 3,
                                    nombre: "Comprar pudin de Chocolate"
                                },
                                {
                                    id: 2,
                                    userId: 4,
                                    nombre: "Comprar Maizena"
                                }
                            ]
                        },
                        {
                            id: 2,
                            nombre: "Hacer Torta de Naranja",
                            puedeEliminar: false,
                            puedeComentar: true,
                            comentarios: [
                                {
                                    id: 3,
                                    userId: 3,
                                    nombre: "Batir la mezcla de forma circular para que crezca la torta"
                                },
                                {
                                    id: 4,
                                    userId: 4,
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
        usuarios:
            [
                {
                    id: 5,
                    nombreCompleto: "Gustavo Durán",
                    tareas: [
                        {
                            id: 5,
                            nombre: "Hacer los arreglos Florales",
                            puedeEliminar: true,
                            puedeComentar: true,
                            comentarios: [
                                {
                                    id: 5,
                                    userId: 6,
                                    nombre: "Los Tulipanes Rojos son muy bonitos"
                                }
                            ]
                        }
                    ]
                },
                {
                    id: 6,
                    nombreCompleto: "Efraín Ríos",
                    tareas: []
                }
            ]
    }
]

function iniciarSesion(){
    localStorage.setItem('grupoId', 1);
    localStorage.setItem('userId', 2);
}

function listarTareasYcomentarios() {
    const divTareas = document.getElementById('tareas');
    grupoDeTrabajos.forEach(grupoDeTrabajo => {
        let grupoId = grupoDeTrabajo.id;

        grupoDeTrabajo.usuarios.forEach(usuario => {
            usuario.tareas.forEach(tarea => {
                const button = document.createElement('button');
                button.setAttribute('class', 'collapsible');
                button.style.backgroundColor = grupoDeTrabajo.color;
                button.innerHTML = tarea.nombre;

                const comentarios = document.createElement('div');
                comentarios.setAttribute('class', 'comentarios');

                divTareas.appendChild(button);
                divTareas.appendChild(comentarios);

                grupoIdDeUsuario = Number(localStorage.getItem('grupoId'));
                if (grupoId == grupoIdDeUsuario) {

                    const input = document.createElement('input');
                    input.id = 'comentario_tarea_id_' + tarea.id;

                    const buttonAgregarComentario = document.createElement('button');
                    buttonAgregarComentario.innerHTML = "Agregar";

                    const formulario = document.createElement('div');
                    formulario.setAttribute('class', 'formulario');
                    formulario.appendChild(input);
                    formulario.appendChild(buttonAgregarComentario);
                    divTareas.appendChild(formulario);
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


iniciarSesion();
listarTareasYcomentarios();