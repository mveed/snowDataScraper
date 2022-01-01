define("global",function(require){"use strict";var $=require("jquery"),helpers=require("helpers"),lazyHelpers=require("lazy-load-helpers"),plannerHelpers=require("planner-helpers");return function(){var self={init:function(){self.loadComponents();self.setupUserListeners();self.initializeLazyLoad();self.trackPredictiveSearchQuery();self.trackQuickLinksClicked();plannerHelpers.updateCount()},loadComponents:function(){var components=document.getElementsByClassName("js_components"),len=components.length,names=[],trimString=function(s){return String(s).trim()};if(len){for(var i=0;i<len;i++){var str=components[i].innerHTML.trim(),scripts=str.split(",").filter(trimString),sLen=scripts.length;for(var x=0;x<sLen;x++){var script=scripts[x].trim(),path=helpers.settings.componentsPath+script+".js";if(names.indexOf(path)<0){names.push(path)}}}return require(names)}},setupUserListeners:function(){var myHTML=document.getElementsByTagName("html")[0];document.addEventListener("mousedown",function(){myHTML.classList.remove("js-keyboard-user");myHTML.classList.add("js-click-user")});document.addEventListener("keyup",function(){myHTML.classList.remove("js-click-user");myHTML.classList.add("js-keyboard-user")})},initializeLazyLoad:function(){lazyHelpers.setUpLazyLoadImages(lazyHelpers.lazyLoadDefaultSelectImages,lazyHelpers.addLazyLoadDefaultListeners,lazyHelpers.removeLazyLoadDefaultListeners,lazyHelpers.lazyLoadDefaultSetImage)},trackPredictiveSearchQuery:function(){if(helpers.getCookieByName("PredictiveSearchQuery")){window.dataLayer=window.dataLayer||[];window.dataLayer.push({"Event ID":"Internal Search","Event Name":"Predictive Search Query","Page ID":$(".page-header h1").text()||"","Null Results":0,"Search Term":helpers.getCookieByName("PredictiveSearchQuery")});helpers.clearCookieByPath("PredictiveSearchQuery","/")}},trackQuickLinksClicked:function(){var cookie=helpers.getCookieByName("QuickLinksClicked");if(cookie){window.dataLayer=window.dataLayer||[];window.dataLayer.push({"Event ID":"Internal Search","Event Name":"Quick links","Page ID":$(".page-header h1").text()||cookie});helpers.clearCookieByPath("QuickLinksClicked","/")}}};return self}()});