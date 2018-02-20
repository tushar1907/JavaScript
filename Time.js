var today = new Date();
var dayarr = [
	'Sunday',
	'Monday',
	'tuesday',
	'wednesday',
	'thurs',
	'Friday',
	'Saturday',
];
let hours = today.getHours();
var min = today.getMinutes();
let sec = today.getSeconds();
var day = today.getDay();
var Day = dayarr[day];
var n;

if (hours > 12) {
	hours = hours - 12;
	n = 'PM';
} else {
	n = 'AM';
}

if (sec < 10) {
	sec = '0' + sec;
}

if (min < 10) {
	min = '0' + min;
}
console.log('Today is: ' + Day);
console.log(hours + n + ' ' + ':' + ' ' + min + ' ' + ':' + ' ' + sec);