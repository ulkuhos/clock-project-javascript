//Having user's name and display it in the HTML 

let userInputName = prompt("Enter Your Name: ");
document.querySelector("#myName").innerHTML = userInputName;

// display the time on screen

function showTime() {
    const clockElement = document.querySelector("#myClock");
    function updateClock() {
        const date = new Date();
        const hours = date.getHours();
        const minutes = date.getMinutes();
        const seconds = date.getSeconds();

        //Get the day of the week 
        const day = date.toLocaleDateString("en-US",{weekday:"long" });

        //combine the time and day to place it in HTML
        const time = `${hours}:${minutes}:${seconds}`;
        clockElement.innerHTML = time + " " + day;

        //Call "requestAnimationFrame" or "setInterval" or "setTimeout" to update the clock
        requestAnimationFrame(updateClock);
    }
    //initial call to updateClock to start to clock
    updateClock();
}

// call the function to display time when the page is loaded
document.addEventListener("DOMContentLoaded", showTime);