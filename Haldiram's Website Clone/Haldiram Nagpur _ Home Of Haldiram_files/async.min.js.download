define(['ko','jquery','underscore','uiRegistry','./dom-observer','Magento_Ui/js/lib/knockout/extender/bound-nodes','./bindings'],function(ko,$,_,registry,domObserver,boundedNodes){'use strict';function isDomElement(node){return typeof node==='object'&&node.tagName&&node.nodeType;}
function parseSelector(str){var data=str.trim().split('->'),result={},componentData;if(data.length===1){if(!~data[0].indexOf(':')){result.selector=data[0];}else{componentData=data[0];}}else{componentData=data[0];result.selector=data[1];}
if(componentData){componentData=componentData.split(':');result.component=componentData[0];result.ctx=componentData[1];}
_.each(result,function(value,key){result[key]=value.trim();});return result;}
function parseData(selector,ctx){var data={};if(arguments.length===2){data.selector=selector;if(isDomElement(ctx)){data.ctx=ctx;}else{data.component=ctx;data.ctx='*';}}else{data=_.isString(selector)?parseSelector(selector):selector;}
return data;}
function waitComponent(name){var deffer=$.Deferred();if(_.isString(name)){registry.get(name,function(component){deffer.resolve(component);});}else{deffer.resolve(name);}
return deffer.promise();}
function setRootListener(data,component){boundedNodes.get(component,function(root){if(!$(root).is(data.ctx||'*')){return;}
data.selector?domObserver.get(data.selector,data.fn,root):data.fn(root);});}
$.async=function(selector,ctx,fn){var args=_.toArray(arguments),data=parseData.apply(null,_.initial(args));data.fn=_.last(args);if(data.component){waitComponent(data.component).then(setRootListener.bind(null,data));}else{domObserver.get(data.selector,data.fn,data.ctx);}};_.extend($.async,{get:function(selector,ctx){var data=parseData.apply(null,arguments),component=data.component,nodes;if(!component){return $(data.selector,data.ctx).toArray();}else if(_.isString(component)){component=registry.get(component);}
if(!component){return[];}
nodes=boundedNodes.get(component);nodes=$(nodes).filter(data.ctx).toArray();return data.selector?$(data.selector,nodes).toArray():nodes;},remove:function(nodes,fn){domObserver.remove(nodes,fn);},parseSelector:parseSelector});return $;});