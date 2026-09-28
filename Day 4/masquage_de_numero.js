function mask_str(str)
{   
    return str.slice(-4).padStart(16, '*');
}
console.log(mask_str("1234567891234567"))