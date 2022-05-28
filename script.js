const img_section = document.querySelector('.img-section');
const music_img = document.querySelector('.music-img');
const music_name = document.querySelector('.music_name');
const music_artist = document.querySelector('.music_artist');
const range_control = document.querySelector('.range-control');
const current_time = document.querySelector('.current_time');
const duration_time = document.querySelector('.duration_time');
const btnBack = document.querySelector('.btnBack');
const play = document.querySelector('.ply_btn');
const btnNext = document.querySelector('.btnNext');
const current_music = document.createElement('audio');

let index = 0;
let isplaying = false;
let timer;
// Main coding is start.
const music_list = [
  {
    img : 'images/DonyaSoft Wallpaper (35).jpg',
    name : 'Sanieha',
    artist : 'Amin Bani',
    music : 'musics/Amin_Bani_-_Sanieha_(lyrics_video)_English_sub.mp3'
  },
  {
    img : 'images/DonyaSoft Wallpaper (26).jpg',
    name : 'one night in dubai',
    artist : 'Arash',
    music : 'musics/Arash via helena, 1 night in dubai.mp3'
  },
  {
    img : 'images/DonyaSoft Wallpaper (26).jpg',
    name : 'To Bekhand',
    artist : 'Ahamad Saeedi',
    music : 'musics/Ahmad saeedi to bekhand.mp3'
  }
];

loadMusic(index);

function loadMusic(index) {
  clearInterval(timer);
  current_music.src = music_list[index].music;
  current_music.load();
  music_name.textContent = music_list[index].name;
  music_artist.textContent = music_list[index].artist;
  music_img.src = music_list[index].img;
  current_time.innerHTML = '00:00';
  
  timer = setInterval(update, 1000);

}


function playPause(){
  if (isplaying === true){
      current_music.pause();
      isplaying = false;
      music_img.classList.remove('rotate');
    
  }else{
      current_music.play();
      isplaying = true;
      music_img.classList.add('rotate');
  }
}

play.addEventListener('click', () => {
  play.classList.toggle('pause');
});

function goTo(){
  let goto = current_music.duration * (range_control.value / 100);
  current_music.currentTime = goto;
}

function update(){
  let goingPosition = 0;
  if(!isNaN(current_music.duration)){
    goingPosition = current_music.duration * (100 / current_music.duration);
    range_control.value = goingPosition;

    let currMinutes = Math.floor(current_music.currentTime / 60);
    let currSeconds = Math.floor(current_music.currentTime - currMinutes * 60);
    let duraMinutes = Math.floor(current_music.duration / 60);
    let duraSeconds = Math.floor(current_music.duration - duraMinutes * 60);

    if(currSeconds < 10) {currSeconds = "0" + currSeconds; }
    if(duraSeconds < 10) { duraSeconds = "0" + duraSeconds; }
    if(currMinutes < 10) {currMinutes = "0" + currMinutes; }
    if(duraMinutes < 10) { duraMinutes = "0" + duraMinutes; }

    current_time.textContent = currMinutes + ":" + currSeconds;
    duration_time.textContent = duraMinutes + ":" + duraMinutes;
  }
}

