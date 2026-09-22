function repeterChaine(tab, num)
{
    let result = ""
    for (let i = 0; i < num; i++)
    {
        result += tab
    }
    return result
}
console.log(repeterChaine("hello ", 4))