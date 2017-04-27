$(document).ready(function () {
	$(".filter").on("click", function (e) {

		$(".item.active").removeClass("active");
		$("[type='checkbox']:checked").each(function () {
			var checkbox = $(this),
				filter = checkbox.data("filter");
			$("." + filter).addClass("active");
		});

	});

	if (filter === "reset") {
		$(".item").removeClass("active");
	} else {
		$(".item.active").addClass("active");
		$(".item" + "." + filter).addClass("active");
	}

	/*if (filter === "all") {
			$(".item").addClass("active");

		}
*/



});
