//proměnné pro góly
var playerDirection = "";
var keeperDirection = "";



// Získání odkazu na div s ID "goal"
var goalDiv = document.querySelector('#goal-id');

// Vytvoření prvku <table>
var table = document.createElement('table');
table.className = 'net';

// Generování řádků a buněk
for (let i = 0; i < 15; i++) {
  var row = document.createElement('tr');
  row.className = '';

  for (let j = 0; j < 43; j++) {
    var cell = document.createElement('td');
    cell.className = '';
    row.appendChild(cell);
  }

  table.appendChild(row);
}

// Přidání tabulky do divu
goalDiv.appendChild(table);

var div = document.createElement('div');

var keeperDiv = document.querySelector('#goalkeeper-center-id');

// Vytvoření brankaře <table>
var image = document.createElement('img');
image.src = 'standing.png';
image.style.width = '350px';
image.style.height = '360px';
image.style.marginBottom = "40px";

div.appendChild(image);

keeperDiv.appendChild(image);


var ball = document.getElementById("ball");
var canMove = true;


var div = document.createElement('div');
    div.id = 'goal-alert';
    div.style.position = 'absolute';
    div.style.width = '100%';
    div.style.height = '100%';
    div.style.display = 'none';
    div.style.alignItems = 'center';
    div.style.justifyContent = 'center';

    // Vytvoření alertu H1
    var alert = document.createElement('h1');
    alert.style.color = '#ffffff';
    alert.style.fontSize = '100px';
    alert.innerHTML = "goal!";
    alert.style.zIndex = '12';

    div.appendChild(alert);

    document.body.appendChild(div);


function moveBallUp() {
    if (!canMove) return; // Pokud je pohyb zakázán, nedělej nic
    canMove = false; // Zakážeme pohyb na 3 sekund
    ball.style.transition = "transform 0.5s, width 0.5s, height 0.5s"; // Přidáme přechodové efekty s délkou 0.5 sekundy pro transformaci, šířku a výšku
    ball.style.transform = "translateY(-570%) scale(0.5)"; // Posun na ose y a zmenšení velikosti míče
    playerDirection = "top";
    diveSomewhere();
    checkGoal(); 
}


function moveBallRight() {
    if (!canMove) return; // Pokud je pohyb zakázán, nedělej nic
    canMove = false; // Zakážeme pohyb na 3 sekund
    ball.style.transition = "transform 0.5s, width 0.5s, height 0.5s"; // Přidáme přechodové efekty s délkou 0.5 sekundy pro transformaci, šířku a výšku
    ball.style.transform = "translate(450%, -520%) scale(0.5)"; // Posun na ose y a zmenšení velikosti míče
    playerDirection = "right";
    diveSomewhere();
    checkGoal(); 
}

function moveBallLeft() {
    if (!canMove) return; // Pokud je pohyb zakázán, nedělej nic
    canMove = false; // Zakážeme pohyb na 3 sekund
    ball.style.transition = "transform 0.5s, width 0.5s, height 0.5s"; // Přidáme přechodové efekty s délkou 0.5 sekundy pro transformaci, šířku a výšku
    ball.style.transform = "translate(-350%, -520%) scale(0.5)"; // Posun na ose y a zmenšení velikosti míče
    playerDirection = "left";
    diveSomewhere();
    checkGoal(); 
}

function moveBallDown() {
    if (!canMove) return; // Pokud je pohyb zakázán, nedělej nic
    canMove = false; // Zakážeme pohyb na 3 sekund
    ball.style.transition = "transform 0.5s, width 0.5s, height 0.5s"; // Přidáme přechodové efekty s délkou 0.5 sekundy pro transformaci, šířku a výšku
    ball.style.transform = "translateY(-300%) scale(0.5)"; // Posun na ose y a zmenšení velikosti míče
    playerDirection = "bottom";
    diveSomewhere();
    checkGoal(); 
}

function ballOpacity(){
    if (!canMove) return; // Pokud je pohyb zakázán, nedělej nic
    canMove = false; // Zakážeme pohyb na 3 sekund
    ball.style.transition = "opacity 0.5s"; // Přidáme přechodové efekty s délkou 0.5 sekundy pro transformaci, šířku a výšku
    ball.style.opacity = "0.5";
}

function scoreGoal() {
    var goalCount = document.getElementById("scored").innerHTML;
    goalCount = Number(goalCount) + 1;
    document.getElementById("scored").innerHTML = goalCount;
}

document.addEventListener("DOMContentLoaded", function() {
    document.addEventListener("keydown", function(event) {
        if (event.key === "ArrowUp") {
            moveBallUp();
        }
        if (event.key === "ArrowLeft") {
            moveBallLeft();
        }
        if (event.key === "ArrowRight") {
            moveBallRight();
        }
        if (event.key === "ArrowDown") {
            moveBallDown();
        }

        // Vynulujeme transformaci a velikost míče po uplynutí 3 sekund
        setTimeout(function() {
            ball.style.transition = ""; // Zrušíme přechodové efekty
            ball.style.transform = ""; // Vynulujeme transformaci
            ball.style.width = ""; // Vynulujeme šířku
            ball.style.height = ""; // Vynulujeme výšku
            ball.style.opacity = ""; // Vynulujeme opacity
            image.style.marginRight = ''; // Vynulujeme margin
            image.style.marginLeft = ''; // Vynulujeme margin
            image.style.marginTop = ''; // Vynulujeme margin
            image.style.marginBottom = ''; // Vynulujeme margin
            canMove = true;
            image.src = 'standing.png';
            document.querySelector('#goal-alert').style.display = 'none';
        }, 3000);


    });
});

function diveLeft(){
    image.src = 'diving-left.png';
    image.style.marginRight = '375px';
    image.style.marginTop = '-100px';
    keeperDirection = "left";
}

function diveRight(){
    image.src = 'diving-right.png';
    image.style.marginLeft = '430px';
    image.style.marginTop = '-100px';
    keeperDirection = "right";
}

function diveTop(){
    image.src = 'standing.png';
    image.style.marginBottom = '100px';
    keeperDirection = "top";
}

function diveBottom(){
    image.src = 'standing.png';
    image.style.marginBottom = '-50px';
    keeperDirection = "bottom";
}

function diveSomewhere() {
    // Pole obsahující názvy funkcí
    var functionArray = [diveLeft, diveRight, diveTop, diveBottom];
  
    // Generování náhodného indexu pole
    var randomIndex = Math.floor(Math.random() * functionArray.length);
  
    // Volání náhodně vybrané funkce
    functionArray[randomIndex]();
}

function checkGoal(){
    if(keeperDirection != playerDirection){
        scoreGoal();
        goalAlert();
    }
}

function goalAlert(){
    div.style.display = 'flex';
}

function saveAlert(){
    
}

