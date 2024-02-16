const checkBtn = document.getElementById("check-btn")
const clearBtn = document.getElementById("clear-btn")
const userInput = document.getElementById("user-input")
const resultsDiv = document.getElementById("results-div")
const results = document.getElementById("results")
const container = document.getElementById("container")
let n = 0

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
    const spaceDash = '(-?\\s?)?'
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

    if (n%2 == 1) {
        pTag.style.backgroundColor = 'rgba(48, 48, 48, 0.3)'
    }
    resultsDiv.appendChild(pTag)
    n++
}

checkBtn.addEventListener("click", () => {
    checkValidNumber(userInput.value)
    container.classList.remove("move1")
    results.classList.remove("move2")
}
)

clearBtn.addEventListener('click', () => {
    resultsDiv.textContent = '';
    container.classList.add("move1")
    results.classList.add("move2")
    n = 0
  });






// '^(1//s?)?'
// '(\\[0-9]{3}\\)|[0-9]{3}'
// '(-\\s?)?'
// '[0-9]{3}'
// '[0-9]{4}'