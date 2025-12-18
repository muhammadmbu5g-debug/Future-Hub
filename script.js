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
  document.getElementById("dark-refresh").addEventListener("click", loadDarkFantasy);
});
