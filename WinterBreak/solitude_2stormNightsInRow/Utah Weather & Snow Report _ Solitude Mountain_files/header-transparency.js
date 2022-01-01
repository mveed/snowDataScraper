define(function(require){"use strict";var $=require("jquery"),helpers=require("helpers"),dom={},self={},headerScrolledClass="header-scrolled";init();return self;function init(){cacheDom();if(dom.body.hasClass("header-transparent")){attachHandlers()}}function cacheDom(){dom.body=$("body");dom.header=$("header.main-v2");dom.window=helpers.dom.window}function attachHandlers(){dom.window.on("scroll",helpers.debounce(setHeaderAppearanceBasedOnScrollPosition,15,false))}function setHeaderAppearanceBasedOnScrollPosition(){if(dom.window.scrollTop()===0){dom.header.removeClass(headerScrolledClass)}else{dom.header.addClass(headerScrolledClass)}}});