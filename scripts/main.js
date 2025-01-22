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

window.addEventListener('load', function() {
	console.log('loaded');
	var cObject = new Clock();
	cObject.run();
});

// Clock function
function Clock() {
	var self = this;

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
	};

	self.run = function() {
		self.init();
		self.interval = setInterval(function() { self.evaluate(); }, 1000);
	};

	self.evaluate = function() {
		console.log('evaluate method invoked');
	};
}

