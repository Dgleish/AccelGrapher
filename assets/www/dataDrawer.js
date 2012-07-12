


 function draw(){
 var c=document.getElementById("myCanvas");
 var ctx=c.getContext("2d");
c.width=window.innerWidth-(window.innerWidth/8);
c.height=window.innerHeight-(window.innerHeight/5);
}

var go = function() {
window.onorientationchange = function(){
doOrientationChange();
}
var c=document.getElementById("myCanvas");
 var ctx=c.getContext("2d");
function doOrientationChange(){
switch(window.orientation)
	{
		case 90:
		case-90:
		c.height=window.innerHeight-(window.innerHeight/5);
		c.width=window.innerWidth-(window.innerWidth/8);
		break;
		default:
		c.width=window.innerWidth;
		c.height=window.innerHeight-(window.innerHeight/5);
		break;
	}
}


 document.getElementById('gobtn').innerHTML="Stop";
 document.getElementById('gobtn').onclick=function () {stopWatch();};
  
  
 var datapointLength = 5;
 var datapoint=0;
  var currentpos=0;
 var xdataArray = new Array(c.width/datapointLength);
 var ydataArray = new Array(c.width/datapointLength);
  var zdataArray = new Array(c.width/datapointLength);
 console.log(screen.height);
 var watchID = null; 
 startWatch();
 

 
    // Start watching the acceleration 
    function startWatch() { 
        // Update acceleration every 0.1 seconds 
        var options = { frequency: 100 }; 
        watchID = navigator.accelerometer.watchAcceleration(onSuccess, onError, options); 
    } 
 
    // Stop watching the acceleration 
    function stopWatch() { 
        if (watchID) { 
            navigator.accelerometer.clearWatch(watchID); 
            watchID = null; 
        } 
        ctx.clearRect(0,0,c.width,c.height);
         document.getElementById('gobtn').innerHTML="Start";
 		document.getElementById('gobtn').onclick=function () {go();};
    } 
 
    // onSuccess: Get a snapshot of the current acceleration 
    function onSuccess(acceleration) { 
    
     
     
     xdataArray[datapoint]=c.height/2+acceleration.x*18;	
     ydataArray[datapoint] = c.height/2+acceleration.y*18;
    zdataArray[datapoint] = c.height/2+acceleration.z*18;
     
     ctx.clearRect(0,0,c.width,c.height);
    ctx.beginPath();
    ctx.strokeStyle="rgba(255,255,255,1)";
 	ctx.moveTo(0,c.height/2)
 	ctx.lineTo(c.width,c.height/2);
 	ctx.stroke();
	 ctx.closePath();
     for(var i=0;i<=datapoint;i++)
     {
     if(datapoint===i){
    	
    	ctx.beginPath();
     	ctx.arc((i+1)*datapointLength,xdataArray[i],7,0,2*Math.PI, false);
     	ctx.fillStyle = "rgba(180,255,255,0.4)";
    	ctx.fill();
    	ctx.closePath();
   	  	ctx.beginPath();
     	ctx.arc((i+1)*datapointLength,xdataArray[i],4,0,2*Math.PI, false);
     	ctx.fillStyle = "#FFFFFF";
    	ctx.fill();
    	ctx.closePath();
    	
    	ctx.beginPath();
     	ctx.arc((i+1)*datapointLength,ydataArray[i],7,0,2*Math.PI, false);
     	ctx.fillStyle = "rgba(255,255,180,0.4)";
    	ctx.fill();
    	ctx.closePath();
   	  	ctx.beginPath();
     	ctx.arc((i+1)*datapointLength,ydataArray[i],4,0,2*Math.PI, false);
     	ctx.fillStyle = "#FFFFFF";
    	ctx.fill();
    	ctx.closePath();
    	
    	ctx.beginPath();
     	ctx.arc((i+1)*datapointLength,zdataArray[i],7,0,2*Math.PI, false);
     	ctx.fillStyle = "rgba(255,180,255,0.4)";
    	ctx.fill();
    	ctx.closePath();
   	  	ctx.beginPath();
     	ctx.arc((i+1)*datapointLength,zdataArray[i],4,0,2*Math.PI, false);
     	ctx.fillStyle = "#FFFFFF";
    	ctx.fill();
    	ctx.closePath();
    	
     }
     ctx.beginPath();
     if(xdataArray[xdataArray.length-1]!==0){
   		ctx.moveTo(i*datapointLength,xdataArray[i-1]);
   		}
   		else
   		{
   			ctx.moveTo(0,c.height/2);
   		}
   	if(i===datapoint&&datapoint!==(xdataArray.length))
   		{
   		ctx.strokeStyle="rgba(255,255,255,1)";
   		}
   		
   	else
   		{
   		ctx.strokeStyle="rgba(0,191,255,0.9)";
   		}
    ctx.lineTo((i+1)*datapointLength,xdataArray[i]);
    currentpos = (i+1)*datapointLength;
        ctx.stroke();  
   	ctx.closePath();     
   	
   	ctx.beginPath();
     if(ydataArray[ydataArray.length-1]!==0){
   		ctx.moveTo(i*datapointLength,ydataArray[i-1]);
   		}
   		else
   		{
   			ctx.moveTo(0,c.height/2);
   		}
   	if(i===datapoint&&datapoint!==(ydataArray.length))
   		{
   		ctx.strokeStyle="rgba(255,255,255,1)";
   		}
   		
   	else
   		{
   		ctx.strokeStyle="rgba(0,255,191,0.9)";
   		}
    ctx.lineTo((i+1)*datapointLength,ydataArray[i]);
    currentpos = (i+1)*datapointLength;
        ctx.stroke();  
   	ctx.closePath();  
   	
   	
   	ctx.beginPath();
     if(zdataArray[zdataArray.length-1]!==0){
   		ctx.moveTo(i*datapointLength,zdataArray[i-1]);
   		}
   		else
   		{
   			ctx.moveTo(0,c.height/2);
   		}
   	if(i===datapoint&&datapoint!==(zdataArray.length))
   		{
   		ctx.strokeStyle="rgba(255,255,255,1)";
   		}
   		
   	else
   		{
   		ctx.strokeStyle="rgba(255,0,191,0.9)";
   		}
    ctx.lineTo((i+1)*datapointLength,zdataArray[i]);
    currentpos = (i+1)*datapointLength;
        ctx.stroke();  
   	ctx.closePath();  
     }
     
    for(var j=datapoint+10;j<xdataArray.length;j++)
    	{
    	ctx.beginPath();
    	ctx.strokeStyle="rgba(0,191,255,0.9)";
    	ctx.moveTo(j*datapointLength,xdataArray[j]);
		ctx.lineTo((j+1)*datapointLength,xdataArray[j+1]);
        ctx.stroke();  
   		ctx.closePath();     
		}
		
	for(var j=datapoint+10;j<ydataArray.length;j++)
    	{
    	ctx.beginPath();
    	ctx.strokeStyle="rgba(0,255,191,0.9)";
    	ctx.moveTo(j*datapointLength,ydataArray[j]);
		ctx.lineTo((j+1)*datapointLength,ydataArray[j+1]);
        ctx.stroke();  
   		ctx.closePath();     
		}
		
	for(var j=datapoint+10;j<zdataArray.length;j++)
    	{
    	ctx.beginPath();
    	ctx.strokeStyle="rgba(255,0,191,0.9)";
    	ctx.moveTo(j*datapointLength,zdataArray[j]);
		ctx.lineTo((j+1)*datapointLength,zdataArray[j+1]);
        ctx.stroke();  
   		ctx.closePath();     
		}
	
 	datapoint++;
    
    if(currentpos>=c.width)
    	{
    	
    	datapoint=0;
    		
    		
    		
    	}
    	

    
    } 
 
    // onError: Failed to get the acceleration 
    function onError() { 
        alert('Error!'); 
    } 
 
        
    
}