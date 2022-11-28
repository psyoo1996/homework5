var vid = document.getElementById("video");

document.getElementById("play").onclick = function() {
    play()
    };

function play() {
  vid.play();
  vid.playbackRate = 1.0;
}

document.getElementById("pause").onclick = function() {
    pause()
    };

function pause() {
    vid.pause();
  }

document.getElementById("slower").onclick = function() {
    slower()
    };

function slower() {
    vid.playbackRate = 0.5;
    alert("Video is at slowest speed!");
}

document.getElementById("faster").onclick = function() {
    faster()
    };

function faster() {
    vid.playbackRate = 2.0;
    alert("Video is at fastest speed!");
}

document.getElementById("skip").onclick = function() {
    skip()
    };

function skip() { 
    vid.currentTime=15;
  } 

document.getElementById("mute").onclick = function() {
    mute()
    };

function mute() { 
    vid.muted = true;
  } 







