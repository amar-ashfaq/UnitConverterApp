const inputUnitValue = document.querySelector("#input-unit-value");
const unitConversionLength = document.querySelector("#unit-conversion-length");
const unitConversionVolume = document.querySelector("#unit-conversion-volume");
const unitConversionMass = document.querySelector("#unit-conversion-mass");

/*  US Conversion
    1 meter = 3.281 feet
    1 liter = 0.264 gallon
    1 kilogram = 2.204 pound
*/

function ConvertUnitLength(input) {
    const calculatedFeet = (input * 3.281).toFixed(3);
    const calculatedMeters = (input / 3.281).toFixed(3);
    return `${input} meters = ${calculatedFeet} feet | ${input} feet = ${calculatedMeters} meters`;
}

function ConvertUnitVolume(input) {
    const calculatedGallons = (input * 0.264).toFixed(3);
    const calculatedLiters = (input / 0.264).toFixed(3);
    return `${input} liters = ${calculatedGallons} gallons | ${input} gallons = ${calculatedLiters} liters`;
}

function ConvertUnitMass(input) {
    const calculatedPounds = (input * 2.204).toFixed(3);
    const calculatedKilograms = (input / 2.204).toFixed(3);
    return `${input} kilograms = ${calculatedPounds} pounds | ${input} pounds = ${calculatedKilograms} kilograms`;
}

inputUnitValue.addEventListener("input", ()=>{
    // check if input is empty
    if (inputUnitValue.value.trim() == ""){
        console.log("Input is empty!");
        unitConversionLength.textContent = '-';
        unitConversionVolume.textContent = '-';
        unitConversionMass.textContent = '-';
    }
    // check if input is valid
    else if (isNaN(inputUnitValue.value)){
        console.log("Input is not valid!");
        unitConversionLength.textContent = '-';
        unitConversionVolume.textContent = '-';
        unitConversionMass.textContent = '-';
    }
    else {
        unitConversionLength.textContent = ConvertUnitLength(inputUnitValue.value);
        unitConversionVolume.textContent = ConvertUnitVolume(inputUnitValue.value);
        unitConversionMass.textContent = ConvertUnitMass(inputUnitValue.value);
    }
});

// clear input fields on window refresh
window.onload = Init();

function Init() {
    inputUnitValue.value = "";
}