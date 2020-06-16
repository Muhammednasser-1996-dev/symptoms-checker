function smoothSroll(target,duration){
    var  target = document.querySelector(target)
    var  targetPosition = target.getBoundingClientRect().top;
    console.log(targetPosition)
    var  startingPosition = window.pageXOffset;
    var distance = targetPosition - startingPosition;
    var startTime = null

    function animation(currentTime){
     if(startTime === null) startTime = currentTime;
     var timeElapsed = currentTime - startTime;
     var run = ease(timeElapsed,startingPosition,distance,duration)
     window.scrollTo(0,run);
     if(timeElapsed < duration) requestAnimationFrame(animation);
    }
    function ease (t, b, c, d) {
        t /= d/2;
        if (t < 1) return c/2*t*t + b;
        t--;
        return -c/2 * (t*(t-2) - 1) + b;
    };

   requestAnimationFrame(animation)
}
var btn = document.querySelector(".header i")
btn.addEventListener("click", function(){
    smoothSroll(".about", 1000)
})
