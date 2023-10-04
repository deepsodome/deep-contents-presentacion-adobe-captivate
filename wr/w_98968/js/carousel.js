(function (lib, img, cjs) {

var p; // shortcut to reference prototypes

// library properties:
lib.properties = {
	width: 780,
	height: 478,
	fps: 24,
	color: "#FFFFFF",
	manifest: []
};



// symbols:



(lib.Symbol2 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#0099CC").ss(2,1,1).p("Eg4oAAAIE1AAMBscAAA");
	this.shape.setTransform(362.5,0);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-1,-1,727,2);


(lib.slider_mc = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#999999").ss(1.5,1,1).p("AgchZIA5AAQAeAAAAAeIAAB3QAAAegeAAIg5AAQgeAAAAgeIAAh3QAAgeAeAAg");
	this.shape.setTransform(0,9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["#CCCCCC","#FFFFFF"],[0,1],-3.6,0,1.3,0).s().p("AgcBaQgeAAAAgeIAAh3QAAgeAeAAIA5AAQAdAAAAAeIAAB3QAAAegdAAg");
	this.shape_1.setTransform(0,9);

	this.addChild(this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-6.9,-1,13.8,20.1);


(lib.selectedAssetHolderMain = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(69,69,69,0)").s().p("EgwlAbWMAAAg2rMBhKAAAMAAAA2rg");
	this.shape.setTransform(311,175);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,622,350);


(lib.rightBtn = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFFFF").ss(2,1,1).p("AhCCGICFiGIiFiF");
	this.shape.setTransform(35,187.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).to({_off:true},3).wait(1));

	// Layer 1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(255,255,255,0.298)").s().p("AlddTMAAAg6lIK7AAMAAAA6lg");
	this.shape_1.setTransform(35,187.5);
	this.shape_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1).to({_off:false},0).wait(3));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(27.3,173.1,15.5,28.9);


(lib.previewmc = function() {
	this.initialize();

	// Layer 1
	this.text = new cjs.Text("CAROUSEL", "25px 'Tahoma'", "#666666");
	this.text.textAlign = "center";
	this.text.lineHeight = 30;
	this.text.lineWidth = 226;
	this.text.setTransform(113,0);

	this.addChild(this.text);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,230,34.2);


(lib.leftBtn = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFFFF").ss(2,1,1).p("ABDCGIiFiGICFiF");
	this.shape.setTransform(35,187.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).to({_off:true},3).wait(1));

	// Layer 1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(255,255,255,0.298)").s().p("AlddTMAAAg6lIK7AAMAAAA6lg");
	this.shape_1.setTransform(35,187.5);
	this.shape_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1).to({_off:false},0).wait(3));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(27.3,173.1,15.5,28.9);


(lib.dummy = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,153,153,0.01)").s().p("Eg4oABLIAAiVMBxRAAAIAACVg");
	this.shape.setTransform(362.5,7.5);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,725,15);


(lib.carouselbaseMc = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f(bgColor).s().p("Eg87AlVMAAAhKpMB53AAAMAAABKpg");
	this.shape.setTransform(390,238.9);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,780,477.8);


(lib.base1 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(191,191,191,0)").s().p("Eg8JAEsIAApXMB4TAAAIAAJXg");
	this.shape.setTransform(0,0,1,1,0,0,0,-385,-30);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,770,60);


(lib.base = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(69,69,69,0)").s().p("Eg8JAEsIAApXMB4TAAAIAAJXg");
	this.shape.setTransform(385,30);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,770,60);


(lib.sliderTrack_mc = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.Symbol2("synched",0);

	// Layer 2
	this.instance_1 = new lib.dummy();
	this.instance_1.setTransform(260,0,1,1,0,0,0,260,7.5);
	new cjs.ButtonHelper(this.instance_1, 0, 1, 1);

	this.addChild(this.instance_1,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-1,-7.5,727,15);


(lib.sliderMc = function() {
	this.initialize();

	// Layer 3
	this.slider_mc = new lib.slider_mc();
	this.slider_mc.setTransform(0,4.5);

	// Layer 1
	this.track_mc = new lib.sliderTrack_mc();
	this.track_mc.setTransform(261.5,13.5,1,1,0,0,0,260,0);

	this.addChild(this.track_mc,this.slider_mc);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-6.6,3.8,734.2,19.6);

(lib.playPauseBtn = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#CCCCCC").s().p("AimB7IAAj1IFNAAIAAD1g");
	this.shape.setTransform(16.7,12.4);
	this.shape._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(3).to({_off:false},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;


(lib.playPauseMc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		/* stop();*/
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(2));

	// btn
	this.btn = new lib.playPauseBtn();
	this.btn.setTransform(16.7,12.4,0.74,1,0,0,0,16.7,12.4);
	new cjs.ButtonHelper(this.btn, 0, 1, 2, false, new lib.playPauseBtn(), 3);

	this.timeline.addTween(cjs.Tween.get(this.btn).wait(2));

	// playPauseBtns
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgqhXIBVBXIhVBYg");
	this.shape.setTransform(17.6,12.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#444444").s().p("AgPBUIAAinIAfAAIAACng");
	this.shape_1.setTransform(19.6,12.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#444444").s().p("AgPBUIAAinIAfAAIAACng");
	this.shape_2.setTransform(13.9,12.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_2},{t:this.shape_1}]},1).wait(1));

	// base
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#484848").ss(1,1,1).p("AhDhzICHAAQAoAAAAAoIAACXQAAAogoAAIiHAAQgoAAAAgoIAAiXQAAgoAoAAg");
	this.shape_3.setTransform(16.7,12.4);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#009933").s().p("AhDB0QgoAAAAgoIAAiXQAAgoAoAAICHAAQAoAAAAAoIAACXQAAAogoAAg");
	this.shape_4.setTransform(16.7,12.4);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#CCCCCC").s().p("AhDB0QgoAAAAgoIAAiXQAAgoAoAAICHAAQAoAAAAAoIAACXQAAAogoAAg");
	this.shape_5.setTransform(16.7,12.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3}]}).to({state:[{t:this.shape_5},{t:this.shape_3}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(4.4,-0.2,24.8,25.4);


(lib.assetHolderMain = function() {
	this.initialize();

	// Layer 2
	this.holdermc = new lib.base1();

	// Layer 1
	this.base = new lib.base();
	this.base.setTransform(385,30,1,1,0,0,0,385,30);

	this.addChild(this.base,this.holdermc);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,770,60);


(lib.customcarouselrunTimeActions = function() {
	this.initialize();

	// mainImgaeMask (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("EgwkAbVMAAAg2qMBhKAAAMAAAA2qg");
	mask.setTransform(390,190.5);

	// mainImage
	this.selectedAssetHolderMain = new lib.selectedAssetHolderMain();
	this.selectedAssetHolderMain.setTransform(390,190.3,1,1,0,0,0,311,174.8);

	this.selectedAssetHolderMain.mask = mask;

	// Left right buttons
	this.right_btn = new lib.rightBtn();
	this.right_btn.setTransform(735,132.5,1,1,0,0,0,25,132.5);
	new cjs.ButtonHelper(this.right_btn, 0, 1, 2, false, new lib.rightBtn(), 3);

	this.left_btn = new lib.leftBtn();
	this.left_btn.setTransform(25,132.5,1,1,0,0,0,25,132.5);
	new cjs.ButtonHelper(this.left_btn, 0, 1, 2, false, new lib.leftBtn(), 3);

	// Thumbs Mask (mask)
	var mask_1 = new cjs.Shape();
	mask_1._off = true;
	mask_1.graphics.p("Eg8IAFeIAAq7MB4RAAAIAAK7g");
	mask_1.setTransform(390,410.4);

	// Thumbs
	this.assetHolderMain = new lib.assetHolderMain();
	this.assetHolderMain.setTransform(390,410.4,0.999,1,0,0,0,385,30);

	this.assetHolderMain.mask = mask_1;

	// Slider
	this.assetScroller = new lib.sliderMc();
	this.assetScroller.setTransform(407.8,460.1,1,1,0,0,0,378.1,13.7);

	// bg
	this.carouselBg = new lib.carouselbaseMc();
	this.carouselBg.setTransform(270,163.7,1,1,0,0,0,270,163.7);

	this.addChild(this.carouselBg,this.assetScroller,this.assetHolderMain,this.left_btn,this.right_btn,this.selectedAssetHolderMain);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,780,477.8);


(lib.customcarouselrunTimeActions_1 = function() {
	this.initialize();

	// Layer 5
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#999999").ss(1,1,1).p("EgiXgTdMBEvAAAMAAAAm7MhEvAAAg");
	this.shape.setTransform(270,132.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("EgiWATeMAAAgm7MBEtAAAMAAAAm7g");
	this.shape_1.setTransform(270,132.5);

	// Layer 3 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("EgiWATeMAAAgm7MBEtAAAMAAAAm7g");
	mask.setTransform(270,132.5);

	// Layer 7
	this.selectedAssetHolderMain = new lib.selectedAssetHolderMain();
	this.selectedAssetHolderMain.setTransform(270,132.5,1,1,0,0,0,270,132.5);

	this.selectedAssetHolderMain.mask = mask;

	// Layer 8
	this.right_btn = new lib.rightBtn();
	this.right_btn.setTransform(515,132.5,1,1,0,0,0,25,132.5);
	new cjs.ButtonHelper(this.right_btn, 0, 1, 2, false, new lib.rightBtn(), 3);

	this.left_btn = new lib.leftBtn();
	this.left_btn.setTransform(25,132.5,1,1,0,0,0,25,132.5);
	new cjs.ButtonHelper(this.left_btn, 0, 1, 2, false, new lib.leftBtn(), 3);

	// Layer 9
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#999999").ss(0.1,2,1).p("EgpogGPMBTRAAAIAAMfMhTRAAAg");
	this.shape_2.setTransform(269.5,314.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("rgba(255,255,255,0.6)").s().p("EgpoAGPIAAseMBTRAAAIAAMeg");
	this.shape_3.setTransform(269.5,314.3);

	// Layer 6 (mask)
	var mask_1 = new cjs.Shape();
	mask_1._off = true;
	mask_1.graphics.p("EgqLAGQIAAseMBUXAAAIAAMeg");
	mask_1.setTransform(270,318);

	// Layer 2
	this.assetHolderMain = new lib.assetHolderMain();
	this.assetHolderMain.setTransform(270,318,1,1,0,0,0,270,37.5);

	this.assetHolderMain.mask = mask_1;

	// Layer 4
	this.assetScroller = new lib.sliderMc();
	this.assetScroller.setTransform(265.4,372.3,1,1,0,0,0,264.6,12.7);

	// Layer 1
	this.selectedAssetHolderMain_1 = new lib.selectedAssetHolderMain();
	this.selectedAssetHolderMain_1.setTransform(270,132.5,1,1,0,0,0,270,132.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#999999").ss(1,1,1).p("EgqLgJXMBUXAAAIAASvMhUXAAAg");
	this.shape_4.setTransform(270,330);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#CCCCCC").s().p("EgqLAJXIAAyuMBUXAAAIAASug");
	this.shape_5.setTransform(270,330);

	this.addChild(this.shape_5,this.shape_4,this.selectedAssetHolderMain_1,this.assetScroller,this.assetHolderMain,this.shape_3,this.shape_2,this.left_btn,this.right_btn,this.selectedAssetHolderMain,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-5.9,0,734.2,391);


// stage content:
(lib.carousel = function() {
	this.initialize();

	// Layer 1
	this.runTime_mc = new lib.customcarouselrunTimeActions();
	this.runTime_mc.setTransform(270,195,1,1,0,0,0,270,195);

	this.preview_mc = new lib.previewmc();
	this.preview_mc.setTransform(390,189.1,1,1,0,0,0,115,17.1);

	this.addChild(this.runTime_mc);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(390,239,780,477.8);


(lib.playpause = function() {
	this.initialize();

	// Layer 1
	this.playPauseMc = new lib.playPauseMc();
	this.playPauseMc.setTransform(13,13.1,1,1,0,0,0,16.7,12.4);

	this.addChild(this.playPauseMc);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(13.7,13.7,23.7,24.6);

})(lib = lib||{}, images = images||{}, createjs = createjs||{});
var lib, images, createjs;