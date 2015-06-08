function fncreaterow()
{
	var myemail = document.getElementById("myemail");
    var mypswrd = document.getElementById("mypswrd");

	var rowCount = myDynamicTable.rows.length;
    var row = myDynamicTable.insertRow(rowCount);
 
    row.insertCell(0).innerHTML= myemail.value;
    row.insertCell(1).innerHTML= mypswrd.value;

	document.getElementById("myemail").value = "";
    document.getElementById("mypswrd").value = "";

// 	var myemail = document.getElementById("myemail");
//     var mypswrd = document.getElementById("mypswrd");

// 	var myArray = [];
// 	var myObj = {};
		
// 		myObj.myemail = myemail.value;
// 		myObj.mypswrd = mypswrd.value;

// 	console.log(myObj);
// 	myArray.push(myObj);
// 	console.log(myArray);	
}
	function formvalidation()  
	{  
		var myemail = document.getElementById('myemail').value;   
		var mypswrd = document.getElementById('mypswrd').value;  

		if(ValidateEmail(myemail))  
		{  
			if(validatepswrd(mypswrd,7,12))  
			{  
			}  
		}    
	}
	function ValidateEmail(myemail)  
	{  debugger;
            var email = myemail.value;
            var regex = /^([0-9a-zA-Z]([-_\\.]*[0-9a-zA-Z]+)*)@([0-9a-zA-Z]([-_\\.]*[0-9a-zA-Z]+)*)[\\.]([a-zA-Z]{2,3})$/;

            if(!regex.test(email)){
                
                return true;
            }      
		alert("Enter a valid email");
		return false;
	}

	
	function validatepswrd(mypswrd,mx,my)  
	{  debugger;
		var mypswrdlen = mypswrd.length;  
		if (mypswrdlen == 0 ||mypswrdlen >= my || mypswrdlen < mx)  
		{  
			alert("Password should not be empty / length be between "+mx+" to "+my);  
			mypswrd.focus();  
			return false;  
		}  
		return true;  
	}  	