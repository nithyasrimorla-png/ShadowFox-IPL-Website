// ================= PLAYING XI =================
const players = [
  "Virat Kohli",
  "Devdutt Padikkal",
  "Rajat Patidar",
  "Phil Salt",
  "Jitesh Sharma",
  "Krunal Pandya",
  "Tim David",
  "Romario Shepherd",
  "Venkatesh Iyer",
  "Josh Hazelwood",
  "Bhuvaneswar Kumar"
];

const container = document.getElementById("players-container");

if (container) {
  container.innerHTML = "";

  players.forEach(player => {
    const card = document.createElement("div");
    card.classList.add("card");
    card.innerText = player;

    container.appendChild(card);
  });
}


// ================= LOADER =================
window.onload = function () {
  const loader = document.getElementById("loader");
  if (loader) loader.style.display = "none";
};

// ================= POLL =================
function vote(player) {
  document.getElementById("vote-result").innerText =
    "You voted for " + player + " 🔥";
}

// ================= COMMENTS =================
// LOAD COMMENTS FROM STORAGE
function displayComments() {
  const list = document.getElementById("comment-list");
  const comments = JSON.parse(localStorage.getItem("comments")) || [];

  list.innerHTML = "";

  comments.forEach(c => {
    const li = document.createElement("li");
    li.innerText = c;
    list.appendChild(li);
  });
}

// ADD COMMENT
function addComment() {
  const input = document.getElementById("comment-input");
  const text = input.value.trim();

  if (text === "") return;

  const comments = JSON.parse(localStorage.getItem("comments")) || [];
  comments.push(text);

  localStorage.setItem("comments", JSON.stringify(comments));

  input.value = "";
  displayComments();
}

// LOAD WHEN PAGE OPENS
displayComments();

// ================= LIKE BUTTON =================
let likes = localStorage.getItem("likes") || 0;
if (document.getElementById("like-count")) {
  document.getElementById("like-count").innerText = likes + " Likes";
}

function likeTeam() {
  likes++;
  localStorage.setItem("likes", likes);
  document.getElementById("like-count").innerText = likes + " Likes";
}

// ================= QUIZ =================
function quiz(ans) {
  if (ans === "Kohli") {
    document.getElementById("quiz-result").innerText = "Correct 🔥";
  } else {
    document.getElementById("quiz-result").innerText = "Wrong ❌";
  }
}

// ================= SOUND =================
function playSound() {
  const audio = document.getElementById("sound");
  if (!audio) {
    console.log("Audio not found ");
    return;
  }
  audio.play()
    .then(() => console.log("Playing 🔊"))
    .catch(err => console.log("Error:", err));
}
function stopSound() {
  const audio = document.getElementById("sound");

  if (audio) {
    audio.pause();
    audio.currentTime = 0; // reset
  }
}
// ================= COUNTDOWN =================
const nextMatch = new Date("April 10, 2026 15:00:00").getTime();

setInterval(() => {
  const now = new Date().getTime();
  const distance = nextMatch - now;

  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);

  const el = document.getElementById("countdown");
  if (el) {
    el.innerHTML = `${days}d ${hours}h ${minutes}m ${seconds}s`;
  }
}, 1000);

// ================= LOGIN CHECK =================
const username = localStorage.getItem('loggedInUser');

if (!username) {
  alert('Please login first!');
  window.location.href = 'login.html';
} else {
  const welcome = document.createElement('p');
  welcome.innerText = `Welcome, ${username}!`;
  document.querySelector('header').appendChild(welcome);
}

// ================= LOGOUT =================

document.addEventListener("DOMContentLoaded", function () {

  const logoutBtn = document.getElementById("logout-btn");

  if (logoutBtn) {
    logoutBtn.addEventListener("click", function () {
      localStorage.removeItem("loggedInUser");
      alert("Logged out successfully!");
      window.location.href = "login.html";
    });
  }

});

// ================= DARK MODE =================
function toggleMode() {
  document.body.classList.toggle("light");
}

// ================= FAN OF THE DAY =================
const fans = [
  "Nithya ❤️",
  "RCB Warrior 🔥",
  "Kohli Fan 👑",
  "Ee Sala Fan 💥",
  "RCB Army 💪"
];

function showFan() {
  let random = Math.floor(Math.random() * fans.length);
  document.getElementById("fan-name").innerText = fans[random];
}

showFan();

// ================= CHAT SYSTEM =================
let messages = JSON.parse(localStorage.getItem("chat")) || [];

// Add bot only once
if (!messages.some(m => m.name === "RCB Bot")) {
  messages.push({
    name: "RCB Bot",
    msg: "🔥 Welcome to RCB Fan Chat!"
  });
  localStorage.setItem("chat", JSON.stringify(messages));
}

function sendMessage() {
  let name = document.getElementById("chat-name").value;
  let msg = document.getElementById("chat-msg").value;

  if (name === "" || msg === "") {
    alert("Enter name & message!");
    return;
  }

  messages.push({ name, msg });
  localStorage.setItem("chat", JSON.stringify(messages));

  document.getElementById("chat-msg").value = "";

  displayMessages();
}

function displayMessages() {
  let box = document.getElementById("chat-box");
  if (!box) return;

  box.innerHTML = "";

  messages.forEach(m => {
    let div = document.createElement("div");
    div.classList.add("message");
    div.innerHTML = `<b>${m.name}:</b> ${m.msg}`;
    box.appendChild(div);
  });

  box.scrollTop = box.scrollHeight;
}

displayMessages();

// ================= CHART =================
const ctx = document.getElementById('myChart');

if (ctx) {
  new Chart(ctx, {
    type: 'bar',
    data: {
      labels: ["Kohli", "Padikkal", "Phil Salt", "Patidar", "Jitesh"],
      datasets: [{
        label: 'Runs',
        data: [750, 500, 420, 350, 300]
      }]
    },
    options: {
      scales: {
        y: { beginAtZero: true }
      }
    }
  });
}
// SHOW BUTTON WHEN SCROLLING
window.onscroll = function() {
  let btn = document.getElementById("topBtn");

  if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
    btn.style.display = "block";
  } else {
    btn.style.display = "none";
  }
};

// SCROLL TO TOP
function topFunction() {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
}
