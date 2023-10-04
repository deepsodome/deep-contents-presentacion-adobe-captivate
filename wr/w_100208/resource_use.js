var m_VariableHandle;
var movieWidth;
var movieHeight;
var totalcells = 0;
var openedcells = 0;
var scalePercentagew;
var scalePercentageh;
var lcap;
var canvas, stage, exportRoot;
var canvas1, stage1, exportRoot1;
var n_rows, n_cols, GameTitle, GameDescription, datastring, dataXML;
var widthscale
var heightscale
var topicwidthscale;
var elem;
var timer;
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
var VarFScore;

var endscreenfdbck;

var isResponsiveProject = false;
var mainCPNamespace;
var evtHandle;

var loadedwidth,loadedheight

var myWidgetiFrame

var ID_Start,ID_Score,ID_Time,ID_Submit,ID_Clickanywheretocontinue,ID_TimeUp,ID_Congratulations

resourceUse1 = {
    onLoad: function ()
    {
        if (!this.captivate) return;
        lcap = this.captivate;
		
		handle = this.captivate.CPMovieHandle;
		//if(handle.isWidgetVisible() == true)
		//{
		
        var lInteractiveWidgetHandle = this.captivate.CPMovieHandle.getInteractiveWidgetHandle();
        if (lInteractiveWidgetHandle)
        {
            if (lInteractiveWidgetHandle.shouldDisable()) this.disable();
            var btnElement = document.getElementById('puzzleCreate');
            if (btnElement)
            {
                // btnElement.onmouseover = function(e)
                // {
                // lInteractiveWidgetHandle.setShowHint();
                // }
                // btnElement.onmouseout = function(e)
                // {
                // lInteractiveWidgetHandle.setHideHint();
                // }
                btnElement.onclick = function (e)
                {
                    //Handle Click inside Widget
                    lInteractiveWidgetHandle.setSuccess(true);
                }
            }
        }
		
		no_of_attempts = this.captivate.CPMovieHandle.getCPQuestionData().maxAttempts
		
		if(no_of_attempts == -1)
		{
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
        ////console.log(width,height,"width n height")
        this.externalImage = '';
        this.description = '';
        this.myVar = '';
        this.myVar1 = '';
        // movieWidth = this.movieProps.contentWidth;
        //movieHeight = this.movieProps.contentHeight;
		
		
        movieWidth = parseInt(size.width.split("px")[0]);
        movieHeight = parseInt(size.height.split("px")[0]);
		
		//Captivate Event listener
		evtHandle.addEventListener(mainCPNamespace.WINDOWRESIZECOMPLETEDEVENT,updateSizeNPositionOnResizeComplete, false );
		evtHandle.addEventListener(mainCPNamespace.ORIENTATIONCHANGECOMPLETEDEVENT,updateSizeNPositionOnResizeComplete, false );
		
        this.updateData();
        //setTimeout(Jeopardyinit,00);
		
		////console.log(this.captivate.getQuizController.GetIsInReviewMode(),"review status");
        if (parent.cpInQuizScope == true)
        {
            id = setInterval(checkval, 100)
            window.quizscope = 1
        }
        else
        {
            if (window.quizscope == 0)
                //Jeopardyinit();
				
				  id = setInterval(checkval, 100)
        }
        //Jeopardyinit();
        this.doUpdate();
		//}
    },
    //To be implemented by a QUESTION WIDGET to be part of Captivate's Quizzing framework
    enable: function ()
    {
        var btnElement = document.getElementById('canvas');
        btnElement.disabled = false;
    },
    //To be implemented by a QUESTION WIDGET to be part of Captivate's Quizzing framework
    disable: function ()
    {
        var btnElement = document.getElementById('canvas');
        btnElement.disabled = 'disabled';
    },
    //Captivate App will not recognize a Question Widget unless this function is implemented and returns true
    getInteractionQuestionState: function ()
    {
        var lResult_Str = finished + ":quiz";
        //Implements this to return Widget State as String
        //alert("get has" + finished);
        ////console.log("get finishedvalue is ",finished)
        return lResult_Str;
    },
    setInteractionQuestionState: function (aVal)
    {
        //Implements this to set Widget State from input String(aVal)
        var lArray = [];
        lArray = aVal.split(",");
		
		if(lArray[0] != "")
        finished = lArray[0];
		else
		finished = "notdone"
        //alert("set has" + finished);
        ////console.log("set finishedvalue is ",finished)
        valueset = 1
        ////console.log(valueset,"valueset")
        if (lArray.length < 2) return;
    },
    getCorrectAnswerAsArray: function ()
    {
        //Return correct answer as string
        return ["1"];
    },
    getCurrentAnswerAsString: function ()
    {
        //Return current answer as string
    },
    //Handle Click, if Clicked Outside Widget ( will be called from captivate internally)
    onClickExternal: function (e)
    {
        var lMsg = 'On Click Received in Widget';
        if (e)
        {
            lMsg += "x=" + e.pageX + "y=" + e.pageY;
        }
        //alert(lMsg);
        if (!this.captivate) return;
        //Call set Failure
        var lInteractiveWidgetHandle = this.captivate.CPMovieHandle.getInteractiveWidgetHandle();
      //  if (lInteractiveWidgetHandle) lInteractiveWidgetHandle.setSuccess(false, this.getCorrectAnswerAsArray(), "0");
    },
    updateData: function ()
    {
        var allWidgets = window.parent.document.getElementsByClassName("cp-widget");
        var myFrameName = window.name;
        myWidgetiFrame = window.parent.document.getElementById(window.name);
        if (myWidgetiFrame)
        {
            //myWidgetiFrame.scrolling = "yes";
            //myWidgetiFrame.contentWindow.document.body.scrollWidth = 1000;
            //myWidgetiFrame.contentWindow.document.body.scrollHeight = 1000;
            //myWidgetiFrame.style.overflow="scroll";
            myWidgetiFrame.style.height = movieWidth + "px";
            myWidgetiFrame.style.width = movieWidth + "px";
        }
        var id = 0;
        var result = jQuery.parseXML(this.xmlStr);
        var resultDoc = jQuery(result);
        var strProp = resultDoc.find('string').text();
        var curr = resultDoc.find('#currencysymbol');
        if (curr)
        {
            if (curr.find('string'))
            {
                currencysymbol = curr.find('string').text();
            }
        }
        ////console.log("xml is " + result,currencysymbol)
        var gamebcghex = resultDoc.find('#gamebcgcolorhex');
        if (gamebcghex)
        {
            if (gamebcghex.find('string'))
            {
                gamehex = '#' + gamebcghex.find('string').text();
            }
        }
        var topicbcghex = resultDoc.find('#topicbcgcolorhex');
        if (topicbcghex)
        {
            if (topicbcghex.find('string'))
            {
                topichex = '#' + topicbcghex.find('string').text();
            }
        }
        var cellbcghex = resultDoc.find('#cellbcgcolorhex');
        if (cellbcghex)
        {
            if (cellbcghex.find('string'))
            {
                cellhex = '#' + cellbcghex.find('string').text();
            }
        }
        ////console.log("colors",topichex,cellhex,gamehex)
        var rows = resultDoc.find('#NumOfRows');
        if (rows)
        {
            if (rows.find('number'))
            {
                n_rows = parseInt(rows.find('number').text());
            }
        }
        var cols = resultDoc.find('#NumOfCols');
        if (cols)
        {
            if (cols.find('number'))
            {
                n_cols = parseInt(cols.find('number').text());
            }
        }
        totalcells = n_rows * n_cols;
        var gamename = resultDoc.find('#gamename');
        if (gamename)
        {
            if (gamename.find('string'))
            {
                GameTitle = gamename.find('string').text();
            }
        }
        var gamedesc = resultDoc.find('#gameinstruction');
        if (gamedesc)
        {
            if (gamedesc.find('string'))
            {
                GameDescription = gamedesc.find('string').text();
            }
        }
		
		var varFscr = resultDoc.find('#varfscore');
        if (varFscr)
        {
            if (varFscr.find('string'))
            {
                VarFScore = varFscr.find('string').text();
            }
        }
		
        var buildxml = resultDoc.find('#buildxml');
        if (buildxml)
        {
            if (buildxml.find('string'))
            {
                datastring = buildxml.find('string').text();
            }
        }
		
		var endscreenfdbckvar= resultDoc.find('#endscreenfdbck');
        if (endscreenfdbckvar)
        {
            if (endscreenfdbckvar.find('string'))
            {
                endscreenfdbck = endscreenfdbckvar.find('string').text();
            }
        }
		
		
		var varID_Start = resultDoc.find('#startname');
        if (varID_Start)
        {
            if (varID_Start.find('string'))
            {
                ID_Start = varID_Start.find('string').text();
            }
        }
		
		var varID_Score= resultDoc.find('#scorename');
        if (varID_Score)
        {
            if (varID_Score.find('string'))
            {
                ID_Score = varID_Score.find('string').text();
            }
        }
		
		var varID_Time= resultDoc.find('#timename');
        if (varID_Time)
        {
            if (varID_Time.find('string'))
            {
                ID_Time = varID_Time.find('string').text();
            }
        }
		
		var varID_Submit= resultDoc.find('#submitname');
        if (varID_Submit)
        {
            if (varID_Submit.find('string'))
            {
                ID_Submit = varID_Submit.find('string').text();
            }
        }
		
		
		var varID_Clickanywheretocontinue= resultDoc.find('#clickanywheretocontinue');
        if (varID_Clickanywheretocontinue)
        {
            if (varID_Clickanywheretocontinue.find('string'))
            {
                ID_Clickanywheretocontinue = varID_Clickanywheretocontinue.find('string').text();
            }
        }
		
		var varID_TimeUp= resultDoc.find('#timeup');
        if (varID_TimeUp)
        {
            if (varID_TimeUp.find('string'))
            {
                ID_TimeUp = varID_TimeUp.find('string').text();
            }
        }
		
		var varID_Congratulations= resultDoc.find('#congratulationstxt');
        if (varID_Congratulations)
        {
            if (varID_Congratulations.find('string'))
            {
                ID_Congratulations = varID_Congratulations.find('string').text();
            }
        }
		
		console.log("asd")
		
		datastring = datastring.split("\n").join("&#10;");
		
        var data = jQuery.parseXML(datastring);
        dataXML = jQuery(data);
        for (var i = 0; i < n_rows; i++)
        {
            //////console.log("topic id :", $(dataXML.find('topic')[i]).attr('id')," top name :", $(dataXML.find('topic')[0]).attr('name'))
            for (var j = 0; j < n_cols; j++)
            {
                ////console.log($($(dataXML.find('topic')[i]).find('question')[j]).attr("title"),"=question title")
                ////console.log($($(dataXML.find('topic')[i]).find('question')[j]).attr("MCMS"),"=question type")
                ////console.log($($(dataXML.find('topic')[i]).find('question')[j]).attr("correct"),"=correct answer")
                ////console.log($($(dataXML.find('topic')[i]).find('question')[j]).attr("time"),"=question time")
                ////console.log($($(dataXML.find('topic')[i]).find('question')[j]).attr("score"),"=question score")
                ////console.log($($(dataXML.find('topic')[i]).find('question')[j]).attr("Rfeedback"),"=RIght fb")
                ////console.log($($(dataXML.find('topic')[i]).find('question')[j]).attr("Wfeedback"),"=Wrong fb")
                for (var k = 0; k < $($(dataXML.find('topic')[i]).find('question')[j]).children().length; k++)
                {
                    ////console.log($($($($(dataXML.find('topic')[i]).find('question')[j])).find('option')[k]).text(),"==>option",k)
                }
            }
        }
        ////console.log(n_rows,n_cols,GameTitle,GameDescription,datastring,dataXML);
    },
    doUpdate: function ()
    {
        // if (this.captivate.CPMovieHandle.pauseMovie ) 
        // {
        // setTimeout("parent.cp.movie.pause(parent.cp.ReasonForPause.INTERACTIVE_ITEM)",100);
        // }
        // var allWidgets = window.parent.document.getElementsByClassName("cp-widget");
        // var myFrameName = window.name;
        // //alert(myFrameName);
        // var myWidgetiFrame = window.parent.document.getElementById(window.name);
        // if (myWidgetiFrame) {
        // //myWidgetiFrame.parentElement.parentElement.style.width = myWidgetiFrame.contentWindow.document.getElementById("dropdown").offsetWidth + 60 + "px";
        // myWidgetiFrame.parentElement.parentElement.style.top = "0px";
        // myWidgetiFrame.parentElement.parentElement.style.left = "0px";
        // //myWidgetiFrame.style.height= myWidgetiFrame.contentWindow.document.body.offsetHeight + "px";
        // //myWidgetiFrame.parentElement.parentElement.parentElement.style.width= myWidgetiFrame.contentWindow.document.getElementById("dropdown").offsetWidth + 20 + "px";
        // }
        elem = document.getElementById('canvas');
        elem = null;
		//console.log(movieWidth,"asd")
		setInteractionSize()
		resizeInteraction(width,height)
    }
};
resource_use = function ()
{
    return resourceUse1;
}
var optHeight = 40
function setInteractionSize(){
	$('#gamedesc').css({
		left: "162px",
		top: "315px",
	})
	
	$('#questiontitle').css({
        top: "70px",
        left: "33px",
		width:"580px",
		height:"76px"
    });
    for (var m = 0; m < 6; m++){
		if(m==0){
			$('#' + (m + 1)).css({
				top: "160px",
				left: "45px",
				width:"575px",
				height:"34px"
			});
			$('#h' + (m + 1)).css({
				top: "160px",
				left: "20px",
				width:"608px",
				height:"40px"
			}).hide();
			$('#r' + (m + 1)).css({
				top: "160px",
				left: "16px",
			});
			$('#c' + (m + 1)).css({
				top: "160px",
				left: "16px",
			});
		
		}else{
			$('#' + (m + 1)).css({
				top: 160+(optHeight*(m))+ "px",
				left: "45px",
				width:"575px",
				height:"34px"
			});
			$('#h' + (m + 1)).css({
				top: 160+(optHeight*(m))+ "px",
				left: "20px",
				width:"608px",
				height:"40px"
			}).hide;
			$('#r' + (m + 1)).css({
				top: 160+(optHeight*(m))+ "px",
				left: "16px",
			});
			$('#c' + (m + 1)).css({
				top: 160+(optHeight*(m))+ "px",
				left: "16px",
			});
		}
    }
}
	
function resizeInteraction(thewidth, theheight){
    var scale = 0;
    thewidth = String(thewidth).replace("px", "");
    theheight = String(theheight).replace("px", "")
	
    if (thewidth < theheight){
        scale = thewidth / (movieWidth);
    }else{
        scale = theheight / (movieHeight);
    }
	
	var textscaleleft = 0;
	 if (movieWidth < movieHeight){
       textscaleleft = thewidth / (640)
    }else{
        textscaleleft = theheight / (480)
    }
	
	var gameDescTxtTop
	var gameDescTxtLeft
	
	var quesTxtTop
	var quesTxtLeft
	
	var optTxtTop
	var optTxtLeft
	
	var hlTop
	var hlLeft
	
	var rcBtnTop
	var rcBtnLeft
	
	var slideWidth = (myWidgetiFrame.parentElement.parentElement.parentElement.parentElement.offsetWidth)
	var slideHeight = (myWidgetiFrame.parentElement.parentElement.parentElement.parentElement.offsetHeight)
	
	var scaleHeight = slideHeight / (480)
	
	gameDescTxtTop = 295
	gameDescTxtLeft = 150
	
	quesTxtTop = 70
	quesTxtLeft = 30
	
	optTxtTop = 158
	optTxtLeft = 45
	
	hlTop = 160
	hlLeft = 15
	
	rcBtnTop = 160
	rcBtnLeft = 15
	
	var holdScale = textscaleleft
    var margins = Math.round(25 * scale);
	var tempScale = scale;
    margins += "px"
    scale = "scale(" + scale + ")";
	var textscalelefttemp = "scale(" + textscaleleft + ")";
	
	var tempHoldScale = (holdScale*10)-6
	if(tempHoldScale>=0){
		tempHoldScale = 0;
	}
	$('#checkboxes').css({
		left: (tempHoldScale) + "px",
		top: (tempHoldScale) + "px",
	})
	
	$('#radiobuttons').css({
		left: (tempHoldScale) + "px",
		top: (tempHoldScale) + "px",
	})
	//console.log(tempHoldScale)
	
	$('#gamedesc').css({
		left: ((gameDescTxtLeft*textscaleleft)) + "px",
		top: ((gameDescTxtTop*textscaleleft)) + "px",
	})
	
	$('#gamedesc').css('-webkit-transform', textscalelefttemp);
    $('#gamedesc').css('-moz-transform', textscalelefttemp);
    $('#gamedesc').css('-o-transform', textscalelefttemp);
    $('#gamedesc').css('-ms-transform', textscalelefttemp);
    $('#gamedesc').css('-moz-transform-origin', '0 0');
    $('#gamedesc').css('-webkit-transform-origin', '0 0');
    $('#gamedesc').css('-moz-transform-origin', '0 0');
    $('#gamedesc').css('-o-transform-origin', '0 0');
    $('#gamedesc').css('-ms-transform-origin', '0 0');
	
	$('#questiontitle').css({
        top: (quesTxtTop * holdScale) + "px",
        left: (quesTxtLeft * holdScale) + "px",
    });
	
	$('#questiontitle').css('-webkit-transform', textscalelefttemp);
    $('#questiontitle').css('-moz-transform', textscalelefttemp);
    $('#questiontitle').css('-o-transform', textscalelefttemp);
    $('#questiontitle').css('-ms-transform', textscalelefttemp);
    $('#questiontitle').css('-moz-transform-origin', '0 0');
    $('#questiontitle').css('-webkit-transform-origin', '0 0');
    $('#questiontitle').css('-moz-transform-origin', '0 0');
    $('#questiontitle').css('-o-transform-origin', '0 0');
    $('#questiontitle').css('-ms-transform-origin', '0 0');
	
	
	var forHoldScale = scaleHeight+holdScale;
    for (var m = 0; m < 6; m++){
		
		if(m==0){
			$('#' + (m + 1)).css({
				top: (optTxtTop * holdScale) + "px",
				left: (optTxtLeft * holdScale) + "px",
			});
			$('#h' + (m + 1)).css({
				top: (hlTop* holdScale) + "px",
				left: (hlLeft * holdScale) + "px",
			});
			$('#r' + (m + 1)).css({
				top: (rcBtnTop* holdScale) + "px",
				left: (rcBtnLeft * holdScale) + "px",
			});
			$('#c' + (m + 1)).css({
				top: (rcBtnTop* holdScale) + "px",
				left: (rcBtnLeft * holdScale) + "px",
			});
		
		}else{
			$('#' + (m + 1)).css({
				top: (optTxtTop+(optHeight*(m)))* holdScale+ "px",
				left: (optTxtLeft * holdScale) + "px",
			});
			$('#h' + (m + 1)).css({
				top: (hlTop+(optHeight*(m)))* holdScale+ "px",
				left: (hlLeft * holdScale) + "px",
			});
			$('#r' + (m + 1)).css({
				top: (rcBtnTop+(optHeight*(m)))* holdScale+ "px",
				left: (rcBtnLeft * holdScale) + "px",
			});
			$('#c' + (m + 1)).css({
				top: (rcBtnTop+(optHeight*(m)))* holdScale+ "px",
				left: (rcBtnLeft * holdScale) + "px",
			});
		}
		
		//console.log(optHeight*holdScale,optHeight)
		
		$('#' + (m + 1)).css('-webkit-transform', textscalelefttemp);
        $('#' + (m + 1)).css('-moz-transform', textscalelefttemp);
        $('#' + (m + 1)).css('-o-transform', textscalelefttemp);
        $('#' + (m + 1)).css('-ms-transform', textscalelefttemp);
        $('#' + (m + 1)).css('-moz-transform-origin', '0 0');
        $('#' + (m + 1)).css('-webkit-transform-origin', '0 0');
        $('#' + (m + 1)).css('-moz-transform-origin', '0 0');
        $('#' + (m + 1)).css('-o-transform-origin', '0 0');
        $('#' + (m + 1)).css('-ms-transform-origin', '0 0');
		
		$('#h' + (m + 1)).css('-webkit-transform', textscalelefttemp);
        $('#h' + (m + 1)).css('-moz-transform', textscalelefttemp);
        $('#h' + (m + 1)).css('-o-transform', textscalelefttemp);
        $('#h' + (m + 1)).css('-ms-transform', textscalelefttemp);
        $('#h' + (m + 1)).css('-moz-transform-origin', '0 0');
        $('#h' + (m + 1)).css('-webkit-transform-origin', '0 0');
        $('#h' + (m + 1)).css('-moz-transform-origin', '0 0');
        $('#h' + (m + 1)).css('-o-transform-origin', '0 0');
        $('#h' + (m + 1)).css('-ms-transform-origin', '0 0');
		
		$('#r' + (m + 1)).css('-webkit-transform', textscalelefttemp);
        $('#r' + (m + 1)).css('-moz-transform', textscalelefttemp);
        $('#r' + (m + 1)).css('-o-transform', textscalelefttemp);
        $('#r' + (m + 1)).css('-ms-transform', textscalelefttemp);
        $('#r' + (m + 1)).css('-moz-transform-origin', '0 0');
        $('#r' + (m + 1)).css('-webkit-transform-origin', '0 0');
        $('#r' + (m + 1)).css('-moz-transform-origin', '0 0');
        $('#r' + (m + 1)).css('-o-transform-origin', '0 0');
        $('#r' + (m + 1)).css('-ms-transform-origin', '0 0');
		
        $('#c' + (m + 1)).css('-webkit-transform', textscalelefttemp);
        $('#c' + (m + 1)).css('-moz-transform', textscalelefttemp);
        $('#c' + (m + 1)).css('-o-transform', textscalelefttemp);
        $('#c' + (m + 1)).css('-ms-transform', textscalelefttemp);
        $('#c' + (m + 1)).css('-moz-transform-origin', '0 0');
        $('#c' + (m + 1)).css('-webkit-transform-origin', '0 0');
        $('#c' + (m + 1)).css('-moz-transform-origin', '0 0');
        $('#c' + (m + 1)).css('-o-transform-origin', '0 0');
        $('#c' + (m + 1)).css('-ms-transform-origin', '0 0');
    }
	
	$('#canvas').css('-webkit-transform', scale);
    $('#canvas').css('-moz-transform', scale);
    $('#canvas').css('-o-transform', scale);
    $('#canvas').css('-ms-transform', scale);
    $('#canvas').css('-moz-transform-origin', '0 0');
    $('#canvas').css('-webkit-transform-origin', '0 0');
    $('#canvas').css('-moz-transform-origin', '0 0');
    $('#canvas').css('-o-transform-origin', '0 0');
    $('#canvas').css('-ms-transform-origin', '0 0');
	
	$('#canvas1').css('-webkit-transform', scale);
    $('#canvas1').css('-moz-transform', scale);
    $('#canvas1').css('-o-transform', scale);
    $('#canvas1').css('-ms-transform', scale);
    $('#canvas1').css('-moz-transform-origin', '0 0');
    $('#canvas1').css('-webkit-transform-origin', '0 0');
    $('#canvas1').css('-moz-transform-origin', '0 0');
    $('#canvas1').css('-o-transform-origin', '0 0');
    $('#canvas1').css('-ms-transform-origin', '0 0');
}


function checkval(){
	clearInterval(id);
	Jeopardyinit();    
}


function Jeopardyinit() {
	canvas1 = document.getElementById("canvas1");
	exportRoot1 = new lib.FeedbackMc();

	stage1 = new createjs.Stage(canvas1);
	canvas1.width = movieWidth+20;
    canvas1.height = movieHeight;
   
    stage1.scaleX = movieWidth / 640;
    stage1.scaleY = movieHeight / 480;
	stage1.addChild(exportRoot1);
	stage1.update();
	createjs.Ticker.setFPS(24);
	
	$('#canvas1').hide()
	$('#canvas1').css('zIndex',-100)
	
	exportRoot1.Wfeedback.visible = false;
	exportRoot1.Rfeedback.visible = false;
	
	
    //hide all html elements
    $('#questiontitle').hide();
    for (var k = 0; k < 6; k++)
    {
        var id = '#' + (k + 1);
        $(id).hide();
		
		 var id1 = '#h' + (k + 1);
		 $(id1).css({
			 "visibility":"visible"
		 })
        $(id1).hide();
    }
    $('#radiobuttons').hide();
    $('#checkboxes').hide();
    var allWidgets = window.parent.document.getElementsByClassName("cp-widget");
    var myFrameName = window.name;
    var myWidgetiFrame = window.parent.document.getElementById(window.name);
    if (myWidgetiFrame)
    {
        myWidgetiFrame.parentElement.parentElement.style.top = parseInt(myWidgetiFrame.parentElement.parentElement.style.top.split("px")) - 5 + "px";
        myWidgetiFrame.parentElement.parentElement.style.left = parseInt(myWidgetiFrame.parentElement.parentElement.style.left.split("px")) - 5 + "px";
        myWidgetiFrame.style.height = movieWidth + "px";
        myWidgetiFrame.style.width = movieWidth + "px";
    }
    //set width and height
    var gridwidth = 609;
    var gridheight = 390;
    widthscale = gridwidth / (n_cols * 100);
    heightscale = gridheight / (n_rows * 100);
    topicwidthscale = gridwidth / (n_cols * 203);
    canvas = document.getElementById("canvas");
    exportRoot = new lib.jeopardyhtml(n_rows, n_cols, widthscale, heightscale, topicwidthscale, topichex, gamehex, cellhex);
    canvas.width = movieWidth;
    canvas.height = movieHeight;
    stage = new createjs.Stage(canvas);
    stage.scaleX = movieWidth / 640;
    stage.scaleY = movieHeight / 480;
    scalePercentagew = movieWidth / 640;
    scalePercentageh = movieHeight / 480;
    stage.addChild(exportRoot);
    stage.update();
    createjs.Ticker.setFPS(24);
    createjs.Ticker.addListener(stage);
    createjs.Touch.enable(stage)
    stage.enableMouseOver();
    //implement the functionality here
    exportRoot.Question.visible = false;
	
	exportRoot.Qbcg.visible = false;
	
    for (var i = 0; i < n_cols; i++)
    {
        exportRoot.gridtopic[i].visible = false
    }
    for (var i = 0; i < n_rows; i++)
    {
        for (var j = 0; j < n_cols; j++)
        {
            exportRoot.gridbox[i][j].visible = false;
        }
    }
    exportRoot.runtime.topichover.visible = false;
    exportRoot.runtime.StartScreen.jeopardytitle_Mc.jeopardytitle.text = GameTitle.toString()
    exportRoot.runtime.JeopardyTitle.text = GameTitle.toString()

    

	
	finishedarray = finished.split(":")
			
	//console.log(finishedarray,"finishedarray")
	//console.log(no_of_attempts,no_of_tries,"no_of_attempts and no_of_tries")
	
	if (parent.cpInQuizScope==true) {
		if (lcap.CPMovieHandle.getQuizController().m_QuizzingData.isInReviewMode==true) {
			if (finishedarray[0]=="complete") {
				//trace("u r in review mode")
				setsuccessmode();
			} else {
				//trace("u r in review mode")
				setfailuremode();
			}
		} else if (no_of_tries < no_of_attempts) {
			if (finishedarray[0]=="notdone") {
				setnotdonemode();
			} else if (finishedarray[0] == "complete") {
				//trace("u r in review mode")
				setsuccessmode();
			} else {
				setfailuremode();
			}
		} else if (no_of_tries >= no_of_attempts) {
			if (finishedarray[0]=="notdone") {
				setnotdonemode();
			} else if (finishedarray[0] == "complete") {
				//trace("u r in review mode")
				setsuccessmode();
			} else {
				setfailuremode();
			}
		}
	} else {
		if (lcap.CPMovieHandle.getQuizController().m_QuizzingData!=null) {
			if (lcap.CPMovieHandle.getQuizController().m_QuizzingData.isInReviewMode==true) {
		
				if (finishedarray[0]=="notdone") {
					if (finishedarray[1]=="quiz") {
						setfailuremode();
					} else {
						setnotdonemode();
					}
				} else if (finishedarray[0] == "complete") {
					//trace("u r in review mode")
					setsuccessmode();
				} else {
					setfailuremode();
				}
		
			} else if (no_of_tries < no_of_attempts) {
		
				if (finishedarray[0]=="notdone") {
					setnotdonemode();
				} else if (finishedarray[0] == "complete") {
					//trace("u r in review mode")
					setsuccessmode();
				}
		
			} else if (no_of_tries >= no_of_attempts) {
				if (finishedarray[0]=="notdone") {
					setnotdonemode();
				} else if (finishedarray[0] == "complete") {
					//trace("u r in review mode")
					setsuccessmode();
				} else {
					setfailuremode();
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
}

function setsuccessmode()
{

$('#gamedesc').hide();
        var lInteractiveWidgetHandle = lcap.CPMovieHandle.getInteractiveWidgetHandle();
        lInteractiveWidgetHandle.setSuccess(true);
        exportRoot.runtime.StartScreen.visible = false;
        exportRoot.runtime.EndScreen.visible = true;
        exportRoot.runtime.EndScreen.finalscore.text = finishedarray[1]
		exportRoot.runtime.mainscore.money_1.text  = finishedarray[1]
		exportRoot.runtime.topichover.visible = false
		if(m_VariableHandle != null){
			m_VariableHandle[VarFScore] = finishedarray[1];
		}
		
}

function setfailuremode()
{

$('#gamedesc').hide();
        var lInteractiveWidgetHandle = lcap.CPMovieHandle.getInteractiveWidgetHandle();
        lInteractiveWidgetHandle.setSuccess(false);
        exportRoot.runtime.StartScreen.visible = false;
        exportRoot.runtime.EndScreen.visible = true;
		exportRoot.runtime.topichover.visible = false
        exportRoot.runtime.EndScreen.finalscore.text = "0"
		exportRoot.runtime.mainscore.money_1.text = "0"	
		if(m_VariableHandle != null){
			m_VariableHandle[VarFScore] = "0";
		}
}

function setnotdonemode()
{
		exportRoot.runtime.StartScreen.visible = true;
        exportRoot.runtime.EndScreen.visible = false;
        exportRoot.runtime.StartScreen.gamestart.onPress = startthegame;
        exportRoot.runtime.StartScreen.gamestart.onMouseOver = showhand;
        exportRoot.runtime.StartScreen.gamestart.onMouseOut = removehand;
		
        $('#gamedesc').attr('rows', 8)
        $('#gamedesc').attr('cols', 37)
		$('#gamedesc').css({
			zIndex: 5,
			//left: (162*scalePercentagew) + "px",
			//top: (301*scalePercentageh) + "px",
		}).show();
        $('#gamedesc').css(
        {
            //width: 310 + "px",
            //height: 132 + "px",
            //left: ((scalePercentagew * 640) / 2 - (316 * scalePercentagew) / 2) + "px",
            //top: (exportRoot.runtime.StartScreen.instance_253.y * scalePercentageh - 10) + "px",
            backgroundColor: 'transparent',
            textAlign: 'center',
        });
        $('#gamedesc').val(GameDescription);
}
function removehand()
{
    canvas.style.cursor = "default"
}

function showhand(e)
{
    canvas.style.cursor = "pointer"
}

function startthegame()
{
    $('#gamedesc').hide();
    exportRoot.runtime.StartScreen.visible = false
    for (var i = 0; i < n_cols; i++)
    {
        exportRoot.gridtopic[i].visible = true
		
		var str = $(dataXML.find('topic')[i]).attr('name')
		if(str.length > 8)
		{
		if(str.search(" ") != -1)
		{
		exportRoot.gridtopic[i].topicname.text = str.split(" ")[0]
		}
		else
		exportRoot.gridtopic[i].topicname.text = str.substr(0,8)
		}
		else
        exportRoot.gridtopic[i].topicname.text = str
		exportRoot.gridtopic[i].name = $(dataXML.find('topic')[i]).attr('name')
        exportRoot.gridtopic[i].topicname.onMouseOver = showtopic;
        exportRoot.gridtopic[i].topicname.onMouseOut = dontshowtopic;
    }
    //align the grid boxes correctly
    ////console.log(exportRoot.runtime.JeopardyTitle.x,exportRoot.runtime.JeopardyTitle.y,"exportRoot.runtime.JeopardyTitle.x,exportRoot.runtime.JeopardyTitle.y");
    ////console.log(exportRoot.Question.x,exportRoot.Question.y,"exportRoot.Question.x,exportRoot.Question.y");
    for (var i = 0; i < n_rows; i++)
    {
        for (var j = 0; j < n_cols; j++)
        {
            exportRoot.gridbox[i][j].visible = true;
            //exportRoot.gridbox[i][j].base_2.gotoAndStop(0);
            exportRoot.gridbox[i][j].base_1.cellcolor.visible = true;
            exportRoot.gridbox[i][j].base_1.instance_14.visible = false;
			exportRoot.gridbox[i][j].base_1.instance_15.visible = false;
            exportRoot.gridbox[i][j].name = i + ',' + j;
            exportRoot.gridbox[i][j].onPress = openquestionpanel;
            exportRoot.gridbox[i][j].onMouseOver = showhand;
            exportRoot.gridbox[i][j].onMouseOut = removehand;
            ////console.log(exportRoot.gridbox[i][j].x,exportRoot.gridbox[i][j].y,"X and Y")
        }
    }
}

function showtopic(e)
{
    exportRoot.runtime.topichover.visible = true;
    exportRoot.runtime.topichover.text = e.target.parent.name;
}

function dontshowtopic(e)
{
    exportRoot.runtime.topichover.text = '';
    exportRoot.runtime.topichover.visible = false;
}

function openquestionpanel(e)
{

exportRoot.Qbcg.visible = true;
    openedcells = openedcells + 1;
    //////console.log(e.target.name,"exportRoot.gridbox[i][j].name")
    var i = e.target.name.split(',')[0]
    var j = e.target.name.split(',')[1]
    selI = j;
    selJ = i;
    timer = Math.floor(($($(dataXML.find('topic')[j]).find('question')[i]).attr("time")) / 60) + ":" + ($($(dataXML.find('topic')[j]).find('question')[i]).attr("time")) % 60;
    var minutehand = Math.floor(($($(dataXML.find('topic')[j]).find('question')[i]).attr("time")) / 60)
    if (minutehand < 10)
        minutehand = "0" + minutehand.toString();
    var sechand = ($($(dataXML.find('topic')[j]).find('question')[i]).attr("time")) % 60;
    if (sechand < 10)
        sechand = "0" + sechand.toString();
    starttime(j, i);
    loadquestion(j, i);
    e.target.onPress = null;
	e.target.onMouseOver = null
    e.target.opened = 1
    exportRoot.Question.base_3.showtime.showt.text = minutehand.toString() + ":" + sechand.toString();
    //exportRoot.Question.base_3.showtime.showt.text = timer
    exportRoot.Question.base_3.submit_mask.visible = true;
    exportRoot.Question.base_3.money_2.text =  currencysymbol + $($(dataXML.find('topic')[j]).find('question')[i]).attr("score") ;
    for (var i = 0; i < n_rows; i++)
    {
        for (var j = 0; j < n_cols; j++)
        {
            exportRoot.gridbox[i][j].onPress = null;
            exportRoot.gridbox[i][j].onMouseOver = null;
            //exportRoot.gridbox[i][j].onMouseOut = null;
        }
    }
    e.target.base_1.cellcolor.visible = false;
    //e.target.base_1.instance_14.visible = true;
    exportRoot.Question.visible = true;
    exportRoot.Question.Rfeedback.visible = false;
    exportRoot.Question.Wfeedback.visible = false;
    //exportRoot.Question.
    exportRoot.Question.base_3.submit.onPress = null;
    exportRoot1.Wfeedback.onPress = closequestion;
    exportRoot1.Rfeedback.onPress = closequestion;
    exportRoot.Question.base_3.submit.onMouseOver = null;
    exportRoot.Question.base_3.submit.onMouseOut = null;
}

function validatequestion()
{
    ////console.log("validate ",selI,selJ)
    var i = selI;
    var j = selJ;
	var wrong = 0;
    if ($($(dataXML.find('topic')[i]).find('question')[j]).attr("MCMS") == 'true')
    {
        var correctstring = $($(dataXML.find('topic')[i]).find('question')[j]).attr("correct").split(",");
        for (var k = 0; k < 6; k++)
        {
            var seethis = $('#c' + (k + 1)).prop('checked')
            ////console.log(seethis,"seee",correctstring[k])
            if (correctstring[k] == seethis.toString())
            {}
            else
            {
                totalscore = totalscore - parseInt($($(dataXML.find('topic')[i]).find('question')[j]).attr("score"))
                  wrong = 1;
				  
                break;
            }
        }
      
		
		if(wrong == 1)
		{
			showWfeedback();
		}
		else
		{
		
		  totalscore = totalscore + parseInt($($(dataXML.find('topic')[i]).find('question')[j]).attr("score"))
        showRfeedback();
		}
    }
    else
    {
        var rad = $($(dataXML.find('topic')[i]).find('question')[j]).attr("correct");
        //var isChecked = $(rad).prop('checked')?"true":"false";
        var seethis = $("input[name=choices]:checked").attr('id');
        ////console.log(seethis,$(rad).prop('checked'),rad);
        if (seethis == rad)
        {
            ////console.log("its correct");
            totalscore = totalscore + parseInt($($(dataXML.find('topic')[i]).find('question')[j]).attr("score"))
            showRfeedback();
        }
        else
        {
            ////console.log("its wrong")
            totalscore = totalscore - parseInt($($(dataXML.find('topic')[i]).find('question')[j]).attr("score"))
            showWfeedback();
        }
    }
}

function showRfeedback()
{


	$('#canvas1').show()
	$('#canvas1').css('zIndex',5)
	
	exportRoot.gridbox[selJ][selI].base_1.instance_14.visible = true;
	
    for (var i = 0; i < 6; i++)
    {
        $('#r' + (i + 1)).attr('disabled', 'disabled');
        $('#c' + (i + 1)).attr('disabled', 'disabled');
		
		$('#' + (i + 1)).off('click');

		$('#' + (i + 1)).on('click',function() {closequestion();});
        //$('#'+(i+1)).bind('focus',function() {closequestion()});
    }
    clearInterval(timerid);
    exportRoot1.Rfeedback.rightfb.text = $($(dataXML.find('topic')[selI]).find('question')[selJ]).attr("Rfeedback")
	////console.log(exportRoot1.Rfeedback.rightfb.text,"exportRoot1.Rfeedback.rightfb.text")
    exportRoot1.Rfeedback.visible = true;
	exportRoot1.Wfeedback.visible = false;
	stage1.update();
}

function showWfeedback()
{

$('#canvas1').show()
	$('#canvas1').css('zIndex',5)
	
	exportRoot.gridbox[selJ][selI].base_1.instance_15.visible = true;
    for (var i = 0; i < 6; i++)
    {
        $('#r' + (i + 1)).attr('disabled', 'disabled');
        $('#c' + (i + 1)).attr('disabled', 'disabled');
		
		
		$('#' + (i + 1)).off('click');

		$('#' + (i + 1)).on('click',function() {closequestion();});
        //$('#'+(i+1)).bind('focus',function() {closequestion()});
    }
    clearInterval(timerid);
    exportRoot1.Wfeedback.wrongfb.text = $($(dataXML.find('topic')[selI]).find('question')[selJ]).attr("Wfeedback")
    exportRoot1.Wfeedback.visible = true;
	exportRoot1.Rfeedback.visible = false;
	stage1.update();
}

function loadquestion(i, j)
{
    //question title
    var x = $($(dataXML.find('topic')[i]).find('question')[j]).attr("title")
    $('#questiontitle').val(x.toString());
    $('#questiontitle').css("font-family", 'Verdana')
    $('#questiontitle').css('font-size', '15px');
    $('#questiontitle').focus(function ()
    {
        $('#questiontitle').css('outline', 'none');
    });
    $('#questiontitle').css(
    {
        zIndex: 5,
       // left: '33px',
        //top: '75px',
        background: 'none'
    }).show();
    $('#questiontitle').css(
    {
       // top: (75 * scalePercentageh) + "px",
        //left: (33 * scalePercentagew) + "px",
        //width: 580 * scalePercentagew + "px",
        //height: 76 * scalePercentageh + "px",
    });
    $('#questiontitle').css('-webkit-user-select', 'none')
    $('#questiontitle').css('-moz-user-select', '-moz-none')
    $('#questiontitle').css('-ms-user-select', 'none')
    ////console.log(scalePercentageh,scalePercentagew,"scalePercentageh,scalePercentagew")
    //load answer textarea
    for (var k = 0; k < $($(dataXML.find('topic')[i]).find('question')[j]).children().length; k++)
    {
        //highlightarea
		
		var id1 = '#h' + (k + 1);
        $(id1).hide();
        $(id1).css('z-index', 1);
       // $(id1).css('left', '20px');
       // $(id1).css('top', (160 + (k * 40)) + 'px');
        $(id1).css('-webkit-user-select', 'none')
        $(id1).css('-moz-user-select', '-moz-none')
        $(id1).css('-ms-user-select', 'none')
        $(id1).css(
        {
            //left: 8 + "px",
            //top: ((160 + (k * 40)) * scalePercentageh) + "px",
           // width: 608  + "px",
           // height: optHeight  + "px",
        });
       
		
        var id = '#' + (k + 1);
        $(id).show();
        $(id).css('z-index', 1);
       // $(id).css('left', '45px');
       // $(id).css('top', (160 + (k * 40)) + 'px');
        $(id).css('-webkit-user-select', 'none')
        $(id).css('-moz-user-select', '-moz-none')
        $(id).css('-ms-user-select', 'none')
        $(id).css(
        {
            //left: 8 + "px",
            //top: ((160 + (k * 40)) * scalePercentageh) + "px",
           // width: 580  + "px",
            //height: 35  + "px",
        });
        $(id).css("font-family", 'Verdana')
        $(id).css('font-size', '15px');
        $(id).val($($($($(dataXML.find('topic')[i]).find('question')[j])).find('option')[k]).text())
        $(id).focus(function ()
        {
            $(id).css('outline', 'none');
			
        });
		
		
		$(id).on('mouseover',
		function (e)
        {
		var k = e.target.id;
		
		$('#h'+k).show();
		});
		
		
		$(id).on('mouseout',
		function (e)
        {
		var k = e.target.id;
		
		$('#h'+k).hide();
		});
		
		
		$(id).off('click');
		$(id).on('click',
		function (e)
        {
		
		var k = e.target.id
		
            //console.log("u clicked me" , '#c' + (k), '#r' + (k), e.target.id)
			if ($($(dataXML.find('topic')[selI]).find('question')[selJ]).attr("MCMS") == 'true')
			{
			
			//console.log("checkbox")
				if($('#c' + (k)).prop('checked') == true)
				{
					$('#c' + (k)).prop('checked', false);
				}
				else
				{
					$('#c' + (k)).prop('checked', true);
					//console.log($('#c' + (k)).prop('checked'))
				}
				
				for (var k = 0; k < $($(dataXML.find('topic')[selI]).find('question')[selJ]).children().length; k++)
                {
                    if ($('#c' + (k + 1)).prop('checked') == true)
                    {
                        atleastoneselected = 1;
                        break;
                    }
                    else
                    {
                        atleastoneselected = 0;
                    }
                }
                if (atleastoneselected == 1)
                {
                    exportRoot.Question.base_3.submit_mask.visible = false;
                    exportRoot.Question.base_3.submit.onPress = validatequestion;

                    exportRoot.Question.base_3.submit.onMouseOver = showhand;
                    exportRoot.Question.base_3.submit.onMouseOut = removehand;
                }
                else
                {
                    exportRoot.Question.base_3.submit_mask.visible = true;
                    exportRoot.Question.base_3.submit.onPress = null;
                    exportRoot.Question.base_3.submit.onMouseOver = null;
                    exportRoot.Question.base_3.submit.onMouseOut = null;
                }
				
			}
			else
			{
			//console.log("radiobutton")
			$('#r' + (k)).prop('checked', true);
			
			atleastoneselected = 1;
                exportRoot.Question.base_3.submit_mask.visible = false;
                exportRoot.Question.base_3.submit.onPress = validatequestion;
                exportRoot.Question.base_3.submit.onMouseOver = showhand;
                exportRoot.Question.base_3.submit.onMouseOut = removehand;
				
			}
			
        });
		
		
		
        //show radiobuttons or checkboxes
        if ($($(dataXML.find('topic')[i]).find('question')[j]).attr("MCMS") == 'true')
        {
            //show checkbox and make radio invisible
            $('#radiobuttons').hide();
            $('#checkboxes').show();
            var cid = '#c' + (k + 1);
            $(cid).show();
            $(cid).css('z-index', 1);
            //$(cid).css('left', '16px');
            //$(cid).css('top', (160 + (k * 40)) + 'px');
            $(cid).css(
            {
               // left: (16 * scalePercentagew) + "px",
               // top: ((156 + (k * 40)) * scalePercentageh) + "px",
            });
            $('input:checkbox').on('change', function ()
            {
                //access value of changed radio group with $(this).val()
                ////console.log($(this).attr('id'),"$(this).val()")
                for (var k = 0; k < $($(dataXML.find('topic')[selI]).find('question')[selJ]).children().length; k++)
                {
                    if ($('#c' + (k + 1)).prop('checked'))
                    {
                        atleastoneselected = 1;
                        break;
                    }
                    else
                    {
                        atleastoneselected = 0;
                    }
                }
                if (atleastoneselected == 1)
                {
                    exportRoot.Question.base_3.submit_mask.visible = false;
                    exportRoot.Question.base_3.submit.onPress = validatequestion;
                    exportRoot.Question.base_3.submit.onMouseOver = showhand;
                    exportRoot.Question.base_3.submit.onMouseOut = removehand;
                }
                else
                {
                    exportRoot.Question.base_3.submit_mask.visible = true;
                    exportRoot.Question.base_3.submit.onPress = null;
                    exportRoot.Question.base_3.submit.onMouseOver = null;
                    exportRoot.Question.base_3.submit.onMouseOut = null;
                }
            });
        }
        else
        {
            //show radio and hide check boxes
            $('#checkboxes').hide();
            $('#radiobuttons').show();
            var rid = '#r' + (k + 1);
            $(rid).show();
            $(rid).css('z-index', 1);
            //$(rid).css('left', '16px');
           // $(rid).css('top', (160 + (k * 40)) + 'px');
            $(rid).css(
            {
               // left: (16 * scalePercentagew) + "px",
                //top: ((156 + (k * 40)) * scalePercentageh) + "px",
            });
            $('input:radio').on('change', function ()
            {
                //access value of changed radio group with $(this).val()
                ////console.log($(this).attr('id'),"$(this).val()")
                atleastoneselected = 1;
                exportRoot.Question.base_3.submit_mask.visible = false;
                exportRoot.Question.base_3.submit.onPress = validatequestion;
                exportRoot.Question.base_3.submit.onMouseOver = showhand;
                exportRoot.Question.base_3.submit.onMouseOut = removehand;
            });
        }
    }
    for (var i = $($(dataXML.find('topic')[selI]).find('question')[selJ]).children().length; i < 6; i++)
    {
        var cid = '#c' + (i + 1);
        $(cid).hide();
        var rid = '#r' + (i + 1);
        $(rid).hide();
    }
    for (var i = 0; i < 6; i++)
    {
        $('#r' + (i + 1)).removeAttr("disabled");
        $('#c' + (i + 1)).removeAttr("disabled");
    }
}

function starttime(i, j)
{
    rem = $($(dataXML.find('topic')[i]).find('question')[j]).attr("time");
    timerid = setInterval(updatetime, 1000)
}

function updatetime()
{
    if (rem <= 1)
    {
	
	exportRoot.gridbox[selJ][selI].base_1.instance_15.visible = true;
	
	$('#canvas1').show()
	$('#canvas1').css('zIndex',5)
	
        clearInterval(timerid);
        exportRoot1.Wfeedback.visible = true;
		exportRoot1.Rfeedback.visible = false;
        exportRoot1.Wfeedback.wrongfb.text = "TIME UP!\n" + $($(dataXML.find('topic')[selI]).find('question')[selJ]).attr("Wfeedback")
		
		stage1.update();
        for (var i = 0; i < 6; i++)
        {
            $('#r' + (i + 1)).attr('disabled', 'disabled');
            $('#c' + (i + 1)).attr('disabled', 'disabled');
			
		$('#' + (i + 1)).off('click');

		$('#' + (i + 1)).on('click',function() {closequestion();});
		
            //$(i+1).css({color:'grey'})
        }
    }
    rem = parseInt(rem) - 1;
    var minutehand = Math.floor(rem / 60)
    if (minutehand < 10)
        minutehand = "0" + minutehand.toString();
    var sechand = rem % 60;
    if (sechand < 10)
        sechand = "0" + sechand.toString();
    exportRoot.Question.base_3.showtime.showt.text = minutehand.toString() + ":" + sechand.toString();
}

function closequestion()
{

exportRoot.Qbcg.visible = false;

		$('#canvas1').hide()
	$('#canvas1').css('zIndex',-100)

    atleastoneselected = 0;
    exportRoot.runtime.mainscore.money_1.text = totalscore
	if(m_VariableHandle != null){
		m_VariableHandle[VarFScore] = totalscore;
	}
    ////console.log(totalscore,'totalscore')
    clearInterval(timerid);
    //hide individually
    for (var m = 0; m < 6; m++)
    {
        //dont show these
        $('#c' + (m + 1)).hide();
        $('#r' + (m + 1)).hide();
		
        //$('#'+(m+1)).unbind('focus',function() {closequestion()})
    }
    $('#radiobuttons').hide();
    $('#checkboxes').hide();
    $("#questiontitle").hide();
    for (var k = 0; k < 6; k++)
    {
        var id = '#' + (k + 1);
        $(id).hide();
		
		var id1 = '#h' + (k + 1);
        $(id1).hide();
		
        $('#r' + (k + 1)).prop('checked', false);
        $('#c' + (k + 1)).prop('checked', false);
    }
    exportRoot.Question.visible = false;
    for (var i = 0; i < n_rows; i++)
    {
        for (var j = 0; j < n_cols; j++)
        {
            if (exportRoot.gridbox[i][j].opened != 1)
                {exportRoot.gridbox[i][j].onPress = openquestionpanel;
            exportRoot.gridbox[i][j].onMouseOver = showhand;}
            //exportRoot.gridbox[i][j].onMouseOut = removehand;
            //elem.style.cursor = 'pointer'
        }
    }
    if (totalcells == openedcells)
    {
        for (var i = 0; i < n_rows; i++)
        {
            for (var j = 0; j < n_cols; j++)
            {
                exportRoot.gridbox[i][j].visible = false
            }
        }
        for (var i = 0; i < n_cols; i++)
        {
            exportRoot.gridtopic[i].visible = false
        }
        exportRoot.runtime.EndScreen.visible = true;
        exportRoot.runtime.EndScreen.finalscore.text = totalscore
        finished = "complete:" + totalscore;
        var lInteractiveWidgetHandle = lcap.CPMovieHandle.getInteractiveWidgetHandle();
        lInteractiveWidgetHandle.setSuccess(true);
    }
}

function updateSizeNPositionOnResizeComplete(){
	resizeInteraction(width,height);
}