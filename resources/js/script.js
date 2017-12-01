(function() {
    
    var screen,
        numberBtn,
        output,
        sign,
        lastEl,
        leftB = 0,
        rightB = 0;
            
            
    numberBtn = document.querySelectorAll('.num');
    screen = document.querySelector('.screen');
    sign = document.querySelectorAll('.js-sign');
    
    document.querySelector('.equal').addEventListener('click', function() {
        if(output == screen.innerHTML) {
            for(var i = 0; i < (leftB - rightB); i++) {
                screen.innerHTML += ')';
            }
            
            output = screen.innerHTML = eval(screen.innerHTML);
            
            leftB = 0;
            rightB = 0;
        }
    });
    
    for(var i = 0; i < sign.length; i++) {
        sign[i].addEventListener('click', function() {
            if((screen.innerHTML != 0) && (output == screen.innerHTML) && (screen.innerHTML.length < 19)) {
                screen.innerHTML += this.value;
            }
        });
    }

    document.querySelector('.zero').addEventListener('click', function() {
        if((screen.innerHTML != 0) && (screen.innerHTML.length < 19)) {
            output = screen.innerHTML += 0;
        }
    });
    
    for(var i = 0; i < numberBtn.length; i++) {
        numberBtn[i].addEventListener('click', function() {
            if(screen.innerHTML === '0') {
                output = screen.innerHTML = this.value;
            } else if(screen.innerHTML.length < 19) {
                output = screen.innerHTML += this.value;
            }
        }); 
    }
    
    document.querySelector('#AC').addEventListener('click', function() {
        screen.innerHTML = 0;
        leftB = 0;
        rightB = 0;
    });
    
    document.querySelector('.com').addEventListener('click', function() {
        var x = true;
        
        for(var i = 0; i < screen.innerHTML.length; i++) {
            if(screen.innerHTML.charAt(i) == '.') {
                x = false;
                break;
            }
        }
        
        if(x) {
            output = screen.innerHTML += '.';
        }
    });
    
    document.querySelector('#bracket-left').addEventListener('click', function() {
        lastEl = screen.innerHTML.charCodeAt(screen.innerHTML.length - 1);    
        
        if(screen.innerHTML == 0) {
            screen.innerHTML = '(';
            leftB++;
        } else if(screen.innerHTML.length < 19) {
            if(((lastEl >= 48) && (lastEl <= 57)) || (lastEl == 41)) {
                screen.innerHTML += '*(';
                leftB++;
            } else {
                screen.innerHTML += '(';
                leftB++;
            }
        }
    });
    
    document.querySelector('#bracket-right').addEventListener('click', function() {
        lastEl = screen.innerHTML.charCodeAt(screen.innerHTML.length - 1);
        
        if((leftB > rightB) && (lastEl != 40)) {
            output = screen.innerHTML += ')';
            rightB ++;
        }
    });
    
    document.querySelector('#root').addEventListener('click', function() {
        if(screen.innerHTML != 0) {
            screen.innerHTML = Math.sqrt(screen.innerHTML);
        }
    });
    
    document.querySelector('#power').addEventListener('click', function() {
        if(screen.innerHTML != 0) {
            screen.innerHTML = Math.pow(screen.innerHTML, 2);
        }
    });
    
})();