document.body.style.overflow ='hidden';
setTimeout(() => {
   document.body.style.overflow ='';
   document.querySelector('.preloader').style.display = 'none';
}, 5000)

let theEnd = false;
let isClose = false;
let time = setTimeout(() => {
   if(confirm("Ви ще тут?")) {
      theEnd = true;
   }
   else {
      isClose = true;
      window.close();
   }
}, 60000);
function clearTime () {
   clearTimeout(time); 
   time = setTimeout(() => {
      if(confirm("Ви ще тут?")) {
         theEnd = true;
      }
      else {
         isClose = true;
         window.close();
   }
   }, 300000);
}

document.addEventListener('keydown', () => {
   if(!theEnd && !isClose) clearTime();
   else return null;
}); 
document.addEventListener('keyup', () => {
   if((!theEnd && !isClose) || (!isClose && theEnd)) clearTime();
   else return null;
});
document.addEventListener('scroll', () => {
   if(!theEnd && !isClose) clearTime();
   else return null;
}); 
document.addEventListener('dblclick', () => {
   if((!theEnd && !isClose) || (!isClose && theEnd)) clearTime();
   else return null;
});
document.addEventListener('click', () => {
   if((!theEnd && !isClose) || (!isClose && theEnd)) clearTime();
   else return null;
});
document.addEventListener('scroll', () => {
   if((!theEnd && !isClose) || (!isClose && theEnd)) clearTime();
   else return null;
});  
document.addEventListener('contextmenu', () => {
   if((!theEnd && !isClose) || (!isClose && theEnd)) clearTime();
   else return null;
});
