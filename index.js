function Author(name, email, date){
    this.name = "Hely Pereira Almeida";
    this.email = "almeidahely@gmail.com";
    this.date = "November 14, 2023";
}

for (let i = 0; i < document.querySelectorAll("div .keyboardKey").length; i++) {
    document.querySelectorAll("div .keyboardKey")[i].addEventListener("click", function(){
        let innerKeyHTML = this.innerHTML;
        keyNoteAnimation(innerKeyHTML);
        playNote(innerKeyHTML);
    });

}

function keyNoteAnimation(note){
    var activeKey = document.querySelector("."+note);
    activeKey.classList.add("clicked");
    setTimeout(() => {
        activeKey.classList.remove("clicked");
    }, 150);
}


document.addEventListener("keypress", function(event){
    playNote(event.key);
    keyNoteAnimation(event.key);
});

function sound(audioUrl){
    var audio = new Audio(audioUrl);
    audio.play();
}

function playNote(note){
    switch (note) {
        case "c":
            sound("00 sounds/do-c.m4a");
            break;
        case "db":
            sound("00 sounds/csharp.mp3");
            break;
        case "d":
            sound("00 sounds/re-d.m4a");
            break;
        case "eb":
            sound("00 sounds/dsharp.mp3");
            break;
        case "e":
            sound("00 sounds/mi-e.m4a");
            break;
        case "f":
            sound("00 sounds/fa-f.m4a");
            break;
        case "gb":
            sound("00 sounds/fsharp.mp3");
            break;
        case "g":
            sound("00 sounds/sol-g.m4a");
            break;
        case "ab":
            sound("00 sounds/gsharp.mp3");
            break;
        case "a":
            sound("00 sounds/la-a.m4a");
            break;
        case "bb":
            sound("00 sounds/asharp.mp3");
            break;
        case "b":
            sound("00 sounds/si-b.m4a");
            break;
        default:
            console.log(note);
    }
}