define(function(require){"use strict";var $=require("jquery"),headerStateManager=require("header-component-manager"),openCloseAnimations,self={},dom,headerComponentModel,helpers=require("helpers"),scrollHelper,alertsOpenedClass="opened";var alertStatus={null:null,pendingRead:"pendingRead",read:"read"};var alertDomHelper={hasHighAlert:function(){return!!dom.alertsContainer.find(".alert.alert-high").length},hasOtherAlerts:function(){return!!dom.alertsContainer.find(".alert.alert-medium, .alert.alert-low").length},otherAlertsShown:function(){return dom.alertsContainer.hasClass("show-more-show")}};var alertCookieManager=function(){var alertsCookieName,modelHighHash,modelOthersHash;function init(){setCookieVariables()}function setCookieVariables(){alertsCookieName=dom.component.data("alerts-read-cookie-name");modelHighHash=dom.component.data("alerts-read-cookie-high");modelOthersHash=dom.component.data("alerts-read-cookie-others")}function getCookie(){var raw=helpers.getCookieByNameWithRootPath(alertsCookieName);if(!raw){raw=this.setCookie()}var cookieValue=JSON.parse(raw);return cookieValue}function hasHighHashChanged(){var raw=helpers.getCookieByNameWithRootPath(alertsCookieName);if(!raw){raw=this.setCookie()}var cookieValue=JSON.parse(raw);var hasChanged=cookieValue.high.hash!==modelHighHash&&modelHighHash!==0;return hasChanged}function updateHashForHigh(customHash){var hash=customHash===undefined?modelHighHash:customHash;updateCookieHash("high",customHash||hash)}function hasOthersHashChanged(){var raw=helpers.getCookieByNameWithRootPath(alertsCookieName);if(!raw){raw=this.setCookie()}var cookieValue=JSON.parse(raw);var hasChanged=cookieValue.others.hash!==modelOthersHash&&modelOthersHash!==0;return hasChanged}function updateHashForOthers(customHash){var hash=customHash===undefined?modelOthersHash:customHash;updateCookieHash("others",hash)}function setCookie(property,status){var raw=helpers.getCookieByNameWithRootPath(alertsCookieName);var cookie=raw?JSON.parse(raw):{};var cookieType=cookie&&cookie[property];if(!cookieType){cookie.high={status:null,hash:modelHighHash};cookie.others={status:null,hash:modelOthersHash}}else{cookie[property].status=status}var jsonCookie=JSON.stringify(cookie);helpers.setCookieByPath(alertsCookieName,jsonCookie,"/");return jsonCookie}function updateCookieHash(property,newHash){var raw=helpers.getCookieByNameWithRootPath(alertsCookieName);var cookie=JSON.parse(raw);cookie[property].hash=newHash;helpers.setCookieByPath(alertsCookieName,JSON.stringify(cookie),"/")}return{init:init,getCookie:getCookie,setCookie:setCookie,hasHighHashChanged:hasHighHashChanged,hasOthersHashChanged:hasOthersHashChanged,updateHashForHigh:updateHashForHigh,updateHashForOthers:updateHashForOthers}}();var alertState={high:null,others:null,updateHighStateToPending:function(){this.high=alertStatus.pendingRead;dom.component.addClass("unread-high");alertCookieManager.setCookie("high",alertStatus.pendingRead)},updateHighStateToRead:function(){this.high=alertStatus.read;dom.component.removeClass("unread-high");alertCookieManager.setCookie("high",alertStatus.read)},clearOutHighState:function(){this.high=null;alertCookieManager.setCookie("high",null);alertCookieManager.updateHashForHigh(0)},updateOtherStateToPending:function(){this.others=alertStatus.pendingRead;dom.component.addClass("unread-others");alertCookieManager.setCookie("others",alertStatus.pendingRead)},updateOtherStateToRead:function(){this.others=alertStatus.read;dom.component.removeClass("unread-others");alertCookieManager.setCookie("others",alertStatus.read)}};var alertStateManager=function(){function init(){alertCookieManager.init();var cookieValue=alertCookieManager.getCookie();setStateFromCookie(cookieValue);var bothAlertTypesRead=cookieValue.high.status===alertStatus.read&&cookieValue.others.status===alertStatus.read;var highAlertReadNoOthers=cookieValue.high.status===alertStatus.read&&!cookieValue.others.status;var otherAlertsReadNoHighAlert=!cookieValue.high&&cookieValue.others.status===alertStatus.read;var anyAlertReadComboTrue=bothAlertTypesRead||highAlertReadNoOthers||otherAlertsReadNoHighAlert;if(anyAlertReadComboTrue){checkForHashChange();return}checkForHashChange();if(alertDomHelper.hasHighAlert()&&cookieValue.others.status!==alertStatus.pendingRead){alertState.updateHighStateToPending()}if(alertDomHelper.hasOtherAlerts()&&cookieValue.others.status!==alertStatus.read){alertState.updateOtherStateToPending()}}function setStateFromCookie(cookie){if(alertDomHelper.hasHighAlert()){if(cookie.high.status===alertStatus.pendingRead){alertState.updateHighStateToPending()}else{alertState.updateHighStateToRead()}}else{alertState.clearOutHighState()}if(cookie.others.status===alertStatus.pendingRead){alertState.updateOtherStateToPending()}else if(cookie.others.status===alertStatus.read){alertState.updateOtherStateToRead()}}function checkForHashChange(){if(alertCookieManager.hasHighHashChanged()){alertState.updateHighStateToPending();alertCookieManager.updateHashForHigh()}if(alertCookieManager.hasOthersHashChanged()){alertState.updateOtherStateToPending();alertCookieManager.updateHashForOthers()}}return{init:init}}();init();return self;function init(){cacheDom();attachHandlers();alertStateManager.init();scrollHelper=new(require("header-dropdown-scroll-helper"))($("body"),dom.alertsContainer,dom.alertsScrollContainer);headerComponentModel=new(require("header-component-model"))(dom.alertsContainer,hideAlerts,function(){return dom.component.hasClass("opened")});headerStateManager.register(headerComponentModel);openCloseAnimations=new(require("header-animation"))(dom.alertsContainer);if(dom.component.data("alerts-read-open-by-default")==="True"&&alertState.high===alertStatus.pendingRead){showAlerts()}}function cacheDom(){dom={};dom.document=$(document);dom.component=$(".alerts");dom.icon=dom.component.find(".alerts-icon");dom.alertsContainer=dom.component.find(".alerts-container");dom.alertsScrollContainer=dom.component.find(".alerts-container-scroller-inner");dom.showMoreButton=dom.alertsContainer.find(".alerts-container-show-more")}function attachHandlers(){dom.component.on("click",toggleOpenState);dom.showMoreButton.on("click",showOtherAlerts);dom.alertsContainer.find(".alert.alert-high a").on("mousedown",highAlertWithLinkClicked)}function highAlertWithLinkClicked(e){if(e.which===3){return}alertState.updateHighStateToRead()}function toggleOpenState(e){e.stopPropagation();var $target=$(e.target);if($target.closest(".alerts-container").length){return}if(dom.component.hasClass("opened")){hideAlerts(true,true)}else{showAlerts()}}function hideAlerts(updateHeaderState,bellClicked){dom.component.removeClass(alertsOpenedClass);openCloseAnimations.close(updateHeaderState);dom.document.off("click.alerts");scrollHelper.dropdownClosed();if(alertState.others===alertStatus.pendingRead&&alertDomHelper.otherAlertsShown()){alertState.updateOtherStateToRead()}if(bellClicked&&alertState.high===alertStatus.pendingRead){alertState.updateHighStateToRead();return}}function showAlerts(){var autoExpandOtherAlerts=alertState.others===alertStatus.read||!alertState.high&&alertState.others===alertStatus.pendingRead;if(autoExpandOtherAlerts){dom.alertsContainer.addClass("show-more-show");dom.showMoreButton.hide()}dom.component.addClass(alertsOpenedClass);scrollHelper.dropdownOpened();headerStateManager.closeOtherComponents(headerComponentModel.id,false);openCloseAnimations.open();dom.document.on("click.alerts",function(e){if(!dom.component.hasClass(alertsOpenedClass)){return}if(!dom.alertsContainer.is(e.target)&&dom.alertsContainer.has(e.target).length===0){if($(e.target).hasClass("cc-dismiss")){return}hideAlerts(true,false)}})}function showOtherAlerts(){dom.alertsContainer.addClass("show-more-show");alertState.updateHighStateToRead();alertState.updateOtherStateToRead();dom.showMoreButton.hide()}});