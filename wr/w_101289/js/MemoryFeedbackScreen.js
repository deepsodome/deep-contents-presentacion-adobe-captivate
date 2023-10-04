(function (lib, img, createjs) {

var p // shortcut to reference prototypes
var mainGameName, mainGameNameColor, gameOverText,gameOverColor,timeUpText,timeUpColor,playBtnName,playBtnColor,addTextTxt,addTextColor,finalScoreColor; // Additional variables added for future use

// stage content:
(lib.MemoryFeedbackScreen = function(varMainGameName, varMainGameNameColor, varGameOverText,varGameOverColor, varTimeUpText, varTimeUpColor, varPlayBtnName, varPlayBtnColor,varAddTextTxt,varAddTextColor, varFinalScoreColor) {
	
	mainGameName = varMainGameName;
	mainGameNameColor = varMainGameNameColor;
	gameOverText = varGameOverText;
	gameOverColor = varGameOverColor;
	timeUpText = varTimeUpText;
	timeUpColor	= varTimeUpColor;
	playBtnName = varPlayBtnName;
	playBtnColor = varPlayBtnColor;
	finalScoreColor = varFinalScoreColor;
	addTextTxt = varAddTextTxt;
	addTextColor = varAddTextColor;
	
	this.initialize();

	// StartScreen
	this.startArea = new lib.startScreen_mc();
	this.startArea.setTransform(261.5,158.4,1,1,0,0,0,261.5,158.4);

	// End
	this.endArea = new lib.feedback();
	this.endArea.setTransform(320,240,1,1,0,0,0,320,240);
	
	// bg
	this.baseArea = new lib.mainbase_mc();
	this.baseArea.setTransform(320,240,1,1,0,0,0,320,240);

	this.addChild(this.baseArea,this.endArea,this.startArea);
}).prototype = p = new createjs.Container();
p.nominalBounds = new createjs.Rectangle(12.1,119,622,352.6);


// symbols:
(lib.gameOvermc = function() {
	this.initialize();

	// Layer 1
	this.txt_1 = new createjs.Text(gameOverText, "bold 58px Tahoma", gameOverColor);
	this.txt_1.textAlign = "center";
	this.txt_1.lineHeight = 60;
	this.txt_1.lineWidth = 601;
	this.txt_1.setTransform(300.5,0);

	this.addChild(this.txt_1);
}).prototype = p = new createjs.Container();
p.nominalBounds = new createjs.Rectangle(0,0,605,74.1);


(lib.timeUpMc = function() {
	this.initialize();

	// Layer 1
	this.txt = new createjs.Text(timeUpText, "bold 58px Tahoma", timeUpColor);
	this.txt.textAlign = "center";
	this.txt.lineHeight = 60;
	this.txt.lineWidth = 601;
	this.txt.setTransform(300.5,0);

	this.addChild(this.txt);
}).prototype = p = new createjs.Container();
p.nominalBounds = new createjs.Rectangle(0,0,605,74.1);


(lib.scoreHolder = function() {
	this.initialize();

	// Layer 1
	this.scoreMc = new lib.scoremc();
	this.scoreMc.setTransform(56.5,23.1,1,1,0,0,0,56.5,23.1);

	this.addChild(this.scoreMc);
}).prototype = p = new createjs.Container();
p.nominalBounds = new createjs.Rectangle(0,0,113,46.3);

(lib.scoremc = function() {
	this.initialize();

	// Layer 1
	this.finalScoreTxt = new createjs.Text("", "bold 35px Tahoma", finalScoreColor);
	this.finalScoreTxt.textAlign = "center";
	this.finalScoreTxt.lineHeight = 37;
	this.finalScoreTxt.lineWidth = 109;
	this.finalScoreTxt.setTransform(54.5,0);

	this.addChild(this.finalScoreTxt);
}).prototype = p = new createjs.Container();
p.nominalBounds = new createjs.Rectangle(0,0,113,46.3);


(lib.timeUp = function() {
	this.initialize();

	this.timeUp = new lib.timeUpMc();
	this.timeUp.setTransform(302.4,37,1,1,0,0,0,302.4,37);

	this.addChild(this.timeUp);
}).prototype = p = new createjs.Container();
p.nominalBounds = new createjs.Rectangle(0,0,605,129.1);


(lib.play = function() {
	this.initialize();

	// Layer 1
	this.playBtn = new lib.PlayNow_btn();
	this.playBtn.setTransform(320,291.6);
	this.playBtn.shadow = new createjs.Shadow("#000000",3,3,4);

	this.addChild(this.playBtn);
}).prototype = p = new createjs.Container();
p.nominalBounds = new createjs.Rectangle(225.5,254.6,189,74);


// symbols:
(lib.playTxtMc = function() {
	this.initialize();

	// Layer 1
	this.playTxt = new createjs.Text(playBtnName, "30px Tahoma",playBtnColor);
	this.playTxt.textAlign = "center";
	this.playTxt.lineHeight = 32;
	this.playTxt.lineWidth = 168;
	this.playTxt.setTransform(84,0);

	this.addChild(this.playTxt);
}).prototype = p = new createjs.Container();
p.nominalBounds = new createjs.Rectangle(0,0,172,40.2);


(lib.dumBtn = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,false,{});

	// Layer 1
	this.shape = new createjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0)").s().p("AsjFxQiNAAAAiLIAAnKQAAiNCNAAIZHAAQCNAAAACNIAAHKQAACLiNAAg");
	this.shape.setTransform(94.5,37);

	this.timeline.addTween(createjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape}]},3).wait(1));

}).prototype = p = new createjs.MovieClip();
p.nominalBounds = new createjs.Rectangle(0,0,0,0);


(lib.PlayNow_btn = function() {
	this.initialize();

	// Layer 4
	this.btn = new lib.dumBtn();
	this.btn.setTransform(0,0,1,1,0,0,0,94.5,37);
	new createjs.ButtonHelper(this.btn, 0, 1, 2, false, new lib.dumBtn(), 3);

	// Layer 2
	this.playTxtMc = new lib.playTxtMc();
	this.playTxtMc.setTransform(0,0,1,1,0,0,0,86,20.1);

	// Layer 7
	this.shape = new createjs.Shape();
	this.shape.graphics.lf(["rgba(231,231,231,0)","rgba(255,255,255,0.376)"],[0,1],-28.8,9.2,-61.6,-65).s().p("AumDyIAAnJQAAiMCMgBIZIAAQBZAAAgA5QwyhSrcLiQg/gdAAhWg");

	// Layer 6
	this.shape_1 = new createjs.Shape();
	this.shape_1.graphics.f().s("#000000").ss(1,0,1).p("AMllxI5JAAQiMAAAACMIAAHLQAACMCMAAIZJAAQCMAAAAiMIAAnLQAAiMiMAAg");

	this.shape_2 = new createjs.Shape();
	this.shape_2.graphics.rf(["rgba(231,231,231,0)","rgba(0,0,0,0.569)"],[0,1],0,0,0,0,0,98.2).s().p("AsjFxQiNAAAAiLIAAnLQAAiLCNAAIZHAAQCNAAAACLIAAHLQAACLiNAAg");

	// Layer 5
	this.shape_3 = new createjs.Shape();
	this.shape_3.graphics.f("rgba(255,255,255,0.298)").s().p("AsjFxQiNAAAAiLIAAnLQAAiLCNAAIZHAAQCNAAAACLIAAHLQAACLiNAAg");

	this.addChild(this.shape_3,this.shape_2,this.shape_1,this.shape,this.playTxtMc,this.btn);
}).prototype = p = new createjs.Container();
p.nominalBounds = new createjs.Rectangle(-94.4,-36.9,189,74);


(lib.mainGameName = function() {
	this.initialize();

	// Layer 1
	this.gameName_txt = new createjs.Text(mainGameName, "bold 58px Tahoma", mainGameNameColor);
	this.gameName_txt.textAlign = "center";
	this.gameName_txt.lineHeight = 60;
	this.gameName_txt.lineWidth = 612;
	this.gameName_txt.setTransform(306,0);

	this.addChild(this.gameName_txt);
}).prototype = p = new createjs.Container();
p.nominalBounds = new createjs.Rectangle(0,0,616,74.1);


(lib.instBase2 = function() {
	this.initialize();

	// Layer 1
	this.shape_2 = new createjs.Shape();
	this.shape_2.graphics.f().s("rgba(51,51,51,0.847)").ss(2,1,1).p("EgljgPvIAAfVQAAAKAKAAMBKzAAAQAKAAAAgKIAA/V");
	this.shape_2.setTransform(240.5,100.8);

	this.shape_3 = new createjs.Shape();
	this.shape_3.graphics.lf(["#FFFFFF","#CCCCCC"],[0,1],117.4,-52.4,243.6,80).s().p("EgljgPvMBLHAAAIAAfVQAAAKgKAAMhKzAAAQgKAAAAgKIAA/V").cp();
	this.shape_3.setTransform(240.5,100.8);

	this.addChild(this.shape_3,this.shape_2);
}).prototype = p = new createjs.Container();
p.nominalBounds = new createjs.Rectangle(0,0,481,201.6);


(lib.instBase1 = function() {
	this.initialize();

	// Layer 1
	this.shape_4 = new createjs.Shape();
	this.shape_4.graphics.f().s("rgba(51,51,51,0.847)").ss(2,1,1).p("EAlkACYIAAklQAAgKgKAAMhKzAAAQgKAAAAAKIAAEhMBKzAAAEgljACUIAAAE");
	this.shape_4.setTransform(240.5,15.2);

	this.shape_5 = new createjs.Shape();
	this.shape_5.graphics.lf(["#FFFFFF","#CCCCCC"],[0,1],117.4,63.5,243.6,196).s().p("EAlkACYMhLHAAAIAAgEMBKzAAAMhKzAAAIAAkhQAAgKAKAAMBKzAAAQAKAAAAAKIAAEl").cp();
	this.shape_5.setTransform(240.5,15.2);

	this.addChild(this.shape_5,this.shape_4);
}).prototype = p = new createjs.Container();
p.nominalBounds = new createjs.Rectangle(0,0,481,30.4);


(lib.Help_btn = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{},true);

	// Layer 2
	this.shape_6 = new createjs.Shape();
	this.shape_6.graphics.f("#990000").s().p("AAAhsQgXAAgQAJQgQAJgJANQgIANAAANQAAAKAGAGQAHAGAJAAQAQAAAIgJQAJgIABgPQAAgFACgFQACgEAGAAQAGAAAAAFQADAFgBAFQAAAJgCAIQgDAIgFAHQgFAIgEAHQgEAIAAAIQAAAJAFAFQAFAFAKABQAGgBAEgCQAEgCACgEQADgEABgFQACgFAFgCQAEgFAJgDQARgHAJgKQAIgLAAgNQgBgOgGgKQgHgLgMgHQgKgHgNgEQgOgEgKAAIAAAAAAcBMQAAgOgKgKQgKgJgMgBQgOABgJAJQgKAKAAAOQAAAOAKAJQAJAKAOAAQAIAAAHgFQAIgEAFgIQAEgHAAgJIAAAA").cp();
	this.shape_6.setTransform(0.3,0.4);

	this.timeline.addTween(createjs.Tween.get({}).to({state:[{t:this.shape_6}]}).wait(4));

	// Layer 1
	this.shape_7 = new createjs.Shape();
	this.shape_7.graphics.lf(["#EEEEEE","#999999"],[0,1],0.7,-0.8,0.7,20).s("#333333").ss(1.5,1,1).p("AB/h+QA1A1AABJQAABKg1A1Qg1A1hKAAQhJAAg1g1Qg1g1AAhKQAAhJA1g1QA1g1BJAAQBKAAA1A1IAAAA").cp();

	this.shape_8 = new createjs.Shape();
	this.shape_8.graphics.lf(["#EEEEEE","#FFCC33"],[0,1],0.7,-0.8,0.7,20).s("#333333").ss(1.5,1,1).p("AB/h+QA1A1AABJQAABKg1A1Qg1A1hKAAQhJAAg1g1Qg1g1AAhKQAAhJA1g1QA1g1BJAAQBKAAA1A1IAAAA").cp();

	this.timeline.addTween(createjs.Tween.get({}).to({state:[{t:this.shape_7}]}).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_7}]},1).wait(1));

	// Layer 3
	this.shape_9 = new createjs.Shape();
	this.shape_9.graphics.f("rgba(51,51,51,0.098)").s().p("AB/h+QA1A1AABJQAABKg1A1Qg1A1hKAAQhJAAg1g1Qg1g1AAhKQAAhJA1g1QA1g1BJAAQBKAAA1A1IAAAA").cp();
	this.shape_9.setTransform(4,4);

	this.shape_10 = new createjs.Shape();
	this.shape_10.graphics.f("rgba(51,51,51,0.098)").s().p("AB/h+QA1A1AABJQAABKg1A1Qg1A1hKAAQhJAAg1g1Qg1g1AAhKQAAhJA1g1QA1g1BJAAQBKAAA1A1IAAAA").cp();
	this.shape_10.setTransform(3,3);

	this.shape_11 = new createjs.Shape();
	this.shape_11.graphics.f("rgba(51,51,51,0.098)").s().p("AB/h+QA1A1AABJQAABKg1A1Qg1A1hKAAQhJAAg1g1Qg1g1AAhKQAAhJA1g1QA1g1BJAAQBKAAA1A1IAAAA").cp();
	this.shape_11.setTransform(2,2);

	this.shape_12 = new createjs.Shape();
	this.shape_12.graphics.f("rgba(51,51,51,0.098)").s().p("AB/h+QA1A1AABJQAABKg1A1Qg1A1hKAAQhJAAg1g1Qg1g1AAhKQAAhJA1g1QA1g1BJAAQBKAAA1A1IAAAA").cp();
	this.shape_12.setTransform(1,1);

	this.shape_13 = new createjs.Shape();
	this.shape_13.graphics.f("rgba(51,51,51,0.098)").s().p("AB/h+QA1A1AABJQAABKg1A1Qg1A1hKAAQhJAAg1g1Qg1g1AAhKQAAhJA1g1QA1g1BJAAQBKAAA1A1IAAAA").cp();

	this.timeline.addTween(createjs.Tween.get({}).to({state:[{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9}]}).wait(4));

}).prototype = p = new createjs.MovieClip();
p.nominalBounds = new createjs.Rectangle(-17.9,-17.9,40,40);


(lib.Close = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{},true);

	// Layer 2
	this.shape_41 = new createjs.Shape();
	this.shape_41.graphics.f("#CC0000").s().p("ABGhCIgrA/IAuBFQAGAJADAGQADAGAAAFQAAAFgDAFQgCAEgFACQgEADgGAAQgGAAgFgDQgEgCgCgEQgDgEgHgLIgmg7IgnA9QgEAHgCADQgCADgDADQgCADgFABQgDACgGAAQgIAAgFgFQgFgFAAgJQAAgLALgPIAwhFIgpg/QgFgJgDgGQgDgGAAgHQAAgGAGgFQAFgFAIAAQAJAAAFAGQAFAFAJAPIAfA0IAig0QAEgHADgFQADgEADgEQADgCADgCQAEgCAEAAQAJAAAFAFQAFAFAAAHQAAAKgLARIAAAA").cp();
	this.shape_41.setTransform(-0.1,1.1);

	this.timeline.addTween(createjs.Tween.get({}).to({state:[{t:this.shape_41}]}).wait(4));

	// Layer 1
	this.shape_42 = new createjs.Shape();
	this.shape_42.graphics.lf(["#EEEEEE","#999999"],[0,1],0.7,-0.8,0.7,20).s("#333333").ss(1.5,1,1).p("AB/h+QA1A1AABJQAABKg1A1Qg1A1hKAAQhJAAg1g1Qg1g1AAhKQAAhJA1g1QA1g1BJAAQBKAAA1A1IAAAA").cp();
	this.shape_42.setTransform(0,0.4);

	this.shape_43 = new createjs.Shape();
	this.shape_43.graphics.lf(["#EEEEEE","#FFCC33"],[0,1],0.7,-0.8,0.7,20).s("#333333").ss(1.5,1,1).p("AB/h+QA1A1AABJQAABKg1A1Qg1A1hKAAQhJAAg1g1Qg1g1AAhKQAAhJA1g1QA1g1BJAAQBKAAA1A1IAAAA").cp();
	this.shape_43.setTransform(0,0.4);

	this.timeline.addTween(createjs.Tween.get({}).to({state:[{t:this.shape_42}]}).to({state:[{t:this.shape_43}]},1).to({state:[{t:this.shape_42}]},1).to({state:[{t:this.shape_42}]},1).wait(1));

	// Layer 3
	this.shape_44 = new createjs.Shape();
	this.shape_44.graphics.f("#B7B7B7").s("#333333").ss(1.5,1,1).p("AAAizQBKAAA1A1QA1A1AABJQAABKg1A1Qg1A1hKAAQhJAAg1g1Qg1g1AAhKQAAhJA1g1QA1g1BJAAIAAAA").cp();
	this.shape_44.setTransform(0,0.5);

	this.timeline.addTween(createjs.Tween.get({}).to({state:[{t:this.shape_44}]}).wait(4));

}).prototype = p = new createjs.MovieClip();
p.nominalBounds = new createjs.Rectangle(-17.9,-17.5,36,36.1);


(lib.mainGaimeNameMc = function() {
	this.initialize();

	// Layer 1
	this.mgn = new lib.mainGameName();

	this.addChild(this.mgn);
}).prototype = p = new createjs.Container();
p.nominalBounds = new createjs.Rectangle(0,0,616,74.1);


(lib.instBase = function() {
	this.initialize();

	// Layer 1
	this.base1 = new lib.instBase1();
	this.base1.setTransform(240.5,15.2,1,1,0,0,0,240.5,15.2);

	this.base2 = new lib.instBase2();
	this.base2.setTransform(240.5,131.8,1,1,0,0,0,240.5,100.8);

	this.addChild(this.base2,this.base1);
}).prototype = p = new createjs.Container();
p.nominalBounds = new createjs.Rectangle(0,0,481,232.6);


(lib.gameOver_mc = function() {
	this.initialize();

	this.gameOver = new lib.gameOvermc();
	this.gameOver.setTransform(302.4,37,1,1,0,0,0,302.4,37);

	this.addChild(this.gameOver);
}).prototype = p = new createjs.Container();
p.nominalBounds = new createjs.Rectangle(0,0,605,129.1);


(lib.addText_mc = function() {
	this.initialize();

	// Layer 1
	this.addTxt = new lib.addTxtmc();
	this.addTxt.setTransform(302.4,37,1,1,0,0,0,302.4,37);

	this.addChild(this.addTxt);
}).prototype = p = new createjs.Container();
p.nominalBounds = new createjs.Rectangle(0,0,605,46.3);

(lib.addTxtmc = function() {
	this.initialize();

	// Layer 1
	this.txt = new createjs.Text(addTextTxt, "bold 35px Tahoma", addTextColor);
	this.txt.textAlign = "center";
	this.txt.lineHeight = 37;
	this.txt.lineWidth = 601;
	this.txt.setTransform(300.5,0);

	this.addChild(this.txt);
}).prototype = p = new createjs.Container();
p.nominalBounds = new createjs.Rectangle(0,0,605,46.3);


(lib.instructionPaneRuntime = function() {
	this.initialize();

	// Layer 3
	this.shape_51 = new createjs.Shape();
	this.shape_51.graphics.f("#333333").s().p("AmogfIAAgSIA3AAIAAASIgPAAIAABBIAPAAIAAASIg3AAIAAgSIAPAAIAAhBIgPAAAkggSQAGAHAAANIAAAyIgYAAIAAgmQAAgFAAgFQAAgEgCgBQgBgCgCgBQgCgCgEAAQgDAAgDACQgDAAgEADIAAA1IgYAAIAAhMIAYAAIAAAJQAGgFAGgCQAFgEAHAAQAMAAAGAIIAAAAAjzAAQACABAGABQADACAEAAQAEABAEABQAIADAEAFQAFAFAAAIQAAAGgDAFQgDAEgEAEQgFAEgHACQgGACgKAAQgIAAgIgCQgHgCgFgDIAAgUIACAAQABACADABQACACAEACQADABAEABQAFABAEAAQAFAAAEgBQAEgCAAgDQAAgDgCgBQgBgBgFgCQgDAAgEgCQgFAAgDgBQgJgDgEgGQgFgFAAgHQAAgFADgEQACgFAEgEQAFgDAHgDQAGgCAJAAQAIAAAHACQAHACAEACIAAATIgCAAQgBAAgDgCQgCgBgDgCQgDgBgEgBQgDgBgEAAQgFAAgEACQgEABAAAEQAAACACAAIAAAAAi/gtIAYAAIAAAVIAXAAIAAASIgXAAIAAAZQAAADAAAEQAAADABACQABADADABQACACAFAAQACAAADgBQADgBABgBIACAAIAAARQgEABgEAAQgEABgHAAQgOAAgHgGQgHgGAAgOIAAghIgJAAIAAgSIAJAAIAAgVAhVgYQABAAABAAIAAAXIgCAAQgBAAgCAAQgDAAgDAAQgEAAgEAAQgEABgEAAIAAA0IgYAAIAAhMIAYAAIAAAMQABgCADgCQADgDADAAQACgCAEgBQADgCADAAQABAAACAAIAAAAAgygYIAAAlQAAAGAAADQAAAFACACQABADACAAQACACAEAAQADAAADgCQAEAAADgDIAAg1IAYAAIAABMIgYAAIAAgJQgGAFgGADQgFADgHAAQgLAAgHgHQgGgIAAgOIAAgxIAYAAABAgYQAGACAGADIAAATIgDAAQgBAAgCgBQgCgDgDAAQgCgCgEgBQgDgBgEAAQgJAAgFAHQgFADAAAMQAAALAFAGQAGAGAIAAQAFAAADgBQAEgBACgCQADgBABgCQACgBABgCIADAAIAAAUQgCACgCABQgDABgDABQgDAAgDABQgDABgFAAQgKAAgIgDQgIgCgGgFQgFgFgDgHQgEgIAAgKQAAgMAEgGQADgHAGgFQAGgFAIgCQAHgDAJAAQAGAAAHACIAAAAABxgYIAXAAIAAASIgXAAIAAAZQAAADAAAEQAAADABACQABADADABQACACAFAAQACAAADgBQADgBABgBIACAAIAAARQgEABgEAAQgEABgHAAQgOAAgHgGQgHgGAAgOIAAghIgJAAIAAgSIAJAAIAAgVIAYAAIAAAVACRg1IAaAAIAAATIgaAAIAAgTADTgEQgCADgBADQgBAEAAAIQAAAHABAEQABAEACADQACADADABQADABADAAQADAAADgBQADgBACgDQACgDABgEQABgEAAgHQAAgHgBgFQgBgDgCgDQgCgCgDgBQgDgCgDAAQgDAAgDACQgCABgDACIAAAAAD7gOQALAKAAARQAAATgLALQgKALgTAAQgTAAgKgLQgLgLAAgTQAAgRALgLQAKgLATAAQATAAAKAMIAAAAACqgYIAABMIgYAAIAAhMIAYAAAE3gGQgDAAgDACQgDAAgEADIAAA1IgYAAIAAhMIAYAAIAAAJQAGgFAGgCQAFgEAHAAQAMAAAGAIQAGAHAAANIAAAyIgYAAIAAgmQAAgFAAgFQAAgEgCgBQgBgCgCgBQgCgCgEAAIAAAAAFqgJQACgFAEgEQAFgDAHgDQAGgCAJAAQAIAAAHACQAHACAEACIAAATIgCAAQgBAAgDgCQgCgBgDgCQgDgBgEgBQgDgBgEAAQgFAAgEACQgEABAAAEQAAACACAAQACABAGABQADACAEAAQAEABAEABQAIADAEAFQAFAFAAAIQAAAGgDAFQgDAEgEAEQgFAEgHACQgGACgKAAQgIAAgIgCQgHgCgFgDIAAgUIACAAQABACADABQACACAEACQADABAEABQAFABAEAAQAFAAAEgBQAEgCAAgDQAAgDgCgBQgBgBgFgCQgDAAgEgCQgFAAgDgBQgJgDgEgGQgFgFAAgHQAAgFADgEIAAAA").cp();
	this.shape_51.setTransform(-188.7,-100.1);

	// Layer 1
	this.close_btn = new lib.Close();
	this.close_btn.setTransform(226.6,-101.7,0.505,0.505);

	this.shape_52 = new createjs.Shape();
	this.shape_52.graphics.f("rgba(51,51,51,0.2)").s().p("Ag/g/QAbgaAkAAQAkAAAbAaQAbAbAAAkQAAAkgbAbQgbAbgkAAQgkAAgbgbQgagbAAgkQAAgkAagbIAAAA").cp();
	this.shape_52.setTransform(228.5,-99.5);

	this.shape_53 = new createjs.Shape();
	this.shape_53.graphics.f("rgba(51,51,51,0.2)").s().p("ABaAAQAAAkgbAbQgbAbgkAAQgkAAgbgbQgagbAAgkQAAgkAagbQAbgaAkAAQAkAAAbAaQAbAbAAAkIAAAA").cp();
	this.shape_53.setTransform(228,-100);

	this.shape_54 = new createjs.Shape();
	this.shape_54.graphics.f("rgba(51,51,51,0.2)").s().p("AA/g/QAbAbAAAkQAAAkgbAbQgbAbgkAAQgkAAgbgbQgagbAAgkQAAgkAagbQAbgaAkAAQAkAAAbAaIAAAA").cp();
	this.shape_54.setTransform(227.5,-100.5);

	this.shape_55 = new createjs.Shape();
	this.shape_55.graphics.f("rgba(51,51,51,0.2)").s().p("AAAhZQAkAAAbAaQAbAbAAAkQAAAkgbAbQgbAbgkAAQgkAAgbgbQgagbAAgkQAAgkAagbQAbgaAkAAIAAAA").cp();
	this.shape_55.setTransform(227,-101);

	this.base = new lib.instBase();
	this.base.setTransform(0.1,0,1,1,0,0,0,240.5,116);

	this.shape_56 = new createjs.Shape();
	this.shape_56.graphics.f("rgba(51,51,51,0.098)").s().p("AhgAAQAAgnAcgdQAdgcAnAAQAoAAAcAcQAdAdAAAnQAAAogdAdQgcAcgoAAQgnAAgdgcQgcgdAAgoIAAAA").cp();
	this.shape_56.setTransform(226.6,-101.3,0.933,1.005);

	// Layer 5
	this.shape_57 = new createjs.Shape();
	this.shape_57.graphics.f("rgba(51,51,51,0.098)").s().p("EgljgSKMBLHAAAMAAAAkVMhLHAAAMAAAgkV").cp();
	this.shape_57.setTransform(7,7.3);

	this.shape_58 = new createjs.Shape();
	this.shape_58.graphics.f("rgba(51,51,51,0.098)").s().p("EAlkASLMhLHAAAMAAAgkVMBLHAAAMAAAAkV").cp();
	this.shape_58.setTransform(6,6.3);

	this.shape_59 = new createjs.Shape();
	this.shape_59.graphics.f("rgba(51,51,51,0.098)").s().p("EAlkgSKMAAAAkVMhLHAAAMAAAgkVMBLHAAA").cp();
	this.shape_59.setTransform(5,5.3);

	this.shape_60 = new createjs.Shape();
	this.shape_60.graphics.f("rgba(51,51,51,0.098)").s().p("EgljgSKMBLHAAAMAAAAkVMhLHAAAMAAAgkV").cp();
	this.shape_60.setTransform(4,4.3);

	this.shape_61 = new createjs.Shape();
	this.shape_61.graphics.f("rgba(51,51,51,0.098)").s().p("EAlkASLMhLHAAAMAAAgkVMBLHAAAMAAAAkV").cp();
	this.shape_61.setTransform(3,3.3);

	this.shape_62 = new createjs.Shape();
	this.shape_62.graphics.f("rgba(51,51,51,0.098)").s().p("EAlkgSKMAAAAkVMhLHAAAMAAAgkVMBLHAAA").cp();
	this.shape_62.setTransform(2,2.3);

	this.shape_63 = new createjs.Shape();
	this.shape_63.graphics.f("rgba(51,51,51,0.098)").s().p("EgljgSKMBLHAAAMAAAAkVMhLHAAAMAAAgkV").cp();
	this.shape_63.setTransform(1,1.3);

	this.shape_64 = new createjs.Shape();
	this.shape_64.graphics.f("rgba(51,51,51,0.098)").s().p("EAlkASLMhLHAAAMAAAgkVMBLHAAAMAAAAkV").cp();
	this.shape_64.setTransform(0,0.3);

	this.addChild(this.shape_64,this.shape_63,this.shape_62,this.shape_61,this.shape_60,this.shape_59,this.shape_58,this.shape_57,this.shape_56,this.base,this.shape_55,this.shape_54,this.shape_53,this.shape_52,this.close_btn,this.shape_51);
}).prototype = p = new createjs.Container();
p.nominalBounds = new createjs.Rectangle(-240.4,-115.9,488,239.6);


(lib.startScreen_mc = function() {
	this.initialize();

	// Instruction
	this.instMc = new lib.instructionPaneRuntime();
	this.instMc.setTransform(321.5,235);

	// GameName
	this.mgnMc = new lib.mainGaimeNameMc();
	this.mgnMc.setTransform(320,180,1,1,0,0,0,307.9,37);
	this.mgnMc.shadow = new createjs.Shadow("rgba(51,51,51,1)",4,4,4);

	this.playBtn = new lib.PlayNow_btn();
	this.playBtn.setTransform(320,291.6);

	this.help_btn = new lib.Help_btn();
	this.help_btn.setTransform(612,449.6);

	this.addChild(this.help_btn,this.playBtn,this.mgnMc,this.instMc);
}).prototype = p = new createjs.Container();
p.nominalBounds = new createjs.Rectangle(12.1,119,622,352.6);

(lib.feedback = function() {
	this.initialize();

	// Time up
	this.timeUpMcMain = new lib.timeUp();
	this.timeUpMcMain.setTransform(320,187.9,1,1,0,0,0,302.4,37);
	this.timeUpMcMain.shadow = new createjs.Shadow("rgba(51,51,51,1)",4,4,4);

	// GameOver
	this.gameOverMc = new lib.gameOver_mc();
	this.gameOverMc.setTransform(320,187.9,1,1,0,0,0,302.4,37);
	this.gameOverMc.shadow = new createjs.Shadow("rgba(51,51,51,1)",4,4,4);

	// Score
	this.addTxtMc = new lib.addText_mc();
	this.addTxtMc.setTransform(320,278.9,1,1,0,0,0,302.4,37);
	this.addTxtMc.shadow = new createjs.Shadow("rgba(51,51,51,1)",4,4,4);

	this.scoreHolder = new lib.scoreHolder();
	this.scoreHolder.setTransform(320,319,1,1,0,0,0,56.5,23.1);
	this.scoreHolder.shadow = new createjs.Shadow("rgba(51,51,51,1)",4,4,4);
	
	this.addChild(this.scoreHolder,this.addTxtMc,this.gameOverMc,this.timeUpMcMain);
}).prototype = p = new createjs.Container();
p.nominalBounds = new createjs.Rectangle(17.6,150.9,605,191.3);

})(lib = lib||{}, images = images||{}, createjs = createjs||{});
var lib, images, createjs;