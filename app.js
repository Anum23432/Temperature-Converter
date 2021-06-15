function calculateTemp() {

    const numberTemp = document.querySelector("#temp").value;
    const tempSelected = document.querySelector("#temp_diff");
    const valueTemp = temp_diff.options[tempSelected.selectedIndex].value;
    
const cToF = (cel) => {
    let fahrenheit = Math.round((cel * 9/5) + 32);
    return fahrenheit;
}
const fToC = (fah) => {
    let celsius = Math.round((fah - 32) * 5/9);
    return celsius;
}



    let result;
    if (valueTemp == "cel"){
        result = cToF(numberTemp);
        document.querySelector("#resultContainer").innerHTML = `${result} Fahrenheit` ;
    }else{
        result = fToC(numberTemp);
        document.querySelector("#resultContainer").innerHTML = `${result} Celsius` ; 
    }
}