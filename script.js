function showMessage(){
    document.getElementById("hiddenMessage").style.display = "block";
}

let music = document.getElementById("bgMusic");
let playing = false;

function toggleMusic(){
    if(playing){
        music.pause();
        playing = false;
    }else{
        music.play();
        playing = true;
    }
}
