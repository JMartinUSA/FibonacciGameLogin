function onload(){
	calcWindowSize();
	Home();
	document.getElementById('sheets').innerHTML = '<link href="welcome.css" rel="stylesheet"></style>';

	if((localStorage.getItem('FibonacciUsernameSaved') != ('' || null || undefined || 'undefined')) && (localStorage.getItem('FibonacciPasswordSaved') != ('' || null || undefined || 'undefined'))){
		console.log('username, password are not blank');
		console.log('Username: '+localStorage.getItem('FibonacciUsernameSaved'));
		console.log('Password: '+localStorage.getItem('FibonacciPasswordSaved'));
		login();
	}else{
		console.log('Some are blank');
		console.log('Username: '+localStorage.getItem('FibonacciUsernameSaved'));
		console.log('Password: '+localStorage.getItem('FibonacciPasswordSaved'));
	}
}