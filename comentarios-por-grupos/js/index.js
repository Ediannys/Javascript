let grupoDeTrabajo = [
    {
        id: 1,
        nombre: "grupoDeTrabajoUno",
        personas:
            [
                {
                    id: 1,
                    nombreCompleto: "Maria Gomez",
                    tareas: [
                        {
                            id: 1,
                            tarea: "Hacer Torta Fria",
                            puedeEliminar: true,
                            puedeComentar: true,
                            comentarios: [
                                {
                                    id: 1,
                                    userId: 3,
                                    comentario: "Comprar pudin de Chocolate"
                                },
                                {
                                    id: 2,
                                    userId: 4,
                                    comentario: "Comprar Maizena"
                                }
                            ]
                        },
                        {
                            id: 2,
                            tarea: "Hacer Torta de Chocolate",
                            puedeEliminar: false,
                            puedeComentar: true,
                            comentarios: [
                                {
                                    id: 3,
                                    userId: 3,
                                    comentario: "Comprar pudin de Chocolate"
                                },
                                {
                                    id: 4,
                                    userId: 4,
                                    comentario: "Comprar Maizena"
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
        personas:
            [
                {
                    id: 5,
                    nombreCompleto: "Gustavo Durán",
                    tareas: [
                        {
                            id: 5,
                            tarea: "Comprar Tulipanes",
                            puedeEliminar: true,
                            puedeComentar: true,
                            comentarios: [
                                {
                                    id: 5,
                                    userId: 6,
                                    comentario: "Comprar Tulipanes Rojos"
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

console.log(grupoDeTrabajo)