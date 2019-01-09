var active = "about";

function onNavbarClick(option) {
    switch (option) {
        case "about":
        case "projects":
        case "photography":
        case "contact":
            active = option;
            break;
        default:
            active = "about"
    }
    $("#mainContentPanel").load("https://evanli1999.github.io/evanli.me/panels/" + active + ".html");
}

$(function() {
    $("#mainContentPanel").load("https://evanli1999.github.io/evanli.me/panels/" + active + ".html");
})