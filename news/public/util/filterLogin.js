var currUser = window.sessionStorage.getItem("username");
if(currUser === null || currUser === '' || currUser === 'undefined'){
	location.href = 'login.html'
}