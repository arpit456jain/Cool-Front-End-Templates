/*!
 * jQuery UI Effects Bounce - v1.10.4
 * http://jqueryui.com
 *
 * Copyright 2014 jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 *
 * http://api.jqueryui.com/bounce-effect/
 *
 * Depends:
 *	jquery.ui.effect.js
 */
define(['jquery','jquery-ui-modules/effect'],function($,undefined){$.effects.effect.bounce=function(o,done){var el=$(this),props=["position","top","bottom","left","right","height","width"],mode=$.effects.setMode(el,o.mode||"effect"),hide=mode==="hide",show=mode==="show",direction=o.direction||"up",distance=o.distance,times=o.times||5,anims=times*2+(show||hide?1:0),speed=o.duration / anims,easing=o.easing,ref=(direction==="up"||direction==="down")?"top":"left",motion=(direction==="up"||direction==="left"),i,upAnim,downAnim,queue=el.queue(),queuelen=queue.length;if(show||hide){props.push("opacity");}
$.effects.save(el,props);el.show();$.effects.createWrapper(el);if(!distance){distance=el[ref==="top"?"outerHeight":"outerWidth"]()/ 3;}
if(show){downAnim={opacity:1};downAnim[ref]=0;el.css("opacity",0).css(ref,motion?-distance*2:distance*2).animate(downAnim,speed,easing);}
if(hide){distance=distance / Math.pow(2,times-1);}
downAnim={};downAnim[ref]=0;for(i=0;i<times;i++){upAnim={};upAnim[ref]=(motion?"-=":"+=")+distance;el.animate(upAnim,speed,easing).animate(downAnim,speed,easing);distance=hide?distance*2:distance / 2;}
if(hide){upAnim={opacity:0};upAnim[ref]=(motion?"-=":"+=")+distance;el.animate(upAnim,speed,easing);}
el.queue(function(){if(hide){el.hide();}
$.effects.restore(el,props);$.effects.removeWrapper(el);done();});if(queuelen>1){queue.splice.apply(queue,[1,0].concat(queue.splice(queuelen,anims+1)));}
el.dequeue();};});