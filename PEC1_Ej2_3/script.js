const container = document.querySelector('.container');
const seats = document.querySelectorAll('.row .seat:not(.occupied)');
const count = document.getElementById('count');
const total = document.getElementById('total');
const movieSelect = document.getElementById('movie');
const currencySelect = document.getElementById('currency');
const curSym = document.querySelectorAll('.prueba');
const totalCur = document.getElementById('totalcurrency')

populateUI();

let ticketPrice = +movieSelect.value;

// Save selected movie index and price
function setMovieData(movieIndex, moviePrice) {
    localStorage.setItem('selectedMovieIndex', movieIndex);
    localStorage.setItem('selectedMoviePrice', moviePrice);
}

// Update total and count 
function updateSelectedCount() {
    let selectedSeats = document.querySelectorAll('.row .seat.selected');

    // Copy selected seats into an array
    // Map through that array
    // Return a new array

    let seatsIndex = [...selectedSeats].map(seat => [...seats].indexOf(seat))

    localStorage.setItem('selectedSeats', JSON.stringify(seatsIndex));

    let selectedSeatsCount = selectedSeats.length;

    rateFetcher(currencySelect.value).then((rate) => {

        count.innerText = selectedSeatsCount;
        total.innerText = selectedSeatsCount * ((ticketPrice * rate).toFixed(2));
    })
}

// Get data from local storage and populate the UI
function populateUI() {
    let selectedSeats = JSON.parse(localStorage.getItem('selectedSeats'));

    if (selectedSeats !== null && selectedSeats.length > 0) {
        seats.forEach((seat, index) => {
            if (selectedSeats.indexOf(index) > -1) {
                seat.classList.add('selected');
            }
        })
    }

    let selectedMovieIndex = localStorage.getItem('selectedMovieIndex');

    if (selectedMovieIndex !== null) {
        movieSelect.selectedIndex = selectedMovieIndex;
    }
}


// Movie select event
movieSelect.addEventListener('change', e => {
    ticketPrice = +e.target.value;
    setMovieData(e.target.selectedIndex, e.target.value);
    updateSelectedCount();
})


// Variable that stores the names of the films
let movienames = [];
for (let i = 0; i < movieSelect.options.length; i++) {
    movienames.push(movieSelect.options[i].innerText)
}

// Dictionary to assign a symbol to each currency code
let currenDict = {
    "EUR": "€",
    "USD": "$",
    "JPY": "¥",
    "GBP": "£"
}

// Function that fetches the current exchange rate through an API
function rateFetcher(targetCurrency) {
    return fetch(`https://v6.exchangerate-api.com/v6/370d55c233982cc0f62a011c/latest/EUR`)
        .then(res => res.json())
        .then(data => {
            rate = data.conversion_rates[targetCurrency]
            return rate
        })
}

// Function that changes the prices of the films before the currency menu is selected
function firstCurrencyApplier() {
    rateFetcher(currencySelect.value).then((rate) => {
        currencySymbol = currenDict[currencySelect.value]
        totalCur.innerText = currencySymbol
        for (let i = 0; i < movieSelect.options.length; i++) {
            let option = movieSelect.options[i];
            let convertedPrice = movieSelect.options[i].value * rate
            option.innerText = `${movienames[i]} ${convertedPrice.toFixed(2)} ${currencySymbol}`;
        }
    })

}

firstCurrencyApplier()

// Adjust currency values
currencySelect.addEventListener('change', e => {
    rateFetcher(e.target.value).then((rate) => {
        ;
        let currentCurrencySymbol = currenDict[e.target.value];
        for (let i = 0; i < movieSelect.options.length; i++) {
            let option = movieSelect.options[i];
            let convertedPrice = +movieSelect.options[i].value * rate
            option.innerText = `${movienames[i]} ${convertedPrice.toFixed(2)} ${currentCurrencySymbol}`;
        }
        totalCur.innerText = currentCurrencySymbol
    })
    updateSelectedCount()
})


container.addEventListener('click', (e) => {
    if (e.target.classList.contains('seat') && (!e.target.classList.contains('occupied'))) {
        e.target.classList.toggle('selected')

        updateSelectedCount()
    };
})

// Initial count and total set
updateSelectedCount();