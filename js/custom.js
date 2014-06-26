	$(function(){
		$('#intro .content').css({'height':($(window).height())+'px'});
		$(window).resize(function(){
		$('#intro .content').css({'height':($(window).height())+'px'});
		});
	});

	$('#award_carousel').carousel({
		interval: 2500,
		pause: "hover"
	});

	$('#ourwork_carousel').carousel({
		interval: 3000,
		pause: "hover"
	});

	$('#video_carousel').hover(function(){
			$('#ourwork_carousel').carousel({interval: false});
	});