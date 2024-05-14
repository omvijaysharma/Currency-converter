const dropdowns = document.querySelectorAll(".dropdown select")

for(let select of dropdowns) {
for(currcode in countryList) {
let newOption = document.createElement("option")
newOption.innerText = currcode
        
//default selected 
        
if (select.name === "from" && currcode === "USD")
{
 newOption.selected = "selected"
    } 
else if (select.name === "to" && currcode === "INR") 
{
newOption.selected = "selected"
    }
select.append(newOption)
    }}

/* image */

//from country 

let fromCounrty = document.querySelector("#fromCountry")

fromCountry.onchange = () => {
let fCountry = document.getElementById("fromCountry").value;
let fromcode = countryList[fCountry]
let fromIMG = document.querySelector("#fromIMG")
fromIMG.src = 'https://flagsapi.com/' + fromcode + '/flat/64.png'
}

//to country 

let toCounrty = document.querySelector("#toCountry")

toCountry.onchange = () => {
let tCountry = document.getElementById("toCountry").value;
let tocode = countryList[tCountry]
let toIMG = document.querySelector("#toIMG")
toIMG.src = 'https://flagsapi.com/' + tocode + '/flat/64.png'
}

/* button */

let button = document.querySelector("#button")
// use 
button.onclick = async (evt) => {
let amount = document.querySelector("#amtinput");
let amtVal = amount.value;
if (amtVal === "" || amtVal < 1) {
amtVal = 1;
amount.value = "1";
}
evt.preventDefault()
let tCountry = document.getElementById("toCountry").value.toLowerCase();
let fCountry = document.getElementById("fromCountry").value.toLowerCase();
console.log(fCountry,tCountry)
const BASE_URL = "https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies";

const URL = `${BASE_URL}/${fCountry.toLowerCase()}/${tCountry.toLowerCase()}.json`;
let response = await fetch(URL);
let data = await response.json();
let rate = data[toCountry.toLowerCase()];
console.log(rate)

let msg = document.querySelector("#msg")
msg.innerText = amtVal * rate
}
