var audio = new Audio('music/Industrial_Junk.mp3');
if (typeof audio.loop == 'boolean') {
  audio.loop = true;
}
else {
  audio.addEventListener('ended', function () {
    this.currentTime = 0;
    this.play();
  }, false);
}
audio.play();