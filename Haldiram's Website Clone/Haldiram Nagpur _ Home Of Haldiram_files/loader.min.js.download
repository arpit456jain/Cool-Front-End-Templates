define(['jquery'],function($){'use strict';var licenseRegExp=/<!--[\s\S]*?-->/,defaultPlugin='text',defaultExt='html';function hasFileExtension(str){return!!~str.indexOf('.')&&!!str.split('.').pop();}
function hasPlugin(str){return!!~str.indexOf('!');}
function isFullPath(str){return!!~str.indexOf('://');}
function removeLicense(content){return content.replace(licenseRegExp,function(match){return~match.indexOf('/**')?'':match;});}
return{loadTemplate:function(path){var content=this.loadFromNode(path),defer;if(content){defer=$.Deferred();defer.resolve(content);return defer.promise();}
return this.loadFromFile(path);},loadFromFile:function(path){var loading=$.Deferred();path=this.formatPath(path);require([path],function(template){template=removeLicense(template);loading.resolve(template);},function(err){loading.reject(err);});return loading.promise();},loadFromNode:function(selector){var node;try{node=document.getElementById(selector)||document.querySelector(selector);return node?node.innerHTML:false;}catch(e){return false;}},formatPath:function(path){var result=path;if(!hasPlugin(path)){result=defaultPlugin+'!'+result;}
if(isFullPath(path)){return result;}
if(!hasFileExtension(path)){result+='.'+defaultExt;}
return result.replace(/^([^\/]+)/g,'$1/template');}};});