let str = [12, 450, 150, 890, 99]
let max = 0
for (let i = 0; i < str.length; i++)
{
    if (str[i] >= max)
    {
        max = str[i]
    }
}
console.log(max)