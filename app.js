//starting values
let sprinklesBalance = 0
let sprinklesPerClick = 10
let sprinklesPerSecond = 1
let totalSeconds = 0

setInterval(increaseSprinklesPerSecond, 1000);

function increaseSprinklesPerSecond() {
    ++totalSeconds
    // totalSeconds=totalSeconds+(totalSeconds*sprinklesPerSecond)
    sprinklesPerSecond.innerHTML = totalSeconds * sprinklesPerSecond
    sprinklesBalance = sprinklesBalance + sprinklesPerSecond
    setSprinkleCount()
    setSprinklesPerSecond()
    setTotalSeconds()
}

  
function scrapeSprinkles(){
    // increment sprinkles when the donut is clicked
    // sprinklesBalance =sprinklesBalance + sprinklesPerClick + sprinklesPerSecond
    sprinklesBalance =sprinklesBalance + sprinklesPerClick

    setSprinkleCount()
    setSprinklesPerClick()
    setSprinklesPerSecond()
}
function upgradeSpoon(){   
    // upgrade spoon 
    // +10 to Sprinkles per click
    // TODO add variables for hard coded values
    if (sprinklesBalance > 50) {
        sprinklesPerClick = sprinklesPerClick + 10
        sprinklesBalance= sprinklesBalance - 50
      }
    setSprinkleCount()
    setSprinklesPerClick()
}

function upgradeSpatula(){   
    // upgrade spatula
    // +10 Sprinkles per second 
    // TODO add variables for hard coded values
    if (sprinklesBalance > 200) {
        sprinklesPerSecond = sprinklesPerSecond + 10
        sprinklesBalance= sprinklesBalance - 200
      }
    setSprinkleCount()
    setSprinklesPerClick()
}
function setSprinkleCount(){
    document.getElementById("sprinklesBalance").innerHTML = sprinklesBalance;
}
function setSprinklesPerClick(){
    document.getElementById("sprinklesPerClick").innerHTML = sprinklesPerClick;
}
function setSprinklesPerSecond(){
    document.getElementById("sprinklesPerSecond").innerHTML = sprinklesPerSecond;
}
function setTotalSeconds(){
    document.getElementById("totalSeconds").innerHTML = totalSeconds;
}
// initial call
setSprinkleCount()
setSprinklesPerClick()
setSprinklesPerSecond()
setTotalSeconds()
