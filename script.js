const app = document.getElementById("app");
const topEmoji = document.getElementById("topEmoji");

function todayChoice(choice) {
  if (choice === "birthday") {
    showWhoIsMamta();
  } else if (choice === "anniversary") {
    showMessage(
      "💍😂",
      "Anniversary hai teri<br>aur humko bataya bhi nahi? 😂",
      "Haan bhai, Anniversary! Ab has le 🤣"
    );
  } else {
    showMessage(
      "😶",
      "Apna special din bhul gyi? 😂",
      "Nothing Special bolke khud hi apna special din bhul gayi! 🤦‍♀️"
    );
  }
}

function showWhoIsMamta() {
  topEmoji.textContent = "🎂";
  app.innerHTML = `
    <div class="message">
      <h1>Ek important sawaal... 👀</h1>
      <p class="subtitle">Who is Mamta? 🤔</p>

      <div class="options">
        <button onclick="mamtaChoice(1)">💖 My Best Friend</button>
        <button onclick="mamtaChoice(2)">🙂 Friend</button>
        <button onclick="mamtaChoice(3)">😤 Nothing</button>
      </div>
    </div>
  `;
}

function mamtaChoice(choice) {
  if (choice === 1) {
    bestFriendAnimation();
  } else if (choice === 2) {
    showMessage(
      "🎂",
      "Happy Birthday Dear! 🥳",
      "Have a great day! ✨"
    );
    confetti();
  } else {
    showMessage(
      "😤",
      "Mereko dost bhi nhi samjhti? 😭",
      "Gaddar! 😂"
    );
  }
}

function bestFriendAnimation() {
  topEmoji.textContent = "🎉";
  app.innerHTML = `
    <div class="message">
      <div class="big">🎊🎂🎈</div>
      <h1>WAIT... WAIT... 👀</h1>
      <p>Best friend ka answer diya hai...<br>toh wish bhi special honi chahiye! 💖</p>
      <p>Loading happiness... ✨</p>
    </div>
  `;

  confetti();

  setTimeout(() => {
    topEmoji.textContent = "💖";
    app.innerHTML = `
      <div class="message">
        <div class="big">🎂🥳💐</div>
        <h1>VERY HAPPY BIRTHDAY! 🎉</h1>
        <p>
          From Mamta 💖<br><br>
          God bless you! 🙏✨<br>
          Enjoy your day! 🥳<br>
          Always stay happy! ❤️
        </p>
        <div class="big">🎁🎈💫</div>
        <button class="back" onclick="location.reload()">🔄 Again</button>
      </div>
    `;
    confetti();
  }, 2500);
}

function showMessage(emoji, heading, text) {
  topEmoji.textContent = emoji;
  app.innerHTML = `
    <div class="message">
      <div class="big">${emoji}</div>
      <h1>${heading}</h1>
      <p>${text}</p>
      <button class="back" onclick="location.reload()">🔄 Go Back</button>
    </div>
  `;
}

function confetti() {
  const symbols = ["🎉", "🎊", "✨", "💖", "🎈", "🥳", "💕"];
  for (let i = 0; i < 55; i++) {
    const item = document.createElement("div");
    item.className = "confetti";
    item.textContent = symbols[Math.floor(Math.random() * symbols.length)];
    item.style.left = Math.random() * 100 + "vw";
    item.style.animationDuration = (2 + Math.random() * 3) + "s";
    item.style.animationDelay = Math.random() * 0.8 + "s";
    item.style.fontSize = (14 + Math.random() * 16) + "px";
    document.body.appendChild(item);

    setTimeout(() => item.remove(), 5500);
  }
}

function createBackgroundHearts() {
  const container = document.getElementById("hearts");
  const hearts = ["♥", "♡", "💗", "💖"];
  for (let i = 0; i < 18; i++) {
    const heart = document.createElement("div");
    heart.className = "heart";
    heart.textContent = hearts[Math.floor(Math.random() * hearts.length)];
    heart.style.left = Math.random() * 100 + "vw";
    heart.style.animationDuration = (6 + Math.random() * 8) + "s";
    heart.style.animationDelay = Math.random() * 7 + "s";
    container.appendChild(heart);
  }
}

createBackgroundHearts();
