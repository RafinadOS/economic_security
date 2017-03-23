window.onload = function(){
	
	var bodyWidth = document.body.offsetWidth;

	function setTwitterStyle(id) {
		var frameContent = document.getElementById(id).contentWindow.document;
		if (frameContent) 
		{
			var frameBlockBg = frameContent.querySelector('.timeline-Widget');
			frameBlockBg.style.background = 'transparent';
		}
	}

	function slideMenu() {

		var buttonToggle = document.querySelector('.show-menu');
		var body = document.querySelector('.body');

		buttonToggle.addEventListener('click', function(){
			body.classList.toggle('left-menu-open');
		}, false);

		if(bodyWidth > 740)
		{
			body.classList.remove('left-menu-open');
		}

	}

	if(bodyWidth <= 740) {
		slideMenu()
	}

	setTwitterStyle('twitter-widget-0'), 500;
	window.addEventListener('resize', slideMenu, false);
}