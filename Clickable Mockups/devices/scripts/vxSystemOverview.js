
// THIS FILE EXISTS ONLY TO MAKE THE MOCKUP CLICKABLE

function collapseStuff() {
    document.getElementById("collapse").style.display = "none";
    document.getElementById("expand").style.display = "inline-block";
    document.getElementById("stuff").style.display = "none";
}
function expandStuff() {
    document.getElementById("collapse").style.display = "inline-block";
    document.getElementById("expand").style.display = "none";
    document.getElementById("stuff").style.display = "block";
}

// first health area selected by default on page load
function drillIntoArea0() {
    // style area[0] as selected; style the rest as not selected
    var area = document.getElementsByClassName("area");
    area[0].className = "area selected";
    area[1].className = "area";
    area[2].className = "area";
    area[3].className = "area";
    area[4].className = "area";

    // show areaDrillIn[0]; hide the rest
    var areaDrillIn = document.getElementsByClassName("area-drill-in");
    areaDrillIn[0].style.display = "block";
    areaDrillIn[1].style.display = "none";
    areaDrillIn[2].style.display = "none";
    areaDrillIn[3].style.display = "none";
    areaDrillIn[4].style.display = "none";

    showLicensesSummaryTable();

    //changeLicensesChartType();
    // hide license alerts table when first drilling into licenses
    // var alertsTable = document.getElementsByClassName("licenses-alerts-table");
    // alertsTable[0].style.display = "none";
}

function drillIntoArea1() {
    // style area[1] as selected; style the rest as not selected
    var area = document.getElementsByClassName("area");
    area[0].className = "area";
    area[1].className = "area selected";
    area[2].className = "area";
    area[3].className = "area";
    area[4].className = "area";

    // show areaDrillIn[1]; hide the rest
    var areaDrillIn = document.getElementsByClassName("area-drill-in");
    areaDrillIn[0].style.display = "none";
    areaDrillIn[1].style.display = "block";
    areaDrillIn[2].style.display = "none";
    areaDrillIn[3].style.display = "none";
    areaDrillIn[4].style.display = "none";

    showCamerasSummaryTable();
}

function drillIntoArea2() {
    // style area[2] as selected; style the rest as not selected
    var area = document.getElementsByClassName("area");
    area[0].className = "area";
    area[1].className = "area";
    area[2].className = "area selected";
    area[3].className = "area";
    area[4].className = "area";

    // show areaDrillIn[2]; hide the rest
    var areaDrillIn = document.getElementsByClassName("area-drill-in");
    areaDrillIn[0].style.display = "none";
    areaDrillIn[1].style.display = "none";
    areaDrillIn[2].style.display = "block";
    areaDrillIn[3].style.display = "none";
    areaDrillIn[4].style.display = "none";

    showStorageSummaryTable();
}

function drillIntoArea3() {
    // style area[3] as selected; style the rest as not selected
    var area = document.getElementsByClassName("area");
    area[0].className = "area";
    area[1].className = "area";
    area[2].className = "area";
    area[3].className = "area selected";
    area[4].className = "area";

    // show areaDrillIn[3]; hide the rest
    var areaDrillIn = document.getElementsByClassName("area-drill-in");
    areaDrillIn[0].style.display = "none";
    areaDrillIn[1].style.display = "none";
    areaDrillIn[2].style.display = "none";
    areaDrillIn[3].style.display = "block";
    areaDrillIn[4].style.display = "none";

    showServersSummaryTable();
}

function drillIntoArea4() {
    // style area[4] as selected; style the rest as not selected
    var area = document.getElementsByClassName("area");
    area[0].className = "area";
    area[1].className = "area";
    area[2].className = "area";
    area[3].className = "area";
    area[4].className = "area selected";

    // show areaDrillIn[4]; hide the rest
    var areaDrillIn = document.getElementsByClassName("area-drill-in");
    areaDrillIn[0].style.display = "none";
    areaDrillIn[1].style.display = "none";
    areaDrillIn[2].style.display = "none";
    areaDrillIn[3].style.display = "none";
    areaDrillIn[4].style.display = "block";

    showReports();
}

// when drilled into Licenses, dropdown controls which table to show
function showLicensesSummaryTable() {
    var licensesSummaryTab = document.getElementsByClassName("licenses-summary-tab");
    licensesSummaryTab[0].className = "tab licenses-summary-tab selected";

    var licensesSummaryTable = document.getElementsByClassName("licenses-summary-table");
    licensesSummaryTable[0].style.display = "table";

    var licensesAlertsTab = document.getElementsByClassName("licenses-alerts-tab");
    licensesAlertsTab[0].className = "tab licenses-alerts-tab";

    var licensesAlertsTable = document.getElementsByClassName("licenses-alerts-table");
    licensesAlertsTable[0].style.display = "none";
}
function showLicensesAlertsTable() {
    var licensesSummaryTab = document.getElementsByClassName("licenses-summary-tab");
    licensesSummaryTab[0].className = "tab licenses-summary-tab";

    var licensesSummaryTable = document.getElementsByClassName("licenses-summary-table");
    licensesSummaryTable[0].style.display = "none";

    var licensesAlertsTab = document.getElementsByClassName("licenses-alerts-tab");
    licensesAlertsTab[0].className = "tab licenses-alerts-tab selected";

    var licensesAlertsTable = document.getElementsByClassName("licenses-alerts-table");
    licensesAlertsTable[0].style.display = "table";
}

// when drilled into Cameras, control which table to show
function showCamerasSummaryTable() {
    var camerasSummaryTab = document.getElementsByClassName("cameras-summary-tab");
    camerasSummaryTab[0].style.display = "none";

    var camerasSummaryTabAndToggle = document.getElementsByClassName("cameras-summary-tab-and-toggle");
    camerasSummaryTabAndToggle[0].style.display = "inline-block";

    var camerasSummaryTable = document.getElementsByClassName("cameras-summary-table");
    camerasSummaryTable[0].style.display = "table";

    var camerasAlertsTab = document.getElementsByClassName("cameras-alerts-tab");
    camerasAlertsTab[0].className = "tab cameras-alerts-tab";

    var camerasAlertsTable = document.getElementsByClassName("cameras-alerts-table");
    camerasAlertsTable[0].style.display = "none";

    showCamerasTable();
}
function showCamerasThumbnails() {
    var camerasThumbnailsIcon = document.getElementsByClassName("cameras-thumbnails-icon");
    camerasThumbnailsIcon[0].style.display = "none";

    var camerasTableIcon = document.getElementsByClassName("cameras-table-icon");
    camerasTableIcon[0].style.display = "inline";

    var camerasSummaryTable = document.getElementsByClassName("cameras-summary-table");
    camerasSummaryTable[0].style.display = "none";

    var camerasThumbnailsGrid = document.getElementsByClassName("cameras-thumbnails-grid");
    camerasThumbnailsGrid[0].style.display = "block";
}
function showCamerasTable() {
    var camerasThumbnailsIcon = document.getElementsByClassName("cameras-thumbnails-icon");
    camerasThumbnailsIcon[0].style.display = "inline";

    var camerasTableIcon = document.getElementsByClassName("cameras-table-icon");
    camerasTableIcon[0].style.display = "none";

    var camerasSummaryTable = document.getElementsByClassName("cameras-summary-table");
    camerasSummaryTable[0].style.display = "table";

    var camerasThumbnailsGrid = document.getElementsByClassName("cameras-thumbnails-grid");
    camerasThumbnailsGrid[0].style.display = "none";
}
function showCamerasAlertsTable() {
    var camerasSummaryTab = document.getElementsByClassName("cameras-summary-tab");
    camerasSummaryTab[0].className = "tab cameras-summary-tab";
    camerasSummaryTab[0].style.display = "inline-block";

    var camerasSummaryTabAndToggle = document.getElementsByClassName("cameras-summary-tab-and-toggle");
    camerasSummaryTabAndToggle[0].style.display = "none";

    var camerasSummaryTable = document.getElementsByClassName("cameras-summary-table");
    camerasSummaryTable[0].style.display = "none";

    var camerasThumbnailsGrid = document.getElementsByClassName("cameras-thumbnails-grid");
    camerasThumbnailsGrid[0].style.display = "none";

    var camerasAlertsTab = document.getElementsByClassName("cameras-alerts-tab");
    camerasAlertsTab[0].className = "tab cameras-alerts-tab selected";

    var camerasAlertsTable = document.getElementsByClassName("cameras-alerts-table");
    camerasAlertsTable[0].style.display = "table";
}

// when drilled into Storage, tabs control which table to show
function showStorageSummaryTable() {
    var storageSummaryTab = document.getElementsByClassName("storage-summary-tab");
    storageSummaryTab[0].className = "tab storage-summary-tab selected";

    var storageSummaryTable = document.getElementsByClassName("storage-summary-table");
    storageSummaryTable[0].style.display = "table";

    var storageAlertsTab = document.getElementsByClassName("storage-alerts-tab");
    storageAlertsTab[0].className = "tab storage-alerts-tab";

    var storageAlertsTable = document.getElementsByClassName("storage-alerts-table");
    storageAlertsTable[0].style.display = "none";
}
function showStorageAlertsTable() {
    var storageSummaryTab = document.getElementsByClassName("storage-summary-tab");
    storageSummaryTab[0].className = "tab storage-summary-tab";

    var storageSummaryTable = document.getElementsByClassName("storage-summary-table");
    storageSummaryTable[0].style.display = "none";

    var storageAlertsTab = document.getElementsByClassName("storage-alerts-tab");
    storageAlertsTab[0].className = "tab storage-alerts-tab selected";

    var storageAlertsTable = document.getElementsByClassName("storage-alerts-table");
    storageAlertsTable[0].style.display = "table";
}

// when drilled into Software & Network, tabs control which table to show
function showServersSummaryTable() {
    var serversSummaryTab = document.getElementsByClassName("servers-summary-tab");
    serversSummaryTab[0].className = "tab servers-summary-tab selected";

    var serversSummaryTable = document.getElementsByClassName("servers-summary-table");
    serversSummaryTable[0].style.display = "table";

    var systemAlertsTab = document.getElementsByClassName("system-alerts-tab");
    systemAlertsTab[0].className = "tab system-alerts-tab";

    var systemAlertsTable = document.getElementsByClassName("system-alerts-table");
    systemAlertsTable[0].style.display = "none";
}
function showSystemAlertsTable() {
    var serversSummaryTab = document.getElementsByClassName("servers-summary-tab");
    serversSummaryTab[0].className = "tab servers-summary-tab";

    var serversSummaryTable = document.getElementsByClassName("servers-summary-table");
    serversSummaryTable[0].style.display = "none";

    var systemAlertsTab = document.getElementsByClassName("system-alerts-tab");
    systemAlertsTab[0].className = "tab system-alerts-tab selected";

    var systemAlertsTable = document.getElementsByClassName("system-alerts-table");
    systemAlertsTable[0].style.display = "table";
}

// when drilled into Tools, tabs control which table to show
function showReports() {
    var reportsTab = document.getElementsByClassName("reports-tab");
    reportsTab[0].className = "tab reports-tab selected";

    var reportsStuff = document.getElementsByClassName("reports-stuff");
    reportsStuff[0].style.display = "flex";

    var firmwareUpdaterTab = document.getElementsByClassName("firmware-updater-tab");
    firmwareUpdaterTab[0].className = "tab firmware-updater-tab";

    var firmwareUpdaterStuff = document.getElementsByClassName("firmware-updater-stuff");
    firmwareUpdaterStuff[0].style.display = "none";

    cameraReport();
}
function showFirmwareUpdater() {
    var reportsTab = document.getElementsByClassName("reports-tab");
    reportsTab[0].className = "tab reports-tab";

    var reportsStuff = document.getElementsByClassName("reports-stuff");
    reportsStuff[0].style.display = "none";

    var firmwareUpdaterTab = document.getElementsByClassName("firmware-updater-tab");
    firmwareUpdaterTab[0].className = "tab firmware-updater-tab selected";

    var firmwareUpdaterStuff = document.getElementsByClassName("firmware-updater-stuff");
    firmwareUpdaterStuff[0].style.display = "block";
}

// report templates
function cameraReport() {
    var template = document.getElementsByClassName("template");
    template[0].className = "template selected";
    template[1].className = "template";
    template[2].className = "template";
    template[3].className = "template";
    template[4].className = "template";
    template[5].className = "template";
    template[6].className = "template";

    var optionsBlock = document.getElementsByClassName("options-block");
    optionsBlock[0].style.display = "block";
    optionsBlock[1].style.display = "none";
    optionsBlock[2].style.display = "none";
    optionsBlock[3].style.display = "none";
    optionsBlock[4].style.display = "none";
    optionsBlock[5].style.display = "none";
    optionsBlock[6].style.display = "none";
}
function deviceReport() {
    var template = document.getElementsByClassName("template");
    template[0].className = "template";
    template[1].className = "template selected";
    template[2].className = "template";
    template[3].className = "template";
    template[4].className = "template";
    template[5].className = "template";
    template[6].className = "template";

    var optionsBlock = document.getElementsByClassName("options-block");
    optionsBlock[0].style.display = "none";
    optionsBlock[1].style.display = "block";
    optionsBlock[2].style.display = "none";
    optionsBlock[3].style.display = "none";
    optionsBlock[4].style.display = "none";
    optionsBlock[5].style.display = "none";
    optionsBlock[6].style.display = "none";
}
function healthAlertsReport() {
    var template = document.getElementsByClassName("template");
    template[0].className = "template";
    template[1].className = "template";
    template[2].className = "template";
    template[3].className = "template";
    template[4].className = "template";
    template[5].className = "template";
    template[6].className = "template selected";

    var optionsBlock = document.getElementsByClassName("options-block");
    optionsBlock[0].style.display = "none";
    optionsBlock[1].style.display = "none";
    optionsBlock[2].style.display = "none";
    optionsBlock[3].style.display = "none";
    optionsBlock[4].style.display = "none";
    optionsBlock[5].style.display = "none";
    optionsBlock[6].style.display = "block";
}