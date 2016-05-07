(function () {
	var xmlhttp = new XMLHttpRequest();
	var url = "http://theastrologer-api.herokuapp.com/api/horoscope/taurus/today";
	xmlhttp.onreadystatechange=function() {
		if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
			myFunction(xmlhttp.responseText);
		}
	}
	xmlhttp.open("GET", url, true);
	xmlhttp.send();
	function myFunction(response) {
		var object = JSON.parse(response);
		var out = "<p>";
		out += object.horoscope + "</p>";
		document.getElementById("id01").innerHTML = out;
	}
	var xmlhttp = new XMLHttpRequest();
	var url = "http://theastrologer-api.herokuapp.com/api/horoscope/gemini/today";
	xmlhttp.onreadystatechange=function() {
		if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
			myFunction(xmlhttp.responseText);
		}
	}
	xmlhttp.open("GET", url, true);
	xmlhttp.send();
	function myFunction(response) {
		var object = JSON.parse(response);
		var out = "<p>";
		out += object.horoscope + "</p>";
		document.getElementById("gemini").innerHTML = out;
	}
	var xmlhttp = new XMLHttpRequest();
	var url = "http://theastrologer-api.herokuapp.com/api/horoscope/cancer/today";
	xmlhttp.onreadystatechange=function() {
		if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
			myFunction(xmlhttp.responseText);
		}
	}
	xmlhttp.open("GET", url, true);
	xmlhttp.send();
	function myFunction(response) {
		var object = JSON.parse(response);
		var out = "<p>";
		out += object.horoscope + "</p>";
		document.getElementById("cancer").innerHTML = out;
	}
	var xmlhttp = new XMLHttpRequest();
	var url = "http://theastrologer-api.herokuapp.com/api/horoscope/leo/today";
	xmlhttp.onreadystatechange=function() {
		if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
			myFunction(xmlhttp.responseText);
		}
	}
	xmlhttp.open("GET", url, true);
	xmlhttp.send();
	function myFunction(response) {
		var object = JSON.parse(response);
		var out = "<p>";
		out += object.horoscope + "</p>";
		document.getElementById("leo").innerHTML = out;
	}
	var xmlhttp = new XMLHttpRequest();
	var url = "http://theastrologer-api.herokuapp.com/api/horoscope/virgo/today";
	xmlhttp.onreadystatechange=function() {
		if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
			myFunction(xmlhttp.responseText);
		}
	}
	xmlhttp.open("GET", url, true);
	xmlhttp.send();
	function myFunction(response) {
		var object = JSON.parse(response);
		var out = "<p>";
		out += object.horoscope + "</p>";
		document.getElementById("virgo").innerHTML = out;
	}
	var xmlhttp = new XMLHttpRequest();
	var url = "http://theastrologer-api.herokuapp.com/api/horoscope/libra/today";
	xmlhttp.onreadystatechange=function() {
		if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
			myFunction(xmlhttp.responseText);
		}
	}
	xmlhttp.open("GET", url, true);
	xmlhttp.send();
	function myFunction(response) {
		var object = JSON.parse(response);
		var out = "<p>";
		out += object.horoscope + "</p>";
		document.getElementById("libra").innerHTML = out;
	}
	var xmlhttp = new XMLHttpRequest();
	var url = "http://theastrologer-api.herokuapp.com/api/horoscope/scorpio/today";
	xmlhttp.onreadystatechange=function() {
		if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
			myFunction(xmlhttp.responseText);
		}
	}
	xmlhttp.open("GET", url, true);
	xmlhttp.send();
	function myFunction(response) {
		var object = JSON.parse(response);
		var out = "<p>";
		out += object.horoscope + "</p>";
		document.getElementById("scorpio").innerHTML = out;
	}
	var xmlhttp = new XMLHttpRequest();
	var url = "http://theastrologer-api.herokuapp.com/api/horoscope/sagittarius/today";
	xmlhttp.onreadystatechange=function() {
		if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
			myFunction(xmlhttp.responseText);
		}
	}
	xmlhttp.open("GET", url, true);
	xmlhttp.send();
	function myFunction(response) {
		var object = JSON.parse(response);
		var out = "<p>";
		out += object.horoscope + "</p>";
		document.getElementById("sagittarius").innerHTML = out;
	}
	var xmlhttp = new XMLHttpRequest();
	var url = "http://theastrologer-api.herokuapp.com/api/horoscope/capricorn/today";
	xmlhttp.onreadystatechange=function() {
		if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
			myFunction(xmlhttp.responseText);
		}
	}
	xmlhttp.open("GET", url, true);
	xmlhttp.send();
	function myFunction(response) {
		var object = JSON.parse(response);
		var out = "<p>";
		out += object.horoscope + "</p>";
		document.getElementById("capricorn").innerHTML = out;
	}
	var xmlhttp = new XMLHttpRequest();
	var url = "http://theastrologer-api.herokuapp.com/api/horoscope/aquarius/today";
	xmlhttp.onreadystatechange=function() {
		if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
			myFunction(xmlhttp.responseText);
		}
	}
	xmlhttp.open("GET", url, true);
	xmlhttp.send();
	function myFunction(response) {
		var object = JSON.parse(response);
		var out = "<p>";
		out += object.horoscope + "</p>";
		document.getElementById("aquarius").innerHTML = out;
	}
	var xmlhttp = new XMLHttpRequest();
	var url = "http://theastrologer-api.herokuapp.com/api/horoscope/pisces/today";
	xmlhttp.onreadystatechange=function() {
		if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
			myFunction(xmlhttp.responseText);
		}
	}
	xmlhttp.open("GET", url, true);
	xmlhttp.send();
	function myFunction(response) {
		var object = JSON.parse(response);
		var out = "<p>";
		out += object.horoscope + "</p>";
		document.getElementById("pisces").innerHTML = out;
	}
	var xmlhttp = new XMLHttpRequest();
	var url = "http://theastrologer-api.herokuapp.com/api/horoscope/aries/today";
	xmlhttp.onreadystatechange=function() {
		if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
			myFunction(xmlhttp.responseText);
		}
	}
	xmlhttp.open("GET", url, true);
	xmlhttp.send();
	function myFunction(response) {
		var object = JSON.parse(response);
		var out = "<p>";
		out += object.horoscope + "</p>";
		document.getElementById("aries").innerHTML = out;
	}
})()