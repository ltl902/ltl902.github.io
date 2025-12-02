let isDarkMode = false;

function changeBackgroundColor(event) {
    const body = document.body;
    const button = event.target;
    
    if (isDarkMode) {
        // Switch to light mode (original gradient)
        body.style.background = 'linear-gradient(135deg, #4f8cff, #a259ff)';
        button.textContent = 'Dark Mode';
        isDarkMode = false;
    } else {
        // Switch to dark mode (darker version of the gradient)
        body.style.background = 'linear-gradient(135deg, #1a3d7a, #4d2080)';
        button.textContent = 'Light Mode';
        isDarkMode = true;
    }
}

function getFortune() {
    // create a list of random fortunes
    const fortunes = [
        "A pleasant surprise is waiting for you.",
        "Adventure awaits you around the next corner.",
        "Your hard work will pay off today.",
        "You will find a hidden treasure today.",
        "Your creativity will shine bright today."
    ];
    
    // select a random value from the `fortunes` array
    const randomIndex = Math.floor(Math.random() * fortunes.length);
    
    // post an alert that displays the random fortune
    alert(fortunes[randomIndex]);
}

function typeEffect(element, text, speed = 50) {
    // create a counter to iterate over the characters in `text`
    let i = 0;
    
    // create a function that executes every `speed` microseconds
    const timer = setInterval(() => {
        // while the counter is less than the length of the `text` string
        if (i < text.length) {
            // update the contents of the HTML `element` by adding the next character in the `text` string to it
            element.innerHTML += text.charAt(i);
            i++;
        } else {
            // when finished, stop the loop
            clearInterval(timer);
        }
    }, speed);
}

// use it like this:
window.onload = function() {
    // get the target HTML element
    const element = document.getElementById('typing-text');
    // execute the typeEffect function with the element and a message
    typeEffect(element, "Welcome to my awesome website!");
};