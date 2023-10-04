var movieWidth;
var movieHeight;
var scalePercentagew;
var scalePercentageh;
var lcap;
var width
var height

var isResponsiveProject = false;
var mainCPNamespace;
var evtHandle;

//
var AutoPlaySelected,AutoPlayDurationSet,AspectRatio,Transition1Selected,Transition2Selected,Transition0Selected,TransitionSpeed,bgSelected,bgColor
var totalAssets;
var resourceArray;
var selectedItemNum;

var ThumbsAspectRatio43Width = "73px"
var ThumbsAspectRatio43Height = "55px"
var ThumbsAspectRatio169Width = "98px"
var ThumbsAspectRatio169Height = "55px"

var gutterSpace = 5;
var assetBaseWidth = 98

var AspectRatio43Width = 466.65
var AspectRatio43Height = 350
	
var AspectRatio169Width = 622
var AspectRatio169Height = 350

var AspectRatioWidth
var AspectRatioHeight

var transitionEffect = "none";

var scaleDiffw;
var scaleDiffh;
var carouselCanvas, carouselPlayPause 
var images

var AutoTimer;
var AssetTimerCounter = 0;
var exportRoot,stage
var exportRootPlayPause, stagePlayPause

var currentAssetType;

resourceUse = {
	onLoad: function() {

		if (!this.captivate) return;
		lcap = this.captivate;

		handle = this.captivate.CPMovieHandle;
		//if (handle.isWidgetVisible() == true) {

			var lInteractiveWidgetHandle = this.captivate.CPMovieHandle.getInteractiveWidgetHandle();
			if (lInteractiveWidgetHandle) {
				if (lInteractiveWidgetHandle.shouldDisable()) this.disable();
			}
			
			this.movieProps = this.captivate.CPMovieHandle.getMovieProps();
			if (!this.movieProps) return;
			m_movieProps = this.movieProps;
			this.varHandle = this.movieProps.variablesHandle;
			m_VariableHandle = this.varHandle;
			//this.eventDisp = this.movieProps.eventDispatcher;
			evtHandle = this.movieProps.eventDispatcher;
			mainCPNamespace = this.movieProps.getCpHandle();
			isResponsiveProject = mainCPNamespace.responsive;
			this.xmlStr = this.captivate.CPMovieHandle.widgetParams();
			var size = this.OpenAjax.getSize();
			width = size.width;
			height = size.height;
			this.externalImage = '';
			this.description = '';
			this.myVar = '';
			this.myVar1 = '';


			movieWidth = parseInt(size.width.split("px")[0]);
			movieHeight = parseInt(size.height.split("px")[0]);
						
			//Captivate Event listener
			evtHandle.addEventListener(mainCPNamespace.WINDOWRESIZECOMPLETEDEVENT,updateSizeNPositionOnResizeComplete, false );
			evtHandle.addEventListener(mainCPNamespace.ORIENTATIONCHANGECOMPLETEDEVENT,updateSizeNPositionOnResizeComplete, false );

			this.updateData();
			this.doUpdate();
		//}
	},
	updateData: function() {
		var allWidgets = window.parent.document.getElementsByClassName("cp-widget");
		var myFrameName = window.name;
		var myWidgetiFrame = window.parent.document.getElementById(window.name);
		if (myWidgetiFrame) {
			myWidgetiFrame.style.height = movieHeight + "px";
			myWidgetiFrame.style.width = movieWidth + "px";
		}
		var id = 0;
		var result = jQuery.parseXML(this.xmlStr);
		var resultDoc = jQuery(result);
		var strProp = resultDoc.find('string').text();
		
		//BREAKING UP THE XML FROM CAPTIVATE
//VARIABLE
		//Game Variable
		var varAutoPlaySelected = resultDoc.find('#AutoPlaySelected');
        if (varAutoPlaySelected){
            if (varAutoPlaySelected.find('string')){
                AutoPlaySelected = varAutoPlaySelected.find('string').text();
            }
        }
		
		var varAutoPlayDurationSet = resultDoc.find('#AutoPlayDurationSet');
        if (varAutoPlayDurationSet){
            if (varAutoPlayDurationSet.find('number')){
                AutoPlayDurationSet = parseInt(varAutoPlayDurationSet.find('number').text())-1;
            }
        }
		
		var varAspectRatio = resultDoc.find('#AspectRatio');
        if (varAspectRatio){
            if (varAspectRatio.find('string')){
                AspectRatio = varAspectRatio.find('string').text();
            }
        }
		//AspectRatio = "4:3"
		
		var varTransition1Selected = resultDoc.find('#Transition1Selected');
        if (varTransition1Selected){
            if (varTransition1Selected.find('string')){
                Transition1Selected = varTransition1Selected.find('string').text();
            }
        }
		
		var varTransition2Selected = resultDoc.find('#Transition2Selected');
        if (varTransition2Selected){
            if (varTransition2Selected.find('string')){
                Transition2Selected = varTransition2Selected.find('string').text();
            }
        }
		
		var varTransition0Selected = resultDoc.find('#Transition0Selected');
        if (varTransition0Selected){
            if (varTransition0Selected.find('string')){
                Transition0Selected = varTransition0Selected.find('string').text();
            }
        }
		var varTransitionSpeed = resultDoc.find('#TransitionSpeed');
        if (varTransitionSpeed){
            if (varTransitionSpeed.find('number')){
                TransitionSpeed = parseInt(varTransitionSpeed.find('number').text());
            }
        }
		
		var varbgSelected = resultDoc.find('#bgSelected');
        if (varbgSelected){
            if (varbgSelected.find('string')){
                bgSelected = varbgSelected.find('string').text();
            }
        }
		
		var varbgColor = resultDoc.find('#bgColor');
        if (varbgColor){
            if (varbgColor.find('number')){
                bgColor = getolor(parseInt(varbgColor.find('number').text()));
            }
        }

		//Cards
		loadCounter = 0;
		resourceArray = new Array();
		cardArray = new Array();
		cardArray.push(0);

		//Get All Questions Information
		var cardObjectArrayList = resultDoc.find('#cardObjectArray');
		
		//cardObjectArrayList = new Array();
		if (cardObjectArrayList){
			totalAssets = cardObjectArrayList.children().children().length;
			if(totalAssets>1){
				for (i=1; i<totalAssets; i++) {
					var assetObj = new Object();
					//console.log(cardObjectArrayList.children().children()[i])
					assetObj.name = $($(cardObjectArrayList.children().children()[i]).find('#name')[0]).find('string').text()
					assetObj.num = $($(cardObjectArrayList.children().children()[i]).find('#num')[0]).find('number').text()
					assetObj.type = $($(cardObjectArrayList.children().children()[i]).find('#type')[0]).find('string').text()
					if(assetObj.type == "image"){
						var resourceId = $($(cardObjectArrayList.children().children()[i]).find('#resourceId')[0]).find('number').text()
						var imageLoc = this.movieProps.ExternalResourceLoader.getResourcePath(resourceId);
						assetObj.resourceId = imageLoc;
					}else if(assetObj.type == "youtube"){
						var resourceIdYoutube = $($(cardObjectArrayList.children().children()[i]).find('#resourceId')[0]).find('string').text()
						assetObj.resourceId = resourceIdYoutube;
					}else if(assetObj.type == "vimeo"){
						var resourceIdVimeo = $($(cardObjectArrayList.children().children()[i]).find('#resourceId')[0]).find('number').text()
						assetObj.resourceId = resourceIdVimeo;
					}
					resourceArray.push(assetObj);
				}
				$("#carousel").show();
			}else{
				//Prepare dummy question
				$("#carousel").hide();
			}
		}
		carouselInit();
	},
	doUpdate: function() {
		resizeInteraction(width, height);
	},

};
carousel_use = function() {

	//Check if the browser is Safari on Mac only to toggle the YES NO Button Positions
	//SystemIsMac = ( navigator.platform.match(/(iPad|iPhone|Mac)/g) ? true : false );
	return resourceUse;
}

function resizeInteraction(thewidth, theheight) {
	var scaleX = 0;
	var scaleY = 0;
    thewidth = String(thewidth).replace("px", "");
    theheight = String(theheight).replace("px", "");
	scaleX = thewidth / (780);
	scaleY = theheight / (478);

    $('#carousel').css({'-webkit-transform': "scaleX(" + scaleX+ ") scaleY(" + scaleY + ")"});
	$('#carousel').css({'-moz-transform': "scaleX(" + scaleX+ ") scaleY(" + scaleY + ")"});
	$('#carousel').css({'-o-transform': "scaleX(" + scaleX+ ") scaleY(" + scaleY + ")"});
	$('#carousel').css({'-ms-transform': "scaleX(" + scaleX+ ") scaleY(" + scaleY + ")"});
	
	$('#carouselPlayPause').css({'-webkit-transform': "scaleX(" + scaleX+ ") scaleY(" + scaleY + ")"});
	$('#carouselPlayPause').css({'-moz-transform': "scaleX(" + scaleX+ ") scaleY(" + scaleY + ")"});
	$('#carouselPlayPause').css({'-o-transform': "scaleX(" + scaleX+ ") scaleY(" + scaleY + ")"});
	$('#carouselPlayPause').css({'-ms-transform': "scaleX(" + scaleX+ ") scaleY(" + scaleY + ")"});
	
    $('#carousel').css('-webkit-transform-origin', '0 0');
	$('#carousel').css('-moz-transform-origin', '0 0');
    $('#carousel').css('-o-transform-origin', '0 0');
    $('#carousel').css('-ms-transform-origin', '0 0');
	$('#carousel').css('-webkit-tap-highlight-color', 'rgba(0,0,0,0)');
	
	$('#carouselPlayPause').css('-webkit-transform-origin', '0 0');
	$('#carouselPlayPause').css('-moz-transform-origin', '0 0');
    $('#carouselPlayPause').css('-o-transform-origin', '0 0');
    $('#carouselPlayPause').css('-ms-transform-origin', '0 0');
	$('#carouselPlayPause').css('-webkit-tap-highlight-color', 'rgba(0,0,0,0)');
	
	$('#carouselPlayPause').css('left', 668*scaleX);
	$('#carouselPlayPause').css('top', 27*scaleY);
}

function carouselInit() {
	
	carouselCanvas = document.getElementById("carouselCanvas");
	carouselPlayPause = document.getElementById("carouselPlayPause");

	exportRoot = new lib.carousel();
	
	exportRoot.runTime_mc.carouselBg.visible = false;
	if(bgSelected == "true"){
		exportRoot.runTime_mc.carouselBg.visible = true;
	}

	stage = new createjs.Stage(carouselCanvas);
	stage.addChild(exportRoot);
	stage.update();
	stage.enableMouseOver();
	
	exportRootPlayPause = new lib.playpause(); 
	
	stagePlayPause = new createjs.Stage(carouselPlayPause);
	exportRootPlayPause.playPauseMc.gotoAndStop(1);
	stagePlayPause.addChild(exportRootPlayPause);
	stagePlayPause.update();
	stagePlayPause.enableMouseOver();
	
	exportRoot.runTime_mc.left_btn.addEventListener('click',showPrevImage);
	exportRoot.runTime_mc.right_btn.addEventListener('click',showNextImage);
	
	exportRoot.addEventListener('mouseout',clearBtnStates);
	
	exportRoot.runTime_mc.assetScroller.slider_mc.addEventListener('pressmove',sliderStartFunct);
	exportRoot.runTime_mc.assetScroller.slider_mc.addEventListener('pressup',sliderStopFunct);
	
	exportRoot.runTime_mc.assetScroller.track_mc.addEventListener('mousedown',trackClickFunct);
	
	exportRootPlayPause.playPauseMc.btn.addEventListener('click',handlePlayPause);

	createjs.Ticker.setFPS(lib.properties.fps);
	createjs.Ticker.addEventListener("tick", stageUpdate);
	//createjs.Ticker.addEventListener("tick", stagePlayPause);
	
	var carouselContent = document.getElementById("carouselContent");
	var thumbsElem = document.getElementById("carouselThumbs");
	for(i=0;i<resourceArray.length;i++){
		thumbsElem.appendChild(createAssets(resourceArray[i]));
	}
	
	//set all properties from captivate 
	if(Transition0Selected == "true"){
		transitionEffect = "none"
	}else{
		AutoPlayDurationSet = AutoPlayDurationSet+2;// 2 is added to offset the time for transition
		if(Transition1Selected == "true" && Transition2Selected == "true"){
			transitionEffect = "sideFade"
		}else if(Transition1Selected == "true"){
			transitionEffect = "slide"
		}else if(Transition2Selected == "true"){
			transitionEffect = "fade"
		}
	}

	if(transitionEffect == "none"){
		$('#carouselContent').desoSlide({
			thumbs: $('#carouselThumbs li > a'),
			overlay:'none',
			auto:{
				start:false
			},
			controls: {
				show: false,
				keys: false
			},
			effect: 'none'
		});

	}else{
		$('#carouselContent').desoSlide({
			thumbs: $('#carouselThumbs li > a'),
			overlay:'none',
			auto:{
				start:false
			},
			controls: {
				show: false,
				keys: false
			},
			effect: {
				provider: 'animate',
				name: transitionEffect
			},
		});
	}
	
	if(AspectRatio == "4:3"){
		assetBaseWidth = 73;
		AspectRatioWidth = AspectRatio43Width
		AspectRatioHeight = AspectRatio43Height
		$('.desoslide-wrapper iframe').css('width', AspectRatio43Width);
		$('.desoslide-wrapper iframe').css('height', AspectRatio43Height);
		
		$('#carouselContent').css('width', 466.65);
		$('#carouselContent').css('height', 350);
		$('#carouselContent').css('left', 158);
		$('#carouselContent').css('top', 16.5);
	}else{
		assetBaseWidth = 98;
		AspectRatioWidth = AspectRatio169Width
		AspectRatioHeight = AspectRatio169Height
		$('.desoslide-wrapper iframe').css('width', AspectRatio169Width);
		$('.desoslide-wrapper iframe').css('height', AspectRatio169Height);
		
		$('#carouselContent').css('width', 622);
		$('#carouselContent').css('height', 350);
		$('#carouselContent').css('left', 80);
		$('#carouselContent').css('top', 16.5);
	}
	


	AutoPlay = false;
	if(AutoPlaySelected == "true"){
		exportRootPlayPause.playPauseMc.visible = true;
		AutoPlay =  true;
	}else{
		exportRootPlayPause.playPauseMc.visible = false;
	}

	//Events
	$('#carouselContent').on('prev.desoslide', function(evt) {
		// on previous slide
		$('#carouselContent').show();
		selectedItemNum--;
		if(selectedItemNum<=0){
			selectedItemNum = resourceArray.length;
		}
		$('.carousel-thumbs-img-selected').removeClass('carousel-thumbs-img-selected'); // removes the previous selected class
	    $("#"+selectedItemNum).addClass('carousel-thumbs-img-selected'); // adds the class to the clicked image
		
		updateThumbsScroll()

	});
	
	$('#carouselContent').on('next.desoslide', function(evt) {
		// on previous slide
		$('#carouselContent').show();
		selectedItemNum++;
		if(selectedItemNum>resourceArray.length){
			selectedItemNum = 1;
		}
		$('.carousel-thumbs-img-selected').removeClass('carousel-thumbs-img-selected'); // removes the previous selected class
	    $("#"+selectedItemNum).addClass('carousel-thumbs-img-selected'); // adds the class to the clicked image
		
		updateThumbsScroll();
		
	});
	
	$('#carouselContent').hide();
	
	var thumbsDiv = document.getElementById("carouselThumbs");
	//console.log(thumbsDiv.scrollWidth," thumbsDiv.scrollWidth")
	if(thumbsDiv.scrollWidth<=770){
		exportRoot.runTime_mc.assetScroller.visible = false;
		var totWidth = (assetBaseWidth*(resourceArray.length))+(gutterSpace*(resourceArray.length))
		var moveLeft = ((765/2)-(totWidth/2));
		$('#carouselThumbs').css('left', moveLeft); 
	}
}

function stageUpdate(){
	stage.update();
	stagePlayPause.update();
}

function showPrevImage(){
	clearTimeout(AutoTimer);
	$('#carouselContent').desoSlide('goPrev');
}

function showNextImage(){
	clearTimeout(AutoTimer);
	$('#carouselContent').desoSlide('goNext');
}

function clearBtnStates(){
	exportRoot.runTime_mc.left_btn.gotoAndStop(0);
	exportRoot.runTime_mc.right_btn.gotoAndStop(0);
}

function handlePlayPause(){
	if(exportRootPlayPause.playPauseMc.currentFrame == 0){
		exportRootPlayPause.playPauseMc.gotoAndStop(1);
		if(Transition0Selected == "true"){
			AutoTimer = setTimeout(startAutoTimer, (AutoPlayDurationSet*998));
		}else{
			AutoTimer = setTimeout(startAutoTimer, ((AutoPlayDurationSet-2)*998));
		}
	}else{
		exportRootPlayPause.playPauseMc.gotoAndStop(0);
		clearTimeout(AutoTimer);
	}
}
function startAutoTimer() {
    $('#carouselContent').desoSlide('goNext');
}

function checkAutoPlayTimer(){
	if(exportRootPlayPause.playPauseMc.currentFrame == 1){
		if(AutoPlaySelected == "true"){
			clearTimeout(AutoTimer);
			AutoTimer = setTimeout(startAutoTimer, (AutoPlayDurationSet*998));
		}else{
			clearTimeout(AutoTimer);
		}
		
		if(currentAssetType == "video"){
			exportRootPlayPause.playPauseMc.gotoAndStop(0);
			clearTimeout(AutoTimer);
		}
	}
}

function createAssets(assetObj){
	var newLi = document.createElement('li');
	newLi.style.width = ThumbsAspectRatio169Width
	newLi.style.height = ThumbsAspectRatio169Height
	if(assetObj.type == "image"){
		var liContentA = document.createElement('a');
		liContentA.href = assetObj.resourceId;
		var imgdiv = document.createElement('img');
		imgdiv.src = assetObj.resourceId;
		imgdiv.alt = assetObj.name;
		imgdiv.id = assetObj.num;
		imgdiv.name = "image"
		if(AspectRatio == "4:3"){
						
			imgdiv.style.width = ThumbsAspectRatio43Width
			imgdiv.style.height = ThumbsAspectRatio43Height
		}else{
			imgdiv.style.width = ThumbsAspectRatio169Width
			imgdiv.style.height = ThumbsAspectRatio169Height
		}
		if(assetObj.num == 1){
			selectedItemNum = 1;
			$(imgdiv).addClass("img-responsive carousel-thumbs-img carousel-thumbs-img-selected");
		}else{
			$(imgdiv).addClass("img-responsive carousel-thumbs-img");
		}
		$(imgdiv).click(function(){
		   selectedItemNum = parseInt(this.id);
		   $('.carousel-thumbs-img-selected').removeClass('carousel-thumbs-img-selected'); // removes the previous selected class
		   $(this).addClass('carousel-thumbs-img-selected'); // adds the class to the clicked image
		   updateThumbsScroll();
		   clearTimeout(AutoTimer);
		});
		liContentA.appendChild(imgdiv)
		newLi.appendChild(liContentA);
	}else if(assetObj.type == "youtube"){
		var liContentA = document.createElement('a');
		liContentA.href = "https://www.youtube.com/embed/"+assetObj.resourceId+"?html5=1&showinfo=0"
		
		var liContentiframe = document.createElement('iframe');
		liContentiframe.id = "youTubePlayer"+assetObj.num;
		if(AspectRatio == "4:3"){
			liContentiframe.style.width = ThumbsAspectRatio43Width
			liContentiframe.style.height = ThumbsAspectRatio43Height
		}else{
			liContentiframe.style.width = ThumbsAspectRatio169Width
			liContentiframe.style.height = ThumbsAspectRatio169Height
		}
		liContentiframe.style.display = "inline";
		liContentiframe.src = "https://www.youtube.com/embed/"+assetObj.resourceId+"?html5=1&showinfo=0"
		liContentiframe.name = assetObj.name;
		//'<iframe width="854" height="510" src="https://www.youtube.com/embed/J9y8fGHrMaM" frameborder="0" allowfullscreen></iframe>'
		if(assetObj.num == 1){
			selectedItemNum = 1;
			$(liContentiframe).addClass("img-responsive carousel-thumbs-img carousel-thumbs-img-selected");
		}else{
			$(liContentiframe).addClass("img-responsive carousel-thumbs-img");
		}
		
		var imgdiv = document.createElement('img');
		imgdiv.id = assetObj.num;
		imgdiv.alt = "";
		imgdiv.name = "video"
		if(AspectRatio == "4:3"){
			imgdiv.style.width = ThumbsAspectRatio43Width
			imgdiv.style.height = ThumbsAspectRatio43Height
		}else{
			imgdiv.style.width = ThumbsAspectRatio169Width
			imgdiv.style.height = ThumbsAspectRatio169Height
		}
		imgdiv.style.position = "absolute";
		if(assetObj.num == 1){
			selectedItemNum = 1;
			$(imgdiv).addClass("img-responsive carousel-thumbs-img carousel-thumbs-img-selected");
		}else{
			$(imgdiv).addClass("img-responsive carousel-thumbs-img");
		}
		$(imgdiv).click(function(){
		   selectedItemNum = parseInt(this.id);
		   $('.carousel-thumbs-img-selected').removeClass('carousel-thumbs-img-selected'); // removes the previous selected class
		   $(this).addClass('carousel-thumbs-img-selected'); // adds the class to the clicked image
		   updateThumbsScroll();
		});
		
		liContentA.appendChild(imgdiv)
		liContentA.appendChild(liContentiframe)
		newLi.appendChild(liContentA);
	}
	return newLi;
}

function updateThumbsScroll(){
	var objDiv = document.getElementById("carouselThumbs");
	if(objDiv.scrollWidth>725){
		var scrollPercentage = (((98*selectedItemNum)+(gutterSpace*selectedItemNum)))/objDiv.scrollWidth; 
		var movetopercentage = (scrollPercentage*100);
		if(selectedItemNum == 1){
			movetopercentage = 0
		}else if(selectedItemNum == resourceArray.length){
			movetopercentage =100
		}
		updateThumbsScrollFromSlider(movetopercentage)
		
		var getDiffVal = (movetopercentage/100)*725;
		
		exportRoot.runTime_mc.assetScroller.slider_mc.x = getDiffVal;
		if(exportRoot.runTime_mc.assetScroller.slider_mc.x<0){
			exportRoot.runTime_mc.assetScroller.slider_mc.x = 0
		}
		
		if(exportRoot.runTime_mc.assetScroller.slider_mc.x>725){
			exportRoot.runTime_mc.assetScroller.slider_mc.x = 725
		}
	}
}

function updateThumbsScrollFromSlider(moverPerc){
	var objDiv = document.getElementById("carouselThumbs");
	var movetopercentage = ((objDiv.scrollWidth-725)/100)*moverPerc;
	objDiv.scrollLeft = movetopercentage
}

function trackClickFunct(evt){
	carouselCanvas.style.cursor = "pointer"
	exportRoot.runTime_mc.assetScroller.slider_mc.x = evt.stageX-30;
	if(exportRoot.runTime_mc.assetScroller.slider_mc.x<0){
		exportRoot.runTime_mc.assetScroller.slider_mc.x = 0
	}
	
	if(exportRoot.runTime_mc.assetScroller.slider_mc.x>725){
		exportRoot.runTime_mc.assetScroller.slider_mc.x = 725
	}
	
	var getDiffVal = exportRoot.runTime_mc.assetScroller.slider_mc.x;
	var getPerc = (getDiffVal/725)*100;
	updateThumbsScrollFromSlider(getPerc)
}

function sliderStartFunct(evt){
	carouselCanvas.style.cursor = "pointer"
	evt.target.parent.x = evt.stageX-30;
	if(evt.target.parent.x<0){
		evt.target.parent.x = 0
	}
	
	if(evt.target.parent.x>725){
		evt.target.parent.x = 725
	}
	
	var getDiffVal = evt.target.parent.x;
	var getPerc = (getDiffVal/725)*100;
	updateThumbsScrollFromSlider(getPerc)
}

function sliderStopFunct(evt){
	carouselCanvas.style.cursor = "default"
	if(evt.target.parent.x<0){
		evt.target.parent.x = 0
	}
	
	if(evt.target.parent.x>725){
		evt.target.parent.x = 725
	}
	var getDiffVal = evt.target.parent.x;
	var getPerc = (getDiffVal/725)*100;
	updateThumbsScrollFromSlider(getPerc)
}

function updateSizeNPositionOnResizeComplete(){
	resizeInteraction(width,height);
}

function getolor(num) {
    num >>>= 0;
    var b = num & 0xFF,
        g = (num & 0xFF00) >>> 8,
        r = (num & 0xFF0000) >>> 16,
        a = ( (num & 0xFF000000) >>> 24 ) / 255 ;
    return "rgba(" + [r, g, b, 1].join(",") + ")";
}