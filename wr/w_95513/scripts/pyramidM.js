/*-----------------------------------------------------------------------------------variables */

/*canvas background color*/
var _canvasColor='#FFFFFF';

/*pyramid color*/
var _pyramidColor='#00587b';
var _circleColor='#FFF';
var _pyramidOverColor='#37b7bb';
var _pyramidDownColor='#37bb7b';

/*switch for when an area is active*/
var _active=-1;
var grad,grad1,grad2,grad3
var theobj;
var numarray = new Array();

/*---------------------------------------------------------------------------------------init */
function overContent(btnID2, newgrad) {
	var tester = layer.getChildren();
	layernum = numarray[btnID2]*4 + 1;

	oldobj = tester[layernum]
	oldobj.setFill(newgrad);
	layer.draw();
}


function showContent(obj, btnID) {
	
	if (String(btnID).length == 2) {
		btnID = Number(btnID.substr(0,1));
	}			 
	
	//check if old button clicked
	var tester = layer.getChildren();
	//var layernum = btnClicked*4 + 1;
	if (btnClicked != -1) {
		var layernum = numarray[btnClicked]*4 + 1;
		theobj = tester[layernum]
		 theobj.setFill(grad);
		 layer.draw();
	}
	
	_active=btnID;		  
	btnClicked = btnID
	layernum = numarray[btnID]*4 + 1;
	theobj = tester[layernum]//btnID*4 + 1]
	theobj.setFill(grad2);
	layer.draw();
	//alert(btnID);
	$(".tab_content").hide(); //hide all
	var selected_tab = $(".tab_content").eq(btnID); //$(this).find("tab"+btnClicked);//.attr("href");
	$(selected_tab).fadeIn(function() {
		pauseSound();
			if (soundArray[btnClicked] != "-1") {
				setTimeout("play_sound(soundArray[btnClicked])",50);
			}		
   });	
}

var stage;
var layer;
/*declare new stage*/
function createKineticStage(){
	
	if(isPresenter){
		stage = new Kinetic.Stage({
			container: "pyramidHolder",
			width: 750,
			height: 750
		});
	}else{
		stage = new Kinetic.Stage({
			container: "pyramidHolder",
			width: 550,
			height: 550
		});
	}

	/*declare ne wlayer to draw on*/
	layer = new Kinetic.Layer();
}

function initPyramid(){
		var pyramidPoints = [];
		var effectPoints = [];
		var pyramid = new Array();
		circlePoints = new Array()
		textPoints = new Array();
		//data
		
		var container = new Array();
		var naming = new Array();
		for (var row=0; row < buttonRowArray.length; row++) {
			theRow = buttonRowArray[row];
			theColumn = buttonColumnArray[row]
			
			if (container[theRow] == undefined) { //make sure array doesn't already exist
				container[theRow] = new Array();
			}
			container[theRow].push(theColumn) // = [1,2];
		}
		
				//loop through to assigning naming
		for (var row=1; row < buttonRowArray.length; row++) {
			theRow = buttonRowArray[row];
			theColumn = buttonColumnArray[row]
			startPoint = 1;
			for (x = 1; x < theRow; x++) {
				startPoint += container[x].length;
			}
			placement = startPoint + parseInt(theColumn)
			naming[placement] = row;
			
			numarray[row] = placement;
		}
		numarray[0] = 0;
		

		//Dimensions
		var pwidth = 165;
		var pheight = 280;
		var originX = 190;
		var originY = 40;
			ttlBtns = container.length;
		var ttlCol;
		var style = 0;
		
		var colorOneUp;
		var colorTwoUp;
		var colorOneOver;
		var colorTwoOver;
		var colorOneDown;
		var colorTwoDown;
		var alpha;

		//var test = 3;
		currentTheme = parseInt(currentTheme);
		switch(currentTheme){
		case 1:
			style=1;
			colorOneUp = _pyramidColor;
			colorTwoUp = 'black';
			colorOneOver = _pyramidOverColor;
			colorTwoOver = 'black';
			
			colorOneDown = _pyramidDownColor;
			colorTwoDown = _pyramidDownColor;
			alpha=.95
			break;
		case 2:
			style=1;
			colorOneUp = _pyramidColor;
			colorTwoUp = 'black';
			colorOneOver = _pyramidOverColor;
			colorTwoOver = 'black';
			colorOneDown = _pyramidDownColor;
			colorTwoDown = _pyramidDownColor;
			alpha=.95
			break;
		case 3:
			style=2;
			colorOneUp = _pyramidColor;
			colorTwoUp = _pyramidColor;
			colorOneOver = _pyramidOverColor;
			colorTwoOver = _pyramidOverColor;
			colorOneDown = _pyramidDownColor;
			colorTwoDown = _pyramidDownColor;
			alpha=.95
			break;
		case 4:
			style=2;
			colorOneUp = 'black';
			colorTwoUp = _pyramidColor;
			colorOneOver = _pyramidOverColor;
			colorTwoOver = 'black';
			colorOneDown = _pyramidDownColor;
			colorTwoDown = _pyramidDownColor;
			alpha=.65
			break;
		case 5:
			style=2;
			colorOneUp = _pyramidColor;
			colorTwoUp = 'black';
			colorOneOver = _pyramidOverColor;
			colorTwoOver = 'black';
			colorOneDown = _pyramidDownColor;
			colorTwoDown = _pyramidDownColor;
			alpha=.65
			break;
		case 6:
			style=1;
			colorOneUp = _pyramidColor;
			colorTwoUp = _pyramidColor;
			colorOneOver = _pyramidOverColor;
			colorTwoOver = _pyramidOverColor;
			colorOneDown = _pyramidDownColor;
			colorTwoDown = _pyramidDownColor;
			break;
		case 7:
			style=2;
			colorOneUp = _pyramidColor;
			colorTwoUp = 'black';
			colorOneOver = _pyramidOverColor;
			colorTwoOver = 'black';
			colorOneDown = _pyramidDownColor;
			colorTwoDown = 'black';
			alpha=.35
			break;
		case 8:
			style=2;
			colorOneUp = _pyramidColor;
			colorTwoUp = 'black';
			colorOneOver = _pyramidOverColor;
			colorTwoOver = 'black';
			colorOneDown = _pyramidDownColor;
			colorTwoDown = _pyramidDownColor;
			alpha=.35
			break;
		case 9:
			style=2;
			colorOneUp = _pyramidColor;
			colorTwoUp = 'black';
			colorOneOver = _pyramidOverColor;
			colorTwoOver = 'black';
			colorOneDown = _pyramidDownColor;
			colorTwoDown = _pyramidDownColor;
			alpha=.35
			break;
		case 10:
			style=2;
			colorOneUp = 'black';
			colorTwoUp = _pyramidColor;
			colorOneOver = _pyramidOverColor;
			colorTwoOver = _pyramidOverColor;
			colorOneDown = 'black';
			colorTwoDown = _pyramidDownColor;
			alpha=.85
			break;
		case 11:
			style=2;
			colorOneUp = 'black';
			colorTwoUp = _pyramidColor;
			colorOneOver = 'black';
			colorTwoOver = _pyramidOverColor;
			colorOneDown = 'black';
			colorTwoDown = _pyramidDownColor;
			alpha=.6
			break;
		case 12:
			style=1;
			colorOneUp = _pyramidColor;
			colorTwoUp = _pyramidColor;
			colorOneOver = _pyramidOverColor;
			colorTwoOver = _pyramidOverColor;
			colorOneDown = _pyramidDownColor;
			colorTwoDown = _pyramidDownColor;
			alpha=1
			break;
		case 13:
			style=1;
			colorOneUp = _pyramidColor;
			colorTwoUp = _pyramidColor;
			colorOneOver = _pyramidOverColor;
			colorTwoOver = _pyramidOverColor;
			colorOneDown = _pyramidDownColor;
			colorTwoDown = _pyramidDownColor;
			alpha=1
			break;
		case 14:
			style=2;
			colorOneUp = _pyramidColor;
			colorTwoUp = 'black';
			colorOneOver = _pyramidOverColor;
			colorTwoOver = _pyramidOverColor;
			colorOneDown = _pyramidDownColor;
			colorTwoDown = _pyramidDownColor;
			alpha=.95
			break;
		case 15:
			style=2;
			colorOneUp = _pyramidColor;
			colorTwoUp = 'black';
			colorOneOver = _pyramidOverColor;
			colorTwoOver = 'black';
			colorOneDown = _pyramidDownColor;
			colorTwoDown = 'black';
			alpha=.75
			break;
		case 16:
			style=2;
			colorOneUp = 'black';
			colorTwoUp = _pyramidColor;
			colorOneOver = 'black';
			colorTwoOver = _pyramidOverColor;
			colorOneDown = 'black';
			colorTwoDown = _pyramidDownColor;
			alpha=.45
			break;
		case 17:
			style=1;
			colorOneUp = _pyramidColor;
			colorTwoUp = 'black';
			colorOneOver = _pyramidOverColor;
			colorTwoOver = 'black';
			colorOneDown = _pyramidDownColor;
			colorTwoDown = _pyramidDownColor;
			alpha=.95
			break;
		}
		
		switch(style){
		case 1: //horizontal
			var ctx = layer.getContext("2d");
			//grad = ctx.createLinearGradient(originX-(num)*pwidth/ttlBtns, originY+(num)*pheight/ttlBtns/185 + (num*50), originX-(num+1)*pwidth/ttlBtns, originY+(num+1)*pheight/ttlBtns/200 + (num*50));
			grad = ctx.createLinearGradient(175, 0+(0)*pheight/ttlBtns-15, 175, 300+(0+1)*pheight/ttlBtns-15);
			grad.addColorStop(.25,colorOneUp);
			grad.addColorStop(1,colorTwoUp);
			ctx.fillStyle=grad;	
						
			//grad2 = ctx.createLinearGradient(originX-(num)*pwidth/ttlBtns, originY+(num)*pheight/ttlBtns/185 + (num*50), originX-(num+1)*pwidth/ttlBtns, originY+(num+1)*pheight/ttlBtns/200 + (num*50));
			grad2 = ctx.createLinearGradient(175, 0+(0)*pheight/ttlBtns-15, 175, 300+(0+1)*pheight/ttlBtns-15);
			grad2.addColorStop(.25,colorOneDown);
			grad2.addColorStop(1,colorTwoDown);
			ctx.fillStyle=grad2;	
			//grad3 = ctx.createLinearGradient(originX-(num)*pwidth/ttlBtns, originY+(num)*pheight/ttlBtns/185 + (num*50), originX-(num+1)*pwidth/ttlBtns, originY+(num+1)*pheight/ttlBtns/200 + (num*50));
			grad3 = ctx.createLinearGradient(175, 0+(0)*pheight/ttlBtns-15, 175, 300+(0+1)*pheight/ttlBtns-15);
			grad3.addColorStop(.25,colorOneOver);
			grad3.addColorStop(1,colorTwoOver);
			ctx.fillStyle=grad3;	
			break;	
		break;
		case 2: //vertical
			var ctx = layer.getContext("2d");
			grad = ctx.createLinearGradient(-50, 0+(1)*pheight/ttlBtns, 460, 0+(1)*pheight/ttlBtns);
			grad.addColorStop(0,colorOneUp);
			grad.addColorStop(1,colorTwoUp);
			ctx.fillStyle=grad;	
			grad2 = ctx.createLinearGradient(-50, 0+(1)*pheight/ttlBtns, 460, 0+(1)*pheight/ttlBtns);
			grad2.addColorStop(0,colorOneDown);
			grad2.addColorStop(1,colorTwoDown);
			ctx.fillStyle=grad2;	
			grad3 = ctx.createLinearGradient(-50, 0+(1)*pheight/ttlBtns, 460, 0+(1)*pheight/ttlBtns);
			grad3.addColorStop(0,colorOneOver);
			grad3.addColorStop(1,colorTwoDown);
			ctx.fillStyle=grad3;
		break;
		case 3: //metallic
			var ctx = layer.getContext("2d");
			grad = ctx.createLinearGradient(0, originY+(1)*pheight/ttlBtns, 0, originY+60+(1)*pheight/ttlBtns);
			grad.addColorStop(0,colorOneUp);
			grad.addColorStop(.4,colorOneUp);
			grad.addColorStop(.5,colorTwoUp);
			grad.addColorStop(.8,colorOneUp);
			ctx.fillStyle=grad;	
			grad2 = ctx.createLinearGradient(0, originY+(1)*pheight/ttlBtns, 0, originY+60+(1)*pheight/ttlBtns);
			grad2.addColorStop(0,colorOneDown);
			grad2.addColorStop(.4,colorOneDown);
			grad2.addColorStop(.5,colorTwoDown);
			grad2.addColorStop(.8,colorOneDown);
			ctx.fillStyle=grad2;	
			grad3 = ctx.createLinearGradient(0, originY+(1)*pheight/ttlBtns, 0, originY+60+(1)*pheight/ttlBtns);
			grad3.addColorStop(0,colorOneOver);
			grad3.addColorStop(.4,colorOneOver);
			grad3.addColorStop(.5,colorTwoOver);
			grad3.addColorStop(.8,colorOneOver);
			ctx.fillStyle=grad3;
		break;
		case 4: //slanted two
			var ctx = layer.getContext("2d");
			grad = ctx.createLinearGradient(0, 0+(1)*pheight/ttlBtns, 300, 70+(1)*pheight/ttlBtns);
			grad.addColorStop(0,colorOneUp);
			grad.addColorStop(.5,colorOneUp);
			grad.addColorStop(.6,colorTwoUp);
			grad.addColorStop(1,colorTwoUp);
			ctx.fillStyle=grad;	
			grad2 = ctx.createLinearGradient(0, 0+(1)*pheight/ttlBtns, 300, 70+(1)*pheight/ttlBtns);
			grad2.addColorStop(0,colorOneDown);
			grad2.addColorStop(.5,colorOneDown);
			grad2.addColorStop(.6,colorTwoDown);
			grad2.addColorStop(1,colorTwoDown);
			ctx.fillStyle=grad2;	
			grad3 = ctx.createLinearGradient(0, 0+(1)*pheight/ttlBtns, 300, 70+(1)*pheight/ttlBtns);
			grad3.addColorStop(0,colorOneOver);
			grad3.addColorStop(.5,colorOneOver);
			grad3.addColorStop(.6,colorTwoOver);
			grad3.addColorStop(1,colorTwoOver);
			ctx.fillStyle=grad3;
		break;
	}
		
		//SETUP THE TOP PORTION
		thisPoint = [{
				  x: originX,
				  y: originY
				}, {
				  x: originX+(1)*pwidth/ttlBtns,
				  y: originY+(1)*pheight/ttlBtns
				}, {
				  x: originX-(1)*pwidth/ttlBtns,
				  y: originY+(1)*pheight/ttlBtns
				}, {
				  x: originX,
				  y: originY
				}];
			
			thisPyramid = new Kinetic.Polygon({
			  points: thisPoint,
			  fill: _pyramidColor,
			  stroke: "white",
			  strokeWidth: 2,
			  name: 0
			});
			
			thisEffect = new Kinetic.Polygon({
			  points: thisPoint,
			  fill: grad,
			  stroke: "white",
			  strokeWidth: 2,
			  name: 0
			});
			
			thisEffect.on("mouseout", function() {
			   if (_active!=this.getName()){
				 overContent(this.getName(), grad);
			   }
			});			
			
			thisEffect.on("mouseover", function() {					   
			   if (_active!=this.getName()){
				 overContent(this.getName(), grad3);
			   }
			});
			
			thisEffect.on("mousedown touchstart", function() {
			  showContent(this, this.getName());
			});
			
			thisEffect.setAlpha(alpha);
			pyramidPoints[0] = thisPyramid;
			effectPoints[0] = thisEffect;
			/*construct circle to display number*/
			thisCircle = new Kinetic.Circle({
			  x: originX,
			  y: originY+pheight/ttlBtns/2,
			  radius: 11,
			  fill: _circleColor,
			  name:00
			});
			
			thisCircle.on("mousedown touchstart", function() {		  
				showContent(this, this.getName());
			});
			thisCircle.on("mouseout", function() {
				var circNum = this.getName();
				if (circNum.length > 2) {
					circNum = circNum.substr(0,1);
				}					   
			   if (_active!=circNum){
				 overContent(circNum, grad);
			   }
			});			
			
			thisCircle.on("mouseover", function() {
				var circNum = this.getName();
				if (circNum.length > 2) {
					circNum = circNum.substr(0,1);
				}					   
			   if (_active!=circNum){
				 overContent(circNum, grad3);
			   }
			});
			
			
			
			
			circlePoints[0] = thisCircle;
			/*construct number to show inside circle*/
			thisText = new Kinetic.Text({
			  x: originX,
			  y: originY+pheight/ttlBtns/2,
			  text: "1",
			  fontSize: 13,
			  fontFamily: "Arial",
			  textFill: "#111111",
			  align: "center",
			  verticalAlign: "middle",
			  name:00
			});
			
			
			thisText.on("mousedown touchstart", function() {		  
				showContent(this, this.getName());
			});
			
			thisText.on("mouseout", function() {
				var circNum = this.getName();
				if (circNum.length > 2) {
					circNum = circNum.substr(0,1);
				}					   
			   if (_active!=circNum){
				 overContent(circNum, grad);
			   }
			});			
			
			thisText.on("mouseover", function() {
				var circNum = this.getName();
				if (circNum.length > 2) {
					circNum = circNum.substr(0,1);
				}					   
			   if (_active!=circNum){
				 overContent(circNum, grad3);
			   }
			});
			
			textPoints[0] = thisText;
			
			////////////////////////////////////////////////////////////////////////////////////
			
		//var container = new Array();
			//temp inputs
		//	container[0] = [1,2];
		//	container[1] = [1,34,5];
		//	container[2] = [1];
		//	container[3] = [1];
		//	container[4] = [1];
		var counter = 1;
		//calculating positions
			//Y positioning for top and bot slice
		var topSideY;
		var botSideY;
			//width of top and bottom slice total
		var topSideW;
		var botSideW;
			//top and bottom edge slice width
		var topSidePW;
		var botSidePW;
			//coordinates
		var botLeft;
		var botRight;
		var topLeft;
		var topRight;
		
		//var lowerwidth = (rowNumber+1)*(pyramidWidth/totalRows);
		//var upperwidth = (rowNumber)*(pyramidWidth/totalRows);
		//var lowRowWidth = (lowerwidth*2) / totalColumns // = the number of splits for the lower flat
		//var highRowWidth = (upperwidth*2) / totalColumns //  = the number of splits for the top flat
		//var botLeft = lowRowWidth*(columnNumber) - lowerwidth;
		//var botRight = lowRowWidth*(columnNumber+1) - lowerwidth;
		//var topLeft = highRowWidth*(columnNumber) - upperwidth;
		//var topRight = highRowWidth*(columnNumber+1) - upperwidth;
		var midW;
		//LOOP THROUGH OTHER LAYERS
		for (var num=1; num < container.length; num++) {
			(function(){
				var outerNum = num;
			ttlCol = container[num].length;
			for(var ntwo=0;ntwo<ttlCol;ntwo++){
				(function(){
					var innerNum=ntwo;
					thisPoint = pyramidPoints[counter];
					thisItem = pyramid[counter];
				
					//Calculations
					topSideY = outerNum*pheight/ttlBtns;
					botSideY = (outerNum+1)*pheight/ttlBtns
						//width of top and bottom slice total
					topSideW = outerNum*pwidth/ttlBtns;
					botSideW = (outerNum+1)*pwidth/ttlBtns
						//top and bottom edge slice width
					topSidePW = topSideW*2/ttlCol;
					botSidePW = botSideW*2/ttlCol;
						//coordinates
					botLeft = botSidePW*innerNum - botSideW;
					botRight = botSidePW*(innerNum+1) - botSideW;
					topLeft = topSidePW*innerNum - topSideW;
					topRight = topSidePW*(innerNum+1) - topSideW;
					//num+.5)*pwidth/ttlBtns * 2 / ttlCol * ntwo - 
					midW=-(outerNum+.5)*pwidth/ttlBtns + (outerNum+.5)*pwidth/ttlBtns*2/ttlCol * (innerNum+.5);
					
					switch(style){
							case 1: //horizontal
								var ctx = layer.getContext("2d");
								//grad = ctx.createLinearGradient(originX-(num)*pwidth/ttlBtns, originY+(num)*pheight/ttlBtns/185 + (num*50), originX-(num+1)*pwidth/ttlBtns, originY+(num+1)*pheight/ttlBtns/200 + (num*50));
								grad = ctx.createLinearGradient(175, 0+(outerNum)*pheight/ttlBtns-15, 175, 300+(outerNum+1)*pheight/ttlBtns-15);
								grad.addColorStop(.25,colorOneUp);
								grad.addColorStop(1,colorTwoUp);
								ctx.fillStyle=grad;	
							
								//grad2 = ctx.createLinearGradient(originX-(num)*pwidth/ttlBtns, originY+(num)*pheight/ttlBtns/185 + (num*50), originX-(num+1)*pwidth/ttlBtns, originY+(num+1)*pheight/ttlBtns/200 + (num*50));
								grad2 = ctx.createLinearGradient(175, 0+(outerNum)*pheight/ttlBtns-15, 175, 300+(outerNum+1)*pheight/ttlBtns-15);
								grad2.addColorStop(.25,colorOneDown);
								grad2.addColorStop(1,colorTwoDown);
								ctx.fillStyle=grad2;
								//alert(colorOneDown);
												
								//grad3 = ctx.createLinearGradient(originX-(num)*pwidth/ttlBtns, originY+(num)*pheight/ttlBtns/185 + (num*50), originX-(num+1)*pwidth/ttlBtns, originY+(num+1)*pheight/ttlBtns/200 + (num*50));
								grad3 = ctx.createLinearGradient(175, 0+(outerNum)*pheight/ttlBtns-15, 175, 300+(outerNum+1)*pheight/ttlBtns-15);
								grad3.addColorStop(.25,colorOneOver);
								grad3.addColorStop(1,colorTwoOver);
								ctx.fillStyle=grad3;	
								break;
							case 2: //vertical
								var ctx = layer.getContext("2d");
								grad = ctx.createLinearGradient(-50, 0+(outerNum+1)*pheight/ttlBtns, 460, 0+(outerNum+1)*pheight/ttlBtns);
								grad.addColorStop(0,colorOneUp);
								grad.addColorStop(1,colorTwoUp);
								ctx.fillStyle=grad;	
								grad2 = ctx.createLinearGradient(-50, 0+(outerNum+1)*pheight/ttlBtns, 460, 0+(outerNum+1)*pheight/ttlBtns);
								grad2.addColorStop(0,colorOneDown);
								grad2.addColorStop(1,colorTwoDown);
								ctx.fillStyle=grad2;	
								grad3 = ctx.createLinearGradient(-50, 0+(outerNum+1)*pheight/ttlBtns, 460, 0+(outerNum+1)*pheight/ttlBtns);
								grad3.addColorStop(0,colorOneOver);
								grad3.addColorStop(1,colorTwoOver);
								ctx.fillStyle=grad3;	
								break;
							case 3: //metallic
								var ctx = layer.getContext("2d");
								grad = ctx.createLinearGradient(0, originY+(outerNum)*pheight/ttlBtns, 0, originY+60+(outerNum)*pheight/ttlBtns);
								grad.addColorStop(0,colorOneUp);
								grad.addColorStop(.4,colorOneUp);
								grad.addColorStop(.5,colorTwoUp);
								grad.addColorStop(1,colorOneUp);
								ctx.fillStyle=grad;	
								grad2 = ctx.createLinearGradient(0, originY+(outerNum)*pheight/ttlBtns, 0, originY+60+(outerNum)*pheight/ttlBtns);
								grad2.addColorStop(0,colorOneDown);
								grad2.addColorStop(.4,colorOneDown);
								grad2.addColorStop(.5,colorTwoDown);
								grad2.addColorStop(1,colorOneDown);
								ctx.fillStyle=grad2;	
								grad3 = ctx.createLinearGradient(0, originY+(outerNum)*pheight/ttlBtns, 0, originY+60+(outerNum)*pheight/ttlBtns);
								grad3.addColorStop(0,colorOneOver);
								grad3.addColorStop(.4,colorOneOver);
								grad3.addColorStop(.5,colorTwoOver);
								grad3.addColorStop(1,colorOneOver);
								ctx.fillStyle=grad3;
								break;
							case 4: //none
								var ctx = layer.getContext("2d");
								grad = ctx.createLinearGradient(0, 0+(outerNum+1)*pheight/ttlBtns, 300, 70+(outerNum+1)*pheight/ttlBtns);
								grad.addColorStop(0,colorOneUp);
								grad.addColorStop(.5,colorOneUp);
								grad.addColorStop(.6,colorTwoUp);
								grad.addColorStop(1,colorTwoUp);
								ctx.fillStyle=grad;	
								grad2 = ctx.createLinearGradient(0, 0+(outerNum+1)*pheight/ttlBtns, 300, 70+(outerNum+1)*pheight/ttlBtns);
								grad2.addColorStop(0,colorOneDown);
								grad2.addColorStop(.5,colorOneDown);
								grad2.addColorStop(.6,colorTwoDown);
								grad2.addColorStop(1,colorTwoDown);
								ctx.fillStyle=grad2;	
								grad3 = ctx.createLinearGradient(0, 0+(outerNum+1)*pheight/ttlBtns, 300, 70+(outerNum+1)*pheight/ttlBtns);
								grad3.addColorStop(0,colorOneOver);
								grad3.addColorStop(.5,colorOneOver);
								grad3.addColorStop(.6,colorTwoOver);
								grad3.addColorStop(1,colorTwoOver);
								ctx.fillStyle=grad3;
								break;
							}
					
					thisPoint = [{
						  x: originX+topLeft,
						  y: originY+(outerNum)*pheight/ttlBtns
						}, {
						  x: originX+topRight,
						  y: originY+(outerNum)*pheight/ttlBtns
						}, {
						  x: originX+botRight,
						  y: originY+(outerNum+1)*pheight/ttlBtns
						}, {
						  x: originX+botLeft,
						  y: originY+(outerNum+1)*pheight/ttlBtns
						}, {
						  x: originX+topLeft,
						  y: originY+(outerNum)*pheight/ttlBtns
						}];
					
					thisPyramid = new Kinetic.Polygon({
					  points: thisPoint,
					  fill: _pyramidColor,
					  stroke: "white",
					  strokeWidth: 2,
					  name: naming[counter]
					});
					//alert(naming[counter])
					thisEffect = new Kinetic.Polygon({
					  points: thisPoint,
					  fill: grad,
					  stroke: "white",
					  strokeWidth: 2,
					  name: naming[counter]
					});
					
					thisEffect.on("mouseout", function() {
					   if (_active!=this.getName()){
						 overContent(this.getName(), grad);
					   }
					});			
					
					
					thisEffect.on("mouseover", function() {
					   if (_active!=this.getName()){
						 overContent(this.getName(), grad3);
					   }
					});
					
					thisEffect.on("mousedown touchstart", function() {
						 
								//grad2 = "#111111"
								showContent(this, this.getName());
		
					});
				
					thisEffect.setAlpha(alpha);
					pyramidPoints[counter] = thisPyramid;
					effectPoints[counter] = thisEffect;
					
					newname = String(naming[counter]) + 0;
					/*construct circle to display number*/
					thisCircle = new Kinetic.Circle({
					  x: originX+midW,
					  y: originY+(outerNum)*pheight/ttlBtns+pheight/ttlBtns/2,
					  radius: 11,
					  fill: _circleColor,
					  name: newname
					});
					
					thisCircle.on("mousedown touchstart", function() {		  
					 	showContent(this, this.getName());
					});		
					
					thisCircle.on("mouseout", function() {
						var circNum = this.getName().substr(0,1);						   
					   if (_active!=circNum){
							overContent(circNum, grad);
					   }
					});			
					
					thisCircle.on("mouseover", function() {
						var circNum = this.getName().substr(0,1);						   
					   if (_active!=circNum){
							overContent(circNum, grad3);
					   }
					});
					
					circlePoints[counter] = thisCircle;
					
					/*construct number to show inside circle*/
					thisText = new Kinetic.Text({
					  x: originX+midW,
					  y: originY+(outerNum)*pheight/ttlBtns+pheight/ttlBtns/2,
					  text: counter+1,
					  fontSize: 13,
					  fontFamily: "Arial",
					  textFill: "#111111",
					  align: "center",
					  verticalAlign: "middle",
					  name: newname
					  
					});
					thisText.on("mousedown touchstart", function() {		  
							showContent(this, this.getName());
						});
					
					thisText.on("mouseout", function() {
						var circNum = this.getName().substr(0,1);						   
					   if (_active!=circNum){
							overContent(circNum, grad);
					   }
					});			
					
					thisText.on("mouseover", function() {
						var circNum = this.getName().substr(0,1);						   
					   if (_active!=circNum){
							overContent(circNum, grad3);
					   }
					});
					
					
					
					textPoints[counter] = thisText;
					counter++;

					
					
					
				}());
			}
			}());
		}
				
		
		
     
        // add the shapes to the layer
		for (num=0; num < counter; num++) {
        	layer.add(pyramidPoints[num]);
			layer.add(effectPoints[num]);
        	layer.add(circlePoints[num]);
        	layer.add(textPoints[num]);
			
		}
       // layer.add(pyramid2);
		//layer.add(circle1);
		//layer.add(text1);
		layer.setScale(finalScale);
        // add the layer to the stage
        stage.add(layer);
		
		//pyramid2();
}
