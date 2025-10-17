// Optional: Display the current time
const card = document.querySelector('[data-testid="profile-card"]');
const date = new Date();

const timeEl = document.createElement('p');
timeEl.setAttribute('data-testid', 'current-time');
timeEl.textContent = `Current Time: ${date.toLocaleTimeString()}`;
timeEl.style.marginTop = "1rem";
timeEl.style.opacity = "0.8";

card.appendChild(timeEl);
