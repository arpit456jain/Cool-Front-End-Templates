(function(exports){'use strict';var i;var defineProperty=Object.defineProperty,is=function(a,b){return isNaN(a)?isNaN(b):a===b;};if(typeof WeakMap=='undefined'){exports.WeakMap=createCollection({'delete':sharedDelete,clear:sharedClear,get:sharedGet,has:mapHas,set:sharedSet},true);}
if(typeof Map=='undefined'||typeof((new Map).values)!=='function'||!(new Map).values().next){exports.Map=createCollection({'delete':sharedDelete,has:mapHas,get:sharedGet,set:sharedSet,keys:sharedKeys,values:sharedValues,entries:mapEntries,forEach:sharedForEach,clear:sharedClear});}
if(typeof Set=='undefined'||typeof((new Set).values)!=='function'||!(new Set).values().next){exports.Set=createCollection({has:setHas,add:sharedAdd,'delete':sharedDelete,clear:sharedClear,keys:sharedValues,values:sharedValues,entries:setEntries,forEach:sharedForEach});}
if(typeof WeakSet=='undefined'){exports.WeakSet=createCollection({'delete':sharedDelete,add:sharedAdd,clear:sharedClear,has:setHas},true);}
function createCollection(proto,objectOnly){function Collection(a){if(!this||this.constructor!==Collection)return new Collection(a);this._keys=[];this._values=[];this._itp=[];this.objectOnly=objectOnly;if(a)init.call(this,a);}
if(!objectOnly){defineProperty(proto,'size',{get:sharedSize});}
proto.constructor=Collection;Collection.prototype=proto;return Collection;}
function init(a){var i;if(this.add)
a.forEach(this.add,this);else
a.forEach(function(a){this.set(a[0],a[1])},this);}
function sharedDelete(key){if(this.has(key)){this._keys.splice(i,1);this._values.splice(i,1);this._itp.forEach(function(p){if(i<p[0])p[0]--;});}
return-1<i;};function sharedGet(key){return this.has(key)?this._values[i]:undefined;}
function has(list,key){if(this.objectOnly&&key!==Object(key))
throw new TypeError("Invalid value used as weak collection key");if(key!=key||key===0)for(i=list.length;i--&&!is(list[i],key);){}
else i=list.indexOf(key);return-1<i;}
function setHas(value){return has.call(this,this._values,value);}
function mapHas(value){return has.call(this,this._keys,value);}
function sharedSet(key,value){this.has(key)?this._values[i]=value:this._values[this._keys.push(key)-1]=value;return this;}
function sharedAdd(value){if(!this.has(value))this._values.push(value);return this;}
function sharedClear(){this._values.length=0;}
function sharedKeys(){return sharedIterator(this._itp,this._keys);}
function sharedValues(){return sharedIterator(this._itp,this._values);}
function mapEntries(){return sharedIterator(this._itp,this._keys,this._values);}
function setEntries(){return sharedIterator(this._itp,this._values,this._values);}
function sharedIterator(itp,array,array2){var p=[0],done=false;itp.push(p);return{next:function(){var v,k=p[0];if(!done&&k<array.length){v=array2?[array[k],array2[k]]:array[k];p[0]++;}else{done=true;itp.splice(itp.indexOf(p),1);}
return{done:done,value:v};}};}
function sharedSize(){return this._values.length;}
function sharedForEach(callback,context){var it=this.entries();for(;;){var r=it.next();if(r.done)break;callback.call(context,r.value[1],r.value[0],this);}}})(typeof exports!='undefined'&&typeof global!='undefined'?global:window);