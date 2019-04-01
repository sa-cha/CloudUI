
// THIS FILE EXISTS ONLY TO MAKE THE MOCKUP SEMI-CLICKABLE


function cancelNoteInput() {
    var noteInput = document.getElementsByClassName("note-input");
    noteInput[0].style.display = "none";

    var addNoteButton = document.getElementsByClassName("add-note-button");
    addNoteButton[0].style.display = "inline-block";
}

function saveNoteInput() {
    cancelNoteInput();
    // any contents of the .note-input should also be saved and shown in the .alert-history table
    // but don't have an easy way to make that work in the mockup
}

function showNoteInput() {
    var noteInput = document.getElementsByClassName("note-input");
    noteInput[0].style.display = "block";

    var addNoteButton = document.getElementsByClassName("add-note-button");
    addNoteButton[0].style.display = "none";
}

function acknowledge() {
    var acknowledgeButton = document.getElementsByClassName("acknowledge-button");
    acknowledgeButton[0].style.display = "none";

    var closeButton = document.getElementsByClassName("close-button");
    closeButton[0].className = "button close-button";

    // acknowledgement should also be saved and shown in the .alert-history table
    // but don't have an easy way to make that work in the mockup
}
