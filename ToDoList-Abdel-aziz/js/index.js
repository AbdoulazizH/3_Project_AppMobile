// Les instructions de gestiond des taches 
function ajouterTache() {
    const tache = document.getElementById('tache');
    const taskListEnCours = document.getElementById('taskListEnCours');

    const newTask = document.createElement('li');
    newTask.innerText = tache.value;

    $(newTask).on('click', function() {
        if (this.classList.contains('terminer')) {
            this.classList.remove('terminer');
            const taskListTerminees = document.getElementById('taskListTerminees');
            taskListTerminees.removeChild(this);
            taskListEnCours.appendChild(this);
        } else {
            this.classList.add('terminer');
            const taskListTerminees = document.getElementById('taskListTerminees');
            taskListEnCours.removeChild(this);
            taskListTerminees.appendChild(this);
        }
    });

    $(newTask).on('swipeleft', function() {
        $(newTask).hide('slow', function() {
            this.remove();
        });
    });

    $(newTask).on('swiperight', function() {
        if (!this.classList.contains('terminer')) {
            this.classList.add('terminer');
            const taskListTerminees = document.getElementById('taskListTerminees');
            taskListEnCours.removeChild(this);
            taskListTerminees.appendChild(this);
        }
    });

    // Affichage de la nouvelle tâche ajoutée sur la liste
    taskListEnCours.appendChild(newTask);
    tache.value = ''; // Réinitialiser la valeur de l'input après l'ajout de la tâche
    
}

// Réinitialisation de la liste des tâches en cours
function reinitialisation() {
    const taskListEnCours = document.getElementById('taskListEnCours');
    taskListEnCours.innerHTML = ''; 
}

// function ajouterTache() {
//     const tache = document.getElementById('tache');
//     const taskListEnCours = document.getElementById('taskListEnCours');

//     const newTask = document.createElement('li');
//     newTask.innerText = tache.value;

//     $(newTask).on('click', function() {
//         if (this.classList.contains('terminer')) {
//             this.classList.remove('terminer');
//             const taskListTerminees = document.getElementById('taskListTerminees');
//             taskListTerminees.removeChild(this);
//             taskListEnCours.appendChild(this);
//         } else {
//             this.classList.add('terminer');
//             const taskListTerminees = document.getElementById('taskListTerminees');
//             taskListEnCours.removeChild(this);
//             taskListTerminees.appendChild(this);
//         }
//     });

//     $(newTask).on('swipeleft', function() {
//         $(newTask).hide('slow', function() {
//             this.remove();
//         });
//     });

//     taskListEnCours.appendChild(newTask);
// }

// // La fonction de réinitialisation des tâches
// function reinitialisation() {
//     const taskListEnCours = document.getElementById('taskListEnCours');
//     const taskListTerminees = document.getElementById('taskListTerminees');
//     taskListEnCours.innerHTML = ''; // Suppression de tous les éléments de la liste
//     taskListTerminees.innerHTML = ''; // Suppression de tous les éléments de la liste
// }