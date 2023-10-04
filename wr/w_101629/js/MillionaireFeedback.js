(function (lib, img, cjs) {

var p; // shortcut to reference prototypes
var gameTitle,startbgcolor,endbgcolor,crctbgcolor,crctfontcolor,wrngbgcolor,wrngfontcolor,hintbgcolor,hintfontcolor,instbgcolor,instfontcolor;

// stage content:
(lib.MillionaireFeedback = function(gameTitleName,startbghex,endbghex,crctbghex,crctfonthex,wrngbghex,wrngfonthex,instbghex,instfonthex) {
	this.initialize();
	
	startbgcolor = startbghex;
	endbgcolor = endbghex;
	crctbgcolor = crctbghex;
	crctfontcolor = crctfonthex;
	wrngbgcolor = wrngbghex;
	wrngfontcolor = wrngfonthex;
	instbgcolor = instbghex;
	instfontcolor = instfonthex;
	gameTitle = gameTitleName;
	
	// Layer 1
	this.runtime = new lib.feedbackMc();
	this.runtime.setTransform(319.8,239.8,1,1,0,0,0,319.8,239.8);

	this.addChild(this.runtime);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,640,479.5);


// symbols:
(lib.gridinitialpngcopy = function() {
	this.initialize(img.gridinitialpngcopy);
}).prototype = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,800,566);


(lib.timeup = function() {
	this.initialize();

	// Layer 1
	this.text = new cjs.Text(ID_TimeUp, "38px Arial Rounded MT Bold", "#FFFFFF");
	this.text.textAlign = "center";
	this.text.lineHeight = 52;
	this.text.setTransform(167.1,20);

	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#CCCCCC").ss(2,1,0).p("A6ZAAMA0zAAA");
	this.shape.setTransform(169.1,64.7);

	this.addChild(this.shape,this.text);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,338.2,64.7);


(lib.endScreenBase = function() {
	this.initialize();

	// Layer 1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f(endbgcolor).s().p("APdzCIAyAUICqgKIAogeIBuAUQATAhApgiQAQgOAOgFIAyAKIBGgUQBSAtBtgXQAUgDATgJQAZAQAtAAQAcAAACgaICWAKIAegUIBQAAQASgUAhgEQAEgBAFAFQAYAfBDgHQAVgDgCgVIBQAAIAUAyQgPAngZAfQgPARgFAXQBND0hAEwQgJArAGAxIAoAyIAKD6IgUAeIgKB4IgUAUQgIA7gGBFQgDAcAbgIQAeEDhCDiQgCAHAIAcIAyC0IgKCMQgVAdgXANQgMAHAGAVIAUAoIAAAoIAUAUQAJAZgIAgQgBADgKAAQAIAlgUAHQgDABgFgFQhrgciFgCQgZAAgZAAIgeAUIhagKQiEgsjGATQgZAFgZAAIgUAUIgoAAIhVA7IgzAAIgFgBQgCAAgCgBIgZgHIgogeQkYgBkZgOQgxgCgygDQgjgBgjABIgoAUIgKgoIi+AAQijBfkJhVIgoAeIiWAAQkngilFAOQgPAAgPAAQgfAjgdgPQgqhHhuAiQgUAGgSALIh2gDQgMgOgPgNIjIAKQAAgFABgFQABgbgWgDQgFAAgEADQgjANgaAYIjwAAIAAAZIhfAFIAAhkIizAKIhGAoQACAqgqgCQgKAFgKAFIhGgeQgNgRgGggQgBgGgKgFIA8iWIgygyIAAhkIgegyQgFgtAUgUQAJgJAQgQQgBgGgBgGIAAgEQgUiyAniTQAHgYAGgZIgehaIgegeIAAhQIAehaQAEgagXgOQgGgDgFgFIAAgyIgUgeIAAg3IAZgZIAKiqIAegUQAAgFAAgFQAAhIgcgsQABgEAAgFIAbgtIAAh4IAegeIAAh4IgUgUIgohtQgDhAgChDIgegeQgPgiAEgYQABgCAKAAIgKhGIgUgbIAAgLIAKAIICCAKQAhgHALgXIBIAAQANATAUAMQATAMAWgDIA7gUIAoAUICXAAIBUAeIAogUQAyASA8gIIAoAoQAXgIAPgXQACgEAAgFIEYAKIAeAUIB4AAIAeAeQBQgGBFAVQABAAAAAFIAKgyICqAKQAVgdACgyIACgBQAQABAPACIAEAHQADgDAEgDQA3AFA3AEQAMAIAUAEQAGAAAFAFIB4AKIAUAUIC+AUIA8goICKAKIBkgeIAvgaQAZgDAZgDIANAgIAyAUQAIAhAgAbIAUgyQAlglArgDQAFAAAFAAQAsAMAughQAFgEAFgFIAAAAIAsAAQAIAHAIAIQAFAFAAAKIA8AeIC0AKQBAgiBMgGQAFAAAFAAIAUAo").cp();

	this.addChild(this.shape_1);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-242.9,-128.9,486,258);


(lib.incrctTextPanel = function() {
	this.initialize();

	// Layer 1
	this.txt = new cjs.Text("Incorrect text will be displayed here.", "12px Tahoma", wrngfontcolor);
	this.txt.lineHeight = 15;
	this.txt.lineWidth = 355;
	this.txt.setTransform(21,11,1,0.969);

	this.addChild(this.txt);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(21,11,359,102);


(lib.crctTextPanel = function() {
	this.initialize();

	// Layer 1
	this.txt_1 = new cjs.Text("Correct text will be displayed here.", "12px Tahoma", crctfontcolor);
	this.txt_1.lineHeight = 15;
	this.txt_1.lineWidth = 355;
	this.txt_1.setTransform(21,11,1,0.969);

	this.addChild(this.txt_1);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(21,11,359,102);


(lib.LifeLineCheckTxt = function() {
	this.initialize();

	// Layer 1
	this.text_1 = new cjs.Text(ID_Areyousure, "15px Tahoma", instfontcolor);
	this.text_1.textAlign = "center";
	this.text_1.lineHeight = 17;
	this.text_1.setTransform(168.6,0,1,0.969);

	this.addChild(this.text_1);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(27.5,0,286.3,21.4);


(lib.Millionaire = function() {
	this.initialize();

	// Layer 1
	this.txt_2 = new cjs.Text(gameTitle, "50px Arial", "#FFFFFF");
	this.txt_2.textAlign = "center";
	this.txt_2.lineHeight = 52;
	this.txt_2.lineWidth = 250;
	this.txt_2.setTransform(-1.9,-71.7);

	this.addChild(this.txt_2);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-126.9,-71.7,254,66.9);


(lib.gameover = function() {
	this.initialize();

	// Layer 1
	this.text_2 = new cjs.Text(ID_GameOver, "38px Arial Rounded MT Bold", "#FFFFFF");
	this.text_2.textAlign = "center";
	this.text_2.lineHeight = 52;
	this.text_2.setTransform(167.1,20);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#CCCCCC").ss(2,1,0).p("A6ZAAMA0zAAA");
	this.shape_2.setTransform(169.1,64.7);

	this.addChild(this.shape_2,this.text_2);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,338.2,64.7);


(lib.crctWrngbase = function() {
	this.initialize();

	// Layer 1
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("rgba(255,255,255,0.498)").s().p("EAw5AhbMhhxAAAMAAAhC1MBhxAAAMAAABC1").cp();

	this.addChild(this.shape_3);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-312.9,-213.9,626,428);


(lib.congratulations = function() {
	this.initialize();

	// Layer 1
	this.text_3 = new cjs.Text(ID_Congratulations, "38px Arial", "#FFFFFF");
	this.text_3.textAlign = "center";
	this.text_3.lineHeight = 52;
	this.text_3.setTransform(195,20);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#CCCCCC").ss(2,1,0).p("A8qAAMA5VAAA");
	this.shape_4.setTransform(195,64.7);

	this.addChild(this.shape_4,this.text_3);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(11.5,0,367,64.7);


(lib.border = function() {
	this.initialize();

	// Layer 1
	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#666666").ss(2,1,1).p("EAo8gToMhR3AAAQjFAAAACPMAAAAizQAACPDFAAMBR3AAAQDFAAAAiPMAAAgizQAAiPjFAAIAAAA").cp();
	this.shape_5.setTransform(281.8,125.8);

	this.addChild(this.shape_5);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,563.6,251.6);


(lib.bcgstart = function() {
	this.initialize();

	// Layer 1
	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f(startbgcolor).s().p("EAl9ganQgPAngZAfQgPARgFAXQBND0hAEwQgJArAGAxIAoAyIAKD6IgUAeIgKB4IgUAUQgIA9gGBFQgDAcAbgIQAGAyACAyQAEJXgGJDIgIAAQgMBPgWBMQgCAHAIAcIAyC0IgKCMQgVAdgXANQgMAHAGAVIAUAoIAAAoIAUAUQAJAZgIAgQgBADgKAAQAIAlgUAHQgDABgFgFQhrgciFgCQgZAAgZAAIgeAUIhagKQiEgsjGATQgZAFgZAAIgUAUIgoAAIhVA7IgzAAIgFgBQgCAAgCgBIgZgHIgogeQkYgBkZgOQgxgCgygDQgjgBgjABIgoAUIgKgoIi+AAQijBfkJhVIgoAeIiWAAQkngilFAOQgPAAgPAAQgfAjgdgPQgqhHhuAiQgUAGgSALIh2gDQgMgOgPgNIjIAKQAAgFABgFQABgbgWgDQgFAAgEADQgjANgaAYIjwAAIAAAZIhfAFIAAhkIizAKIhGAoQACAqgqgCQgKAFgKAFIhGgeQgNgRgGggQgBgGgKgFIA8iWIgygyIAAhkIgegyQgFgtAUgUQAJgJAQgQQgBgGgBgGIAAgEQgBgDAAgCQAAgDAAgCQgKhkAJhaQAEg2AMgyIACAAQACgrABgrQADhVADhaQAEhnADhrIgapgQAAgCAAgDQAAgBgBgCIAAgLIAAAAIgDgKIgegeIAAhQIAehaQAEgagXgQQgGgDgFgFIAAgyIgUgeIAAg3IAZgZIAKiqIAegUQAAgFAAgFQAAhIgcgsQABgEAAgFIAbgtIAAh4IAegeIAAh4IgUgUIgohtQgDhAgChDIgegeQgPgiAEgYQABgCAKAAIgKhGIgUgbIAAgLIAKAIICCAKQAhgHALgXIBIAAQANATAUAMQATAMAWgDIA7gUIAoAUICXAAIBUAeIAogUQAyASA8gIIAoAoQAXgIAPgXQACgEAAgFIEYAKIAeAUIB4AAIAeAeQBQgGBFAVQABAAAAAFIAKgyICqAKQAVgdACgyIACgBQAQABAPACIAEAHQADgDAEgDQA3AFA3AEQAMAIAUAEQAGAAAFAFIB4AKIAUAUIC+AUIA8goICKAKIBkgeIAvgaQAZgDAZgDIANAgIAyAUQAIAhAgAbIAUgyQAlglArgDQAFAAAFAAQAsAMAughQAFgEAFgFIAAAAIAsAAQAIAHAIAIQAFAFAAAKIA8AeIC0AKQBAgiBMgGQAFAAAFAAIAUAoIAyAUICqgKIAogeIBuAUQATAhApgiQAQgOAOgFIAyAKIBGgUQBSAtBtgXQAUgDATgJQAZAQAtAAQAcAAACgaICWAKIAegUIBQAAQASgUAhgEQAEgBAFAFQAYAfBDgHQAVgDgCgVIBQAAIAUAy").cp();
	this.shape_6.setTransform(247.5,184.5);

	this.addChild(this.shape_6);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(4.5,8,486,353);

(lib.baseCell = function() {
	this.initialize();

	// Layer 1
	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f(instbgcolor).s().p("EAo8gToMhR3AAAQjFAAAACPMAAAAizQAACPDFAAMBR3AAAQDFAAAAiPMAAAgizQAAiPjFAAIAAAA").cp();
	this.shape_7.setTransform(281.8,125.8);

	this.addChild(this.shape_7);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,563.6,251.6);


(lib.crctbaseCell = function() {
	this.initialize();

	// Layer 1
	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f(crctbgcolor).s().p("EAo8gToMhR3AAAQjFAAAACPMAAAAizQAACPDFAAMBR3AAAQDFAAAAiPMAAAgizQAAiPjFAAIAAAA").cp();
	this.shape_7.setTransform(281.8,125.8);

	this.addChild(this.shape_7);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,563.6,251.6);

(lib.incrctbaseCell = function() {
	this.initialize();

	// Layer 1
	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f(wrngbgcolor).s().p("EAo8gToMhR3AAAQjFAAAACPMAAAAizQAACPDFAAMBR3AAAQDFAAAAiPMAAAgizQAAiPjFAAIAAAA").cp();
	this.shape_7.setTransform(281.8,125.8);

	this.addChild(this.shape_7);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,563.6,251.6);


(lib.TextArea_upSkin = function() {
	this.initialize();

	// skin
	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("ALuBkI3bAAIAAjHIXbAAIAADH").cp();
	this.shape_8.setTransform(76,11);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#6D6F70").s().p("ALzAFI3bAAIgKAAIAAgJIXlAAIAAAJ").cp();
	this.shape_9.setTransform(75.5,0.5);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#D3D5D6").s().p("ArtgEIXbAAIAAAJI3bAAIAAgJ").cp();
	this.shape_10.setTransform(76,21.5);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#C9CBCC").s().p("ALuBuIAAgKIAAjHIAAgKIAKAAIAADbIgKAAArtBuIgKAAIAAjRIAKAAIAADHIAAAK").cp();
	this.shape_11.setTransform(76,11);

	this.addChild(this.shape_11,this.shape_10,this.shape_9,this.shape_8);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,152,22);


(lib.TextArea_disabledSkin = function() {
	this.initialize();

	// skin
	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("ALuBkI3bAAIAAjHIXbAAIAADH").cp();
	this.shape_12.setTransform(76,11);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("rgba(211,213,214,0.298)").s().p("ArtgEIXbAAIAAAJI3bAAIAAgJ").cp();
	this.shape_13.setTransform(76,21.5);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("rgba(109,111,112,0.298)").s().p("AroAFIgKAAIAAgJIXlAAIAAAJI3bAA").cp();
	this.shape_14.setTransform(75.5,0.5);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("rgba(201,203,204,0.298)").s().p("ALuBkIAAjHIAAgKIAKAAIAADbIgKAAIAAgKAr3hjIAKAAIAADHIAAAKIgKAAIAAjR").cp();
	this.shape_15.setTransform(76,11);

	this.addChild(this.shape_15,this.shape_14,this.shape_13,this.shape_12);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,152,22);


(lib.focusRectSkin = function() {
	this.initialize();

	// border
	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.lf(["#0075BF","#009DFF"],[0,1],0,-10.7,0,10.8).s().p("AGQBGQAAAdgdABIrlAAQgdgBAAgdIAAiLQAAgdAdgBILlAAQAdABAAAdIAACLAGahFQAAgogoAAIrjAAQgoAAAAAoIAACLQAAAoAoAAILjAAQAoAAAAgoIAAiL").cp();
	this.shape_16.setTransform(41,11);

	this.addChild(this.shape_16);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0.1,0,82,22);


(lib.arrowIcon = function() {
	this.initialize();

	// icon
	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#000000").s().p("AAjgTIhFAAIAAAKIAKAAIAAAJIAKAAIAAAKIAKAAIAAAKIAJAAIAAgKIAKAAIAAgKIAKAAIAAgJIAKAAIAAgK").cp();
	this.shape_17.setTransform(3.5,2);

	this.addChild(this.shape_17);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,7,4);


(lib.ScrollTrack_skin = function() {
	this.initialize();

	// skin
	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#585F63").s().p("AAFrjIAAXHIgJAAIAA3HIAJAA").cp();
	this.shape_18.setTransform(0.5,74);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.lf(["#94999B","#E7E7E7"],[0,1],-6.4,7,7.5,6.8).s().p("ABBrjIAAXHIiBAAIAA3HICBAA").cp();
	this.shape_19.setTransform(7.5,74);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#585F63").s().p("AAFrjIAAXHIgJAAIAA3HIAJAA").cp();
	this.shape_20.setTransform(14.5,74);

	this.addChild(this.shape_20,this.shape_19,this.shape_18);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,15,148);


(lib.ScrollThumb_upSkin = function() {
	this.initialize();

	// skin
	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.lf(["#E6E6E6","#FFFFFF"],[0,1],26.4,16,26.4,-5.9).s().p("AA3jaIAAG1QAAAegdABIhQgBIAAnyIBQABQAdABAAAdIAAAA").cp();
	this.shape_21.setTransform(6.5,26);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.lf(["#585F63","#B7BABC"],[0,1],-4.9,2.9,-4.9,-19).s().p("AA8gbIAAARQAAAmgoAAIhPAAIAAgKIBQAAQAdgBAAgbIAAgRIAKAA").cp();
	this.shape_22.setTransform(7,49.2);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.lf(["#585F63","#B7BABC"],[0,1],-4.9,29.1,-4.9,7.1).s().p("AA8DnIgKAAIAAmlQAAgdgdgBIhQAAIAAgKIBPAAQAoAAAAAoIAAGl").cp();
	this.shape_23.setTransform(7,23.2);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("rgba(255,0,0,0)").s().p("AAPkDIAAIHIgdAAIAAoHIAdAA").cp();
	this.shape_24.setTransform(14.5,26);

	this.addChild(this.shape_24,this.shape_23,this.shape_22,this.shape_21);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(1,0,15,52);


(lib.ScrollThumb_overSkin = function() {
	this.initialize();

	// skin
	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("rgba(255,0,0,0)").s().p("AAPkDIAAIHIgdAAIAAoHIAdAA").cp();
	this.shape_25.setTransform(14.5,26);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.lf(["#0075BF","#009DFF"],[0,0.992],-4.9,2.9,-4.9,-19).s().p("AA8gbIAAARQAAAmgoAAIhPAAIAAgKIBQAAQAdgBAAgbIAAgRIAKAA").cp();
	this.shape_26.setTransform(7,49.2);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.lf(["#0075BF","#009DFF"],[0,0.992],-4.9,29.1,-4.9,7.1).s().p("AA8DnIgKAAIAAmlQAAgdgdgBIhQAAIAAgKIBPAAQAoAAAAAoIAAGl").cp();
	this.shape_27.setTransform(7,23.2);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.lf(["#E6E6E6","#FFFFFF"],[0,1],26.4,16,26.4,-5.9).s().p("AAaj5QAdABAAAdIAAG2QAAAegdABIhQAAIAAnzIBQAA").cp();
	this.shape_28.setTransform(6.5,26);

	this.addChild(this.shape_28,this.shape_27,this.shape_26,this.shape_25);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(1,0,15,52);


(lib.ScrollThumb_downSkin = function() {
	this.initialize();

	// skin
	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.lf(["#99D7FE","#D9F0FE"],[0,1],26.4,16,26.4,-5.9).s().p("AA3DbQAAAegdABIhQgBIAAnyIBQABQAdABAAAdIAAG1").cp();
	this.shape_29.setTransform(6.5,26);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.lf(["#0075BF","#009DFF"],[0,0.992],-4.9,2.9,-4.9,-19).s().p("AA8gbIAAARQAAAmgoAAIhPAAIAAgKIBQAAQAdgBAAgbIAAgRIAKAA").cp();
	this.shape_30.setTransform(7,49.2);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.lf(["#0075BF","#009DFF"],[0,0.992],-4.9,29.1,-4.9,7.1).s().p("AA8DnIgKAAIAAmlQAAgdgdgBIhQAAIAAgKIBPAAQAoAAAAAoIAAGl").cp();
	this.shape_31.setTransform(7,23.2);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("rgba(255,0,0,0)").s().p("AAPkDIAAIHIgdAAIAAoHIAdAA").cp();
	this.shape_32.setTransform(14.5,26);

	this.addChild(this.shape_32,this.shape_31,this.shape_30,this.shape_29);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(1,0,15,52);


(lib.ScrollBar_thumbIcon = function() {
	this.initialize();

	// Layer 1
	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#5A6165").s().p("AAZAFIgxAAIAAgJIAxAAIAAAJ").cp();
	this.shape_33.setTransform(2.5,2.5);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#5A6165").s().p("AAZAFIgxAAIAAgJIAxAAIAAAJ").cp();
	this.shape_34.setTransform(2.5,0.5);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#5A6165").s().p("AAZAFIgxAAIAAgJIAxAAIAAAJ").cp();
	this.shape_35.setTransform(2.5,4.5);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#5A6165").s().p("AAZAFIgxAAIAAgJIAxAAIAAAJ").cp();
	this.shape_36.setTransform(2.5,6.5);

	this.addChild(this.shape_36,this.shape_35,this.shape_34,this.shape_33);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,5,7);


(lib.ScrollArrowUp_disabledSkin = function() {
	this.initialize();

	// skin
	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.lf(["rgba(238,238,238,0)","rgba(255,255,255,0.298)"],[0,1],-0.9,3.5,-0.9,-3.1).s().p("AhAgfICBAAIAAA/IiBAAIAAg/").cp();
	this.shape_37.setTransform(7.5,4);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.lf(["rgba(91,93,94,0.298)","rgba(183,186,188,0.298)"],[0,1],1,5.9,1,-6.9).s().p("AhAg7ICBAAIAAB3IiBAAIAAh3ABLhFIiVAAIAACLICVAAIAAiL").cp();
	this.shape_38.setTransform(7.5,7);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.lf(["#E6E6E6","#FFFFFF"],[0,1],-1.4,7,-1.4,-6.5).s().p("ABBA8IiBAAIAAh3ICBAAIAAB3").cp();
	this.shape_39.setTransform(7.5,7);

	this.addChild(this.shape_39,this.shape_38,this.shape_37);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,15,14);


(lib.ScrollArrowDown_disabledSkin = function() {
	this.initialize();

	// skin
	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.lf(["rgba(238,238,238,0)","rgba(255,255,255,0.298)"],[0,1],-0.9,3.5,-0.9,-3.1).s().p("AhAgfICBAAIAAA/IiBAAIAAg/").cp();
	this.shape_40.setTransform(7.5,4);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.lf(["rgba(91,93,94,0.298)","rgba(183,186,188,0.298)"],[0,1],1,5.9,1,-6.9).s().p("AhAg7ICBAAIAAB3IiBAAIAAh3ABLhFIiVAAIAACLICVAAIAAiL").cp();
	this.shape_41.setTransform(7.5,7);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.lf(["#E6E6E6","#FFFFFF"],[0,1],-1.4,7,-1.4,-6.5).s().p("ABBA8IiBAAIAAh3ICBAAIAAB3").cp();
	this.shape_42.setTransform(7.5,7);

	this.addChild(this.shape_42,this.shape_41,this.shape_40);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,15,14);


(lib.Button_upSkin = function() {
	this.initialize();

	// highlight
	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.lf(["rgba(204,204,204,0)","rgba(255,255,255,0.298)"],[0,1],40.6,5.5,40.6,-4.9).s().p("ADIg1IAABsImOAAIAAhPQgBgeAfABIFwAA").cp();
	this.shape_43.setTransform(21,6.5);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.lf(["rgba(204,204,204,0)","rgba(255,255,255,0.298)"],[0,1],19.5,1.6,19.5,-4.8).s().p("AjHA3IAAhsIFwAAQAegBAAAeIABBPImPAA").cp();
	this.shape_44.setTransform(61,6.5);

	// fill
	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.lf(["rgba(204,204,204,0.4)","rgba(255,255,255,0.6)"],[0,1],-9.8,11,-9.8,-10.9).s().p("ADIhjIAADHIlyAAQgdgBAAgdIAAiLQAAgdAdgBIFyAA").cp();
	this.shape_45.setTransform(21,11);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.lf(["rgba(204,204,204,0.4)","rgba(255,255,255,0.6)"],[0,1],10,11,10,-10.9).s().p("AjGBkIAAjHIFxAAQAcABAAAdIAACLQAAAdgcABIlxAA").cp();
	this.shape_46.setTransform(61,11);

	// border
	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.lf(["#585F63","#B7BABC"],[0,1],-9.3,11,-9.3,-10.9).s().p("ADNBuIlwAAQgpAAAAgoIAAiLQAAgoApAAIFwAAIAAAKIlyAAQgdABAAAdIAACLQAAAdAdABIFyAAIAAAK").cp();
	this.shape_47.setTransform(20.5,11);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.lf(["#585F63","#B7BABC"],[0,1],9.5,11,9.5,-10.9).s().p("AjMBuIAAgKIFyAAQAdgBAAgdIAAiLQAAgdgdgBIlyAAIAAgKIFxAAQAoAAAAAoIAACLQAAAogoAAIlxAA").cp();
	this.shape_48.setTransform(61.5,11);

	this.addChild(this.shape_48,this.shape_47,this.shape_46,this.shape_45,this.shape_44,this.shape_43);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,82,22);


(lib.Button_selectedUpSkin = function() {
	this.initialize();

	// fill
	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.lf(["rgba(204,204,204,0.4)","rgba(204,204,204,0.6)"],[0,1],19,11,19,-10.9).s().p("AhsBkIAAjHIC8AAQAdABAAAdIAACLQAAAdgdABIi8AA").cp();
	this.shape_49.setTransform(52,11);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.lf(["rgba(204,204,204,0.4)","rgba(204,204,204,0.6)"],[0,1],-9.8,11,-9.8,-10.9).s().p("ADIBkIlyAAQgdgBAAgdIAAiLQAAgdAdgBIFyAAIAADH").cp();
	this.shape_50.setTransform(21,11);

	// border
	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.lf(["#585F63","#B7BABC"],[0,1],-9.3,11,-9.3,-10.9).s().p("ADMBuIlvAAQgoAAAAgoIAAiLQAAgoAoAAIFvAAIAAAKIlxAAQgcABAAAdIAACLQAAAdAcABIFxAAIAAAK").cp();
	this.shape_51.setTransform(20.5,11);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.lf(["#585F63","#B7BABC"],[0,1],18.5,11,18.5,-10.9).s().p("AhyhjIAAgKIC9AAQAoAAAAAoIAACLQAAAogoAAIi9AAIAAgKIC+AAQAdgBAAgdIAAiLQAAgdgdgBIi+AA").cp();
	this.shape_52.setTransform(52.5,11);

	this.addChild(this.shape_52,this.shape_51,this.shape_50,this.shape_49);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0.1,0,64,22);


(lib.Button_selectedOverSkin = function() {
	this.initialize();

	// fill
	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.lf(["rgba(204,204,204,0.4)","rgba(204,204,204,0.6)"],[0,1],-9.8,11,-9.8,-10.9).s().p("ADIBkIlyAAQgdgBAAgdIAAiLQAAgdAdgBIFyAAIAADH").cp();
	this.shape_53.setTransform(21,11);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.lf(["rgba(204,204,204,0.4)","rgba(204,204,204,0.6)"],[0,1],19,11,19,-10.9).s().p("AhshjIC8AAQAdABAAAdIAACLQAAAdgdABIi8AAIAAjH").cp();
	this.shape_54.setTransform(52,11);

	// border
	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.lf(["#0075BF","#009DFF"],[0,1],-9.3,11,-9.3,-10.9).s().p("ADMBuIlvAAQgoAAAAgoIAAiLQAAgoAoAAIFvAAIAAAKIlxAAQgcABAAAdIAACLQAAAdAcABIFxAAIAAAK").cp();
	this.shape_55.setTransform(20.5,11);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.lf(["#0075BF","#009DFF"],[0,1],18.5,11,18.5,-10.9).s().p("AhyhjIAAgKIC9AAQAoAAAAAoIAACLQAAAogoAAIi9AAIAAgKIC+AAQAdgBAAgdIAAiLQAAgdgdgBIi+AA").cp();
	this.shape_56.setTransform(52.5,11);

	this.addChild(this.shape_56,this.shape_55,this.shape_54,this.shape_53);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0.1,0,64,22);


(lib.Button_selectedDownSkin = function() {
	this.initialize();

	// fill
	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.lf(["#94D2FC","#ADE4FC","#BEEAFC"],[0,1,1],10,-10.9,10,11).s().p("ADIBkIlyAAQgdgBAAgdIAAiLQAAgdAdgBIFyAAIAADH").cp();
	this.shape_57.setTransform(21,11);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.lf(["#94D2FC","#ADE4FC","#BEEAFC"],[0,1,1],-18.8,-10.9,-18.8,11).s().p("AhsBkIAAjHIC8AAQAdABAAAdIAACLQAAAdgdABIi8AA").cp();
	this.shape_58.setTransform(52,11);

	// border
	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.lf(["#0075BF","#009DFF"],[0,1],-9.3,11,-9.3,-10.9).s().p("ADMBuIlvAAQgoAAAAgoIAAiLQAAgoAoAAIFvAAIAAAKIlxAAQgcABAAAdIAACLQAAAdAcABIFxAAIAAAK").cp();
	this.shape_59.setTransform(20.5,11);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.lf(["#0075BF","#009DFF"],[0,1],18.5,11,18.5,-10.9).s().p("AhyhjIAAgKIC9AAQAoAAAAAoIAACLQAAAogoAAIi9AAIAAgKIC+AAQAdgBAAgdIAAiLQAAgdgdgBIi+AA").cp();
	this.shape_60.setTransform(52.5,11);

	this.addChild(this.shape_60,this.shape_59,this.shape_58,this.shape_57);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0.1,0,64,22);


(lib.Button_selectedDisabledSkin = function() {
	this.initialize();

	// fill
	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.lf(["rgba(204,204,204,0.2)","rgba(204,204,204,0.298)"],[0,1],-9.8,11,-9.8,-10.9).s().p("ADIBkIlyAAQgdgBAAgdIAAiLQAAgdAdgBIFyAAIAADH").cp();
	this.shape_61.setTransform(21,11);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.lf(["rgba(204,204,204,0.2)","rgba(204,204,204,0.298)"],[0,1],19,11,19,-10.9).s().p("AhshjIC8AAQAdABAAAdIAACLQAAAdgdABIi8AAIAAjH").cp();
	this.shape_62.setTransform(52,11);

	// border
	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.lf(["rgba(88,95,99,0.298)","rgba(183,186,188,0.2)"],[0,1],-9.3,11,-9.3,-10.9).s().p("ADMBuIlvAAQgoAAAAgoIAAiLQAAgoAoAAIFvAAIAAAKIlxAAQgcABAAAdIAACLQAAAdAcABIFxAAIAAAK").cp();
	this.shape_63.setTransform(20.5,11);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.lf(["rgba(88,95,99,0.298)","rgba(183,186,188,0.2)"],[0,1],18.5,11,18.5,-10.9).s().p("AhyhjIAAgKIC9AAQAoAAAAAoIAACLQAAAogoAAIi9AAIAAgKIC+AAQAdgBAAgdIAAiLQAAgdgdgBIi+AA").cp();
	this.shape_64.setTransform(52.5,11);

	this.addChild(this.shape_64,this.shape_63,this.shape_62,this.shape_61);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0.1,0,64,22);


(lib.Button_overSkin = function() {
	this.initialize();

	// highlight
	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.lf(["rgba(204,204,204,0)","rgba(255,255,255,0.298)"],[0,1],40.6,5.5,40.6,-4.9).s().p("ADIg2IAABtImPAAIAAhPQAAgeAeAAIFxAA").cp();
	this.shape_65.setTransform(21,6.5);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.lf(["rgba(204,204,204,0)","rgba(255,255,255,0.298)"],[0,1],19.5,1.5,19.5,-4.9).s().p("AjHA3IAAhtIFxAAQAdAAABAeIAABPImPAA").cp();
	this.shape_66.setTransform(61,6.5);

	// fill
	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.lf(["rgba(204,204,204,0.4)","rgba(255,255,255,0.6)"],[0,1],30,11,30,-10.9).s().p("AGQBGQAAAdgdABIrlAAQgdgBABgdIAAiLQgBgdAdgBILlAAQAdABAAAdIAACL").cp();
	this.shape_67.setTransform(41,11);

	// border
	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.lf(["#0075BF","#009DFF"],[0,0.992],-9.3,11,-9.3,-10.9).s().p("ADNhjIlyAAQgdABAAAdIAACLQAAAdAdABIFyAAIAAAKIlwAAQgpAAAAgoIAAiLQAAgoApAAIFwAAIAAAK").cp();
	this.shape_68.setTransform(20.5,11);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.lf(["#0075BF","#009DFF"],[0,0.992],9.5,11,9.5,-10.9).s().p("AjMhjIAAgKIFxAAQAoAAAAAoIAACLQAAAogoAAIlxAAIAAgKIFyAAQAdgBAAgdIAAiLQAAgdgdgBIlyAA").cp();
	this.shape_69.setTransform(61.5,11);

	this.addChild(this.shape_69,this.shape_68,this.shape_67,this.shape_66,this.shape_65);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,82,22);


(lib.Button_emphasizedSkin = function() {
	this.initialize();

	// fill
	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("rgba(255,255,255,0)").s().rr(-40.05,-10,80.1,20,3);
	this.shape_70.setTransform(41,11);

	// border
	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.lf(["#2C92F5","#3D00CC"],[0,1],0,-10.7,0,10.8).s().p("AGQBGQAAAdgdABIrlAAQgdgBAAgdIAAiLQAAgdAdgBILlAAQAdABAAAdIAACLAGahFQAAgogoAAIrjAAQgoAAAAAoIAACLQAAAoAoAAILjAAQAoAAAAgoIAAiL").cp();
	this.shape_71.setTransform(41,11);

	this.addChild(this.shape_71,this.shape_70);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0.1,0,82,22);


(lib.Button_downSkin = function() {
	this.initialize();

	// highlight
	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.lf(["rgba(204,204,204,0)","rgba(255,255,255,0.298)"],[0,1],40.6,5.5,40.6,-4.9).s().p("ADIg2IAABtImPAAIAAhPQAAgeAeAAIFxAA").cp();
	this.shape_72.setTransform(21,6.5);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.lf(["rgba(204,204,204,0)","rgba(255,255,255,0.298)"],[0,1],19.5,1.5,19.5,-4.9).s().p("AjHA3IAAhtIFxAAQAdAAABAeIAABPImPAA").cp();
	this.shape_73.setTransform(61,6.5);

	// fill
	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.lf(["#99D7FE","#D9F0FE"],[0,1],-9.8,11,-9.8,-10.9).s().p("ADIBkIlyAAQgdgBABgdIAAiLQgBgdAdgBIFyAAIAADH").cp();
	this.shape_74.setTransform(21,11);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.lf(["#99D7FE","#D9F0FE"],[0,1],10,11,10,-10.9).s().p("AjHBkIAAjHIFyAAQAdABAAAdIAACLQAAAdgdABIlyAA").cp();
	this.shape_75.setTransform(61.1,11);

	// border
	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.lf(["#0075BF","#009DFF"],[0,0.992],-9.3,11,-9.3,-10.9).s().p("ADNhjIlyAAQgdABAAAdIAACLQAAAdAdABIFyAAIAAAKIlwAAQgpAAAAgoIAAiLQAAgoApAAIFwAAIAAAK").cp();
	this.shape_76.setTransform(20.5,11);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.lf(["#0075BF","#009DFF"],[0,0.992],9.5,11,9.5,-10.9).s().p("AjMhjIAAgKIFxAAQAoAAAAAoIAACLQAAAogoAAIlxAAIAAgKIFyAAQAdgBAAgdIAAiLQAAgdgdgBIlyAA").cp();
	this.shape_77.setTransform(61.5,11);

	this.addChild(this.shape_77,this.shape_76,this.shape_75,this.shape_74,this.shape_73,this.shape_72);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,82,22);


(lib.Button_disabledSkin = function() {
	this.initialize();

	// highlight
	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.lf(["rgba(204,204,204,0)","rgba(255,255,255,0.141)"],[0,1],39.5,1.6,39.5,-4.8).s().p("AGQA3IseAAIgBhPQAAgeAeABILiAAQAegBAAAeIABBP").cp();
	this.shape_78.setTransform(41,6.5);

	// fill
	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.lf(["rgba(204,204,204,0.2)","rgba(255,255,255,0.298)"],[0,1],30,11,30,-10.9).s().p("AGQBGQAAAdgdABIrlAAQgdgBABgdIAAiLQgBgdAdgBILlAAQAdABAAAdIAACL").cp();
	this.shape_79.setTransform(41,11);

	// border
	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.lf(["rgba(88,95,99,0.298)","rgba(183,186,188,0.298)"],[0,1],-9.3,11,-9.3,-10.9).s().p("ADMBuIlvAAQgoAAAAgoIAAiLQAAgoAoAAIFvAAIAAAKIlxAAQgcABAAAdIAACLQAAAdAcABIFxAAIAAAK").cp();
	this.shape_80.setTransform(20.5,11);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.lf(["rgba(88,95,99,0.298)","rgba(183,186,188,0.298)"],[0,1],9.5,11,9.5,-10.9).s().p("AjMBuIAAgKIFyAAQAdgBAAgdIAAiLQAAgdgdgBIlyAAIAAgKIFxAAQAoAAAAAoIAACLQAAAogoAAIlxAA").cp();
	this.shape_81.setTransform(61.5,11);

	this.addChild(this.shape_81,this.shape_80,this.shape_79,this.shape_78);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0.1,0,82,22);


(lib.Component_avatar = function() {
	this.initialize();

	// Avatar
	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#FFFFFF").s("#000000").ss(0.1,1,1).p("AGQBuIsfAAIAAjbIMfAAIAADb").cp();
	this.shape_82.setTransform(40,11);

	this.addChild(this.shape_82);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,80,22);


(lib.startGamerBtn = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{},true);

	// Layer 1
	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#FFFFFF").s("#333333").ss(1,1,1).p("AI9oGQADgBADAAIAMARIAeAIIBlgEIAYgMIBCAIQALANAZgOQAKgFAIgCIAeAEIAqgJQAwATBCgJQAMgCALgDQAPAGAbAAQARAAABgLIBaAFIARgJIAwAAQALgIAUgBQACgBADACQAPANAngDQANgBgBgJIAwAAIAMAVQgKAQgPANQgIAHgDAJQAuBlgmB+QgGARAEAUIAYAVIAGBnIgMANIgGAxIgMAIQgFAYgEAdQgBALAQgDQASBrgoBdQgBADAFAMIAeBKIgGA6QgNAMgOAFQgHADAEAJIAMAQIAAARIAMAIQAFAKgFAOQAAABgGAAQAEAPgLADQgCAAgDgCQhAgLhQgBQgPAAgOAAIgSAIIg2gEQhPgSh3AIQgOACgPAAIgMAIIgYAAIgzAYIghAAQgCAAgBAAIgPgDIgYgNQhzAAhlgwQhDAsg0gCQgegBgdgBQgVAAgVAAIgYAIIgGgQIhyAAQhhAniegjIgXAMIhaAAQiwhThmAlQhmAmgJAAQgSAPgSgHQgZgdhBAOQgMACgLAFIhHgBQgHgGgJgFIh3AEQAAgCAAgCQABgLgNgCQgDAAgDABQgVAGgPAKIiQAAIAAAKIg4ACIAAgpIhsAEIgpAQQABASgZgBQgGACgGACIgqgMQgIgHgDgNQgBgDgGgCIAkg+IgegVIAAgpIgSgVQgDgSAMgIQAGgEAJgHQgBgCAAgDIAAgBQgMhKAXg9QAEgJAEgLIgSglIgSgMIAAghIASgmQADgKgPgFQgDgCgDgCIAAgUIgMgNIAAgWIAPgLIAGhGIASgIQAAgCAAgCQAAgegRgSQABgCAAgCIAQgSIAAgyIASgMIAAgyIgMgIIgYgtQgCgbgBgbIgSgNQgJgOADgKQAAgBAGAAIgGgcIgMgLIAAgFIAGADIBOAEQAUgDAGgJIArAAQAIAIAMAFQALAFANgCIAkgIIAYAIIBaAAIAyANIAYgIQAeAHAkgDIAYAQQANgDAJgKQACgBAAgCICnAEIASAIIBIAAIASANQAvgDApAJQABAAAAACIAGgVIBmAEQAMgMABgUIACgBQAJABAJAAIADAEQACgCACgBQAhACAhACQAHADAMACQADAAADACIBIAEIAMAIIByAIIAkgQIBRAEIA8gMIAcgLQAPgBAPgCIAIAOIAeAIQAEAOAUALIALgVQAWgPAagBQADAAADAAQAaAEAcgNQADgCADgCIAAAAIAaAAQAFADAFADQADACAAAEIAkANIBrAEQAngOAtgCIAAAA").cp();

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_83}]}).wait(4));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-145.1,-53.2,290.5,106.5);


(lib.lifelinebase = function() {
	this.initialize();

	// Layer 2
	this.instance = new lib.border();
	this.instance.setTransform(0.1,0.1,1,1,0,0,0,281.8,125.8);

	// Layer 1
	this.cellColor = new lib.baseCell();
	this.cellColor.setTransform(0.1,0.1,1,1,0,0,0,281.8,125.8);

	this.addChild(this.cellColor,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-281.7,-125.7,563.6,251.6);


(lib.crctBase = function() {
	this.initialize();

	// Layer 2
	this.instance_1 = new lib.border();
	this.instance_1.setTransform(0.1,0.1,1,1,0,0,0,281.8,125.8);

	// Layer 1
	this.cellColor_1 = new lib.crctbaseCell();
	this.cellColor_1.setTransform(0.1,0.1,1,1,0,0,0,281.8,125.8);

	this.addChild(this.cellColor_1,this.instance_1);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-281.7,-125.7,563.6,251.6);

(lib.incrctBase = function() {
	this.initialize();

	// Layer 2
	this.instance_1 = new lib.border();
	this.instance_1.setTransform(0.1,0.1,1,1,0,0,0,281.8,125.8);

	// Layer 1
	this.cellColor_1 = new lib.incrctbaseCell();
	this.cellColor_1.setTransform(0.1,0.1,1,1,0,0,0,281.8,125.8);

	this.addChild(this.cellColor_1,this.instance_1);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-281.7,-125.7,563.6,251.6);


(lib.endscreen = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{},true);

	// Layer 11
	this.finalscore = new cjs.Text("$ 1000000", "38px Forte", "#FFFFFF");
	this.finalscore.textAlign = "center";
	this.finalscore.lineHeight = 46;
	this.finalscore.lineWidth = 327;
	this.finalscore.setTransform(-3.9,52.3);
	this.finalscore.shadow = new cjs.Shadow("rgba(0,0,0,1)",1,1,5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.finalscore}]}).wait(3));

	// Layer 8
	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f().s("#CCCCCC").ss(2,1,1).p("A0iAAMApFAAA");
	this.shape_84.setTransform(-3.9,47.8);

	this.text_4 = new cjs.Text(ID_Youhavewon, "38px Forte", "#FFFFFF");
	this.text_4.textAlign = "center";
	this.text_4.lineHeight = 46;
	this.text_4.setTransform(0,5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.text_4},{t:this.shape_84}]}).wait(3));

	// Layer 2
	this.instance_2 = new lib.congratulations();
	this.instance_2.setTransform(14.5,-61,1,1,0,0,0,209.5,32.9);
	this.instance_2.shadow = new cjs.Shadow("rgba(51,51,51,1)",2,2,5);

	this.instance_3 = new lib.gameover();
	this.instance_3.setTransform(0,-61,1,1,0,0,0,169.1,32.9);
	this.instance_3.shadow = new cjs.Shadow("rgba(51,51,51,1)",2,2,5);

	this.instance_4 = new lib.timeup();
	this.instance_4.setTransform(0,-61,1,1,0,0,0,169.1,32.9);
	this.instance_4.shadow = new cjs.Shadow("rgba(51,51,51,1)",2,2,5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2}]}).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).wait(1));

	// Layer 1
	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f().s("#333333").ss(1,1,1).p("AO/zqQAFAAAFAAIAUAoIAyAUICqgKIAogeIBuAUQATAhApgiQAQgOAOgFIAyAKIBGgUQBSAtBtgXQAUgDATgJQAZAQAtAAQAcAAACgaICWAKIAegUIBQAAQASgUAhgEQAEgBAFAFQAYAfBDgHQAVgDgCgVIBQAAIAUAyQgPAngZAfQgPARgFAXQBND0hAEwQgJArAGAxIAoAyIAKD6IgUAeIgKB4IgUAUQgIA7gGBFQgDAcAbgIQAeEDhCDiQgCAHAIAcIAyC0IgKCMQgVAdgXANQgMAHAGAVIAUAoIAAAoIAUAUQAJAZgIAgQgBADgKAAQAIAlgUAHQgDABgFgFQhrgciFgCQgZAAgZAAIgeAUIhagKQiEgsjGATQgZAFgZAAIgUAUIgoAAIhVA7IgzAAIgFgBQgCAAgCgBIgZgHIgogeQkYgBkZgOQgxgCgygDQgjgBgjABIgoAUIgKgoIi+AAQijBfkJhVIgoAeIiWAAQkngilFAOQgPAAgPAAQgfAjgdgPQgqhHhuAiQgUAGgSALIh2gDQgMgOgPgNIjIAKQAAgFABgFQABgbgWgDQgFAAgEADQgjANgaAYIjwAAIAAAZIhfAFIAAhkIizAKIhGAoQACAqgqgCQgKAFgKAFIhGgeQgNgRgGggQgBgGgKgFIA8iWIgygyIAAhkIgegyQgFgtAUgUQAJgJAQgQQgBgGgBgGIAAgEQgUiyAniTQAHgYAGgZIgehaIgegeIAAhQIAehaQAEgagXgOQgGgDgFgFIAAgyIgUgeIAAg3IAZgZIAKiqIAegUQAAgFAAgFQAAhIgcgsQABgEAAgFIAbgtIAAh4IAegeIAAh4IgUgUIgohtQgDhAgChDIgegeQgPgiAEgYQABgCAKAAIgKhGIgUgbIAAgLIAKAIICCAKQAhgHALgXIBIAAQANATAUAMQATAMAWgDIA7gUIAoAUICXAAIBUAeIAogUQAyASA8gIIAoAoQAXgIAPgXQACgEAAgFIEYAKIAeAUIB4AAIAeAeQBQgGBFAVQABAAAAAFIAKgyICqAKQAVgdACgyIACgBQAQABAPACIAEAHQADgDAEgDQA3AFA3AEQAMAIAUAEQAGAAAFAFIB4AKIAUAUIC+AUIA8goICKAKIBkgeIAvgaQAZgDAZgDIANAgIAyAUQAIAhAgAbIAUgyQAlglArgDQAFAAAFAAQAsAMAughQAFgEAFgFIAAAAIAsAAQAIAHAIAIQAFAFAAAKIA8AeIC0AKQBAgiBMgGIAAAA").cp();

	this.base = new lib.endScreenBase();
	this.base.shadow = new cjs.Shadow("rgba(51,51,51,1)",2,2,5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.base},{t:this.shape_85}]}).wait(3));

	// Layer 4
	this.Gridbase = new lib.crctWrngbase();
	this.Gridbase.setTransform(0,0,1.022,1.119);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.Gridbase}]}).wait(3));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-319.9,-239.4,640,479);


(lib.ScrollArrowUp_icon = function() {
	this.initialize();

	// icon
	this.instance_5 = new lib.arrowIcon();
	this.instance_5.setTransform(3.5,2,1,1,180,0,0,3.5,2);

	this.addChild(this.instance_5);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,7,4);


(lib.ScrollArrowUp_downSkin = function() {
	this.initialize();

	// icon
	this.instance_6 = new lib.ScrollArrowUp_icon("single",0);
	this.instance_6.setTransform(4,4);

	// fill
	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.lf(["rgba(238,238,238,0)","rgba(255,255,255,0.298)"],[0,1],-1,3.5,-1,-3.1).s().p("AhAAgIAAg/ICBAAIAAA/IiBAA").cp();
	this.shape_86.setTransform(7.6,4.3);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.lf(["#0075BF","#009DFF"],[0,0.992],1,5.9,1,-6.9).s().p("ABLhFIiVAAIAACLICVAAIAAiLAhAA8IAAh3ICBAAIAAB3IiBAA").cp();
	this.shape_87.setTransform(7.5,7);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.lf(["#99D7FE","#D9F0FE"],[0,1],-1.4,7,-1.4,-6.5).s().p("AhAA8IAAh3ICBAAIAAB3IiBAA").cp();
	this.shape_88.setTransform(7.5,7);

	this.addChild(this.shape_88,this.shape_87,this.shape_86,this.instance_6);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,15,14);


(lib.ScrollArrowDown_icon = function() {
	this.initialize();

	// icon
	this.instance_7 = new lib.arrowIcon("single",0);

	this.addChild(this.instance_7);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,7,4);


(lib.ScrollArrowDown_downSkin = function() {
	this.initialize();

	// icon
	this.instance_8 = new lib.ScrollArrowDown_icon("single",0);
	this.instance_8.setTransform(4,5);

	// fill
	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.lf(["rgba(238,238,238,0)","rgba(255,255,255,0.298)"],[0,1],-0.9,3.5,-0.9,-3.1).s().p("AhAgfICBAAIAAA/IiBAAIAAg/").cp();
	this.shape_89.setTransform(7.5,4.3);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.lf(["#0075BF","#009DFF"],[0,0.992],1,5.9,1,-6.9).s().p("ABBg7IAAB3IiBAAIAAh3ICBAAABLBGIAAiLIiVAAIAACLICVAA").cp();
	this.shape_90.setTransform(7.5,7);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.lf(["#99D7FE","#D9F0FE"],[0,1],-1.4,7,-1.4,-6.5).s().p("ABBg7IAAB3IiBAAIAAh3ICBAA").cp();
	this.shape_91.setTransform(7.5,7);

	this.addChild(this.shape_91,this.shape_90,this.shape_89,this.instance_8);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,15,14);


(lib.flcontrolsButton = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{},true);

	// assets
	this.instance_9 = new lib.focusRectSkin();
	this.instance_9.setTransform(70.1,310.9,1,1,0,0,0,41.1,11);

	this.instance_10 = new lib.Button_upSkin();
	this.instance_10.setTransform(70,213,1,1,0,0,0,41,11);

	this.instance_11 = new lib.Button_selectedUpSkin();
	this.instance_11.setTransform(88,18.7,1,1,0,0,0,41,11);

	this.instance_12 = new lib.Button_selectedOverSkin();
	this.instance_12.setTransform(88,50.7,1,1,0,0,0,41,11);

	this.instance_13 = new lib.Button_selectedDownSkin();
	this.instance_13.setTransform(88,114.7,1,1,0,0,0,41,11);

	this.instance_14 = new lib.Button_selectedDisabledSkin();
	this.instance_14.setTransform(88.1,82.7,1,1,0,0,0,41.1,11);

	this.instance_15 = new lib.Button_overSkin();
	this.instance_15.setTransform(70,181,1,1,0,0,0,41,11);

	this.instance_16 = new lib.Button_emphasizedSkin();
	this.instance_16.setTransform(70.1,245,1,1,0,0,0,41.1,11);

	this.instance_17 = new lib.Button_downSkin();
	this.instance_17.setTransform(70,149,1,1,0,0,0,41,11);

	this.instance_18 = new lib.Button_disabledSkin();
	this.instance_18.setTransform(70.1,277,1,1,0,0,0,41.1,11);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_18},{t:this.instance_17},{t:this.instance_16},{t:this.instance_15},{t:this.instance_14},{t:this.instance_13},{t:this.instance_12},{t:this.instance_11},{t:this.instance_10},{t:this.instance_9}]},1).wait(1));

	// avatar
	this.instance_19 = new lib.Component_avatar();
	this.instance_19.setTransform(50,11,1.25,1,0,0,0,40,11);

	this.timeline.addTween(cjs.Tween.get(this.instance_19).to({_off:true},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,100,22);


(lib.lifeLinecheck = function() {
	this.initialize();

	// Layer 2
	this.textmc = new lib.LifeLineCheckTxt();
	this.textmc.setTransform(83.7,40.6,1,1,0,0,0,78.4,21.6);

	// Layer 5
	//this.no = new lib.flcontrolsButton();
	//this.no.setTransform(210.9,79.6,0.522,1,0,0,0,50,11);

	//this.yes = new lib.flcontrolsButton();
	//this.yes.setTransform(140.9,79.6,0.522,1,0,0,0,50,11);

	// Layer 1
	this.base_1 = new lib.lifelinebase();
	this.base_1.setTransform(0,-2.1,0.624,0.441,0,0,0,-282.1,-129.4);
	this.base_1.shadow = new cjs.Shadow("rgba(0,0,0,1)",2,2,5);

	// Layer 4
	this.Gridbase_1 = new lib.crctWrngbase();
	this.Gridbase_1.setTransform(198,74.1,1.022,1.119);

	this.addChild(this.Gridbase_1,this.base_1,this.textmc);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-121.9,-165.3,640,479);


(lib.ScrollArrowUp_upSkin = function() {
	this.initialize();

	// icon
	this.instance_20 = new lib.ScrollArrowUp_icon("single",0);
	this.instance_20.setTransform(4,4);

	// fill
	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.lf(["rgba(238,238,238,0)","rgba(255,255,255,0.298)"],[0,1],-0.9,3.5,-0.9,-3.1).s().p("AhAgfICBAAIAAA/IiBAAIAAg/").cp();
	this.shape_92.setTransform(7.5,4.3);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.lf(["#5B5D5E","#B7BABC"],[0,1],1,5.9,1,-6.9).s().p("ABLhFIiVAAIAACLICVAAIAAiLABBA8IiBAAIAAh3ICBAAIAAB3").cp();
	this.shape_93.setTransform(7.5,7);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.lf(["#E6E6E6","#FFFFFF"],[0,1],-1.4,7,-1.4,-6.5).s().p("ABBA8IiBAAIAAh3ICBAAIAAB3").cp();
	this.shape_94.setTransform(7.5,7);

	this.addChild(this.shape_94,this.shape_93,this.shape_92,this.instance_20);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,15,14);


(lib.ScrollArrowUp_overSkin = function() {
	this.initialize();

	// icon
	this.instance_21 = new lib.ScrollArrowUp_icon("single",0);
	this.instance_21.setTransform(4,4);

	// fill
	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.lf(["rgba(238,238,238,0)","rgba(255,255,255,0.298)"],[0,1],-1,3.5,-1,-3.1).s().p("AhAgfICBAAIAAA/IiBAAIAAg/").cp();
	this.shape_95.setTransform(7.6,4.3);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.lf(["#0075BF","#009DFF"],[0,0.992],1,5.9,1,-6.9).s().p("ABLhFIiVAAIAACLICVAAIAAiLABBA8IiBAAIAAh3ICBAAIAAB3").cp();
	this.shape_96.setTransform(7.5,7);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.lf(["#E6E6E6","#FFFFFF"],[0,1],-1.4,7,-1.4,-6.5).s().p("ABBA8IiBAAIAAh3ICBAAIAAB3").cp();
	this.shape_97.setTransform(7.5,7);

	this.addChild(this.shape_97,this.shape_96,this.shape_95,this.instance_21);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,15,14);


(lib.ScrollArrowDown_upSkin = function() {
	this.initialize();

	// icon
	this.instance_22 = new lib.ScrollArrowDown_icon("single",0);
	this.instance_22.setTransform(4,5);

	// fill
	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.lf(["rgba(238,238,238,0)","rgba(255,255,255,0.298)"],[0,1],-0.9,3.5,-0.9,-3.1).s().p("AhAgfICBAAIAAA/IiBAAIAAg/").cp();
	this.shape_98.setTransform(7.5,4.3);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.lf(["#5B5D5E","#B7BABC"],[0,1],1,5.9,1,-6.9).s().p("ABLhFIiVAAIAACLICVAAIAAiLABBA8IiBAAIAAh3ICBAAIAAB3").cp();
	this.shape_99.setTransform(7.5,7);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.lf(["#E6E6E6","#FFFFFF"],[0,1],-1.4,7,-1.4,-6.5).s().p("ABBA8IiBAAIAAh3ICBAAIAAB3").cp();
	this.shape_100.setTransform(7.5,7);

	this.addChild(this.shape_100,this.shape_99,this.shape_98,this.instance_22);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,15,14);


(lib.ScrollArrowDown_overSkin = function() {
	this.initialize();

	// icon
	this.instance_23 = new lib.ScrollArrowDown_icon("single",0);
	this.instance_23.setTransform(4,5);

	// fill
	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.lf(["rgba(238,238,238,0)","rgba(255,255,255,0.298)"],[0,1],-0.9,3.5,-0.9,-3.1).s().p("AhAgfICBAAIAAA/IiBAAIAAg/").cp();
	this.shape_101.setTransform(7.5,4.3);

	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.lf(["#0075BF","#009DFF"],[0,0.992],1,5.9,1,-6.9).s().p("ABLhFIiVAAIAACLICVAAIAAiLABBA8IiBAAIAAh3ICBAAIAAB3").cp();
	this.shape_102.setTransform(7.5,7);

	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.lf(["#E6E6E6","#FFFFFF"],[0,1],-1.4,7,-1.4,-6.5).s().p("ABBA8IiBAAIAAh3ICBAAIAAB3").cp();
	this.shape_103.setTransform(7.5,7);

	this.addChild(this.shape_103,this.shape_102,this.shape_101,this.instance_23);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,15,14);


(lib.flcontrolsUIScrollBar = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{},true);

	// assets
	this.instance_24 = new lib.ScrollBar_thumbIcon();
	this.instance_24.setTransform(215.5,86.5,1,1,0,0,0,2.5,4.5);

	this.instance_25 = new lib.ScrollBar_thumbIcon();
	this.instance_25.setTransform(127.5,88.5,1,1,0,0,0,2.5,4.5);

	this.instance_26 = new lib.ScrollBar_thumbIcon();
	this.instance_26.setTransform(40.5,86.5,1,1,0,0,0,2.5,4.5);

	this.instance_27 = new lib.ScrollArrowUp_disabledSkin();
	this.instance_27.setTransform(292.5,25,1,1,0,0,0,7.5,7);

	this.instance_28 = new lib.ScrollArrowDown_disabledSkin();
	this.instance_28.setTransform(292.5,159,1,1,0,0,0,7.5,7);

	this.instance_29 = new lib.ScrollArrowDown_upSkin();
	this.instance_29.setTransform(41.5,159,1,1,0,0,0,7.5,7);

	this.instance_30 = new lib.ScrollThumb_upSkin();
	this.instance_30.setTransform(40,86,1,1,0,0,0,6,26);

	this.instance_31 = new lib.ScrollArrowUp_upSkin();
	this.instance_31.setTransform(41.5,25,1,1,0,0,0,7.5,7);

	this.instance_32 = new lib.ScrollArrowUp_overSkin();
	this.instance_32.setTransform(128.5,27,1,1,0,0,0,7.5,7);

	this.instance_33 = new lib.ScrollThumb_overSkin();
	this.instance_33.setTransform(127,88,1,1,0,0,0,6,26);

	this.instance_34 = new lib.ScrollArrowDown_overSkin();
	this.instance_34.setTransform(128.5,161,1,1,0,0,0,7.5,7);

	this.instance_35 = new lib.ScrollThumb_downSkin();
	this.instance_35.setTransform(215,86,1,1,0,0,0,6,26);

	this.instance_36 = new lib.ScrollArrowDown_downSkin();
	this.instance_36.setTransform(216.5,159,1,1,0,0,0,7.5,7);

	this.instance_37 = new lib.ScrollArrowUp_downSkin();
	this.instance_37.setTransform(216.5,25,1,1,0,0,0,7.5,7);

	this.instance_38 = new lib.ScrollTrack_skin();
	this.instance_38.setTransform(216.5,92,1,1,0,0,0,7.5,74);

	this.instance_39 = new lib.ScrollTrack_skin();
	this.instance_39.setTransform(128.5,94,1,1,0,0,0,7.5,74);

	this.instance_40 = new lib.ScrollTrack_skin();
	this.instance_40.setTransform(41.5,92,1,1,0,0,0,7.5,74);

	this.instance_41 = new lib.ScrollTrack_skin();
	this.instance_41.setTransform(292.5,92,1,1,0,0,0,7.5,74);

	this.instance_42 = new lib.focusRectSkin();
	this.instance_42.setTransform(107.9,234,1,1,0,0,0,41.1,11);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_42},{t:this.instance_41},{t:this.instance_40},{t:this.instance_39},{t:this.instance_38},{t:this.instance_37},{t:this.instance_36},{t:this.instance_35},{t:this.instance_34},{t:this.instance_33},{t:this.instance_32},{t:this.instance_31},{t:this.instance_30},{t:this.instance_29},{t:this.instance_28},{t:this.instance_27},{t:this.instance_26},{t:this.instance_25},{t:this.instance_24}]},1).wait(1));

	// avatar
	this.instance_43 = new lib.Component_avatar();
	this.instance_43.setTransform(7.5,50,0.188,4.545,0,0,0,40,11);

	this.timeline.addTween(cjs.Tween.get(this.instance_43).to({_off:true},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,15,100);


(lib.flcontrolsTextArea = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{},false);

	// Assets
	this.instance_44 = new lib.flcontrolsUIScrollBar();
	this.instance_44.setTransform(173.9,230.4,1,1,0,0,0,7.5,50);

	this.instance_45 = new lib.focusRectSkin();
	this.instance_45.setTransform(140.4,136.4,1,1,0,0,0,41.1,11);

	this.instance_46 = new lib.TextArea_upSkin();
	this.instance_46.setTransform(105.4,44,1,1,0,0,0,76,11);

	this.instance_47 = new lib.TextArea_disabledSkin();
	this.instance_47.setTransform(105.4,91.5,1,1,0,0,0,76,11);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_47},{t:this.instance_46},{t:this.instance_45},{t:this.instance_44}]},1).wait(1));

	// avatar
	this.instance_48 = new lib.Component_avatar();
	this.instance_48.setTransform(50,22,1.25,2,0,0,0,40,11);

	this.timeline.addTween(cjs.Tween.get(this.instance_48).to({_off:true},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,100,44);


(lib.Startscreencopy = function() {
	this.initialize();

	// start
	this.shape_104 = new cjs.Shape();
	this.shape_104.graphics.f().s(startbgcolor).ss(1,1,1).p("AWp6xIAyAKIBGgUQBSAtBtgXQAUgDATgJQAZAQAtAAQAcAAACgaICWAKIAegUIBQAAQASgUAhgEQAEgBAFAFQAYAfBDgHQAVgDgCgVIBQAAIAUAyQgPAngZAfQgPARgFAXQBND0hAEwQgJArAGAxIAoAyIAKD6IgUAeIgKB4IgUAUQgIA9gGBFQgDAcAbgIQAGAyACAyQAEJXgGJDIgIAAQgMBPgWBMQgCAHAIAcIAyC0IgKCMQgVAdgXANQgMAHAGAVIAUAoIAAAoIAUAUQAJAZgIAgQgBADgKAAQAIAlgUAHQgDABgFgFQhrgciFgCQgZAAgZAAIgeAUIhagKQiEgsjGATQgZAFgZAAIgUAUIgoAAIhVA7IgzAAIgFgBQgCAAgCgBIgZgHIgogeQkYgBkZgOQgxgCgygDQgjgBgjABIgoAUIgKgoIi+AAQijBfkJhVIgoAeIiWAAQkngilFAOQgPAAgPAAQgfAjgdgPQgqhHhuAiQgUAGgSALIh2gDQgMgOgPgNIjIAKQAAgFABgFQABgbgWgDQgFAAgEADQgjANgaAYIjwAAIAAAZIhfAFIAAhkIizAKIhGAoQACAqgqgCQgKAFgKAFIhGgeQgNgRgGggQgBgGgKgFIA8iWIgygyIAAhkIgegyQgFgtAUgUQAJgJAQgQQgBgGgBgGIAAgEQgBgDAAgCQAAgDAAgCQgKhkAJhaQAEg2AMgyIADAAQABgrABgrQADhVADhaQAEhnADhrIgapfQAAgDAAgCQAAgCAAgCIgBgLIgDgKIgegeIAAhQIAehaQAEgagXgQQgGgDgFgFIAAgyIgUgeIAAg3IAZgZIAKiqIAegUQAAgFAAgFQAAhIgcgsQABgEAAgFIAbgtIAAh4IAegeIAAh4IgUgUIgohtQgDhAgChDIgegeQgPgiAEgYQABgCAKAAIgKhGIgUgbIAAgLIAKAIICCAKQAhgHALgXIBIAAQANATAUAMQATAMAWgDIA7gUIAoAUICXAAIBUAeIAogUQAyASA8gIIAoAoQAXgIAPgXQACgEAAgFIEYAKIAeAUIB4AAIAeAeQBQgGBFAVQABAAAAAFIAKgyICqAKQAVgdACgyIACgBQAQABAPACIAEAHQADgDAEgDQA3AFA3AEQAMAIAUAEQAGAAAFAFIB4AKIAUAUIC+AUIA8goICKAKIBkgeIAvgaQAZgDAZgDIANAgIAyAUQAIAhAgAbIAUgyQAlglArgDQAFAAAFAAQAsAMAughQAFgEAFgFIAAAAIAsAAQAIAHAIAIQAFAFAAAKIA8AeIC0AKQBAgiBMgGQAFAAAFAAIAUAoIAyAUICqgKIAogeIBuAUQATAhApgiQAQgOAOgFIAAAA").cp();
	this.shape_104.setTransform(0.5,-15.4);

	// Layer 3
	this.titlemc = new lib.Millionaire();
	this.titlemc.setTransform(0.5,-97.3);
	this.titlemc.shadow = new cjs.Shadow("rgba(51,51,51,1)",2,2,5);

	// Layer 1
	this.text_5 = new cjs.Text(ID_PlayNow, "30px Arial", "#FFFFFF");
	this.text_5.textAlign = "center";
	this.text_5.lineHeight = 37;
	this.text_5.setTransform(0,-88.8);

	this.gamestart = new lib.startGamerBtn();
	this.gamestart.setTransform(0.5,-66.6,0.704,0.572);
	this.gamestart.alpha = 0.301;
	this.gamestart.shadow = new cjs.Shadow("rgba(0,0,0,1)",4,4,5);

	// Layer 8

	this.base_2 = new lib.bcgstart();
	this.base_2.setTransform(-74.7,0.1,1,1,0,0,0,172.1,200);

	this.addChild(this.base_2,this.gamedesc,this.gamestart,this.text_5,this.titlemc,this.shape_104);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-242.4,-191.9,486,353);


(lib.incrctPanel = function() {
	this.initialize();

	// Layer 2
	//this.scrollmc = new lib.flcontrolsUIScrollBar();
	//this.scrollmc.setTransform(371.7,19.3,1,0.985,0,0,0,1.5,2.2);

	//this.textmc_1 = new lib.incrctTextPanel();
	//this.textmc_1.setTransform(68.7,26,1,1,0,0,0,78.4,21.6);

	// Layer 1
	//this.ok = new lib.flcontrolsButton();
	//this.ok.setTransform(198.3,134.4,0.54,1,0,0,0,50,11);

	this.base_3 = new lib.incrctBase();
	this.base_3.setTransform(1.9,1.8,0.704,0.596,0,0,0,-279.1,-122.8);
	this.base_3.shadow = new cjs.Shadow("rgba(0,0,0,1)",2,2,5);

	// Layer 4
	this.Gridbase_2 = new lib.crctWrngbase();
	this.Gridbase_2.setTransform(198,74.1,1.022,1.119);

	this.addChild(this.Gridbase_2,this.base_3,this.ok,this.textmc_1,this.scrollmc);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-121.9,-165.3,640,479);


(lib.crctPanel = function() {
	this.initialize();

	// Layer 2
	//this.scrollmc_1 = new lib.flcontrolsUIScrollBar();
	//this.scrollmc_1.setTransform(371.7,19.3,1,0.985,0,0,0,1.5,2.2);

	//this.textmc_2 = new lib.crctTextPanel();
	//this.textmc_2.setTransform(68.7,26,1,1,0,0,0,78.4,21.6);

	// Layer 1
	//this.ok_1 = new lib.flcontrolsButton();
	//this.ok_1.setTransform(198.3,134.4,0.54,1,0,0,0,50,11);

	this.base_4 = new lib.crctBase();
	this.base_4.setTransform(1.9,1.8,0.704,0.596,0,0,0,-279.1,-122.8);
	this.base_4.shadow = new cjs.Shadow("rgba(0,0,0,1)",2,2,5);

	// Layer 6
	this.Gridbase_3 = new lib.crctWrngbase();
	this.Gridbase_3.setTransform(198,74.4,1.022,1.119);

	this.addChild(this.Gridbase_3,this.base_4,this.ok_1,this.textmc_2,this.scrollmc_1);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-121.9,-165,640,479);


(lib.feedbackMc = function() {
	this.initialize();

	// end
	this.EndScreen = new lib.endscreen();
	this.EndScreen.setTransform(318.6,232.4,1,1,0,0,0,-1.4,-7.6);

	// start
	this.StartScreen = new lib.Startscreencopy();
	this.StartScreen.setTransform(319.2,254.8);

	// lifeline
	this.lifelinecheck = new lib.lifeLinecheck();
	this.lifelinecheck.setTransform(123.8,251.9,1,1,0,0,0,1.8,86.5);

	// crct incrct
	this.wrngmc = new lib.incrctPanel();
	this.wrngmc.setTransform(318.8,237.9,1,1,0,0,0,196.8,72.5);

	this.crctmc = new lib.crctPanel();
	this.crctmc.setTransform(318.8,237.6,1,1,0,0,0,196.8,72.5);

	this.addChild(this.crctmc,this.wrngmc,this.lifelinecheck,this.StartScreen,this.EndScreen);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,640,479.5);

})(lib = lib||{}, images = images||{}, createjs = createjs||{});
var lib, images, createjs;