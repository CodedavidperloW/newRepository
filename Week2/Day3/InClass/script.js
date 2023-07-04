//Exercise 1

//for (let i=0; i<15; i++){}


for (var x=0; x<=15; x++){
    if(x===0) {
        console.log(x + "is even");
    }
    else if (x % 2 === 0){
        console.log(x + "is even");
    }
    else{
        console.log(x + "is odd");
    }
}

//Example of For/In Loop
let student ={grade:"Four", teacher:"Rav", favclass:"Torah"};
for (let x in student){
    console.log(x);
    console.log(student[x]);
}

let mealplan ={breakfast:"eggs", drink:"coffe", snack:"Soup", lunch:"Tuna Salad", snack:"Apples", dinner:"Omelette"}
for (let x in mealplan){
    console.log(x);
    console.log(mealplan[x]);
}

let colors = ["blue","yellow","green","red"];
for (let i in colors){
    console.log(i);
    console.log(colors[i]);
}

//practicing For/Of Loop

let colorsx =["blue","yellow","green","red"];
for (let delta of colors){
    console.log(delta);
}

///My Question is how do I set the
// name of the variable? It is not showing up.


///I need to iterate through an array///
let names= ["john", "sarah", 23, "Rudolf",34];
for (let i=0, i<names.length; i++){
    console.log(i);
}


