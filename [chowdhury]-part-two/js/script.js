
// variable for storing event type
var eventType = "What is the type of event Today?";

eventType = prompt(eventType);

// variable for storing temperature

var tempFahr = "What is Today's weather?";
tempFahr = prompt(tempFahr);

// variable for storing end-result

var result;

// script to find out what to wear


if(eventType == "formal") {
	if(tempFahr < 54) {
		result = "Since it is "+tempFahr+" degrees and you are going to a "+eventType+" event, you should wear a suit and coat.";
	}
	else if(tempFahr >= 54 && tempFahr <= 70) {
		result = "Since it is "+tempFahr+" degrees and you are going to a "+eventType+" event, you should wear a suit and jacket.";
	}
	else {
		result = "Since it is "+tempFahr+" degrees and you are going to a "+eventType+" event, you should wear a suit and no jacket.";
	}
}
else if(eventType == "semi-formal") {
	if(tempFahr < 54){
		result = "Since it is "+tempFahr+" degrees and you are going to a "+eventType+" event, you should wear a polo and coat.";
	}
	else if(tempFahr >= 54 && tempFahr <= 70){
		result = "Since it is "+tempFahr+" degrees and you are going to a "+eventType+" event, you should wear a polo and jacket.";
	}
	else {
		result = "Since it is "+tempFahr+" degrees and you are going to a "+eventType+" event, you should wear a polo and no jacket.";
	}
}
else if(eventType == "casual"){
	if(tempFahr < 54){
		result = "Since it is "+tempFahr+" degrees and you are going to a "+eventType+" event, you should wear something comfy and a coat.";
	}
	else if(tempFahr >= 54 && tempFahr <= 70) {
		result = "Since it is "+tempFahr+" degrees and you are going to a "+eventType+" event, you should wear something comfy and a jacket.";
	}
	else {
		result = "Since it is "+tempFahr+" degrees and you are going to a "+eventType+" event, you should wear something comfy and no jacket.";
	}
}

// logging end-result to the console

console.log(result);


