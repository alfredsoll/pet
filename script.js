const clientId = "DIN_CLIENT_ID_HER"; // Discord app
const redirectUri = "https://DIT_GITHUB_BRUGERNAVN.github.io/pet-dashboard/dashboard.html";

document.getElementById("loginBtn").addEventListener("click", () => {
    const scope = "identify guilds";
    const discordAuthUrl = `https://discord.com/api/oauth2/authorize?client_id=${clientId}&redirect_uri=${encodeURIComponent(redirectUri)}&response_type=token&scope=${encodeURIComponent(scope)}`;
    window.location.href = discordAuthUrl;
});
