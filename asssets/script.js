
const playBtn=document.querySelector('.ply_btn');
const backBatn=document.querySelector('.btnBack');
const nextBtn=document.querySelector('.btnNext');
const rangeControl=document.querySelector('.range-control');
const musicName=document.querySelector('.music_name');
const musicArtist=document.querySelector('.music_artist');
const currentTime=document.querySelector('.current_time');
const durationTime=document.querySelector('.duration_time'); 
const currentMusic = document.querySelector('#audio');
const imageCover= document.querySelector('img');
let isplay = false;
let i = 0;
//add the songs
let songs = [
    {
        name:'Arash',
        path:'../music/song1.mp3',
        artist:'artist1',
        imgcover:'../img/cover3.jpg'
    },
    {
        name:'Arash',
        path:'../music/song1.mp3',
        artist:'artist1',
        imgcover:'../img/cover3.jpg'
    },
{
    name:'Arash',
    path:'../music/song1.mp3',
    artist:'artist1',
    imgcover:'../img/cover2.jpg'
}
];
//set music up
function setMusic(i) {
    console.log(currentMusic.src =songs[i].path);
    currentMusic.load();
    imageCover.src = songs[i].imgcover;
    musicName.textContent = songs[i].name;
    musicArtist.textContent = songs[i].artist;
    currentTime.innerHTML="00:00";

    setTimeout(()=>{
        rangeControl.max=currentMusic.duration;
        durationTime.innerHTML=formatTime(rangeControl.max);
    },300);
    
}
setMusic(i);

// set play and pause fuction 
function player(){
     isplay=== true ? pauseMusic() : playMusic();
}

function pauseMusic(){
    currentMusic.pause();
    isplay = false;
}

function playMusic(){
    currentMusic.play();
    isplay = true;
}
//the img durations
playBtn.addEventListener('click', ()=>{
    imageCover.classList.toggle('imgduration');
    playBtn.classList.toggle('pause');
    
});

//formation time 
let formatTime=(time)=>{
    let min= Math.floor(time/60);
    if (min<10){
        min= `0${min}`;
    }
    let sec = Math.floor(time%60);
    if(min < 10){
    sec =   `0${sec}`;        
    }
    return `${min} : ${sec}`; 

}
//set the rangeconrtol
setInterval(()=>{
    rangeControl.value=currentMusic.currentTime;
    currentTime.innerHTML= formatTime(currentMusic.currentTime);
},500);
//set the change 
rangeControl.addEventListener('change',()=>{
    currentMusic.currentTime=rangeControl.value;
});
//forward btn 

nextBtn.addEventListener('click', fastForward)

// add current time to 10 seconds in every click
function fastForward() {
    currentMusic.currentTime += 5;
}