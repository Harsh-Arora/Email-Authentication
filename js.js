function check(){
	var tochk = document.getElementById('email').value;
	
	if(tochk.includes("@") && tochk.includes("."))
	{
		document.getElementById('res').innerHTML = "Form Submitted!";
		document.getElementById('nm').value = "";
		document.getElementById('email').value = "";
	}
	else
	{
		document.getElementById('res').innerHTML = "Invalid Email!";
	}

}