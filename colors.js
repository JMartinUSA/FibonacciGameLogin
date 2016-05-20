	// Define Colors
var colorBlack = 'rgba(0,0,0,0.5)',
	colorBlackH = 'rgba(0,0,0,1)', 
	colorBlue = 'rgba(0,0,255,0.5)',
	colorBlueH = 'rgba(0,0,255,1)',
	colorGreen = 'rgba(0,128,0,0.5)',
	colorGreenH = 'rgba(0,128,0,1)',
	colorGrey = 'rgba(128,128,128,0.5)',
	colorGreyH = 'rgba(128,128,128,1)',
	colorOrange = 'rgba(255,165,0,0.5)',
	colorOrangeH = 'rgba(255,165,0,1)',
	colorPink = 'rgba(255,192,203,0.5)',
	colorPinkH = 'rgba(255,192,203,1)',
	colorPurple = 'rgba(128,0,128,0.5)',
	colorPurpleH = 'rgba(128,0,128,1)',
	colorRed = 'rgba(255,0,0,0.5)',
	colorRedH = 'rgba(255,0,0,1)',
	colorYellow = 'rgba(255,255,0,0.5)',
	colorYellowH = 'rgba(255,255,0,1)';

	// Hour Colors
var hourColor,
	rBBackground,
	rBHighlighted;

	// Minute Colors
var minuteColor,
	bBBackground,
	bBHighlighted;

	// Other Colors
var bothColor = colorPurpleH,
	randomColor1 = colorGreenH,
    randomColor2 = colorYellowH,
    randomColor3 = colorOrangeH,
	numRandomColors = 3;
	colorOfHours = 'red',
	colorOfMinutes = 'blue';

function colorGame(){
	if(colorOfHours=='blue'){
		hourColor = colorBlueH;
		rBBackground = colorBlue;
		rBHighlighted = colorBlueH;
	}else if(colorOfHours=='black'){
		hourColor = colorBlackH;
		rBBackground = colorBlack;
		rBHighlighted = colorBlackH;
	}else if(colorOfHours=='green'){
		hourColor = colorGreenH;
		rBBackground = colorGreen;
		rBHighlighted = colorGreenH;
	}else if(colorOfHours=='grey'){
		hourColor = colorGreyH;
		rBBackground = colorGrey;
		rBHighlighted = colorGreyH;
	}else if(colorOfHours=='orange'){
		hourColor = colorOrangeH;
		rBBackground = colorOrange;
		rBHighlighted = colorOrangeH;
	}else if(colorOfHours=='pink'){
		hourColor = colorPinkH;
		rBBackground = colorPink;
		rBHighlighted = colorPinkH;
	}else if(colorOfHours=='purple'){
		hourColor = colorPurpleH;
		rBBackground = colorPurple;
		rBHighlighted = colorPurpleH;
	}else if(colorOfHours=='red'){
		hourColor = colorRedH;
		rBBackground = colorRed;
		rBHighlighted = colorRedH;
	}else if(colorOfHours=='yellow'){
		hourColor = colorYellowH;
		rBBackground = colorYellow;
		rBHighlighted = colorYellowH;
	}

	if(colorOfMinutes=='blue'){
		minuteColor = colorBlueH;
		bBBackground = colorBlue;
		bBHighlighted = colorBlueH;
	}else if(colorOfMinutes=='black'){
		minuteColor = colorBlackH;
		bBBackground = colorBlack;
		bBHighlighted = colorBlackH;
	}else if(colorOfMinutes=='green'){
		minuteColor = colorGreenH;
		bBBackground = colorGreen;
		bBHighlighted = colorGreenH;
	}else if(colorOfMinutes=='grey'){
		minuteColor = colorGreyH;
		bBBackground = colorGrey;
		bBHighlighted = colorGreyH;
	}else if(colorOfMinutes=='orange'){
		minuteColor = colorOrangeH;
		bBBackground = colorOrange;
		bBHighlighted = colorOrangeH;
	}else if(colorOfMinutes=='pink'){
		minuteColor = colorPinkH;
		bBBackground = colorPink;
		bBHighlighted = colorPinkH;
	}else if(colorOfMinutes=='purple'){
		minuteColor = colorPurpleH;
		bBBackground = colorPurple;
		bBHighlighted = colorPurpleH;
	}else if(colorOfMinutes=='red'){
		minuteColor = colorRedH;
		bBBackground = colorRed;
		bBHighlighted = colorRedH;
	}else if(colorOfMinutes=='yellow'){
		minuteColor = colorYellowH;
		bBBackground = colorYellow;
		bBHighlighted = colorYellowH;
	}

	if(gameActive){
		for(i=0;i<12;i++){	
		document.getElementById('rightButton'+i).style.background = rBBackground;
		document.getElementById('bottomButton'+i).style.background = bBBackground;
		}
	}

	colorClock();
}



