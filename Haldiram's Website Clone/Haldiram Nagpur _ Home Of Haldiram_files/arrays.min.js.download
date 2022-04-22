define(['underscore','./strings'],function(_,utils){'use strict';function getIndex(item,container){var index=container.indexOf(item);if(~index){return index;}
return _.findIndex(container,function(value){return value&&value.name===item;});}
return{toggle:function(arr,value,add){return add?this.add(arr,value):this.remove(arr,value);},remove:function(arr,value){var index=arr.indexOf(value);if(~index){arr.splice(index,1);}
return this;},add:function(arr){var values=_.toArray(arguments).slice(1);values.forEach(function(value){if(!~arr.indexOf(value)){arr.push(value);}});return this;},insert:function(item,container,position){var currentIndex=getIndex(item,container),newIndex,target;if(typeof position==='undefined'){position=-1;}else if(typeof position==='string'){position=isNaN(+position)?position:+position;}
newIndex=position;if(~currentIndex){target=container.splice(currentIndex,1)[0];if(typeof item==='string'){item=target;}}
if(typeof position!=='number'){target=position.after||position.before||position;newIndex=getIndex(target,container);if(~newIndex&&(position.after||newIndex>=currentIndex)){newIndex++;}}
if(newIndex<0){newIndex+=container.length+1;}
container[newIndex]?container.splice(newIndex,0,item):container[newIndex]=item;return!~currentIndex?item:currentIndex!==newIndex;},formatOffset:function(elems,offset){if(utils.isEmpty(offset)){offset=-1;}
offset=+offset;if(offset<0){offset+=elems.length+1;}
return offset;}};});