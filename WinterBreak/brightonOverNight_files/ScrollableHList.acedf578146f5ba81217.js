(window.brJsonP=window.brJsonP||[]).push([[35],{141:function(t,s,i){"use strict";i.r(s),i.d(s,"default",(function(){return c}));var l=i(3),e=i(1);const h=".mix-hList_scrollable",d="mix-scrollable-fade_left",r="mix-scrollable-fade_right",n="scroll",a="resize",o=25;class c extends l.a{createChildren(){return this.$list=this.$element.find(h),this.$window=$(window),this}enable(){this.width=this.$list.width();const t=e.a.throttle(()=>{this.width=this.$list.width(),this.scrollWidth=this.$list.get(0).scrollWidth,this.addFades()},o);return this.scrollWidth=this.$list.get(0).scrollWidth,window.addEventListener(a,t),this.$list.on(n,e.a.throttle(this.addFades.bind(this),o)),this.addFades(),this}addFades(){this.canScrollLeft()?this.$element.addClass(d):this.$element.removeClass(d),this.canScrollRight()?this.$element.addClass(r):this.$element.removeClass(r)}canScrollLeft(){return 0!==this.$list.scrollLeft()}canScrollRight(){const t=this.$list.scrollLeft();return this.scrollWidth-t!==this.width}}}}]);
//# sourceMappingURL=ScrollableHList.acedf578146f5ba81217.js.map