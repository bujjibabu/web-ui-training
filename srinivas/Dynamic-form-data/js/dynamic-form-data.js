function fnaddrow() {
          
    var fname = document.getElementById("fname");
    var lname = document.getElementById("lname");
	var contact = document.getElementById("mycontact");
	var email = document.getElementById("myemail");
	var city = document.getElementById("mycity");
	var zip = document.getElementById("myzip");
    var table = document.getElementById("myDynamicTable");


/*var myArray = [];
var myObj = {};
myObj.fname = fname.value;
myObj.lname = lname.value;
myObj.contact = contact.value;
myObj.email = email.value;
myObj.city = city.value;
myObj.zip = zip.value;
myObj.zip = zip.value;

console.log(myObj);
myArray.push(myObj);
console.log(myArray);
myObj={};*/



    var rowCount = table.rows.length;
    var row = table.insertRow(rowCount);
 
    row.insertCell(0).innerHTML= fname.value;
    row.insertCell(1).innerHTML= lname.value;
	row.insertCell(2).innerHTML= contact.value;
	row.insertCell(3).innerHTML= email.value;
	row.insertCell(4).innerHTML= city.value;
	row.insertCell(5).innerHTML= zip.value;


	  document.getElementById("fname").value = "";
      document.getElementById("lname").value = "";
	  document.getElementById("mycontact").value = "";
	  document.getElementById("myemail").value ="";
	  document.getElementById("mycity").value="";
	  document.getElementById("myzip").value="";
      document.getElementById("myDynamicTable").value="";
}	
