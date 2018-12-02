var myDog = 0;
var myCats = 0;
carouselDog();
carouselCats();
function carouselDog() {
    var i;
    var x = document.getElementsByClassName("slidesDog");
    for (i = 0; i < x.length; i++) {
       x[i].style.display = "none";  
    }
    myDog++;
    if (myDog > x.length) {myDog = 1}    
    x[myDog-1].style.display = "block";  
    setTimeout(carouselDog, 3000); // Change image every 3 seconds
}
function carouselCats(){
    var i;
    var x = document.getElementsByClassName("slidesCat");
    for(i = 0; i < x.length; i++){
        x[i].style.display = "none";
    }
    myCats++;
    if(myCats > x.length){myCats = 1}
    x[myCats-1].style.display = "block";
    setTimeout(carouselCats, 3000);
}