const gameInfo = [
    {
        username: "john",
        team: "red",
        score: 5,
        items: ["ball", "book", "pen"]
    },
    {
        username: "becky",
        team: "blue",
        score: 10,
        items: ["tape", "backpack", "pen"]
    },
    {
        username: "susy",
        team: "red",
        score: 55,
        items: ["ball", "eraser", "pen"]
    },
    {
        username: "tyson",
        team: "green",
        score: 1,
        items: ["book", "pen"]
    },
];
//Exercise 1
const firstUserName = [];
// firstUserName = gameInfo.forEach(gameInfo.username)+"!"
//    console.log(firstUserName)
gameInfo.forEach((player) => {
    const thePlayersName = player.username + "!"
    firstUserName.push(thePlayersName)
})
console.log(firstUserName)

//Exercise 2
const topPlayers = [];
gameInfo.forEach((player) => {
    if (player.score > 5) {
        const namesOfPlayers = player.username;
        topPlayers.push(namesOfPlayers)
    }
})
console.log(topPlayers)

//Exercise 3
function averageScore(){
    for(let i=0; i<gameInfo.length; i++){
        
    }
}