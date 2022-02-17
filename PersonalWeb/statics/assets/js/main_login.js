(function (a) {
    var c = a(".validate-input .input100");
	var	$body = $('body')
    a(".validate-form").on("submit", function () {
        var f = true;
        for (var g = 0; g < c.length; g++) {
            if (e(c[g]) == false) {
                d(c[g]);
                f = false
            }
        }
        return f
    });
    a(".validate-form .input100").each(function () {
        a(this).focus(function () {
            b(this)
        })
    });

    function e(f) {
        if (a(f).attr("type") == "email" || a(f).attr("name") == "email") {
            if (a(f).val().trim().match(/^([a-zA-Z0-9_\-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9\-]+\.)+))([a-zA-Z]{1,5}|[0-9]{1,3})(\]?)$/) == null) {
                return false
            }
        } else {
            if (a(f).val().trim() == "") {
                return false
            }
        }
    }

    function d(f) {
        var g = a(f).parent();
        a(g).addClass("alert-validate")
    }

    function b(f) {
        var g = a(f).parent();
        a(g).removeClass("alert-validate")
    }
    // Menu.
		var $menu = $('#menu'),
			$menuInner;

		$menu.wrapInner('<div class="inner"></div>');
		$menuInner = $menu.children('.inner');
		$menu._locked = false;

		$menu._lock = function() {

			if ($menu._locked)
				return false;

			$menu._locked = true;

			window.setTimeout(function() {
				$menu._locked = false;
			}, 350);

			return true;

		};

		$menu._show = function() {

			if ($menu._lock())
				$body.addClass('is-menu-visible');

		};

		$menu._hide = function() {

			if ($menu._lock())
				$body.removeClass('is-menu-visible');

		};

		$menu._toggle = function() {

			if ($menu._lock())
				$body.toggleClass('is-menu-visible');

		};

		$menuInner
			.on('click', function(event) {
				event.stopPropagation();
			})
			.on('click', 'a', function(event) {

				var href = $(this).attr('href');

				event.preventDefault();
				event.stopPropagation();

				// Hide.
					$menu._hide();

				// Redirect.
					window.setTimeout(function() {
						window.location.href = href;
					}, 250);

			});

		$menu
			.appendTo($body)
			.on('click', function(event) {

				event.stopPropagation();
				event.preventDefault();

				$body.removeClass('is-menu-visible');

			})
			.append('<a class="close" href="#menu">Close</a>');

		$body
			.on('click', 'a[href="#menu"]', function(event) {

				event.stopPropagation();
				event.preventDefault();

				// Toggle.
					$menu._toggle();

			})
			.on('click', function(event) {

				// Hide.
					$menu._hide();

			})
			.on('keydown', function(event) {

				// Hide on escape.
					if (event.keyCode == 27)
						$menu._hide();

			});
})(jQuery);