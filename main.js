$(document).ready(function () {
	$(".filter").on("click", function (e) {

		$(".item.active").removeClass("active");
		$("[type='checkbox']:checked").each(function () {
			var checkbox = $(this),
				filter = checkbox.data("filter");
			$("." + filter).addClass("active");
		});


		$("#all").on("click", function (e) {
			if (this.checked) {
				$(":checkbox").each(function () {
					this.checked = true;
				});
			} else {
				$(':checkbox').each(function () {
					this.checked = false;
				});
			}

		});

		$("#reset").on("click", function (e) {
			$(":checkbox").each(function () {
				this.checked = false;
				$(".item.active").removeClass("active");
			});
		})

	});



	/*item").addClass("active");
	console.log("hello world")*/

});






/*

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
