define(['ko','jquery','underscore'],function(ko,$,_){'use strict';var primitives=['undefined','boolean','number','string'];function setNested(parent,path,value){var last=path.pop(),len=path.length,pi=0,part=path[pi];for(;pi<len;part=path[++pi]){if(!_.isObject(parent[part])){parent[part]={};}
parent=parent[part];}
if(typeof parent[last]==='function'){parent[last](value);}else{parent[last]=value;}
return value;}
function getNested(parent,path){var exists=true,len=path.length,pi=0;for(;pi<len&&exists;pi++){parent=parent[path[pi]];if(typeof parent==='undefined'){exists=false;}}
if(exists){if(ko.isObservable(parent)){parent=parent();}
return parent;}}
function removeNested(parent,path){var field=path.pop();parent=getNested(parent,path);if(_.isObject(parent)){delete parent[field];}}
return{nested:function(data,path,value){var action=arguments.length>2?setNested:getNested;path=path?path.split('.'):[];return action(data,path,value);},nestedRemove:function(data,path){path=path.split('.');removeNested(data,path);},flatten:function(data,separator,parent,result){separator=separator||'.';result=result||{};if(!data){return result;}
_.each(Object.keys(data),function(name){var node=data[name];if({}.toString.call(node)==='[object Function]'){return;}
if(parent){name=parent+separator+name;}
typeof node==='object'?this.flatten(node,separator,name,result):result[name]=node;},this);return result;},unflatten:function(data,separator){var result={};separator=separator||'.';_.each(data,function(value,nodes){nodes=nodes.split(separator);setNested(result,nodes,value);});return result;},serialize:function(data){var result={};data=this.flatten(data);_.each(data,function(value,keys){keys=this.serializeName(keys);value=_.isUndefined(value)?'':value;result[keys]=value;},this);return result;},extend:function(){var args=_.toArray(arguments);args.unshift(true);return $.extend.apply($,args);},copy:function(data){var result=data,isArray=Array.isArray(data),placeholder;if(this.isObject(data)||isArray){placeholder=isArray?[]:{};result=this.extend(placeholder,data);}
return result;},hardCopy:function(original){if(original===null||typeof original!=='object'){return original;}
return JSON.parse(JSON.stringify(original));},omit:function(target,list){var removed={},ignored=list;if(this.isObject(list)){ignored=[];_.each(list,function(value,key){if(value){ignored.push(key);}});}else if(_.isString(list)){ignored=_.toArray(arguments).slice(1);}
_.each(ignored,function(path){var value=this.nested(target,path);if(!_.isUndefined(value)){removed[path]=value;this.nestedRemove(target,path);}},this);return removed;},isObject:function(value){var objProto=Object.prototype;return typeof value=='object'?objProto.toString.call(value)==='[object Object]':false;},isPrimitive:function(value){return value===null||~primitives.indexOf(typeof value);},forEachRecursive:function(data,action,maxDepth){maxDepth=typeof maxDepth==='number'&&!isNaN(maxDepth)?maxDepth-1:7;if(!_.isFunction(action)||_.isFunction(data)||maxDepth<0){return;}
if(!_.isObject(data)){action(data);return;}
_.each(data,function(value){this.forEachRecursive(value,action,maxDepth);},this);action(data);},mapRecursive:function(data,action,maxDepth){var newData;maxDepth=typeof maxDepth==='number'&&!isNaN(maxDepth)?maxDepth-1:7;if(!_.isFunction(action)||_.isFunction(data)||maxDepth<0){return data;}
if(!_.isObject(data)){return action(data);}
if(_.isArray(data)){newData=_.map(data,function(item){return this.mapRecursive(item,action,maxDepth);},this);return action(newData);}
newData=_.mapObject(data,function(val,key){if(data.hasOwnProperty(key)){return this.mapRecursive(val,action,maxDepth);}
return val;},this);return action(newData);},removeEmptyValues:function(data){if(!_.isObject(data)){return data;}
if(_.isArray(data)){return data.filter(function(item){return!this.isEmptyObj(item);},this);}
return _.omit(data,this.isEmptyObj.bind(this));},isEmptyObj:function(val){return _.isObject(val)&&_.isEmpty(val)||this.isEmpty(val)||val&&val.trim&&this.isEmpty(val.trim());}};});