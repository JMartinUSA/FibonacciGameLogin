/*var hourColor = 'rgba(255,0,0,1)';
var minuteColor = 'rgba(0,0,255,1)';
var bothColor = 'purple';
var randomColor1 = 'green',
    randomColor2 = 'yellow',
    randomColor3 = 'orange';
var numRandomColors = 3;*/
var clockActive;
var hours,
    minutes;


setInterval('autoRefresh()', 5000);

function autoRefresh(){
    if(clockActive){
        setClock();
    }
}

    var one = 0,
        one2 = 0,
        two = 0,
        three = 0,
        five = 0;
    var units = ['one', 'one2', 'two', 'three', 'five'];
    var values = [one, one2, two, three, five];



function setClock(){
    one = 0;
    one2 = 0;
    two = 0;
    three = 0;
    five = 0;
    units = ['one', 'one2', 'two', 'three', 'five'];
    values = [one, one2, two, three, five];
    if(clockActive){
        var currentTime = new Date();
        hours = currentTime.getHours();
        minutes = currentTime.getMinutes();
    }else if(gameActive){
        hours = Math.ceil(Math.random()*12);
        minutes = (Math.ceil(Math.random()*12))*5;
    }
    if(hours > 12){
        hours = hours - 12;
    }
    if(minutes < 10){
        minutes = "0"+minutes;
    }
    if(minutes == 60){
        minutes = 0;
    }
    console.log(hours+":"+minutes);

    if (hours === 1){
        one = 1
    }
    if (hours === 2){
        two = 1
    }
    if (hours === 3){
        three = 1
    }
    if (hours === 4){
        three = 1
        one2 = 1
    }
    if (hours === 5){
        five = 1
    }
    if (hours === 6){
        three = 1
        two = 1 
        one2 = 1 
    }
    if (hours === 7){
        one = 1
        five = 1
        one2 = 1
    }
    if (hours === 8){
        three = 1
        five = 1
    }
    if (hours === 9){
        one = 1
        one2 = 1
        two = 1
        five = 1
    }
    if (hours === 10){
        two = 1
        three = 1
        five = 1
    }
    if (hours === 11){
        one = 1
        two = 1
        three = 1
        five = 1
    }
    if (hours === 12){
        one = 1
        one2 = 1
        two = 1
        three = 1
        five = 1
    }


    if (minutes >= 5 && minutes < 10){
        one = one + 2
    }
    if (minutes >= 10 && minutes < 15){
        two = two + 2
    }
    if (minutes >= 15 && minutes < 20){
        two = two + 2
        one2 = one2 + 2
    }
    if (minutes >= 20 && minutes < 25){
        one = one + 2
        three = three + 2
    }
    if (minutes >= 25 && minutes < 30){
        five = five + 2
    }
    if (minutes >= 30 && minutes < 35){
        three = three + 2
        two = two + 2
        one = one + 2
    }
    if (minutes >= 35 && minutes < 40){
        five = five + 2
        one = one + 2
        one2 = one2 + 2
    }
    if (minutes >= 40 && minutes < 45){
        five = five + 2
        three = three + 2
    }       
    if (minutes >= 45 && minutes < 50){
        five = five + 2
        three = three + 2
        one = one + 2
    }
    if (minutes >= 50 && minutes < 55){
        two = two + 2
        five = five + 2
        three = three + 2
    }
    if (minutes >= 55 && minutes < 60){
        one = one + 2
        two = two +2
        three = three + 2
        five = five + 2
    }
    colorClock();

}

function colorClock(){
    var values = [one, one2, two, three, five];
        for(i=0; i<5; i++){
            //console.log(units[i] +": "+values[i]);
            if(values[i] == 1){
                document.getElementById(units[i]).style.background = hourColor;
            }else if(values[i] == 2){
                document.getElementById(units[i]).style.background = minuteColor;
            }else if(values[i] == 3){
                document.getElementById(units[i]).style.background = bothColor;
            }else{
                if(numRandomColors == 1){
                    document.getElementById(units[i]).style.background = randomColor1;
                }else if(numRandomColors == 2){
                    var ran = getRandom();
                    if(ran < 0.5){
                        document.getElementById(units[i]).style.background = randomColor1;
                    }else{
                        document.getElementById(units[i]).style.background = randomColor2;
                    }
                }else if(numRandomColors == 3){
                    var ran = getRandom();
                    if(ran < 0.33){
                        document.getElementById(units[i]).style.background = randomColor1;
                    }else if(ran > 0.66){
                        document.getElementById(units[i]).style.background = randomColor2;
                    }else{
                        document.getElementById(units[i]).style.background = randomColor3;
                    }
                }
            }
        }
    }



function getRandom(){
    return(Math.random());
}
