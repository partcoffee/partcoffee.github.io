!function(n,e,t){n.fn.responsiveSlides=function(a){var o=n.extend({auto:!0,speed:500,timeout:4e3,pager:!1,nav:!1,random:!1,pause:!1,pauseControls:!0,prevText:"Previous",nextText:"Next",maxwidth:"",navContainer:"",manualControls:"",namespace:"rslides",before:n.noop,after:n.noop},a);return this.each(function(){t++;var s,i,r,c,l,u,d=n(this),f=0,p=d.children(),h=p.size(),v=parseFloat(o.speed),m=parseFloat(o.timeout),C=parseFloat(o.maxwidth),x=o.namespace,g=x+t,y=x+"_nav "+g+"_nav",w=x+"_here",b=g+"_on",k=g+"_s",_=n("<ul class='"+x+"_tabs "+g+"_tabs' />"),I={"float":"left",position:"relative",opacity:1,zIndex:2},q={"float":"none",position:"absolute",opacity:0,zIndex:1},z=function(){var n=document.body||document.documentElement,e=n.style,t="transition";if("string"==typeof e[t])return!0;s=["Moz","Webkit","Khtml","O","ms"],t=t.charAt(0).toUpperCase()+t.substr(1);var a;for(a=0;a<s.length;a++)if("string"==typeof e[s[a]+t])return!0;return!1}(),T=function(e){o.before(e),z?(p.removeClass(b).css(q).eq(e).addClass(b).css(I),f=e,setTimeout(function(){o.after(e)},v)):p.stop().fadeOut(v,function(){n(this).removeClass(b).css(q).css("opacity",1)}).eq(e).fadeIn(v,function(){n(this).addClass(b).css(I),o.after(e),f=e})};if(o.random&&(p.sort(function(){return Math.round(Math.random())-.5}),d.empty().append(p)),p.each(function(n){this.id=k+n}),d.addClass(x+" "+g),a&&a.maxwidth&&d.css("max-width",C),p.hide().css(q).eq(0).addClass(b).css(I).show(),z&&p.show().css({"-webkit-transition":"opacity "+v+"ms ease-in-out","-moz-transition":"opacity "+v+"ms ease-in-out","-o-transition":"opacity "+v+"ms ease-in-out",transition:"opacity "+v+"ms ease-in-out"}),p.size()>1){if(v+100>m)return;if(o.pager&&!o.manualControls){var $=[];p.each(function(n){var e=n+1;$+="<li><a href='#' class='"+k+e+"'>"+e+"</a></li>"}),_.append($),a.navContainer?n(o.navContainer).append(_):d.after(_)}if(o.manualControls&&(_=n(o.manualControls),_.addClass(x+"_tabs "+g+"_tabs")),(o.pager||o.manualControls)&&_.find("li").each(function(e){n(this).addClass(k+(e+1))}),(o.pager||o.manualControls)&&(u=_.find("a"),i=function(n){u.closest("li").removeClass(w).eq(n).addClass(w)}),o.auto&&(r=function(){l=setInterval(function(){p.stop(!0,!0);var n=h>f+1?f+1:0;(o.pager||o.manualControls)&&i(n),T(n)},m)})(),c=function(){o.auto&&(clearInterval(l),r())},o.pause&&d.hover(function(){clearInterval(l)},function(){c()}),(o.pager||o.manualControls)&&(u.bind("click",function(e){e.preventDefault(),o.pauseControls||c();var t=u.index(this);f===t||n("."+b).queue("fx").length||(i(t),T(t))}).eq(0).closest("li").addClass(w),o.pauseControls&&u.hover(function(){clearInterval(l)},function(){c()})),o.nav){var F="<svg class='"+y+" icon icon-chevron-thin-left prev'><use xlink:href=\"#icon-chevron-thin-left\"></use></svg><svg class='"+y+' icon icon-chevron-thin-right next\'><use xlink:href="#icon-chevron-thin-right"></use></svg>';a.navContainer?n(o.navContainer).append(F):d.after(F);var M=n("."+g+"_nav"),D=M.filter(".prev");M.bind("click",function(e){e.preventDefault();var t=n("."+b);if(!t.queue("fx").length){var a=p.index(t),s=a-1,r=h>a+1?f+1:0;T(n(this)[0]===D[0]?s:r),(o.pager||o.manualControls)&&i(n(this)[0]===D[0]?s:r),o.pauseControls||c()}}),o.pauseControls&&M.hover(function(){clearInterval(l)},function(){c()})}}if("undefined"==typeof document.body.style.maxWidth&&a.maxwidth){var O=function(){d.css("width","100%"),d.width()>C&&d.css("width",C)};O(),n(e).bind("resize",function(){O()})}})}}(jQuery,this,0),$(".show").responsiveSlides({auto:!1,speed:300,pager:!1,nav:!0,random:!1,prevText:"",nextText:"",maxwidth:"",navContainer:".show",manualControls:"",namespace:"show"}),$(document).on("keyup",function(n){37==n.keyCode?$(".show .prev").trigger("click"):39==n.keyCode&&$(".show .next").trigger("click")});