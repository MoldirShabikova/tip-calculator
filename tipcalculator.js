let billingAmountEl = document.getElementById('billamt')
let serviceQualityEl = document.getElementById('serviceQual')
let peopleAmountEl = document.getElementById('peopleamt')
let calculateBtn = document.getElementById('calculate')

let totalTipEl = document.getElementById('totalTip')
let tipEl = document.getElementById('tip')

calculateBtn.addEventListener('click', (event) => {
  event.preventDefault()

  // 1. get the bill amount
  let billAmount = billingAmountEl.value

  // 2. multiply bill amount by service quality
  let quality = serviceQualityEl.value
  let totalTip = billAmount * quality

  // validate input fields
  if (billAmount === '' || quality === 0) {
    alert('Please enter values!')
    return
  }

  // 3. calculate tip. divide by number of people
  let numOfpeople = peopleAmountEl.value

  // check if number of people is blank or less than or equal to 1, set it to 1
  if (numOfpeople === '' || numOfpeople <= 1) {
    numOfpeople = 1
  }

  totalTip = (totalTip / numOfpeople).toFixed(2)

  totalTipEl.style.display = 'block'
  tipEl.innerText = totalTip
})
