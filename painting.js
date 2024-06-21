var count=0;
var container = document.querySelector(".container")
function show(){
	var num = count++;
	if(num%2==0)
	{
		document.getElementById("address").style.display="flex";
        document.getElementById("bdy").style.filter="blur(10px)"
	}
	else if(num%2==1)
	{
		document.getElementById("address").style.display="none";
        document.getElementById("bdy").style.filter="blur(0px)"
	
	}
}

var count1=0;
function change(){
	var num1 = count1++;
	if(num1%2==0)
	{
		document.getElementById("contact").style.display="flex";
		document.getElementById("bdy").style.filter="blur(10px)"
	}
	else if(num1%2==1)
	{
		document.getElementById("contact").style.display="none";
		document.getElementById("bdy").style.filter="blur(0px)"	
	}
}

var picpart = document.querySelector(".minipic")
function passSrc1(){
	picpart.style.display="none"
	document.getElementById("close1").style.display="flex"
	document.getElementById("picimg0").style.display=`flex`
}
function passSrc2(){
	picpart.style.display="none"
	document.getElementById("close2").style.display="flex"
	document.getElementById("picimg1").style.display=`flex`
}
function passSrc3(){
	picpart.style.display="none"
	document.getElementById("close3").style.display="flex"
	document.getElementById("picimg2").style.display=`flex`
}
function passSrc4(){
	picpart.style.display="none"
	document.getElementById("close4").style.display="flex"
	document.getElementById("picimg3").style.display=`flex`
}
function passSrc5(){
	picpart.style.display="none"
	document.getElementById("close5").style.display="flex"
	document.getElementById("picimg4").style.display=`flex`
}
function passSrc6(){
	picpart.style.display="none"
	document.getElementById("close6").style.display="flex"
	document.getElementById("picimg5").style.display=`flex`
}

var clodbtn = document.querySelector(".clos")
function imgClose(){
	document.getElementById("close1").style.display="none"
	document.getElementById("picimg0").style.display=`none`
	document.getElementById("close2").style.display="none"
	document.getElementById("picimg1").style.display=`none`
	document.getElementById("close3").style.display="none"
	document.getElementById("picimg2").style.display=`none`
	document.getElementById("close4").style.display="none"
	document.getElementById("picimg3").style.display=`none`
	document.getElementById("close5").style.display="none"
	document.getElementById("picimg4").style.display=`none`
	document.getElementById("close6").style.display="none"
	document.getElementById("picimg5").style.display=`none`
	picpart.style.display="flex"
}

var multipics = document.querySelector(".picimg")
function mulimgclose(){
	document.getElementById("close").style.display="none"
	multipics.style.display="flex"
	document.getElementById("multi").style.display=`none`
}

var globalSrc;
function passSrc(urlofimg){
    document.getElementById("multi").style.backgroundImage=`url(${urlofimg})`
	multipics.style.display="none"
	document.getElementById("close").style.display="flex"
	document.getElementById("multi").style.display=`flex`
    globalSrc=urlofimg;
}