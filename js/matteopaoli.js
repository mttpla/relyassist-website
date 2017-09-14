// Copyright 2016 - Matteo Paoli, mttpla@gmail.com

$(document).ready(function () {

    $.getJSON("https://api.github.com/repos/mttpla/relyassist-website/commits", function(data) {
	$('.lastcommit').text(data[0].sha.substr(0, 8));
	$('.lastdate').text(data[0].commit.committer.date.replace("T", " ").replace("Z", " "));
	document.getElementById("lasthtmlurl").setAttribute("href",data[0].html_url);
    });

});
