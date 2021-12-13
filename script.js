console.log("Welcom to Music Hub");

let songindex=0;
let audioElement=new Audio('music/1.mp3');
let masterplay= document.getElementById('masterPlay');
let myprogressbar=document.getElementById('myprogressbar');
let gif=document.getElementById('gif');
let songs=[
    { songName:"5 Taara | Diljit Dosanjh" , filepath:"music/1.mp3", coverpath:"cover/1.jpg"},
    { songName:"8 Parche | Baani Sandhu | Gur Sidhu | Gurneet Dosanjh" , filepath:"music/2.mp3", coverpath:"cover/2.jpg"},
    { songName:"Daru Badnaam | Kamal Kahlon & Param Singh" , filepath:"music/3.mp3", coverpath:"cover/3.jpg"},
    { songName:"High Rated | Guru Randhawa" , filepath:"music/4.mp3", coverpath:"cover/4.jpg"},
    { songName:"Jaani Tera Naa | Sunanda Sharma" , filepath:"music/5.mp3", coverpath:"cover/5.jpg"},
    { songName:"Na Ja | Pav Dharia" , filepath:"music/6.mp3", coverpath:"cover/6.jpg"},
    { songName:"Patola Guru Randhawa | Bohemia" , filepath:"music/7.mp3", coverpath:"cover/7.jpg"},
    { songName:"Qismat | Ammy Virk | Sargun Mehta | Jaani | B Praak" , filepath:"music/8.mp3", coverpath:"cover/8.jpg"}
]

// play/pause
masterplay.addEventListener('click',()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        masterplay.classList.remove('fa-play-circle');
        masterplay.classList.add('fa-pause-circle');
        gif.style.opacity=1;
    }
    else{
        audioElement.pause();
        masterplay.classList.remove('fa-pause-circle');
        masterplay.classList.add('fa-play-circle');
        gif.style.opacity=0;
    }
})
// listen Events

myprogressbar.addEventListener('timeupdate',()=>{
    console.log('time update')
})