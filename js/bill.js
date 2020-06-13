
function dispbill() 
{
var total=0,gs1=0,tp=0;

var new1=localStorage.getItem("sec");

total=parseInt(new1);

console.log(total);

gs1=total*(0.18);
tp=total+gs1;

document.getElementById("tt").value="$"+total;
document.getElementById("gst").value="$"+gs1;
document.getElementById("tprice").value="$"+tp;	
}
	