gsap.registerPlugin(ScrollTrigger);

// Skyline zooms in
gsap.to("#bg", {
	scrollTrigger: {
		scrub: true,
	},
	y: 200,
	scale: 1.5,
});

// Moon sliding to the left and scaling up
gsap.to("#moon", {
	scrollTrigger: {
		scrub: true,
	},
	x: -400,
	scale: 2,
});

// Cloud 1 sliding to the left
gsap.to("#cloud1", {
	scrollTrigger: {
		scrub: true,
	},
	x: -400,
});

// Cloud 2 sliding to the right
gsap.to("#cloud2", {
	scrollTrigger: {
		scrub: true,
	},
	x: 300,
});

// Jet sliding to the lower right and scaling up
gsap.to("#jet", {
	scrollTrigger: {
		scrub: true,
	},
	x: 1500,
	y: 200,
	scale: 3,
});

// Iron Man sliding up on y-axis, scaling and rotating to the left
gsap.to("#ironman", {
	scrollTrigger: {
		scrub: true,
	},
	x: 0,
	y: -1800,
	scale: 2.5,
	rotate: -30,
});
