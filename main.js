// Get all the input values
var inputText = document.getElementById("button-text");
var inputTextSize = document.getElementById("button-text-size");
var inputSize = document.getElementById("button-size");
var inputTextColor = document.getElementById("button-text-color");
var inputBgColor = document.getElementById("button-bg");
var inputBrColor = document.getElementById("button-border-color");
var inputBrRadius = document.getElementById("button-border-radius");

var allInput = document.querySelectorAll(".bt-input");
// Get the target element
var targetButton = document.getElementById("targetButton");
var outputButton = document.getElementById("get-code");
var targetOuptut = document.getElementById("output-code");

// Set default style
targetButton.style.backgroundColor = "transparent";
targetButton.style.color = "black";
targetButton.style.fontSize = "16px";
targetButton.style.borderColor = "#ddd";


// Get and apply the stylings 

allInput.forEach( function( input ) {
    input.addEventListener("input", function(event){

        var getClickedElm = event.target;

        if(getClickedElm == inputText){
            targetButton.innerHTML = this.value;
        }

        if(getClickedElm == inputTextSize){
            targetButton.style.fontSize = this.value+"px";
        }

        if(getClickedElm == inputSize){
            targetButton.style.width = this.value+"%";
        }

        if(getClickedElm == inputTextColor){
            targetButton.style.color = this.value;
        }

        if(getClickedElm == inputBgColor){
            targetButton.style.backgroundColor = this.value;
        }

        if(getClickedElm == inputBrColor){
            targetButton.style.borderColor = this.value;
        }

        if(getClickedElm == inputBrRadius){
            targetButton.style.borderRadius = this.value+"px";
        }
    });
});	


// Showing the css code to the user

outputButton.addEventListener("click", function(event){

    targetOuptut.innerHTML = "#targetButton{"+ "<br />" + "font-size: " + targetButton.style.fontSize+ ";<br />" + "color: " + targetButton.style.color+ ";<br />" + "background-color: " + targetButton.style.backgroundColor+ ";<br />" + "border-color: " + targetButton.style.borderColor+ ";<br />" + "border-radius: " + targetButton.style.borderRadius+ ";<br />" +  "width: " + targetButton.style.width+ ";<br /> }";
    event.preventDefault();

})
