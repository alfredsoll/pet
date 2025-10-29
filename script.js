const clientId = "1433054522170802342"; // Discord app
const redirectUri = "https://alfredsoll.github.io/pet/dashboard.html";

document.getElementById("loginBtn").addEventListener("click", () => {
    const scope = "identify guilds";
    const discordAuthUrl = `https://discord.com/api/oauth2/authorize?client_id=${clientId}&redirect_uri=${encodeURIComponent(redirectUri)}&response_type=token&scope=${encodeURIComponent(scope)}`;
    window.location.href = discordAuthUrl;
});
