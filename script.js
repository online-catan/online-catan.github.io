initialiseHexImElements();

function generateHexagonCoords(hex_width, hex_height, hex_formation) {
	hex_coords = [];
	
	y = 0.5*hex_height;
	for (var i = 0; i <hex_formation.length(); i++) {
		col_no = hex_formation[i];
		x = -0.5*col_no*hex_width + hex_width/2;
		hex_coords.push([]);
		hex_coords[i].push([x,y]);

		for (var j = 0; j < col_no - 1; j++) {
			x += hex_width;
			hex_coords[i].push([x,y]);
		}

		y += hex_height/2 + hex_height/4;
	}
	return hex_coords;
}

function initialiseHexImElements() {
	hex_width = 360;
	hex_height = 420;
	hex_formation = [3,4,5,4,3];

	hex_coords = generateHexagonCoords(hex_width, hex_height, hex_formation);

	for (var i = 0; i < hex_formation.length(); i++) {
		for (var j=0; j < hex_formation[i]) {
			x = hex_coords[i][j];
			y = hex_coords[i][j];
			img = document.createElement("img");
			img.style.position = 'absolute';
			img.style.left = x;
			img.style.top= y;
		}
	}
}