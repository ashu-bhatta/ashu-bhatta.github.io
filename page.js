const container = document.getElementById('js_container');
const highlight = document.getElementById('progress-bar');
var containerHeight;

window.onscroll = function(){
    containerHeight = container.offsetHeight - window.innerHeight;
    containerPos= container.getBoundingClientRect();
    diff=containerHeight+containerPos.top;
    progressPercentage=diff/containerHeight*100;
    cssWidth=Math.floor(100-progressPercentage);
    
    highlight.style.width=cssWidth+"%";
}



