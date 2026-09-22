function estPalindrome(tab)
{
    let i = 0
    let j = tab.length - 1
    let answer = false
    while (i < j)
    {
        if(tab[i] === tab[j])
        {
            answer = true
        }
        i++
        j--
    }
    return answer
}
console.log(estPalindrome("ismail"))