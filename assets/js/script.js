$(document).ready(function() {
	
	/*** scroll to sidebar sections ***/

	$("sidebar-button").click(function( event) {
		event.preventDefault();
		$("html, body").animate({ scrollTop: $($(this).attr("href")).offset().top }, 1000);
	})

	/*** flip photos ***/

    $(".flip").flip({
        trigger: 'click'
    });

    /*** carousel ***/ 

    const distanceToNextImage = -1000;
	let currentImageNumber = 0;

	$("#right").click(function() {
		currentImageNumber = (currentImageNumber + 1) % 3;
		$("#carousel-strip").css("left", currentImageNumber * distanceToNextImage);
	})

	$("#left").click(function () {
		currentImageNumber = (currentImageNumber - 1) % 3;
		if (currentImageNumber < 0) {
			currentImageNumber = currentImageNumber + 3
		}
		$("#carousel-strip").css("left", currentImageNumber * distanceToNextImage);
	})

	$(".location-icon").click(function () {
		currentImageNumber = parseInt($(this).attr("id"));
		$("#lightbox").show()
		$("#carousel-strip").css("left", currentImageNumber * distanceToNextImage);
		$("#food-locations").hide();
		$("#locations-title").hide();
	})

	$("#x-button").click(function () {
		$("#lightbox").hide()
		$("#food-locations").show();
		$("#locations-title").show();
	})

});