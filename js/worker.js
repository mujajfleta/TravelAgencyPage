function startTimer(duration) {
  var timer = duration,
    minutes,
    seconds;
  setInterval(function () {
    minutes = parseInt(timer / 60);
    seconds = parseInt(timer % 60);

    minutes = minutes < 10 ? "0" + minutes : minutes;
    seconds = seconds < 10 ? "0" + seconds : seconds;

    postMessage(minutes + ":" + seconds);
    console.log(minutes + ":" + seconds);

    if (--timer < 0) {
      timer = duration;
      postMessage("Ofertt expired");
    }
  }, 1000);
}

var fiveMinutes = 5 * 60;
startTimer(fiveMinutes);

/*
var i = 5*60;

function timedCount() {
    i--;
    if (i>= 0) {
        postMessage(i);
        setTimeout("timedCount()",1000);
    }
}*/
// var i = 0;

// function timedCount() {
//   i = i + 1;
//   postMessage(i);
//   setTimeout("timedCount()", 500);
// }

// timedCount();
