var active = "about";
var prod = "http://evanli.me/panels/";
var test = "https://evanli1999.github.io/evanli.me/panels/"

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
    $("#mainContentPanel").load(test + active + ".html");
}

$(function() {
    $("#mainContentPanel").load(test + active + ".html");
})