"use strict";
var Aufgabe2_4;
(function (Aufgabe2_4) {
    let nextButton = document.getElementById("next");
    nextButton.addEventListener("click", nextStep);
    let currentStep = 1;
    //A.1 a)
    let humanSelection;
    function readData() {
        humanSelection = JSON.parse(Aufgabe2_4.humanPartsJSON);
    }
    readData();
    console.log(humanSelection);
    //funktioniert ohne daten ändern (DYNAMISCH) wenn ich noch ein face4 hinzufüge, 
    //muss ich bei der function nichts ändern-> verallgemeinert, also nur in data ändern.
    //Funktion für alles erstellt div (beingaltet image und button) das wird dann ausgegeben
    function generateFaceElement(_face) {
        let div = document.createElement("div");
        div.classList.add("step1");
        let image = document.createElement("img");
        image.src = _face.image;
        div.appendChild(image);
        let button = document.createElement("button");
        button.addEventListener("click", showeyeColour);
        button.dataset.eyeColour = _face.eyeColour.toString();
        button.innerText = "eyeColour: " + _face.eyeColour;
        div.appendChild(button);
        return div; //Speichert was man erstellt hat
    }
    //läuft durch alle faces und nimmt das auf das gedrückt wurde
    for (let i = 0; i < humanSelection.face.length; i++) {
        let x = generateFaceElement(humanSelection.face[i]);
        document.body.appendChild(x);
    }
    function showeyeColour(_event) {
        console.log(_event.target);
        let target = _event.target;
        console.log(target.dataset.eyeColour);
        for (let i = 0; i < humanSelection.face.length; i++) {
            if (humanSelection.face[i].eyeColour.toString() == target.dataset.eyeColour) {
                console.log(humanSelection.face[i]);
            }
        }
        sessionStorage.setItem("eyeColour", target.dataset.eyeColour);
    }
    //--------------
    function generateBodyElement(_body) {
        let div = document.createElement("div");
        div.classList.add("step2");
        let image = document.createElement("img");
        image.src = _body.image;
        div.appendChild(image);
        let button = document.createElement("button");
        button.addEventListener("click", showskinColour);
        button.dataset.skinColour = _body.skinColour.toString();
        button.innerText = "skinColour: " + _body.skinColour;
        div.appendChild(button);
        return div;
    }
    // for (let i: number = 0; i < allBodyArray.length; i++) {
    //     let x: HTMLElement = generateBodyElement(allBodyArray[i]);
    //     document.body.appendChild(x);
    // }
    function showskinColour(_event) {
        console.log(_event.target);
        let target = _event.target;
        console.log(target.dataset.skinColour);
        for (let i = 0; i < humanSelection.body.length; i++) {
            if (humanSelection.body[i].skinColour.toString() == target.dataset.skinColour) {
                console.log(humanSelection.body[i]);
            }
        }
        sessionStorage.setItem("skinColour", target.dataset.skinColour);
    }
    //-------------
    function generateLegElement(_leg) {
        let div = document.createElement("div");
        div.classList.add("step3");
        let image = document.createElement("img");
        image.src = _leg.image;
        div.appendChild(image);
        let button = document.createElement("button");
        button.addEventListener("click", showshoeColour);
        button.dataset.shoeColour = _leg.shoeColour.toString();
        button.innerText = "shoeColour: " + _leg.shoeColour;
        div.appendChild(button);
        return div;
    }
    // for (let i: number = 0; i < allLegArray.length; i++) {
    //     let x: HTMLElement = generateLegElement(allLegArray[i]);
    //     document.body.appendChild(x);
    // }
    function showshoeColour(_event) {
        console.log(_event.target);
        let target = _event.target;
        console.log(target.dataset.shoeColour);
        for (let i = 0; i < humanSelection.leg.length; i++) {
            if (humanSelection.leg[i].shoeColour.toString() == target.dataset.shoeColour) {
                console.log(humanSelection.leg[i]);
            }
        }
        //A1.b)
        sessionStorage.setItem("skinColour", target.dataset.skinColour);
    }
    //A.1 a)
    let myChoice = convert();
    function convert() {
        let humanParts = JSON.parse(Aufgabe2_4.humanPartsJSON);
        return humanParts;
    }
    //A.1 b) --> siehe unter den drei jeweiligen Funtionen
    //sessionStorage
    //Wert speichern
    // sessionStorage.setItem("eyeColour", "green");
    //Wert laden (bzw ausgeben, wenn man auf den Button klickt???)
    // function choice(): void {
    //     if (generateFaceElement) {
    //         console.log(sessionStorage.getItem("eyeColour"));
    //     }
    // }
    // choice();
    // function choice(_eyeColour: string, _skinColour: string, _shoeColour: string) {
    //     sessionStorage.setItem("eyeColour", _eyeColour);
    //     sessionStorage.setItem("skinColour", _skinColour);
    //     sessionStorage.setItem("shoeColour", _shoeColour);
    // }
    //--------
    // let eyeColourChoice = sessionStorage.getItem("eyeColour");
    //A.1 c) (Version 2)
    //Eine HTML Seite und wenn man auf den Button "next" klickt, 
    //baut es die seite neu auf (innerHTML Seite clear)
    function nextStep() {
        if (currentStep == 1) {
            let step1 = document.getElementsByClassName("step1");
            for (let index = 0; index < step1.length; index) {
                console.log(step1[index]);
                console.log(index);
                step1[index].remove();
            }
            for (let i = 0; i < humanSelection.body.length; i++) {
                let x = generateBodyElement(humanSelection.body[i]);
                document.body.appendChild(x);
            }
            currentStep = 2;
        }
        else if (currentStep == 2) {
            let step2 = document.getElementsByClassName("step2");
            for (let index = 0; index < step2.length; index) {
                step2[index].remove();
                console.log(index);
            }
            for (let i = 0; i < humanSelection.leg.length; i++) {
                let x = generateLegElement(humanSelection.leg[i]);
                document.body.appendChild(x);
            }
            currentStep = 3;
        }
    }
    //A.1 d)
    //Auswahl soll angezeigt werden was davor ausgewählt wurde
})(Aufgabe2_4 || (Aufgabe2_4 = {}));
//# sourceMappingURL=script.js.map