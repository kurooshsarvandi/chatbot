# 🤖 Chatbot App (React + JSX)

A simple, lightweight chatbot built using **React**, **JSX (Babel)**, and plain **JavaScript** — no bundlers required.
This project demonstrates how to build a chat UI, manage message state, and integrate a custom chatbot logic function.

---

## 📸 Preview

![Chatbot Preview](robot.png)

---

## 🚀 Features

* 💬 **User & Bot message bubbles**
* 🎨 **Clean responsive UI** (HTML + CSS only)
* ⚛️ **React Components** for:

  * Chat input
  * Chat messages
  * Chat message bubbles
* ⚡ **State management** with `useState`
* 🤖 **Custom Chatbot Logic** inside `react.basic.js`
* 🔄 **Automatic message rendering** via `.map()`
* 🧩 Ready for expansion (APIs, OpenAI, weather API, etc.)

---

## 📂 Project Structure

```
📁 chatbot/
│
├── chatbot.html          # Main app (React JSX)
├── react.basic.js        # Chatbot logic (your custom bot)
├── robot.png             # Bot avatar
├── user.png              # User avatar
├── README.md             # This file
└── ...other files
```

---

## 🛠️ Technologies Used

* **HTML5**
* **CSS3**
* **JavaScript (ES6+)**
* **React (via CDN)**
* **ReactDOM (via CDN)**
* **Babel (for JSX transformation)**

No build tools or NPM setup needed. Everything runs in the browser.

---

## ▶️ How to Run the Project

1. **Clone the repository**

```bash
git clone https://github.com/YOUR-USERNAME/chatbot.git
```

2. **Open the project folder**

```bash
cd chatbot
```

3. **Open `chatbot.html` in a browser**

Just double-click:

```
chatbot.html
```

(Or run a local server if you prefer.)

---

## 🧠 Customizing Chatbot Responses

Edit **react.basic.js**:

```js
const Chatbot = {
  getResponse(input) {
    const message = input.toLowerCase();

    if (message.includes("hello")) {
      return "Hello! How can I help you today?";
    }

    return "I'm still learning! Try asking something else 😊";
  }
};
```

You can add:

* Date/time replies
* Weather API
* Jokes
* OpenAI API
* Math solver
* Anything you want

---

## 📝 Todo / Future Features

* [ ] “Chatbot is typing…” animation
* [ ] Dark mode
* [ ] LocalStorage message history
* [ ] Plug into OpenAI / Gemini / API endpoints
* [ ] Better UI components

---

## 📄 License

This project is licensed under the MIT License.

---

## ⭐ Support

If you find this useful, give the repo a **star ⭐** on GitHub!

---
