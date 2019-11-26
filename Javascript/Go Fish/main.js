var cards = {};
var players = [];
var humanPlayer = {};
var backgroundImage = new Image();
var numPlayers = 0;
var turn = 0;
var havePlayerValue = false;
var playerValue = 0;
var selectedPlayer = 1;
var canvas;
var ctx;
var displayText = "Welcome to Go Fish! It is your turn!";

function on() {
    document.getElementById("playButton").style.display = "block";
}

function off() {
    document.getElementById("playButton").style.display = "none";
}

function loadImages(){
    for(var i = 2; i<=10; i++){
      var img = new Image();
      img.src ="images/cards/clubs" + i + ".png";
      cards['clubs'+i] = img;
    }
    var img = new Image();
    img.src ="images/cards/clubsA.png";
    cards['clubsA'] = img;
    var img = new Image();
    img.src ="images/cards/clubsJ.png";
    cards['clubsJ'] = img;
    var img = new Image();
    img.src ="images/cards/clubsQ.png";
    cards['clubsQ'] = img;
    var img = new Image();
    img.src ="images/cards/clubsK.png";
    cards['clubsK'] = img;
    for(var i = 2; i<=10; i++){
        var img = new Image();
        img.src ="images/cards/hearts" + i + ".png";
        cards['hearts'+i] = img;
    }
    var img = new Image();
    img.src ="images/cards/heartsA.png";
    cards['heartsA'] = img;
    var img = new Image();
    img.src ="images/cards/heartsJ.png";
    cards['heartsJ'] = img;
    var img = new Image();
    img.src ="images/cards/heartsQ.png";
    cards['heartsQ'] = img;
    var img = new Image();
    img.src ="images/cards/heartsK.png";
    cards['heartsK'] = img;
    for(var i = 2; i<=10; i++){
        var img = new Image();
        img.src ="images/cards/spades" + i + ".png";
        cards['spades'+i] = img;
    }
    var img = new Image();
    img.src ="images/cards/spadesA.png";
    cards['spadesA'] = img;
    var img = new Image();
    img.src ="images/cards/spadesJ.png";
    cards['spadesJ'] = img;
    var img = new Image();
    img.src ="images/cards/spadesQ.png";
    cards['spadesQ'] = img; 
    var img = new Image();
    img.src ="images/cards/spadesK.png";
    cards['spadesK'] = img;
    for(var i = 2; i<=10; i++){
        var img = new Image();
        img.src ="images/cards/diamonds" + i + ".png";
        cards['diamonds'+i] = img;
    }
    var img = new Image();
    img.src ="images/cards/diamondsA.png";
    cards['diamondsA'] = img;
    var img = new Image();
    img.src ="images/cards/diamondsJ.png";
    cards['diamondsJ'] = img;
    var img = new Image();
    img.src ="images/cards/diamondsQ.png";
    cards['diamondsQ'] = img;
    var img = new Image();
    img.src ="images/cards/diamondsK.png";
    cards['diamondsK'] = img;
    var img = new Image();
    img.src = "images/cards/back.png"
    cards['back'] = img;
    var img = new Image();
    img.src = "images/cards/backr.png"
    cards['backr'] = img;
    backgroundImage.src = "images/Poker Table.jpg"
  }

function getCard(){
   var x = Math.floor(Math.random() * 13 +1);
   if(x == 1){
        x = "A";
   } else if (x == 11){
       x = "J";
   } else if (x == 12){
       x = "Q";
   } else if (x == 13){
       x = "K";
   }
   var y = Math.floor(Math.random() * 4);
   if(y == 0){
       y = "clubs";
   }else if(y == 1){
       y = "spades";
   }else if(y == 2){
       y = "hearts";
   }else{
       y = "diamonds";
   }
   return y + x;
}

function getSuit(num){
    var y = Math.floor(Math.random() * 4);
   if(y == 0){
       y = "clubs";
   }else if(y == 1){
       y = "spades";
   }else if(y == 2){
       y = "hearts";
   }else{
       y = "diamonds";
   }
   return y + num;
}
function main(elem){
    off();
    canvas = document.getElementById(elem);   // used to get the canvas to draw on it
    var width = canvas.width;         // declares a variable called width and assigns it the width of the canvas
    var height = canvas.height;       // declares a variable called height and assigns it the height of the canvas
    ctx = canvas.getContext("2d");
    var num = document.getElementById('numPlayers').options.selectedIndex;
    numPlayers = num + 2;
    //ctx.drawImage(backgroundImage, 0, 0, canvas.width, canvas.height);

    // Set up hands and players
    humanPlayer.hand = [];
    humanPlayer.score = 0;
    humanPlayer.name = "You";
    for(var i=0; i<5; i++){
        humanPlayer.hand[i] = getCard();
    }

    if(numPlayers > 1){
        players[1] = new Player("CPU 1");
        players[1].score = 0;
        for(var i=0; i<5; i++){
            players[1].hand[i] = getCard();
        }
    }if(numPlayers > 2){
        players[2] = new Player("CPU 2");
        players[2].score = 0;
        for(var i=0; i<5; i++){
            players[2].hand[i] = getCard();
        }
    }if(numPlayers > 3){
        players[3] = new Player("CPU 3");
        players[3].score = 0;
        for(var i=0; i<5; i++){
            players[3].hand[i] = getCard();
        }
    }

    setInterval(game, 2500);
}

function drawGame(ctx, canvas){
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.drawImage(backgroundImage, 0, 0, canvas.width, canvas.height);
    ctx.font = "30px Comic Sans MS";
    ctx.fillStyle = "white";
    ctx.textAlign = "center";
    ctx.fillText(displayText, canvas.width/2, canvas.height/2)

    if(numPlayers > 1){
        drawHand(0, ctx);
        drawHand(1, ctx);
    }if(numPlayers > 2){
        drawHand(2, ctx);
    }if(numPlayers > 3){
        drawHand(3, ctx);
    }
    
}

function drawHand(player, ctx){
    if(player == 0){
        for(var i = 0; i<humanPlayer.hand.length; i++){
            drawCard(1300/2 - (500*humanPlayer.hand.length)/18 + i*50, 500, 6, humanPlayer.hand[i], ctx);
        }
        for(var i = 0; i<humanPlayer.score; i++){
            drawCard(1300/2 - (500*humanPlayer.score)/22 + 50*i, 425, 14, "back", ctx);
            drawCard(1300/2 - (500*humanPlayer.score)/22 + 50*i, 400, 14, "back", ctx);
        }
    }
    if(player == 1){
        for(var i = 0; i<players[1].hand.length; i++){
            drawCard(100, 700/2 - (500*players[1].hand.length)/22 + i*50, 14, "backr", ctx);
        }
        for(var i = 0; i<players[1].score; i++){
            drawCard(175, 700/2 - (500*players[1].score*2)/56 + i*50, 14, "backr", ctx);
            drawCard(200, 700/2 - (500*players[1].score*2)/56 + i*50, 14, "backr", ctx);
        }
    }
    if(player == 2){
        for(var i = 0; i<players[2].hand.length; i++){
            drawCard(1300/2 - (500*players[2].hand.length)/22 + 50*i, 100, 14, "back", ctx);
        }
        for(var i = 0; i<players[2].score; i++){
            drawCard(1300/2 - (500*players[2].score*2)/56 + 50*i, 175, 14, "back", ctx);
            drawCard(1300/2 - (500*players[2].score*2)/56 + 50*i, 200, 14, "back", ctx);
        }
    }
    if(player == 3){
        for(var i = 0; i<players[3].hand.length; i++){
            drawCard(1150, 700/2 - (500*players[3].hand.length)/22 + i*50, 14, "backr", ctx);
        }
        for(var i = 0; i<players[3].score; i++){
            drawCard(1075, 700/2 - (500*players[3].score*2)/56 + i*50, 14, "backr", ctx);
            drawCard(1050, 700/2 - (500*players[3].score*2)/56 + i*50, 14, "backr", ctx);
        }
    }
}

function drawCard(x, y, scaleFactor, type, ctx){
    var img = new Image();
    img.src ="images/cards/" + type + ".png";
    ctx.drawImage(img, x, y, img.width/scaleFactor, img.height/scaleFactor);
}

function checkForPairs(player, score){
    var retScore = 0;
    for(var i=0; i < player.hand.length; i++){
        for(var j=i +1; j < player.hand.length; j++){
            if(player.hand[i] != null && player.hand[j] != null){
                var firstCardValue = player.hand[i].charAt(player.hand[i].length -1);
                var lastCardValue = player.hand[j].charAt(player.hand[j].length -1);
                if(firstCardValue == lastCardValue){
                    retScore++;
                    player.hand[i] = null;
                    player.hand[j] = null;
                }
            }
        }
    }
    var filtered = player.hand.filter(function (el) { return el != null; });
    player.hand = filtered;
    return retScore;
}

function game(){
    if(turn >= numPlayers){
        turn = 0;
    }
    humanPlayer.score += checkForPairs(humanPlayer);
        for(var i =1; i<players.length; i++){
            players[i].score += checkForPairs(players[i], 0);
        }

        if(turn == 0){
            if(displayText != "Please select a valid player!"){
                displayText = "It is your turn!";
            }
            document.getElementById('card').disabled = false;
            document.getElementById('player').disabled = false;
            document.getElementById('submit').disabled = false;
            if(playerTurn()){
                havePlayerValue = false;
                turn++;
            }else{

            }
        }else{
            document.getElementById('card').disabled = true;
            document.getElementById('player').disabled = true;
            document.getElementById('submit').disabled = true;
            displayText = "It is CPU " + turn + "'s Turn!"
            if(botTurn(turn)){
                turn++;
            }
        }

        if(humanPlayer.hand.length == 0){
            for(var i=0; i<5; i++){
                humanPlayer.hand[i] = getCard();
            }
        }

        if(humanPlayer.score >= 10){
            gameFinish(0);
        }

        for(var i = 1; i<players.length; i++){
            if(players[i].score >= 10){
                gameFinish(i);
            }
            if(players[i].hand.length < 1){
                for(var j=0; j<5; j++){
                    players[i].hand[j] = getCard();
                }
            }
        }
        drawGame(ctx, canvas);       
}
function gameFinish(player){
    clearInterval(game);
    if(player == 0){
        displayText = "You Win!"
    }else{
        displayText = "CPU " + player + " wins!"
    }
}

function playerTurn(){
    if(havePlayerValue){
        if(removeFromHand(players[selectedPlayer], playerValue)){
            humanPlayer.hand.push(getSuit(playerValue));
            havePlayerValue = false;
            displayText = "You took a card from " + players[selectedPlayer].name;
            return false;
        }else{
            humanPlayer.hand.push(getCard());
            displayText = "You take a card from the pile";
        }
        return true;
    }else{
        return false;
    }
}

function botTurn(player){
    var obj = players[player];
    var targetPlayer = player;
    while(targetPlayer == player && targetPlayer < numPlayers){
        targetPlayer = Math.floor(Math.random()*numPlayers);
    }
    if(targetPlayer == 0){
        targetPlayer = humanPlayer;
    }else{
        targetPlayer = players[targetPlayer];
    }
    var hasCard = false;
    var targetCard;
    while(!hasCard){
        targetCard = getCard();
        targetCard = targetCard.charAt(targetCard.length-1);
        for(var i=0; i<obj.hand.length; i++){
            if(targetCard == obj.hand[i].charAt(obj.hand[i].length-1)){
                hasCard = true;
            }
        }
    }
    var displayCard = targetCard.charAt(targetCard.length -1);
    if(displayCard == 0){
        displayCard = 10;
    }
    displayText = "CPU " + player + " asks " + targetPlayer.name + " for a " + displayCard + "! ";
    if(removeFromHand(targetPlayer, targetCard)){
        obj.hand.push(targetCard);
        displayText += "Taken.";
        return false;
    }else{
        obj.hand.push(getCard());
        displayText += "Go Fish!";
        return true;
    }
}

function removeFromHand(player, card){
    var cardRemoved = false;
    for(var i = 0; i<player.hand.length; i++){
        if(player.hand[i].charAt(player.hand[i].length -1) == card.charAt(card.length -1)){
            player.hand[i] = null;
            cardRemoved = true;
            break;
        }
    }
    player.hand = player.hand.filter(function (el) { return el != null; });
    return cardRemoved;
}

function setPlayerValue(){
    var select = document.getElementById('card');
    playerValue = select.options[select.selectedIndex].value;
    selectedPlayer = document.getElementById('player').options.selectedIndex + 1;
    if(selectedPlayer < numPlayers){
        havePlayerValue = true;
        displayText = "You ask CPU " + selectedPlayer + " for a " + playerValue;
    }else{
        displayText = "Please select a valid player!";
    }
    
}

class Player{
    constructor(name){
        this.name = name;
        this.hand = [];
        this.score = 0;
    }
}