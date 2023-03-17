const currencyEl_one = document.getElementById("currency-one");
const currencyEl_two = document.getElementById("currency-two");
const amountEl_one = document.getElementById("amount-one");
const amountEl_two = document.getElementById("amount-two");
const rateEl = document.getElementById("rate");
const swap = document.getElementById("swap");
const loader = document.getElementById("loader")

// Fetch exchange rates and update the DOM
function calculate() {
    loader.className = 'loadersmall loading'
    let currency_one = currencyEl_one.value;
    let currency_two = currencyEl_two.value;

    if (amountEl_one.value < 0) {
        amountEl_one.value = 0;
    };

    fetch(`https://v6.exchangerate-api.com/v6/370d55c233982cc0f62a011c/latest/${currency_one}`)
        .then(res => res.json())
        .then(data => {
            if (data.result == 'error') {
                console.log(data)
                alert(`Error: ${data["error-type"]}`);
            }
            let rate = data.conversion_rates[currency_two]
            rateEl.innerText = `1 ${currency_one} = ${rate} ${currency_two}`
            amountEl_two.value = (amountEl_one.value * rate).toFixed(2)
            loader.className = 'loadersmall'
        })
}

// Event listeners

currencyEl_one.addEventListener("change", calculate);
amountEl_one.addEventListener("input", calculate)
currencyEl_two.addEventListener("change", calculate)
amountEl_two.addEventListener("input", calculate)

swap.addEventListener("click", () => {
    let storage = currencyEl_one.value;
    currencyEl_one.value = currencyEl_two.value
    currencyEl_two.value = storage;
    calculate()
})