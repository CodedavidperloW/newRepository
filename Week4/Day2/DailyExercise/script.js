let client = "Betty";

const groceries = {
    fruits : ["pear", "apple", "banana"],
    vegetables: ["tomatoes", "cucumber", "salad"],
    totalPrice : "35$",
    other : {
        payed : false,
        meansOfPayment : ["cash", "creditCard"]
    }
}




const displayGroceries = () =>{
console.log(groceries.fruits)
}
displayGroceries()


const cloneGroceries = () =>{
    const user = client;
    console.log(user);
    const shopping = groceries
    console.log(shopping)
}

cloneGroceries()