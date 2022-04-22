define(['jquery','underscore','mage/utils/objects','mage/utils/strings'],function($,_,utils,stringUtils){'use strict';var tmplSettings=_.templateSettings,interpolate=/\$\{([\s\S]+?)\}/g,opener='${',template,hasStringTmpls;hasStringTmpls=(function(){var testString='var foo = "bar"; return `${ foo }` === foo';try{return Function(testString)();}catch(e){return false;}})();function isTmplIgnored(tmpl,target){var parsedTmpl;try{parsedTmpl=JSON.parse(tmpl);if(typeof parsedTmpl==='object'){return tmpl.includes('__disableTmpl');}}catch(e){}
if(typeof target!=='undefined'){if(typeof target==='object'&&target.hasOwnProperty('__disableTmpl')){return target.__disableTmpl;}}
return false;}
if(hasStringTmpls){template=function(tmpl,$){return eval('`'+tmpl+'`');};}else{template=function(tmpl,data){var cached=tmplSettings.interpolate;tmplSettings.interpolate=interpolate;tmpl=_.template(tmpl,{variable:'$'})(data);tmplSettings.interpolate=cached;return tmpl;};}
function isTemplate(value){return typeof value==='string'&&value.indexOf(opener)!==-1&&value.indexOf('${{')===-1;}
function render(tmpl,data,castString,maxCycles){var last=tmpl,cycles=0;while(~tmpl.indexOf(opener)&&(typeof maxCycles==='undefined'||cycles<maxCycles)){if(!isTmplIgnored(tmpl)){tmpl=template(tmpl,data);}
if(tmpl===last){break;}
last=tmpl;cycles++;}
return castString?stringUtils.castString(tmpl):tmpl;}
return{template:function(tmpl,data,castString,dontClone){if(typeof tmpl==='string'){return render(tmpl,data,castString);}
if(!dontClone){tmpl=utils.copy(tmpl);}
tmpl.$data=data||{};_.each(tmpl,function iterate(value,key,list){var disabled,maxCycles;if(key==='$data'){return;}
if(isTemplate(key)){delete list[key];key=render(key,tmpl);list[key]=value;}
if(isTemplate(value)){disabled=isTmplIgnored(value,list);if(typeof disabled==='object'&&disabled.hasOwnProperty(key)&&disabled[key]!==false){maxCycles=disabled[key];}
if(disabled===true||maxCycles===true){maxCycles=0;}
list[key]=render(value,tmpl,castString,maxCycles);}else if($.isPlainObject(value)||Array.isArray(value)){_.each(value,iterate);}});delete tmpl.$data;return tmpl;}};});