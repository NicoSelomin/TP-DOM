//récuparation et édition du contenu de notre H1
document.getElementById("demoH1").innerHTML = "Je suis le H1 modifié.";

//Recherche de l'élément avec l'id demo2
let demo2 = document.getElementById("demo2");

function gestionnaireDemo2(){
    demo2.classList.add("ok");
    //changement du contenu de demo2
    demo2.innerHTML="Je suis Papa."
    //changement su style de demo2
    demo2.style.color = "red";
    //création d'un élément i
    let elementI = document.createElement('i');
    //contenu du i
    elementI.innerHTML=" Je suis le nouveau né";
    //changer la couleur du texte avec style
    elementI.style.color="white";
    //Ajout du i à demo2
    demo2.appendChild(elementI);
}

//
demo2.addEventListener('click', gestionnaireDemo2);


//Demo recherche et selection

// Demo 1: getElementById
let demoId = document.getElementById("demoId");
demoId.addEventListener("click", changeTextWithId);

function changeTextWithId() {
    demoId.innerHTML = "Le texte a changé grâce à getElementById!";
}

// Demo 2: getElementsByTagName
let headings = document.getElementsByTagName("h2");
document.getElementById("changeTag").addEventListener("click", changeAllHeadings);

function changeAllHeadings() {
    for (let i = 0; i < headings.length; i++) {
        headings[i].style.color = "blue";
    }
}

// Demo 3: getElementsByClassName
let paragraphs = document.getElementsByClassName("demoClass");
document.getElementById("changeClass").addEventListener("click", changeClassColor);

function changeClassColor() {
    for (let i = 0; i < paragraphs.length; i++) {
        paragraphs[i].style.color = "green";
    }
}

// Demo 4: querySelector
let paragraph = document.querySelector(".demoQuery");
document.getElementById("selectSingle").addEventListener("click", changeQueryText);

function changeQueryText() {
    paragraph.innerHTML = "Ce paragraphe a été modifié grâce à querySelector!";
}

// Demo 5: querySelectorAll
let queryAllParagraphs = document.querySelectorAll(".demoQueryAll");
document.getElementById("selectAll").addEventListener("click", changeAllParagraphs);

function changeAllParagraphs() {
    queryAllParagraphs.forEach(p => p.style.backgroundColor = "yellow");
}


// Fonction de validation du formulaire
function validateForm() {
    let nom = document.forms["myForm"]["fname"].value;
    if (nom == "") {
        alert("Le nom doit être rempli");
        return false;
    }else{
        alert(nom);
    }
}

// Assigner la fonction validateForm à l'événement 'submit' du formulaire
document.getElementById('myForm').addEventListener('submit', function (event) {
    if (!validateForm()) {
        event.preventDefault();
    }
});


// Fonction pour changer la couleur du texte
function changeTextColor() {
    document.getElementById("demoHeading").style.color = "red";
}

// Fonction pour rendre l'élément invisible
function hideElement() {
    document.getElementById("demoVisibility").style.display = "none";
}

// Ajouter des événements sur les boutons
document.getElementById("changeColorButton").addEventListener('click', changeTextColor);
document.getElementById("hideElementButton").addEventListener('click', hideElement);



// Fonction pour démarrer l'animation
function myMove() {
    let id = null;
    const elem = document.getElementById("animate");
    let pos = 0;
    clearInterval(id);  // S'assurer que tout intervalle précédent est arrêté
    id = setInterval(frame, 5);

    function frame() {
        if (pos === 350) {  // Condition pour arrêter l'animation
            clearInterval(id);
        } else {
            pos++;
            elem.style.top = pos + 'px';    // Modification progressive de la position verticale
            elem.style.left = pos + 'px';   // Modification progressive de la position horizontale
        }
    }
}

// Ajouter un événement au bouton pour démarrer l'animation
document.getElementById("startAnimationButton").addEventListener('click', myMove);
