console.log("Hello World!");

let viz;
const exportpdfbutton = document.getElementById("exportPDF");
const exportpptbutton =  document.getElementById("exportppt");
const filterbutton = document.getElementById("filterbutton")
const viz_loc = document.getElementById("vizContainer"); 
const url = "https://public.tableau.com/views/WOW2023_Week26/Dashboard1?:language=en-US&:display_count=n&:origin=viz_share_link";
const  options = {
    device: "desktop", 
    height: "800px",
    width: "1000px",
};

function initViz() {
    viz = new tableau.Viz(viz_loc, url, options);
}

document.addEventListener("DOMContentLoaded", initViz);

function exportPDFfunc(){
    viz.showExportPDFDialog();
}

function exportpptfunc(){
    viz.showExportPowerPointDialog();
}

function getrangevalue() {
    const minvalue = document.getElementById("minValue").value;
    const maxvalue = document.getElementById("maxValue").value;
    console.log(minvalue, maxvalue)

    const workbook = viz.getWorkbook();
    const activesheet = workbook.getActiveSheet();
    const sheets = activesheet.getWorksheets();
    console.log(sheets);
    const sheetToFilter = sheets[0];
    console.log(sheetToFilter);
    sheetToFilter.applyRangeFilterAsync("[Ice Extent vs Normal [MSM]]]",{min:minvalue, max:maxvalue}).then(alert("Filtered!"));
}

exportpdfbutton.addEventListener("click", exportPDFfunc)
exportpptbutton.addEventListener("click", exportpptfunc)
filterbutton.addEventListener("click", getrangevalue)

