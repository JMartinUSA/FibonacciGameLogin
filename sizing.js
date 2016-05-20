var vh,
	vw,
	vmin,
	vmax;

function sizeHome(){
	sizeID('container', 100, 100);
	var imgSize = 70*vw+'px';
	document.getElementsByTagName('img')[0].style.height = imgSize;
	marginID('welcomeIcon','','','',15);
	positionID('welcomeIcon', 5,'','','')

	for(i=1; i < 5; i++){
		sizeID('welcomeSlide'+i, 6, 40);
		marginID('welcomeSlide'+i, -2)
		positionID('welcomeSlide'+i, -2, 30,'',30);
		document.getElementById('welcomeSlide'+i).style.fontSize=5*vh+'px';
	}
}
function sizeClock(){
	sizeID('container', 100, 100);
}
function sizeGame(){
	sizeID('container', 100, 100);
	sizeID('clock', 75, 66.66);
	positionID('bottomButtons', 75,0,0,0)
	// Sizing Buttons
	for(i=0;i<12;i++){
		document.getElementById('rightButton'+i).style.height = 12.5*vh-5+"px";
		document.getElementById('rightButton'+i).style.width = 16.66*vw-5+"px";
		document.getElementById('rightButton'+i).style.fontSize = 9.5*vh-5-7+"px";
		document.getElementById('rightButton'+i).style.paddingTop = 1.3*vh+"px";

		document.getElementById('bottomButton'+i).style.height = 12.5*vh-5+"px";
		document.getElementById('bottomButton'+i).style.width = 16.66*vw-5+"px";
		document.getElementById('bottomButton'+i).style.fontSize = 9.5*vh-5-8+"px";
		document.getElementById('bottomButton'+i).style.paddingTop = 1.3*vh+"px";
	}
	sizeID('statButton', 7, 46.2);
	positionID('statButton', 5, 0,0,9.9);
	document.getElementById('statButton').style.fontSize = 6*vh+"px";
	sizeID('submitButton', 7, 46.2);
	positionID('submitButton', 61.5, 0,0,9.9);
	document.getElementById('submitButton').style.fontSize = 6*vh+"px";
}

function sizeResult(){
	sizeID('overlay', 100, 100);
	sizeID('resultText1', 10, 100);
	positionID('resultText1', 16);
	document.getElementById('resultText1').style.fontSize = 6.5*vh+"px";
	document.getElementById('resultText1').style.paddingTop = 1.5*vh+"px";
	sizeID('resultOutput', 10, 100);
	positionID('resultOutput', 24.5);
	document.getElementById('resultOutput').style.fontSize = 7.5*vh+"px";
	document.getElementById('resultOutput').style.paddingTop = 1.5*vh+"px";
	sizeID('resultText2', 10, 100);
	positionID('resultText2', 35);
	document.getElementById('resultText2').style.fontSize = 6.5*vh+"px";
	document.getElementById('resultText2').style.paddingTop = 1.5*vh+"px";
	sizeID('percentCorrect', 10, 100);
	positionID('percentCorrect', 60);
	document.getElementById('percentCorrect').style.fontSize = 6.5*vh+"px";
	document.getElementById('percentCorrect').style.paddingTop = 1.5*vh+"px";
	sizeID('continue', 10, 70);
	positionID('continue', 80,'','',15);
	document.getElementById('continue').style.fontSize = 8*vh+"px";
}
function sizeMenu(){
	var topposition = [20,40,60,80];
	for(i=0;i<4;i++){
		sizeID('menuButton'+i, 7.5, 50);
		positionID('menuButton'+i, topposition[i], 0,0,25);
		document.getElementById('menuButton'+i).style.fontSize = 6*vh+'px';
	};
	sizeID('menu',100,100);
	sizeID('transparentCover',100,100);
}
function sizeStats(){
	sizeID('stats',100,100);
	document.getElementById('stats').style.fontSize=4*vh+'px';
	sizeID('backButton', 8, 50);
	positionID('backButton', 85,'','',25);
	document.getElementById('backButton').style.fontSize = 6*vh+"px";
}

function fullsize(){
	sizeID('container', 100, 100);
}
function sizeID(element, height, width){
	height = height*vh+'px';
	document.getElementById(element).style.height = height;
	width = width*vw+'px';
	document.getElementById(element).style.width = width;
}

/*function sizeID(param1, param2, param3){
	console.log(param1+" "+param2+" "+param3);
	param3height = param3*vh+'px';
	console.log(param3height);
	if(param2 == 'height'){
		param3height = param3*vh+'px';
		console.log(param3height);
		document.getElementById(param1).style.height = param3height;
	}else if(param2 == 'width'){
		param3width = param3*vw+'px';
		console.log(param3width);
		document.getElementById(param1).style.width = param3width;
	}
}*/

function marginID(element, top, right, bottom, left){
	//console.log("element:"+element+" top:"+top+" right:"+right+" bottom:"+bottom+" left:"+left)
	
	marginT = top*vh+'px';
	document.getElementById(element).style.marginTop = marginT;
	marginR = right*vw+'px';
	document.getElementById(element).style.marginRight = marginR;
	marginB = bottom*vw+'px';
	document.getElementById(element).style.marginBottom = marginB;
	marginL = left*vw+'px';
	document.getElementById(element).style.marginLeft = marginL;
	
}
function positionID(element, top, right, bottom, left){
	//console.log("element:"+element+" top:"+top+" right:"+right+" bottom:"+bottom+" left:"+left)
	
	positionT = top*vh+'px';
	document.getElementById(element).style.top = positionT;
	positionR = right*vw+'px';
	document.getElementById(element).style.right = positionR;
	positionB = bottom*vw+'px';
	document.getElementById(element).style.bottom = positionB;
	positionL = left*vw+'px';
	document.getElementById(element).style.left = positionL;
	
}


/*function marginID(param1, param2, param3){
	console.log(param1+" "+param2+" "+param3);
	if(param2 == 'marginTop'){
		margin = param3*vh+'px';
		document.getElementById(param1).style.marginTop = margin;
	}else if(param2 == 'marginRight'){
		margin = param3*vw+'px';
		document.getElementById(param1).style.marginRight = margin;
	}else if(param2 == 'marginBottom'){
		margin = param3*vh+'px';
		document.getElementById(param1).style.marginBottom = margin;
	}else if(param2 == 'marginLeft'){
		margin = param3*vh+'px';
		document.getElementById(param1).style.marginLeft = margin;
	}else{
		marginLR = param3*vh
	}
}*/

function calcWindowSize(){
	vh = window.innerHeight / 100;
	vw = window.innerWidth / 100;
	if(vh > vw){
		vmin = vw;
		vmax = vh;
	}else{
		vmin = vh;
		vmax = vw;
	};
	console.log("Inner Height:"+window.innerHeight+" vh: "+vh);
	console.log("Inner Width:"+window.innerWidth+" vw: "+vw);
	console.log("vmin: "+vmin+" vmax: "+vmax);
}