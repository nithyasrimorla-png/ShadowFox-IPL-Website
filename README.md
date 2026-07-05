<div align="center">

# 🏏 RCB Fan Hub
### *Ee Sala Cup Namde — Now It's Digital.*

A frontend fan universe for **Royal Challengers Bengaluru** — built to give every RCB fan a home for match-day energy, player pride, and community banter.


**[Live Demo] :(https://nithyasrimorla-png.github.io/ShadowFox-IPL-Website/login.html)**

</div>

<br>

> *No backend. No frameworks. Just clean HTML, CSS, and JavaScript turned into a fully interactive fan experience — proof that fundamentals, done well, are enough to build something people actually want to use.*

<br>

---

##  Why This Project?

Most IPL fan pages are static — a logo, a schedule, maybe a news feed. **RCB Fan Hub flips that.**

It's built around one idea: *a fan site should feel alive.* That means:

-  Fans get their own **login**, not just a landing page
-  Stats aren't just displayed — they're **charted**
-  Opinions aren't just invited — they're **counted and shown live**
-  The community isn't an afterthought — it's a **built-in chat and comment layer**

Everything runs client-side, powered entirely by **Local Storage** — a deliberate constraint that pushed the architecture toward smart, reusable JavaScript instead of relying on a server.

<br>

---

##  Features

** Access & Identity**
- Local Storage-based Login & Signup
- Persistent sessions across reloads
- Client-side form validation

** Experience Layer**
-  Dark / Light Mode toggle
-  Animated Hero Banner
-  Sticky Navigation
-  Back-to-Top floating button
-  Fully Responsive across devices

** Cricket Core**
-  Playing XI section
-  Match Schedule
-  Next Match Countdown (live ticking)
-  IPL Points Table
-  Latest News feed
-  Player Statistics Chart, powered by **Chart.js**
-  Team Statistics overview

** Fan Engagement**
-  RCB Anthem Audio Player
-  Interactive Quiz with scoring
-  Fan Poll with live results
-  Live Chat (Local Storage-driven)
-  Comment Section
-  Like Button with persistence
-  "Fan of the Day" spotlight

<br>

---

##  Interactive Highlights

<details>
<summary><strong> Live Countdown Timer</strong></summary>
<br>

A real-time countdown to the next RCB fixture, built with native JavaScript `Date` and `setInterval` — no libraries required.
</details>

<details>
<summary><strong> Player Stats, Visualized</strong></summary>
<br>

Player performance isn't just listed in text — it's rendered as interactive **Chart.js** graphs, giving fans a quick visual read on form and impact.
</details>

<details>
<summary><strong> Local Chat Simulation</strong></summary>
<br>

A lightweight live-chat experience simulated entirely through Local Storage — messages persist per browser, showing how far client-side state can go without a backend.
</details>

<details>
<summary><strong> Instant Theme Switching</strong></summary>
<br>

A CSS-variable-driven Dark/Light toggle that repaints the entire UI instantly, with the preference remembered on return visits.
</details>

<br>

---

## 🛠 Tech Stack

-  **HTML5** — semantic structure and accessibility-first markup
-  **CSS3** — Flexbox, Grid, custom properties, transitions
-  **JavaScript (ES6)** — DOM logic, events, and state handling
-  **Chart.js** — player statistics visualization
-  **Local Storage API** — auth, likes, comments, chat, poll data
-  **GitHub Pages** — zero-config static deployment

<br>
---

##  Folder Structure


rcb-fan-hub/
├── index.html
├── login.html
├── signup.html
├── style.css
├── script.js
├── assets/
│   ├── images/
│   ├── audio/
│   └── icons/
└── README.md
```

<br>

---

##  Installation

```bash
# 1. Clone the repo
git clone https://github.com/<your-username>/rcb-fan-hub.git

# 2. Move into the project
cd rcb-fan-hub

# 3. Open it — that's it
open index.html
```

No `npm install`. No build step. No config. Just open the file and you're in.

<br>

---

##  Usage

1. **Sign up** → your details are saved locally in your browser
2. **Log in** → land straight on the fan dashboard
3. Explore the **Playing XI**, **stats charts**, and **points table**
4. Play the **quiz**, cast a **poll vote**, drop a **comment**, hit **like**
5. Hit play on the **anthem** and let the chat roll 🎶

<br>

---

##  Project Highlights

-  Fully modular JavaScript — reusable functions across auth, rendering, and storage
-  Theming handled entirely through CSS custom properties
-  Lightweight — no frameworks, no bloat, fast load times
-  Mobile-first responsive breakpoints throughout

<br>

---

##  Challenges & Learning

<details>
<summary><strong>Simulating multi-feature persistence without a backend</strong></summary>
<br>

Auth, chat, comments, likes, and poll results all needed to *feel* dynamic while living entirely in Local Storage — this meant carefully structuring keys and JSON payloads to avoid collisions and data loss.
</details>

<details>
<summary><strong>Keeping a feature-heavy JS file maintainable</strong></summary>
<br>

With this many interactive pieces, functions were split by responsibility (auth, UI, storage, charts) to keep `script.js` readable and easy to extend.
</details>

<details>
<summary><strong>Building a countdown that survives reloads</strong></summary>
<br>

The timer recalculates from a fixed target date on every load, rather than counting from page-open — so it always stays accurate.
</details>

<br>

**Walking away with:** DOM manipulation at scale, Local Storage architecture, Chart.js integration, responsive design systems, and the discipline of shipping a polished frontend-only product.

<br>

---

##  Future Improvements

-  Firebase Authentication for real, secure accounts
-  Live IPL Score API integration
-  AI-based match outcome predictions
-  Player comparison tool
-  Fantasy team builder
-  Progressive Web App (PWA) + offline support
-  Multi-language support

<br>

---

##  Author

**M. Nithya Sri**

Built as a hands-on exploration of what pure front-end engineering can achieve — no backend, no shortcuts.

<br>

---

## Support the Project

If this project impressed you, inspired you, or helped you learn something —

> **Star the repo.** It costs nothing and means a lot. ⭐

<br>

---

<div align="center">

Made with ❤️ by **M. Nithya Sri**

</div>
