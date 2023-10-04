(function (lib, img, createjs) {

var p; // shortcut to reference prototypes
var selectedNum, selectedBorder,CardBaseColor;

// stage content:
(lib.cardback = function(varGetCardShape, varGetCardBorder,varGetCardBaseColor) {
	selectedNum = varGetCardShape;
	selectedBorder = varGetCardBorder;
	CardBaseColor = varGetCardBaseColor
	this.initialize();

	// Layer 1
	this.cardBackMc = new lib.runtimeCardBack_mc();
	this.cardBackMc.setTransform(254.4,253,1,1,0,0,0,125.9,124.5);

	this.addChild(this.cardBackMc);
}).prototype = p = new createjs.Container();
p.nominalBounds = new createjs.Rectangle(0,0,259,259);


(lib.imgcardfront = function(varGetCardShape,varGetCardBorder) {
	selectedNum = varGetCardShape;
	selectedBorder = varGetCardBorder;
	this.initialize();

	// Layer 1
	this.imgCard = new lib.interactiveImgFrontRun_mc();
	this.imgCard.setTransform(0,253,1,1,0,0,180,125.9,124.5);

	this.addChild(this.imgCard);
}).prototype = p = new createjs.Container();
p.nominalBounds = new createjs.Rectangle(0,0,259,259);


(lib.txtcardfront = function(varGetCardShape,varGetCardBorder) {
	selectedNum = varGetCardShape;
	selectedBorder = varGetCardBorder;
	this.initialize();

	// Layer 1
	this.txtCard = new lib.interactiveTxtFrontRun_mc();
	this.txtCard.setTransform(254.4,253,1,1,0,0,0,125.9,124.5);

	this.addChild(this.txtCard);
}).prototype = p = new createjs.Container();
p.nominalBounds = new createjs.Rectangle(0,0,259,259);


// symbols:
(lib.set5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,false,{});

	// Layer 1
	this.shape = new createjs.Shape();
	this.shape.graphics.f().s("rgba(214,214,214,0)").ss(10,2,0,3).p("AITFIID1OpIsJoWIsBIQID1uoIrSpkIOcggIFIuQIFFOGIOZAxg");
	this.shape.setTransform(124.9,123.5);

	this.shape_1 = new createjs.Shape();
	this.shape_1.graphics.lf(["#3A2002","#D98F00","#381E00"],[0,0.549,1],-2.8,4.8,3.8,-4.8).s().p("AmJjOIADgCIgCgEIABgDIgEgWQAFgHABgHIAAgHIAAgHQgDgkAHgKIAAgJIABgCIJxGvICbDWg");
	this.shape_1.setTransform(163.9,217.4);

	this.shape_2 = new createjs.Shape();
	this.shape_2.graphics.lf(["#3A2002","#D98F00","#381E00"],[0,0.549,1],-4.6,-2.8,1.2,5.5).s().p("AkWCgIAjgwIJ4mvIABABIABAAIgBADIAAAJQgHAKADAkIAAAGIAAAHQgBAHgFAHIAEAXIgBADIACADIgDADIsEIJg");
	this.shape_2.setTransform(86.2,217);

	this.shape_3 = new createjs.Shape();
	this.shape_3.graphics.lf(["#3A2002","#D98F00","#381E00"],[0,0.549,1],-3.7,-9.4,7.4,-6.6).s().p("ABDm+IACgBIBlgbIABAAIjGLxIgjAxIhsCTg");
	this.shape_3.setTransform(64.6,200.2);

	this.shape_4 = new createjs.Shape();
	this.shape_4.graphics.lf(["#3A2002","#D98F00","#381E00"],[0,0.549,1],5.4,9.8,12,2.1).s().p("AjxigIgbgVIiKh5QBCASA3ATQAvARAmAQIARAHIAHAGIJHHtIgHABQAJgBgEACIhlAbg");
	this.shape_4.setTransform(41,125);

	this.shape_5 = new createjs.Shape();
	this.shape_5.graphics.lf(["#333333","#FFFFFF","#333333"],[0,0.502,0.961],46.3,40.2,52.9,32.5).s().p("AAAAAIAAAAIAAAAg");
	this.shape_5.setTransform(0.2,94.7);

	this.shape_6 = new createjs.Shape();
	this.shape_6.graphics.lf(["#333333","#FFFFFF","#333333"],[0,0.502,0.961],49,6.7,48.7,-2).s().p("AAAAAIAAAAIAAAAIAAAAg");
	this.shape_6.setTransform(0.1,94.6);

	this.shape_7 = new createjs.Shape();
	this.shape_7.graphics.lf(["#3A2002","#D98F00","#381E00"],[0,0.549,1],0.1,4.1,-0.1,-4.6).s().p("AkGAzIgRgHQgmgPgwgRQg2gRhCgSIgCgCIOaggIAAABIA1BWIroAcg");
	this.shape_7.setTransform(49,97.2);

	this.shape_8 = new createjs.Shape();
	this.shape_8.graphics.lf(["#3A2002","#D98F00","#381E00"],[0,0.549,1],-2.3,-0.2,7.2,3.3).s().p("AhuH0Ig0hXIFFuQIgBEFIkJLig");
	this.shape_8.setTransform(108.9,50.1);

	this.shape_9 = new createjs.Shape();
	this.shape_9.graphics.lf(["#3A2002","#D98F00","#381E00"],[0,0.549,1],-9.7,3.2,2.4,-0.9).s().p("ABaHvIkGrWIAAgDIABkFIABAAIFIOHIAPAAIhNBYg");
	this.shape_9.setTransform(142.5,49.6);

	this.shape_10 = new createjs.Shape();
	this.shape_10.graphics.lf(["#3A2002","#D98F00","#381E00"],[0,0.549,1],-5.8,1,5.5,-1.8).s().p("ACwHkIicjXIAEgDIjJrvIBsAbIgEADIgBABID8Osg");
	this.shape_10.setTransform(186,201.4);

	this.shape_11 = new createjs.Shape();
	this.shape_11.graphics.lf(["#3A2002","#D98F00","#381E00"],[0,0.549,1],2.9,2,-2.7,-4.5).s().p("AmXEQIgBgBIJKnwIDnhJIrEJVg");
	this.shape_11.setTransform(209,125.5);

	this.shape_12 = new createjs.Shape();
	this.shape_12.graphics.lf(["#3A2002","#D98F00","#381E00"],[0,0.549,1],0,5.5,0.4,-4.4).s().p("AnoAZIBNhWIOEAtIgBAGIjnBHIgBABg");
	this.shape_12.setTransform(201.1,96.7);

	this.shape_13 = new createjs.Shape();
	this.shape_13.graphics.lf(["#333333","#FFFFFF","#333333"],[0,0.502,0.961],-2.8,4.8,3.8,-4.8).s().p("AmJjOIADgCIgCgEIABgDIgEgWQAFgHABgHIAAgHIAAgHQgDgkAHgKIAAgJIABgCIJxGvICbDWg");
	this.shape_13.setTransform(163.9,217.4);

	this.shape_14 = new createjs.Shape();
	this.shape_14.graphics.lf(["#333333","#FFFFFF","#333333"],[0,0.502,0.961],-4.6,-2.8,1.2,5.5).s().p("AkWCgIAjgwIJ4mvIABABIABAAIgBADIAAAJQgHAKADAkIAAAGIAAAHQgBAHgFAHIAEAXIgBADIACADIgDADIsEIJg");
	this.shape_14.setTransform(86.2,217);

	this.shape_15 = new createjs.Shape();
	this.shape_15.graphics.lf(["#333333","#FFFFFF","#333333"],[0,0.502,0.961],-3.7,-9.4,7.4,-6.6).s().p("ABDm+IACgBIBlgbIABAAIjGLxIgjAxIhsCTg");
	this.shape_15.setTransform(64.6,200.2);

	this.shape_16 = new createjs.Shape();
	this.shape_16.graphics.lf(["#333333","#FFFFFF","#333333"],[0,0.502,0.961],5.5,9.8,12.1,2.1).s().p("AjwigIgcgVIiJh5QBCASA2ATQAwARAmAQIARAHIAGAGIJHHtIgGABQAJgBgEACIhlAbgAmWkuIAAAAIABAAg");
	this.shape_16.setTransform(41,125);

	this.shape_17 = new createjs.Shape();
	this.shape_17.graphics.lf(["#333333","#FFFFFF","#333333"],[0,0.502,0.961],0.2,4.1,0,-4.6).s().p("AkGAzIgRgHQgmgPgvgRQg3gRhCgSIgCgCIObggIAAABIA1BWIroAcgAnmgXIgCgCIABAAIABACg");
	this.shape_17.setTransform(48.9,97.2);

	this.shape_18 = new createjs.Shape();
	this.shape_18.graphics.lf(["#333333","#FFFFFF","#333333"],[0,0.502,0.961],-2.3,-0.2,7.2,3.3).s().p("AhuH0Ig0hXIFFuQIgBEFIkJLig");
	this.shape_18.setTransform(108.9,50.1);

	this.shape_19 = new createjs.Shape();
	this.shape_19.graphics.lf(["#333333","#FFFFFF","#333333"],[0,0.502,0.961],-9.7,3.2,2.4,-0.9).s().p("ABaHvIkGrWIAAgDIABkFIABAAIFIOHIAPAAIhNBYg");
	this.shape_19.setTransform(142.5,49.6);

	this.shape_20 = new createjs.Shape();
	this.shape_20.graphics.lf(["#333333","#FFFFFF","#333333"],[0,0.502,0.961],-5.8,1,5.5,-1.8).s().p("ACwHkIicjXIAEgDIjJrvIBsAbIgEADIgBABID8Osg");
	this.shape_20.setTransform(186,201.4);

	this.shape_21 = new createjs.Shape();
	this.shape_21.graphics.lf(["#333333","#FFFFFF","#333333"],[0,0.502,0.961],2.9,2,-2.7,-4.5).s().p("AmXEQIgBgBIJKnwIDnhJIrEJVg");
	this.shape_21.setTransform(209,125.5);

	this.shape_22 = new createjs.Shape();
	this.shape_22.graphics.lf(["#333333","#FFFFFF","#333333"],[0,0.502,0.961],0,5.5,0.4,-4.4).s().p("AnoAZIBNhWIOEAtIgBAGIjnBHIgBABg");
	this.shape_22.setTransform(201.1,96.7);

	this.timeline.addTween(createjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1}]},1).to({state:[{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13}]},1).wait(1));

}).prototype = p = new createjs.MovieClip();
p.nominalBounds = new createjs.Rectangle(0,0,250,250);


(lib.set4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,false,{});

	// Layer 1
	this.shape = new createjs.Shape();
	this.shape.graphics.f().s("rgba(214,214,214,0)").ss(10,2,0,3).p("AzXT2MATXgmuMATYAmug");
	this.shape.setTransform(124.7,121.8,1,1,0,0,0,0.7,0.9);

	this.shape_1 = new createjs.Shape();
	this.shape_1.graphics.lf(["#3A2002","#D98F00","#381E00"],[0,0.549,1],0,5,0.1,-4.9).s().p("AzfAxICXhhMAiTAAAIABAAIABAEICTBdg");
	this.shape_1.setTransform(124.9,245);

	this.shape_2 = new createjs.Shape();
	this.shape_2.graphics.lf(["#3A2002","#D98F00","#381E00"],[0,0.549,1],-11.4,4.9,0.7,-1).s().p("AJuTgIiUhfIgBgFIgBAAMgRIgiHIAAgEIAAjQMAThAm/g");
	this.shape_2.setTransform(187.5,125.2);

	this.shape_3 = new createjs.Shape();
	this.shape_3.graphics.lf(["#3A2002","#D98F00","#381E00"],[0,0.549,1],-1.2,-0.9,8.3,3.8).s().p("AJvzhIACADIAADQMgRBAiHIgIAFIiYBkg");
	this.shape_3.setTransform(62.5,125);

	this.shape_4 = new createjs.Shape();
	this.shape_4.graphics.lf(["#333333","#FFFFFF","#333333"],[0,0.502,0.961],0,5,0.1,-4.9).s().p("AzfAxICXhhMAiPAAAIAGAEICTBdg");
	this.shape_4.setTransform(124.9,245);

	this.shape_5 = new createjs.Shape();
	this.shape_5.graphics.lf(["#333333","#FFFFFF","#333333"],[0.247,0.549,1],-11.4,4.9,0.7,-1).s().p("AJuTgIiUhfMgRKgiMIAAgEIAAjQMAThAm/g");
	this.shape_5.setTransform(187.5,125.2);

	this.shape_6 = new createjs.Shape();
	this.shape_6.graphics.lf(["#333333","#FFFFFF","#333333"],[0,0.549,1],-1.2,-0.9,8.3,3.8).s().p("AJvzhIACADIAADQMgRBAiHIgIAFIiYBkg");
	this.shape_6.setTransform(62.5,125);

	this.timeline.addTween(createjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1}]},1).to({state:[{t:this.shape_6},{t:this.shape_5},{t:this.shape_4}]},1).wait(1));

}).prototype = p = new createjs.MovieClip();
p.nominalBounds = new createjs.Rectangle(0,0,248,248);


(lib.set3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,false,{});

	// Layer 1
	this.shape = new createjs.Shape();
	this.shape.graphics.f().s("rgba(214,214,214,0)").ss(10,2,0,3).p("ATiAAQAAIFluFuQlvFvoFAAQoEAAlulvQlvluAAoFQAAoFFvluQFuluIEAAQIFAAFvFuQFuFuAAIFg");
	this.shape.setTransform(125,125);

	this.shape_1 = new createjs.Shape();
	this.shape_1.graphics.rf(["#3A2002","#D98F00","#895701"],[0.894,0.953,1],64.5,0,0,64.5,0,128).s().p("Aj8NzQlzltgBoGQABoFFzluQFrloICgGIAABhQnWAIlMFJQlYFTAAHdQAAHgFYFSQFMFJHWAKIAABcQoCgIlrlng");
	this.shape_1.setTransform(62.5,125);

	this.shape_2 = new createjs.Shape();
	this.shape_2.graphics.rf(["#3A2002","#D98F00","#895701"],[0.894,0.953,1],-64.3,0,0,-64.3,0,128).s().p("ApvSGQHVgKFMlJQFYlSAAngQAAndlYlTQlMlJnVgIIAAhhQIAAGFrFoQF1FuAAIFQAAIGl1FtQlrFnoAAIg");
	this.shape_2.setTransform(187.5,125);

	this.shape_3 = new createjs.Shape();
	this.shape_3.graphics.rf(["#333333","#FFFFFF","#333333"],[0.894,0.953,1],64.5,0,0,64.5,0,128).s().p("Aj8NzQlzltgBoGQABoEFzlvQFrloICgGIAABhQnWAIlMFKQlYFSAAHdQAAHgFYFSQFMFKHWAKIAABbQoCgHlrlog");
	this.shape_3.setTransform(62.5,125);

	this.shape_4 = new createjs.Shape();
	this.shape_4.graphics.rf(["#333333","#FFFFFF","#333333"],[0.894,0.953,1],-64.3,0,0,-64.3,0,128).s().p("ApvSHQHVgKFMlKQFYlSAAngQAAndlYlSQlMlKnVgIIAAhhQIAAGFrFoQF1FvAAIEQAAIGl1FtQlrFooAAHg");
	this.shape_4.setTransform(187.5,125);

	this.timeline.addTween(createjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_2},{t:this.shape_1}]},1).to({state:[{t:this.shape_4},{t:this.shape_3}]},1).wait(1));

}).prototype = p = new createjs.MovieClip();
p.nominalBounds = new createjs.Rectangle(0,0,250,250);


(lib.set2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,false,{});

	// Layer 1
	this.shape = new createjs.Shape();
	this.shape.graphics.f().s("rgba(214,214,214,0)").ss(10,2,0,3).p("ASeycQhDhDhdAAI/6AAQheAAhCBDQhDBDAABgIAAf0QAABfBDBDQBCBDBeAAIf6AAQBdAABDhDQBChDAAhfIAA/0QAAhghChDg");
	this.shape.setTransform(124.8,124.9);

	this.shape_1 = new createjs.Shape();
	this.shape_1.graphics.f().ls(["#3A2002","#D98F00","#381E00"],[0,0.549,1],0,6.8,0,-6.6).ss(10,1,0,3).p("APXAAI+tAA");
	this.shape_1.setTransform(125.2,4.8);

	this.shape_2 = new createjs.Shape();
	this.shape_2.graphics.f().ls(["#3A2002","#D98F00","#381E00"],[0,0.549,1],-1.4,-4.9,-1.4,5.1).ss(10,1,0,3).p("AvmAAIfMAA");
	this.shape_2.setTransform(126.7,245.2);

	this.shape_3 = new createjs.Shape();
	this.shape_3.graphics.f().ls(["#3A2002","#D98F00","#381E00"],[0,0.549,1],-4.7,-2.1,4.8,-2.1).ss(10,1,0,3).p("AAAPZIAA+x");
	this.shape_3.setTransform(245.3,125.4);

	this.shape_4 = new createjs.Shape();
	this.shape_4.graphics.f().ls(["#3A2002","#D98F00","#381E00"],[0,0.549,1],-4.7,0,4.8,0).ss(10,1,0,3).p("AAAvVIAAes");
	this.shape_4.setTransform(5.1,125.2);

	this.shape_5 = new createjs.Shape();
	this.shape_5.graphics.rf(["#3A2002","#D98F00","#3A2002"],[0.306,0.549,0.8],-7.7,-5,0,-7.6,-5.1,31.3).s().p("Ah1ApQCDgiAIiBQA8AWAggkIADAAQAECpicBQQgJADgNAIQgJABgKAEQgNAFgZADQAcgzgfgtg");
	this.shape_5.setTransform(238.2,236.3);

	this.shape_6 = new createjs.Shape();
	this.shape_6.graphics.rf(["#3A2002","#D98F00","#3A2002"],[0.306,0.549,0.8],5.4,-6.3,0,5.5,-6.2,31.3).s().p("AhvgZQgCgJgHgOQgBgIgEgKQgFgOgFgsQANgHAmAAQAUAAAbACQAfCbCCALQgXA7AiAhIABADIgBAAQioAAhOidg");
	this.shape_6.setTransform(13.6,236.7);

	this.shape_7 = new createjs.Shape();
	this.shape_7.graphics.rf(["#3A2002","#D98F00","#3A2002"],[0.306,0.549,0.8],7.6,5.6,0,7.5,5.7,31.3).s().p("Ah+B8QAhjjDcgYQggAwAbAuQiFAZgRCAQg5gZgpAhg");
	this.shape_7.setTransform(12.9,12.9);

	this.shape_8 = new createjs.Shape();
	this.shape_8.graphics.rf(["#3A2002","#D98F00","#3A2002"],[0.306,0.549,0.8],-5.2,7,0,-5.3,6.9,31.3).s().p("AAlCCQgZiTiOgTQAng3gggkIgBgCQCpAIBEChQADAKAGAOQABAIADAKQAEAOABAiQgwgpguApg");
	this.shape_8.setTransform(236.8,13.2);

	this.shape_9 = new createjs.Shape();
	this.shape_9.graphics.f().ls(["#333333","#FFFFFF","#333333"],[0,0.549,1],-4.7,0.4,4.8,0.4).ss(10,1,0,3).p("AAAvRIAAej");
	this.shape_9.setTransform(5,124.7);

	this.shape_10 = new createjs.Shape();
	this.shape_10.graphics.f().ls(["#333333","#FFFFFF","#333333"],[0,0.549,1],0,6.8,0,-6.6).ss(10,1,0,3).p("APXAAI+tAA");
	this.shape_10.setTransform(125.1,4.8);

	this.shape_11 = new createjs.Shape();
	this.shape_11.graphics.f().ls(["#333333","#FFFFFF","#333333"],[0,0.549,1],0,-4.9,0,5.1).ss(10,1,0,3).p("AvkAAIfJAA");
	this.shape_11.setTransform(126.6,245.3);

	this.shape_12 = new createjs.Shape();
	this.shape_12.graphics.f().ls(["#333333","#FFFFFF","#333333"],[0,0.549,1],-4.7,-0.1,4.8,-0.1).ss(10,1,0,3).p("AAAPTIAA+l");
	this.shape_12.setTransform(245.2,125.3);

	this.shape_13 = new createjs.Shape();
	this.shape_13.graphics.rf(["#333333","#FFFFFF","#333333"],[0.306,0.549,0.8],-7.7,-5,0,-7.6,-5.1,31.3).s().p("Ah1ApQCDgiAIiBQA8AWAggkIADAAQAECpicBQQgJADgNAIQgJABgKAEQgNAFgZADQAcgzgfgtg");
	this.shape_13.setTransform(238.2,236.3);

	this.shape_14 = new createjs.Shape();
	this.shape_14.graphics.rf(["#333333","#FFFFFF","#333333"],[0.306,0.549,0.8],5.4,-5.9,0,5.5,-5.8,31.3).s().p("AhvgUQgCgKgHgNQgBgIgEgLQgFgNgFgtQATgQAdAAIACAAQAcABAUAKQAfCcCCAKQgXA7AiAiIABADIgBAAQioAAhOidg");
	this.shape_14.setTransform(13.6,236.3);

	this.shape_15 = new createjs.Shape();
	this.shape_15.graphics.rf(["#333333","#FFFFFF","#333333"],[0.306,0.549,0.8],7.6,5.6,0,7.5,5.7,31.2).s().p("AiBB+IABgFQAgjjDcgYQAJAzgGArQiMAagTCMg");
	this.shape_15.setTransform(13.2,13.1);

	this.shape_16 = new createjs.Shape();
	this.shape_16.graphics.rf(["#333333","#FFFFFF","#333333"],[0.306,0.549,0.8],-5.2,7,0,-5.3,6.9,31.3).s().p("AAlCCQgZiTiOgTQAng3gggkIgBgCQCpAIBEChQADAKAGAOQABAIADAKQAEAOABAiQgwgpguApg");
	this.shape_16.setTransform(236.8,13.2);

	this.timeline.addTween(createjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1}]},1).to({state:[{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9}]},1).wait(1));

}).prototype = p = new createjs.MovieClip();
p.nominalBounds = new createjs.Rectangle(0,0,249.6,249.7);


(lib.set1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,false,{});

	// Layer 1
	this.shape = new createjs.Shape();
	this.shape.graphics.f().s("rgba(102,255,0,0)").ss(10,2,0,3).p("ATiTiMgnDAAAMAAAgnDMAnDAAAg");
	this.shape.setTransform(125,125);

	this.shape_1 = new createjs.Shape();
	this.shape_1.graphics.lf(["#3A2002","#D98F00","#381E00"],[0,0.549,1],-0.9,-4.8,-0.9,4.9).s().p("AzgAxIBihfIABgBIAAgBMAj8AAAIBiBhg");
	this.shape_1.setTransform(125,245.1);

	this.shape_2 = new createjs.Shape();
	this.shape_2.graphics.lf(["#3A2002","#D98F00","#381E00"],[0,0.549,1],-4.8,0.6,4.9,0.6).s().p("AgwzgIAAgBIBhBjMAAAAj/IhhBhg");
	this.shape_2.setTransform(5,125);

	this.shape_3 = new createjs.Shape();
	this.shape_3.graphics.lf(["#2F2F2F","#FFFFFF","#2F2F2F"],[0,0.549,1],126.1,9.8,126.1,0).s().p("AAAAAIAAAAIAAAAIAAAAg");
	this.shape_3.setTransform(0,0.1);

	this.shape_4 = new createjs.Shape();
	this.shape_4.graphics.lf(["#3A2002","#D98F00","#381E00"],[0,0.549,1],-4.8,0,5,0).s().p("AgvR/MgABgj9IAAgBIBhhiMAAAAnDg");
	this.shape_4.setTransform(245,125);

	this.shape_5 = new createjs.Shape();
	this.shape_5.graphics.lf(["#3A2002","#D98F00","#381E00"],[0,0.549,1],1.1,4.9,1.1,-4.8).s().p("Ax+AxIhihhMAnBAAAIhjBgIAAABg");
	this.shape_5.setTransform(125,4.9);

	this.shape_6 = new createjs.Shape();
	this.shape_6.graphics.lf(["#2F2F2F","#FFFFFF","#2F2F2F"],[0,0.549,1],-0.9,-4.8,-0.9,4.9).s().p("AzgAxIBihfIABgBIAAgBMAj8AAAIBiBhg");
	this.shape_6.setTransform(125,245.1);

	this.shape_7 = new createjs.Shape();
	this.shape_7.graphics.lf(["#2F2F2F","#FFFFFF","#2F2F2F"],[0,0.549,1],-4.8,0.6,4.9,0.6).s().p("AgwzgIAAgBIBhBjMAAAAj/IhhBhg");
	this.shape_7.setTransform(5,125);

	this.shape_8 = new createjs.Shape();
	this.shape_8.graphics.lf(["#2F2F2F","#FFFFFF","#2F2F2F"],[0,0.549,1],-4.8,0.6,4.9,0.6).s().p("AgvR/MgABgj9IAAgBIBhhiMAAAAnDg");
	this.shape_8.setTransform(245,125);

	this.shape_9 = new createjs.Shape();
	this.shape_9.graphics.lf(["#2F2F2F","#FFFFFF","#2F2F2F"],[0,0.549,1],1.1,4.9,1.1,-4.8).s().p("Ax+AxIhihhMAnCAAAIhkBgIAAABgAzhgvIAAgBIABAAIAAABg");
	this.shape_9.setTransform(125,4.9);

	this.timeline.addTween(createjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1}]},1).to({state:[{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6}]},1).wait(1));

}).prototype = p = new createjs.MovieClip();
p.nominalBounds = new createjs.Rectangle(0,0,250,250);


(lib.set = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,false,{});

	// Layer 1
	this.shape = new createjs.Shape();
	this.shape.graphics.f().s("rgba(102,255,0,0)").ss(10,2,0,3).p("ATiTiMgnDAAAMAAAgnDMAnDAAAg");
	this.shape.setTransform(125,125);

	this.shape_1 = new createjs.Shape();
	this.shape_1.graphics.lf(["#3A2002","#D98F00","#381E00"],[0,0.549,1],-4.8,78.7,4.9,78.7).s().p("AgwHUIAAumIAAgBIBhBiIAANFg");
	this.shape_1.setTransform(5,77.1);

	this.shape_2 = new createjs.Shape();
	this.shape_2.graphics.lf(["#2F2F2F","#FFFFFF","#2F2F2F"],[0,0.549,1],126.1,9.8,126.1,0).s().p("AAAAAIAAAAIAAAAIAAAAg");
	this.shape_2.setTransform(0,30.3);

	this.shape_3 = new createjs.Shape();
	this.shape_3.graphics.lf(["#3A2002","#D98F00","#381E00"],[0,0.549,1],-4.8,78.1,5,78.1).s().p("AgwHUIAAtFIAAgBIBhhhIAAOng");
	this.shape_3.setTransform(245,77.1);

	this.shape_4 = new createjs.Shape();
	this.shape_4.graphics.lf(["#3A2002","#D98F00","#381E00"],[0,0.549,1],1.1,4.9,1.1,-4.8).s().p("Ax+AxIhihhMAnBAAAIhjBgIAAABg");
	this.shape_4.setTransform(125,35.2);

	this.shape_5 = new createjs.Shape();
	this.shape_5.graphics.lf(["#3A2002","#D98F00","#381E00"],[0,0.549,1],-0.9,-4.8,-0.9,4.9).s().p("AzgAxIBihfIABgBIAAgBMAj8AAAIBiBhg");
	this.shape_5.setTransform(125,212.8);

	this.shape_6 = new createjs.Shape();
	this.shape_6.graphics.lf(["#3A2002","#D98F00","#381E00"],[0,0.549,1],-4.8,-77.4,4.9,-77.4).s().p("AgwnTIBhAAIAANHIhhBgg");
	this.shape_6.setTransform(4.9,170.9);

	this.shape_7 = new createjs.Shape();
	this.shape_7.graphics.lf(["#3A2002","#D98F00","#381E00"],[0,0.549,1],-4.9,-78,5,-78).s().p("AgvFyIgBtFIBhAAIAAOng");
	this.shape_7.setTransform(245,170.9);

	this.shape_8 = new createjs.Shape();
	this.shape_8.graphics.lf(["#2F2F2F","#FFFFFF","#2F2F2F"],[0,0.549,1],-4.8,78.7,4.9,78.7).s().p("AgwHUIAAumIAAgBIBhBiIAANFg");
	this.shape_8.setTransform(5,78.1);

	this.shape_9 = new createjs.Shape();
	this.shape_9.graphics.lf(["#2F2F2F","#FFFFFF","#2F2F2F"],[0,0.549,1],-4.8,78.7,4.9,78.7).s().p("AgwHUIAAtFIAAgBIBhhhIAAOng");



	this.shape_9.setTransform(245,78.1);

	this.shape_10 = new createjs.Shape();
	this.shape_10.graphics.lf(["#2F2F2F","#FFFFFF","#2F2F2F"],[0,0.549,1],1.1,4.9,1.1,-4.8).s().p("Ax+AxIhihhMAnCAAAIhkBgIAAABgAzhgvIAAgBIABAAIAAABg");
	this.shape_10.setTransform(125,36.2);

	this.shape_11 = new createjs.Shape();
	this.shape_11.graphics.lf(["#2F2F2F","#FFFFFF","#2F2F2F"],[0,0.549,1],-0.9,-4.8,-0.9,4.9).s().p("AzgAxIBihfIABgBIAAgBMAj8AAAIBiBhg");
	this.shape_11.setTransform(125,213.8);

	this.shape_12 = new createjs.Shape();
	this.shape_12.graphics.lf(["#2F2F2F","#FFFFFF","#2F2F2F"],[0,0.549,1],-4.8,-77.4,4.9,-77.4).s().p("AgwnTIBhAAIAANHIhhBgg");
	this.shape_12.setTransform(5,171.9);

	this.shape_13 = new createjs.Shape();
	this.shape_13.graphics.lf(["#2F2F2F","#FFFFFF","#2F2F2F"],[0,0.549,1],-4.8,-77.4,4.9,-77.4).s().p("AgwFyIAAtFIBhAAIAAOng");
	this.shape_13.setTransform(245.1,171.9);

	this.timeline.addTween(createjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1}]},1).to({state:[{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8}]},1).wait(1));

}).prototype = p = new createjs.MovieClip();
p.nominalBounds = new createjs.Rectangle(0,0,250,250);


(lib.textHolder_mccopy = function() {
	this.initialize();

	// image
	this.txt = new createjs.Text("jkhk", "38px Tahoma");
	this.txt.textAlign = "center";
	this.txt.lineHeight = 40;
	this.txt.lineWidth = 222;
	this.txt.setTransform(347,39,1,1,0,0,180);

	this.shape = new createjs.Shape();
	this.shape.graphics.f("rgba(255,255,0,0)").s().p("AzhTiMAAAgnDMAnDAAAMAAAAnDg");
	this.shape.setTransform(125,125);

	this.addChild(this.shape,this.txt);
}).prototype = p = new createjs.Container();
p.nominalBounds = new createjs.Rectangle(0,0,250,250);


(lib.shadow_mccopy = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,false,{});

	// Layer 1
	this.shape = new createjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.047)").s().p("AzgThMAAAgnBMAnBAAAMAAAAnBg");
	this.shape.setTransform(131,131);

	this.shape_1 = new createjs.Shape();
	this.shape_1.graphics.f("rgba(0,0,0,0.047)").s().p("AzgThMAAAgnBMAnBAAAMAAAAnBg");
	this.shape_1.setTransform(130,130);

	this.shape_2 = new createjs.Shape();
	this.shape_2.graphics.f("rgba(0,0,0,0.047)").s().p("AzhThMAAAgnCMAnCAAAMAAAAnCg");
	this.shape_2.setTransform(129,129);

	this.shape_3 = new createjs.Shape();
	this.shape_3.graphics.f("rgba(0,0,0,0.047)").s().p("AzhThMAAAgnCMAnCAAAMAAAAnCg");
	this.shape_3.setTransform(128,128);

	this.shape_4 = new createjs.Shape();
	this.shape_4.graphics.f("rgba(0,0,0,0.047)").s().p("AzhTiMAAAgnDMAnDAAAMAAAAnDg");
	this.shape_4.setTransform(127,127);

	this.shape_5 = new createjs.Shape();
	this.shape_5.graphics.f("rgba(0,0,0,0.047)").s().p("AzhTiMAAAgnDMAnDAAAMAAAAnDg");
	this.shape_5.setTransform(126,126);

	this.shape_6 = new createjs.Shape();
	this.shape_6.graphics.f("rgba(0,0,0,0.047)").s().p("AzhTiMAAAgnDMAnDAAAMAAAAnDg");
	this.shape_6.setTransform(125,125);

	this.shape_7 = new createjs.Shape();
	this.shape_7.graphics.f("rgba(0,0,0,0.047)").s().p("AzgOpIAA9RMAnBAAAIAAdRg");
	this.shape_7.setTransform(131,130.3);

	this.shape_8 = new createjs.Shape();
	this.shape_8.graphics.f("rgba(0,0,0,0.047)").s().p("AzgOpIAA9RMAnBAAAIAAdRg");
	this.shape_8.setTransform(130,129.5);

	this.shape_9 = new createjs.Shape();
	this.shape_9.graphics.f("rgba(0,0,0,0.047)").s().p("AzhOpIAA9RMAnCAAAIAAdRg");
	this.shape_9.setTransform(129,128.8);

	this.shape_10 = new createjs.Shape();
	this.shape_10.graphics.f("rgba(0,0,0,0.047)").s().p("AzhOpIAA9RMAnCAAAIAAdRg");
	this.shape_10.setTransform(128,128);

	this.shape_11 = new createjs.Shape();
	this.shape_11.graphics.f("rgba(0,0,0,0.047)").s().p("AzhOpIAA9RMAnDAAAIAAdRg");
	this.shape_11.setTransform(127,127.3);

	this.shape_12 = new createjs.Shape();
	this.shape_12.graphics.f("rgba(0,0,0,0.047)").s().p("AzhOpIAA9RMAnDAAAIAAdRg");
	this.shape_12.setTransform(126,126.5);

	this.shape_13 = new createjs.Shape();
	this.shape_13.graphics.f("rgba(0,0,0,0.047)").s().p("AzhOpIAA9RMAnDAAAIAAdRg");
	this.shape_13.setTransform(125,125.8);

	this.shape_14 = new createjs.Shape();
	this.shape_14.graphics.f("rgba(0,0,0,0.047)").s().p("AvoTHQhbAAhBhBQhChCAAheIAA/LQAAhdBChCQBBhCBbAAIfRAAQBcAABBBCQBABCAABdIAAfLQAABehABCQhBBBhcAAg");
	this.shape_14.setTransform(131.7,131.8);

	this.shape_15 = new createjs.Shape();
	this.shape_15.graphics.f("rgba(0,0,0,0.047)").s().p("AvoTHQhcAAhBhCQhBhCABhdIAA/MQgBhcBBhCQBBhCBcAAIfRAAQBcAABABCQBCBCAABcIAAfMQAABdhCBCQhABChcAAg");
	this.shape_15.setTransform(130.8,130.8);

	this.shape_16 = new createjs.Shape();
	this.shape_16.graphics.f("rgba(0,0,0,0.047)").s().p("AvoTHQhbAAhChBQhBhDABhdIAA/LQgBhdBBhCQBChCBbAAIfRAAQBbAABCBCQBBBCAABdIAAfLQAABdhBBDQhCBBhbAAg");
	this.shape_16.setTransform(129.8,129.8);

	this.shape_17 = new createjs.Shape();
	this.shape_17.graphics.f("rgba(0,0,0,0.047)").s().p("AvoTHQhcAAhAhBQhChCAAheIAA/LQAAhdBChCQBAhCBcAAIfRAAQBcAABBBCQBBBCAABdIAAfLQAABehBBCQhBBBhcAAg");
	this.shape_17.setTransform(128.8,128.8);

	this.shape_18 = new createjs.Shape();
	this.shape_18.graphics.f("rgba(0,0,0,0.047)").s().p("AvoTHQhcAAhBhCQhAhCgBhdIAA/LQABhdBAhCQBBhCBcAAIfRAAQBcAABBBCQBBBCAABdIAAfLQAABdhBBCQhBBChcAAg");
	this.shape_18.setTransform(127.8,127.9);

	this.shape_19 = new createjs.Shape();
	this.shape_19.graphics.f("rgba(0,0,0,0.047)").s().p("AvoTHQhbAAhBhCQhBhCgBhdIAA/LQABhdBBhCQBBhCBbAAIfRAAQBcAABBBCQBBBCAABdIAAfLQAABdhBBCQhBBChcAAg");
	this.shape_19.setTransform(126.8,126.9);

	this.shape_20 = new createjs.Shape();
	this.shape_20.graphics.f("rgba(0,0,0,0.047)").s().p("AvoTHQhcAAhAhCQhChCAAhdIAA/LQAAheBChCQBAhBBcAAIfRAAQBbAABBBBQBCBCgBBeIAAfLQABBdhCBCQhBBChbAAg");
	this.shape_20.setTransform(125.9,125.9);

	this.shape_21 = new createjs.Shape();
	this.shape_21.graphics.f("rgba(0,0,0,0.047)").s().p("AvoTHQhcAAhAhCQhChCAAhdIAA/LQAAhdBChDQBAhBBcAAIfRAAQBcAABBBBQBABDAABdIAAfLQAABdhABCQhBBChcAAg");
	this.shape_21.setTransform(124.9,124.9);

	this.shape_22 = new createjs.Shape();
	this.shape_22.graphics.f("rgba(0,0,0,0.047)").s().p("AtyNzQluluAAoFQAAoEFulvQFuluIEABQIFgBFvFuQFuFvAAIEQAAIFluFuQlvFuoFABQoEgBlulug");
	this.shape_22.setTransform(132,132);

	this.shape_23 = new createjs.Shape();
	this.shape_23.graphics.f("rgba(0,0,0,0.047)").s().p("AtyNzQluluAAoFQAAoFFuluQFultIEAAQIFAAFvFtQFtFuAAIFQAAIFltFuQlvFuoFAAQoEAAlulug");
	this.shape_23.setTransform(131,131);

	this.shape_24 = new createjs.Shape();
	this.shape_24.graphics.f("rgba(0,0,0,0.047)").s().p("AtyNzQluluAAoFQAAoFFuluQFultIEAAQIFAAFvFtQFtFuAAIFQAAIFltFuQlvFuoFAAQoEAAlulug");
	this.shape_24.setTransform(130,130);

	this.shape_25 = new createjs.Shape();
	this.shape_25.graphics.f("rgba(0,0,0,0.047)").s().p("AtyNzQlulugBoFQABoFFuluQFuluIEAAQIFAAFvFuQFuFugBIFQABIFluFuQlvFuoFAAQoEAAlulug");
	this.shape_25.setTransform(129,129);

	this.shape_26 = new createjs.Shape();
	this.shape_26.graphics.f("rgba(0,0,0,0.047)").s().p("AtyNzQlvluAAoFQAAoEFvlvQFuluIEAAQIFAAFuFuQFvFvgBIEQABIFlvFuQluFuoFAAQoEAAlulug");
	this.shape_26.setTransform(128,128);

	this.shape_27 = new createjs.Shape();
	this.shape_27.graphics.f("rgba(0,0,0,0.047)").s().p("AtyNzQlvluAAoFQAAoEFvluQFuluIEgBQIFABFuFuQFuFuABIEQgBIFluFuQluFvoFAAQoEAAlulvg");
	this.shape_27.setTransform(127,127);

	this.shape_28 = new createjs.Shape();
	this.shape_28.graphics.f("rgba(0,0,0,0.047)").s().p("AtyNzQlvluAAoFQAAoEFvluQFuluIEgBQIFABFuFuQFuFuABIEQgBIFluFuQluFvoFAAQoEAAlulvg");
	this.shape_28.setTransform(126,126);

	this.shape_29 = new createjs.Shape();
	this.shape_29.graphics.f("rgba(0,0,0,0.047)").s().p("AtyNzQlvluAAoFQAAoEFvluQFuluIEgBQIFABFuFuQFuFuABIEQgBIFluFuQluFvoFAAQoEAAlulvg");
	this.shape_29.setTransform(125,125);

	this.shape_30 = new createjs.Shape();
	this.shape_30.graphics.f("rgba(0,0,0,0.047)").s().p("AzXTXMATXgmtMATYAmtg");
	this.shape_30.setTransform(133,130);

	this.shape_31 = new createjs.Shape();
	this.shape_31.graphics.f("rgba(0,0,0,0.047)").s().p("AzWTXMATWgmtMATXAmtg");
	this.shape_31.setTransform(132,129);

	this.shape_32 = new createjs.Shape();
	this.shape_32.graphics.f("rgba(0,0,0,0.047)").s().p("AzWTYMATWgmvMATXAmvg");
	this.shape_32.setTransform(131,128);

	this.shape_33 = new createjs.Shape();
	this.shape_33.graphics.f("rgba(0,0,0,0.047)").s().p("AzWTYMATWgmvMATXAmvg");
	this.shape_33.setTransform(130,127);

	this.shape_34 = new createjs.Shape();
	this.shape_34.graphics.f("rgba(0,0,0,0.047)").s().p("AzWTYMATWgmvMATXAmvg");
	this.shape_34.setTransform(129,126);

	this.shape_35 = new createjs.Shape();
	this.shape_35.graphics.f("rgba(0,0,0,0.047)").s().p("AzXTYMATXgmvMATYAmvg");
	this.shape_35.setTransform(128,125);

	this.shape_36 = new createjs.Shape();
	this.shape_36.graphics.f("rgba(0,0,0,0.047)").s().p("AzXTYMATXgmvMATYAmvg");
	this.shape_36.setTransform(127,124);

	this.shape_37 = new createjs.Shape();
	this.shape_37.graphics.f("rgba(0,0,0,0.047)").s().p("AzXTXMATXgmtMATYAmtg");
	this.shape_37.setTransform(126,123);

	this.shape_38 = new createjs.Shape();
	this.shape_38.graphics.f("rgba(0,0,0,0.047)").s().p("AgCLLIsBIRID0uoIrSpkIOdggIFHuQIFFOGIOaAxIrQJhID1Opg");
	this.shape_38.setTransform(134,130);

	this.shape_39 = new createjs.Shape();
	this.shape_39.graphics.f("rgba(0,0,0,0.047)").s().p("AgCLMIsBIQID0uoIrRpkIOcggIFHuRIFFOHIOaAxIrQJhID1Opg");
	this.shape_39.setTransform(133,129);

	this.shape_40 = new createjs.Shape();
	this.shape_40.graphics.f("rgba(0,0,0,0.047)").s().p("AgCLMIsBIPID0uoIrRpjIOcggIFHuRIFFOHIOaAxIrQJiID1Oog");
	this.shape_40.setTransform(132,128);

	this.shape_41 = new createjs.Shape();
	this.shape_41.graphics.f("rgba(0,0,0,0.047)").s().p("AgCLMIsBIPID1uoIrSpjIOcggIFHuRIFFOGIOZAyIrQJiID2Opg");
	this.shape_41.setTransform(131,127);

	this.shape_42 = new createjs.Shape();
	this.shape_42.graphics.f("rgba(0,0,0,0.047)").s().p("AgCLMIsBIPID1uoIrSpjIOcggIFIuRIFEOGIOZAyIrQJiID2Opg");
	this.shape_42.setTransform(130,126);

	this.shape_43 = new createjs.Shape();
	this.shape_43.graphics.f("rgba(0,0,0,0.047)").s().p("AgCLLIsBIQID1uoIrTpjIOdggIFIuRIFFOGIOYAyIrQJiID1Opg");
	this.shape_43.setTransform(129,125);

	this.shape_44 = new createjs.Shape();
	this.shape_44.graphics.f("rgba(0,0,0,0.047)").s().p("AgCLLIsBIQID1unIrTpkIOdggIFIuQIFFOFIOYAyIrQJiID1Opg");
	this.shape_44.setTransform(128,124);

	this.shape_45 = new createjs.Shape();
	this.shape_45.graphics.f("rgba(0,0,0,0.047)").s().p("AgCLLIsBIRID0uoIrSpkIOdggIFIuQIFFOFIOZAyIrQJhID0Oqg");
	this.shape_45.setTransform(127,123);

	this.timeline.addTween(createjs.Tween.get({}).to({state:[{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},1).to({state:[{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7}]},1).to({state:[{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14}]},1).to({state:[{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22}]},1).to({state:[{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30}]},1).to({state:[{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38}]},1).wait(1));

}).prototype = p = new createjs.MovieClip();
p.nominalBounds = new createjs.Rectangle(0,0,256,256);


(lib.frontBase = function() {
	this.initialize();

	// Layer 1
	this.shape = new createjs.Shape();
	this.shape.graphics.f(CardBaseColor).s().p("AzhTiMAAAgnDMAnDAAAMAAAAnDg");
	this.shape.setTransform(125,125);

	this.addChild(this.shape);
}).prototype = p = new createjs.Container();


p.nominalBounds = new createjs.Rectangle(0,0,250,250);


(lib.Component_avatar = function() {
	this.initialize();

	// Avatar
	this.shape = new createjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,1,1,3,true).p("AGQBuIsfAAIAAjbIMfAAg");
	this.shape.setTransform(40,11);

	this.shape_1 = new createjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AmPBtIAAjaIMfAAIAADag");
	this.shape_1.setTransform(40,11);

	this.addChild(this.shape_1,this.shape);
}).prototype = p = new createjs.Container();
p.nominalBounds = new createjs.Rectangle(0,0,80,22);


(lib.ccGradient = function() {
	this.initialize();

	// Layer 1
	this.shape = new createjs.Shape();
	this.shape.graphics.rf(["rgba(255,255,255,0.639)","rgba(255,255,255,0)"],[0,1],-99.9,-86,0,-99.9,-86,228.3).s().p("AzhTiMAAAgnDMAnDAAAQsWGNqSL5QocJqlILTg");
	this.shape.setTransform(125,125);

	this.addChild(this.shape);
}).prototype = p = new createjs.Container();
p.nominalBounds = new createjs.Rectangle(0,0,250,250);


(lib.base_mc = function() {
	this.initialize();

	// Layer 1
	this.shape = new createjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AzhTiMAAAgnDMAnDAAAMAAAAnDg");
	this.shape.setTransform(125,125);

	this.addChild(this.shape);
}).prototype = p = new createjs.Container();
p.nominalBounds = new createjs.Rectangle(0,0,250,250);


(lib.flcontainersUILoader = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,false,{});

	// avatar
	this.instance = new lib.Component_avatar();
	this.instance.setTransform(50,50,1.25,4.545,0,0,0,40,11);

	this.timeline.addTween(createjs.Tween.get(this.instance).to({_off:true},1).wait(1));

}).prototype = p = new createjs.MovieClip();
p.nominalBounds = new createjs.Rectangle(0,0,100,100);


(lib.imgHolder_mccopy = function() {
	this.initialize();

	// image
	this.imageUILoader = new lib.flcontainersUILoader();
	this.imageUILoader.setTransform(0,0,2.5,2.5,0,0,180,50,50);

	this.addChild(this.imageUILoader);
}).prototype = p = new createjs.Container();
p.nominalBounds = new createjs.Rectangle(-124.9,-124.9,250,250);


(lib.borders_mc = function() {
	this.initialize();

	// Layer 6
	this.bordermc1 = new lib.set1();
	this.bordermc1.setTransform(125,125,1,1,0,0,0,125,125);

	// Layer 7
	this.bordermc2 = new lib.set();
	this.bordermc2.setTransform(125,125,1,1,0,0,0,125,125);

	// Layer 5
	this.bordermc3 = new lib.set2();
	this.bordermc3.setTransform(124.4,124.9,1,1,0,0,0,124.4,124.9);

	// Layer 4
	this.bordermc4 = new lib.set3();
	this.bordermc4.setTransform(125,125,1,1,0,0,0,125,125);

	// Layer 3
	this.bordermc5 = new lib.set4();
	this.bordermc5.setTransform(124,121.8,1,1,0,0,0,124,121.8);

	// Layer 1
	this.bordermc6 = new lib.set5();
	this.bordermc6.setTransform(124.9,123.5,1,1,0,0,0,124.9,123.5);

	this.addChild(this.bordermc6,this.bordermc5,this.bordermc4,this.bordermc3,this.bordermc2,this.bordermc1);
}).prototype = p = new createjs.Container();
p.nominalBounds = new createjs.Rectangle(0,0,250,250);


(lib.imageHolder = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,false,{});

	// Layer 1
	this.shape = new createjs.Shape();
	this.shape.graphics.f("rgba(102,255,0,0)").s().p("AzhTiMAAAgnDMAnDAAAMAAAAnDg");
	this.shape.setTransform(0,0);

	this.imageUILoader = new lib.flcontainersUILoader();
	this.imageUILoader.setTransform(0,0,2.5,2.5,0,0,0,50,50);

	this.timeline.addTween(createjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.imageUILoader}]},1).wait(1));

	// Layer 3
	this.shape_1 = new createjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AzhTiMAAAgnDMAnDAAAMAAAAnDg");
	this.shape_1.setTransform(0,0);

	this.timeline.addTween(createjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_1}]},1).wait(1));

}).prototype = p = new createjs.MovieClip();
p.nominalBounds = new createjs.Rectangle(0,0,250,250);


(lib.interactiveTxtFrontRun_mc = function() {
	this.initialize();

	// Borders
	this.borders_mc = new lib.borders_mc();
	this.borders_mc.setTransform(-125.9,-125.9,1.008,1.008);

	// mask (mask)
	// mask (mask)
	this.mask_0 = new createjs.Shape();
	this.mask_0.graphics.f("rgba(0,255,255,0)").s().p("AzhTiMAAAgnDMAnDAAAMAAAAnDg");

	this.mask_1 = new createjs.Shape();
	this.mask_1.graphics.f("#00FFFF").s().p("AzHTIMAAAgmPMAmPAAAMAAAAmPg");

	this.mask_2 = new createjs.Shape();
	this.mask_2.graphics.f("#00FFFF").s().p("AzHOWIAA8rMAmPAAAIAAcrg");

	this.mask_3 = new createjs.Shape();
	this.mask_3.graphics.f("#00FFFF").s().p("Av9TgQhdAAhChDQhDhEAAhfIAA/0QAAhfBDhDQBChDBdAAIf6AAQBeAABDBDQBBBDAABfIAAf0QAABfhBBEQhDBDheAAg");
	this.mask_3.setTransform(0,0,0.98,0.98);

	this.mask_4 = new createjs.Shape();
	this.mask_4.graphics.f("#00FFFF").s().p("AtgNhQlolmABn7QgBn6FolnQFmlmH6AAQH7AAFnFmQFmFnAAH6QAAH7lmFmQlnFon7gBQn6ABlmlog");

	this.mask_5 = new createjs.Shape();
	this.mask_5.graphics.f("#00FFFF").s().p("Ay+S/MAS+gl9MAS/Al9g");

	this.mask_6 = new createjs.Shape();
	this.mask_6.graphics.f("#00FFFF").s().p("AgCK9IrxIFIDvuUIrDpYIOKgfIFAt+IE/NzIOGAxIrBJVIDwOWg");

	// holder
	this.holder_mc = new lib.textHolder_mccopy();
	this.holder_mc.setTransform(-124.9,-124.9);

	this.holder_mc.mask = this["mask_"+selectedNum]

	// base
	this.base_mc = new lib.base_mc();
	this.base_mc.setTransform(0,0,1,1,0,0,0,125,125);

	this.base_mc.mask = this["mask_"+selectedNum]

	// shadow
	this.shadow_mc = new lib.shadow_mccopy();
	this.shadow_mc.setTransform(-123.9,-122.9);

	this.addChild(this.shadow_mc,this.base_mc,this.holder_mc,this.borders_mc);
}).prototype = p = new createjs.Container();
p.nominalBounds = new createjs.Rectangle(-125.9,-125.9,258,259);


(lib.interactiveImgFrontRun_mc = function() {
	this.initialize();

	// Borders
	this.borders_mc = new lib.borders_mc();
	this.borders_mc.setTransform(-125.9,-125.9,1.008,1.008);

	// mask (mask)
	this.mask_0 = new createjs.Shape();
	this.mask_0.graphics.f("rgba(0,255,255,0)").s().p("AzhTiMAAAgnDMAnDAAAMAAAAnDg");

	this.mask_1 = new createjs.Shape();
	this.mask_1.graphics.f("#00FFFF").s().p("AzHTIMAAAgmPMAmPAAAMAAAAmPg");

	this.mask_2 = new createjs.Shape();
	this.mask_2.graphics.f("#00FFFF").s().p("AzHOWIAA8rMAmPAAAIAAcrg");

	this.mask_3 = new createjs.Shape();
	this.mask_3.graphics.f("#00FFFF").s().p("Av9TgQhdAAhChDQhDhEAAhfIAA/0QAAhfBDhDQBChDBdAAIf6AAQBeAABDBDQBBBDAABfIAAf0QAABfhBBEQhDBDheAAg");
	this.mask_3.setTransform(0,0,0.98,0.98);

	this.mask_4 = new createjs.Shape();
	this.mask_4.graphics.f("#00FFFF").s().p("AtgNhQlolmABn7QgBn6FolnQFmlmH6AAQH7AAFnFmQFmFnAAH6QAAH7lmFmQlnFon7gBQn6ABlmlog");

	this.mask_5 = new createjs.Shape();
	this.mask_5.graphics.f("#00FFFF").s().p("Ay+S/MAS+gl9MAS/Al9g");

	this.mask_6 = new createjs.Shape();
	this.mask_6.graphics.f("#00FFFF").s().p("AgCK9IrxIFIDvuUIrDpYIOKgfIFAt+IE/NzIOGAxIrBJVIDwOWg");
	
	// holder
	this.holder_mc = new lib.imgHolder_mccopy();
	this.holder_mc.mask = this["mask_"+selectedNum]
	// base
	this.base_mc = new lib.base_mc();
	this.base_mc.setTransform(0,0,1,1,0,0,0,125,125);
	this.base_mc.mask = this["mask_"+selectedNum]

	// shadow
	this.shadow_mc = new lib.shadow_mccopy();
	this.shadow_mc.setTransform(-124.9,-124.9);

	this.addChild(this.shadow_mc,this.base_mc,this.holder_mc,this.borders_mc);
}).prototype = p = new createjs.Container();
p.nominalBounds = new createjs.Rectangle(-125.9,-125.9,257,257);

(lib.dummyBtn_mccopy = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,false,{});

	// Layer 1
	this.mask_0 = new createjs.Shape();
	this.mask_0.graphics.f("rgba(0,255,255,0)").s().p("AzhTiMAAAgnDMAnDAAAMAAAAnDg");

	this.mask_1 = new createjs.Shape();
	this.mask_1.graphics.f("#00FFFF").s().p("AzHTIMAAAgmPMAmPAAAMAAAAmPg");

	this.mask_2 = new createjs.Shape();
	this.mask_2.graphics.f("#00FFFF").s().p("AzHOWIAA8rMAmPAAAIAAcrg");

	this.mask_3 = new createjs.Shape();
	this.mask_3.graphics.f("#00FFFF").s().p("Av9TgQhdAAhChDQhDhEAAhfIAA/0QAAhfBDhDQBChDBdAAIf6AAQBeAABDBDQBBBDAABfIAAf0QAABfhBBEQhDBDheAAg");
	this.mask_3.setTransform(0,0,0.98,0.98);

	this.mask_4 = new createjs.Shape();
	this.mask_4.graphics.f("#00FFFF").s().p("AtgNhQlolmABn7QgBn6FolnQFmlmH6AAQH7AAFnFmQFmFnAAH6QAAH7lmFmQlnFon7gBQn6ABlmlog");

	this.mask_5 = new createjs.Shape();
	this.mask_5.graphics.f("#00FFFF").s().p("Ay+S/MAS+gl9MAS/Al9g");

	this.mask_6 = new createjs.Shape();
	this.mask_6.graphics.f("#00FFFF").s().p("AgCK9IrxIFIDvuUIrDpYIOKgfIFAt+IE/NzIOGAxIrBJVIDwOWg");

	this.timeline.addTween(createjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_6}]},1).wait(1));

}).prototype = p = new createjs.MovieClip();
p.nominalBounds = new createjs.Rectangle(-124.9,-124.9,250,250);



(lib.cardFront_mc = function() {
	this.initialize();

	// Layer 3
	this.grad = new lib.ccGradient();

	// image
	this.base = new lib.frontBase();
	this.base.setTransform(125,125,1,1,0,0,0,125,125);

	// imageholder
	this.imageHolder = new lib.imageHolder();
	this.imageHolder.setTransform(125,125,1,1,0,0,0,125,125);

	this.addChild(this.imageHolder,this.base,this.grad);
}).prototype = p = new createjs.Container();
p.nominalBounds = new createjs.Rectangle(0,0,250,250);


(lib.interactiveImgBackRun_mc = function() {
	this.initialize();

	// Borders
	this.borders_mc = new lib.borders_mc();
	this.borders_mc.setTransform(-125.9,-125.9,1.008,1.008);

	// mask (mask)
	this.mask_0 = new createjs.Shape();
	this.mask_0.graphics.f("rgba(0,255,255,0)").s().p("AzhTiMAAAgnDMAnDAAAMAAAAnDg");

	this.mask_1 = new createjs.Shape();
	this.mask_1.graphics.f("#00FFFF").s().p("AzHTIMAAAgmPMAmPAAAMAAAAmPg");

	this.mask_2 = new createjs.Shape();
	this.mask_2.graphics.f("#00FFFF").s().p("AzHOWIAA8rMAmPAAAIAAcrg");

	this.mask_3 = new createjs.Shape();
	this.mask_3.graphics.f("#00FFFF").s().p("Av9TgQhdAAhChDQhDhEAAhfIAA/0QAAhfBDhDQBChDBdAAIf6AAQBeAABDBDQBBBDAABfIAAf0QAABfhBBEQhDBDheAAg");
	this.mask_3.setTransform(0,0,0.98,0.98);

	this.mask_4 = new createjs.Shape();
	this.mask_4.graphics.f("#00FFFF").s().p("AtgNhQlolmABn7QgBn6FolnQFmlmH6AAQH7AAFnFmQFmFnAAH6QAAH7lmFmQlnFon7gBQn6ABlmlog");

	this.mask_5 = new createjs.Shape();
	this.mask_5.graphics.f("#00FFFF").s().p("Ay+S/MAS+gl9MAS/Al9g");

	this.mask_6 = new createjs.Shape();
	this.mask_6.graphics.f("#00FFFF").s().p("AgCK9IrxIFIDvuUIrDpYIOKgfIFAt+IE/NzIOGAxIrBJVIDwOWg");
	
	// cardFront
	this.front_mc = new lib.cardFront_mc();
	this.front_mc.setTransform(-124.9,-124.9);

	this.front_mc.mask = this["mask_"+selectedNum]

	// base
	this.base_mc = new lib.base_mc();
	this.base_mc.setTransform(0,0,1,1,0,0,0,125,125);

	this.base_mc.mask = this["mask_"+selectedNum]

	// shadow
	this.shadow_mc = new lib.shadow_mccopy();
	this.shadow_mc.setTransform(-124.9,-124.9);

	this.addChild(this.shadow_mc,this.base_mc,this.front_mc,this.borders_mc);
}).prototype = p = new createjs.Container();
p.nominalBounds = new createjs.Rectangle(-125.9,-125.9,257,257);


(lib.runtimeIntertxt_mc = function() {
	this.initialize();

	// front
	this.frontmc = new lib.interactiveTxtFrontRun_mc();
	this.frontmc.setTransform(124.4,123,1,1,0,0,0,126.9,125.5);

	this.addChild(this.frontmc);
}).prototype = p = new createjs.Container();
p.nominalBounds = new createjs.Rectangle(-128.4,-128.4,258,259);


(lib.runtimeInterImgFront_mc = function() {
	this.initialize();
	// front
	this.frontmc = new lib.interactiveImgFrontRun_mc();
	this.frontmc.setTransform(124.4,123,1,1,0,0,0,126.9,125.5);

	this.addChild(this.frontmc);
}).prototype = p = new createjs.Container();
p.nominalBounds = new createjs.Rectangle(-128.4,-128.4,257,257);

(lib.runtimeCardBack_mc = function() {
	this.initialize();

	// back
	this.backmc = new lib.interactiveImgBackRun_mc();
	this.backmc.setTransform(129.5,125.5,1,1,0,0,0,126.9,125.5);

	this.addChild(this.backmc);
}).prototype = p = new createjs.Container();
p.nominalBounds = new createjs.Rectangle(-128.4,-128.4,257,257);


(lib.runTimeTxtCard = function() {
	this.initialize();

	// Layer 1
	this.cardmc = new lib.runtimeIntertxt_mc();
	this.cardmc.setTransform(255.4,254.5,1,1,0,0,0,125.9,124.5);

	this.addChild(this.cardmc);
}).prototype = p = new createjs.Container();
p.nominalBounds = new createjs.Rectangle(1,1.5,258,259);


(lib.runTimeImgCard = function() {
	this.initialize();

	// Layer 1
	this.cardmc = new lib.runtimeInterImg_mc();
	this.cardmc.setTransform(255.4,254.5,1,1,0,0,0,125.9,124.5);

	this.addChild(this.cardmc);
}).prototype = p = new createjs.Container();
p.nominalBounds = new createjs.Rectangle(1,1.5,257,257);

})(lib = lib||{}, images = images||{}, createjs = createjs||{});
var lib, images, createjs;