// get the key codes with add event listener
// assign the righ key codes to the html 
// animate if a key is pressed
// select the right key code with <<``>>
// remove animation class when key is up
// make a sound if key code is pressed 
// rewind the after every time a key is pressed.

const drums = document.querySelector('#drums')
  
window.addEventListener('keydown', (e) => {
  playSound(e)
})
window.addEventListener('keyup', (e) => {
  removeAnimation(e)
})

function playSound(e){
  const audio = document.querySelector(`audio[data-key = "${e.keyCode}"`);
  if(!audio) return
  audio.currentTime = 0;
  audio.play();
  // animate
  const key = document.querySelector(`[data-key = "${e.keyCode}"]`);
  key.classList.add('playing');
}

function removeAnimation(e){
  const key = document.querySelector(`[data-key = "${e.keyCode}"]`);
  if(!key) return
  key.classList.remove('playing');
}