let days=document.getElementById('days');
let hours=document.getElementById('hours');
let minutes=document.getElementById('minutes');
let seconds=document.getElementById('seconds');

let btn = document.getElementById('btn');
let reset = document.getElementById('res');
let paused=document.getElementById('pas');
let resume=document.getElementById('resume');
let h=document.getElementById('heading');

let cPause;


function validate(){

if(seconds.value==0){
  if(minutes.value>0){
    minutes.value--;
    seconds.value=59;
  }
  else if(hours.value>0){
    minutes.value=59;
    seconds.value=59;
    hours.value--;
  }else if(days.value>0){
    hours.value=24;
    days.value--;
  }else{
   h.innerHTML='Time Over';
  }
}else{
  seconds.value--;
}

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
  e.preventDefault()
  days.value=0;
  hours.value=0;
  minutes.value=0;
  seconds.value=0;
 
  
  
})



