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

function swRegistration() {
	const heart = ["font-size: 20px", "padding: 12px", "margin: 4px 0 4px 4px", "color: rgba(238,58,136,1)"].join(";");
	if ("serviceWorker" in navigator) {
		navigator.serviceWorker
			.register("/parallax-scroll/sw.js", {
				scope: "/parallax-scroll/",
			})
			.then(function (registration) {
				console.log("%c❤️", heart);
			})
			.catch(function (err) {
				console.log(err);
			});
	}
}

function consoleText() {
	console.clear();
	const styles = [
		"color: white",
		"background: rgba(238,58,136,1)",
		"font-size: 18px",
		"padding: 12px",
		"margin: 6px 0 6px 14px",
	].join(";");
	const styles2 = ["font-size: 14px", "padding: 16px", "margin: 6px 0 6px 0", "color: rgba(238,58,136,1)"].join(";");
	console.log("%cHello World! I'm Emmanuel.", styles);
	console.log("%cThank you for checking out my work!", styles2);
	const gradient = [
		"font-size: 14px",
		"color: #fff",
		"width: 200px",
		"padding: 8px",
		"margin: 6px 0 6px 14px",
		"border-radius: 4px",
		"background: rgba(238,58,136,1)",
		"background: linear-gradient( 109.6deg, rgba(238,58,136,1) 11.2%, rgba(128,162,245,1) 91.1% )",
	].join(";");
	console.log("%cPortfolio%chttps://bit.ly/3QQr1Ux", gradient, styles2);
	console.log("%cLinkedin %chttps://bit.ly/3cygAD4", gradient, styles2);
	console.log("%cGithub   %chttps://bit.ly/3iwQC6U", gradient, styles2);
	console.log("%cThe README   %chttps://bit.ly/3f28as1", gradient, styles2);
	console.log("%cHave a wonderful day!", styles2);
}

swRegistration();
consoleText();
