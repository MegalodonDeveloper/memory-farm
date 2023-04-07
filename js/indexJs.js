
var orginalevent = document.querySelector('.navbar')


document.getElementById('burgermenu').addEventListener("click", function(){
    document.querySelector('.navbar').classList.add("is-active")
},false);
document.getElementById('main-nav_id').addEventListener("click", function(){
    document.querySelector('.navbar').classList.remove("is-active")
},false);

buttonColours = ["red","blue","green","yellow"];
gamePattern = [];
var userClickPattern = [];
var started = false;
var level = 0;
var progress = level;
$(document).click(function(){
    if (!started) {
        $("#level-title").text("level: "+level);
        $("#req-title").text("Clicks: "+level);
        $("#pro-title").text("Points: "+progress);
        nextSequence();
        started = true;
    }
});
$(".box-l").click(function(){
    var userchosenColor = $(this).attr("id");
    userClickPattern.push(userchosenColor);
    playSound(userchosenColor);Animation(userchosenColor);
    checkAnswer(userClickPattern.length-1);progress += 5;
});
function checkAnswer(currentLevel){
    if(gamePattern[currentLevel] === userClickPattern[currentLevel]){
        if (userClickPattern.length === gamePattern.length){
            setTimeout(function(){
                nextSequence();
            }, 1000);
        }
    } else {
        playSound("wrong");
        $(".box-list").addClass("game-over");
        $("#error-report").text("Game Over, Click Restart");
        setTimeout(function() {
            $(".box-list").removeClass("game-over");
        }, 200)
        startOver();
    }
};
function nextSequence(){
    userClickPattern = [];
    level++;
    $("#level-title").text("Level: "+level);
    $("#req-title").text("Clicks: "+level);
    $("#pro-title").text("Points: "+progress);
    var randomNumber = Math.floor(Math.random() * 4);
    var randomChosenColor = buttonColours[randomNumber];
    gamePattern.push(randomChosenColor);

    $("#yellow" + randomChosenColor).fadeIn(100).fadeOut(100).fadeIn(100);
    playSound(randomChosenColor);
    if (randomNumber === 0){
        var shadow = document.querySelector('.red');
        shadow.classList.add('active-box');
        setTimeout(function(){
            shadow.classList.remove('active-box');
        }, 100);
    } else if (randomNumber === 1){
        var shadow = document.querySelector('.blue');
        shadow.classList.add('active-box');
        setTimeout(function(){
            shadow.classList.remove('active-box');
        }, 100);
    } else if (randomNumber === 2){
        var shadow = document.querySelector('.green');
        shadow.classList.add('active-box');
        setTimeout(function(){
            shadow.classList.remove('active-box');
        }, 100);
    } else if (randomNumber === 3){
            var shadow = document.querySelector('.yellow');
            shadow.classList.add('active-box');
            setTimeout(function(){
                shadow.classList.remove('active-box');
            }, 100);
    }
};
function playSound(name){
    var audio = new Audio("sounds/" + name + ".mp3");
    audio.play();
};
function Animation(currely){
    var activebutton = document.querySelector('.'+currely);
    activebutton.classList.add('pressed');
    setTimeout(function(){
        activebutton.classList.remove('pressed');
    }, 100);
}
function startOver() {
    level = 0;
    gamePatten = [];
    started = false;
}

