const h1=document.getElementById("hh");
const scroll=["skills","passion","knowledge"];
var i=0;
setInterval(()=>{
   if(i==3){
       i=0;
   }
   h1.textContent=scroll[i];
   i+=1
  
        
    },1500)
    

