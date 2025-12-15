# ⏳ Countdown Timer App

## 📌 Overview

The **Countdown Timer App** is a simple JavaScript web application that allows users to start a countdown for predefined durations (20s, 30s, 40s, 60s). Once the countdown reaches zero, a completion message is displayed.

This project is great for beginners to practice **DOM manipulation**, **event handling**, and **timers** in JavaScript.

---

## 🧩 Features

* Start countdown for 20, 30, 40, or 60 seconds
* Displays remaining seconds dynamically
* Alerts when the countdown finishes
* Stops previous countdown if a new button is clicked

---

## 🛠️ Technologies Used

* HTML5
* CSS3
* JavaScript

---

## ⚙️ How It Works

1. Users click one of the timer buttons (20s, 30s, 40s, 60s).
2. `counterBegin(n)` function:

   * Clears the previous countdown
   * Initializes a counter with `n` seconds
   * Updates `textEl` every second
   * Stops and displays a completion message when counter reaches 0
3. Each button has an `onclick` event to start its corresponding countdown.

---

## 📂 Project Structure

```
countdown-timer-app/
│
├── index.html
├── style.css
├── script.js
└── README.md
```

---

## 🧪 JavaScript Logic

```js
function counterBegin(n) {
    textEl.textContent = "";
    let counter = n;
    timerId = setInterval(function() {
        if (counter === 0) {
            textEl.textContent = "Your Moment is complete!";
            clearInterval(timerId);
            return;
        }
        textEl.textContent = counter + " seconds left";
        counter -= 1;
    }, 1000);
}

// Button click events
twentyBtn.onclick = function() {
    clearInterval(timerId);
    counterBegin(20);
};
// Similar for 30s, 40s, 60s buttons
```

---

## 📚 Concepts Covered

* DOM manipulation (`textContent`, `getElementById`)
* Event handling (`onclick`)
* Timers using `setInterval` and `clearInterval`
* Conditional statements for stopping the countdown

---

## 🚀 Future Improvements

* Add pause and reset buttons
* Allow custom countdown duration input
* Add sound alert when timer completes
* Display countdown in `mm:ss` format
* Style timer dynamically

---

## 👩‍💻 Author

Created as a practice project to strengthen **JavaScript timers**, **DOM manipulation**, and **user interaction** skills.

---

⭐ If you find this project useful, feel free to star the repository!
