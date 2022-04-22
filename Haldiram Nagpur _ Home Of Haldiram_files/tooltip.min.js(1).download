/*!
 * jQuery UI Tooltip - v1.10.4
 * http://jqueryui.com
 *
 * Copyright 2014 jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 *
 * http://api.jqueryui.com/tooltip/
 */
define(['jquery','jquery-ui-modules/core','jquery-ui-modules/widget','jquery-ui-modules/position'],function($){var increments=0;function addDescribedBy(elem,id){var describedby=(elem.attr("aria-describedby")||"").split(/\s+/);describedby.push(id);elem.data("ui-tooltip-id",id).attr("aria-describedby",$.trim(describedby.join(" ")));}
function removeDescribedBy(elem){var id=elem.data("ui-tooltip-id"),describedby=(elem.attr("aria-describedby")||"").split(/\s+/),index=$.inArray(id,describedby);if(index!==-1){describedby.splice(index,1);}
elem.removeData("ui-tooltip-id");describedby=$.trim(describedby.join(" "));if(describedby){elem.attr("aria-describedby",describedby);}else{elem.removeAttr("aria-describedby");}}
$.widget("ui.tooltip",{version:"1.10.4",options:{content:function(){var title=$(this).attr("title")||"";return $("<a>").text(title).html();},hide:true,items:"[title]:not([disabled])",position:{my:"left top+15",at:"left bottom",collision:"flipfit flip"},show:true,tooltipClass:null,track:false,close:null,open:null},_create:function(){this._on({mouseover:"open",focusin:"open"});this.tooltips={};this.parents={};if(this.options.disabled){this._disable();}},_setOption:function(key,value){var that=this;if(key==="disabled"){this[value?"_disable":"_enable"]();this.options[key]=value;return;}
this._super(key,value);if(key==="content"){$.each(this.tooltips,function(id,element){that._updateContent(element);});}},_disable:function(){var that=this;$.each(this.tooltips,function(id,element){var event=$.Event("blur");event.target=event.currentTarget=element[0];that.close(event,true);});this.element.find(this.options.items).addBack().each(function(){var element=$(this);if(element.is("[title]")){element.data("ui-tooltip-title",element.attr("title")).attr("title","");}});},_enable:function(){this.element.find(this.options.items).addBack().each(function(){var element=$(this);if(element.data("ui-tooltip-title")){element.attr("title",element.data("ui-tooltip-title"));}});},open:function(event){var that=this,target=$(event?event.target:this.element).closest(this.options.items);if(!target.length||target.data("ui-tooltip-id")){return;}
if(target.attr("title")){target.data("ui-tooltip-title",target.attr("title"));}
target.data("ui-tooltip-open",true);if(event&&event.type==="mouseover"){target.parents().each(function(){var parent=$(this),blurEvent;if(parent.data("ui-tooltip-open")){blurEvent=$.Event("blur");blurEvent.target=blurEvent.currentTarget=this;that.close(blurEvent,true);}
if(parent.attr("title")){parent.uniqueId();that.parents[this.id]={element:this,title:parent.attr("title")};parent.attr("title","");}});}
this._updateContent(target,event);},_updateContent:function(target,event){var content,contentOption=this.options.content,that=this,eventType=event?event.type:null;if(typeof contentOption==="string"){return this._open(event,target,contentOption);}
content=contentOption.call(target[0],function(response){if(!target.data("ui-tooltip-open")){return;}
that._delay(function(){if(event){event.type=eventType;}
this._open(event,target,response);});});if(content){this._open(event,target,content);}},_open:function(event,target,content){var tooltip,events,delayedShow,positionOption=$.extend({},this.options.position);if(!content){return;}
tooltip=this._find(target);if(tooltip.length){tooltip.find(".ui-tooltip-content").html(content);return;}
if(target.is("[title]")){if(event&&event.type==="mouseover"){target.attr("title","");}else{target.removeAttr("title");}}
tooltip=this._tooltip(target);addDescribedBy(target,tooltip.attr("id"));tooltip.find(".ui-tooltip-content").html(content);function position(event){positionOption.of=event;if(tooltip.is(":hidden")){return;}
tooltip.position(positionOption);}
if(this.options.track&&event&&/^mouse/.test(event.type)){this._on(this.document,{mousemove:position});position(event);}else{tooltip.position($.extend({of:target},this.options.position));}
tooltip.hide();this._show(tooltip,this.options.show);if(this.options.show&&this.options.show.delay){delayedShow=this.delayedShow=setInterval(function(){if(tooltip.is(":visible")){position(positionOption.of);clearInterval(delayedShow);}},$.fx.interval);}
this._trigger("open",event,{tooltip:tooltip});events={keyup:function(event){if(event.keyCode===$.ui.keyCode.ESCAPE){var fakeEvent=$.Event(event);fakeEvent.currentTarget=target[0];this.close(fakeEvent,true);}},remove:function(){this._removeTooltip(tooltip);}};if(!event||event.type==="mouseover"){events.mouseleave="close";}
if(!event||event.type==="focusin"){events.focusout="close";}
this._on(true,target,events);},close:function(event){var that=this,target=$(event?event.currentTarget:this.element),tooltip=this._find(target);if(this.closing){return;}
clearInterval(this.delayedShow);if(target.data("ui-tooltip-title")){target.attr("title",target.data("ui-tooltip-title"));}
removeDescribedBy(target);tooltip.stop(true);this._hide(tooltip,this.options.hide,function(){that._removeTooltip($(this));});target.removeData("ui-tooltip-open");this._off(target,"mouseleave focusout keyup");if(target[0]!==this.element[0]){this._off(target,"remove");}
this._off(this.document,"mousemove");if(event&&event.type==="mouseleave"){$.each(this.parents,function(id,parent){$(parent.element).attr("title",parent.title);delete that.parents[id];});}
this.closing=true;this._trigger("close",event,{tooltip:tooltip});this.closing=false;},_tooltip:function(element){var id="ui-tooltip-"+increments++,tooltip=$("<div>").attr({id:id,role:"tooltip"}).addClass("ui-tooltip ui-widget ui-corner-all ui-widget-content "+
(this.options.tooltipClass||""));$("<div>").addClass("ui-tooltip-content").appendTo(tooltip);tooltip.appendTo(this.document[0].body);this.tooltips[id]=element;return tooltip;},_find:function(target){var id=target.data("ui-tooltip-id");return id?$("#"+id):$();},_removeTooltip:function(tooltip){tooltip.remove();delete this.tooltips[tooltip.attr("id")];},_destroy:function(){var that=this;$.each(this.tooltips,function(id,element){var event=$.Event("blur");event.target=event.currentTarget=element[0];that.close(event,true);$("#"+id).remove();if(element.data("ui-tooltip-title")){element.attr("title",element.data("ui-tooltip-title"));element.removeData("ui-tooltip-title");}});}});});