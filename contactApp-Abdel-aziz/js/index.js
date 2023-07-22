document.addEventListener('deviceready', () => {
    loadContacts(); // Chargement des contacts au démarrage de l'application
});

// Fonction pour charger les contacts à partir du stockage local
function loadContactsFromLocalStorage() {
    const storedContacts = localStorage.getItem('contacts');

    if (storedContacts) {
        return JSON.parse(storedContacts);
    } else {
        return []; // Retourne un tableau vide s'il n'y a pas de contacts enregistrés.
    }
}

// Fonction pour charger les contacts
function loadContacts() {
    const options = new ContactFindOptions();
    options.multiple = true;
    options.hasPhoneNumber = true;

    let fields = ['displayName', 'phoneNumbers'];

    navigator.contacts.find(fields, affichageContacts, gestionErreur, options);
}

// Fonction pour afficher les contacts
function affichageContacts(contacts) {
    const contactList = document.getElementById('contactList');
    let code = '';

    for (let i = 0; i < contacts.length; i++) {
        const contact = contacts[i];
        const displayName = contact.displayName;
        const phoneNumber = contact.phoneNumbers && contact.phoneNumbers.length > 0 ? contact.phoneNumbers[0].value : 'N/A';

        code += `
            <li>
                <img src="img/contact.jpg">
                <h1>${displayName}</h1>
                <p>${phoneNumber}</p>
            </li>
        `;
    }

    contactList.innerHTML = code;
    $(contactList).listview('refresh');
}

// Fonction pour afficher ou masquer le formulaire d'ajout
function toggleAddContactForm() {
    const addContactForm = document.getElementById('addContactForm');

    if (addContactForm.style.display === 'none') {
        addContactForm.style.display = 'block';
    } else {
        addContactForm.style.display = 'none';
    }
}

// Fonction pour ajouter un nouveau contact
function addContact() {
    const newName = document.getElementById('newName').value;
    const newPhone = document.getElementById('newPhone').value;

    if (!newName || !newPhone) {
        alert('Veuillez saisir le nom et le numéro de téléphone du contact.');
        return;
    }

    const newContact = {
        displayName: newName,
        phoneNumbers: [{ value: newPhone }]
    };

    const contacts = loadContactsFromLocalStorage();
    contacts.push(newContact);

    localStorage.setItem('contacts', JSON.stringify(contacts));

    // Mettre à jour l'affichage des contacts
    affichageContacts(contacts);

    // Remettre à zéro les champs de saisie
    document.getElementById('newName').value = '';
    document.getElementById('newPhone').value = '';

    // Masquer le formulaire d'ajout après avoir ajouté le contact
    const addContactForm = document.getElementById('addContactForm');
    addContactForm.style.display = 'none';
}
