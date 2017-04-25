$(document).ready(function () {
	$(".filter").on("click", function (e) {
		e.preventDefault();

		var button = $(this);
		var filter = button.data("filter");


		if (filter === "all") {
			$(".item").addClass("active");

		} else {
			/*$(".item.active").removeClass("active");*/
			$(".item" + "." + filter).addClass("active");
		}

		if (filter === "reset") {
			$(".item").removeClass("active");
		}

	});

	/*function toggle("button") {
		if
		$(this).val("click").addClass("btn_active");
	}

	});
	*/

});
