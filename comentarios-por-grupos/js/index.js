
const data = [
    {
        id: 1,
        name: " Grupo Uno",
        color: "#795300",
        users: [{
            id: 1,
            fullName: "María Teresa",
            tasks: [{
                id: 1,
                summary: "Elegir el tema ",
                canComment: true,
                canRemove: true,
                comments: [{
                    id: 1,
                    idUser: 3,
                    summary: "Empezar con tiempo es siempre una buena idea"

                },
                {
                    id: 2,
                    idUser: 4,
                    summary: "Mientras más pronto lo hagan, más cosas podrán hacer."

                },]
            },]
        },
        {
            id: 2,
            fullName: "Santos Torrealba",
            tasks: [{
                id: 2,
                summary: "Definir presupuesto",
                canComment: true,
                canRemove: true,
                comments: [{
                    id: 3,
                    idUser: 3,
                    summary: "Piensen en todo lo que les gustaría tener en la fiesta"

                },
                {
                    id: 4,
                    idUser: 1,
                    summary: "Llamen a proveedores de los servicios que necesiten (animación, menaje, comida, lugares de juegos, flores"

                },]
            },]
        },
        {
            id: 3,
            fullName: "Isabella Montilla",
            tasks: []
        },
        {
            id: 4,
            fullName: "Simón Guerrero",
            tasks: []
        },]
    },
    {
        id: 2,
        name: " Grupo Dos",
        color: "#b28405",
        users: [{
            id: 5,
            fullName: "Bernarda Ayala",
            tasks: []
        },
        {
            id: 6,
            fullName: "Solita Cruz",
            tasks: [{
                id: 3,
                summary: "Involucrar a familiares y amigos en la organización",
                canComment: true,
                canRemove: true,
                comments: [{
                    id: 5,
                    idUser: 5,
                    summary: "Soy de las que tiene listas de cosas por hacer para todo"

                },
                {
                    id: 6,
                    idUser: 8,
                    summary: "Así tengo toda la información en un mismo lugar y la mejor parte es cuando ves todo los cuadritos con un visto."

                },]
            },]
        },
        {
            id: 7,
            fullName: "Michelle Cardona",
            tasks: [{
                id: 4,
                summary: "Poner todo en su lugar y disfrutar mucho de la fiesta!",
                canComment: true,
                canRemove: true,
                comments: [
                    {
                        id: 7,
                        idUser: 5,
                        summary: "¡Pide ayuda! Para mí no hay nada más lindo que invitar a mi casa a tomar café una tarde y ver a mi esposo, a mis hijos, a mi mamá, a mi suegra, a mis hermanos, a mi abuela, a mi tía, mis mejores amigas y hasta mis sobrinos; cortando, pintando, pegando, armando y disfrutando de hacer alguno de los detallitos de las fiestas."

                    },
                    {
                        id: 8,
                        idUser: 8,
                        summary: "Son momentos en familia muy especiales y que generan mayor ilusión en mis hijos por sus festejos"

                    },
                ]
            }]
        },
        {
            id: 8,
            fullName: "Ediannys Gonzalez",
            tasks: []
        },]
    }

];

const taskWrapper = document.querySelector("[task-wrapper]");
const searchInput = document.querySelector("[data-search]");


searchInput.addEventListener("input", (event) => {
    const value = event.target.value.toLowerCase();

    data.forEach(group => {
        group.users.forEach(user => {
            user.tasks.forEach(task => {
                const isVisible = task.summary.toLowerCase().includes(value);
                console.log(isVisible)

                const taskHeader = document.getElementById("task-" + task.id);

                if (isVisible) {
                    taskHeader.classList.remove("hide");
                    taskHeader.classList.add("show");
                } else {
                    taskHeader.classList.remove("show");
                    taskHeader.classList.add("hide");
                }
            })
        })
    })

})


function getSelectorId(selector) {
    let position = selector.length;
    position -= 1;
    return Number(selector.charAt(position));
}

function addComment(idTask) {
    console.log("Agregar comentario en Tarea" + idTask)
}

function removeTask(idTask) {
    console.log('Eliminar' + idTask);
}

function addComment(event) {
    const form = event.target;
    if (validateForm(form.summary.value)) {
        const selectorId = getSelectorId(form.name);
        const commenList = document.getElementById('comment-list-' + selectorId);
        const li = document.createElement("li");
        li.textContent = form.summary.value;
        commenList.append(li);
    }
    else {
        alert("Por favor ingrese un comentario válido")
    }
    event.preventDefault();
}

function validateForm(value) {
    if (value.length === 0) {
        return false;
    } else {
        return true;
    }
}

function createTemplateTask() {
    data.forEach(group => {
        let backgorundGroup = group.color;
        group.users.forEach(user => {
            user.tasks.forEach(task => {
                const plegabeTaskTemplate = document.querySelector("[plegable-tasks-template]").content.cloneNode(true);
                const taskCard = plegabeTaskTemplate.querySelector("[task-card]");
                taskCard.id = "task-" + task.id;
                const taskHeader = plegabeTaskTemplate.querySelector("[task-header]");
                
                const pTaskHeader = taskHeader.children[0];
                const aTaskHeader = taskHeader.children[1];
                pTaskHeader.textContent = task.summary;
                aTaskHeader.setAttribute("onclick", "removeTask(" + task.id + ")");

                const commenList = plegabeTaskTemplate.querySelector("[comment-list]");
                commenList.id = "comment-list-" + task.id;
                const commentForm = plegabeTaskTemplate.querySelector("[comment-form]");
                commentForm.name = "coment-form-" + task.id;

                commentForm.addEventListener("submit", addComment);

                task.comments.forEach(comment => {
                    const li = document.createElement("li");
                    li.textContent = comment.summary;
                    commenList.append(li);
                })
                taskWrapper.append(plegabeTaskTemplate);
            })
        })
    });
}

createTemplateTask();




