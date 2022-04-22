/*!
 * Knockout ES5 plugin - https://github.com/SteveSanderson/knockout-es5
 * Copyright (c) Steve Sanderson
 * MIT license
 */
(function(global,undefined){'use strict';var ko;function track(obj,propertyNamesOrSettings){if(!obj||typeof obj!=='object'){throw new Error('When calling ko.track, you must pass an object as the first parameter.');}
var propertyNames;if(isPlainObject(propertyNamesOrSettings)){propertyNamesOrSettings.deep=propertyNamesOrSettings.deep||false;propertyNamesOrSettings.fields=propertyNamesOrSettings.fields||Object.getOwnPropertyNames(obj);propertyNamesOrSettings.lazy=propertyNamesOrSettings.lazy||false;wrap(obj,propertyNamesOrSettings.fields,propertyNamesOrSettings);}else{propertyNames=propertyNamesOrSettings||Object.getOwnPropertyNames(obj);wrap(obj,propertyNames,{});}
return obj;}
var rFunctionName=/^function\s*([^\s(]+)/;function getFunctionName(ctor){if(ctor.name){return ctor.name;}
return(ctor.toString().trim().match(rFunctionName)||[])[1];}
function canTrack(obj){return obj&&typeof obj==='object'&&getFunctionName(obj.constructor)==='Object';}
function createPropertyDescriptor(originalValue,prop,map){var isObservable=ko.isObservable(originalValue);var isArray=!isObservable&&Array.isArray(originalValue);var observable=isObservable?originalValue:isArray?ko.observableArray(originalValue):ko.observable(originalValue);map[prop]=function(){return observable;};if(isArray||(isObservable&&'push'in observable)){notifyWhenPresentOrFutureArrayValuesMutate(ko,observable);}
return{configurable:true,enumerable:true,get:observable,set:ko.isWriteableObservable(observable)?observable:undefined};}
function createLazyPropertyDescriptor(originalValue,prop,map){if(ko.isObservable(originalValue)){return createPropertyDescriptor(originalValue,prop,map);}
var observable;function getOrCreateObservable(value,writing){if(observable){return writing?observable(value):observable;}
if(Array.isArray(value)){observable=ko.observableArray(value);notifyWhenPresentOrFutureArrayValuesMutate(ko,observable);return observable;}
return(observable=ko.observable(value));}
map[prop]=function(){return getOrCreateObservable(originalValue);};return{configurable:true,enumerable:true,get:function(){return getOrCreateObservable(originalValue)();},set:function(value){getOrCreateObservable(value,true);}};}
function wrap(obj,props,options){if(!props.length){return;}
var allObservablesForObject=getAllObservablesForObject(obj,true);var descriptors={};props.forEach(function(prop){if(prop in allObservablesForObject){return;}
if(Object.getOwnPropertyDescriptor(obj,prop).configurable===false){return;}
var originalValue=obj[prop];descriptors[prop]=(options.lazy?createLazyPropertyDescriptor:createPropertyDescriptor)
(originalValue,prop,allObservablesForObject);if(options.deep&&canTrack(originalValue)){wrap(originalValue,Object.keys(originalValue),options);}});Object.defineProperties(obj,descriptors);}
function isPlainObject(obj){return!!obj&&typeof obj==='object'&&obj.constructor===Object;}
var objectToObservableMap;function getAllObservablesForObject(obj,createIfNotDefined){if(!objectToObservableMap){objectToObservableMap=weakMapFactory();}
var result=objectToObservableMap.get(obj);if(!result&&createIfNotDefined){result={};objectToObservableMap.set(obj,result);}
return result;}
function untrack(obj,propertyNames){if(!objectToObservableMap){return;}
if(arguments.length===1){objectToObservableMap['delete'](obj);}else{var allObservablesForObject=getAllObservablesForObject(obj,false);if(allObservablesForObject){propertyNames.forEach(function(propertyName){delete allObservablesForObject[propertyName];});}}}
function defineComputedProperty(obj,propertyName,evaluatorOrOptions){var ko=this,computedOptions={owner:obj,deferEvaluation:true};if(typeof evaluatorOrOptions==='function'){computedOptions.read=evaluatorOrOptions;}else{if('value'in evaluatorOrOptions){throw new Error('For ko.defineProperty, you must not specify a "value" for the property. '+'You must provide a "get" function.');}
if(typeof evaluatorOrOptions.get!=='function'){throw new Error('For ko.defineProperty, the third parameter must be either an evaluator function, '+'or an options object containing a function called "get".');}
computedOptions.read=evaluatorOrOptions.get;computedOptions.write=evaluatorOrOptions.set;}
obj[propertyName]=ko.computed(computedOptions);track.call(ko,obj,[propertyName]);return obj;}
function notifyWhenPresentOrFutureArrayValuesMutate(ko,observable){var watchingArraySubscription=null;ko.computed(function(){if(watchingArraySubscription){watchingArraySubscription.dispose();watchingArraySubscription=null;}
var newArrayInstance=observable();if(newArrayInstance instanceof Array){watchingArraySubscription=startWatchingArrayInstance(ko,observable,newArrayInstance);}});}
function startWatchingArrayInstance(ko,observable,arrayInstance){var subscribable=getSubscribableForArray(ko,arrayInstance);return subscribable.subscribe(observable);}
var arraySubscribablesMap;function getSubscribableForArray(ko,arrayInstance){if(!arraySubscribablesMap){arraySubscribablesMap=weakMapFactory();}
var subscribable=arraySubscribablesMap.get(arrayInstance);if(!subscribable){subscribable=new ko.subscribable();arraySubscribablesMap.set(arrayInstance,subscribable);var notificationPauseSignal={};wrapStandardArrayMutators(arrayInstance,subscribable,notificationPauseSignal);addKnockoutArrayMutators(ko,arrayInstance,subscribable,notificationPauseSignal);}
return subscribable;}
function wrapStandardArrayMutators(arrayInstance,subscribable,notificationPauseSignal){['pop','push','reverse','shift','sort','splice','unshift'].forEach(function(fnName){var origMutator=arrayInstance[fnName];arrayInstance[fnName]=function(){var result=origMutator.apply(this,arguments);if(notificationPauseSignal.pause!==true){subscribable.notifySubscribers(this);}
return result;};});}
function addKnockoutArrayMutators(ko,arrayInstance,subscribable,notificationPauseSignal){['remove','removeAll','destroy','destroyAll','replace'].forEach(function(fnName){Object.defineProperty(arrayInstance,fnName,{enumerable:false,value:function(){var result;notificationPauseSignal.pause=true;try{result=ko.observableArray.fn[fnName].apply(ko.observableArray(arrayInstance),arguments);}
finally{notificationPauseSignal.pause=false;}
subscribable.notifySubscribers(arrayInstance);return result;}});});}
function getObservable(obj,propertyName){if(!obj||typeof obj!=='object'){return null;}
var allObservablesForObject=getAllObservablesForObject(obj,false);if(allObservablesForObject&&propertyName in allObservablesForObject){return allObservablesForObject[propertyName]();}
return null;}
function isTracked(obj,propertyName){if(!obj||typeof obj!=='object'){return false;}
var allObservablesForObject=getAllObservablesForObject(obj,false);return!!allObservablesForObject&&propertyName in allObservablesForObject;}
function valueHasMutated(obj,propertyName){var observable=getObservable(obj,propertyName);if(observable){observable.valueHasMutated();}}
var weakMapFactory;function attachToKo(ko){ko.track=track;ko.untrack=untrack;ko.getObservable=getObservable;ko.valueHasMutated=valueHasMutated;ko.defineProperty=defineComputedProperty;ko.es5={getAllObservablesForObject:getAllObservablesForObject,notifyWhenPresentOrFutureArrayValuesMutate:notifyWhenPresentOrFutureArrayValuesMutate,isTracked:isTracked};}
function prepareExports(){if(typeof exports==='object'&&typeof module==='object'){ko=require('knockout');var WM=require('../lib/weakmap');attachToKo(ko);weakMapFactory=function(){return new WM();};module.exports=ko;}else if(typeof define==='function'&&define.amd){define(['knockout'],function(koModule){ko=koModule;attachToKo(koModule);weakMapFactory=function(){return new global.WeakMap();};return koModule;});}else if('ko'in global){ko=global.ko;attachToKo(global.ko);weakMapFactory=function(){return new global.WeakMap();};}}
prepareExports();})(this);