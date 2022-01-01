(function(g){var window=this;'use strict';var pVa=function(a,b){a.Oa("onAutonavCoundownStarted",b)},T5=function(a,b,c){g.N(a.element,"ytp-suggestion-set",!!b.videoId);
var d=b.playlistId;c=b.Oe(c?c:"mqdefault.jpg");var e=null,f=null;b instanceof g.fF&&(b.lengthText?(e=b.lengthText||null,f=b.mq||null):b.lengthSeconds&&(e=g.kL(b.lengthSeconds),f=g.kL(b.lengthSeconds,!0)));var h=!!d;d=h&&"RD"===g.bF(d).type;var l=b instanceof g.fF?b.isLivePlayback:null,m=b instanceof g.fF?b.isUpcoming:null;c={title:b.title,author:b.author,author_and_views:b.shortViewCount?b.author+" \u2022 "+b.shortViewCount:b.author,aria_label:b.Ml||g.CH("Watch $TITLE",{TITLE:b.title}),duration:e,
timestamp:f,url:b.Pk(),is_live:l,is_upcoming:m,is_list:h,is_mix:d,background:c?"background-image: url("+c+")":"",views_and_publish_time:b.shortViewCount?b.shortViewCount+" \u2022 "+b.publishedTimeText:b.publishedTimeText,autoplayAlternativeHeader:b.hn};b instanceof g.eF&&(c.playlist_length=b.playlistLength);a.update(c)},U5=function(a){var b=a.V(),c=b.i;
g.V.call(this,{G:"a",L:"ytp-autonav-suggestion-card",W:{href:"{{url}}",target:c?b.I:"","aria-label":"{{aria_label}}","data-is-live":"{{is_live}}","data-is-list":"{{is_list}}","data-is-mix":"{{is_mix}}","data-is-upcoming":"{{is_upcoming}}"},U:[{G:"div",Ja:["ytp-autonav-endscreen-upnext-thumbnail","ytp-autonav-thumbnail-small"],W:{style:"{{background}}"},U:[{G:"div",W:{"aria-label":"{{timestamp}}"},Ja:["ytp-autonav-timestamp"],va:"{{duration}}"},{G:"div",Ja:["ytp-autonav-live-stamp"],va:"Live"},{G:"div",
Ja:["ytp-autonav-upcoming-stamp"],va:"Upcoming"},{G:"div",L:"ytp-autonav-list-overlay",U:[{G:"div",L:"ytp-autonav-mix-text",va:"Mix"},{G:"div",L:"ytp-autonav-mix-icon"}]}]},{G:"div",Ja:["ytp-autonav-endscreen-upnext-title","ytp-autonav-title-card"],va:"{{title}}"},{G:"div",Ja:["ytp-autonav-endscreen-upnext-author","ytp-autonav-author-card"],va:"{{author}}"},{G:"div",Ja:["ytp-autonav-endscreen-upnext-author","ytp-autonav-view-and-date-card"],va:"{{views_and_publish_time}}"}]});this.J=a;this.suggestion=
null;this.i=c;this.Ra("click",this.onClick);this.Ra("keypress",this.onKeyPress)},W5=function(a,b){b=void 0===b?!1:b;
g.V.call(this,{G:"div",L:"ytp-autonav-endscreen-countdown-container"});var c=this;this.I=b;this.D=void 0;this.u=0;b=a.V();var d=b.i;this.J=a;this.suggestion=null;this.onVideoDataChange("newdata",this.J.getVideoData());this.T(a,"videodatachange",this.onVideoDataChange);this.i=new g.V({G:"div",L:"ytp-autonav-endscreen-upnext-container",W:{"aria-label":"{{aria_label}}","data-is-live":"{{is_live}}","data-is-list":"{{is_list}}","data-is-mix":"{{is_mix}}","data-is-upcoming":"{{is_upcoming}}"},U:[{G:"div",
L:"ytp-autonav-endscreen-upnext-header"},{G:"div",L:"ytp-autonav-endscreen-upnext-alternative-header",va:"{{autoplayAlternativeHeader}}"},{G:"a",L:"ytp-autonav-endscreen-link-container",W:{href:"{{url}}",target:d?b.I:""},U:[{G:"div",L:"ytp-autonav-endscreen-upnext-thumbnail",W:{style:"{{background}}"},U:[{G:"div",W:{"aria-label":"{{timestamp}}"},Ja:["ytp-autonav-timestamp"],va:"{{duration}}"},{G:"div",Ja:["ytp-autonav-live-stamp"],va:"Live"},{G:"div",Ja:["ytp-autonav-upcoming-stamp"],va:"Upcoming"}]},
{G:"div",L:"ytp-autonav-endscreen-video-info",U:[{G:"div",L:"ytp-autonav-endscreen-premium-badge"},{G:"div",L:"ytp-autonav-endscreen-upnext-title",va:"{{title}}"},{G:"div",L:"ytp-autonav-endscreen-upnext-author",va:"{{author}}"},{G:"div",L:"ytp-autonav-view-and-date",va:"{{views_and_publish_time}}"},{G:"div",L:"ytp-autonav-author-and-view",va:"{{author_and_views}}"}]}]}]});g.I(this,this.i);this.i.Ea(this.element);d||this.T(this.i.Fa("ytp-autonav-endscreen-link-container"),"click",this.zI);this.J.Hb(this.element,
this,115127);this.J.Hb(this.i.Fa("ytp-autonav-endscreen-link-container"),this,115128);this.overlay=new g.V({G:"div",L:"ytp-autonav-overlay"});g.I(this,this.overlay);this.overlay.Ea(this.element);this.B=new g.V({G:"div",L:"ytp-autonav-endscreen-button-container"});g.I(this,this.B);this.B.Ea(this.element);this.cancelButton=new g.V({G:"button",Ja:["ytp-autonav-endscreen-upnext-button","ytp-autonav-endscreen-upnext-cancel-button"],W:{"aria-label":"Cancel autoplay"},va:"Cancel"});g.I(this,this.cancelButton);
this.cancelButton.Ea(this.B.element);this.cancelButton.Ra("click",this.RQ,this);this.J.Hb(this.cancelButton.element,this,115129);this.playButton=new g.V({G:"a",Ja:["ytp-autonav-endscreen-upnext-button","ytp-autonav-endscreen-upnext-play-button"],W:{href:"{{url}}",role:"button","aria-label":"Play next video"},va:"Play Now"});g.I(this,this.playButton);this.playButton.Ea(this.B.element);this.playButton.Ra("click",this.zI,this);this.J.Hb(this.playButton.element,this,115130);this.C=new g.L(function(){V5(c)},
500);
g.I(this,this.C);this.yI();this.T(a,"autonavvisibility",this.yI)},Z5=function(a){var b=a.J.xj(!0,a.J.isFullscreen());
g.N(a.element,"ytp-autonav-endscreen-small-mode",a.yf(b));g.N(a.element,"ytp-autonav-endscreen-is-premium",!!a.suggestion&&!!a.suggestion.qB);g.N(a.J.getRootNode(),"ytp-autonav-endscreen-cancelled-state",!a.J.ke());g.N(a.J.getRootNode(),"countdown-running",a.Jh());g.N(a.element,"ytp-player-content",a.J.ke());g.dn(a.overlay.element,{width:b.width+"px"});if(!a.Jh()){a.J.ke()?X5(a,Math.round(Y5(a)/1E3)):X5(a);b=!!a.suggestion&&!!a.suggestion.hn;var c=a.J.ke()||!b;g.N(a.element,"ytp-autonav-endscreen-upnext-alternative-header-only",
!c&&b);g.N(a.element,"ytp-autonav-endscreen-upnext-no-alternative-header",c&&!b);g.nK(a.B,a.J.ke())}},V5=function(a){var b=Y5(a),c=Math,d=c.min;
var e=a.u?Date.now()-a.u:0;c=d.call(c,e,b);X5(a,Math.ceil((b-c)/1E3));500>=b-c&&a.Jh()?a.select(!0):a.Jh()&&a.C.start()},Y5=function(a){var b=a.J.Np();
return 0<=b?b:g.S(a.J.V().experiments,"autoplay_time")||1E4},X5=function(a,b){b=void 0===b?-1:b;
a=a.i.Fa("ytp-autonav-endscreen-upnext-header");g.mh(a);if(0<=b){b=String(b);var c="Up next in $SECONDS".match(RegExp("\\$SECONDS","gi"))[0],d="Up next in $SECONDS".indexOf(c);if(0<=d){a.appendChild(g.lh("Up next in $SECONDS".slice(0,d)));var e=g.kh("span");g.js(e,"ytp-autonav-endscreen-upnext-header-countdown-number");g.uh(e,b);a.appendChild(e);a.appendChild(g.lh("Up next in $SECONDS".slice(d+c.length)));return}}g.uh(a,"Up next")},$5=function(a,b){g.V.call(this,{G:"div",
Ja:["html5-endscreen","ytp-player-content",b||"base-endscreen"]});this.created=!1;this.player=a},a6=function(a){g.V.call(this,{G:"div",
Ja:["ytp-upnext","ytp-player-content"],W:{"aria-label":"{{aria_label}}"},U:[{G:"div",L:"ytp-cued-thumbnail-overlay-image",W:{style:"{{background}}"}},{G:"span",L:"ytp-upnext-top",U:[{G:"span",L:"ytp-upnext-header",va:"Up Next"},{G:"span",L:"ytp-upnext-title",va:"{{title}}"},{G:"span",L:"ytp-upnext-author",va:"{{author}}"}]},{G:"a",L:"ytp-upnext-autoplay-icon",W:{role:"button",href:"{{url}}","aria-label":"Play next video"},U:[{G:"svg",W:{height:"100%",version:"1.1",viewBox:"0 0 72 72",width:"100%"},
U:[{G:"circle",L:"ytp-svg-autoplay-circle",W:{cx:"36",cy:"36",fill:"#fff","fill-opacity":"0.3",r:"31.5"}},{G:"circle",L:"ytp-svg-autoplay-ring",W:{cx:"-36",cy:"36","fill-opacity":"0",r:"33.5",stroke:"#FFFFFF","stroke-dasharray":"211","stroke-dashoffset":"-211","stroke-width":"4",transform:"rotate(-90)"}},{G:"path",L:"ytp-svg-fill",W:{d:"M 24,48 41,36 24,24 V 48 z M 44,24 v 24 h 4 V 24 h -4 z"}}]}]},{G:"span",L:"ytp-upnext-bottom",U:[{G:"span",L:"ytp-upnext-cancel"},{G:"span",L:"ytp-upnext-paused",
va:"Autoplay is paused"}]}]});this.api=a;this.cancelButton=null;this.D=this.Fa("ytp-svg-autoplay-ring");this.B=this.notification=this.i=this.suggestion=null;this.C=new g.L(this.Ky,5E3,this);this.u=0;var b=this.Fa("ytp-upnext-cancel");this.cancelButton=new g.V({G:"button",Ja:["ytp-upnext-cancel-button","ytp-button"],W:{tabindex:"0","aria-label":"Cancel autoplay"},va:"Cancel"});g.I(this,this.cancelButton);this.cancelButton.Ra("click",this.SQ,this);this.cancelButton.Ea(b);this.cancelButton&&this.api.Hb(this.cancelButton.element,
this,115129);g.I(this,this.C);this.api.Hb(this.element,this,18788);b=this.Fa("ytp-upnext-autoplay-icon");this.T(b,"click",this.TQ);this.api.Hb(b,this,115130);this.AI();this.T(a,"autonavvisibility",this.AI);this.T(a,"mdxnowautoplaying",this.rV);this.T(a,"mdxautoplaycanceled",this.sV);g.N(this.element,"ytp-upnext-mobile",this.api.V().isMobile)},qVa=function(a,b){return b?b:0<=a.api.Np()?a.api.Np():g.S(a.api.V().experiments,"autoplay_time")||1E4},b6=function(a,b){b=qVa(a,b);
var c=Math,d=c.min;var e=(0,g.Q)()-a.u;c=d.call(c,e,b);b=0===b?1:Math.min(c/b,1);a.D.setAttribute("stroke-dashoffset",""+-211*(b+1));1<=b&&a.Jh()&&3!==a.api.getPresentingPlayerType()?a.select(!0):a.Jh()&&a.i.start()},c6=function(a){$5.call(this,a,"autonav-endscreen");
this.overlay=this.videoData=null;this.table=new g.V({G:"div",L:"ytp-suggestion-panel",U:[{G:"div",Ja:["ytp-autonav-endscreen-upnext-header","ytp-autonav-endscreen-more-videos"],va:"More videos"}]});this.K=new g.V({G:"div",L:"ytp-suggestions-container"});this.videos=[];this.B=null;this.D=this.I=!1;this.u=new W5(this.player);g.I(this,this.u);this.u.Ea(this.element);a.getVideoData().Ic?this.i=this.u:(this.i=new a6(a),g.rM(this.player,this.i.element,4),g.I(this,this.i));this.overlay=new g.V({G:"div",
L:"ytp-autonav-overlay-cancelled-state"});g.I(this,this.overlay);this.overlay.Ea(this.element);this.C=new g.KC(this);g.I(this,this.C);g.I(this,this.table);this.table.Ea(this.element);this.table.show();g.I(this,this.K);this.K.Ea(this.table.element);this.hide()},d6=function(a){var b=a.ke();
b!==a.D&&(a.D=b,a.player.ea("autonavvisibility"),a.D?(a.u!==a.i&&a.u.hide(),a.table.hide()):(a.u!==a.i&&a.u.show(),a.table.show()))},e6=function(a){$5.call(this,a,"subscribecard-endscreen");
this.i=new g.V({G:"div",L:"ytp-subscribe-card",U:[{G:"img",L:"ytp-author-image",W:{src:"{{profilePicture}}"}},{G:"div",L:"ytp-subscribe-card-right",U:[{G:"div",L:"ytp-author-name",va:"{{author}}"},{G:"div",L:"html5-subscribe-button-container"}]}]});g.I(this,this.i);this.i.Ea(this.element);var b=a.getVideoData();this.subscribeButton=new g.HN("Subscribe",null,"Unsubscribe",null,!0,!1,b.gj,b.subscribed,"trailer-endscreen",null,null,a);g.I(this,this.subscribeButton);this.subscribeButton.Ea(this.i.Fa("html5-subscribe-button-container"));
this.T(a,"videodatachange",this.Qa);this.Qa();this.hide()},f6=function(a){var b=a.V(),c=g.wA||g.kE?{style:"will-change: opacity"}:void 0,d=b.i,e=["ytp-videowall-still"];
b.isMobile&&e.push("ytp-videowall-show-text");g.V.call(this,{G:"a",Ja:e,W:{href:"{{url}}",target:d?b.I:"","aria-label":"{{aria_label}}","data-is-live":"{{is_live}}","data-is-list":"{{is_list}}","data-is-mix":"{{is_mix}}"},U:[{G:"div",L:"ytp-videowall-still-image",W:{style:"{{background}}"}},{G:"span",L:"ytp-videowall-still-info",U:[{G:"span",L:"ytp-videowall-still-info-bg",U:[{G:"span",L:"ytp-videowall-still-info-content",W:c,U:[{G:"span",L:"ytp-videowall-still-info-title",va:"{{title}}"},{G:"span",
L:"ytp-videowall-still-info-author",va:"{{author_and_views}}"},{G:"span",L:"ytp-videowall-still-info-live",va:"Live"},{G:"span",L:"ytp-videowall-still-info-duration",va:"{{duration}}"}]}]}]},{G:"span",Ja:["ytp-videowall-still-listlabel-regular","ytp-videowall-still-listlabel"],U:[{G:"span",L:"ytp-videowall-still-listlabel-icon"},"Playlist",{G:"span",L:"ytp-videowall-still-listlabel-length",U:[" (",{G:"span",va:"{{playlist_length}}"},")"]}]},{G:"span",Ja:["ytp-videowall-still-listlabel-mix","ytp-videowall-still-listlabel"],
U:[{G:"span",L:"ytp-videowall-still-listlabel-mix-icon"},"Mix",{G:"span",L:"ytp-videowall-still-listlabel-length",va:" (50+)"}]}]});this.suggestion=null;this.u=d;this.api=a;this.i=new g.KC(this);g.I(this,this.i);this.Ra("click",this.onClick);this.Ra("keypress",this.onKeyPress);this.i.T(a,"videodatachange",this.onVideoDataChange);a.Rg(this.element,this);this.onVideoDataChange()},g6=function(a){$5.call(this,a,"videowall-endscreen");
var b=this;this.J=a;this.B=0;this.stills=[];this.C=this.videoData=null;this.D=this.K=!1;this.S=null;this.u=new g.KC(this);g.I(this,this.u);this.I=new g.L(function(){g.M(b.element,"ytp-show-tiles")},0);
g.I(this,this.I);var c=new g.V({G:"button",Ja:["ytp-button","ytp-endscreen-previous"],W:{"aria-label":"Previous"},U:[g.sK()]});g.I(this,c);c.Ea(this.element);c.Ra("click",this.XQ,this);this.table=new g.kK({G:"div",L:"ytp-endscreen-content"});g.I(this,this.table);this.table.Ea(this.element);c=new g.V({G:"button",Ja:["ytp-button","ytp-endscreen-next"],W:{"aria-label":"Next"},U:[g.tK()]});g.I(this,c);c.Ea(this.element);c.Ra("click",this.WQ,this);a.getVideoData().Ic?this.i=new W5(a,!0):this.i=new a6(a);
g.I(this,this.i);g.rM(this.player,this.i.element,4);this.hide()},h6=function(a){return g.sM(a.player)&&a.Uu()&&!a.C},i6=function(a){var b=a.ke();
b!==a.K&&(a.K=b,a.player.ea("autonavvisibility"))},j6=function(a){g.EM.call(this,a);
var b=this;this.endScreen=null;this.i=this.u=this.B=!1;this.listeners=new g.KC(this);g.I(this,this.listeners);this.env=a.V();rVa(a)?(this.B=!0,sVa(this),this.i?this.endScreen=new c6(a):this.endScreen=new g6(this.player)):this.env.wd?this.endScreen=new e6(this.player):this.endScreen=new $5(this.player);g.I(this,this.endScreen);g.rM(this.player,this.endScreen.element,4);tVa(this);this.listeners.T(a,"videodatachange",this.onVideoDataChange,this);this.listeners.T(a,g.uz("endscreen"),function(c){b.onCueRangeEnter(c)});
this.listeners.T(a,g.vz("endscreen"),function(c){b.onCueRangeExit(c)})},sVa=function(a){var b=a.player.getVideoData();
if(!b||a.i===b.Sh&&a.u===b.Ic)return!1;a.i=b.Sh;a.u=b.Ic;return!0},rVa=function(a){a=a.V();
return a.tb&&!a.wd},tVa=function(a){a.player.Ze("endscreen");
var b=a.player.getVideoData();b=new g.sz(Math.max(1E3*(b.lengthSeconds-10),0),0x8000000000000,{id:"preload",namespace:"endscreen"});var c=new g.sz(0x8000000000000,0x8000000000000,{id:"load",priority:8,namespace:"endscreen"});a.player.Gd([b,c])};
g.kM.prototype.Np=g.ca(2,function(){return this.app.Np()});
g.$X.prototype.Np=g.ca(1,function(){return this.getVideoData().NN});g.w(U5,g.V);U5.prototype.select=function(){(this.J.Xj(this.suggestion.videoId,this.suggestion.sessionData,this.suggestion.playlistId,void 0,void 0,this.suggestion.Av||void 0)||this.J.N("web_player_endscreen_double_log_fix_killswitch"))&&this.J.Bb(this.element)};
U5.prototype.onClick=function(a){g.aN(a,this.J,this.i,this.suggestion.sessionData||void 0)&&this.select()};
U5.prototype.onKeyPress=function(a){switch(a.keyCode){case 13:case 32:g.wv(a)||(this.select(),g.vv(a))}};g.w(W5,g.V);g.k=W5.prototype;g.k.jy=function(a){this.suggestion!==a&&(this.suggestion=a,T5(this.i,a),this.playButton.Pa("url",this.suggestion.Pk()),Z5(this))};
g.k.Jh=function(){return 0<this.u};
g.k.Pt=function(){this.Jh()||(this.u=Date.now(),V5(this),pVa(this.J,Y5(this)),g.N(this.J.getRootNode(),"countdown-running",this.Jh()))};
g.k.zq=function(){this.Pm();V5(this);var a=this.i.Fa("ytp-autonav-endscreen-upnext-header");a&&g.uh(a,"Up next")};
g.k.Pm=function(){this.Jh()&&(this.C.stop(),this.u=0)};
g.k.select=function(a){this.J.nextVideo(!1,void 0===a?!1:a);this.Pm()};
g.k.zI=function(a){g.aN(a,this.J)&&(a.currentTarget===this.playButton.element?this.J.Bb(this.playButton.element):a.currentTarget===this.i.Fa("ytp-autonav-endscreen-link-container")&&(a=this.i.Fa("ytp-autonav-endscreen-link-container"),this.J.ib(a,!0),this.J.Bb(a)),this.select())};
g.k.RQ=function(){this.J.Bb(this.cancelButton.element);g.mM(this.J,!0);this.D&&this.J.Oa("innertubeCommand",this.D)};
g.k.onVideoDataChange=function(a,b){a=b.IY;this.D=null===a||void 0===a?void 0:a.command};
g.k.yI=function(){var a=this.J.ke();this.I&&this.wb!==a&&g.nK(this,a);Z5(this);this.J.ib(this.element,a);this.J.ib(this.cancelButton.element,a);this.J.ib(this.i.Fa("ytp-autonav-endscreen-link-container"),a);this.J.ib(this.playButton.element,a)};
g.k.yf=function(a){return 400>a.width||459>a.height};g.w($5,g.V);g.k=$5.prototype;g.k.create=function(){this.created=!0};
g.k.destroy=function(){this.created=!1};
g.k.Uu=function(){return!1};
g.k.ke=function(){return!1};
g.k.IL=function(){return!1};g.w(a6,g.V);g.k=a6.prototype;g.k.Ky=function(){this.notification&&(this.C.stop(),this.xc(this.B),this.B=null,this.notification.close(),this.notification=null)};
g.k.jy=function(a){this.suggestion=a;T5(this,a,"hqdefault.jpg")};
g.k.AI=function(){g.nK(this,this.api.ke());this.api.ib(this.element,this.api.ke());this.api.ib(this.Fa("ytp-upnext-autoplay-icon"),this.api.ke());this.cancelButton&&this.api.ib(this.cancelButton.element,this.api.ke())};
g.k.AV=function(){window.focus();this.Ky()};
g.k.Pt=function(a){var b=this;this.Jh()||(g.Nv("a11y-announce","Up Next "+this.suggestion.title),this.u=(0,g.Q)(),this.i=new g.L(function(){b6(b,a)},25),b6(this,a),pVa(this.api,qVa(this,a)));
g.ms(this.element,"ytp-upnext-autoplay-paused")};
g.k.hide=function(){g.V.prototype.hide.call(this)};
g.k.Jh=function(){return!!this.i};
g.k.zq=function(){this.Pm();this.u=(0,g.Q)();b6(this);g.M(this.element,"ytp-upnext-autoplay-paused")};
g.k.Pm=function(){this.Jh()&&(this.i.dispose(),this.i=null)};
g.k.select=function(a){a=void 0===a?!1:a;if(this.api.V().N("autonav_notifications")&&a&&window.Notification&&"function"===typeof document.hasFocus){var b=Notification.permission;"default"===b?Notification.requestPermission():"granted"!==b||document.hasFocus()||(this.Ky(),this.notification=new Notification("Up Next",{body:this.suggestion.title,icon:this.suggestion.Oe()}),this.B=this.T(this.notification,"click",this.AV),this.C.start())}this.Pm();this.api.nextVideo(!1,a)};
g.k.TQ=function(a){!g.qh(this.cancelButton.element,g.qv(a))&&g.aN(a,this.api)&&(this.api.ke()&&this.api.Bb(this.Fa("ytp-upnext-autoplay-icon")),this.select())};
g.k.SQ=function(){this.api.ke()&&this.cancelButton&&this.api.Bb(this.cancelButton.element);g.mM(this.api,!0)};
g.k.rV=function(a){this.api.getPresentingPlayerType();this.show();this.Pt(a)};
g.k.sV=function(){this.api.getPresentingPlayerType();this.Pm();this.hide()};
g.k.ya=function(){this.Pm();this.Ky();g.V.prototype.ya.call(this)};g.w(c6,$5);g.k=c6.prototype;g.k.create=function(){$5.prototype.create.call(this);this.C.T(this.player,"appresize",this.Lu);this.C.T(this.player,"onVideoAreaChange",this.Lu);this.C.T(this.player,"videodatachange",this.onVideoDataChange);this.C.T(this.player,"autonavchange",this.BI);this.C.T(this.player,"autonavcancel",this.UQ);this.onVideoDataChange()};
g.k.show=function(){$5.prototype.show.call(this);(this.I||this.B&&this.B!==this.videoData.clientPlaybackNonce)&&g.mM(this.player,!1);g.sM(this.player)&&this.Uu()&&!this.B?(d6(this),2===this.videoData.autonavState?this.player.V().N("fast_autonav_in_background")&&3===this.player.getVisibilityState()?this.i.select(!0):this.i.Pt():3===this.videoData.autonavState&&this.i.zq()):(g.mM(this.player,!0),d6(this));this.Lu()};
g.k.hide=function(){$5.prototype.hide.call(this);this.i.zq();d6(this)};
g.k.Lu=function(){var a=this.player.xj(!0,this.player.isFullscreen());d6(this);Z5(this.u);g.N(this.element,"ytp-autonav-cancelled-small-mode",this.yf(a));g.N(this.element,"ytp-autonav-cancelled-tiny-mode",this.Uz(a));g.N(this.element,"ytp-autonav-cancelled-mini-mode",400>=a.width||360>=a.height);this.overlay&&g.dn(this.overlay.element,{width:a.width+"px"});if(!this.D){a=g.q(this.videos.entries());for(var b=a.next();!b.done;b=a.next()){var c=g.q(b.value);b=c.next().value;c=c.next().value;g.N(c.element,
"ytp-suggestion-card-with-margin",1===b%2)}}};
g.k.onVideoDataChange=function(){var a=this.player.getVideoData();if(this.videoData!==a&&a){this.videoData=a;if((a=this.videoData.suggestions)&&a.length){this.i.jy(a[0]);this.i!==this.u&&this.u.jy(a[0]);for(var b=0;b<uVa.length;++b){var c=uVa[b];if(a&&a[c]){this.videos[b]=new U5(this.player);var d=this.videos[b];c=a[c];d.suggestion!==c&&(d.suggestion=c,T5(d,c));g.I(this,this.videos[b]);this.videos[b].Ea(this.K.element)}}}this.Lu()}};
g.k.BI=function(a){1===a?(this.I=!1,this.B=this.videoData.clientPlaybackNonce,this.i.Pm(),this.wb&&this.Lu()):(this.I=!0,this.ke()&&(2===a?this.i.Pt():3===a&&this.i.zq()))};
g.k.UQ=function(a){a?this.BI(1):(this.B=null,this.I=!1)};
g.k.Uu=function(){return 1!==this.videoData.autonavState};
g.k.yf=function(a){return(910>a.width||459>a.height)&&!this.Uz(a)&&!(400>=a.width||360>=a.height)};
g.k.Uz=function(a){return 800>a.width&&!(400>=a.width||360>=a.height)};
g.k.ke=function(){return this.wb&&g.sM(this.player)&&this.Uu()&&!this.B};
var uVa=[1,3,2,4];g.w(e6,$5);e6.prototype.Qa=function(){var a=this.player.getVideoData();this.i.update({profilePicture:a.Rh,author:a.author});this.subscribeButton.channelId=a.gj;var b=this.subscribeButton;a.subscribed?b.u():b.B()};g.w(f6,g.V);f6.prototype.select=function(){(this.api.Xj(this.suggestion.videoId,this.suggestion.sessionData,this.suggestion.playlistId,void 0,void 0,this.suggestion.Av||void 0)||this.api.N("web_player_endscreen_double_log_fix_killswitch"))&&this.api.Bb(this.element)};
f6.prototype.onClick=function(a){g.aN(a,this.api,this.u,this.suggestion.sessionData||void 0)&&this.select()};
f6.prototype.onKeyPress=function(a){switch(a.keyCode){case 13:case 32:g.wv(a)||(this.select(),g.vv(a))}};
f6.prototype.onVideoDataChange=function(){var a=this.api.getVideoData(),b=this.api.V();this.u=a.D?!1:b.i};g.w(g6,$5);g.k=g6.prototype;g.k.create=function(){$5.prototype.create.call(this);var a=this.player.getVideoData();a&&(this.videoData=a);this.Cl();this.u.T(this.player,"appresize",this.Cl);this.u.T(this.player,"onVideoAreaChange",this.Cl);this.u.T(this.player,"videodatachange",this.onVideoDataChange);this.u.T(this.player,"autonavchange",this.uC);this.u.T(this.player,"autonavcancel",this.VQ);a=this.videoData.autonavState;a!==this.S&&this.uC(a);this.u.T(this.element,"transitionend",this.SW)};
g.k.destroy=function(){g.cy(this.u);(0,g.we)(this.stills);this.stills=[];$5.prototype.destroy.call(this);g.ms(this.element,"ytp-show-tiles");this.I.stop();this.S=this.videoData.autonavState};
g.k.Uu=function(){return 1!==this.videoData.autonavState};
g.k.show=function(){$5.prototype.show.call(this);g.ms(this.element,"ytp-show-tiles");this.player.V().isMobile?g.fs(this.I):this.I.start();(this.D||this.C&&this.C!==this.videoData.clientPlaybackNonce)&&g.mM(this.player,!1);h6(this)?(i6(this),2===this.videoData.autonavState?this.player.V().N("fast_autonav_in_background")&&3===this.player.getVisibilityState()?this.i.select(!0):this.i.Pt():3===this.videoData.autonavState&&this.i.zq()):(g.mM(this.player,!0),i6(this))};
g.k.hide=function(){$5.prototype.hide.call(this);this.i.zq();i6(this)};
g.k.SW=function(a){g.qv(a)===this.element&&this.Cl()};
g.k.Cl=function(){if(this.videoData&&this.videoData.suggestions&&this.videoData.suggestions.length){g.M(this.element,"ytp-endscreen-paginate");var a=this.J.xj(!0,this.J.isFullscreen()),b=g.hM(this.J);b&&(b=b.Ve()?48:32,a.width-=2*b);var c=a.width/a.height,d=96/54,e=b=2,f=Math.max(a.width/96,2),h=Math.max(a.height/54,2),l=this.videoData.suggestions.length,m=Math.pow(2,2);var n=l*m+(Math.pow(2,2)-m);n+=Math.pow(2,2)-m;for(n-=m;0<n&&(b<f||e<h);){var p=b/2,r=e/2,t=b<=f-2&&n>=r*m,v=e<=h-2&&n>=p*m;if((p+
1)/r*d/c>c/(p/(r+1)*d)&&v)n-=p*m,e+=2;else if(t)n-=r*m,b+=2;else if(v)n-=p*m,e+=2;else break}d=!1;n>=3*m&&6>=l*m-n&&(4<=e||4<=b)&&(d=!0);m=96*b;n=54*e;c=m/n<c?a.height/n:a.width/m;c=Math.min(c,2);m=Math.floor(Math.min(a.width,m*c));n=Math.floor(Math.min(a.height,n*c));a=this.table.element;g.sn(a,m,n);g.dn(a,{marginLeft:m/-2+"px",marginTop:n/-2+"px"});this.i.jy(this.videoData.suggestions[0]);this.i instanceof W5&&Z5(this.i);g.N(this.element,"ytp-endscreen-takeover",h6(this));i6(this);m+=4;n+=4;for(f=
c=0;f<b;f++)for(h=0;h<e;h++)if(p=c,r=0,d&&f>=b-2&&h>=e-2?r=1:0===h%2&&0===f%2&&(2>h&&2>f?0===h&&0===f&&(r=2):r=2),p=g.vg(p+this.B,l),0!==r){t=this.stills[c];t||(t=new f6(this.player),this.stills[c]=t,a.appendChild(t.element));v=Math.floor(n*h/e);var x=Math.floor(m*f/b),y=Math.floor(n*(h+r)/e)-v-4,z=Math.floor(m*(f+r)/b)-x-4;g.ln(t.element,x,v);g.sn(t.element,z,y);g.dn(t.element,"transitionDelay",(h+f)/20+"s");g.N(t.element,"ytp-videowall-still-mini",1===r);g.N(t.element,"ytp-videowall-still-large",
2<r);r=t;p=this.videoData.suggestions[p];r.suggestion!==p&&(r.suggestion=p,t=r.api.V(),v=g.ks(r.element,"ytp-videowall-still-large")?"hqdefault.jpg":"mqdefault.jpg",T5(r,p,v),g.mE(t)&&(t=p.Pk(),t=g.hj(t,g.ZL("emb_rel_end")),r.Pa("url",t)),(p=(p=p.sessionData)&&p.itct)&&r.api.Mm(r.element,p));c++}g.N(this.element,"ytp-endscreen-paginate",c<l);for(b=this.stills.length-1;b>=c;b--)e=this.stills[b],g.oh(e.element),(0,g.ve)(e);this.stills.length=c}};
g.k.onVideoDataChange=function(){var a=this.player.getVideoData();this.videoData!==a&&(this.B=0,this.videoData=a,this.Cl())};
g.k.WQ=function(){this.B+=this.stills.length;this.Cl()};
g.k.XQ=function(){this.B-=this.stills.length;this.Cl()};
g.k.IL=function(){return this.i.Jh()};
g.k.uC=function(a){1===a?(this.D=!1,this.C=this.videoData.clientPlaybackNonce,this.i.Pm(),this.wb&&this.Cl()):(this.D=!0,this.wb&&h6(this)&&(2===a?this.i.Pt():3===a&&this.i.zq()))};
g.k.VQ=function(a){if(a){for(a=0;a<this.stills.length;a++)this.J.ib(this.stills[a].element,!0);this.uC(1)}else this.C=null,this.D=!1;this.Cl()};
g.k.ke=function(){return this.wb&&h6(this)};g.w(j6,g.EM);g.k=j6.prototype;g.k.Mq=function(){var a=this.player.getVideoData(),b=!!(a&&a.suggestions&&a.suggestions.length);b=!rVa(this.player)||b;var c=a.Fe||g.xE(a.u),d=this.player.Gv();a=a.mutedAutoplay;return b&&!c&&!d&&!a};
g.k.ke=function(){return this.endScreen.ke()};
g.k.sT=function(){return this.ke()?this.endScreen.IL():!1};
g.k.ya=function(){this.player.Ze("endscreen");g.EM.prototype.ya.call(this)};
g.k.load=function(){var a=this.player.getVideoData();var b=a.KL;if(b&&b.videoId){var c=this.player.ub().Jd.get("heartbeat");a&&a.suggestions&&a.suggestions.length&&b.videoId===a.suggestions[0].videoId&&!a.VI?a=!1:(this.player.Xj(b.videoId,void 0,void 0,!0,!0,b),c&&c.cA("HEARTBEAT_ACTION_TRIGGER_AT_STREAM_END","HEARTBEAT_ACTION_TRANSITION_REASON_HAS_NEW_STREAM_TRANSITION_ENDPOINT"),a=!0)}else a=!1;a||(g.EM.prototype.load.call(this),this.endScreen.show())};
g.k.unload=function(){g.EM.prototype.unload.call(this);this.endScreen.hide();this.endScreen.destroy()};
g.k.onCueRangeEnter=function(a){this.Mq()&&(this.endScreen.created||this.endScreen.create(),"load"===a.getId()&&this.load())};
g.k.onCueRangeExit=function(a){"load"===a.getId()&&this.loaded&&this.unload()};
g.k.onVideoDataChange=function(){tVa(this);this.B&&sVa(this)&&(this.endScreen&&(this.endScreen.hide(),this.endScreen.created&&this.endScreen.destroy(),this.endScreen.dispose()),this.i?this.endScreen=new c6(this.player):this.endScreen=new g6(this.player),g.I(this,this.endScreen),g.rM(this.player,this.endScreen.element,4))};g.DM("endscreen",j6);})(_yt_player);
