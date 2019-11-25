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
    for(var i=0; i<5; i++){
        humanPlayer.hand[i] = getCard();
    }

    if(numPlayers > 1){
        players[1] = new Player("Player 2");
        players[1].score = 0;
        for(var i=0; i<5; i++){
            players[1].hand[i] = getCard();
        }
    }if(numPlayers > 2){
        players[2] = new Player("Player 3");
        players[2].score = 0;
        for(var i=0; i<5; i++){
            players[2].hand[i] = getCard();
        }
    }if(numPlayers > 3){
        players[3] = new Player("Player 4");
        players[3].score = 0;
        for(var i=0; i<5; i++){
            players[3].hand[i] = getCard();
        }
    }

    setInterval(game, 250);
}

function drawGame(ctx, canvas){
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.drawImage(backgroundImage, 0, 0, canvas.width, canvas.height);

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
            drawCard(100, 700/2 - (500*players[1].hand.length)/22 + i*50, 14, players[1].hand[i], ctx);
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
    humanPlayer.score += checkForPairs(humanPlayer);
        for(var i =1; i<players.length; i++){
            players[i].score += checkForPairs(players[i], 0);
        }

        if(turn == 0){
            document.getElementById('card').disabled = false;
            document.getElementById('player').disabled = false;
            document.getElementById('submit').disabled = false;
            if(playerTurn()){
                havePlayerValue = false;
                turn++;
            }
        }else{
            document.getElementById('card').disabled = true;
            document.getElementById('player').disabled = true;
            document.getElementById('submit').disabled = true;
            if(botTurn(turn)){
                turn++;
            }
        }

        if(humanPlayer.score >= 10){
            isGameOver = true;
        }
        for(var i = 1; i<players.length; i++){
            botTurn(players[i]);
            if(players[i].score >= 10){
                isGameOver = true;
            }
        }
        drawGame(ctx, canvas);
        isGameOver = true;
        
}
function playerTurn(){
    if(havePlayerValue){
        if(removeFromHand(players[selectedPlayer], playerValue)){
            humanPlayer.hand.push(getSuit(playerValue));
            havePlayerValue = false;
            alert("You took a card from the player")
            return false;
        }else{
            humanPlayer.hand.push(getCard());
            alert("You take a card from the pile")
        }
        return true;
    }else{
        return false;
    }
}

function botTurn(player){
    var obj = players[player];
    var targetPlayer = player;
    while(targetPlayer != player && targetPlayer < numPlayers){
        targetPlayer = Math.floor(Math.random()*numPlayers);
    }
    var targetCard = getCard();
    if(removeFromHand(targetPlayer, targetCard)){
        player.hand.push(targetCard);
        alert("Bot took a card from player")
        return false;
    }else{
        player.hand.push(getCard());
        alert("Bot took a card from pile");
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
    havePlayerValue = true;
    alert("You ask " + selectedPlayer + " for a " + playerValue);
}

class Player{
    constructor(name){
        this.name = name;
        this.hand = [];
        this.score = 0;
    }
}

