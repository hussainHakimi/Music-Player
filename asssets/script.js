
const playBtn=document.querySelector('.ply_btn');
const btnNext_15=document.querySelector('.btnNext_15');
const btnBack_15=document.querySelector('.btnBack_15');
const backButton=document.querySelector('.backButton');
const nextButton=document.querySelector('.nextButton');
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
        name:'MurtazaPashi',
        path:'../music/2.mp3',
        artist:'artist2',
        imgcover:'../img/cover2.jpg'
    },
{
    name:'Anosh',
    path:'../music/3.mp3',
    artist:'delbar',
    imgcover:'../img/coverimg1.jpg'
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
//forward btn and bakcward btn
btnBack_15.addEventListener('click',fastBack);
btnNext_15.addEventListener('click', fastForward);

//add the  crrent time 10 secods baCK IN EVERY CLICK
function fastBack(){
    currentMusic.currentTime -=15;
}
// add current time to 10 seconds in every click
function fastForward() {
    currentMusic.currentTime += 15;
}

//next and prev btn

nextButton.addEventListener('click', nextBt);
backButton.addEventListener('click', backBt);

function nextBt(){
    if(currentMusic <= songs.length - 1){
        currentMusic = 0;
    }else{
        currentMusic++;
    }
    setMusic(currentMusic);
    playBtn.click();
};

function backBt(){
    if(currentMusic >= 0){
        currentMusic = songs.length-1;
        alert('hellow');
    }else{
        currentMusic--;
    }
    setMusic(currentMusic);
    playBtn.click();
};