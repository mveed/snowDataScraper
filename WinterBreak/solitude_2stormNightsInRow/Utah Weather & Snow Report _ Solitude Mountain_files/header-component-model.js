define(function(require){"use strict";function HeaderComponent(element,closeFn,isOpenFn){this.element=element;this.close=closeFn;this.isOpen=isOpenFn;this.id=this.generateId()}HeaderComponent.prototype.generateId=function(){return"_"+Math.random().toString(36).substr(2,9)};return HeaderComponent});