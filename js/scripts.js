
function showAlert(){

	alert("Dr. Zoidy sais: Hello everybody!");

}


var timerElement = document.getElementById('timer');

var date = new Date();
timerElement.textContent = date;

setInterval(function(){
	
	var date = new Date();
	timerElement.textContent = date;

}, 1000);




