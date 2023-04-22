const navLink = document.getElementsByClassName('nav-link');
for (i = 0; i < navLink.length; i++) {
    navLink[i].addEventListener('mouseenter', function (e) {
        e.target.classList.add('active');
    });
    navLink[i].addEventListener('mouseleave', function (e) {
        e.target.classList.remove('active');
    });
}

function toggle(){
    let to = document.getElementById("toggle");
    to.classList.toggle("toggleh");
    let main_tog = document.getElementById("main-menu");
    main_tog.classList.toggle("nav-active");
}

let allnavlink = document.querySelectorAll(".navbar .container .mainmenu ul li");
for(i=0;i<allnavlink.length;i++){
allnavlink[i].addEventListener("click", function(){
    let to = document.getElementById("toggle");
    to.classList.remove("toggleh");
    let main_tog = document.getElementById("main-menu");
    main_tog.classList.remove("nav-active");
});
}

var cursor_1 = document.querySelector('.cursor-1');
var cursor_2 = document.querySelector('.cursor-2');

document.addEventListener("mousemove", function (e) {
    cursor_1.style.cssText = cursor_2.style.cssText = "left: " + e.pageX + "px; top: " + e.pageY + "px;";
});

function resumehover1() {
    document.getElementById('top-1').style.border = "2px solid #fff";
}
function resumeleave1() {
    document.getElementById('top-1').style.border = "2px solid transparent";
}
function resumehover2() {
    document.getElementById('top-2').style.border = "2px solid #fff";
}
function resumeleave2() {
    document.getElementById('top-2').style.border = "2px solid transparent";
}
function resumehover3() {
    document.getElementById('top-3').style.border = "2px solid #fff";
}
function resumeleave3() {
    document.getElementById('top-3').style.border = "2px solid transparent";
}
function resumehover4() {
    document.getElementById('top-4').style.border = "2px solid #fff";
}
function resumeleave4() {
    document.getElementById('top-4').style.border = "2px solid transparent";
}
function resumehover5() {
    document.getElementById('top-5').style.border = "2px solid #fff";
}
function resumeleave5() {
    document.getElementById('top-5').style.border = "2px solid transparent";
}
function resumehover6() {
    document.getElementById('top-6').style.border = "2px solid #fff";
}
function resumeleave6() {
    document.getElementById('top-6').style.border = "2px solid transparent";
}