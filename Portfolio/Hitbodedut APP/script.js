// QUESTIONS:  
//const background = document.querySelector('.app')
// background.forEach(option => {
//     option.addEventListener('click', function(){
//         video.src=this.getAttribute('data-video');
//     })
// })
///How can I change the background from a color to the video?///

const app = () => {
    const song = document.querySelector('.song');
    const play = document.querySelector('.play');
    const outline = document.querySelector('.moving-outline circle');
    //question remains, how do I make a player circle? where do you get this from? how can you make it from scratch?//
    const video = document.querySelector('.vid-container video');
    const sounds = document.querySelectorAll('.sound-picker button');
    const timeDisplay = document.querySelector('.time-display');
    //get the length of outline
    const outlineLength = outline.getTotalLength();
    console.log(outlineLength)
    //Duration
    const timeSelect = document.querySelectorAll('.time-select button');
    
    
    
    let fakeDuration = 600
    outline.style.strokeDasharray = outlineLength;
    outline.style.strokeDashoffset = outlineLength;
    
    //pick different sounds
    sounds.forEach(option => {
        option.addEventListener('click', function () {
            song.src = this.getAttribute('data-sound');
            video.src = this.getAttribute('data-video');
            checkPlaying(song);
        })
        
    })
    
    
    
    //play sound
    play.addEventListener('click', () => {
        checkPlaying(song);
        
})


timeSelect.forEach(option => {
    option.addEventListener('click', function () {
        fakeDuration = this.getAttribute('data-time');
        timeDisplay.textContent = `${Math.floor(fakeDuration / 60)} : ${Math.floor(fakeDuration % 60)}`
    })
})

//lets make a function to stop and play sounds
const checkPlaying = song => {
    if (song.paused) {
        song.play();
        video.play()
        play.src = "./Pics/video-pause-button-svgrepo-com.svg";
    } else {
        song.pause();
        video.pause();
        play.src = "./Pics/play-button-svgrepo-com.svg";
    }
}

//now let's animate the circle
song.ontimeupdate = () => {
    let currentTime = song.currentTime;
    let elapsed = fakeDuration - currentTime;
    let seconds = Math.floor(elapsed % 60);
    let minutes = Math.floor(elapsed / 60);
    
    //animate the bar
    let progress = outlineLength - (currentTime / fakeDuration) * outlineLength
    outline.style.strokeDashoffset = progress;
    
    //time display
    timeDisplay.textContent = `${minutes}:${seconds}`
    
    if (currentTime >= fakeDuration) {
        song.currentTime = 0;
        song.pause();
        play.src = "./Pics/play-button-svgrepo-com.svg";
        video.pause();
    }
}
}

app();

