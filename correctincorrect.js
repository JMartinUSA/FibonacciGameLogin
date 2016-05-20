function answerCorrect(){
	console.log('correct');
	sessionCorrect ++;
	calculateSessionAccuracy();
	document.getElementById('gameResult').innerHTML = '<!-- Sub Menu -->\
	<link href="submenus.css" rel="stylesheet"></style>\
	<div id="overlay">\
		<div class="resultText" id="resultText1">You are</div><br>\
		<div id="resultOutput" class="correct">Correct!!</div><br>\
		<div class="resultText" id="resultText2">Nice work,<br>\
		your accuracy <br>is</div><br>\
		<div id="percentCorrect" class="colorGreen">'+sessionAccuracy+'%</div>\
		<div id="continue" onclick="nextLevel()">Continue</div>\
	</div>';
	sizeResult();

	if(LOGGEDIN){
		var xhttp = new XMLHttpRequest();
		xhttp.onreadystatechange = function(){
			if (xhttp.readyState == 4 && xhttp.status == 200){
				var fibonacciData = JSON.parse(xhttp.responseText);
				receiveData(fibonacciData);
			}
		};
		console.log('ID: '+ID);
		xhttp.open("GET", "http://jaymartmedia.com/fibonacci/correctincorrect.php?ID="+ID, true);
		xhttp.send();

		function receiveData(fibonacciData){
			var data = fibonacciData[0];
			var correctData = data.CORRECT;
			console.log('correctData: '+correctData);
			correctData++;
			CORRECTUSER = correctData;

			uploadData();

			function uploadData(){
				var xhttp = new XMLHttpRequest();
				xhttp.onreadystatechange = function(){
					if (xhttp.readyState == 4 && xhttp.status == 200){
						var fibonacciData = xhttp.responseText;
					}
				};
				console.log('ID: '+ID);
				xhttp.open("GET", "http://jaymartmedia.com/fibonacci/correctincorrect.php?ID="+ID+"&CORRECT="+correctData, true);
				xhttp.send();
			}

		}
	}
}
function answerIncorrect(){
	console.log('incorrect');
	sessionIncorrect++;
	calculateSessionAccuracy();
	document.getElementById('gameResult').innerHTML = '<!-- Sub Menu -->\
	<link href="submenus.css" rel="stylesheet"></style>\
	<div id="overlay">\
		<div class="resultText" id="resultText1">You are</div><br>\
		<div id="resultOutput" class="incorrect">Incorrect!!</div><br>\
		<div class="resultText" id="resultText2">Nice try,<br>\
		your accuracy <br>is</div><br>\
		<div id="percentCorrect" class="colorRed">'+sessionAccuracy+'%</div>\
		<div id="continue" onclick="nextLevel()">Continue</div>\
	</div>';
	sizeResult();

	if(LOGGEDIN){
		var xhttp = new XMLHttpRequest();
		xhttp.onreadystatechange = function(){
			if (xhttp.readyState == 4 && xhttp.status == 200){
				var fibonacciData = JSON.parse(xhttp.responseText);
				receiveData(fibonacciData);
			}
		};
		console.log('ID: '+ID);
		xhttp.open("GET", "http://jaymartmedia.com/fibonacci/correctincorrect.php?ID="+ID, true);
		xhttp.send();

		function receiveData(fibonacciData){
			var data = fibonacciData[0];
			var incorrectData = data.INCORRECT;
			console.log('incorrectData: '+incorrectData);
			incorrectData++;
			INCORRECTUSER = incorrectData;

			uploadData();

			function uploadData(){
				var xhttp = new XMLHttpRequest();
				xhttp.onreadystatechange = function(){
					if (xhttp.readyState == 4 && xhttp.status == 200){
						var fibonacciData = xhttp.responseText;
					}
				};
				console.log('ID: '+ID);
				xhttp.open("GET", "http://jaymartmedia.com/fibonacci/correctincorrect.php?ID="+ID+"&INCORRECT="+incorrectData, true);
				xhttp.send();
			}

		}
	}		
}