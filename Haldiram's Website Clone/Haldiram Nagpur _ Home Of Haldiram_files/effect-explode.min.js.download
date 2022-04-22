/*!
 * jQuery UI Effects Explode - v1.10.4
 * http://jqueryui.com
 *
 * Copyright 2014 jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 *
 * http://api.jqueryui.com/explode-effect/
 */
define(['jquery','jquery-ui-modules/effect'],function($,undefined){$.effects.effect.explode=function(o,done){var rows=o.pieces?Math.round(Math.sqrt(o.pieces)):3,cells=rows,el=$(this),mode=$.effects.setMode(el,o.mode||"hide"),show=mode==="show",offset=el.show().css("visibility","hidden").offset(),width=Math.ceil(el.outerWidth()/ cells),height=Math.ceil(el.outerHeight()/ rows),pieces=[],i,j,left,top,mx,my;function childComplete(){pieces.push(this);if(pieces.length===rows*cells){animComplete();}}
for(i=0;i<rows;i++){top=offset.top+i*height;my=i-(rows-1)/ 2;for(j=0;j<cells;j++){left=offset.left+j*width;mx=j-(cells-1)/ 2;el.clone().appendTo("body").wrap("<div></div>").css({position:"absolute",visibility:"visible",left:-j*width,top:-i*height}).parent().addClass("ui-effects-explode").css({position:"absolute",overflow:"hidden",width:width,height:height,left:left+(show?mx*width:0),top:top+(show?my*height:0),opacity:show?0:1}).animate({left:left+(show?0:mx*width),top:top+(show?0:my*height),opacity:show?1:0},o.duration||500,o.easing,childComplete);}}
function animComplete(){el.css({visibility:"visible"});$(pieces).remove();if(!show){el.hide();}
done();}};});