"use strict";
var Aufgabe2_5;
(function (Aufgabe2_5) {
    //A.1 a) - von A2_5
    // let humanSelection: HumanSelection;
    // function readData(): void {
    //     humanSelection = JSON.parse(humanPartsJSON);
    // }
    // readData();
    //A.1 b)
    let humanSelection;
    async function readData(_url) {
        let response = await fetch(_url);
        console.log("Response", response);
        humanSelection = await response.json();
        auswahl(); //nextStep?
    }
    readData("https://github.com/melaniehey/Aufgabe2-Scripting/blob/main/Aufgabe2.5/data.json"); //link von github
    console.log(humanSelection);
    //Funktionen für Face, Body, Leg
    function generateFaceElement(_face) {
        let div = document.createElement("div");
        div.classList.add("step1");
        let image = document.createElement("img");
        image.src = _face.image;
        div.appendChild(image);
        let button = document.createElement("button");
        button.addEventListener("click", showeyeColour);
        button.classList.add("next");
        button.dataset.eyeColour = _face.eyeColour.toString();
        button.innerText = "eyeColour: " + _face.eyeColour;
        div.appendChild(button);
        return div;
    }
    for (let i = 0; i < humanSelection.face.length; i++) {
        let x = generateFaceElement(humanSelection.face[i]);
        document.body.appendChild(x);
    }
    function showeyeColour(_event) {
        let target = _event.target;
        for (let i = 0; i < humanSelection.face.length; i++) {
            if (humanSelection.face[i].eyeColour.toString() == target.dataset.eyeColour) {
                // console.log(humanSelection.face[i]);
            }
        }
        //A.1 b)
        sessionStorage.setItem("eyeColour", target.dataset.eyeColour);
        let imagevordemButton = target.previousSibling;
        sessionStorage.setItem("eyeColourimage", imagevordemButton.src);
        console.log(imagevordemButton.src);
    }
    function generateBodyElement(_body) {
        let div = document.createElement("div");
        div.classList.add("step2");
        let image = document.createElement("img");
        image.src = _body.image;
        div.appendChild(image);
        let button = document.createElement("button");
        button.addEventListener("click", showskinColour);
        button.classList.add("next");
        button.dataset.skinColour = _body.skinColour.toString();
        button.innerText = "skinColour: " + _body.skinColour;
        div.appendChild(button);
        return div;
    }
    function showskinColour(_event) {
        let target = _event.target;
        for (let i = 0; i < humanSelection.body.length; i++) {
            if (humanSelection.body[i].skinColour.toString() == target.dataset.skinColour) {
                // console.log(humanSelection.body[i]);
            }
        }
        //A.1 b)
        sessionStorage.setItem("skinColour", target.dataset.skinColour);
        let imagevordemButton = target.previousSibling;
        sessionStorage.setItem("skinColourimage", imagevordemButton.src);
    }
    function generateLegElement(_leg) {
        let div = document.createElement("div");
        div.classList.add("step3");
        // div.classList.add("Page3");
        let image = document.createElement("img");
        image.src = _leg.image;
        div.appendChild(image);
        let button = document.createElement("button");
        button.addEventListener("click", showshoeColour);
        button.classList.add("next");
        button.dataset.shoeColour = _leg.shoeColour.toString();
        button.innerText = "shoeColour: " + _leg.shoeColour;
        div.appendChild(button);
        return div;
    }
    function showshoeColour(_event) {
        let target = _event.target;
        for (let i = 0; i < humanSelection.leg.length; i++) {
            if (humanSelection.leg[i].shoeColour.toString() == target.dataset.shoeColour) {
                // console.log(humanSelection.leg[i]);
            }
        }
        //A.1 b)
        sessionStorage.setItem("shoeColour", target.dataset.shoeColour);
        let imagevordemButton = target.previousSibling;
        sessionStorage.setItem("shoeColourimage", imagevordemButton.src);
    }
    //A.1 b) --> bzw siehe unter den drei jeweiligen Funtionen
    //sessionStorage
    let selection = {};
    // nutzen was ich im session Storage hbae, WENN da etwas drin ist.
    let storedSelection = sessionStorage.getItem("selection");
    if (storedSelection) {
        selection = JSON.parse(storedSelection);
    }
    let nextButton = document.getElementsByClassName("next"); //--> Damit ich auf die neue "seite" kann
    let currentStep = 1;
    for (let index = 0; index < nextButton.length; index++) {
        nextButton[index].addEventListener("click", nextStep);
    }
    //A.1 c)
    function nextStep() {
        let display = document.getElementById("displayChoice");
        auswahl();
        if (currentStep == 1) {
            let step1 = document.getElementsByClassName("step1");
            for (let index = 0; index < step1.length; index) {
                // console.log(step1[index]);
                // console.log(index);
                step1[index].remove();
            }
            for (let i = 0; i < humanSelection.body.length; i++) {
                let x = generateBodyElement(humanSelection.body[i]);
                document.body.appendChild(x);
            }
            let nextButton = document.getElementsByClassName("next");
            console.log(nextButton);
            for (let index = 0; index < nextButton.length; index++) {
                nextButton[index].addEventListener("click", nextStep);
            }
            currentStep = 2;
        }
        else if (currentStep == 2) {
            let step2 = document.getElementsByClassName("step2");
            for (let index = 0; index < step2.length; index) {
                step2[index].remove();
            }
            for (let i = 0; i < humanSelection.leg.length; i++) {
                let x = generateLegElement(humanSelection.leg[i]);
                document.body.appendChild(x);
            }
            let nextButton = document.getElementsByClassName("next");
            for (let index = 0; index < nextButton.length; index++) {
                nextButton[index].addEventListener("click", nextStep);
            }
            currentStep = 3;
        }
        else if (currentStep == 3) {
            let step3 = document.getElementsByClassName("step3");
            for (let index = 0; index < step3.length; index) {
                step3[index].remove();
            }
        }
    }
    //A.d
    function auswahl() {
        let selectionPreview = document.getElementById("alreadySelected"); //siehe id in index.html
        selectionPreview.innerHTML = "";
        if (sessionStorage.getItem("eyeColourimage"))
            selectionPreview.appendChild(createImage(sessionStorage.getItem("eyeColourimage")));
        if (sessionStorage.getItem("skinColourimage"))
            selectionPreview.appendChild(createImage(sessionStorage.getItem("skinColourimage")));
        if (sessionStorage.getItem("shoeColourimage"))
            selectionPreview.appendChild(createImage(sessionStorage.getItem("shoeColourimage")));
        // if (selection.face) { //wenn ein head gewählt wurde
        //     selectionPreview.appendChild(createImage(selection.face.image)); //soll es zusehen sein
        // } else { //wenn nicht
        //     selectionPreview.appendChild(createImage("./img/none.png")); //soll es kein bild anzeigen
        // }
        // if (selection.body) {
        //     selectionPreview.appendChild(createImage(selection.body.image));
        // } else {
        //     selectionPreview.appendChild(createImage("./img/none.png"));
        // }
        // if (selection.leg) {
        //     selectionPreview.appendChild(createImage(selection.leg.image));
        // } else {
        //     selectionPreview.appendChild(createImage("./img/none.png"));
        // }
    }
    function createImage(_src) {
        //diese bilder sollen ohne button und description (div) angezeigt werden.
        let img = document.createElement("img");
        img.src = _src;
        return img;
    }
})(Aufgabe2_5 || (Aufgabe2_5 = {}));
//# sourceMappingURL=script.js.map