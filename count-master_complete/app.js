var btn1 = document.querySelector(".btn1");
var btn2 = document.querySelector(".btn2");
var btn3 = document.querySelector(".btn3");
var count = document.querySelector(".count");
var x = 0;
var y=0;
var sound = new Audio();
sound.src="count.mp3";
var dec = new Audio();
dec.src="dec.mp3";
var alertz = new Audio();
alertz.src = "alert.mp3";
var reset = new Audio();
reset.src="reset.mp3";




document.addEventListener("keyup",(event)=>{
    if(event.keyCode==175 || event.keyCode==38 ){
        btn3.click();
    }
    else if(event.keyCode==40){
        btn2.click();
    }
});


btn2.addEventListener("click",()=>{
if(Math.floor(x)===0){
    return "";
}
else{
    x-=Math.floor(1);
    count.textContent=x;
    dec.play();

}

});


btn3.addEventListener("click",()=>{
    x+=1;
    count.textContent=x;
    if(x==5 && y==0){
        alertz.play();
         Swal.fire("Tip: You can increment using arrow up and decrement using arrow down.");
        y++;
        
    }
    sound.play();
    
});

btn1.addEventListener("click",()=>{
    if(x==0){
        return "";
    }
    reset.play();
    Swal.fire({
        title: 'Are you sure you want to reset your count?',
        text: "You won't be able to revert this!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Okay'
      }).then((result) => {
        if (result.value) {
          x=0;
          count.textContent=x;
        }
      })
});

