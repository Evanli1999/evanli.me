function overlay(title, content, img, link, source) 
{
	document.getElementById('overlay').innerHTML = 
	"<div id='inner'> <a><i style=\"float: right\"onclick='deleteOverlay()' class=\"far fa-window-close\"></i></a> <div class = \"row\"> <div style = \"text-align:center\" class = \"col-lg-7\"> <h2>"
	 + title + "</h2> <p>" + content + "</p> <a href=\"" + link + "\">" + source + "<\a> </div> <div class=\"col-lg-5\"> <br><div class = \"image fit\"> <img src=\"" + img + "\">" + "<br></div></div></div></div>";
	 document.getElementById("overlay").style.display = "block";
}

function deleteOverlay()
{

	document.getElementById("overlay").style.display = "none";
}