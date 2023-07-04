
const button = document.getElementById("lib-button")
button.addEventListener("click", preventReload)


//So far I have prevented the default from happening when clicking
//the button.
//I have also linked to my button, and added a click property.


function preventReload(e){
    e.preventDefault();
    const noun = document.getElementById("noun").value
    const adjective = document.getElementById("adjective").value
    const person = document.getElementById("person").value
    const verb = document.getElementById("verb").value
    const place = document.getElementById("place").value

    if(noun === '' || adjective === '' || person === '' || verb === '' || place === ''){
        alert("Please fill in all spaces")
        return
    }

    let writeStory = `So like one time ${noun} was very ${adjective} and was talking to  ${person} when all of a sudden they saw a child ${verb} ${place}`
    

    const story= document.getElementById("story")
  
    story.append(writeStory)
}


