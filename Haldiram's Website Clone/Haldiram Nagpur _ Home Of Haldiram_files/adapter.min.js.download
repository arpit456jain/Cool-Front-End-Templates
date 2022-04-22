define(['jquery','underscore','Magento_Ui/js/form/adapter/buttons'],function($,_,buttons){'use strict';var selectorPrefix='',eventPrefix;function initListener(callback,action){var selector=selectorPrefix?selectorPrefix+' '+buttons[action]:buttons[action],elem=$(selector)[0];if(!elem){return;}
if(elem.onclick){elem.onclick=null;}
$(elem).on('click'+eventPrefix,callback);}
function destroyListener(action){var selector=selectorPrefix?selectorPrefix+' '+buttons[action]:buttons[action],elem=$(selector)[0];if(!elem){return;}
if(elem.onclick){elem.onclick=null;}
$(elem).off('click'+eventPrefix);}
return{on:function(handlers,selectorPref,eventPref){selectorPrefix=selectorPrefix||selectorPref;eventPrefix=eventPref;_.each(handlers,initListener);selectorPrefix='';},off:function(handlers,eventPref){eventPrefix=eventPref;_.each(handlers,destroyListener);}};});