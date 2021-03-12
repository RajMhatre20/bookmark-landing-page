const SB = document.getElementById('SB');
const SS = document.getElementById('SS');
const ES = document.getElementById('ES');
const TF1 = document.getElementById('TF-1');
const TF2 = document.getElementById('TF-2');
const TF3 = document.getElementById('TF-3');

SB.classList.add('active');
SB.addEventListener('click', () => {
    TF1.style.display = "flex";
    TF2.style.display = "none";
    TF3.style.display = "none";
    SB.classList.add('active');
    SS.classList.remove('active');
    ES.classList.remove('active');
});
SS.addEventListener('click', () => {
    TF2.style.display = "flex";
    TF1.style.display = "none";
    TF3.style.display = "none";
    SS.classList.add('active');
    SB.classList.remove('active');
    ES.classList.remove('active');
});
ES.addEventListener('click', () => {
    TF3.style.display = "flex";
    TF2.style.display = "none";
    TF1.style.display = "none";
    ES.classList.add('active');
    SB.classList.remove('active');
    SS.classList.remove('active');
});


const q1 = document.getElementById('que-1');
const q2 = document.getElementById('que-2');
const q3 = document.getElementById('que-3');
const q4 = document.getElementById('que-4');
const a1 = document.getElementById('ans-1');
const a2 = document.getElementById('ans-2');
const a3 = document.getElementById('ans-3');
const a4 = document.getElementById('ans-4');
var p, svg;
q1.addEventListener('click', () => {
    svg = document.getElementById('ar1');
    p = document.getElementById("path1");
    if (a1.style.display == "") {
        a1.style.display = "block";
        svg.style.transform = "rotate(180deg)";
        p.setAttribute("stroke", " hsl(0, 94%, 66%)");
    } else {
        a1.style.display = "";
        svg.style.transform = "rotate(0deg)";
        p.setAttribute("stroke", "#5267DF");
    }
});
q2.addEventListener('click', () => {
    svg = document.getElementById('ar2');
    p = document.getElementById("path2");
    if (a2.style.display == "") {
        a2.style.display = "block";
        svg.style.transform = "rotate(180deg)";
        p.setAttribute("stroke", " hsl(0, 94%, 66%)");
    } else {
        a2.style.display = "";
        svg.style.transform = "rotate(0deg)";
        p.setAttribute("stroke", "#5267DF");
    }
});
q3.addEventListener('click', () => {
    p = document.getElementById("path3");
    svg = document.getElementById('ar3');
    if (a3.style.display == "") {
        a3.style.display = "block";
        svg.style.transform = "rotate(180deg)";
        p.setAttribute("stroke", " hsl(0, 94%, 66%)");
    } else {
        a3.style.display = "";
        svg.style.transform = "rotate(0deg)";
        p.setAttribute("stroke", "#5267DF");
    }
});
q4.addEventListener('click', () => {
    svg = document.getElementById('ar4');
    p = document.getElementById("path4");
    if (a4.style.display == "") {
        a4.style.display = "block";
        svg.style.transform = "rotate(180deg)";
        p.setAttribute("stroke", " hsl(0, 94%, 66%)");
    } else {
        a4.style.display = "";
        svg.style.transform = "rotate(0deg)";
        p.setAttribute("stroke", "#5267DF");
    }
});

const err = document.getElementById('error');
const ip = document.getElementById('form_ip');
var mailformat = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
function validateForm() {
    var x = document.forms["myForm"]["fname"].value;
    if (!x.match(mailformat)) {
        err.style.display = "block";
        ip.style.borderColor = "hsl(0, 94%, 66%)";
        return false;
    }
    return true;
}