
var items=[{"img":"/xampp/htdocs/bom/shp/im/aptp.png","itemname":"laptop","make":"Acer","price":"40000"},
{"img":"/xampp/htdocs/bom/shp/im/Printer.jpeg","itemname":"printer","make":"Canon","price":"10000"},
{"img":"/xampp/htdocs/bom/shp/im/Tv.jpeg","itemname":"lED TV","make":"sony","price":"51000"},
{"img":"/xampp/htdocs/bom/shp/im/MNokia.jpeg","itemname":"mobile","make":"Nokia","price":"19000"},
{"img":"/xampp/htdocs/bom/shp/im/MSamsung.jpeg","itemname":"mobile","make":"samsung","price":"7000"},
{"img":"/xampp/htdocs/bom/shp/im/Wash.jpeg","itemname":"washing machine","make":"lG","price":"15000"},
{"img":"/xampp/htdocs/bom/shp/im/head.jpeg","itemname":"Headphone","make":"bose","price":"17000"}];



var add=[];

var counter=[];




//<tr><th>title</th><th>price</th><th>Author</th></tr>

var i=0;

var select=[];



function addcart(j) 
{
	var ch=document.getElementsByClassName("bt");

	select[i]=items[j].make;
	ch[j].disabled=true;
	console.log(ch[j]);
	console.log(items[j].make);
localStorage.setItem("sect",select);
i++;	
}
	




