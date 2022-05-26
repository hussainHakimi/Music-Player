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

let track_index = 0;
let isplaying = false;

const music_list = [
  {
    img : 'images/DonyaSoft Wallpaper (26).jpg',
    name : 'To Bekhand',
    artist : 'Ahamad Saeedi',
    music : 'musics/Ahmad saeedi to bekhand.mp3'
  },
  {
    img : 'images/DonyaSoft Wallpaper (26).jpg',
    name : 'one night in dubai',
    artist : 'Arash',
    music : 'musics/Arash via helena, 1 night in dubai.mp3'
  },
  {
    img : 'images/DonyaSoft Wallpaper (35).jpg',
    name : 'Deleam Pishe Toe',
    artist : 'Alireza Talischi',
    music : 'musics/Alireza_Talischi_-_Delam_Pishe_Toe_-_5BNew_2016_5D.mp3'
  }
];

loadTrack(track_index);

function loadTrack(track_index) {
  current_music.src = music_list[track_index].music;
  current_music.load();
  music_name.textContent = music_list[track_index].name;
  music_artist.textContent = music_list[track_index].artist;
  music_img.src = music_list[track_index].img;
}

function playPause(){
  if (isplaying){
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
