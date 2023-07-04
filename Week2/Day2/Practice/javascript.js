const userCart = {
	username : "John",
	password: 1234,
	isUserSignedIn : true,
	cart : {
		apple : 2,
		banana : 1,
		pear : 5,
	},
	prices : {
		apple : 0.5,
		banana : 0.8646466363,
		pear : 0.2
	}
};

userCart["lastname"]=["Smith"];
userCart["username"]=["Tom"];
console.log(userCart);

userCart["prices"]["pear"] *=1.17;
console.log();

let choice = prompt("What would you like to eat?").toLowerCase;

//2. Change the price of the pear, so it will include the Taxes. (17% is 0.17)

const userAnswer = Number(prompt('What is your age?'));


if(userAnswer < 18) {
console.log()
}   else if {

}   else