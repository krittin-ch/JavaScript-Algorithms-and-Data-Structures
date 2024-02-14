const roman= [
    ['M', 1000],
    ['CM', 900],
    ['D', 500],
    ['CD', 400],
    ['C', 100],
    ['XC', 90],
    ['L', 50],
    ['XL', 40],
    ['X', 10],
    ['IX', 9],
    ['V', 5],
    ['IV', 4],
    ['I', 1]
]


const btn = document.getElementById("convert-btn")
const output = document.getElementById("output")
const box = document.getElementById("box")

function convert(val) {
    let str = ""
    let num = 0
    for (let i=0; i<roman.length; i++) {
        num = roman[i]
        while (val >= num[1]) {
            val -= num[1]
            str += num[0]
        }  
    }
    return `${str}`
}

function show() {
    box.classList.add("slide")
    output.classList.add("show")
}

function checkNum(val) {
    val = Number(val)
    if (val !== Math.floor(val) || isNaN(val) || val == "") {
        show();
        return `Please enter a valid number.`
    } else if (val < 1) {
        show();
        return `Please enter a number greater than or equal to 1.`
    } else if (val > 3999) {
        show();
        return `Please enter a number less than or equal to 3999.`
    } else {
        show();
        return convert(val)
    }
}

btn.addEventListener("click",()=>{
    let Val = document.getElementById("number").value 
    output.innerText = checkNum(Val)

})