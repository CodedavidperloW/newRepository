// console.log(form.elements.login == form.login)
// form.elements[0].name = "username";

// let inputLogin = document.forms[0].login;
// console.log(login.form)

// let selected = Array.from(select.options)
// .filter(option => option.selected)
// .map(option => option.value)
// console.log(selected);

// const form  = document.getElementsByTagName('form')[0];
//       const email = document.getElementById("mail");
//       const name = document.getElementById("name");

//       email.addEventListener("input", function (event) {
//         if (email.validity.typeMismatch) {
//           email.setCustomValidity("I am expecting an e-mail address!");
//         } else {
//           email.setCustomValidity("");
//         }
//       });

//       form.addEventListener("submit", function (event) {
//         if(!email.validity.valid) {
//             email.setCustomValidity("I am expecting an e-mail address!");
//         } else {
//             email.setCustomValidity("");
//         }
//       });
//     </script>

let student = {
    "firstName": "Jane",
    "lastName": "Doe",
    "hobbies": ["running", "sky diving", "singing"],
    "age": 35,
    "children": [
        {
            "firstName": "Alice",
            "age": 6
        },
        {
            "firstName": "Bob",
            "age": 8
        }
    ]
}

let jsonStudent = JSON.stringify(student)
alert(jsonStudent)