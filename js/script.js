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

	var wall = {
				color: 'green',
				size: 'big',

		paint: function(color) {
			if (wall.color == 'green') {
				alert ('green')
			} else {
				alert ('do not know this color');
			}
		},
        
        draw: function (color) {
        	this.color = 'blue';
        }
	};


var sayMyName = function (name) {
	alert('My name is: '+name);
}



	console.log('hello there friends!');

