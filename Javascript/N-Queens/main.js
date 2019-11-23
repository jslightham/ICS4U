var qStack = [];
var n = 10;
function nQueens(){
    var failed = false;

    while(qStack.length > -1 && qStack.length < n){
        if(!placeQueen()){
            try{
                while(!shiftQueen()){
                    qStack.pop();
                }
            }catch(e){
                failed = true;
                break;
            }
        }
    }
    if(!failed){
        printBoard();
    }else{
        console.log("No possible solutions");
    }
}

function printBoard(){
    var s1 = "";
    for(var i =0; i<n; i++){
        s1 = "";
        var temp = qStack.pop();
        for(var j = 0; j<n; j++){
            if(temp.col === j){
                s1 += "Q ";
            }else{
                s1 += ". ";
            }
        }
        console.log(s1);
        console.log("\n")
    }
}

function checkConflicts(q){
    var hasConflict = false;

    qStack.push(q);
    var temp = [];
    try{
        temp.push(qStack.pop());

        while(qStack.length !== 0){
            if(qStack[qStack.length -1].col === q.col || Math.abs(qStack[qStack.length -1].col - q.col) === Math.abs(qStack[qStack.length -1].row - q.row)){
                hasConflict = true;
            }
            temp.push(qStack.pop());
        }
    }catch(e){
        hasConflict = false;
    }

    while(temp.length !== 0){
        qStack.push(temp.pop());
    }

    qStack.pop();
    return hasConflict;
}

function placeQueen(){
    var q = new Queen(qStack.length, 0);

    var added = false;

    while(!added && q.col < n){
        if(!checkConflicts(q)){
            qStack.push(q);
            added = true;
            return true;
        }else{
            q = new Queen(q.row, q.col +1);
            added = false;
        }
    }
    return added;
}

function shiftQueen(){
    var q = new Queen(qstack[qStack.length -1].row, qStack[qStack.length -1].col + 1);
    var placed = false;

    while(!placed && q.col < n){
        if(!checkConflicts(q)){
            qStack.pop();
            qStack.push(q);
            placed = true;
            return true;
        }else{
            q = new Queen(q.row, q.col + 1);
            placed = false;
        }
    }
    return placed;
}

class Queen{
    constructor(row, col){
        this.row = row;
        this.col = col;
    }
}