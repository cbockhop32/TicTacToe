const gameCont = document.querySelector('.container');
const boxes = document.querySelectorAll('.box');
const playerTrackEl = document.querySelector('.player-tracker');
const restartBtn = document.getElementById('btn-restart');
const player1Score = document.getElementById('p1');
const player2Score = document.getElementById('p2');





let playerTracker = 1;
let p1Score = 0;
let p2Score = 0;


class Logic {
   

    static checkIfWin() {
        const rows = Logic.checkRows();
        const columns = Logic.checkColumns();
        const diag = Logic.checkDiagonally();

        // when winner has happened call function wihin UI class that highlights boxes and then inactives all the boxes

        if(rows != false) {
            UI.highlightWinner(rows);
        } else if (columns != false) {
            UI.highlightWinner(columns);
        } else if (diag != false) {
            UI.highlightWinner(diag);
        } else {
            console.log('No one has won yet')
        }
       
    }


    static checkRows() {
        let row1Arr = [];
        let row2Arr = [];
        let row3Arr = [];
  
        [...boxes].forEach(box => {
            if(box.id > 0 && box.id <= 3) {
                row1Arr.push(box)
            }    
        });

        [...boxes].forEach(box => {
            if(box.id > 3 && box.id <= 6) {
                row2Arr.push(box)
            }    
        });

        [...boxes].forEach(box => {
            if(box.id > 6 && box.id <= 9) {
                row3Arr.push(box)
            }    
        });


        if(row1Arr[0].classList.contains('X') && row1Arr[1].classList.contains('X') && row1Arr[2].classList.contains('X')) {
            p1Score++;
            return row1Arr;
        } else if(row1Arr[0].classList.contains('O') && row1Arr[1].classList.contains('O') && row1Arr[2].classList.contains('O')) {
            p2Score++;
            return row1Arr;
        } else if(row2Arr[0].classList.contains('X') && row2Arr[1].classList.contains('X') && row2Arr[2].classList.contains('X')) {
            p1Score++;
            return row2Arr;
        } else if(row2Arr[0].classList.contains('O') && row2Arr[1].classList.contains('O') && row2Arr[2].classList.contains('O')) {
            p2Score++;
            return row2Arr;
        } else if(row3Arr[0].classList.contains('X') && row3Arr[1].classList.contains('X') && row3Arr[2].classList.contains('X')){
            p1Score++;
            return row3Arr;
        } else if(row3Arr[0].classList.contains('O') && row3Arr[1].classList.contains('O') && row3Arr[2].classList.contains('O')) {
            p2Score++;
            return row3Arr;
        } else {
            return false
        }

        
    }


    static checkColumns() {
        let col1Arr = [];
        let col2Arr = [];
        let col3Arr = [];
  
        [...boxes].forEach(box => {
            if(box.id == 1 || box.id == 4 || box.id == 7) {
                col1Arr.push(box)
            }    
        });

        [...boxes].forEach(box => {
            if(box.id == 2 || box.id == 5 || box.id == 8) {
                col2Arr.push(box)
            }    
        });

        [...boxes].forEach(box => {
            if(box.id == 3 || box.id == 6 || box.id == 9) {
                col3Arr.push(box)
            }    
        });

        if(col1Arr[0].classList.contains('X') && col1Arr[1].classList.contains('X') && col1Arr[2].classList.contains('X')) {
            p1Score++;
            return col1Arr;
        } else if(col1Arr[0].classList.contains('O') && col1Arr[1].classList.contains('O') && col1Arr[2].classList.contains('O')) {
            p2Score++;
            return col1Arr;
        } else if(col2Arr[0].classList.contains('X') && col2Arr[1].classList.contains('X') && col2Arr[2].classList.contains('X')) {
            p1Score++;
            return col2Arr;
        } else if(col2Arr[0].classList.contains('O') && col2Arr[1].classList.contains('O') && col2Arr[2].classList.contains('O')) {
            p2Score++;
            return col2Arr;
        } else if(col3Arr[0].classList.contains('X') && col3Arr[1].classList.contains('X') && col3Arr[2].classList.contains('X')){
            p1Score++;
            return col3Arr;
        } else if(col3Arr[0].classList.contains('O') && col3Arr[1].classList.contains('O') && col3Arr[2].classList.contains('O')) {
            p2Score++;
            return col3Arr;
        } else {
            return false
        }
 
    }

    static checkDiagonally() {
        let diag1Arr = [];
        let diag2Arr = [];

       
  
        [...boxes].forEach(box => {
            if(box.id == 1 || box.id == 5 || box.id == 9) {
                diag1Arr.push(box)
            }    
        });

        [...boxes].forEach(box => {
            if(box.id == 3 || box.id == 5 || box.id == 7) {
                diag2Arr.push(box)
            }    
        });



        if(diag1Arr[0].classList.contains('X') && diag1Arr[1].classList.contains('X') && diag1Arr[2].classList.contains('X')) {
            p1Score++;
            return diag1Arr;
        } else if(diag1Arr[0].classList.contains('O') && diag1Arr[1].classList.contains('O') && diag1Arr[2].classList.contains('O')) {
            p2Score++;
            return diag1Arr;
        } else if(diag2Arr[0].classList.contains('X') && diag2Arr[1].classList.contains('X') && diag2Arr[2].classList.contains('X')) {
            p1Score++;
            return diag2Arr;
        } else if(diag2Arr[0].classList.contains('O') && diag2Arr[1].classList.contains('O') && diag2Arr[2].classList.contains('O')) {
            p2Score++;
            return diag2Arr;
        } else {
            return false
        }

        
    }



}



class UI {
    static populateMark(boxSel) {
        if(boxSel.classList.contains('inactive')) {
            alert('Please select another box or restart the game')
        } else {

            [...boxes].forEach(box => {
  
                if(box.id == boxSel.id) {
                    if(playerTracker == 1) {
                        box.classList.add('inactive');
                        box.classList.add('X');
                       box.innerHTML = `
                       <i class="fas fa-times fa-10x inactive"></i>
                       `;
      
                       playerTracker = 2;
      
                       UI.updatePlayerTrackerEl(2);
      
                    } else if (playerTracker == 2) {
                        box.classList.add('inactive');
                        box.classList.add('O');
                      box.innerHTML = `
                      <i class="far fa-circle fa-8x inactive"></i>
                      `;
      
                      playerTracker = 1;
      
                      UI.updatePlayerTrackerEl(1);
                    }
                }
          })
        }
        
    }



    static updatePlayerTrackerEl(playerNumber) {
        if(playerNumber == 1) {
            playerTrackEl.innerHTML = 'Player 1s Turn'
        } else {
            playerTrackEl.innerHTML = 'Player 2s Turn'
        }
    }


    static highlightWinner(winner) {

       
        
        winner.forEach(winner => {
            winner.classList.add('winning-box')
        });

        [...boxes].forEach(box => {
            box.classList.add('inactive');
        })
    }

    static restartGame() {
        playerTracker = 1;
        UI.updatePlayerTrackerEl(1);

        [...boxes].forEach(box => {
            box.className = 'box';
            box.innerHTML = '';
        })
    }

    static updateScore() {
        player1Score.innerHTML = p1Score;
        player2Score.innerHTML= p2Score;
    }









}







// Event Listeners

gameCont.addEventListener('click', e => {
    UI.populateMark(e.target);

    Logic.checkIfWin();

    UI.updateScore();
    

});


restartBtn.addEventListener('click', UI.restartGame);