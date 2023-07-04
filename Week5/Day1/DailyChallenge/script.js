const form = document.querySelector('.data-field')
//This gives the entire form value
const submitButton = form.querySelector('input[type="submit"]')
//This highlights my button, which then receives an 
//addEventListener
const newElement = document.createElement('p')
//Now a new element is made, to hold the new value
form.append(newElement)
//Now this attaches a new 'p' element to the form

submitButton.addEventListener('click', (event) => {
    event.preventDefault();
    const formFirstName = form.elements.firstName.value;
    const formLastName = form.elements.lastName.value;
    
    const theData = {
        firstName: formFirstName,
        lastName: formLastName
    }
    
    const dataToString = JSON.stringify(theData)
    newElement.innerText = dataToString
})






