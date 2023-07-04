const robots = [
    {
        id: 1,
        name: 'Leanne Graham',
        username: 'Bret',
        email: 'Sincere@april.biz',
        image: 'https://robohash.org/1?200x200'
    },
    {
        id: 2,
        name: 'Ervin Howell',
      username: 'Antonette',
      email: 'Shanna@melissa.tv',
      image: 'https://robohash.org/2?200x200'
    },
    {
        id: 3,
        name: 'Clementine Bauch',
        username: 'Samantha',
        email: 'Nathan@yesenia.net',
        image: 'https://robohash.org/3?200x200'
    },
    {
        id: 4,
        name: 'Patricia Lebsack',
        username: 'Karianne',
        email: 'Julianne.OConner@kory.org',
        image: 'https://robohash.org/4?200x200'
    },
    {
      id: 5,
      name: 'Chelsey Dietrich',
      username: 'Kamren',
      email: 'Lucio_Hettinger@annie.ca',
      image: 'https://robohash.org/5?200x200'
    },
    {
        id: 6,
        name: 'Mrs. Dennis Schulist',
        username: 'Leopoldo_Corkery',
        email: 'Karley_Dach@jasper.info',
        image: 'https://robohash.org/6?200x200'
    },
    {
        id: 7,
        name: 'Kurtis Weissnat',
        username: 'Elwyn.Skiles',
        email: 'Telly.Hoeger@billy.biz',
        image: 'https://robohash.org/7?200x200'
    },
    {
        id: 8,
        name: 'Nicholas Runolfsdottir V',
        username: 'Maxime_Nienow',
        email: 'Sherwood@rosamond.me',
        image: 'https://robohash.org/8?200x200'
    },
    {
        id: 9,
        name: 'Glenna Reichert',
        username: 'Delphine',
      email: 'Chaim_McDermott@dana.io',
      image:'https://robohash.org/9?200x200'
    },
    {
        id: 10,
        name: 'Clementina DuBuque',
        username: 'Moriah.Stanton',
        email: 'Rey.Padberg@karina.biz',
        image:'https://robohash.org/10?200x200'
    }
];


const robotContainer = document.getElementById('robot-container');
const searchInput = document.getElementById('search-input');

const filterRobots = (query) =>{
    const filteredRobots = robots.filter(robot=>{
        const theRobotName = robot.name.toLowerCase();
        return theRobotName.includes(query)
    });
    displayRobots(filteredRobots);
}

const displayRobots = (robots) => {
    robotContainer.innerHTML ='';
    
    robots.forEach((robot) =>{
        const robotDiv = document.createElement('div');
        robotDiv.className= 'robot-card';
        
        const robotImage = document.createElement('img');
        robotImage.src = robot.image;
            robotImage.alt = robot.name;
            
            const robotName = document.createElement('h3');
            robotName.textContent = robot.name;
            
            const robotUsername = document.createElement('p');
            robotUsername.textContent = `Username: ${robot.username}`
            
            const robotEmail = document.createElement('p');
            robotEmail.textContent = `Email : ${robot.email}`;
            
            robotDiv.appendChild(robotImage)
            robotDiv.appendChild(robotName)
            robotDiv.appendChild(robotUsername)
            robotDiv.appendChild(robotEmail)
            
            robotContainer.appendChild(robotDiv);
        });
    }
    
    
    searchInput.addEventListener('input',()=>{
        const query = searchInput.value.toLowerCase();
        filterRobots(query);
    });
    
    displayRobots(robots)
    