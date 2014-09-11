window.onload = formSubmit;

function formSubmit()
{	//var form = document.getElementsByTagName('form')
	//form[0].submit = validateInputs;
	var submitButton = document.getElementById('txtSubmit');
	submitButton.onclick = validateInputs;
}

function validateInputs()
{	//if div already has error message, delete it
	var divErrMsg = document.getElementById('errMsg');
	//get div's children
	var divsChildren = divErrMsg.childNodes;
	var lengthDivsChildren = divsChildren.length;
	//error message would be in the last <p> element
	if (divsChildren[lengthDivsChildren-1].nodeName.toLowerCase() == 
			'p')
	{ 	divErrMsg.removeChild(
			divErrMsg.childNodes[lengthDivsChildren-1]);
	}
	
	var outMsg = "";
	var phone = document.getElementById('phone').value;
	var msg = document.getElementById('msg').value;
	// Remove any leading and trailing white spaces.
    msg = msg.trim();
	var form = document.getElementById('textForm');
	//is phone number valid?
	//looking for  10 digits - do not care if user 
	//types hyphens or parenthesis
	//get rid of anything that is not a digit
	var phoneJustNums = phone.replace(/[^\d]/g, "");
	// /g is global match: find all numbers in 'phone'
	var phoneLength = phoneJustNums.length;	
	
		
	if ( (msg.length == 0) ||  (phoneLength != 10) )
	{	if (msg.length == 0)
			outMsg = "Text Message can NOT be empty. Please try again.";
		else
		{	outMsg = "Not a valid phone number; must contain 10 digits.";
			//clear out phone field
			document.getElementById('phone').value = "";
		}
		//create new text node
		var newText = document.createTextNode(outMsg);		
		//create new paragraph element
		var newParagraph = document.createElement('p');
		newParagraph.style.color = "white"; 
		//append text to paragraph
		newParagraph.appendChild(newText);
		//append paragraph to form
		divErrMsg.appendChild(newParagraph);
		//don't submit form
		return false;
	}
	//data is value, submit form
	return true;		
}