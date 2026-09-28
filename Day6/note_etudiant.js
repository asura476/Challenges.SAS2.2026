let students = [
    { name: "Ali", note: 15 },
    { name: "Sara", note: 8 },
    { name: "Omar", note: 17 },
    { name: "Imane", note: 11 },
    { name: "Yassine", note: 6 }
];
let countA = 0
let countN = 0
for (i = 0; i < students.length; i++)
{
    console.log("student name: " + students[i].name)
    console.log("student mark: " + students[i].note)

    if (students[i].note >= 10)
    {
        console.log("Admis")
        countA++
    }
    else{
        console.log("Non Admis")
        countN++
    }
    console.log("\n")
}
console.log("students admitted: " + countA)
console.log("students non admitted: " + countN)