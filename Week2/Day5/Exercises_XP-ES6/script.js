//Exercise 1

//The output of num will be 10


//Exercise 2
function numbers() {
    for (let i = 0; i < 5; i += 1) {
        console.log(i);
    }
    console.log(i);
}
numbers();

// Above I replaced the var i=0 with 'let'


//Exercise 3----Need to Finish

function myMoney() {
    let monthlyIncome
}

function theVat() {
    let currentVat
}

function otherExpenses() {
    let additionalExpenses
}

const incomeGeneratedMinusExpenses = incomeMinusExpenses();

function incomeMinusExpenses() {
    let totalMoney
    const myMoney = myMoney();
    const theVat = theVat();
    const otherExpenses = otherExpenses();
    totalMoney = myMoney * theVat - otherExpenses
    console.log(`The total amount of money that you have is ${totalMoney}`)
    return totalMoney
}















