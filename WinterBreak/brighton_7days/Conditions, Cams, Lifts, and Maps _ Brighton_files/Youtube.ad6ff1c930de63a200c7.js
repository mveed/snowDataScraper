(window.brJsonP=window.brJsonP||[]).push([[42],{147:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return s}));var a=n(3),i=n(103);const r=".js-youtube",o={TIME_OUT:1,EASE_OUT:i.Expo.easeInOut};class s extends a.a{createChildren(){return this.$player=this.$element.find(r),this}afterInit(){return this.$player.length>0&&this.loadApiScript(),this}loadApiScript(){const e=document.createElement("script");e.src="https://www.youtube.com/iframe_api";const t=document.getElementsByTagName("script")[0];t.parentNode.insertBefore(e,t),window.onYouTubeIframeAPIReady=()=>{this.initPlayer()}}initPlayer(){this.$player.each((e,t)=>{new YT.Player(t.id,{events:{onStateChange:e=>this.onPlayerStateChange(e)}})})}toggleContent(e,t){1===e&&i.TweenMax.to(t.next(),o.TIME_OUT,{opacity:0,ease:o.EASE_OUT,onComplete:()=>{t.next().hide()}})}onPlayerStateChange(e){this.toggleContent(e.data,$(e.target.a))}}}}]);
//# sourceMappingURL=Youtube.ad6ff1c930de63a200c7.js.map