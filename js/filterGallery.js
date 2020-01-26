$(document).ready(() => {

	$('.links').click((e) => {
		$('.selected').removeClass('selected');
		$(e.target).addClass('selected');
	})

	$('.links').click((e) => {
		let filter = $(e.target).attr('data-filter');

		if(filter == "all") {
			$('.gallery__container li').show(500);
		} else { 
			$('.gallery__container li').not('.'+filter).hide(500);
			$('.gallery__container li').filter('.'+filter).show(500);
		}
	})


	let $overlay = $('<div id="overlay"></div>');
	let $image = $('<img>');

	//An image to overlay
	$overlay.append($image);

	//Add overlay
	$('body').append($overlay);

	$('.gallery__container a').click(function(e) {
		e.preventDefault();

		let imageLocation = $(this).attr('href');

	    //update overlay with the image linked in the link
	    $image.attr("src", imageLocation);

	    console.log($image);

	    //show the overlay
	    $overlay.show('slow');
	})

	$('#overlay').click(function() {
		$('#overlay').hide('slow');
	});
}) 
