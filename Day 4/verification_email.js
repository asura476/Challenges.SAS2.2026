function verifierEmail(email)
{
    verify = false
    if (email.includes("@") && email.endsWith(".com"))
    {
            verify = true
    }
    return verify
}
console.log(verifierEmail("ismail@gmail.com"))
