---
layout: page
case: yes
title: Hearthstone
permalink: /hearthstone/
headline: Hearthstone Application
tags: Web applcation
---

<div class="first caption mid">
	<img src="../img/assets/load.gif" data-src="../img/hearthstone/img-01.jpg" alt="Hearthstone by Blizzard">
	<span>© Blizzard Entertainment</span>
</div>

<p class="lead">
	The Hearthstone Application is a web-based application to generate random challenges to play with your friends. The goal was to collect challenges suggested by the community in a central database, along with the option to randomly select one within seconds.
</p>

The <a href="http://hearthstone.party" target="_blank">Hearthstone Application</a> was a personal project adjusted for public use. Ideas and challenges were suggested daily from all over the community, but there was no way to find them all without Google and a lot of time. The web application was initially developed for local usage, but was later improved and shipped for modern smartphones and browsers.

Due to Blizzard's success with the mobile port, the site was built mobile first, with performance as a top priority. The goal was to load the site and generate a challenge within three seconds, or within four seconds on a fast 3G connection. This was achieved by carefully compressing assets and relying on JavaScript to handle dynamic content. The application is also <a href="https://github.com/partcoffee/hearthstone" target="_blank">available on GitHub</a>, and open for further improvements.

<blockquote class="entry">
	<p>This is a web application for unusual challenges and game modes in Hearthstone</p>
</blockquote>

The outcome is straight to the point, and according to <a href="http://www.webpagetest.org/result/150618_87_Y1T/" target="_blank">Web Page Test</a>, the performance goal was met. Ideally I would have added push notifcations, but a lacking budget is holding this particular feature back, as a private SSL certificate would be required.