(function (lib, img, cjs) {

var p; // shortcut to reference prototypes
var topichex1,gamehex1,cellhex1
// stage content:
(lib.jeopardyhtml = function(n_rows,n_cols,widthscale,heightscale,topicwidthscale,topichex,gamehex,cellhex) {
	this.initialize();
	this.Qbcg = new lib.questionback();
	this.Qbcg.setTransform(320,240,1,1,0,0,0,320,240);
	
	topichex1 = topichex
	gamehex1 = gamehex
	cellhex1 = cellhex
	this.gridbox = new Array();
	this.gridtopic = new Array();
	
	//console.log(n_rows,n_cols,widthscale,heightscale,topicwidthscale);
	// question
	this.Question = new lib.Question_Mc();
	this.Question.setTransform(317,260,1,1,0,0,0,310,207.5);

	// grid
	// gridbase
	this.runtime = new lib.Runtime_MC();
	this.runtime.setTransform(489,365,1,1,0,0,0,480.7,362.8);

	this.addChild(this.runtime,this.Qbcg);
	
	//add the cells of the grid here

	for (var i=0;i<n_rows;i++){ 
		this.gridbox[i] = new Array();
		for (var j=0;j<n_cols;j++){ 
		
			this.gridbox[i][j] = new lib.MyBox();
			//
			
			//console.log("before scaling",this.gridbox[i][j].x,this.gridbox[i][j].y)
			this.gridbox[i][j].base_1.scaleX = widthscale - 0.03;
			this.gridbox[i][j].base_1.scaleY = heightscale - 0.03;
			this.gridbox[i][j].moneytop.x = (this.gridbox[i][j].base_1.scaleX*100)/2 - 20;
			this.gridbox[i][j].moneytop.y = (this.gridbox[i][j].base_1.scaleY*100)/2- 20;
			//console.log("after scaling width and height",this.gridbox[i][j].base_1.scaleX*100,this.gridbox[i][j].base_1.scaleY*100)
			this.gridbox[i][j].setTransform((j % n_cols) * (100*widthscale)+13,(i % n_rows) * (100*heightscale)+84);
			
			//console.log("after scaling",this.gridbox[i][j].x,this.gridbox[i][j].y)
			this.gridbox[i][j].moneytop.money.text = currencysymbol + $($(dataXML.find('topic')[j]).find('question')[i]).attr("score");
			this.gridbox[i][j].opened = 0;
			
			
			this.addChild(this.gridbox[i][j]);
		}
	}
	
	for (var k=0;k<n_cols;k++){ 
		this.gridtopic[k] = new lib.Topic();
		this.gridtopic[k].base.scaleX = topicwidthscale;
		this.gridtopic[k].base.scaleY = 1;
		this.gridtopic[k].topicname.x = (this.gridtopic[k].base.scaleX*200)/2;
		this.gridtopic[k].setTransform((k % n_cols) * (203*topicwidthscale)+13,(i % n_rows) * (30)+50);
		
		//this.gridtopic[k].x = (t % n_cols) * (topics[t].width) + 2;
		//this.gridtopic[k].y = -gridItems[0][0].base.y - (gridItems[0][0].base.height / 2) - 15;
		
		this.addChild(this.gridtopic[k])
	}

	
	this.addChild(this.Question);
	
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,-0.9,640.3,481);


(lib.submitMask = function() {
	this.initialize();

	// Layer 1
	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("rgba(233,233,233,0.498)").s().rr(-35.5,-13.5,71,27,4);
	this.shape_8.setTransform(35.5,13.5);

	this.addChild(this.shape_8);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,71,27);



// symbols:
(lib.Wfback = function() {
	this.initialize();

	// Layer 1
	this.text = new cjs.Text(ID_Clickanywheretocontinue, "bold 17px Verdana", "#016767");
	this.text.textAlign = "center";
	this.text.lineHeight = 19;
	this.text.lineWidth = 400;
	this.text.setTransform(0,46.9);

	// Layer 2
	this.wrongfb = new cjs.Text(ID_TimeUp, "bold 25px Arial", "#006666");
	this.wrongfb.textAlign = "center";
	this.wrongfb.lineHeight = 27;
	this.wrongfb.lineWidth = 350;
	this.wrongfb.setTransform(0,-65);

	// Layer 3
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#999999").ss(1.2,1,1).p("AdDHCIAAu/QAAhfhDhEQhDhDhgAAMgy5AAAQhgAAhDBDQhDBEAABfIAAO/IAAA8QAABfBDBDQBDBEBgAAMAy5AAAQBgAABDhEQBDhDAAhfIAAg8").cp();
	this.shape.setTransform(0.5,0);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#E1E1E1").s().p("AdDiPIAAA7QAABehDBDQhDBDhgAAMgy5AAAQhgAAhDhDQhDhDAAheIAAg7MA6FAAA").cp();
	this.shape_1.setTransform(0.5,59.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.lf(["#FFFFFF","#F0F3F8"],[0,1],0,111.5,0,-42.4).s().p("AdDJTMg6FAAAIAAu/QAAhfBDhEQBDhDBgAAMAy5AAAQBgAABDBDQBDBEAABfIAAO/").cp();
	this.shape_2.setTransform(0.5,-14.4);

	// Layer 4
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("rgba(204,204,204,0.498)").s("#999999").ss(1.2,1,1).p("EAtDggPMhaFAAAQhVAAg9A8Qg8A9AABVMAAAA6DQAABVA8A9QA9A8BVAAMBaFAAAQBVAAA9g8QA8g9AAhVMAAAg6DQAAhVg8g9Qg9g8hVAAIAAAA").cp();

	this.addChild(this.shape_3,this.shape_2,this.shape_1,this.shape,this.wrongfb,this.text);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-308.9,-206.4,618,413);


(lib.Timerforquestion = function() {
	this.initialize();

	// Layer 2
	this.showt = new cjs.Text("sdsds", "13px Verdana", "#CC0000");
	this.showt.lineHeight = 14;
	this.showt.lineWidth = 34;
	this.showt.setTransform(4,2.9);

	this.addChild(this.showt);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(4,2.9,38,22.3);


(lib.time = function() {
	this.initialize();

	// Layer 2
	this.text_1 = new cjs.Text(ID_Time, "bold 11px Arial", "#006600");
	this.text_1.lineHeight = 13;
	this.text_1.setTransform(-14.8,-24.3);

	// Layer 1
	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#999999").ss(1,1,1).p("ADwhwQALAXAGAZQAIAfAAAhQAABuhOBNQhNBOhuAAQhtAAhNhOQhOhNAAhuQAAghAIgfQAGgZALgXQATgoAigiQA3g3BHgQQAegHAeAAQAfAAAeAHQBHAQA3A3QAiAiATAoIAAAA").cp();

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.rf(["#FFFFFF","#00CC33"],[0,1],0,-1,0,0,-1,25.2).s().p("ADwA/QjwAwjvgwQATgoAiggQA3g3BHgQQAegGAeAAQAfAAAeAGQBHAQA3A3QAiAgATAoIAAAA").cp();
	this.shape_5.setTransform(0,-17.6);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.rf(["#FFFFFF","#C6E8FF"],[0,1],0,-7.4,0,0,-7.4,26.8).s().p("Ajvi8QDvAvDwgvQALAXAGAZQAIAfAAAjQAABshOBNQhNBOhuAAQhtAAhNhOQhOhNAAhsQAAgjAIgfQAGgZALgXIAAAA").cp();
	this.shape_6.setTransform(0,7.6);

	this.addChild(this.shape_6,this.shape_5,this.shape_4,this.text_1);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-26.4,-26.4,53,53);


(lib.TabButton = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,false,{},true);

	// Layer 3
	this.Topic = new cjs.Text("Topic", "bold 18px Verdana", "#FFFFFF");
	this.Topic.textAlign = "center";
	this.Topic.lineHeight = 20;
	this.Topic.lineWidth = 73;
	this.Topic.setTransform(41.5,2.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.Topic}]}).wait(2));

	// Layer 1
	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#999999").s().p("AGUh4Qgpgsg6AAIpiAAQg5AAgpAsQgpAsAAA+IAACzIN5AAIAAizQAAg+gpgsIAAAA").cp();
	this.shape_7.setTransform(44.5,16.5);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#666666").s().p("AF3iQQgegUgoAAIpiAAQgnAAgeAUQgPAKgOAOQgpAsAAA+IAACzIN5AAIAAizQAAg+gpgsQgOgOgPgKIAAAA").cp();
	this.shape_8.setTransform(44.5,16.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_7}]}).to({state:[{t:this.shape_8}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,89,33);


(lib.Symbol17 = function() {
	this.initialize();

	// Layer 1
	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.rf(["#FFFFFF","#00CCCC"],[0,1],31.9,18.7,0,31.9,18.7,100.3).s().p("AG5m5QC4C4AAEBQAAEDi4C3Qi2C3kDAAQkCAAi3i3Qi3i3AAkDQAAkBC3i4QC3i3ECAAQEDAAC2C3IAAAA").cp();

	this.addChild(this.shape_9);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-62.4,-62.4,125,125);


(lib.Symbol16 = function() {
	this.initialize();

	// Layer 1
	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.rf(["#FFFFFF","#999999"],[0,1],-17,-25.2,0,-17,-25.2,104.4).s("#666666").ss(1,1,1).p("AIHoHQDYDYAAEvQAAEwjYDXQjXDYkwAAQkvAAjYjYQjXjXAAkwQAAkvDXjYQDYjXEvAAQEwAADXDXIAAAA").cp();

	this.addChild(this.shape_10);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-73.4,-73.4,147,147);


(lib.Lights = function() {
	this.initialize();

	// Layer 1
	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.rf(["#FFFF00","rgba(191,191,191,0)","rgba(214,214,214,0)"],[0.31,1,1],0,0,0,0,0,5.6).s().p("AAkgjQAPAPAAAUQAAAVgPAPQgPAPgVAAQgUAAgPgPQgPgPAAgVQAAgUAPgPQAPgPAUAAQAVAAAPAPIAAAA").cp();

	this.addChild(this.shape_8);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-5,-5,10.2,10.2);


(lib.Symbol12 = function() {
	this.initialize();

	// Layer 1
	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#E9E9E9").s("#CFCFCF").ss(1.1,1,1).p("ADYjXQBZBaAAB9QAAB+hZBaQhaBZh+AAQh9AAhahZQhZhaAAh+QAAh9BZhaQBahZB9AAQB+AABaBZIAAAA").cp();

	this.addChild(this.shape_13);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-30.5,-30.5,61.1,61.1);


(lib.Symbol11 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,false,{},true);

	// Layer 2
	this.text_2 = new cjs.Text(ID_Submit, "15px Arial", "#333333");
	this.text_2.lineHeight = 14;
	this.text_2.setTransform(-20.7,-9.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.text_2}]}).wait(4));

	// Layer 1
	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.rf(["#FFFFFF","#CCCCCC"],[0,1],0,0,0,0,0,50.8).s("#999999").ss(1.1,1,1).rr(-50.2,-12.45,100.4,24.9,7);
	this.shape_14.setTransform(0,-0.5,0.652,0.939);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.rf(["#FFFFFF","#B3F0FF"],[0,1],0,0,0,0,0,50.8).s("#999999").ss(1.1,1,1).rr(-50.2,-12.45,100.4,24.9,7);
	this.shape_15.setTransform(0,0,0.652,0.939);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_14}]}).to({state:[{t:this.shape_15}]},1).to({state:[{t:this.shape_14}]},1).to({state:[{t:this.shape_14}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-32.6,-12.3,65.4,23.4);


(lib.Symbol10 = function() {
	this.initialize();

	// Layer 2
	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.rf(["#FFFFFF","#AEEFFF"],[0,1],0,0,0,0,0,27.4).s("#999999").ss(1,1,1).p("AA9kBQBHAQA3A3QAiAiATAoQALAXAGAZQAIAfAAAhQAABuhOBNQhNBOhuAAQhtAAhNhOQhOhNAAhuQAAghAIgfQAGgZALgXQATgoAigiQA3g3BHgQQAegHAeAAQAfAAAeAHIAAAA").cp();

	this.addChild(this.shape_16);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-26.4,-26.4,53,53);


(lib.Symbol9 = function() {
	this.initialize();

	// Layer 1
	this.money = new cjs.Text("$100", "bold 30px Arial", "#FFFFFF");
	this.money.textAlign = "center";
	this.money.lineHeight = 36;
	this.money.lineWidth = 67;
	this.money.setTransform(33.5,0);

	this.addChild(this.money);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,71,37.5);


(lib.Symbol8 = function() {
	this.initialize();

	// Layer 1
	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.rf(["#CCCCCC","#333333"],[0,1],5.6,4,0,5.6,4,123.4).s("#FFFFFF").ss(1.3,1,1).p("APEpXI+HAAQgyAAAAAyIAARLQAAAyAyAAIeHAAQAyAAAAgyIAAxLQAAgygyAAIAAAA").cp();
	this.shape_17.setTransform(101.5,60);

	this.addChild(this.shape_17);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,202.9,120);


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
	this.shape_19.setTransform(101.5,15.7);

	this.shape_20 = new cjs.Shape();
		//change here
	this.shape_20.graphics.lf([topichex1],[0,1],0,29,0,-5.9).s().p("AO5ibIAMAAQAyAAAAAjIAADxQAAAjgyAAI+JAAQgyAAAAgjIAAjxQAAgjAyAAId6AAIADAA").cp();
	this.shape_20.setTransform(101.5,15.7);

	this.addChild(this.shape_20);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,203,31.4);

(lib.Symbol2 = function() {
	this.initialize();

	// Layer 1
	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("rgba(255,255,255,0.008)").s().p("EAw5AhbMhhxAAAMAAAhC1MBhxAAAMAAABC1").cp();

	this.addChild(this.shape_25);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-312.9,-213.9,626,428);


(lib.Rfback = function() {
	this.initialize();

	// Layer 1
	this.text_3 = new cjs.Text(ID_Clickanywheretocontinue, "bold 17px Verdana", "#016767");
	this.text_3.textAlign = "center";
	this.text_3.lineHeight = 19;
	this.text_3.lineWidth = 400;
	this.text_3.setTransform(0,46.9);

	// Layer 2
	this.rightfb = new cjs.Text(ID_TimeUp, "bold 25px Arial", "#006666");
	this.rightfb.textAlign = "center";
	this.rightfb.lineHeight = 27;
	this.rightfb.lineWidth = 350;
	this.rightfb.setTransform(0,-65);

	// Layer 3
	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f().s("#999999").ss(1.2,1,1).p("AdDHCIAAu/QAAhfhDhEQhDhDhgAAMgy5AAAQhgAAhDBDQhDBEAABfIAAO/IAAA8QAABfBDBDQBDBEBgAAMAy5AAAQBgAABDhEQBDhDAAhfIAAg8").cp();
	this.shape_22.setTransform(0.5,0);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#E1E1E1").s().p("AdDiPIAAA7QAABehDBDQhDBDhgAAMgy5AAAQhgAAhDhDQhDhDAAheIAAg7MA6FAAA").cp();
	this.shape_23.setTransform(0.5,59.5);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.lf(["#FFFFFF","#F0F3F8"],[0,1],0,111.5,0,-42.4).s().p("AdDJTMg6FAAAIAAu/QAAhfBDhEQBDhDBgAAMAy5AAAQBgAABDBDQBDBEAABfIAAO/").cp();
	this.shape_24.setTransform(0.5,-14.4);

	// Layer 4
	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("rgba(204,204,204,0.498)").s("#999999").ss(1.2,1,1).p("EAtDggPMhaFAAAQhVAAg9A8Qg8A9AABVMAAAA6DQAABVA8A9QA9A8BVAAMBaFAAAQBVAAA9g8QA8g9AAhVMAAAg6DQAAhVg8g9Qg9g8hVAAIAAAA").cp();

	this.addChild(this.shape_25,this.shape_24,this.shape_23,this.shape_22,this.rightfb,this.text_3);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-308.9,-206.4,618,413);


(lib.mainscoreMc = function() {
	this.initialize();

	// Layer 1
	this.money_1 = new cjs.Text("0", "16px Verdana", "#333333");
	this.money_1.textAlign = "center";
	this.money_1.lineHeight = 22;
	this.money_1.lineWidth = 43;
	this.money_1.setTransform(77.5,-41.2);
// Layer 3
	this.text_2 = new cjs.Text(ID_Score, "13px Arial", "#333333");
	this.text_2.lineHeight = 24;
	this.text_2.lineWidth = 50;
	this.text_2.setTransform(-10,-41.2);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.lf(["#CCCCCC","#FFFFFF","#D6D6D6"],[0,0.494,1],0,-17.5,0,18.4).s().p("Ak5jgIHDAAQC2AAAAC1IAAEMIp/AAQABgBAAAAQADgJACgKQA6jShAjbIAGAA").cp();
	this.shape_29.setTransform(78.3,-30.4);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.lf(["#D7D7D7","#FFFFFF","#CCCCCC"],[0,0.576,1],2.2,-18.2,2.2,17.1).s().p("AFCDTIqkAbQBiiZgWiZQgaipCuAAIHEAAQBBDlhBDbIAAAA").cp();
	this.shape_30.setTransform(13.1,-29.1);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.lf(["#999999","#FFFFFF","#999999"],[0,0.459,1],0.3,-22.4,0.3,22.5).s().p("AgKDhIgKAAQBAjehAjjIAPAAQAAABAAAAIgGAAQA+Dag4DSQgDAKgCAKIAAAA").cp();
	this.shape_31.setTransform(47.5,-30.4);

	this.addChild(this.shape_31,this.shape_30,this.shape_29,this.text_2,this.money_1);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-22.3,-52.9,132.4,47.7);


(lib.jeopardy = function() {
	this.initialize();

	// Layer 1
	this.jeopardytitle = new cjs.Text("Jeopardy", "70px Arial", "#FFFFFF");
	this.jeopardytitle.lineHeight = 98;
	this.jeopardytitle.textAlign = "center";
	this.jeopardytitle.setTransform(-118.6,-43,0.495,0.495);

	this.addChild(this.jeopardytitle);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-108.6,-43.1,219.2,57);


(lib.gridmainbase = function() {
	this.initialize();

	// Layer 1
	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#333333").s().p("EAyAglfMAAABK/Mhj/AAAMAAAhK/MBj/AAA").cp();
	this.shape_29.setTransform(320,240);

	this.addChild(this.shape_29);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,640,480);


(lib.TextInput_upSkin = function() {
	this.initialize();

	// skin
	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#FFFFFF").s().p("ALuBkI3bAAIAAjHIXbAAIAADH").cp();
	this.shape_30.setTransform(76,11);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#D3D5D6").s().p("ArtgEIXbAAIAAAJI3bAAIAAgJ").cp();
	this.shape_31.setTransform(76,21.5);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#6D6F70").s().p("ALzgEIAAAJI3bAAIgKAAIAAgJIXlAA").cp();
	this.shape_32.setTransform(75.5,0.5);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#C9CBCC").s().p("ALuhjIAAgKIAKAAIAADbIgKAAIAAgKIAAjHArtBkIAAAKIgKAAIAAjRIAKAAIAADH").cp();
	this.shape_33.setTransform(76,11);

	this.addChild(this.shape_33,this.shape_32,this.shape_31,this.shape_30);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,152,22);


(lib.TextInput_disabledSkin = function() {
	this.initialize();

	// skin
	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("rgba(255,255,255,0.298)").s().p("ALuhjIAADHI3bAAIAAjHIXbAA").cp();
	this.shape_34.setTransform(76,11);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("rgba(211,213,214,0.298)").s().p("ArtAFIAAgJIXbAAIAAAJI3bAA").cp();
	this.shape_35.setTransform(76,21.5);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("rgba(109,111,112,0.298)").s().p("ALzAFI3bAAIgKAAIAAgJIXlAAIAAAJ").cp();
	this.shape_36.setTransform(75.5,0.5);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("rgba(201,203,204,0.298)").s().p("Ar3hjIAKAAIAADHIAAAKIgKAAIAAjRALuhtIAKAAIAADbIgKAAIAAgKIAAjHIAAgK").cp();
	this.shape_37.setTransform(76,11);

	this.addChild(this.shape_37,this.shape_36,this.shape_35,this.shape_34);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,152,22);


(lib.TextArea_upSkin = function() {
	this.initialize();

	// skin
	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#FFFFFF").s().p("ALuBkI3bAAIAAjHIXbAAIAADH").cp();
	this.shape_38.setTransform(76,11);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#6D6F70").s().p("AroAFIgKAAIAAgJIXlAAIAAAJI3bAA").cp();
	this.shape_39.setTransform(75.5,0.5);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#D3D5D6").s().p("ArtAFIAAgJIXbAAIAAAJI3bAA").cp();
	this.shape_40.setTransform(76,21.5);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#C9CBCC").s().p("ALuBuIAAgKIAAjHIAAgKIAKAAIAADbIgKAAArtBkIAAAKIgKAAIAAjRIAKAAIAADH").cp();
	this.shape_41.setTransform(76,11);

	this.addChild(this.shape_41,this.shape_40,this.shape_39,this.shape_38);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,152,22);


(lib.TextArea_disabledSkin = function() {
	this.initialize();

	// skin
	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("rgba(255,255,255,0.298)").s().p("ArtBkIAAjHIXbAAIAADHI3bAA").cp();
	this.shape_42.setTransform(76,11);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("rgba(211,213,214,0.298)").s().p("ALuAFI3bAAIAAgJIXbAAIAAAJ").cp();
	this.shape_43.setTransform(76,21.5);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("rgba(109,111,112,0.298)").s().p("ALzAFI3bAAIgKAAIAAgJIXlAAIAAAJ").cp();
	this.shape_44.setTransform(75.5,0.5);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("rgba(201,203,204,0.298)").s().p("ALuBuIAAgKIAAjHIAAgKIAKAAIAADbIgKAAArthjIAADHIAAAKIgKAAIAAjRIAKAA").cp();
	this.shape_45.setTransform(76,11);

	this.addChild(this.shape_45,this.shape_44,this.shape_43,this.shape_42);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,152,22);


(lib.focusRectSkin = function() {
	this.initialize();

	// border
	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.lf(["#0075BF","#009DFF"],[0,1],0,-10.7,0,10.8).s().p("AGQBGQAAAdgdABIrlAAQgdgBAAgdIAAiLQAAgdAdgBILlAAQAdABAAAdIAACLAGahFQAAgogoAAIrjAAQgoAAAAAoIAACLQAAAoAoAAILjAAQAoAAAAgoIAAiL").cp();
	this.shape_46.setTransform(41,11);

	this.addChild(this.shape_46);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0.1,0,82,22);


(lib.arrowIcon = function() {
	this.initialize();

	// icon
	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#000000").s().p("AAjgTIhFAAIAAAKIAKAAIAAAJIAKAAIAAAKIAKAAIAAAKIAJAAIAAgKIAKAAIAAgKIAKAAIAAgJIAKAAIAAgK").cp();
	this.shape_47.setTransform(3.5,2);

	this.addChild(this.shape_47);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,7,4);


(lib.ScrollTrack_skin = function() {
	this.initialize();

	// skin
	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#585F63").s().p("AAFrjIAAXHIgJAAIAA3HIAJAA").cp();
	this.shape_48.setTransform(0.5,74);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.lf(["#94999B","#E7E7E7"],[0,1],-6.4,7,7.5,6.8).s().p("ABBrjIAAXHIiBAAIAA3HICBAA").cp();
	this.shape_49.setTransform(7.5,74);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#585F63").s().p("AAFrjIAAXHIgJAAIAA3HIAJAA").cp();
	this.shape_50.setTransform(14.5,74);

	this.addChild(this.shape_50,this.shape_49,this.shape_48);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,15,148);


(lib.ScrollThumb_upSkin = function() {
	this.initialize();

	// skin
	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.lf(["#E6E6E6","#FFFFFF"],[0,1],26.4,16,26.4,-5.9).s().p("AAaj4QAdABAAAdIAAG1QAAAegdABIhQgBIAAnyIBQAB").cp();
	this.shape_51.setTransform(6.5,26);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.lf(["#585F63","#B7BABC"],[0,1],-4.9,2.9,-4.9,-19).s().p("AA8gbIAAARQAAAmgoAAIhPAAIAAgKIBQAAQAdgBAAgbIAAgRIAKAA").cp();
	this.shape_52.setTransform(7,49.2);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.lf(["#585F63","#B7BABC"],[0,1],-4.9,29.1,-4.9,7.1).s().p("AA8DnIgKAAIAAmlQAAgdgdgBIhQAAIAAgKIBPAAQAoAAAAAoIAAGl").cp();
	this.shape_53.setTransform(7,23.2);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("rgba(255,0,0,0)").s().p("AAPkDIAAIHIgdAAIAAoHIAdAA").cp();
	this.shape_54.setTransform(14.5,26);

	this.addChild(this.shape_54,this.shape_53,this.shape_52,this.shape_51);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(1,0,15,52);


(lib.ScrollThumb_overSkin = function() {
	this.initialize();

	// skin
	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("rgba(255,0,0,0)").s().p("AAPkDIAAIHIgdAAIAAoHIAdAA").cp();
	this.shape_55.setTransform(14.5,26);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.lf(["#0075BF","#009DFF"],[0,0.992],-4.9,2.9,-4.9,-19).s().p("AA8gbIAAARQAAAmgoAAIhPAAIAAgKIBQAAQAdgBAAgbIAAgRIAKAA").cp();
	this.shape_56.setTransform(7,49.2);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.lf(["#0075BF","#009DFF"],[0,0.992],-4.9,29.1,-4.9,7.1).s().p("AA8DnIgKAAIAAmlQAAgdgdgBIhQAAIAAgKIBPAAQAoAAAAAoIAAGl").cp();
	this.shape_57.setTransform(7,23.2);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.lf(["#E6E6E6","#FFFFFF"],[0,1],26.4,16,26.4,-5.9).s().p("AA3DbQAAAegdABIhQAAIAAnzIBQAAQAdABAAAdIAAG2").cp();
	this.shape_58.setTransform(6.5,26);

	this.addChild(this.shape_58,this.shape_57,this.shape_56,this.shape_55);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(1,0,15,52);


(lib.ScrollThumb_downSkin = function() {
	this.initialize();

	// skin
	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.lf(["#99D7FE","#D9F0FE"],[0,1],26.4,16,26.4,-5.9).s().p("AA3jaIAAG1QAAAegdABIhQgBIAAnyIBQABQAdABAAAdIAAAA").cp();
	this.shape_59.setTransform(6.5,26);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.lf(["#0075BF","#009DFF"],[0,0.992],-4.9,2.9,-4.9,-19).s().p("AA8gbIAAARQAAAmgoAAIhPAAIAAgKIBQAAQAdgBAAgbIAAgRIAKAA").cp();
	this.shape_60.setTransform(7,49.2);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.lf(["#0075BF","#009DFF"],[0,0.992],-4.9,29.1,-4.9,7.1).s().p("AA8DnIgKAAIAAmlQAAgdgdgBIhQAAIAAgKIBPAAQAoAAAAAoIAAGl").cp();
	this.shape_61.setTransform(7,23.2);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("rgba(255,0,0,0)").s().p("AAPkDIAAIHIgdAAIAAoHIAdAA").cp();
	this.shape_62.setTransform(14.5,26);

	this.addChild(this.shape_62,this.shape_61,this.shape_60,this.shape_59);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(1,0,15,52);


(lib.ScrollBar_thumbIcon = function() {
	this.initialize();

	// Layer 1
	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#5A6165").s().p("AAZAFIgxAAIAAgJIAxAAIAAAJ").cp();
	this.shape_63.setTransform(2.5,2.5);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#5A6165").s().p("AAZAFIgxAAIAAgJIAxAAIAAAJ").cp();
	this.shape_64.setTransform(2.5,0.5);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#5A6165").s().p("AAZAFIgxAAIAAgJIAxAAIAAAJ").cp();
	this.shape_65.setTransform(2.5,4.5);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#5A6165").s().p("AAZAFIgxAAIAAgJIAxAAIAAAJ").cp();
	this.shape_66.setTransform(2.5,6.5);

	this.addChild(this.shape_66,this.shape_65,this.shape_64,this.shape_63);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,5,7);


(lib.ScrollArrowUp_disabledSkin = function() {
	this.initialize();

	// skin
	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.lf(["rgba(238,238,238,0)","rgba(255,255,255,0.298)"],[0,1],-0.9,3.5,-0.9,-3.1).s().p("AhAAgIAAg/ICBAAIAAA/IiBAA").cp();
	this.shape_67.setTransform(7.5,4);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.lf(["rgba(91,93,94,0.298)","rgba(183,186,188,0.298)"],[0,1],1,5.9,1,-6.9).s().p("AhAA8IAAh3ICBAAIAAB3IiBAAABLBGIAAiLIiVAAIAACLICVAA").cp();
	this.shape_68.setTransform(7.5,7);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.lf(["#E6E6E6","#FFFFFF"],[0,1],-1.4,7,-1.4,-6.5).s().p("ABBg7IAAB3IiBAAIAAh3ICBAA").cp();
	this.shape_69.setTransform(7.5,7);

	this.addChild(this.shape_69,this.shape_68,this.shape_67);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,15,14);


(lib.ScrollArrowDown_disabledSkin = function() {
	this.initialize();

	// skin
	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.lf(["rgba(238,238,238,0)","rgba(255,255,255,0.298)"],[0,1],-0.9,3.5,-0.9,-3.1).s().p("AhAAgIAAg/ICBAAIAAA/IiBAA").cp();
	this.shape_70.setTransform(7.5,4);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.lf(["rgba(91,93,94,0.298)","rgba(183,186,188,0.298)"],[0,1],1,5.9,1,-6.9).s().p("AhAA8IAAh3ICBAAIAAB3IiBAAABLBGIAAiLIiVAAIAACLICVAA").cp();
	this.shape_71.setTransform(7.5,7);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.lf(["#E6E6E6","#FFFFFF"],[0,1],-1.4,7,-1.4,-6.5).s().p("ABBg7IAAB3IiBAAIAAh3ICBAA").cp();
	this.shape_72.setTransform(7.5,7);

	this.addChild(this.shape_72,this.shape_71,this.shape_70);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,15,14);


(lib.RadioButton_upIcon = function() {
	this.initialize();

	// highlight
	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.lf(["rgba(204,204,204,0)","rgba(255,255,255,0.298)"],[0,1],-1,3.1,-1,-2.9).s().p("AgpgLQARgSAYAAQAZAAARASQACABABACQAPAPAAAXIh3AAQAAgXAPgPQABgCACgBIAAAA").cp();
	this.shape_73.setTransform(7,4);

	// fill
	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.lf(["#5B5D5E","#B7BABC"],[0,1],0.5,7,0.5,-7.5).s().p("AA6gmQAMARAAAVQAAAdgVAUQgUAVgdAAQgcAAgUgVQgVgUAAgdQAAgVAMgRQAEgFAFgFQAUgVAcAAQAdAAAUAVQAFAFAEAFIAAAAAAqAqQASgRAAgZQAAgWgPgQQgBgCgCgBQgRgSgZAAQgYAAgRASQgCABgBACQgPAQAAAWQAAAZASARQARASAYAAQAZAAARgSIAAAA").cp();
	this.shape_74.setTransform(7,7);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.lf(["rgba(204,204,204,0.4)","rgba(255,255,255,0.6)"],[0,1],-0.9,5.3,-0.9,-6.6).s().p("AAqAqQgRASgZAAQgYAAgRgSQgSgRAAgZQAAgWAPgQQABgCACgBQARgSAYAAQAZAAARASQACABABACQAPAQAAAWQAAAZgSARIAAAA").cp();
	this.shape_75.setTransform(7,7);

	this.addChild(this.shape_75,this.shape_74,this.shape_73);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,14,14);


(lib.RadioButton_selectedIcon = function() {
	this.initialize();

	// icon
	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#333333").s().p("AAAAUQgTAAAAgUQAAgTATAAQAUAAAAATQAAAUgUAAIAAAA").cp();
	this.shape_76.setTransform(2,2);

	this.addChild(this.shape_76);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,4,4);


(lib.RadioButton_overIcon = function() {
	this.initialize();

	// highlight
	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.lf(["rgba(204,204,204,0)","rgba(255,255,255,0.298)"],[0,1],-1,3.1,-1,-2.9).s().p("AgpgLQARgSAYAAQAZAAARASQACACABABQAPAPAAAXIh3AAQAAgXAPgPQABgBACgCIAAAA").cp();
	this.shape_77.setTransform(7,4.1);

	// fill
	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.lf(["rgba(238,238,238,0.651)","rgba(255,255,255,0.741)"],[0,1],-0.9,5.3,-0.9,-6.6).s().p("AAqAqQgRASgZAAQgYAAgRgSQgSgRAAgZQAAgYASgRQARgSAYAAQAZAAARASQASARAAAYQAAAZgSARIAAAA").cp();
	this.shape_78.setTransform(7,7);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.lf(["#0075BF","#009DFF"],[0,0.992],0.3,7.9,0.3,-7.7).s().p("AAqAqQASgRAAgZQAAgYgSgRQgRgSgZAAQgYAAgRASQgSARAAAYQAAAZASARQARASAYAAQAZAAARgSIAAAAABGAAQAAAdgVAUQgUAVgdAAQgcAAgUgVQgVgUAAgdQAAgcAVgUQAUgVAcAAQAdAAAUAVQAVAUAAAcIAAAA").cp();
	this.shape_79.setTransform(7,7);

	this.addChild(this.shape_79,this.shape_78,this.shape_77);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,14,14);


(lib.RadioButton_downIcon = function() {
	this.initialize();

	// highlight
	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.lf(["rgba(204,204,204,0)","rgba(255,255,255,0.298)"],[0,1],-1,3.1,-1,-2.9).s().p("AgpgLQARgSAYAAQAZAAARASQACABABACQAPAPAAAXIh3AAQAAgXAPgPQABgCACgBIAAAA").cp();
	this.shape_80.setTransform(7,4);

	// fill
	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.lf(["#99D7FE","#D9F0FE"],[0,1],-0.9,5.3,-0.9,-6.6).s().p("AA8AAQAAAZgSARQgRASgZAAQgYAAgRgSQgSgRAAgZQAAgYASgRQARgSAYAAQAZAAARASQASARAAAYIAAAA").cp();
	this.shape_81.setTransform(7,7);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.lf(["#0075BF","#009DFF"],[0,0.992],0.3,7.9,0.3,-7.7).s().p("ABGAAQAAAdgVAUQgUAVgdAAQgcAAgUgVQgVgUAAgdQAAgcAVgUQAUgVAcAAQAdAAAUAVQAVAUAAAcIAAAAAA8AAQAAgYgSgRQgRgSgZAAQgYAAgRASQgSARAAAYQAAAZASARQARASAYAAQAZAAARgSQASgRAAgZIAAAA").cp();
	this.shape_82.setTransform(7,7);

	this.addChild(this.shape_82,this.shape_81,this.shape_80);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,14,14);


(lib.RadioButton_disabledIcon = function() {
	this.initialize();

	// highlight
	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.lf(["rgba(204,204,204,0)","rgba(255,255,255,0.298)"],[0,1],-1,3.1,-1,-2.9).s().p("AgpgLQARgSAYAAQAZAAARASQACABABACQAPAPAAAXIh3AAQAAgXAPgPQABgCACgBIAAAA").cp();
	this.shape_83.setTransform(7,4);

	// fill
	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.lf(["rgba(91,93,94,0.298)","rgba(183,186,188,0.298)"],[0,1],0.5,7,0.5,-7.5).s().p("ABGAAQAAAdgVAUQgUAVgdAAQgcAAgUgVQgVgUAAgdQAAgVAMgRQAEgFAFgFQAUgVAcAAQAdAAAUAVQAFAFAEAFQAMARAAAVIAAAAAA8AAQAAgWgPgQQgBgCgCgBQgRgSgZAAQgYAAgRASQgCABgBACQgPAQAAAWQAAAZASARQARASAYAAQAZAAARgSQASgRAAgZIAAAA").cp();
	this.shape_84.setTransform(7,7);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.lf(["rgba(204,204,204,0.2)","rgba(255,255,255,0.298)"],[0,1],-0.9,5.3,-0.9,-6.6).s().p("AA8AAQAAAZgSARQgRASgZAAQgYAAgRgSQgSgRAAgZQAAgWAPgQQABgCACgBQARgSAYAAQAZAAARASQACABABACQAPAQAAAWIAAAA").cp();
	this.shape_85.setTransform(7,7);

	this.addChild(this.shape_85,this.shape_84,this.shape_83);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,14,14);


(lib.List_skin = function() {
	this.initialize();

	// Layer 2
	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("#CCCCCC").s().p("AUou/QASAAAOANQANANAAATIAAdNQAAABgCACQgBACgCAAMgqfAAAQgCAAgBgCQgCgCAAgBIAA9NQAAgTANgNQANgNATAAMApPAAAAVBurQgLgKgOAAMgpPAAAQgPAAgKAKQgKAKAAAPIAAdIMAqVAAAIAA9IQAAgPgKgKIAAAA").cp();
	this.shape_86.setTransform(136.5,96);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("#FFFFFF").s().p("AVBurQAKAKAAAPIAAdIMgqVAAAIAA9IQAAgPAKgKQAKgKAPAAMApPAAAQAOAAALAKIAAAA").cp();
	this.shape_87.setTransform(136.5,96);

	this.addChild(this.shape_87,this.shape_86);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,273,192);


(lib.ComboBox_upSkin = function() {
	this.initialize();

	// icon
	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f("#000000").s().p("AgEAKIAAAKIAJAAIAAgKIAKAAIAAgKIAKAAIAAgJIAKAAIAAgKIhFAAIAAAKIAKAAIAAAJIAKAAIAAAKIAKAA").cp();
	this.shape_88.setTransform(135.5,11);

	// highlight
	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.lf(["rgba(204,204,204,0)","rgba(255,255,255,0.298)"],[0,1],-12.4,5.5,-12.4,-4.9).s().p("ALaA3I2zAAIAAhPQAAgeAeAAIV3AAQAdAAABAeIAABP").cp();
	this.shape_89.setTransform(74,6.5);

	// fill
	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.lf(["rgba(204,204,204,0.4)","rgba(255,255,255,0.6)"],[0,1],-62.9,11,-62.9,-10.9).s().p("ALahFIAACLQAAAdgdABI15AAQgdgBAAgdIAAiLQAAgdAdgBIV5AAQAdABAAAdIAAAA").cp();
	this.shape_90.setTransform(74,11);

	// border
	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.lf(["#585F63","#B7BABC"],[0,1],63,11,63,-10.9).s().p("AIIhjIgKAAIy6AAQgdABAAAdIAACLQAAAdAdABIS6AAIAKAAIC1AAQAdgBAAgdIAAiLQAAgdgdgBIi1AAALkBGQAAAogoAAI13AAQgoAAAAgoIAAiLQAAgoAoAAIV3AAQAoAAAAAoIAACL").cp();
	this.shape_91.setTransform(74,11);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.lf(["#585F63","#B7BABC"],[0,1],0.2,20,0.2,-9.9).s().p("AgEBkIAAjHIAJAAIAADHIgJAA").cp();
	this.shape_92.setTransform(125.5,11);

	this.addChild(this.shape_92,this.shape_91,this.shape_90,this.shape_89,this.shape_88);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,148,22);


(lib.ComboBox_overSkin = function() {
	this.initialize();

	// icon
	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f("#000000").s().p("AgEAKIAAAKIAJAAIAAgKIAKAAIAAgKIAKAAIAAgJIAKAAIAAgKIhFAAIAAAKIAKAAIAAAJIAKAAIAAAKIAKAA").cp();
	this.shape_93.setTransform(135.5,11);

	// highlight
	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.lf(["rgba(204,204,204,0)","rgba(255,255,255,0.298)"],[0,1],-12.4,5.5,-12.4,-4.9).s().p("AH+g2IAABtIzXAAIAAhPQAAgeAeAAIS5AAALaA3IjSAAIAAhtIC0AAQAdAAABAeIAABP").cp();
	this.shape_94.setTransform(74,6.5);

	// fill
	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.lf(["rgba(238,238,238,0.651)","rgba(255,255,255,0.741)"],[0,1],-62.9,11,-62.9,-10.9).s().p("AH+hjIAADHIy6AAQgcgBgBgcIAAiNQABgcAcgBIS6AAALaBGQAAAdgdABIi1AAIAAjHIC1AAQAdABAAAdIAACL").cp();
	this.shape_95.setTransform(74,11);

	// border
	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.lf(["#0075C0","#009DFF"],[0,0.992],0.4,10.2,0.4,-10).s().p("AgEBkIAAjHIAJAAIAADHIgJAA").cp();
	this.shape_96.setTransform(125.5,11);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.lf(["#0075BF","#009DFF"],[0,0.992],63,11,63,-10.9).s().p("AIIhjIgKAAIy6AAQgcABgBAcIAACNQABAcAcABIS6AAIAKAAIC1AAQAdgBAAgdIAAiLQAAgdgdgBIi1AAALkhFIAACLQAAADAAADQgEAigkAAI13AAQgHAAgGgCIgSgKQgEgFgCgHQgBgBAAgBQAAAAAAgBQAAAAAAAAQAAgBgBAAQAAgCAAgBQgBgFAAgEIAAiLQAAglAjgCQADgBACAAIV3AAQAkAAAEAiQAAADAAADIAAAA").cp();
	this.shape_97.setTransform(74,11);

	this.addChild(this.shape_97,this.shape_96,this.shape_95,this.shape_94,this.shape_93);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,148,22);


(lib.ComboBox_downSkin = function() {
	this.initialize();

	// icon
	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f("#000000").s().p("AgEAKIAAAKIAJAAIAAgKIAKAAIAAgKIAKAAIAAgJIAKAAIAAgKIhFAAIAAAKIAKAAIAAAJIAKAAIAAAKIAKAA").cp();
	this.shape_98.setTransform(135.5,11);

	// highlight
	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.lf(["rgba(204,204,204,0)","rgba(255,255,255,0.298)"],[0,1],-1.4,5.8,-1.4,-5.2).s().p("AJsg2IAABtIzXAAIAAhPQAAgeAeAAIS5AA").cp();
	this.shape_99.setTransform(63,6.5);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.lf(["rgba(204,204,204,0)","rgba(255,255,255,0.298)"],[0,1],-74.9,5.5,-74.9,-4.9).s().p("ABpA3IjRAAIAAhtICzAAQAdAAABAeIAABP").cp();
	this.shape_100.setTransform(136.5,6.5);

	// fill
	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.lf(["#99D7FE","#D9F0FE"],[0,1],-51.9,11,-51.9,-10.9).s().p("AJshjIy6AAQgcABgBAcIAACNQABAcAcABIS6AAIAAjH").cp();
	this.shape_101.setTransform(63,11);

	// border
	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.lf(["#0075C0","#009DFF"],[0,0.992],0.4,10.2,0.4,-10).s().p("AgEBkIAAjHIAJAAIAADHIgJAA").cp();
	this.shape_102.setTransform(125.5,11);

	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.lf(["rgba(238,238,238,0.651)","rgba(255,255,255,0.741)"],[0,1],-125.4,11,-125.4,-10.9).s().p("AhoBkIAAjHIC0AAQAdABAAAdIAACLQAAAdgdABIi0AA").cp();
	this.shape_103.setTransform(136.5,11);

	this.shape_104 = new cjs.Shape();
	this.shape_104.graphics.lf(["#0075BF","#009DFF"],[0,0.992],63,11,63,-10.9).s().p("ALkBMQgEAigkAAI13AAQgoAAAAgoIAAiLQAAgJACgHQADgIAFgGQAKgKAUAAIV3AAQAkAAAEAiQAAADAAADIAACLQAAADAAADIAAAAAH+BkIAKAAIC1AAQAdgBAAgdIAAiLQAAgdgdgBIi1AAIgKAAIy6AAQgcABgBAcIAACMQAAAdAdABIS6AA").cp();
	this.shape_104.setTransform(74,11);

	this.addChild(this.shape_104,this.shape_103,this.shape_102,this.shape_101,this.shape_100,this.shape_99,this.shape_98);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,148,22);


(lib.ComboBox_disabledSkin = function() {
	this.initialize();

	// icon
	this.shape_105 = new cjs.Shape();
	this.shape_105.graphics.f("rgba(0,0,0,0.4)").s().p("AgEAKIAAAKIAJAAIAAgKIAKAAIAAgKIAKAAIAAgJIAKAAIAAgKIhFAAIAAAKIAKAAIAAAJIAKAAIAAAKIAKAA").cp();
	this.shape_105.setTransform(135.5,11);

	// highlight
	this.shape_106 = new cjs.Shape();
	this.shape_106.graphics.lf(["rgba(204,204,204,0)","rgba(255,255,255,0.141)"],[0,1],-12.3,5.5,-12.3,-4.9).s().p("ALaA3I2yAAIgBhPQAAgeAeABIV2AAQAegBAAAeIABBP").cp();
	this.shape_106.setTransform(74,6.5);

	// fill
	this.shape_107 = new cjs.Shape();
	this.shape_107.graphics.lf(["rgba(204,204,204,0.2)","rgba(255,255,255,0.298)"],[0,1],-62.9,11,-62.9,-10.9).s().p("ALahFIAACLQAAAdgdABI15AAQgdgBAAgdIAAiLQAAgdAdgBIV5AAQAdABAAAdIAAAA").cp();
	this.shape_107.setTransform(74,11);

	// border
	this.shape_108 = new cjs.Shape();
	this.shape_108.graphics.lf(["rgba(88,95,99,0.298)","rgba(183,186,188,0.298)"],[0,1],0.2,20,0.2,-9.9).s().p("AgEhjIAJAAIAADHIgJAAIAAjH").cp();
	this.shape_108.setTransform(125.5,11);

	this.shape_109 = new cjs.Shape();
	this.shape_109.graphics.lf(["rgba(88,95,99,0.298)","rgba(183,186,188,0.298)"],[0,1],63,11,63,-10.9).s().p("AK8htI13AAQgoAAAAAoIAACLQAAAoAoAAIV3AAQAoAAAAgoIAAiLQAAgogoAAIAAAAALahFIAACLQAAAdgdABI15AAQgdgBAAgdIAAiLQAAgdAdgBIV5AAQAdABAAAdIAAAA").cp();
	this.shape_109.setTransform(74,11);

	this.addChild(this.shape_109,this.shape_108,this.shape_107,this.shape_106,this.shape_105);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,148,22);


(lib.CheckBox_upIcon = function() {
	this.initialize();

	// highlight
	this.shape_110 = new cjs.Shape();
	this.shape_110.graphics.lf(["rgba(238,238,238,0)","rgba(255,255,255,0.298)"],[0,1],-0.9,3.5,-0.9,-3.1).s().p("AA8AgIh3AAIAAg/IB3AAIAAA/").cp();
	this.shape_110.setTransform(7,4.3);

	// fill
	this.shape_111 = new cjs.Shape();
	this.shape_111.graphics.lf(["rgba(204,204,204,0.4)","rgba(255,255,255,0.6)"],[0,1],-0.9,7,-0.9,-6.5).s().p("AA8g7IAAB3Ih3AAIAAh3IB3AA").cp();
	this.shape_111.setTransform(7,7);

	// border
	this.shape_112 = new cjs.Shape();
	this.shape_112.graphics.lf(["#5B5D5E","#B7BABC"],[0,1],1.5,5.9,1.5,-6.9).s().p("AhFBGICLAAIAAiLIiLAAIAACLAA8g7IAAB3Ih3AAIAAh3IB3AA").cp();
	this.shape_112.setTransform(7,7);

	this.addChild(this.shape_112,this.shape_111,this.shape_110);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,14,14);


(lib.CheckBox_selectedIcon = function() {
	this.initialize();

	// icon
	this.shape_113 = new cjs.Shape();
	this.shape_113.graphics.f("#000000").s().p("AgxgGIAUgBIAPAdIAqhCIAWAAIgMAOIgqBLIgWAAIgXgz").cp();
	this.shape_113.setTransform(5,4.5);

	this.addChild(this.shape_113);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,10,9);


(lib.CheckBox_overIcon = function() {
	this.initialize();

	// highlight
	this.shape_114 = new cjs.Shape();
	this.shape_114.graphics.lf(["rgba(238,238,238,0)","rgba(255,255,255,0.298)"],[0,1],-0.9,3.5,-0.9,-3.1).s().p("AA8AgIh3AAIAAg/IB3AAIAAA/").cp();
	this.shape_114.setTransform(7,4.3);

	// fill
	this.shape_115 = new cjs.Shape();
	this.shape_115.graphics.lf(["rgba(238,238,238,0.651)","rgba(255,255,255,0.741)"],[0,1],-0.9,7,-0.9,-6.5).s().p("Ag7A8IAAh3IB3AAIAAB3Ih3AA").cp();
	this.shape_115.setTransform(7,7);

	// border
	this.shape_116 = new cjs.Shape();
	this.shape_116.graphics.lf(["#0075BF","#009DFF"],[0,0.992],0.8,6.7,0.8,-7.7).s().p("AhFhFIAACLICLAAIAAiLIiLAAAg7A8IAAh3IB3AAIAAB3Ih3AA").cp();
	this.shape_116.setTransform(7,7);

	this.addChild(this.shape_116,this.shape_115,this.shape_114);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,14,14);


(lib.CheckBox_downIcon = function() {
	this.initialize();

	// highlight
	this.shape_117 = new cjs.Shape();
	this.shape_117.graphics.lf(["rgba(238,238,238,0)","rgba(255,255,255,0.298)"],[0,1],-0.9,3.5,-0.9,-3.1).s().p("AA8AgIh3AAIAAg/IB3AAIAAA/").cp();
	this.shape_117.setTransform(7,4.3);

	// fill
	this.shape_118 = new cjs.Shape();
	this.shape_118.graphics.lf(["#99D7FE","#D9F0FE"],[0,1],-0.9,7,-0.9,-6.5).s().p("AA8g7IAAB3Ih3AAIAAh3IB3AA").cp();
	this.shape_118.setTransform(7,7);

	// border
	this.shape_119 = new cjs.Shape();
	this.shape_119.graphics.lf(["#0075BF","#009DFF"],[0,0.992],0.8,6.7,0.8,-7.7).s().p("ABGBGIAAiLIiLAAIAACLICLAAAA8g7IAAB3Ih3AAIAAh3IB3AA").cp();
	this.shape_119.setTransform(7,7);

	this.addChild(this.shape_119,this.shape_118,this.shape_117);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,14,14);


(lib.CheckBox_disabledIcon = function() {
	this.initialize();

	// highlight
	this.shape_120 = new cjs.Shape();
	this.shape_120.graphics.lf(["rgba(238,238,238,0)","rgba(255,255,255,0.298)"],[0,1],-0.9,3.5,-0.9,-3.1).s().p("AA8AgIh3AAIAAg/IB3AAIAAA/").cp();
	this.shape_120.setTransform(7,4.3);

	// fill
	this.shape_121 = new cjs.Shape();
	this.shape_121.graphics.lf(["rgba(204,204,204,0.2)","rgba(255,255,255,0.298)"],[0,1],-0.9,7,-0.9,-6.5).s().p("AA8g7IAAB3Ih3AAIAAh3IB3AA").cp();
	this.shape_121.setTransform(7,7);

	// border
	this.shape_122 = new cjs.Shape();
	this.shape_122.graphics.lf(["rgba(204,204,204,0.2)","rgba(255,255,255,0.298)"],[0,1],-0.9,7,-0.9,-6.5).s().p("AA8A8Ih3AAIAAh3IB3AAIAAB3").cp();
	this.shape_122.setTransform(7,7);

	this.shape_123 = new cjs.Shape();
	this.shape_123.graphics.lf(["rgba(91,93,94,0.298)","rgba(183,186,188,0.298)"],[0,1],1.5,5.9,1.5,-6.9).s().p("AA8g7IAAB3Ih3AAIAAh3IB3AAAhFBGICLAAIAAiLIiLAAIAACL").cp();
	this.shape_123.setTransform(7,7);

	this.addChild(this.shape_123,this.shape_122,this.shape_121,this.shape_120);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,14,14);


(lib.CellRenderer_upSkin = function() {
	this.initialize();

	// border
	this.shape_124 = new cjs.Shape();
	this.shape_124.graphics.lf(["#5B5D5E","#B7BABC"],[0,1],67.5,-9.8,67.5,3).s().p("ArtBhIAAADIXbAAIAAgDIAKAAIAAANI3vAAIAAgNIAKAAArthjIgKAAIAAgKIXvAAIAAAKIgKAAI3bAA").cp();
	this.shape_124.setTransform(76,11);

	this.shape_125 = new cjs.Shape();
	this.shape_125.graphics.f("#B7BABC").s().p("Ar3hhIAKAAIAADDIgKAAIAAjDAL4BiIgKAAIAAjDIAKAAIAADD").cp();
	this.shape_125.setTransform(76,10.9);

	// fill
	this.shape_126 = new cjs.Shape();
	this.shape_126.graphics.f("#FFFFFF").s().p("AL4BuI3vAAIAAjaIXvAAIAADa").cp();
	this.shape_126.setTransform(76,11);

	this.addChild(this.shape_126,this.shape_125,this.shape_124);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,152,22.1);


(lib.CellRenderer_selectedUpSkin = function() {
	this.initialize();

	// border
	this.shape_127 = new cjs.Shape();
	this.shape_127.graphics.lf(["#5B5D5E","#B7BABC"],[0,1],-67.4,9.9,-67.4,-2.9).s().p("Ar3hgIAAgNIXvAAIAAANIgKAAIAAgDI3bAAIAAADIgKAAALuBkIAKAAIAAAKI3vAAIAAgKIAKAAIXbAA").cp();
	this.shape_127.setTransform(76,11);

	this.shape_128 = new cjs.Shape();
	this.shape_128.graphics.f("#B7BABC").s().p("ALuBiIAAjDIAKAAIAADDIgKAAAr3hhIAKAAIAADDIgKAAIAAjD").cp();
	this.shape_128.setTransform(76,11.1);

	// fill
	this.shape_129 = new cjs.Shape();
	this.shape_129.graphics.f("#9AD8FF").s().p("AL4BuI3vAAIAAjaIXvAAIAADa").cp();
	this.shape_129.setTransform(76,11);

	this.addChild(this.shape_129,this.shape_128,this.shape_127);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,152,22.1);


(lib.CellRenderer_selectedOverSkin = function() {
	this.initialize();

	// highlight
	this.shape_130 = new cjs.Shape();
	this.shape_130.graphics.lf(["rgba(238,238,238,0)","rgba(255,255,255,0.298)"],[0,1],-12.4,6,-12.4,-5.5).s().p("ALuA3I3bAAIAAhtIXbAAIAABt").cp();
	this.shape_130.setTransform(76,6.5);

	// fill
	this.shape_131 = new cjs.Shape();
	this.shape_131.graphics.lf(["rgba(238,238,238,0.651)","rgba(255,255,255,0.741)"],[0,1],-12.4,11.6,-12.4,-11).s().p("ALuBkI3bAAIAAjHIXbAAIAADH").cp();
	this.shape_131.setTransform(76,11);

	this.shape_132 = new cjs.Shape();
	this.shape_132.graphics.lf(["#0075BF","#009DFF"],[0,0.992],-67.4,9.9,-67.4,-2.9).s().p("AL4htIAADbI3vAAIAAjbIXvAAALuBkIAAjHI3bAAIAADHIXbAA").cp();
	this.shape_132.setTransform(76,11);

	// border
	this.shape_133 = new cjs.Shape();
	this.shape_133.graphics.f("#DAF1FF").s().p("AL4BuI3vAAIAAjaIXvAAIAADa").cp();
	this.shape_133.setTransform(76,11);

	this.addChild(this.shape_133,this.shape_132,this.shape_131,this.shape_130);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,152,22.1);


(lib.CellRenderer_selectedDownSkin = function() {
	this.initialize();

	// border
	this.shape_134 = new cjs.Shape();
	this.shape_134.graphics.lf(["#0075BF","#009DFF"],[0,0.992],-67.4,9.9,-67.4,-2.9).s().p("AL4htI3vAAIAADbIXvAAIAAjbALuBkI3bAAIAAjHIXbAAIAADH").cp();
	this.shape_134.setTransform(76,11);

	// fill
	this.shape_135 = new cjs.Shape();
	this.shape_135.graphics.f("#9AD8FF").s().p("AL4BuI3vAAIAAjaIXvAAIAADa").cp();
	this.shape_135.setTransform(76,11);

	this.addChild(this.shape_135,this.shape_134);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,152,22.1);


(lib.CellRenderer_selectedDisabledSkin = function() {
	this.initialize();

	// highlight
	this.shape_136 = new cjs.Shape();
	this.shape_136.graphics.lf(["rgba(238,238,238,0)","rgba(255,255,255,0.2)"],[0,1],-12.4,6,-12.4,-5.5).s().p("ALuA3I3bAAIAAhtIXbAAIAABt").cp();
	this.shape_136.setTransform(76,6.5);

	// fill
	this.shape_137 = new cjs.Shape();
	this.shape_137.graphics.lf(["rgba(204,204,204,0.2)","rgba(255,255,255,0.298)"],[0,1],-12.4,11.6,-12.4,-11).s().p("ALuBkI3bAAIAAjHIXbAAIAADH").cp();
	this.shape_137.setTransform(76,11);

	this.shape_138 = new cjs.Shape();
	this.shape_138.graphics.lf(["rgba(91,93,94,0.298)","rgba(183,186,188,0.298)"],[0,1],-67.4,9.9,-67.4,-2.9).s().p("AL4htIAADbI3vAAIAAjbIXvAAALuBkIAAjHI3bAAIAADHIXbAA").cp();
	this.shape_138.setTransform(76,11);

	this.addChild(this.shape_138,this.shape_137,this.shape_136);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,152,22);


(lib.CellRenderer_overSkin = function() {
	this.initialize();

	// border
	this.shape_139 = new cjs.Shape();
	this.shape_139.graphics.lf(["#0075BF","#009DFF"],[0,0.992],67.5,-9.8,67.5,3).s().p("AL4htI3vAAIAADbIXvAAIAAjbALuBkI3bAAIAAjHIXbAAIAADH").cp();
	this.shape_139.setTransform(76,11);

	// fill
	this.shape_140 = new cjs.Shape();
	this.shape_140.graphics.f("#DAF1FF").s().p("AL4BuI3vAAIAAjaIXvAAIAADa").cp();
	this.shape_140.setTransform(76,11);

	this.addChild(this.shape_140,this.shape_139);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,152,22.1);


(lib.CellRenderer_downSkin = function() {
	this.initialize();

	// border
	this.shape_141 = new cjs.Shape();
	this.shape_141.graphics.lf(["#0075BF","#009DFF"],[0,0.992],67.5,-9.8,67.5,3).s().p("ALuBkI3bAAIAAjHIXbAAIAADHAL4htI3vAAIAADbIXvAAIAAjb").cp();
	this.shape_141.setTransform(76,11);

	// fill
	this.shape_142 = new cjs.Shape();
	this.shape_142.graphics.f("#9AD8FF").s().p("AL4BuI3vAAIAAjaIXvAAIAADa").cp();
	this.shape_142.setTransform(76,11);

	this.addChild(this.shape_142,this.shape_141);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,152,22.1);


(lib.CellRenderer_disabledSkin = function() {
	this.initialize();

	// border
	this.shape_143 = new cjs.Shape();
	this.shape_143.graphics.lf(["rgba(91,93,94,0.298)","rgba(183,186,188,0.298)"],[0,1],67.5,-9.8,67.5,3).s().p("ALuBkI3bAAIAAjHIXbAAIAADHAL4htI3vAAIAADbIXvAAIAAjb").cp();
	this.shape_143.setTransform(76,11);

	// fill
	this.shape_144 = new cjs.Shape();
	this.shape_144.graphics.f("rgba(255,255,255,0.298)").s().p("AL4BuI3vAAIAAjaIXvAAIAADa").cp();
	this.shape_144.setTransform(76,11);

	this.addChild(this.shape_144,this.shape_143);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,152,22.1);


(lib.Button_upSkin = function() {
	this.initialize();

	// highlight
	this.shape_145 = new cjs.Shape();
	this.shape_145.graphics.lf(["rgba(204,204,204,0)","rgba(255,255,255,0.298)"],[0,1],40.6,5.5,40.6,-4.9).s().p("ADIA3ImOAAIAAhPQgBgeAfABIFwAAIAABs").cp();
	this.shape_145.setTransform(21,6.5);

	this.shape_146 = new cjs.Shape();
	this.shape_146.graphics.lf(["rgba(204,204,204,0)","rgba(255,255,255,0.298)"],[0,1],19.5,1.6,19.5,-4.8).s().p("AjHA3IAAhsIFwAAQAegBAAAeIABBPImPAA").cp();
	this.shape_146.setTransform(61,6.5);

	// fill
	this.shape_147 = new cjs.Shape();
	this.shape_147.graphics.lf(["rgba(204,204,204,0.4)","rgba(255,255,255,0.6)"],[0,1],-9.8,11,-9.8,-10.9).s().p("ADIBkIlyAAQgdgBAAgdIAAiLQAAgdAdgBIFyAAIAADH").cp();
	this.shape_147.setTransform(21,11);

	this.shape_148 = new cjs.Shape();
	this.shape_148.graphics.lf(["rgba(204,204,204,0.4)","rgba(255,255,255,0.6)"],[0,1],10,11,10,-10.9).s().p("AjGBkIAAjHIFxAAQAcABAAAdIAACLQAAAdgcABIlxAA").cp();
	this.shape_148.setTransform(61,11);

	// border
	this.shape_149 = new cjs.Shape();
	this.shape_149.graphics.lf(["#585F63","#B7BABC"],[0,1],-9.3,11,-9.3,-10.9).s().p("ADNhtIAAAKIlyAAQgdABAAAdIAACLQAAAdAdABIFyAAIAAAKIlwAAQgpAAAAgoIAAiLQAAgoApAAIFwAA").cp();
	this.shape_149.setTransform(20.5,11);

	this.shape_150 = new cjs.Shape();
	this.shape_150.graphics.lf(["#585F63","#B7BABC"],[0,1],9.5,11,9.5,-10.9).s().p("AjMhjIAAgKIFxAAQAoAAAAAoIAACLQAAAogoAAIlxAAIAAgKIFyAAQAdgBAAgdIAAiLQAAgdgdgBIlyAA").cp();
	this.shape_150.setTransform(61.5,11);

	this.addChild(this.shape_150,this.shape_149,this.shape_148,this.shape_147,this.shape_146,this.shape_145);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,82,22);


(lib.Button_selectedUpSkin = function() {
	this.initialize();

	// fill
	this.shape_151 = new cjs.Shape();
	this.shape_151.graphics.lf(["rgba(204,204,204,0.4)","rgba(204,204,204,0.6)"],[0,1],19,11,19,-10.9).s().p("AhshjIC8AAQAdABAAAdIAACLQAAAdgdABIi8AAIAAjH").cp();
	this.shape_151.setTransform(52,11);

	this.shape_152 = new cjs.Shape();
	this.shape_152.graphics.lf(["rgba(204,204,204,0.4)","rgba(204,204,204,0.6)"],[0,1],-9.8,11,-9.8,-10.9).s().p("ADIBkIlyAAQgdgBAAgdIAAiLQAAgdAdgBIFyAAIAADH").cp();
	this.shape_152.setTransform(21,11);

	// border
	this.shape_153 = new cjs.Shape();
	this.shape_153.graphics.lf(["#585F63","#B7BABC"],[0,1],-9.3,11,-9.3,-10.9).s().p("ADMBuIlvAAQgoAAAAgoIAAiLQAAgoAoAAIFvAAIAAAKIlxAAQgcABAAAdIAACLQAAAdAcABIFxAAIAAAK").cp();
	this.shape_153.setTransform(20.5,11);

	this.shape_154 = new cjs.Shape();
	this.shape_154.graphics.lf(["#585F63","#B7BABC"],[0,1],18.5,11,18.5,-10.9).s().p("AhyBuIAAgKIC+AAQAdgBAAgdIAAiLQAAgdgdgBIi+AAIAAgKIC9AAQAoAAAAAoIAACLQAAAogoAAIi9AA").cp();
	this.shape_154.setTransform(52.5,11);

	this.addChild(this.shape_154,this.shape_153,this.shape_152,this.shape_151);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0.1,0,64,22);


(lib.Button_selectedOverSkin = function() {
	this.initialize();

	// fill
	this.shape_155 = new cjs.Shape();
	this.shape_155.graphics.lf(["rgba(204,204,204,0.4)","rgba(204,204,204,0.6)"],[0,1],-9.8,11,-9.8,-10.9).s().p("ADIBkIlyAAQgdgBAAgdIAAiLQAAgdAdgBIFyAAIAADH").cp();
	this.shape_155.setTransform(21,11);

	this.shape_156 = new cjs.Shape();
	this.shape_156.graphics.lf(["rgba(204,204,204,0.4)","rgba(204,204,204,0.6)"],[0,1],19,11,19,-10.9).s().p("AhsBkIAAjHIC8AAQAdABAAAdIAACLQAAAdgdABIi8AA").cp();
	this.shape_156.setTransform(52,11);

	// border
	this.shape_157 = new cjs.Shape();
	this.shape_157.graphics.lf(["#0075BF","#009DFF"],[0,1],-9.3,11,-9.3,-10.9).s().p("ADMBuIlvAAQgoAAAAgoIAAiLQAAgoAoAAIFvAAIAAAKIlxAAQgcABAAAdIAACLQAAAdAcABIFxAAIAAAK").cp();
	this.shape_157.setTransform(20.5,11);

	this.shape_158 = new cjs.Shape();
	this.shape_158.graphics.lf(["#0075BF","#009DFF"],[0,1],18.5,11,18.5,-10.9).s().p("AhyBuIAAgKIC+AAQAdgBAAgdIAAiLQAAgdgdgBIi+AAIAAgKIC9AAQAoAAAAAoIAACLQAAAogoAAIi9AA").cp();
	this.shape_158.setTransform(52.5,11);

	this.addChild(this.shape_158,this.shape_157,this.shape_156,this.shape_155);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0.1,0,64,22);


(lib.Button_selectedDownSkin = function() {
	this.initialize();

	// fill
	this.shape_159 = new cjs.Shape();
	this.shape_159.graphics.lf(["#94D2FC","#ADE4FC","#BEEAFC"],[0,1,1],10,-10.9,10,11).s().p("ADIBkIlyAAQgdgBAAgdIAAiLQAAgdAdgBIFyAAIAADH").cp();
	this.shape_159.setTransform(21,11);

	this.shape_160 = new cjs.Shape();
	this.shape_160.graphics.lf(["#94D2FC","#ADE4FC","#BEEAFC"],[0,1,1],-18.8,-10.9,-18.8,11).s().p("AhshjIC8AAQAdABAAAdIAACLQAAAdgdABIi8AAIAAjH").cp();
	this.shape_160.setTransform(52,11);

	// border
	this.shape_161 = new cjs.Shape();
	this.shape_161.graphics.lf(["#0075BF","#009DFF"],[0,1],-9.3,11,-9.3,-10.9).s().p("ADMBuIlvAAQgoAAAAgoIAAiLQAAgoAoAAIFvAAIAAAKIlxAAQgcABAAAdIAACLQAAAdAcABIFxAAIAAAK").cp();
	this.shape_161.setTransform(20.5,11);

	this.shape_162 = new cjs.Shape();
	this.shape_162.graphics.lf(["#0075BF","#009DFF"],[0,1],18.5,11,18.5,-10.9).s().p("AhyBuIAAgKIC+AAQAdgBAAgdIAAiLQAAgdgdgBIi+AAIAAgKIC9AAQAoAAAAAoIAACLQAAAogoAAIi9AA").cp();
	this.shape_162.setTransform(52.5,11);

	this.addChild(this.shape_162,this.shape_161,this.shape_160,this.shape_159);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0.1,0,64,22);


(lib.Button_selectedDisabledSkin = function() {
	this.initialize();

	// fill
	this.shape_163 = new cjs.Shape();
	this.shape_163.graphics.lf(["rgba(204,204,204,0.2)","rgba(204,204,204,0.298)"],[0,1],-9.8,11,-9.8,-10.9).s().p("ADIBkIlyAAQgdgBAAgdIAAiLQAAgdAdgBIFyAAIAADH").cp();
	this.shape_163.setTransform(21,11);

	this.shape_164 = new cjs.Shape();
	this.shape_164.graphics.lf(["rgba(204,204,204,0.2)","rgba(204,204,204,0.298)"],[0,1],19,11,19,-10.9).s().p("AhsBkIAAjHIC8AAQAdABAAAdIAACLQAAAdgdABIi8AA").cp();
	this.shape_164.setTransform(52,11);

	// border
	this.shape_165 = new cjs.Shape();
	this.shape_165.graphics.lf(["rgba(88,95,99,0.298)","rgba(183,186,188,0.2)"],[0,1],-9.3,11,-9.3,-10.9).s().p("ADMBuIlvAAQgoAAAAgoIAAiLQAAgoAoAAIFvAAIAAAKIlxAAQgcABAAAdIAACLQAAAdAcABIFxAAIAAAK").cp();
	this.shape_165.setTransform(20.5,11);

	this.shape_166 = new cjs.Shape();
	this.shape_166.graphics.lf(["rgba(88,95,99,0.298)","rgba(183,186,188,0.2)"],[0,1],18.5,11,18.5,-10.9).s().p("AhyBuIAAgKIC+AAQAdgBAAgdIAAiLQAAgdgdgBIi+AAIAAgKIC9AAQAoAAAAAoIAACLQAAAogoAAIi9AA").cp();
	this.shape_166.setTransform(52.5,11);

	this.addChild(this.shape_166,this.shape_165,this.shape_164,this.shape_163);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0.1,0,64,22);


(lib.Button_overSkin = function() {
	this.initialize();

	// highlight
	this.shape_167 = new cjs.Shape();
	this.shape_167.graphics.lf(["rgba(204,204,204,0)","rgba(255,255,255,0.298)"],[0,1],40.6,5.5,40.6,-4.9).s().p("ADIA3ImPAAIAAhPQAAgeAeAAIFxAAIAABt").cp();
	this.shape_167.setTransform(21,6.5);

	this.shape_168 = new cjs.Shape();
	this.shape_168.graphics.lf(["rgba(204,204,204,0)","rgba(255,255,255,0.298)"],[0,1],19.5,1.5,19.5,-4.9).s().p("AjHA3IAAhtIFxAAQAdAAABAeIAABPImPAA").cp();
	this.shape_168.setTransform(61,6.5);

	// fill
	this.shape_169 = new cjs.Shape();
	this.shape_169.graphics.lf(["rgba(204,204,204,0.4)","rgba(255,255,255,0.6)"],[0,1],30,11,30,-10.9).s().p("AGQBGQAAAdgdABIrlAAQgdgBABgdIAAiLQgBgdAdgBILlAAQAdABAAAdIAACL").cp();
	this.shape_169.setTransform(41,11);

	// border
	this.shape_170 = new cjs.Shape();
	this.shape_170.graphics.lf(["#0075BF","#009DFF"],[0,0.992],-9.3,11,-9.3,-10.9).s().p("ADNBkIAAAKIlwAAQgpAAAAgoIAAiLQAAgoApAAIFwAAIAAAKIlyAAQgdABAAAdIAACLQAAAdAdABIFyAA").cp();
	this.shape_170.setTransform(20.5,11);

	this.shape_171 = new cjs.Shape();
	this.shape_171.graphics.lf(["#0075BF","#009DFF"],[0,0.992],9.5,11,9.5,-10.9).s().p("AjMBuIAAgKIFyAAQAdgBAAgdIAAiLQAAgdgdgBIlyAAIAAgKIFxAAQAoAAAAAoIAACLQAAAogoAAIlxAA").cp();
	this.shape_171.setTransform(61.5,11);

	this.addChild(this.shape_171,this.shape_170,this.shape_169,this.shape_168,this.shape_167);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,82,22);


(lib.Button_emphasizedSkin = function() {
	this.initialize();

	// fill
	this.shape_172 = new cjs.Shape();
	this.shape_172.graphics.f("rgba(255,255,255,0)").s().rr(-40.05,-10,80.1,20,3);
	this.shape_172.setTransform(41,11);

	// border
	this.shape_173 = new cjs.Shape();
	this.shape_173.graphics.lf(["#2C92F5","#3D00CC"],[0,1],0,-10.7,0,10.8).s().p("AGahFQAAgogoAAIrjAAQgoAAAAAoIAACLQAAAoAoAAILjAAQAoAAAAgoIAAiLAGQBGQAAAdgdABIrlAAQgdgBAAgdIAAiLQAAgdAdgBILlAAQAdABAAAdIAACL").cp();
	this.shape_173.setTransform(41,11);

	this.addChild(this.shape_173,this.shape_172);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0.1,0,82,22);


(lib.Button_downSkin = function() {
	this.initialize();

	// highlight
	this.shape_174 = new cjs.Shape();
	this.shape_174.graphics.lf(["rgba(204,204,204,0)","rgba(255,255,255,0.298)"],[0,1],40.6,5.5,40.6,-4.9).s().p("ADIA3ImPAAIAAhPQAAgeAeAAIFxAAIAABt").cp();
	this.shape_174.setTransform(21,6.5);

	this.shape_175 = new cjs.Shape();
	this.shape_175.graphics.lf(["rgba(204,204,204,0)","rgba(255,255,255,0.298)"],[0,1],19.5,1.5,19.5,-4.9).s().p("AjHA3IAAhtIFxAAQAdAAABAeIAABPImPAA").cp();
	this.shape_175.setTransform(61,6.5);

	// fill
	this.shape_176 = new cjs.Shape();
	this.shape_176.graphics.lf(["#99D7FE","#D9F0FE"],[0,1],-9.8,11,-9.8,-10.9).s().p("ADIhjIAADHIlyAAQgdgBABgdIAAiLQgBgdAdgBIFyAA").cp();
	this.shape_176.setTransform(21,11);

	this.shape_177 = new cjs.Shape();
	this.shape_177.graphics.lf(["#99D7FE","#D9F0FE"],[0,1],10,11,10,-10.9).s().p("AjHBkIAAjHIFyAAQAdABAAAdIAACLQAAAdgdABIlyAA").cp();
	this.shape_177.setTransform(61.1,11);

	// border
	this.shape_178 = new cjs.Shape();
	this.shape_178.graphics.lf(["#0075BF","#009DFF"],[0,0.992],-9.3,11,-9.3,-10.9).s().p("ADNBkIAAAKIlwAAQgpAAAAgoIAAiLQAAgoApAAIFwAAIAAAKIlyAAQgdABAAAdIAACLQAAAdAdABIFyAA").cp();
	this.shape_178.setTransform(20.5,11);

	this.shape_179 = new cjs.Shape();
	this.shape_179.graphics.lf(["#0075BF","#009DFF"],[0,0.992],9.5,11,9.5,-10.9).s().p("AjMBuIAAgKIFyAAQAdgBAAgdIAAiLQAAgdgdgBIlyAAIAAgKIFxAAQAoAAAAAoIAACLQAAAogoAAIlxAA").cp();
	this.shape_179.setTransform(61.5,11);

	this.addChild(this.shape_179,this.shape_178,this.shape_177,this.shape_176,this.shape_175,this.shape_174);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,82,22);


(lib.Button_disabledSkin = function() {
	this.initialize();

	// highlight
	this.shape_180 = new cjs.Shape();
	this.shape_180.graphics.lf(["rgba(204,204,204,0)","rgba(255,255,255,0.141)"],[0,1],39.5,1.6,39.5,-4.8).s().p("AGQA3IseAAIgBhPQAAgeAeABILiAAQAegBAAAeIABBP").cp();
	this.shape_180.setTransform(41,6.5);

	// fill
	this.shape_181 = new cjs.Shape();
	this.shape_181.graphics.lf(["rgba(204,204,204,0.2)","rgba(255,255,255,0.298)"],[0,1],30,11,30,-10.9).s().p("AGQBGQAAAdgdABIrlAAQgdgBABgdIAAiLQgBgdAdgBILlAAQAdABAAAdIAACL").cp();
	this.shape_181.setTransform(41,11);

	// border
	this.shape_182 = new cjs.Shape();
	this.shape_182.graphics.lf(["rgba(88,95,99,0.298)","rgba(183,186,188,0.298)"],[0,1],-9.3,11,-9.3,-10.9).s().p("ADMhtIAAAKIlxAAQgcABAAAdIAACLQAAAdAcABIFxAAIAAAKIlvAAQgoAAAAgoIAAiLQAAgoAoAAIFvAA").cp();
	this.shape_182.setTransform(20.5,11);

	this.shape_183 = new cjs.Shape();
	this.shape_183.graphics.lf(["rgba(88,95,99,0.298)","rgba(183,186,188,0.298)"],[0,1],9.5,11,9.5,-10.9).s().p("AjMhjIAAgKIFxAAQAoAAAAAoIAACLQAAAogoAAIlxAAIAAgKIFyAAQAdgBAAgdIAAiLQAAgdgdgBIlyAA").cp();
	this.shape_183.setTransform(61.5,11);

	this.addChild(this.shape_183,this.shape_182,this.shape_181,this.shape_180);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0.1,0,82,22);


(lib.Component_avatar = function() {
	this.initialize();

	// Avatar
	this.shape_184 = new cjs.Shape();
	this.shape_184.graphics.f("#FFFFFF").s("#000000").ss(0.1,1,1).p("AGQBuIsfAAIAAjbIMfAAIAADb").cp();
	this.shape_184.setTransform(40,11);

	this.addChild(this.shape_184);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,80,22);


(lib.checkboxasnwerbase = function() {
	this.initialize();

	// Layer 1
	this.shape_185 = new cjs.Shape();
	this.shape_185.graphics.f("rgba(51,51,0,0.008)").s().rr(-247,-22.3,494,44.6,3);
	this.shape_185.setTransform(247,22.3);

	this.addChild(this.shape_185);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,494,44.6);


(lib.bcg = function() {
	this.initialize();

	// Layer 1
	this.shape_186 = new cjs.Shape();
	this.shape_186.graphics.f("rgba(153,153,153,0.298)").s().dr(-320,-240,640,480);
	this.shape_186.setTransform(320,240);

	this.addChild(this.shape_186);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,640,480);


(lib.AnswerMC = function() {
	this.initialize();

	// Layer 1
	this.shape_187 = new cjs.Shape();
	this.shape_187.graphics.f("rgba(75,75,75,0)").s().p("EAtoAT7MhbPAAAMAAAgn1MBbPAAAMAAAAn1").cp();
	this.shape_187.setTransform(292,127.5);

	this.addChild(this.shape_187);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,584,255);


(lib.Topic = function() {
	this.initialize();
	
	this.name = '';
	
	// topicnames
	this.topicname = new cjs.Text("Topic A", "bold 14px Arial", "#FFFFFF");
	this.topicname.textAlign = "center";
	this.topicname.lineHeight = 20;
	this.topicname.lineWidth = 56;
	this.topicname.setTransform(99.5,5.5);
	this.topicname.maxWidth = 56

	// topic cells
	this.base = new lib.Symbol4();
	this.base.setTransform(0,0);
	this.base.shadow = new cjs.Shadow("rgba(0,51,51,0.439)",2,2,2);

	this.addChild(this.base,this.topicname);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,200,30);


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

	this.shape_188 = new cjs.Shape();
	this.shape_188.graphics.f("#E9E9E9").s("#CFCFCF").ss(1.1,1,1).p("AExAAQAAB+hZBZQhaBah+AAQh9AAhZhaQhahZAAh+QAAh9BahaQBZhZB9AAQB+AABaBZQBZBaAAB9IAAAA").cp();
	this.shape_188.setTransform(273.2,171.1);

	// Layer 1
	this.shape_189 = new cjs.Shape();
	this.shape_189.graphics.f().s("#333333").ss(1.2,1,1).p("EAwRAaoMAAAg3pQAAhVg8g9Qg9g8hVAAMhaFAAAQhVAAg9A8Qg8A9AABVMAAAA3pIAACaQAABVA8A9QA9A8BVAAMBaFAAAQBVAAA9g8QA8g9AAhVIAAia").cp();

	this.shape_190 = new cjs.Shape();
	this.shape_190.graphics.f("#E9E9E9").s().p("EAwRgCzIAACaQAABUg8A8Qg9A9hVAAMhaFAAAQhVAAg9g9Qg8g8AAhUIAAiaMBghAAA").cp();
	this.shape_190.setTransform(0,188.5);

	this.shape_191 = new cjs.Shape();
	this.shape_191.graphics.lf(["#FFFFFF","#E1E1E1"],[0,1],0,226.5,0,-179.3).s().p("EAwRAdcMhghAAAMAAAg3pQAAhVA8g9QA9g8BVAAMBaFAAAQBVAAA9A8QA8A9AABVMAAAA3p").cp();
	this.shape_191.setTransform(0,-17.9);

	this.addChild(this.shape_191,this.shape_190,this.shape_189,this.shape_188,this.instance_1,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-308.9,-206.4,618,413);


(lib.Symbol5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,false,{},true);
	// timeline functions:
	this.frame_0 = function() {
		stop();
	}
	this.frame_1 = function() {
		stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1));

	// Layer 1
	this.shape_192 = new cjs.Shape();
	this.shape_192.graphics.rf(["#00CC00","#003300"],[0,1],5.6,4,0,5.6,4,123.4).s("#CCCCCC").ss(1.3,1,1).p("APDpXI+GAAQgyAAAAAyIAARLQAAAyAyAAIeGAAQAzAAAAgyIAAxLQAAgygzAAIAAAA").cp();
	this.shape_192.setTransform(50,50,0.493,0.833);

	this.instance_2 = new lib.Symbol8();
	this.instance_2.setTransform(0,0,0.493,0.833);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_192}]}).to({state:[{t:this.instance_2}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,100,100);



(lib.Symbol18 = function() {
	this.initialize();

	// Layer 1
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#666666").ss(1,1,1).p("AKVqUQESESAAGCQAAGDkSESQjzDzlNAbQgpAEgsAAQgrAAgpgEQlNgbjzjzQkSkSAAmDQAAmCESkSQESkSGCAAQGDAAESESIAAAA").cp();
	this.shape_2.setTransform(93.5,93.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#333333").ss(1,1,1).p("AJWpVQD4D5AAFcQAAFej4D4Qj4D4leAAQldAAj5j4QjxjygGlUQAAgIAAgIQAAlcD3j5QD5j4FdAAQFeAAD4D4IAAAA").cp();
	this.shape_3.setTransform(93,94.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFCC").s().p("AJWpVQD4D5AAFcQAAFej4D4Qj4D4leAAQldAAj5j4QjxjygGlUQAAgIAAgIQAAlcD3j5QD5j4FdAAQFeAAD4D4IAAAA").cp();
	this.shape_4.setTransform(93,94.1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AKVqUQESESAAGCQAAGDkSESQjzDzlNAbQgpAEgsAAQgrAAgpgEQlNgbjzjzQkSkSAAmDQAAmCESkSQESkSGCAAQGDAAESESIAAAAAJRpPQj4j4ldAAQleAAj5D4Qj3D4AAFcQAAAJAAAIQAGFUDxDyQD5D4FeAAQFdAAD4j4QD4j4AAlfQAAlcj4j4IAAAA").cp();
	this.shape_5.setTransform(93.5,93.5);

	this.addChild(this.shape_5,this.shape_4,this.shape_3,this.shape_2);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,187,187);

(lib.Start = function() {
	this.initialize();

	// Layer 1
	this.text_5 = new cjs.Text(ID_Start, "40px Arial", "#FFFFFF");
	this.text_5.textAlign = "center";
	this.text_5.lineHeight = 42;
	this.text_5.setTransform(90,68.4);
	this.text_5.shadow = new cjs.Shadow("rgba(51,51,51,1)",4,4,3);

	// Layer 4
	this.instance_6 = new lib.Symbol18();
	this.instance_6.setTransform(93.5,93.5,0.95,0.94,0,0,0,93.5,93.5);
	this.instance_6.alpha = 0.578;

	this.shape_253 = new cjs.Shape();
	this.shape_253.graphics.lf(["rgba(255,255,255,0)","rgba(253,253,253,0.8)"],[0,1],73.4,4.5,73.4,-28.4).s().p("AgGAOIgBAAQAHgOAIgNQgIANgGAOIAAAA").cp();
	this.shape_253.setTransform(21.8,31.2);

	this.addChild(this.shape_253,this.instance_6,this.text_5);
	
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-73.4,-73.4,147,147);


(lib.score = function() {
	this.initialize();

	// Layer 1
	this.instance_5 = new lib.Symbol17();
	this.instance_5.shadow = new cjs.Shadow("rgba(0,102,153,0.608)",3,3,5);

	this.instance_6 = new lib.Symbol16();
	this.instance_6.shadow = new cjs.Shadow("#990000",4,4,5);
	

	

	this.addChild(this.instance_6,this.instance_5);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-73.4,-73.4,147,147);


(lib.scoreback = function() {
	this.initialize();

	// Layer 2
	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f().s("#333333").ss(1,1,1).p("AtHAAIaPAA");
	this.shape_16.setTransform(69,66);

	// Layer 1
	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f().s("#333333").ss(1,1,1).p("ANOAAQAAFej4D4Qj4D4leAAQldAAj4j4Qj4j4AAleQAAldD4j4QD4j4FdAAQFeAAD4D4QD4D4AAFdIAAAA").cp();
	this.shape_17.setTransform(72.1,64.3);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f().s("#666666").ss(1,1,1).p("AAAumQGDAAESESQESESAAGCQAAGDkSESQjzDzlMAbQgqAEgsAAQgqAAgqgEQlNgbjzjzQkSkSAAmDQAAmCESkSQESkSGCAAIAAAA").cp();
	this.shape_18.setTransform(72.6,63.7);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.lf(["rgba(255,255,255,0)","rgba(253,253,253,0.8)"],[0,1],73.4,4.5,73.4,-28.4).s().p("AAIgNQgIANgGAOIgBAAQAHgOAIgNIAAAA").cp();
	this.shape_19.setTransform(0.9,1.4);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFCC").s().p("ANOAAQAAFej4D4Qj4D4leAAQldAAj4j4Qj4j4AAleQAAldD4j4QD4j4FdAAQFeAAD4D4QD4D4AAFdIAAAA").cp();
	this.shape_20.setTransform(72.1,64.3);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AAAumQGDAAESESQESESAAGCQAAGDkSESQjzDzlMAbQgqAEgsAAQgqAAgqgEQlNgbjzjzQkSkSAAmDQAAmCESkSQESkSGCAAIAAAAANJAGQAAlcj4j5Qj4j4ldAAQleAAj4D4Qj4D5AAFcQAAFeD4D4QD4D4FeAAQFdAAD4j4QD4j4AAleIAAAA").cp();
	this.shape_21.setTransform(72.6,63.7);

	this.addChild(this.shape_21,this.shape_20,this.shape_19,this.shape_18,this.shape_17,this.shape_16);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-20.8,-29.7,187,187);


(lib.QuestionBASE = function() {
	this.initialize();
		this.submit_mask = new lib.submitMask();
	this.submit_mask.setTransform(310.5,395.5,1,1,0,0,0,35.5,13.5);

	// Layer 2
	this.money_2 = new cjs.Text("100$", "bold 13px Verdana", "#336600");
	this.money_2.textAlign = "center";
	this.money_2.lineHeight = 15;
	this.money_2.lineWidth = 42;
	this.money_2.setTransform(35.4,364.2,0.948,1.239);

	this.showtime = new lib.Timerforquestion();
	this.showtime.setTransform(605.4,385.2,1,1,0,0,0,44.5,15.5);

	this.submit = new lib.Symbol11();
	this.submit.setTransform(310,395.8);

	// Layer 1
	this.instance_7 = new lib.time();
	this.instance_7.setTransform(582.3,377.3);

	this.instance_8 = new lib.Symbol10();
	this.instance_8.setTransform(35.4,377.5);
	this.instance_8.shadow = new cjs.Shadow("rgba(51,51,51,1)",1,1,5);

	this.InstanceName_0 = new lib.Symbol6();
	this.InstanceName_0.setTransform(309.5,60.5);
	this.InstanceName_0.shadow = new cjs.Shadow("rgba(187,187,187,1)",1,1,3);

	this.instance_9 = new lib.Symbol7();
	this.instance_9.setTransform(309,206.5);

	this.addChild(this.instance_9,this.InstanceName_0,this.instance_8,this.instance_7,this.submit,this.showtime,this.money_2,this.submit_mask);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,618,413);


(lib.MyBox = function() {
	this.initialize();
	
	this.opened = 0;
	
	this.name = '';
	
	// 100$
	this.moneytop = new lib.Symbol9();
	this.moneytop.setTransform(36,31.3);
	this.moneytop.shadow = new cjs.Shadow("#006600",2,1,2);

	// grid cells
	this.base_1 = new lib.greencell();

	this.addChild(this.base_1,this.moneytop);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,100,100);




(lib.donecellwrong = function() {
	this.initialize();

	// Layer 2
	this.instance_93 = new lib.wrongicon();
	this.instance_93.setTransform(92,50,1,0.85,0,0,0,7.5,7.5);

	// Layer 1
	this.shape_260 = new cjs.Shape();
	this.shape_260.graphics.f("#808080").s("#FFFFFF").ss(1.3,1,1).p("APEpXI+HAAQgyAAAAAyIAARLQAAAyAyAAIeHAAQAyAAAAgyIAAxLQAAgygyAAIAAAA").cp();

	this.addChild(this.shape_260,this.instance_93);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-101.4,-59.9,202.9,120);


(lib.wrongicon = function() {
	this.initialize();

// Layer 4
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFFFF").ss(3,1,1).p("AAkgjIgkAjIAkAkAgiAkIAigkIgjgi");
	this.shape.setTransform(7.9,7.8);

	// Layer 5
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#333333").ss(3,1,1).p("AgiAkIAigkIgjgiAAkgjIgkAjIAkAk");
	this.shape_1.setTransform(8.8,9);

	// Layer 1
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.rf(["#FFFFFF","#FF0000"],[0,0.647],-0.2,-0.2,0,-0.2,-0.2,11).s("#333333").ss(1,1,1).p("ABLBLIiVAAIAAiVICVAAIAACV").cp();
	this.shape_2.setTransform(8,8);

	this.addChild(this.shape_2,this.shape_1,this.shape);
	
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0.3,0.3,14.7,14.8);



(lib.righticon = function() {
	this.initialize();

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFFFF").ss(3,1,1).p("AgsgBIAiAjIA3hD");
	this.shape.setTransform(8,7.5);

	// Layer 3
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#006600").ss(3,1,1).p("AgsgBIAiAjIA3hD");
	this.shape_1.setTransform(8.7,7.8);

	// Layer 1
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.rf(["#00FF72","#007B00"],[0,1],0,0,0,0,0,10.6).s("#333333").ss(1,1,1).p("ABLBLIiVAAIAAiVICVAAIAACV").cp();
	this.shape_2.setTransform(8,8);

	this.addChild(this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,14.7,14.8);




(lib.donecell = function() {
	this.initialize();

	// Layer 2
	this.instance_94 = new lib.righticon();
	this.instance_94.setTransform(92,50,1,0.85,0,0,0,7.5,7.5);

	this.shape_261 = new cjs.Shape();
	this.shape_261.graphics.f().s("rgba(153,153,153,0)").ss(1,1,1).p("AgYBXQgRgHgOgOQgZgaAAgmQAAgkAZgaQAZgaAhAAQAjAAAZAaQAMANAGAQ");
	this.shape_261.setTransform(82.2,42.8);

	// Layer 1
	this.shape_262 = new cjs.Shape();
	this.shape_262.graphics.f("#808080").s("#FFFFFF").ss(1.3,1,1).p("APEpXI+HAAQgyAAAAAyIAARLQAAAyAyAAIeHAAQAyAAAAgyIAAxLQAAgygyAAIAAAA").cp();

	this.addChild(this.shape_262,this.shape_261,this.instance_94);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-101.4,-59.9,202.9,120);




(lib.colorcell = function() {
	this.initialize();

	// Layer 1
	this.shape_230 = new cjs.Shape();
	this.shape_230.graphics.f().s("#CCCCCC").ss(1.3,1,1).p("AnunjQAAAFAAAGIAAOSQAAAHAAAFAHvHdQgGAHgKAAIu0AAQgLAAgFgH");
	this.shape_230.setTransform(50,51.3);

	this.shape_231 = new cjs.Shape();
		//change here
	this.shape_231.graphics.f(cellhex1).s().p("AnzHcIAAupIAAgmIPnAAIAAPnIgKAAIvUAAIgJAAIAAgY").cp();
	this.shape_231.setTransform(50.1,50);

	this.addChild(this.shape_231);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,100.1,100.7);


(lib.baseshadecell = function() {
	this.initialize();

	// Layer 1
	this.shape_235 = new cjs.Shape();
	this.shape_235.graphics.rf(["rgba(255,255,255,0.639)","rgba(255,255,255,0)"],[0,1],-33.9,-25.3,0,-33.9,-25.3,77.7).s().p("AlqFxQBwjVC3i2QDfjhENh1ItRAAIAALhIA+AA").cp();

	this.addChild(this.shape_235);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-42.5,-36.9,85.2,74);

(lib.greencell = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,false,{},true);

	// Layer 3
	this.baseshade = new lib.baseshadecell();
	this.baseshade.setTransform(50,50,1.174,1.352);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.baseshade}]}).wait(2));

	// Layer 1
	this.cellcolor = new lib.colorcell();
	this.cellcolor.setTransform(50,50,1,1,0,0,0,49.7,50.6);

	this.instance_14 = new lib.donecell();
	this.instance_14.setTransform(50,50,0.493,0.833);
	
	this.instance_15 = new lib.donecellwrong();
	this.instance_15.setTransform(50,50,0.493,0.833);

	this.addChild(this.cellcolor,this.instance_14,this.instance_15)

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-50.5,-50.6,100.7,100.7);


(lib.endscreen = function() {
	this.initialize();

	// Layer 8
	

	
	this.instance_10 = new lib.scoreback();
	this.instance_10.setTransform(177.1,100.1,1,1,0,0,0,252.8,109.9);
	this.instance_10.alpha = 0.578;
	//this.instance_10.shadow = new cjs.Shadow("rgba(51,51,51,1)",4,4,5);
	
	this.finalscore = new cjs.Text("1000", "40px Arial", "#FFFFFF");
	this.finalscore.lineHeight = 42;
	this.finalscore.textAlign = "center";
	this.finalscore.setTransform(-10,66.3);
	this.finalscore.shadow = new cjs.Shadow("rgba(0,0,0,1)",1,1,5);

	// Layer 9
	this.text_6 = new cjs.Text(ID_Score, "25px Arial", "#FFFFFF");
	this.text_6.lineHeight = 36;
	this.text_6.setTransform(-51.9,0.8);
	this.text_6.shadow = new cjs.Shadow("rgba(0,0,0,1)",1,1,5);
	


	// Layer 3
	this.instance_11 = new lib.Lights();
	this.instance_11.setTransform(140.4,191.9);

	this.instance_12 = new lib.Lights();
	this.instance_12.setTransform(117.8,191.9);

	this.instance_13 = new lib.Lights();
	this.instance_13.setTransform(106.5,191.9);

	this.instance_14 = new lib.Lights();
	this.instance_14.setTransform(83.9,191.9);

	this.instance_15 = new lib.Lights();
	this.instance_15.setTransform(72.6,191.9);

	this.instance_16 = new lib.Lights();
	this.instance_16.setTransform(50,191.9);

	this.instance_17 = new lib.Lights();
	this.instance_17.setTransform(38.7,191.9);

	this.instance_18 = new lib.Lights();
	this.instance_18.setTransform(16.1,191.9);

	this.instance_19 = new lib.Lights();
	this.instance_19.setTransform(4.8,191.9);

	this.instance_20 = new lib.Lights();
	this.instance_20.setTransform(-17.7,191.9);

	this.instance_21 = new lib.Lights();
	this.instance_21.setTransform(-29,191.9);

	this.instance_22 = new lib.Lights();
	this.instance_22.setTransform(-51.6,191.9);

	this.instance_23 = new lib.Lights();
	this.instance_23.setTransform(-62.9,191.9);

	this.instance_24 = new lib.Lights();
	this.instance_24.setTransform(-85.5,191.9);

	this.instance_25 = new lib.Lights();
	this.instance_25.setTransform(-96.8,191.9);

	this.instance_26 = new lib.Lights();
	this.instance_26.setTransform(-119.4,191.9);

	this.instance_27 = new lib.Lights();
	this.instance_27.setTransform(-130.7,191.9);

	this.instance_28 = new lib.Lights();
	this.instance_28.setTransform(-153.3,191.9);

	this.instance_29 = new lib.Lights();
	this.instance_29.setTransform(140.4,-194);

	this.instance_30 = new lib.Lights();
	this.instance_30.setTransform(117.8,-194);

	this.instance_31 = new lib.Lights();
	this.instance_31.setTransform(106.5,-194);

	this.instance_32 = new lib.Lights();
	this.instance_32.setTransform(83.9,-194);

	this.instance_33 = new lib.Lights();
	this.instance_33.setTransform(72.6,-194);

	this.instance_34 = new lib.Lights();
	this.instance_34.setTransform(50,-194);

	this.instance_35 = new lib.Lights();
	this.instance_35.setTransform(38.7,-194);

	this.instance_36 = new lib.Lights();
	this.instance_36.setTransform(16.1,-194);

	this.instance_37 = new lib.Lights();
	this.instance_37.setTransform(4.8,-194);

	this.instance_38 = new lib.Lights();
	this.instance_38.setTransform(-17.7,-194);

	this.instance_39 = new lib.Lights();
	this.instance_39.setTransform(-29,-194);

	this.instance_40 = new lib.Lights();
	this.instance_40.setTransform(-51.6,-194);

	this.instance_41 = new lib.Lights();
	this.instance_41.setTransform(-62.9,-194);

	this.instance_42 = new lib.Lights();
	this.instance_42.setTransform(-85.5,-194);

	this.instance_43 = new lib.Lights();
	this.instance_43.setTransform(-96.8,-194);

	this.instance_44 = new lib.Lights();
	this.instance_44.setTransform(-119.4,-194);

	this.instance_45 = new lib.Lights();
	this.instance_45.setTransform(-130.7,-194);

	this.instance_46 = new lib.Lights();
	this.instance_46.setTransform(-153.3,-194);

	this.instance_47 = new lib.Lights();
	this.instance_47.setTransform(164.4,191.9);

	this.instance_48 = new lib.Lights();
	this.instance_48.setTransform(164.4,178.9);

	this.instance_49 = new lib.Lights();
	this.instance_49.setTransform(164.4,153.9);

	this.instance_50 = new lib.Lights();
	this.instance_50.setTransform(164.4,140.9);

	this.instance_51 = new lib.Lights();
	this.instance_51.setTransform(164.4,114.9);

	this.instance_52 = new lib.Lights();
	this.instance_52.setTransform(164.4,101.9);

	this.instance_53 = new lib.Lights();
	this.instance_53.setTransform(164.4,75.9);

	this.instance_54 = new lib.Lights();
	this.instance_54.setTransform(164.4,62.9);

	this.instance_55 = new lib.Lights();
	this.instance_55.setTransform(164.4,37.9);

	this.instance_56 = new lib.Lights();
	this.instance_56.setTransform(164.4,24.9);

	this.instance_57 = new lib.Lights();
	this.instance_57.setTransform(164.4,0);

	this.instance_58 = new lib.Lights();
	this.instance_58.setTransform(164.4,-13);

	this.instance_59 = new lib.Lights();
	this.instance_59.setTransform(164.4,-39);

	this.instance_60 = new lib.Lights();
	this.instance_60.setTransform(164.4,-51);

	this.instance_61 = new lib.Lights();
	this.instance_61.setTransform(164.4,-77);

	this.instance_62 = new lib.Lights();
	this.instance_62.setTransform(164.4,-90);

	this.instance_63 = new lib.Lights();
	this.instance_63.setTransform(164.4,-116);

	this.instance_64 = new lib.Lights();
	this.instance_64.setTransform(164.4,-129);

	this.instance_65 = new lib.Lights();
	this.instance_65.setTransform(164.4,-154);

	this.instance_66 = new lib.Lights();
	this.instance_66.setTransform(164.4,-167);

	this.instance_67 = new lib.Lights();
	this.instance_67.setTransform(164.4,-194);

	this.instance_68 = new lib.Lights();
	this.instance_68.setTransform(-164.6,190.9);

	this.instance_69 = new lib.Lights();
	this.instance_69.setTransform(-164.6,177.9);

	this.instance_70 = new lib.Lights();
	this.instance_70.setTransform(-164.6,152.9);

	this.instance_71 = new lib.Lights();
	this.instance_71.setTransform(-164.6,139.9);

	this.instance_72 = new lib.Lights();
	this.instance_72.setTransform(-164.6,113.9);

	this.instance_73 = new lib.Lights();
	this.instance_73.setTransform(-164.6,100.9);

	this.instance_74 = new lib.Lights();
	this.instance_74.setTransform(-164.6,74.9);

	this.instance_75 = new lib.Lights();
	this.instance_75.setTransform(-164.6,61.9);

	this.instance_76 = new lib.Lights();
	this.instance_76.setTransform(-164.6,36.9);

	this.instance_77 = new lib.Lights();
	this.instance_77.setTransform(-164.6,23.9);

	this.instance_78 = new lib.Lights();
	this.instance_78.setTransform(-164.6,-1);

	this.instance_79 = new lib.Lights();
	this.instance_79.setTransform(-164.6,-14);

	this.instance_80 = new lib.Lights();
	this.instance_80.setTransform(-164.6,-40);

	this.instance_81 = new lib.Lights();
	this.instance_81.setTransform(-164.6,-52);

	this.instance_82 = new lib.Lights();
	this.instance_82.setTransform(-164.6,-78);

	this.instance_83 = new lib.Lights();
	this.instance_83.setTransform(-164.6,-91);

	this.instance_84 = new lib.Lights();
	this.instance_84.setTransform(-164.6,-117);

	this.instance_85 = new lib.Lights();
	this.instance_85.setTransform(-164.6,-130);

	this.instance_86 = new lib.Lights();
	this.instance_86.setTransform(-164.6,-155);

	this.instance_87 = new lib.Lights();
	this.instance_87.setTransform(-164.6,-168);

	this.instance_88 = new lib.Lights();
	this.instance_88.setTransform(-164.6,-194);

	// Layer 2
	this.text_7 = new cjs.Text(endscreenfdbck, "26px Arial", "#FFFFFF");
	this.text_7.textAlign = "center";
	this.text_7.lineHeight = 42;
	this.text_7.setTransform(0,-185.4);

	// Layer 1
	this.base_1 = new lib.backend();
	this.base_1.setTransform(0,0.1,1,1,0,0,0,172.1,200);

	this.addChild(this.base_1 ,this.text_7,this.instance_88,this.instance_87,this.instance_86,this.instance_85,this.instance_84,this.instance_83,this.instance_82,this.instance_81,this.instance_80,this.instance_79,this.instance_78,this.instance_77,this.instance_76,this.instance_75,this.instance_74,this.instance_73,this.instance_72,this.instance_71,this.instance_70,this.instance_69,this.instance_68,this.instance_67,this.instance_66,this.instance_65,this.instance_64,this.instance_63,this.instance_62,this.instance_61,this.instance_60,this.instance_59,this.instance_58,this.instance_57,this.instance_56,this.instance_55,this.instance_54,this.instance_53,this.instance_52,this.instance_51,this.instance_50,this.instance_49,this.instance_48,this.instance_47,this.instance_46,this.instance_45,this.instance_44,this.instance_43,this.instance_42,this.instance_41,this.instance_40,this.instance_39,this.instance_38,this.instance_37,this.instance_36,this.instance_35,this.instance_34,this.instance_33,this.instance_32,this.instance_31,this.instance_30,this.instance_29,this.instance_28,this.instance_27,this.instance_26,this.instance_25,this.instance_24,this.instance_23,this.instance_22,this.instance_21,this.instance_20,this.instance_19,this.instance_18,this.instance_17,this.instance_16,this.instance_15,this.instance_14,this.instance_13,this.instance_12,this.instance_11,this.text_6,this.instance_10,this.finalscore);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-321.4,-247.5,640,480);


(lib.ScrollArrowUp_icon = function() {
	this.initialize();

	// icon
	this.instance_89 = new lib.arrowIcon();
	this.instance_89.setTransform(3.5,2,1,1,180,0,0,3.5,2);

	this.addChild(this.instance_89);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,7,4);


(lib.backend = function() {
	this.initialize();

	// Layer 1
	this.shape_236 = new cjs.Shape();
		//change here
	this.shape_236.graphics.f(gamehex1).s().p("A64fPMAAAg+dMA1xAAAMAAAA+dMg1xAAA").cp();
	this.shape_236.setTransform(172.1,200);

	this.addChild(this.shape_236);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,344.2,400);


(lib.ScrollArrowUp_downSkin = function() {
	this.initialize();

	// icon
	this.instance_90 = new lib.ScrollArrowUp_icon("single",0);
	this.instance_90.setTransform(4,4);

	// fill
	this.shape_197 = new cjs.Shape();
	this.shape_197.graphics.lf(["rgba(238,238,238,0)","rgba(255,255,255,0.298)"],[0,1],-1,3.5,-1,-3.1).s().p("ABBAgIiBAAIAAg/ICBAAIAAA/").cp();
	this.shape_197.setTransform(7.6,4.3);

	this.shape_198 = new cjs.Shape();
	this.shape_198.graphics.lf(["#0075BF","#009DFF"],[0,0.992],1,5.9,1,-6.9).s().p("ABLBGIAAiLIiVAAIAACLICVAAABBA8IiBAAIAAh3ICBAAIAAB3").cp();
	this.shape_198.setTransform(7.5,7);

	this.shape_199 = new cjs.Shape();
	this.shape_199.graphics.lf(["#99D7FE","#D9F0FE"],[0,1],-1.4,7,-1.4,-6.5).s().p("ABBA8IiBAAIAAh3ICBAAIAAB3").cp();
	this.shape_199.setTransform(7.5,7);

	this.addChild(this.shape_199,this.shape_198,this.shape_197,this.instance_90);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,15,14);


(lib.ScrollArrowDown_icon = function() {
	this.initialize();

	// icon
	this.instance_91 = new lib.arrowIcon("single",0);

	this.addChild(this.instance_91);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,7,4);


(lib.ScrollArrowDown_downSkin = function() {
	this.initialize();

	// icon
	this.instance_92 = new lib.ScrollArrowDown_icon("single",0);
	this.instance_92.setTransform(4,5);

	// fill
	this.shape_200 = new cjs.Shape();
	this.shape_200.graphics.lf(["rgba(238,238,238,0)","rgba(255,255,255,0.298)"],[0,1],-0.9,3.5,-0.9,-3.1).s().p("AhAAgIAAg/ICBAAIAAA/IiBAA").cp();
	this.shape_200.setTransform(7.5,4.3);

	this.shape_201 = new cjs.Shape();
	this.shape_201.graphics.lf(["#0075BF","#009DFF"],[0,0.992],1,5.9,1,-6.9).s().p("AhAg7ICBAAIAAB3IiBAAIAAh3AhKBGICVAAIAAiLIiVAAIAACL").cp();
	this.shape_201.setTransform(7.5,7);

	this.shape_202 = new cjs.Shape();
	this.shape_202.graphics.lf(["#99D7FE","#D9F0FE"],[0,1],-1.4,7,-1.4,-6.5).s().p("AhAg7ICBAAIAAB3IiBAAIAAh3").cp();
	this.shape_202.setTransform(7.5,7);

	this.addChild(this.shape_202,this.shape_201,this.shape_200,this.instance_92);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,15,14);


(lib.RadioButton_selectedUpIcon = function() {
	this.initialize();

	// icon
	this.instance_93 = new lib.RadioButton_selectedIcon();
	this.instance_93.setTransform(7,7,1,1,0,0,0,2,2);

	// highlight
	this.shape_203 = new cjs.Shape();
	this.shape_203.graphics.lf(["rgba(204,204,204,0)","rgba(255,255,255,0.298)"],[0,1],-1,3.1,-1,-2.9).s().p("AgpgLQARgSAYAAQAZAAARASQACABABACQAPAPAAAXIh3AAQAAgXAPgPQABgCACgBIAAAA").cp();
	this.shape_203.setTransform(7,4);

	// fill
	this.shape_204 = new cjs.Shape();
	this.shape_204.graphics.lf(["rgba(204,204,204,0.4)","rgba(255,255,255,0.6)"],[0,1],-0.9,5.3,-0.9,-6.6).s().p("AAqAqQgRASgZAAQgYAAgRgSQgSgRAAgZQAAgYASgRQARgSAYAAQAZAAARASQASARAAAYQAAAZgSARIAAAA").cp();
	this.shape_204.setTransform(7,7);

	this.shape_205 = new cjs.Shape();
	this.shape_205.graphics.lf(["#5B5D5E","#B7BABC"],[0,1],0.5,7,0.5,-7.5).s().p("AAqAqQASgRAAgZQAAgYgSgRQgRgSgZAAQgYAAgRASQgSARAAAYQAAAZASARQARASAYAAQAZAAARgSIAAAAAAxgwQAVAUAAAcQAAAdgVAUQgUAVgdAAQgcAAgUgVQgVgUAAgdQAAgcAVgUQAUgVAcAAQAdAAAUAVIAAAA").cp();
	this.shape_205.setTransform(7,7);

	this.addChild(this.shape_205,this.shape_204,this.shape_203,this.instance_93);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,14,14);


(lib.RadioButton_selectedOverIcon = function() {
	this.initialize();

	// icon
	this.instance_94 = new lib.RadioButton_selectedIcon();
	this.instance_94.setTransform(7,7,1,1,0,0,0,2,2);

	// highlight
	this.shape_206 = new cjs.Shape();
	this.shape_206.graphics.lf(["rgba(204,204,204,0)","rgba(255,255,255,0.298)"],[0,1],-1,3.1,-1,-2.9).s().p("AgpgLQARgSAYAAQAZAAARASQACACABABQAPAPAAAXIh3AAQAAgXAPgPQABgBACgCIAAAA").cp();
	this.shape_206.setTransform(7,4.1);

	// fill
	this.shape_207 = new cjs.Shape();
	this.shape_207.graphics.lf(["#0075BF","#009DFF"],[0,0.992],0.3,7.9,0.3,-7.7).s().p("AA8AAQAAgYgSgRQgRgSgZAAQgYAAgRASQgSARAAAYQAAAZASARQARASAYAAQAZAAARgSQASgRAAgZIAAAAAAxgwQAVAUAAAcQAAAdgVAUQgUAVgdAAQgcAAgUgVQgVgUAAgdQAAgcAVgUQAUgVAcAAQAdAAAUAVIAAAA").cp();
	this.shape_207.setTransform(7,7);

	this.shape_208 = new cjs.Shape();
	this.shape_208.graphics.lf(["rgba(238,238,238,0.651)","rgba(255,255,255,0.741)"],[0,1],-0.9,5.3,-0.9,-6.6).s().p("AA8AAQAAAZgSARQgRASgZAAQgYAAgRgSQgSgRAAgZQAAgYASgRQARgSAYAAQAZAAARASQASARAAAYIAAAA").cp();
	this.shape_208.setTransform(7,7);

	this.addChild(this.shape_208,this.shape_207,this.shape_206,this.instance_94);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,14,14);


(lib.RadioButton_selectedDownIcon = function() {
	this.initialize();

	// icon
	this.instance_95 = new lib.RadioButton_selectedIcon();
	this.instance_95.setTransform(7,7,1,1,0,0,0,2,2);

	// highlight
	this.shape_209 = new cjs.Shape();
	this.shape_209.graphics.lf(["rgba(204,204,204,0)","rgba(255,255,255,0.298)"],[0,1],-1,3.1,-1,-2.9).s().p("AgpgLQARgSAYAAQAZAAARASQACABABACQAPAPAAAXIh3AAQAAgXAPgPQABgCACgBIAAAA").cp();
	this.shape_209.setTransform(7,4);

	// fill
	this.shape_210 = new cjs.Shape();
	this.shape_210.graphics.lf(["#0075BF","#009DFF"],[0,0.992],0.3,7.9,0.3,-7.7).s().p("AAqAqQASgRAAgZQAAgYgSgRQgRgSgZAAQgYAAgRASQgSARAAAYQAAAZASARQARASAYAAQAZAAARgSIAAAAABGAAQAAAdgVAUQgUAVgdAAQgcAAgUgVQgVgUAAgdQAAgcAVgUQAUgVAcAAQAdAAAUAVQAVAUAAAcIAAAA").cp();
	this.shape_210.setTransform(7,7);

	this.shape_211 = new cjs.Shape();
	this.shape_211.graphics.lf(["#99D7FE","#D9F0FE"],[0,1],-0.9,5.3,-0.9,-6.6).s().p("AAqAqQgRASgZAAQgYAAgRgSQgSgRAAgZQAAgYASgRQARgSAYAAQAZAAARASQASARAAAYQAAAZgSARIAAAA").cp();
	this.shape_211.setTransform(7,7);

	this.addChild(this.shape_211,this.shape_210,this.shape_209,this.instance_95);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,14,14);


(lib.RadioButton_selectedDisabledIcon = function() {
	this.initialize();

	// icon
	this.instance_96 = new lib.RadioButton_selectedIcon();
	this.instance_96.setTransform(7,7,1,1,0,0,0,2,2);
	this.instance_96.alpha = 0.398;

	// highlight
	this.shape_212 = new cjs.Shape();
	this.shape_212.graphics.lf(["rgba(204,204,204,0)","rgba(255,255,255,0.298)"],[0,1],-1,3.1,-1,-2.9).s().p("AgpgLQARgSAYAAQAZAAARASQACABABACQAPAPAAAXIh3AAQAAgXAPgPQABgCACgBIAAAA").cp();
	this.shape_212.setTransform(7,4);

	// fill
	this.shape_213 = new cjs.Shape();
	this.shape_213.graphics.lf(["rgba(91,93,94,0.298)","rgba(183,186,188,0.298)"],[0,1],0.5,7,0.5,-7.5).s().p("AA8AAQAAgWgPgQQgBgCgCgBQgRgSgZAAQgYAAgRASQgCABgBACQgPAQAAAWQAAAZASARQARASAYAAQAZAAARgSQASgRAAgZIAAAAAA6gmQAMARAAAVQAAAdgVAUQgUAVgdAAQgcAAgUgVQgVgUAAgdQAAgVAMgRQAEgFAFgFQAUgVAcAAQAdAAAUAVQAFAFAEAFIAAAA").cp();
	this.shape_213.setTransform(7,7);

	this.shape_214 = new cjs.Shape();
	this.shape_214.graphics.lf(["rgba(204,204,204,0.2)","rgba(255,255,255,0.298)"],[0,1],-0.9,5.3,-0.9,-6.6).s().p("AA8AAQAAAZgSARQgRASgZAAQgYAAgRgSQgSgRAAgZQAAgWAPgQQABgCACgBQARgSAYAAQAZAAARASQACABABACQAPAQAAAWIAAAA").cp();
	this.shape_214.setTransform(7,7);

	this.addChild(this.shape_214,this.shape_213,this.shape_212,this.instance_96);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,14,14);


(lib.NumericStepperUpArrow_icon = function() {
	this.initialize();

	// icon
	this.instance_97 = new lib.arrowIcon("single",0);
	this.instance_97.setTransform(7,4,1,1,180);

	this.addChild(this.instance_97);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,7,4);


(lib.NumericStepperUpArrow_downSkin = function() {
	this.initialize();

	// icon
	this.instance_98 = new lib.NumericStepperUpArrow_icon("single",0);
	this.instance_98.setTransform(6,4);

	// skin
	this.shape_215 = new cjs.Shape();
	this.shape_215.graphics.f("#008AE0").s().p("ABegEIAKAAIAAAAIAAAJIjPAAIAAgJIDFAA").cp();
	this.shape_215.setTransform(10.4,11.5);

	this.shape_216 = new cjs.Shape();
	this.shape_216.graphics.lf(["#99D7FE","#D9F0FE"],[0,1],0,16,0,-5.9).s().p("AhiAyIAAhjICpAAIAMACQAQAHAAAVIAABFIjFAA").cp();
	this.shape_216.setTransform(9.9,6);

	this.shape_217 = new cjs.Shape();
	this.shape_217.graphics.lf(["#0075BF","#009DFF"],[0,0.992],-0.4,16.5,-0.4,-5.4).s().p("ABoA3IgKAAIAAhFQAAgVgQgHIgMgCIipAAIAAgKICnAAQAoAAAAAoIAABF").cp();
	this.shape_217.setTransform(10.4,5.5);

	this.addChild(this.shape_217,this.shape_216,this.shape_215,this.instance_98);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,20.9,12);


(lib.NumericStepperUpArrow_disabledSkin = function() {
	this.initialize();

	// icon
	this.instance_99 = new lib.NumericStepperUpArrow_icon("single",0);
	this.instance_99.setTransform(6,4);
	this.instance_99.alpha = 0.301;

	// skin
	this.shape_218 = new cjs.Shape();
	this.shape_218.graphics.f("rgba(133,139,142,0.298)").s().p("ABfgEIAKAAIAAAJIjRAAIAAgJIDHAA").cp();
	this.shape_218.setTransform(10.5,11.5);

	this.shape_219 = new cjs.Shape();
	this.shape_219.graphics.lf(["rgba(88,95,99,0.298)","rgba(183,186,188,0.298)"],[0,1],-0.4,16.5,-0.4,-5.4).s().p("ABpA3IgKAAIAAhFQAAgdgdgBIiqAAIAAgKICpAAQAoAAAAAoIAABF").cp();
	this.shape_219.setTransform(10.5,5.5);

	this.shape_220 = new cjs.Shape();
	this.shape_220.graphics.lf(["rgba(230,230,230,0.2)","rgba(255,255,255,0.298)"],[0,1],0,15.9,0,-6).s().p("ABjAwIAAhEQABgdgdgBIiqAAIAABlIABAAIAAgDIDFAA").cp();
	this.shape_220.setTransform(10,6.1);

	this.addChild(this.shape_220,this.shape_219,this.shape_218,this.instance_99);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,21,12);


(lib.NumericStepperDownArrow_icon = function() {
	this.initialize();

	// icon
	this.instance_100 = new lib.arrowIcon("single",0);

	this.addChild(this.instance_100);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,7,4);


(lib.NumericStepperDownArrow_downSkin = function() {
	this.initialize();

	// icon
	this.instance_101 = new lib.NumericStepperDownArrow_icon("single",0);
	this.instance_101.setTransform(6,4);

	// skin
	this.shape_221 = new cjs.Shape();
	this.shape_221.graphics.lf(["#0075BF","#009DFF"],[0,0.992],-0.4,5,-0.4,-16.9).s().p("ABpAUQAAAogoAAIipAAIAAgKICqAAQAOgBAIgHQAHgIAAgOIAAhPIAKAAIAABP").cp();
	this.shape_221.setTransform(10.5,6);

	this.shape_222 = new cjs.Shape();
	this.shape_222.graphics.lf(["#99D7FE","#D9F0FE"],[0,1],0,5.5,0,-16.4).s().p("ABHA3IiqAAIAAhtIDHAAIAABPQAAAOgHAIQgIAHgOABIAAAA").cp();
	this.shape_222.setTransform(10,5.5);

	this.addChild(this.shape_222,this.shape_221,this.instance_101);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,21,12);


(lib.NumericStepperDownArrow_disabledSkin = function() {
	this.initialize();

	// icon
	this.instance_102 = new lib.NumericStepperDownArrow_icon("single",0);
	this.instance_102.setTransform(6,4);
	this.instance_102.alpha = 0.301;

	// skin
	this.shape_223 = new cjs.Shape();
	this.shape_223.graphics.lf(["rgba(230,230,230,0.2)","rgba(255,255,255,0.298)"],[0,1],0,5.5,0,-16.4).s().p("AhjA3IAAhtIDHAAIAABPQAAAOgHAIQgIAHgOABIiqAA").cp();
	this.shape_223.setTransform(10,5.5);

	this.shape_224 = new cjs.Shape();
	this.shape_224.graphics.lf(["rgba(88,95,99,0.298)","rgba(183,186,188,0.298)"],[0,1],-0.4,5,-0.4,-16.9).s().p("AhoAyICqAAQAOgBAHgHQAHgIAAgOIAAhPIAKAAIAABPQABAogpAAIioAAIAAgK").cp();
	this.shape_224.setTransform(10.5,6);

	this.addChild(this.shape_224,this.shape_223,this.instance_102);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,21,12);


(lib.CheckBox_selectedUpIcon = function() {
	this.initialize();

	// icon
	this.instance_103 = new lib.CheckBox_selectedIcon();
	this.instance_103.setTransform(8,5.5,1,1,0,0,0,5,4.5);

	// highlight
	this.shape_225 = new cjs.Shape();
	this.shape_225.graphics.lf(["rgba(238,238,238,0)","rgba(255,255,255,0.298)"],[0,1],-0.9,3.5,-0.9,-3.1).s().p("AA8AgIh3AAIAAg/IB3AAIAAA/").cp();
	this.shape_225.setTransform(7,4.3);

	// fill
	this.shape_226 = new cjs.Shape();
	this.shape_226.graphics.lf(["rgba(204,204,204,0.4)","rgba(255,255,255,0.6)"],[0,1],-0.9,7,-0.9,-6.5).s().p("Ag7g7IB3AAIAAB3Ih3AAIAAh3").cp();
	this.shape_226.setTransform(7,7);

	// border
	this.shape_227 = new cjs.Shape();
	this.shape_227.graphics.lf(["#5B5D5E","#B7BABC"],[0,1],1.5,5.9,1.5,-6.9).s().p("Ag7g7IB3AAIAAB3Ih3AAIAAh3AhFhFIAACLICLAAIAAiLIiLAA").cp();
	this.shape_227.setTransform(7,7);

	this.addChild(this.shape_227,this.shape_226,this.shape_225,this.instance_103);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,14,14);


(lib.CheckBox_selectedOverIcon = function() {
	this.initialize();

	// icon
	this.instance_104 = new lib.CheckBox_selectedIcon();
	this.instance_104.setTransform(8,5.5,1,1,0,0,0,5,4.5);

	// highlight
	this.shape_228 = new cjs.Shape();
	this.shape_228.graphics.lf(["rgba(238,238,238,0)","rgba(255,255,255,0.298)"],[0,1],-0.9,3.5,-0.9,-3.1).s().p("AA8AgIh3AAIAAg/IB3AAIAAA/").cp();
	this.shape_228.setTransform(7,4.3);

	// fill
	this.shape_229 = new cjs.Shape();
	this.shape_229.graphics.lf(["rgba(238,238,238,0.651)","rgba(255,255,255,0.741)"],[0,1],-0.9,7,-0.9,-6.5).s().p("Ag7A8IAAh3IB3AAIAAB3Ih3AA").cp();
	this.shape_229.setTransform(7,7);

	// border
	this.shape_230 = new cjs.Shape();
	this.shape_230.graphics.lf(["#0075BF","#009DFF"],[0,0.992],0.8,6.7,0.8,-7.7).s().p("AhFhFIAACLICLAAIAAiLIiLAAAg7A8IAAh3IB3AAIAAB3Ih3AA").cp();
	this.shape_230.setTransform(7,7);

	this.addChild(this.shape_230,this.shape_229,this.shape_228,this.instance_104);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,14,14);


(lib.CheckBox_selectedDownIcon = function() {
	this.initialize();

	// icon
	this.instance_105 = new lib.CheckBox_selectedIcon();
	this.instance_105.setTransform(8,5.5,1,1,0,0,0,5,4.5);

	// highlight
	this.shape_231 = new cjs.Shape();
	this.shape_231.graphics.lf(["rgba(238,238,238,0)","rgba(255,255,255,0.298)"],[0,1],-0.9,3.5,-0.9,-3.1).s().p("AA8AgIh3AAIAAg/IB3AAIAAA/").cp();
	this.shape_231.setTransform(7,4.3);

	// fill
	this.shape_232 = new cjs.Shape();
	this.shape_232.graphics.lf(["#99D7FE","#D9F0FE"],[0,1],-0.9,7,-0.9,-6.5).s().p("AA8g7IAAB3Ih3AAIAAh3IB3AA").cp();
	this.shape_232.setTransform(7,7);

	// border
	this.shape_233 = new cjs.Shape();
	this.shape_233.graphics.lf(["#0075BF","#009DFF"],[0,0.992],0.8,6.7,0.8,-7.7).s().p("AhFhFIAACLICLAAIAAiLIiLAAAg7A8IAAh3IB3AAIAAB3Ih3AA").cp();
	this.shape_233.setTransform(7,7);

	this.addChild(this.shape_233,this.shape_232,this.shape_231,this.instance_105);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,14,14);


(lib.CheckBox_selectedDisabledIcon = function() {
	this.initialize();

	// icon
	this.instance_106 = new lib.CheckBox_selectedIcon();
	this.instance_106.setTransform(8,5.5,1,1,0,0,0,5,4.5);
	this.instance_106.alpha = 0.301;

	// highlight
	this.shape_234 = new cjs.Shape();
	this.shape_234.graphics.lf(["rgba(238,238,238,0)","rgba(255,255,255,0.298)"],[0,1],-0.9,3.5,-0.9,-3.1).s().p("AA8AgIh3AAIAAg/IB3AAIAAA/").cp();
	this.shape_234.setTransform(7,4.3);

	// fill
	this.shape_235 = new cjs.Shape();
	this.shape_235.graphics.lf(["rgba(204,204,204,0.2)","rgba(255,255,255,0.298)"],[0,1],-0.9,7,-0.9,-6.5).s().p("AA8A8Ih3AAIAAh3IB3AAIAAB3").cp();
	this.shape_235.setTransform(7,7);

	// border
	this.shape_236 = new cjs.Shape();
	this.shape_236.graphics.lf(["rgba(91,93,94,0.298)","rgba(183,186,188,0.298)"],[0,1],1.5,5.9,1.5,-6.9).s().p("AhFBGICLAAIAAiLIiLAAIAACLAA8A8Ih3AAIAAh3IB3AAIAAB3").cp();
	this.shape_236.setTransform(7,7);

	this.addChild(this.shape_236,this.shape_235,this.shape_234,this.instance_106);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,14,14);


(lib.flcontrolslistClassesCellRenderer = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,false,{},true);

	// assets
	this.instance_107 = new lib.CellRenderer_selectedUpSkin();
	this.instance_107.setTransform(95.6,236.3,1,1,0,0,0,76,11);

	this.instance_108 = new lib.CellRenderer_selectedOverSkin();
	this.instance_108.setTransform(95.6,206.3,1,1,0,0,0,76,11);

	this.instance_109 = new lib.CellRenderer_selectedDownSkin();
	this.instance_109.setTransform(95.6,178.3,1,1,0,0,0,76,11);

	this.instance_110 = new lib.CellRenderer_selectedDisabledSkin();
	this.instance_110.setTransform(95.6,148.6,1,1,0,0,0,76,11);

	this.instance_111 = new lib.CellRenderer_upSkin();
	this.instance_111.setTransform(95.6,56.6,1,1,0,0,0,76,11);

	this.instance_112 = new lib.CellRenderer_overSkin();
	this.instance_112.setTransform(95.6,86.6,1,1,0,0,0,76,11);

	this.instance_113 = new lib.CellRenderer_downSkin();
	this.instance_113.setTransform(95.6,116.6,1,1,0,0,0,76,11);

	this.instance_114 = new lib.CellRenderer_disabledSkin();
	this.instance_114.setTransform(95.6,26.6,1,1,0,0,0,76,11);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_114},{t:this.instance_113},{t:this.instance_112},{t:this.instance_111},{t:this.instance_110},{t:this.instance_109},{t:this.instance_108},{t:this.instance_107}]},1).wait(1));

	// avatar
	this.instance_115 = new lib.CellRenderer_upSkin();
	this.instance_115.setTransform(76,11,1,1,0,0,0,76,11);

	this.timeline.addTween(cjs.Tween.get(this.instance_115).to({_off:true},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,152,22.1);


(lib.flcontrolsCheckBox = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,false,{},true);

	// assets
	this.instance_116 = new lib.focusRectSkin();
	this.instance_116.setTransform(48.4,278.7,1,1,0,0,0,41.1,11);

	this.instance_117 = new lib.CheckBox_selectedDisabledIcon();
	this.instance_117.setTransform(82.4,152.1,1,1,0,0,0,7,7);

	this.instance_118 = new lib.CheckBox_selectedDownIcon();
	this.instance_118.setTransform(82.4,215.2,1,1,0,0,0,7,7);

	this.instance_119 = new lib.CheckBox_selectedOverIcon();
	this.instance_119.setTransform(82.4,86,1,1,0,0,0,7,7);

	this.instance_120 = new lib.CheckBox_selectedUpIcon();
	this.instance_120.setTransform(82.4,19.9,1,1,0,0,0,7,7);

	this.instance_121 = new lib.CheckBox_disabledIcon();
	this.instance_121.setTransform(82.4,181.1,1,1,0,0,0,7,7);

	this.instance_122 = new lib.CheckBox_downIcon();
	this.instance_122.setTransform(82.4,248.2,1,1,0,0,0,7,7);

	this.instance_123 = new lib.CheckBox_overIcon();
	this.instance_123.setTransform(82.4,119,1,1,0,0,0,7,7);

	this.instance_124 = new lib.CheckBox_upIcon();
	this.instance_124.setTransform(82.4,52.9,1,1,0,0,0,7,7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_124},{t:this.instance_123},{t:this.instance_122},{t:this.instance_121},{t:this.instance_120},{t:this.instance_119},{t:this.instance_118},{t:this.instance_117},{t:this.instance_116}]},1).wait(1));

	// avatar
	this.instance_125 = new lib.Component_avatar();
	this.instance_125.setTransform(50,11,1.25,1,0,0,0,40,11);

	this.timeline.addTween(cjs.Tween.get(this.instance_125).to({_off:true},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,100,22);


(lib.flcontrolsRadioButton = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,false,{},true);

	// assets
	this.instance_126 = new lib.focusRectSkin();
	this.instance_126.setTransform(67.1,269,1,1,0,0,0,41.1,11);

	this.instance_127 = new lib.RadioButton_selectedDisabledIcon();
	this.instance_127.setTransform(101,235,1,1.007,90,0,0,7,7);

	this.instance_128 = new lib.RadioButton_selectedDownIcon();
	this.instance_128.setTransform(101,205,1,1.007,90,0,0,7,7);

	this.instance_129 = new lib.RadioButton_selectedOverIcon();
	this.instance_129.setTransform(101,175,1,1.007,90,0,0,7,7);

	this.instance_130 = new lib.RadioButton_selectedUpIcon();
	this.instance_130.setTransform(100.5,145,1,1.004,90,0,0,7,7.5);

	this.instance_131 = new lib.RadioButton_disabledIcon();
	this.instance_131.setTransform(101.1,115,1,1,90,0,0,7,7);

	this.instance_132 = new lib.RadioButton_downIcon();
	this.instance_132.setTransform(101.1,85,1,1,90,0,0,7,7);

	this.instance_133 = new lib.RadioButton_overIcon();
	this.instance_133.setTransform(101.1,55,1,1,90,0,0,7,7);

	this.instance_134 = new lib.RadioButton_upIcon();
	this.instance_134.setTransform(101.1,25,1,1,90,0,0,7,7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_134},{t:this.instance_133},{t:this.instance_132},{t:this.instance_131},{t:this.instance_130},{t:this.instance_129},{t:this.instance_128},{t:this.instance_127},{t:this.instance_126}]},1).wait(1));

	// avatar
	this.instance_135 = new lib.Component_avatar();
	this.instance_135.setTransform(0,0,1.25,1);

	this.timeline.addTween(cjs.Tween.get(this.instance_135).to({_off:true},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,100,22);


(lib.ScrollArrowUp_upSkin = function() {
	this.initialize();

	// icon
	this.instance_136 = new lib.ScrollArrowUp_icon("single",0);
	this.instance_136.setTransform(4,4);

	// fill
	this.shape_237 = new cjs.Shape();
	this.shape_237.graphics.lf(["rgba(238,238,238,0)","rgba(255,255,255,0.298)"],[0,1],-0.9,3.5,-0.9,-3.1).s().p("AhAAgIAAg/ICBAAIAAA/IiBAA").cp();
	this.shape_237.setTransform(7.5,4.3);

	this.shape_238 = new cjs.Shape();
	this.shape_238.graphics.lf(["#5B5D5E","#B7BABC"],[0,1],1,5.9,1,-6.9).s().p("ABLBGIAAiLIiVAAIAACLICVAAABBg7IAAB3IiBAAIAAh3ICBAA").cp();
	this.shape_238.setTransform(7.5,7);

	this.shape_239 = new cjs.Shape();
	this.shape_239.graphics.lf(["#E6E6E6","#FFFFFF"],[0,1],-1.4,7,-1.4,-6.5).s().p("ABBg7IAAB3IiBAAIAAh3ICBAA").cp();
	this.shape_239.setTransform(7.5,7);

	this.addChild(this.shape_239,this.shape_238,this.shape_237,this.instance_136);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,15,14);


(lib.ScrollArrowUp_overSkin = function() {
	this.initialize();

	// icon
	this.instance_137 = new lib.ScrollArrowUp_icon("single",0);
	this.instance_137.setTransform(4,4);

	// fill
	this.shape_240 = new cjs.Shape();
	this.shape_240.graphics.lf(["rgba(238,238,238,0)","rgba(255,255,255,0.298)"],[0,1],-1,3.5,-1,-3.1).s().p("AhAAgIAAg/ICBAAIAAA/IiBAA").cp();
	this.shape_240.setTransform(7.6,4.3);

	this.shape_241 = new cjs.Shape();
	this.shape_241.graphics.lf(["#0075BF","#009DFF"],[0,0.992],1,5.9,1,-6.9).s().p("ABLBGIAAiLIiVAAIAACLICVAAABBg7IAAB3IiBAAIAAh3ICBAA").cp();
	this.shape_241.setTransform(7.5,7);

	this.shape_242 = new cjs.Shape();
	this.shape_242.graphics.lf(["#E6E6E6","#FFFFFF"],[0,1],-1.4,7,-1.4,-6.5).s().p("ABBg7IAAB3IiBAAIAAh3ICBAA").cp();
	this.shape_242.setTransform(7.5,7);

	this.addChild(this.shape_242,this.shape_241,this.shape_240,this.instance_137);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,15,14);


(lib.ScrollArrowDown_upSkin = function() {
	this.initialize();

	// icon
	this.instance_138 = new lib.ScrollArrowDown_icon("single",0);
	this.instance_138.setTransform(4,5);

	// fill
	this.shape_243 = new cjs.Shape();
	this.shape_243.graphics.lf(["rgba(238,238,238,0)","rgba(255,255,255,0.298)"],[0,1],-0.9,3.5,-0.9,-3.1).s().p("AhAAgIAAg/ICBAAIAAA/IiBAA").cp();
	this.shape_243.setTransform(7.5,4.3);

	this.shape_244 = new cjs.Shape();
	this.shape_244.graphics.lf(["#5B5D5E","#B7BABC"],[0,1],1,5.9,1,-6.9).s().p("ABLBGIAAiLIiVAAIAACLICVAAABBg7IAAB3IiBAAIAAh3ICBAA").cp();
	this.shape_244.setTransform(7.5,7);

	this.shape_245 = new cjs.Shape();
	this.shape_245.graphics.lf(["#E6E6E6","#FFFFFF"],[0,1],-1.4,7,-1.4,-6.5).s().p("ABBg7IAAB3IiBAAIAAh3ICBAA").cp();
	this.shape_245.setTransform(7.5,7);

	this.addChild(this.shape_245,this.shape_244,this.shape_243,this.instance_138);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,15,14);


(lib.ScrollArrowDown_overSkin = function() {
	this.initialize();

	// icon
	this.instance_139 = new lib.ScrollArrowDown_icon("single",0);
	this.instance_139.setTransform(4,5);

	// fill
	this.shape_246 = new cjs.Shape();
	this.shape_246.graphics.lf(["rgba(238,238,238,0)","rgba(255,255,255,0.298)"],[0,1],-0.9,3.5,-0.9,-3.1).s().p("AhAAgIAAg/ICBAAIAAA/IiBAA").cp();
	this.shape_246.setTransform(7.5,4.3);

	this.shape_247 = new cjs.Shape();
	this.shape_247.graphics.lf(["#0075BF","#009DFF"],[0,0.992],1,5.9,1,-6.9).s().p("ABLBGIAAiLIiVAAIAACLICVAAABBg7IAAB3IiBAAIAAh3ICBAA").cp();
	this.shape_247.setTransform(7.5,7);

	this.shape_248 = new cjs.Shape();
	this.shape_248.graphics.lf(["#E6E6E6","#FFFFFF"],[0,1],-1.4,7,-1.4,-6.5).s().p("ABBg7IAAB3IiBAAIAAh3ICBAA").cp();
	this.shape_248.setTransform(7.5,7);

	this.addChild(this.shape_248,this.shape_247,this.shape_246,this.instance_139);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,15,14);


(lib.flcontrolsScrollBar = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,false,{},true);

	// assets
	this.instance_140 = new lib.ScrollBar_thumbIcon();
	this.instance_140.setTransform(215.5,86.5,1,1,0,0,0,2.5,4.5);

	this.instance_141 = new lib.ScrollBar_thumbIcon();
	this.instance_141.setTransform(127.5,88.5,1,1,0,0,0,2.5,4.5);

	this.instance_142 = new lib.ScrollBar_thumbIcon();
	this.instance_142.setTransform(40.5,86.5,1,1,0,0,0,2.5,4.5);

	this.instance_143 = new lib.ScrollArrowUp_disabledSkin();
	this.instance_143.setTransform(292.5,25,1,1,0,0,0,7.5,7);

	this.instance_144 = new lib.ScrollArrowDown_disabledSkin();
	this.instance_144.setTransform(292.5,159,1,1,0,0,0,7.5,7);

	this.instance_145 = new lib.ScrollArrowDown_upSkin();
	this.instance_145.setTransform(41.5,159,1,1,0,0,0,7.5,7);

	this.instance_146 = new lib.ScrollThumb_upSkin();
	this.instance_146.setTransform(40,86,1,1,0,0,0,6,26);

	this.instance_147 = new lib.ScrollArrowUp_upSkin();
	this.instance_147.setTransform(41.5,25,1,1,0,0,0,7.5,7);

	this.instance_148 = new lib.ScrollArrowUp_overSkin();
	this.instance_148.setTransform(128.5,27,1,1,0,0,0,7.5,7);

	this.instance_149 = new lib.ScrollThumb_overSkin();
	this.instance_149.setTransform(127,88,1,1,0,0,0,6,26);

	this.instance_150 = new lib.ScrollArrowDown_overSkin();
	this.instance_150.setTransform(128.5,161,1,1,0,0,0,7.5,7);

	this.instance_151 = new lib.ScrollThumb_downSkin();
	this.instance_151.setTransform(215,86,1,1,0,0,0,6,26);

	this.instance_152 = new lib.ScrollArrowDown_downSkin();
	this.instance_152.setTransform(216.5,159,1,1,0,0,0,7.5,7);

	this.instance_153 = new lib.ScrollArrowUp_downSkin();
	this.instance_153.setTransform(216.5,25,1,1,0,0,0,7.5,7);

	this.instance_154 = new lib.ScrollTrack_skin();
	this.instance_154.setTransform(216.5,92,1,1,0,0,0,7.5,74);

	this.instance_155 = new lib.ScrollTrack_skin();
	this.instance_155.setTransform(128.5,94,1,1,0,0,0,7.5,74);

	this.instance_156 = new lib.ScrollTrack_skin();
	this.instance_156.setTransform(41.5,92,1,1,0,0,0,7.5,74);

	this.instance_157 = new lib.ScrollTrack_skin();
	this.instance_157.setTransform(292.5,92,1,1,0,0,0,7.5,74);

	this.instance_158 = new lib.focusRectSkin();
	this.instance_158.setTransform(107.9,234,1,1,0,0,0,41.1,11);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_158},{t:this.instance_157},{t:this.instance_156},{t:this.instance_155},{t:this.instance_154},{t:this.instance_153},{t:this.instance_152},{t:this.instance_151},{t:this.instance_150},{t:this.instance_149},{t:this.instance_148},{t:this.instance_147},{t:this.instance_146},{t:this.instance_145},{t:this.instance_144},{t:this.instance_143},{t:this.instance_142},{t:this.instance_141},{t:this.instance_140}]},1).wait(1));

	// avatar
	this.instance_159 = new lib.ScrollTrack_skin();
	this.instance_159.setTransform(7.5,50,1,0.676,0,0,0,7.5,74);

	this.timeline.addTween(cjs.Tween.get(this.instance_159).to({_off:true},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,15,100);


(lib.NumericStepperUpArrow_upSkin = function() {
	this.initialize();

	// icon
	this.instance_160 = new lib.NumericStepperUpArrow_icon("single",0);
	this.instance_160.setTransform(6,4);

	// skin
	this.shape_249 = new cjs.Shape();
	this.shape_249.graphics.lf(["rgba(230,230,230,0.4)","rgba(255,255,255,0.6)"],[0,1],0,16,0,-5.9).s().p("AhigxICpAAQAOABAHAHQAHAIAAAOIAABFIjFAAIAAhjIAAAA").cp();
	this.shape_249.setTransform(10,6);

	this.shape_250 = new cjs.Shape();
	this.shape_250.graphics.f("#858B8E").s().p("ABegEIAKAAIAAAJIjPAAIAAgJIDFAA").cp();
	this.shape_250.setTransform(10.5,11.5);

	this.shape_251 = new cjs.Shape();
	this.shape_251.graphics.lf(["#585F63","#B7BABC"],[0,1],-0.4,16.5,-0.4,-5.4).s().p("ABeA3IAAhFQAAgOgHgIQgHgHgOgBIipAAIAAgKICnAAQAoAAAAAoIAABFIgKAA").cp();
	this.shape_251.setTransform(10.5,5.5);

	this.addChild(this.shape_251,this.shape_250,this.shape_249,this.instance_160);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,21,12);


(lib.NumericStepperUpArrow_overSkin = function() {
	this.initialize();

	// icon
	this.instance_161 = new lib.NumericStepperUpArrow_icon("single",0);
	this.instance_161.setTransform(6,4);

	// skin
	this.shape_252 = new cjs.Shape();
	this.shape_252.graphics.lf(["rgba(238,238,238,0.651)","rgba(255,255,255,0.741)"],[0,1],0,16,0,-5.9).s().p("AhigxICpAAQAOABAHAHQAHAIAAAOIAABFIjFAAIAAhjIAAAA").cp();
	this.shape_252.setTransform(10,6);

	this.shape_253 = new cjs.Shape();
	this.shape_253.graphics.f("#008AE0").s().p("ABfgEIAKAAIAAAJIjRAAIAAgJIABAAIDGAA").cp();
	this.shape_253.setTransform(10.5,11.5);

	this.shape_254 = new cjs.Shape();
	this.shape_254.graphics.lf(["#0075BF","#009DFF"],[0,0.992],-0.4,16.5,-0.4,-5.4).s().p("ABeA3IAAhFQAAgOgHgIQgHgHgOgBIipAAIAAgKICnAAQAoAAAAAoIAABFIgKAA").cp();
	this.shape_254.setTransform(10.5,5.5);

	this.addChild(this.shape_254,this.shape_253,this.shape_252,this.instance_161);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,21,12);


(lib.NumericStepperDownArrow_upSkin = function() {
	this.initialize();

	// icon
	this.instance_162 = new lib.NumericStepperDownArrow_icon("single",0);
	this.instance_162.setTransform(6,4);

	// skin
	this.shape_255 = new cjs.Shape();
	this.shape_255.graphics.lf(["#585F63","#B7BABC"],[0,1],-0.4,5,-0.4,-16.9).s().p("ABoAUQABAogpAAIioAAIAAgKICqAAQAOgBAHgHQAIgIgBgOIAAhPIAKAAIAABP").cp();
	this.shape_255.setTransform(10.5,6);

	this.shape_256 = new cjs.Shape();
	this.shape_256.graphics.lf(["rgba(230,230,230,0.4)","rgba(255,255,255,0.6)"],[0,1],0,5.5,0,-16.4).s().p("ABHA3IiqAAIAAhtIDHAAIAABPQAAAOgHAIQgIAHgOABIAAAA").cp();
	this.shape_256.setTransform(10,5.5);

	this.addChild(this.shape_256,this.shape_255,this.instance_162);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,21,12);


(lib.NumericStepperDownArrow_overSkin = function() {
	this.initialize();

	// icon
	this.instance_163 = new lib.NumericStepperDownArrow_icon("single",0);
	this.instance_163.setTransform(6,4);

	// skin
	this.shape_257 = new cjs.Shape();
	this.shape_257.graphics.lf(["#0075BF","#009DFF"],[0,0.992],-0.4,5,-0.4,-16.9).s().p("ABpAUQAAAogoAAIipAAIAAgKICqAAQAOgBAIgHQAHgIAAgOIAAhPIAKAAIAABP").cp();
	this.shape_257.setTransform(10.5,6);

	this.shape_258 = new cjs.Shape();
	this.shape_258.graphics.lf(["rgba(230,230,230,0.4)","rgba(255,255,255,0.6)"],[0,1],0,5.5,0,-16.4).s().p("ABHA3IiqAAIAAhtIDHAAIAABPQAAAOgHAIQgIAHgOABIAAAA").cp();
	this.shape_258.setTransform(10,5.5);

	this.addChild(this.shape_258,this.shape_257,this.instance_163);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,21,12);


(lib.flcontrolsUIScrollBar = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,false,{},true);

	// assets
	this.instance_164 = new lib.ScrollBar_thumbIcon();
	this.instance_164.setTransform(215.5,86.5,1,1,0,0,0,2.5,4.5);

	this.instance_165 = new lib.ScrollBar_thumbIcon();
	this.instance_165.setTransform(127.5,88.5,1,1,0,0,0,2.5,4.5);

	this.instance_166 = new lib.ScrollBar_thumbIcon();
	this.instance_166.setTransform(40.5,86.5,1,1,0,0,0,2.5,4.5);

	this.instance_167 = new lib.ScrollArrowUp_disabledSkin();
	this.instance_167.setTransform(292.5,25,1,1,0,0,0,7.5,7);

	this.instance_168 = new lib.ScrollArrowDown_disabledSkin();
	this.instance_168.setTransform(292.5,159,1,1,0,0,0,7.5,7);

	this.instance_169 = new lib.ScrollArrowDown_upSkin();
	this.instance_169.setTransform(41.5,159,1,1,0,0,0,7.5,7);

	this.instance_170 = new lib.ScrollThumb_upSkin();
	this.instance_170.setTransform(40,86,1,1,0,0,0,6,26);

	this.instance_171 = new lib.ScrollArrowUp_upSkin();
	this.instance_171.setTransform(41.5,25,1,1,0,0,0,7.5,7);

	this.instance_172 = new lib.ScrollArrowUp_overSkin();
	this.instance_172.setTransform(128.5,27,1,1,0,0,0,7.5,7);

	this.instance_173 = new lib.ScrollThumb_overSkin();
	this.instance_173.setTransform(127,88,1,1,0,0,0,6,26);

	this.instance_174 = new lib.ScrollArrowDown_overSkin();
	this.instance_174.setTransform(128.5,161,1,1,0,0,0,7.5,7);

	this.instance_175 = new lib.ScrollThumb_downSkin();
	this.instance_175.setTransform(215,86,1,1,0,0,0,6,26);

	this.instance_176 = new lib.ScrollArrowDown_downSkin();
	this.instance_176.setTransform(216.5,159,1,1,0,0,0,7.5,7);

	this.instance_177 = new lib.ScrollArrowUp_downSkin();
	this.instance_177.setTransform(216.5,25,1,1,0,0,0,7.5,7);

	this.instance_178 = new lib.ScrollTrack_skin();
	this.instance_178.setTransform(216.5,92,1,1,0,0,0,7.5,74);

	this.instance_179 = new lib.ScrollTrack_skin();
	this.instance_179.setTransform(128.5,94,1,1,0,0,0,7.5,74);

	this.instance_180 = new lib.ScrollTrack_skin();
	this.instance_180.setTransform(41.5,92,1,1,0,0,0,7.5,74);

	this.instance_181 = new lib.ScrollTrack_skin();
	this.instance_181.setTransform(292.5,92,1,1,0,0,0,7.5,74);

	this.instance_182 = new lib.focusRectSkin();
	this.instance_182.setTransform(107.9,234,1,1,0,0,0,41.1,11);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_182},{t:this.instance_181},{t:this.instance_180},{t:this.instance_179},{t:this.instance_178},{t:this.instance_177},{t:this.instance_176},{t:this.instance_175},{t:this.instance_174},{t:this.instance_173},{t:this.instance_172},{t:this.instance_171},{t:this.instance_170},{t:this.instance_169},{t:this.instance_168},{t:this.instance_167},{t:this.instance_166},{t:this.instance_165},{t:this.instance_164}]},1).wait(1));

	// avatar
	this.instance_183 = new lib.Component_avatar();
	this.instance_183.setTransform(7.5,50,0.188,4.545,0,0,0,40,11);

	this.timeline.addTween(cjs.Tween.get(this.instance_183).to({_off:true},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,15,100);


(lib.flcontrolsTextArea = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,false,{},true);

	// Assets
	this.instance_184 = new lib.flcontrolsUIScrollBar();
	this.instance_184.setTransform(173.9,230.4,1,1,0,0,0,7.5,50);

	this.instance_185 = new lib.focusRectSkin();
	this.instance_185.setTransform(140.4,136.4,1,1,0,0,0,41.1,11);

	this.instance_186 = new lib.TextArea_upSkin();
	this.instance_186.setTransform(105.4,44,1,1,0,0,0,76,11);

	this.instance_187 = new lib.TextArea_disabledSkin();
	this.instance_187.setTransform(105.4,91.5,1,1,0,0,0,76,11);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_186},{t:this.instance_185},{t:this.instance_184}]},1).wait(1));

	// avatar
	this.instance_188 = new lib.Component_avatar();
	this.instance_188.setTransform(50,22,1.25,2,0,0,0,40,11);

	this.timeline.addTween(cjs.Tween.get(this.instance_188).to({_off:true},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,100,44);


(lib.Startscreen = function() {
	this.initialize();

	// Layer 8
	this.gamestart = new lib.Start();
	this.gamestart.setTransform(230,120);

	// Layer 3
	this.instance_189 = new lib.Lights();
	this.instance_189.setTransform(461.9,439.5);

	this.instance_190 = new lib.Lights();
	this.instance_190.setTransform(439.3,439.5);

	this.instance_191 = new lib.Lights();
	this.instance_191.setTransform(428,439.5);

	this.instance_192 = new lib.Lights();
	this.instance_192.setTransform(405.4,439.5);

	this.instance_193 = new lib.Lights();
	this.instance_193.setTransform(394.1,439.5);

	this.instance_194 = new lib.Lights();
	this.instance_194.setTransform(371.5,439.5);

	this.instance_195 = new lib.Lights();
	this.instance_195.setTransform(360.2,439.5);

	this.instance_196 = new lib.Lights();
	this.instance_196.setTransform(337.6,439.5);

	this.instance_197 = new lib.Lights();
	this.instance_197.setTransform(326.3,439.5);

	this.instance_198 = new lib.Lights();
	this.instance_198.setTransform(303.7,439.5);

	this.instance_199 = new lib.Lights();
	this.instance_199.setTransform(292.4,439.5);

	this.instance_200 = new lib.Lights();
	this.instance_200.setTransform(269.8,439.5);

	this.instance_201 = new lib.Lights();
	this.instance_201.setTransform(258.5,439.5);

	this.instance_202 = new lib.Lights();
	this.instance_202.setTransform(235.9,439.5);

	this.instance_203 = new lib.Lights();
	this.instance_203.setTransform(224.6,439.5);

	this.instance_204 = new lib.Lights();
	this.instance_204.setTransform(202,439.5);

	this.instance_205 = new lib.Lights();
	this.instance_205.setTransform(190.7,439.5);

	this.instance_206 = new lib.Lights();
	this.instance_206.setTransform(168.1,439.5);

	this.instance_207 = new lib.Lights();
	this.instance_207.setTransform(461.9,53.5);

	this.instance_208 = new lib.Lights();
	this.instance_208.setTransform(439.3,53.5);

	this.instance_209 = new lib.Lights();
	this.instance_209.setTransform(428,53.5);

	this.instance_210 = new lib.Lights();
	this.instance_210.setTransform(405.4,53.5);

	this.instance_211 = new lib.Lights();
	this.instance_211.setTransform(394.1,53.5);

	this.instance_212 = new lib.Lights();
	this.instance_212.setTransform(371.5,53.5);

	this.instance_213 = new lib.Lights();
	this.instance_213.setTransform(360.2,53.5);

	this.instance_214 = new lib.Lights();
	this.instance_214.setTransform(337.6,53.5);

	this.instance_215 = new lib.Lights();
	this.instance_215.setTransform(326.3,53.5);

	this.instance_216 = new lib.Lights();
	this.instance_216.setTransform(303.7,53.5);

	this.instance_217 = new lib.Lights();
	this.instance_217.setTransform(292.4,53.5);

	this.instance_218 = new lib.Lights();
	this.instance_218.setTransform(269.8,53.5);

	this.instance_219 = new lib.Lights();
	this.instance_219.setTransform(258.5,53.5);

	this.instance_220 = new lib.Lights();
	this.instance_220.setTransform(235.9,53.5);

	this.instance_221 = new lib.Lights();
	this.instance_221.setTransform(224.6,53.5);

	this.instance_222 = new lib.Lights();
	this.instance_222.setTransform(202,53.5);

	this.instance_223 = new lib.Lights();
	this.instance_223.setTransform(190.7,53.5);

	this.instance_224 = new lib.Lights();
	this.instance_224.setTransform(168.1,53.5);

	this.instance_225 = new lib.Lights();
	this.instance_225.setTransform(485.9,439.5);

	this.instance_226 = new lib.Lights();
	this.instance_226.setTransform(485.9,426.5);

	this.instance_227 = new lib.Lights();
	this.instance_227.setTransform(485.9,401.5);

	this.instance_228 = new lib.Lights();
	this.instance_228.setTransform(485.9,388.5);

	this.instance_229 = new lib.Lights();
	this.instance_229.setTransform(485.9,362.5);

	this.instance_230 = new lib.Lights();
	this.instance_230.setTransform(485.9,349.5);

	this.instance_231 = new lib.Lights();
	this.instance_231.setTransform(485.9,323.5);

	this.instance_232 = new lib.Lights();
	this.instance_232.setTransform(485.9,310.5);

	this.instance_233 = new lib.Lights();
	this.instance_233.setTransform(485.9,285.5);

	this.instance_234 = new lib.Lights();
	this.instance_234.setTransform(485.9,272.5);

	this.instance_235 = new lib.Lights();
	this.instance_235.setTransform(485.9,247.6);

	this.instance_236 = new lib.Lights();
	this.instance_236.setTransform(485.9,234.6);

	this.instance_237 = new lib.Lights();
	this.instance_237.setTransform(485.9,208.6);

	this.instance_238 = new lib.Lights();
	this.instance_238.setTransform(485.9,196.6);

	this.instance_239 = new lib.Lights();
	this.instance_239.setTransform(485.9,170.6);

	this.instance_240 = new lib.Lights();
	this.instance_240.setTransform(485.9,157.6);

	this.instance_241 = new lib.Lights();
	this.instance_241.setTransform(485.9,131.6);

	this.instance_242 = new lib.Lights();
	this.instance_242.setTransform(485.9,118.6);

	this.instance_243 = new lib.Lights();
	this.instance_243.setTransform(485.9,93.6);

	this.instance_244 = new lib.Lights();
	this.instance_244.setTransform(485.9,80.6);

	this.instance_245 = new lib.Lights();
	this.instance_245.setTransform(485.9,53.5);

	this.instance_246 = new lib.Lights();
	this.instance_246.setTransform(156.8,438.5);

	this.instance_247 = new lib.Lights();
	this.instance_247.setTransform(156.8,425.5);

	this.instance_248 = new lib.Lights();
	this.instance_248.setTransform(156.8,400.5);

	this.instance_249 = new lib.Lights();
	this.instance_249.setTransform(156.8,387.5);

	this.instance_250 = new lib.Lights();
	this.instance_250.setTransform(156.8,361.5);

	this.instance_251 = new lib.Lights();
	this.instance_251.setTransform(156.8,348.5);

	this.instance_252 = new lib.Lights();
	this.instance_252.setTransform(156.8,322.5);

	this.instance_253 = new lib.Lights();
	this.instance_253.setTransform(156.8,309.5);

	this.instance_254 = new lib.Lights();
	this.instance_254.setTransform(156.8,284.5);

	this.instance_255 = new lib.Lights();
	this.instance_255.setTransform(156.8,271.5);

	this.instance_256 = new lib.Lights();
	this.instance_256.setTransform(156.8,246.5);

	this.instance_257 = new lib.Lights();
	this.instance_257.setTransform(156.8,233.5);

	this.instance_258 = new lib.Lights();
	this.instance_258.setTransform(156.8,207.5);

	this.instance_259 = new lib.Lights();
	this.instance_259.setTransform(156.8,195.5);

	this.instance_260 = new lib.Lights();
	this.instance_260.setTransform(156.8,169.5);

	this.instance_261 = new lib.Lights();
	this.instance_261.setTransform(156.8,156.5);

	this.instance_262 = new lib.Lights();
	this.instance_262.setTransform(156.8,130.5);

	this.instance_263 = new lib.Lights();
	this.instance_263.setTransform(156.8,117.5);

	this.instance_264 = new lib.Lights();
	this.instance_264.setTransform(156.8,92.5);

	this.instance_265 = new lib.Lights();
	this.instance_265.setTransform(156.8,79.5);

	this.instance_266 = new lib.Lights();
	this.instance_266.setTransform(156.8,53.5);

	// Layer 2
	this.jeopardytitle_Mc = new lib.jeopardy();
	this.jeopardytitle_Mc.setTransform(440,107.8);
	this.jeopardytitle_Mc.shadow = new cjs.Shadow("#660000",2,2,5);

	// Layer 4
	this.gamedesc = new lib.flcontrolsTextArea();
	this.gamedesc.setTransform(195,200,1.7,10,0,0,0,50.1,22);

	this.base_3 = new lib.bcgstart();
	this.base_3.setTransform(0,0.1,1,1,0,0,0,172.1,200);
	

	this.addChild(this.base_3,this.jeopardytitle_Mc,this.instance_266,this.instance_265,this.instance_264,this.instance_263,this.instance_262,this.instance_261,this.instance_260,this.instance_259,this.instance_258,this.instance_257,this.instance_256,this.instance_255,this.instance_254,this.instance_253,this.instance_252,this.instance_251,this.instance_250,this.instance_249,this.instance_248,this.instance_247,this.instance_246,this.instance_245,this.instance_244,this.instance_243,this.instance_242,this.instance_241,this.instance_240,this.instance_239,this.instance_238,this.instance_237,this.instance_236,this.instance_235,this.instance_234,this.instance_233,this.instance_232,this.instance_231,this.instance_230,this.instance_229,this.instance_228,this.instance_227,this.instance_226,this.instance_225,this.instance_224,this.instance_223,this.instance_222,this.instance_221,this.instance_220,this.instance_219,this.instance_218,this.instance_217,this.instance_216,this.instance_215,this.instance_214,this.instance_213,this.instance_212,this.instance_211,this.instance_210,this.instance_209,this.instance_208,this.instance_207,this.instance_206,this.instance_205,this.instance_204,this.instance_203,this.instance_202,this.instance_201,this.instance_200,this.instance_199,this.instance_198,this.instance_197,this.instance_196,this.instance_195,this.instance_194,this.instance_193,this.instance_192,this.instance_191,this.instance_190,this.instance_189,this.gamestart);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,640,480);

(lib.bcgstart = function() {
	this.initialize();

	// Layer 1
	this.shape_233 = new cjs.Shape();
	//change here
	this.shape_233.graphics.f(gamehex1).s().p("A64fPMAAAg+dMA1xAAAMAAAA+dMg1xAAA").cp();
	this.shape_233.setTransform(493,448);

	this.addChild(this.shape_233);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,344.2,400);


(lib.Runtime_MC = function() {
	this.initialize();

	// start
	this.StartScreen = new lib.Startscreen();
	this.StartScreen.setTransform(-20,-10);

	// end
	this.EndScreen = new lib.endscreen();
	this.EndScreen.setTransform(320.4,239.1,1,1,0,0,0,-1.4,-7.6);

	// Layer 5
	this.topichover = new cjs.Text("topic1", "bold 14px Arial", "#FFFFFF");
	this.topichover.textAlign = "center";
	this.topichover.lineHeight = 20;
	this.topichover.lineWidth = 279;
	this.topichover.setTransform(344.5,15.4);

	this.Gridbase = new lib.Symbol2();
	this.Gridbase.setTransform(320,259);

	// Layer 3
	this.JeopardyTitle = new cjs.Text("Jeopardy Game", "28px Impact", "#FFFFFF");
	this.JeopardyTitle.lineHeight = 34;
	this.JeopardyTitle.lineWidth = 213;
	this.JeopardyTitle.setTransform(2,1.8);
	this.JeopardyTitle.shadow = new cjs.Shadow("rgba(102,102,102,1)",2,2,5);

	// Layer 4
	this.mainscore = new lib.mainscoreMc();
	this.mainscore.setTransform(503,55);
	this.mainscore.shadow = new cjs.Shadow("rgba(102,102,102,1)",0,5,5);

	// backgorund
	this.shape_320 = new cjs.Shape();
	this.shape_320.graphics.f("rgba(255,255,255,0.008)").s().p("EAyAglfMAAABK/Mhj/AAAMAAAhK/MBj/AAA").cp();
	this.shape_320.setTransform(320,240);

	this.addChild(this.shape_320,this.mainscore,this.JeopardyTitle,this.Gridbase,this.topichover,this.StartScreen,this.EndScreen);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,-0.9,640.3,481);


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
	this.base_2 = new lib.checkboxasnwerbase();
	this.base_2.setTransform(248,22.3,1,1,0,0,0,247,22.3);

	this.addChild(this.base_2,this.QAnswer,this.QAnswerScrollbar,this.radiob);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(1,0,568,44.6);


(lib.Question_Mc = function() {
	this.initialize();
	
	
	
	// WronFB
	this.Wfeedback = new lib.Wfback();
	this.Wfeedback.setTransform(569,252.5,1,1,0,0,0,260,45.5);

	// RightFback
	this.Rfeedback = new lib.Rfback();
	this.Rfeedback.setTransform(571,253.5,1,1,0,0,0,260,45.5);

	// Scorenmoney
	this.answer = new lib.AnswerMC();
	this.answer.setTransform(314,231.5,1,1,0,0,0,292,127.5);

	this.QTitleScrollbar = new lib.flcontrolsUIScrollBar();
	this.QTitleScrollbar.setTransform(598.5,51.2,1,0.804,0,0,0,7.5,50);

	this.QuestionName = new cjs.Text("", "15px Verdana", "#4B4B4B");
	this.QuestionName.lineHeight = 17;
	this.QuestionName.lineWidth = 564;
	this.QuestionName.setTransform(21,11,1,0.969);

	// back
	this.base_3 = new lib.QuestionBASE();
	this.base_3.setTransform(309.9,207.5,1,1,0,0,0,308.9,206.5);

	this.addChild(this.base_3,this.QuestionName,this.answer,this.Rfeedback,this.Wfeedback);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0.1,0.6,620,414);


// symbols:
(lib.questionback = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(204,204,204,0.298)").s().dr(-320,-240,640,480);
	this.shape.setTransform(320,240);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,640,480);

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
	this.base_4 = new lib.checkboxasnwerbase();
	this.base_4.setTransform(248,22.3,1,1,0,0,0,247,22.3);

	this.addChild(this.base_4,this.QAnswer_1,this.QAnswerScrollbar_1,this.checkb);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(1,0,570,44.6);

})(lib = lib||{}, images = images||{}, createjs = createjs||{});
var lib, images, createjs;