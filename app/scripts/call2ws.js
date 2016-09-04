var page_flip, vertical_scroll,

	disable_h = disable_v = false,

	prev_page = prev_x = prev_y = 0,

	pages;



function loaded() {

	setTimeout(function () {

		pages = document.querySelectorAll('.scroller');



		page_flip = new iScroll('pageflip', {

			hScrollbar: false,

			vScrollbar: false,

			snap:true,

			momentum:false,

			desktopCompatibility:true,

			onScrollEnd: updateVerticalScroller

		});



		vertical_scroll = new iScroll(pages[page_flip.pageX], {

			hScrollbar: false,

			vScrollbar: false,

			snap:true,

			momentum:false,

			desktopCompatibility:true

		});



		// Free some mem

		window.removeEventListener('load', loaded, false);

	}, 100);

}



function updateVerticalScroller () {

	prev_x = vertical_scroll.x;

	prev_y = vertical_scroll.y;



	if (page_flip.pageX!=prev_page) {

		vertical_scroll = vertical_scroll.destroy();

		pages[prev_page].style.webkitTransitionDuration = '0';

		pages[prev_page].style.webkitTransform = 'translate3d(' + prev_x + 'px, ' + prev_y + 'px, 0)';

		vertical_scroll = new iScroll(pages[page_flip.pageX], {

			hScrollbar: false,

			vScrollbar: false,

			desktopCompatibility:true,

			snap:true,

			momentum:false, 

		});

		prev_page = page_flip.pageX;

	}

}



document.addEventListener('touchmove', function (e) { e.preventDefault(); }, true);

window.addEventListener('load', loaded, false);

