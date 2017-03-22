window.onload = function(){
	
	function setTwitterStyle(id){
		var frameContent = document.getElementById(id).contentWindow.document;
		var frameBlockBg = frameContent.querySelector('.timeline-Widget');
		frameBlockBg.style.background = 'transparent';
	}

	setTwitterStyle('twitter-widget-0');
}