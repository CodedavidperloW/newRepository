// document.getElementById.(container)
// VM303:1 Uncaught SyntaxError: Unexpected token '('
// const container = document.getElementById.(container);
// VM507:1 Uncaught SyntaxError: Unexpected token '('
// const container = document.getElementById.('container');
// VM545:1 Uncaught SyntaxError: Unexpected token '('
// const container = document.getElementById('container');
// undefined
// console.log('container:', container)
// VM671:1 container: <div id=​"container">​Users:​</div>​
// undefined
// document.getElementById('.list').children[1]
// VM2611:1 Uncaught TypeError: Cannot read properties of null (reading 'children')
//     at <anonymous>:1:33
// (anonymous) @ VM2611:1
// document.querySelector('.list').children[1]
// <li>​…​</li>​::marker​"Pete"</li>​
// document.querySelector('.list').children[1].textContent = "Richard"
// 'Richard'
// document.querySelectorAll('.list').children[0].textContent =  "David"
// VM2914:1 Uncaught TypeError: Cannot read properties of undefined (reading '0')
//     at <anonymous>:1:44
// (anonymous) @ VM2914:1
// document.querySelectorAll('.list').children
// undefined
// document.querySelectorAll('.list')[0].children[0].textContent ="David"
// 'David'
// const lastElementInList = document.querySelectorAll('.list').lastElementChild
// undefined
// lastElementInList.forEach(list => lastElementInList.textContent = "YES!")
// VM4871:1 Uncaught TypeError: Cannot read properties of undefined (reading 'forEach')
//     at <anonymous>:1:19
// (anonymous) @ VM4871:1
// lastElementInList.forEach(.list => lastElementInList.textContent = "YES!")
// VM4932:1 Uncaught SyntaxError: Unexpected token '.'
// const newList = document.querySelectorAll(".list")
// undefined
// newList.forEach(list => list.lastElementChild.textContent = "yes!"
// VM5305:1 Uncaught SyntaxError: missing ) after argument list
// newList.forEach(list => list.lastElementChild.textContent = "yes!")
// undefined

// const div = document.

// const navbar = document.getElementById("navBar")

// navbar.setAttribute("id","SocialMediaNetwork")

// const li = document.createElement("li")

// const newTextNode = document.createTextNode("Logout")

// li.appendChild(newTextNode);
// console.log(li)

// const theUl = navbar.firstElementChild



// // document.getElementById("SocialMediaNetwork").nextElementSibling
// // document.getElementById("SocialMediaNetwork").nextSibling

// // document.getElementById("SocialMediaNetwork")
// // const SMN = document.getElementById("SocialMediaNetwork")
// // const theUL = SMN.lastElementChild
// // const theUlChildren = theUL.children

// // document.theUlChildren.appendChild(newTextNode)

// const firstLi = theUl.firstElementChild.textContent
// console.log(firstLi)
// const lastLi = theUl.lastElementChild.textContent
// console.log(lastLi)


const allBooks = []






const book1 = {

    title: "Not Alone Soldier",
    author: "David Perlow",
    image: "https://fastly.picsum.photos/id/1/200/300.jpg?hmac=jH5bDkLr6Tgy3oAg5khKCHeunZMHq0ehBZr6vGifPLY",
    alreadyRead: true
}


const book2 = {
    title: "The Alchemest",
    author: "Paulo Coelho",
    image: "https://fastly.picsum.photos/id/13/2500/1667.jpg?hmac=SoX9UoHhN8HyklRA4A3vcCWJMVtiBXUg0W4ljWTor7s",
    alreadyRead: true
}

allBooks.push(book1)
allBooks.push(book2)
console.log(allBooks)
let htmlString = "";

for (const book of allBooks) {
    const standardRowString =
        `<tr class="${book1.alreadyRead ? 'if-read-red' : ''}">
    <td>${book.title} written by ${book.author}</td>
    <td>
    <img src="${book.image}"/>
    </td>
    <td>Already read:${book.alreadyRead}</td>
    </tr>
    `
    htmlString = htmlString + standardRowString
}

const table = document.createElement("table")
table.innerHTML = `
    <thead>
    <tr>
    <th colspan="3">My Book List</th>
    </tr>
    </thead>
    <tbody>
    ${htmlString}
    </tbody>
`
console.log(table);

const theBookList = document.querySelector(".list-books")
console.log(theBookList)
theBookList.appendChild(table)



