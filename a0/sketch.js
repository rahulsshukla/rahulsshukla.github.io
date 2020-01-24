// Alaz Sengul (as5456)

function setup() {

	// make an HTML canvas element width x height pixels
	createCanvas(800, 600);

	// 1 FPS, since nothing needs to change between seconds
	frameRate(1);

}

function draw() {

	background(237, 237, 237);

	// hour
	for (var i = 0; i < hour(); i++) {
		strokeWeight(2);
		stroke(0, 0, 0);

		line(0, 10 + (i * (580 / 23)), 800, 10 + (i * (580 / 23)));
	}

	// minute
	for (var i = 0; i < minute(); i++) {
		strokeWeight(2);
		stroke(200, 200, 200);

		line(10 + (i * (780 / 59)), 0, 10 + (i * (780 / 59)), 600);
	}

	// second
	strokeWeight(2);
	stroke(255, 0, 0);

	i = second()
	if (i < 30) {
		line(0, 10 + (i * (580 / 29)), 10 + (i * (780 / 29)), 0);
	}
	else {
		line(10 + (i * (780 / 29)), 0, 0, 10 + (i * (580 / 29)));
	}

	// print to console every time minute changes
	if (i == 0) {
		console.log(minute());
	}

}
