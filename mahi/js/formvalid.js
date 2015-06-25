function formValidation(){

	var fullname = document.getElementById("mn-fulname");
	var username = document.getElementById("mn-username");
	var email = document.getElementById("mn-email");
	var address = document.getElementById("mn-address");
	var zipcode = document.getElementById("mn-zip");

	if(fullname.value.length === 0){
		//alert("* All fields are mandatory *");
		document.getElementById("mn-display").innerText = "* All fields are mandatory *";
		fullname.focus();
		return false;
	}

	if(fullnameValidate(fullname, "* For your name please use alphabets only *")){
		if(usernameLength(username, 6, 8)){
			if(emailValidate(email, "* Please enter valid email address *")){
				if(addressValidate(address, "* Please enter valid address *")){
					if(zipValidate(zipcode, "* Please enter valid zip code *")){
						return true;
					}
				}
			}
		}
	}
	return false;
}
	function fullnameValidate(input, alertMsg){
		var alphaExp = /^[a-zA-Z]+$/;
		if(input.value.match(alphaExp)){
			return true;
		}
		else{
			//debugger;
			document.getElementById("p1").innerText = alertMsg;
			input.focus();
			return false;
		}
	}
	function usernameLength(input, min, max){
		var usernameip = input.value;
		//debugger;
		if(usernameip.length >= min && usernameip.length <= max){
			return true;
		}else{
			document.getElementById("p2").innerText = "Please enter " + min + " to " + max + " characters";
			input.focus();
			return false;
		}
	}
	function emailValidate(input, alertMsg){
		userEmail = input.value;
		var reg = /^([a-zA-Z0-9_\-\.]){1,}\@([a-zA-Z0-9_\-\.]){1,}\.([a-zA-Z]{2,4})$/;
		if(userEmail.match(reg)){
			return true;
		}else{
			document.getElementById("p3").innerText = alertMsg;
			input.focus();
			return false;
		}
	}
	function addressValidate(input, alertMsg){
		var userAddress = input.value;
		var regex = /^[0-9a-zA-Z]+$/;
		if(userAddress.match(regex)){
			return true;
		}else{
			document.getElementById("p4").innerText = alertMsg;
			input.focus();
			return false;
		}
	}
	function zipValidate(input, alertMsg){
		var userZip = input.value;
		var regex = /^[0-9]+$/;
		if(userZip.match(regex)){
			return true;
		}else{
			document.getElementById("p5").innerText = alertMsg;
			input.focus();
			return false;
		}
	}
