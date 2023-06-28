const RangeOfCharacters = document.getElementById("RangeOfCharacters")
const NumberOfCharacters = document.getElementById("NumberOfCharacters")
const form = document.getElementById("PasswordGenerator")
const includeUpperItem = document.getElementById("IncludeUpperCase")
const includeNumbersItem = document.getElementById("IncludeNumbers")
const includeSymbolsItem = document.getElementById("IncludeSymbols")
const passwordDisplay = document.getElementById("passwordDisplay")

const UpperCase_Codes = rangeOFarray(65, 90)
const LowerCase_Codes = rangeOFarray(97, 122)
const Number_Codes = rangeOFarray(48, 57)
const Symbols_Codes = rangeOFarray(33, 47).concat(rangeOFarray(58, 64)).concat(rangeOFarray(91, 96)).concat(rangeOFarray(123, 126))

RangeOfCharacters.addEventListener('input', CharacterAmount)
NumberOfCharacters.addEventListener('input', CharacterAmount)
form.addEventListener('submit', e => {e.preventDefault() 
    const amount = NumberOfCharacters.value
    const includeUpper = includeUpperItem.checked
    const includeNumbers = includeNumbersItem.checked
    const includeSymbols = includeSymbolsItem.checked
    const password = generatePassoword(amount,includeUpper, includeNumbers,includeSymbols) 
         passwordDisplay.innerText = password
})

function CharacterAmount(e)
{
    const value = e.target.value
    RangeOfCharacters.value = value
    NumberOfCharacters.value = value
}

function generatePassoword(amount, includeUpper, includeNumbers, includeSymbols)
{
    let codes = LowerCase_Codes
    if(includeUpper) codes = codes.concat(UpperCase_Codes)
    if(includeNumbers) codes = codes.concat(Number_Codes)
    if(includeSymbols) codes = codes.concat(Symbols_Codes)

    const passwordCharacters = []
    for(let i =0; i < amount; i++)
    {
        const character = codes[Math.floor(Math.random() * codes.length)]
        passwordCharacters.push(String.fromCharCode(character))
    }
    return passwordCharacters.join('')
}

function rangeOFarray(min, max)
{
    const array = []
    for(let i = min; i<max; i++)
    {
        array.push(i)
    }
    return array
}