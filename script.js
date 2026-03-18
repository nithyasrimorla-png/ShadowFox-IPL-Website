// PLAYING XI
const players = [
  "Virat Kohli",
  "Faf du Plessis",
  "Glenn Maxwell",
  "Rajat Patidar",
  "Dinesh Karthik",
  "Cameron Green",
  "Mahipal Lomror",
  "Wanindu Hasaranga",
  "Mohammed Siraj",
  "Reece Topley",
  "Yash Dayal"
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
let likes = 0;
function likeTeam(){
  likes++;
  document.getElementById("like-count").innerText = likes + " Likes ❤️";
}
}
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
  let audio = document.getElementById("sound");
  audio.play();
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