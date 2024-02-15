let A = [
    '1 555-555-5555',
    '1 (555) 555-5555',
    '1(555)555-5555',
    '1 555 555 5555',
    '5555555555',
    '555-555-5555',
    '(555)555-5555'
]

function number(num) {
    return num.replace(/[^0-9]/g, '')
}

function numValidate(num) {
    if (num.length == 10) {
        return true
    } else if (num.length == 11 && num[0] == 1) {
        return true
    } else {
        return false
    }
}

let B = number(A[0])
console.log(A[0])
console.log(B)