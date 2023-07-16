const webSites = [
    'https://jsonplaceholder.typicode.com/users',
    'https://jsonplaceholder.typicode.com/users',
    'https://jsonplaceholder.typicode.com/todos'
]


Promise.all(webSites.map(webSite => {
    return fetch (webSite).then(resp => resp.json())
})).then(results => {
    console.log(results[0])
    console.log(results[1])
    console.log(results[2])
}).catch(() => console.log('error'))