// Menu Show & Hide 
function openMenu() {
	document.getElementById("menu").style.right = "0%";
}

function closeMenu() {
	document.getElementById("menu").style.right = "-100%";
}


// Search Show & Hide 
function openSearch() {
	document.getElementById("myOverlay").style.top = "0%";
}

function closeSearch() {
	document.getElementById("myOverlay").style.top = "-100%";
}


// Collapse Mega Menu
var linkToggle = document.querySelectorAll('.js-toggle');

for (i = 0; i < linkToggle.length; i++) {

	linkToggle[i].addEventListener('click', function (event) {

		event.preventDefault();

		var container = document.getElementById(this.dataset.container);

		if (!container.classList.contains('active')) {

			container.classList.add('active');
			container.style.height = 'auto';

			var height = container.clientHeight + 'px';

			container.style.height = '0px';

			setTimeout(function () {
				container.style.height = height;
			}, 0);

		} else {

			container.style.height = '0px';

			container.addEventListener('transitionend', function () {
				container.classList.remove('active');
			}, {
				once: true
			});

		}

	});

}


// SLIDER -1
var swiper = new Swiper('.swiper-container1', {
	slidesPerView: 1,
	spaceBetween: 30,
	loop: true,
	autoplay: {
		delay: 2500,
		disableOnInteraction: false,
	},
	navigation: {
		prevEl: '.swiper-prev-1',
	},
	breakpoints: {
		576: {
			slidesPerView: 2,
			spaceBetween: 20,
		},
		768: {
			slidesPerView: 3,
			spaceBetween: 20,
		},
		992: {
			slidesPerView: 3,
			spaceBetween: 30,
		},
	}
});


// SLIDER -2
var swiper = new Swiper('.swiper-container2', {
	slidesPerView: 1,
	spaceBetween: 30,
	loop: true,
	autoplay: {
		delay: 2500,
		disableOnInteraction: false,
	},
	navigation: {
		prevEl: '.swiper-prev-2',
	},
	breakpoints: {
		576: {
			slidesPerView: 2,
			spaceBetween: 20,
		},
		768: {
			slidesPerView: 3,
			spaceBetween: 20,
		},
		992: {
			slidesPerView: 3,
			spaceBetween: 30,
		},
	}
});


// SLIDER -3
var swiper = new Swiper('.swiper-container3', {
	slidesPerView: 1,
	spaceBetween: 30,
	loop: true,
	autoplay: {
		delay: 2500,
		disableOnInteraction: false,
	},
	navigation: {
		prevEl: '.swiper-prev-3',
	},
	breakpoints: {
		768: {
			slidesPerView: 2,
			spaceBetween: 30,
		},
	}
});


// Back to top 
var mybutton = document.getElementById("up__btn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () {
	scrollFunction();
};

function scrollFunction() {
	if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
		mybutton.style.opacity = "1";
	} else {
		mybutton.style.opacity = "0";
	}
}
mybutton.addEventListener("click", topFunction);
// When the user clicks on the button, scroll to the top of the document
function topFunction() {
	document.body.scrollTop = 0;
	document.documentElement.scrollTop = 0;
}