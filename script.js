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
  current_music.src = music_list[index].music;
  current_music.load();
  music_name.textContent = music_list[index].name;
  music_artist.textContent = music_list[index].artist;
  music_img.src = music_list[index].img;
  
  // setUpdate()
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

// current_music.addeventListener('ontimeupdate', () => {
//   current_time.innerHTML = Math.floor(this.currentTime) + ' / ' + Math.floor(this.duration);
// });

// ====================================== Duration Coding =================================================


// function updateTime(){
  
//     let currentMinutes = Math.floor(current_music.currentTime / 60);
//     let currentSeconds = Math.floor(current_music.currentTime - currentMinutes * 60 );
//     let durationMinutes = Math.floor(current_music.duration / 60 );
//     let durationSeconds = Math.floor(current_music.duration - durationMinutes * 60 );
//     console.log(durationMinutes);
    
//     if(currentSeconds < 10 ){currentSeconds = '0' + currentSeconds; }
//     if(durationSeconds < 10 ){ durationSeconds = '0' + durationSeconds; }
//     if(currentMinutes < 10 ){currentMinutes = '0' + currentMinutes; }
//     if(durationMinutes < 10 ){durationMinutes = '0' + durationMinutes; }

//     current_time.textContent = currentMinutes + ':' + currentSeconds;
//     duration_time.textContent = durationMinutes + ':' + durationMinutes;


  
// }

function seekTo(){
  let seekto = current_music.currentTime;
  range_control.value = seekto;
}


// function setUpdate(){
//   let seekPosition = 0;
//   if(!isNaN(current_music.duration)){
//       seekPosition = current_music.currentTime * (100 / current_music.duration);
//       range_control.value = seekPosition;

//       let currentMinutes = Math.floor(current_music.currentTime / 60);
//       let currentSeconds = Math.floor(current_music.currentTime - currentMinutes * 60);
//       let durationMinutes = Math.floor(current_music.duration / 60);
//       let durationSeconds = Math.floor(current_music.duration - durationMinutes * 60);

//       if(currentSeconds < 10) {currentSeconds = "0" + currentSeconds; }
//       if(durationSeconds < 10) { durationSeconds = "0" + durationSeconds; }
//       if(currentMinutes < 10) {currentMinutes = "0" + currentMinutes; }
//       if(durationMinutes < 10) { durationMinutes = "0" + durationMinutes; }

//       current_time.textContent = currentMinutes + ":" + currentSeconds;
//       duration_time.textContent = durationMinutes + ":" + durationMinutes;
//   }
// }