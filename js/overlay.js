function overlay(title, content, img, link, source) 
{
	document.getElementById('overlay').innerHTML = 
	"<div id='inner'> <a><i style=\"float: right\"onclick='deleteOverlay()' class=\"far fa-window-close\"></i></a> <div class = \"row\"> <div style = \"text-align:center\" class = \"col-lg-7\"> <h2>"
	 + title + "</h2> <p>" + content + "</p> <a href=\"" + link + "\">" + source + "<\a> </div> <div class=\"col-lg-5\"> <br><div class = \"image fit\"> <img src=\"" + img + "\">" + "<br></div></div></div></div>";
	 document.getElementById("overlay").style.display = "block";
}

function overlayProject(file) {
    console.log("trying to get " + file + ".json");
    $.getJSON("https://evanli1999.github.io/evanli.me/panels/projects/" + "default" + ".json", function(json) {
        console.log("in callback");
        console.log(json);
        alert("in callback");
    });
    console.log("complete");
}

function deleteOverlay()
{
	document.getElementById("overlay").style.display = "none";
}