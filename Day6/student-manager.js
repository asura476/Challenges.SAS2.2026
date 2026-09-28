let students = [
    {
        id: 1,
        name: "Ali",
        age: 21,
        city: "Youssoufia",
        note: 15
    },
    {
        id: 2,
        name: "Sara",
        age: 22,
        city: "Marrakech",
        note: 17
    },
    {
        id: 3,
        name: "Omar",
        age: 20,
        city: "Safi",
        note: 8
    },
    {
        id: 4,
        name: "Imane",
        age: 23,
        city: "Youssoufia",
        note: 12
    },
    {
        id: 5,
        name: "Yassine",
        age: 19,
        city: "Safi",
        note: 9
    }
];
console.log(`
=============================
     STUDENT MANAGER
=============================

1. Afficher tous les étudiants
2. Rechercher un étudiant
3. Rechercher par ville
4. Afficher les étudiants admis
5. Afficher les étudiants non admis
6. Afficher le meilleur étudiant
7. Afficher la moyenne de la classe
8. Quitter`)
const ps = require('prompt-sync')()
let choice = +ps("Votre choix : ")
switch (choice)
{
    case 1:
        for(i = 0; i < students.length; i++)
        {
            console.log(students[i].name)
        }
        break;
    case 2:
       for(i = 0; i < students.length; i++)
        {
            console.log(students[i].id)
        }
        break;
    case 3:
        break;
    case 4:
        break;
    case 5:
        break;
    case 6:
        break;
    case 7:
        break;
    case 8:
        break;
}