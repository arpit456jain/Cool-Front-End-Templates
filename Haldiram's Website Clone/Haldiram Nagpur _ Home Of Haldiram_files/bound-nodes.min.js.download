define(['ko','underscore','mage/utils/wrapper','uiEvents','es6-collections'],function(ko,_,wrapper,Events){'use strict';var nodesMap=new WeakMap();function getBounded(model){return nodesMap.get(model);}
function addBounded(model,node){var nodes=getBounded(model),isRoot;if(!nodes){nodesMap.set(model,[node]);Events.trigger.call(model,'addNode',node);return;}
isRoot=nodes.every(function(bounded){return!bounded.contains(node);});if(isRoot){nodes.push(node);Events.trigger.call(model,'addNode',node);}}
function removeBounded(model,node){var nodes=getBounded(model),index;if(!nodes){return;}
index=nodes.indexOf(node);if(~index){nodes.splice(index,0);Events.trigger.call(model,'removeNode',node);}
if(!nodes.length){nodesMap.delete(model);}}
function getElement(node,data){var elem;while(node.nextElementSibling){node=node.nextElementSibling;if(node.nodeType===1&&ko.dataFor(node)===data){elem=node;break;}}
return elem;}
wrapper.extend(ko,{applyBindings:function(orig,ctx,node){var result=orig(),data=ctx&&(ctx.$data||ctx);if(node&&node.nodeType===8){node=getElement(node,data);}
if(!node||node.nodeType!==1){return result;}
if(data&&data.registerNodes){addBounded(data,node);}
return result;},cleanNode:function(orig,node){var result=orig(),data;if(node.nodeType!==1){return result;}
data=ko.dataFor(node);if(data&&data.registerNodes){removeBounded(data,node);}
return result;}});return{get:function(model,callback){var nodes=getBounded(model)||[];if(!_.isFunction(callback)){return nodes;}
nodes.forEach(function(node){callback(node);});this.add.apply(this,arguments);},add:function(model){var args=_.toArray(arguments).slice(1);args.unshift('addNode');Events.on.apply(model,args);},remove:function(model){var args=_.toArray(arguments).slice(1);args.unshift('removeNode');Events.on.apply(model,args);},off:function(model){var args=_.toArray(arguments).slice(1);Events.off.apply(model,args);}};});