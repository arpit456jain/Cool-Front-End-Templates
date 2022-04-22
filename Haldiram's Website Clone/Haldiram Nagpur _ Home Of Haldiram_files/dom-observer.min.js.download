define(['jquery','underscore','MutationObserver','domReady!'],function($,_){'use strict';var counter=1,watchers,globalObserver,disabledNodes=[];watchers={selectors:{},nodes:{}};function isElementNode(node){return node.nodeType===1;}
function extractChildren(node){var children=node.querySelectorAll('*');return _.toArray(children);}
function getNodeId(node){var id=node._observeId;if(!id){id=node._observeId=counter++;}
return id;}
function trigger(node,data){var id=getNodeId(node),ids=data.invoked;if(_.contains(ids,id)){return;}
data.callback(node);data.invoked.push(id);}
function createNodeData(node){var nodes=watchers.nodes,id=getNodeId(node);nodes[id]=nodes[id]||{};return nodes[id];}
function getNodeData(node){var nodeId=node._observeId;return watchers.nodes[nodeId];}
function removeNodeData(node){var nodeId=node._observeId;delete watchers.nodes[nodeId];}
function addRemovalListener(node,data){var nodeData=createNodeData(node);(nodeData.remove=nodeData.remove||[]).push(data);}
function addSelectorListener(selector,data){var storage=watchers.selectors;(storage[selector]=storage[selector]||[]).push(data);}
function processAdded(node){_.each(watchers.selectors,function(listeners,selector){listeners.forEach(function(data){if(!data.ctx.contains(node)||!$(node,data.ctx).is(selector)){return;}
if(data.type==='add'){trigger(node,data);}else if(data.type==='remove'){addRemovalListener(node,data);}});});}
function processRemoved(node){var nodeData=getNodeData(node),listeners=nodeData&&nodeData.remove;if(!listeners){return;}
listeners.forEach(function(data){trigger(node,data);});removeNodeData(node);}
function formNodesList(nodes){var result=[],children;nodes=_.toArray(nodes).filter(isElementNode);nodes.forEach(function(node){result.push(node);children=extractChildren(node);result=result.concat(children);});return result;}
function formChangesLists(mutations){var removed=[],added=[];mutations.forEach(function(record){removed=removed.concat(_.toArray(record.removedNodes));added=added.concat(_.toArray(record.addedNodes));});removed=removed.filter(function(node){var addIndex=added.indexOf(node),wasAdded=!!~addIndex;if(wasAdded){added.splice(addIndex,1);}
return!wasAdded;});return{removed:formNodesList(removed),added:formNodesList(added)};}
function shouldObserveMutation(mutation){var isDisabled;if(disabledNodes.length>0){isDisabled=_.find(disabledNodes,function(node){return node===mutation.target||$.contains(node,mutation.target);});return!isDisabled;}
return true;}
function shouldObserveMutations(mutations){var firstMutation,lastMutation;if(mutations.length>0){firstMutation=mutations[0];lastMutation=mutations[mutations.length-1];return shouldObserveMutation(firstMutation)&&shouldObserveMutation(lastMutation);}
return true;}
globalObserver=new MutationObserver(function(mutations){var changes;if(shouldObserveMutations(mutations)){changes=formChangesLists(mutations);changes.removed.forEach(processRemoved);changes.added.forEach(processAdded);}});globalObserver.observe(document.body,{subtree:true,childList:true});return{disableNode:function(node){disabledNodes.push(node);},get:function(selector,callback,ctx){var data,nodes;data={ctx:ctx||document.body,type:'add',callback:callback,invoked:[]};nodes=$(selector,data.ctx).toArray();nodes.forEach(function(node){trigger(node,data);});addSelectorListener(selector,data);},remove:function(selector,callback,ctx){var nodes=[],data;data={ctx:ctx||document.body,type:'remove',callback:callback,invoked:[]};if(typeof selector==='object'){nodes=!_.isUndefined(selector.length)?_.toArray(selector):[selector];}else if(_.isString(selector)){nodes=$(selector,ctx).toArray();addSelectorListener(selector,data);}
nodes.forEach(function(node){addRemovalListener(node,data);});},off:function(selector,fn){var selectors=watchers.selectors,listeners=selectors[selector];if(selector&&!fn){delete selectors[selector];}else if(listeners&&fn){selectors[selector]=listeners.filter(function(data){return data.callback!==fn;});}}};});