(function (lib, img, cjs) {

var p; // shortcut to reference prototypes
var mainBgColor,titlefontcolor,questionbgcolor,optionsbgcolor,totalQuestions,currencysymbol,scoreArray;

// stage content:
(lib.MillionaireGame = function(mainBghex,titlefonthex,questionbghex,optionsbghex,totalQues,currsymbol,scrArray,hintbghex,hintfonthex) {
	
	mainBgColor = mainBghex;
	titlefontcolor = titlefonthex;
	questionbgcolor = questionbghex;
	optionsbgcolor = optionsbghex;
	totalQuestions = totalQues;
	currencysymbol = currsymbol;
	scoreArray = scrArray;
	hintbgcolor = hintbghex;
	hintfontcolor = hintfonthex;
	
	this.initialize();

	// Runtime
	this.runtime = new lib.gameMc();
	this.runtime.setTransform(319.8,239.8,1,1,0,0,0,319.8,239.8);

	this.addChild(this.runtime);
	
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,-0.5,640,480);


// symbols:
(lib.correcticon = function() {
	this.initialize(img.correcticon);
}).prototype = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,15,15);


(lib.editicon = function() {
	this.initialize(img.editicon);
}).prototype = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,14,14);


(lib.gridinitialpngcopy = function() {
	this.initialize(img.gridinitialpngcopy);
}).prototype = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,800,566);


(lib.incorrecticon = function() {
	this.initialize(img.incorrecticon);
}).prototype = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,15,15);


(lib.titleMc = function() {
	this.initialize();

	// Layer 1
	this.txt = new cjs.Text("Millionaire", "35px Arial",titlefonthex);
	this.txt.lineHeight = 37;
	this.txt.lineWidth = 296;

	this.addChild(this.txt);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,300,43.2);


(lib.Timerforquestion = function() {
	this.initialize();

	// Layer 2
	this.showt = new cjs.Text("00:00", "0px Verdana", "#CC0000");
	this.showt.textAlign = "center";
	this.showt.lineHeight = 14;
	this.showt.lineWidth = 37;
	this.showt.setTransform(18.5,0);

	this.addChild(this.showt);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,41,18.5);


(lib.timeInstBase = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#EDF6FF").s().p("AAgAAIg/A/IABh9IA+A+").cp();
	this.shape.setTransform(127,33.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#EDF6FF").s().p("AJtEiIzZAAIAApDITZAAIAAJD").cp();
	this.shape_1.setTransform(62.2,29.1);

	this.addChild(this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,130.2,58.1);

(lib.Symbol13 = function() {
	this.initialize();

	// Layer 2
	this.text = new cjs.Text("Time", "bold 11px Arial", "#006600");
	this.text.lineHeight = 13;
	this.text.setTransform(-14.8,-24.3);

	// Layer 1
	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f().s("#999999").ss(1,1,1).p("AjvhwQATgoAigiQA3g3BHgQQAegHAeAAQAfAAAeAHQBHAQA3A3QAiAiATAoQALAXAGAZQAIAfAAAhQAABuhOBNQhNBOhuAAQhtAAhNhOQhOhNAAhuQAAghAIgfQAGgZALgXIAAAA").cp();

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.rf(["#FFFFFF","#00CC33"],[0,1],0,-1,0,0,-1,25.2).s().p("ADwA/QjwAwjvgwQATgoAiggQA3g3BHgQQAegGAeAAQAfAAAeAGQBHAQA3A3QAiAgATAoIAAAA").cp();
	this.shape_14.setTransform(0,-17.6);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.rf(["#FFFFFF","#C6E8FF"],[0,1],0,-7.4,0,0,-7.4,26.8).s().p("Ajvi8QDvAvDwgvQALAXAGAZQAIAfAAAjQAABshOBNQhNBOhuAAQhtAAhNhOQhOhNAAhsQAAgjAIgfQAGgZALgXIAAAA").cp();
	this.shape_15.setTransform(0,7.6);

	this.addChild(this.shape_15,this.shape_14,this.shape_13,this.text);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-26.4,-26.4,53,53);


(lib.Symbol12 = function() {
	this.initialize();

	// Layer 1
	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#E9E9E9").s("#CFCFCF").ss(1.1,1,1).p("ADYjXQBZBaAAB9QAAB+hZBaQhaBZh+AAQh9AAhahZQhZhaAAh+QAAh9BZhaQBahZB9AAQB+AABaBZIAAAA").cp();

	this.addChild(this.shape_16);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-30.5,-30.5,61.1,61.1);


(lib.Symbol10 = function() {
	this.initialize();

	// Layer 2
	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.rf(["#FFFFFF","#AEEFFF"],[0,1],0,0,0,0,0,27.4).s("#999999").ss(1,1,1).p("AA9kBQBHAQA3A3QAiAiATAoQALAXAGAZQAIAfAAAhQAABuhOBNQhNBOhuAAQhtAAhNhOQhOhNAAhuQAAghAIgfQAGgZALgXQATgoAigiQA3g3BHgQQAegHAeAAQAfAAAeAHIAAAA").cp();

	this.addChild(this.shape_17);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-26.4,-26.4,53,53);


(lib.Symbol9 = function() {
	this.initialize();

	// Layer 1
	this.money = new cjs.Text("$100", "bold 30px Arial", "#FFFFFF");
	this.money.textAlign = "center";
	this.money.lineHeight = 36;
	this.money.lineWidth = 67;
	this.money.setTransform(-14.4,-21.5);

	this.addChild(this.money);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-47.9,-21.5,71,37.5);


(lib.Symbol6 = function() {
	this.initialize();

	// Layer 1
	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.lf(["#FFFFFF","#E2E2E2"],[0,1],0,36,0,-38.9).s("#999999").ss(1.2,1,1).p("EAucgF1Qg9g9hVAAMhYTAAAQhVAAg9A9Qg8A8AABWIAAHHQAABWA8A8QA9A9BVAAMBYTAAAQBVAAA9g9QA8g8AAhWIAAnHQAAhWg8g8IAAAA").cp();
	this.shape_18.setTransform(0,-9.9);

	this.addChild(this.shape_18);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-303.2,-53.4,606.5,87);


(lib.Symbol4 = function() {
	this.initialize();

	// Layer 1
	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f().s("#660000").ss(1.3,1,1).p("AO2ibI96AAQgyAAAAAjIAADxQAAAjAyAAIeJAAQAyAAAAgjIAAjxQAAgjgyAAIgMAA");

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.lf(["#660000","#990000"],[0,1],0,29,0,-5.9).s().p("AO2ibIADAAIAMAAQAyAAAAAjIAADxQAAAjgyAAI+JAAQgyAAAAgjIAAjxQAAgjAyAAId6AA").cp();

	this.addChild(this.shape_20,this.shape_19);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-101.4,-15.6,203,31.4);


(lib.Symbol3Swapnew = function() {
	this.initialize();

	// Layer 1
	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f().s("#1D6767").ss(1,1,1).p("AC1AWQABgFAAgEQgCACgBACQgLAfgiARQibA7gOh8IA8AAIhliUIhpCVIA9gBQgKCBCCATQBoALA3hPQASgdAEgdIAAAA").cp();
	this.shape_21.setTransform(-0.7,5.1);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f().s("#666600").ss(1,1,1).p("AAAiTQhogLg3BOQgSAegEAdQAAAFAAAEQACgCABgCQALgfAigRQCbg7AOB7Ig8AAIBlCVIBpiVIg+AAQALiAiDgTIAAAA").cp();
	this.shape_22.setTransform(0.8,-5);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.lf(["#029A9A","#FFFFFF"],[0,1],-10.9,-9.6,7.9,9.4).s().p("AC1AWQgEAdgSAdQg3BPhogLQiCgTAKiBIg9ABIBpiVIBlCUIg8AAQAOB8Cbg7QAigRALgfQABgCACgCQAAAEgBAFIAAAA").cp();
	this.shape_23.setTransform(-0.7,5.1);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.lf(["#FFCC00","#FFFFFF"],[0,1],9.2,14.1,-6.1,-10.5).s().p("AAAiTQCDATgLCAIA+AAIhpCVIhliVIA8AAQgOh7ibA7QgiARgLAfQgBACgCACQAAgEAAgFQAEgdASgeQA3hOBoALIAAAA").cp();
	this.shape_24.setTransform(0.8,-5);

	this.addChild(this.shape_24,this.shape_23,this.shape_22,this.shape_21);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-18.9,-20,38,40.1);


(lib.Symbol1dsada = function() {
	this.initialize();

	// Layer 1
	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFFFFF").s("rgba(51,51,51,0.51)").ss(1,1,1).p("EARlgu3MAAABdvMgjJAAAMAAAhdvMAjJAAA").cp();

	this.addChild(this.shape_25);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-112.4,-299.9,225,600);


(lib.Symbol1copy = function() {
	this.initialize();

	// Layer 1
	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FFFF99").s("rgba(51,51,51,0.51)").ss(1,1,1).p("EARlAu4MgjJAAAMAAAhdvMAjJAAAMAAABdv").cp();

	this.addChild(this.shape_26);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-112.4,-299.9,225,600);


(lib.Symbol1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,false,{},true);

	// Layer 1
	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.lf(["#FEFEFE","#DBDBDB"],[0,1],0,-12.4,0,12.6).s("#CCCCCC").ss(1,1,1).p("EAvagB8MhezAAAIAAD5MBezAAAIAAj5").cp();

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.lf(["#FFFFFF","#D1E8FC"],[0,1],0,-12.4,0,12.6).s("#D7EAFF").ss(1,1,1).p("EAvagB8MhezAAAIAAD5MBezAAAIAAj5").cp();

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_27}]}).to({state:[{t:this.shape_28}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-303.4,-12.5,607,25.1);


(lib.SwapBtn = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,false,{},true);

	// Layer 2
	this.text_1 = new cjs.Text("SWAP QUESTION", "bold 17px Arial", "#FFFFFF");
	this.text_1.textAlign = "center";
	this.text_1.lineHeight = 19;
	this.text_1.lineWidth = 144;
	this.text_1.setTransform(297,1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.text_1,p:{regX:74,x:371,text:"SWAP QUESTION",textAlign:"center",lineWidth:144}}]}).to({state:[{t:this.text_1,p:{regX:82.5,x:307.5,text:"CLOSE QUESTION",textAlign:"",lineWidth:161}}]},1).wait(1));

	// Layer 1
	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#333333").s().p("EAvLAB9MheVAAAIAAj5MBeVAAAIAAD5").cp();
	this.shape_29.setTransform(299,12.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_29}]}).to({state:[{t:this.shape_29}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-2.9,0,604,25);


(lib.swapBase = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,false,{},true);

	// Layer 1
	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#333333").s("#CCCCCC").ss(1,1,1).p("EgvZgB8IAAD5MBezAAAIAAj5MhezAAA").cp();

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_30}]}).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-303.4,-12.5,607,25.1);


(lib.submitMask = function() {
	this.initialize();

	// Layer 1
	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("rgba(233,233,233,0.498)").s().rr(-35.5,-13.5,71,27,4);
	this.shape_31.setTransform(35.5,13.5);

	this.addChild(this.shape_31);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,71,27);


(lib.startnendcolorsmaskcopy = function() {
	this.initialize();

	// Layer 1
	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("rgba(251,251,251,0.729)").s().dr(-129,-12,258,24);
	this.shape_32.setTransform(129,12);

	this.addChild(this.shape_32);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,258,24);


(lib.sidePanel = function() {
	this.initialize();

	// Layer 1
	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#FFFFFF").s("rgba(51,51,51,0.51)").ss(1,1,1).p("EARlAu4MgjJAAAMAAAhdvMAjJAAAMAAABdv").cp();

	this.addChild(this.shape_33);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-112.4,-299.9,225,600);


(lib.score_mc = function() {
	this.initialize();

	// Layer 1
	this.text_2 = new cjs.Text("Score", "11px Arial", "#333333");
	this.text_2.lineHeight = 13;

	this.addChild(this.text_2);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,32.9,16.2);


(lib.QuestionTitle_Mc = function() {
	this.initialize();

	// Layer 2
	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("rgba(102,102,102,0.729)").s().rc(-247.5,-20.7,495,41.4,20.7,20.7,0,0);
	this.shape_34.setTransform(247.4,21.7);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("rgba(153,153,153,0.729)").s().p("EAldgKCQhYhgh8AAMhERAAAQh8AAhYBgQhYBgAACHIAAP6QAABFAGA/MBNdAAAQAGg/AAhFIAAv6QAAiHhYhgIAAAA").cp();
	this.shape_35.setTransform(246.5,74);

	this.addChild(this.shape_35,this.shape_34);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-1.9,0,497,147.9);


(lib.notanswered_mc = function() {
	this.initialize();

	// Layer 1
	this.notanswered = new cjs.Text("You must answer before continuing!", "bold 25px Arial", "#006666");
	this.notanswered.lineHeight = 27;
	this.notanswered.lineWidth = 347;
	this.notanswered.setTransform(10,42);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f().s("#999999").ss(1.2,1,1).p("AdDHCIAAu/QAAhfhDhEQhDhDhgAAMgy5AAAQhgAAhDBDQhDBEAABfIAAO/IAAA8QAABfBDBDQBDBEBgAAMAy5AAAQBgAABDhEQBDhDAAhfIAAg8").cp();
	this.shape_36.setTransform(186,74);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.lf(["#FFFFFF","#F0F3F8"],[0,1],0,111.5,0,-42.4).s().p("AdDJTMg6FAAAIAAu/QAAhfBDhEQBDhDBgAAMAy5AAAQBgAABDBDQBDBEAABfIAAO/").cp();
	this.shape_37.setTransform(186,59.5);

	this.addChild(this.shape_37,this.shape_36,this.notanswered);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,372,148);


(lib.navpanelH = function() {
	this.initialize();

	// Layer 1
	this.text_3 = new cjs.Text("Nav Panel", "0px Arial", "#FFFFFF");
	this.text_3.lineHeight = 14;
	this.text_3.setTransform(0,282.9,1,1,-89.9);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.lf(["#FFFFFF","#000000"],[0,1],-77.9,-2.9,24,-2.9).s().p("Ahj3bIDHAAMAAAAu3IjHAAMAAAgu3").cp();
	this.shape_38.setTransform(10.1,150);

	this.addChild(this.shape_38,this.text_3);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,20.1,300);


(lib.feedbackmsg = function() {
	this.initialize();

}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,0,0);


(lib.donecellwrong = function() {
	this.initialize();

	// Layer 2
	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f().s("#FFFFFF").ss(3,1,1).p("AgYgYIAYAYIAAABIgiAiAgjgiIALAKAAKAKIgKgKIAkgjAAjAkIgZga");
	this.shape_39.setTransform(89.4,47.4);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f().s("#333333").ss(3,1,1).p("AgigjIAZAbIAJAIIAZAaIAKAKAgiAkIAigkIAAAAIAjgj");
	this.shape_40.setTransform(90.3,48.5);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f().s("#333333").ss(1,1,1).p("ABLhKIAACVIiVAAIAAiVICVAA").cp();
	this.shape_41.setTransform(89.5,47.5);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.rf(["#FFFFFF","#FF0000"],[0,0.647],-0.2,-0.2,0,-0.2,-0.2,11).s().p("AgagZIAZAZIAIAKIAaAZIALALIgLgLIgagZIgIgKIgZgZIAaAZIgBAAIgiAiIAigiIABAAIgagZAgaAuIAhgkIACgBIgCABIghAkAgkgkIAKALIgKgLAAhAjIgYgaIAjgiIgjAiIgJgJIAjgkIgjAkIAJAJIAYAaABLhKIAACVIiVAAIAAiVICVAA").cp();
	this.shape_42.setTransform(89.5,47.5);

	// Layer 1
	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#808080").s("#FFFFFF").ss(1.3,1,1).p("APEpXI+HAAQgyAAAAAyIAARLQAAAyAyAAIeHAAQAyAAAAgyIAAxLQAAgygyAAIAAAA").cp();

	this.addChild(this.shape_43,this.shape_42,this.shape_41,this.shape_40,this.shape_39);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-101.4,-59.9,202.9,120);


(lib.donecell = function() {
	this.initialize();

	// Layer 2
	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f().s("#006600").ss(3,1,1).p("AgsAAIAeAcIAFAGIA3hD");
	this.shape_44.setTransform(90.1,47.3);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f().s("#333333").ss(1,1,1).p("ABLhKIAACVIiVAAIAAiVICVAA").cp();
	this.shape_45.setTransform(89.5,47.5);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f().s("#FFFFFF").ss(3,1,1).p("AgsgBIAFADIAdAgIABgCIA2hB");
	this.shape_46.setTransform(89.5,47);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.rf(["#00FF72","#007B00"],[0,1],0,0,0,0,0,10.6).s().p("ABLhKIAACVIiVAAIAAiVICVAAAgsgGIAFAFIgFgFAgngBIAdAdIABgBIAFAFIA4hDIg4BDIgFgFIA2hBIg2BBIgBABIgdgdIAeAcIgegc").cp();
	this.shape_47.setTransform(89.5,47.5);

	// Layer 1
	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#808080").s("#FFFFFF").ss(1.3,1,1).p("APEpXI+HAAQgyAAAAAyIAARLQAAAyAyAAIeHAAQAyAAAAgyIAAxLQAAgygyAAIAAAA").cp();

	this.addChild(this.shape_48,this.shape_47,this.shape_46,this.shape_45,this.shape_44);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-101.4,-59.9,202.9,120);


(lib.colorcell = function() {
	this.initialize();

	// Layer 1
	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#CC3300").s().p("AnznzIPnAAIAAPnIvnAAIAAvn").cp();
	this.shape_49.setTransform(50.1,50);

	this.addChild(this.shape_49);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0.1,0,100.1,100);


(lib.checkboxasnwerbase = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,false,{},true);

	// Layer 1
	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("rgba(214,214,214,0)").s().rr(-247,-22.3,494,44.6,3);
	this.shape_50.setTransform(247,22.3);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("rgba(0,0,0,0.2)").s().rr(-247,-22.3,494,44.6,3);
	this.shape_51.setTransform(247,22.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_50}]}).to({state:[{t:this.shape_51}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,494,44.6);


(lib.blank = function() {
	this.initialize();

	// Layer 1
	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("rgba(243,49,49,0)").s().p("AETC0IolAAIAAlnIIlAAIAAFn").cp();
	this.shape_57.setTransform(27.5,18);

	this.addChild(this.shape_57);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,55,36);


(lib.bgBase = function() {
	this.initialize();

	// Layer 1
	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f(mainBgColor).s().p("EAyAAlgMhj/AAAMAAAhK/MBj/AAAMAAABK/").cp();
	this.shape_58.setTransform(320,240);

	this.addChild(this.shape_58);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,640,480);


(lib.bcg = function() {
	this.initialize();

	// Layer 1
	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("rgba(153,153,153,0.298)").s().dr(-320,-240,640,480);
	this.shape_59.setTransform(320,240);

	this.addChild(this.shape_59);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,640,480);


(lib.baseshadecell = function() {
	this.initialize();

	// Layer 1
	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.rf(["rgba(255,255,255,0.639)","rgba(255,255,255,0)"],[0,1],-33.9,-25.3,0,-33.9,-25.3,77.7).s().p("AlqFxQBwjVC3i2QDfjhENh1ItRAAIAALhIA+AA").cp();

	this.addChild(this.shape_60);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-42.5,-36.9,85.2,74);


(lib.AnswerMC = function() {
	this.initialize();

	// Layer 1
	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("rgba(75,75,75,0)").s().p("EAtoAT7MhbPAAAMAAAgn1MBbPAAAMAAAAn1").cp();
	this.shape_62.setTransform(292,127.5);

	this.addChild(this.shape_62);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,584,255);


(lib.TextInput_upSkin = function() {
	this.initialize();

	// skin
	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#FFFFFF").s().p("ALuBkI3bAAIAAjHIXbAAIAADH").cp();
	this.shape_63.setTransform(76,11);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#D3D5D6").s().p("ArtgEIXbAAIAAAJI3bAAIAAgJ").cp();
	this.shape_64.setTransform(76,21.5);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#6D6F70").s().p("ALzgEIAAAJI3bAAIgKAAIAAgJIXlAA").cp();
	this.shape_65.setTransform(75.5,0.5);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#C9CBCC").s().p("ALuhjIAAgKIAKAAIAADbIgKAAIAAgKIAAjHArtBkIAAAKIgKAAIAAjRIAKAAIAADH").cp();
	this.shape_66.setTransform(76,11);

	this.addChild(this.shape_66,this.shape_65,this.shape_64,this.shape_63);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,152,22);


(lib.TextInput_disabledSkin = function() {
	this.initialize();

	// skin
	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("rgba(255,255,255,0.298)").s().p("ALuhjIAADHI3bAAIAAjHIXbAA").cp();
	this.shape_67.setTransform(76,11);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("rgba(211,213,214,0.298)").s().p("ArtAFIAAgJIXbAAIAAAJI3bAA").cp();
	this.shape_68.setTransform(76,21.5);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("rgba(109,111,112,0.298)").s().p("ALzAFI3bAAIgKAAIAAgJIXlAAIAAAJ").cp();
	this.shape_69.setTransform(75.5,0.5);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("rgba(201,203,204,0.298)").s().p("Ar3hjIAKAAIAADHIAAAKIgKAAIAAjRALuhtIAKAAIAADbIgKAAIAAgKIAAjHIAAgK").cp();
	this.shape_70.setTransform(76,11);

	this.addChild(this.shape_70,this.shape_69,this.shape_68,this.shape_67);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,152,22);


(lib.TextArea_upSkin = function() {
	this.initialize();

	// skin
	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#FFFFFF").s().p("ALuBkI3bAAIAAjHIXbAAIAADH").cp();
	this.shape_71.setTransform(76,11);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#6D6F70").s().p("AryAFIAAgJIXlAAIAAAJI3bAAIgKAA").cp();
	this.shape_72.setTransform(75.5,0.5);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#D3D5D6").s().p("ArtgEIXbAAIAAAJI3bAAIAAgJ").cp();
	this.shape_73.setTransform(76,21.5);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#C9CBCC").s().p("ALuhtIAKAAIAADbIgKAAIAAgKIAAjHIAAgKArtBkIAAAKIgKAAIAAjRIAKAAIAADH").cp();
	this.shape_74.setTransform(76,11);

	this.addChild(this.shape_74,this.shape_73,this.shape_72,this.shape_71);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,152,22);


(lib.TextArea_disabledSkin = function() {
	this.initialize();

	// skin
	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#FFFFFF").s().p("ALuBkI3bAAIAAjHIXbAAIAADH").cp();
	this.shape_75.setTransform(76,11);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("rgba(211,213,214,0.298)").s().p("ArtgEIXbAAIAAAJI3bAAIAAgJ").cp();
	this.shape_76.setTransform(76,21.5);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("rgba(109,111,112,0.298)").s().p("AroAFIgKAAIAAgJIXlAAIAAAJI3bAA").cp();
	this.shape_77.setTransform(75.5,0.5);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("rgba(201,203,204,0.298)").s().p("ALuhtIAKAAIAADbIgKAAIAAgKIAAjHIAAgKAr3hjIAKAAIAADHIAAAKIgKAAIAAjR").cp();
	this.shape_78.setTransform(76,11);

	this.addChild(this.shape_78,this.shape_77,this.shape_76,this.shape_75);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,152,22);


(lib.panelBackground_Shadow = function() {
	this.initialize();

	// shadow
	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#FFFFFF").s().p("AUou6MgpPAAAQgRAAgLAMQgMALAAARIAAdNMAqfAAAIAA9NQAAgRgMgLQgMgMgQAAIAAAA").cp();
	this.shape_79.setTransform(139,96.5);

	this.addChild(this.shape_79);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(3,1,272,191);


(lib.panelBackground_Base = function() {
	this.initialize();

	// background
	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("rgba(255,255,255,0.6)").s().p("AUou6MgpPAAAQgRAAgLAMQgMALAAARIAAdNMAqfAAAIAA9NQAAgRgMgLQgMgMgQAAIAAAA").cp();
	this.shape_80.setTransform(136,95.5);

	this.addChild(this.shape_80);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,272,191);


(lib.focusRectSkin = function() {
	this.initialize();

	// border
	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.lf(["#0075BF","#009DFF"],[0,1],0,-10.7,0,10.8).s().p("AGQBGQAAAdgdABIrlAAQgdgBAAgdIAAiLQAAgdAdgBILlAAQAdABAAAdIAACLAGahFQAAgogoAAIrjAAQgoAAAAAoIAACLQAAAoAoAAILjAAQAoAAAAgoIAAiL").cp();
	this.shape_81.setTransform(41,11);

	this.addChild(this.shape_81);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0.1,0,82,22);


(lib.arrowIcon = function() {
	this.initialize();

	// icon
	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#000000").s().p("AAjgTIhFAAIAAAKIAKAAIAAAJIAKAAIAAAKIAKAAIAAAKIAJAAIAAgKIAKAAIAAgKIAKAAIAAgJIAKAAIAAgK").cp();
	this.shape_82.setTransform(3.5,2);

	this.addChild(this.shape_82);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,7,4);


(lib.ScrollTrack_skin = function() {
	this.initialize();

	// skin
	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#585F63").s().p("AAFrjIAAXHIgJAAIAA3HIAJAA").cp();
	this.shape_83.setTransform(0.5,74);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.lf(["#94999B","#E7E7E7"],[0,1],-6.4,7,7.5,6.8).s().p("ABBrjIAAXHIiBAAIAA3HICBAA").cp();
	this.shape_84.setTransform(7.5,74);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#585F63").s().p("AAFrjIAAXHIgJAAIAA3HIAJAA").cp();
	this.shape_85.setTransform(14.5,74);

	this.addChild(this.shape_85,this.shape_84,this.shape_83);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,15,148);


(lib.ScrollThumb_upSkin = function() {
	this.initialize();

	// skin
	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.lf(["#E6E6E6","#FFFFFF"],[0,1],26.4,16,26.4,-5.9).s().p("AA3jaIAAG1QAAAegdABIhQgBIAAnyIBQABQAdABAAAdIAAAA").cp();
	this.shape_86.setTransform(6.5,26);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.lf(["#585F63","#B7BABC"],[0,1],-4.9,2.9,-4.9,-19).s().p("AA8gbIAAARQAAAmgoAAIhPAAIAAgKIBQAAQAdgBAAgbIAAgRIAKAA").cp();
	this.shape_87.setTransform(7,49.2);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.lf(["#585F63","#B7BABC"],[0,1],-4.9,29.1,-4.9,7.1).s().p("AA8DnIgKAAIAAmlQAAgdgdgBIhQAAIAAgKIBPAAQAoAAAAAoIAAGl").cp();
	this.shape_88.setTransform(7,23.2);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f("rgba(255,0,0,0)").s().p("AAPkDIAAIHIgdAAIAAoHIAdAA").cp();
	this.shape_89.setTransform(14.5,26);

	this.addChild(this.shape_89,this.shape_88,this.shape_87,this.shape_86);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(1,0,15,52);


(lib.ScrollThumb_overSkin = function() {
	this.initialize();

	// skin
	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f("rgba(255,0,0,0)").s().p("AAPkDIAAIHIgdAAIAAoHIAdAA").cp();
	this.shape_90.setTransform(14.5,26);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.lf(["#0075BF","#009DFF"],[0,0.992],-4.9,2.9,-4.9,-19).s().p("AA8gbIAAARQAAAmgoAAIhPAAIAAgKIBQAAQAdgBAAgbIAAgRIAKAA").cp();
	this.shape_91.setTransform(7,49.2);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.lf(["#0075BF","#009DFF"],[0,0.992],-4.9,29.1,-4.9,7.1).s().p("AA8DnIgKAAIAAmlQAAgdgdgBIhQAAIAAgKIBPAAQAoAAAAAoIAAGl").cp();
	this.shape_92.setTransform(7,23.2);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.lf(["#E6E6E6","#FFFFFF"],[0,1],26.4,16,26.4,-5.9).s().p("AAaj5QAdABAAAdIAAG2QAAAegdABIhQAAIAAnzIBQAA").cp();
	this.shape_93.setTransform(6.5,26);

	this.addChild(this.shape_93,this.shape_92,this.shape_91,this.shape_90);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(1,0,15,52);


(lib.ScrollThumb_downSkin = function() {
	this.initialize();

	// skin
	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.lf(["#99D7FE","#D9F0FE"],[0,1],26.4,16,26.4,-5.9).s().p("AA3DbQAAAegdABIhQgBIAAnyIBQABQAdABAAAdIAAG1").cp();
	this.shape_94.setTransform(6.5,26);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.lf(["#0075BF","#009DFF"],[0,0.992],-4.9,2.9,-4.9,-19).s().p("AA8gbIAAARQAAAmgoAAIhPAAIAAgKIBQAAQAdgBAAgbIAAgRIAKAA").cp();
	this.shape_95.setTransform(7,49.2);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.lf(["#0075BF","#009DFF"],[0,0.992],-4.9,29.1,-4.9,7.1).s().p("AA8DnIgKAAIAAmlQAAgdgdgBIhQAAIAAgKIBPAAQAoAAAAAoIAAGl").cp();
	this.shape_96.setTransform(7,23.2);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f("rgba(255,0,0,0)").s().p("AAPkDIAAIHIgdAAIAAoHIAdAA").cp();
	this.shape_97.setTransform(14.5,26);

	this.addChild(this.shape_97,this.shape_96,this.shape_95,this.shape_94);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(1,0,15,52);


(lib.ScrollBar_thumbIcon = function() {
	this.initialize();

	// Layer 1
	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f("#5A6165").s().p("AAZAFIgxAAIAAgJIAxAAIAAAJ").cp();
	this.shape_98.setTransform(2.5,2.5);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f("#5A6165").s().p("AAZAFIgxAAIAAgJIAxAAIAAAJ").cp();
	this.shape_99.setTransform(2.5,0.5);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.f("#5A6165").s().p("AAZAFIgxAAIAAgJIAxAAIAAAJ").cp();
	this.shape_100.setTransform(2.5,4.5);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.f("#5A6165").s().p("AAZAFIgxAAIAAgJIAxAAIAAAJ").cp();
	this.shape_101.setTransform(2.5,6.5);

	this.addChild(this.shape_101,this.shape_100,this.shape_99,this.shape_98);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,5,7);


(lib.ScrollArrowUp_disabledSkin = function() {
	this.initialize();

	// skin
	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.lf(["rgba(238,238,238,0)","rgba(255,255,255,0.298)"],[0,1],-0.9,3.5,-0.9,-3.1).s().p("ABBgfIAAA/IiBAAIAAg/ICBAA").cp();
	this.shape_102.setTransform(7.5,4);

	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.lf(["rgba(91,93,94,0.298)","rgba(183,186,188,0.298)"],[0,1],1,5.9,1,-6.9).s().p("ABBg7IAAB3IiBAAIAAh3ICBAAAhKhFIAACLICVAAIAAiLIiVAA").cp();
	this.shape_103.setTransform(7.5,7);

	this.shape_104 = new cjs.Shape();
	this.shape_104.graphics.lf(["#E6E6E6","#FFFFFF"],[0,1],-1.4,7,-1.4,-6.5).s().p("AhAA8IAAh3ICBAAIAAB3IiBAA").cp();
	this.shape_104.setTransform(7.5,7);

	this.addChild(this.shape_104,this.shape_103,this.shape_102);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,15,14);


(lib.ScrollArrowDown_disabledSkin = function() {
	this.initialize();

	// skin
	this.shape_105 = new cjs.Shape();
	this.shape_105.graphics.lf(["rgba(238,238,238,0)","rgba(255,255,255,0.298)"],[0,1],-0.9,3.5,-0.9,-3.1).s().p("ABBgfIAAA/IiBAAIAAg/ICBAA").cp();
	this.shape_105.setTransform(7.5,4);

	this.shape_106 = new cjs.Shape();
	this.shape_106.graphics.lf(["rgba(91,93,94,0.298)","rgba(183,186,188,0.298)"],[0,1],1,5.9,1,-6.9).s().p("ABBg7IAAB3IiBAAIAAh3ICBAAAhKhFIAACLICVAAIAAiLIiVAA").cp();
	this.shape_106.setTransform(7.5,7);

	this.shape_107 = new cjs.Shape();
	this.shape_107.graphics.lf(["#E6E6E6","#FFFFFF"],[0,1],-1.4,7,-1.4,-6.5).s().p("AhAA8IAAh3ICBAAIAAB3IiBAA").cp();
	this.shape_107.setTransform(7.5,7);

	this.addChild(this.shape_107,this.shape_106,this.shape_105);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,15,14);


(lib.RadioButton_upIcon = function() {
	this.initialize();

	// highlight
	this.shape_108 = new cjs.Shape();
	this.shape_108.graphics.lf(["rgba(204,204,204,0)","rgba(255,255,255,0.298)"],[0,1],-1,3.1,-1,-2.9).s().p("AgpgLQARgSAYAAQAZAAARASQACABABACQAPAPAAAXIh3AAQAAgXAPgPQABgCACgBIAAAA").cp();
	this.shape_108.setTransform(7,4);

	// fill
	this.shape_109 = new cjs.Shape();
	this.shape_109.graphics.lf(["#5B5D5E","#B7BABC"],[0,1],0.5,7,0.5,-7.5).s().p("AA6gmQAMARAAAVQAAAdgVAUQgUAVgdAAQgcAAgUgVQgVgUAAgdQAAgVAMgRQAEgFAFgFQAUgVAcAAQAdAAAUAVQAFAFAEAFIAAAAAAqAqQASgRAAgZQAAgWgPgQQgBgCgCgBQgRgSgZAAQgYAAgRASQgCABgBACQgPAQAAAWQAAAZASARQARASAYAAQAZAAARgSIAAAA").cp();
	this.shape_109.setTransform(7,7);

	this.shape_110 = new cjs.Shape();
	this.shape_110.graphics.lf(["rgba(204,204,204,0.4)","rgba(255,255,255,0.6)"],[0,1],-0.9,5.3,-0.9,-6.6).s().p("AAqAqQgRASgZAAQgYAAgRgSQgSgRAAgZQAAgWAPgQQABgCACgBQARgSAYAAQAZAAARASQACABABACQAPAQAAAWQAAAZgSARIAAAA").cp();
	this.shape_110.setTransform(7,7);

	this.addChild(this.shape_110,this.shape_109,this.shape_108);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,14,14);


(lib.RadioButton_selectedIcon = function() {
	this.initialize();

	// icon
	this.shape_111 = new cjs.Shape();
	this.shape_111.graphics.f("#333333").s().p("AAAAUQgTAAAAgUQAAgTATAAQAUAAAAATQAAAUgUAAIAAAA").cp();
	this.shape_111.setTransform(2,2);

	this.addChild(this.shape_111);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,4,4);


(lib.RadioButton_overIcon = function() {
	this.initialize();

	// highlight
	this.shape_112 = new cjs.Shape();
	this.shape_112.graphics.lf(["rgba(204,204,204,0)","rgba(255,255,255,0.298)"],[0,1],-1,3.1,-1,-2.9).s().p("AgpgLQARgSAYAAQAZAAARASQACACABABQAPAPAAAXIh3AAQAAgXAPgPQABgBACgCIAAAA").cp();
	this.shape_112.setTransform(7,4.1);

	// fill
	this.shape_113 = new cjs.Shape();
	this.shape_113.graphics.lf(["rgba(238,238,238,0.651)","rgba(255,255,255,0.741)"],[0,1],-0.9,5.3,-0.9,-6.6).s().p("AAqAqQgRASgZAAQgYAAgRgSQgSgRAAgZQAAgYASgRQARgSAYAAQAZAAARASQASARAAAYQAAAZgSARIAAAA").cp();
	this.shape_113.setTransform(7,7);

	this.shape_114 = new cjs.Shape();
	this.shape_114.graphics.lf(["#0075BF","#009DFF"],[0,0.992],0.3,7.9,0.3,-7.7).s().p("AAqAqQASgRAAgZQAAgYgSgRQgRgSgZAAQgYAAgRASQgSARAAAYQAAAZASARQARASAYAAQAZAAARgSIAAAAABGAAQAAAdgVAUQgUAVgdAAQgcAAgUgVQgVgUAAgdQAAgcAVgUQAUgVAcAAQAdAAAUAVQAVAUAAAcIAAAA").cp();
	this.shape_114.setTransform(7,7);

	this.addChild(this.shape_114,this.shape_113,this.shape_112);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,14,14);


(lib.RadioButton_downIcon = function() {
	this.initialize();

	// highlight
	this.shape_115 = new cjs.Shape();
	this.shape_115.graphics.lf(["rgba(204,204,204,0)","rgba(255,255,255,0.298)"],[0,1],-1,3.1,-1,-2.9).s().p("AgpgLQARgSAYAAQAZAAARASQACABABACQAPAPAAAXIh3AAQAAgXAPgPQABgCACgBIAAAA").cp();
	this.shape_115.setTransform(7,4);

	// fill
	this.shape_116 = new cjs.Shape();
	this.shape_116.graphics.lf(["#99D7FE","#D9F0FE"],[0,1],-0.9,5.3,-0.9,-6.6).s().p("AA8AAQAAAZgSARQgRASgZAAQgYAAgRgSQgSgRAAgZQAAgYASgRQARgSAYAAQAZAAARASQASARAAAYIAAAA").cp();
	this.shape_116.setTransform(7,7);

	this.shape_117 = new cjs.Shape();
	this.shape_117.graphics.lf(["#0075BF","#009DFF"],[0,0.992],0.3,7.9,0.3,-7.7).s().p("ABGAAQAAAdgVAUQgUAVgdAAQgcAAgUgVQgVgUAAgdQAAgcAVgUQAUgVAcAAQAdAAAUAVQAVAUAAAcIAAAAAA8AAQAAgYgSgRQgRgSgZAAQgYAAgRASQgSARAAAYQAAAZASARQARASAYAAQAZAAARgSQASgRAAgZIAAAA").cp();
	this.shape_117.setTransform(7,7);

	this.addChild(this.shape_117,this.shape_116,this.shape_115);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,14,14);


(lib.RadioButton_disabledIcon = function() {
	this.initialize();

	// highlight
	this.shape_118 = new cjs.Shape();
	this.shape_118.graphics.lf(["rgba(204,204,204,0)","rgba(255,255,255,0.298)"],[0,1],-1,3.1,-1,-2.9).s().p("AgpgLQARgSAYAAQAZAAARASQACABABACQAPAPAAAXIh3AAQAAgXAPgPQABgCACgBIAAAA").cp();
	this.shape_118.setTransform(7,4);

	// fill
	this.shape_119 = new cjs.Shape();
	this.shape_119.graphics.lf(["rgba(91,93,94,0.298)","rgba(183,186,188,0.298)"],[0,1],0.5,7,0.5,-7.5).s().p("ABGAAQAAAdgVAUQgUAVgdAAQgcAAgUgVQgVgUAAgdQAAgVAMgRQAEgFAFgFQAUgVAcAAQAdAAAUAVQAFAFAEAFQAMARAAAVIAAAAAA8AAQAAgWgPgQQgBgCgCgBQgRgSgZAAQgYAAgRASQgCABgBACQgPAQAAAWQAAAZASARQARASAYAAQAZAAARgSQASgRAAgZIAAAA").cp();
	this.shape_119.setTransform(7,7);

	this.shape_120 = new cjs.Shape();
	this.shape_120.graphics.lf(["rgba(204,204,204,0.2)","rgba(255,255,255,0.298)"],[0,1],-0.9,5.3,-0.9,-6.6).s().p("AA8AAQAAAZgSARQgRASgZAAQgYAAgRgSQgSgRAAgZQAAgWAPgQQABgCACgBQARgSAYAAQAZAAARASQACABABACQAPAQAAAWIAAAA").cp();
	this.shape_120.setTransform(7,7);

	this.addChild(this.shape_120,this.shape_119,this.shape_118);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,14,14);


(lib.List_skin = function() {
	this.initialize();

	// Layer 2
	this.shape_121 = new cjs.Shape();
	this.shape_121.graphics.f("#CCCCCC").s().p("AUou/QASAAAOANQANANAAATIAAdNQAAABgCACQgBACgCAAMgqfAAAQgCAAgBgCQgCgCAAgBIAA9NQAAgTANgNQANgNATAAMApPAAAAVBurQgLgKgOAAMgpPAAAQgPAAgKAKQgKAKAAAPIAAdIMAqVAAAIAA9IQAAgPgKgKIAAAA").cp();
	this.shape_121.setTransform(136.5,96);

	this.shape_122 = new cjs.Shape();
	this.shape_122.graphics.f("#FFFFFF").s().p("AVBurQAKAKAAAPIAAdIMgqVAAAIAA9IQAAgPAKgKQAKgKAPAAMApPAAAQAOAAALAKIAAAA").cp();
	this.shape_122.setTransform(136.5,96);

	this.addChild(this.shape_122,this.shape_121);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,273,192);


(lib.ComboBox_upSkin = function() {
	this.initialize();

	// icon
	this.shape_123 = new cjs.Shape();
	this.shape_123.graphics.f("#000000").s().p("AgEAKIAAAKIAJAAIAAgKIAKAAIAAgKIAKAAIAAgJIAKAAIAAgKIhFAAIAAAKIAKAAIAAAJIAKAAIAAAKIAKAA").cp();
	this.shape_123.setTransform(135.5,11);

	// highlight
	this.shape_124 = new cjs.Shape();
	this.shape_124.graphics.lf(["rgba(204,204,204,0)","rgba(255,255,255,0.298)"],[0,1],-12.4,5.5,-12.4,-4.9).s().p("ALaA3I2zAAIAAhPQAAgeAeAAIV3AAQAdAAABAeIAABP").cp();
	this.shape_124.setTransform(74,6.5);

	// fill
	this.shape_125 = new cjs.Shape();
	this.shape_125.graphics.lf(["rgba(204,204,204,0.4)","rgba(255,255,255,0.6)"],[0,1],-62.9,11,-62.9,-10.9).s().p("ALahFIAACLQAAAdgdABI15AAQgdgBAAgdIAAiLQAAgdAdgBIV5AAQAdABAAAdIAAAA").cp();
	this.shape_125.setTransform(74,11);

	// border
	this.shape_126 = new cjs.Shape();
	this.shape_126.graphics.lf(["#585F63","#B7BABC"],[0,1],63,11,63,-10.9).s().p("AIIhjIgKAAIy6AAQgdABAAAdIAACLQAAAdAdABIS6AAIAKAAIC1AAQAdgBAAgdIAAiLQAAgdgdgBIi1AAALkBGQAAAogoAAI13AAQgoAAAAgoIAAiLQAAgoAoAAIV3AAQAoAAAAAoIAACL").cp();
	this.shape_126.setTransform(74,11);

	this.shape_127 = new cjs.Shape();
	this.shape_127.graphics.lf(["#585F63","#B7BABC"],[0,1],0.2,20,0.2,-9.9).s().p("AgEBkIAAjHIAJAAIAADHIgJAA").cp();
	this.shape_127.setTransform(125.5,11);

	this.addChild(this.shape_127,this.shape_126,this.shape_125,this.shape_124,this.shape_123);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,148,22);


(lib.ComboBox_overSkin = function() {
	this.initialize();

	// icon
	this.shape_128 = new cjs.Shape();
	this.shape_128.graphics.f("#000000").s().p("AgEAKIAAAKIAJAAIAAgKIAKAAIAAgKIAKAAIAAgJIAKAAIAAgKIhFAAIAAAKIAKAAIAAAJIAKAAIAAAKIAKAA").cp();
	this.shape_128.setTransform(135.5,11);

	// highlight
	this.shape_129 = new cjs.Shape();
	this.shape_129.graphics.lf(["rgba(204,204,204,0)","rgba(255,255,255,0.298)"],[0,1],-12.4,5.5,-12.4,-4.9).s().p("AH+g2IAABtIzXAAIAAhPQAAgeAeAAIS5AAALaA3IjSAAIAAhtIC0AAQAdAAABAeIAABP").cp();
	this.shape_129.setTransform(74,6.5);

	// fill
	this.shape_130 = new cjs.Shape();
	this.shape_130.graphics.lf(["rgba(238,238,238,0.651)","rgba(255,255,255,0.741)"],[0,1],-62.9,11,-62.9,-10.9).s().p("AH+hjIAADHIy6AAQgcgBgBgcIAAiNQABgcAcgBIS6AAALaBGQAAAdgdABIi1AAIAAjHIC1AAQAdABAAAdIAACL").cp();
	this.shape_130.setTransform(74,11);

	// border
	this.shape_131 = new cjs.Shape();
	this.shape_131.graphics.lf(["#0075C0","#009DFF"],[0,0.992],0.4,10.2,0.4,-10).s().p("AgEBkIAAjHIAJAAIAADHIgJAA").cp();
	this.shape_131.setTransform(125.5,11);

	this.shape_132 = new cjs.Shape();
	this.shape_132.graphics.lf(["#0075BF","#009DFF"],[0,0.992],63,11,63,-10.9).s().p("AIIhjIgKAAIy6AAQgcABgBAcIAACNQABAcAcABIS6AAIAKAAIC1AAQAdgBAAgdIAAiLQAAgdgdgBIi1AAALkhFIAACLQAAADAAADQgEAigkAAI13AAQgHAAgGgCIgSgKQgEgFgCgHQgBgBAAgBQAAAAAAgBQAAAAAAAAQAAgBgBAAQAAgCAAgBQgBgFAAgEIAAiLQAAglAjgCQADgBACAAIV3AAQAkAAAEAiQAAADAAADIAAAA").cp();
	this.shape_132.setTransform(74,11);

	this.addChild(this.shape_132,this.shape_131,this.shape_130,this.shape_129,this.shape_128);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,148,22);


(lib.ComboBox_downSkin = function() {
	this.initialize();

	// icon
	this.shape_133 = new cjs.Shape();
	this.shape_133.graphics.f("#000000").s().p("AgEAKIAAAKIAJAAIAAgKIAKAAIAAgKIAKAAIAAgJIAKAAIAAgKIhFAAIAAAKIAKAAIAAAJIAKAAIAAAKIAKAA").cp();
	this.shape_133.setTransform(135.5,11);

	// highlight
	this.shape_134 = new cjs.Shape();
	this.shape_134.graphics.lf(["rgba(204,204,204,0)","rgba(255,255,255,0.298)"],[0,1],-1.4,5.8,-1.4,-5.2).s().p("AJsg2IAABtIzXAAIAAhPQAAgeAeAAIS5AA").cp();
	this.shape_134.setTransform(63,6.5);

	this.shape_135 = new cjs.Shape();
	this.shape_135.graphics.lf(["rgba(204,204,204,0)","rgba(255,255,255,0.298)"],[0,1],-74.9,5.5,-74.9,-4.9).s().p("ABpA3IjRAAIAAhtICzAAQAdAAABAeIAABP").cp();
	this.shape_135.setTransform(136.5,6.5);

	// fill
	this.shape_136 = new cjs.Shape();
	this.shape_136.graphics.lf(["#99D7FE","#D9F0FE"],[0,1],-51.9,11,-51.9,-10.9).s().p("AJshjIy6AAQgcABgBAcIAACNQABAcAcABIS6AAIAAjH").cp();
	this.shape_136.setTransform(63,11);

	// border
	this.shape_137 = new cjs.Shape();
	this.shape_137.graphics.lf(["#0075C0","#009DFF"],[0,0.992],0.4,10.2,0.4,-10).s().p("AgEBkIAAjHIAJAAIAADHIgJAA").cp();
	this.shape_137.setTransform(125.5,11);

	this.shape_138 = new cjs.Shape();
	this.shape_138.graphics.lf(["rgba(238,238,238,0.651)","rgba(255,255,255,0.741)"],[0,1],-125.4,11,-125.4,-10.9).s().p("AhoBkIAAjHIC0AAQAdABAAAdIAACLQAAAdgdABIi0AA").cp();
	this.shape_138.setTransform(136.5,11);

	this.shape_139 = new cjs.Shape();
	this.shape_139.graphics.lf(["#0075BF","#009DFF"],[0,0.992],63,11,63,-10.9).s().p("ALkBMQgEAigkAAI13AAQgoAAAAgoIAAiLQAAgJACgHQADgIAFgGQAKgKAUAAIV3AAQAkAAAEAiQAAADAAADIAACLQAAADAAADIAAAAAH+BkIAKAAIC1AAQAdgBAAgdIAAiLQAAgdgdgBIi1AAIgKAAIy6AAQgcABgBAcIAACMQAAAdAdABIS6AA").cp();
	this.shape_139.setTransform(74,11);

	this.addChild(this.shape_139,this.shape_138,this.shape_137,this.shape_136,this.shape_135,this.shape_134,this.shape_133);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,148,22);


(lib.ComboBox_disabledSkin = function() {
	this.initialize();

	// icon
	this.shape_140 = new cjs.Shape();
	this.shape_140.graphics.f("rgba(0,0,0,0.4)").s().p("AgEAKIAAAKIAJAAIAAgKIAKAAIAAgKIAKAAIAAgJIAKAAIAAgKIhFAAIAAAKIAKAAIAAAJIAKAAIAAAKIAKAA").cp();
	this.shape_140.setTransform(135.5,11);

	// highlight
	this.shape_141 = new cjs.Shape();
	this.shape_141.graphics.lf(["rgba(204,204,204,0)","rgba(255,255,255,0.141)"],[0,1],-12.3,5.5,-12.3,-4.9).s().p("ALaA3I2yAAIgBhPQAAgeAeABIV2AAQAegBAAAeIABBP").cp();
	this.shape_141.setTransform(74,6.5);

	// fill
	this.shape_142 = new cjs.Shape();
	this.shape_142.graphics.lf(["rgba(204,204,204,0.2)","rgba(255,255,255,0.298)"],[0,1],-62.9,11,-62.9,-10.9).s().p("ALahFIAACLQAAAdgdABI15AAQgdgBAAgdIAAiLQAAgdAdgBIV5AAQAdABAAAdIAAAA").cp();
	this.shape_142.setTransform(74,11);

	// border
	this.shape_143 = new cjs.Shape();
	this.shape_143.graphics.lf(["rgba(88,95,99,0.298)","rgba(183,186,188,0.298)"],[0,1],0.2,20,0.2,-9.9).s().p("AgEhjIAJAAIAADHIgJAAIAAjH").cp();
	this.shape_143.setTransform(125.5,11);

	this.shape_144 = new cjs.Shape();
	this.shape_144.graphics.lf(["rgba(88,95,99,0.298)","rgba(183,186,188,0.298)"],[0,1],63,11,63,-10.9).s().p("AK8htI13AAQgoAAAAAoIAACLQAAAoAoAAIV3AAQAoAAAAgoIAAiLQAAgogoAAIAAAAALahFIAACLQAAAdgdABI15AAQgdgBAAgdIAAiLQAAgdAdgBIV5AAQAdABAAAdIAAAA").cp();
	this.shape_144.setTransform(74,11);

	this.addChild(this.shape_144,this.shape_143,this.shape_142,this.shape_141,this.shape_140);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,148,22);


(lib.ColorPicker_upSkin = function() {
	this.initialize();

	// icon
	this.shape_145 = new cjs.Shape();
	this.shape_145.graphics.f("#000000").s().p("AgTgJIAnAAIgUATIgTgT").cp();
	this.shape_145.setTransform(17.5,18.6);

	// skin
	this.shape_146 = new cjs.Shape();
	this.shape_146.graphics.f("#E5E6E7").s().p("AhjBkIAAjHIDHAAIAADHIjHAAAAeBQIAAgeIAyAAIAKAAIAAiLIgKAAIipAAIAACpIAAAKIB3AAIAAgK").cp();
	this.shape_146.setTransform(11,11);

	this.shape_147 = new cjs.Shape();
	this.shape_147.graphics.f("#9A9B9D").s().p("AhtBkIAKAAIDHAAIAAjHIAAgKIAKAAIAADbIjbAAIAAgKABQhZIAAAKIifAAIAACfIgKAAIAAipICpAA").cp();
	this.shape_147.setTransform(11,11);

	this.shape_148 = new cjs.Shape();
	this.shape_148.graphics.f("#FFFFFF").s().p("AhoBpIAAjRIDRAAIAAAKIjHAAIAADHIgKAAABVhKIAAgKIAKAAIAACLIgKAAIAAiBAhKBVIBtAAIAAAKIh3AAIAAgKIAKAA").cp();
	this.shape_148.setTransform(10.5,10.5);

	// fill
	this.shape_149 = new cjs.Shape();
	this.shape_149.graphics.f("rgba(51,51,51,0)").s().p("AhPBQIAAifICfAAIAACfIifAA").cp();
	this.shape_149.setTransform(11,11);

	this.addChild(this.shape_149,this.shape_148,this.shape_147,this.shape_146,this.shape_145);

}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,22,22);


(lib.ColorPicker_textFieldSkin = function() {
	this.initialize();

	// border
	this.shape_150 = new cjs.Shape();
	this.shape_150.graphics.lf(["#0075BF","#0075BF","#009DFF","#009DFF","#009DFF"],[0,0,0.992,1,1],-37.3,0,37.5,0).s().p("Al1CuIAAlWQAAgCACgCQABgBACAAILmAAQgCAAgBABQgCACAAACIAAAFIrcAAIAAFMIgFAAQgCAAgBACQgCABAAACIAAAA").cp();
	this.shape_150.setTransform(37.5,17.5);

	this.shape_151 = new cjs.Shape();
	this.shape_151.graphics.lf(["#0075BF","#0075BF","#009DFF","#009DFF","#009DFF"],[0,0,0.992,1,1],-37.6,0,37.7,0).s().p("AltCnILcAAIAAlNIAAgFQAAgCABgBQABgCACAAIABAAQACAAABACQABABABACIAAFXQgBACgBABQgBACgCAAIrmAAQgDAAgBgCQgBgBAAgCIAAAAQAAgCABgCQABgBADAAIAFAA").cp();
	this.shape_151.setTransform(37.8,17.8);

	// fill
	this.shape_152 = new cjs.Shape();
	this.shape_152.graphics.lf(["#0075BF","#0075BF","#009DFF","#009DFF","#009DFF"],[0,0,0.992,1,1],-37.6,0,37.7,0).s().p("AF0iwIrnAAQgCAAgBACQgBABgBACIAAFXQABACABABQABACACAAILnAAQACAAABgCQABgBABgCIAAlXQgBgCgBgBQgBgCgCAAIAAAAAFvCnIrdAAIAAlNILdAAIAAFN").cp();
	this.shape_152.setTransform(37.2,17.2);

	this.addChild(this.shape_152,this.shape_151,this.shape_150);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-0.4,-0.4,76,36);


(lib.ColorPicker_swatchSkin = function() {
	this.initialize();

	// skin
	this.shape_153 = new cjs.Shape();
	this.shape_153.graphics.f("#00CCFF").s().p("AAoAoIhPAAIAAhPIBPAAIAABP").cp();
	this.shape_153.setTransform(4,4);

	this.addChild(this.shape_153);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,8,8);


(lib.ColorPicker_swatchSelectedSkin = function() {
	this.initialize();

	// skin
	this.shape_154 = new cjs.Shape();
	this.shape_154.graphics.f().s("#FFFFFF").ss(1,2,0,3).p("AA3A3IhsAAIAAhtIBsAAIAABt").cp();
	this.shape_154.setTransform(6,6);

	this.addChild(this.shape_154);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0.5,0.5,11,11);


(lib.ColorPicker_overSkin = function() {
	this.initialize();

	// skin
	this.shape_155 = new cjs.Shape();
	this.shape_155.graphics.f("#000000").s().p("AgTgJIAnAAIgUATIgTgT").cp();
	this.shape_155.setTransform(17.5,18.6);

	this.shape_156 = new cjs.Shape();
	this.shape_156.graphics.f("rgba(51,51,51,0)").s().p("AAeBQIhtAAIAAifICfAAIAACBIgyAAIAAAe").cp();
	this.shape_156.setTransform(11,11);

	this.shape_157 = new cjs.Shape();
	this.shape_157.graphics.f("#FFFFFF").s().p("AhoBpIAAjRIDRAAIAAAKIjHAAIAADHIgKAAABVhKIAAgKIAKAAIAACLIgKAAIAAiBAhKBVIBtAAIAAAKIh3AAIAAgKIAKAA").cp();
	this.shape_157.setTransform(10.5,10.5);

	this.shape_158 = new cjs.Shape();
	this.shape_158.graphics.f("#E5E6E7").s().p("AhjBkIAAjHIDHAAIAADHIjHAAAAeBQIAAgeIAyAAIAKAAIAAiLIgKAAIipAAIAACpIAAAKIB3AAIAAgKAAsBBIAUAUIAUgUIgoAA").cp();
	this.shape_158.setTransform(11,11);

	this.shape_159 = new cjs.Shape();
	this.shape_159.graphics.f("#9A9B9D").s().p("AhtBkIAKAAIDHAAIAAjHIAAgKIAKAAIAADbIjbAAIAAgKABQhZIAAAKIifAAIAACfIgKAAIAAipICpAA").cp();
	this.shape_159.setTransform(11,11);

	this.addChild(this.shape_159,this.shape_158,this.shape_157,this.shape_156,this.shape_155);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,22,22);


(lib.ColorPicker_downSkin = function() {
	this.initialize();

	// skin
	this.shape_160 = new cjs.Shape();
	this.shape_160.graphics.f("#000000").s().p("AAUgJIgUATIgTgTIAnAA").cp();
	this.shape_160.setTransform(17.5,18.6);

	this.shape_161 = new cjs.Shape();
	this.shape_161.graphics.f("rgba(51,51,51,0)").s().p("ABQAyIgyAAIAAAeIhtAAIAAifICfAAIAACB").cp();
	this.shape_161.setTransform(11,11);

	this.shape_162 = new cjs.Shape();
	this.shape_162.graphics.f("#9A9B9D").s().p("AhUBVIAAipICpAAIAAAKIifAAIAACfIgKAA").cp();
	this.shape_162.setTransform(10.5,10.5);

	this.shape_163 = new cjs.Shape();
	this.shape_163.graphics.f("#FFFFFF").s().p("AhoBpIAAjRIDRAAIAAAKIjHAAIAADHIgKAAABVA3IAAiBIAAgKIAKAAIAACLIgKAAAhUBVIAKAAIBtAAIAAAKIh3AAIAAgK").cp();
	this.shape_163.setTransform(10.5,10.5);

	this.shape_164 = new cjs.Shape();
	this.shape_164.graphics.f("#E5E6E7").s().p("AhjBkIAAjHIDHAAIAADHIjHAAABQhZIipAAIAACpIAAAKIB3AAIAAgKIAAgeIAyAAIAKAAIAAiLIgKAAABUBBIgoAAIAUAUIAUgU").cp();
	this.shape_164.setTransform(11,11);

	this.shape_165 = new cjs.Shape();
	this.shape_165.graphics.f("#CCCCCC").s().p("AhtBkIAKAAIDHAAIAAjHIAAgKIAKAAIAADbIjbAAIAAgK").cp();
	this.shape_165.setTransform(11,11);

	this.addChild(this.shape_165,this.shape_164,this.shape_163,this.shape_162,this.shape_161,this.shape_160);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,22,22);


(lib.ColorPicker_disabledSkin = function() {
	this.initialize();

	// skin
	this.shape_166 = new cjs.Shape();
	this.shape_166.graphics.f("rgba(255,255,255,0.498)").s().p("AhoBpIAAjRIDRAAIAAAKIjHAAIAADHIgKAAABVhKIAAgKIAKAAIAACLIgKAAIAAiBAhKBVIBtAAIAAAKIh3AAIAAgKIAKAA").cp();
	this.shape_166.setTransform(10.5,10.5);

	this.shape_167 = new cjs.Shape();
	this.shape_167.graphics.f("rgba(229,230,231,0.498)").s().p("AhjBkIAAjHIDHAAIAADHIjHAAAAeBQIAAgeIAyAAIAKAAIAAiLIgKAAIipAAIAACpIAAAKIB3AAIAAgKAAsBBIAUAUIAUgUIgoAA").cp();
	this.shape_167.setTransform(11,11);

	this.shape_168 = new cjs.Shape();
	this.shape_168.graphics.f("rgba(154,155,157,0.498)").s().p("AhtBkIAKAAIDHAAIAAjHIAAgKIAKAAIAADbIjbAAIAAgKABQhZIAAAKIifAAIAACfIgKAAIAAipICpAA").cp();
	this.shape_168.setTransform(11,11);

	this.shape_169 = new cjs.Shape();
	this.shape_169.graphics.f("rgba(51,51,51,0)").s().p("AAeBQIhtAAIAAifICfAAIAACBIgyAAIAAAe").cp();
	this.shape_169.setTransform(11,11);

	this.shape_170 = new cjs.Shape();
	this.shape_170.graphics.f("rgba(0,0,0,0.498)").s().p("AgTgJIAnAAIgUATIgTgT").cp();
	this.shape_170.setTransform(17.5,18.6);

	this.addChild(this.shape_170,this.shape_169,this.shape_168,this.shape_167,this.shape_166);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,22,22);


(lib.ColorPicker_colorWell = function() {
	this.initialize();

	// colorWell
	this.shape_171 = new cjs.Shape();
	this.shape_171.graphics.f("#999999").s().p("AheheIC9AAIAAC9Ii9AAIAAi9").cp();
	this.shape_171.setTransform(9.5,9.5);

	this.addChild(this.shape_171);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,19,19);


(lib.CheckBox_upIcon = function() {
	this.initialize();

	// highlight
	this.shape_172 = new cjs.Shape();
	this.shape_172.graphics.lf(["rgba(238,238,238,0)","rgba(255,255,255,0.298)"],[0,1],-0.9,3.5,-0.9,-3.1).s().p("AA8AgIh3AAIAAg/IB3AAIAAA/").cp();
	this.shape_172.setTransform(7,4.3);

	// fill
	this.shape_173 = new cjs.Shape();
	this.shape_173.graphics.lf(["rgba(204,204,204,0.4)","rgba(255,255,255,0.6)"],[0,1],-0.9,7,-0.9,-6.5).s().p("AA8g7IAAB3Ih3AAIAAh3IB3AA").cp();
	this.shape_173.setTransform(7,7);

	// border
	this.shape_174 = new cjs.Shape();
	this.shape_174.graphics.lf(["#5B5D5E","#B7BABC"],[0,1],1.5,5.9,1.5,-6.9).s().p("AhFBGICLAAIAAiLIiLAAIAACLAA8g7IAAB3Ih3AAIAAh3IB3AA").cp();
	this.shape_174.setTransform(7,7);

	this.addChild(this.shape_174,this.shape_173,this.shape_172);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,14,14);


(lib.CheckBox_selectedIcon = function() {
	this.initialize();

	// icon
	this.shape_175 = new cjs.Shape();
	this.shape_175.graphics.f("#000000").s().p("AgxgGIAUgBIAPAdIAqhCIAWAAIgMAOIgqBLIgWAAIgXgz").cp();
	this.shape_175.setTransform(5,4.5);

	this.addChild(this.shape_175);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,10,9);


(lib.CheckBox_overIcon = function() {
	this.initialize();

	// highlight
	this.shape_176 = new cjs.Shape();
	this.shape_176.graphics.lf(["rgba(238,238,238,0)","rgba(255,255,255,0.298)"],[0,1],-0.9,3.5,-0.9,-3.1).s().p("AA8AgIh3AAIAAg/IB3AAIAAA/").cp();
	this.shape_176.setTransform(7,4.3);

	// fill
	this.shape_177 = new cjs.Shape();
	this.shape_177.graphics.lf(["rgba(238,238,238,0.651)","rgba(255,255,255,0.741)"],[0,1],-0.9,7,-0.9,-6.5).s().p("Ag7A8IAAh3IB3AAIAAB3Ih3AA").cp();
	this.shape_177.setTransform(7,7);

	// border
	this.shape_178 = new cjs.Shape();
	this.shape_178.graphics.lf(["#0075BF","#009DFF"],[0,0.992],0.8,6.7,0.8,-7.7).s().p("AhFhFIAACLICLAAIAAiLIiLAAAg7A8IAAh3IB3AAIAAB3Ih3AA").cp();
	this.shape_178.setTransform(7,7);

	this.addChild(this.shape_178,this.shape_177,this.shape_176);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,14,14);


(lib.CheckBox_downIcon = function() {
	this.initialize();

	// highlight
	this.shape_179 = new cjs.Shape();
	this.shape_179.graphics.lf(["rgba(238,238,238,0)","rgba(255,255,255,0.298)"],[0,1],-0.9,3.5,-0.9,-3.1).s().p("AA8AgIh3AAIAAg/IB3AAIAAA/").cp();
	this.shape_179.setTransform(7,4.3);

	// fill
	this.shape_180 = new cjs.Shape();
	this.shape_180.graphics.lf(["#99D7FE","#D9F0FE"],[0,1],-0.9,7,-0.9,-6.5).s().p("AA8g7IAAB3Ih3AAIAAh3IB3AA").cp();
	this.shape_180.setTransform(7,7);

	// border
	this.shape_181 = new cjs.Shape();
	this.shape_181.graphics.lf(["#0075BF","#009DFF"],[0,0.992],0.8,6.7,0.8,-7.7).s().p("ABGBGIAAiLIiLAAIAACLICLAAAA8g7IAAB3Ih3AAIAAh3IB3AA").cp();
	this.shape_181.setTransform(7,7);

	this.addChild(this.shape_181,this.shape_180,this.shape_179);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,14,14);


(lib.CheckBox_disabledIcon = function() {
	this.initialize();

	// highlight
	this.shape_182 = new cjs.Shape();
	this.shape_182.graphics.lf(["rgba(238,238,238,0)","rgba(255,255,255,0.298)"],[0,1],-0.9,3.5,-0.9,-3.1).s().p("AA8AgIh3AAIAAg/IB3AAIAAA/").cp();
	this.shape_182.setTransform(7,4.3);

	// fill
	this.shape_183 = new cjs.Shape();
	this.shape_183.graphics.lf(["rgba(204,204,204,0.2)","rgba(255,255,255,0.298)"],[0,1],-0.9,7,-0.9,-6.5).s().p("AA8g7IAAB3Ih3AAIAAh3IB3AA").cp();
	this.shape_183.setTransform(7,7);

	// border
	this.shape_184 = new cjs.Shape();
	this.shape_184.graphics.lf(["rgba(204,204,204,0.2)","rgba(255,255,255,0.298)"],[0,1],-0.9,7,-0.9,-6.5).s().p("AA8A8Ih3AAIAAh3IB3AAIAAB3").cp();
	this.shape_184.setTransform(7,7);

	this.shape_185 = new cjs.Shape();
	this.shape_185.graphics.lf(["rgba(91,93,94,0.298)","rgba(183,186,188,0.298)"],[0,1],1.5,5.9,1.5,-6.9).s().p("AA8g7IAAB3Ih3AAIAAh3IB3AAAhFBGICLAAIAAiLIiLAAIAACL").cp();
	this.shape_185.setTransform(7,7);

	this.addChild(this.shape_185,this.shape_184,this.shape_183,this.shape_182);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,14,14);


(lib.CellRenderer_upSkin = function() {
	this.initialize();

	// border
	this.shape_186 = new cjs.Shape();
	this.shape_186.graphics.lf(["#5B5D5E","#B7BABC"],[0,1],67.5,-9.8,67.5,3).s().p("ArtBhIAAADIXbAAIAAgDIAKAAIAAANI3vAAIAAgNIAKAAArthjIgKAAIAAgKIXvAAIAAAKIgKAAI3bAA").cp();
	this.shape_186.setTransform(76,11);

	this.shape_187 = new cjs.Shape();
	this.shape_187.graphics.f("#B7BABC").s().p("Ar3hhIAKAAIAADDIgKAAIAAjDAL4BiIgKAAIAAjDIAKAAIAADD").cp();
	this.shape_187.setTransform(76,10.9);

	// fill
	this.shape_188 = new cjs.Shape();
	this.shape_188.graphics.f("#FFFFFF").s().p("AL4BuI3vAAIAAjaIXvAAIAADa").cp();
	this.shape_188.setTransform(76,11);

	this.addChild(this.shape_188,this.shape_187,this.shape_186);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,152,22.1);


(lib.CellRenderer_selectedUpSkin = function() {
	this.initialize();

	// border
	this.shape_189 = new cjs.Shape();
	this.shape_189.graphics.lf(["#5B5D5E","#B7BABC"],[0,1],-67.4,9.9,-67.4,-2.9).s().p("Ar3hgIAAgNIXvAAIAAANIgKAAIAAgDI3bAAIAAADIgKAAALuBkIAKAAIAAAKI3vAAIAAgKIAKAAIXbAA").cp();
	this.shape_189.setTransform(76,11);

	this.shape_190 = new cjs.Shape();
	this.shape_190.graphics.f("#B7BABC").s().p("ALuBiIAAjDIAKAAIAADDIgKAAAr3hhIAKAAIAADDIgKAAIAAjD").cp();
	this.shape_190.setTransform(76,11.1);

	// fill
	this.shape_191 = new cjs.Shape();
	this.shape_191.graphics.f("#9AD8FF").s().p("AL4BuI3vAAIAAjaIXvAAIAADa").cp();
	this.shape_191.setTransform(76,11);

	this.addChild(this.shape_191,this.shape_190,this.shape_189);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,152,22.1);


(lib.CellRenderer_selectedOverSkin = function() {
	this.initialize();

	// highlight
	this.shape_192 = new cjs.Shape();
	this.shape_192.graphics.lf(["rgba(238,238,238,0)","rgba(255,255,255,0.298)"],[0,1],-12.4,6,-12.4,-5.5).s().p("ALuA3I3bAAIAAhtIXbAAIAABt").cp();
	this.shape_192.setTransform(76,6.5);

	// fill
	this.shape_193 = new cjs.Shape();
	this.shape_193.graphics.lf(["rgba(238,238,238,0.651)","rgba(255,255,255,0.741)"],[0,1],-12.4,11.6,-12.4,-11).s().p("ALuBkI3bAAIAAjHIXbAAIAADH").cp();
	this.shape_193.setTransform(76,11);

	this.shape_194 = new cjs.Shape();
	this.shape_194.graphics.lf(["#0075BF","#009DFF"],[0,0.992],-67.4,9.9,-67.4,-2.9).s().p("AL4htIAADbI3vAAIAAjbIXvAAALuBkIAAjHI3bAAIAADHIXbAA").cp();
	this.shape_194.setTransform(76,11);

	// border
	this.shape_195 = new cjs.Shape();
	this.shape_195.graphics.f("#DAF1FF").s().p("AL4BuI3vAAIAAjaIXvAAIAADa").cp();
	this.shape_195.setTransform(76,11);

	this.addChild(this.shape_195,this.shape_194,this.shape_193,this.shape_192);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,152,22.1);


(lib.CellRenderer_selectedDownSkin = function() {
	this.initialize();

	// border
	this.shape_196 = new cjs.Shape();
	this.shape_196.graphics.lf(["#0075BF","#009DFF"],[0,0.992],-67.4,9.9,-67.4,-2.9).s().p("AL4htI3vAAIAADbIXvAAIAAjbALuBkI3bAAIAAjHIXbAAIAADH").cp();
	this.shape_196.setTransform(76,11);

	// fill
	this.shape_197 = new cjs.Shape();
	this.shape_197.graphics.f("#9AD8FF").s().p("AL4BuI3vAAIAAjaIXvAAIAADa").cp();
	this.shape_197.setTransform(76,11);

	this.addChild(this.shape_197,this.shape_196);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,152,22.1);


(lib.CellRenderer_selectedDisabledSkin = function() {
	this.initialize();

	// highlight
	this.shape_198 = new cjs.Shape();
	this.shape_198.graphics.lf(["rgba(238,238,238,0)","rgba(255,255,255,0.2)"],[0,1],-12.4,6,-12.4,-5.5).s().p("ALuA3I3bAAIAAhtIXbAAIAABt").cp();
	this.shape_198.setTransform(76,6.5);

	// fill
	this.shape_199 = new cjs.Shape();
	this.shape_199.graphics.lf(["rgba(204,204,204,0.2)","rgba(255,255,255,0.298)"],[0,1],-12.4,11.6,-12.4,-11).s().p("ALuBkI3bAAIAAjHIXbAAIAADH").cp();
	this.shape_199.setTransform(76,11);

	this.shape_200 = new cjs.Shape();
	this.shape_200.graphics.lf(["rgba(91,93,94,0.298)","rgba(183,186,188,0.298)"],[0,1],-67.4,9.9,-67.4,-2.9).s().p("AL4htIAADbI3vAAIAAjbIXvAAALuBkIAAjHI3bAAIAADHIXbAA").cp();
	this.shape_200.setTransform(76,11);

	this.addChild(this.shape_200,this.shape_199,this.shape_198);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,152,22);


(lib.CellRenderer_overSkin = function() {
	this.initialize();

	// border
	this.shape_201 = new cjs.Shape();
	this.shape_201.graphics.lf(["#0075BF","#009DFF"],[0,0.992],67.5,-9.8,67.5,3).s().p("AL4htI3vAAIAADbIXvAAIAAjbALuBkI3bAAIAAjHIXbAAIAADH").cp();
	this.shape_201.setTransform(76,11);

	// fill
	this.shape_202 = new cjs.Shape();
	this.shape_202.graphics.f("#DAF1FF").s().p("AL4BuI3vAAIAAjaIXvAAIAADa").cp();
	this.shape_202.setTransform(76,11);

	this.addChild(this.shape_202,this.shape_201);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,152,22.1);


(lib.CellRenderer_downSkin = function() {
	this.initialize();

	// border
	this.shape_203 = new cjs.Shape();
	this.shape_203.graphics.lf(["#0075BF","#009DFF"],[0,0.992],67.5,-9.8,67.5,3).s().p("ALuBkI3bAAIAAjHIXbAAIAADHAL4htI3vAAIAADbIXvAAIAAjb").cp();
	this.shape_203.setTransform(76,11);

	// fill
	this.shape_204 = new cjs.Shape();
	this.shape_204.graphics.f("#9AD8FF").s().p("AL4BuI3vAAIAAjaIXvAAIAADa").cp();
	this.shape_204.setTransform(76,11);

	this.addChild(this.shape_204,this.shape_203);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,152,22.1);


(lib.CellRenderer_disabledSkin = function() {
	this.initialize();

	// border
	this.shape_205 = new cjs.Shape();
	this.shape_205.graphics.lf(["rgba(91,93,94,0.298)","rgba(183,186,188,0.298)"],[0,1],67.5,-9.8,67.5,3).s().p("ALuBkI3bAAIAAjHIXbAAIAADHAL4htI3vAAIAADbIXvAAIAAjb").cp();
	this.shape_205.setTransform(76,11);

	// fill
	this.shape_206 = new cjs.Shape();
	this.shape_206.graphics.f("rgba(255,255,255,0.298)").s().p("AL4BuI3vAAIAAjaIXvAAIAADa").cp();
	this.shape_206.setTransform(76,11);

	this.addChild(this.shape_206,this.shape_205);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,152,22.1);


(lib.Button_upSkin = function() {
	this.initialize();

	// highlight
	this.shape_207 = new cjs.Shape();
	this.shape_207.graphics.lf(["rgba(204,204,204,0)","rgba(255,255,255,0.298)"],[0,1],40.6,5.5,40.6,-4.9).s().p("ADIA3ImOAAIAAhPQgBgeAfABIFwAAIAABs").cp();
	this.shape_207.setTransform(21,6.5);

	this.shape_208 = new cjs.Shape();
	this.shape_208.graphics.lf(["rgba(204,204,204,0)","rgba(255,255,255,0.298)"],[0,1],19.5,1.6,19.5,-4.8).s().p("AjHA3IAAhsIFwAAQAegBAAAeIABBPImPAA").cp();
	this.shape_208.setTransform(61,6.5);

	// fill
	this.shape_209 = new cjs.Shape();
	this.shape_209.graphics.lf(["rgba(204,204,204,0.4)","rgba(255,255,255,0.6)"],[0,1],-9.8,11,-9.8,-10.9).s().p("ADIBkIlyAAQgdgBAAgdIAAiLQAAgdAdgBIFyAAIAADH").cp();
	this.shape_209.setTransform(21,11);

	this.shape_210 = new cjs.Shape();
	this.shape_210.graphics.lf(["rgba(204,204,204,0.4)","rgba(255,255,255,0.6)"],[0,1],10,11,10,-10.9).s().p("AjGBkIAAjHIFxAAQAcABAAAdIAACLQAAAdgcABIlxAA").cp();
	this.shape_210.setTransform(61,11);

	// border
	this.shape_211 = new cjs.Shape();
	this.shape_211.graphics.lf(["#585F63","#B7BABC"],[0,1],-9.3,11,-9.3,-10.9).s().p("ADNhtIAAAKIlyAAQgdABAAAdIAACLQAAAdAdABIFyAAIAAAKIlwAAQgpAAAAgoIAAiLQAAgoApAAIFwAA").cp();
	this.shape_211.setTransform(20.5,11);

	this.shape_212 = new cjs.Shape();
	this.shape_212.graphics.lf(["#585F63","#B7BABC"],[0,1],9.5,11,9.5,-10.9).s().p("AjMhjIAAgKIFxAAQAoAAAAAoIAACLQAAAogoAAIlxAAIAAgKIFyAAQAdgBAAgdIAAiLQAAgdgdgBIlyAA").cp();
	this.shape_212.setTransform(61.5,11);

	this.addChild(this.shape_212,this.shape_211,this.shape_210,this.shape_209,this.shape_208,this.shape_207);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,82,22);


(lib.Button_selectedUpSkin = function() {
	this.initialize();

	// fill
	this.shape_213 = new cjs.Shape();
	this.shape_213.graphics.lf(["rgba(204,204,204,0.4)","rgba(204,204,204,0.6)"],[0,1],19,11,19,-10.9).s().p("AhshjIC8AAQAdABAAAdIAACLQAAAdgdABIi8AAIAAjH").cp();
	this.shape_213.setTransform(52,11);

	this.shape_214 = new cjs.Shape();
	this.shape_214.graphics.lf(["rgba(204,204,204,0.4)","rgba(204,204,204,0.6)"],[0,1],-9.8,11,-9.8,-10.9).s().p("ADIBkIlyAAQgdgBAAgdIAAiLQAAgdAdgBIFyAAIAADH").cp();
	this.shape_214.setTransform(21,11);

	// border
	this.shape_215 = new cjs.Shape();
	this.shape_215.graphics.lf(["#585F63","#B7BABC"],[0,1],-9.3,11,-9.3,-10.9).s().p("ADMBuIlvAAQgoAAAAgoIAAiLQAAgoAoAAIFvAAIAAAKIlxAAQgcABAAAdIAACLQAAAdAcABIFxAAIAAAK").cp();
	this.shape_215.setTransform(20.5,11);

	this.shape_216 = new cjs.Shape();
	this.shape_216.graphics.lf(["#585F63","#B7BABC"],[0,1],18.5,11,18.5,-10.9).s().p("AhyBuIAAgKIC+AAQAdgBAAgdIAAiLQAAgdgdgBIi+AAIAAgKIC9AAQAoAAAAAoIAACLQAAAogoAAIi9AA").cp();
	this.shape_216.setTransform(52.5,11);

	this.addChild(this.shape_216,this.shape_215,this.shape_214,this.shape_213);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0.1,0,64,22);


(lib.Button_selectedOverSkin = function() {
	this.initialize();

	// fill
	this.shape_217 = new cjs.Shape();
	this.shape_217.graphics.lf(["rgba(204,204,204,0.4)","rgba(204,204,204,0.6)"],[0,1],-9.8,11,-9.8,-10.9).s().p("ADIBkIlyAAQgdgBAAgdIAAiLQAAgdAdgBIFyAAIAADH").cp();
	this.shape_217.setTransform(21,11);

	this.shape_218 = new cjs.Shape();
	this.shape_218.graphics.lf(["rgba(204,204,204,0.4)","rgba(204,204,204,0.6)"],[0,1],19,11,19,-10.9).s().p("AhsBkIAAjHIC8AAQAdABAAAdIAACLQAAAdgdABIi8AA").cp();
	this.shape_218.setTransform(52,11);

	// border
	this.shape_219 = new cjs.Shape();
	this.shape_219.graphics.lf(["#0075BF","#009DFF"],[0,1],-9.3,11,-9.3,-10.9).s().p("ADMBuIlvAAQgoAAAAgoIAAiLQAAgoAoAAIFvAAIAAAKIlxAAQgcABAAAdIAACLQAAAdAcABIFxAAIAAAK").cp();
	this.shape_219.setTransform(20.5,11);

	this.shape_220 = new cjs.Shape();
	this.shape_220.graphics.lf(["#0075BF","#009DFF"],[0,1],18.5,11,18.5,-10.9).s().p("AhyBuIAAgKIC+AAQAdgBAAgdIAAiLQAAgdgdgBIi+AAIAAgKIC9AAQAoAAAAAoIAACLQAAAogoAAIi9AA").cp();
	this.shape_220.setTransform(52.5,11);

	this.addChild(this.shape_220,this.shape_219,this.shape_218,this.shape_217);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0.1,0,64,22);


(lib.Button_selectedDownSkin = function() {
	this.initialize();

	// fill
	this.shape_221 = new cjs.Shape();
	this.shape_221.graphics.lf(["#94D2FC","#ADE4FC","#BEEAFC"],[0,1,1],10,-10.9,10,11).s().p("ADIBkIlyAAQgdgBAAgdIAAiLQAAgdAdgBIFyAAIAADH").cp();
	this.shape_221.setTransform(21,11);

	this.shape_222 = new cjs.Shape();
	this.shape_222.graphics.lf(["#94D2FC","#ADE4FC","#BEEAFC"],[0,1,1],-18.8,-10.9,-18.8,11).s().p("AhshjIC8AAQAdABAAAdIAACLQAAAdgdABIi8AAIAAjH").cp();
	this.shape_222.setTransform(52,11);

	// border
	this.shape_223 = new cjs.Shape();
	this.shape_223.graphics.lf(["#0075BF","#009DFF"],[0,1],-9.3,11,-9.3,-10.9).s().p("ADMBuIlvAAQgoAAAAgoIAAiLQAAgoAoAAIFvAAIAAAKIlxAAQgcABAAAdIAACLQAAAdAcABIFxAAIAAAK").cp();
	this.shape_223.setTransform(20.5,11);

	this.shape_224 = new cjs.Shape();
	this.shape_224.graphics.lf(["#0075BF","#009DFF"],[0,1],18.5,11,18.5,-10.9).s().p("AhyBuIAAgKIC+AAQAdgBAAgdIAAiLQAAgdgdgBIi+AAIAAgKIC9AAQAoAAAAAoIAACLQAAAogoAAIi9AA").cp();
	this.shape_224.setTransform(52.5,11);

	this.addChild(this.shape_224,this.shape_223,this.shape_222,this.shape_221);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0.1,0,64,22);


(lib.Button_selectedDisabledSkin = function() {
	this.initialize();

	// fill
	this.shape_225 = new cjs.Shape();
	this.shape_225.graphics.lf(["rgba(204,204,204,0.2)","rgba(204,204,204,0.298)"],[0,1],-9.8,11,-9.8,-10.9).s().p("ADIBkIlyAAQgdgBAAgdIAAiLQAAgdAdgBIFyAAIAADH").cp();
	this.shape_225.setTransform(21,11);

	this.shape_226 = new cjs.Shape();
	this.shape_226.graphics.lf(["rgba(204,204,204,0.2)","rgba(204,204,204,0.298)"],[0,1],19,11,19,-10.9).s().p("AhsBkIAAjHIC8AAQAdABAAAdIAACLQAAAdgdABIi8AA").cp();
	this.shape_226.setTransform(52,11);

	// border
	this.shape_227 = new cjs.Shape();
	this.shape_227.graphics.lf(["rgba(88,95,99,0.298)","rgba(183,186,188,0.2)"],[0,1],-9.3,11,-9.3,-10.9).s().p("ADMBuIlvAAQgoAAAAgoIAAiLQAAgoAoAAIFvAAIAAAKIlxAAQgcABAAAdIAACLQAAAdAcABIFxAAIAAAK").cp();
	this.shape_227.setTransform(20.5,11);

	this.shape_228 = new cjs.Shape();
	this.shape_228.graphics.lf(["rgba(88,95,99,0.298)","rgba(183,186,188,0.2)"],[0,1],18.5,11,18.5,-10.9).s().p("AhyBuIAAgKIC+AAQAdgBAAgdIAAiLQAAgdgdgBIi+AAIAAgKIC9AAQAoAAAAAoIAACLQAAAogoAAIi9AA").cp();
	this.shape_228.setTransform(52.5,11);

	this.addChild(this.shape_228,this.shape_227,this.shape_226,this.shape_225);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0.1,0,64,22);


(lib.Button_overSkin = function() {
	this.initialize();

	// highlight
	this.shape_229 = new cjs.Shape();
	this.shape_229.graphics.lf(["rgba(204,204,204,0)","rgba(255,255,255,0.298)"],[0,1],40.6,5.5,40.6,-4.9).s().p("ADIA3ImPAAIAAhPQAAgeAeAAIFxAAIAABt").cp();
	this.shape_229.setTransform(21,6.5);

	this.shape_230 = new cjs.Shape();
	this.shape_230.graphics.lf(["rgba(204,204,204,0)","rgba(255,255,255,0.298)"],[0,1],19.5,1.5,19.5,-4.9).s().p("AjHA3IAAhtIFxAAQAdAAABAeIAABPImPAA").cp();
	this.shape_230.setTransform(61,6.5);

	// fill
	this.shape_231 = new cjs.Shape();
	this.shape_231.graphics.lf(["rgba(204,204,204,0.4)","rgba(255,255,255,0.6)"],[0,1],30,11,30,-10.9).s().p("AGQBGQAAAdgdABIrlAAQgdgBABgdIAAiLQgBgdAdgBILlAAQAdABAAAdIAACL").cp();
	this.shape_231.setTransform(41,11);

	// border
	this.shape_232 = new cjs.Shape();
	this.shape_232.graphics.lf(["#0075BF","#009DFF"],[0,0.992],-9.3,11,-9.3,-10.9).s().p("ADNBkIAAAKIlwAAQgpAAAAgoIAAiLQAAgoApAAIFwAAIAAAKIlyAAQgdABAAAdIAACLQAAAdAdABIFyAA").cp();
	this.shape_232.setTransform(20.5,11);

	this.shape_233 = new cjs.Shape();
	this.shape_233.graphics.lf(["#0075BF","#009DFF"],[0,0.992],9.5,11,9.5,-10.9).s().p("AjMBuIAAgKIFyAAQAdgBAAgdIAAiLQAAgdgdgBIlyAAIAAgKIFxAAQAoAAAAAoIAACLQAAAogoAAIlxAA").cp();
	this.shape_233.setTransform(61.5,11);

	this.addChild(this.shape_233,this.shape_232,this.shape_231,this.shape_230,this.shape_229);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,82,22);


(lib.Button_emphasizedSkin = function() {
	this.initialize();

	// fill
	this.shape_234 = new cjs.Shape();
	this.shape_234.graphics.f("rgba(255,255,255,0)").s().rr(-40.05,-10,80.1,20,3);
	this.shape_234.setTransform(41,11);

	// border
	this.shape_235 = new cjs.Shape();
	this.shape_235.graphics.lf(["#2C92F5","#3D00CC"],[0,1],0,-10.7,0,10.8).s().p("AGahFQAAgogoAAIrjAAQgoAAAAAoIAACLQAAAoAoAAILjAAQAoAAAAgoIAAiLAGQBGQAAAdgdABIrlAAQgdgBAAgdIAAiLQAAgdAdgBILlAAQAdABAAAdIAACL").cp();
	this.shape_235.setTransform(41,11);

	this.addChild(this.shape_235,this.shape_234);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0.1,0,82,22);


(lib.Button_downSkin = function() {
	this.initialize();

	// highlight
	this.shape_236 = new cjs.Shape();
	this.shape_236.graphics.lf(["rgba(204,204,204,0)","rgba(255,255,255,0.298)"],[0,1],40.6,5.5,40.6,-4.9).s().p("ADIA3ImPAAIAAhPQAAgeAeAAIFxAAIAABt").cp();
	this.shape_236.setTransform(21,6.5);

	this.shape_237 = new cjs.Shape();
	this.shape_237.graphics.lf(["rgba(204,204,204,0)","rgba(255,255,255,0.298)"],[0,1],19.5,1.5,19.5,-4.9).s().p("AjHA3IAAhtIFxAAQAdAAABAeIAABPImPAA").cp();
	this.shape_237.setTransform(61,6.5);

	// fill
	this.shape_238 = new cjs.Shape();
	this.shape_238.graphics.lf(["#99D7FE","#D9F0FE"],[0,1],-9.8,11,-9.8,-10.9).s().p("ADIhjIAADHIlyAAQgdgBABgdIAAiLQgBgdAdgBIFyAA").cp();
	this.shape_238.setTransform(21,11);

	this.shape_239 = new cjs.Shape();
	this.shape_239.graphics.lf(["#99D7FE","#D9F0FE"],[0,1],10,11,10,-10.9).s().p("AjHBkIAAjHIFyAAQAdABAAAdIAACLQAAAdgdABIlyAA").cp();
	this.shape_239.setTransform(61.1,11);

	// border
	this.shape_240 = new cjs.Shape();
	this.shape_240.graphics.lf(["#0075BF","#009DFF"],[0,0.992],-9.3,11,-9.3,-10.9).s().p("ADNBkIAAAKIlwAAQgpAAAAgoIAAiLQAAgoApAAIFwAAIAAAKIlyAAQgdABAAAdIAACLQAAAdAdABIFyAA").cp();
	this.shape_240.setTransform(20.5,11);

	this.shape_241 = new cjs.Shape();
	this.shape_241.graphics.lf(["#0075BF","#009DFF"],[0,0.992],9.5,11,9.5,-10.9).s().p("AjMBuIAAgKIFyAAQAdgBAAgdIAAiLQAAgdgdgBIlyAAIAAgKIFxAAQAoAAAAAoIAACLQAAAogoAAIlxAA").cp();
	this.shape_241.setTransform(61.5,11);

	this.addChild(this.shape_241,this.shape_240,this.shape_239,this.shape_238,this.shape_237,this.shape_236);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,82,22);


(lib.Button_disabledSkin = function() {
	this.initialize();

	// highlight
	this.shape_242 = new cjs.Shape();
	this.shape_242.graphics.lf(["rgba(204,204,204,0)","rgba(255,255,255,0.141)"],[0,1],39.5,1.6,39.5,-4.8).s().p("AGQA3IseAAIgBhPQAAgeAeABILiAAQAegBAAAeIABBP").cp();
	this.shape_242.setTransform(41,6.5);

	// fill
	this.shape_243 = new cjs.Shape();
	this.shape_243.graphics.lf(["rgba(204,204,204,0.2)","rgba(255,255,255,0.298)"],[0,1],30,11,30,-10.9).s().p("AGQBGQAAAdgdABIrlAAQgdgBABgdIAAiLQgBgdAdgBILlAAQAdABAAAdIAACL").cp();
	this.shape_243.setTransform(41,11);

	// border
	this.shape_244 = new cjs.Shape();
	this.shape_244.graphics.lf(["rgba(88,95,99,0.298)","rgba(183,186,188,0.298)"],[0,1],-9.3,11,-9.3,-10.9).s().p("ADMhtIAAAKIlxAAQgcABAAAdIAACLQAAAdAcABIFxAAIAAAKIlvAAQgoAAAAgoIAAiLQAAgoAoAAIFvAA").cp();
	this.shape_244.setTransform(20.5,11);

	this.shape_245 = new cjs.Shape();
	this.shape_245.graphics.lf(["rgba(88,95,99,0.298)","rgba(183,186,188,0.298)"],[0,1],9.5,11,9.5,-10.9).s().p("AjMhjIAAgKIFxAAQAoAAAAAoIAACLQAAAogoAAIlxAAIAAgKIFyAAQAdgBAAgdIAAiLQAAgdgdgBIlyAA").cp();
	this.shape_245.setTransform(61.5,11);

	this.addChild(this.shape_245,this.shape_244,this.shape_243,this.shape_242);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0.1,0,82,22);


(lib.Component_avatar = function() {
	this.initialize();

	// Avatar
	this.shape_246 = new cjs.Shape();
	this.shape_246.graphics.f("#FFFFFF").s("#000000").ss(0.1,1,1).p("AGQBuIsfAAIAAjbIMfAAIAADb").cp();
	this.shape_246.setTransform(40,11);

	this.addChild(this.shape_246);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,80,22);


(lib.tabHitArea = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,false,{},true);

	// Layer 1
	this.shape_247 = new cjs.Shape();
	this.shape_247.graphics.f("#CCCCCC").s().p("AG9gOQAAg+gpgsQgpgsg6AAIpiAAQg5AAgpAsQgpAsAAA+IAACzIN5AAIAAiz").cp();
	this.shape_247.setTransform(44.5,16.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_247}]},3).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,0,0);


(lib.Symbol11 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,false,{},true);

	// Layer 2
	this.text_4 = new cjs.Text("Submit", "0px Arial", "#333333");
	this.text_4.lineHeight = 14;
	this.text_4.setTransform(-20.7,-9.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.text_4}]}).wait(4));

	// Layer 1
	this.shape_248 = new cjs.Shape();
	this.shape_248.graphics.rf(["#FFFFFF","#CCCCCC"],[0,1],0,0,0,0,0,50.8).s("#999999").ss(1.1,1,1).rr(-50.2,-12.45,100.4,24.9,7);
	this.shape_248.setTransform(0,-0.5,0.652,0.939);

	this.shape_249 = new cjs.Shape();
	this.shape_249.graphics.rf(["#FFFFFF","#B3F0FF"],[0,1],0,0,0,0,0,50.8).s("#999999").ss(1.1,1,1).rr(-50.2,-12.45,100.4,24.9,7);
	this.shape_249.setTransform(0,0,0.652,0.939);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_248}]}).to({state:[{t:this.shape_249}]},1).to({state:[{t:this.shape_248}]},1).to({state:[{t:this.shape_248}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-32.6,-12.3,65.4,23.4);


(lib.lockAnswer = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{},true);

	// Layer 2
	this.text = new cjs.Text(ID_LockAnswer, "bold 13px Tahoma");
	this.text.textAlign = "center";
	this.text.lineHeight = 20;
	this.text.setTransform(67.4,7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.text,p:{color:"#000000"}}]}).to({state:[{t:this.text,p:{color:"#003366"}}]},1).wait(3));

	// Layer 3
	this.shape_111 = new cjs.Shape();
	this.shape_111.graphics.lf(["#FFFFFF","#999999","#666666"],[0.051,0.616,1],9,-4.5,9,16.1).s("#D6D6D6").ss(1,1,1).p("AJ2ixIzuAAQgqABAAAsIAAEJQAAAsAqABITuAAQAtAAAAgtIAAkJQAAgtgtAAIAAAA").cp();
	this.shape_111.setTransform(67.6,17.9);

	this.shape_112 = new cjs.Shape();
	this.shape_112.graphics.lf(["#E0F3FF","#0099FF"],[0,1],9,-4.5,9,16.1).s("#D6D6D6").ss(1,1,1).p("AJ2ixIzuAAQgqABAAAsIAAEJQAAAsAqABITuAAQAtAAAAgtIAAkJQAAgtgtAAIAAAA").cp();
	this.shape_112.setTransform(67.6,17.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_111}]}).to({state:[{t:this.shape_112}]},1).wait(3));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(40,11.1,104,19.8);


(lib.Wfback = function() {
	this.initialize();

	// Layer 1
	this.text_6 = new cjs.Text("Click anywhere to continue...", "bold 17px Verdana", "#016767");
	this.text_6.textAlign = "center";
	this.text_6.lineHeight = 19;
	this.text_6.lineWidth = 349;
	this.text_6.setTransform(-2.4,46.9);

	// Layer 2
	this.wrongfb = new cjs.Text("Time UP!", "bold 25px Arial", "#006666");
	this.wrongfb.textAlign = "center";
	this.wrongfb.lineHeight = 27;
	this.wrongfb.lineWidth = 350;
	this.wrongfb.setTransform(-1.9,-65);

	// Layer 3
	this.shape_253 = new cjs.Shape();
	this.shape_253.graphics.f().s("#999999").ss(1.2,1,1).p("AdDHCIAAu/QAAhfhDhEQhDhDhgAAMgy5AAAQhgAAhDBDQhDBEAABfIAAO/IAAA8QAABfBDBDQBDBEBgAAMAy5AAAQBgAABDhEQBDhDAAhfIAAg8").cp();
	this.shape_253.setTransform(0.5,0);

	this.shape_254 = new cjs.Shape();
	this.shape_254.graphics.f("#E1E1E1").s().p("AdDiPIAAA7QAABehDBDQhDBDhgAAMgy5AAAQhgAAhDhDQhDhDAAheIAAg7MA6FAAA").cp();
	this.shape_254.setTransform(0.5,59.5);

	this.shape_255 = new cjs.Shape();
	this.shape_255.graphics.lf(["#FFFFFF","#F0F3F8"],[0,1],0,111.5,0,-42.4).s().p("AdDJTMg6FAAAIAAu/QAAhfBDhEQBDhDBgAAMAy5AAAQBgAABDBDQBDBEAABfIAAO/").cp();
	this.shape_255.setTransform(0.5,-14.4);

	// Layer 4
	this.shape_256 = new cjs.Shape();
	this.shape_256.graphics.f("rgba(204,204,204,0.498)").s("#999999").ss(1.2,1,1).p("EAtDggPMhaFAAAQhVAAg9A8Qg8A9AABVMAAAA6DQAABVA8A9QA9A8BVAAMBaFAAAQBVAAA9g8QA8g9AAhVMAAAg6DQAAhVg8g9Qg9g8hVAAIAAAA").cp();

	this.addChild(this.shape_256,this.shape_255,this.shape_254,this.shape_253,this.wrongfb,this.text_6);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-308.9,-206.4,618,413);


(lib.Topic = function() {
	this.initialize();

	// topicnames
	this.topicname = new cjs.Text("Topic A", "bold 0px Arial", "#FFFFFF");
	this.topicname.textAlign = "center";
	this.topicname.lineHeight = 18;
	this.topicname.lineWidth = 86;
	this.topicname.setTransform(-1.9,-10.1);

	// topic cells
	this.base = new lib.Symbol4();
	this.base.shadow = new cjs.Shadow("rgba(0,51,51,0.439)",4,4,2);

	this.addChild(this.base,this.topicname);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-101.4,-15.6,203,31.4);


(lib.timeInstAnimate = function() {
	this.initialize();

	// Layer 1
	this.text_7 = new cjs.Text("Time should be set with a minimum value of 1 second.", "13px Arial", "#333333");
	this.text_7.lineHeight = 15;
	this.text_7.lineWidth = 122;
	this.text_7.setTransform(9.3,7.3);

	this.timeinst = new lib.timeInstBase();
	this.timeinst.setTransform(74.5,51.1,1.2,1.2,0,0,0,62.1,42.6);
	this.timeinst.shadow = new cjs.Shadow("rgba(153,153,153,1)",4,4,5);

	this.addChild(this.timeinst,this.text_7);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,156.2,69.7);


(lib.timeInst = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,false,{},true);

	// Layer 1
	/* Layers with classic tweens must contain only a single symbol instance. */

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(123.8,36.1,6.4,12.8);


(lib.TabButton = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,false,{},true);

	// Layer 7
	this.btn = new lib.tabHitArea();

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.btn}]}).wait(2));

	// Layer 3
	this.Topic = new cjs.Text("Topic", "bold 0px Verdana", "#333333");
	this.Topic.textAlign = "center";
	this.Topic.lineHeight = 14;
	this.Topic.lineWidth = 73;
	this.Topic.setTransform(41.5,8.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.Topic}]}).wait(2));

	// Layer 1
	this.shape_257 = new cjs.Shape();
	this.shape_257.graphics.f("#CCCCCC").s().p("AG9gOQAAg+gpgsQgpgsg6AAIpiAAQg5AAgpAsQgpAsAAA+IAACzIN5AAIAAiz").cp();
	this.shape_257.setTransform(44.5,16.5);

	this.shape_258 = new cjs.Shape();
	this.shape_258.graphics.f("#D2E8FC").s().p("AG9gOQAAg+gpgsQgOgOgPgKQgegUgoAAIpiAAQgnAAgeAUQgPAKgOAOQgpAsAAA+IAACzIN5AAIAAiz").cp();
	this.shape_258.setTransform(44.5,16.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_257}]}).to({state:[{t:this.shape_258}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,89,33);


(lib.Symbol7 = function() {
	this.initialize();

	// Layer 3
	this.instance = new lib.Symbol12();
	this.instance.setTransform(273.1,171.1);
	this.instance.shadow = new cjs.Shadow("#999999",1,1,6);

	// Layer 2
	this.instance_1 = new lib.Symbol12();
	this.instance_1.setTransform(-273.5,171.1);
	this.instance_1.shadow = new cjs.Shadow("#999999",1,1,6);

	this.shape_259 = new cjs.Shape();
	this.shape_259.graphics.f("#E9E9E9").s("#CFCFCF").ss(1.1,1,1).p("AExAAQAAB+hZBZQhaBah+AAQh9AAhZhaQhahZAAh+QAAh9BahaQBZhZB9AAQB+AABaBZQBZBaAAB9IAAAA").cp();
	this.shape_259.setTransform(273.2,171.1);

	// Layer 1
	this.shape_260 = new cjs.Shape();
	this.shape_260.graphics.f().s("#333333").ss(1.2,1,1).p("EAwRAaoMAAAg3pQAAhVg8g9Qg9g8hVAAMhaFAAAQhVAAg9A8Qg8A9AABVMAAAA3pIAACaQAABVA8A9QA9A8BVAAMBaFAAAQBVAAA9g8QA8g9AAhVIAAia").cp();

	this.shape_261 = new cjs.Shape();
	this.shape_261.graphics.f("#E9E9E9").s().p("EAwRgCzIAACaQAABUg8A8Qg9A9hVAAMhaFAAAQhVAAg9g9Qg8g8AAhUIAAiaMBghAAA").cp();
	this.shape_261.setTransform(0,188.5);

	this.shape_262 = new cjs.Shape();
	this.shape_262.graphics.lf(["#FFFFFF","#E1E1E1"],[0,1],0,226.5,0,-179.3).s().p("EAwRAdcMhghAAAMAAAg3pQAAhVA8g9QA9g8BVAAMBaFAAAQBVAAA9A8QA8A9AABVMAAAA3p").cp();
	this.shape_262.setTransform(0,-17.9);

	this.addChild(this.shape_262,this.shape_261,this.shape_260,this.shape_259,this.instance_1,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-308.9,-206.4,618,413);


(lib.swap_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,false,{},true);

	// Layer 2
	this.instance_2 = new lib.Symbol3Swapnew();
	this.instance_2.setTransform(26.5,16.3,0.64,0.64);
	this.instance_2.shadow = new cjs.Shadow("#FFFFFF",0,0,3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2}]}).wait(2));

	// Layer 1
	this.instance_3 = new lib.Symbol1dsada();
	this.instance_3.setTransform(26.5,16.5,0.236,0.055);
	this.instance_3.alpha = 0.34;
	this.instance_3.shadow = new cjs.Shadow("#000000",0,0,2);

	this.instance_4 = new lib.Symbol1copy();
	this.instance_4.setTransform(26.5,16.5,0.236,0.055);
	this.instance_4.alpha = 0.34;
	this.instance_4.shadow = new cjs.Shadow("#000000",0,0,2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_3}]}).to({state:[{t:this.instance_4}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,53,32.9);


(lib.Rfback = function() {
	this.initialize();

	// Layer 1
	this.text_8 = new cjs.Text("Click anywhere to continue...", "bold 17px Verdana", "#016767");
	this.text_8.textAlign = "center";
	this.text_8.lineHeight = 19;
	this.text_8.lineWidth = 342;
	this.text_8.setTransform(-3.9,46.9);

	// Layer 2
	this.rightfb = new cjs.Text("Time UP!", "bold 25px Arial", "#006666");
	this.rightfb.textAlign = "center";
	this.rightfb.lineHeight = 27;
	this.rightfb.lineWidth = 350;
	this.rightfb.setTransform(-1.9,-65);

	// Layer 3
	this.shape_263 = new cjs.Shape();
	this.shape_263.graphics.f().s("#999999").ss(1.2,1,1).p("AdDHCIAAu/QAAhfhDhEQhDhDhgAAMgy5AAAQhgAAhDBDQhDBEAABfIAAO/AdDHCIAAA8QAABfhDBDQhDBEhgAAMgy5AAAQhgAAhDhEQhDhDAAhfIAAg8");
	this.shape_263.setTransform(0.5,0);

	this.shape_264 = new cjs.Shape();
	this.shape_264.graphics.f("#E1E1E1").s().p("AdDiPIAAA7QAABehDBDQhDBDhgAAMgy5AAAQhgAAhDhDQhDhDAAheIAAg7MA6FAAA").cp();
	this.shape_264.setTransform(0.5,59.5);

	this.shape_265 = new cjs.Shape();
	this.shape_265.graphics.lf(["#FFFFFF","#F0F3F8"],[0,1],0,111.5,0,-42.4).s().p("AdDJTMg6FAAAIAAu/QAAhfBDhEQBDhDBgAAMAy5AAAQBgAABDBDQBDBEAABfIAAO/").cp();
	this.shape_265.setTransform(0.5,-14.4);

	// Layer 4
	this.shape_266 = new cjs.Shape();
	this.shape_266.graphics.f("rgba(204,204,204,0.498)").s("#999999").ss(1.2,1,1).p("EAtDggPMhaFAAAQhVAAg9A8Qg8A9AABVMAAAA6DQAABVA8A9QA9A8BVAAMBaFAAAQBVAAA9g8QA8g9AAhVMAAAg6DQAAhVg8g9Qg9g8hVAAIAAAA").cp();

	this.addChild(this.shape_266,this.shape_265,this.shape_264,this.shape_263,this.rightfb,this.text_8);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-308.9,-206.4,618,413);


(lib.QuestionBASE = function() {
	this.initialize();

	// Layer 2
	this.submit_mask = new lib.submitMask();
	this.submit_mask.setTransform(310.5,395.5,1,1,0,0,0,35.5,13.5);

	this.money_1 = new cjs.Text("100$", "bold 13px Verdana", "#336600");
	this.money_1.textAlign = "center";
	this.money_1.lineHeight = 15;
	this.money_1.lineWidth = 42;
	this.money_1.setTransform(35.4,364.2,0.948,1.239);

	this.showtime = new lib.Timerforquestion();
	this.showtime.setTransform(605.4,387.2,1,1,0,0,0,44.5,15.5);

	this.submit = new lib.Symbol11();
	this.submit.setTransform(310,395.8);

	// Layer 1
	this.instance_5 = new lib.Symbol13();
	this.instance_5.setTransform(582.3,377.3);

	this.instance_6 = new lib.Symbol10();
	this.instance_6.setTransform(35.4,377.5);
	this.instance_6.shadow = new cjs.Shadow("rgba(51,51,51,1)",1,1,5);

	this.InstanceName_0 = new lib.Symbol6();
	this.InstanceName_0.setTransform(309.5,60.5);
	this.InstanceName_0.shadow = new cjs.Shadow("rgba(187,187,187,1)",1,1,3);

	this.instance_7 = new lib.Symbol7();
	this.instance_7.setTransform(309,206.5);

	this.addChild(this.instance_7,this.InstanceName_0,this.instance_6,this.instance_5,this.submit,this.showtime,this.money_1,this.submit_mask);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,618,413);


(lib.quesBase = function() {
	this.initialize();

	// Layer 2
	this.instance_8 = new lib.border();
	this.instance_8.setTransform(0.1,0.1,1,1,0,0,0,281.8,125.8);

	// Layer 1
	this.cellColor_1 = new lib.qbaseCell();
	this.cellColor_1.setTransform(0.1,0.1,1,1,0,0,0,281.8,125.8);

	this.addChild(this.cellColor_1,this.instance_8);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-281.7,-125.7,563.6,251.6);

(lib.qbaseCell = function() {
	this.initialize();

	// Layer 1
	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f(questionbgcolor).s().p("EAo8gToMhR3AAAQjFAAAACPMAAAAizQAACPDFAAMBR3AAAQDFAAAAiPMAAAgizQAAiPjFAAIAAAA").cp();
	this.shape_61.setTransform(281.8,125.8);

	this.addChild(this.shape_61);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,563.6,251.6);

(lib.border = function() {
	this.initialize();

	// Layer 1
	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f().s("#666666").ss(0,1,1).p("EAo8gToMhR3AAAQjFAAAACPMAAAAizQAACPDFAAMBR3AAAQDFAAAAiPMAAAgizQAAiPjFAAIAAAA").cp();
	this.shape_56.setTransform(281.8,125.8);

	this.addChild(this.shape_56);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,563.6,251.6);


(lib.navpanelVSwap = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,false,{},true);

	// Layer 4
	this.gamecolormask = new lib.startnendcolorsmaskcopy();
	this.gamecolormask.setTransform(0.1,0.6,2.353,1.019,0,0,0,0,0.3);
	this.gamecolormask._off = true;

	this.timeline.addTween(cjs.Tween.get(this.gamecolormask).wait(1).to({_off:false},0).wait(1));

	// Layer 1
	this.text_9 = new cjs.Text("SWAP QUESTION", "0px Arial", "#FFFFFF");
	this.text_9.lineHeight = 14;
	this.text_9.setTransform(251,3.9);

	this.base_1 = new lib.swapBase();
	this.base_1.setTransform(303.5,12.6);

	this.text_10 = new cjs.Text("Nav Panel", "0px Arial", "#FFFFFF");
	this.text_10.lineHeight = 14;
	this.text_10.setTransform(16.6,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.text_10},{t:this.base_1},{t:this.text_9}]}).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,607,25.1);


(lib.navpanelV = function() {
	this.initialize();

	// Layer 1
	this.text_11 = new cjs.Text("Question=>", "0px Arial", "#525252");
	this.text_11.lineHeight = 14;
	this.text_11.lineWidth = 65;
	this.text_11.setTransform(7.5,5.3);

	this.base_2 = new lib.Symbol1();
	this.base_2.setTransform(303.5,12.6);

	this.text_12 = new cjs.Text("Nav Panel", "0px Arial", "#FFFFFF");
	this.text_12.lineHeight = 14;
	this.text_12.setTransform(16.6,0);

	this.addChild(this.text_12,this.base_2,this.text_11);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,607,25.1);


(lib.mainTitle_mccopy = function() {
	this.initialize();

	// Layer 1
	this.titleTxt = new lib.titleMc();
	this.titleTxt.setTransform(113,21.6,1,1,0,0,0,113,21.6);

	this.addChild(this.titleTxt);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,300,43.2);


(lib.hint_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,false,{},true);

	// Layer 3
	this.shape_267 = new cjs.Shape();
	this.shape_267.graphics.f().s("#660000").ss(1,1,1).p("AgDgHIgegeAAAAoIAAgtAAAgFIAigi");
	this.shape_267.setTransform(26.5,15.9);

	this.shape_268 = new cjs.Shape();
	this.shape_268.graphics.f("#CC6600").s("#333333").ss(1,1,1).rr(-8.7,-2,17.4,4,2);
	this.shape_268.setTransform(26.4,25.4,0.54,0.479);

	this.shape_269 = new cjs.Shape();
	this.shape_269.graphics.f("#CC6600").s("#333333").ss(1,1,1).rr(-8.7,-2,17.4,4,2);
	this.shape_269.setTransform(26.4,23.4,0.54,0.479);

	this.shape_270 = new cjs.Shape();
	this.shape_270.graphics.f("#CC6600").s("#333333").ss(1,1,1).rr(-8.7,-2,17.4,4,2);
	this.shape_270.setTransform(26.4,21.5,0.54,0.479);

	this.shape_271 = new cjs.Shape();
	this.shape_271.graphics.f().s("#660000").ss(2,1,1).p("AAnAAIgDAAIhKAAIAAAB");
	this.shape_271.setTransform(26.6,21.1);

	this.shape_272 = new cjs.Shape();
	this.shape_272.graphics.f().s("#333333").ss(2,1,1).p("AgpA3QgFgEgFgFQgWgWAAgdQAAgeAWgWQAWgWAdAAQAeAAAWAWQAWAWAAAeQAAAdgWAWQgGAFgFAEQAAAAgBAAAglBQIAAgXAAlA5IAAAX");
	this.shape_272.setTransform(26.5,12.9);

	this.shape_273 = new cjs.Shape();
	this.shape_273.graphics.f("rgba(255,255,255,0.757)").s().p("AglBQIAAgXIAAAXIgEAAIAAgZQgFgEgFgFQgWgWAAgdQAAgeAWgWQAWgWAdAAQAeAAAWAWQAWAWAAAeQAAAdgWAWQgGAFgFAEQAAAAgBAAIAAAZIgDAAIhKAAAAlA5IAAAXIAAgX").cp();
	this.shape_273.setTransform(26.5,12.9);

	this.shape_274 = new cjs.Shape();
	this.shape_274.graphics.f("#CC6600").s("#333333").ss(2,1,1).rr(-4.7,-1.85,9.4,3.7,1.1);
	this.shape_274.setTransform(26.5,26.8,0.707,0.707);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_274},{t:this.shape_273},{t:this.shape_272},{t:this.shape_271},{t:this.shape_270},{t:this.shape_269},{t:this.shape_268},{t:this.shape_267}]}).wait(2));

	// Layer 1
	this.instance_9 = new lib.Symbol1dsada();
	this.instance_9.setTransform(26.5,16.5,0.236,0.055);
	this.instance_9.alpha = 0.34;
	this.instance_9.shadow = new cjs.Shadow("rgba(0,0,0,1)",0,0,2);

	this.instance_10 = new lib.Symbol1copy();
	this.instance_10.setTransform(26.5,16.5,0.236,0.055);
	this.instance_10.alpha = 0.34;
	this.instance_10.shadow = new cjs.Shadow("rgba(0,0,0,1)",0,0,2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_9}]}).to({state:[{t:this.instance_10}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,53,32.9);


(lib.greencell = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,false,{},true);

	// Layer 3
	this.baseshade = new lib.baseshadecell();
	this.baseshade.setTransform(0,0,1.174,1.352);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.baseshade}]}).wait(3));

	// Layer 1
	this.cellcolor = new lib.colorcell();
	this.cellcolor.setTransform(-0.2,0.6,1,1,0,0,0,49.7,50.6);

	this.instance_11 = new lib.donecell();
	this.instance_11.setTransform(0,0,0.493,0.833);

	this.instance_12 = new lib.donecellwrong();
	this.instance_12.setTransform(0,0,0.493,0.833);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.cellcolor}]}).to({state:[{t:this.instance_11}]},1).to({state:[{t:this.instance_12}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-49.9,-49.9,100.1,100.1);


(lib.fifty_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,false,{},true);

	// Layer 1
	this.shape_275 = new cjs.Shape();
	this.shape_275.graphics.f().s("#333333").ss(3.3,1,1).p("AApgoIhRBR");
	this.shape_275.setTransform(27,15.6);

	this.shape_276 = new cjs.Shape();
	this.shape_276.graphics.f("#333333").s().p("AgPhMQAFAIAAAOQAAAIgCAGQAAAGgDAEQgEAGgFADQgFADgGAAQgIAAgGgEQgGgEgCgHQgCgEgBgGQAAgEAAgGQAAgHAAgGQABgGACgEQADgHAFgEQAFgDAJAAQAFAAADABQAFACACADQADADACAFIAAAAAgjhRQgHAAgCAHQgDAGAAAOQAAAJACAGQAAAGADACQACADAFAAQAEAAACgDQADgDABgFQABgGAAgKQAAgJgBgFQgBgGgDgDQgCgDgEAAIAAAAAAVAWQABgCAEAAIAaAAQAIAAAAAFQAAADgDACQgBABgEAAIgXAAIgDAQQAHgEAGAAQAEAAAFACQAEACADADQACADADAEQABAEAAAFQAAAHgDAGQgDAGgGADQgGADgHAAQgKAAgFgDQgFgDgDgEQgCgEAAgDQAAgCACgCQACgCACAAQAEAAACAFQACAEADADQADACAFAAQAEAAACgCQADgCABgDQACgDAAgFQAAgFgCgDQgBgDgDgCQgDgBgDAAQgFAAgBABQgCABgDACQgEADgCAAQgCAAgCgCQgCgCAAgCQAAAAAAgDIAFgXQAAgFADgBIAAAAABnAUQAEACAEADQACADADAFQAEAIAAAOQAAAIgCAGQgBAGgCAEQgDAGgFADQgGADgGAAQgIAAgFgEQgGgEgEgHQgBgEAAgFQgBgFAAgGQAAgHABgGQABgGABgEQADgHAGgEQAFgDAIAAQAFAAADABIAAAAABYBOQACADAFAAQAEAAADgDQACgDABgFQABgGAAgKQAAgJgBgFQgBgGgCgDQgDgDgEAAQgHAAgCAHQgDAGAAAOQAAAJACAGQABAGACACIAAAAAh1g6IAEgXQABgFACgBQACgCAEAAIAaAAQAHAAAAAFQAAADgBACQgDABgDAAIgXAAIgDAQQAHgEAFAAQAFAAAFACQAEABACAEQAEADABAEQACAEAAAFQAAAHgDAGQgDAGgGADQgGADgIAAQgJAAgFgDQgGgDgCgEQgCgEAAgDQAAgCACgCQABgCADAAQAEAAACAFQACAEADADQADACAEAAQAEAAADgCQACgCACgDQACgDAAgFQAAgFgCgDQgCgDgCgCQgDgBgDAAQgFAAgBABQgCABgDACQgEADgCAAQgCAAgCgCQgCgCAAgCQAAAAAAgDIAAAA").cp();
	this.shape_276.setTransform(26.5,16.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_276},{t:this.shape_275}]}).wait(2));

	// Layer 3
	this.instance_13 = new lib.Symbol1dsada();
	this.instance_13.setTransform(26.5,16.5,0.236,0.055);
	this.instance_13.alpha = 0.34;
	this.instance_13.shadow = new cjs.Shadow("rgba(0,0,0,1)",0,0,2);

	this.instance_14 = new lib.Symbol1copy();
	this.instance_14.setTransform(26.5,16.5,0.236,0.055);
	this.instance_14.alpha = 0.34;
	this.instance_14.shadow = new cjs.Shadow("rgba(0,0,0,1)",0,0,2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_13}]}).to({state:[{t:this.instance_14}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,53,32.9);


(lib.baseMc = function() {
	this.initialize();

	// Layer 1
	this.instance_15 = new lib.sidePanel();
	this.instance_15.setTransform(509.8,11.8,0.793,0.064,0,0,0,0,-276.2);
	this.instance_15.alpha = 0.34;
	this.instance_15.shadow = new cjs.Shadow("rgba(0,0,0,0.557)",-3,-1,2);

	this.shape_281 = new cjs.Shape();
	this.shape_281.graphics.lf(["rgba(255,255,255,0.612)","rgba(255,255,255,0)"],[0,1],0,26.2,0,-20.8).s().p("EgvggD+MBfAAAAIAAH9MhfAAAAIAAn9").cp();
	this.shape_281.setTransform(2.3,458.1,1,1,0,0,0,-302.8,26.1);

	this.shape_282 = new cjs.Shape();
	this.shape_282.graphics.f().s("rgba(51,51,51,0.51)").ss(2,1,1).p("EgvqAj0MAAAhHnMBfVAAAMAAABHnMhfVAAA").cp();
	this.shape_282.setTransform(-0.4,0.9,1,1,0,0,0,-305.7,-228.4);

	this.shape_283 = new cjs.Shape();
	this.shape_283.graphics.lf(["rgba(255,255,255,0.612)","rgba(255,255,255,0)"],[0,1],0.1,-26,0.1,21).s().p("EAvhAD/MhfBAAAIAAn9MBfBAAAIAAH9").cp();
	this.shape_283.setTransform(1.3,25.8,1,1,0,0,0,-303.9,-0.8);

	this.instance_16 = new lib.sidePanel();
	this.instance_16.setTransform(511.8,5.9,0.831,0.748,0,0,0,2.4,-299.9);
	this.instance_16.alpha = 0.34;
	this.instance_16.shadow = new cjs.Shadow("rgba(0,0,0,0.557)",-3,-1,2);

	this.addChild(this.instance_16,this.shape_283,this.shape_282,this.shape_281,this.instance_15);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,610.3,458.6);


(lib.flcontrolsTextInput = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,false,{},true);

	// assets
	this.instance_17 = new lib.focusRectSkin();
	this.instance_17.setTransform(126.5,124.4,1,1,0,0,0,41.1,11);

	this.instance_18 = new lib.TextInput_upSkin();
	this.instance_18.setTransform(91.5,29.2,1,1,0,0,0,76,11);

	this.instance_19 = new lib.TextInput_disabledSkin();
	this.instance_19.setTransform(91.5,76.7,1,1,0,0,0,76,11);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_19},{t:this.instance_18},{t:this.instance_17}]},1).wait(1));

	// avatar
	this.instance_20 = new lib.Component_avatar();
	this.instance_20.setTransform(50,11,1.25,1,0,0,0,40,11);

	this.timeline.addTween(cjs.Tween.get(this.instance_20).to({_off:true},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,100,22);


(lib.ScrollPane_upSkin = function() {
	this.initialize();


	// skin
	this.instance_21 = new lib.panelBackground_Base();
	this.instance_21.setTransform(136,95.5,1,1,0,0,0,136,95.5);

	this.instance_22 = new lib.panelBackground_Shadow();
	this.instance_22.setTransform(-2.9,-0.9);
	this.instance_22.shadow = new cjs.Shadow("rgba(0,0,0,0.6)",0,2,3);

	this.addChild(this.instance_22,this.instance_21);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,272,191);


(lib.ScrollPane_disabledSkin = function() {
	this.initialize();

	// panel base
	this.instance_23 = new lib.panelBackground_Base();
	this.instance_23.setTransform(136,95.5,1,1,0,0,0,136,95.5);

	// drop shadow
	this.instance_24 = new lib.panelBackground_Shadow();
	this.instance_24.setTransform(-2.9,-0.9);
	this.instance_24.alpha = 0.5;
	this.instance_24.shadow = new cjs.Shadow("rgba(0,0,0,0.6)",0,2,3);

	this.addChild(this.instance_24,this.instance_23);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,272,191);


(lib.ScrollArrowUp_icon = function() {
	this.initialize();

	// icon
	this.instance_25 = new lib.arrowIcon();
	this.instance_25.setTransform(3.5,2,1,1,180,0,0,3.5,2);

	this.addChild(this.instance_25);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,7,4);


(lib.ScrollArrowUp_downSkin = function() {
	this.initialize();

	// icon
	this.instance_26 = new lib.ScrollArrowUp_icon("single",0);
	this.instance_26.setTransform(4,4);

	// fill
	this.shape_284 = new cjs.Shape();
	this.shape_284.graphics.lf(["rgba(238,238,238,0)","rgba(255,255,255,0.298)"],[0,1],-1,3.5,-1,-3.1).s().p("AhAgfICBAAIAAA/IiBAAIAAg/").cp();
	this.shape_284.setTransform(7.6,4.3);

	this.shape_285 = new cjs.Shape();
	this.shape_285.graphics.lf(["#0075BF","#009DFF"],[0,0.992],1,5.9,1,-6.9).s().p("AhKhFIAACLICVAAIAAiLIiVAAAhAg7ICBAAIAAB3IiBAAIAAh3").cp();
	this.shape_285.setTransform(7.5,7);

	this.shape_286 = new cjs.Shape();
	this.shape_286.graphics.lf(["#99D7FE","#D9F0FE"],[0,1],-1.4,7,-1.4,-6.5).s().p("AhAg7ICBAAIAAB3IiBAAIAAh3").cp();
	this.shape_286.setTransform(7.5,7);

	this.addChild(this.shape_286,this.shape_285,this.shape_284,this.instance_26);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,15,14);


(lib.ScrollArrowDown_icon = function() {
	this.initialize();

	// icon
	this.instance_27 = new lib.arrowIcon("single",0);

	this.addChild(this.instance_27);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,7,4);


(lib.ScrollArrowDown_downSkin = function() {
	this.initialize();

	// icon
	this.instance_28 = new lib.ScrollArrowDown_icon("single",0);
	this.instance_28.setTransform(4,5);

	// fill
	this.shape_287 = new cjs.Shape();
	this.shape_287.graphics.lf(["rgba(238,238,238,0)","rgba(255,255,255,0.298)"],[0,1],-0.9,3.5,-0.9,-3.1).s().p("ABBgfIAAA/IiBAAIAAg/ICBAA").cp();
	this.shape_287.setTransform(7.5,4.3);

	this.shape_288 = new cjs.Shape();
	this.shape_288.graphics.lf(["#0075BF","#009DFF"],[0,0.992],1,5.9,1,-6.9).s().p("ABBA8IiBAAIAAh3ICBAAIAAB3ABLhFIiVAAIAACLICVAAIAAiL").cp();
	this.shape_288.setTransform(7.5,7);

	this.shape_289 = new cjs.Shape();
	this.shape_289.graphics.lf(["#99D7FE","#D9F0FE"],[0,1],-1.4,7,-1.4,-6.5).s().p("ABBA8IiBAAIAAh3ICBAAIAAB3").cp();
	this.shape_289.setTransform(7.5,7);

	this.addChild(this.shape_289,this.shape_288,this.shape_287,this.instance_28);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,15,14);


(lib.RadioButton_selectedUpIcon = function() {
	this.initialize();

	// icon
	this.instance_29 = new lib.RadioButton_selectedIcon();
	this.instance_29.setTransform(7,7,1,1,0,0,0,2,2);

	// highlight
	this.shape_290 = new cjs.Shape();
	this.shape_290.graphics.lf(["rgba(204,204,204,0)","rgba(255,255,255,0.298)"],[0,1],-1,3.1,-1,-2.9).s().p("AgpgLQARgSAYAAQAZAAARASQACABABACQAPAPAAAXIh3AAQAAgXAPgPQABgCACgBIAAAA").cp();
	this.shape_290.setTransform(7,4);

	// fill
	this.shape_291 = new cjs.Shape();
	this.shape_291.graphics.lf(["rgba(204,204,204,0.4)","rgba(255,255,255,0.6)"],[0,1],-0.9,5.3,-0.9,-6.6).s().p("AAqAqQgRASgZAAQgYAAgRgSQgSgRAAgZQAAgYASgRQARgSAYAAQAZAAARASQASARAAAYQAAAZgSARIAAAA").cp();
	this.shape_291.setTransform(7,7);

	this.shape_292 = new cjs.Shape();
	this.shape_292.graphics.lf(["#5B5D5E","#B7BABC"],[0,1],0.5,7,0.5,-7.5).s().p("AAqAqQASgRAAgZQAAgYgSgRQgRgSgZAAQgYAAgRASQgSARAAAYQAAAZASARQARASAYAAQAZAAARgSIAAAAAAxgwQAVAUAAAcQAAAdgVAUQgUAVgdAAQgcAAgUgVQgVgUAAgdQAAgcAVgUQAUgVAcAAQAdAAAUAVIAAAA").cp();
	this.shape_292.setTransform(7,7);

	this.addChild(this.shape_292,this.shape_291,this.shape_290,this.instance_29);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,14,14);


(lib.RadioButton_selectedOverIcon = function() {
	this.initialize();

	// icon
	this.instance_30 = new lib.RadioButton_selectedIcon();
	this.instance_30.setTransform(7,7,1,1,0,0,0,2,2);

	// highlight
	this.shape_293 = new cjs.Shape();
	this.shape_293.graphics.lf(["rgba(204,204,204,0)","rgba(255,255,255,0.298)"],[0,1],-1,3.1,-1,-2.9).s().p("AgpgLQARgSAYAAQAZAAARASQACACABABQAPAPAAAXIh3AAQAAgXAPgPQABgBACgCIAAAA").cp();
	this.shape_293.setTransform(7,4.1);

	// fill
	this.shape_294 = new cjs.Shape();
	this.shape_294.graphics.lf(["#0075BF","#009DFF"],[0,0.992],0.3,7.9,0.3,-7.7).s().p("AA8AAQAAgYgSgRQgRgSgZAAQgYAAgRASQgSARAAAYQAAAZASARQARASAYAAQAZAAARgSQASgRAAgZIAAAAAAxgwQAVAUAAAcQAAAdgVAUQgUAVgdAAQgcAAgUgVQgVgUAAgdQAAgcAVgUQAUgVAcAAQAdAAAUAVIAAAA").cp();
	this.shape_294.setTransform(7,7);

	this.shape_295 = new cjs.Shape();
	this.shape_295.graphics.lf(["rgba(238,238,238,0.651)","rgba(255,255,255,0.741)"],[0,1],-0.9,5.3,-0.9,-6.6).s().p("AA8AAQAAAZgSARQgRASgZAAQgYAAgRgSQgSgRAAgZQAAgYASgRQARgSAYAAQAZAAARASQASARAAAYIAAAA").cp();
	this.shape_295.setTransform(7,7);

	this.addChild(this.shape_295,this.shape_294,this.shape_293,this.instance_30);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,14,14);


(lib.RadioButton_selectedDownIcon = function() {
	this.initialize();

	// icon
	this.instance_31 = new lib.RadioButton_selectedIcon();
	this.instance_31.setTransform(7,7,1,1,0,0,0,2,2);

	// highlight
	this.shape_296 = new cjs.Shape();
	this.shape_296.graphics.lf(["rgba(204,204,204,0)","rgba(255,255,255,0.298)"],[0,1],-1,3.1,-1,-2.9).s().p("AgpgLQARgSAYAAQAZAAARASQACABABACQAPAPAAAXIh3AAQAAgXAPgPQABgCACgBIAAAA").cp();
	this.shape_296.setTransform(7,4);

	// fill
	this.shape_297 = new cjs.Shape();
	this.shape_297.graphics.lf(["#0075BF","#009DFF"],[0,0.992],0.3,7.9,0.3,-7.7).s().p("AAqAqQASgRAAgZQAAgYgSgRQgRgSgZAAQgYAAgRASQgSARAAAYQAAAZASARQARASAYAAQAZAAARgSIAAAAABGAAQAAAdgVAUQgUAVgdAAQgcAAgUgVQgVgUAAgdQAAgcAVgUQAUgVAcAAQAdAAAUAVQAVAUAAAcIAAAA").cp();
	this.shape_297.setTransform(7,7);

	this.shape_298 = new cjs.Shape();
	this.shape_298.graphics.lf(["#99D7FE","#D9F0FE"],[0,1],-0.9,5.3,-0.9,-6.6).s().p("AAqAqQgRASgZAAQgYAAgRgSQgSgRAAgZQAAgYASgRQARgSAYAAQAZAAARASQASARAAAYQAAAZgSARIAAAA").cp();
	this.shape_298.setTransform(7,7);

	this.addChild(this.shape_298,this.shape_297,this.shape_296,this.instance_31);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,14,14);


(lib.RadioButton_selectedDisabledIcon = function() {
	this.initialize();

	// icon
	this.instance_32 = new lib.RadioButton_selectedIcon();
	this.instance_32.setTransform(7,7,1,1,0,0,0,2,2);
	this.instance_32.alpha = 0.398;

	// highlight
	this.shape_299 = new cjs.Shape();
	this.shape_299.graphics.lf(["rgba(204,204,204,0)","rgba(255,255,255,0.298)"],[0,1],-1,3.1,-1,-2.9).s().p("AgpgLQARgSAYAAQAZAAARASQACABABACQAPAPAAAXIh3AAQAAgXAPgPQABgCACgBIAAAA").cp();
	this.shape_299.setTransform(7,4);

	// fill
	this.shape_300 = new cjs.Shape();
	this.shape_300.graphics.lf(["rgba(91,93,94,0.298)","rgba(183,186,188,0.298)"],[0,1],0.5,7,0.5,-7.5).s().p("AA8AAQAAgWgPgQQgBgCgCgBQgRgSgZAAQgYAAgRASQgCABgBACQgPAQAAAWQAAAZASARQARASAYAAQAZAAARgSQASgRAAgZIAAAAAA6gmQAMARAAAVQAAAdgVAUQgUAVgdAAQgcAAgUgVQgVgUAAgdQAAgVAMgRQAEgFAFgFQAUgVAcAAQAdAAAUAVQAFAFAEAFIAAAA").cp();
	this.shape_300.setTransform(7,7);

	this.shape_301 = new cjs.Shape();
	this.shape_301.graphics.lf(["rgba(204,204,204,0.2)","rgba(255,255,255,0.298)"],[0,1],-0.9,5.3,-0.9,-6.6).s().p("AA8AAQAAAZgSARQgRASgZAAQgYAAgRgSQgSgRAAgZQAAgWAPgQQABgCACgBQARgSAYAAQAZAAARASQACABABACQAPAQAAAWIAAAA").cp();
	this.shape_301.setTransform(7,7);

	this.addChild(this.shape_301,this.shape_300,this.shape_299,this.instance_32);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,14,14);


(lib.NumericStepperUpArrow_icon = function() {
	this.initialize();

	// icon
	this.instance_33 = new lib.arrowIcon("single",0);
	this.instance_33.setTransform(7,4,1,1,180);

	this.addChild(this.instance_33);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,7,4);


(lib.NumericStepperUpArrow_downSkin = function() {
	this.initialize();

	// icon
	this.instance_34 = new lib.NumericStepperUpArrow_icon("single",0);
	this.instance_34.setTransform(6,4);

	// skin
	this.shape_302 = new cjs.Shape();
	this.shape_302.graphics.f("#008AE0").s().p("ABegEIAKAAIAAAAIAAAJIjPAAIAAgJIDFAA").cp();
	this.shape_302.setTransform(10.4,11.5);

	this.shape_303 = new cjs.Shape();
	this.shape_303.graphics.lf(["#99D7FE","#D9F0FE"],[0,1],0,16,0,-5.9).s().p("AhiAyIAAhjICpAAIAMACQAQAHAAAVIAABFIjFAA").cp();
	this.shape_303.setTransform(9.9,6);

	this.shape_304 = new cjs.Shape();
	this.shape_304.graphics.lf(["#0075BF","#009DFF"],[0,0.992],-0.4,16.5,-0.4,-5.4).s().p("ABoA3IgKAAIAAhFQAAgVgQgHIgMgCIipAAIAAgKICnAAQAoAAAAAoIAABF").cp();
	this.shape_304.setTransform(10.4,5.5);

	this.addChild(this.shape_304,this.shape_303,this.shape_302,this.instance_34);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,20.9,12);


(lib.NumericStepperUpArrow_disabledSkin = function() {
	this.initialize();

	// icon
	this.instance_35 = new lib.NumericStepperUpArrow_icon("single",0);
	this.instance_35.setTransform(6,4);
	this.instance_35.alpha = 0.301;

	// skin
	this.shape_305 = new cjs.Shape();
	this.shape_305.graphics.f("rgba(133,139,142,0.298)").s().p("ABfgEIAKAAIAAAJIjRAAIAAgJIDHAA").cp();
	this.shape_305.setTransform(10.5,11.5);

	this.shape_306 = new cjs.Shape();
	this.shape_306.graphics.lf(["rgba(88,95,99,0.298)","rgba(183,186,188,0.298)"],[0,1],-0.4,16.5,-0.4,-5.4).s().p("ABpA3IgKAAIAAhFQAAgdgdgBIiqAAIAAgKICpAAQAoAAAAAoIAABF").cp();
	this.shape_306.setTransform(10.5,5.5);

	this.shape_307 = new cjs.Shape();
	this.shape_307.graphics.lf(["rgba(230,230,230,0.2)","rgba(255,255,255,0.298)"],[0,1],0,15.9,0,-6).s().p("ABjAwIAAhEQABgdgdgBIiqAAIAABlIABAAIAAgDIDFAA").cp();
	this.shape_307.setTransform(10,6.1);

	this.addChild(this.shape_307,this.shape_306,this.shape_305,this.instance_35);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,21,12);


(lib.NumericStepperDownArrow_icon = function() {
	this.initialize();

	// icon
	this.instance_36 = new lib.arrowIcon("single",0);

	this.addChild(this.instance_36);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,7,4);


(lib.NumericStepperDownArrow_downSkin = function() {
	this.initialize();

	// icon
	this.instance_37 = new lib.NumericStepperDownArrow_icon("single",0);
	this.instance_37.setTransform(6,4);

	// skin
	this.shape_308 = new cjs.Shape();
	this.shape_308.graphics.lf(["#0075BF","#009DFF"],[0,0.992],-0.4,5,-0.4,-16.9).s().p("ABpAUQAAAogoAAIipAAIAAgKICqAAQAOgBAIgHQAHgIAAgOIAAhPIAKAAIAABP").cp();
	this.shape_308.setTransform(10.5,6);

	this.shape_309 = new cjs.Shape();
	this.shape_309.graphics.lf(["#99D7FE","#D9F0FE"],[0,1],0,5.5,0,-16.4).s().p("ABHA3IiqAAIAAhtIDHAAIAABPQAAAOgHAIQgIAHgOABIAAAA").cp();
	this.shape_309.setTransform(10,5.5);

	this.addChild(this.shape_309,this.shape_308,this.instance_37);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,21,12);


(lib.NumericStepperDownArrow_disabledSkin = function() {
	this.initialize();

	// icon
	this.instance_38 = new lib.NumericStepperDownArrow_icon("single",0);
	this.instance_38.setTransform(6,4);
	this.instance_38.alpha = 0.301;

	// skin
	this.shape_310 = new cjs.Shape();
	this.shape_310.graphics.lf(["rgba(230,230,230,0.2)","rgba(255,255,255,0.298)"],[0,1],0,5.5,0,-16.4).s().p("AhjA3IAAhtIDHAAIAABPQAAAOgHAIQgIAHgOABIiqAA").cp();
	this.shape_310.setTransform(10,5.5);

	this.shape_311 = new cjs.Shape();
	this.shape_311.graphics.lf(["rgba(88,95,99,0.298)","rgba(183,186,188,0.298)"],[0,1],-0.4,5,-0.4,-16.9).s().p("AhoAyICqAAQAOgBAHgHQAHgIAAgOIAAhPIAKAAIAABPQABAogpAAIioAAIAAgK").cp();
	this.shape_311.setTransform(10.5,6);

	this.addChild(this.shape_311,this.shape_310,this.instance_38);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,21,12);


(lib.ColorPicker_backgroundSkin = function() {
	this.initialize();

	// background
	this.instance_39 = new lib.panelBackground_Base();
	this.instance_39.setTransform(136,95.5,1,1,0,0,0,136,95.5);

	this.instance_40 = new lib.panelBackground_Shadow();
	this.instance_40.setTransform(-2.9,-0.9);
	this.instance_40.shadow = new cjs.Shadow("rgba(0,0,0,0.6)",0,2,3);

	this.addChild(this.instance_40,this.instance_39);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,272,191);


(lib.CheckBox_selectedUpIcon = function() {
	this.initialize();

	// icon
	this.instance_41 = new lib.CheckBox_selectedIcon();
	this.instance_41.setTransform(8,5.5,1,1,0,0,0,5,4.5);

	// highlight
	this.shape_312 = new cjs.Shape();
	this.shape_312.graphics.lf(["rgba(238,238,238,0)","rgba(255,255,255,0.298)"],[0,1],-0.9,3.5,-0.9,-3.1).s().p("AA8AgIh3AAIAAg/IB3AAIAAA/").cp();
	this.shape_312.setTransform(7,4.3);

	// fill
	this.shape_313 = new cjs.Shape();
	this.shape_313.graphics.lf(["rgba(204,204,204,0.4)","rgba(255,255,255,0.6)"],[0,1],-0.9,7,-0.9,-6.5).s().p("Ag7g7IB3AAIAAB3Ih3AAIAAh3").cp();
	this.shape_313.setTransform(7,7);

	// border
	this.shape_314 = new cjs.Shape();
	this.shape_314.graphics.lf(["#5B5D5E","#B7BABC"],[0,1],1.5,5.9,1.5,-6.9).s().p("Ag7g7IB3AAIAAB3Ih3AAIAAh3AhFhFIAACLICLAAIAAiLIiLAA").cp();
	this.shape_314.setTransform(7,7);

	this.addChild(this.shape_314,this.shape_313,this.shape_312,this.instance_41);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,14,14);


(lib.CheckBox_selectedOverIcon = function() {
	this.initialize();

	// icon
	this.instance_42 = new lib.CheckBox_selectedIcon();
	this.instance_42.setTransform(8,5.5,1,1,0,0,0,5,4.5);

	// highlight
	this.shape_315 = new cjs.Shape();
	this.shape_315.graphics.lf(["rgba(238,238,238,0)","rgba(255,255,255,0.298)"],[0,1],-0.9,3.5,-0.9,-3.1).s().p("AA8AgIh3AAIAAg/IB3AAIAAA/").cp();
	this.shape_315.setTransform(7,4.3);

	// fill
	this.shape_316 = new cjs.Shape();
	this.shape_316.graphics.lf(["rgba(238,238,238,0.651)","rgba(255,255,255,0.741)"],[0,1],-0.9,7,-0.9,-6.5).s().p("Ag7A8IAAh3IB3AAIAAB3Ih3AA").cp();
	this.shape_316.setTransform(7,7);

	// border
	this.shape_317 = new cjs.Shape();
	this.shape_317.graphics.lf(["#0075BF","#009DFF"],[0,0.992],0.8,6.7,0.8,-7.7).s().p("AhFhFIAACLICLAAIAAiLIiLAAAg7A8IAAh3IB3AAIAAB3Ih3AA").cp();
	this.shape_317.setTransform(7,7);

	this.addChild(this.shape_317,this.shape_316,this.shape_315,this.instance_42);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,14,14);


(lib.CheckBox_selectedDownIcon = function() {
	this.initialize();

	// icon
	this.instance_43 = new lib.CheckBox_selectedIcon();
	this.instance_43.setTransform(8,5.5,1,1,0,0,0,5,4.5);

	// highlight
	this.shape_318 = new cjs.Shape();
	this.shape_318.graphics.lf(["rgba(238,238,238,0)","rgba(255,255,255,0.298)"],[0,1],-0.9,3.5,-0.9,-3.1).s().p("AA8AgIh3AAIAAg/IB3AAIAAA/").cp();
	this.shape_318.setTransform(7,4.3);

	// fill
	this.shape_319 = new cjs.Shape();
	this.shape_319.graphics.lf(["#99D7FE","#D9F0FE"],[0,1],-0.9,7,-0.9,-6.5).s().p("AA8g7IAAB3Ih3AAIAAh3IB3AA").cp();
	this.shape_319.setTransform(7,7);

	// border
	this.shape_320 = new cjs.Shape();
	this.shape_320.graphics.lf(["#0075BF","#009DFF"],[0,0.992],0.8,6.7,0.8,-7.7).s().p("AhFhFIAACLICLAAIAAiLIiLAAAg7A8IAAh3IB3AAIAAB3Ih3AA").cp();
	this.shape_320.setTransform(7,7);

	this.addChild(this.shape_320,this.shape_319,this.shape_318,this.instance_43);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,14,14);


(lib.CheckBox_selectedDisabledIcon = function() {
	this.initialize();

	// icon
	this.instance_44 = new lib.CheckBox_selectedIcon();
	this.instance_44.setTransform(8,5.5,1,1,0,0,0,5,4.5);
	this.instance_44.alpha = 0.301;

	// highlight
	this.shape_321 = new cjs.Shape();
	this.shape_321.graphics.lf(["rgba(238,238,238,0)","rgba(255,255,255,0.298)"],[0,1],-0.9,3.5,-0.9,-3.1).s().p("AA8AgIh3AAIAAg/IB3AAIAAA/").cp();
	this.shape_321.setTransform(7,4.3);

	// fill
	this.shape_322 = new cjs.Shape();
	this.shape_322.graphics.lf(["rgba(204,204,204,0.2)","rgba(255,255,255,0.298)"],[0,1],-0.9,7,-0.9,-6.5).s().p("AA8A8Ih3AAIAAh3IB3AAIAAB3").cp();
	this.shape_322.setTransform(7,7);

	// border
	this.shape_323 = new cjs.Shape();
	this.shape_323.graphics.lf(["rgba(91,93,94,0.298)","rgba(183,186,188,0.298)"],[0,1],1.5,5.9,1.5,-6.9).s().p("AhFBGICLAAIAAiLIiLAAIAACLAA8A8Ih3AAIAAh3IB3AAIAAB3").cp();
	this.shape_323.setTransform(7,7);

	this.addChild(this.shape_323,this.shape_322,this.shape_321,this.instance_44);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,14,14);


(lib.flcontrolslistClassesCellRenderer = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,false,{},true);

	// assets
	this.instance_45 = new lib.CellRenderer_selectedUpSkin();
	this.instance_45.setTransform(95.6,236.3,1,1,0,0,0,76,11);

	this.instance_46 = new lib.CellRenderer_selectedOverSkin();
	this.instance_46.setTransform(95.6,206.3,1,1,0,0,0,76,11);

	this.instance_47 = new lib.CellRenderer_selectedDownSkin();
	this.instance_47.setTransform(95.6,178.3,1,1,0,0,0,76,11);

	this.instance_48 = new lib.CellRenderer_selectedDisabledSkin();
	this.instance_48.setTransform(95.6,148.6,1,1,0,0,0,76,11);

	this.instance_49 = new lib.CellRenderer_upSkin();
	this.instance_49.setTransform(95.6,56.6,1,1,0,0,0,76,11);

	this.instance_50 = new lib.CellRenderer_overSkin();
	this.instance_50.setTransform(95.6,86.6,1,1,0,0,0,76,11);

	this.instance_51 = new lib.CellRenderer_downSkin();
	this.instance_51.setTransform(95.6,116.6,1,1,0,0,0,76,11);

	this.instance_52 = new lib.CellRenderer_disabledSkin();
	this.instance_52.setTransform(95.6,26.6,1,1,0,0,0,76,11);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_52},{t:this.instance_51},{t:this.instance_50},{t:this.instance_49},{t:this.instance_48},{t:this.instance_47},{t:this.instance_46},{t:this.instance_45}]},1).wait(1));

	// avatar
	this.instance_53 = new lib.CellRenderer_upSkin();
	this.instance_53.setTransform(76,11,1,1,0,0,0,76,11);

	this.timeline.addTween(cjs.Tween.get(this.instance_53).to({_off:true},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,152,22.1);


(lib.flcontrolsCheckBox = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,false,{},true);

	// assets
	this.instance_54 = new lib.focusRectSkin();
	this.instance_54.setTransform(48.4,278.7,1,1,0,0,0,41.1,11);

	this.instance_55 = new lib.CheckBox_selectedDisabledIcon();
	this.instance_55.setTransform(82.4,152.1,1,1,0,0,0,7,7);

	this.instance_56 = new lib.CheckBox_selectedDownIcon();
	this.instance_56.setTransform(82.4,215.2,1,1,0,0,0,7,7);

	this.instance_57 = new lib.CheckBox_selectedOverIcon();
	this.instance_57.setTransform(82.4,86,1,1,0,0,0,7,7);

	this.instance_58 = new lib.CheckBox_selectedUpIcon();
	this.instance_58.setTransform(82.4,19.9,1,1,0,0,0,7,7);

	this.instance_59 = new lib.CheckBox_disabledIcon();
	this.instance_59.setTransform(82.4,181.1,1,1,0,0,0,7,7);

	this.instance_60 = new lib.CheckBox_downIcon();
	this.instance_60.setTransform(82.4,248.2,1,1,0,0,0,7,7);

	this.instance_61 = new lib.CheckBox_overIcon();
	this.instance_61.setTransform(82.4,119,1,1,0,0,0,7,7);

	this.instance_62 = new lib.CheckBox_upIcon();
	this.instance_62.setTransform(82.4,52.9,1,1,0,0,0,7,7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_62},{t:this.instance_61},{t:this.instance_60},{t:this.instance_59},{t:this.instance_58},{t:this.instance_57},{t:this.instance_56},{t:this.instance_55},{t:this.instance_54}]},1).wait(1));

	// avatar
	this.instance_63 = new lib.Component_avatar();
	this.instance_63.setTransform(50,11,1.25,1,0,0,0,40,11);

	this.timeline.addTween(cjs.Tween.get(this.instance_63).to({_off:true},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,100,22);


(lib.flcontrolsButton = function(mode,startPosition,loop) {




	this.initialize(mode,startPosition,false,{},true);

	// assets
	this.instance_64 = new lib.focusRectSkin();
	this.instance_64.setTransform(70.1,310.9,1,1,0,0,0,41.1,11);

	this.instance_65 = new lib.Button_upSkin();
	this.instance_65.setTransform(70,213,1,1,0,0,0,41,11);

	this.instance_66 = new lib.Button_selectedUpSkin();
	this.instance_66.setTransform(88,18.7,1,1,0,0,0,41,11);

	this.instance_67 = new lib.Button_selectedOverSkin();
	this.instance_67.setTransform(88,50.7,1,1,0,0,0,41,11);

	this.instance_68 = new lib.Button_selectedDownSkin();
	this.instance_68.setTransform(88,114.7,1,1,0,0,0,41,11);

	this.instance_69 = new lib.Button_selectedDisabledSkin();
	this.instance_69.setTransform(88.1,82.7,1,1,0,0,0,41.1,11);

	this.instance_70 = new lib.Button_overSkin();
	this.instance_70.setTransform(70,181,1,1,0,0,0,41,11);

	this.instance_71 = new lib.Button_emphasizedSkin();
	this.instance_71.setTransform(70.1,245,1,1,0,0,0,41.1,11);

	this.instance_72 = new lib.Button_downSkin();
	this.instance_72.setTransform(70,149,1,1,0,0,0,41,11);

	this.instance_73 = new lib.Button_disabledSkin();
	this.instance_73.setTransform(70.1,277,1,1,0,0,0,41.1,11);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_73},{t:this.instance_72},{t:this.instance_71},{t:this.instance_70},{t:this.instance_69},{t:this.instance_68},{t:this.instance_67},{t:this.instance_66},{t:this.instance_65},{t:this.instance_64}]},1).wait(1));

	// avatar
	this.instance_74 = new lib.Component_avatar();
	this.instance_74.setTransform(50,11,1.25,1,0,0,0,40,11);

	this.timeline.addTween(cjs.Tween.get(this.instance_74).to({_off:true},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,100,22);


(lib.qPanel_mccopy = function() {
	this.initialize();

	// Layer 1
	this.base_4 = new lib.quesBase();
	this.base_4.setTransform(0.9,89.6,0.704,0.688,0,0,0,-280.5,4.4);
	this.base_4.shadow = new cjs.Shadow("rgba(0,0,0,1)",1,1,5);

	this.addChild(this.base_4);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,396.6,173);


(lib.MyBox = function() {
	this.initialize();

	// 100$
	this.moneytop = new lib.Symbol9();
	this.moneytop.setTransform(12.5,2.8);
	this.moneytop.shadow = new cjs.Shadow("#333333",2,1,2);

	// grid cells
	this.base_5 = new lib.greencell();
	this.base_5.setTransform(0,0,0.981,0.968);

	this.addChild(this.base_5,this.moneytop);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-48.9,-48.3,98.2,96.9);


(lib.gameMc = function() {
	this.initialize();

	// Game
	this.titleMc = new lib.mainTitle_mccopy();
	this.titleMc.setTransform(102.5,38.7,1,1,0,0,0,78.4,21.6);
	
	// Layer 2
	this.hintmc = new lib.hintPanlemc();
	this.hintmc.setTransform(105,211,1,1,0,0,0,1.8,86.5);

	this.questionmc = new lib.qPanel_mccopy();
	this.questionmc.setTransform(26.9,167.7,1,1,0,0,0,1.8,86.5);

	this.opt_mc4 = new lib.ansPanel_mccopy();
	this.opt_mc4.setTransform(326.7,370.1,1,1,0,0,0,96.5,28.1);

	this.opt_mc3 = new lib.ansPanel_mccopy();
	this.opt_mc3.setTransform(122.7,370.1,1,1,0,0,0,96.5,28.1);

	this.opt_mc2 = new lib.ansPanel_mccopy();
	this.opt_mc2.setTransform(326.7,302.1,1,1,0,0,0,96.5,28.1);

	this.opt_mc1 = new lib.ansPanel_mccopy();
	this.opt_mc1.setTransform(122.7,300.8,1,1,0,0,0,96.5,28.1);
	
	this.subhl_mc = new lib.subhl();
	this.subhl_mc.setTransform(207.4,432,1,1,0,0,0,67.5,17.9);
	this.subhl_mc.gotoAndStop(0);

	this.submitmc = new lib.lockAnswer();
	this.submitmc.setTransform(139.2,413.7);
	
	// Tootltips
	this.tooltips_mc = new lib.tootltips();
	this.tooltips_mc.setTransform(465,10,1,1,0,0,0,36,9.5);
	this.tooltips_mc.gotoAndStop(0);

	this.swap = new lib.swap_mc();
	this.swap.setTransform(572.7,40.3,1,1,0,0,0,16.4,16.4);

	this.hint = new lib.hint_mc();
	this.hint.setTransform(514.5,40.3,1,1,0,0,0,16.4,16.4);

	this.fifty = new lib.fifty_mc();
	this.fifty.setTransform(456.3,40.3,1,1,0,0,0,16.4,16.4);

	this.baseMc = new lib.baseMc();
	this.baseMc.setTransform(320.1,240.1,1,1,0,0,0,305.2,229.3);

	// backgorund
	this.mainbase = new lib.bgBase();
	this.mainbase.setTransform(1.1,1.5,1,1,0,0,0,1.1,2);

	this.addChild(this.mainbase,this.baseMc,this.fifty,this.hint,this.swap,this.hintmc,this.tooltips_mc,this.submitmc,this.subhl_mc,this.opt_mc1,this.opt_mc2,this.opt_mc3,this.opt_mc4,this.questionmc,this.titleMc,this.hintmc);
	
	//Create tabs based on the total number of question
	var tabLevelsStart=totalQuestions/3;
	swapListArray = new Array();
	swapListArray.push(tabLevelsStart*1,tabLevelsStart*2,tabLevelsStart*3);

	var baseTabX=528;
	var heightDiff=27;

	var varDiff=15-totalQuestions;
	var baseTabY=480-(27*varDiff);

	for (i=1; i<=totalQuestions; i++) {
		var levelTab=false;
		for (j=0; j<swapListArray.length; j++) {
			if (i==swapListArray[j]) {
				levelTab=true;
			}
		}
		if (levelTab) {
			this.tabpanelev = new lib.tabPanelLevel();
			this.tabpanelev.gotoAndStop(0);
			this["tab"+i] = new lib.blankmc();
			this["tab"+i].num=i;;
			//this.tabLevel.txt.text=currencysymbol+" "+scoreArray[i-1];
			// Layer 4
			this.txtl = new cjs.Text(currencysymbol+" "+scoreArray[i-1], "bold 12px Tahoma");
			this.txtl.textAlign = "center";
			this.txtl.lineHeight = 12;
			this.txtl.lineWidth = 126;
			this.txtl.setTransform(91,4.8);
		
			this["tab"+i].addChild(this.tabpanelev,this.txtl);

			//Setting x and Y vals;
			var tabLevelx=baseTabX;
			var tabLevely=baseTabY-(heightDiff*i);
			this["tab"+i].setTransform(tabLevelx,tabLevely,1,1,0,0,0,91.8,12.1);
			
			this.addChild(this["tab"+i]);
		} else {
			this["tab"+i] = new lib.blankmc();
			this["tab"+i].num=i;
			
			this.tabpane = new lib.tabPanel();
			this.tabpane.gotoAndStop(0);
			
			// Layer 4
			this.txtn = new cjs.Text(currencysymbol+" "+scoreArray[i-1], "bold 12px Tahoma");
			this.txtn.textAlign = "center";
			this.txtn.lineHeight = 12;
			this.txtn.lineWidth = 126;
			this.txtn.setTransform(91,4.8);
			
			this["tab"+i].addChild(this.tabpane,this.txtn);

			//Setting x and Y vals;
			var tabNormalx=baseTabX;
			var tabNormaly=baseTabY-(heightDiff*i);
			this["tab"+i].setTransform(tabNormalx,tabNormaly,1,1,0,0,0,91.8,12.1);
			
			this.addChild(this["tab"+i]);
		}
	}
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,-0.5,640,480);


(lib.basetthl2 = function() {
	this.initialize();

	// Layer 1
	this.shape_113 = new cjs.Shape();
	this.shape_113.graphics.lf(["#CCCCCC","#FFFFFF"],[0,1],0,13.5,0,-13.3).s("#CCCCCC").ss(0.1,1,1).p("ADkBeInHAAIAAi7IHHAAIAAC7").cp();
	this.shape_113.setTransform(22.8,9.5);

	this.addChild(this.shape_113);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,45.6,18.9);


(lib.basetthl = function() {
	this.initialize();

	// Layer 1
	this.shape_114 = new cjs.Shape();
	this.shape_114.graphics.lf(["#CCCCCC","#FFFFFF"],[0,1],0,13.5,0,-13.3).s("#CCCCCC").ss(0.1,1,1).p("AFoBeIrPAAIAAi7ILPAAIAAC7").cp();
	this.shape_114.setTransform(36,9.5);

	this.addChild(this.shape_114);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,72,18.9);


(lib.hintPanlemc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,false,{},true);

	// Layer 4
	this.text_17 = new cjs.Text(ID_Hint, "bold 12px Tahoma");
	this.text_17.lineHeight = 15;
	this.text_17.setTransform(11.3,40);

	this.closeBtn = new lib.closeHint();
	this.closeBtn.setTransform(223.9,37.8,1,1,0,0,0,4.8,4.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.closeBtn},{t:this.text_17}]},2).wait(1));

	// Layer 5
	this.openBtn = new lib.hintBtn();
	this.openBtn.setTransform(310,-57,1,1,0,0,0,21,9.9);

	this.timeline.addTween(cjs.Tween.get(this.openBtn).wait(1).to({_off:false},0).to({_off:true},1).wait(1));

	// Layer 1
	this.hintBase = new lib.hintqBase();
	this.hintBase.setTransform(0.9,77.7,0.426,0.367,0,0,0,-280.6,4.5);
	this.hintBase.shadow = new cjs.Shadow("rgba(0,0,0,1)",2,2,5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.hintBase}]}).wait(3));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0.4,30,239.9,92.3);

(lib.tootltips = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,false,{},true);

	// Text
	this.text_1 = new cjs.Text(ID_fiftyfifty, "12px Tahoma");
	this.text_1.lineHeight = 14;
	this.text_1.setTransform(9.3,0.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.text_1,p:{regX:26.7,x:36,text:ID_fiftyfifty,textAlign:"",lineWidth:50}}]},1).to({state:[{t:this.text_1,p:{regX:12.9,x:106.44999999999999,text:ID_Hint,textAlign:"center",lineWidth:22}}]},1).to({state:[{t:this.text_1,p:{regX:16.4,x:167.75,text:ID_Swap,textAlign:"center",lineWidth:29}}]},1).wait(1));

	// Base
	this.shape_115 = new cjs.Shape();
	this.shape_115.graphics.f("rgba(51,255,255,0)").s().p("AlnBeIAAi7ILPAAIAAC7").cp();
	this.shape_115.setTransform(36,9.5);

	this.instance = new lib.basetthl();
	this.instance.setTransform(36,9.5,1.422,1,0,0,0,36,9.5);
	this.instance.shadow = new cjs.Shadow("rgba(102,102,102,1)",0,0,2);

	this.instance_1 = new lib.basetthl2();
	this.instance_1.setTransform(95.1,9.5,2.257,1,0,0,0,22.8,9.5);
	this.instance_1.shadow = new cjs.Shadow("rgba(102,102,102,1)",0,0,2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_115}]}).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance_1,p:{x:95.1}}]},1).to({state:[{t:this.instance_1,p:{x:153.3}}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,72,18.9);


(lib.subhl = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{},false);

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(204,0,0,0)").s().p("AKjCFIAAkJQAAgtgtAAIzrAAQgtAAAAAtIAAEJQAAAtAtAAITrAAQAtAAAAgtIAAAA").cp();
	this.shape.setTransform(67.6,17.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(204,0,0,0.043)").s().p("AqiiEQAAgtAtAAITrAAQAtAAAAAtIAAEJQAAAtgtAAIzrAAQgtAAAAgtIAAkJ").cp();
	this.shape_1.setTransform(67.6,17.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("rgba(204,0,0,0.086)").s().p("AqiiEQAAgtAtAAITrAAQAtAAAAAtIAAEJQAAAtgtAAIzrAAQgtAAAAgtIAAkJ").cp();
	this.shape_2.setTransform(67.6,17.9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("rgba(204,0,0,0.129)").s().p("AqiiEQAAgtAtAAITrAAQAtAAAAAtIAAEJQAAAtgtAAIzrAAQgtAAAAgtIAAkJ").cp();
	this.shape_3.setTransform(67.6,17.9);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("rgba(204,0,0,0.173)").s().p("AqiiEQAAgtAtAAITrAAQAtAAAAAtIAAEJQAAAtgtAAIzrAAQgtAAAAgtIAAkJ").cp();
	this.shape_4.setTransform(67.6,17.9);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("rgba(204,0,0,0.216)").s().p("AqiiEQAAgtAtAAITrAAQAtAAAAAtIAAEJQAAAtgtAAIzrAAQgtAAAAgtIAAkJ").cp();
	this.shape_5.setTransform(67.6,17.9);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("rgba(204,0,0,0.259)").s().p("AqiiEQAAgtAtAAITrAAQAtAAAAAtIAAEJQAAAtgtAAIzrAAQgtAAAAgtIAAkJ").cp();
	this.shape_6.setTransform(67.6,17.9);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("rgba(204,0,0,0.302)").s().p("AqiiEQAAgtAtAAITrAAQAtAAAAAtIAAEJQAAAtgtAAIzrAAQgtAAAAgtIAAkJ").cp();
	this.shape_7.setTransform(67.6,17.9);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("rgba(204,0,0,0.345)").s().p("AqiiEQAAgtAtAAITrAAQAtAAAAAtIAAEJQAAAtgtAAIzrAAQgtAAAAgtIAAkJ").cp();
	this.shape_8.setTransform(67.6,17.9);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("rgba(204,0,0,0.388)").s().p("AKjCFIAAkJQAAgtgtAAIzrAAQgtAAAAAtIAAEJQAAAtAtAAITrAAQAtAAAAgtIAAAA").cp();
	this.shape_9.setTransform(67.6,17.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_9}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,135.2,35.8);


(lib.closeHint = function() {
	this.initialize();

	// Layer 1
	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("rgba(0,0,0,0.004)").s().p("ABdBdIi5AAIAAi5IC5AAIAAC5").cp();
	this.shape_50.setTransform(9.3,9.3);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#000000").s().p("AAvguIghAuIAiAvIgdAAIgTgfIgUAfIgbAAIAigvIghguIAcAAIASAeIAUgeIAbAA").cp();
	this.shape_51.setTransform(9.4,9.3);
	
	this.hitclose = new cjs.Shape();
	this.hitclose.graphics.beginFill("#000").drawRect(1,1, 18, 18);
	this.hitclose.alpha = 0.01;

	this.addChild(this.shape_51,this.shape_50,this.hitclose);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,18.7,18.7);

(lib.hintBtn = function() {
	this.initialize();

	// Layer 1
	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f().s("#660000").ss(1,1,1).p("AAAAaIAAgdIgVgVAAAgDIAWgW");
	this.shape_17.setTransform(10.9,9.8);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#CC6600").s("#333333").ss(1,1,1).rr(-8.7,-2,17.4,4,2);
	this.shape_18.setTransform(10.8,16,0.354,0.314);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#CC6600").s("#333333").ss(1,1,1).rr(-8.7,-2,17.4,4,2);
	this.shape_19.setTransform(10.8,14.6,0.354,0.314);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#CC6600").s("#333333").ss(1,1,1).rr(-8.7,-2,17.4,4,2);
	this.shape_20.setTransform(10.8,13.3,0.354,0.314);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f().s("#660000").ss(2,1,1).p("AAaAAIgDAAIgwAA");
	this.shape_21.setTransform(11,13.1);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f().s("#333333").ss(2,1,1).p("AgbAjQgDgCgDgEQgOgNAAgTQAAgUAOgOQAPgOASAAQAUAAAOAOQAOAOAAAUQAAATgOANQgEAEgDADAgYA0IAAgPAAYAlIAAAP");
	this.shape_22.setTransform(10.9,7.8);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFF99").s().p("AgYA0IAAgPIAAAPIgDAAIAAgRQgDgCgDgEQgOgNAAgTQAAgUAOgOQAPgOASAAQAUAAAOAOQAOAOAAAUQAAATgOANQgEAEgDADIAAAQIgDAAIgwAAAAYAlIAAAPIAAgP").cp();
	this.shape_23.setTransform(10.9,7.8);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#CC6600").s("#333333").ss(2,1,1).rr(-4.7,-1.85,9.4,3.7,1.1);
	this.shape_24.setTransform(10.8,16.9,0.464,0.464);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#99CCFF").s().p("AhqBjIAAjFIDVAAIAADFIjVAA").cp();
	this.shape_25.setTransform(10.7,10);
	
	this.hitarea = new cjs.Shape();
	this.hitarea.graphics.beginFill("#000").drawRect(1,1, 18, 18);
	this.hitarea.alpha = 0.01;

	this.addChild(this.shape_25,this.shape_24,this.shape_23,this.shape_22,this.shape_21,this.shape_20,this.shape_19,this.shape_18,this.shape_17,this.hitarea);

}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,21.5,19.9);

(lib.hintqBase = function() {
	this.initialize();

	// Layer 2
	this.instance_8 = new lib.border();
	this.instance_8.setTransform(0.1,0.1,1,1,0,0,0,281.8,125.8);

	// Layer 1
	this.cellColor_1 = new lib.hintbaseCell();
	this.cellColor_1.setTransform(0.1,0.1,1,1,0,0,0,281.8,125.8);

	this.addChild(this.cellColor_1,this.instance_8);
	
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-281.7,-125.7,563.6,251.6);

(lib.hintbaseCell = function() {
	this.initialize();

	// Layer 1
	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f(hintbgcolor).s().p("EAo8gToMhR3AAAQjFAAAACPMAAAAizQAACPDFAAMBR3AAAQDFAAAAiPMAAAgizQAAiPjFAAIAAAA").cp();
	this.shape_61.setTransform(281.8,125.8);

	this.addChild(this.shape_61);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,563.6,251.6);


(lib.flcontrolsRadioButton = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,false,{},true);

	// assets
	this.instance_75 = new lib.focusRectSkin();
	this.instance_75.setTransform(67.1,269,1,1,0,0,0,41.1,11);

	this.instance_76 = new lib.RadioButton_selectedDisabledIcon();
	this.instance_76.setTransform(101,235,1,1.007,90,0,0,7,7);

	this.instance_77 = new lib.RadioButton_selectedDownIcon();
	this.instance_77.setTransform(101,205,1,1.007,90,0,0,7,7);

	this.instance_78 = new lib.RadioButton_selectedOverIcon();
	this.instance_78.setTransform(101,175,1,1.007,90,0,0,7,7);

	this.instance_79 = new lib.RadioButton_selectedUpIcon();
	this.instance_79.setTransform(100.5,145,1,1.004,90,0,0,7,7.5);

	this.instance_80 = new lib.RadioButton_disabledIcon();
	this.instance_80.setTransform(101.1,115,1,1,90,0,0,7,7);

	this.instance_81 = new lib.RadioButton_downIcon();
	this.instance_81.setTransform(101.1,85,1,1,90,0,0,7,7);

	this.instance_82 = new lib.RadioButton_overIcon();
	this.instance_82.setTransform(101.1,55,1,1,90,0,0,7,7);

	this.instance_83 = new lib.RadioButton_upIcon();
	this.instance_83.setTransform(101.1,25,1,1,90,0,0,7,7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_83},{t:this.instance_82},{t:this.instance_81},{t:this.instance_80},{t:this.instance_79},{t:this.instance_78},{t:this.instance_77},{t:this.instance_76},{t:this.instance_75}]},1).wait(1));

	// avatar
	this.instance_84 = new lib.Component_avatar();
	this.instance_84.setTransform(0,0,1.25,1);

	this.timeline.addTween(cjs.Tween.get(this.instance_84).to({_off:true},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,100,22);


(lib.ScrollArrowUp_upSkin = function() {
	this.initialize();

	// icon
	this.instance_85 = new lib.ScrollArrowUp_icon("single",0);
	this.instance_85.setTransform(4,4);

	// fill
	this.shape_324 = new cjs.Shape();
	this.shape_324.graphics.lf(["rgba(238,238,238,0)","rgba(255,255,255,0.298)"],[0,1],-0.9,3.5,-0.9,-3.1).s().p("ABBgfIAAA/IiBAAIAAg/ICBAA").cp();
	this.shape_324.setTransform(7.5,4.3);

	this.shape_325 = new cjs.Shape();
	this.shape_325.graphics.lf(["#5B5D5E","#B7BABC"],[0,1],1,5.9,1,-6.9).s().p("AhKhFIAACLICVAAIAAiLIiVAAAhAA8IAAh3ICBAAIAAB3IiBAA").cp();
	this.shape_325.setTransform(7.5,7);

	this.shape_326 = new cjs.Shape();
	this.shape_326.graphics.lf(["#E6E6E6","#FFFFFF"],[0,1],-1.4,7,-1.4,-6.5).s().p("AhAA8IAAh3ICBAAIAAB3IiBAA").cp();
	this.shape_326.setTransform(7.5,7);

	this.addChild(this.shape_326,this.shape_325,this.shape_324,this.instance_85);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,15,14);


(lib.ScrollArrowUp_overSkin = function() {
	this.initialize();

	// icon
	this.instance_86 = new lib.ScrollArrowUp_icon("single",0);
	this.instance_86.setTransform(4,4);

	// fill
	this.shape_327 = new cjs.Shape();
	this.shape_327.graphics.lf(["rgba(238,238,238,0)","rgba(255,255,255,0.298)"],[0,1],-1,3.5,-1,-3.1).s().p("ABBgfIAAA/IiBAAIAAg/ICBAA").cp();
	this.shape_327.setTransform(7.6,4.3);

	this.shape_328 = new cjs.Shape();
	this.shape_328.graphics.lf(["#0075BF","#009DFF"],[0,0.992],1,5.9,1,-6.9).s().p("AhKhFIAACLICVAAIAAiLIiVAAAhAA8IAAh3ICBAAIAAB3IiBAA").cp();
	this.shape_328.setTransform(7.5,7);

	this.shape_329 = new cjs.Shape();
	this.shape_329.graphics.lf(["#E6E6E6","#FFFFFF"],[0,1],-1.4,7,-1.4,-6.5).s().p("AhAA8IAAh3ICBAAIAAB3IiBAA").cp();
	this.shape_329.setTransform(7.5,7);

	this.addChild(this.shape_329,this.shape_328,this.shape_327,this.instance_86);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,15,14);


(lib.ScrollArrowDown_upSkin = function() {
	this.initialize();

	// icon
	this.instance_87 = new lib.ScrollArrowDown_icon("single",0);
	this.instance_87.setTransform(4,5);

	// fill
	this.shape_330 = new cjs.Shape();
	this.shape_330.graphics.lf(["rgba(238,238,238,0)","rgba(255,255,255,0.298)"],[0,1],-0.9,3.5,-0.9,-3.1).s().p("ABBgfIAAA/IiBAAIAAg/ICBAA").cp();
	this.shape_330.setTransform(7.5,4.3);

	this.shape_331 = new cjs.Shape();
	this.shape_331.graphics.lf(["#5B5D5E","#B7BABC"],[0,1],1,5.9,1,-6.9).s().p("AhKhFIAACLICVAAIAAiLIiVAAAhAA8IAAh3ICBAAIAAB3IiBAA").cp();
	this.shape_331.setTransform(7.5,7);

	this.shape_332 = new cjs.Shape();
	this.shape_332.graphics.lf(["#E6E6E6","#FFFFFF"],[0,1],-1.4,7,-1.4,-6.5).s().p("AhAA8IAAh3ICBAAIAAB3IiBAA").cp();
	this.shape_332.setTransform(7.5,7);

	this.addChild(this.shape_332,this.shape_331,this.shape_330,this.instance_87);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,15,14);


(lib.ScrollArrowDown_overSkin = function() {
	this.initialize();

	// icon
	this.instance_88 = new lib.ScrollArrowDown_icon("single",0);
	this.instance_88.setTransform(4,5);

	// fill
	this.shape_333 = new cjs.Shape();
	this.shape_333.graphics.lf(["rgba(238,238,238,0)","rgba(255,255,255,0.298)"],[0,1],-0.9,3.5,-0.9,-3.1).s().p("ABBgfIAAA/IiBAAIAAg/ICBAA").cp();
	this.shape_333.setTransform(7.5,4.3);

	this.shape_334 = new cjs.Shape();
	this.shape_334.graphics.lf(["#0075BF","#009DFF"],[0,0.992],1,5.9,1,-6.9).s().p("AhKhFIAACLICVAAIAAiLIiVAAAhAA8IAAh3ICBAAIAAB3IiBAA").cp();
	this.shape_334.setTransform(7.5,7);

	this.shape_335 = new cjs.Shape();
	this.shape_335.graphics.lf(["#E6E6E6","#FFFFFF"],[0,1],-1.4,7,-1.4,-6.5).s().p("AhAA8IAAh3ICBAAIAAB3IiBAA").cp();
	this.shape_335.setTransform(7.5,7);

	this.addChild(this.shape_335,this.shape_334,this.shape_333,this.instance_88);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,15,14);


(lib.flcontrolsScrollBar = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,false,{},true);

	// assets
	this.instance_89 = new lib.ScrollBar_thumbIcon();
	this.instance_89.setTransform(215.5,86.5,1,1,0,0,0,2.5,4.5);

	this.instance_90 = new lib.ScrollBar_thumbIcon();
	this.instance_90.setTransform(127.5,88.5,1,1,0,0,0,2.5,4.5);

	this.instance_91 = new lib.ScrollBar_thumbIcon();
	this.instance_91.setTransform(40.5,86.5,1,1,0,0,0,2.5,4.5);

	this.instance_92 = new lib.ScrollArrowUp_disabledSkin();
	this.instance_92.setTransform(292.5,25,1,1,0,0,0,7.5,7);

	this.instance_93 = new lib.ScrollArrowDown_disabledSkin();
	this.instance_93.setTransform(292.5,159,1,1,0,0,0,7.5,7);

	this.instance_94 = new lib.ScrollArrowDown_upSkin();
	this.instance_94.setTransform(41.5,159,1,1,0,0,0,7.5,7);

	this.instance_95 = new lib.ScrollThumb_upSkin();
	this.instance_95.setTransform(40,86,1,1,0,0,0,6,26);

	this.instance_96 = new lib.ScrollArrowUp_upSkin();
	this.instance_96.setTransform(41.5,25,1,1,0,0,0,7.5,7);

	this.instance_97 = new lib.ScrollArrowUp_overSkin();
	this.instance_97.setTransform(128.5,27,1,1,0,0,0,7.5,7);

	this.instance_98 = new lib.ScrollThumb_overSkin();
	this.instance_98.setTransform(127,88,1,1,0,0,0,6,26);

	this.instance_99 = new lib.ScrollArrowDown_overSkin();
	this.instance_99.setTransform(128.5,161,1,1,0,0,0,7.5,7);

	this.instance_100 = new lib.ScrollThumb_downSkin();
	this.instance_100.setTransform(215,86,1,1,0,0,0,6,26);

	this.instance_101 = new lib.ScrollArrowDown_downSkin();
	this.instance_101.setTransform(216.5,159,1,1,0,0,0,7.5,7);

	this.instance_102 = new lib.ScrollArrowUp_downSkin();
	this.instance_102.setTransform(216.5,25,1,1,0,0,0,7.5,7);

	this.instance_103 = new lib.ScrollTrack_skin();
	this.instance_103.setTransform(216.5,92,1,1,0,0,0,7.5,74);

	this.instance_104 = new lib.ScrollTrack_skin();
	this.instance_104.setTransform(128.5,94,1,1,0,0,0,7.5,74);

	this.instance_105 = new lib.ScrollTrack_skin();
	this.instance_105.setTransform(41.5,92,1,1,0,0,0,7.5,74);

	this.instance_106 = new lib.ScrollTrack_skin();
	this.instance_106.setTransform(292.5,92,1,1,0,0,0,7.5,74);

	this.instance_107 = new lib.focusRectSkin();
	this.instance_107.setTransform(107.9,234,1,1,0,0,0,41.1,11);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_107},{t:this.instance_106},{t:this.instance_105},{t:this.instance_104},{t:this.instance_103},{t:this.instance_102},{t:this.instance_101},{t:this.instance_100},{t:this.instance_99},{t:this.instance_98},{t:this.instance_97},{t:this.instance_96},{t:this.instance_95},{t:this.instance_94},{t:this.instance_93},{t:this.instance_92},{t:this.instance_91},{t:this.instance_90},{t:this.instance_89}]},1).wait(1));

	// avatar
	this.instance_108 = new lib.ScrollTrack_skin();
	this.instance_108.setTransform(7.5,50,1,0.676,0,0,0,7.5,74);

	this.timeline.addTween(cjs.Tween.get(this.instance_108).to({_off:true},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,15,100);


(lib.NumericStepperUpArrow_upSkin = function() {
	this.initialize();

	// icon
	this.instance_109 = new lib.NumericStepperUpArrow_icon("single",0);
	this.instance_109.setTransform(6,4);

	// skin
	this.shape_336 = new cjs.Shape();
	this.shape_336.graphics.lf(["rgba(230,230,230,0.4)","rgba(255,255,255,0.6)"],[0,1],0,16,0,-5.9).s().p("AhigxICpAAQAOABAHAHQAHAIAAAOIAABFIjFAAIAAhjIAAAA").cp();
	this.shape_336.setTransform(10,6);

	this.shape_337 = new cjs.Shape();
	this.shape_337.graphics.f("#858B8E").s().p("ABegEIAKAAIAAAJIjPAAIAAgJIDFAA").cp();
	this.shape_337.setTransform(10.5,11.5);

	this.shape_338 = new cjs.Shape();
	this.shape_338.graphics.lf(["#585F63","#B7BABC"],[0,1],-0.4,16.5,-0.4,-5.4).s().p("ABeA3IAAhFQAAgOgHgIQgHgHgOgBIipAAIAAgKICnAAQAoAAAAAoIAABFIgKAA").cp();
	this.shape_338.setTransform(10.5,5.5);

	this.addChild(this.shape_338,this.shape_337,this.shape_336,this.instance_109);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,21,12);


(lib.NumericStepperUpArrow_overSkin = function() {
	this.initialize();

	// icon
	this.instance_110 = new lib.NumericStepperUpArrow_icon("single",0);
	this.instance_110.setTransform(6,4);

	// skin
	this.shape_339 = new cjs.Shape();
	this.shape_339.graphics.lf(["rgba(238,238,238,0.651)","rgba(255,255,255,0.741)"],[0,1],0,16,0,-5.9).s().p("AhigxICpAAQAOABAHAHQAHAIAAAOIAABFIjFAAIAAhjIAAAA").cp();
	this.shape_339.setTransform(10,6);

	this.shape_340 = new cjs.Shape();
	this.shape_340.graphics.f("#008AE0").s().p("ABfgEIAKAAIAAAJIjRAAIAAgJIABAAIDGAA").cp();
	this.shape_340.setTransform(10.5,11.5);

	this.shape_341 = new cjs.Shape();
	this.shape_341.graphics.lf(["#0075BF","#009DFF"],[0,0.992],-0.4,16.5,-0.4,-5.4).s().p("ABeA3IAAhFQAAgOgHgIQgHgHgOgBIipAAIAAgKICnAAQAoAAAAAoIAABFIgKAA").cp();
	this.shape_341.setTransform(10.5,5.5);

	this.addChild(this.shape_341,this.shape_340,this.shape_339,this.instance_110);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,21,12);


(lib.NumericStepperDownArrow_upSkin = function() {
	this.initialize();

	// icon
	this.instance_111 = new lib.NumericStepperDownArrow_icon("single",0);
	this.instance_111.setTransform(6,4);

	// skin
	this.shape_342 = new cjs.Shape();
	this.shape_342.graphics.lf(["#585F63","#B7BABC"],[0,1],-0.4,5,-0.4,-16.9).s().p("ABoAUQABAogpAAIioAAIAAgKICqAAQAOgBAHgHQAIgIgBgOIAAhPIAKAAIAABP").cp();

	this.shape_342.setTransform(10.5,6);

	this.shape_343 = new cjs.Shape();
	this.shape_343.graphics.lf(["rgba(230,230,230,0.4)","rgba(255,255,255,0.6)"],[0,1],0,5.5,0,-16.4).s().p("ABHA3IiqAAIAAhtIDHAAIAABPQAAAOgHAIQgIAHgOABIAAAA").cp();
	this.shape_343.setTransform(10,5.5);

	this.addChild(this.shape_343,this.shape_342,this.instance_111);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,21,12);


(lib.NumericStepperDownArrow_overSkin = function() {
	this.initialize();

	// icon
	this.instance_112 = new lib.NumericStepperDownArrow_icon("single",0);
	this.instance_112.setTransform(6,4);

	// skin
	this.shape_344 = new cjs.Shape();
	this.shape_344.graphics.lf(["#0075BF","#009DFF"],[0,0.992],-0.4,5,-0.4,-16.9).s().p("ABpAUQAAAogoAAIipAAIAAgKICqAAQAOgBAIgHQAHgIAAgOIAAhPIAKAAIAABP").cp();
	this.shape_344.setTransform(10.5,6);

	this.shape_345 = new cjs.Shape();
	this.shape_345.graphics.lf(["rgba(230,230,230,0.4)","rgba(255,255,255,0.6)"],[0,1],0,5.5,0,-16.4).s().p("ABHA3IiqAAIAAhtIDHAAIAABPQAAAOgHAIQgIAHgOABIAAAA").cp();
	this.shape_345.setTransform(10,5.5);

	this.addChild(this.shape_345,this.shape_344,this.instance_112);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,21,12);


(lib.radiobuttonoptions = function() {
	this.initialize();

	// radio
	this.r4 = new lib.flcontrolsRadioButton();
	this.r4.setTransform(6.4,102.8,0.238,1,0,0,0,50,11);

	this.r3 = new lib.flcontrolsRadioButton();
	this.r3.setTransform(6.4,73,0.238,1,0,0,0,50,11);

	this.r2 = new lib.flcontrolsRadioButton();
	this.r2.setTransform(6.4,43.3,0.238,1,0,0,0,50,11);

	this.r1 = new lib.flcontrolsRadioButton();
	this.r1.setTransform(6.4,13.5,0.238,1,0,0,0,50,11);

	this.addChild(this.r1,this.r2,this.r3,this.r4);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-5.5,2.5,23.8,111.3);


(lib.flcontrolsUIScrollBar = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,false,{},true);

	// assets
	this.instance_113 = new lib.ScrollBar_thumbIcon();
	this.instance_113.setTransform(215.5,86.5,1,1,0,0,0,2.5,4.5);

	this.instance_114 = new lib.ScrollBar_thumbIcon();
	this.instance_114.setTransform(127.5,88.5,1,1,0,0,0,2.5,4.5);

	this.instance_115 = new lib.ScrollBar_thumbIcon();
	this.instance_115.setTransform(40.5,86.5,1,1,0,0,0,2.5,4.5);

	this.instance_116 = new lib.ScrollArrowUp_disabledSkin();
	this.instance_116.setTransform(292.5,25,1,1,0,0,0,7.5,7);

	this.instance_117 = new lib.ScrollArrowDown_disabledSkin();
	this.instance_117.setTransform(292.5,159,1,1,0,0,0,7.5,7);

	this.instance_118 = new lib.ScrollArrowDown_upSkin();
	this.instance_118.setTransform(41.5,159,1,1,0,0,0,7.5,7);

	this.instance_119 = new lib.ScrollThumb_upSkin();
	this.instance_119.setTransform(40,86,1,1,0,0,0,6,26);

	this.instance_120 = new lib.ScrollArrowUp_upSkin();
	this.instance_120.setTransform(41.5,25,1,1,0,0,0,7.5,7);

	this.instance_121 = new lib.ScrollArrowUp_overSkin();
	this.instance_121.setTransform(128.5,27,1,1,0,0,0,7.5,7);

	this.instance_122 = new lib.ScrollThumb_overSkin();
	this.instance_122.setTransform(127,88,1,1,0,0,0,6,26);

	this.instance_123 = new lib.ScrollArrowDown_overSkin();
	this.instance_123.setTransform(128.5,161,1,1,0,0,0,7.5,7);

	this.instance_124 = new lib.ScrollThumb_downSkin();
	this.instance_124.setTransform(215,86,1,1,0,0,0,6,26);

	this.instance_125 = new lib.ScrollArrowDown_downSkin();
	this.instance_125.setTransform(216.5,159,1,1,0,0,0,7.5,7);

	this.instance_126 = new lib.ScrollArrowUp_downSkin();
	this.instance_126.setTransform(216.5,25,1,1,0,0,0,7.5,7);

	this.instance_127 = new lib.ScrollTrack_skin();
	this.instance_127.setTransform(216.5,92,1,1,0,0,0,7.5,74);

	this.instance_128 = new lib.ScrollTrack_skin();
	this.instance_128.setTransform(128.5,94,1,1,0,0,0,7.5,74);

	this.instance_129 = new lib.ScrollTrack_skin();
	this.instance_129.setTransform(41.5,92,1,1,0,0,0,7.5,74);

	this.instance_130 = new lib.ScrollTrack_skin();
	this.instance_130.setTransform(292.5,92,1,1,0,0,0,7.5,74);

	this.instance_131 = new lib.focusRectSkin();
	this.instance_131.setTransform(107.9,234,1,1,0,0,0,41.1,11);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_131},{t:this.instance_130},{t:this.instance_129},{t:this.instance_128},{t:this.instance_127},{t:this.instance_126},{t:this.instance_125},{t:this.instance_124},{t:this.instance_123},{t:this.instance_122},{t:this.instance_121},{t:this.instance_120},{t:this.instance_119},{t:this.instance_118},{t:this.instance_117},{t:this.instance_116},{t:this.instance_115},{t:this.instance_114},{t:this.instance_113}]},1).wait(1));

	// avatar
	this.instance_132 = new lib.Component_avatar();
	this.instance_132.setTransform(7.5,50,0.188,4.545,0,0,0,40,11);

	this.timeline.addTween(cjs.Tween.get(this.instance_132).to({_off:true},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,15,100);


(lib.flcontrolsTextArea = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,false,{},true);

	// Assets
	this.instance_133 = new lib.flcontrolsUIScrollBar();
	this.instance_133.setTransform(173.9,230.4,1,1,0,0,0,7.5,50);

	this.instance_134 = new lib.focusRectSkin();
	this.instance_134.setTransform(140.4,136.4,1,1,0,0,0,41.1,11);

	this.instance_135 = new lib.TextArea_upSkin();
	this.instance_135.setTransform(105.4,44,1,1,0,0,0,76,11);

	this.instance_136 = new lib.TextArea_disabledSkin();
	this.instance_136.setTransform(105.4,91.5,1,1,0,0,0,76,11);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_136},{t:this.instance_135},{t:this.instance_134},{t:this.instance_133}]},1).wait(1));

	// avatar
	this.instance_137 = new lib.Component_avatar();
	this.instance_137.setTransform(50,22,1.25,2,0,0,0,40,11);

	this.timeline.addTween(cjs.Tween.get(this.instance_137).to({_off:true},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,100,44);


(lib.flcontrolsList = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,false,{},true);

	// assets
	this.instance_138 = new lib.flcontrolsScrollBar();
	this.instance_138.setTransform(166.5,183.8,1,1,0,0,0,7.5,50.5);

	this.instance_139 = new lib.focusRectSkin();
	this.instance_139.setTransform(136.1,322.3,1,1,0,0,0,41.1,11);

	this.instance_140 = new lib.flcontrolslistClassesCellRenderer();
	this.instance_140.setTransform(101,277.3,1,1,0,0,0,76,11);

	this.instance_141 = new lib.List_skin();
	this.instance_141.setTransform(121,67.6,0.39,0.39,0,0,0,136,95.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_141},{t:this.instance_140},{t:this.instance_139},{t:this.instance_138}]},1).wait(1));

	// avatar
	this.instance_142 = new lib.Component_avatar();
	this.instance_142.setTransform(62.6,50,1.25,4.545,0,0,0,50,11);

	this.timeline.addTween(cjs.Tween.get(this.instance_142).to({_off:true},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0.1,0,100,100);


(lib.flcontrolsComboBox = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,false,{},true);

	// assets
	this.instance_143 = new lib.flcontrolsList();
	this.instance_143.setTransform(111.4,326.3,1,1,0,0,0,50.1,50);

	this.instance_144 = new lib.flcontrolsTextInput();
	this.instance_144.setTransform(111.4,241.3,1,1,0,0,0,50,11);

	this.instance_145 = new lib.ComboBox_downSkin();
	this.instance_145.setTransform(86.4,112.3,1,1,0,0,0,74,11);

	this.instance_146 = new lib.ComboBox_overSkin();
	this.instance_146.setTransform(86.4,71,1,1,0,0,0,74,11);

	this.instance_147 = new lib.ComboBox_disabledSkin();
	this.instance_147.setTransform(87.3,157.9,1,1,0,0,0,74,11);

	this.instance_148 = new lib.ComboBox_upSkin();
	this.instance_148.setTransform(86.4,34,1,1,0,0,0,74,11);

	this.instance_149 = new lib.focusRectSkin();
	this.instance_149.setTransform(119.3,201.5,1,1,0,0,0,41,11);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_149},{t:this.instance_148},{t:this.instance_147},{t:this.instance_146},{t:this.instance_145},{t:this.instance_144},{t:this.instance_143}]},1).wait(1));

	// avatar
	this.instance_150 = new lib.Component_avatar();
	this.instance_150.setTransform(50,11,1.25,1,0,0,0,40,11);

	this.timeline.addTween(cjs.Tween.get(this.instance_150).to({_off:true},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,100,22);


(lib.RadioButtonAnswer_Mc = function() {
	this.initialize();

	// Layer 1
	this.radiob = new lib.flcontrolsRadioButton();
	this.radiob.setTransform(11.9,12.4,0.21,1,0,0,0,50,11);

	this.QAnswerScrollbar = new lib.flcontrolsUIScrollBar();
	this.QAnswerScrollbar.setTransform(561.5,22,1,0.412,0,0,0,7.5,50);

	this.QAnswer = new cjs.Text("Answer1s\nAnswer1", "15px Verdana", "#4B4B4B");
	this.QAnswer.lineHeight = 17;
	this.QAnswer.lineWidth = 521;
	this.QAnswer.setTransform(28,1,1,0.969);

	// Base
	this.base_6 = new lib.checkboxasnwerbase();
	this.base_6.setTransform(277,22.3,1.117,1,0,0,0,247,22.3);

	this.addChild(this.base_6,this.QAnswer,this.QAnswerScrollbar,this.radiob);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(1,0,568,44.6);


(lib.Question_Mc = function() {
	this.initialize();

	// Layer 3
	this.checkifanswered = new lib.notanswered_mc();
	this.checkifanswered.setTransform(310,298,1,1,0,0,0,186,74);

	// WronFB
	this.Wfeedback = new lib.Wfback();
	this.Wfeedback.setTransform(569,372.5,1,1,0,0,0,260,45.5);

	// RightFback
	this.Rfeedback = new lib.Rfback();
	this.Rfeedback.setTransform(571,373.5,1,1,0,0,0,260,45.5);

	// Scorenmoney
	this.answer = new lib.AnswerMC();
	this.answer.setTransform(314,231.5,1,1,0,0,0,292,127.5);

	this.QTitleScrollbar = new lib.flcontrolsUIScrollBar();
	this.QTitleScrollbar.setTransform(598.5,51.2,1,0.804,0,0,0,7.5,50);

	this.QuestionName = new cjs.Text("Question Title\nQuestion Title\n", "15px Verdana", "#4B4B4B");
	this.QuestionName.lineHeight = 17;
	this.QuestionName.lineWidth = 564;
	this.QuestionName.setTransform(21,11,1,0.969);

	// back
	this.base_7 = new lib.QuestionBASE();
	this.base_7.setTransform(309.9,207.5,1,1,0,0,0,308.9,206.5);

	this.addChild(this.base_7,this.QuestionName,this.QTitleScrollbar,this.answer,this.Rfeedback,this.Wfeedback,this.checkifanswered);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0.1,1,620,533.5);


(lib.NotopicquestionDD = function() {
	this.initialize();

	// Layer 2
	this.showtime_1 = new lib.flcontrolsCheckBox();
	this.showtime_1.setTransform(-218.5,0.4,1.008,1,0,0,0,-1.4,11);

	this.text_13 = new cjs.Text("Enable Timer", "0px Arial", "#515151");
	this.text_13.lineHeight = 14;
	this.text_13.setTransform(-195,-8.3);

	this.showcorrectans = new lib.flcontrolsCheckBox();
	this.showcorrectans.setTransform(-221,25.2,2.799,1,0,0,0,-1.4,11);

	this.text_14 = new cjs.Text("Show correct answer when answered incorrectly", "0px Arial", "#515151");
	this.text_14.lineHeight = 14;
	this.text_14.setTransform(-197.7,16.5);

	this.feedback = new lib.flcontrolsCheckBox();
	this.feedback.setTransform(-105.5,0.4,1.119,1,0,0,0,-1.4,11);

	this.text_15 = new cjs.Text("Show Feedback", "0px Arial", "#515151");
	this.text_15.lineHeight = 14;
	this.text_15.setTransform(-84.7,-8.3);

	this.text_16 = new cjs.Text("Total questions", "0px Arial", "#515151");
	this.text_16.lineHeight = 14;
	this.text_16.setTransform(-79.9,42.8);

	this.totQuestions = new lib.flcontrolsComboBox();
	this.totQuestions.setTransform(7.5,51.5,0.549,1,0,0,0,1.6,11);

	this.swap_1 = new lib.flcontrolsCheckBox();
	this.swap_1.setTransform(1.9,-24.3,0.572,1,0,0,0,-1.4,11);

	this.text_17 = new cjs.Text("Swap", "0px Arial", "#515151");
	this.text_17.lineHeight = 14;
	this.text_17.setTransform(22.7,-33);

	this.text_18 = new cjs.Text("Hint", "0px Arial", "#515151");
	this.text_18.lineHeight = 14;
	this.text_18.setTransform(-84.1,-33);

	this.hint_1 = new lib.flcontrolsCheckBox();
	this.hint_1.setTransform(-104,-35.3,0.51,1);

	this.text_19 = new cjs.Text("50/50", "0px Arial", "#515151");
	this.text_19.lineHeight = 14;
	this.text_19.setTransform(-197.4,-33);

	this.fiftyfifty = new lib.flcontrolsCheckBox();
	this.fiftyfifty.setTransform(-216.3,-24.3,0.579,1,0,0,0,1.5,11);

	this.text_20 = new cjs.Text("Currency", "0px Arial", "#515151");
	this.text_20.lineHeight = 14;
	this.text_20.setTransform(-213.6,42.8);

	this.currencysymbol = new lib.flcontrolsComboBox();
	this.currencysymbol.setTransform(-157.4,51.5,0.574,1,0,0,0,1.5,11);

	// Layer 1
	this.shape_346 = new cjs.Shape();
	this.shape_346.graphics.f("#EDF6FF").s("#D2E0EF").ss(1,1,1).p("A2UoYMAspAAAIAAQxMgspAAAIAAwx").cp();
	this.shape_346.setTransform(-75.3,14.6);

	this.addChild(this.shape_346,this.currencysymbol,this.text_20,this.fiftyfifty,this.text_19,this.hint_1,this.text_18,this.text_17,this.swap_1,this.totQuestions,this.text_16,this.text_15,this.feedback,this.text_14,this.showcorrectans,this.text_13,this.showtime_1);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-218.2,-39,285.9,107.4);


(lib.Gamenameinstructiontextbox = function() {
	this.initialize();

	// Layer 1
	this.gamename = new lib.flcontrolsTextInput();
	this.gamename.setTransform(-160,-27.4,2.464,1,0,0,0,0.4,8.3);

	this.text_21 = new cjs.Text("Instruction ", "0px Arial", "#515151");
	this.text_21.lineHeight = 14;
	this.text_21.setTransform(-223.1,-11.7);

	this.text_22 = new cjs.Text("Game Name", "0px Arial", "#515151");
	this.text_22.lineHeight = 14;
	this.text_22.setTransform(-235.6,-35.7);

	this.gameinstruction = new lib.flcontrolsTextArea();
	this.gameinstruction.setTransform(-160.2,-6.3,2.464,0.917,0,0,0,0.3,0.8);

	this.addChild(this.gameinstruction,this.text_22,this.text_21,this.gamename);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-235.6,-35.7,321,69);


(lib.Editime_MC = function() {
	this.initialize();

	// nextprev
	this.shape_347 = new cjs.Shape();
	this.shape_347.graphics.f("#F0F3F8").s().p("Egx/gCaMBj/AAAIAAE1Mhj/AAAIAAk1").cp();
	this.shape_347.setTransform(320,673.4);

	// Layer 3
	this.gamesettings = new lib.NotopicquestionDD();
	this.gamesettings.setTransform(561.3,51);

	this.game = new lib.Gamenameinstructiontextbox();
	this.game.setTransform(246.7,50.6);

	// swapquestion
	this.shape_348 = new cjs.Shape();
	this.shape_348.graphics.f().s("rgba(153,153,153,0)").ss(1,1,1).p("EgvKgB8MBeVAAAIAAD5MheVAAAIAAj5").cp();
	this.shape_348.setTransform(322,629.5);

	// Layer 2
	this.shape_349 = new cjs.Shape();
	this.shape_349.graphics.f("#FBFBFB").s().p("EgwpgojMBhTAAAMAAABRHMhhTAAAMAAAhRH").cp();
	this.shape_349.setTransform(320,389.3);

	this.shape_350 = new cjs.Shape();
	this.shape_350.graphics.f().s("#D1D5DA").ss(1,1,1).p("EAwqgI+MhhTAAAIAAR9MBhTAAAIAAx9").cp();
	this.shape_350.setTransform(320,65.6);

	this.shape_351 = new cjs.Shape();
	this.shape_351.graphics.f().s("#D8DDE4").ss(1,1,1).p("EAwqgobIAAdJEAwqgLHMAAAAzrMhhTAAAMAAAhRH");
	this.shape_351.setTransform(320,389.3);

	this.shape_352 = new cjs.Shape();
	this.shape_352.graphics.f("#EDEDED").s().p("EAwqgI+IAAR9MhhTAAAIAAx9MBhTAAA").cp();
	this.shape_352.setTransform(320,65.6);

	// BG
	this.shape_353 = new cjs.Shape();
	this.shape_353.graphics.f("#F0F3F8").s().p("EAyAg0BMAAABoDMhj/AAAMAAAhoDMBj/AAA").cp();
	this.shape_353.setTransform(320,325);

	this.addChild(this.shape_353,this.shape_352,this.shape_351,this.shape_350,this.shape_349,this.shape_348,this.game,this.gamesettings,this.shape_347);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,-7.9,640,696.9);


(lib.contents = function() {
	this.initialize();

	// answer
	this.t4 = new lib.flcontrolsTextArea();
	this.t4.setTransform(237.6,145.1,3.99,0.614,0,0,0,50,22);

	this.t3 = new lib.flcontrolsTextArea();
	this.t3.setTransform(237.6,115.1,3.99,0.614,0,0,0,50,22);

	this.t2 = new lib.flcontrolsTextArea();
	this.t2.setTransform(237.6,85.1,3.99,0.614,0,0,0,50,22);

	this.t1 = new lib.flcontrolsTextArea();
	this.t1.setTransform(237.6,55.1,3.99,0.614,0,0,0,50,22);

	// radio
	this.rfamily = new lib.radiobuttonoptions();
	this.rfamily.setTransform(226.1,51.7,1,1,0,0,0,212.3,11.8);

	// background
	this.score_mc = new lib.score_mc();
	this.score_mc.setTransform(502.2,79.7,1,1,0,0,0,16.4,8.1);

	this.hint_2 = new lib.flcontrolsTextArea();
	this.hint_2.setTransform(162.1,186.4,4.371,0.636);

	this.text_23 = new cjs.Text("Hint", "0px Arial", "#525252");
	this.text_23.lineHeight = 14;
	this.text_23.setTransform(5.7,191.3);

	this.resetquestion = new lib.flcontrolsButton();
	this.resetquestion.setTransform(571,317.4,0.57,1,0,0,0,50,11);

	this.text_24 = new cjs.Text("Question", "0px Arial", "#525252");
	this.text_24.lineHeight = 14;
	this.text_24.setTransform(8.7,12.3);

	this.text_25 = new cjs.Text("Time", "11px Arial", "#333333");
	this.text_25.lineHeight = 13;
	this.text_25.setTransform(490.5,46.3);

	this.QuestionName_1 = new lib.flcontrolsTextArea();
	this.QuestionName_1.setTransform(333.5,20.5,5.36,0.614,0,0,0,50,22);

	this.Wfeedback_1 = new lib.flcontrolsTextArea();
	this.Wfeedback_1.setTransform(380.7,281.3,4.372,0.636,0,0,0,50,22);

	this.Rfeedback_1 = new lib.flcontrolsTextArea();
	this.Rfeedback_1.setTransform(380.6,240.4,4.371,0.636,0,0,0,50,22);

	this.text_26 = new cjs.Text("Incorrect Answer Feedback", "0px Arial", "#525252");
	this.text_26.lineHeight = 14;
	this.text_26.setTransform(5.7,274.9);

	this.text_27 = new cjs.Text("Correct Answer Feedback", "0px Arial", "#525252");
	this.text_27.lineHeight = 14;
	this.text_27.setTransform(5.7,231.3);

	this.score = new lib.flcontrolsTextInput();
	this.score.setTransform(543.2,79.7,0.45,0.909,0,0,0,50,11);

	this.time = new lib.flcontrolsTextInput();
	this.time.setTransform(543.2,54.4,0.45,0.909,0,0,0,50,11);

	this.shape_354 = new cjs.Shape();
	this.shape_354.graphics.f().s("#D2E0EF").ss(1,1,1).p("AAAABIAAgB");
	this.shape_354.setTransform(482.7,41.9);

	this.shape_355 = new cjs.Shape();
	this.shape_355.graphics.f("#E2E2E2").s().p("EguWgDCIATAAIAAAAMBKOAAAIAAgJIABAAITRAAIAAGXIzRAAIgBAAMhKOAAAIgTAAIAAgBIhGAAIAAmNIBGAA").cp();
	this.shape_355.setTransform(303.3,198.6);

	this.shape_356 = new cjs.Shape();
	this.shape_356.graphics.lf(["#FEFEFE","#EBEBEB"],[0,1],386.3,-210.7,386.3,-550.9).s().p("Agik4IBFAAIAADZIhFAAIAAjZAgiE5IAAgLIBFAAIAAABIAAAKIhFAA").cp();
	this.shape_356.setTransform(3,188.7);

	this.shape_357 = new cjs.Shape();
	this.shape_357.graphics.lf(["#FEFEFE","#EBEBEB"],[0,1],296.1,-205.7,296.1,-545.9).s().p("AAJhfIAAAAIgRAAIAAjZIARAAIAACTIAABGAAJEvIAAAKIAAAAIgRAAIAAgKIARAA").cp();
	this.shape_357.setTransform(7.5,188.7);

	this.shape_358 = new cjs.Shape();
	this.shape_358.graphics.lf(["#FEFEFE","#EBEBEB"],[0,1],386.3,23.9,386.3,-43).s().p("AgipPIBFAAIAAABIAASeIhFAAIAAyf").cp();
	this.shape_358.setTransform(3,98.1);

	this.shape_359 = new cjs.Shape();
	this.shape_359.graphics.lf(["#FEFEFE","#EBEBEB"],[0,1],55.2,-503.9,55.2,-1147.1).s().p("EAlIgDvIAAA9IAAAJMhKPAAAIAAhGMBKPAAAEglHADwIAAgKMBKPAAAIAAAAIAAAKMhKPAAA").cp();
	this.shape_359.setTransform(246,196);

	this.shape_360 = new cjs.Shape();
	this.shape_360.graphics.lf(["#FEFEFE","#EBEBEB"],[0,1],58.4,17.5,58.4,-49.4).s().p("EAlSACMIAAINIgBAAMhKPAAAIAAiTIgTAAIAAyeMBKZAAAIAAAcIAAACIAAMGIAKAA").cp();
	this.shape_360.setTransform(245.1,105.5);

	this.shape_361 = new cjs.Shape();
	this.shape_361.graphics.f("#E4E4E4").s().p("AJonwIAAPhIAAAAIzPAAIAAgBITPAAIAAmZIzPAAIAAg9IAAoKITPAA").cp();
	this.shape_361.setTransform(545.4,169.4);

	this.shape_362 = new cjs.Shape();
	this.shape_362.graphics.f("#EDEDED").s().p("EgvcADNIAAmZIBGAAIAAABMBdzAAAIAAGYMhe5AAA").cp();
	this.shape_362.setTransform(303.3,280.5);

	this.shape_363 = new cjs.Shape();
	this.shape_363.graphics.f("#EDF6FF").s().p("AcC2BIAAgcIAAg0ITRAAIAAgqIAKAAIAAAAIAAOEIzRAAIgKAAIAAsIIAAgCEgvcASeMBe5AAAIAAFeMhd9AAAIAAgCIg8AAIAAlc").cp();
	this.shape_363.setTransform(303.3,182.8);

	this.shape_364 = new cjs.Shape();
	this.shape_364.graphics.f("#F5F5F5").s().p("EguWgONIAAgBIhGAAIAAmFMBe5AAAIAAEoIgKAAIAAAqIzRAAIAAA0MhKYAAAEguDAOEMBKOAAAIAAgJIABAAITRAAIAAGZMhdzAAAIAAgCIhGAAIAAmOIBGAAIATAAIAAAA").cp();
	this.shape_364.setTransform(303.3,130);

	this.addChild(this.shape_364,this.shape_363,this.shape_362,this.shape_361,this.shape_360,this.shape_359,this.shape_358,this.shape_357,this.shape_356,this.shape_355,this.shape_354,this.time,this.score,this.text_27,this.text_26,this.Rfeedback_1,this.Wfeedback_1,this.QuestionName_1,this.text_25,this.text_24,this.resetquestion,this.text_23,this.hint_2,this.score_mc,this.rfamily,this.t1,this.t2,this.t3,this.t4);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-0.4,0,607.6,336);


(lib.CheckBoxAnswer_Mc = function() {
	this.initialize();

	// Layer 1
	this.checkb = new lib.flcontrolsCheckBox();
	this.checkb.setTransform(15.4,14.4,0.24,1,0,0,0,50,11);

	this.QAnswerScrollbar_1 = new lib.flcontrolsUIScrollBar();
	this.QAnswerScrollbar_1.setTransform(563.5,24,1,0.412,0,0,0,7.5,50);

	this.QAnswer_1 = new cjs.Text("Answer2\nAnswer2", "15px Verdana", "#4B4B4B");
	this.QAnswer_1.lineHeight = 17;
	this.QAnswer_1.lineWidth = 521;
	this.QAnswer_1.setTransform(30,3,1,0.969);

	// Base
	this.base_8 = new lib.checkboxasnwerbase();
	this.base_8.setTransform(278,22.3,1.121,1,0,0,0,247,22.3);

	this.addChild(this.base_8,this.QAnswer_1,this.QAnswerScrollbar_1,this.checkb);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(1,0,570,44.6);

(lib.cell3 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#A43C3C").s("rgba(102,102,102,0.467)").ss(2,1,1).p("AUDmJMgoFAAAQhhAAAAAtIAAK5QAAAtBhAAMAoFAAAQBhAAAAgtIAAq5QAAgthhAAIAAAA").cp();
	this.shape.setTransform(138,39.5);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,276,79);


(lib.cell2 = function() {
	this.initialize();

	// Layer 1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#649054").s("rgba(102,102,102,0.467)").ss(2,1,1).p("AUDmJMgoFAAAQhhAAAAAtIAAK5QAAAtBhAAMAoFAAAQBhAAAAgtIAAq5QAAgthhAAIAAAA").cp();
	this.shape_1.setTransform(138,39.5);

	this.addChild(this.shape_1);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,276,79);


(lib.cell1 = function() {
	this.initialize();

	// Layer 1
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FF9900").s("rgba(102,102,102,0.467)").ss(2,1,1).p("AUDmJMgoFAAAQhhAAAAAtIAAK5QAAAtBhAAMAoFAAAQBhAAAAgtIAAq5QAAgthhAAIAAAA").cp();
	this.shape_2.setTransform(138,39.5);

	this.addChild(this.shape_2);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,276,79);


(lib.cell = function() {
	this.initialize();

	// Layer 1
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f(optionsbgcolor).s("rgba(102,102,102,0.467)").ss(2,1,1).p("AUDmJMgoFAAAQhhAAAAAtIAAK5QAAAtBhAAMAoFAAAQBhAAAAgtIAAq5QAAgthhAAIAAAA").cp();
	this.shape_3.setTransform(138,39.5);

	this.addChild(this.shape_3);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,276,79);

(lib.wrongStat = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,false,{},true);

	// Layer 3
	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.lf(["rgba(255,255,255,0.612)","rgba(255,255,255,0)"],[0,1],0,-18.3,0,17.6).s().p("ATwjZMgnfAAAQhgAAAAAtIAAGGMAqfAAAIAAmGQAAgthgAAIAAAA").cp();
	this.shape_33.setTransform(0.1,-15.5);
	this.shape_33.alpha = 0.6;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_33}]}).to({state:[]},4).to({state:[{t:this.shape_33}]},5).to({state:[]},5).to({state:[{t:this.shape_33}]},5).to({state:[]},5).to({state:[{t:this.shape_33}]},5).wait(21));

	// Layer 1
	this.cellColor = new lib.cell3();
	this.cellColor.setTransform(0,0.1,1,1,0,0,0,138,39.5);

	this.timeline.addTween(cjs.Tween.get(this.cellColor).to({_off:true},4).wait(5).to({_off:false},0).to({_off:true},5).wait(5).to({_off:false},0).to({_off:true},5).wait(5).to({_off:false},0).wait(21));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-137.9,-39.4,276,79);


(lib.correctStatDum = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,false,{},true);

	// Layer 3
	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.lf(["rgba(255,255,255,0.612)","rgba(255,255,255,0)"],[0,1],0,-18.3,0,17.6).s().p("ATwjZMgnfAAAQhgAAAAAtIAAGGMAqfAAAIAAmGQAAgthgAAIAAAA").cp();
	this.shape_34.setTransform(0.1,-15.5);
	this.shape_34.alpha = 0.6;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_34}]}).to({state:[]},4).to({state:[{t:this.shape_34}]},5).to({state:[]},5).to({state:[{t:this.shape_34}]},5).to({state:[]},5).to({state:[{t:this.shape_34}]},5).wait(21));

	// Layer 1
	this.cellColor_1 = new lib.cell2();
	this.cellColor_1.setTransform(0,0.1,1,1,0,0,0,138,39.5);

	this.timeline.addTween(cjs.Tween.get(this.cellColor_1).to({_off:true},4).wait(5).to({_off:false},0).to({_off:true},5).wait(5).to({_off:false},0).to({_off:true},5).wait(5).to({_off:false},0).wait(21));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-137.9,-39.4,276,79);


(lib.correctStat = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,false,{},true);

	// Layer 3
	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.lf(["rgba(255,255,255,0.612)","rgba(255,255,255,0)"],[0,1],0,-18.3,0,17.6).s().p("ATwjZMgnfAAAQhgAAAAAtIAAGGMAqfAAAIAAmGQAAgthgAAIAAAA").cp();
	this.shape_35.setTransform(0.1,-15.5);
	this.shape_35.alpha = 0.6;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_35}]}).to({state:[]},4).to({state:[{t:this.shape_35}]},5).to({state:[]},5).to({state:[{t:this.shape_35}]},5).to({state:[]},5).to({state:[{t:this.shape_35}]},5).wait(21));

	// Layer 1
	this.cellColor_2 = new lib.cell2();
	this.cellColor_2.setTransform(0,0.1,1,1,0,0,0,138,39.5);

	this.timeline.addTween(cjs.Tween.get(this.cellColor_2).to({_off:true},4).wait(5).to({_off:false},0).to({_off:true},5).wait(5).to({_off:false},0).to({_off:true},5).wait(5).to({_off:false},0).wait(21));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-137.9,-39.4,276,79);


(lib.clickedStat = function() {
	this.initialize();

	// Layer 3
	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.lf(["rgba(255,255,255,0.612)","rgba(255,255,255,0)"],[0,1],0,-18.3,0,17.6).s().p("ATwjZMgnfAAAQhgAAAAAtIAAGGMAqfAAAIAAmGQAAgthgAAIAAAA").cp();
	this.shape_36.setTransform(0.1,-15.5);
	this.shape_36.alpha = 0.6;

	// Layer 1
	this.cellColor_3 = new lib.cell1();
	this.cellColor_3.setTransform(0,0.1,1,1,0,0,0,138,39.5);

	this.addChild(this.cellColor_3,this.shape_36);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-137.9,-39.4,276,79);

(lib.button = function() {
	this.initialize();

	// Layer 3
	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.lf(["rgba(255,255,255,0.612)","rgba(255,255,255,0)"],[0,1],0,-18.3,0,17.6).s().p("ATwjZMgnfAAAQhgAAAAAtIAAGGMAqfAAAIAAmGQAAgthgAAIAAAA").cp();
	this.shape_37.setTransform(0.1,-15.5);
	this.shape_37.alpha = 0.6;

	// Layer 1
	this.cellColor_4 = new lib.cell();
	this.cellColor_4.setTransform(0,0.1,1,1,0,0,0,138,39.5);

	this.addChild(this.cellColor_4,this.shape_37);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-137.9,-39.4,276,79);

(lib.ansPanel_mccopy = function() {
	this.initialize();

	// base
	this.base = new lib.button();
	this.base.setTransform(96.5,28.1,0.699,0.712);
	this.base.shadow = new cjs.Shadow("rgba(0,0,0,1)",1,1,4);

	// clicked
	this.clicked = new lib.clickedStat();
	this.clicked.setTransform(96.5,28.1,0.699,0.712);
	this.clicked.shadow = new cjs.Shadow("rgba(0,0,0,1)",1,1,4);

	// correct
	this.correct = new lib.correctStat();
	this.correct.setTransform(96.5,28.1,0.699,0.712);
	this.correct.shadow = new cjs.Shadow("rgba(0,0,0,1)",1,1,4);

	// showcorrect
	this.showcorrect = new lib.correctStatDum();
	this.showcorrect.setTransform(96.5,28.1,0.699,0.712);
	this.showcorrect.shadow = new cjs.Shadow("rgba(0,0,0,1)",1,1,4);

	// wrong
	this.wrong = new lib.wrongStat();
	this.wrong.setTransform(96.5,28.1,0.699,0.712);
	this.wrong.shadow = new cjs.Shadow("rgba(0,0,0,1)",1,1,4);

	this.addChild(this.wrong,this.showcorrect,this.correct,this.clicked,this.base);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,192.9,56.2);


// symbols:
(lib.tabPanelLevel = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,false,{},true);

	// Layer 6
	this.cup_mc = new lib.cup_mc();
	this.cup_mc.setTransform(91.9,12.1,1,1,0,0,0,76.9,7.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.cup_mc}]}).wait(4));

	// Layer 5
	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("rgba(102,255,0,0.4)").s().p("AOWAAQgyAAgjgiQgkgjAAgxI45AAQAAAxgjAjQgkAigyAAIAAAAQAyAAAkAiQAjAjAAAyIY5AAQAAgyAkgjQAjgiAyAAIAAAA").cp();
	this.shape_86.setTransform(91.8,12.1);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("rgba(255,44,32,0.4)").s().p("AOWAAQgyAAgjgiQgkgjAAgxI45AAQAAAxgjAjQgkAigyAAIAAAAQAyAAAkAiQAjAjAAAyIY5AAQAAgyAkgjQAjgiAyAAIAAAA").cp();
	this.shape_87.setTransform(91.8,12.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_86}]},2).to({state:[{t:this.shape_87}]},1).wait(1));

	// Layer 3
	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f("#FFFFFF").s().p("AgxAAQAAgTAPgPQAPgOATAAQAVAAAOAOQAPAPAAATQAAAVgPAOQgOAPgVAAQgTAAgPgPQgPgOAAgVIAAAA").cp();
	this.shape_88.setTransform(21,12);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f("#E6E6E6").s().p("AgxAAQAAgTAPgPQAPgOATAAQAVAAAOAOQAPAPAAATQAAAVgPAOQgOAPgVAAQgTAAgPgPQgPgOAAgVIAAAA").cp();
	this.shape_89.setTransform(21,12);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_88}]},1).to({state:[{t:this.shape_89}]},1).wait(2));

	// Layer 1
	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f("#CCCCCC").s("rgba(51,51,51,0.51)").ss(1,1,1).p("AOWAAQgyAAgjgiQgkgjAAgxI45AAQAAAxgjAjQgkAigyAAIAAAAQAyAAAkAiQAjAjAAAyIY5AAQAAgyAkgjQAjgiAyAAIAAAA").cp();
	this.shape_90.setTransform(91.8,12.1);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f("#FF9900").s("rgba(51,51,51,0.51)").ss(1,1,1).rr(-109.65,-14.55,219.3,29.1,-14.5);
	this.shape_91.setTransform(91.8,12,0.838,0.821);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f("#FFFFFF").s("rgba(51,51,51,0.51)").ss(1,1,1).p("AMdh2I45AAQAAAxgjAjQgkAigyAAIAAAAQAyAAAkAiQAjAjAAAyIY5AAQAAgyAkgjQAjgiAyAAIAAAAQgyAAgjgiQgkgjAAgxIAAAA").cp();
	this.shape_92.setTransform(91.8,12);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_90}]}).to({state:[{t:this.shape_91}]},1).to({state:[{t:this.shape_92}]},1).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0.2,183.8,23.9);

(lib.cup_mc = function() {
	this.initialize();

	// Layer 1
	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#663300").ss(0.5,1,1).p("AAHACQABAAACgBQALgBAJgHQABgCABAAQABgCACgCQAPgRAAgYQAAgGgBgLQAAACgCgDIheAAQAAADgBgDQgBAMAAAGQAAAYAPARQABACABABQAKAKAOACIAPAAAguADIANgNQgIgCgHgEQgVgKAAgPQAAgOAVgRAAegHIAOALAAxhHQAVAQAAAOQAAAPgVAKQgIAEgJADAgIACQAGAagGAZIgkAPQAUAFAYAAQAYAAAVgFIgmgPQgGgZAGga");
	this.shape_6.setTransform(146.7,7.4);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.rf(["#FFFFFF","#FFCC00","#FF9D00"],[0.267,0.835,1],0,2.6,0,0,2.6,6.1).s().p("AAHgiQgGAZAGAYIAmAPQgUAFgZAAQgYAAgUgFIAlgPQAFgYgFgZIAOAA").cp();
	this.shape_7.setTransform(146.7,11.2);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.rf(["#FFFFFF","#FFCC00","#FF9D00"],[0.267,0.835,1],-0.2,-1.7,0,-0.2,-1.7,6.1).s().p("AAHAmIgPAAQgOgDgKgLQgBgBgBgCQgPgRAAgWQAAgGABgNQABAEAAgEIBeAAQACAEAAgDQABAMAAAGQAAAWgPARQgCACgBABQgBABgBABQgJAIgLADQgCAAgBABIAAAA").cp();
	this.shape_8.setTransform(146.7,3.8);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f().s("#663300").ss(0.5,1,1).p("AAHACQABAAACgBQALgBAJgHQABgCABAAQABgCACgCQAPgRAAgYQAAgGgBgLQAAACgCgDIheAAQAAADgBgDQgBAMAAAGQAAAYAPARQABACABABQAKAKAOACIAPAAAAxhHQAVAQAAAOQAAAPgVAKQgIAEgJADAguADIANgNQgIgCgHgEQgVgKAAgPQAAgOAVgRAgIACQAGAagGAZIgkAPQAUAFAYAAQAYAAAVgFIgmgPQgGgZAGgaAAegHIAOAL");
	this.shape_9.setTransform(7,7.4);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.rf(["#FFFFFF","#FFCC00","#FF9D00"],[0.267,0.835,1],0,2.6,0,0,2.6,6.1).s().p("AAHgiQgGAZAGAYIAmAPQgUAFgZAAQgYAAgUgFIAkgPQAGgYgGgZIAPAA").cp();
	this.shape_10.setTransform(7,11.2);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.rf(["#FFFFFF","#FFCC00","#FF9D00"],[0.267,0.835,1],-0.2,-1.7,0,-0.2,-1.7,6.1).s().p("AAHAmIgPAAQgOgDgKgLQgBgBgBgCQgPgRAAgWQAAgGABgNQABAEAAgEIBeAAQACAEAAgDQABAMAAAGQAAAWgPARQgCACgBABQgBABgBABQgJAIgLADQgCAAgBABIAAAA").cp();
	this.shape_11.setTransform(7,3.8);

	this.addChild(this.shape_11,this.shape_10,this.shape_9,this.shape_8,this.shape_7,this.shape_6);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,153.8,14.8);


(lib.tabPanel = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,false,{},true);

	// Layer 3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgxAAQAAgTAPgPQAPgOATAAQAVAAAOAOQAPAPAAATQAAAVgPAOQgOAPgVAAQgTAAgPgPQgPgOAAgVIAAAA").cp();
	this.shape.setTransform(21,12);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape}]},1).wait(3));

	// Layer 5
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(0,153,0,0.4)").s().p("AOWAAQgyAAgjgiQgkgjAAgxI45AAQAAAxgjAjQgkAigyAAIAAAAQAyAAAkAiQAjAjAAAyIY5AAQAAgyAkgjQAjgiAyAAIAAAA").cp();
	this.shape_1.setTransform(91.8,12.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("rgba(255,44,32,0.4)").s().p("AOWAAQgyAAgjgiQgkgjAAgxI45AAQAAAxgjAjQgkAigyAAIAAAAQAyAAAkAiQAjAjAAAyIY5AAQAAgyAkgjQAjgiAyAAIAAAA").cp();
	this.shape_2.setTransform(91.8,12.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_1}]},2).to({state:[{t:this.shape_2}]},1).wait(1));

	// Layer 1
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s("rgba(51,51,51,0.51)").ss(1,1,1).p("AMdh2I45AAQAAAxgjAjQgkAigyAAIAAAAQAyAAAkAiQAjAjAAAyIY5AAQAAgyAkgjQAjgiAyAAIAAAAQgyAAgjgiQgkgjAAgxIAAAA").cp();
	this.shape_3.setTransform(91.8,12.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FF9900").s("rgba(51,51,51,0.51)").ss(1,1,1).rr(-109.65,-14.55,219.3,29.1,-14.5);
	this.shape_4.setTransform(91.8,12,0.838,0.821);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#CCCCCC").s("rgba(51,51,51,0.51)").ss(1,1,1).rr(-109.65,-14.55,219.3,29.1,-14.5);
	this.shape_5.setTransform(91.8,12,0.838,0.821);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3}]}).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5}]},1).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0.2,183.8,23.9);

(lib.blankmc = function() {
	this.initialize();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,0,0);


})(lib = lib||{}, images = images||{}, createjs = createjs||{});
var lib, images, createjs;