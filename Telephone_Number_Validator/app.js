const checkBtn = document.getElementById("check-btn")
const clearBtn = document.getElementById("clear-btn")
const userInput = document.getElementById("user-input")
const resultDiv = document.getElementById("result-div")

let A = [
    '1 555-555-5555',
    '1 (555) 555-5555',
    '1(555)555-5555',
    '1 555 555 5555',
    '5555555555',
    '555-555-5555',
    '(555)555-5555'
]

const checkValidNumber = input => {
    if (input === '') {
      alert('Please provide a phone number')
      return
    }

    const countryCode = '^(1\\s?)?'
    const areaCode = '(\\([0-9]{3}\\)|[0-9]{3})'
    const spaceDash = '(-\\s?)?'
    const num1 = '[0-9]{3}'
    const num2 = '[0-9]{4}$'
    const phoneRegEx = new RegExp(`${countryCode}${areaCode}${spaceDash}${num1}${spaceDash}${num2}`)

    const pTag = document.createElement('p');
    pTag.className = 'result-text' // create class to get the same CSS styl
    
    phoneRegEx.test(input) 
    ? (
        pTag.style.color = 'green',
        pTag.innerHTML = `Valid US number: ${input}`
    )
    : (
        pTag.style.color = 'red',
        pTag.innerHTML = `Invalid US number: ${input}`
    )

    resultDiv.appendChild(pTag)
}

checkBtn.addEventListener("click", () => {
    checkValidNumber(userInput.value)
    console.log(userInput.value)
}
)








// '^(1//s?)?'
// '(\\[0-9]{3}\\)|[0-9]{3}'
// '(-\\s?)?'
// '[0-9]{3}'
// '[0-9]{4}'