const playBtn=document.querySelector('.ply_btn');
const backBatn=document.querySelector('.btnBack');
const nextBtn=document.querySelector('.btnNext');
const imgDuration=document.querySelector('img');

//add the songs
let songs={
    name:'Arash',
    path:'music/s'
}
//start the add events

playBtn.addEventListener('click', ()=>{
    playBtn.classList.toggle('pause');
});

//the img durations
 playBtn.addEventListener('click', ()=>{
     imgDuration.classList.toggle('imgduration');

 })
