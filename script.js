var state = 0;
		function changeBulbImage() {
			if (state == 1) {
				document.getElementById("bulbImg").src="https://image.ibb.co/hoBxtm/light_bulb_off.png";
				state = 0;
			} else {
				document.getElementById("bulbImg").src="https://image.ibb.co/cBBaeR/light_bulb_on.png";
				state = 1;
			}
		}
