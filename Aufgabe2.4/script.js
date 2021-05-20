"use strict";
var Aufgabe2_4;
(function (Aufgabe2_4) {
    //A.1 a)
    let humanSelection;
    function readData() {
        humanSelection = JSON.parse(Aufgabe2_4.humanPartsJSON);
    }
    readData();
    // console.log(humanSelection);
    //Alle 3 Funktionen in einer (mach ich nicht weil die ClassList1, 2, 3 nicht funktionieren. Ist mir nicht wert die Aufgabe1 c) umzuschreiben)
    // function generateAllHumanElements(_humanParts: Human): HTMLElement {
    //     let div: HTMLDivElement = document.createElement("div");
    //     //ClassList 1, 2, 3 ???
    //     let image: HTMLImageElement = document.createElement("img");
    //     image.src = _humanParts.image;
    //     div.appendChild(image);
    //     let button: HTMLButtonElement = document.createElement("button");
    //     button.addEventListener("click", showeyeColour);
    //     // button.dataset.face = _humanParts.face.toString();  //Wird nicht mehr gebraucht da die Auswahl nicht mehr in der Konsole ausgegeben werden muss
    //     button.innerText = _humanParts.description;  //description: Bei der data.ts statt eyeColour und skinColour einfach mit "description" benennen. Dann kann man das da einsetzten und es wir auch allgemein.
    //     div.appendChild(button);
    //     return div;
    // }
    //Einzelne Funktionen
    //funktioniert ohne daten ändern (DYNAMISCH) wenn ich noch ein face4 hinzufüge, 
    //muss ich bei der function nichts ändern-> verallgemeinert, also nur in data ändern.
    //Funktion für alles erstellt div (beingaltet image und button) das wird dann ausgegeben
    function generateFaceElement(_face) {
        let div = document.createElement("div");
        div.classList.add("step1");
        // div.classList.add("Page1");
        let image = document.createElement("img");
        image.src = _face.image;
        div.appendChild(image);
        let button = document.createElement("button");
        button.addEventListener("click", showeyeColour);
        button.classList.add("next");
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
        // console.log(_event.target);
        let target = _event.target;
        // console.log(target.dataset.eyeColour);
        for (let i = 0; i < humanSelection.face.length; i++) {
            if (humanSelection.face[i].eyeColour.toString() == target.dataset.eyeColour) {
                // console.log(humanSelection.face[i]);
            }
        }
        sessionStorage.setItem("eyeColour", target.dataset.eyeColour);
    }
    //--------------
    function generateBodyElement(_body) {
        let div = document.createElement("div");
        div.classList.add("step2");
        // div.classList.add("Page2");
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
    // for (let i: number = 0; i < humanSelection.body.length; i++) {
    //     let x: HTMLElement = generateBodyElement(humanSelection.body[i]);
    //     document.body.appendChild(x);
    // }
    function showskinColour(_event) {
        // console.log(_event.target);
        let target = _event.target;
        // console.log(target.dataset.skinColour);
        for (let i = 0; i < humanSelection.body.length; i++) {
            if (humanSelection.body[i].skinColour.toString() == target.dataset.skinColour) {
                // console.log(humanSelection.body[i]);
            }
        }
        sessionStorage.setItem("skinColour", target.dataset.skinColour);
    }
    //-------------
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
    // for (let i: number = 0; i < humanSelection.leg.length; i++) {
    //     let x: HTMLElement = generateLegElement(humanSelection.leg[i]);
    //     document.body.appendChild(x);
    // }
    function showshoeColour(_event) {
        // console.log(_event.target);
        let target = _event.target;
        // console.log(target.dataset.shoeColour);
        for (let i = 0; i < humanSelection.leg.length; i++) {
            if (humanSelection.leg[i].shoeColour.toString() == target.dataset.shoeColour) {
                // console.log(humanSelection.leg[i]);
            }
        }
        //A1.b)
        sessionStorage.setItem("shoeColour", target.dataset.shoeColour);
    }
    //A.1 b) --> bzw siehe unter den drei jeweiligen Funtionen
    //sessionStorage
    // let selection: HumanSelection = {};
    // // nutzen was ich im session Storage hbae, WENN da etwas drin ist.
    // let storedSelection: string = sessionStorage.getItem("selection");
    // if (storedSelection) {
    //     selection = JSON.parse(storedSelection);
    // }
    let nextButton = document.getElementsByClassName("next"); //--> Damit ich auf die neue "seite" kann
    let currentStep = 1;
    for (let index = 0; index < nextButton.length; index++) {
        nextButton[index].addEventListener("click", nextStep);
    }
    //A.1 c) (Version 2)
    //Eine HTML Seite und wenn man auf den Button "next" klickt, 
    //baut es die seite neu auf (innerHTML Seite clear)
    function nextStep() {
        let display = document.getElementById("displayChoice");
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
                // console.log(index);
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
    //A.1 d)
    //soll angezeigen was bisher ausgewählt wurde
    let previousChoice = document.getElementById("c");
    previousChoice.classList.add("allPreviousChoices");
    if (document.querySelector("title").getAttribute("id") == "step2") { //Step2 oder page2?
        let choiceImage = document.createElement("img");
        choiceImage.src = sessionStorage.getItem("eyeColour");
        previousChoice.appendChild(choiceImage);
    }
    else if (document.querySelector("title").getAttribute("id") == "step3") {
        let choiceImage = document.createElement("img");
        choiceImage.src = sessionStorage.getItem("eyeColour");
        previousChoice.appendChild(choiceImage);
        let choiceImage2 = document.createElement("img");
        choiceImage2.src = sessionStorage.getItem("skinColour");
        previousChoice.appendChild(choiceImage2);
    }
    else if (document.querySelector("title").getAttribute("id") == "step4") {
        let choiceImage = document.createElement("img");
        choiceImage.src = sessionStorage.getItem("eyeColour");
        previousChoice.appendChild(choiceImage);
        let choiceImage2 = document.createElement("img");
        choiceImage2.src = sessionStorage.getItem("skinColour");
        previousChoice.appendChild(choiceImage2);
        let choiceImage3 = document.createElement("img");
        choiceImage3.src = sessionStorage.getItem("shoeColour");
        previousChoice.appendChild(choiceImage3);
    }
    //A2
    let choiceImage = document.createElement("img");
    choiceImage.src = sessionStorage.getItem("eyeColour");
    choiceImage.src = sessionStorage.getItem("skinColour");
    choiceImage.src = sessionStorage.getItem("shoeColour");
    previousChoice.appendChild(choiceImage);
})(Aufgabe2_4 || (Aufgabe2_4 = {}));
//# sourceMappingURL=script.js.map