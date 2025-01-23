/*
 ________________________________________________
(                 Digital Clock                ()
\-----------------------------------------------\
|   Copyright 2025 ag-sanjjeev                  |
|-----------------------------------------------|
|   The source code is licensed under           |
|   MIT-style License.                          |
|-----------------------------------------------|
|   The usage, permission and condition         |
|   are applicable to this source code          |
|   as per license.                             |
|-----------------------------------------------|
|   That can be found in LICENSE file           |
|   or at https://opensource.org/licenses/MIT.  |
(_______________________________________________(
*/

// Onload Event Listener
window.addEventListener('load', function() {
	var cObject = new Clock();
	cObject.run();
});

// Clock function
function Clock() {
	// assign current object to self variable
	var self = this;

	// init function 
	self.init = function() {
		// DOM reference
		self.hours = document.getElementById('hours-text');
		self.minutes = document.getElementById('minutes-text');
		self.seconds = document.getElementById('seconds-text');
		self.meridian = document.getElementById('meridian-text');
		self.hoursDot = document.querySelector('.hours .dot');
		self.minutesDot = document.querySelector('.minutes .dot');
		self.secondsDot = document.querySelector('.seconds .dot');
		self.meridianDot = document.querySelector('.meridian .dot');
		self.hoursCircle = document.getElementById('hours-circle');
		self.minutesCircle = document.getElementById('minutes-circle');
		self.secondsCircle = document.getElementById('seconds-circle');
		self.meridianCircle = document.getElementById('meridian-circle');
		self.date = document.querySelector('.text .date');
		self.circleStrokeDash = 502; // defined in styles for each circles
	};

	// run function
	self.run = function() {
		self.init();
		self.interval = setInterval(function() { self.evaluate(); });
	};

	// evaluate function
	self.evaluate = function() {
		let date = new Date();
		let hours = date.getHours();
		let minutes = date.getMinutes();
		let seconds = date.getSeconds();
		let milliSeconds = date.getMilliseconds();
		let meridian = (hours < 12) ? 'AM' : 'PM';
		let month = date.getMonth() + 1;
		month = (month < 10) ? '0' + month : month;
		let currentDate = `${date.getDate()}-${month}-${date.getFullYear()}`;

		// convert into 12 hours 
		if (hours > 12) {
			hours -= 12;
		}

		// show with leading zero
		self.hours.innerText = (hours < 10) ? '0' + hours : hours;
		self.minutes.innerText = (minutes < 10) ? '0' + minutes : minutes;
		self.seconds.innerText = (seconds < 10) ? '0' + seconds : seconds;		
		self.meridian.innerText = meridian;	
		self.date.innerText = currentDate;

		// rotate dot
		self.hoursDot.style.transform = `rotate(${hours * 30}deg)`; // for 1 hour 30 deg
		self.minutesDot.style.transform = `rotate(${minutes * 6}deg)`; // for 1 minute 6 deg
		self.secondsDot.style.transform = `rotate(${seconds * 6}deg)`; // for 1 second 6 deg
		self.meridianDot.style.transform = `rotate(${milliSeconds * 0.36}deg)`; // for 1 millisecond 0.36 deg

		// circle stroke offset
		self.hoursCircle.style.strokeDashoffset = self.circleStrokeDash - (self.circleStrokeDash * hours) / 12;
		self.minutesCircle.style.strokeDashoffset = self.circleStrokeDash - (self.circleStrokeDash * minutes) / 60;
		self.secondsCircle.style.strokeDashoffset = self.circleStrokeDash - (self.circleStrokeDash * seconds) / 60;
		self.meridianCircle.style.strokeDashoffset = self.circleStrokeDash - (self.circleStrokeDash * milliSeconds) / 1000;

	};
}
