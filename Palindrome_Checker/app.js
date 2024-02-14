// const Btn = document.getElementById("check-btn")
// const ans = document.querySelector(".answer")
// const Res = document.getElementById("result") 

// Btn.addEventListener("click",()=>{
//     let val = document.getElementById("text-input").value
    
//     if (val === '') {
//         alert("Please input a value")
//         return
//     }

//     newVal = val.replace(/[^a-zA-Z]/g, '').toLowerCase()
    
//     let len = newVal.length
//     let res = 0
//     let i = 0

//     let mid = Math.floor(len/2)

//     while (i!=mid && res!=1) {
//         if (newVal[i] != newVal[len-1-i]) {
//             res += 1
//         }
//         i++
//     }

//     result(res, val)
// }
// )

// function result(res, val) {
//     if (res == 0) {
//         ans.innerText = `${val} is a palindrome.`
//     } else {
//         ans.innerText = `${val} is not a palindrome.`
//     }
//     Res.classList.add("fade")
// }


const userInput = document.getElementById('text-input');
const checkPalindromeBtn = document.getElementById('check-btn');
const resultDiv = document.getElementById('result');

const checkForPalindrome = input => {
  const originalInput = input;

  if (input === '') {
    alert('Please input a value');
    return;
  }

  resultDiv.replaceChildren();

  const lowerCaseStr = input.replace(/[^A-Za-z0-9]/gi, '').toLowerCase();
  let resultMsg = `${originalInput} is ${
    lowerCaseStr === [...lowerCaseStr].reverse().join('') ? '' : ' not'} a palindrome.`;


  const pTag = document.createElement('p');
  pTag.className = 'user-input';
  pTag.innerHTML = resultMsg;
  resultDiv.classList.add("fade")
  resultDiv.appendChild(pTag);
};

checkPalindromeBtn.addEventListener('click', () => {
  checkForPalindrome(userInput.value);
});

userInput.addEventListener('keydown', e => {
  if (e.key === 'Enter') {
    checkForPalindrome(userInput.value);
    userInput.value = '';
  }
});
