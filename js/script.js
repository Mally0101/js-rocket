setTimeout(function(){                // nach 2 sekunden bringt uns die Seite einfach weiter zu unserem href 
	location.href = 'rocket.html';
},2000);


// changing class name (properties of classes are defined in css)
var doCoolStuff = function() {
	var currentClassName = document.getElementById('cool').className; 
	
	if (currentClassName == 'cool') {
		document.getElementById ('cool').className = 'cool red';
	} else { 
		document.getElementById ('cool').className = 'cool';}
}


var car = {
			make: 'VW',
			type: 'Polo',
			color: 'blue',
			isTurnedOn: false,
			numberOfWheels: 4,
			seats: [
					'seat1', 
					'seat2',
					'seat3',
					'seat4'
				],
			
			turnOn: function () {
			   this.isTurnedOn = true;
			},
			fly: function () {
				alert('fly');
			},
			switchCar: function (isOn) {
				console.log('turn car '+isOn);
				if (isOn == true) {
					this.isTurnedOn = true;
				} else { 
					this.isTurnedOn = false; 
				}
			}
		}; 

	


var sayMyName = function (name) {
	alert('My name is: '+name);
}



	console.log('hello there friends!');

