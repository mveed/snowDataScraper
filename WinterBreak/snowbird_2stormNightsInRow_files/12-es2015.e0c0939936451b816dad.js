(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{"6T5w":function(e,t,n){"use strict";n.r(t),n.d(t,"LegalModule",function(){return Me});var i=n("ofXK"),l=n("3Pt+"),r=n("bTqV"),a=n("FKr1"),o=n("kmnG"),s=n("qFsG"),c=n("QibW"),g=n("GU7r"),b=n("fXoL"),d=n("8LU1"),h=n("R1ws"),u=n("u47x");const m=["thumbContainer"],p=["toggleBar"],f=["input"],C=function(){return{enterDuration:150}},_=["*"],v=new b.r("mat-slide-toggle-default-options",{providedIn:"root",factory:()=>({disableToggleValue:!1})});let x=0;const y={provide:l.j,useExisting:Object(b.U)(()=>O),multi:!0};class P{constructor(e,t){this.source=e,this.checked=t}}class w{constructor(e){this._elementRef=e}}const k=Object(a.s)(Object(a.o)(Object(a.p)(Object(a.q)(w)),"accent"));let O=(()=>{class e extends k{constructor(e,t,n,i,l,r){super(e),this._focusMonitor=t,this._changeDetectorRef=n,this.defaults=l,this._animationMode=r,this._onChange=e=>{},this._onTouched=()=>{},this._uniqueId="mat-slide-toggle-"+ ++x,this._required=!1,this._checked=!1,this.name=null,this.id=this._uniqueId,this.labelPosition="after",this.ariaLabel=null,this.ariaLabelledby=null,this.change=new b.n,this.toggleChange=new b.n,this.tabIndex=parseInt(i)||0}get required(){return this._required}set required(e){this._required=Object(d.b)(e)}get checked(){return this._checked}set checked(e){this._checked=Object(d.b)(e),this._changeDetectorRef.markForCheck()}get inputId(){return`${this.id||this._uniqueId}-input`}ngAfterContentInit(){this._focusMonitor.monitor(this._elementRef,!0).subscribe(e=>{"keyboard"===e||"program"===e?this._inputElement.nativeElement.focus():e||Promise.resolve().then(()=>this._onTouched())})}ngOnDestroy(){this._focusMonitor.stopMonitoring(this._elementRef)}_onChangeEvent(e){e.stopPropagation(),this.toggleChange.emit(),this.defaults.disableToggleValue?this._inputElement.nativeElement.checked=this.checked:(this.checked=this._inputElement.nativeElement.checked,this._emitChangeEvent())}_onInputClick(e){e.stopPropagation()}writeValue(e){this.checked=!!e}registerOnChange(e){this._onChange=e}registerOnTouched(e){this._onTouched=e}setDisabledState(e){this.disabled=e,this._changeDetectorRef.markForCheck()}focus(e,t){t?this._focusMonitor.focusVia(this._inputElement,t,e):this._inputElement.nativeElement.focus(e)}toggle(){this.checked=!this.checked,this._onChange(this.checked)}_emitChangeEvent(){this._onChange(this.checked),this.change.emit(new P(this,this.checked))}_onLabelTextChange(){this._changeDetectorRef.detectChanges()}}return e.\u0275fac=function(t){return new(t||e)(b.Ob(b.l),b.Ob(u.g),b.Ob(b.h),b.Zb("tabindex"),b.Ob(v),b.Ob(h.a,8))},e.\u0275cmp=b.Ib({type:e,selectors:[["mat-slide-toggle"]],viewQuery:function(e,t){if(1&e&&(b.Jc(m,1),b.Jc(p,1),b.Jc(f,1)),2&e){let e;b.qc(e=b.cc())&&(t._thumbEl=e.first),b.qc(e=b.cc())&&(t._thumbBarEl=e.first),b.qc(e=b.cc())&&(t._inputElement=e.first)}},hostAttrs:[1,"mat-slide-toggle"],hostVars:12,hostBindings:function(e,t){2&e&&(b.Xb("id",t.id),b.Db("tabindex",t.disabled?null:-1)("aria-label",null)("aria-labelledby",null),b.Gb("mat-checked",t.checked)("mat-disabled",t.disabled)("mat-slide-toggle-label-before","before"==t.labelPosition)("_mat-animation-noopable","NoopAnimations"===t._animationMode))},inputs:{disabled:"disabled",disableRipple:"disableRipple",color:"color",tabIndex:"tabIndex",name:"name",id:"id",labelPosition:"labelPosition",ariaLabel:["aria-label","ariaLabel"],ariaLabelledby:["aria-labelledby","ariaLabelledby"],required:"required",checked:"checked"},outputs:{change:"change",toggleChange:"toggleChange"},exportAs:["matSlideToggle"],features:[b.Bb([y]),b.zb],ngContentSelectors:_,decls:16,vars:18,consts:[[1,"mat-slide-toggle-label"],["label",""],[1,"mat-slide-toggle-bar"],["toggleBar",""],["type","checkbox","role","switch",1,"mat-slide-toggle-input","cdk-visually-hidden",3,"id","required","tabIndex","checked","disabled","change","click"],["input",""],[1,"mat-slide-toggle-thumb-container"],["thumbContainer",""],[1,"mat-slide-toggle-thumb"],["mat-ripple","",1,"mat-slide-toggle-ripple","mat-focus-indicator",3,"matRippleTrigger","matRippleDisabled","matRippleCentered","matRippleRadius","matRippleAnimation"],[1,"mat-ripple-element","mat-slide-toggle-persistent-ripple"],[1,"mat-slide-toggle-content",3,"cdkObserveContent"],["labelContent",""],[2,"display","none"]],template:function(e,t){if(1&e&&(b.kc(),b.Ub(0,"label",0,1),b.Ub(2,"div",2,3),b.Ub(4,"input",4,5),b.bc("change",function(e){return t._onChangeEvent(e)})("click",function(e){return t._onInputClick(e)}),b.Tb(),b.Ub(6,"div",6,7),b.Pb(8,"div",8),b.Ub(9,"div",9),b.Pb(10,"div",10),b.Tb(),b.Tb(),b.Tb(),b.Ub(11,"span",11,12),b.bc("cdkObserveContent",function(){return t._onLabelTextChange()}),b.Ub(13,"span",13),b.Dc(14,"\xa0"),b.Tb(),b.jc(15),b.Tb(),b.Tb()),2&e){const e=b.rc(1),n=b.rc(12);b.Db("for",t.inputId),b.Cb(2),b.Gb("mat-slide-toggle-bar-no-side-margin",!n.textContent||!n.textContent.trim()),b.Cb(2),b.lc("id",t.inputId)("required",t.required)("tabIndex",t.tabIndex)("checked",t.checked)("disabled",t.disabled),b.Db("name",t.name)("aria-checked",t.checked.toString())("aria-label",t.ariaLabel)("aria-labelledby",t.ariaLabelledby),b.Cb(5),b.lc("matRippleTrigger",e)("matRippleDisabled",t.disableRipple||t.disabled)("matRippleCentered",!0)("matRippleRadius",20)("matRippleAnimation",b.mc(17,C))}},directives:[a.j,g.a],styles:[".mat-slide-toggle{display:inline-block;height:24px;max-width:100%;line-height:24px;white-space:nowrap;outline:none;-webkit-tap-highlight-color:transparent}.mat-slide-toggle.mat-checked .mat-slide-toggle-thumb-container{transform:translate3d(16px, 0, 0)}[dir=rtl] .mat-slide-toggle.mat-checked .mat-slide-toggle-thumb-container{transform:translate3d(-16px, 0, 0)}.mat-slide-toggle.mat-disabled{opacity:.38}.mat-slide-toggle.mat-disabled .mat-slide-toggle-label,.mat-slide-toggle.mat-disabled .mat-slide-toggle-thumb-container{cursor:default}.mat-slide-toggle-label{display:flex;flex:1;flex-direction:row;align-items:center;height:inherit;cursor:pointer}.mat-slide-toggle-content{white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.mat-slide-toggle-label-before .mat-slide-toggle-label{order:1}.mat-slide-toggle-label-before .mat-slide-toggle-bar{order:2}[dir=rtl] .mat-slide-toggle-label-before .mat-slide-toggle-bar,.mat-slide-toggle-bar{margin-right:8px;margin-left:0}[dir=rtl] .mat-slide-toggle-bar,.mat-slide-toggle-label-before .mat-slide-toggle-bar{margin-left:8px;margin-right:0}.mat-slide-toggle-bar-no-side-margin{margin-left:0;margin-right:0}.mat-slide-toggle-thumb-container{position:absolute;z-index:1;width:20px;height:20px;top:-3px;left:0;transform:translate3d(0, 0, 0);transition:all 80ms linear;transition-property:transform}._mat-animation-noopable .mat-slide-toggle-thumb-container{transition:none}[dir=rtl] .mat-slide-toggle-thumb-container{left:auto;right:0}.mat-slide-toggle-thumb{height:20px;width:20px;border-radius:50%}.mat-slide-toggle-bar{position:relative;width:36px;height:14px;flex-shrink:0;border-radius:8px}.mat-slide-toggle-input{bottom:0;left:10px}[dir=rtl] .mat-slide-toggle-input{left:auto;right:10px}.mat-slide-toggle-bar,.mat-slide-toggle-thumb{transition:all 80ms linear;transition-property:background-color;transition-delay:50ms}._mat-animation-noopable .mat-slide-toggle-bar,._mat-animation-noopable .mat-slide-toggle-thumb{transition:none}.mat-slide-toggle .mat-slide-toggle-ripple{position:absolute;top:calc(50% - 20px);left:calc(50% - 20px);height:40px;width:40px;z-index:1;pointer-events:none}.mat-slide-toggle .mat-slide-toggle-ripple .mat-ripple-element:not(.mat-slide-toggle-persistent-ripple){opacity:.12}.mat-slide-toggle-persistent-ripple{width:100%;height:100%;transform:none}.mat-slide-toggle-bar:hover .mat-slide-toggle-persistent-ripple{opacity:.04}.mat-slide-toggle:not(.mat-disabled).cdk-keyboard-focused .mat-slide-toggle-persistent-ripple{opacity:.12}.mat-slide-toggle-persistent-ripple,.mat-slide-toggle.mat-disabled .mat-slide-toggle-bar:hover .mat-slide-toggle-persistent-ripple{opacity:0}@media(hover: none){.mat-slide-toggle-bar:hover .mat-slide-toggle-persistent-ripple{display:none}}.cdk-high-contrast-active .mat-slide-toggle-thumb,.cdk-high-contrast-active .mat-slide-toggle-bar{border:1px solid}.cdk-high-contrast-active .mat-slide-toggle.cdk-keyboard-focused .mat-slide-toggle-bar{outline:2px dotted;outline-offset:5px}\n"],encapsulation:2,changeDetection:0}),e})(),M=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=b.Mb({type:e}),e.\u0275inj=b.Lb({}),e})(),R=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=b.Mb({type:e}),e.\u0275inj=b.Lb({imports:[[M,a.k,a.f,g.c],M,a.f]}),e})();var S=n("tyNb"),T=n("sYmb"),I=n("7MZV"),U=n("dBhb"),q=n("PCNd"),D=n("7JDB"),B=n("0Faz"),E=n("mrSG"),A=n("VfN6"),j=n("eCXC"),F=n("wbTk"),L=n("rjLu");function N(e,t){if(1&e&&(b.Pb(0,"div",12),b.gc(1,"safe")),2&e){const e=b.fc();b.lc("innerHTML",b.ic(1,1,e.cameraCopyright,"html"),b.vc)}}let z=(()=>{class e{constructor(){this.currentYear=(new Date).getFullYear()}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=b.Ib({type:e,selectors:[["app-legal-notes"]],inputs:{cameraCopyright:"cameraCopyright"},decls:26,vars:14,consts:[[1,"legal-notes"],[1,"legal-notes__heading"],[1,"mat-h2"],[1,"legal-notes-files"],["href","https://www.roundshot.com/documents/Roundshot-cookies-policy.pdf","target","_blank",1,"legal-notes-file-link"],["height","12","viewBox","0 0 24 12","width","24"],["d","M15 2h3c1.06 0 2.078.421 2.828 1.172C21.578 3.922 22 4.939 22 6c0 2.21-1.79 4-4 4h-3c-.552 0-1 .448-1 1s.448 1 1 1h3c3.314 0 6-2.686 6-6 0-1.591-.632-3.117-1.757-4.243C21.117.632 19.59 0 18 0h-3c-.552 0-1 .448-1 1s.448 1 1 1zM9 0c.552 0 1 .448 1 1s-.448 1-1 1H6C3.79 2 2 3.79 2 6c0 1.06.421 2.078 1.172 2.828C3.922 9.578 4.939 10 6 10h3c.552 0 1 .448 1 1s-.448 1-1 1H6c-1.591 0-3.117-.632-4.243-1.757C.632 9.117 0 7.59 0 6c0-3.314 2.686-6 6-6zm7 5c.552 0 1 .448 1 1s-.448 1-1 1H8c-.552 0-1-.448-1-1s.448-1 1-1z"],[1,"legal-notes-file-link__text"],["href","https://www.roundshot.com/documents/Roundshot-privacy-policy-www-roundshot-eshop-club.pdf","target","_blank",1,"legal-notes-file-link"],[1,"legal-notes-copyright"],[3,"innerHTML",4,"ngIf"],[1,"legal-notes-copyright__text"],[3,"innerHTML"]],template:function(e,t){1&e&&(b.Ub(0,"section",0),b.Ub(1,"h1",1),b.Dc(2),b.gc(3,"translate"),b.Tb(),b.Ub(4,"p",2),b.Dc(5),b.gc(6,"translate"),b.Tb(),b.Ub(7,"div",3),b.Ub(8,"a",4),b.ec(),b.Ub(9,"svg",5),b.Pb(10,"path",6),b.Tb(),b.dc(),b.Ub(11,"span",7),b.Dc(12),b.gc(13,"translate"),b.Tb(),b.Tb(),b.Ub(14,"a",8),b.ec(),b.Ub(15,"svg",5),b.Pb(16,"path",6),b.Tb(),b.dc(),b.Ub(17,"span",7),b.Dc(18),b.gc(19,"translate"),b.Tb(),b.Tb(),b.Tb(),b.Ub(20,"div",9),b.Bc(21,N,2,4,"div",10),b.Ub(22,"p",11),b.Dc(23,"Copyright of technology by Seitz Phototechnik AG."),b.Tb(),b.Ub(24,"p",11),b.Dc(25),b.Tb(),b.Tb(),b.Tb()),2&e&&(b.Cb(2),b.Ec(b.hc(3,6,"_legal_notes")),b.Cb(3),b.Ec(b.hc(6,8,"_cookie_policy_text")),b.Cb(7),b.Ec(b.hc(13,10,"_cookie_policy")),b.Cb(6),b.Ec(b.hc(19,12,"_privacy_policy")),b.Cb(3),b.lc("ngIf",t.cameraCopyright),b.Cb(4),b.Fc("\xa9 ",t.currentYear," All rights reserved"))},directives:[i.m],pipes:[T.d,L.a],styles:["[_nghost-%COMP%]{display:block}.legal-notes__heading[_ngcontent-%COMP%]{text-transform:uppercase}.legal-notes-files[_ngcontent-%COMP%]{display:flex;flex-wrap:wrap}.legal-notes-file-link[_ngcontent-%COMP%]{margin-bottom:25px;white-space:pre;display:flex;align-items:center}.legal-notes-file-link[_ngcontent-%COMP%]:not(:last-child){margin-right:38px}.legal-notes-file-link__text[_ngcontent-%COMP%]{margin-left:11px}.legal-notes-file-link[_ngcontent-%COMP%] > svg[_ngcontent-%COMP%]{fill:currentColor}.legal-notes-copyright__text[_ngcontent-%COMP%]{margin:0}"],changeDetection:0}),e})();var K=n("1QrM");let $=(()=>{class e{constructor(e){this.googleAnalyticsInternalService=e}enable(){this.googleAnalyticsInternalService.enable()}disable(){this.googleAnalyticsInternalService.disable()}isDisabled$(){return this.googleAnalyticsInternalService.isDisabled$()}}return e.\u0275fac=function(t){return new(t||e)(b.Yb(K.a))},e.\u0275prov=b.Kb({token:e,factory:e.\u0275fac,providedIn:"root"}),e})(),V=(()=>{class e{constructor(e){this.googleAnalyticsService=e,this.isDisabled$=e.isDisabled$()}toggleAnalytics(e){e.checked?this.googleAnalyticsService.disable():this.googleAnalyticsService.enable()}}return e.\u0275fac=function(t){return new(t||e)(b.Ob($))},e.\u0275cmp=b.Ib({type:e,selectors:[["app-legal-google-analytics"]],decls:9,vars:6,consts:[[1,"legal-google-analytics"],[1,"legal-google-analytics__heading"],[1,"legal-google-analytics-switcher","mat-h2"],[3,"checked","change"]],template:function(e,t){1&e&&(b.Ub(0,"section",0),b.Ub(1,"h1",1),b.Dc(2,"Google Analytics"),b.Tb(),b.Ub(3,"div",2),b.Ub(4,"div"),b.Dc(5),b.gc(6,"translate"),b.Tb(),b.Tb(),b.Ub(7,"mat-slide-toggle",3),b.bc("change",function(e){return t.toggleAnalytics(e)}),b.gc(8,"async"),b.Tb(),b.Tb()),2&e&&(b.Cb(5),b.Ec(b.hc(6,2,"_google_analytics_opt_out")),b.Cb(2),b.lc("checked",b.hc(8,4,t.isDisabled$)))},directives:[O],pipes:[T.d,i.b],styles:["[_nghost-%COMP%]{display:block}.legal-google-analytics[_ngcontent-%COMP%]{position:relative}.legal-google-analytics__heading[_ngcontent-%COMP%]{text-transform:uppercase}"],changeDetection:0}),e})();var J=n("Dp68");const G=["imgEl"],Y=function(e,t,n){return{left:e,top:t,opacity:n}};let H=(()=>{class e{constructor(e){this.cdRef=e,this.blurSelectionChange=new b.n,this.isSubmitted=!1}get isSelected(){return void 0!==this.x&&void 0!==this.y}onResize(){this.x=Math.round(this.imgElRef.nativeElement.clientWidth/2),this.y=Math.round(this.imgElRef.nativeElement.clientHeight/2)}select(e){this.x=e.offsetX,this.y=e.offsetY;const t=this.imgElRef.nativeElement.clientHeight,n=Math.round(this.x/this.imgElRef.nativeElement.clientWidth*1e4),i=Math.round(this.y/t*1e4);this.cdRef.markForCheck(),this.blurSelectionChange.emit({x:n,y:i})}}return e.\u0275fac=function(t){return new(t||e)(b.Ob(b.h))},e.\u0275cmp=b.Ib({type:e,selectors:[["app-legal-blur-selector"]],viewQuery:function(e,t){if(1&e&&b.Jc(G,1),2&e){let e;b.qc(e=b.cc())&&(t.imgElRef=e.first)}},hostBindings:function(e,t){1&e&&b.bc("resize",function(){return t.onResize()},!1,b.tc)},inputs:{image:"image",isSubmitted:"isSubmitted"},outputs:{blurSelectionChange:"blurSelectionChange"},decls:3,vars:9,consts:[["alt","Current image thumbnail",1,"legal-blur-selector-img",3,"draggable","src","click"],["imgEl",""],[1,"legal-blur-selector-img-pointer",3,"ngStyle"]],template:function(e,t){1&e&&(b.Ub(0,"img",0,1),b.bc("click",function(e){return t.select(e)}),b.Tb(),b.Pb(2,"div",2)),2&e&&(b.Gb("legal-blur-selector-img--invalid",t.isSubmitted&&!t.isSelected),b.lc("draggable",!1)("src",null==t.image||null==t.image.structure||null==t.image.structure.quarter?null:t.image.structure.quarter.url_full,b.wc),b.Cb(2),b.lc("ngStyle",b.pc(5,Y,t.x+"px",t.y+"px",t.isSelected?1:0)))},directives:[i.n],styles:['[_nghost-%COMP%]{display:block;position:relative}.legal-blur-selector-img[_ngcontent-%COMP%]{border:1px solid transparent;display:block;max-width:calc(100% - 2px);width:100%;border-radius:18px}.legal-blur-selector-img--invalid[_ngcontent-%COMP%]{border-color:red}.legal-blur-selector-img-pointer[_ngcontent-%COMP%]{position:absolute;top:50%;left:50%;width:30px;height:30px;border-radius:50%;display:flex;justify-content:center;align-items:center;transition:all .2s ease;transform:translate(-50%,-50%)}.theme-dark   [_nghost-%COMP%]   .legal-blur-selector-img-pointer[_ngcontent-%COMP%], .theme-light   [_nghost-%COMP%]   .legal-blur-selector-img-pointer[_ngcontent-%COMP%]{background-color:hsla(0,0%,100%,.4)}.legal-blur-selector-img-pointer[_ngcontent-%COMP%]:before{content:"";display:block;width:10px;height:10px;border-radius:50%;background-color:#fff}.theme-dark   [_nghost-%COMP%]   .legal-blur-selector-img-pointer[_ngcontent-%COMP%]:before, .theme-light   [_nghost-%COMP%]   .legal-blur-selector-img-pointer[_ngcontent-%COMP%]:before{background-color:#fff}'],changeDetection:0}),e})();var Q=n("jCJ1"),X=n("uxn7"),W=n("PqYM"),Z=n("nYR2"),ee=n("HlYp"),te=n("tk/3");let ne=(()=>{class e{constructor(e){this.http=e}report$(e){return this.http.post(ee.a.blur,e)}}return e.\u0275fac=function(t){return new(t||e)(b.Yb(te.b))},e.\u0275prov=b.Kb({token:e,factory:e.\u0275fac}),e})();var ie=n("96jB"),le=n("DwdA");const re=["recaptcha"];function ae(e,t){1&e&&(b.Ub(0,"mat-error"),b.Dc(1),b.gc(2,"translate"),b.Tb()),2&e&&(b.Cb(1),b.Ec(b.hc(2,1,"_field_is_required")))}function oe(e,t){1&e&&(b.Ub(0,"mat-error"),b.Dc(1),b.gc(2,"translate"),b.Tb()),2&e&&(b.Cb(1),b.Ec(b.hc(2,1,"_field_is_required")))}function se(e,t){1&e&&(b.Ub(0,"mat-error"),b.Dc(1),b.gc(2,"translate"),b.Tb()),2&e&&(b.Cb(1),b.Ec(b.hc(2,1,"_field_is_required")))}function ce(e,t){1&e&&(b.Ub(0,"mat-error"),b.Dc(1),b.gc(2,"translate"),b.Tb()),2&e&&(b.Cb(1),b.Ec(b.hc(2,1,"_invalid_email")))}function ge(e,t){1&e&&(b.Ub(0,"mat-error"),b.Dc(1),b.gc(2,"translate"),b.Tb()),2&e&&(b.Cb(1),b.Ec(b.hc(2,1,"_field_is_required")))}function be(e,t){if(1&e&&(b.Ub(0,"div",10),b.Ub(1,"div",11),b.Ub(2,"mat-form-field"),b.Pb(3,"input",12),b.gc(4,"capitalizeFirst"),b.gc(5,"translate"),b.Bc(6,ae,3,3,"mat-error",13),b.Tb(),b.Ub(7,"mat-form-field"),b.Pb(8,"input",14),b.gc(9,"capitalizeFirst"),b.gc(10,"translate"),b.Bc(11,oe,3,3,"mat-error",13),b.Tb(),b.Ub(12,"mat-form-field"),b.Pb(13,"input",15),b.gc(14,"capitalizeFirst"),b.gc(15,"translate"),b.Bc(16,se,3,3,"mat-error",13),b.Bc(17,ce,3,3,"mat-error",13),b.Tb(),b.Tb(),b.Ub(18,"mat-form-field"),b.Pb(19,"textarea",16),b.gc(20,"capitalizeFirst"),b.gc(21,"translate"),b.Bc(22,ge,3,3,"mat-error",13),b.Tb(),b.Tb()),2&e){const e=b.fc();b.Cb(3),b.lc("placeholder",b.hc(4,9,b.hc(5,11,"_first_name"))),b.Cb(3),b.lc("ngIf",null==e.form.controls.firstName.errors?null:e.form.controls.firstName.errors.required),b.Cb(2),b.lc("placeholder",b.hc(9,13,b.hc(10,15,"_last_name"))),b.Cb(3),b.lc("ngIf",null==e.form.controls.lastName.errors?null:e.form.controls.lastName.errors.required),b.Cb(2),b.lc("placeholder",b.hc(14,17,b.hc(15,19,"_blur_email"))),b.Cb(3),b.lc("ngIf",null==e.form.controls.email.errors?null:e.form.controls.email.errors.required),b.Cb(1),b.lc("ngIf",null==e.form.controls.email.errors?null:e.form.controls.email.errors.email),b.Cb(2),b.lc("placeholder",b.hc(20,21,b.hc(21,23,"_blur_message"))),b.Cb(3),b.lc("ngIf",null==e.form.controls.message.errors?null:e.form.controls.message.errors.required)}}function de(e,t){1&e&&(b.Ub(0,"mat-error"),b.Dc(1),b.gc(2,"translate"),b.Tb()),2&e&&(b.Cb(1),b.Ec(b.hc(2,1,"_field_is_required")))}function he(e,t){1&e&&(b.Ub(0,"mat-error"),b.Dc(1),b.gc(2,"translate"),b.Tb()),2&e&&(b.Cb(1),b.Ec(b.hc(2,1,"_field_is_required")))}function ue(e,t){1&e&&(b.Ub(0,"mat-error"),b.Dc(1),b.gc(2,"translate"),b.Tb()),2&e&&(b.Cb(1),b.Ec(b.hc(2,1,"_invalid_email")))}function me(e,t){if(1&e&&(b.Ub(0,"div",10),b.Ub(1,"mat-form-field"),b.Pb(2,"input",17),b.gc(3,"translate"),b.Bc(4,de,3,3,"mat-error",13),b.Tb(),b.Ub(5,"mat-form-field"),b.Pb(6,"input",15),b.gc(7,"translate"),b.Bc(8,he,3,3,"mat-error",13),b.Bc(9,ue,3,3,"mat-error",13),b.Tb(),b.Tb()),2&e){const e=b.fc();b.Cb(2),b.lc("placeholder",b.hc(3,5,"_blur_name")),b.Cb(2),b.lc("ngIf",null==e.form.controls.name.errors?null:e.form.controls.name.errors.required),b.Cb(2),b.lc("placeholder",b.hc(7,7,"_blur_email")),b.Cb(2),b.lc("ngIf",null==e.form.controls.email.errors?null:e.form.controls.email.errors.required),b.Cb(1),b.lc("ngIf",null==e.form.controls.email.errors?null:e.form.controls.email.errors.email)}}function pe(e,t){1&e&&(b.Sb(0),b.Dc(1),b.gc(2,"translate"),b.Rb()),2&e&&(b.Cb(1),b.Fc(" ",b.hc(2,1,"_blur_form_sent_successfully")," "))}function fe(e,t){1&e&&(b.Sb(0),b.Dc(1),b.gc(2,"translate"),b.Rb()),2&e&&(b.Cb(1),b.Fc(" ",b.hc(2,1,"_blur_form_sent_error")," "))}const Ce=function(e,t){return{"legal-blur-message--success":e,"legal-blur-message--error":t}};function _e(e,t){if(1&e&&(b.Ub(0,"div",18),b.Bc(1,pe,3,3,"ng-container",19),b.Bc(2,fe,3,3,"ng-container",19),b.Tb()),2&e){const e=b.fc();b.lc("ngClass",b.oc(4,Ce,"success"===e.requestStatus,"error"===e.requestStatus))("ngSwitch",e.requestStatus),b.Cb(1),b.lc("ngSwitchCase","success"),b.Cb(1),b.lc("ngSwitchCase","error")}}function ve(e,t){if(1&e){const e=b.Vb();b.Ub(0,"re-captcha",20,21),b.bc("resolved",function(t){return b.uc(e),b.fc().onReCaptchaResolved(t)}),b.Tb()}if(2&e){const e=b.fc();b.lc("siteKey",e.googleRecaptchaApiKey)}}let xe=(()=>{let e=class{constructor(e,t,n,i){this.fb=e,this.cdRef=t,this.legalBlurService=n,this.googleRecaptcaService=i,this.isRequestInProgress=!1,this.isRequestInProgressChange=new b.n,this.isSubmittedChange=new b.n}ngOnInit(){this.showRecaptchaBadge(),this.buildForm(),this.manageControlsState(),this.isRecaptchaLoaded$=this.googleRecaptcaService.getIsScriptLoaded$()}ngOnDestroy(){this.recaptchaElRef&&(this.recaptchaElRef.nativeElement.style.display="none")}ngOnChanges(e){var t,n;void 0===(null===(t=null==e?void 0:e.permanentBlur)||void 0===t?void 0:t.currentValue)||(null===(n=null==e?void 0:e.permanentBlur)||void 0===n?void 0:n.firstChange)||(this.formDirective.resetForm(),this.isSubmittedChange.next(!1),this.manageControlsState())}onSubmit(){this.isSubmittedChange.next(!0),!this.form.invalid&&this.blurPosition&&(this.recaptchaComponent.execute(),this.isRequestInProgress=!0,this.isRequestInProgressChange.next(this.isRequestInProgress),this.cdRef.detectChanges())}onReCaptchaResolved(e){if(!e)return;const t=Object.assign({type:this.permanentBlur?1:0,imageId:this.imageId,email:this.form.value.email,name:this.form.value.name,message:this.form.value.message,firstName:this.form.value.firstName,lastName:this.form.value.lastName,recaptchaToken:e},this.blurPosition);this.legalBlurService.report$(t).pipe(Object(A.b)(this),Object(Z.a)(()=>{this.isRequestInProgress=!1,this.recaptchaComponent.reset(),this.isRequestInProgressChange.next(this.isRequestInProgress),this.isSubmittedChange.next(!1),this.cdRef.detectChanges()})).subscribe(()=>this.onSuccess(),()=>this.onError())}showRecaptchaBadge(){Object(W.a)(300).pipe(Object(A.b)(this)).subscribe(()=>{this.isRecaptchaBadgeVisible=!0,this.cdRef.markForCheck()})}buildForm(){this.form=this.fb.group({email:["",[l.r.required,X.a.email]],name:["",[l.r.required]],message:["",[l.r.required]],firstName:["",[l.r.required]],lastName:["",[l.r.required]]})}manageControlsState(){this.permanentBlur?(this.form.get("name").disable(),this.form.get("message").enable(),this.form.get("firstName").enable(),this.form.get("lastName").enable()):(this.form.get("name").enable(),this.form.get("message").disable(),this.form.get("firstName").disable(),this.form.get("lastName").disable())}onSuccess(){this.formDirective.resetForm(),this.requestStatus="success"}onError(){this.requestStatus="error"}};return e.\u0275fac=function(t){return new(t||e)(b.Ob(l.d),b.Ob(b.h),b.Ob(ne),b.Ob(ie.a))},e.\u0275cmp=b.Ib({type:e,selectors:[["app-legal-blur-form"]],viewQuery:function(e,t){if(1&e&&(b.Jc(l.f,1),b.Jc(Q.a,1),b.Jc(re,1,b.l)),2&e){let e;b.qc(e=b.cc())&&(t.formDirective=e.first),b.qc(e=b.cc())&&(t.recaptchaComponent=e.first),b.qc(e=b.cc())&&(t.recaptchaElRef=e.first)}},inputs:{googleRecaptchaApiKey:"googleRecaptchaApiKey",permanentBlur:"permanentBlur",blurPosition:"blurPosition",imageId:"imageId"},outputs:{isRequestInProgressChange:"isRequestInProgressChange",isSubmittedChange:"isSubmittedChange"},features:[b.Ab],decls:14,vars:12,consts:[[3,"formGroup","ngSubmit"],["blurForm","ngForm"],[1,"legal-blur-form-fields"],[3,"ngSwitch"],["class","legal-blur-form-fields-container",4,"ngSwitchCase"],["class","legal-blur-message",3,"ngClass","ngSwitch",4,"ngIf"],[1,"legal-blur-form-footer"],[1,"legal-blur-form-footer__captcha"],["size","invisible","badge","inline",3,"siteKey","resolved",4,"ngIf"],["mat-stroked-button","",1,"legal-blur-form-footer__button",3,"disabled"],[1,"legal-blur-form-fields-container"],[1,"legal-blur-form-fields-container__row"],["matInput","","formControlName","firstName",3,"placeholder"],[4,"ngIf"],["matInput","","formControlName","lastName",3,"placeholder"],["matInput","","formControlName","email",3,"placeholder"],["matInput","","formControlName","message","rows","5",3,"placeholder"],["matInput","","formControlName","name",3,"placeholder"],[1,"legal-blur-message",3,"ngClass","ngSwitch"],[4,"ngSwitchCase"],["size","invisible","badge","inline",3,"siteKey","resolved"],["recaptcha",""]],template:function(e,t){if(1&e&&(b.Ub(0,"form",0,1),b.bc("ngSubmit",function(){return t.onSubmit()}),b.Ub(2,"div",2),b.Sb(3,3),b.Bc(4,be,23,25,"div",4),b.Bc(5,me,10,9,"div",4),b.Rb(),b.Bc(6,_e,3,7,"div",5),b.Tb(),b.Ub(7,"div",6),b.Ub(8,"div",7),b.Bc(9,ve,2,1,"re-captcha",8),b.Tb(),b.Ub(10,"button",9),b.gc(11,"async"),b.Dc(12),b.gc(13,"translate"),b.Tb(),b.Tb(),b.Tb()),2&e){const e=b.rc(1);b.lc("formGroup",t.form),b.Cb(3),b.lc("ngSwitch",t.permanentBlur),b.Cb(1),b.lc("ngSwitchCase",!0),b.Cb(1),b.lc("ngSwitchCase",!1),b.Cb(1),b.lc("ngIf",t.requestStatus),b.Cb(3),b.lc("ngIf",t.isRecaptchaBadgeVisible),b.Cb(1),b.lc("disabled",!b.hc(11,8,t.isRecaptchaLoaded$)||t.isRequestInProgress||e.submitted&&(t.form.invalid||!t.blurPosition)),b.Cb(2),b.Fc(" ",b.hc(13,10,"_send")," ")}},directives:[l.s,l.m,l.f,i.o,i.p,i.m,r.a,o.d,s.b,l.c,l.l,l.e,o.c,i.k,Q.a],pipes:[i.b,T.d,le.a],styles:[".legal-blur-form-fields[_ngcontent-%COMP%]{margin-bottom:30px}.legal-blur-form-fields[_ngcontent-%COMP%]   .mat-form-field[_ngcontent-%COMP%]{display:block}.legal-blur-message[_ngcontent-%COMP%]{font-size:18px;margin:0 0 35px;text-align:center;border-radius:18px;padding:20px}.legal-blur-message--success[_ngcontent-%COMP%]{color:green;background-color:rgba(0,128,0,.03);border:1px solid green}.legal-blur-message--error[_ngcontent-%COMP%]{color:#b00011;background-color:rgba(176,0,17,.03);border:1px solid #b00011}.legal-blur-form-footer[_ngcontent-%COMP%]{display:flex;flex-direction:column}.legal-blur-form-footer__captcha[_ngcontent-%COMP%]{display:flex;justify-content:center;margin-bottom:20px;min-width:256px}@media screen and (min-width:600px){.legal-blur-form-footer[_ngcontent-%COMP%]{flex-direction:row;justify-content:space-between}.legal-blur-form-footer__captcha[_ngcontent-%COMP%]{margin:0 56px 0 0}.legal-blur-form-footer__button[_ngcontent-%COMP%]{flex-grow:1;max-width:260px;width:100%}}@media screen and (min-width:700px){.legal-blur-form-fields-container[_ngcontent-%COMP%]{display:flex;flex-wrap:wrap;margin:0 -15px}.legal-blur-form-fields-container[_ngcontent-%COMP%] > mat-form-field[_ngcontent-%COMP%], .legal-blur-form-fields-container__row[_ngcontent-%COMP%]{box-sizing:border-box;flex:1 1 50%;max-width:50%;padding:0 15px}.legal-blur-form-fields-container[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%]{min-height:210px}}"],changeDetection:0}),e=Object(E.a)([Object(A.a)()],e),e})();var ye=n("zzDJ");function Pe(e,t){1&e&&(b.Ub(0,"div",9),b.Pb(1,"app-ui-spinner",10),b.Tb()),2&e&&(b.Cb(1),b.lc("invertColor",!0))}let we=(()=>{class e{constructor(e,t){this.imageStructureService=e,this.cdRef=t,this.permanentBlur=!1,this.currentImage$=this.imageStructureService.getCurrentImage$()}onBlurSelectionChange(e){this.blurPosition=e,this.cdRef.markForCheck()}onSubmittedChange(e){this.isSubmitted=e,this.cdRef.markForCheck()}onRequestInProgressChange(e){this.isRequestInProgress=e,this.cdRef.markForCheck()}}return e.\u0275fac=function(t){return new(t||e)(b.Ob(J.a),b.Ob(b.h))},e.\u0275cmp=b.Ib({type:e,selectors:[["app-legal-blur"]],inputs:{googleRecaptchaApiKey:"googleRecaptchaApiKey"},decls:20,vars:26,consts:[[1,"legal-blur"],[1,"legal-blur__heading"],[1,"legal-blur-switcher"],[1,"legal-blur-switcher__header"],["aria-label","Select an option",3,"ngModel","ngModelChange"],[3,"value"],[1,"legal-blur-selector",3,"image","isSubmitted","blurSelectionChange"],[3,"googleRecaptchaApiKey","imageId","permanentBlur","blurPosition","isSubmittedChange","isRequestInProgressChange"],["class","legal-blur-form-loader",4,"ngIf"],[1,"legal-blur-form-loader"],[3,"invertColor"]],template:function(e,t){if(1&e&&(b.Ub(0,"section",0),b.Ub(1,"h1",1),b.Dc(2),b.gc(3,"translate"),b.Tb(),b.Ub(4,"div",2),b.Ub(5,"div",3),b.Dc(6),b.gc(7,"translate"),b.Tb(),b.Ub(8,"mat-radio-group",4),b.bc("ngModelChange",function(e){return t.permanentBlur=e}),b.Ub(9,"mat-radio-button",5),b.Dc(10),b.gc(11,"translate"),b.Tb(),b.Ub(12,"mat-radio-button",5),b.Dc(13),b.gc(14,"translate"),b.Tb(),b.Tb(),b.Tb(),b.Ub(15,"app-legal-blur-selector",6),b.bc("blurSelectionChange",function(e){return t.onBlurSelectionChange(e)}),b.gc(16,"async"),b.Tb(),b.Ub(17,"app-legal-blur-form",7),b.bc("isSubmittedChange",function(e){return t.onSubmittedChange(e)})("isRequestInProgressChange",function(e){return t.onRequestInProgressChange(e)}),b.gc(18,"async"),b.Tb(),b.Bc(19,Pe,2,1,"div",8),b.Tb()),2&e){let e=null;b.Cb(2),b.Fc(" ",b.hc(3,14,"_report_for_blur")," "),b.Cb(4),b.Fc(" ",b.hc(7,16,"_click_to_select_blur")," "),b.Cb(2),b.lc("ngModel",t.permanentBlur),b.Cb(1),b.lc("value",!1),b.Cb(1),b.Fc(" ",b.hc(11,18,"_plain_blur")," "),b.Cb(2),b.lc("value",!0),b.Cb(1),b.Fc(" ",b.hc(14,20,"_permanent_blur")," "),b.Cb(2),b.lc("image",b.hc(16,22,t.currentImage$))("isSubmitted",t.isSubmitted),b.Cb(2),b.lc("googleRecaptchaApiKey",t.googleRecaptchaApiKey)("imageId",null==(e=b.hc(18,24,t.currentImage$))?null:e.id)("permanentBlur",t.permanentBlur)("blurPosition",t.blurPosition),b.Cb(2),b.lc("ngIf",t.isRequestInProgress)}},directives:[c.b,l.l,l.o,c.a,H,xe,i.m,ye.a],pipes:[T.d,i.b],styles:[".legal-blur[_ngcontent-%COMP%]{position:relative}.legal-blur__heading[_ngcontent-%COMP%]{text-transform:uppercase}.legal-blur-switcher[_ngcontent-%COMP%]{display:flex;flex-wrap:wrap;justify-content:space-between}.legal-blur-switcher__header[_ngcontent-%COMP%]{font-size:18px;margin-right:25px;margin-bottom:25px}.legal-blur-switcher[_ngcontent-%COMP%]   mat-radio-group.mat-radio-group[_ngcontent-%COMP%]{display:flex;flex-wrap:wrap}.legal-blur-switcher[_ngcontent-%COMP%]   mat-radio-button.mat-radio-button[_ngcontent-%COMP%]:not(:last-child){margin-right:20px}.legal-blur-selector[_ngcontent-%COMP%]{margin-bottom:20px}.legal-blur-form-loader[_ngcontent-%COMP%]{position:absolute;top:-15px;left:-15px;right:-15px;bottom:-15px;display:flex;justify-content:center;align-items:center;border-radius:18px;z-index:1}.theme-light   [_nghost-%COMP%]   .legal-blur-form-loader[_ngcontent-%COMP%]{background-color:hsla(0,0%,100%,.75)}.theme-dark   [_nghost-%COMP%]   .legal-blur-form-loader[_ngcontent-%COMP%]{background-color:rgba(0,0,0,.75)}"],changeDetection:0}),e})();function ke(e,t){if(1&e&&b.Pb(0,"app-legal-blur",6),2&e){const e=b.fc();b.lc("googleRecaptchaApiKey",e.googleRecaptchaApiKey)}}let Oe=(()=>{let e=class{constructor(e,t){this.activatedRoute=e,this.isDesktopView$=t.isDesktopView$}ngOnInit(){this.handleLegalSettingsResolver()}handleLegalSettingsResolver(){this.activatedRoute.data.pipe(Object(A.b)(this)).subscribe(e=>{this.legalSettings=e.settings,this.googleRecaptchaApiKey=e.googleRecaptchaApiKey})}};return e.\u0275fac=function(t){return new(t||e)(b.Ob(S.a),b.Ob(j.a))},e.\u0275cmp=b.Ib({type:e,selectors:[["app-legal-container"]],decls:11,vars:9,consts:[["routerPopupSize","large",3,"routerPopupTitle"],[1,"legal-container"],[1,"legal-container-column"],[1,"legal-container-row"],[3,"cameraCopyright"],[3,"googleRecaptchaApiKey",4,"ngIf"],[3,"googleRecaptchaApiKey"]],template:function(e,t){1&e&&(b.Ub(0,"app-router-popup",0),b.gc(1,"titlecase"),b.gc(2,"translate"),b.Ub(3,"div",1),b.Ub(4,"div",2),b.Ub(5,"div",3),b.Pb(6,"app-legal-notes",4),b.Tb(),b.Ub(7,"div",3),b.Pb(8,"app-legal-google-analytics"),b.Tb(),b.Tb(),b.Bc(9,ke,1,1,"app-legal-blur",5),b.gc(10,"async"),b.Tb(),b.Tb()),2&e&&(b.lc("routerPopupTitle",b.hc(1,3,b.hc(2,5,"_legal"))),b.Cb(6),b.lc("cameraCopyright",t.legalSettings.legal),b.Cb(3),b.lc("ngIf",b.hc(10,7,t.isDesktopView$)))},directives:[F.a,z,V,i.m,we],pipes:[i.u,T.d,i.b],styles:["[_nghost-%COMP%]{display:block}.legal-container[_ngcontent-%COMP%]{padding:20px}@media screen and (min-width:1024px){.legal-container-column[_ngcontent-%COMP%]{display:flex}}.legal-container-row[_ngcontent-%COMP%]{padding-bottom:30px;margin-bottom:30px}.legal-container-row[_ngcontent-%COMP%]:not(:last-child){border-bottom:1px solid}.theme-light   [_nghost-%COMP%]   .legal-container-row[_ngcontent-%COMP%]{border-color:rgba(0,0,0,.2)}.theme-dark   [_nghost-%COMP%]   .legal-container-row[_ngcontent-%COMP%]{border-color:hsla(0,0%,100%,.2)}@media screen and (min-width:1024px){.legal-container-row[_ngcontent-%COMP%]{width:50%}.legal-container-row[_ngcontent-%COMP%]:last-child{padding-left:60px;border-bottom:1px solid}}@media screen and (max-width:1024px){.legal-container[_ngcontent-%COMP%]{padding:0}.legal-container-row[_ngcontent-%COMP%]{padding:30px 20px;margin-bottom:0}}"],changeDetection:0}),e=Object(E.a)([Object(A.a)()],e),e})(),Me=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=b.Mb({type:e}),e.\u0275inj=b.Lb({providers:[{provide:a.b,useClass:I.a},ne],imports:[[i.c,l.h,l.q,S.f.forChild([{path:"",component:Oe}]),T.c,U.a,q.a,R,o.f,s.c,r.b,D.a,c.c,B.a]]}),e})()}}]);