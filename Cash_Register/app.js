const displayChangeDue = document.getElementById('change-due')
const cashInput = document.getElementById('cash')
const purchaseBtn = document.getElementById('purchase-btn')
const cashDrawerDisplay = document.getElementById('cash-drawer-display')
const priceScreen = document.getElementById('price-screen')

let price = 3.26
let cid = [
  ['PENNY', 1.01],
  ['NICKEL', 2.05],
  ['DIME', 3.1],
  ['QUARTER', 4.25],
  ['ONE', 90],
  ['FIVE', 55],
  ['TEN', 20],
  ['TWENTY', 60],
  ['ONE HUNDRED', 100]
]

const currencyNameMap = {
  'PENNY': 'Pennies',
  'NICKEL': 'Nickels',
  'DIME': 'Dimes',
  'QUARTER': 'Quarters',
  'ONE': 'Ones',
  'FIVE': 'Fives',
  'TEN': 'Tens',
  'TWENTY': 'Twenties',
  'ONE HUNDRED': 'Hundreds'
};

let denominations = [100, 20, 10, 5, 1, 0.25, 0.1, 0.05, 0.01];

function updateUI() {
  cash.value = ''
  priceScreen.textContent = `Total: $${price}`
  cashDrawerDisplay.innerHTML = `
  <p><strong>Change in drawer:</strong></p> 
  ${cid.map(money => `<p>${currencyNameMap[money[0]]}: $${money[1]}</p>`).join('')}
  `
}

updateUI()

function checkCash() {
  let total = cid.map(entry => entry[1]).reduce((acc, val) => acc + val, 0).toFixed(2)
  let cash = parseFloat(cashInput.value)

  if (cash < price) {
    updateUI() 
    alert('Customer does not have enough money to purchase the item')
    return
  } else if (cash - price > total) {
    updateUI() 
    return `<p>Status: INSUFFICIENT_FUNDS</p>`
    
  }

  let change = [
    ['PENNY', 0],
    ['NICKEL', 0],
    ['DIME', 0],
    ['QUARTER', 0],
    ['ONE', 0],
    ['FIVE', 0],
    ['TEN', 0],
    ['TWENTY', 0],
    ['ONE HUNDRED', 0]
  ]
  let i = 0
  let cidCopy = []


  for (i=0; i<cid.length; i++) {
    cidCopy[i] = cid[i]
  }
  
  cash -= price;
  cash = parseFloat(cash.toFixed(2))
  
  for (let i = 0; i < denominations.length; i++) {
    while (cash >= denominations[i] && cid[8 - i][1] >= denominations[i]) {
      cash -= denominations[i]
      change[8 - i][1] += denominations[i]
      cid[8 - i][1] -= denominations[i]
      cash = parseFloat(cash.toFixed(2))
      change[8 - i][1] = parseFloat(change[8 - i][1].toFixed(2))
      cid[8 - i][1] = parseFloat(cid[8 - i][1].toFixed(2))
    }
  }

  if (cash != 0 || cid.some(e => e[1]<0)) {
    cid = cidCopy
    updateUI() 
    return `<p>Status: INSUFFICIENT_FUNDS</p>`
  } else if (cashInput.value == price) {
    updateUI()
    return '<p>No change due - customer paid with exact cash</p>'
  } else if (change.map(e => e[1]).reduce((acc, curr) => acc + curr, 0).toFixed(2) == total) {
    let cashHTML = `<p>Status: CLOSED</p>`
    for (let i = change.length - 1; i >= 0; i--) {
      if (change[i][1] !== 0) {
        cashHTML += `<p>${change[i  ][0]}: $${change[i][1]}</p>`;
      }
    }
    return cashHTML
  } else {
    updateUI()
    let cashHTML = `<p>Status: OPEN</p>`
    for (let i = change.length - 1; i >= 0; i--) {
      if (change[i][1] !== 0) {
        cashHTML += `<p>${change[i][0]}: $${change[i][1]}</p>`;
      }
    }
    return cashHTML
  }
}


purchaseBtn.addEventListener("click", () => {
  displayChangeDue.innerHTML = checkCash()
})