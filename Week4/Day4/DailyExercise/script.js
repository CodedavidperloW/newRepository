class Video {
    constructor(title, uploader, time) {
        this.title = title;
        this.uploader = uploader;
        this.time = time;
    }
    watch() {
        console.log(`${this.uploader} watched all ${this.time} of ${this.title}`)
    }
}
let videos = []
const video1 = new Video("Rocky", "David", 326)
const video2 = new Video("The Movie", "Yonit", 126)
const video3 = new Video("Emuna", "Ruti", 126)
const video4 = new Video("Halacha", "Michael", 126)
const video5 = new Video("Sports", "Jim", 126)

videos.push(video1, video2, video3, video4, video5)
videos.forEach((video)=>{
    video.watch();
});