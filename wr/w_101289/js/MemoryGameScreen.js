(function (lib, img, createjs) {

var p; // shortcut to reference prototypes
var bgColorArrange, gameNameArrange, gameNameColorArrange, scoreTimeColor, gameBgSelectedArrange;

// stage content:
(lib.MemoryGameScreen = function(varGameBgSelectedArrange,varBgColorArrange, varGameNameArrange, varGameNameColorArrange, varScoreTimeColor) {
	gameBgSelectedArrange = varGameBgSelectedArrange
	bgColorArrange = varBgColorArrange
	gameNameArrange = varGameNameArrange
	gameNameColorArrange = varGameNameColorArrange
	scoreTimeColor = varScoreTimeColor;
	
	this.initialize();

	// inwstText
	this.scorePanel = new lib.arrangeArea();
	this.scorePanel.setTransform(320,240,1,1,0,0,0,320,240);

	// GameScrren
	this.instMc = new lib.instText_mc();
	this.instMc.setTransform(230.5,9.3,1,1,0,0,0,230.5,9.3);

	// bg
	this.baseArea = new lib.mainbase_mc();
	this.baseArea.setTransform(320,240,1,1,0,0,0,320,240);

	this.addChild(this.baseArea,this.instMc,this.scorePanel);
}).prototype = p = new createjs.Container();
p.nominalBounds = new createjs.Rectangle(0,0,640,480);


// symbols:
(lib.titleMc = function() {
	this.initialize();

	// Layer 1
	this.gameName_txt = new createjs.Text(gameNameArrange, "bold 25px Tahoma",gameNameColorArrange);
	this.gameName_txt.lineHeight = 30;
	this.gameName_txt.lineWidth = 317;

	this.addChild(this.gameName_txt);
}).prototype = p = new createjs.Container();
p.nominalBounds = new createjs.Rectangle(0,0,321,34.2);


(lib.time_mc = function() {
	this.initialize();

	// Layer 1
	this.timetxt = new createjs.Text(idtime, "12px 'Tahoma'",scoreTimeColor);
	this.timetxt.name = "timetxt";
	this.timetxt.textAlign = "right";
	this.timetxt.lineHeight = 17;
	this.timetxt.lineWidth = 74;
	this.timetxt.setTransform(48.3,1.9);

	this.mins = new createjs.Text("99", "12px 'Tahoma'",scoreTimeColor);
	this.mins.name = "mins";
	this.mins.textAlign = "right";
	this.mins.lineHeight = 17;
	this.mins.lineWidth = 17;
	this.mins.setTransform(72.3,1.9,1.062,1);

	this.scnd = new createjs.Text("60", "12px 'Tahoma'",scoreTimeColor);
	this.scnd.name = "scnd";
	this.scnd.lineHeight = 17;
	this.scnd.lineWidth = 18;
	this.scnd.setTransform(84.4,1.9);

	this.text = new createjs.Text(":", "12px 'Tahoma'",scoreTimeColor);
	this.text.textAlign = "center";
	this.text.lineHeight = 17;
	this.text.setTransform(78.3,1.9,1.062,1);

	//this.timeline.addTween(createjs.Tween.get({}).to({state:[{t:this.text},{t:this.scnd},{t:this.mins},{t:this.timetxt}]}).wait(1));
	this.addChild(this.text,this.scnd,this.mins,this.timetxt);
}).prototype = p = new createjs.Container();
p.nominalBounds = new createjs.Rectangle(2.7,0,103.5,22.1);


(lib.Symbol3 = function() {
	this.initialize();

	// Layer 1
	this.shape_1 = new createjs.Shape();
	this.shape_1.graphics.f("rgba(255,255,255,0.169)").s("rgba(255,255,255,0.22)").ss(3,1,1).p("EArrgFHQBkIngoIyQmjE3nLD8QpTFHqCDWQpzDRqMBuQqFBsqOAPQl+n2j7pCQjuonhdpQQhGm7AHnDQJknfLAlLQLTlVMNitQOcjMO1gSQFzGxD4H/QD3H6BlIqIAAAA").cp();

	this.addChild(this.shape_1);
}).prototype = p = new createjs.Container();
p.nominalBounds = new createjs.Rectangle(-286.6,-233.1,573.4,466.5);


(lib.Symbol2 = function() {
	this.initialize();

	// Layer 1
	this.shape_2 = new createjs.Shape();
	this.shape_2.graphics.rf(["rgba(0,0,0,0)","#000000"],[0,1],0,0,0,0,0,399.3).s().p("EAx6AlaMhjzAAAMAAAhKzMBjzAAAMAAABKz").cp();
	this.shape_2.setTransform(0.6,0,1.002,1);

	this.addChild(this.shape_2);
}).prototype = p = new createjs.Container();
p.nominalBounds = new createjs.Rectangle(-319.4,-239.4,640.1,479);


(lib.scrtimepanel2 = function() {
	this.initialize();

	// Layer 1
	this.shape = new createjs.Shape();
	this.shape.graphics.f().s("#FFFFFF").ss(1.5,1,1).p("AozCvIQbAAQBMAAAAhaIAAipQAAhahMAAIwbAA");
	this.shape.setTransform(56.5,17.5);

	this.shape_1 = new createjs.Shape();
	this.shape_1.graphics.f("rgba(255,255,255,0.098)").s().p("AozCvIAAldIQaAAQBNAAAABaIAACpQAABahNAAg");
	this.shape_1.setTransform(56.5,17.5);

	this.addChild(this.shape_1,this.shape);
}).prototype = p = new createjs.Container();
p.nominalBounds = new createjs.Rectangle(0,0,112.9,35);


(lib.scrtimepanel1 = function() {
	this.initialize();

	// Layer 1
	this.shape = new createjs.Shape();
	this.shape.graphics.f().s("#FFFFFF").ss(1.5,1,1).p("AKnCvIAAldI0AAAQhNAAAABaIAACpQAABaBNAAg");
	this.shape.setTransform(20.4,17.5);

	this.shape_1 = new createjs.Shape();
	this.shape_1.graphics.f("rgba(255,255,255,0)").s().p("ApZCvQhNAAAAhaIAAipQAAhaBNAAIUAAAIAAFdg");
	this.shape_1.setTransform(20.4,17.5);

	this.addChild(this.shape_1,this.shape);
}).prototype = p = new createjs.Container();
p.nominalBounds = new createjs.Rectangle(-9.9,0,123.4,35);


(lib.score_mc = function() {
	this.initialize();

	// Layer 1
	this.scoretxt = new createjs.Text(idscore, "12px 'Tahoma'",scoreTimeColor);
	this.scoretxt.name = "scoretxt";
	this.scoretxt.textAlign = "right";
	this.scoretxt.lineHeight = 17;
	this.scoretxt.lineWidth = 82;
	this.scoretxt.setTransform(62.7,1.9);

	this.score = new createjs.Text("99/99", "12px 'Tahoma'",scoreTimeColor);
	this.score.name = "score";
	this.score.lineHeight = 17;
	this.score.lineWidth = 38;
	this.score.setTransform(68.8,1.9);

	this.addChild(this.score,this.scoretxt);

}).prototype = p = new createjs.Container();
p.nominalBounds = new createjs.Rectangle(-1.4,0,113,22.1);


(lib.instText_mc = function() {
	this.initialize();

	// Layer 1
	this.shape_8 = new createjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("EgkZgB3MBIzAAAIAADvMhIzAAAIAAjv").cp();
	this.shape_8.setTransform(320,460);
	this.shape_8.shadow = new createjs.Shadow("rgba(51,51,51,1)",4,4,5);
	
	this.hintInst_txt = new createjs.Text("Memorize the cards shown below. Your game will begin in", "bold 12px Tahoma","#990000");
	this.hintInst_txt.lineHeight = 30;
	this.hintInst_txt.lineWidth = 400;
	this.hintInst_txt.setTransform(120,452);

	this.addChild(this.shape_8,this.hintInst_txt);
}).prototype = p = new createjs.Container();
p.nominalBounds = new createjs.Rectangle(87,448,466,24);


(lib.focusRectSkin = function() {
	this.initialize();

	// border
	this.shape_9 = new createjs.Shape();
	this.shape_9.graphics.lf(["#0075BF","#009DFF"],[0,1],0,-10.7,0,10.8).s().p("AGahFQAAgogoAAIrjAAQgoAAAAAoIAACLQAAAoAoAAILjAAQAoAAAAgoIAAiLAGQBGQAAAdgdABIrlAAQgdgBAAgdIAAiLQAAgdAdgBILlAAQAdABAAAdIAACL").cp();
	this.shape_9.setTransform(41,11);

	this.addChild(this.shape_9);
}).prototype = p = new createjs.Container();
p.nominalBounds = new createjs.Rectangle(0.1,0,82,22);


(lib.arrowIcon = function() {
	this.initialize();

	// icon
	this.shape_10 = new createjs.Shape();
	this.shape_10.graphics.f("#666666").s().p("AAjgTIhFAAIAAAKIAKAAIAAAJIAKAAIAAAKIAKAAIAAAKIAJAAIAAgKIAKAAIAAgKIAKAAIAAgJIAKAAIAAgK").cp();
	this.shape_10.setTransform(3.5,2);

	this.addChild(this.shape_10);
}).prototype = p = new createjs.Container();
p.nominalBounds = new createjs.Rectangle(0,0,7,4);


(lib.ScrollTrack_skin = function() {
	this.initialize();

	// skin
	this.shape_11 = new createjs.Shape();
	this.shape_11.graphics.f("#CCCCCC").s().p("AAFrjIAAXHIgJAAIAA3HIAJAA").cp();
	this.shape_11.setTransform(0.3,74,0.667,1);

	this.shape_12 = new createjs.Shape();
	this.shape_12.graphics.lf(["#94999B","#E7E7E7"],[0,1],-24.6,7.3,6.3,7.2).s().p("ABBrjIAAXHIiBAAIAA3HICBAA").cp();
	this.shape_12.setTransform(5,74,0.667,1);

	this.shape_13 = new createjs.Shape();
	this.shape_13.graphics.f("#CCCCCC").s().p("AAFrjIAAXHIgJAAIAA3HIAJAA").cp();
	this.shape_13.setTransform(9.7,74,0.667,1);

	this.addChild(this.shape_13,this.shape_12,this.shape_11);
}).prototype = p = new createjs.Container();
p.nominalBounds = new createjs.Rectangle(0,0,10,148);


(lib.ScrollThumb_upSkin = function() {
	this.initialize();

	// skin
	this.shape_14 = new createjs.Shape();
	this.shape_14.graphics.lf(["#E6E6E6","#FFFFFF"],[0,1],17.6,16,17.6,-5.9).s().p("AAkjaIAAG1QAAAegTABIg0gBIAAnyIA0ABQATABAAAdIAAAA").cp();
	this.shape_14.setTransform(4.7,26);

	this.shape_15 = new createjs.Shape();
	this.shape_15.graphics.lf(["#585F63","#B7BABC"],[0,1],-3.2,2.9,-3.2,-19).s().p("AAogbIAAARQAAAmgbAAIg0AAIAAgKIA1AAQATgBAAgbIAAgRIAHAA").cp();
	this.shape_15.setTransform(5,49.2);

	this.shape_16 = new createjs.Shape();
	this.shape_16.graphics.lf(["#585F63","#B7BABC"],[0,1],-3.2,29.1,-3.2,7.1).s().p("AAoDnIgHAAIAAmlQAAgdgTgBIg1AAIAAgKIA0AAQAbAAAAAoIAAGl").cp();
	this.shape_16.setTransform(5,23.2);

	this.shape_17 = new createjs.Shape();
	this.shape_17.graphics.f("rgba(255,0,0,0)").s().p("AAKkDIAAIHIgTAAIAAoHIATAA").cp();
	this.shape_17.setTransform(10,26);

	this.addChild(this.shape_17,this.shape_16,this.shape_15,this.shape_14);
}).prototype = p = new createjs.Container();
p.nominalBounds = new createjs.Rectangle(1,0,10,52);


(lib.ScrollThumb_overSkin = function() {
	this.initialize();

	// skin
	this.shape_18 = new createjs.Shape();
	this.shape_18.graphics.f("rgba(255,0,0,0)").s().p("AAKkDIAAIHIgTAAIAAoHIATAA").cp();
	this.shape_18.setTransform(10,26);

	this.shape_19 = new createjs.Shape();
	this.shape_19.graphics.lf(["#0075BF","#009DFF"],[0,0.992],-3.2,2.9,-3.2,-19).s().p("AAogbIAAARQAAAmgbAAIg0AAIAAgKIA1AAQATgBAAgbIAAgRIAHAA").cp();
	this.shape_19.setTransform(5,49.2);

	this.shape_20 = new createjs.Shape();
	this.shape_20.graphics.lf(["#0075BF","#009DFF"],[0,0.992],-3.2,29.1,-3.2,7.1).s().p("AAoDnIgHAAIAAmlQAAgdgTgBIg1AAIAAgKIA0AAQAbAAAAAoIAAGl").cp();
	this.shape_20.setTransform(5,23.2);

	this.shape_21 = new createjs.Shape();
	this.shape_21.graphics.lf(["#E6E6E6","#FFFFFF"],[0,1],17.6,16,17.6,-5.9).s().p("AARj5QATABAAAdIAAG2QAAAegTABIg0AAIAAnzIA0AA").cp();
	this.shape_21.setTransform(4.7,26);

	this.addChild(this.shape_21,this.shape_20,this.shape_19,this.shape_18);
}).prototype = p = new createjs.Container();
p.nominalBounds = new createjs.Rectangle(1,0,10,52);


(lib.ScrollThumb_downSkin = function() {
	this.initialize();

	// skin
	this.shape_22 = new createjs.Shape();
	this.shape_22.graphics.lf(["#97A5BB","#E0E4EB"],[0,1],17.6,16,17.6,-5.9).s().p("AAkDbQAAAegTABIg0gBIAAnyIA0ABQATABAAAdIAAG1").cp();
	this.shape_22.setTransform(4.7,26);

	this.shape_23 = new createjs.Shape();
	this.shape_23.graphics.lf(["#323D4E","#8B9CB6"],[0,0.992],-3.2,2.9,-3.2,-19).s().p("AAogbIAAARQAAAmgbAAIg0AAIAAgKIA1AAQATgBAAgbIAAgRIAHAA").cp();
	this.shape_23.setTransform(5,49.2);

	this.shape_24 = new createjs.Shape();
	this.shape_24.graphics.lf(["#323D4E","#586A85"],[0,0.992],-3.2,29.1,-3.2,7.1).s().p("AAoDnIgHAAIAAmlQAAgdgTgBIg1AAIAAgKIA0AAQAbAAAAAoIAAGl").cp();
	this.shape_24.setTransform(5,23.2);

	this.shape_25 = new createjs.Shape();
	this.shape_25.graphics.f("rgba(255,0,0,0)").s().p("AAKkDIAAIHIgTAAIAAoHIATAA").cp();
	this.shape_25.setTransform(10,26);

	this.addChild(this.shape_25,this.shape_24,this.shape_23,this.shape_22);
}).prototype = p = new createjs.Container();
p.nominalBounds = new createjs.Rectangle(1,0,10,52);


(lib.ScrollBar_thumbIcon = function() {
	this.initialize();

	// Layer 1
	this.shape_26 = new createjs.Shape();
	this.shape_26.graphics.f("#5A6165").s().p("AAZAFIgxAAIAAgJIAxAAIAAAJ").cp();
	this.shape_26.setTransform(2.5,2.5);

	this.shape_27 = new createjs.Shape();
	this.shape_27.graphics.f("#5A6165").s().p("AAZAFIgxAAIAAgJIAxAAIAAAJ").cp();
	this.shape_27.setTransform(2.5,0.5);

	this.shape_28 = new createjs.Shape();
	this.shape_28.graphics.f("#5A6165").s().p("AAZAFIgxAAIAAgJIAxAAIAAAJ").cp();
	this.shape_28.setTransform(2.5,4.5);

	this.shape_29 = new createjs.Shape();
	this.shape_29.graphics.f("#5A6165").s().p("AAZAFIgxAAIAAgJIAxAAIAAAJ").cp();
	this.shape_29.setTransform(2.5,6.5);

	this.addChild(this.shape_29,this.shape_28,this.shape_27,this.shape_26);
}).prototype = p = new createjs.Container();
p.nominalBounds = new createjs.Rectangle(0,0,5,7);


(lib.ScrollArrowUp_disabledSkin = function() {
	this.initialize();

	// skin
	this.shape_30 = new createjs.Shape();
	this.shape_30.graphics.lf(["rgba(238,238,238,0)","rgba(255,255,255,0.298)"],[0,1],-0.6,3.5,-0.6,-3.1).s().p("AgqgfIBVAAIAAA/IhVAAIAAg/").cp();
	this.shape_30.setTransform(5,4);

	this.shape_31 = new createjs.Shape();
	this.shape_31.graphics.lf(["rgba(91,93,94,0.298)","rgba(183,186,188,0.298)"],[0,1],0.7,5.9,0.7,-6.9).s().p("Agqg7IBVAAIAAB3IhVAAIAAh3AAyhFIhjAAIAACLIBjAAIAAiL").cp();
	this.shape_31.setTransform(5,7);

	this.shape_32 = new createjs.Shape();
	this.shape_32.graphics.lf(["#E6E6E6","#FFFFFF"],[0,1],-0.9,7,-0.9,-6.5).s().p("AArA8IhVAAIAAh3IBVAAIAAB3").cp();
	this.shape_32.setTransform(5,7);

	this.addChild(this.shape_32,this.shape_31,this.shape_30);
}).prototype = p = new createjs.Container();
p.nominalBounds = new createjs.Rectangle(0,0,10,14);


(lib.ScrollArrowDown_disabledSkin = function() {
	this.initialize();

	// skin
	this.shape_33 = new createjs.Shape();
	this.shape_33.graphics.lf(["rgba(238,238,238,0)","rgba(255,255,255,0.298)"],[0,1],-0.6,3.5,-0.6,-3.1).s().p("AgqgfIBVAAIAAA/IhVAAIAAg/").cp();
	this.shape_33.setTransform(5,4);

	this.shape_34 = new createjs.Shape();
	this.shape_34.graphics.lf(["rgba(91,93,94,0.298)","rgba(183,186,188,0.298)"],[0,1],0.7,5.9,0.7,-6.9).s().p("Agqg7IBVAAIAAB3IhVAAIAAh3AAyhFIhjAAIAACLIBjAAIAAiL").cp();
	this.shape_34.setTransform(5,7);

	this.shape_35 = new createjs.Shape();
	this.shape_35.graphics.lf(["#E6E6E6","#FFFFFF"],[0,1],-0.9,7,-0.9,-6.5).s().p("AArA8IhVAAIAAh3IBVAAIAAB3").cp();
	this.shape_35.setTransform(5,7);

	this.addChild(this.shape_35,this.shape_34,this.shape_33);
}).prototype = p = new createjs.Container();
p.nominalBounds = new createjs.Rectangle(0,0,10,14);


(lib.base = function() {
	this.initialize();

	// Layer 1
	this.shape_36 = new createjs.Shape();
	this.shape_36.graphics.f(bgColorArrange).s("#CCCCCC").ss(1,1,1).p("EAyAglfMAAABK/Mhj/AAAMAAAhK/MBj/AAA").cp();
	this.shape_36.setTransform(320,240);

	this.addChild(this.shape_36);
}).prototype = p = new createjs.Container();
p.nominalBounds = new createjs.Rectangle(0,0,640,480);


(lib.Topheader = function() {
	this.initialize();

	// Layer 2
	this.shape = new createjs.Shape();
	this.shape.graphics.f().s("#FFFFFF").ss(1.5,1,1).p("AAAimIAAFN");
	this.shape.setTransform(-25,0.1);

	// Layer 1
	this.instance = new lib.scrtimepanel1();
	this.instance.setTransform(-56.5,0,1,1,0,0,0,56.6,17.5);

	this.shape_1 = new createjs.Shape();
	this.shape_1.graphics.f().s("#FFFFFF").ss(1.5,1,1).p("AqwCvIUVAAQBMAAAAhaIAAipQAAhahMAAI0VAA");
	this.shape_1.setTransform(44.2,0);

	this.shape_2 = new createjs.Shape();
	this.shape_2.graphics.f("rgba(255,255,255,0)").s().p("AqwCuIAAlbIUVAAQBMAAAABaIAACnQAABahMAAg");
	this.shape_2.setTransform(44.2,0);

	this.addChild(this.shape_2,this.shape_1,this.instance,this.shape);
}).prototype = p = new createjs.Container();
p.nominalBounds = new createjs.Rectangle(-123.1,-17.4,236.3,35);


(lib.title_mc = function() {
	this.initialize();

	// Layer 1
	this.gameName = new lib.titleMc();
	this.gameName.setTransform(131.3,15.9,1,1,0,0,0,131.3,15.9);

	this.addChild(this.gameName);
}).prototype = p = new createjs.Container();
p.nominalBounds = new createjs.Rectangle(0,0,321,34.2);


(lib.grad = function() {
	this.initialize();

	// Layer 1
	this.instance_2 = new lib.Symbol3("synched",0);
	this.instance_2.setTransform(322.2,240.7,1.002,1.002);
	this.instance_2.alpha = 0.148;

	this.instance_3 = new lib.Symbol2("synched",0);
	this.instance_3.setTransform(320.1,240);

	this.addChild(this.instance_3,this.instance_2);
}).prototype = p = new createjs.Container();
p.nominalBounds = new createjs.Rectangle(0.7,0.6,640,479);


(lib.ScrollArrowUp_icon = function() {
	this.initialize();

	// icon
	this.instance_4 = new lib.arrowIcon();
	this.instance_4.setTransform(3.5,2,1,1,180,0,0,3.5,2);

	this.addChild(this.instance_4);
}).prototype = p = new createjs.Container();
p.nominalBounds = new createjs.Rectangle(0,0,7,4);


(lib.ScrollArrowUp_downSkin = function() {
	this.initialize();

	// icon
	this.instance_5 = new lib.ScrollArrowUp_icon("single",0);
	this.instance_5.setTransform(2.7,4,0.667,1);

	// fill
	this.shape_38 = new createjs.Shape();
	this.shape_38.graphics.lf(["rgba(238,238,238,0)","rgba(255,255,255,0.298)"],[0,1],-0.6,3.5,-0.6,-3.1).s().p("AgqAgIAAg/IBVAAIAAA/IhVAA").cp();
	this.shape_38.setTransform(5,4.3);

	this.shape_39 = new createjs.Shape();
	this.shape_39.graphics.lf(["#0075BF","#009DFF"],[0,0.992],0.7,5.9,0.7,-6.9).s().p("AAyhFIhjAAIAACLIBjAAIAAiLAgqA8IAAh3IBVAAIAAB3IhVAA").cp();
	this.shape_39.setTransform(5,7);

	this.shape_40 = new createjs.Shape();
	this.shape_40.graphics.lf(["#99D7FE","#D9F0FE"],[0,1],-0.9,7,-0.9,-6.5).s().p("AgqA8IAAh3IBVAAIAAB3IhVAA").cp();
	this.shape_40.setTransform(5,7);

	this.addChild(this.shape_40,this.shape_39,this.shape_38,this.instance_5);
}).prototype = p = new createjs.Container();
p.nominalBounds = new createjs.Rectangle(0,0,10,14);


(lib.ScrollArrowDown_icon = function() {
	this.initialize();

	// icon
	this.instance_6 = new lib.arrowIcon("single",0);

	this.addChild(this.instance_6);
}).prototype = p = new createjs.Container();
p.nominalBounds = new createjs.Rectangle(0,0,7,4);


(lib.ScrollArrowDown_downSkin = function() {
	this.initialize();

	// icon
	this.instance_7 = new lib.ScrollArrowDown_icon("single",0);
	this.instance_7.setTransform(2.7,5,0.667,1);

	// fill
	this.shape_41 = new createjs.Shape();
	this.shape_41.graphics.lf(["rgba(238,238,238,0)","rgba(255,255,255,0.298)"],[0,1],-0.6,3.5,-0.6,-3.1).s().p("AgqgfIBVAAIAAA/IhVAAIAAg/").cp();
	this.shape_41.setTransform(5,4.3);

	this.shape_42 = new createjs.Shape();
	this.shape_42.graphics.lf(["#0075BF","#009DFF"],[0,0.992],0.7,5.9,0.7,-6.9).s().p("AArg7IAAB3IhVAAIAAh3IBVAAAAyBGIAAiLIhjAAIAACLIBjAA").cp();
	this.shape_42.setTransform(5,7);

	this.shape_43 = new createjs.Shape();
	this.shape_43.graphics.lf(["#99D7FE","#D9F0FE"],[0,1],-0.9,7,-0.9,-6.5).s().p("AArg7IAAB3IhVAAIAAh3IBVAA").cp();
	this.shape_43.setTransform(5,7);

	this.addChild(this.shape_43,this.shape_42,this.shape_41,this.instance_7);
}).prototype = p = new createjs.Container();
p.nominalBounds = new createjs.Rectangle(0,0,10,14);


(lib.arrangeArea = function() {
	this.initialize();

	// score
	this.timeMc = new lib.time_mc();
	this.timeMc.setTransform(586.3,36,1,1,0,0,0,67.2,15.9);

	this.scoreMc = new lib.score_mc();
	this.scoreMc.setTransform(455,36,1,1,0,0,0,59,15.9);

	this.scrtimepanel = new lib.Topheader();
	this.scrtimepanel.setTransform(515,28.5);
	this.scrtimepanel.shadow = new createjs.Shadow("#000000",4,4,5);

	// gameName
	this.gameNameMc = new lib.title_mc();
	this.gameNameMc.setTransform(172.1,27.1,1,1,0,0,0,160.5,17.1);
	this.gameNameMc.shadow = new createjs.Shadow("rgba(51,51,51,1)",4,4,4);

	this.addChild(this.gameNameMc,this.scrtimepanel,this.scoreMc,this.timeMc);
}).prototype = p = new createjs.Container();
p.nominalBounds = new createjs.Rectangle(11.6,10,620.9,41);


(lib.mainbase_mc = function() {
	this.initialize();

	// gradient
	this.grad = new lib.grad();
	this.grad.setTransform(318.7,239.4,1,1.002,0,0,0,319.4,239.4);

	// base
	this.base = new lib.base();
	this.base.setTransform(320,240,1,1,0,0,0,320,240);
	if(gameBgSelectedArrange == "false"){
		this.grad.alpha = 0;
		this.base.alpha = 0;
	}else{
		this.grad.alpha = 1;
		this.base.alpha = 1;
	}

	this.addChild(this.base,this.grad);
}).prototype = p = new createjs.Container();
p.nominalBounds = new createjs.Rectangle(0,0,640,480);


(lib.ScrollArrowUp_upSkin = function() {
	this.initialize();

	// icon
	this.instance_8 = new lib.ScrollArrowUp_icon("single",0);
	this.instance_8.setTransform(2.7,4,0.667,1);

	// fill
	this.shape_55 = new createjs.Shape();
	this.shape_55.graphics.lf(["rgba(238,238,238,0)","rgba(255,255,255,0.298)"],[0,1],-0.6,3.5,-0.6,-3.1).s().p("AgqgfIBVAAIAAA/IhVAAIAAg/").cp();
	this.shape_55.setTransform(5,4.3);

	this.shape_56 = new createjs.Shape();
	this.shape_56.graphics.f("#CCCCCC").s().p("AAyhFIhjAAIAACLIBjAAIAAiLAArA8IhVAAIAAh3IBVAAIAAB3").cp();
	this.shape_56.setTransform(5,7);

	this.shape_57 = new createjs.Shape();
	this.shape_57.graphics.lf(["#E6E6E6","#FFFFFF"],[0,1],-0.9,7,-0.9,-6.5).s().p("AArA8IhVAAIAAh3IBVAAIAAB3").cp();
	this.shape_57.setTransform(5,7);

	this.addChild(this.shape_57,this.shape_56,this.shape_55,this.instance_8);
}).prototype = p = new createjs.Container();
p.nominalBounds = new createjs.Rectangle(0,0,10,14);


(lib.ScrollArrowUp_overSkin = function() {
	this.initialize();

	// icon
	this.instance_9 = new lib.ScrollArrowUp_icon("single",0);
	this.instance_9.setTransform(2.7,4,0.667,1);

	// fill
	this.shape_58 = new createjs.Shape();
	this.shape_58.graphics.lf(["rgba(238,238,238,0)","rgba(255,255,255,0.298)"],[0,1],-0.6,3.5,-0.6,-3.1).s().p("AgqgfIBVAAIAAA/IhVAAIAAg/").cp();
	this.shape_58.setTransform(5,4.3);

	this.shape_59 = new createjs.Shape();
	this.shape_59.graphics.lf(["#0075BF","#009DFF"],[0,0.992],0.7,5.9,0.7,-6.9).s().p("AAyhFIhjAAIAACLIBjAAIAAiLAArA8IhVAAIAAh3IBVAAIAAB3").cp();
	this.shape_59.setTransform(5,7);

	this.shape_60 = new createjs.Shape();
	this.shape_60.graphics.lf(["#E6E6E6","#FFFFFF"],[0,1],-0.9,7,-0.9,-6.5).s().p("AArA8IhVAAIAAh3IBVAAIAAB3").cp();
	this.shape_60.setTransform(5,7);

	this.addChild(this.shape_60,this.shape_59,this.shape_58,this.instance_9);
}).prototype = p = new createjs.Container();
p.nominalBounds = new createjs.Rectangle(0,0,10,14);


(lib.ScrollArrowDown_upSkin = function() {
	this.initialize();

	// icon
	this.instance_10 = new lib.ScrollArrowDown_icon("single",0);
	this.instance_10.setTransform(2.7,5,0.667,1);

	// fill
	this.shape_61 = new createjs.Shape();
	this.shape_61.graphics.lf(["rgba(238,238,238,0)","rgba(255,255,255,0.298)"],[0,1],-0.6,3.5,-0.6,-3.1).s().p("AgqgfIBVAAIAAA/IhVAAIAAg/").cp();
	this.shape_61.setTransform(5,4.3);

	this.shape_62 = new createjs.Shape();
	this.shape_62.graphics.f("#CCCCCC").s().p("AAyhFIhjAAIAACLIBjAAIAAiLAArA8IhVAAIAAh3IBVAAIAAB3").cp();
	this.shape_62.setTransform(5,7);

	this.shape_63 = new createjs.Shape();
	this.shape_63.graphics.lf(["#E6E6E6","#FFFFFF"],[0,1],-0.9,7,-0.9,-6.5).s().p("AArA8IhVAAIAAh3IBVAAIAAB3").cp();
	this.shape_63.setTransform(5,7);

	this.addChild(this.shape_63,this.shape_62,this.shape_61,this.instance_10);
}).prototype = p = new createjs.Container();
p.nominalBounds = new createjs.Rectangle(0,0,10,14);


(lib.ScrollArrowDown_overSkin = function() {
	this.initialize();

	// icon
	this.instance_11 = new lib.ScrollArrowDown_icon("single",0);
	this.instance_11.setTransform(2.7,5,0.667,1);

	// fill
	this.shape_64 = new createjs.Shape();
	this.shape_64.graphics.lf(["rgba(238,238,238,0)","rgba(255,255,255,0.298)"],[0,1],-0.6,3.5,-0.6,-3.1).s().p("AgqgfIBVAAIAAA/IhVAAIAAg/").cp();
	this.shape_64.setTransform(5,4.3);

	this.shape_65 = new createjs.Shape();
	this.shape_65.graphics.lf(["#0075BF","#009DFF"],[0,0.992],0.7,5.9,0.7,-6.9).s().p("AAyhFIhjAAIAACLIBjAAIAAiLAArA8IhVAAIAAh3IBVAAIAAB3").cp();
	this.shape_65.setTransform(5,7);

	this.shape_66 = new createjs.Shape();
	this.shape_66.graphics.lf(["#E6E6E6","#FFFFFF"],[0,1],-0.9,7,-0.9,-6.5).s().p("AArA8IhVAAIAAh3IBVAAIAAB3").cp();
	this.shape_66.setTransform(5,7);

	this.addChild(this.shape_66,this.shape_65,this.shape_64,this.instance_11);
}).prototype = p = new createjs.Container();
p.nominalBounds = new createjs.Rectangle(0,0,10,14);

})(lib = lib||{}, images = images||{}, createjs = createjs||{});
var lib, images, createjs;