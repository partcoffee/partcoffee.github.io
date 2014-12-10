var body = document.body;
var container = document.getElementById("container");

var isTouchscreen;
var scrollVal = 0;
	
var layer0 = document.getElementById("layer-0");
var layer1 = document.getElementById("layer-1");
var layer2 = document.getElementById("layer-2");
var layer3 = document.getElementById("layer-3");

function setup()
{
	var platform = navigator.platform.toLowerCase();
	var userAgent = navigator.userAgent.toLowerCase();
	
	if ( platform.indexOf('ipad') != -1  ||  platform.indexOf('iphone') != -1 ) 
	{
		isTouchscreen = 1;
		container.setAttribute("class", "touch");
		body.style.backgroundImage = 'none';
	}
	
	else if (platform.indexOf('win32') != -1 || platform.indexOf('linux') != -1)
	{
		isTouchscreen = 0;
						
		if ($.browser.webkit)
		{
			$.srSmoothscroll();
		}
	}
	
	else
	{
		isTouchscreen = 0;
	}

}

function parallaxy()
{
	offset4 = -(scrollVal * -0.04).toFixed(1);
	offset3 = 0;
	offset2 = -(scrollVal * -0.2).toFixed(1);
	offset1 = -(scrollVal * -0.32).toFixed(1);
	offset0 = -(scrollVal * -0.36).toFixed(1);

	layer0.style.webkitTransform = "translate3d(0, " + offset0 + "px, 0)";
	layer0.style.MozTransform = "translate3d(0, " + offset0 + "px, 0)";
	layer0.style.msTransform = "translateY(" + offset0 + "px)";
	layer0.style.OTransform = "translate3d(0, " + offset0 + "px, 0)";
	layer0.style.transform = "translate3d(0, " + offset0 + "px, 0)";

	layer1.style.webkitTransform = "translate3d(0, " + offset1 + "px, 0)";
	layer1.style.MozTransform = "translate3d(0, " + offset1 + "px, 0)";
	layer1.style.msTransform = "translateY(" + offset1 + "px)";
	layer1.style.OTransform = "translate3d(0, " + offset1 + "px, 0)";
	layer1.style.transform = "translate3d(0, " + offset1 + "px, 0)";

	layer2.style.webkitTransform = "translate3d(0, " + offset2 + "px, 0)";
	layer2.style.MozTransform = "translate3d(0, " + offset2 + "px, 0)";
	layer2.style.msTransform = "translateY(" + offset2 + "px)";
	layer2.style.OTransform = "translate3d(0, " + offset2 + "px, 0)";
	layer2.style.transform = "translate3d(0, " + offset2 + "px, 0)";

	layer3.style.webkitTransform = "translate3d(0, " + offset3 + "px, 0)";
	layer3.style.MozTransform = "translate3d(0, " + offset3 + "px, 0)";
	layer3.style.msTransform = "translateY(" + offset3 + "px)";
	layer3.style.OTransform = "translate3d(0, " + offset3 + "px, 0)";
	layer3.style.transform = "translate3d(0, " + offset3 + "px, 0)";
}


function scrollHandler(e)
{
	scrollVal = Math.max(window.pageYOffset,0);
	
	/* UNCOMMENT THESE LINES TO ABORT PARALLAX STUFF */
/*
	isTouchscreen = 1;
	container.setAttribute("class", "touch");
	body.style.backgroundImage = 'none';
	firewatchlogo.style.position = 'absolute';
*/
	
	if ( isTouchscreen != 1 )
	{
		parallaxy()
	}
}

body.onload = setup();
document.addEventListener('scroll', scrollHandler, false);
