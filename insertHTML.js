function Home(){
  inactive();
  homeActive = true;
  insertHome();
  sizeHome();
}

function Clock(){ 
  inactive();
  clockActive = true;
  insertClock();
  sizeClock();
  colorGame();
  setClock();
};
function Game(){
  inactive();
  gameActive = true;
  insertGame();
  sizeGame();
  colorGame();
  setClock();
}

function inactive(){
  homeActive = false;
  clockActive = false;
  gameActive = false;
  howToActive = false;
  exitSubmenu();
}

function exitSubmenu(){
    document.getElementById('left').innerHTML = "";
    document.getElementById('right').innerHTML = "";
    document.getElementById('otherSubmenu').innerHTML = "";
    setTimeout(exitSheets, 6000);
    function exitSheets(){
      document.getElementById('sheets').innerHTML = "";
    }
}
function exitResult(){
    document.getElementById('gameResult').innerHTML = "";
}
function exitLeft(){
  document.getElementById('left').innerHTML = '';
}
function WelcomeUser(username){
  document.getElementById('welcomeUser').innerHTML = '<link rel="stylesheet" href="welcomeUser.css" />\
    <div id="roundContainer">\
      <div id="round">\
        <div id="roundText"> &nbsp Welcome, '+username+' &nbsp </div>\
      </div>\
    </div>';
    setTimeout(hideWelcome, 7000);
    function hideWelcome(){
      document.getElementById('welcomeUser').innerHTML = '';
      console.log('hidden');
    }
}

function insertHome(){
  //document.getElementById('js').innerHTML='<link href="home.css" rel="stylesheet"></style>';
	document.getElementById('body').innerHTML='<!-- Index Container -->\
  <link href="home.css" rel="stylesheet"></style>\
    <div class="container" id="container">\
      	<div class="thumbnailIndex" id="welcomeIcon"> <img src="fibonacci clock 400px.png" /></div>\
      	<div class="button" id="welcomeSlide1" onclick="Clock();"> <p>Clock</p> </div>\
      	<div class="button" id="welcomeSlide2" onclick="Game();"> <p>Game</p> </div>\
      	<div class="button" id="welcomeSlide3" onclick="comingSoon();"> <p>How To</p> </div>\
      	<div class="button" id="welcomeSlide4" onclick="comingSoon();"> <p>Settings</p> </div>\
    </div>';
};

function insertLogin(){
  document.getElementById('otherSubmenu').innerHTML='<link rel="stylesheet" href="login.css" />\
    <div id="loginCover" class="loginCover" onclick="exitSubmenu();"></div>\
    <div id="loginContainer">\
      <div id="loginArea">\
        <div id="loginHeader">\
          <div id="loginTab" title="true" onclick="loginTab()">Login</div>\
          <div id="registerTab" title="false" onclick="registerTab()">Register</div>\
        </div>\
        <div id="loginSection">\
          <div class="loginSpacer">Username</div>\
          <input type="text" id="loginUsername">\
          <div class="loginSpacer">Password</div>\
          <input type="password" id="loginPassword">\
          <div id="errorMsgLogin"></div>\
          <div id="loginContinue" onclick="login()">Continue</div>\
        </div>\
        <div id="registerSection">\
          <div class="loginSpacer">Username</div>\
          <input type="text" id="registerUsername">\
          <div class="loginSpacer">Email</div>\
          <input type="text" id="registerEmail">\
          <div class="loginSpacer">Password</div>\
          <input type="password" id="registerPassword">\
          <div class="loginSpacer">Confirm Password</div>\
          <input type="password" id="registerPasswordConfirm">\
          <div id="errorMsg"></div>\
          <div id="confirmMsg"></div>\
          <div id="registerContinue" onclick="register()">Continue</div>\
        </div>\
      </div>\
    </div>';
}

function insertHowTo(){
	document.getElementById('body').innerHTML='<!-- HowTo Container -->\
	<div class="container" id="container">\
		<div id="home" onclick="home()">Home</div>\
		<div id="prev" onclick="prev()">Prev</div>\
		<div id="next" onclick="next()">Next</div>\
	</div>';
};

function insertClock(){
	document.getElementById('body').innerHTML='<!-- Clock Container-->\
    <link href="clock.css" rel="stylesheet"></style>\
    <div class="container" id="container">\
        <div class="clock">\
        	<div id="three"></div>\
	        	<div class="onetwo">\
	            <div id="two"></div>\
	            <div id="one"></div>\
	            <div id="one2"></div>\
        	  </div>\
        	<div id="five"></div>\
        </div>\
    </div>';
};

function insertGame(){
	document.getElementById('body').innerHTML='<!--Game Container-->\
  <link href="clock.css" rel="stylesheet"></style>\
	<link href="game.css" rel="stylesheet"></style>\
  <div class="container" id="container">\
    <div id="statButton" onclick="Stats();">Stats</div>\
    <div id="submitButton" onclick="submitAnswer()">Confirm</div>\
        <div id="clock">\
          	<div id="three"></div>\
          	<div class="onetwo">\
            	<div id="two"></div>\
            	<div id="one"></div>\
            	<div id="one2"></div>\
          	</div>\
          	<div id="five"></div>\
        </div>\
        <div id="rightButtons">\
            <div class="rightButton" id="rightButton0" onclick="clearHours(), highlightHour(this,1);">1</div>\
            <div class="rightButton" id="rightButton1" onclick="clearHours(), highlightHour(this,2);">2</div>\
            <div class="rightButton" id="rightButton2" onclick="clearHours(), highlightHour(this,3);">3</div>\
            <div class="rightButton" id="rightButton3" onclick="clearHours(), highlightHour(this,4);">4</div>\
            <div class="rightButton" id="rightButton4" onclick="clearHours(), highlightHour(this,5);">5</div>\
            <div class="rightButton" id="rightButton5" onclick="clearHours(), highlightHour(this,6);">6</div>\
            <div class="rightButton" id="rightButton6" onclick="clearHours(), highlightHour(this,7);">7</div>\
            <div class="rightButton" id="rightButton7" onclick="clearHours(), highlightHour(this,8);">8</div>\
            <div class="rightButton" id="rightButton8" onclick="clearHours(), highlightHour(this,9);">9</div>\
            <div class="rightButton" id="rightButton9" onclick="clearHours(), highlightHour(this,10);">10</div>\
            <div class="rightButton" id="rightButton10" onclick="clearHours(), highlightHour(this,11);">11</div>\
            <div class="rightButton" id="rightButton11" onclick="clearHours(), highlightHour(this,12);">12</div>\
        </div>\
        <div id="bottomButtons">\
            <div class="bottomButton" id="bottomButton1" onclick="clearMinutes(), highlightMinute(this,05);">05</div>\
            <div class="bottomButton" id="bottomButton2" onclick="clearMinutes(), highlightMinute(this,10);">10</div>\
            <div class="bottomButton" id="bottomButton3" onclick="clearMinutes(), highlightMinute(this,15);">15</div>\
            <div class="bottomButton" id="bottomButton4" onclick="clearMinutes(), highlightMinute(this,20);">20</div>\
            <div class="bottomButton" id="bottomButton5" onclick="clearMinutes(), highlightMinute(this,25);">25</div>\
            <div class="bottomButton" id="bottomButton6" onclick="clearMinutes(), highlightMinute(this,30);">30</div>\
            <div class="bottomButton" id="bottomButton7" onclick="clearMinutes(), highlightMinute(this,35);">35</div>\
            <div class="bottomButton" id="bottomButton8" onclick="clearMinutes(), highlightMinute(this,40);">40</div>\
            <div class="bottomButton" id="bottomButton9" onclick="clearMinutes(), highlightMinute(this,45);">45</div>\
            <div class="bottomButton" id="bottomButton10" onclick="clearMinutes(), highlightMinute(this,50);">50</div>\
            <div class="bottomButton" id="bottomButton11" onclick="clearMinutes(), highlightMinute(this,55);">55</div>\
            <div class="bottomButton" id="bottomButton0" onclick="clearMinutes(), highlightMinute(this, 00);">00</div>\
        </div>\
    </div> '
};
