let shooterGrid = document.getElementById('shooter-grid');


const gridWidth = 15;
const gridHeight = 15;


// add element grid
for(let i=0; i<gridWidth*gridHeight;i++){
    let div = document.createElement('div');
    div.innerText = i
    // div.style.backgroundColor = 'gray';
    // div.style.margin = '5px';
    shooterGrid.append(div);

}

const gridDivs = document.querySelectorAll('#shooter-grid div')

// index domds
let bombs = [
    0, 1, 2, 3, 4, 5, 6, 7, 8, 9,
    15, 16, 17, 18, 19, 20, 21, 22, 23, 24,
    30, 31, 32, 33, 34, 35, 36, 37, 38, 39
]
let bombsRemoved = []
function drawnBombs(bombsList){
    for (let i = 0; i < bombsList.length; i++) {
        if(!bombsRemoved.includes(i))
            gridDivs[bombsList[i]].classList.add('bomb')
    }
}
drawnBombs(bombs)
function removeBombs(bombsList){
    for (let i = 0; i < bombs.length; i++) {
        gridDivs[bombs[i]].classList.remove('bomb')
    }
}

let shooterIndex = 217;
gridDivs[shooterIndex].classList.add('shooter')
function moveShooter(event){
    gridDivs[shooterIndex].classList.remove('shooter')

    console.log(event)
    switch(event.code){
        case 'ArrowLeft':
            if(shooterIndex>210)
                shooterIndex--;
            break;
        case 'ArrowRight':
            if(shooterIndex<224)
                shooterIndex++;
            break;
    }
    gridDivs[shooterIndex].classList.add('shooter')
}

function shoot(event){
    let setIntervalIndex;
    let currentShootIndex = shooterIndex;
    function moveShooter(){
        gridDivs[currentShootIndex].classList.remove('shoot')
        currentShootIndex -= gridWidth;

        if(currentShootIndex < 0){
            clearInterval(setIntervalIndex)
        }
        if(gridDivs[currentShootIndex].classList.contains('bomb')){
            gridDivs[currentShootIndex].classList.remove('bomb');
            gridDivs[currentShootIndex].classList.add('explosion.png');
            
            bombsRemoved.push(bombs.indexOf(currentShootIndex))
            clearInterval(setIntervalIndex)
            
        }
        else{
            gridDivs[currentShootIndex].classList.add('shoot')
        }
        // console.log(setIntervalIndex)
        
        gridDivs[currentShootIndex].classList.add('shoot')
    }


    if(event.code == "Space"){
        setIntervalIndex = setInterval(moveShooter, 100)
    }
}
let yStep = 0, xSet = 1;
let directionRight = true
function moveBombs(bombsList){
    removeBombs(bombsList)
    yStep = 0
    if(directionRight && 
        bombsList[bombsList.length-1] % gridWidth == gridWidth-1){
            directionRight = false;
            xSet = -1;
            yStep = gridWidth
        }
    if(!directionRight && 
        bombsList[0] % gridWidth == 0){
            directionRight = true;
            xSet = 1;
            yStep = gridWidth
        } 
    for (let i = 0; i < bombsList.length; i++) {
        bombsList[i] += xSet + yStep;
          
     }
    drawnBombs(bombsList)
    if(bombsList.length == bombsRemoved.length){
        
        document.getElementById('main-el').classList.add('win')
        clearInterval(gameLoopId);
    }
    if(bombsList[bombsList.length-1] >210){
        document.getElementById('main-el').classList.add('lose')
        clearInterval(gameLoopId);     
    }
}
let gameLoopId = setInterval(moveBombs, 500, bombs);

document.addEventListener('keydown',moveShooter)
document.addEventListener('keydown',shoot)
