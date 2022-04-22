define([],function(){'use strict';function ajaxResponsePatch(jQuery){jQuery.ajaxPrefilter(function(s){if(s.crossDomain){s.contents.script=false;}});}
return function($){var majorVersion=$.fn.jquery.split('.')[0];if(majorVersion>=3){console.warn('jQuery patch for CVE-2015-9251 is no longer necessary, and should be removed');}
ajaxResponsePatch($);return $;};});