window.onload = function() {

	// Video
	var video = document.getElementById("video");

	// Buttons
	var playButton = document.getElementById("play-pause");
	var muteButton = document.getElementById("audio");

	// Sliders
	var seekBar = document.getElementById("seek-bar");


	// Event listener for the play/pause button
	playButton.addEventListener("click", function() {
		if (video.paused == true) {
			// Play the video
			video.play();

			// Update the button text to 'Pause'
			playButton.innerHTML = "Pause";
		} else {
			// Pause the video
			video.pause();

			// Update the button text to 'Play'
			playButton.innerHTML = "Play";
		}
	});







	// Click on slider to go to that time, you shouldn't have to drag
	// Show controls on mouseover, do not fade even though inactive


	// Event listener for the mute button
	muteButton.addEventListener("click", function() {
	  if (video.muted == false) {
	    // Mute the video
	    video.muted = true;

	    // Update the button text
	    muteButton.innerHTML = "Unmute";
	  } else {
	    // Unmute the video
	    video.muted = false;

	    // Update the button text
	    muteButton.innerHTML = "Mute";
	  }
	});

	// Hide controls after 3 seconds of inactivity
	$('#play').click(function() {
	var interval = 1;

	setInterval(function(){
	   if(interval == 2){
	       $('#video-controls, #audio').fadeOut(200),
	       document.body.style.cursor = 'none'; 
	       interval = 1; 
	   }
	   interval = interval+1;
	    console.log(interval);
	},1000);

	$(document).bind('mousemove keypress', function() {
	    $('#video-controls, #audio').show(),
	    document.body.style.cursor = 'auto';
	    interval = 1; 
	});
	});

	// Event listener for the seek bar
	seekBar.addEventListener("change", function() {
		// Calculate the new time
		var time = video.duration * (seekBar.value / 100);

		// Update the video time
		video.currentTime = time;
	});

	
	// Update the seek bar as the video plays
	video.addEventListener("timeupdate", function() {
		// Calculate the slider value
		var value = (100 / video.duration) * video.currentTime;

		// Update the slider value
		seekBar.value = value;
	});

	// Pause the video when the seek handle is being dragged
	seekBar.addEventListener("mousedown", function() {
		video.pause();
		playButton.innerHTML = "Play";
	});

	// Play the video when the seek handle is dropped
	seekBar.addEventListener("mouseup", function() {
		video.play();
		playButton.innerHTML = "Pause";
	});
}

