let button = document.querySelectorAll("button");

function makesound(button_idetity)
{
    if(button_idetity =="w")
    {
        let drumsound = new Audio("sounds/tom-1.mp3");
        drumsound.play();
    }
    else if(button_idetity == "a")
    {
        let drumsound = new Audio("sounds/tom-2.mp3");
        drumsound.play();
    }
    else if(button_idetity == "s")
    {
        let drumsound = new Audio("sounds/tom-3.mp3");
        drumsound.play();
    }
    else if(button_idetity == "d")
    {
        let drumsound = new Audio("sounds/tom-4.mp3");
        drumsound.play();
    }
    else if(button_idetity == "j")
    {
        let drumsound = new Audio("sounds/snare.mp3");
        drumsound.play();
    }
    else if(button_idetity == "k")
    {
        let drumsound = new Audio("sounds/crash.mp3");
        drumsound.play();
    }
    else if(button_idetity == "l")
    {
        let drumsound = new Audio("sounds/kick-bass.mp3");
        drumsound.play();
    }
}

button.forEach(element => {
    element.addEventListener("click", function(){
        
        let button_idetity = this.innerHTML;
        makesound(button_idetity);
        addAnimation(button_idetity);
    });
});

document.addEventListener("keydown", function(event){
    makesound(event.key);
    addAnimation(event.key);
});

function addAnimation(event)
{
    let a = document.querySelector("." + event);
    a.classList.add("pressed");
    setTimeout(function(){a.classList.remove("pressed");}, 100);
}