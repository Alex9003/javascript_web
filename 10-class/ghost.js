const canvas = document.getElementById('ghost');
const ctx = canvas.getContext('2d');
const cWidth = canvas.width;
const cHeight = canvas.height;
//console.log(canvas)

const imgFolder = 'images/';



const bgImg = new Image()
bgImg.src  = imgFolder + 'map01_preview-01.png';

let gameFrame = 0

let mouse  = {
    x:cWidth/2,
    y:cHeight/2
}
canvas.addEventListener('mousemove', function(event){
    let c = canvas.getBoundingClientRect();
    mouse.x = event.clientX - c.left
    mouse.y = event.clientY - c.top
})

class Player{
    constructor(x=0,y=0){
        this.x = x;
        this.y = y;

        this.heroImg = new Image()
        this.heroImg.src = imgFolder + 'idle_hero.png'
        this.heroMaxFrame = 17
        // left
        this.runLeftImg = new Image()
        this.runLeftImg.src = imgFolder + 'run_left.png'

        //right
        this.runRinghtImg = new Image()
        this.runRinghtImg.src = imgFolder + 'run_right.png'

        this.heroMaxFrame = 8

        this.xFrame = 0
        this.sWidth = 43
        this.sHeight = 50
        this.takt = 10
        //this.speed = 10



    }
    stay(){

    }
    runLeft(){
        
    }
    runRinght(){

    }
    update(){

    }
    move(){

    }

}

class Ghost{

}

let player = new Player(cWidth/2 , cHeight/2)
let ghost = new Ghost()

function start(){
    console.log(gameFrame);
    ctx.clearRect(0,0, cWidth,cHeight);
    ctx.drawImage(bgImg,0,0,cWidth,cHeight)
    player.update()
    player.move()
    gameFrame++;
    requestAnimationFrame(start)
}



// setInterval(start,100)
start()