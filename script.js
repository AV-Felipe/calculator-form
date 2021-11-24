//value related elements
let valuesArray = [undefined, undefined];
const operatorOne = document.getElementById('operator1');
const operatorTwo = document.getElementById('operator2');
//operation related elements
const sumOperation = document.getElementById('handSum');
const subtractionOperation = document.getElementById('handSub');
const multiplicationOperation = document.getElementById('handMul');
const divisionOperation = document.getElementById('handDiv');



// set the values for the operators

operatorOne.addEventListener('focusout', enterValue);
operatorTwo.addEventListener('focusout', enterValue);

function enterValue() {
    console.log(this.value);
    let id = this.getAttribute('id');
    console.log(id);

    if(id == "operator1"){
        
        valuesArray[0] = this.value.replace(/,/g, '.');
    }else{
        valuesArray[1] = this.value.replace(/,/g, '.');
    }

    console.log(valuesArray);
}

// perform operations

sumOperation.addEventListener('click', performCalculation);

function performCalculation() {
    console.log(operatorOne.value);
    
    //field validation
    if(valuesArray[0] === undefined || isNaN(valuesArray[0])){
        operatorOne.value= `digite um número aqui`;
        return;
    }else if(valuesArray[1] === undefined || isNaN(valuesArray[1])){
        operatorTwo.value= `digite um número aqui`;
        return;
    }


}