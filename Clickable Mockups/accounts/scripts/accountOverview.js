
// THIS FILE EXISTS ONLY TO MAKE THE MOCKUP CLICKABLE

function collapseAccountDetails() {
    var collapser = document.getElementsByClassName("click-to-collapse");
    collapser[0].style.display = "none";

    var expander = document.getElementsByClassName("click-to-expand");
    expander[0].style.display = "inline-block";

    document.getElementById("accountDetails").style.display = "none";
}

function expandAccountDetails() {
    var collapser = document.getElementsByClassName("click-to-collapse");
    collapser[0].style.display = "inline-block";

    var expander = document.getElementsByClassName("click-to-expand");
    expander[0].style.display = "none";

    document.getElementById("accountDetails").style.display = "block";
}