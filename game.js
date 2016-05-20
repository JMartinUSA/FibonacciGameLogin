//tbd
//var percentCorrect = '99%';

var selectedHours = 0,
	selectedMinutes = 0;

var sessionCorrect = 0,
	sessionIncorrect = 0,
	sessionRow = 0,
	sessionRecordRow = 0,
	sessionAccuracy = 100;

var CORRECTUSER,
	INCORRECTUSER,
	ACCURACYUSER;

// I'm working on correcting the accuracy calculations.. before my surgery;
function calculateSessionAccuracy(){
	sessionAccuracy = Math.ceil(100*(sessionCorrect/(sessionCorrect+sessionIncorrect)));
	if(isNaN(sessionAccuracy)){
		sessionAccuracy = 100;
	}
}
function calculateUSERACCURACY(){
	var c = Number(CORRECTUSER);
	var i = Number(INCORRECTUSER);
	ACCURACYUSER = Math.ceil(100*(c/(c+i)));
	if(isNaN(ACCURACYUSER)){
		ACCURACYUSER = 100;
	}	
	console.log('user accuracy: '+ACCURACYUSER);
}

function submitAnswer(){
	if(hours == selectedHours && minutes == selectedMinutes){
		answerCorrect();
	}else{
		answerIncorrect();
	}
	selectedHours = 0;
	selectedMinutes = 0;
}

function nextLevel(){
	Game();
	document.getElementById('gameResult').innerHTML = '';
}

function highlightHour(element, hoursIs){
	element.style.background=rBHighlighted;
	selectedHours = hoursIs;
	console.log(selectedHours);
}
function highlightMinute(element, minutesIs){
	element.style.background=bBHighlighted;
	selectedMinutes = minutesIs;
	console.log(selectedMinutes);
}


function clearHours(){
	selectedHours = 0;
	for(i = 0; i < 12; i++){
		//console.log("right"+i);
		document.getElementById("rightButton"+i).style.background=rBBackground;
	}
}
function clearMinutes(){
	selectedMinutes = 0;
	for(i = 0; i < 12; i++){
		//console.log("bottom"+i);
		document.getElementById("bottomButton"+i).style.background=bBBackground;
	}
}
function resetSession(){
	sessionCorrect = 0;
	sessionIncorrect = 0;
	sessionRow = 0;
	sessionRecordRow = 0;
	sessionAccuracy = 100;
}