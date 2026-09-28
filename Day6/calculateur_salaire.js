let employee = 
{
    firstName: "Sara",
    lastName: "Amrani",
    salary: 7000,
    bonus: 1000,
    absenceDays: 2
};
console.log("Salaire final = " + (employee.salary + employee.bonus - (employee.absenceDays * 200)))