// PLAYING XI
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

players.forEach(player => {
  const card = document.createElement("div");
  card.classList.add("card");

  card.innerHTML = `
    <img src="${player.img}" alt="${player.name}">
    <h3>${player.name}</h3>
  `;

  container.appendChild(card);
});
// Clear before adding (important)
container.innerHTML = "";

// Add players
players.forEach(player => {
  const div = document.createElement("div");
  div.classList.add("card");
  div.innerHTML = `<h3>${player}</h3>`;
  container.appendChild(div);
});
function showPlayer(name, role, runs){
  alert(`${name}\nRole: ${role}\nRuns: ${runs}`);
}

// FAN POL
function vote(player) {
  document.getElementById("vote-result").innerText =
    "You voted for " + player + " 🔥";
}
window.onload = function(){
  document.getElementById("loader").style.display = "none";
}

// COMMENTS
function addComment() {
  const input = document.getElementById("comment");
  const ul = document.getElementById("comments");

  if (input.value !== "") {
    const li = document.createElement("li");
    li.textContent = input.value;
    li.innerHTML = "🔥 " + input.value;
    ul.appendChild(li);
    input.value = "";
  }
  function showPopup(player){
  document.getElementById("popup").style.display = "flex";
  document.getElementById("p-name").innerText = player.name;
  document.getElementById("p-role").innerText = "Role: " + player.role;
  document.getElementById("p-runs").innerText = "Runs: " + player.runs;
}

function closePopup(){
  document.getElementById("popup").style.display = "none";
}
  card.onclick = () => showPopup(player);
  // POLL
function vote(player){
  document.getElementById("vote-result").innerText =
    player + " is leading 🔥";
}

// COMMENTS
function addComment(){
  const commentInput = document.getElementById('comment');
  const commentText = commentInput.value.trim();
  if(!commentText) return;

  const username = localStorage.getItem('loggedInUser') || 'Guest';
  const commentList = document.getElementById('comments');
  
  const li = document.createElement('li');
  li.innerText = `${username}: ${commentText}`;
  commentList.appendChild(li);
  
  commentInput.value = '';
}

// LIKE BUTTON
let likes = localStorage.getItem("likes") 
  ? parseInt(localStorage.getItem("likes")) 
  : 0;

// Show likes on page load
document.getElementById("like-count").innerText = likes + " Likes";
function likeTeam() {
  likes++;
  localStorage.setItem("likes", likes);
  document.getElementById("like-count").innerText = likes + " Likes";
}
}
//Increase Likes
function likeTeam(){
  let likes = localStorage.getItem("likes") || 0;
  likes++; // increase count
  localStorage.setItem("likes", likes);
  document.getElementById("like-count").innerText = likes + " Likes";
}
//
function quiz(ans){
  if(ans === "Kohli"){
    document.getElementById("result").innerText = "Correct 🔥";
  } else {
    document.getElementById("result").innerText = "Wrong ❌";
  }
}
window.onload = () => {
  document.getElementById("loader").style.display = "none";
};
function playSound(){
  const audio = document.getElementById("sound");
  
  if(audio){
    audio.play().catch(err => console.log("Audio error:", err));
  } else {
    console.log("Audio element not found");
  }
}
function stopSound(){
  let audio = document.getElementById("sound");
  audio.pause();
}
let votes = {kohli:0, maxwell:0};

function vote(player){
  votes[player]++;
  let total = votes.kohli + votes.maxwell;

  document.getElementById("vote-result").innerText =
    `Kohli: ${Math.round((votes.kohli/total)*100)}%
     Maxwell: ${Math.round((votes.maxwell/total)*100)}%`;
}
// Set the date for the next match
const nextMatch = new Date("April 10, 2026 15:00:00").getTime();

const countdown = setInterval(() => {
  const now = new Date().getTime();
  const distance = nextMatch - now;

  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000*60*60));
  const minutes = Math.floor((distance % (1000*60*60)) / (1000*60));
  const seconds = Math.floor((distance % (1000*60)) / 1000);

  document.getElementById("countdown").innerHTML =
    `${days}d ${hours}h ${minutes}m ${seconds}s`;

  if (distance < 0) {
    clearInterval(countdown);
    document.getElementById("countdown").innerHTML = "Match is Live!";
  }
}, 1000);
setInterval(()=>{
  document.getElementById("score").innerText =
    "RCB: " + Math.floor(Math.random()*200) + "/2 (15 overs)";
},3000);

// Check if logged in
const username = localStorage.getItem('loggedInUser');
if(!username){
  alert('Please login first!');
  window.location.href = 'login.html';
} else {
  // Show username in header
  const welcome = document.createElement('p');
  welcome.innerText = `Welcome, ${username}!`;
  document.querySelector('header').appendChild(welcome);
}

// Logout button
document.getElementById('logout-btn').addEventListener('click', function(){
  localStorage.removeItem('loggedInUser');
  alert('Logged out!');
  window.location.href = 'login.html';
});
//adding commentss without diappearing
function addComment(){
  let comment = document.getElementById("comment").value;

  let comments = JSON.parse(localStorage.getItem("comments")) || [];
  comments.push(comment);

  localStorage.setItem("comments", JSON.stringify(comments));
  displayComments();
}

function displayComments(){
  let comments = JSON.parse(localStorage.getItem("comments")) || [];
  let list = document.getElementById("comments");
  list.innerHTML = "";

  comments.forEach(c=>{
    let li = document.createElement("li");
    li.innerText = c;
    list.appendChild(li);
  });
}

displayComments();

//MODE
function toggleMode(){
  document.body.classList.toggle("light");
}
//Notification
setTimeout(()=>{
  alert("🔥 Match starts in 1 hour!");
},5000);

//Add back to top button
function topFunction(){
  window.scrollTo({top: 0, behavior: "smooth"});
}
//Player Charts
const ctx = document.getElementById('myChart');

new Chart(ctx, {
  type: 'bar',
  data: {
    labels: [
      "Kohli",
      "Padikkal",
      "Patidar",
      "Phil Salt",
      "Tim David"
    ],
    datasets: [{
      label: 'Runs',
      data: [7500, 4000, 2700, 900, 4500],
      borderWidth: 1
    }]
  },
  options: {
    scales: {
      y: { 
        beginAtZero: true
      }
    }
  }
});

// Fan-Day
const fans = [
  "Nithya ❤️",
  "RCB Warrior 🔥",
  "Kohli Fan 👑",
  "Ee Sala Fan 💥",
  "RCB Army 💪"
];
function showFan(){
  let random = Math.floor(Math.random() * fans.length);
  document.getElementById("fan-name").innerText = fans[random];
}
showFan();
