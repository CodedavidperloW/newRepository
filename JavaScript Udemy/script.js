// var output = document.getElementById("output");
// var login = false;
// var outputHolder = "";
// var userOkay = login == true ? outputHolder = "true" : outputHolder = "false"

// output.innerHTML = userOkay;

///array of user names
//prompt for a username
//if username is in array, then output okay. if not, then denied.
//indexOf


// var arrayOfNames = ["David","Yonit","Ruth","Michael","Hadar"]
// var promptLogin = prompt("Write your name to see if you are in the array.")
// var checkUser = arrayOfNames.indexOf(promptLogin) > -1 ? true : false   
// var output = document.getElementById("output");
// var htmlOutput = ""


// var checkUser= true;
// if(checkUser = arrayOfNames.indexOf(promptLogin) > -1){
//     alert(`Hey ${promptLogin}`)
//     output.innerHTML = `welcome back ${promptLogin} , you're back! ;)`
//     var age = prompt("age");
//     htmlOutput += age > 18 ? "You are over 18" : "You are under 18"
// } else {output.innerHTML ="sorry, it's not you"}

// output.innerHTML = htmlOutput+","+promptLogin

// var login = indexOf(arrayOfNames)
// var areTheyIn = arrayOfNames.indexOf(promptLogin) ? console.log(promptLogin) : console.log(`${promptLogin} is not on the list.`)


// var myTime = 19;
// var output = document.getElementById("output");

// if (myTime < 12) {
//     output.innerHTML = "Good Morning";
// } else if (myTime > 12 && myTime < 13) {
//     output.innerHTML = "You can take a break";}
//     else if (myTime>16 && myTime<20){
//         output.innerHTML = "Get the kids showered";}
// else {
//     output.innerHTML = "Good Afternoon";
// }

var myTime = prompt("What hour is it?")
var output = document.getElementById("output")
var html;

switch (Number(myTime)){
    case 5:
        html = "Get ready for an awesome day!";
        break;
    case 7:
        html = "You should be at home helping!";
        break;
    case 8:
        html = "Ideally you should be taking the kids to school by now";
        break;
    case 9:
        html = "By now you have started your daily work";
        break;
    default:
        html ="Try selecting again";
12}
output.innerHTML = html