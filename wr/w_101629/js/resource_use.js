var movieWidth;
var movieHeight;
var scalePercentagew;
var scalePercentageh;
var lcap;
var totalQuestions;
var finalScore = 0;
var quesNum = 0;
var selectedAns;
var correctAns;
var selectedOptMovie;
var correctOptMovie;
var selectedTab;
var swapListArray;
var lifelineselected;
var swappedQuestion;
var feedbackcanvas, feedbackstage, feedbackmc;
var gamecanvas, gamestage, gamemc;
var n_rows, n_cols, GameTitle, GameDescription, datastring, dataXML;
var showtimeforquestion, showfiftyfifty, showhint, showswap, startbgtransparent, showcorans, startbghex, endbghex, questionbghex, questionfonthex, crctbghex, crctfonthex, optionsbghex, optionsfonthex, wrngbghex, wrngfonthex, hintbghex, hintfonthex, gameDescfonthex, instbghex, instfonthex, titlefonthex, mainBghex;
var questionsArray,	answersArray, correctArray,	scoreArray,	timeArray, hintArray, correctFeedbackArray, wrongFeedbackArray, swapQuestionsArray, swapAnswersArray, swapCorrectArray, swapScoreArray, swapTimeArray, swapHintArray, swapCorrectFeedbackArray, swapWrongFeedbackArray;

var gameMode;
var elem;
var rem;
var timerid;
var selI;
var selJ;
var totalscore = 0;
var atleastoneselected = 0;
var topichex, gamehex, cellhex;
var valueset = 0;
var id;
var finished = "notdone";
var currencysymbol = "";
window.quizscope = 0;
var width
var height
var no_of_attempts;
var no_of_tries;
var finishedarray
var handle;
var pos1,pos2,pos3;
var VarFScore;
var SystemIsMac;

//Adding new vars for localization
var ID_PlayNow;
var ID_fiftyfifty
var ID_LockAnswer
var ID_Hint
var ID_Swap
var ID_GameOver
var ID_TimeUp
var ID_Congratulations
var ID_Youhavewon
var ID_Areyousure
var ID_Yes
var ID_No

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
		
		no_of_attempts = this.captivate.CPMovieHandle.getCPQuestionData().maxAttempts
		
		if(no_of_attempts == -1){
			no_of_attempts = 1
		}
		no_of_tries = this.captivate.CPMovieHandle.getCPQuestionData().numTries
		
        this.movieProps = this.captivate.CPMovieHandle.getMovieProps();
        if (!this.movieProps) return;
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
		
        this.updateData();
        this.doUpdate();
		
		//Captivate Event listener
		evtHandle.addEventListener(mainCPNamespace.WINDOWRESIZECOMPLETEDEVENT,updateSizeNPositionOnResizeComplete, false );
		evtHandle.addEventListener(mainCPNamespace.ORIENTATIONCHANGECOMPLETEDEVENT,updateSizeNPositionOnResizeComplete, false );
		
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
        var btnElement = document.getElementById('feedbackcanvas');
        btnElement.disabled = false;
    },
    //To be implemented by a QUESTION WIDGET to be part of Captivate's Quizzing framework
    disable: function (){
        var btnElement = document.getElementById('feedbackcanvas');
        btnElement.disabled = 'disabled';
    },
    //Captivate App will not recognize a Question Widget unless this function is implemented and returns true
    getInteractionQuestionState: function (){
        var lResult_Str = finished + ":quiz";
		//Append with quesNum
		lResult_Str =  lResult_Str+":"+quesNum;
		
		//Append with selection made by learner
		lResult_Str =  lResult_Str+":"+selectedAns;
	
		//Append with correct made by learner
		lResult_Str =  lResult_Str+":"+correctAns;
		
		//Append with final score
		lResult_Str =  lResult_Str+":"+finalScore;
		
		//Append Swapped question num
		lResult_Str =  lResult_Str+":"+swappedQuestion;
		
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
            myWidgetiFrame.style.height = movieWidth + "px";
            myWidgetiFrame.style.width = movieWidth + "px";
        }
        var id = 0;
        var result = jQuery.parseXML(this.xmlStr);
        var resultDoc = jQuery(result);
        var strProp = resultDoc.find('string').text();
		
		//BREAKING UP THE XML FROM CAPTIVATE
		//Get game name
		var gamename = resultDoc.find('#gamename');
        if (gamename){
            if (gamename.find('string')){
                GameTitle = gamename.find('string').text();
            }
        }
		
		//Get instructions for the game
        var gamedesc = resultDoc.find('#gameinstruction');
        if (gamedesc){
            if (gamedesc.find('string')){
                GameDescription = gamedesc.find('string').text();
            }
        }
		
		//Get total number of questions
		var gettotalQuestions = resultDoc.find('#totQuestions');
        if (gettotalQuestions){
            if (gettotalQuestions.find('string')){
                totalQuestions= gettotalQuestions.find('string').text();
            }
        }
		
		//Get the currency symbol	
		var curr = resultDoc.find('#currencysymbol');
        if (curr){
            if (curr.find('string')){
                currencysymbol = curr.find('string').text();
            }
        }
        
		//Should question time be shown
		var showtimeforquest = resultDoc.find('#showtime');
		if (showtimeforquest){
            if (showtimeforquest.find('string')){
                showtimeforquestion = showtimeforquest.find('string').text();
            }
        }
		
		//LIFELINES
		//check fifty fifty
		var checkfifty = resultDoc.find('#fiftyfifty');
		if (checkfifty){
            if (checkfifty.find('string')){
                showfiftyfifty = checkfifty.find('string').text();
            }
        }
		//Check hint
		var checkhint = resultDoc.find('#hint');
		if (checkhint){
            if (checkhint.find('string')){
                showhint = checkhint.find('string').text();
            }
        }
		//Check swap
		var checkswap = resultDoc.find('#swap');
		if (checkswap){
            if (checkswap.find('string')){
                showswap = checkswap.find('string').text();
            }
        }
		
		//EXTRAS
		//Check transperency of bg
		var checkbgtrans = resultDoc.find('#startBgTransparent');
		if (checkbgtrans){
            if (checkbgtrans.find('string')){
                startbgtransparent = checkbgtrans.find('string').text();
            }
        }
		
		//Check if correct ans needs to be displayed when answered incorrectly
		var checkcoransdis = resultDoc.find('#showcorrectans');
		if (checkcoransdis){
            if (checkcoransdis.find('string')){
                showcorans = checkcoransdis.find('string').text();
            }
        }
		
		//Check if correct ans needs to be displayed when answered incorrectly
		var checkshowfeedback = resultDoc.find('#feedback');
		if (checkshowfeedback){
            if (checkshowfeedback.find('string')){
                showfeedback = checkshowfeedback.find('string').text();
            }
        }
		
		//GET ALL COLOR SETTINGS
		//Main bg Hex
		var getmainBghex = resultDoc.find('#mainBghex');
        if (getmainBghex){
            if (getmainBghex.find('string')){
                mainBghex = '#' + getmainBghex.find('string').text();
            }
        }
		
		//Font color for title
        var gettitlefonthex = resultDoc.find('#titleFonthex');
        if (gettitlefonthex){
            if (gettitlefonthex.find('string')){
                titlefonthex = '#' + gettitlefonthex.find('string').text();
            }
        }
		
		//Font color for title
        var getgameDescfonthex = resultDoc.find('#instrFonthex');
        if (getgameDescfonthex){
            if (getgameDescfonthex.find('string')){
                gameDescfonthex = '#' + getgameDescfonthex.find('string').text();
            }
        }
		
		//Bg color for question panel
		var getquestionbghex = resultDoc.find('#questionBghex');
        if (getquestionbghex){
            if (getquestionbghex.find('string')){
                questionbghex = '#' + getquestionbghex.find('string').text();
            }
        } 
		
		//Font color for question
		var getquestionfonthex = resultDoc.find('#questionFonthex');
        if (getquestionfonthex){
            if (getquestionfonthex.find('string')){
                questionfonthex = '#' + getquestionfonthex.find('string').text();
            }
        }
		
		//Bg color for options panel
		var getoptionsbghex = resultDoc.find('#optionsBghex');
        if (getoptionsbghex){
            if (getoptionsbghex.find('string')){
                optionsbghex = '#' + getoptionsbghex.find('string').text();
            }
        }
		
		//Font color for options
		var getoptionsfonthex = resultDoc.find('#optionsFonthex');
        if (getoptionsfonthex){
            if (getoptionsfonthex.find('string')){
                optionsfonthex = '#' + getoptionsfonthex.find('string').text();
            }
        }
		
		//Bg color for start screen
		var getstartbghex = resultDoc.find('#startBghex');
        if (getstartbghex){
            if (getstartbghex.find('string')){
                startbghex = '#' + getstartbghex.find('string').text();
            }
        }
		
		//Bg color for End screen
		var getendbghex = resultDoc.find('#endBghex');
        if (getendbghex){
            if (getendbghex.find('string')){
                endbghex = '#' + getendbghex.find('string').text();
            }
        }
		
		//Bg color for crct panel
		var getcrctbghex = resultDoc.find('#crctBghex');
        if (getcrctbghex){
            if (getcrctbghex.find('string')){
                crctbghex = '#' + getcrctbghex.find('string').text();
            }
        }
		
		//Font color for crct
		var getcrctfonthex = resultDoc.find('#crctFonthex');
        if (getcrctfonthex){
            if (getcrctfonthex.find('string')){
                crctfonthex = '#' + getcrctfonthex.find('string').text();
            }
        }
		
		//Bg color for wrng panel
		var getwrngbghex = resultDoc.find('#wrngBghex');
        if (getwrngbghex){
            if (getwrngbghex.find('string')){
                wrngbghex = '#' + getwrngbghex.find('string').text();
            }
        }
		
		//Font color for crct
		var getwrngfonthex = resultDoc.find('#wrngFonthex');
        if (getwrngfonthex){
            if (getwrngfonthex.find('string')){
                wrngfonthex = '#' + getwrngfonthex.find('string').text();
            }
        }
		
		//Bg color for hint panel
		var gethintbghex = resultDoc.find('#hintBghex');
        if (gethintbghex){
            if (gethintbghex.find('string')){
                hintbghex = '#' + gethintbghex.find('string').text();
            }
        }
		
		//Font color for hint
		var gethintfonthex = resultDoc.find('#hintFonthex');
        if (gethintfonthex){
            if (gethintfonthex.find('string')){
                hintfonthex = '#' + gethintfonthex.find('string').text();
            }
        }
		
		//Bg color for inst panel
		var getinstbghex = resultDoc.find('#instBghex');
        if (getinstbghex){
            if (getinstbghex.find('string')){
                instbghex = '#' + getinstbghex.find('string').text();
            }
        }
		
		//Font color for inst
		var getinstfonthex = resultDoc.find('#instFonthex');
        if (getinstfonthex){
            if (getinstfonthex.find('string')){
                instfonthex = '#' + getinstfonthex.find('string').text();
            }
        }
		
		//Get Variable details
		var varFscr = resultDoc.find('#varfscore');
        if (varFscr)
        {
            if (varFscr.find('string'))
            {
                VarFScore = varFscr.find('string').text();
            }
        }
		
		//Adding new lines of code for Localization
	
		var ID_PlayNow_Str = resultDoc.find('#IdPlayNow');
        if (ID_PlayNow_Str){
            if (ID_PlayNow_Str.find('string')){
                ID_PlayNow = ID_PlayNow_Str.find('string').text();
            }
        }
		var ID_fiftyfifty_Str = resultDoc.find('#Idfiftyfifty');
        if (ID_fiftyfifty_Str){
            if (ID_fiftyfifty_Str.find('string')){
                ID_fiftyfifty = ID_fiftyfifty_Str.find('string').text();
            }
        }
		var ID_LockAnswer_Str = resultDoc.find('#IdLockAnswer');
        if (ID_LockAnswer_Str){
            if (ID_LockAnswer_Str.find('string')){
                ID_LockAnswer = ID_LockAnswer_Str.find('string').text();
            }
        }
		var ID_Hint_Str = resultDoc.find('#IdHint');
        if (ID_Hint_Str){
            if (ID_Hint_Str.find('string')){
                ID_Hint = ID_Hint_Str.find('string').text();
            }
        }
		var ID_Swap_Str = resultDoc.find('#IdSwap');
        if (ID_Swap_Str){
            if (ID_Swap_Str.find('string')){
                ID_Swap = ID_Swap_Str.find('string').text();
            }
        }
		var ID_GameOver_Str = resultDoc.find('#IdGameOver');
        if (ID_GameOver_Str){
            if (ID_GameOver_Str.find('string')){
                ID_GameOver = ID_GameOver_Str.find('string').text();
            }
        }
		var ID_TimeUp_Str = resultDoc.find('#IdTimeUp');
        if (ID_TimeUp_Str){
            if (ID_TimeUp_Str.find('string')){
                ID_TimeUp = ID_TimeUp_Str.find('string').text();
            }
        }
		var ID_Congratulations_Str = resultDoc.find('#endscreenfdbck');
        if (ID_Congratulations_Str){
            if (ID_Congratulations_Str.find('string')){
                ID_Congratulations = ID_Congratulations_Str.find('string').text();
            }
        }
		var ID_Youhavewon_Str = resultDoc.find('#IdYouhavewon');
        if (ID_Youhavewon_Str){
            if (ID_Youhavewon_Str.find('string')){
                ID_Youhavewon = ID_Youhavewon_Str.find('string').text();
            }
        }
		var ID_Areyousure_Str = resultDoc.find('#ID_Areyousure');
        if (ID_Areyousure_Str){
            if (ID_Areyousure_Str.find('string')){
                ID_Areyousure = ID_Areyousure_Str.find('string').text();
            }
        }
		var ID_Yes_Str = resultDoc.find('#ID_Yes');
        if (ID_Yes_Str){
            if (ID_Yes_Str.find('string')){
                ID_Yes = ID_Yes_Str.find('string').text();
            }
        }
		var ID_No_Str = resultDoc.find('#ID_No');
        if (ID_No_Str){
            if (ID_No_Str.find('string')){
                ID_No = ID_No_Str.find('string').text();
            }
        }
        
		//BREAK MAIN XML HOLDING ALL QUESTIONS, OPTIONS AND VALUES
        var buildxml = resultDoc.find('#buildxml');
        if (buildxml){
            if (buildxml.find('string')){
                datastring = buildxml.find('string').text();
            }
        }
		
		datastring = datastring.split("\n").join("&#10;");
		
        var data = jQuery.parseXML(datastring);
        dataXML = jQuery(data);
		$('#gamecanvas').hide();
		$('#feedbackcanvas').hide();
		$('#crctokbtn').hide();
		$('#wrngokbtn').hide();
		$('#yesbtn').hide();
		$('#nobtn').hide();
    },
    doUpdate: function (){
        elem = document.getElementById('feedbackcanvas');
        elem = null;
        resizeInteraction(width, height);
    },
	
};
resource_use = function (){
	
	//Check if the browser is Safari on Mac only to toggle the YES NO Button Positions
	SystemIsMac = ( navigator.platform.match(/(iPad|iPhone|Mac)/g) ? true : false );
    return resourceUse1;
}


function checkval(){
	clearInterval(id);
	setUpXMLForAllQuestions();
}

function setUpXMLForAllQuestions() {

	questionsArray = new Array();
	answersArray = new Array();
	correctArray = new Array();
	scoreArray= new Array();
	timeArray= new Array();
	hintArray= new Array();
	correctFeedbackArray= new Array();
	wrongFeedbackArray= new Array();

	swapQuestionsArray = new Array();
	swapAnswersArray = new Array();
	swapCorrectArray = new Array();
	swapScoreArray= new Array();
	swapTimeArray= new Array();
	swapHintArray= new Array();
	swapCorrectFeedbackArray= new Array();
	swapWrongFeedbackArray= new Array();
	
	//$($(dataXML.find('topic')[i]).find('question')[j]).attr("correct");

	var questionPoolLength = $($(dataXML.find('topic')[0])).children().length-1;
	for (i=0; i<3; i++) {
		for (j=0; j<questionPoolLength; j++) {
			questionsArray.push($($($(dataXML.find('topic')[i]).find('question')[j])).attr('title'));
			correctArray.push($($($(dataXML.find('topic')[i]).find('question')[j])).attr('correct'));
			scoreArray.push($($($(dataXML.find('topic')[i]).find('question')[j])).attr('score'));
			timeArray.push($($($(dataXML.find('topic')[i]).find('question')[j])).attr('time'));
			hintArray.push($($($(dataXML.find('topic')[i]).find('question')[j])).attr('hint'));
			correctFeedbackArray.push($($($(dataXML.find('topic')[i]).find('question')[j])).attr('Rfeedback'));
			wrongFeedbackArray.push($($($(dataXML.find('topic')[i]).find('question')[j])).attr('Wfeedback'));

			answerForQuestion = new Array();
			for (k = 0; k < $($($(dataXML.find('topic')[i]).find('question')[j])).children().length; k++) {
				answerForQuestion.push($($($($(dataXML.find('topic')[i]).find('question')[j])).find('option')[k]).text());
			}
			answersArray.push(answerForQuestion);
		}

		//Section to setup Swap options;
		swapQuestionsArray.push($($($(dataXML.find('topic')[i]).find('question')[questionPoolLength])).attr('title'));
		swapCorrectArray.push($($($(dataXML.find('topic')[i]).find('question')[questionPoolLength])).attr('correct'));
		swapScoreArray.push($($($(dataXML.find('topic')[i]).find('question')[questionPoolLength])).attr('score'));
		swapTimeArray.push($($($(dataXML.find('topic')[i]).find('question')[questionPoolLength])).attr('time'));
		swapHintArray.push($($($(dataXML.find('topic')[i]).find('question')[questionPoolLength])).attr('hint'));
		swapCorrectFeedbackArray.push($($($(dataXML.find('topic')[i]).find('question')[questionPoolLength])).attr('Rfeedback'));
		swapWrongFeedbackArray.push($($($(dataXML.find('topic')[i]).find('question')[questionPoolLength])).attr('Wfeedback'));

		swapAnswerForQuestion = new Array();
		for (k = 0; k < $($($(dataXML.find('topic')[i]).find('question')[questionPoolLength])).children().length; k++) {
			swapAnswerForQuestion.push($($($($(dataXML.find('topic')[i]).find('question')[questionPoolLength])).find('option')[k]).text());
		}
		swapAnswersArray.push(swapAnswerForQuestion);
	}
	
	Millionaireinit();
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
	var textscaleleft = 0;
	if (movieWidth < movieHeight){
       textscaleleft = thewidth / (640)
    }else{
       textscaleleft = theheight / (480)
    }
	var holdScale = scale
    var margins = Math.round(25 * scale);
    margins += "px"
    scale = "scale(" + scale + ")";
	var textscalelefttemp = "scale(" + textscaleleft + ")";
    $('#gamedesc').css('-webkit-transform', textscalelefttemp);
    $('#gamedesc').css('-moz-transform', textscalelefttemp);
    $('#gamedesc').css('-o-transform', textscalelefttemp);
    $('#gamedesc').css('-ms-transform', textscalelefttemp);
    $('#gamedesc').css('-webkit-transform-origin', '0 0');
	$('#gamedesc').css('-moz-transform-origin', '0 0');
    $('#gamedesc').css('-o-transform-origin', '0 0');
    $('#gamedesc').css('-ms-transform-origin', '0 0');
	$('#gamedesc').css('-webkit-tap-highlight-color', 'rgba(0,0,0,0)');
	
	$('#gamedesc').css({
        left: (115 * textscaleleft) + "px",
        top: (250 * textscaleleft) + "px",
    }); 
	
	$('#crctanstext').css('-webkit-transform', textscalelefttemp);
	$('#crctanstext').css('-moz-transform', textscalelefttemp);
	$('#crctanstext').css('-o-transform', textscalelefttemp);
	$('#crctanstext').css('-ms-transform', textscalelefttemp);
	$('#crctanstext').css('-webkit-transform-origin', '0 0');
	$('#crctanstext').css('-moz-transform-origin', '0 0');
	$('#crctanstext').css('-o-transform-origin', '0 0');
	$('#crctanstext').css('-ms-transform-origin', '0 0');
	$('#crctanstext').css('-webkit-tap-highlight-color', 'rgba(0,0,0,0)');
	
	$('#crctanstext').css({
        left: (135 * textscaleleft)+ "px",
        top: (180 * textscaleleft) + "px",
    }); 
	
	$('#wrnganstext').css('-webkit-transform', textscalelefttemp);
	$('#wrnganstext').css('-moz-transform', textscalelefttemp);
	$('#wrnganstext').css('-o-transform', textscalelefttemp);
	$('#wrnganstext').css('-ms-transform', textscalelefttemp);
	$('#wrnganstext').css('-webkit-transform-origin', '0 0');
	$('#wrnganstext').css('-moz-transform-origin', '0 0');
	$('#wrnganstext').css('-o-transform-origin', '0 0');
	$('#wrnganstext').css('-ms-transform-origin', '0 0');
	$('#wrnganstext').css('-webkit-tap-highlight-color', 'rgba(0,0,0,0)');
	
	//Wrong feedback
	$('#wrnganstext').css({
        left: (135 * textscaleleft) + "px",
        top: (180 * textscaleleft) + "px",
    });
	
	$('#hinttext').css('-webkit-transform', textscalelefttemp);
	$('#hinttext').css('-moz-transform', textscalelefttemp);
	$('#hinttext').css('-o-transform', textscalelefttemp);
	$('#hinttext').css('-ms-transform', textscalelefttemp);
	$('#hinttext').css('-webkit-transform-origin', '0 0');
	$('#hinttext').css('-moz-transform-origin', '0 0');
	$('#hinttext').css('-o-transform-origin', '0 0');
	$('#hinttext').css('-ms-transform-origin', '0 0');
	$('#hinttext').css('-webkit-tap-highlight-color', 'rgba(0,0,0,0)');
	
	//Hint Text
    $('#hinttext').css({
        left: (115 * textscaleleft)+ "px",
        top: (185 * textscaleleft) + "px",
    }); 
   
    $('#crctokbtn').css('-webkit-transform', textscalelefttemp);
	$('#crctokbtn').css('-moz-transform', textscalelefttemp);
	$('#crctokbtn').css('-o-transform', textscalelefttemp);
	$('#crctokbtn').css('-ms-transform', textscalelefttemp);
	$('#crctokbtn').css('-webkit-transform-origin', '0 0');
	$('#crctokbtn').css('-moz-transform-origin', '0 0');
	$('#crctokbtn').css('-o-transform-origin', '0 0');
	$('#crctokbtn').css('-ms-transform-origin', '0 0');
	$('#crctokbtn').css('-webkit-tap-highlight-color', 'rgba(0,0,0,0)');
	
	$('#crctokbtn').css({
        left: (290 * textscaleleft)+ "px",
        top: (275* textscaleleft) + "px",
    }); 
	
	$('#wrngokbtn').css('-webkit-transform', textscalelefttemp);
	$('#wrngokbtn').css('-moz-transform', textscalelefttemp);
	$('#wrngokbtn').css('-o-transform', textscalelefttemp);
	$('#wrngokbtn').css('-ms-transform', textscalelefttemp);
	$('#wrngokbtn').css('-webkit-transform-origin', '0 0');
	$('#wrngokbtn').css('-moz-transform-origin', '0 0');
	$('#wrngokbtn').css('-o-transform-origin', '0 0');
	$('#wrngokbtn').css('-ms-transform-origin', '0 0');
	$('#wrngokbtn').css('-webkit-tap-highlight-color', 'rgba(0,0,0,0)');
	
	$('#wrngokbtn').css({
        left: (290 * textscaleleft)+ "px",
        top: (275* textscaleleft) + "px",
    }); 
	
	$('#yesbtn').css('-webkit-transform', textscalelefttemp);
	$('#yesbtn').css('-moz-transform', textscalelefttemp);
	$('#yesbtn').css('-o-transform', textscalelefttemp);
	$('#yesbtn').css('-ms-transform', textscalelefttemp);
	$('#yesbtn').css('-webkit-transform-origin', '0 0');
	$('#yesbtn').css('-moz-transform-origin', '0 0');
	$('#yesbtn').css('-o-transform-origin', '0 0');
	$('#yesbtn').css('-ms-transform-origin', '0 0');
	$('#yesbtn').css('-webkit-tap-highlight-color', 'rgba(0,0,0,0)');
	
	$('#nobtn').css('-webkit-transform', textscalelefttemp);
	$('#nobtn').css('-moz-transform', textscalelefttemp);
	$('#nobtn').css('-o-transform', textscalelefttemp);
	$('#nobtn').css('-ms-transform', textscalelefttemp);
	$('#nobtn').css('-webkit-tap-highlight-color', 'rgba(0,0,0,0)');
	$('#nobtn').css('-webkit-transform-origin', '0 0');
	$('#nobtn').css('-moz-transform-origin', '0 0');
	$('#nobtn').css('-o-transform-origin', '0 0');
	$('#nobtn').css('-ms-transform-origin', '0 0');
	$('#nobtn').css('-webkit-tap-highlight-color', 'rgba(0,0,0,0)');
	
	if(SystemIsMac){
		//Toggle Positions for YES NO Buttons
		//Yes btn for instructions
		$('#yesbtn').css({
			left: (300* textscaleleft)+ "px",
			top: (235* textscaleleft) + "px",
		}); 
		
		//No btn for instructions
		$('#nobtn').css({
			left: (230 * textscaleleft)+ "px",
			top: (235* textscaleleft) + "px",
		}); 
	}else{
		//Yes btn for instructions
		$('#yesbtn').css({
			left: (230 * textscaleleft)+ "px",
			top: (235* textscaleleft) + "px",
		}); 
		
		//No btn for instructions
		$('#nobtn').css({
			left: (300 * textscaleleft)+ "px",
			top: (235* textscaleleft) + "px",
		}); 
	}
	
	$('#timertext').css('-webkit-transform', textscalelefttemp);
	$('#timertext').css('-moz-transform', textscalelefttemp);
	$('#timertext').css('-o-transform', textscalelefttemp);
	$('#timertext').css('-ms-transform', textscalelefttemp);
	$('#timertext').css('-webkit-transform-origin', '0 0');
	$('#timertext').css('-moz-transform-origin', '0 0');
	$('#timertext').css('-o-transform-origin', '0 0');
	$('#timertext').css('-ms-transform-origin', '0 0');
	$('#timertext').css('-webkit-tap-highlight-color', 'rgba(0,0,0,0)');
	
	$('#timertext').css({
        left: (335 * textscaleleft)+ "px",
        top: (25 * textscaleleft) + "px",
    }); 
	
	$('#questiontext').css('-webkit-transform', textscalelefttemp);
    $('#questiontext').css('-moz-transform', textscalelefttemp);
    $('#questiontext').css('-o-transform', textscalelefttemp);
    $('#questiontext').css('-ms-transform', textscalelefttemp);
    $('#questiontext').css('-webkit-transform-origin', '0 0');
    $('#questiontext').css('-moz-transform-origin', '0 0');
    $('#questiontext').css('-o-transform-origin', '0 0');
    $('#questiontext').css('-ms-transform-origin', '0 0');
	$('#questiontext').css('-webkit-tap-highlight-color', 'rgba(0,0,0,0)');
	
	for (var m = 1; m <= 4; m++){
        $('#opt' + m ).css('-webkit-transform', textscalelefttemp);
        $('#opt' + m ).css('-moz-transform', textscalelefttemp);
        $('#opt' + m ).css('-o-transform', textscalelefttemp);
        $('#opt' + m ).css('-ms-transform', textscalelefttemp);
        $('#opt' + m ).css('-webkit-transform-origin', '0 0');
        $('#opt' + m ).css('-moz-transform-origin', '0 0');
        $('#opt' + m ).css('-o-transform-origin', '0 0');
        $('#opt' + m ).css('-ms-transform-origin', '0 0');
		$('#opt' + m ).css('-webkit-tap-highlight-color', 'rgba(0,0,0,0)');
	 }
	 
	 $('#questiontext').css({
        left: (35 * textscaleleft)+ "px",
		top: (90 * textscaleleft) + "px",
    })
	
	//options
	//position option1
	$('#opt1').css({
		top: (280 * textscaleleft) + "px",
		left: (35 * textscaleleft) + "px",
	})
	
	//position option2
	$('#opt2').css({
		top: (280 * textscaleleft) + "px",
		left: (238 * textscaleleft) + "px",
	})
	
	//position option3
	$('#opt3').css({
		top: (350 * textscaleleft) + "px",
		left: (35 * textscaleleft) + "px",
	})
	
	//position option4
	$('#opt4').css({
		top: (350 * textscaleleft) + "px",
		left: (238 * textscaleleft) + "px",
	})
	 
	$('#feedbackcanvas').css('-webkit-transform', scale);
    $('#feedbackcanvas').css('-moz-transform', scale);
    $('#feedbackcanvas').css('-o-transform', scale);
    $('#feedbackcanvas').css('-ms-transform', scale);
    $('#feedbackcanvas').css('-webkit-transform-origin', '0 0');
	$('#feedbackcanvas').css('-moz-transform-origin', '0 0');
    $('#feedbackcanvas').css('-o-transform-origin', '0 0');
    $('#feedbackcanvas').css('-ms-transform-origin', '0 0');
	$('#feedbackcanvas').css('-webkit-tap-highlight-color', 'rgba(0,0,0,0)');
	
	$('#gamecanvas').css('-webkit-transform', scale);
    $('#gamecanvas').css('-moz-transform', scale);
    $('#gamecanvas').css('-o-transform', scale);
    $('#gamecanvas').css('-ms-transform', scale);
    $('#gamecanvas').css('-webkit-transform-origin', '0 0');
	$('#gamecanvas').css('-moz-transform-origin', '0 0');
    $('#gamecanvas').css('-o-transform-origin', '0 0');
    $('#gamecanvas').css('-ms-transform-origin', '0 0');
	$('#gamecanvas').css('-webkit-tap-highlight-color', 'rgba(0,0,0,0)');
}
var scaleDiffw;
var scaleDiffh;

function Millionaireinit() {
	gamecanvas = document.getElementById("gamecanvas");
	gamecanvas.width = movieWidth;
    gamecanvas.height = movieHeight;
	
	gamemc = new lib.MillionaireGame(mainBghex,titlefonthex,questionbghex,optionsbghex,totalQuestions,currencysymbol,scoreArray,hintbghex,hintfonthex);
	gamemc.scaleX = movieWidth / 640;
    gamemc.scaleY = movieHeight / 480;
	
	gamestage = new createjs.Stage(gamecanvas);
	gamestage.addChild(gamemc);
	gamemc.visible =false;
	gamestage.update();
	
	feedbackcanvas = document.getElementById("feedbackcanvas");
	feedbackcanvas.width = movieWidth;
    feedbackcanvas.height = movieHeight;
	feedbackmc = new lib.MillionaireFeedback(GameTitle,startbghex,endbghex,crctbghex,crctfonthex,wrngbghex,wrngfonthex,instbghex,instfonthex);
	feedbackmc.scaleX = movieWidth / 640;
    feedbackmc.scaleY = movieHeight / 480;

	gamefeedbackstage = new createjs.Stage(feedbackcanvas);
	gamefeedbackstage.addChild(feedbackmc);
	feedbackmc.visible =false;
	gamefeedbackstage.update();
	
	//Enabling Touch
	createjs.Touch.enable(gamestage);
	createjs.Touch.enable(gamefeedbackstage);
	
	gamestage.enableMouseOver();
	gamefeedbackstage.enableMouseOver();

	createjs.Ticker.setFPS(30);
	createjs.Ticker.addListener(gamestage);
	createjs.Ticker.addListener(gamefeedbackstage);
	
	feedbackmc.runtime.EndScreen.visible=false;
	feedbackmc.runtime.lifelinecheck.visible=false;
	feedbackmc.runtime.crctmc.visible=false;
	feedbackmc.runtime.wrngmc.visible=false;
	gamemc.runtime.hintmc.visible=false;
	
	scalePercentagew = movieWidth / 640;
    scalePercentageh = movieHeight / 480;
	
	scaleDiffw = movieWidth - 640;
    scaleDiffh = movieHeight - 480;
	
	setuptextfields();
	$('#gamecanvas').hide()
	$('#gamecanvas').css('zIndex',-100)
	$('#feedbackcanvas').css('zIndex',10)
	
	if(m_VariableHandle != null){
		m_VariableHandle[VarFScore] = "0";
	}
	
    //hide all html elements
	finishedarray = finished.split(":")
	
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
					setfailuremode();
				} else {
					setnotdonemode();
				}
			} else if (finishedarray[0] == "success") {
				//trace("u r in review mode")
				setsuccessmode();
			} else if (finishedarray[0] == "failuretimeout") {
				setfailuremode();
			}
		}
	
	}
	
	//This fix was implemented for some flicker in IPAD
	gamemc.visible =true;
	feedbackmc.visible =true;
}

function setuptextfields(){
	//Game instructions
	$('#gamedesc').attr('rows', 8)
    $('#gamedesc').attr('cols', 37)
    $('#gamedesc').css({
        zIndex: 25,
        left: (230* scalePercentagew)/2 + "px",
        top: (250*scalePercentageh) + "px",
		width: 415 + "px",
        height: 132 + "px",
		color:gameDescfonthex,
        backgroundColor: 'transparent',
    	textAlign: 'Left',
		overflow: 'auto',
		"overflow-x": 'hidden',
    }); 
	$('#gamedesc').disableTextSelect();
	$('#gamedesc').mouseover(function(e) {
        e.target.style.cursor = "default";
    });
	$('#gamedesc').hide();
	
	// Question panel
	$('#questiontext').css({
        zIndex: 5,
        left: (70 * scalePercentagew)/2+ "px",
		top: 90* scalePercentageh + "px",
        width: 370 + "px",
        height: 145 + "px",
        background: 'none',
		overflow: 'auto',
		"overflow-x": 'hidden',
		color:questionfonthex,
    }).hide();
	$('#questiontext').disableTextSelect();
	
	//options
	//position option1
	$('#opt1').css({
		zIndex: 5,
		top: (280 * scalePercentageh) + "px",
		left: (35 * scalePercentagew) + "px",
		width: 170 + "px",
		height: 44 + "px",
		background: 'none',
		overflow: 'auto',
		"overflow-x": 'hidden',
		color: optionsfonthex,
	}).hide();
	$('#opt1').disableTextSelect();
	$('#opt1').mouseover(showhandoveroptions);
	$('#opt1').mouseout(removehandoveroptions);
	$('#opt1').click(checkoption);
	
	//position option2
	$('#opt2').css({
		zIndex: 5,
		top: (280 * scalePercentageh) + "px",
		left: (238 * scalePercentagew) + "px",
		width: 170 + "px",
		height: 44 + "px",
		background: 'none',
		overflow: 'auto',
		"overflow-x": 'hidden',
		color: optionsfonthex,
	}).hide();
	$('#opt2').disableTextSelect();
	$('#opt2').mouseover(showhandoveroptions);
	$('#opt2').mouseout(removehandoveroptions);
	$('#opt2').click(checkoption);
	
	//position option3
	$('#opt3').css({
		zIndex: 5,
		top: (350 * scalePercentageh) + "px",
		left: (35 * scalePercentagew) + "px",
		width: 170 + "px",
		height: 44 + "px",
		background: 'none',
		overflow: 'auto',
		"overflow-x": 'hidden',
		color: optionsfonthex,
	}).hide();
	$('#opt3').disableTextSelect();
	$('#opt3').mouseover(showhandoveroptions);
	$('#opt3').mouseout(removehandoveroptions);
	$('#opt3').click(checkoption);
	
	//position option4
	$('#opt4').css({
		zIndex: 5,
		top: (350 * scalePercentageh) + "px",
		left: (238 * scalePercentagew) + "px",
		width: 170 + "px",
		height: 44 + "px",
		background: 'none',
		overflow: 'auto',
		"overflow-x": 'hidden',
		color: optionsfonthex,
	}).hide();
	$('#opt4').disableTextSelect();
	$('#opt4').mouseover(showhandoveroptions);
	$('#opt4').mouseout(removehandoveroptions);
	$('#opt4').click(checkoption);
	
	// Correct Feedback
    $('#crctanstext').css({
        zIndex: 25,
        left: (270 * scalePercentagew)/2+ "px",
        top: 180* scalePercentageh + "px",
		width: 370 + "px",
        height: 90 + "px",
        backgroundColor: 'transparent',
    	textAlign: 'Left',
		overflow: 'auto',
		"overflow-x": 'hidden',
		color: crctfonthex,
    }); 
	$('#crctanstext').disableTextSelect();
	$('#crctanstext').mouseover(function(e) {
        e.target.style.cursor = "default";
    });
	$('#crctanstext').hide();
	
	//Wrong feedback
	$('#wrnganstext').css({
        zIndex: 25,
        left: (270 * scalePercentagew)/2+ "px",
        top: 180* scalePercentageh + "px",
		width: 380 + "px",
        height: 135 + "px",
        backgroundColor: 'transparent',
    	textAlign: 'Left',
		overflow: 'auto',
		"overflow-x": 'hidden',
		color: wrngfonthex,
    }); 
	$('#wrnganstext').disableTextSelect();
	$('#wrnganstext').mouseover(function(e) {
        e.target.style.cursor = "default";
    });
	$('#wrnganstext').hide();
	
	//Hint Text
    $('#hinttext').css({
        zIndex: 25,
        left: (230 * scalePercentagew)/2+ "px",
        top: 185* scalePercentageh + "px",
		width: 220 + "px",
        height: 55 + "px",
        backgroundColor: 'transparent',
    	textAlign: 'Left',
		overflow: 'auto',
		"overflow-x": 'hidden',
    }); 
	$('#hinttext').disableTextSelect();
	$('#hinttext').mouseover(function(e) {
        e.target.style.cursor = "default";
    });
	$('#hinttext').hide();
	
	//Crct OK btn for feedback
	$('#crctokbtn').css({
        zIndex: 25,
        left: (580 * scalePercentagew)/2+ "px",
        top: 275* scalePercentageh + "px",
		width: 50 + "px",
        height: 25 + "px",
    	textAlign: 'Center',
		overflow: 'auto',
		"overflow-x": 'hidden',
    }); 
	$('#crctokbtn').disableTextSelect();
	$('#crctokbtn').mouseover(function(e) {
        e.target.style.cursor = "pointer";
    });
	$('#crctokbtn').hide();
	$('#crctokbtn').click(progressCheck);
	
	//Crct OK btn for feedback
	$('#wrngokbtn').css({
        zIndex: 25,
        left: (580 * scalePercentagew)/2+ "px",
        top: 275* scalePercentageh + "px",
		width: 50 + "px",
        height: 25 + "px",
    	textAlign: 'Center',
		overflow: 'auto',
		"overflow-x": 'hidden',
    }); 
	$('#wrngokbtn').disableTextSelect();
	$('#wrngokbtn').mouseover(function(e) {
        e.target.style.cursor = "pointer";
    });
	$('#wrngokbtn').hide();
	$('#wrngokbtn').click(finishGame);
	$('#yesbtn').html(ID_Yes);
	$('#nobtn').html(ID_No);

	if(SystemIsMac){
		//Toggle Positions for YES NO Buttons
		//Yes btn for instructions
		$('#yesbtn').css({
			zIndex: 25,
			left: (600 * scalePercentagew)/2+ "px",
			top: 235* scalePercentageh + "px",
			width: 50 + "px",
			height: 25 + "px",
			textAlign: 'Center',
			overflow: 'auto',
			"overflow-x": 'hidden',
		}); 
		$('#yesbtn').disableTextSelect();
		$('#yesbtn').mouseover(function(e) {
			e.target.style.cursor = "pointer";
		});
		$('#yesbtn').hide();
		$('#yesbtn').click(lifelineyes);
		
		//No btn for instructions
		$('#nobtn').css({
			zIndex: 25,
			left: (460 * scalePercentagew)/2+ "px",
			top: 235* scalePercentageh + "px",
			width: 50 + "px",
			height: 25 + "px",
			textAlign: 'Center',
			overflow: 'auto',
			"overflow-x": 'hidden',
		}); 
		$('#nobtn').disableTextSelect();
		$('#nobtn').mouseover(function(e) {
			e.target.style.cursor = "pointer";
		});
		$('#nobtn').hide();
		$('#nobtn').click(lifelineno);
	}else{
		//Yes btn for instructions
		$('#yesbtn').css({
			zIndex: 25,
			left: (460 * scalePercentagew)/2+ "px",
			top: 235* scalePercentageh + "px",
			width: 50 + "px",
			height: 25 + "px",
			textAlign: 'Center',
			overflow: 'auto',
			"overflow-x": 'hidden',
		}); 
		$('#yesbtn').disableTextSelect();
		$('#yesbtn').mouseover(function(e) {
			e.target.style.cursor = "pointer";
		});
		$('#yesbtn').hide();
		$('#yesbtn').click(lifelineyes);
		
		//No btn for instructions
		$('#nobtn').css({
			zIndex: 25,
			left: (600 * scalePercentagew)/2+ "px",
			top: 235* scalePercentageh + "px",
			width: 50 + "px",
			height: 25 + "px",
			textAlign: 'Center',
			overflow: 'auto',
			"overflow-x": 'hidden',
		}); 
		$('#nobtn').disableTextSelect();
		$('#nobtn').mouseover(function(e) {
			e.target.style.cursor = "pointer";
		});
		$('#nobtn').hide();
		$('#nobtn').click(lifelineno);
	}
	
	//Timer text
	$('#timertext').css({
        zIndex: 12,
        left: (670 * scalePercentagew)/2+ "px",
        top: 25* scalePercentageh + "px",
		width: 100 + "px",
        height: 30 + "px",
        backgroundColor: 'transparent',
    	textAlign: 'Center',
		overflow: 'auto',
		"overflow-x": 'hidden',
    }); 
	$('#timertext').text("00:00")
	$('#timertext').disableTextSelect();
	$('#timertext').mouseover(function(e) {
        e.target.style.cursor = "default";
    });
	$('#timertext').hide();
}

function setReviewMode(varStat){
	gameMode = "Review";
	//var lInteractiveWidgetHandle = lcap.CPMovieHandle.getInteractiveWidgetHandle();
	if(varStat == "success"){
		$('#gamedesc').hide();
		feedbackmc.runtime.EndScreen.visible = true;
		finalScore = finishedarray[5];
		gameCompletedReview();
	}
	
	if(varStat == "fail"){
		$('#gamedesc').hide();
		feedbackmc.runtime.StartScreen.visible = false;
		feedbackmc.runtime.EndScreen.visible = true;
		finalScore = finishedarray[5];
		finishGameReview();
	}
}

function setnotdonemode(){
	feedbackmc.runtime.StartScreen.visible = true;
    feedbackmc.runtime.EndScreen.visible = false;
    feedbackmc.runtime.StartScreen.gamestart.onMouseOver = showhand;
    feedbackmc.runtime.StartScreen.gamestart.onMouseOut = removehand;
	feedbackmc.runtime.StartScreen.gamestart.onClick = setupgame;
	$('#gamecanvas').css('zIndex',-100)
	$('#feedbackcanvas').css('zIndex',10)
	$('#gamecanvas').show()
	$('#feedbackcanvas').show()
	$('#gamedesc').html(GameDescription);
	$('#gamedesc').show();
	
	//Make all main game screen items invisible
	gamemc.runtime.titleMc.visible = false;
	gamemc.runtime.submitmc.visible = false;
	gamemc.runtime.subhl_mc.gotoAndStop(0);
	
	gamemc.runtime.questionmc.visible = false;
	for(i=1;i<=4;i++){
		gamemc.runtime["opt_mc"+i].visible = false;
	}
	gamemc.runtime.swap.visible=false;
	gamemc.runtime.hint.visible=false;
	gamemc.runtime.fifty.visible=false;
	
	gamemc.runtime.baseMc.visible=false;
	
	for(j=1;j<=totalQuestions;j++){
		gamemc.runtime["tab"+j].visible =false
	}
	
	if(startbgtransparent == "true"){
		gamemc.runtime.mainbase.visible=false;
	}else{
		gamemc.runtime.mainbase.visible=true;
	}
}

function removehand(){
    feedbackcanvas.style.cursor = "default"
}

function showhand(e){
    feedbackcanvas.style.cursor = "pointer"
}

function setupgame(){
	finished = "failed";
	$('#feedbackcanvas').css('zIndex',-100);
	$('#gamedesc').css('zIndex',-100);
	$('#gamecanvas').css('zIndex',10);
	
    $('#gamedesc').hide();
	$('#feedbackcanvas').hide();
    feedbackmc.runtime.StartScreen.visible = false
	
	$('#gamecanvas').show()
	// Game title
	gamemc.runtime.titleMc.visible=true;
	gamemc.runtime.titleMc.titleTxt.txt.text = GameTitle;
	
	var tabLevelsStart = totalQuestions/3;
	swapListArray = new Array();
	swapListArray.push((tabLevelsStart*1)-1,(tabLevelsStart*2)-1,(tabLevelsStart*3)-1);
	
	gamemc.runtime.questionmc.visible = true;
	gamemc.runtime.baseMc.visible=true;
	
	for(j=1;j<=totalQuestions;j++){
		gamemc.runtime["tab"+j].visible =true
	}
	
	resetOptions();
	
	//Submit - lock answer button
	gamemc.runtime.submitmc.visible = false;
	gamemc.runtime.subhl_mc.gotoAndStop(0);
	gamemc.runtime.submitmc.gotoAndStop(0);
	gamemc.runtime.submitmc.onMouseOver = showhandonsubmit;
	gamemc.runtime.submitmc.onMouseOut = removehandonsubmit;
	gamemc.runtime.submitmc.onClick =  validateAnswer;
	gamemc.runtime.submitmc.mouseEnabled=false;
	
	//Lifelines
	gamemc.runtime.swap.visible=true;
	gamemc.runtime.hint.visible=true;
	gamemc.runtime.fifty.visible=true;
	
	gamemc.runtime.swap.gotoAndStop(0);
	gamemc.runtime.hint.gotoAndStop(0);
	gamemc.runtime.fifty.gotoAndStop(0);
	
	gamemc.runtime.swap.name = "swap";
	gamemc.runtime.hint.name = "hint";
	gamemc.runtime.fifty.name = "fifty";
	
	gamemc.runtime.swap.onMouseOver = showhandingame;
	gamemc.runtime.hint.onMouseOver = showhandingame;
	gamemc.runtime.fifty.onMouseOver = showhandingame;
	
	gamemc.runtime.swap.onMouseOut = removehandingame;
	gamemc.runtime.hint.onMouseOut = removehandingame;
	gamemc.runtime.fifty.onMouseOut = removehandingame;
	
	gamemc.runtime.swap.onClick =  swapCheck;
	gamemc.runtime.hint.onClick =  hintCheck;
	gamemc.runtime.fifty.onClick =  fiftyfiftyCheck;
	
	pos1 = gamemc.runtime.fifty.x;
 	pos2 = gamemc.runtime.hint.x;
	pos3 = gamemc.runtime.swap.x;
	
	//Main base
	if(startbgtransparent == "true"){
		gamemc.runtime.mainbase.visible=false;
	}else{
		gamemc.runtime.mainbase.visible=true;
	}
	
	setLifeLines();
	setupQuestion()
}

// LIFE LINES CHECK
function fiftyfiftyCheck(evt) {
	lifelineselected = "fifty";
	resetOptions();
	disableLifeLines();
	disableOptions();
	
	gamemc.runtime.fifty.gotoAndStop(1);
	
	lifelineOpen();
}

function hintCheck() {
	lifelineselected = "hint";
	resetOptions();
	disableLifeLines();
	disableOptions();

	gamemc.runtime.hint.gotoAndStop(1);

	lifelineOpen();
}

function swapCheck() {
	lifelineselected = "swap";
	resetOptions();
	disableLifeLines();
	disableOptions();

	gamemc.runtime.swap.gotoAndStop(1);

	lifelineOpen();
}
function lifelineOpen() {
	pauseTimer();
	if (gamemc.runtime.hintmc.currentFrame!=0) {
		closehint();
	} else {
		gamemc.runtime.hintmc.gotoAndStop(0);
	}
	$('#feedbackcanvas').css('zIndex',20);
	$('#gamecanvas').css('zIndex',-100);
	$('#feedbackcanvas').show();
	$('#yesbtn').show();
	$('#nobtn').show();
	feedbackmc.runtime.lifelinecheck.visible=true;
}

function lifelineClose() {
	$('#feedbackcanvas').css('zIndex',-100);
	$('#gamecanvas').css('zIndex',10);
	$('#feedbackcanvas').hide();
	$('#yesbtn').hide();
	$('#nobtn').hide();
	feedbackmc.runtime.lifelinecheck.visible=false;
}

function lifelineyes(evt) {
	//Handle Lifeline check panel
	if(lifelineselected == "fifty"){
		//Handle Lifeline check panel
		enableLifeLines();
		enableOptions();
	
		lifelineClose();
	
		//Handle fifty fifty ;
		gamemc.runtime.fifty.alpha=0.2;
		gamemc.runtime.fifty.mouseEnabled=false;
	
		resetOptions();
		getFiftyArray = new Array();
		getRandomNumbers();
		if (showtimeforquestion == "true") {
			continueTimer();
		}
	}else if(lifelineselected == "hint") {
		//Handle Lifeline check panel
		enableLifeLines();
		enableOptionsHintCheck();
	
		lifelineClose();
	
		//Handle hint ;
		gamemc.runtime.hint.alpha=0.2;
		gamemc.runtime.hint.mouseEnabled=false;
	
		gamemc.runtime.hintmc.gotoAndStop(2);
		gamemc.runtime.hintmc.visible=true;
		gamemc.runtime.hintmc.hintBase.visible=true;
		gamemc.runtime.hintmc.closeBtn.onMouseOver = showhandingame;
		gamemc.runtime.hintmc.closeBtn.onMouseOut = removehandingame;
		gamemc.runtime.hintmc.closeBtn.onClick = closehint;
		$('#hinttext').show();
		$('#questiontext').css({
			height: 55 + "px",
			overflow: 'auto',
			"overflow-x": 'hidden',
		})

		if (showtimeforquestion == "true") {
			continueTimer();
		}
	}else if(lifelineselected == "swap"){
		//Handle Lifeline check panel
		enableLifeLines();
		enableOptionsHintCheck();
	
		lifelineClose();
	
		//Handle Swap ;
		gamemc.runtime.swap.alpha=0.2;
		gamemc.runtime.swap.mouseEnabled=false;
	
		//Set up swap Question;
		setSwapQuestion();
	}
}

function closehint(){
	$('#hinttext').hide();
	$('#questiontext').css({
		height: 145 + "px",
		overflow: 'auto',
		"overflow-x": 'hidden',
	})
	gamemc.runtime.hintmc.gotoAndStop(1);
	gamemc.runtime.hintmc.openBtn.onMouseOver = showhandingame;
	gamemc.runtime.hintmc.openBtn.onMouseOut = removehandingame;
	gamemc.runtime.hintmc.openBtn.onClick = openhint;
	gamemc.runtime.hintmc.hintBase.visible=false;
}
function openhint(){
	$('#hinttext').show();
	$('#questiontext').css({
		height: 55 + "px",
		overflow: 'auto',
	})
	gamemc.runtime.hintmc.gotoAndStop(2);
	gamemc.runtime.hintmc.hintBase.visible=true;
}

function lifelineno(evt) {
	enableLifeLines();
	enableOptions();
	if(lifelineselected == "fifty"){
		//Handle Lifeline check panel
		gamemc.runtime.fifty.gotoAndStop(0);
		gamemc.runtime.fifty.mouseEnabled=true;
		if (showtimeforquestion == "true") {
			continueTimer();
		}
	}else if(lifelineselected == "hint") {
		//Handle Lifeline check panel
		gamemc.runtime.hint.gotoAndStop(0);
		gamemc.runtime.hint.mouseEnabled=true;
		if (showtimeforquestion =="true") {
			continueTimer();
		}	
	}else if(lifelineselected == "swap"){
		//Handle Lifeline check panel
		gamemc.runtime.swap.gotoAndStop(0);
		gamemc.runtime.swap.mouseEnabled=true;	
		if (showtimeforquestion =="true") {
			continueTimer();
		}
	}
	lifelineClose();
}

function setLifeLines(){
	if (showfiftyfifty =="true") {
		gamemc.runtime.fifty.alpha=1;
		gamemc.runtime.fifty.mouseEnabled=true;
	} else {
		gamemc.runtime.fifty.alpha=0;
		gamemc.runtime.fifty.mouseEnabled=false;
	}

	if (showhint =="true") {
		gamemc.runtime.hint.alpha=1;
		gamemc.runtime.hint.mouseEnabled=true;
	} else {
		gamemc.runtime.hint.alpha=0;
		gamemc.runtime.hint.mouseEnabled=false;
	}

	if (showswap =="true") {
		gamemc.runtime.swap.alpha=1;
		gamemc.runtime.swap.mouseEnabled=true;
	} else {
		gamemc.runtime.swap.alpha=0;
		gamemc.runtime.swap.mouseEnabled=false;
	}
}

function enableLifeLines() {
	var l1 = true;
	var l2 = true;
	var l3 = true;
	
	if (showfiftyfifty =="true") {
		if (gamemc.runtime.fifty.alpha==1) {
			gamemc.runtime.fifty.mouseEnabled = true;
		}
		l1 = true;
	} else {
		gamemc.runtime.fifty.alpha=0;
		gamemc.runtime.fifty.mouseEnabled = false;
		l1 = false;
	}

	if (showhint =="true") {
		if (gamemc.runtime.hint.alpha==1) {
			gamemc.runtime.hint.mouseEnabled=true;
		}
		l2 = true;
	} else {
		gamemc.runtime.hint.alpha=0;
		gamemc.runtime.hint.mouseEnabled=false;
		l2 = false;
	}

	if (showswap =="true") {
		if (gamemc.runtime.swap.alpha==1) {
			gamemc.runtime.swap.mouseEnabled=true;
		}
		l3 = true;
	} else {
		gamemc.runtime.swap.alpha=0;
		gamemc.runtime.swap.mouseEnabled=false;
		l3 = false;
	}
	
	if(l1==false){
		if(l2==false){
			gamemc.runtime.fifty.x = pos3;
			gamemc.runtime.hint.x = pos2;
			gamemc.runtime.swap.x = pos1;
		}else{
			gamemc.runtime.fifty.x = pos3
			gamemc.runtime.hint.x = pos1;
			gamemc.runtime.swap.x = pos2
		}
	}else if(l2==false){
		if(l3==true){
			gamemc.runtime.fifty.x = pos1;
			gamemc.runtime.hint.x = pos3;
			gamemc.runtime.swap.x = pos2;
		}
	}else{
		gamemc.runtime.fifty.x = pos1;
		gamemc.runtime.hint.x = pos2;
		gamemc.runtime.swap.x = pos3;
	}
}

function disableLifeLines() {
	gamemc.runtime.fifty.mouseEnabled=false;
	gamemc.runtime.hint.mouseEnabled=false;
	gamemc.runtime.swap.mouseEnabled=false;
	gamecanvas.style.cursor = "default"
}

function removehandingame(evt){
	if(evt.target.mouseEnabled){
    	gamecanvas.style.cursor = "default"
	}
	gamemc.runtime.tooltips_mc.gotoAndStop(0);
}

function showhandingame(evt){
	if(evt.target.mouseEnabled){
    	gamecanvas.style.cursor = "pointer";
	}else{
		gamecanvas.style.cursor = "default"
	}
	
	if(evt.target.name == "fifty"){
		gamemc.runtime.tooltips_mc.gotoAndStop(1);
		gamemc.runtime.tooltips_mc.text = "Fifty Fifty";
	}else if(evt.target.name == "hint"){
		gamemc.runtime.tooltips_mc.gotoAndStop(2);
	}else if(evt.target.name == "swap"){
		gamemc.runtime.tooltips_mc.gotoAndStop(3);
	}
}

function removehandonsubmit(){
	gamemc.runtime.submitmc.gotoAndStop(0);
	gamemc.runtime.subhl_mc.gotoAndStop(0);
    gamecanvas.style.cursor = "default"
}

function showhandonsubmit(){
	gamemc.runtime.submitmc.gotoAndStop(1);
    gamecanvas.style.cursor = "pointer";
}

function checkoption(evt){
	//evt.preventDefault();
	if(evt.target.name!=undefined){
		selectedAns = evt.target.name;
	}else{
		tempstring =  '#'+ evt.target.id;
		selectedAns = $(tempstring).attr("spry:default")
	}
	selectedOptMovie=gamemc.runtime["opt_mc"+selectedAns];
	correctOptMovie=gamemc.runtime["opt_mc"+correctAns];
	resetOptions();
	
	unselectoptions();
	selectedOptMovie.base.visible=false;
	selectedOptMovie.clicked.visible=true;
	
	if (gamemc.runtime.hintmc.currentFrame!=0) {
		closehint();
	} else {
		gamemc.runtime.hintmc.gotoAndStop(0);
	}
	gamemc.runtime.submitmc.mouseEnabled=true;
	gamemc.runtime.submitmc.visible=true;
	var t=setTimeout(function(){clearSubmitHl()},800)
	gamemc.runtime.subhl_mc.play();
}
function clearSubmitHl(){
	gamemc.runtime.subhl_mc.gotoAndStop(0);
}

function unselectoptions(){
	for(i=1;i<=4;i++){
		gamemc.runtime["opt_mc"+i].base.visible=true;
		gamemc.runtime["opt_mc"+i].clicked.visible=false;
		gamemc.runtime["opt_mc"+i].correct.visible=false;
		gamemc.runtime["opt_mc"+i].showcorrect.visible=false;
		gamemc.runtime["opt_mc"+i].wrong.visible=false;
	}
}

function setupQuestion(){
	//Set tab status for question
	var qNum = quesNum;
	selectedTab = null;
	selectedTab = gamemc.runtime["tab"+(qNum+1)].children[0];
	selectedTab.gotoAndStop(1);

	//Hide Feedback;
	$('#feedbackcanvas').css('zIndex',-100);
	$('#gamecanvas').css('zIndex',10);
	$('#feedbackcanvas').hide();
	$('#crctanstext').hide();
	$('#crctokbtn').hide();
	$('#hinttext').hide();
	
	feedbackmc.runtime.crctmc.visible=false;
	feedbackmc.runtime.wrngmc.visible=false;
	gamemc.runtime.hintmc.visible=false;
	feedbackmc.runtime.EndScreen.visible=false;
	feedbackmc.runtime.lifelinecheck.visible=false;

	//Set up all the feedback text
	$('#crctanstext').html(correctFeedbackArray[qNum])
	$('#wrnganstext').html(wrongFeedbackArray[qNum])
	$('#hinttext').html(hintArray[qNum])

	//Set the correct answer for this question
	correctAns=correctArray[qNum];

	//Set up question text
	$('#questiontext').html(questionsArray[qNum]);
	$('#questiontext').css('zIndex',11);
	$('#questiontext').show();
	
	//Reset options and set answer text
	resetOptions();
	for (i=0; i<answersArray[qNum].length; i++) {
		gamemc.runtime["opt_mc"+(i+1)].name=(i+1);
		gamemc.runtime["opt_mc"+(i+1)].onMouseOver = showhandingame;
		gamemc.runtime["opt_mc"+(i+1)].onMouseOut = removehandingame;
		gamemc.runtime["opt_mc"+(i+1)].onClick = checkoption;
		
		$('#opt'+(i+1)).html(answersArray[qNum][i]);
		$('#opt'+(i+1)).css('zIndex',11);
		$('#opt'+(i+1)).show();
	}

	//Check the score;
	for (j=0; j<swapListArray.length; j++) {
		if (qNum==(swapListArray[j]+1)) {
			finalScore=scoreArray[qNum-1];
			break;
		}

	}

	//Enable everything;
	enableLifeLines();
	enableAllOptions();

	//Set time for this question;
	if (showtimeforquestion == "true") {
		showTimer(timeArray[qNum]);
		starttimer(timeArray[qNum]);
	} else {
		$('#timertext').hide();
	}
}

function setSwapQuestion() {
	swappedQuestion = quesNum;

	var qNum;

	if (quesNum<=swapListArray[0]) {
		qNum=0;
	} else if (quesNum<=swapListArray[1] && quesNum>swapListArray[0]) {
		qNum=1;
	} else if (quesNum<=swapListArray[2] && quesNum>swapListArray[1]) {
		qNum=2;
	}
	
	//Set the correct answer for this question
	correctAns=swapCorrectArray[qNum];
	
	//Hide Feedback;
	$('#feedbackcanvas').css('zIndex',-100);
	$('#gamecanvas').css('zIndex',10);
	$('#feedbackcanvas').hide();
	$('#crctanstext').hide();
	$('#crctokbtn').hide();
	
	feedbackmc.runtime.crctmc.visible=false;

	feedbackmc.runtime.wrngmc.visible=false;
	gamemc.runtime.hintmc.visible=false;
	feedbackmc.runtime.EndScreen.visible=false;
	feedbackmc.runtime.lifelinecheck.visible=false;

	//Set up all the feedback text
	$('#crctanstext').html(swapCorrectFeedbackArray[qNum])
	$('#wrnganstext').html(swapWrongFeedbackArray[qNum])
	$('#hinttext').html(swapHintArray[qNum])

	//Set the correct answer for this question
	correctAns=correctArray[qNum];

	//Set up question text
	$('#questiontext').html(swapQuestionsArray[qNum]);
	$('#questiontext').css('zIndex',11);
	$('#questiontext').show();
	
	//Reset options and set answer text
	resetOptions();
	for (i=0; i<swapAnswersArray[qNum].length; i++) {
		gamemc.runtime["opt_mc"+(i+1)].name=(i+1);
		gamemc.runtime["opt_mc"+(i+1)].onMouseOver = showhandingame;
		gamemc.runtime["opt_mc"+(i+1)].onMouseOut = removehandingame;
		gamemc.runtime["opt_mc"+(i+1)].onClick = checkoption;
		$('#opt'+(i+1)).html(swapAnswersArray[qNum][i]);
		$('#opt'+(i+1)).css('zIndex',11);
		$('#opt'+(i+1)).show();
	}

	//Enable everything;
	enableLifeLines();
	enableAllOptions();

	//Set time for this question;
	if (showtimeforquestion == "true") {
		showTimer(swapTimeArray[qNum]);
		starttimer(swapTimeArray[qNum]);
	} else {
		$('#timertext').hide();
	}
}

function removehandoveroptions(evt){
    evt.target.style.cursor = "default"
}

function showhandoveroptions(evt){
	evt.target.style.cursor = "pointer"
}

function resetOptions(){
	for(i=1;i<=4;i++){
		gamemc.runtime["opt_mc"+i].name = i;
		gamemc.runtime["opt_mc"+i].base.visible=true;
		gamemc.runtime["opt_mc"+i].clicked.visible=false;
		gamemc.runtime["opt_mc"+i].correct.visible=false;
		gamemc.runtime["opt_mc"+i].showcorrect.visible=false;
		gamemc.runtime["opt_mc"+i].wrong.visible=false;

		$('#opt'+i).disableTextSelect();
	}
}

function disableOptions() {
	for (i=0; i<4; i++) {
		$('#opt'+(i+1)).attr("disabled","disabled").off('click')
		$('#opt'+(i+1)).mouseover(removehandoveroptions);
		gamemc.runtime["opt_mc"+(i+1)].mouseEnabled=false;
	}
}
function enableOptions() {
	for (i=0; i<4; i++) {
		if (gamemc.runtime["opt_mc"+(i+1)].visible==true) {
			$('#opt'+(i+1)).attr("disabled",false);
			$('#opt'+(i+1)).click(checkoption);
			$('#opt'+(i+1)).mouseover(showhandoveroptions);
			gamemc.runtime["opt_mc"+(i+1)].mouseEnabled=true;
			gamemc.runtime["opt_mc"+(i+1)].visible=true;
		}
	}
}
function enableAllOptions() {
	for (i=0; i<4; i++) {
		$('#opt'+(i+1)).attr("disabled",false);
		$('#opt'+(i+1)).click(checkoption);
		$('#opt'+(i+1)).mouseover(showhandoveroptions);
		gamemc.runtime["opt_mc"+(i+1)].mouseEnabled=true;
		gamemc.runtime["opt_mc"+(i+1)].visible=true;
	}
}
function enableOptionsHintCheck() {
	for (i=0; i<4; i++) {
		if (gamemc.runtime["opt_mc"+(i+1)].visible==true) {
			$('#opt'+(i+1)).attr("disabled",false);
			$('#opt'+(i+1)).click(checkoption);
			$('#opt'+(i+1)).mouseover(showhandoveroptions);
			gamemc.runtime["opt_mc"+(i+1)].mouseEnabled=true;
		}
	}
}

function validateAnswer(){
	//Stop timer
	clearInterval(id);
	disableLifeLines();
	disableOptions();
	$('#hinttext').hide();
	$('#questiontext').show();
	gamemc.runtime.hintmc.visible=false;
	gamemc.runtime.submitmc.mouseEnabled=false;
	gamemc.runtime.submitmc.visible=false;
	gamemc.runtime.subhl_mc.gotoAndStop(0);

	//Hide Hint
	gamemc.runtime.hintmc.gotoAndStop(1);

	if (selectedAns==correctAns) {
		selectedOptMovie.base.visible=false;
		selectedOptMovie.clicked.visible=false;
		selectedOptMovie.correct.visible=true;
		selectedOptMovie.wrong.visible=false;
		selectedOptMovie.showcorrect.visible=false;

		selectedOptMovie.correct.gotoAndPlay(2);
		selectedTab.gotoAndStop(2);
		var t=setTimeout(function(){showFeedback("crct")},1500)
		for (j=0; j<swapListArray.length; j++) {
			if (quesNum==swapListArray[j]) {
				var tempfinalScore=scoreArray[quesNum];
				if(m_VariableHandle != null){
					m_VariableHandle[VarFScore] = tempfinalScore;
				}
				break;
			}
		}
	} else {
		selectedOptMovie.base.visible=false;

		selectedOptMovie.clicked.visible=false;
		selectedOptMovie.correct.visible=false;
		selectedOptMovie.wrong.visible=true;
		selectedOptMovie.showcorrect.visible=false;

		if (showcorans == "true") {
			correctOptMovie.base.visible=false;
			correctOptMovie.clicked.visible=false;
			correctOptMovie.correct.visible=false;
			correctOptMovie.wrong.visible=false;
			correctOptMovie.showcorrect.visible=true;

			correctOptMovie.showcorrect.gotoAndPlay(2);
			selectedOptMovie.wrong.gotoAndStop(1);
			selectedTab.gotoAndStop(2);
			var t=setTimeout(function(){showFeedback("wrng")},1500)
		} else {
			selectedOptMovie.wrong.gotoAndPlay(2);
			selectedTab.gotoAndStop(3);
			var t=setTimeout(function(){showFeedback("wrng")},1500)
		}

		selectedTab.gotoAndStop(4);
	}
}

function getRandomNumbers() {
	var getRandomNum=randRange(1,5);
	if (getRandomNum!=correctAns) {
		if (getFiftyArray.length==0) {
			getFiftyArray.push(getRandomNum);
			getRandomNumbers();
		} else {
			if (getRandomNum==getFiftyArray[0]) {
				getRandomNumbers();
			} else {
				getFiftyArray.push(getRandomNum);
				randomNumbersRecieved();
			}
		}
	} else {
		getRandomNumbers();
	}
}
function randomNumbersRecieved() {
	for (i=0; i<getFiftyArray.length; i++) {
		gamemc.runtime["opt_mc"+getFiftyArray[i]].mouseEnabled=false;
		gamemc.runtime["opt_mc"+getFiftyArray[i]].visible=false;
		$('#opt'+getFiftyArray[i]).hide();
	}
}

function randRange(minNum, maxNum) {
	var randNum=Math.floor(Math.random()*(maxNum-minNum))+minNum;
	return randNum;
}

function randNumber(randArray) {
	var randNum=randArray[randRange(0,randArray.length)];
	return randNum;
}

function progressCheck() {
	quesNum++;
	if (quesNum < totalQuestions) {
		setupQuestion(quesNum);
	} else {
		gameCompleted();
	}
}
function showFeedback(varStat) {
	if (varStat == "crct") {
		if (showfeedback == "true") {
			$('#feedbackcanvas').css('zIndex',20);
			$('#gamecanvas').css('zIndex',-100);
			$('#feedbackcanvas').show();
			$('#crctanstext').show();
			$('#crctokbtn').show();
			feedbackmc.runtime.crctmc.visible=true;
		} else {
			progressCheck();
		}
	} else if (varStat == "wrng") {
		if (showfeedback == "true") {
			$('#feedbackcanvas').css('zIndex',20);
			$('#gamecanvas').css('zIndex',-100);
			$('#feedbackcanvas').show();
			$('#wrnganstext').show();
			$('#wrngokbtn').show();
			feedbackmc.runtime.wrngmc.visible=true;
		} else {
			finishGame();
		}
	}
}

function gameCompleted() {
	//("GAME COMPLETED SUCCESSFULLY");
	finalScore=scoreArray[totalQuestions-1];
	disableLifeLines();
	disableOptions();
	$('#feedbackcanvas').css('zIndex',20);
	$('#gamecanvas').css('zIndex',-100);
	$('#feedbackcanvas').show();
	$('#crctanstext').hide();
	$('#crctokbtn').hide();
	$('#hinttext').hide();
	$('#questiontext').show();
	gamemc.runtime.hintmc.visible=false;
	feedbackmc.runtime.EndScreen.finalscore.text=currencysymbol+" "+finalScore;
	feedbackmc.runtime.EndScreen.gotoAndStop(0);
	feedbackmc.runtime.EndScreen.visible=true;

	feedbackmc.runtime.crctmc=false;

	feedbackmc.runtime.wrngmc=false;
	
	finished = "complete";
	if(m_VariableHandle != null){
		m_VariableHandle[VarFScore] = finalScore;
	}
	setSuccess();
}

function finishGame() {
	//("GAME OVER");
	clearInterval(id);
	disableLifeLines();
	disableOptions();
	$('#feedbackcanvas').css('zIndex',20);
	$('#gamecanvas').css('zIndex',-100);
	$('#feedbackcanvas').show();
	$('#wrnganstext').hide();
	$('#wrngokbtn').hide();
	$('#hinttext').hide();
	$('#questiontext').show();
	gamemc.runtime.hintmc.visible=false;
	feedbackmc.runtime.EndScreen.finalscore.text=currencysymbol+" "+finalScore;
	feedbackmc.runtime.EndScreen.gotoAndStop(1);
	feedbackmc.runtime.EndScreen.visible=true;

	feedbackmc.runtime.wrngmc.visible=false;
	
	finished = "failed";
	if(m_VariableHandle != null){
		m_VariableHandle[VarFScore] = finalScore;
	}
	setFailure();
	//parent.cpCmndResume = true;
	//var t=setTimeout(function(){parent.cpCmndResume = true},2000)
}

function showtimeoutfailurefeedback(){
	clearInterval(id);
	disableLifeLines();
	disableOptions();
	$('#feedbackcanvas').css('zIndex',20);
	$('#gamecanvas').css('zIndex',-100);
	$('#feedbackcanvas').show();
	$('#hinttext').hide();
	$('#questiontext').show();
	gamemc.runtime.hintmc.visible=false;
	gamemc.runtime.submitmc.mouseEnabled=false;
	gamemc.runtime.subhl_mc.gotoAndStop(0);
	feedbackmc.runtime.EndScreen.gotoAndStop(2);
	feedbackmc.runtime.EndScreen.finalscore.text=currencysymbol+" "+finalScore;
	feedbackmc.runtime.EndScreen.visible=true;

	finished = "failed";
	if(m_VariableHandle != null){
		m_VariableHandle[VarFScore] = finalScore;
	}
	setFailure();
	//parent.cpCmndResume = true

	//var t=setTimeout(function(){parent.cpCmndResume = true},2000)
}

function gameCompletedReview() {
	//("GAME COMPLETED SUCCESSFULLY");
	clearInterval(id);
	finalScore=finishedarray[5];
	disableLifeLines();
	disableOptions();
	$('#feedbackcanvas').css('zIndex',20);
	$('#gamecanvas').css('zIndex',-100);
	$('#feedbackcanvas').show();
	$('#crctanstext').hide();
	$('#crctokbtn').hide();
	$('#hinttext').hide();
	$('#questiontext').show();
	gamemc.runtime.hintmc.visible=false;
	feedbackmc.runtime.EndScreen.finalscore.text=currencysymbol+" "+finalScore;
	feedbackmc.runtime.EndScreen.gotoAndStop(0);
	feedbackmc.runtime.EndScreen.visible=true;

	feedbackmc.runtime.crctmc=false;
	
	feedbackmc.runtime.wrngmc=false;
	
	finished = "failed";
	if(m_VariableHandle != null){
		m_VariableHandle[VarFScore] = finalScore;
	}
	setFailure();
	//parent.cpCmndResume = true
}

function finishGameReview() {
	//("GAME OVER");
	finalScore=finishedarray[5];
	clearInterval(id);
	disableLifeLines();
	disableOptions();
	$('#feedbackcanvas').css('zIndex',20);
	$('#gamecanvas').css('zIndex',-100);
	$('#feedbackcanvas').show();
	$('#wrnganstext').hide();
	$('#wrngokbtn').hide();
	$('#hinttext').hide();
	$('#questiontext').show();
	gamemc.runtime.hintmc.visible=false;
	feedbackmc.runtime.EndScreen.finalscore.text=currencysymbol+" "+finalScore;
	feedbackmc.runtime.EndScreen.gotoAndStop(1);
	feedbackmc.runtime.EndScreen.visible=true;

	feedbackmc.runtime.wrngmc.visible=false;
	
	finished = "failed";
	if(m_VariableHandle != null){
		m_VariableHandle[VarFScore] = finalScore;
	}
	setFailure();

	//parent.cpCmndResume = true
	//var t=setTimeout(function(){parent.cpCmndResume = true},2000)
}

function showTimer(timeToSet) {
	rem=timeToSet;
	var minutehand = String(Math.floor(rem / 60));
	var sechand = String(rem % 60);
	if (Number(minutehand) < 10) {
		minutehand="0"+String(minutehand);
	}
	if (Number(sechand) < 10) {
		sechand="0"+String(sechand);
	}
	//trace("running time ", minutehand, sechand)
	$('#timertext').text(minutehand+":"+sechand);
	$('#timertext').show();
}

function starttimer(timeToSet) {
	rem=timeToSet;
	id=setInterval(decrement,1000);
}
function pauseTimer() {
	clearInterval(id);
}

function continueTimer() {
	id=setInterval(decrement,1000);
}

function decrement() {
	if (rem <= 0) {
		showtimeoutfailurefeedback();
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
		//trace("running time ", minutehand, sechand)
		$('#timertext').text(minutehand+":"+sechand);
	}
}
function setSuccess() {
	if(gameMode!="Review"){
		var lInteractiveWidgetHandle = lcap.CPMovieHandle.getInteractiveWidgetHandle();
    	lInteractiveWidgetHandle.setSuccess(true);
	}
}

function setFailure() {
	if(gameMode!="Review"){
		var lInteractiveWidgetHandle = lcap.CPMovieHandle.getInteractiveWidgetHandle();
    	lInteractiveWidgetHandle.setSuccess(false);
	}
}

function updateSizeNPositionOnResize(){
	setTimeout(updateSizeNPositionOnResizeComplete,300)
}
		
function updateSizeNPositionOnResizeComplete(){
	resizeInteraction(width,height);
}