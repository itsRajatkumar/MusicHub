console.log("Welcom to Music Hub");
// initialization of songs and related information
let songindex = 0;
let audioElement = new Audio('music/1.mp3');
let masterplay = document.getElementById('masterPlay');
let myprogressbar = document.getElementById('myprogressbar');
let gif = document.getElementById('gif');
let mastersongname = document.getElementById('mastersongname');
let songitems = Array.from(document.getElementsByClassName("songitem"));
let songs = [
    { songName: "5 Taara | Diljit Dosanjh", filepath: "music/1.mp3", coverpath: "cover/1.jpg" },
    { songName: "8 Parche | Baani Sandhu | Gur Sidhu | Gurneet Dosanjh", filepath: "music/2.mp3", coverpath: "cover/2.jpg" },
    { songName: "Daru Badnaam | Kamal Kahlon & Param Singh", filepath: "music/3.mp3", coverpath: "cover/3.jpg" },
    { songName: "High Rated | Guru Randhawa", filepath: "music/4.mp3", coverpath: "cover/4.jpg" },
    { songName: "Jaani Tera Naa | Sunanda Sharma", filepath: "music/5.mp3", coverpath: "cover/5.jpg" },
    { songName: "Na Ja | Pav Dharia", filepath: "music/6.mp3", coverpath: "cover/6.jpg" },
    { songName: "Patola Guru Randhawa | Bohemia", filepath: "music/7.mp3", coverpath: "cover/7.jpg" },
    { songName: "Qismat | Ammy Virk | Sargun Mehta | Jaani | B Praak", filepath: "music/8.mp3", coverpath: "cover/8.jpg" }
]

// adding all song name in html document
mastersongname.innerText = songs[0].songName;
songitems.forEach((element, i) => {
    element.getElementsByTagName("img")[0].src = songs[i].coverpath;
    element.getElementsByClassName("songname")[0].innerText = songs[i].songName;
    // let spath=`music/${i+1}.mp3`
    // let audiotime = new Audio(spath);
    // element.getElementsByClassName("timestamp")[0].innerText= audiotime.duration;

});

// play/pause controls
masterplay.addEventListener('click', () => {
    if (audioElement.paused || audioElement.currentTime <= 0) {
        audioElement.play();
        masterplay.classList.remove('fa-play-circle');
        masterplay.classList.add('fa-pause-circle');
        gif.style.opacity = 1;
    }
    else {
        audioElement.pause();
        masterplay.classList.remove('fa-pause-circle');
        masterplay.classList.add('fa-play-circle');
        gif.style.opacity = 0;
    }
})
// listening Events

audioElement.addEventListener('timeupdate', () => {
    progress = parseInt((audioElement.currentTime / audioElement.duration) * 100);
    myprogressbar.value = progress;
})

// updating seekbar 
myprogressbar.addEventListener('click', () => {
    audioElement.currentTime = myprogressbar.value * audioElement.duration / 100;
})



const makeallplays = () => {
    Array.from(document.getElementsByClassName("songitemplay")).forEach((element) => {
        element.classList.remove("fa-pause-circle");
        element.classList.add("fa-play-circle");
    })
}


// listing events for song tap
Array.from(document.getElementsByClassName("songitemplay")).forEach((element) => {
    element.addEventListener("click", (e) => {
        makeallplays();
        songindex = parseInt(e.target.id);
        e.target.classList.remove("fa-play-circle");
        e.target.classList.add("fa-pause-circle");
        audioElement.src = `music/${songindex + 1}.mp3`
        mastersongname.innerText = songs[songindex].songName;
        audioElement.currentTime = 0;
        audioElement.play();
        masterplay.classList.remove('fa-play-circle');
        masterplay.classList.add('fa-pause-circle');
        gif.style.opacity = 1;
    })
})

// backword button control
document.getElementById('backword').addEventListener('click', () => {

    if (songindex <= 0) {
        songindex = 0;
    }
    else {
        songindex -= 1;
    }
    makeallplays();
    audioElement.src = `music/${songindex + 1}.mp3`
    audioElement.currentTime = 0;
    mastersongname.innerText = songs[songindex].songName;
    masterplay.classList.remove('fa-play-circle');
    masterplay.classList.add('fa-pause-circle');
    songitems[songindex].classList.remove('fa-play-circle');
    songitems[songindex].classList.add('fa-pause-circle');
    gif.style.opacity = 1;
    audioElement.play();
})


// forword button control
document.getElementById('forword').addEventListener('click', () => {
    if (songindex >= 7) {
        songindex = 0;
    }
    else {
        songindex += 1;
    }
    makeallplays();
    audioElement.src = `music/${songindex + 1}.mp3`
    audioElement.currentTime = 0;
    mastersongname.innerText = songs[songindex].songName;
    masterplay.classList.remove('fa-play-circle');
    masterplay.classList.add('fa-pause-circle');
    
    songitems[songindex].classList.remove('fa-play-circle');
    songitems[songindex].classList.add('fa-pause-circle');
    gif.style.opacity = 1;
    audioElement.play();
})