
window.onload = function() {
    setupScrollBehaivor();
};


function setupScrollBehaivor(){
    let testElements = document.getElementsByClassName('clickToScroll');

    for(let i=0;i < testElements.length;i++){
        testElements[i].addEventListener("click", scrollTo);

    }

    let titleElem = document.getElementById("name");
    titleElem.addEventListener("click",toTop);
}

function toTop(evn){
    removeAllClassInstances('active');
    document.getElementById("hi").scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"});
}
function scrollTo(evn){
    let wantedId = evn.target.getAttribute("data");
    let wantedElement = document.getElementById(wantedId);
    changeActiveStatus(evn,wantedElement);
    wantedElement.scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"});
}

function changeActiveStatus(sideBarE,mainE){
    removeAllClassInstances('active');
    mainE.classList.add("active");
}

function removeAllClassInstances(className){
    let elements = document.getElementsByClassName('active');
    for(let i=0; i< elements.length; i++){
        elements[i].classList.remove(className);
    }
}