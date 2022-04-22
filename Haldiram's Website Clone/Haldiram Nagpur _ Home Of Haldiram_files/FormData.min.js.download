(function(exports){if(exports.FormData){return;}
exports.FormData=FormData;var ___send$rw=XMLHttpRequest.prototype.send;XMLHttpRequest.prototype.send=function(data){if(data instanceof FormData){if(!data.__endedMultipart)data.__append('--'+data.boundary+'--\r\n');data.__endedMultipart=true;this.setRequestHeader('Content-Type','multipart/form-data; boundary='+data.boundary);data=new Uint8Array(data.data);}
return ___send$rw.call(this,data);};function FormData(){if(!(this instanceof FormData))return new FormData();this.boundary='------RWWorkerFormDataBoundary'+Math.random().toString(36);var internal_data=this.data=[];this.__append=function(inp){var i=0,len;if(typeof inp=='string'){for(len=inp.length;i<len;++i)
internal_data.push(inp.charCodeAt(i)&0xff);}else if(inp&&inp.byteLength){if(!('byteOffset'in inp))
inp=new Uint8Array(inp);for(len=inp.byteLength;i<len;++i)
internal_data.push(inp[i]&0xff);}};}
FormData.prototype.append=function(name,value,filename){if(this.__endedMultipart){this.data.length-=this.boundary.length+6;this.__endedMultipart=false;}
if(arguments.length<2){throw new SyntaxError('Not enough arguments');}
var part='--'+this.boundary+'\r\n'+'Content-Disposition: form-data; name="'+name+'"';if(value instanceof File||value instanceof Blob){return this.append(name,new Uint8Array(new FileReaderSync().readAsArrayBuffer(value)),filename||value.name);}else if(typeof value.byteLength=='number'){part+='; filename="'+(filename||'blob').replace(/"/g,'%22')+'"\r\n';part+='Content-Type: application/octet-stream\r\n\r\n';this.__append(part);this.__append(value);part='\r\n';}else{part+='\r\n\r\n'+value+'\r\n';}
this.__append(part);};})(this||self);