let billInput = document.querySelector('#bill-input')
let ppl = document.querySelector('#ppl')
let tip = document.querySelector('#tip-amount')
let total = document.querySelector('#total')
let btns = document.querySelectorAll('.percent button')
let btnCus = document.querySelector('#cus')
let btnRes = document.querySelector('#btn-res')
let tipPercent = 0
let bill = 0
let pplNumbs = 1
let tipAmount = 0
let totalAmount = 0
const zeroPpl = document.querySelector('#zero_ppl')

function TipAmountResult() {
    tipAmount = bill * tipPercent / pplNumbs
    tip.innerText = `$${tipAmount.toFixed(2)}`
}
function TotalResult() {
    totalAmount = (parseInt(bill) + parseInt(tipAmount)) / parseInt(pplNumbs)
    total.innerText = `$${totalAmount.toFixed(2)}`
}

function btnResActive() {
    if (tipAmount == 0 && totalAmount == 0) {
        btnRes.classList.remove('resetActive')
    } else {
        btnRes.classList.add('resetActive')
    }
}


billInput.addEventListener('change', function () {
    bill = billInput.value
    TipAmountResult()
    TotalResult()
    btnResActive()
})

for (let btn of btns) {
    btn.addEventListener('click', function () {
        tipPercent = btn.value
        TipAmountResult()
        TotalResult()
        btnResActive()
    })
}

btnCus.addEventListener('input', function () {
    tipPercent = btnCus.value / 100
    TipAmountResult()
    TotalResult()

})

ppl.addEventListener('input', function () {
    if (ppl.value != 0) {
        pplNumbs = ppl.value
        TipAmountResult()
        TotalResult()
        btnResActive()
        zeroPpl.classList.add('hide')
        ppl.classList.remove('input_zero')
    } else {
        zeroPpl.classList.remove('hide')
        ppl.classList.add('input_zero')
    }

})

btnRes.addEventListener('click', function () {
    tipPercent = 0
    bill = 0
    pplNumbs = 1
    tipAmount = 0
    totalAmount = 0
    tip.innerText = `$0.00`
    total.innerText = `$0.00`
    billInput.value = ''
    btnCus.value = ''
    ppl.value = ''
    btnResActive()
})