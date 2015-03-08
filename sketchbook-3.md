---
layout: post
title: Sketchbook - Magnus Skare
headline: Building something
permalink: /sketchbook-3/
---

<img src="../img/sketchbook/img_14.jpg" alt="Final outcome" class="spaceless cover">

*<a href="/case-sketchbook">Sketchbook</a> is a series to encourage a solid foundation for any creative project. It was made to mark the launch of this website, with a noteworthy prize at the end. <a href="http://twitter.com/share?text=How%20To%20Start%20Sketching" target="_blank">Share</a> and let me know for a chance to win!*

<a href="/experimental/cover" target="_blank">Live demo</a>

## Planning

Let's build a little something! We'll do more with less and develop a cover page &mdash; which is like an online business card or poster to represent you or your product. We would like to include a name, a title, and a way to connect. We start off with a sketch to explore the possibilities.

<span class="sidenote img">
	<img src="../img/sketchbook/img_11.jpg" alt="Initial sketches">
	<span>We'll outline the most important part, and rate their importance on the page. Visuals are probably most important, but not for our current process.</span>
</span>

We already know that most monitors will be in landscape mode, but we will keep phones and tablets in mind as well. This is good, as the design is currently based on business cards. For the sake of brevity, we'll ignore smartwatches and TVs.

Let's start by making the website type obvious. This is representing a single person, so we want to describe who this person is &mdash; for our example, let's say it's someone who is developing a career in acting. We'll keep it clean, professional and to the point, but we should try to add some personality to the page as well by adjusting the copy. We also want to focus on mobile first.

<img src="../img/sketchbook/img_12.jpg" alt="Layout" class="big">

Our actor wants to get in touch with people to discuss ideas and opportunities &mdash; that's our call-to-action right there, so we'll add a few links to make people talk and connect. All we need now is a good picture of our actor, and we're good to go!

## Development

Our layout looks simple, but good &mdash; time to develop! This will be a static site, so our code should be pretty straight forward. I will not cover any in-depth code here, but you can check out a <a href="/experimental/cover" target="_blank">live demo here</a>.

<img src="../img/sketchbook/img_01.png" alt="Exploring typography" class="transparent big">

Typography is probably the most important part of our cover page. We are looking for an elegant and bold font, but we should keep our options open. I chose <a href="http://www.google.com/fonts/specimen/Montserrat" target="_blank">Montserrat</a> based on our buzzwords and typographic brainstorm. Montserrat is the top right sans-serif font above by the way.

* Sans-serif
* Uppercase
* Clean
* Bold
* Legible

We will also give our text a very subtle shadow to ensure legible text on bright images &mdash; we're basically doing ourselves a favour. Our call to action button will not have a shadow, but it needs some styling anyway &mdash; let's make it look more like a button. We have a lot of different ways to go here, but we'll go for a square button to match the sharp edges of our headline font.

<img src="../img/sketchbook/img_13.jpg" alt="Buttons">

For the footer links, I had some icons in mind. These will adjust depending on what sort of media channels our actor is looking to use, but for now we'll  assume he/she is an avid user of Facebook, Twitter and email. We are loading <a href="http://fortawesome.github.io/Font-Awesome/" target="_blank">Font Awesome</a> to be flexible, and a picture from <a href="unsplash.com" target="_blank">Unsplash</a> to speed things up.

## Wizardry

You can probably figure this out <a href="/experimental/cover" target="_blank">from the demo</a>, but the two interesting bits from the code would be the full screen background image and centered content.

	body
	    background: url('image.jpg') no-repeat center
	    background-size: cover
	    height: 100%
	    position: relative
	    width: 100%

	main
	    position: absolute
	    top: 50%
	    transform: translateY(-50%)

Whoo!
-

We used our sketchbook throughout the process to make a neat little cover-page for individuals to promote themselves. Our example is promoting an actor, but I kept it universal enough to be adaptable to any skill and personality. Feel free to <a href="/experimental/cover.zip">download it</a>, and use it for whatever you want. It's even environmentally friendly!

<img src="../img/sketchbook/img_16.jpg" alt="Final outcome" class="big">

*In the next part, I will cover some common pitfalls and make sure you're on your way to a sketchy, but awesome future. Feel free to <a href="http://twitter.com/share?text=How%20To%20Start%20Sketching" target="_blank">share</a> this series for a chance to win yourself a noteworthy prize!*

<a href="/sketchbook-4" class="next">Next up: Sketchbook part four</a>





