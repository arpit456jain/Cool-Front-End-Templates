/*!
 * jQuery UI Effects Pulsate - v1.10.4
 * http://jqueryui.com
 *
 * Copyright 2014 jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 *
 * http://api.jqueryui.com/pulsate-effect/
 */
define(['jquery','jquery-ui-modules/effect'],function($,undefined){$.effects.effect.pulsate=function(o,done){var elem=$(this),mode=$.effects.setMode(elem,o.mode||"show"),show=mode==="show",hide=mode==="hide",showhide=(show||mode==="hide"),anims=((o.times||5)*2)+(showhide?1:0),duration=o.duration / anims,animateTo=0,queue=elem.queue(),queuelen=queue.length,i;if(show||!elem.is(":visible")){elem.css("opacity",0).show();animateTo=1;}
for(i=1;i<anims;i++){elem.animate({opacity:animateTo},duration,o.easing);animateTo=1-animateTo;}
elem.animate({opacity:animateTo},duration,o.easing);elem.queue(function(){if(hide){elem.hide();}
done();});if(queuelen>1){queue.splice.apply(queue,[1,0].concat(queue.splice(queuelen,anims+1)));}
elem.dequeue();};});