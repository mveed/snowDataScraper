(window.brJsonP=window.brJsonP||[]).push([[36],{143:function(s,e,t){"use strict";t.r(e),t.d(e,"default",(function(){return m}));var i=t(3),h=t(1);const n=".js-search-input",o=".js-search-modal",a=".js-logo",r=".js-search-trigger",c=".js-search-close",d=".js-search-container",l=".js-navConditions",u="click",p="focusin",k="focusout",w="resize",g="noScroll",f="search_open",C=25;class m extends i.a{createChildren(){return this.$body=$("html,body"),this.$window=$(window),this.$container=this.$element.find(d),this.$trigger=this.$element.find(r),this.$close=this.$element.find(c),this.$mask=this.$element.find(o),this.$input=this.$body.find(n),this.$conditions=this.$body.find(l),this.$logo=this.$body.find(a),this}enable(){return this.$input.on(p,s=>this.handleInputFocusIn(s)),this.$input.on(k,s=>this.handleInputFocusOut(s)),this.$close.on(k,s=>this.handleCloseFocusOut(s)),this.$trigger.on(u,s=>this.handleTriggerClick(s)),this.$close.on(u,s=>this.handleCloseClick(s)),this.$mask.on(u,s=>this.handleMaskClick(s)),this.$window.on(w,h.a.throttle(s=>this.handleWindowResize(s),C)),this}afterInit(){this.isSearchOpen=!1}handleWindowResize(s){h.a.isLargeDesktopViewport()&&this.isSearchOpen&&this.setSearchContainerBounds()}handleMaskClick(s){this.closeSearch()}handleInputFocusOut(s){h.a.isLargeDesktopViewport()?this.$close.focus():this.hideMask()}handleCloseFocusOut(s){this.$input.focus()}handleInputFocusIn(s){h.a.isLargeDesktopViewport()||this.showMask()}handleTriggerClick(s){this.openSearch()}handleCloseClick(s){this.closeSearch()}openSearch(){this.isSearchOpen||(this.isSearchOpen=!0,this.$body.addClass(g),h.a.isDesktopViewport()&&this.setSearchContainerBounds(),this.$container.addClass(f),this.$input.focus(),this.showMask())}closeSearch(){if(!this.isSearchOpen)return;this.isSearchOpen=!1,this.$container.removeClass(f).attr("style",""),this.$trigger.focus(),this.hideMask(),this.$body.removeClass(g);let s=document.querySelector("header .primaryNavBar .nav-search"),e=s.parentNode;e.removeChild(s),e.appendChild(s)}setSearchContainerBounds(){const s=this.$logo.get(0).clientWidth;this.$container.css({left:s,width:this.$window.width()-s})}showMask(){const s=this.$element.outerHeight(),e=this.$element.offset().top;h.a.isLargeDesktopViewport()&&this.$mask.css("top",s+e+"px"),this.$mask.show()}hideMask(){h.a.isLargeDesktopViewport()?this.$mask.hide():setTimeout(()=>{this.$mask.hide()},100)}}}}]);
//# sourceMappingURL=Search.74525afa3b69cca26e75.js.map