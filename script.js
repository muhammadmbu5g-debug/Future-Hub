{
  "entries": [
    {
      "type": "fantasy",
      "title": "Whispers of the Ruined Keep",
      "text": "Each midnight, the keep’s stones hum with names of kings who vanished without graves."
    },
    {
      "type": "history",
      "title": "Echoes of the Library of Alexandria",
      "text": "Scholars once walked miles to read a single scroll—proof that knowledge can outlive empires."
    },
    {
      "type": "fantasy",
      "title": "The Lantern of Ash",
      "text": "When the lantern burns black, it lights paths that were never meant for the living."
    },
    {
      "type": "history",
      "title": "The Silk Road’s Pulse",
      "text": "Gold and ideas traveled together—merchants carried maps, monks carried myths."
    }
  ]
}
<script src="script.js"></script>
async function loadDarkFantasy() {
  const container = document.getElementById("dark-content");
  try {
    container.innerHTML = "<p>Loading a tale...</p>";
    const res = await fetch("./dark_fantasy.json");
    const data = await res.json();

    const list = data.entries;
    const random = list[Math.floor(Math.random() * list.length)];

    container.innerHTML = `
      <article>
        <h3>${random.title}</h3>
        <p>${random.text}</p>
        <small>Type: ${random.type}</small>
      </article>
    `;
  } catch (err) {
    container.innerHTML = `<p style="color:red;">Error: ${err.message}</p>`;
  }
}

document.addEventListener("DOMContentLoaded", () => {
  loadDarkFantasy();
 // Attach the refresh button to the function
document.getElementById("dark-refresh").addEventListener("click", loadDarkFantasy);

// Optionally load a tale automatically when the page opens
window.addEventListener("DOMContentLoaded", loadDarkFantasy);
async function loadAITrends() {
  const container = document.getElementById("ai-content");
  try {
    container.innerHTML = "<p>Loading AI update...</p>";
    const res = await fetch("./ai_trends.json");
    const data = await res.json();

    const list = data.entries;
    const random = list[Math.floor(Math.random() * list.length)];

    container.innerHTML = `
      <article>
        <h3>${random.title}</h3>
        <p>${random.text}</p>
      </article>
    `;
  } catch (error) {
    container.innerHTML = "<p>Failed to load AI update.</p>";
  }
}

// ✅ Attach button + auto-load
document.getElementById("ai-refresh").addEventListener("click", loadAITrends);
window.addEventListener("DOMContentLoaded", loadAITrends);
// 📰 Anime News loader
async function loadAnimeNews() {
  const container = document.getElementById("anime-content");
  try {
    container.innerHTML = "<p>Loading anime update...</p>";
    const res = await fetch("./anime_news.json");
    const data = await res.json();

    const list = data.entries;
    const random = list[Math.floor(Math.random() * list.length)];

    container.innerHTML = `
      <article>
        <h3>${random.title}</h3>
        <p>${random.text}</p>
      </article>
    `;
  } catch (error) {
    container.innerHTML = "<p>Failed to load anime update.</p>";
  }
}
document.getElementById("anime-refresh").addEventListener("click", loadAnimeNews);
window.addEventListener("DOMContentLoaded", loadAnimeNews);

// 🌤️ Weather loader
async function loadWeather() {
  const container = document.getElementById("weather-content");
  const apiKey = "ef617cdcf2dfc757520ae8c4367d8841"; // ✅ Your API key
  const city = "Wah"; // ← You can change this to any city

  try {
    container.innerHTML = "<p>Loading weather...</p>";
    const res = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`);
    const data = await res.json();

    const temp = data.main.temp;
    const desc = data.weather[0].description;
    const icon = data.weather[0].icon;

    container.innerHTML = `
      <p><strong>${city}</strong>: ${temp}°C, ${desc}</p>
      <img src="https://openweathermap.org/img/wn/${icon}@2x.png" alt="${desc}" />
    `;
  } catch (error) {
    container.innerHTML = "<p>Failed to load weather.</p>";
  }
}
// 📰 Latest News loader
async function loadNews() {
  const container = document.getElementById("news-content");
  const apiKey = "c591aa9f6e0d4a1aa5edc01e1e7b10bd"; // ✅ Your NewsAPI key
  const url = `https://newsapi.org/v2/top-headlines?country=us&apiKey=${apiKey}`;

  try {
    container.innerHTML = "<p>Loading news...</p>";
    const res = await fetch(url);
    const data = await res.json();

    if (data.articles && data.articles.length > 0) {
      const headlines = data.articles.slice(0, 5) // show top 5
        .map(article => `
          <article>
            <h3>${article.title}</h3>
            <p>${article.description || ""}</p>
            <a href="${article.url}" target="_blank">Read more</a>
          </article>
        `).join("");

      container.innerHTML = headlines;
    } else {
      container.innerHTML = "<p>No news found.</p>";
    }
  } catch (error) {
    container.innerHTML = "<p>Failed to load news.</p>";
  }
}
// Auto-refresh every 5 minutes
setInterval(() => {
  loadDarkFantasy();   // your function for Dark Fantasy
  loadAITrends();      // your function for AI Trends
  loadAnimeNews();     // your function for Anime News
}, 300000); // 300000 ms = 5 minutes
