function additionerTout(...args)
{
    let total = 0
    for (let arg of args)
    {
        total += arg
    }
    return total
}
console.log("le total des argument est: " + additionerTout(1, 2, 3, 4, 5, 6, 7, 8, 9, 10))