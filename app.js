const quote = document.querySelector('.quote');
const author = document.querySelector('.author');
//previous and next buttons 
const prev = document.getElementById("prev");
const next = document.getElementById("next");

function test() {

fetch("https://type.fit/api/quotes")
  .then(function(response) {
    return response.json();
	
  })
  .then(function(data) {
	var random = data[Math.floor(Math.random() * data.length)];
    quote.textContent = random.text;
	if(random.author == null) {
	
		author.textContent = " Written By - Anonymous";
	} else {
		author.textContent = "Written By " + random.author;
	}
	
  });
}
test();

var nClicks = 0;
var pClicks = 0
function change() {
	fetch("https://type.fit/api/quotes")
  .then(function(response) {
    return response.json();
	
  })
  .then(function(data) {
    var random = Math.floor(Math.random() * data.length);
	console.log(data.indexOf(data[random]))
    quote.textContent = data[random].text;
	random.author == null ? author.textContent = " Written By - Anonymous": author.textContent = "Written By - " + data[random].author;
	
	next.style.opacity = "1";
	prev.style.opacity = "1";
	  
	next.addEventListener("click", function() {
		random++;
		 quote.textContent = data[random].text;
	random.author == null ? author.textContent = " Written By - Anonymous": author.textContent = "Written By - " + data[random].author;
		console.log(data.indexOf(data[random]))
	})
	 
	prev.addEventListener("click", function() {
		random--;
		if(data.indexOf(data[random]) !== -1) {
		 quote.textContent = data[random].text;
	random.author == null ? author.textContent = " Written By - Anonymous": author.textContent = "Written By - " + data[random].author;
		console.log(data.indexOf(data[random]))
		} 
	 
	})
	  
	
  });
}


