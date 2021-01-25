window.onload = function(){
    var nav = document.querySelector('.nav');
    var bg = document.querySelector('.bg');
    var navText = document.querySelectorAll('.nav>li>a');
    var logo = document.querySelector('.logo>a');
    nav.onmouseover = function(){
        bg.style.height = 445 + 'px';
        bg.style.opacity = 1;
        logo.style.backgroundImage = 'url(https://www.tencent.com/img/index/menu_logo_hover.png)';
        for(var i = 0;i < navText.length;i ++){
            navText[i].style.color = '#2b2e2e';
        }
    }
    nav.onmouseout = function(){
        bg.style.height = 0 + 'px';
        bg.style.opacity = 0;
        for(var i = 0;i < navText.length;i ++){
            navText[i].style.color = '';
        }
        logo.style.backgroundImage = '';
    }




    //link部分设置
    var linkLi = document.querySelectorAll('.link-tab li');
    var div = document.querySelectorAll('.link-tab div');
    var link_i = document.querySelectorAll('.link-tab i');
    var before = document.querySelectorAll('.link-tab div span');
    var ul = document.querySelectorAll('.link-content ul');
    for(var i = 0;i < linkLi.length;i ++){
        (function(j){
            linkLi[j].onmouseover = function(){
                for(var k = 0;k < div.length;k ++){
                    div[k].style.marginLeft = '15%';
                    div[k].style.color = 'rgba(255,255,255,0.7)';
                    before[k].style.left = -70 + 'px';
                    before[k].style.opacity = '0';
                    link_i[k].style.opacity = '0';
                    ul[k].style.opacity = '0';
                    ul[k].style.zIndex = '0';
                }
                div[j].style.marginLeft = '20%';
                link_i[j].style.opacity = '1';
                before[j].style.left = -50 + 'px';
                before[j].style.opacity = '1';
                div[j].style.color = 'rgb(255,255,255)';
                ul[j].style.opacity = '1';
                ul[j].style.zIndex = '1';
            }
        }(i))
    }



    //resp轮播
    var respLi = document.querySelectorAll('.resp_img li');
    var index = 0;
    var timer = setInterval(function(){
        for(var i = 0;i < respLi.length;i ++){
            respLi[i].style.opacity = "";
            respLi[i].style.zIndex = 0;
        }
        index ++;
        if(index > respLi.length-1){
            index = 0
        }
        respLi[index].style.opacity = 1;
        respLi[index].style.zIndex = 1;
    },3000)
}