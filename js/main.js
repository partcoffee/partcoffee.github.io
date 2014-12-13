var body = document.body;
var container = document.getElementById("container");

var isTouchscreen;
var scrollVal = 0;
	
var layer0 = document.getElementById("layer-0");
var layer1 = document.getElementById("layer-1");
var layer2 = document.getElementById("layer-2");
var layer3 = document.getElementById("layer-3");
var layer4 = document.getElementById("layer-4");

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
	
	else
	{
		isTouchscreen = 0;
	}

}

function parallaxy()
{
	offset4 = -(scrollVal * -0.6).toFixed(1);
	offset3 = -(scrollVal * -0.5).toFixed(1);
	offset2 = -(scrollVal * -0.4).toFixed(1);
	offset1 = -(scrollVal * -0.2).toFixed(1);
	offset0 = 0;


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

	layer4.style.webkitTransform = "translate3d(0, " + offset4 + "px, 0)";
	layer4.style.MozTransform = "translate3d(0, " + offset4 + "px, 0)";
	layer4.style.msTransform = "translateY(" + offset4 + "px)";
	layer4.style.OTransform = "translate3d(0, " + offset4 + "px, 0)";
	layer4.style.transform = "translate3d(0, " + offset4 + "px, 0)";
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

function images()
{
	$('#traditional').magnificPopup({
	    items: [
	      {
	        src: 'img/traditional/01.png'
	      },
	      {
	        src: 'img/traditional/02.jpg'
	      },
	      {
	        src: 'img/traditional/03.jpg'
	      },
	      {
	        src: 'img/traditional/04.jpg'
	      },
	      {
	        src: 'img/traditional/05.jpg'
	      },
	      {
	        src: 'img/traditional/07.jpg'
	      },
	      {
	        src: 'img/traditional/08.jpg'
	      },
	      {
	        src: 'img/traditional/09.jpg'
	      },
	      {
	        src: 'img/traditional/10.jpg'
	      },
	      {
	        src: 'img/traditional/11.jpg'
	      },
	      {
	        src: 'img/traditional/12.jpg'
	      },
	      {
	        src: 'img/traditional/13.jpg'
	      },
	      {
	        src: 'img/traditional/14.jpg'
	      },
	      {
	        src: 'img/traditional/15.jpg'
	      },
	      {
	        src: 'img/traditional/16.jpg'
	      },
	      {
	        src: 'img/traditional/17.jpg'
	      },
	      {
	        src: 'img/traditional/18.jpg'
	      },
	      {
	        src: 'img/traditional/19.jpg'
	      },
	      {
	        src: 'img/traditional/20.jpg'
	      },
	      {
	        src: 'img/traditional/21.jpg'
	      },
	      {
	        src: 'img/traditional/22.jpg'
	      },
	      {
	        src: 'img/traditional/23.jpg'
	      },
	    ],
	    gallery: {
	      enabled: true
	    },
	    type: 'image'
	});

	$('#digital').magnificPopup({
	    items: [
	      {
	        src: 'img/digital/01.jpg'
	      },
	      {
	        src: 'img/digital/02.jpg'
	      },
	      {
	        src: 'img/digital/03.jpg'
	      },
	      {
	        src: 'img/digital/04.jpg'
	      },
	      {
	        src: 'img/digital/05.png'
	      },
	      {
	        src: 'img/digital/06.png'
	      },
	      {
	        src: 'img/digital/07.jpg'
	      },
	      {
	        src: 'img/digital/08.jpg'
	      },
	      {
	        src: 'img/digital/09.jpg'
	      },
	      {
	        src: 'img/digital/10.jpg'
	      },
	      {
	        src: 'img/digital/11.png'
	      },
	      {
	        src: 'img/digital/12.jpg'
	      },
	      {
	        src: 'img/digital/13.jpg'
	      },
	      {
	        src: 'img/digital/14.jpg'
	      },
	      {
	        src: 'img/digital/15.jpg'
	      },
	      {
	        src: 'img/digital/16.jpg'
	      },
	      {
	        src: 'img/digital/17.jpg'
	      },
	    ],
	    gallery: {
	      enabled: true
	    },
	    type: 'image'
	});

	$('#videos').magnificPopup({
	    items: [
	      {
	        src: 'https://www.youtube.com/watch?v=JfPCn80MS2A',
	        type: 'iframe'
	      },
	      {
	        src: 'https://www.youtube.com/watch?v=lIsfPlJASFE',
	        type: 'iframe'
	      },
	      {
	        src: 'https://www.youtube.com/watch?v=L4WwDIY1JlA',
	        type: 'iframe'
	      },
	      {
	        src: 'https://www.youtube.com/watch?v=aLFrUH9AVik',
	        type: 'iframe'
	      },
	      {
	        src: 'https://www.youtube.com/watch?v=cH-SsWJfHec',
	        type: 'iframe'
	      },
	    ],
	    gallery: {
	      enabled: true
	    },
	    type: 'image'
	});
}