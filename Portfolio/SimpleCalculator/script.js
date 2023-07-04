class Calculator {
    constructor(previousNumberAndTextElement, currentNumberAndTextElement){
        this.previousNumberAndTextElement=previousNumberAndTextElement 
        this.currentNumberAndTextElement=currentNumberAndTextElement
        this.clearIt()
    }



//this will clear the entire selection
clearIt(){
    this.currentOperand = '';
    this.previousOperand = '';
    this.operation = undefined;
}



//this will delete one number at a time
deleteANumber (){

}


//append Number is used to combine multiple numbers to give a select figure.
//Using number as a parameter so that the new number is added on to it.
//Notice that here we are using the toString and this allows us to append the number
//to be as big as we want. We change it to a string so that JS doesn't start performing
//addition on it. Because if it were a number it would just add. 
appendNumber (number){
    if (number === '.' && this.currentOperand.includes('.')) return
    this.currentOperand = this.currentOperand.toString() + number.toString()
}

//what exactly do you want the program to do?
chooseOperation(operation){
this.operation = operation
}

//this will calculate the question
compute(){

}

//this will show the answer in our display div
updateDisplay(){
    this.currentNumberAndTextElement.innerText = this.currentOperand
}
}

const numberButtons = document.querySelectorAll('[data-number]')
const operationButtons = document.querySelectorAll('[data-operation]')
const equalsButton = document.querySelector('[data-equals]')
const deleteButton = document.querySelector('[data-all-clear]')
const singleDelete = document.querySelector('[data-delete]')
const currentNumberAndTextElement = document.querySelector('[data-current-operand]')
const previousNumberAndTextElement = document.querySelector('[data-previous-operand]')

 
const theCalculator = new Calculator(previousNumberAndTextElement,currentNumberAndTextElement)


numberButtons.forEach(button =>{
    button.addEventListener('click', ()=>{
        theCalculator.appendNumber(button.innerText)
        theCalculator.updateDisplay()
    })
})
operationButtons.forEach(button =>{
    button.addEventListener('click', ()=>{
        theCalculator.chooseOperation(button.innerText)
        theCalculator.updateDisplay()
    })
})