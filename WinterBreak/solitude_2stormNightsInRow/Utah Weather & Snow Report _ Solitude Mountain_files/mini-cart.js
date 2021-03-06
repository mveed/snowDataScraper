define(function(require){"use strict";var $=require("jquery"),headerStateManager=require("header-component-manager"),openCloseAnimations,helpers=require("helpers"),mustache=require("mustache"),miniCartTemplate=require("text!/public/Shared/templates/cart/mini-cart.html"),self={},dom,headerComponentModel,scrollHelper,openedClass="opened",timeOut,hideAfter=15e3;init();return self;function init(){cacheDom();getTempCount();setMobileViewport();attachHandlers();scrollHelper=new(require("header-dropdown-scroll-helper"))($("body"),dom.miniCartContainer,dom.miniCartScrollContainerInner);headerComponentModel=new(require("header-component-model"))(dom.miniCartContainer,hide,function(){return dom.component.hasClass("opened")});headerStateManager.register(headerComponentModel);openCloseAnimations=new(require("header-animation"))(dom.miniCartContainer);updateIfFullMinicart()}function updateIfFullMinicart(){if(dom.toggle!=null&&dom.toggle.length>0&&dom.icon.is("button")){update(false,false)}}function updateTempCount(number){try{localStorage.setItem("minicart.count",number)}catch(e){log.error("Error updating the minicart count to local storage",e)}}function getTempCount(){try{var result=localStorage.getItem("minicart.count");if(result==null){result=0}if(result===0||result==="0"){dom.miniCartCount.addClass("empty")}dom.miniCartCount.text(result)}catch(e){log.error("Error setting the minicart count from local storage",e)}}function cacheDom(){dom={};dom.document=$(document);dom.component=$(".mini-cart");dom.toggle=dom.component.find(".mini-cart-toggle");dom.icon=dom.component.find(".mini-cart-toggle-icon");dom.miniCartContainer=dom.component.find(".mini-cart-container");dom.miniCartScrollContainer=dom.miniCartContainer.find(".mini-cart-container-scroller");dom.miniCartScrollContainerInner=dom.miniCartContainer.find(".mini-cart-container-scroller-inner");dom.modelData=dom.component.find("var.results.hidden");dom.dueNow=dom.miniCartScrollContainer.find(".due-now");dom.crossSells=dom.miniCartScrollContainer.find(".cross-sells");dom.miniCartCount=dom.component.find(".mini-cart-toggle-icon-number")}function setMobileViewport(){var vh=window.innerHeight*.01;document.documentElement.style.setProperty("--vh",vh+"px")}function attachHandlers(){dom.toggle.on("click",toggleOpenState);dom.document.unbind("minicart.open");dom.document.on("minicart.open",function(){var model=helpers.parsePageDataJSON(dom.modelData);if(model.redirectToCart){window.location=model.miniCartCheckoutLink.url}else{update(true,false)}});dom.document.on("minicart.updateCount",function(){update(false,false)});dom.miniCartScrollContainer.on("click",".trash i",removeFromCart);dom.miniCartScrollContainer.on("click",".order-summary-toggle",toggleMobileView);dom.miniCartScrollContainer.on("click",".try-again",function(){window.location.reload(true)});window.addEventListener("resize",helpers.debounce(setMobileViewport,100,true))}function toggleMobileView(){$(".cart-items").toggleClass("d-mobile-none");$(".mini-cart-container-scroller-inner").addClass("not-scrollable");$(".mini-cart-container-scroller-inner").toggleClass("not-scrollable scrollable");$(".mini-cart-container-scroller-inner .mobile-order-summary").toggleClass("d-none");$(".bottom-docked .mobile-order-summary").toggleClass("d-none");dom.component.find(".due-now").toggleClass("d-none");dom.component.find(".cross-sells").toggleClass("d-none")}function update(openMiniCart,showProductView){var miniUrl="/api/Cart/GetCart";var params={getUpsells:false};$.ajax({data:params,dataType:"json",url:miniUrl,cache:false,success:function(data){if(data.count===0){dom.miniCartCount.addClass("empty")}else{dom.miniCartCount.removeClass("empty")}dom.miniCartCount.text(data.count);dom.modelData.text(JSON.stringify(data));if(openMiniCart){if(showProductView===true){showCart(true)}else{showCart(false)}if(timeOut){clearTimeout(timeOut);timeOut=null}timeOut=setTimeout(function(){hide(true)},hideAfter)}else{bindTemplate()}updateTempCount(data.count)},error:function(xhr,ajaxOptions,thrownError){console.log(xhr.status);console.log(thrownError)}})}function removeFromCart(){var itineraryItemId=$(this).data("itinerary-item-id");var url="/api/InntopiaCart/RemoveFromCart";$.ajax({dataType:"json",url:url,type:"POST",data:{itineraryItemId:itineraryItemId},success:function(output){if(output.Success){var removedItem=output.Data;trackRemoveProductToCart(removedItem);update(true,true);$(document).trigger({type:"cart.update"});$(document).trigger({type:"available.count"})}else{console.log("Something went wrong")}},error:function(xhr,ajaxOptions,thrownError){console.log(xhr.status);console.log(thrownError)}});return false}function toggleOpenState(e){e.stopPropagation();var $target=$(e.target);if($target.closest(".mini-cart-container").length){return}if(dom.component.find(".static-link").length){return}if(dom.component.hasClass("opened")){hide(true)}else{showCart(false);var model=helpers.parsePageDataJSON(dom.modelData);var dataLayer={event:"cartView",source:"sitecore",ecommerce:{currencyCode:"USD",cartView:{products:[]}}};for(var i=0;i<model.cartItems.length;i++){var cartItem=model.cartItems[i];var arrivalDate=new Date(cartItem.arrivalDate);var departureDate=new Date(cartItem.departureDate);var product={name:cartItem.productName,id:cartItem.analyticsId,price:cartItem.price.toString(),brand:cartItem.supplierName,category:"lodging",quantity:1,location:cartItem.locationName,adultCount:cartItem.adultCount,childCount:cartItem.childCount,arrivalDate:helpers.dateToAnalyticsStringFormat(arrivalDate),departureDate:helpers.dateToAnalyticsStringFormat(departureDate),totalNights:cartItem.totalNights,itineraryId:cartItem.itineraryId.toString(),packageId:cartItem.packageId,packageName:cartItem.packageName};dataLayer.ecommerce.cartView.products.push(product)}window.dataLayer=window.dataLayer||[];window.dataLayer.push(dataLayer)}}function showCart(showProductView){bindTemplate();if(showProductView){toggleMobileView()}if(!dom.component.hasClass(openedClass)){dom.component.addClass(openedClass);scrollHelper.dropdownOpened();headerStateManager.closeOtherComponents(headerComponentModel.id,false);openCloseAnimations.open()}dom.document.on("click.mini-cart",function(e){if(!dom.component.hasClass(openedClass)){return}if(!dom.miniCartContainer.is(e.target)&&dom.miniCartContainer.has(e.target).length===0){if($(e.target).hasClass("cc-dismiss")){return}hide(true)}})}function hide(updateHeaderState){dom.component.removeClass(openedClass);openCloseAnimations.close(updateHeaderState);scrollHelper.dropdownClosed()}function bindTemplate(){var model=helpers.parsePageDataJSON(dom.modelData);var resultsHtml=mustache.render(miniCartTemplate,model);dom.miniCartScrollContainer.html(resultsHtml)}function trackRemoveProductToCart(cartItem){var arrivalDate=new Date(cartItem.ArrivalDate);var departureDate=new Date(cartItem.DepartureDate);var dataLayer={event:"removeFromCart",source:"sitecore",ecommerce:{currencyCode:"USD",remove:{products:[{name:cartItem.ProductName,id:cartItem.AnalyticsId,price:cartItem.Price.toString(),brand:cartItem.SupplierName,category:"lodging",quantity:1,location:cartItem.LocationName,adultCount:cartItem.AdultCount,childCount:cartItem.ChildCount,arrivalDate:helpers.dateToAnalyticsStringFormat(arrivalDate),departureDate:helpers.dateToAnalyticsStringFormat(departureDate),totalNights:cartItem.TotalNights,itineraryId:cartItem.ItineraryId.toString(),packageId:cartItem.PackageId,packageName:cartItem.PackageName}]}}};window.dataLayer=window.dataLayer||[];window.dataLayer.push(dataLayer)}});