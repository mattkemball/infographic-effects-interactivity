var $class1 = $('.popular');
var $class2 = $('.notpopular');


$class1.waypoint(function (direction) {
	if (direction == 'down') {
		$class1.addClass('popular-image-animate');
	} else {
		$class1.removeClass('popular-image-animate');
	}
}, { offset: '10%'});

$class2.waypoint(function (direction) {
	if (direction == 'down') {
		$class2.addClass('notpopular-image-animate');
	} else {
		$class2.removeClass('notpopular-image-animate');
	}
}, { offset: '50%'});