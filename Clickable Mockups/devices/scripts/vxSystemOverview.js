
// THIS FILE EXISTS ONLY TO MAKE THE MOCKUP CLICKABLE

// first health area selected by default on page load
function drillIntoArea0() {
    // style areaHeader[0] as selected; style the rest as not selected
    var areaHeader = document.getElementsByClassName("area-header");
    areaHeader[0].className = "area-header selected";
    areaHeader[1].className = "area-header";
    areaHeader[2].className = "area-header";

    // show areaDrillIn[0]; hide the rest
    var areaDrillIn = document.getElementsByClassName("area-drill-in");
    areaDrillIn[0].style.display = "block";
    areaDrillIn[1].style.display = "none";
    areaDrillIn[2].style.display = "none";

    // hide license alerts table when first drilling into licenses
    var alertsTable = document.getElementsByClassName("licenses-alerts-table");
    alertsTable[0].style.display = "none";
}

function drillIntoArea1() {
    // style areaHeader[1] as selected; style the rest as not selected
    var areaHeader = document.getElementsByClassName("area-header");
    areaHeader[0].className = "area-header";
    areaHeader[1].className = "area-header selected";
    areaHeader[2].className = "area-header";

    // show areaDrillIn[1]; hide the rest
    var areaDrillIn = document.getElementsByClassName("area-drill-in");
    areaDrillIn[0].style.display = "none";
    areaDrillIn[1].style.display = "block";
    areaDrillIn[2].style.display = "none";
}

function drillIntoArea2() {
    // style areaHeader[2] as selected; style the rest as not selected
    var areaHeader = document.getElementsByClassName("area-header");
    areaHeader[0].className = "area-header";
    areaHeader[1].className = "area-header";
    areaHeader[2].className = "area-header selected";

    // show areaDrillIn[2]; hide the rest
    var areaDrillIn = document.getElementsByClassName("area-drill-in");
    areaDrillIn[0].style.display = "none";
    areaDrillIn[1].style.display = "none";
    areaDrillIn[2].style.display = "block";
}

// when drilled into Licenses, dropdown controls which table to show
function changeLicensesChartType() {
    var licensesChartSelector = document.getElementsByClassName("licenses-chart-selector");
    var licenseChartType = licensesChartSelector[0].value;

    if (licenseChartType == "licensesSummary") {
        var summaryTable = document.getElementsByClassName("licenses-summary-table");
        summaryTable[0].style.display = "table";
        var alertsTable = document.getElementsByClassName("licenses-alerts-table");
        alertsTable[0].style.display = "none";
    }
    else if (licenseChartType == "licensesAlerts") {
        var summaryTable = document.getElementsByClassName("licenses-summary-table");
        summaryTable[0].style.display = "none";
        var alertsTable = document.getElementsByClassName("licenses-alerts-table");
        alertsTable[0].style.display = "table";
    }
}

