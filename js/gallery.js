var buttonReact = document.getElementById('react');
var buttonResp = document.getElementById('responsive');
var buttonDes = document.getElementById('design');
var projectsGridReact = document.getElementById('projects__grid-react');
var projectsGridDesign = document.getElementById('projects__grid-design');
var projectsGridResp = document.getElementById('projects__grid-responsive');
let viewp = document.documentElement.clientWidth;

projectsGridResp.style.display = 'none';


function showReact () {
    let viewp = document.documentElement.clientWidth;
    projectsGridDesign.style.display = 'none';
    projectsGridResp.style.display = 'none';
    projectsGridReact.style.display = 'grid';


    buttonResp.style.backgroundColor = "transparent";
    buttonResp.style.color = "var(--prin-color)";
    buttonResp.style.border = "1px solid #4F4F4F";

    buttonDes.style.backgroundColor = "transparent";
    buttonDes.style.color = "var(--prin-color)";
    buttonDes.style.border = "1px solid #4F4F4F";

    buttonReact.style.backgroundColor = "var(--contr-color)";
    buttonReact.style.border = "none";
    buttonReact.style.color = "var(--base-color)";

}


function showDesign () {
   let viewp = document.documentElement.clientWidth;

    projectsGridDesign.style.display= 'grid';
    projectsGridResp.style.display = 'none';
    projectsGridReact.style.display = 'none';


    buttonResp.style.backgroundColor = "transparent";
    buttonResp.style.color = "var(--prin-color)";
    buttonResp.style.border = "1px solid #4F4F4F";

    buttonReact.style.backgroundColor = "transparent";
    buttonReact.style.color = "var(--prin-color)";
    buttonReact.style.border = "1px solid #4F4F4F";

    buttonDes.style.backgroundColor = "var(--contr-color)";
    buttonDes.style.border = "none";
    buttonDes.style.color = "var(--base-color)";

}



function showResp () {
    let viewp = document.documentElement.clientWidth;
        if (viewp < 835) {
            projectsGridDesign.style.display= 'none';
            projectsGridReact.style.display = 'none';   

            projectsGridResp.style.display = 'flex';
            projectsGridResp.style.flexDirection = 'column';
            projectsGridResp.style.marginBottom = '2rem';
        } else {
            projectsGridDesign.style.display = 'none';
            projectsGridResp.style.display = 'grid';
            projectsGridReact.style.display = 'none';
        }
    
    
    buttonDes.style.backgroundColor = "transparent";
    buttonDes.style.color = "var(--prin-color)";
    buttonDes.style.border = "1px solid #4F4F4F";

    buttonReact.style.backgroundColor = "transparent";
    buttonReact.style.color = "var(--prin-color)";
    buttonReact.style.border = "1px solid #4F4F4F";

    buttonResp.style.backgroundColor = "var(--contr-color)";
    buttonResp.style.border = "none";
    buttonResp.style.color = "var(--base-color)";


}



buttonReact.addEventListener('click', showReact);
buttonDes.addEventListener('click', showDesign);
buttonResp.addEventListener('click', showResp);


