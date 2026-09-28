let students = [
    { id: 1, name: "Ali", age: 20 },
    { id: 2, name: "Sara", age: 22 },
    { id: 3, name: "Omar", age: 19 },
    { id: 4, name: "Imane", age: 21 }
];
const ps = require('prompt-sync')()
let id = +ps("enter your id: ")
if (id <= 4)
    {
    console.log("Étudiant trouvé !")
    console.log("\n")
    console.log("ID : " + students[id - 1].id + "\n" + "Nom : " + students[id - 1].name + "\n" + "Age : " + students[id - 1].age)
    }
    else{
        console.log("Étudiant introuvable")
    }