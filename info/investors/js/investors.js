window.onload = function(){
    var nav = document.querySelector('.nav');
    var bg = document.querySelector('.bg');
    nav.onmouseover = function(){
        bg.style.height = 445 + 'px';
        bg.style.opacity = 1;
    }
    nav.onmouseout = function(){
        bg.style.height = 0 + 'px';
        bg.style.opacity = 0;
    }
}