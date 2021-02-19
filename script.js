let days=document.getElementById('days');
let hours=document.getElementById('hours');
let minutes=document.getElementById('minutes');
let seconds=document.getElementById('seconds');

let btn = document.getElementById('btn');
let reset = document.getElementById('res');
let paused=document.getElementById('pas');
let resume=document.getElementById('resume');

let cPause;

function validate(){
if(days.value==0&&hours.value==0&&minutes.value==0&&seconds.value==0){
  days.value=0;
  hours.value=0;
  minutes.value=0;
  seconds.value=0;
}else if(seconds.value!=0){
  seconds.value--;
}else if(minutes.value!=0&&seconds.value==0){
  minutes.value--;
  seconds.value=59;
}else if(hours.value!=0&&minutes.value==0){
  hours.value--;
  minutes.value=60;
}else if(days.value!=0&&hours.value==0){
  days.value--;
  hours.value=24;
}
return;
}


btn.addEventListener('click',function(e){
  e.preventDefault()
  cPause=setInterval(function(){validate()},1000);
})

paused.addEventListener('click',function(){
  clearInterval(cPause);
})

resume.addEventListener('click',function(){
  cPause=setInterval(function(){validate()},1000);
})

reset.addEventListener('click',function(e){
  // e.preventDefault()
  days.value=0;
  hours.value=0;
  minutes.value=0;
  seconds.value=0;
  // clearInterval(null);
})





// function validate(e){
//  e.preventDeat
// }

// let b=document.getElementById('btn');

// b.addEventListener('click',validate)

// setInterval(validate,1000);
