var bee = document.getElementById("bee");
document.addEventListener("mousemove", getMouse); 


bee.style.position = "absolute"; //css		
var beepos = {x:0, y:0};

setInterval(followMouse, 50);

var mouse = {x:0, y:0}; //mouse.x, mouse.y

var dir = "right";
function getMouse(e){
    mouse.x = e.pageX;
    mouse.y = e.pageY;
//Checking directional change
if(mouse.x > beepos.x){
  dir = "right";
} else {
  dir = "left";
}
}

function followMouse(){
    //1. find distance X , distance Y
    var distX = mouse.x - beepos.x;
    var distY = mouse.y - beepos.y;
    //Easing motion
//Progressive reduction of distance 
    beepos.x += distX/5;
    beepos.y += distY/2;
    
    bee.style.left = beepos.x + "px";
    bee.style.top = beepos.y + "px";


//Apply css class 
if (dir == "right"){
  bee.setAttribute("class", "right");
} else {
  bee.setAttribute("class", "left");        
}
    
}

function counter_fn() {
    var counter = document.getElementById("cntr");
    var count = 0;
    count = counter.value;
    count = count + 1;
    counter.innerHTML = count;
  
  window.onload = counter_fn;} 



  /* ---------------- FISH "CLASS" START -------------- */
var FOLLOW_DISTANCE = 100;

var Fish = function(id) {
	this.id = id;
	this.entourage = [];
	// dx/yx is current speed, ox/oy is the previous one
	this.ox = this.dx = Math.random() - 0.5;
	this.oy = this.dy = Math.random() - 0.5;

	this.x = canvas.width * Math.random();
	this.y = canvas.height * Math.random();

	// A couple of helper functions, the names should describe their purpose
	Fish.prototype.angleToClosestFish = function(otherFish) {
		otherFish = otherFish == null ? this.following : otherFish;
		if (otherFish) {
			return Math.atan2(otherFish.y - this.y, otherFish.x - this.x);
		} else {
			return Number.MAX_VALUE;
		}
	}

	Fish.prototype.angleFromFishDirectionToClosestFish = function(otherFish) {
		otherFish = otherFish == null ? this.following : otherFish;
		if (otherFish) {
			return Math.abs(deltaAngle(this.angle, this.angleToClosestFish(otherFish)));
		} else {
			return Number.MAX_VALUE;
		}
	}

	Fish.prototype.angleDirectionDifference = function(otherFish) {
		otherFish = otherFish == null ? this.following : otherFish;

		if (otherFish) {
			Math.abs(deltaAngle(this.angle, otherFish.angle));
		} else {
			return Number.MAX_VALUE;
		}
	}



	// Update the fish "physics"
	Fish.prototype.calc = function() {
		this.ox = this.dx;
		this.oy = this.dy;
		var MAX_SPEED = 1.1;
		var maxSpeed = MAX_SPEED;

		//Do I need to find another fish buddy?
		if (this.following == null || py(this.x - this.following.x, this.y - this.following.y) > FOLLOW_DISTANCE) {
			if (this.following != null) {
				if (keyDown) affinityLine(this.following, this, "white");
				this.following.entourage.splice(this.following.entourage.indexOf(this));
			}

			this.following = null;

			//attract closer to other fish - find closest
			var closestDistance = Number.MAX_VALUE;
			var closestFish = null;

			for (var i = 0; i < fishes.length; i++) {
				var fish = fishes[i];
				if (fish != this) {
					var distance = py(this.x - fish.x, this.y - fish.y);
					// Is it closer, within the max distance and within the sector that the fish can see?
					if (distance < closestDistance && fish.following != this && distance < FOLLOW_DISTANCE && this.angleFromFishDirectionToClosestFish(fish) < Math.PI * 0.25) {
						closestDistance = distance;
						closestFish = fish;
					}
				}
			}
			if (closestFish != null) {
				this.following = closestFish;
				closestFish.entourage.push(this);
			}
		}

		// Fish is following another
		if (this.following != null) {
			// Go closer to other fish
			this.followingDistance = py(this.x - this.following.x, this.y - this.following.y);
			this.distanceFactor = 1 - this.followingDistance / FOLLOW_DISTANCE;

			// If going head on, just break a little before following
			if (this.angleDirectionDifference() > (Math.PI * 0.9) && // On colliding angle?
				this.angleFromFishDirectionToClosestFish() < (Math.PI * 0.2)) { // In colliding sector?
				this.dx += this.following.x * 0.1;
				this.dy += this.following.y * 0.1;
				if (keyDown) affinityLine(this.following, this, "yellow");
			} else if (this.followingDistance > FOLLOW_DISTANCE * 0.3) { // Dont go closer if close
				this.dx += Math.cos(this.angleToClosestFish()) * (0.05 * this.distanceFactor);
				this.dy += Math.sin(this.angleToClosestFish()) * (0.05 * this.distanceFactor);
			}
			if (keyDown) affinityLine(this.following, this, "red");
		}

		// Go closer to center, crashing into the canvas walls is just silly!
		if (this.x < canvas.width * .1 || this.x > canvas.width * .9 || this.y < canvas.height * .2 || this.y > canvas.height * .8) {
			this.dx += (canvas.width / 2 - this.x) / 5000;
			this.dy += (canvas.height / 2 - this.y) / 5000;
		}

		// Poor little fishies are scared of your cursor
		if (py(this.x - cursor.x, this.y - cursor.y) < FOLLOW_DISTANCE * 0.75) {
			this.dx -= (cursor.x - this.x) / 500;
			this.dy -= (cursor.y - this.y) / 500;
			maxSpeed = 4;
			if (keyDown) affinityLine(cursor, this, "green");
		}

		// If following fish, try avoid going close to your siblings
		if (this.following != null) {
			for (var i = 0; i < this.following.entourage.length; i++) {
				var siblingFish = this.following.entourage[i];
				if (siblingFish !== this) {
					if (py(this.x - siblingFish.x, this.y - siblingFish.y) < FOLLOW_DISTANCE * 0.2) {
						if (keyDown) affinityLine(siblingFish, this, "yellow");
						this.dx -= (siblingFish.x - this.x) / 1000;
						this.dy -= (siblingFish.y - this.y) / 1000;
					}
				}
			}
		}

		// Calculate heading from new speed
		this.angle = Math.atan2(this.dy, this.dx);

		// Grab the speed from the vectors, and normalize it
		var speed = Math.max(0.1, Math.min(maxSpeed, py(this.dx, this.dy)));

		// Recreate speed vector from recombining angle of direction with normalized speed
		this.dx = Math.cos(this.angle) * (speed + speedBoost);
		this.dy = Math.sin(this.angle) * (speed + speedBoost);

		// Fish like to move it, move it!
		this.x += this.dx;
		this.y += this.dy;
	}
}

/* ---------------------- FISH "CLASS" END -------------- */

/* ---------------------- MAIN START -------------------- */
var canvas = document.getElementById('fishtank');
var context = canvas.getContext('2d');

var fishes = [];


var speedBoostCountdown = 200,
	speedBoost = 0,
	SPEED_BOOST = 2;
var fishBitmap = new Image()
fishBitmap.onload = function() {
	update();
};
fishBitmap.src = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAFCAYAAABFA8wzAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyNpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNS1jMDE0IDc5LjE1MTQ4MSwgMjAxMy8wMy8xMy0xMjowOToxNSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIChNYWNpbnRvc2gpIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjZEMjNEMUIyQjI1MTExRTM5QzhDQjczMjRDQUI3RkMwIiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOjZEMjNEMUIzQjI1MTExRTM5QzhDQjczMjRDQUI3RkMwIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6NkQyM0QxQjBCMjUxMTFFMzlDOENCNzMyNENBQjdGQzAiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6NkQyM0QxQjFCMjUxMTFFMzlDOENCNzMyNENBQjdGQzAiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz5h3qMOAAAAkUlEQVR42pyQsQrCQBBEPYkiQgSjRCvTpPf/f0OwtLIXlGAICZ5vyAhXWWTgcXCwj50NszEBCthCDitY+l8ZoIMWGniZIcY4CkLY8JQaKKH28BXOiehfZHqaHazhosEMDlDBx9tNyY1t75IdLVtMkLxdXec6Ufvxqzb32kVywyyp1pvWksZVO90QkTx7Ob4CDADGaiOnQPuXSgAAAABJRU5ErkJggg==';

//Draw Circle
function draw(f) {
	var r = f.angle + Math.PI;

	context.translate(f.x, f.y);
	context.rotate(r);

	var w = 20;
	var acc = py(f.dx - f.ox, f.dy - f.oy) / 0.05;

	// If a fish does a "flip", make it less wide
	if (acc > 1) {
		w = 10 + 10 / acc;
	}

	context.drawImage(fishBitmap, 0, 0, w, 6);
	context.rotate(-r);
	context.translate(-f.x, -f.y);
}

// Pythagoras shortcut
function py(a, b) {
	return Math.sqrt(a * a + b * b);
}

//------------ USER INPUT START -------------
var cursor = {
	x: 0,
	y: 0
};
var cursorDown = false,
	keyDown = false;

document.onmousemove = function(e) {
	cursor.x = e.pageX - (window.innerWidth / 2 - canvas.width / 2);
	cursor.y = e.pageY - (window.innerHeight / 2 - canvas.height / 2);
}

document.onmouseout = function(e) { //Out of screen is not a valid pos
	cursor.y = cursor.x = Number.MAX_VALUE;
}

document.onmousedown = function() {
	activateSpeedBoost();
	cursorDown = true;
}
document.onmouseup = function() {
	cursorDown = false;
}

document.onkeydown = function() {
	keyDown = true;
}

document.onkeyup = function() {
		keyDown = false;
	}
	//------------ USER INPUT STOP -------------

function deltaAngle(f, o) { //Find the shortest angle between two
	var r = f - o;
	return Math.atan2(Math.sin(r), Math.cos(r));
}

function affinityLine(f, o, c) { //Draw a line with pretty gradient
	var grad = context.createLinearGradient(f.x, f.y, o.x, o.y);
	grad.addColorStop(0, c);
	grad.addColorStop(1, "black");

	context.strokeStyle = grad;
	context.beginPath();
	context.moveTo(f.x, f.y);
	context.lineTo(o.x, o.y);
	context.stroke();
}

function activateSpeedBoost() {
	speedBoostCountdown = 400 + Math.round(400 * Math.random());
	speedBoost = SPEED_BOOST;
}

//Update and draw all of them
function update() {
		if (fishes.length < 500) {
			fishes.push(new Fish(fishes.length));
		}

		if (!cursorDown) {
			//clear the canvas
			canvas.width = canvas.width; //Try commenting this line :-)

			//Update and draw fish
			for (var i = 0; i < fishes.length; i++) {
				var fish = fishes[i];
				fish.calc();
				draw(fish);
			}
		}

		speedBoostCountdown--;
		if (speedBoostCountdown < 0) {
			activateSpeedBoost();
		}

		if (speedBoost > 0) {
			speedBoost -= SPEED_BOOST / 80; //Reduce speed bost fast!
		} else {
			speedBoost = 0;
		}

		requestAnimationFrame(update);
	}
	/* ---------------------- MAIN END ----------------------- */

	
	function animateValue(id, start, end, duration) {
		var range = end - start;
		var current = start;
		var increment = end > start? 1 : +1;
		var stepTime = Math.abs(Math.floor(duration / range));
		var obj = document.getElementById(id);
		var timer = setInterval(function() {
			current += increment;
			obj.innerHTML = current;
			if (current == end) {
				clearInterval(timer);
			}
		}, stepTime);
	}
	
	animateValue("value", 0, 11417, 5000);
	
	