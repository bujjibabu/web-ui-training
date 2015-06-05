function fnaddrow() {
          
    var fname = document.getElementById("fname");
    var lname = document.getElementById("lname");
	var contact = document.getElementById("mycontact");
	var email = document.getElementById("myemail");
	var city = document.getElementById("mycity");
	var zip = document.getElementById("myzip");
    var table = document.getElementById("myDynamicTable");

    var rowCount = table.rows.length;
    var row = table.insertRow(rowCount);
 
    row.insertCell(0).innerHTML= fname.value;
    row.insertCell(1).innerHTML= lname.value;
	row.insertCell(2).innerHTML= contact.value;
	row.insertCell(3).innerHTML= email.value;
	row.insertCell(4).innerHTML= city.value;
	row.insertCell(5).innerHTML= zip.value;
}	
