function login() {
    var player_1name = document.getElementById("player_1name").value;
    var player_2name = document.getElementById("player_2name").value;

    localStorage.setItem("player_1name",player_1name);
    localStorage.setItem("player_2name",player_2name);

    window.location="game_page.html";
}
