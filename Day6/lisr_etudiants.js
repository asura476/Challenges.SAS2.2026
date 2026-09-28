let students = [
    {
        firstName: "Ali",
        age: 20,
        city: "Youssoufia"
    },
    {
        firstName: "Sara",
        age: 22,
        city: "Marrakech"
    },
    {
        firstName: "Omar",
        age: 19,
        city: "Safi"
    }
];
for (i = 0; i < students.length; i++)
{
    console.log(students[i])
    console.log(students[i].firstName)
    console.log(students[i].age)
    console.log('My name is ' + students[i].firstName + ", i am " + students[i].age + " years old, and i live in " + students[i].city + ".")
}