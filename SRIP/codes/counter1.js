var c=0;
var d=true;
function delay()
{
	setInterval("count()",1000);
}

function count()
{
	if(d==true)
	{
	document.getElementById("txt").value=c;
	c++;
    } 
}
function end()
{

	d=false;
}