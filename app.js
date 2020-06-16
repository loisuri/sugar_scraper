//starting values
let sprinklesBalance = 0
let scrapeStrength = 5
let sprinklesPerClick = scrapeStrength
let sprinklesPerSecond = 1

// document.getElementById("donut-button").onclick = function() {scrapeSprinkles()}

function scrapeSprinkles(){
    // increment sprinkles when the donut is clicked
    sprinklesBalance =sprinklesBalance + scrapeStrength + sprinklesPerSecond
    setSprinkleCount()
}
function upgradeSpoon(){   
    if (sprinklesBalance > 100) {
        scrapeStrength=scrapeStrength+10
      }
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