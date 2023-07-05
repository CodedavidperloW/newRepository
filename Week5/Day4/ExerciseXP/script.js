
// const urls =
//     [
//         'https://jsonplaceholder.typicode.com/users',
//         'https://jsonplaceholder.typicode.com/posts',
//         'https://jsonplaceholder.typicode.com/albums'
//     ]

// Promise.all(urls.map(url =>
//     fetch(url).then(resp => resp.json()))).then(array => {
//         console.log('users', array[0])
//         console.log('users', array[1])
//         console.log('users', array[2])
//     }).catch('oops');


// const getData = async function () {
//     const [users, posts, albums] = await Promise.all(urls.map(url =>
//         fetch(url).then(resp => resp.json())))
//     console.log('users', users)
//     console.log('posts', posts)
//     console.log('albums', albums)
// }

// async function fetchUsers() {
//     const resp = await fetch('https://jsonplaceholder.typicode.com/users')
//     const data = await resp.json();
//     console.log(data);
// }


// async function starShips() {
// try{
//     const stars = await fetch("https://www.swapi.tech/api/starships/9/")
//     const starJson = await stars.json();
//     console.log(starJson);
// } catch (error) {
//     console.error(error);
// }
//     }

function resolveAfter2Seconds() {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve('resolved');
        }, 2000);
    });
}

async function asyncCall() {
    console.log('calling');
    let result = await resolveAfter2Seconds();
    console.log(result);
}

asyncCall();


