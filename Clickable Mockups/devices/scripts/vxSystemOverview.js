
// THIS FILE EXISTS ONLY TO MAKE THE MOCKUP CLICKABLE

function collapseSystemDetails() {
    var collapser = document.getElementsByClassName("click-to-collapse");
    collapser[0].style.display = "none";

    var expander = document.getElementsByClassName("click-to-expand");
    expander[0].style.display = "inline-block";

    document.getElementById("systemDetails").style.display = "none";
}

function expandSystemDetails() {
    var collapser = document.getElementsByClassName("click-to-collapse");
    collapser[0].style.display = "inline-block";

    var expander = document.getElementsByClassName("click-to-expand");
    expander[0].style.display = "none";

    document.getElementById("systemDetails").style.display = "block";
}

// first health area selected by default on page load
function drillIntoArea0() {
    var area = document.getElementsByClassName("area");
    area[0].className = "area selected";
    area[1].className = "area";
    area[2].className = "area";
    area[3].className = "area";
    area[4].className = "area";

    var areaDrillIn = document.getElementsByClassName("area-drill-in");
    areaDrillIn[0].style.display = "block";
    areaDrillIn[1].style.display = "none";
    areaDrillIn[2].style.display = "none";
    areaDrillIn[3].style.display = "none";
    areaDrillIn[4].style.display = "none";

    showLicensesSummaryTable();
}

function drillIntoArea1() {
    var area = document.getElementsByClassName("area");
    area[0].className = "area";
    area[1].className = "area selected";
    area[2].className = "area";
    area[3].className = "area";
    area[4].className = "area";

    var areaDrillIn = document.getElementsByClassName("area-drill-in");
    areaDrillIn[0].style.display = "none";
    areaDrillIn[1].style.display = "block";
    areaDrillIn[2].style.display = "none";
    areaDrillIn[3].style.display = "none";
    areaDrillIn[4].style.display = "none";

    showCamerasSummaryTable();
}

function drillIntoArea2() {
    var area = document.getElementsByClassName("area");
    area[0].className = "area";
    area[1].className = "area";
    area[2].className = "area selected";
    area[3].className = "area";
    area[4].className = "area";

    var areaDrillIn = document.getElementsByClassName("area-drill-in");
    areaDrillIn[0].style.display = "none";
    areaDrillIn[1].style.display = "none";
    areaDrillIn[2].style.display = "block";
    areaDrillIn[3].style.display = "none";
    areaDrillIn[4].style.display = "none";

    showStorageSummaryTable();
}

function drillIntoArea3() {
    var area = document.getElementsByClassName("area");
    area[0].className = "area";
    area[1].className = "area";
    area[2].className = "area";
    area[3].className = "area selected";
    area[4].className = "area";

    var areaDrillIn = document.getElementsByClassName("area-drill-in");
    areaDrillIn[0].style.display = "none";
    areaDrillIn[1].style.display = "none";
    areaDrillIn[2].style.display = "none";
    areaDrillIn[3].style.display = "block";
    areaDrillIn[4].style.display = "none";

    showServersSummaryTable();
}

function drillIntoArea4() {
    var area = document.getElementsByClassName("area");
    area[0].className = "area";
    area[1].className = "area";
    area[2].className = "area";
    area[3].className = "area";
    area[4].className = "area selected";

    var areaDrillIn = document.getElementsByClassName("area-drill-in");
    areaDrillIn[0].style.display = "none";
    areaDrillIn[1].style.display = "none";
    areaDrillIn[2].style.display = "none";
    areaDrillIn[3].style.display = "none";
    areaDrillIn[4].style.display = "block";

    showReports();
}

// when drilled into Licenses, tabs control which table to show
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

// when drilled into Cameras, tabs control which table to show
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
    var camerasGridIcon = document.getElementsByClassName("cameras-grid-icon");
    camerasGridIcon[0].style.display = "none";

    var camerasListIcon = document.getElementsByClassName("cameras-list-icon");
    camerasListIcon[0].style.display = "inline";

    var camerasSummaryTable = document.getElementsByClassName("cameras-summary-table");
    camerasSummaryTable[0].style.display = "none";

    var camerasThumbnailsGrid = document.getElementsByClassName("cameras-thumbnails-grid");
    camerasThumbnailsGrid[0].style.display = "block";
}
function showCamerasTable() {
    var camerasGridIcon = document.getElementsByClassName("cameras-grid-icon");
    camerasGridIcon[0].style.display = "inline";

    var camerasListIcon = document.getElementsByClassName("cameras-list-icon");
    camerasListIcon[0].style.display = "none";

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

    var reports = document.getElementsByClassName("reports");
    reports[0].style.display = "flex";

    var firmwareUpdaterTab = document.getElementsByClassName("firmware-updater-tab");
    firmwareUpdaterTab[0].className = "tab firmware-updater-tab";

    var firmwareUpdater = document.getElementsByClassName("firmware-updater");
    firmwareUpdater[0].style.display = "none";

    var alertRulesTab = document.getElementsByClassName("alert-rules-tab");
    alertRulesTab[0].className = "tab alert-rules-tab";

    var alertRules = document.getElementsByClassName("alert-rules");
    alertRules[0].style.display = "none";

    cameraReport();
}
function showFirmwareUpdater() {
    var reportsTab = document.getElementsByClassName("reports-tab");
    reportsTab[0].className = "tab reports-tab";

    var reports = document.getElementsByClassName("reports");
    reports[0].style.display = "none";

    var firmwareUpdaterTab = document.getElementsByClassName("firmware-updater-tab");
    firmwareUpdaterTab[0].className = "tab firmware-updater-tab selected";

    var firmwareUpdater = document.getElementsByClassName("firmware-updater");
    firmwareUpdater[0].style.display = "block";

    var alertRulesTab = document.getElementsByClassName("alert-rules-tab");
    alertRulesTab[0].className = "tab alert-rules-tab";

    var alertRules = document.getElementsByClassName("alert-rules");
    alertRules[0].style.display = "none";
}
function showAlertRules() {
    var reportsTab = document.getElementsByClassName("reports-tab");
    reportsTab[0].className = "tab reports-tab";

    var reports = document.getElementsByClassName("reports");
    reports[0].style.display = "none";

    var firmwareUpdaterTab = document.getElementsByClassName("firmware-updater-tab");
    firmwareUpdaterTab[0].className = "tab firmware-updater-tab";

    var firmwareUpdater = document.getElementsByClassName("firmware-updater");
    firmwareUpdater[0].style.display = "none";

    var alertRulesTab = document.getElementsByClassName("alert-rules-tab");
    alertRulesTab[0].className = "tab alert-rules-tab selected";

    var alertRules = document.getElementsByClassName("alert-rules");
    alertRules[0].style.display = "block";
}

// when drilled into Reports, each template has different options
function cameraReport() {
    var template = document.getElementsByClassName("template");
    template[0].className = "template selected";
    template[1].className = "template";
    template[2].className = "template";
    template[3].className = "template";

    var templateOptions = document.getElementsByClassName("template-options");
    templateOptions[0].style.display = "block";
    templateOptions[1].style.display = "none";
    templateOptions[2].style.display = "none";
    templateOptions[3].style.display = "none";
}
function storageReport() {
    var template = document.getElementsByClassName("template");
    template[0].className = "template";
    template[1].className = "template selected";
    template[2].className = "template";
    template[3].className = "template";

    var templateOptions = document.getElementsByClassName("template-options");
    templateOptions[0].style.display = "none";
    templateOptions[1].style.display = "block";
    templateOptions[2].style.display = "none";
    templateOptions[3].style.display = "none";
}
function quickLogs() {
    var template = document.getElementsByClassName("template");
    template[0].className = "template";
    template[1].className = "template";
    template[2].className = "template selected";
    template[3].className = "template";

    var templateOptions = document.getElementsByClassName("template-options");
    templateOptions[0].style.display = "none";
    templateOptions[1].style.display = "none";
    templateOptions[2].style.display = "block";
    templateOptions[3].style.display = "none";
}
function healthAlertsReport() {
    var template = document.getElementsByClassName("template");
    template[0].className = "template";
    template[1].className = "template";
    template[2].className = "template";
    template[3].className = "template selected";

    var templateOptions = document.getElementsByClassName("template-options");
    templateOptions[0].style.display = "none";
    templateOptions[1].style.display = "none";
    templateOptions[2].style.display = "none";
    templateOptions[3].style.display = "block";
}