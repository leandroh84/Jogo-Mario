const mario = document.querySelector('.mario');
const pipe = document.querySelector('.pipe');
const jump = () => {
    mario.classList.add('.jump');
    console.log('parei aqui', this)
    setTimeout(() => {
        mario.classList.remove('.jump');
    }, 500);
}
const loop = setInterval(() =>{
    const pipePosition = pipe.offsetLeft;
    const marioPosition = mario.offsetBotton;
    if(pipePosition <= 140){
        pipe.style.animation = 'none';
        pipe.style.left = `${pipePosition}px`;
    }
}, 10);
document.addEventListener('keydown', jump);