function overlay(title, content, img, link, source)
{
	document.getElementById('overlay').innerHTML =
	"<div id='inner'> <a><i style=\"float: right\"onclick='deleteOverlay()' class=\"far fa-window-close\"></i></a> <div class = \"row\"> <div style = \"text-align:center\" class = \"col-lg-7\"> <h2>"
    + title + "</h2> <p>" + content + "</p> <a href=\"" + link + "\">" + source + "<\a> </div> <div class=\"col-lg-5\"> <br><div class = \"image fit\"> <img src=\"" + img + "\">" + "<br></div></div></div></div>";
    document.getElementById("overlay").style.display = "block";
}

var java_icon = "<img style=\"height:30px; display: inline-block\" src=\"https://evanli1999.github.io/evanli.me/Assets/Icons/java.svg\">"
var python_icon = "<img style=\"height:30px; display: inline-block\" src=\"https://evanli1999.github.io/evanli.me/Assets/Icons/python.svg\">"
var cpp_icon = "<img style=\"height:30px; display: inline-block\" src=\"https://evanli1999.github.io/evanli.me/Assets/Icons/cpp.svg\">"
var scala_icon = "<img style=\"height:30px; display: inline-block\" src=\"https://evanli1999.github.io/evanli.me/Assets/Icons/scala.svg\">"

var languages = [
    {l: "c++", i: cpp_icon},
    {l: "java", i: java_icon},
    {l: "scala", i: scala_icon},
    {l: "python", i: python_icon}
]

function parseLanguages(l = "") {
    var ls = "";
    languages.forEach((x) => {
        if(l.includes(x.l)) {
                ls += x.i + "   ";
            }
        });
    return ls;
}

function overlayProject(file = "default") {
    $.getJSON("https://evanli1999.github.io/evanli.me/panels/projects/" + file + ".json", function(json) {
        document.getElementById('overlay').innerHTML =
        "<div id='inner'> <div class=\"row\"><a><i style=\"float: right \"onclick='deleteOverlay()' class=\"far fa-window-close\"></i></a></div> <div class = \"row\" style=\"text-align: center\"> <h2 style=\"text-align: center\">" + json.title + "</h2>" + parseLanguages(json.languages) + "<br><br><div style = \"text-align:center\" class = \"col-lg-7\"><p>" + json.description + "</p> </div> <div class=\"col-lg-5\"> <div class = \"image fit\"><img src=\"" + json.image + "\"></div></div></div></div>";
        document.getElementById("overlay").style.display = "block";
    });
}

function deleteOverlay()
{
	document.getElementById("overlay").style.display = "none";
}

function generateCard(file = "default") {
    var returnvalue = "mt";
    $.getJSON("https://evanli1999.github.io/evanli.me/panels/projects/" + file + ".json", function(json) {
        returnvalue = "abc";
    });
    return returnvalue;
}
