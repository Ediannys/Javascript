

const groups = [
    {
        id: 1,
        name:" Grupo Uno",
        color:"#795300",
        users: []
    },
    {
        id: 2,
        name:" Grupo Dos",
        color:"#b28405",
        users: []
    }
];

const users = [
    {
       id:1,
       fullName: "María Teresa",
       tasks: []
    },
    {
        id:2,
        fullName: "Santos Torrealba",
        tasks: []
     },
     {
        id:3,
        fullName: "Isabella Montilla",
        tasks: []
     },
     {
        id:4,
        fullName: "Simón Guerrero",
        tasks: []
     },
     {
        id:5,
        fullName: "Bernarda Ayala",
        tasks: []
     },
     {
        id:6,
        fullName: "Solita Cruz",
        tasks: []
     },
     {
        id:7,
        fullName: "Michelle Cardona",
        tasks: []
     },
     {
        id:8,
        fullName: "Ediannys Gonzalez",
        tasks: []
     },
     
]

const tasks = [
    {
       id:1,
       summary: "Elegir el tema ",
       canComment:true,
       canRemove: true,
       comments: []
    },
    {
        id:2,
        summary: "Definir presupuesto",
        canComment:true,
        canRemove: true,
        comments: []
     },
     {
        id:3,
        summary: "Involucrar a familiares y amigos en la organización",
        canComment:true,
        canRemove: true,
        comments: []
     },
     {
        id:4,
        summary: "Poner todo en su lugar y disfrutar mucho de la fiesta!",
        canComment:true,
        canRemove: true,
        comments: []
     }
]

const comments = [
    {
        id:1,
        idUser: 0,
        summary:"Empezar con tiempo es siempre una buena idea"
        
    },
    {
        id:2,
        idUser: 0,
        summary:"Mientras más pronto lo hagan, más cosas podrán hacer."
        
    },
    {
        id:3,
        idUser: 0,
        summary:"Piensen en todo lo que les gustaría tener en la fiesta"
        
    },
    {
        id:4,
        idUser: 0,
        summary:"Llamen a proveedores de los servicios que necesiten (animación, menaje, comida, lugares de juegos, flores"
        
    },
    {
        id:5,
        idUser: 0,
        summary:"Soy de las que tiene listas de cosas por hacer para todo"
        
    },
    {
        id:6,
        idUser: 0,
        summary:"Así tengo toda la información en un mismo lugar y la mejor parte es cuando ves todo los cuadritos con un visto."
        
    },
    {
        id:7,
        idUser: 0,
        summary:"¡Pide ayuda! Para mí no hay nada más lindo que invitar a mi casa a tomar café una tarde y ver a mi esposo, a mis hijos, a mi mamá, a mi suegra, a mis hermanos, a mi abuela, a mi tía, mis mejores amigas y hasta mis sobrinos; cortando, pintando, pegando, armando y disfrutando de hacer alguno de los detallitos de las fiestas."
        
    },
    {
        id:8,
        idUser: 0,
        summary:"Son momentos en familia muy especiales y que generan mayor ilusión en mis hijos por sus festejos"
        
    },
   
]




























const plegableTasksTemplate = document.querySelector("[plegable-tasks-template]");
console.log(plegableTasksTemplate);