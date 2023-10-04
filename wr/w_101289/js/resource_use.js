var movieWidth;
var movieHeight;
var scalePercentagew;
var scalePercentageh;
var lcap;
var finished = "notdone";
var finishedarray;
var finalScore = 0;
window.quizscope = 0;
var width
var height
var no_of_attempts;
var no_of_tries;
var card1Array
var card2Array
var VarFScore,getHintSelected,getHintDuration,getGameLayout;
var getCardShape,getCardBorder,getCardBaseSelected,getCardBaseImageSelected,getCardBaseColor,getCardBaseImage
var m_movieProps
var ranCardNum
var ranCount = 0

var memoryGameHolder,disableCards;

var gameCanvas, gameStage, gameRoot;
var feedbackCanvas, feedbackStage, feedbackRoot;

var idtime,idscore

var gameBgSelected, getBgColor, getScoreTimeColor, gameInstructions;
var getMainGameName, getMainGameNameColor, getGameOverText,getGameOverColor, getTimeUpText, getTimeUpColor, getPlayBtnName, getPlayBtnColor, getAddTextTxt,getAddTextColor, getFinalScoreColor,gameTimeMins,gameTimeScnds;

var gridMatrix = new Array();
gridMatrix = [
[[2,1],[250,175]],
[[2,2],[175,175]],
[[3,2],[175,120]],
[[4,2],[120,85]],
[[5,2],[100,65]],
[[4,3],[100,80]],
[[7,2],[75,48]],
[[4,4],[80,80]],
[[6,3],[85,55]],
[[5,4],[80,60]],
[[6,4],[80,55]],
[[6,4],[80,55]],
[[7,4],[70,50]],
[[7,4],[70,50]],
[[6,5],[65,55]],
[[8,4],[65,40]],
[[6,6],[55,55]],
[[6,6],[55,55]],
[[8,5],[60,40]],
[[8,5],[60,40]]
];

var isResponsiveProject = false;
var mainCPNamespace;
var evtHandle;

resourceUse1 = {
    onLoad: function (){
		
        if (!this.captivate) return;
        lcap = this.captivate;
		
		handle = this.captivate.CPMovieHandle;
		//if(handle.isWidgetVisible() == true){
		
        var lInteractiveWidgetHandle = this.captivate.CPMovieHandle.getInteractiveWidgetHandle();
        if (lInteractiveWidgetHandle){
            if (lInteractiveWidgetHandle.shouldDisable()) this.disable();
        }
		
		try{
			no_of_attempts = this.captivate.CPMovieHandle.getCPQuestionData().maxAttempts
			
			if(no_of_attempts == -1){
				no_of_attempts = 1
			}
			no_of_tries = this.captivate.CPMovieHandle.getCPQuestionData().numTries
		}catch(err){
			no_of_attempts = 0;
			no_of_tries = 0;
		}
		
        this.movieProps = this.captivate.CPMovieHandle.getMovieProps();
        if (!this.movieProps) return;
		m_movieProps = this.movieProps;
        this.varHandle = this.movieProps.variablesHandle;
        m_VariableHandle = this.varHandle;
		
		mainCPNamespace = this.movieProps.getCpHandle();
		isResponsiveProject = mainCPNamespace.responsive;	
		//this.eventDisp = this.movieProps.eventDispatcher;
		evtHandle = this.movieProps.eventDispatcher;
		
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
		
		evtHandle.addEventListener(mainCPNamespace.WINDOWRESIZECOMPLETEDEVENT,updateSizeNPositionOnResizeComplete, false );
		evtHandle.addEventListener(mainCPNamespace.ORIENTATIONCHANGECOMPLETEDEVENT,updateSizeNPositionOnResizeComplete, false );
		
        this.updateData();
        this.doUpdate();
		
			if (parent.cpInQuizScope == true){
				id = setInterval(checkval, 100)
				//checkval();
				window.quizscope = 1
			}else{
			   // if (window.quizscope == 0)
				//return;
				id = setInterval(checkval, 100)
				//checkval();
			}
		//}
    },
    //To be implemented by a QUESTION WIDGET to be part of Captivate's Quizzing framework
    enable: function (){
        var btnElement = document.getElementById('feedbackCanvas');
        btnElement.disabled = false;
    },
    //To be implemented by a QUESTION WIDGET to be part of Captivate's Quizzing framework
    disable: function (){
        var btnElement = document.getElementById('feedbackCanvas');
        btnElement.disabled = 'disabled';

    },
    //Captivate App will not recognize a Question Widget unless this function is implemented and returns true
    getInteractionQuestionState: function (){
        var lResult_Str = finished + ":quiz";
		//Append with score
		lResult_Str =  lResult_Str+":"+finalScore;
		
        //Implements this to return Widget State as String
        return lResult_Str;
    },
    setInteractionQuestionState: function (aVal){
        //Implements this to set Widget State from input String(aVal)
        var lArray=[];
		lArray=aVal.split(",");
		if(lArray[0] != ""){
        	finished = lArray[0];
		}else{
			finished = "notdone"
		}
		valueset = 1;
		if (lArray.length<2)return;
    },
    getCorrectAnswerAsArray: function (){
        //Return correct answer as string
        return ["1"];
    },
    getCurrentAnswerAsString: function (){
        //Return current answer as string
    },
    //Handle Click, if Clicked Outside Widget ( will be called from captivate internally)
    onClickExternal: function (e){
        var lMsg = 'On Click Received in Widget';
        if (e){
            lMsg += "x=" + e.pageX + "y=" + e.pageY;
        }
        if (!this.captivate) return;
        //Call set Failure
        var lInteractiveWidgetHandle = this.captivate.CPMovieHandle.getInteractiveWidgetHandle();
    },
    updateData: function (){
        var allWidgets = window.parent.document.getElementsByClassName("cp-widget");
        var myFrameName = window.name;
        var myWidgetiFrame = window.parent.document.getElementById(window.name);
        if (myWidgetiFrame){
            myWidgetiFrame.style.height = movieHeight + "px";
            myWidgetiFrame.style.width = movieWidth + "px";
        }
        var id = 0;
        var result = jQuery.parseXML(this.xmlStr);
        var resultDoc = jQuery(result);
        var strProp = resultDoc.find('string').text();
		
		//BREAKING UP THE XML FROM CAPTIVATE
		//Get game name
		var gamename = resultDoc.find('#gameName');
        if (gamename){
            if (gamename.find('string')){
                getMainGameName = gamename.find('string').text();
            }
        }
		
		//Font color for title
        var gamenamehex = resultDoc.find('#gameNameColorHex');
        if (gamenamehex){
            if (gamenamehex.find('string')){
                getMainGameNameColor = '#' + gamenamehex.find('string').text();
            }
        }
		
		//Get instructions for the game
        var gamedesc = resultDoc.find('#gameInstructions');
        if (gamedesc){
            if (gamedesc.find('string')){
                gameInstructions = gamedesc.find('string').text();
            }
        }
		
		//Get bg color
		var vargameBgSelected = resultDoc.find('#gameBgSelected');
        if (vargameBgSelected){
            if (vargameBgSelected.find('string')){
                gameBgSelected = vargameBgSelected.find('string').text();
            }
        }
		
        var gamebghex = resultDoc.find('#gameBgColorHex');
        if (gamebghex){
            if (gamebghex.find('string')){
                getBgColor = '#' + gamebghex.find('string').text();
            }
        }
		
		//Get score time color
        var scoretimeColorhex = resultDoc.find('#scoreTimeColorHex');
        if (scoretimeColorhex){
            if (scoretimeColorhex.find('string')){
                getScoreTimeColor = '#' + scoretimeColorhex.find('string').text();
            }
        }
		
		//Get mins
		var vargameTimeMins = resultDoc.find('#gameTimeMins');
        if (vargameTimeMins){
            if (vargameTimeMins.find('string')){
                gameTimeMins = parseInt(vargameTimeMins.find('string').text());
            }
        }
		
		//Get scnds
		var vargameTimeScnds = resultDoc.find('#gameTimeScnds');
        if (vargameTimeScnds){
            if (vargameTimeScnds.find('string')){
                gameTimeScnds = parseInt(vargameTimeScnds.find('string').text());
            }
        }
		
		//Get play btn name
		var getplayBtnText = resultDoc.find('#playBtnText');
        if (getplayBtnText){
            if (getplayBtnText.find('string')){
                getPlayBtnName = getplayBtnText.find('string').text();
            }
        }
		
		//Get play btn color
        var playBtnColorHex = resultDoc.find('#playBtnColorHex');
        if (playBtnColorHex){
            if (playBtnColorHex.find('string')){
                getPlayBtnColor = '#' + playBtnColorHex.find('string').text();
            }
        }
		
		//Get game over name
		var gameOverTxt = resultDoc.find('#gameOverTxt');
        if (gameOverTxt){
            if (gameOverTxt.find('string')){
                getGameOverText = gameOverTxt.find('string').text();
            }
        }
		
		//Get game over color
        var gameOverColorHex = resultDoc.find('#gameOverColorHex');
        if (gameOverColorHex){
            if (gameOverColorHex.find('string')){
                getGameOverColor = '#' + gameOverColorHex.find('string').text();
            }
        }
		
		//Get time up name
		var timeUpTxt = resultDoc.find('#timeUpTxt');
        if (timeUpTxt){
            if (timeUpTxt.find('string')){
                getTimeUpText = timeUpTxt.find('string').text();
            }
        }
		
		//Get time up color
        var timeUpColorHex = resultDoc.find('#timeUpColorHex');
        if (timeUpColorHex){
            if (timeUpColorHex.find('string')){
                getTimeUpColor = '#' + timeUpColorHex.find('string').text();
            }
        }
		
		//Get add text
		var addTxt = resultDoc.find('#addTxt');
        if (addTxt){
            if (addTxt.find('string')){
                getAddTextTxt = addTxt.find('string').text();
            }
        }
		
		//Get time up color
        var addTxtColorHex = resultDoc.find('#addTxtHex');
        if (addTxtColorHex){
            if (addTxtColorHex.find('string')){
                getAddTextColor = '#' + addTxtColorHex.find('string').text();
            }
        }
		
		//Get final score color
        var scoreColorHex = resultDoc.find('#scoreColorHex');
        if (scoreColorHex){
            if (scoreColorHex.find('string')){
                getFinalScoreColor = '#' + scoreColorHex.find('string').text();
            }
        }
		
			
		var varFscr = resultDoc.find('#gameVariable');
        if (varFscr){
            if (varFscr.find('string')){
                VarFScore = varFscr.find('string').text();
            }
        }
		
		var hintSelected = resultDoc.find('#gameHintSelected');
        if (hintSelected){
            if (hintSelected.find('string')){
                getHintSelected = hintSelected.find('string').text();
            }
        }
		
		var hintDuration = resultDoc.find('#gameHintDuration');
        if (hintDuration){
            if (hintDuration.find('string')){
                getHintDuration = hintDuration.find('string').text();
            }
        }
		
		var gameLayout = resultDoc.find('#gameLayout');
        if (gameLayout){
            if (gameLayout.find('string')){
                getGameLayout = gameLayout.find('string').text();
            }
        }
		
		//Section is for setting up cards
		var cardShape = resultDoc.find('#cardShape');
        if (cardShape){
            if (cardShape.find('number')){
                getCardShape = parseInt(cardShape.find('number').text())-1;
            }
        }
		
		var cardBorder = resultDoc.find('#cardBorder');
        if (cardBorder){
            if (cardBorder.find('number')){
                getCardBorder = parseInt(cardBorder.find('number').text())-1;
            }
        }
		
		var cardBaseSelected = resultDoc.find('#cardBaseSelected');
        if (cardBaseSelected){
            if (cardBaseSelected.find('string')){
                getCardBaseSelected = cardBaseSelected.find('string').text();
            }
        }
		var cardBaseImageSelected = resultDoc.find('#cardBaseImageSelected');
        if (cardBaseImageSelected){
            if (cardBaseImageSelected.find('string')){
                getCardBaseImageSelected = cardBaseImageSelected.find('string').text();
            }
        }
		
		var cardBaseColor = resultDoc.find('#cardBaseColorHex');
        if (cardBaseColor){
            if (cardBaseColor.find('number')){
                getCardBaseColor = '#' + cardBaseColor.find('string').text();
            }
        }
		
		var cardBaseImage = resultDoc.find('#cardBaseImage');
        if (cardBaseImage){
            if (cardBaseImage.find('string')){
                getCardBaseImage = cardBaseImage.find('string').text();
            }
        }
		
		var idscorevar = resultDoc.find('#idscore');
        if (idscorevar){
            if (idscorevar.find('string')){
                idscore = idscorevar.find('string').text();
            }
        }
		
		var idtimevar = resultDoc.find('#idtime');
        if (idtimevar){
            if (idtimevar.find('string')){
                idtime = idtimevar.find('string').text();
            }
        }
		
		var card1ArrayList = resultDoc.find('#card1Array');
		card1Array = new Array();
		if (card1ArrayList){
			var card1ArrayLength = card1ArrayList.find('array').children().length;
			for (i=0; i<card1ArrayLength; i++) {
				var card1Obj = new Object();
				var card1ObjList = $(card1ArrayList.find('array').children()[i]).children()
			
				card1Obj.varType = $($(card1ObjList).find('#varType')).find('string').text();
				card1Obj.objType = $($(card1ObjList).find('#objType')).find('string').text();
				card1Obj.name = $($(card1ObjList).find('#name')).find('string').text();
				card1Obj.num = $($(card1ObjList).find('#num')).find('number').text();
				card1Obj.imageId = $($(card1ObjList).find('#imageId')).find('number').text();
				card1Obj.textId = $($(card1ObjList).find('#textId')).find('string').text();
				card1Obj.xVal = $($(card1ObjList).find('#xVal')).find('number').text();
				card1Obj.yVal = $($(card1ObjList).find('#yVal')).find('number').text();
				card1Obj.score = $($(card1ObjList).find('#score')).find('string').text();
				card1Array.push(card1Obj);
				//card1Array.sort(sortThis)
			}
		}
		
		var card2ArrayList = resultDoc.find('#card2Array');
		card2Array = new Array();
		if (card2ArrayList){
			var card2ArrayLength = card2ArrayList.find('array').children().length;
			for (i=0; i<card2ArrayLength; i++) {
				var card2Obj = new Object();
				var card2ObjList = $(card2ArrayList.find('array').children()[i]).children()
			
				card2Obj.varType = $($(card2ObjList).find('#varType')).find('string').text();
				card2Obj.objType = $($(card2ObjList).find('#objType')).find('string').text();
				card2Obj.name = $($(card2ObjList).find('#name')).find('string').text();
				card2Obj.num = $($(card2ObjList).find('#num')).find('number').text();
				card2Obj.sameAsCard1 =  $($(card2ObjList).find('#sameAsCard1')).find('string').text();
				card2Obj.imageId = $($(card2ObjList).find('#imageId')).find('number').text();
				card2Obj.textId = $($(card2ObjList).find('#textId')).find('string').text();
				card2Obj.xVal = $($(card2ObjList).find('#xVal')).find('number').text();
				card2Obj.yVal = $($(card2ObjList).find('#yVal')).find('number').text();
				card2Obj.score = $($(card2ObjList).find('#score')).find('string').text();
				card2Array.push(card2Obj);
				//card2Array.sort(sortThis)
			}
		}
		
		function sortThis(a,b) {
		  if (a.num < b.num)
			 return -1;
		  if (a.num > b.num)
			return 1;
		  return 0;
		};
    },
    doUpdate: function (){
        elem = document.getElementById('feedbackCanvas');
        elem = null;
        resizeInteraction(width, height);
    },
	
};
resource_use = function (){
	
	//Check if the browser is Safari on Mac only to toggle the YES NO Button Positions
	//SystemIsMac = ( navigator.platform.match(/(iPad|iPhone|Mac)/g) ? true : false );
    return resourceUse1;
}

function resizeInteraction(thewidth, theheight){
    var scale = 0;
    thewidth = String(thewidth).replace("px", "");
    theheight = String(theheight).replace("px", "");
    if (thewidth < theheight){
        scale = thewidth / (movieWidth);
    } else{
        scale = theheight / (movieHeight);
    }
	var holdScale = scale;
    var margins = Math.round(25 * scale);
    margins += "px"
    scale = "scale(" + scale + ")";
    $('#gamedesc').css('-webkit-transform', scale);
    $('#gamedesc').css('-moz-transform', scale);
    $('#gamedesc').css('-o-transform', scale);
    $('#gamedesc').css('-ms-transform', scale);
    $('#gamedesc').css('-webkit-transform-origin', '0 0');
	$('#gamedesc').css('-moz-transform-origin', '0 0');
    $('#gamedesc').css('-o-transform-origin', '0 0');
    $('#gamedesc').css('-ms-transform-origin', '0 0');
	$('#gamedesc').css('-webkit-tap-highlight-color', 'rgba(0,0,0,0)');
	
	 $('#gamedesc').css({
        left: (85*holdScale) + "px",
        top: (160*holdScale) + "px",
    });
	
	$('#feedbackCanvas').css('-webkit-transform', scale);
    $('#feedbackCanvas').css('-moz-transform', scale);
    $('#feedbackCanvas').css('-o-transform', scale);
    $('#feedbackCanvas').css('-ms-transform', scale);
    $('#feedbackCanvas').css('-webkit-transform-origin', '0 0');
	$('#feedbackCanvas').css('-moz-transform-origin', '0 0');
    $('#feedbackCanvas').css('-o-transform-origin', '0 0');
    $('#feedbackCanvas').css('-ms-transform-origin', '0 0');
	$('#feedbackCanvas').css('-webkit-tap-highlight-color', 'rgba(0,0,0,0)');
	
	$('#disableCards').css('-webkit-transform', scale);
    $('#disableCards').css('-moz-transform', scale);
    $('#disableCards').css('-o-transform', scale);
    $('#disableCards').css('-ms-transform', scale);
    $('#disableCards').css('-webkit-transform-origin', '0 0');
	$('#disableCards').css('-moz-transform-origin', '0 0');
    $('#disableCards').css('-o-transform-origin', '0 0');
    $('#disableCards').css('-ms-transform-origin', '0 0');
	$('#disableCards').css('-webkit-tap-highlight-color', 'rgba(0,0,0,0)');
	
	$('#gameCanvas').css('-webkit-transform', scale);
    $('#gameCanvas').css('-moz-transform', scale);
    $('#gameCanvas').css('-o-transform', scale);
    $('#gameCanvas').css('-ms-transform', scale);
    $('#gameCanvas').css('-webkit-transform-origin', '0 0');
	$('#gameCanvas').css('-moz-transform-origin', '0 0');
    $('#gameCanvas').css('-o-transform-origin', '0 0');
    $('#gameCanvas').css('-ms-transform-origin', '0 0');
	$('#gameCanvas').css('-webkit-tap-highlight-color', 'rgba(0,0,0,0)');
	
	$('#memoryGameHolder').css('-webkit-transform', scale);
    $('#memoryGameHolder').css('-moz-transform', scale);
    $('#memoryGameHolder').css('-o-transform', scale);
    $('#memoryGameHolder').css('-ms-transform', scale);
    $('#memoryGameHolder').css('-webkit-transform-origin', '0 0');
	$('#memoryGameHolder').css('-moz-transform-origin', '0 0');
    $('#memoryGameHolder').css('-o-transform-origin', '0 0');
    $('#memoryGameHolder').css('-ms-transform-origin', '0 0');
	$('#memoryGameHolder').css('-webkit-tap-highlight-color', 'rgba(0,0,0,0)');
}
var scaleDiffw;
var scaleDiffh;

function checkval(){
	clearInterval(id);
	//setUpXMLForAllQuestions();
	//Millionaireinit();
	images = images||{};
	
	//Create Image list for card1
	var card1ImageArray = new Array();
	for(i=0;i<card1Array.length;i++){
		if(card1Array[i].varType == "Image"){
			var tempObj = new Object();
			tempObj.imgsrc = m_movieProps.ExternalResourceLoader.getResourcePath(card1Array[i].imageId)
			tempObj.num = card1Array[i].num
			card1ImageArray.push(tempObj);
		}
	}
	
	var card2ImageArray = new Array();
	for(i=0;i<card2Array.length;i++){
		if(card2Array[i].varType == "Image" && card2Array[i].sameAsCard1 != "true"){
			var tempObj = new Object();
			tempObj.imgsrc = m_movieProps.ExternalResourceLoader.getResourcePath(card2Array[i].imageId)
			tempObj.num = card2Array[i].num
			card2ImageArray.push(tempObj);
		}
	}
	
	var manifest = new Array();
	for(i=0;i<card1ImageArray.length;i++){
		var imgObj = new Object();
		imgObj.src = card1ImageArray[i].imgsrc;
		imgObj.id =  "imgCard1Mc"+card1ImageArray[i].num;
		manifest.push(imgObj)
	}
	
	for(i=0;i<card2ImageArray.length;i++){
		var imgObj = new Object();
		imgObj.src = card2ImageArray[i].imgsrc;
		imgObj.id =  "imgCard2Mc"+card2ImageArray[i].num;
		manifest.push(imgObj)
	}
	
	if (getCardBaseImage!="-101") {
		var imgObj = new Object();
		imgObj.src = m_movieProps.ExternalResourceLoader.getResourcePath(getCardBaseImage)
		imgObj.id =  "cardBaseImg";
		manifest.push(imgObj)
	} 
	
	if(manifest.length>=1){
		var loader = new createjs.LoadQueue(false);
		loader.addEventListener("fileload", handleFileLoad);
		loader.addEventListener("complete", handleComplete);
		loader.loadManifest(manifest);
	}else{
		checkGridMatrix();
	}
}

function handleFileLoad(evt) {
	if (evt.item.type == "image") { images[evt.item.id] = evt.result; }
}

function handleComplete() {
	//Load Image cards
	checkGridMatrix();
}

var loadCard1Count = 0;
var loadCard2Count = 0;
var clickCounter = 0;
var firstMovie;
var secondMovie;
var totalCols;
var totalRows;

var horzCardSize;
var vertCardSize;

var cardSize;

function checkGridMatrix() {
	totalCount=card1Array.length+card2Array.length;
	totalCardsArray=[2,4,6,8,10,12,14,16,18,20,22,24,26,28,30,32,34,36,38,40];
	for (i=0; i<=totalCardsArray.length; i++) {
		if (totalCount==totalCardsArray[i]) {
			gridSize=totalCardsArray[i];
			selectedMatrix=gridMatrix[i];
			break;
		}
	}
	//Set up card sizes
	horzCardSize=selectedMatrix[1][0]*(movieWidth/640);
	vertCardSize=selectedMatrix[1][1]*(movieWidth/640);

	if (getGameLayout == "horizontal") {
		totalCols=selectedMatrix[0][0];
		totalRows=selectedMatrix[0][1];
		cardSize=horzCardSize;
	} else if (getGameLayout == "vertical") {
		totalCols=selectedMatrix[0][1];
		totalRows=selectedMatrix[0][0];
		cardSize=vertCardSize;
	}

	// Resize all Cards
	arrangeAllCards()
}

function arrangeAllCards() {
	var i;
	var j;
	var spaceBetween=10;

	var totalWidth=totalCols*(cardSize+spaceBetween);
	var totalHeight=totalRows*(cardSize+spaceBetween);
	var startX = Number((movieWidth-totalWidth)/2)+spaceBetween;
	var startY = Number(((movieHeight-100)-totalHeight)/2)+75;
	

	var colCounter=1;

	arrangeCard1Set();
	function arrangeCard1Set() {
		if (card1Array.length>1) {
			for (i=0; i<card1Array.length; i++) {
				if (i==0) {
					card1Array[i].yVal=startY;
					card1Array[i].xVal=startX;
				} else {
					if (colCounter==totalCols) {
						card1Array[i].xVal=startX;
						card1Array[i].yVal = (cardSize + card1Array[i-1].yVal) + spaceBetween;
						colCounter=1;
					} else {
						card1Array[i].xVal = (cardSize + card1Array[i-1].xVal) + spaceBetween;
						card1Array[i].yVal = card1Array[i-1].yVal;
						colCounter++;
					}
				}
			}
		} else {
			card1Array[0].xVal=startX;
			card1Array[0].yVal=startY;
			colCounter++;
		}
		arrangeCard2Set();
	}

	function arrangeCard2Set() {
		if (card2Array.length>1) {
			for (j=0; j<card2Array.length; j++) {
				if (j==0) {
					if (colCounter==totalCols) {
						card2Array[j].xVal=startX;
						card2Array[j].yVal = (cardSize + card1Array[card1Array.length-1].yVal) + spaceBetween;
						colCounter=1;
					} else {
						card2Array[j].xVal=(cardSize+card1Array[card1Array.length-1].xVal)+spaceBetween;;
						card2Array[j].yVal=card1Array[card1Array.length-1].yVal;
						colCounter++;
					}
				} else {
					if (colCounter==totalCols) {
						card2Array[j].xVal=startX;
						card2Array[j].yVal = (cardSize + card2Array[j-1].yVal) + spaceBetween;
						colCounter=1;
					} else {
						card2Array[j].xVal = (cardSize + card2Array[j-1].xVal) + spaceBetween;
						card2Array[j].yVal = card2Array[j-1].yVal;
						colCounter++;
					}
				}
			}
		} else {
			if (getGameLayout == "horizontal") {
				card2Array[0].xVal = (cardSize+card1Array[0].xVal)+spaceBetween;;
				card2Array[0].yVal = card1Array[0].yVal;
				colCounter++;
			} else if (getGameLayout == "vertical") {
				card2Array[0].xVal = card1Array[0].xVal;
				card2Array[0].yVal = (cardSize + card1Array[0].yVal) + spaceBetween;
				colCounter++;
			}
		}
		//After arranging all cards set up edit are
		RandomizeAllPositions()
		
	}
	function RandomizeAllPositions(){
		var tempCard1XPos = new Array();
		var tempCard2XPos = new Array();
		var tempCard1YPos = new Array();
		var tempCard2YPos = new Array();
		
		for (i=0; i<card1Array.length; i++) {
			tempCard1XPos.push(card1Array[i].xVal);
			tempCard1YPos.push(card1Array[i].yVal)
		}
		
		for (j=0; j<card2Array.length; j++) {
			tempCard2XPos.push(card2Array[j].xVal);
			tempCard2YPos.push(card2Array[j].yVal)
		}
		
		var TempArray1 = new Array();
		var TempArray2 = new Array();
		ranCount=0;
		var ranArray1 = getRandNumInRange(0, card1Array.length, TempArray1)
		ranCount=0;
		var ranArray2 = getRandNumInRange(0, card2Array.length, TempArray2)
		
		for (i=0; i<card1Array.length; i++) {
			card1Array[i].xVal = tempCard1XPos[ranArray1[i]];
			card1Array[i].yVal = tempCard1YPos[ranArray1[i]];
		}
		
		for (j=0; j<card2Array.length; j++) {
			card2Array[j].xVal = tempCard2XPos[ranArray2[j]];
			card2Array[j].yVal = tempCard2YPos[ranArray2[j]];
		}
		loadAllCard1();
	}
}

//Function for randomizing
function getRandNumInRange(startNum, EndNum, pushToArray) {
	if (pushToArray.length==0) {
		ranCardNum=randRange(startNum,EndNum);
		pushToArray.push(ranCardNum);
		getRandNumInRange(startNum, EndNum, pushToArray);
	} else {
		ranCount=0;
		ranCardNum=randRange(startNum,EndNum);
		if (pushToArray.length<EndNum) {
			for (var i = 0; i < pushToArray.length; i++) {
				if (ranCardNum == pushToArray[i]) {
					ranCount++;
				}
			}
			if (ranCount == 0) {
				pushToArray.push(ranCardNum);
			}
			getRandNumInRange(startNum, EndNum, pushToArray);
		}
	}
	return pushToArray;
}


//Randomizeize within a range of numbers
function randRange(minNum, maxNum) {
	var randNum=Math.floor(Math.random()*(maxNum-minNum))+minNum;
	return randNum;
}

var selCardArrayList = []
function loadAllCard1(){
	memoryGameHolder = document.getElementById("memoryGameHolder");
	disableCards = document.getElementById("disableCards");
	memoryGameHolder.style.width = movieWidth+"px";
    memoryGameHolder.style.height = movieHeight+"px";
	disableCards.style.width = movieWidth+"px";
    disableCards.style.height = movieHeight+"px";

	if(loadCard1Count<card1Array.length){
		var card1 = document.createElement('div');
		card1.id = card1Array[loadCard1Count].num;
		card1.className = 'flip';
		card1.style.width = cardSize+"px"
		card1.style.height = cardSize+"px"
		
		card1.style.left = card1Array[loadCard1Count].xVal+"px"
		card1.style.top = card1Array[loadCard1Count].yVal+"px";
		card1.style.position = 'absolute';
		
		card1.onmouseover = (function(e) {
        	e.target.style.cursor = "pointer";
    	});
		
		var cardBack = document.createElement('div');
		cardBack.className = 'flip-back';
		var backcanvas = document.createElement('canvas');
		backcanvas.id = "backcanvas"
		backcanvas.width  = cardSize;;;
        backcanvas.height = cardSize;;;
		var backCard = new lib.cardback(getCardShape,getCardBorder,getCardBaseColor);
		backCard.scaleX = cardSize / 260;
    	backCard.scaleY = cardSize / 260;
		var backCardStage = new createjs.Stage(backcanvas);
		clearAllBorders(backCard,"cardback")
		backCard.cardBackMc.backmc.borders_mc["bordermc"+getCardShape].visible =true;
		backCard.cardBackMc.backmc.borders_mc["bordermc"+getCardShape].gotoAndStop(getCardBorder)
		backCard.cardBackMc.backmc.shadow_mc.gotoAndStop(getCardShape);
		
		if (getCardBaseImage!="-101") {
			var bitmap = new createjs.Bitmap(images["cardBaseImg"]);
			var diffPercentW;
			if(bitmap.image.width>250){
				var diffWidth=bitmap.image.width-250;
				var diffHeight=bitmap.image.height-250;
				diffPercentW = 1-(diffWidth / bitmap.image.width);
				diffPercentH = 1-(diffHeight / bitmap.image.height);
			}else{
				var diffIncrWidth=250-bitmap.image.width;
				var diffIncrHeight=250-bitmap.image.height;
				diffPercentW = 1+(diffIncrWidth / bitmap.image.width);
				diffPercentH = 1+(diffIncrHeight / bitmap.image.height);
			}
			backCard.cardBackMc.backmc.front_mc.imageHolder.imageUILoader.addChild(bitmap);
			backCard.cardBackMc.backmc.front_mc.imageHolder.imageUILoader.setTransform(0,0,diffPercentW,diffPercentH)
		}
		if(getCardBaseImageSelected == "true"){
			backCard.cardBackMc.backmc.front_mc.grad.visible=false;
			backCard.cardBackMc.backmc.front_mc.base.visible=false;
			backCard.cardBackMc.backmc.front_mc.imageHolder.visible = true;
		}else{
			backCard.cardBackMc.backmc.front_mc.grad.visible=true;
			backCard.cardBackMc.backmc.front_mc.base.visible=true;
			backCard.cardBackMc.backmc.front_mc.imageHolder.visible = false;
		}
		
		backCardStage.addChild(backCard);
		backCardStage.update();
	
		createjs.Ticker.setFPS(24);
		createjs.Ticker.addEventListener("tick", backCardStage);
		
		cardBack.appendChild(backcanvas);
		
		if(card1Array[loadCard1Count].varType == "Image"){
			//Load image card
			var cardFront = document.createElement('div');
			cardFront.id = "front";
			cardFront.className = 'flip-front';
			var frontcanvas = document.createElement('canvas');
			frontcanvas.id = "frontcanvas"
			frontcanvas.width  = cardSize;;;
			frontcanvas.height = cardSize;;;
			var fronCard = new lib.imgcardfront(getCardShape,getCardBorder);
			fronCard.scaleX = cardSize / 260;
    		fronCard.scaleY = cardSize / 260;
			var fronCardStage = new createjs.Stage(frontcanvas);
			clearAllBorders(fronCard,"imgcardfront");
			fronCard.imgCard.borders_mc["bordermc"+getCardShape].visible =true;
			fronCard.imgCard.borders_mc["bordermc"+getCardShape].gotoAndStop(getCardBorder)
			fronCard.imgCard.shadow_mc.gotoAndStop(getCardShape);
		
			fronCardStage.addChild(fronCard);
			fronCardStage.update();
		
			createjs.Ticker.setFPS(24);
			createjs.Ticker.addEventListener("tick", fronCardStage);
			
			var bitmap = new createjs.Bitmap(images["imgCard1Mc"+card1Array[loadCard1Count].num]);
			var diffPercentW;
			if(bitmap.image.width>250){
				var diffWidth=bitmap.image.width-250;
				diffPercentW = 1-(diffWidth / bitmap.image.width);
				topPos = -90;
			}else{
				var diffIncrWidth=250-bitmap.image.width;
				diffPercentW = 1+(diffIncrWidth / bitmap.image.width);
				topPos = -125;
			}
			fronCard.imgCard.holder_mc.imageUILoader.addChild(bitmap);
			fronCard.imgCard.holder_mc.imageUILoader.setTransform(-125,topPos,diffPercentW,diffPercentW)
			
			cardFront.appendChild(frontcanvas)
		}else{
			//Load Text card
			var cardFront = document.createElement('div');
			cardFront.id = "front";
			cardFront.className = 'flip-front';
			var frontcanvas = document.createElement('canvas');
			frontcanvas.id = "frontcanvas"
			frontcanvas.width  = cardSize;
			frontcanvas.height = cardSize;
			var fronCard = new lib.txtcardfront(getCardShape,getCardBorder);
			fronCard.scaleX = cardSize / 260;
    		fronCard.scaleY = cardSize / 260;
			var fronCardStage = new createjs.Stage(frontcanvas);
			clearAllBorders(fronCard,"txtcardfront");
			fronCard.txtCard.borders_mc["bordermc"+getCardShape].visible =true;
			fronCard.txtCard.borders_mc["bordermc"+getCardShape].gotoAndStop(getCardBorder)
			fronCard.txtCard.shadow_mc.gotoAndStop(getCardShape);
		
			createjs.Ticker.setFPS(24);
			createjs.Ticker.addEventListener("tick", fronCardStage);
			var str = card1Array[loadCard1Count].textId;
			var totLinesForText = parseInt(str.length)/10;
			totLine = totLinesForText.toFixed()
			
			var res = str.split("");
			var lineArray = new Array();;

			if(str.length>21){
				ypos = 60;
			}else if(str.length>11 && str.length<=21 ){
				ypos = 80;
			}else if(str.length>=0 && str.length<=11){
				ypos = 100;
			}
			for(i=1;i<=totLinesForText;i++){
				var tempNum = 10*i;
				lineArray.push(tempNum)
			}
			var finalString = ""; 
			var lineCount = 0;
			for(i=0;i<res.length;i++){
				if(i==lineArray[lineCount]){
					finalString = finalString+res[i]+"\n"
					lineCount++;
				}else{
					finalString = finalString+res[i]
				}
			}
			
			var txt = new createjs.Text(finalString, "38px Tahoma","#000000");
			txt.textAlign = "center";
			txt.lineHeight = 40;
			txt.lineWidth = 222;
			txt.setTransform(125,ypos,1,1,0,0,180);
			
			fronCard.txtCard.holder_mc.addChild(txt)
			cardFront.appendChild(frontcanvas)
			
			fronCardStage.addChild(fronCard);
			fronCardStage.update();
		
		}
		card1.appendChild(cardBack);
		card1.appendChild(cardFront);
		$(cardFront).css({
			'opacity': '0',
			'z-index':'0',
			'position': 'absolute',
			'-webkit-transform': 'rotateY(0deg)',
			'-moz-transform': 'rotateY(0deg)',
			'-ms-transform': 'rotateY(0deg)',
			'-o-transform': 'rotateY(0deg)',
			'transform': 'rotateY(0deg)',
			'-webkit-backface-visibility': 'visible',
			'-moz-backface-visibility': 'visible',
			'-ms-backface-visibility': 'visible',
			'-o-backface-visibility': 'visible',
			'backface-visibility': 'visible',
		}); 
		$(cardBack).css({
			'opacity': '1',
			'z-index':'5',
			'position': 'absolute',
			'-webkit-transform': 'rotateY(-180deg)',
			'-moz-transform': 'rotateY(-180deg)',
			'-ms-transform': 'rotateY(-180deg)',
			'-o-transform': 'rotateY(-180deg)',
			'transform': 'rotateY(-180deg)',
			'-webkit-backface-visibility': 'visible',
			'-moz-backface-visibility': 'visible',
			'-ms-backface-visibility': 'visible',
			'-o-backface-visibility': 'visible',
			'backface-visibility': 'visible',
		});  
		
		$(card1).on('click',(function(e) {
			$(card1).off('click');
        	$(cardFront).css({
				'opacity': '1',
				'z-index':'5',
				'-webkit-transform': 'rotateY(180deg)',
				'-moz-transform': 'rotateY(180deg)',
				'-ms-transform': 'rotateY(180deg)',
				'-o-transform': 'rotateY(180deg)',
				'transform': 'rotateY(180deg)',
			}); 
			$(cardBack).css({
				'opacity': '0',
				'z-index':'0',
				'-webkit-transform': 'rotateY(0deg)',
				'-moz-transform': 'rotateY(0deg)',
				'-ms-transform': 'rotateY(0deg)',
				'-o-transform': 'rotateY(0deg)',
				'transform': 'rotateY(0deg)',
			});

			clickCounter++;
			checkClickCounter(card1)
    	}));
		
		function checkClickCounter(selectedCard){
			if (clickCounter==1) {
				firstMovie=selectedCard;
				firstNum=selectedCard.id;
			} else if (clickCounter==2) {
				secondMovie=selectedCard;
				secondNum=selectedCard.id;
				$(disableCards).css('zIndex',15)
				$(memoryGameHolder).css('zIndex',12)
				if (firstNum == secondNum) {
					updateScore(selectedCard.id);
					my_fadeProcess1 = setTimeout(function(){clearCorrectCards(firstMovie,secondMovie)},500);
				} else {
					my_timedProcess1 = setTimeout(function(){reverseFlip(firstMovie,secondMovie)},998);
				}
				clickCounter=0;
			}
		}
		
		function clearCorrectCards(selCard1,selCard2){
			$(selCard1).fadeOut( "slow" );
			$(selCard2).fadeOut( "slow" );
			$(disableCards).css('zIndex',0)
			$(memoryGameHolder).css('zIndex',12)
		}

		
		function reverseFlip(selCard1,selCard2){
			clearTimeout(my_timedProcess1)
			var firstCardFront = $($(selCard1).find('.flip-front'));
			var firstCardBack = $($(selCard1).find('.flip-back'));
			var secondCardFront = $($(selCard2).find('.flip-front'));
			var secondCardBack = $($(selCard2).find('.flip-back'));
			
			firstCardFront.css({
				'z-index':'0',
				'opacity': '0',
				'-webkit-transform': 'rotateY(0deg)',
				'-moz-transform': 'rotateY(0deg)',
				'-ms-transform': 'rotateY(0deg)',
				'-o-transform': 'rotateY(0deg)',
				'transform': 'rotateY(0deg)',
			}); 
			firstCardBack.css({
				'z-index':'5',
				'opacity': '1',
				'-webkit-transform': 'rotateY(-180deg)',
				'-moz-transform': 'rotateY(-180deg)',
				'-ms-transform': 'rotateY(-180deg)',
				'-o-transform': 'rotateY(-180deg)',
				'transform': 'rotateY(-180deg)',
			}); 
				
			secondCardFront.css({
				'z-index':'0',
				'opacity': '0',
				'-webkit-transform': 'rotateY(0deg)',
				'-moz-transform': 'rotateY(0deg)',
				'-ms-transform': 'rotateY(0deg)',
				'-o-transform': 'rotateY(0deg)',
				'transform': 'rotateY(0deg)',
			}); 
			secondCardBack.css({
				'z-index':'5',
				'opacity': '1',
				'-webkit-transform': 'rotateY(-180deg)',
				'-moz-transform': 'rotateY(-180deg)',
				'-ms-transform': 'rotateY(-180deg)',
				'-o-transform': 'rotateY(-180deg)',
				'transform': 'rotateY(-180deg)',
			});
			$(selCard1).on('click',(function(e) {
				$(selCard1).off('click')
				$(firstCardFront).css({
					'z-index':'5',
					'opacity': '1',
					'-webkit-transform': 'rotateY(180deg)',
					'-moz-transform': 'rotateY(180deg)',
					'-ms-transform': 'rotateY(180deg)',
					'-o-transform': 'rotateY(180deg)',
					'transform': 'rotateY(180deg)',
				}); 
				$(firstCardBack).css({
					'z-index':'0',
					'opacity': '0',
					'-webkit-transform': 'rotateY(0deg)',
					'-moz-transform': 'rotateY(0deg)',
					'-ms-transform': 'rotateY(0deg)',
					'-o-transform': 'rotateY(0deg)',
					'transform': 'rotateY(0deg)',
				});
				
	
				clickCounter++;
				checkClickCounter(selCard1)

    		})); 
			$(selCard2).on('click',(function(e) {
				$(selCard2).off('click')
				$(secondCardFront).css({
					'z-index':'5',
					'opacity': '1',
					'-webkit-transform': 'rotateY(180deg)',
					'-moz-transform': 'rotateY(180deg)',
					'-ms-transform': 'rotateY(180deg)',
					'-o-transform': 'rotateY(180deg)',
					'transform': 'rotateY(180deg)',
				}); 
				$(secondCardBack).css({
					'z-index':'0',
					'opacity': '0',
					'-webkit-transform': 'rotateY(0deg)',
					'-moz-transform': 'rotateY(0deg)',
					'-ms-transform': 'rotateY(0deg)',
					'-o-transform': 'rotateY(0deg)',
					'transform': 'rotateY(0deg)',
				});
				
	
				clickCounter++;
				checkClickCounter(selCard2)
    		})); 
			$(disableCards).css('zIndex',0)
			$(memoryGameHolder).css('zIndex',12)
		}
		
		memoryGameHolder.appendChild(card1)
		loadCard1Count++;
		loadAllCard1();
	}else{
		loadAllCard2()
	}
}
function loadAllCard2(){
	if(loadCard2Count<card2Array.length){
		var card2 = document.createElement('div');
		card2.id = card2Array[loadCard2Count].num;
		card2.className = 'flip';
		card2.style.width = cardSize+"px"
		card2.style.height = cardSize+"px"
		
		card2.style.left = card2Array[loadCard2Count].xVal+"px"
		card2.style.top = card2Array[loadCard2Count].yVal+"px";
		card2.style.position = 'absolute';
		
		card2.onmouseover = (function(e) {
        	e.target.style.cursor = "pointer";
    	});
		
		var cardBack = document.createElement('div');
		cardBack.className = 'flip-back';
		var backcanvas = document.createElement('canvas');
		backcanvas.id = "backcanvas"
		backcanvas.width  = cardSize;
        backcanvas.height = cardSize;
		var backCard = new lib.cardback(getCardShape,getCardBorder,getCardBaseColor);
		backCard.scaleX = cardSize / 260;
    	backCard.scaleY = cardSize / 260;
		var backCardStage = new createjs.Stage(backcanvas);
		clearAllBorders(backCard,"cardback")
		backCard.cardBackMc.backmc.borders_mc["bordermc"+getCardShape].visible =true;
		backCard.cardBackMc.backmc.borders_mc["bordermc"+getCardShape].gotoAndStop(getCardBorder)
		backCard.cardBackMc.backmc.shadow_mc.gotoAndStop(getCardShape);
		
		if (getCardBaseImage!="-101") {
			var bitmap = new createjs.Bitmap(images["cardBaseImg"]);
			var diffPercentW;
			if(bitmap.image.width>250){
				var diffWidth=bitmap.image.width-250;
				var diffHeight=bitmap.image.height-250;
				diffPercentW = 1-(diffWidth / bitmap.image.width);
				diffPercentH = 1-(diffHeight / bitmap.image.height);
			}else{
				var diffIncrWidth=250-bitmap.image.width;
				var diffIncrHeight=250-bitmap.image.height;
				diffPercentW = 1+(diffIncrWidth / bitmap.image.width);
				diffPercentH = 1+(diffIncrHeight / bitmap.image.height);
			}
			backCard.cardBackMc.backmc.front_mc.imageHolder.imageUILoader.addChild(bitmap);
			backCard.cardBackMc.backmc.front_mc.imageHolder.imageUILoader.setTransform(0,0,diffPercentW,diffPercentH)
		}
		if(getCardBaseImageSelected == "true"){
			backCard.cardBackMc.backmc.front_mc.grad.visible=false;
			backCard.cardBackMc.backmc.front_mc.base.visible=false;
			backCard.cardBackMc.backmc.front_mc.imageHolder.visible = true;
		}else{
			backCard.cardBackMc.backmc.front_mc.grad.visible=true;
			backCard.cardBackMc.backmc.front_mc.base.visible=true;
			backCard.cardBackMc.backmc.front_mc.imageHolder.visible = false;
		}
		
		backCardStage.addChild(backCard);
		backCardStage.update();
	
		createjs.Ticker.setFPS(24);
		createjs.Ticker.addEventListener("tick", backCardStage);
		
		cardBack.appendChild(backcanvas);
		
		if(card2Array[loadCard2Count].varType == "Image"){
			//Load image card
			var cardFront = document.createElement('div');
			cardFront.id = "front";
			cardFront.className = 'flip-front';
			var frontcanvas = document.createElement('canvas');
			frontcanvas.id = "frontcanvas"
			frontcanvas.width  = cardSize;;
			frontcanvas.height = cardSize;;
			var fronCard = new lib.imgcardfront(getCardShape,getCardBorder);
			fronCard.scaleX = cardSize / 260;
    		fronCard.scaleY = cardSize / 260;
			var fronCardStage = new createjs.Stage(frontcanvas);
			clearAllBorders(fronCard,"imgcardfront");
			fronCard.imgCard.borders_mc["bordermc"+getCardShape].visible =true;
			fronCard.imgCard.borders_mc["bordermc"+getCardShape].gotoAndStop(getCardBorder)
			fronCard.imgCard.shadow_mc.gotoAndStop(getCardShape);
		
			fronCardStage.addChild(fronCard);
			fronCardStage.update();
		
			createjs.Ticker.setFPS(24);
			createjs.Ticker.addEventListener("tick", fronCardStage);
			
			if(card2Array[loadCard2Count].sameAsCard1 == "true"){
				var bitmap = new createjs.Bitmap(images["imgCard1Mc"+card2Array[loadCard2Count].num]);
			}else{
				var bitmap = new createjs.Bitmap(images["imgCard2Mc"+card2Array[loadCard2Count].num]);
			}
			var diffPercentW;
			if(bitmap.image.width>250){
				var diffWidth=bitmap.image.width-250;
				diffPercentW = 1-(diffWidth / bitmap.image.width);
				topPos = -90;
			}else{
				var diffIncrWidth=250-bitmap.image.width;
				diffPercentW = 1+(diffIncrWidth / bitmap.image.width);
				topPos = -125;
			}
			fronCard.imgCard.holder_mc.imageUILoader.addChild(bitmap);
			fronCard.imgCard.holder_mc.imageUILoader.setTransform(-125,topPos,diffPercentW,diffPercentW)
			
			cardFront.appendChild(frontcanvas)
		}else{
			//Load Text card
			var cardFront = document.createElement('div');
			cardFront.id = "front";
			cardFront.className = 'flip-front';
			var frontcanvas = document.createElement('canvas');
			frontcanvas.id = "frontcanvas"
			frontcanvas.width  = cardSize;;
			frontcanvas.height = cardSize;;
			var fronCard = new lib.txtcardfront(getCardShape,getCardBorder);
			fronCard.scaleX = cardSize / 260;
    		fronCard.scaleY = cardSize / 260;
			var fronCardStage = new createjs.Stage(frontcanvas);
			clearAllBorders(fronCard,"txtcardfront");
			fronCard.txtCard.borders_mc["bordermc"+getCardShape].visible =true;
			fronCard.txtCard.borders_mc["bordermc"+getCardShape].gotoAndStop(getCardBorder)
			fronCard.txtCard.shadow_mc.gotoAndStop(getCardShape);
		
			createjs.Ticker.setFPS(24);
			createjs.Ticker.addEventListener("tick", fronCardStage);
			var str;
			if(card2Array[loadCard2Count].sameAsCard1 == "true"){
				str = card1Array[loadCard2Count].textId;
			}else{
				str = card2Array[loadCard2Count].textId;
			}
			var totLinesForText = parseInt(str.length)/10;

			totLine = totLinesForText.toFixed()
			
			var res = str.split("");
			var lineArray = new Array();;

			if(str.length>21){
				ypos = 60;
			}else if(str.length>11 && str.length<=21 ){
				ypos = 80;
			}else if(str.length>=1 && str.length<=11){
				ypos = 100;
			}
			for(i=1;i<=totLinesForText;i++){
				var tempNum = 10*i;
				lineArray.push(tempNum)
			}
			var finalString = ""; 
			var lineCount = 0;
			for(i=0;i<res.length;i++){
				if(i==lineArray[lineCount]){
					finalString = finalString+res[i]+"\n"
					lineCount++;
				}else{
					finalString = finalString+res[i]
				}
			}
			
			var txt = new createjs.Text(finalString, "38px Tahoma","#000000");
			txt.textAlign = "center";
			txt.lineHeight = 40;
			txt.lineWidth = 222;
			txt.setTransform(125,ypos,1,1,0,0,180);
			
			fronCard.txtCard.holder_mc.addChild(txt)
			cardFront.appendChild(frontcanvas)
			
			fronCardStage.addChild(fronCard);
			fronCardStage.update();
		
		}
		
		card2.appendChild(cardFront);
		card2.appendChild(cardBack);
		$(cardFront).css({
			'z-index':'0',
			'opacity': '0',
			'position': 'absolute',
			'-webkit-transform': 'rotateY(0deg)',
			'-moz-transform': 'rotateY(0deg)',
			'-ms-transform': 'rotateY(0deg)',
			'-o-transform': 'rotateY(0deg)',
			'transform': 'rotateY(0deg)',
			'-webkit-backface-visibility': 'visible',
			'-moz-backface-visibility': 'visible',
			'-ms-backface-visibility': 'visible',
			'-o-backface-visibility': 'visible',
			'backface-visibility': 'visible',
		}); 
		$(cardBack).css({
			'z-index':'5',
			'opacity': '1',
			'position': 'absolute',
			'-webkit-transform': 'rotateY(-180deg)',
			'-moz-transform': 'rotateY(-180deg)',
			'-ms-transform': 'rotateY(-180deg)',
			'-o-transform': 'rotateY(-180deg)',
			'transform': 'rotateY(-180deg)',
			'-webkit-backface-visibility': 'visible',
			'-moz-backface-visibility': 'visible',
			'-ms-backface-visibility': 'visible',
			'-o-backface-visibility': 'visible',
			'backface-visibility': 'visible',
		}); 
		
		$(card2).on('click',(function(e) {
			$(card2).off('click')
        	$(cardFront).css({
				'z-index':'5',
				'opacity': '1',
				'-webkit-transform': 'rotateY(180deg)',
				'-moz-transform': 'rotateY(180deg)',
				'-ms-transform': 'rotateY(180deg)',
				'-o-transform': 'rotateY(180deg)',
				'transform': 'rotateY(180deg)',
			}); 
			$(cardBack).css({
				'z-index':'0',
				'opacity': '0',
				'-webkit-transform': 'rotateY(0deg)',
				'-moz-transform': 'rotateY(0deg)',
				'-ms-transform': 'rotateY(0deg)',
				'-o-transform': 'rotateY(0deg)',
				'transform': 'rotateY(0deg)',
			});

			clickCounter++;
			checkClickCounter(card2)
    	}));
		
		function checkClickCounter(selectedCard){
			if (clickCounter==1) {
				firstMovie=selectedCard;
				firstNum=selectedCard.id;
			} else if (clickCounter==2) {
				//disableAllCards();
				secondMovie=selectedCard;
				secondNum=selectedCard.id;
				$(disableCards).css('zIndex',15)
				$(memoryGameHolder).css('zIndex',12)
				if (firstNum == secondNum) {
					updateScore(selectedCard.id);
					my_fadeProcess2 = setTimeout(function(){clearCorrectCards(firstMovie,secondMovie)},500);
					
				} else {
					my_timedProcess2 = setTimeout(function(){reverseFlip(firstMovie,secondMovie)},998);
				}
				clickCounter=0;
			}
		}
		function clearCorrectCards(selCard1,selCard2){
			$(selCard1).fadeOut( "slow" );
			$(selCard2).fadeOut( "slow" );
			$(disableCards).css('zIndex',0)
			$(memoryGameHolder).css('zIndex',12)
		}
		
		function reverseFlip(selCard1,selCard2){
			clearTimeout(my_timedProcess2)
			var firstCardFront = $($(selCard1).find('.flip-front'));
			var firstCardBack = $($(selCard1).find('.flip-back'));
			var secondCardFront = $($(selCard2).find('.flip-front'));
			var secondCardBack = $($(selCard2).find('.flip-back'));
			
			firstCardFront.css({
				'z-index':'0',
				'opacity': '0',
				'-webkit-transform': 'rotateY(0deg)',
				'-moz-transform': 'rotateY(0deg)',
				'-ms-transform': 'rotateY(0deg)',
				'-o-transform': 'rotateY(0deg)',
				'transform': 'rotateY(0deg)',
			}); 
			firstCardBack.css({
				'z-index':'5',
				'opacity': '1',
				'-webkit-transform': 'rotateY(-180deg)',
				'-moz-transform': 'rotateY(-180deg)',
				'-ms-transform': 'rotateY(-180deg)',
				'-o-transform': 'rotateY(-180deg)',
				'transform': 'rotateY(-180deg)',
			}); 
			
			secondCardFront.css({
				'z-index':'0',
				'opacity': '0',
				'-webkit-transform': 'rotateY(0deg)',
				'-moz-transform': 'rotateY(0deg)',
				'-ms-transform': 'rotateY(0deg)',
				'-o-transform': 'rotateY(0deg)',
				'transform': 'rotateY(0deg)',
			}); 
			secondCardBack.css({
				'z-index':'5',
				'opacity': '1',
				'-webkit-transform': 'rotateY(-180deg)',
				'-moz-transform': 'rotateY(-180deg)',
				'-ms-transform': 'rotateY(-180deg)',
				'-o-transform': 'rotateY(-180deg)',
				'transform': 'rotateY(-180deg)',
			}); 
			
			$(selCard1).on('click',(function(e) {
				$(selCard1).off('click')
				$(firstCardFront).css({
					'z-index':'5',
					'opacity': '1',
					'-webkit-transform': 'rotateY(180deg)',
					'-moz-transform': 'rotateY(180deg)',
					'-ms-transform': 'rotateY(180deg)',
					'-o-transform': 'rotateY(180deg)',
					'transform': 'rotateY(180deg)',
				}); 
				$(firstCardBack).css({
					'z-index':'0',
					'opacity': '0',
					'-webkit-transform': 'rotateY(0deg)',
					'-moz-transform': 'rotateY(0deg)',
					'-ms-transform': 'rotateY(0deg)',
					'-o-transform': 'rotateY(0deg)',
					'transform': 'rotateY(0deg)',
				});

				clickCounter++;
				checkClickCounter(selCard1)

    		})); 
			$(selCard2).on('click',(function(e) {
				$(selCard2).off('click')
				$(secondCardFront).css({
					'z-index':'5',
					'opacity': '1',
					'-webkit-transform': 'rotateY(180deg)',
					'-moz-transform': 'rotateY(180deg)',
					'-ms-transform': 'rotateY(180deg)',
					'-o-transform': 'rotateY(180deg)',
					'transform': 'rotateY(180deg)',
					'-webkit-backface-visibility': 'visible',
				}); 
				$(secondCardBack).css({
					'z-index':'0',
					'opacity': '0',
					'-webkit-transform': 'rotateY(0deg)',
					'-moz-transform': 'rotateY(0deg)',
					'-ms-transform': 'rotateY(0deg)',
					'-o-transform': 'rotateY(0deg)',
					'transform': 'rotateY(0deg)',
				});
				
	
				clickCounter++;
				checkClickCounter(selCard2)
    		}));  
			$(disableCards).css('zIndex',0)
			$(memoryGameHolder).css('zIndex',12)
		}
		
		memoryGameHolder.appendChild(card2)
		loadCard2Count++;
		loadAllCard1();
	}else{
		Millionaireinit()
	}
}


function Millionaireinit() {
	gameCanvas = document.getElementById("gameCanvas");
	gameCanvas.width = movieWidth;
    gameCanvas.height = movieHeight;
	gameRoot = new lib.MemoryGameScreen(gameBgSelected, getBgColor, getMainGameName, getMainGameNameColor, getScoreTimeColor);
	gameRoot.scaleX = movieWidth / 640;
    gameRoot.scaleY = movieHeight / 480;
	
	gameStage = new createjs.Stage(gameCanvas);
	gameStage.addChild(gameRoot);
	
	feedbackCanvas = document.getElementById("feedbackCanvas");
	feedbackCanvas.width = movieWidth;
    feedbackCanvas.height = movieHeight;
	feedbackRoot = new lib.MemoryFeedbackScreen(getMainGameName, getMainGameNameColor, getGameOverText,getGameOverColor, getTimeUpText, getTimeUpColor, getPlayBtnName, getPlayBtnColor, getAddTextTxt,getAddTextColor, getFinalScoreColor);
	feedbackRoot.scaleX = movieWidth / 640;
    feedbackRoot.scaleY = movieHeight / 480;

	feedbackStage = new createjs.Stage(feedbackCanvas);
	feedbackStage.addChild(feedbackRoot);
	
	feedbackRoot.startArea.visible=true;
	feedbackRoot.endArea.visible = true;
	
	//Update the stage only after everythign is set
	feedbackStage.enableMouseOver();
	gameStage.enableMouseOver();
	
	//Enabling Touch
	createjs.Touch.enable(gameStage);
	createjs.Touch.enable(feedbackStage);
	
	createjs.Ticker.setFPS(30);
	createjs.Ticker.addEventListener(feedbackStage);
	createjs.Ticker.addEventListener(gameStage);
	feedbackStage.update();
	gameStage.update();
	
	scalePercentagew = movieWidth / 640;
    scalePercentageh = movieHeight / 480;
	
	scaleDiffw = movieWidth - 640;
    scaleDiffh = movieHeight - 480;
	
	setuptextfields();
	setScoreAndTime();
	
    //hide all html elements
	finishedarray = finished.split(":")
	if(finishedarray[2] != undefined){
		finalScore = parseInt(finishedarray[2]);
	}
	if(m_VariableHandle != null){
		m_VariableHandle[VarFScore] = finalScore;
	}
	
	var lInteractiveWidgetHandle = lcap.CPMovieHandle.getInteractiveWidgetHandle();
	if (parent.cpInQuizScope == true) {
		if (lcap.CPMovieHandle.getQuizController().m_QuizzingData.isInReviewMode == true) {
			if (finishedarray[0] == "complete") {
				setReviewMode("success");
			} else {
				setReviewMode("fail")
			}
		} else if (no_of_tries < no_of_attempts) {
			if (finishedarray[0] == "notdone") {
				setnotdonemode();
			} else if (finishedarray[0] == "complete") {
				setReviewMode("success");
			} else {
				setReviewMode("fail");
			}
		} else if (no_of_tries >= no_of_attempts) {
			if (finishedarray[0] == "notdone") {
				setnotdonemode();

			} else if (finishedarray[0] == "complete") {
				setReviewMode("success");
			} else {
				setReviewMode("fail")
			}
		}
	} else {
		if (lcap.CPMovieHandle.getQuizController().m_QuizzingData!=null) {
			if (lcap.CPMovieHandle.getQuizController().m_QuizzingData.isInReviewMode == true) {
				if (finishedarray[0] == "notdone") {
					if (finishedarray[1] == "quiz"){
						setReviewMode("fail")
					}else{
						setnotdonemode();
					}
				} else if (finishedarray[0] == "complete") {
					setReviewMode("success");
				} else {
					setReviewMode("fail")
				}
			} else if (no_of_tries < no_of_attempts) {
		
				if (finishedarray[0] == "notdone") {
					setnotdonemode();
				} else if (finishedarray[0] == "complete") {
					setReviewMode("success");
				}
		
			} else if (no_of_tries >= no_of_attempts) {
				if (finishedarray[0] == "notdone") {
					setnotdonemode();
				} else if (finishedarray[0] == "complete") {
					setReviewMode("success");
				} else {
					setReviewMode("fail")
				}
			}
		}else{
			if (finishedarray[0]=="notdone") {
				if (finishedarray[1]=="quiz") {
					setReviewMode("fail")
				} else {
					setnotdonemode();
				}
			} else if (finishedarray[0] == "success") {
				setReviewMode("success");
			} else if (finishedarray[0] == "fail") {
				setReviewMode("fail")
			}
		}
	
	}
}

function setnotdonemode(){
	//Hide EventThing
	
	$(gameCanvas).hide();
	$(memoryGameHolder).hide();
	
	$(gameCanvas).css('zIndex',-100)
	$(feedbackCanvas).css('zIndex',10)
	$(memoryGameHolder).css('zIndex',12)
	$(feedbackCanvas).show();
	
	//Show start screen
	feedbackRoot.startArea.visible=true;
	feedbackRoot.endArea.visible = false;
	feedbackRoot.startArea.instMc.visible=false;
	$('#gamedesc').hide();
	
	//Function for play button
	feedbackRoot.startArea.playBtn.on("mouseover", handleMouseOverFeedback);
	feedbackRoot.startArea.playBtn.on("mouseout", handleMouseOutFeedback);
	feedbackRoot.startArea.playBtn.on("click", startGame);	
	
	feedbackRoot.startArea.help_btn.on("mouseover", handleMouseOverFeedback);
	feedbackRoot.startArea.help_btn.on("mousemove", handleMouseOverFeedback);
	feedbackRoot.startArea.help_btn.on("mouseout", handleMouseOutFeedback);
	feedbackRoot.startArea.help_btn.on("click", showInst);
	
	feedbackRoot.startArea.instMc.close_btn.on("mouseover", handleMouseOverFeedback);
	feedbackRoot.startArea.instMc.close_btn.on("mousemove", handleMouseOverFeedback);
	feedbackRoot.startArea.instMc.close_btn.on("mouseout", handleMouseOutFeedback);
	feedbackRoot.startArea.instMc.close_btn.on("click", showInst);
	
	feedbackStage.update();
}

function startGame(){
	FastClick.attach(document.body);
	$(gameCanvas).show();
	$(memoryGameHolder).show();
	
	$(gameCanvas).css('zIndex',10)
	$(feedbackCanvas).css('zIndex',-100)
	$(feedbackCanvas).hide();
	
	checkForHint();
}

var instClickCount = 0;
function showInst(){
	if(instClickCount==0){
		feedbackRoot.startArea.instMc.visible=true;
		$('#gamedesc').show();
		instClickCount =1;
	}else{
		feedbackRoot.startArea.instMc.visible=false;
		$('#gamedesc').hide();
		instClickCount =0;
	}
	
	feedbackStage.update()
}

function showFeedBack(varStat){
	if(m_VariableHandle != null){
		m_VariableHandle[VarFScore] = finalScore;
	}
	setReviewMode(varStat);
	if(varStat == "success"){
		finished = "complete";
		setSuccess();
	}else if(varStat == "fail"){
		finished = "failed";
		setFailure();
	}
}

function setReviewMode(varStat){
	$(gameCanvas).hide();
	$(memoryGameHolder).hide();
	$('#gamedesc').hide();
	feedbackRoot.startArea.visible=false;
	feedbackRoot.startArea.instMc.visible=false;
	feedbackRoot.endArea.visible = true;
	
	if(varStat == "success"){
		feedbackRoot.endArea.timeUpMcMain.visible = false;
		feedbackRoot.endArea.gameOverMc.visible = true;
	}else if(varStat == "fail"){
		feedbackRoot.endArea.timeUpMcMain.visible = true;
		feedbackRoot.endArea.gameOverMc.visible = false;
	}
	
	feedbackRoot.endArea.scoreHolder.scoreMc.finalScoreTxt.text = finalScore;
	
	$('#feedbackCanvas').hide();
	$('#feedbackCanvas').show();
	$('#feedbackCanvas').css({
		'z-index':'20',
	});
	feedbackStage.update()
}


function setuptextfields(){
	//Game instructions
	$('#gamedesc').attr('rows', 8)
    $('#gamedesc').attr('cols', 37)
    $('#gamedesc').css({
        zIndex: 25,
        left: (85* scalePercentagew) + "px",
        top: (160*scalePercentageh) + "px",
		width: 470 + "px",
        height: 182 + "px",
        backgroundColor: 'transparent',
    	textAlign: 'Left',
		lineHeight: '160%',
		overflow: 'auto',
		"overflow-x": 'hidden',
    });
	$('#gamedesc').html(gameInstructions); 
	$('#gamedesc').disableTextSelect();
	$('#gamedesc').mouseover(function(e) {
        e.target.style.cursor = "default";
    });
	$('#gamedesc').show();
}

var totalScore = 0;
var totalGameTime;
function setScoreAndTime(){
	for(i=0; i<card1Array.length; i++){
		totalScore =  totalScore+parseInt(card1Array[i].score);
	}
	gameRoot.scorePanel.scoreMc.score.text = "0/"+totalScore;
	
	totalGameTime = parseInt(gameTimeMins)*60+parseInt(gameTimeScnds);
	
	var minutehand = String(Math.floor(totalGameTime / 60));
	var sechand = String(totalGameTime % 60);
	if (Number(minutehand) < 10) {
		minutehand="0"+String(minutehand);
	}
	if (Number(sechand) < 10) {
		sechand="0"+String(sechand);
	}
	gameRoot.scorePanel.timeMc.mins.text = minutehand;
	gameRoot.scorePanel.timeMc.scnd.text = sechand;
		
	gameStage.update();
}

function checkForHint(){
	if(getHintSelected == "true"){
		gameRoot.instMc.visible = true;
		gameStage.update();
		hintFlip();
	}else{
		gameRoot.instMc.visible = false;
		gameStage.update();
		startGameTimer(totalGameTime);
	}
}

function hintFlip(){
	gameRoot.instMc.visible = true;
	gameRoot.instMc.hintInst_txt.text = "Memorize the cards shown. Your game will begin in "+getHintDuration+" seconds."
	gameStage.update();
	$(disableCards).css('zIndex',15)
	$(memoryGameHolder).css('zIndex',12)
	var tempCard = $($(memoryGameHolder).find('.flip'))
	$($(tempCard).find('.flip-front')).css({
		'z-index':'5',
		'opacity': '1',
		'-webkit-transform': 'rotateY(180deg)',
		'-moz-transform': 'rotateY(180deg)',
		'-ms-transform': 'rotateY(180deg)',
		'-o-transform': 'rotateY(180deg)',
		'transform': 'rotateY(180deg)',
	}); 
	$($(tempCard).find('.flip-back')).css({
		'z-index':'0',
		'opacity': '0',
		'-webkit-transform': 'rotateY(0deg)',
		'-moz-transform': 'rotateY(0deg)',
		'-ms-transform': 'rotateY(0deg)',
		'-o-transform': 'rotateY(0deg)',
		'transform': 'rotateY(0deg)',
	});
	startHintTimer(getHintDuration);
}

function hintReverseFlip(){
	gameRoot.instMc.visible = false;
	gameStage.update();
	$(disableCards).css('zIndex',0)
	$(memoryGameHolder).css('zIndex',12)
	var tempCard = $($(memoryGameHolder).find('.flip'))
	$($(tempCard).find('.flip-front')).css({
		'z-index':'0',
		'opacity': '0',
		'-webkit-transform': 'rotateY(0deg)',
		'-moz-transform': 'rotateY(0deg)',
		'-ms-transform': 'rotateY(0deg)',
		'-o-transform': 'rotateY(0deg)',
		'transform': 'rotateY(0deg)',
	}); 
	$($(tempCard).find('.flip-back')).css({
		'z-index':'5',
		'opacity': '1',
		'-webkit-transform': 'rotateY(-180deg)',
		'-moz-transform': 'rotateY(-180deg)',
		'-ms-transform': 'rotateY(-180deg)',
		'-o-transform': 'rotateY(-180deg)',
		'transform': 'rotateY(-180deg)',
	});
	startGameTimer(totalGameTime);
}

var finalScore = 0 ;
var selectionCounter = 0;
function updateScore(varNum){
	selectionCounter++;
	for(i=0; i<card1Array.length; i++){
		if(varNum == card1Array[i].num){
		finalScore =  finalScore+parseInt(card1Array[i].score);
		}
	}
	if(m_VariableHandle != null){
		m_VariableHandle[VarFScore] = finalScore;
	}
	
	gameRoot.scorePanel.scoreMc.score.text = finalScore+"/"+totalScore;
	gameStage.update();
	
	if(selectionCounter==card1Array.length){
		stopTimer();

		my_shwoFeedBack = setTimeout(function(){showFeedBack("success")},998);
	}
};
function handleMouseOverFeedback(evt) {
	feedbackCanvas.style.cursor = "pointer";
}

function handleMouseOutFeedback(evt) {
	 feedbackCanvas.style.cursor = "default";
}
var gameTimerSet;
function startGameTimer(timeToSet) {
	clearInterval(id);
	gameTimerSet=timeToSet;
	gameTimeid=setInterval(decrementGame,998);
}

function decrementGame() {
	if (gameTimerSet <= 0) {
		clearInterval(gameTimeid);
		showFeedBack("fail");
	} else {
		gameTimerSet=gameTimerSet-1;
		var minutehand = String(Math.floor(gameTimerSet / 60));
		var sechand = String(gameTimerSet % 60);
		if (Number(minutehand) < 10) {
			minutehand="0"+String(minutehand);
		}
		if (Number(sechand) < 10) {
			sechand="0"+String(sechand);
		}

		gameRoot.scorePanel.timeMc.mins.text = minutehand;
		gameRoot.scorePanel.timeMc.scnd.text = sechand;
		gameStage.update();
	}
}

function stopTimer() {
	clearInterval(gameTimeid);
}

function startHintTimer(timeToSet) {
	rem=timeToSet;
	id=setInterval(decrementHint,998);
}

function decrementHint() {
	if (rem <= 0) {
		hintReverseFlip();
	} else {
		rem=rem-1;
		var minutehand = String(Math.floor(rem / 60));
		var sechand = String(rem % 60);
		if (Number(minutehand) < 10) {
			minutehand="0"+String(minutehand);
		}
		if (Number(sechand) < 10) {
			sechand="0"+String(sechand);
		}
		gameRoot.instMc.hintInst_txt.text = "Memorize the cards shown. Your game will begin in "+sechand+" seconds."
		gameStage.update();
	}
}

function clearAllBorders(exportRootHere, varStat){
	if(varStat == "imgcardfront"){
		for(i=1;i<=6;i++){
			exportRootHere.imgCard.borders_mc["bordermc"+i].visible =false;
		}
	}else if(varStat == "cardback"){
		for(i=1;i<=6;i++){
			exportRootHere.cardBackMc.backmc.borders_mc["bordermc"+i].visible =false;
		}
	}else if(varStat == "txtcardfront"){
		for(i=1;i<=6;i++){
			exportRootHere.txtCard.borders_mc["bordermc"+i].visible =false;
		}
	}
}

function setSuccess() {
	var lInteractiveWidgetHandle = lcap.CPMovieHandle.getInteractiveWidgetHandle();
   	lInteractiveWidgetHandle.setSuccess(true);
}

function setFailure() {
	var lInteractiveWidgetHandle = lcap.CPMovieHandle.getInteractiveWidgetHandle();
   	lInteractiveWidgetHandle.setSuccess(false);
}


function updateSizeNPositionOnResizeComplete(){
	resizeInteraction(width,height);
}