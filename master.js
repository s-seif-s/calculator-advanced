let ball = document.querySelector(".ball");
let levelOne = document.querySelector(".one");
let levelTwo = document.querySelector(".two");
let levelThree = document.querySelector(".three");

let buttons = document.querySelectorAll(".grid span");
let y ="";
let display = document.querySelector("body > p");

//to change themes
levelOne.onclick = function() {
    if(ball.style.transform !== "translate(0)"){
        ball.style.transform = "translate(0)";
    }
    themeOne();
}
function themeOne(){
    document.documentElement.style.setProperty("--mainBackgroundColor","hsl(222, 26%, 31%)");
    document.documentElement.style.setProperty("--toggle-keyPadBackgroundColor","hsl(223, 31%, 20%)");
    document.documentElement.style.setProperty("--screenBackgroundColor","hsl(224, 36%, 15%)");
    document.documentElement.style.setProperty("--keyBackgroundColor","hsl(30, 25%, 89%)");
    document.documentElement.style.setProperty("--keyShadowBackgroundColor","hsl(28, 16%, 65%)");
    document.documentElement.style.setProperty("--resetBackgroundColor","hsl(225, 21%, 49%)");
    document.documentElement.style.setProperty("--resetShadowBackgroundColor","hsl(224, 28%, 35%)");
    document.documentElement.style.setProperty("--toggle-equalKeyColor","hsl(6, 63%, 50%)");
    document.documentElement.style.setProperty("--equalKeyShadowColor","hsl(6, 70%, 34%)");
    document.documentElement.style.setProperty("--keyColor","hsl(221, 14%, 31%)");
    document.documentElement.style.setProperty("--otherColor","hsl(0, 0%, 100%)");
    display.style.color = "var(--otherColor)";
    document.querySelector(".describsion").style.color = "var(--otherColor)";
}

levelTwo.onclick = function(){
    if(ball.style.transform !== "translate(32px)")
    ball.style.transform = "translate(32px)";
    themeTwo();
}
function themeTwo(){
    document.documentElement.style.setProperty("--mainBackgroundColor","hsl(0, 0%, 90%)");
    document.documentElement.style.setProperty("--toggle-keyPadBackgroundColor","hsl(0, 5%, 81%)");
    document.documentElement.style.setProperty("--screenBackgroundColor","hsl(0, 0%, 93%)");
    document.documentElement.style.setProperty("--keyBackgroundColor","hsl(30, 25%, 89%)");
    document.documentElement.style.setProperty("--keyShadowBackgroundColor","hsl(28, 16%, 65%)");
    document.documentElement.style.setProperty("--resetBackgroundColor","hsl(185, 42%, 37%)");
    document.documentElement.style.setProperty("--resetShadowBackgroundColor","hsl(185, 58%, 25%)");
    document.documentElement.style.setProperty("--toggle-equalKeyColor","hsl(25, 98%, 40%)");
    document.documentElement.style.setProperty("--equalKeyShadowColor","hsl(25, 99%, 27%)");
    document.documentElement.style.setProperty("--keyColor","hsl(60, 10%, 19%)");
    document.documentElement.style.setProperty("--otherColor","hsl(0, 0%, 100%)");
    display.style.color = "var(--keyColor)";
    document.querySelector(".describsion").style.color = "var(--keyColor)";
}

levelThree.onclick = function() {
    if(ball.style.transform !== "translate(65px)"){
        ball.style.transform = "translate(65px)";
    }
    themeThree();
}
function themeThree(){
    document.documentElement.style.setProperty("--mainBackgroundColor","hsl(268, 75%, 9%)");
    document.documentElement.style.setProperty("--toggle-keyPadBackgroundColor","hsl(268, 71%, 12%)");
    document.documentElement.style.setProperty("--screenBackgroundColor","hsl(268, 71%, 12%)");
    document.documentElement.style.setProperty("--keyBackgroundColor","hsl(268, 47%, 21%)");
    document.documentElement.style.setProperty("--keyShadowBackgroundColor","hsl(290, 70%, 36%)");
    document.documentElement.style.setProperty("--resetBackgroundColor","hsl(281, 89%, 26%)");
    document.documentElement.style.setProperty("--resetShadowBackgroundColor","hsl(285, 91%, 52%)");
    document.documentElement.style.setProperty("--toggle-equalKeyColor","hsl(176, 100%, 44%)");
    document.documentElement.style.setProperty("--equalKeyShadowColor","hsl(177, 92%, 70%)");
    document.documentElement.style.setProperty("--keyColor","hsl(52, 100%, 62%)");
    document.documentElement.style.setProperty("--otherColor","hsl(0, 0%, 100%)");
    display.style.color = "var(--keyColor)";
    document.querySelector(".describsion").style.color = "var(--keyColor)";
}

//do functions of buttons on screen
function calculate(){
    y = eval(y);
    return y;
}

buttons.forEach(function(ele){
    ele.onclick = function(){
        if(ele.textContent !== "RESET" && ele.textContent !== "DEL" && ele.textContent !== "="){
            y += ele.textContent;
            display.textContent = y;
            console.log(y);
        }
        else if(ele.textContent === "="){
            display.textContent = calculate(); //make a calculate function that do really math
        }
        else if(ele.textContent === "RESET"){
            display.textContent = "";
            y = "";
        }
        else if(ele.textContent === "DEL"){
            y = y.split("");
            y[y.length - 1] = "";
            y = y.join("");
            display.textContent = y;
        }
    }
})