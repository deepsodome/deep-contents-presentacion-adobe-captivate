(function (lib, img, cjs) {

var p; // shortcut to reference prototypes

// stage content:
(lib.FeedbackMc = function() {
	this.initialize();

	// wfback
	this.Wfeedback = new lib.Wfback();
	this.Wfeedback.setTransform(317,260);

	// rfback
	this.Rfeedback = new lib.Rfback();
	this.Rfeedback.setTransform(317,260);

	this.addChild(this.Wfeedback,this.Rfeedback);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(9,54,618,413.9);



(lib.Wfback = function() {
	this.initialize();

	// Layer 1
	this.text = new cjs.Text(ID_Clickanywheretocontinue, "bold 10px Verdana", "#016767");
	this.text.textAlign = "center";
	this.text.lineHeight = 19;
	this.text.lineWidth = 349;
	this.text.setTransform(-2.4,46.9);

	// Layer 2
	this.wrongfb = new cjs.Text(ID_TimeUp, "bold 25px Arial", "#006666");
	this.wrongfb.textAlign = "center";
	this.wrongfb.lineHeight = 27;
	this.wrongfb.lineWidth = 350;
	this.wrongfb.setTransform(-1.9,-65);

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

	this.addChild(this.shape_3,this.shape_2,this.shape_1,this.shape,this.text,this.wrongfb);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-308.9,-206.4,618,413);


(lib.Rfback = function() {
	this.initialize();

	// Layer 1
	this.text_3 = new cjs.Text(ID_Clickanywheretocontinue, "bold 10px Verdana", "#016767");
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

	this.addChild(this.shape_25,this.shape_24,this.shape_23,this.shape_22,this.text_3,this.rightfb);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-308.9,-206.4,618,413);

})(lib = lib||{}, images = images||{}, createjs = createjs||{});
var lib, images, createjs;