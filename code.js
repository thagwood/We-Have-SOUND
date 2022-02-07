 //enables start button
 function start() {
    document.getElementById("startButton").disabled = true;
    document.getElementById("stopButton").disabled = false;
    document.getElementById("data").rows["seconds"].innerHTML = "Reading Data..."; //Display Reading data
    document.getElementById("data").rows["longitude"].innerHTML = "Locating..."; //Display Locating...
    document.getElementById("data").rows["latitude"].innerHTML = "Locating..."; //Display Locating 
}
 //enables stop button
function stop() {
    document.getElementById("data").rows["seconds"].innerHTML = "<td>Time Elapsed:</td><td>15 seconds</td>";  //time elapsed 15sec
    document.getElementById("data").rows["longitude"].innerHTML = "<td>Longitude:</td><td>93</td>";   //Longitude
    document.getElementById("data").rows["latitude"].innerHTML = "<td>Latitude:</td><td>93</td>"; //Latitude
    document.getElementById("startButton").disabled = false;
    document.getElementById("stopButton").disabled = true;
}
function playStation() {
    mySound = new sound("us-lab-background.mp3");
    mySound.play();//Plays sound
    mySound.stop();//Tried to get the sound to stop didn't work
}

function playOddity() {
    mySound = new sound("David_Bowie_Space_Oddity.mp3"); // I just used the sounds givin in class
    mySound.play();
    mySound.stop();
}

function playChief() {
    mySound = new sound("hail_to_the_chief.mp3");
    mySound.play();
    mySound.stop();
}

function sound(src) {
    this.sound = document.createElement("audio");
    this.sound.src = src;
    //this.sound.setAttribute("preload", "audio");
    //this.sound.setAttribute("controls","none");
    //this.sound.style.display = "none";
    //document.body.appendChild(this.sound);
    this.play = function() {
        this.sound.play();
    }
    // this.stop = function() {
    //     this.sound.pause();
    // }
}

