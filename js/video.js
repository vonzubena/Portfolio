


var myvideo = document.getElementById("video");

function playPause()
{
    if (myvideo.paused) 
        myvideo.play();
    else
        myvideo.pause();
}