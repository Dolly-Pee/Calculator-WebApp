const body = document.querySelector('body');
const answerDisplay = document.querySelector('.calc_answer-display');
const themeButtonContainer = document.querySelector('.theme-button__container');

// Theme toggler

const first__theme = document.querySelector('.theme-toggle-1');
const second__theme = document.querySelector('.theme-toggle-2');
const third__theme = document.querySelector('.theme-toggle-3');

// Theme toggle buttons

const first__themeBtn = document.querySelector('.first-theme');
const second__themeBtn = document.querySelector('.second-theme');
const third__themeBtn = document.querySelector('.third-theme');
const buttonContainer = document.querySelector('.calc-buttons');

// Key Buttons


// function textcolor(btn, delbtn , eqlbtn){
    
//     delbtn.style.color = delbtn;
//     reset.style.color = delbtn;
//     equalBtn.style.color = eqlbtn;;
// }


function theme( maincolor, mainTextColor, answerDisplayBcakground, buttonContainerbackground){
    body.style.background = maincolor;
    body.style.color = mainTextColor;
    answerDisplay.style.background = answerDisplayBcakground;
    answerDisplay.style.color = mainTextColor;
    buttonContainer.style.background = buttonContainerbackground;
    themeButtonContainer.style.background = buttonContainerbackground;
}

function keyButtons( delete_reset_color, equalcolor, button){
    for( let i = 0; i < buttons.length; i++){
        buttons[i].style.background = button;
    }
    del.style.background = delete_reset_color;
    equalBtn.style.background = equalcolor;
    reset.style.background = delete_reset_color;
   
}

function boxShadow( delete_resetBS, equalbS, buttonBS){
    for( let i = 0; i < buttons.length; i++){
        buttons[i].style.boxShadow = buttonBS;
    }
    del.style.boxShadow = delete_resetBS;
    reset.style.boxShadow = delete_resetBS;
    equalBtn.style.boxShadow = equalbS;
    
}

function visibility( button1, button2, button3){
    first__themeBtn.style.visibility = button1;
    second__themeBtn.style.visibility = button2;
    third__themeBtn.style.visibility = button3;
}




first__theme.addEventListener('click', () => {
    visibility( 'visible', 'hidden', 'hidden');
    keyButtons( 'hsl(225, 21%, 49%)', 'hsl(6, 63%, 50%)', 'hsl(30, 25%, 89%)');
    boxShadow('0px 4px hsl(224, 28%, 35%)', '0px 4px hsl(6, 70%, 34%)', '0px 4px hsl(28, 16%, 65%)');
    theme('hsl(222, 26%, 31%)', 'hsl(0, 0%, 100%)', 'hsl(223, 31%, 20%)', 'hsl(223, 31%, 20%)');

    for( let i = 0; i < buttons.length; i++){
        if(buttons[i] === del || buttons[i] === reset){
            del.style.color = 'hsl(0, 0%, 100%)';
        }
        else if(buttons[i] === equalBtn){
            equalBtn.style.color = 'hsl(0, 0%, 100%)'
        }
        else{
            buttons[i].style.color = 'hsl(221, 14%, 31%)';
        }
        
    }
})
second__theme.addEventListener('click', () => {
    visibility( 'hidden', 'visible', 'hidden');
    keyButtons('hsl(185, 42%, 37%)', 'hsl(25, 98%, 40%)', 'hsl(30, 25%, 89%)');
    boxShadow('0px 4px hsl(185, 58%, 25%)', '0px 4px hsl(6, 70%, 34%)', '0px 4px hsl(28, 16%, 65%)');
    theme('hsl(0, 0%, 90%)', 'hsl(0, 0%, 0%)', 'hsl(0, 0%, 93%)', 'hsl(0, 5%, 81%)');
    
    for( let i = 0; i < buttons.length; i++){
        if(buttons[i] === del || buttons[i] === reset){
            del.style.color = 'hsl(0, 0%, 100%)';
        }
        else if(buttons[i] === equalBtn){
            equalBtn.style.color = 'hsl(0, 0%, 100%)'
        }
        else{
            buttons[i].style.color = 'hsl(60, 10%, 19%)';
        }
        
    }
})
third__theme.addEventListener('click', () => {
    visibility( 'hidden', 'hidden', 'visible');
    keyButtons('hsl(281, 89%, 26%)', 'hsl(176, 100%, 44%)', 'hsl(268, 47%, 21%)');
    boxShadow('0px 4px hsl(285, 91%, 52%)', '0px 4px hsl(177, 92%, 70%)', '0px 4px hsl(290, 70%, 36%)');
    theme( 'hsl(268, 75%, 9%)', 'hsl(52, 100%, 62%)', 'hsl(268, 71%, 12%)', 'hsl(268, 71%, 12%)');
    
    for( let i = 0; i < buttons.length; i++){
        if(buttons[i] === del || buttons[i] === reset){
            del.style.color = 'hsl(0, 0%, 100%)';
        }
        else if(buttons[i] === equalBtn){
            equalBtn.style.color = 'hsl(198, 20%, 13%)'
        }
        else{
            buttons[i].style.color = 'hsl(52, 100%, 62%)';
        }
        
    }
})