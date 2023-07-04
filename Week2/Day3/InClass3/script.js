const people = ["Greg", "Mary", "Devon", "James"];
console.log(people);
people[3,"Jason"];
console.log(people);
people.pop();
people.push("Jason");
console.log(people);
people.push("David");
people.pop();
people.push("David");
people.shift();
people.indexOf("Sam",0); // -1
people.indexOf("Foo",0);

function makeLemonade(){
    let lemonade = 2 sugar + 2 lemon;
    return lemonade;
}

makeLemonade();

function makeLemonade(sugar, lemon) {
    let lemonade= sugar + lemon
    return lemonade;
}

makeLemonade(3,1);

let lemonade = 3+1
return lemonade;

function doSOmething(){
    return doSOmething;
}

doSOmething();

const doSOmething= new Function();

const doSomething = () => {
    return doSOmething;
}

let emotion = "Love";
let amount = "is greatly needed.";
console.log(emotion);
console.log(amount);


