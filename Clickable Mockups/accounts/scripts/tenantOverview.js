
// THIS FILE EXISTS ONLY TO MAKE THE MOCKUP CLICKABLE

function collapseTenantDetails() {
    var collapser = document.getElementsByClassName("click-to-collapse");
    collapser[0].style.display = "none";

    var expander = document.getElementsByClassName("click-to-expand");
    expander[0].style.display = "inline-block";

    document.getElementById("tenantDetails").style.display = "none";
}

function expandTenantDetails() {
    var collapser = document.getElementsByClassName("click-to-collapse");
    collapser[0].style.display = "inline-block";

    var expander = document.getElementsByClassName("click-to-expand");
    expander[0].style.display = "none";

    document.getElementById("tenantDetails").style.display = "block";
}