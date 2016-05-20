function testing(){
	document.getElementById('body').innerHTML = 'hello'+hours+"world\
	";
}

function addStylesheet(){
	document.getElementById('sheets').innerHTML="<link href=\"testing.css\" rel=\"stylesheet\" />";
};

function addSheet(element){
	document.getElementById('sheets').innerHTML+="<link href='"+element+".css' rel=stylesheet />"; 
};
function clearSheet(){
	document.getElementById('sheets').innerHTML=""; 
};

var a = 'container';
var b = 'height';
var c = 30+'px';

function size(param1, param2, param3){
	console.log(param1+" "+param2+" "+param3);
	param3height = param3*vh+'px';
	param3width = param3*vw+'px';
	console.log(param3height);
	if(param2 == 'height'){
		document.getElementById(param1).style.height = param3height;
	}else if(param2 == 'width'){
		document.getElementById(param1).style.width = param3width;
	}
}


function test(){
	alert('running test');
	document.getElementById('container').style.height = c;
	};