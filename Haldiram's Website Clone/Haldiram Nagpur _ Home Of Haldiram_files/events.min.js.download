define(['ko','underscore','es6-collections'],function(ko,_){'use strict';var eventsMap=new WeakMap();function getEvents(obj,name){var events=eventsMap.get(obj);if(!events){return false;}
return name?events.get(name):events;}
function addHandler(obj,ns,callback,name){var events=getEvents(obj),observable,data;observable=!ko.isObservable(obj[name])?ko.getObservable(obj,name):obj[name];if(observable){observable.subscribe(callback);return;}
if(!events){events=new Map();eventsMap.set(obj,events);}
data={callback:callback,ns:ns};events.has(name)?events.get(name).push(data):events.set(name,[data]);}
function trigger(handlers,args){var bubble=true,callback;handlers.forEach(function(handler){callback=handler.callback;if(callback.apply(null,args)===false){bubble=false;}});return bubble;}
return{on:function(events,callback,ns){var iterator;if(arguments.length<2){ns=callback;}
iterator=addHandler.bind(null,this,ns);_.isObject(events)?_.each(events,iterator):iterator(callback,events);return this;},off:function(ns){var storage=getEvents(this);if(!storage){return this;}
storage.forEach(function(handlers,name){handlers=handlers.filter(function(handler){return!ns?false:handler.ns!==ns;});handlers.length?storage.set(name,handlers):storage.delete(name);});return this;},trigger:function(name){var handlers,args;handlers=getEvents(this,name),args=_.toArray(arguments).slice(1);if(!handlers||!name){return true;}
return trigger(handlers,args);}};});