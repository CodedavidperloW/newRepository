setInterval(setClock, 1000)

const hours = document.querySelector(`[data-hour-hand]`)
const minutes = document.querySelector(`[data-minute-hand]`)
const seconds =document.querySelector(`[data-second-hand]`)


function playVideo(){
    const movie = document.querySelector(`[data-video]`).autoplay;
}

playVideo()


function setClock(){
    const currentDate = new Date()
    const secondsRatio = currentDate.getSeconds() / 60
    const minutesRatio = (secondsRatio + currentDate.getMinutes()) / 60 
    const hoursRatio = (minutesRatio + currentDate.getHours()) / 12 
    setRotation(seconds, secondsRatio)
    setRotation(minutes, minutesRatio)
    setRotation(hours, hoursRatio)
}

function setRotation(element, rotationRatio){
    element.style.setProperty(`--rotation`, rotationRatio * 360)
}

setClock()


//add video to background of clock
//values for the rotation of each hand
//add the information to the HTML
