let currencyInput = document.querySelector("input");
let selection = document.querySelector("select");
let result = document.querySelector("#result");

selection.addEventListener("change", function(){
   findTheResult();
});

currencyInput.addEventListener("keyup", function(){
   findTheResult();
});

function findTheResult(){
   result.innerHTML = selection.value * currencyInput.value;
}

