
const playBtn=document.querySelector('.ply_btn');
const backBatn=document.querySelector('.btnBack');
const nextBtn=document.querySelector('.btnNext');
const disk=document.querySelector('.disk');
const rangeControl=document.querySelector('.range-control');
const musicName=document.querySelector('.music_name');
const musicArtist=document.querySelector('.music_artist');
const currentTime=document.querySelector('.current_time');
const durationTime=document.querySelector('.duration_time'); 
const currentMusic = document.createElement('audio');

let i = 0;
//add the songs
let songs = [
    {
        name:'Arash',
        path:'song1.mp3',
        artist:'artist1',
        imgcover:'/img/coverimg1.jpg'
    },
    {
        name:'Arash',
        path:'/music/song1.mp3',
        artist:'artist1',
        imgcover:'/img/cover2.jpg'
    },
{
    name:'Arash',
    path:'/music/song1.mp3',
    artist:'artist1',
    imgcover:'/img/cover2.jpg'
}
];
//set music up
function setMusic(i){
    currentMusic.src = songs[i].path;
    currentMusic.load();
    disk.style.backgroundImage=songs[i].imgcover;
    musicName.textContent=songs[i].name;
    musicArtist.textContent=songs[i].artist;
    
}
setMusic(i);
// const setMusic= (i)=>{
// }

//start t


playBtn.addEventListener('click', ()=>{
    playBtn.classList.toggle('pause');
    currentMusic.play();
});

//the img durations
 playBtn.addEventListener('click', ()=>{
     disk.classList.toggle('imgduration');
     currentMusic.pause();

 })
