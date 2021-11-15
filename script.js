const playSound = (buttonKey) => {
    let audio = new Audio;
    
    switch(buttonKey){
        case "1" : 
            audio = new Audio("./assets/bass.mp3");
            audio.play();
            break;
        case "2" : 
            audio = new Audio("./assets/basshard.mp3");
            audio.play();
            break;
        case "3" : 
            audio = new Audio("./assets/slap.mp3");
            audio.play();
            break;
        case "4" : 
            audio = new Audio("./assets/weird.mp3");
            audio.play();
            break;
        case "5" : 
            audio = new Audio("./assets/harp.mp3");
            audio.play();
            break;
        case "6" : 
            audio = new Audio("./assets/success.mp3");
            audio.play();
            break;
        case "7" : 
            audio = new Audio("./assets/drum.mp3");
            audio.play();
            break;
        case "8" : 
            audio = new Audio("./assets/chime.mp3");
            audio.play();
            break;
        case "9" : 
            audio = new Audio("./assets/alien.mp3");
            audio.play();
            break;
    }
}




document.addEventListener('keydown', (event) =>{
    playSound(event.key);
})

