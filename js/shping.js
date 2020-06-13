
var items=[{"img":"/xampp/htdocs/bom/shp/im/aptp.png","itemname":"laptop","make":"Acer","price":"40000","quantity":"1"},
{"img":"/xampp/htdocs/bom/shp/im/Printer.jpeg","itemname":"printer","make":"Canon","price":"10000","quantity":"1"},
{"img":"/xampp/htdocs/bom/shp/im/Tv.jpeg","itemname":"lED TV","make":"sony","price":"51000","quantity":"1"},
{"img":"/xampp/htdocs/bom/shp/im/MNokia.jpeg","itemname":"mobile","make":"Nokia","price":"19000","quantity":"1"},
{"img":"/xampp/htdocs/bom/shp/im/MSamsung.jpeg","itemname":"mobile","make":"samsung","price":"7000","quantity":"1"},
{"img":"/xampp/htdocs/bom/shp/im/Wash.jpeg","itemname":"washing machine","make":"lG","price":"15000","quantity":"1"},
{"img":"/xampp/htdocs/bom/shp/im/head.jpeg","itemname":"Headphone","make":"bose","price":"17000","quantity":"1"}];


var add=[];



//<tr><th>title</th><th>price</th><th>Author</th></tr>
	




function dispcart() 
{
	
	var i=0,bll=0;
	var temp="<tr><td>"+"record#"+"</td><td>"+"image"+"</td><td>"+"itemname"+"</td><td>"+"make"+"</td><td>"+"price"+"</td><td style='color:black' colspan='3' align='center'>"+"quantity"+"</td><td>remve frm cart</td><td colspan='2'>"+"total price"+"</td></tr>";;


var arr=localStorage.getItem("sect");
 
var ary=arr.split(',');

var cnt=arr.split(',').length;


console.log("cnt"+arr);
console.log(arr.length);


for (var k = 0; k <items.length; k++) 
{
	for (var j = 0; j <cnt; j++) 
	{

		console.log(ary[j]);
	if (ary[j]==items[k].make) 
{
	temp+="<tr><td style='color:navy',font-style: 'italic'>"+(k+1)+"</td><td><img src="+items[k].img+"></img></td><td style='color:navy',font-family:'lucida-sans'>"+items[k].itemname+"</td><td style='color:navy',font-family:'lucida-sans'>"+items[k].make+"</td><td style='color:navy',font-family:'verdana'>"+items[k].price+"</td><td ><button  style=height:2px,width:2px; onclick='inc("+k+")'>+</button></td><td><input type=text value="+items[k].quantity+" readonly></td><td><button  style=height:2px,width:2px; onclick='dec("+k+")'>-</button></td><td><button  style=height:2px,width:2px; onclick='delete1("+k+")'>delete</button></td><td>"+items[k].price+"*"+items[k].quantity+"="+calc(k)+"</td></tr>";	
	bll+=calc(k);
}}	
}

document.getElementById("tb").innerHTML=temp;

totalbill(bll);
}
	

//console.log(txt)

function totalbill(b)
{
	var gs=0,tbill=0;

	gs=(b*18)/100;
	tbill=b+gs;
	localStorage.setItem("sec",b);
}


function calc(j)
{
	return items[j].price*items[j].quantity;
}



function dec(j)
{
	items[j].quantity--;
	dispcart();
}


function inc(j)
{
	items[j].quantity++;
	dispcart();	
}



function delete1(k)
{
event.preventDefault();
items.splice(k,1);
console.log(k);
dispcart();
}

function buy()
{
var dv=document.getElementById("bbx");
var all=bbx.getElementsByTagName("button");	

var inp,i=0;
while (inp=all[i++]) 
{
inp.disabled=true;	
}
	
}
	

