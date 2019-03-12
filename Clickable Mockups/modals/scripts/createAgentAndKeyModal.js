// THIS FILE EXISTS ONLY TO MAKE THE MOCKUP CLICKABLE
// TRIED TO DO THIS ALL WITH CLASSES AND NO IDs - SORRY FOR MESS :)

// show step 1 when modal loads, hide step 2 stuff
function step1() {
    var activationKey = document.getElementsByClassName("activation-key");
    activationKey[0].style.display = "none";

    var step1Caption = document.getElementsByClassName("step-1");
    step1Caption[0].className = "step-1 caption active";

    var generateKeyButton = document.getElementsByClassName("generate-key");
    generateKeyButton[0].className = "button generate-key disabled";
    generateKeyButton[0].title = "Agent name is required to generate key";

    var step2Buttons = document.getElementsByClassName("step-2-buttons");
    step2Buttons[0].style.display = "none";
}

// enable .generate-key button if user has entered something for agent name
// disable the button otherwise
function enableGenerateKeyButton() {
    var agentNameInput = document.getElementsByClassName("agent-name-input");
    var agentNameInputValue = agentNameInput[0].value;
    var generateKeyButton = document.getElementsByClassName("generate-key");
    if (agentNameInputValue != "") {
        generateKeyButton[0].className = "button generate-key";
        generateKeyButton[0].title = "";
    }
    else {
        generateKeyButton[0].className = "button generate-key disabled";
        generateKeyButton[0].title = "Agent name is required to generate key";
    }
}

// hide step 1 stuff, show step 2 stuff
function step2() {
    var enterAgentName = document.getElementsByClassName("enter-agent-name");
    enterAgentName[0].style.display = "none";

    var activationKey = document.getElementsByClassName("activation-key");
    activationKey[0].style.display = "block";

    var step1Caption = document.getElementsByClassName("step-1");
    step1Caption[0].className = "step-1 caption";

    var step1Prefix = document.getElementsByClassName("step-1-prefix");
    step1Prefix[0].innerHTML = '<img class="completed-icon" src="../img/icons/result-success-goodGreen.svg">';

    var step2Caption = document.getElementsByClassName("step-2");
    step2Caption[0].className = "step-2 caption active";

    var step2Prefix = document.getElementsByClassName("step-2-prefix");
    step2Prefix[0].innerHTML = "NEXT:";

    var step1Buttons = document.getElementsByClassName("step-1-buttons");
    step1Buttons[0].style.display = "none";

    var step2Buttons = document.getElementsByClassName("step-2-buttons");
    step2Buttons[0].style.display = "block";
}

// besides copying key to clipboard, change look of button
// so that user gets indication that something did happen
function copyKey() {
    
    var copyKeyButton = document.getElementsByClassName("copy-key");
    copyKeyButton[0].className = "button-muted copy-key";
    copyKeyButton[0].innerHTML = "Copy Key Again";
}