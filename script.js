const container = document.querySelector('.container');
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
    name : 'Ay_Dele_Khodam',
    artist : 'Alireza_Talischi',
    music : 'musics/Alireza_Talischi_-_Ay_Dele_Khodam_-_Ali_Edris_Remix.m4a'
  },
  {
    img : 'images/DonyaSoft Wallpaper (26).jpg',
    name : 'Dor Doneh',
    artist : 'Pooyad',
    music : 'musics/Pooyad Moradi - Dor Doneh Yar.mp3'
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
  isplaying ? pauseMusic() : playMusic();
}

function pauseMusic(){
  isplaying = false;
  current_music.pause();
  music_img.classList.remove('rotate');
  play.innerHTML = '<i class="fa fa-play-circle fa-5x" style="color:black;"></i>';
}
function playMusic(){
  isplaying = true;
  current_music.play();
  music_img.classList.add('rotate');
  play.innerHTML = '<i class="fas fa-pause-circle  fa-5x" style="color:black;"></i>';
}

play.addEventListener('keydown', (e) => {
  if(e.keyCode === 32){
  play.classList.toggle('pause');
}
});

function goTo(){
  let gotoo = current_music.duration * (range_control.value / 100);
  current_music.currentTime = gotoo;
}

function update(){
  let goingPosition = 0;
  if(!isNaN(current_music.duration)){
    goingPosition = current_music.currentTime * (100 / current_music.duration);
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


function prevMucis(){
  if(index > 0){
    index -= 1;
  }else{
    index = music_list.length - 1;
  }
  loadMusic(index);
  playMusic();
}

function nextMusic(){
  if(index < music_list.length -1){
    index += 1;
  }else{
    index = 0;
  }
  loadMusic(index);
  playMusic();
}


// Fast Forwarding
function fastForward(){
  current_music.currentTime += 10;
}

// Fast Backward
function fastBackward(){
  current_music.currentTime -= 10;
}

//  Events for Key words like space, page down and page up
window.addEventListener('keydown', function(e){
  if(e.keyCode ===32){
    playPause();
  }else if(e.keyCode === 34){
    nextMusic();
  }
  else if(e.keyCode === 33){
    prevMucis();
  }
  else if(e.keyCode === 39){
    fastForward();
  }else if(e.keyCode === 37){
    fastBackward();
  }

});

