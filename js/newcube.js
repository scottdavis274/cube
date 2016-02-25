// Node.js version
// var cubecore = require('./cubecore');


var cube_333 = {
	type:"3x3",

	topY:["yellow","yellow","yellow","yellow","yellow","yellow","yellow","yellow","yellow"],
	botW:["white","white","white","white","white","white","white","white","white"],
	frontB:["#0066ff","#0066ff","#0066ff","#0066ff","#0066ff","#0066ff","#0066ff","#0066ff","#0066ff"],
	backG:["green","green","green","green","green","green","green","green","green"],
	leftO:["orange","orange","orange","orange","orange","orange","orange","orange","orange"],
	rightR:["#ff3333","#ff3333","#ff3333","#ff3333","#ff3333","#ff3333","#ff3333","#ff3333","#ff3333"],

	topY_id:["topY0","topY1","topY2","topY3","topY4","topY5","topY6","topY7","topY8"],
	botW_id:["botW0","botW1","botW2","botW3","botW4","botW5","botW6","botW7","botW8"],
	frontB_id:["frontB0","frontB1","frontB2","frontB3","frontB4","frontB5","frontB6","frontB7","frontB8"],
	backG_id:["backG0","backG1","backG2","backG3","backG4","backG5","backG6","backG7","backG8"],
	leftO_id:["leftO0","leftO1","leftO2","leftO3","leftO4","leftO5","leftO6","leftO7","leftO8"],
	rightR_id:["rightR0","rightR1","rightR2","rightR3","rightR4","rightR5","rightR6","rightR7","rightR8"]
};

// This is the code for the buttons that call the cubecore methods
document.getElementById('rotateLeft').onclick = function () {cubecore.rotateL(cube_333);cubecore.updateCube(cube_333)};
document.getElementById('rotateFront').onclick = function () {cubecore.rotateF(cube_333);cubecore.updateCube(cube_333)};
document.getElementById('rotateRight').onclick = function () {cubecore.rotateR(cube_333);cubecore.updateCube(cube_333)};
document.getElementById('rotateBack').onclick = function () {cubecore.rotateB(cube_333);cubecore.updateCube(cube_333)};
document.getElementById('rotateTop').onclick = function () {cubecore.rotateU(cube_333);cubecore.updateCube(cube_333)};
document.getElementById('rotateBottom').onclick = function () {cubecore.rotateD(cube_333);cubecore.updateCube(cube_333)};
document.getElementById('rotateMiddle').onclick = function () {cubecore.rotateM(cube_333);cubecore.updateCube(cube_333)};
document.getElementById('rotateLeftp').onclick = function () {cubecore.rotateLp(cube_333);cubecore.updateCube(cube_333)};
document.getElementById('rotateFrontp').onclick = function () {cubecore.rotateFp(cube_333);cubecore.updateCube(cube_333)};
document.getElementById('rotateRightp').onclick = function () {cubecore.rotateRp(cube_333);cubecore.updateCube(cube_333)};
document.getElementById('rotateBackp').onclick = function () {cubecore.rotateBp(cube_333);cubecore.updateCube(cube_333)};
document.getElementById('rotateTopp').onclick = function () {cubecore.rotateUp(cube_333);cubecore.updateCube(cube_333)};
document.getElementById('rotateBottomp').onclick = function () {cubecore.rotateDp(cube_333);cubecore.updateCube(cube_333)};
document.getElementById('rotateMiddlep').onclick = function () {cubecore.rotateMp(cube_333);cubecore.updateCube(cube_333)};


/*  Understanding the cube object notation.
	Faces of the cube TopY = top face yellow color -or- frontB = front face blue color
	These denote how the cube starts, the initial state of the cube.
*/

// The cubecore.js file copied below
// They both load and I can use them in the console, but I can't figure out how to use
// cubecore's methods in this file yet... got to research it.

cubecore = {

// Rotate the RIGHT face clockwise. (As if you are looking at the face.)
// This function will take the cube object as an input,
// move the pieces to the appropriate locations, and then return the cube object.
	rotateR: function (cube_333) {
		var cubeI = cube_333;
		var topY_8 = cube_333.topY[8];
		var topY_5 = cube_333.topY[5];
		var topY_2 = cube_333.topY[2];

		// Rotating the right face changes the position of 8 of the tiles
		cube_333.rightR = [cubeI.rightR[6],cubeI.rightR[3],cubeI.rightR[0],cubeI.rightR[7],cubeI.rightR[4],cubeI.rightR[1],cubeI.rightR[8],cubeI.rightR[5],cubeI.rightR[2]];

		// Bring the 3 front tiles to the top
		cube_333.topY[2] = cubeI.frontB[2];
		cube_333.topY[5] = cubeI.frontB[5];
		cube_333.topY[8] = cubeI.frontB[8];

		// Bring the 3 bottom tiles to the front
		cube_333.frontB[2] = cubeI.botW[2];
		cube_333.frontB[5] = cubeI.botW[5];
		cube_333.frontB[8] = cubeI.botW[8];

		// Bring the 3 back tiles to the bottom
		cube_333.botW[2] = cubeI.backG[6];
		cube_333.botW[5] = cubeI.backG[3];
		cube_333.botW[8] = cubeI.backG[0];

		// Bring the 3 top tiles to the back
		cube_333.backG[0] = topY_8;
		cube_333.backG[3] = topY_5;
		cube_333.backG[6] = topY_2;

		// Return the new cube
		return cube_333;
	},


// Rotate the RIGHT face counter-clockwise. (As if you are looking at the face.)
// This function will take the cube object as an input,
// move the pieces to the appropriate locations, and then return the cube object.
	rotateRp: function (cube_333) {
		var cubeI = cube_333;
		var botW_8 = cube_333.botW[8];
		var botW_5 = cube_333.botW[5];
		var botW_2 = cube_333.botW[2];

		// Rotating the right face changes the position of 8 of the tiles
		cube_333.rightR = [cubeI.rightR[2],cubeI.rightR[5],cubeI.rightR[8],cubeI.rightR[1],cubeI.rightR[4],cubeI.rightR[7],cubeI.rightR[0],cubeI.rightR[3],cubeI.rightR[6]];

		// Bring the 3 front tiles to the bottom
		cube_333.botW[2] = cubeI.frontB[2];
		cube_333.botW[5] = cubeI.frontB[5];
		cube_333.botW[8] = cubeI.frontB[8];

		// Bring the 3 top tiles to the front
		cube_333.frontB[2] = cubeI.topY[2];
		cube_333.frontB[5] = cubeI.topY[5];
		cube_333.frontB[8] = cubeI.topY[8];

		// Bring the 3 back tiles to the top
		cube_333.topY[2] = cubeI.backG[6];
		cube_333.topY[5] = cubeI.backG[3];
		cube_333.topY[8] = cubeI.backG[0];

		// Bring the 3 bottom tiles to the back
		cube_333.backG[0] = botW_8;
		cube_333.backG[3] = botW_5;
		cube_333.backG[6] = botW_2;

		// Return the new cube
		return cube_333;
	},


// Rotate the TOP (upper) face clockwise. (As if you are looking at the face.)
// This function will take the cube object as an input,
// move the pieces to the appropriate locations, and then return the cube object.
	rotateU: function (cube_333) {
		var cubeI = cube_333;
		var leftO_0 = cube_333.leftO[0];
		var leftO_1 = cube_333.leftO[1];
		var leftO_2 = cube_333.leftO[2];

		// Rotating the top face changes the position of 8 of the tiles
		cube_333.topY = [cubeI.topY[6],cubeI.topY[3],cubeI.topY[0],cubeI.topY[7],cubeI.topY[4],cubeI.topY[1],cubeI.topY[8],cubeI.topY[5],cubeI.topY[2]];

		// Bring the 3 front tiles to the left side
		cube_333.leftO[0] = cubeI.frontB[0];
		cube_333.leftO[1] = cubeI.frontB[1];
		cube_333.leftO[2] = cubeI.frontB[2];

		// Bring the 3 right tiles to the front
		cube_333.frontB[0] = cubeI.rightR[0];
		cube_333.frontB[1] = cubeI.rightR[1];
		cube_333.frontB[2] = cubeI.rightR[2];

		// Bring the 3 back tiles to the right
		cube_333.rightR[0] = cubeI.backG[0];
		cube_333.rightR[1] = cubeI.backG[1];
		cube_333.rightR[2] = cubeI.backG[2];

		// Bring the 3 left tiles to the back
		cube_333.backG[0] = leftO_0;
		cube_333.backG[1] = leftO_1;
		cube_333.backG[2] = leftO_2;

		// Return the new cube
		return cube_333;
	},

// Rotate the TOP (upper) face counter-clockwise. (As if you are looking at the face.)
// This function will take the cube object as an input,
// move the pieces to the appropriate locations, and then return the cube object.
	rotateUp: function (cube_333) {
		var cubeI = cube_333;
		var leftO_0 = cube_333.leftO[0];
		var leftO_1 = cube_333.leftO[1];
		var leftO_2 = cube_333.leftO[2];

		// Rotating the top face changes the position of 8 of the tiles
		cube_333.topY = [cubeI.topY[2],cubeI.topY[5],cubeI.topY[8],cubeI.topY[1],cubeI.topY[4],cubeI.topY[7],cubeI.topY[0],cubeI.topY[3],cubeI.topY[6]];

		// Bring the 3 back tiles to the left side
		cube_333.leftO[0] = cubeI.backG[0];
		cube_333.leftO[1] = cubeI.backG[1];
		cube_333.leftO[2] = cubeI.backG[2];

		// Bring the 3 right tiles to the back
		cube_333.backG[0] = cubeI.rightR[0];
		cube_333.backG[1] = cubeI.rightR[1];
		cube_333.backG[2] = cubeI.rightR[2];

		// Bring the 3 front tiles to the right
		cube_333.rightR[0] = cubeI.frontB[0];
		cube_333.rightR[1] = cubeI.frontB[1];
		cube_333.rightR[2] = cubeI.frontB[2];

		// Bring the 3 left tiles to the front
		cube_333.frontB[0] = leftO_0;
		cube_333.frontB[1] = leftO_1;
		cube_333.frontB[2] = leftO_2;

		// Return the new cube
		return cube_333;
	},


// Rotate the LEFT face clockwise. (As if you are looking at the face.)
// This function will take the cube object as an input,
// move the pieces to the appropriate locations, and then return the cube object.
	rotateL: function (cube_333) {
		var cubeI = cube_333;
		var frontB_0 = cube_333.frontB[0];
		var frontB_3 = cube_333.frontB[3];
		var frontB_6 = cube_333.frontB[6];

		// Rotating the left face changes the position of 8 of the tiles
		cube_333.leftO = [cubeI.leftO[6],cubeI.leftO[3],cubeI.leftO[0],cubeI.leftO[7],cubeI.leftO[4],cubeI.leftO[1],cubeI.leftO[8],cubeI.leftO[5],cubeI.leftO[2]];

		// Bring the 3 top tiles to the front side
		cube_333.frontB[0] = cubeI.topY[0];
		cube_333.frontB[3] = cubeI.topY[3];
		cube_333.frontB[6] = cubeI.topY[6];


		// Bring the 3 back tiles to the front
		cube_333.topY[0] = cubeI.backG[8];
		cube_333.topY[3] = cubeI.backG[5];
		cube_333.topY[6] = cubeI.backG[2];

		// Bring the 3 bottom tiles to the back
		cube_333.backG[2] = cubeI.botW[6];
		cube_333.backG[5] = cubeI.botW[3];
		cube_333.backG[8] = cubeI.botW[0];

		// Bring the 3 front tiles to the bottom
		cube_333.botW[0] = frontB_0;
		cube_333.botW[3] = frontB_3;
		cube_333.botW[6] = frontB_6;

		// Return the new cube
		return cube_333;
	},


// Rotate the LEFT face counter-clockwise. (As if you are looking at the face.)
// This function will take the cube object as an input,
// move the pieces to the appropriate locations, and then return the cube object.
	rotateLp: function (cube_333) {
		var cubeI = cube_333;
		var frontB_0 = cube_333.frontB[0];
		var frontB_3 = cube_333.frontB[3];
		var frontB_6 = cube_333.frontB[6];

		// Rotating the left face changes the position of 8 of the tiles
		cube_333.leftO = [cubeI.leftO[2],cubeI.leftO[5],cubeI.leftO[8],cubeI.leftO[1],cubeI.leftO[4],cubeI.leftO[7],cubeI.leftO[0],cubeI.leftO[3],cubeI.leftO[6]];

		// Bring the 3 bottom tiles to the front side
		cube_333.frontB[0] = cubeI.botW[0];
		cube_333.frontB[3] = cubeI.botW[3];
		cube_333.frontB[6] = cubeI.botW[6];


		// Bring the 3 back tiles to the bottom
		cube_333.botW[0] = cubeI.backG[8];
		cube_333.botW[3] = cubeI.backG[5];
		cube_333.botW[6] = cubeI.backG[2];

		// Bring the 3 top tiles to the back
		cube_333.backG[2] = cubeI.topY[6];
		cube_333.backG[5] = cubeI.topY[3];
		cube_333.backG[8] = cubeI.topY[0];

		// Bring the 3 front tiles to the top
		cube_333.topY[0] = frontB_0;
		cube_333.topY[3] = frontB_3;
		cube_333.topY[6] = frontB_6;

		// Return the new cube
		return cube_333;
	},



// Rotate the FRONT face clockwise. (As if you are looking at the face.)
// This function will take the cube object as an input,
// move the pieces to the appropriate locations, and then return the cube object.
	rotateF: function (cube_333) {
		var cubeI = cube_333;
		var topY_6 = cube_333.topY[6];
		var topY_7 = cube_333.topY[7];
		var topY_8 = cube_333.topY[8];

		// Rotating the front face changes the position of 8 of the tiles
		cube_333.frontB = [cubeI.frontB[6],cubeI.frontB[3],cubeI.frontB[0],cubeI.frontB[7],cubeI.frontB[4],cubeI.frontB[1],cubeI.frontB[8],cubeI.frontB[5],cubeI.frontB[2]];

		// Bring the 3 left tiles to the top
		cube_333.topY[6] = cubeI.leftO[8];
		cube_333.topY[7] = cubeI.leftO[5];
		cube_333.topY[8] = cubeI.leftO[2];


		// Bring the 3 bottom tiles to the left
		cube_333.leftO[2] = cubeI.botW[0];
		cube_333.leftO[5] = cubeI.botW[1];
		cube_333.leftO[8] = cubeI.botW[2];

		// Bring the 3 right tiles to the bottom
		cube_333.botW[0] = cubeI.rightR[6];
		cube_333.botW[1] = cubeI.rightR[3];
		cube_333.botW[2] = cubeI.rightR[0];

		// Bring the 3 top tiles to the right
		cube_333.rightR[0] = topY_6;
		cube_333.rightR[3] = topY_7;
		cube_333.rightR[6] = topY_8;

		// Return the new cube
		return cube_333;
	},



// Rotate the FRONT face counter-clockwise. (As if you are looking at the face.)
// This function will take the cube object as an input,
// move the pieces to the appropriate locations, and then return the cube object.
	rotateFp: function (cube_333) {
		var cubeI = cube_333;
		var topY_6 = cube_333.topY[6];
		var topY_7 = cube_333.topY[7];
		var topY_8 = cube_333.topY[8];

		// Rotating the front face changes the position of 8 of the tiles
		cube_333.frontB = [cubeI.frontB[2],cubeI.frontB[5],cubeI.frontB[8],cubeI.frontB[1],cubeI.frontB[4],cubeI.frontB[7],cubeI.frontB[0],cubeI.frontB[3],cubeI.frontB[6]];

		// Bring the 3 right tiles to the top
		cube_333.topY[6] = cubeI.rightR[0];
		cube_333.topY[7] = cubeI.rightR[3];
		cube_333.topY[8] = cubeI.rightR[6];


		// Bring the 3 bottom tiles to the right
		cube_333.rightR[0] = cubeI.botW[0];
		cube_333.rightR[3] = cubeI.botW[1];
		cube_333.rightR[6] = cubeI.botW[2];

		// Bring the 3 left tiles to the bottom
		cube_333.botW[0] = cubeI.leftO[2];
		cube_333.botW[1] = cubeI.leftO[5];
		cube_333.botW[2] = cubeI.leftO[8];

		// Bring the 3 top tiles to the left
		cube_333.leftO[2] = topY_8;
		cube_333.leftO[5] = topY_7;
		cube_333.leftO[8] = topY_6;

		// Return the new cube
		return cube_333;
	},



// Rotate the BACK (rear) face clockwise. (As if you are looking at the face.)
// This function will take the cube object as an input,
// move the pieces to the appropriate locations, and then return the cube object.
	rotateB: function (cube_333) {
		var cubeI = cube_333;
		var topY_0 = cube_333.topY[0];
		var topY_1 = cube_333.topY[1];
		var topY_2 = cube_333.topY[2];

		// Rotating the back face changes the position of 8 of the tiles
		cube_333.backG = [cubeI.backG[6],cubeI.backG[3],cubeI.backG[0],cubeI.backG[7],cubeI.backG[4],cubeI.backG[1],cubeI.backG[8],cubeI.backG[5],cubeI.backG[2]];

		// Bring the 3 right tiles to the top
		cube_333.topY[0] = cubeI.rightR[2];
		cube_333.topY[1] = cubeI.rightR[5];
		cube_333.topY[2] = cubeI.rightR[8];


		// Bring the 3 bottom tiles to the right
		cube_333.rightR[2] = cubeI.botW[8];
		cube_333.rightR[5] = cubeI.botW[7];
		cube_333.rightR[8] = cubeI.botW[6];

		// Bring the 3 left tiles to the bottom
		cube_333.botW[6] = cubeI.leftO[0];
		cube_333.botW[7] = cubeI.leftO[3];
		cube_333.botW[8] = cubeI.leftO[6];

		// Bring the 3 top tiles to the left
		cube_333.leftO[0] = topY_2;
		cube_333.leftO[3] = topY_1;
		cube_333.leftO[6] = topY_0;

		// Return the new cube
		return cube_333;
	},

// Rotate the BACK (rear) face counter-clockwise. (As if you are looking at the face.)
// This function will take the cube object as an input,
// move the pieces to the appropriate locations, and then return the cube object.
	rotateBp: function (cube_333) {
		var cubeI = cube_333;
		var topY_0 = cube_333.topY[0];
		var topY_1 = cube_333.topY[1];
		var topY_2 = cube_333.topY[2];

		// Rotating the front face changes the position of 8 of the tiles
		cube_333.backG = [cubeI.backG[2],cubeI.backG[5],cubeI.backG[8],cubeI.backG[1],cubeI.backG[4],cubeI.backG[7],cubeI.backG[0],cubeI.backG[3],cubeI.backG[6]];

		// Bring the 3 left tiles to the top
		cube_333.topY[0] = cubeI.leftO[6];
		cube_333.topY[1] = cubeI.leftO[3];
		cube_333.topY[2] = cubeI.leftO[0];

		// Bring the 3 bottom tiles to the left
		cube_333.leftO[0] = cubeI.botW[6];
		cube_333.leftO[3] = cubeI.botW[7];
		cube_333.leftO[6] = cubeI.botW[8];

		// Bring the 3 right tiles to the bottom
		cube_333.botW[6] = cubeI.rightR[8];
		cube_333.botW[7] = cubeI.rightR[5];
		cube_333.botW[8] = cubeI.rightR[2];

		// Bring the 3 top tiles to the right
		cube_333.rightR[8] = topY_2;
		cube_333.rightR[5] = topY_1;
		cube_333.rightR[2] = topY_0;

		// Return the new cube
		return cube_333;
	},

// Rotate the DOWN (bottom) face clockwise. (As if you are looking at the face.)
// This function will take the cube object as an input,
// move the pieces to the appropriate locations, and then return the cube object.
	rotateD: function (cube_333) {
		var cubeI = cube_333;
		var frontB_6 = cube_333.frontB[6];
		var frontB_7 = cube_333.frontB[7];
		var frontB_8 = cube_333.frontB[8];

		// Rotating the bottom face changes the position of 8 of the tiles
		cube_333.botW = [cubeI.botW[6],cubeI.botW[3],cubeI.botW[0],cubeI.botW[7],cubeI.botW[4],cubeI.botW[1],cubeI.botW[8],cubeI.botW[5],cubeI.botW[2]];

		// Bring the 3 left tiles to the front
		cube_333.frontB[6] = cubeI.leftO[6];
		cube_333.frontB[7] = cubeI.leftO[7];
		cube_333.frontB[8] = cubeI.leftO[8];

		// Bring the 3 back tiles to the left side
		cube_333.leftO[6] = cubeI.backG[6];
		cube_333.leftO[7] = cubeI.backG[7];
		cube_333.leftO[8] = cubeI.backG[8];

		// Bring the 3 right tiles to the back
		cube_333.backG[6] = cubeI.rightR[6];
		cube_333.backG[7] = cubeI.rightR[7];
		cube_333.backG[8] = cubeI.rightR[8];

		// Bring the 3 front tiles to the right
		cube_333.rightR[6] = frontB_6;
		cube_333.rightR[7] = frontB_7;
		cube_333.rightR[8] = frontB_8;

		// Return the new cube
		return cube_333;
	},

// Rotate the DOWN (bottom) face counter-clockwise. (As if you are looking at the face.)
// This function will take the cube object as an input,
// move the pieces to the appropriate locations, and then return the cube object.
	rotateDp: function (cube_333) {
		var cubeI = cube_333;
		var frontB_6 = cube_333.frontB[6];
		var frontB_7 = cube_333.frontB[7];
		var frontB_8 = cube_333.frontB[8];

		// Rotating the bottom face changes the position of 8 of the tiles
		cube_333.botW = [cubeI.botW[2],cubeI.botW[5],cubeI.botW[8],cubeI.botW[1],cubeI.botW[4],cubeI.botW[7],cubeI.botW[0],cubeI.botW[3],cubeI.botW[6]];

		// Bring the 3 right tiles to the front
		cube_333.frontB[6] = cubeI.rightR[6];
		cube_333.frontB[7] = cubeI.rightR[7];
		cube_333.frontB[8] = cubeI.rightR[8];

		// Bring the 3 back tiles to the right side
		cube_333.rightR[6] = cubeI.backG[6];
		cube_333.rightR[7] = cubeI.backG[7];
		cube_333.rightR[8] = cubeI.backG[8];

		// Bring the 3 left tiles to the back
		cube_333.backG[6] = cubeI.leftO[6];
		cube_333.backG[7] = cubeI.leftO[7];
		cube_333.backG[8] = cubeI.leftO[8];

		// Bring the 3 front tiles to the left
		cube_333.leftO[6] = frontB_6;
		cube_333.leftO[7] = frontB_7;
		cube_333.leftO[8] = frontB_8;

		// Return the new cube
		return cube_333;
	},

// Rotate the MIDDLE face clockwise. (As if you are looking from the left face.)
// This function will take the cube object as an input,
// move the pieces to the appropriate locations, and then return the cube object.
	rotateM: function (cube_333) {
		var cubeI = cube_333;
		var botW_1 = cube_333.botW[1];
		var botW_4 = cube_333.botW[4];
		var botW_7 = cube_333.botW[7];

		// Bring the 3 front tiles to the bottom
		cube_333.botW[1] = cubeI.frontB[1];
		cube_333.botW[4] = cubeI.frontB[4];
		cube_333.botW[7] = cubeI.frontB[7];

		// Bring the 3 top tiles to the front
		cube_333.frontB[1] = cubeI.topY[1];
		cube_333.frontB[4] = cubeI.topY[4];
		cube_333.frontB[7] = cubeI.topY[7];

		// Bring the 3 back tiles to the top
		cube_333.topY[1] = cubeI.backG[7];
		cube_333.topY[4] = cubeI.backG[4];
		cube_333.topY[7] = cubeI.backG[1];

		// Bring the 3 bottom tiles to the back
		cube_333.backG[7] = botW_1;
		cube_333.backG[4] = botW_4;
		cube_333.backG[1] = botW_7;

		// Return the new cube
		return cube_333;
	},

// Rotate the MIDDLE face counter-clockwise. (As if you are looking from the left face.)
// This function will take the cube object as an input,
// move the pieces to the appropriate locations, and then return the cube object.
	rotateMp: function (cube_333) {
		var cubeI = cube_333;
		var botW_1 = cube_333.botW[1];
		var botW_4 = cube_333.botW[4];
		var botW_7 = cube_333.botW[7];

		// Bring the 3 back tiles to the bottom
		cube_333.botW[1] = cubeI.backG[7];
		cube_333.botW[4] = cubeI.backG[4];
		cube_333.botW[7] = cubeI.backG[1];

		// Bring the 3 top tiles to the back
		cube_333.backG[7] = cubeI.topY[1];
		cube_333.backG[4] = cubeI.topY[4];
		cube_333.backG[1] = cubeI.topY[7];

		// Bring the 3 front tiles to the top
		cube_333.topY[1] = cubeI.frontB[1];
		cube_333.topY[4] = cubeI.frontB[4];
		cube_333.topY[7] = cubeI.frontB[7];

		// Bring the 3 bottom tiles to the front
		cube_333.frontB[1] = botW_1;
		cube_333.frontB[4] = botW_4;
		cube_333.frontB[7] = botW_7;

		// Return the new cube
		return cube_333;
	},

	// Update the cube on the web site by changing all the background
	// colors
	updateCube: function (cube_333) {
		for (i=0;i<9;i++) {
				document.getElementById(cube_333.topY_id[i]).style.background = cube_333.topY[i];
				document.getElementById(cube_333.leftO_id[i]).style.background = cube_333.leftO[i];
				document.getElementById(cube_333.frontB_id[i]).style.background = cube_333.frontB[i];
				document.getElementById(cube_333.rightR_id[i]).style.background = cube_333.rightR[i];
				document.getElementById(cube_333.backG_id[i]).style.background = cube_333.backG[i];
				document.getElementById(cube_333.botW_id[i]).style.background = cube_333.botW[i];
			}
		}
};

// Log the original cube object
// console.log(cube_333);

// Example of how to use the rotate
// cube_333 = cubecore.rotateU(cube_333);

// Scramble and then update the cube
/*
cube_333 = cubecore.rotateU(cube_333);
cube_333 = cubecore.rotateB(cube_333);
cube_333 = cubecore.rotateUp(cube_333);
cube_333 = cubecore.rotateF(cube_333);
cube_333 = cubecore.rotateD(cube_333);
cube_333 = cubecore.rotateB(cube_333);
cube_333 = cubecore.rotateL(cube_333);
cubecore.updateCube(cube_333);
*/
