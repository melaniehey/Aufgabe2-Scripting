namespace Aufgabe2_4_Beispiel {

    //A.1 a)
    let humanSelection: HumanSelection;

    function readData(): void {
        humanSelection = JSON.parse(humanPartsJSON);
    }
    readData();

    //Funktionen für Face, Body, Leg
    function generateFaceElement(_face: HumanFace): HTMLDivElement {
        let div: HTMLDivElement = document.createElement("div");
        div.classList.add("step1");

        let image: HTMLImageElement = document.createElement("img");
        image.src = _face.image;
        div.appendChild(image);
        let button: HTMLButtonElement = document.createElement("button");
        button.addEventListener("click", showeyeColour);
        button.classList.add("next");
        button.dataset.eyeColour = _face.eyeColour.toString();
        button.innerText = "eyeColour: " + _face.eyeColour;
        div.appendChild(button);
        return div;
    }
    for (let i: number = 0; i < humanSelection.face.length; i++) {
        let x: HTMLElement = generateFaceElement(humanSelection.face[i]);
        document.body.appendChild(x);
    }
    function showeyeColour(_event: MouseEvent): void {
        let target: HTMLElement = <HTMLElement>_event.target;
        for (let i: number = 0; i < humanSelection.face.length; i++) {
            if (humanSelection.face[i].eyeColour.toString() == target.dataset.eyeColour) {
                // console.log(humanSelection.face[i]);
            }
        }
        //A.1 b)
        sessionStorage.setItem("eyeColour", target.dataset.eyeColour);
        let imagevordemButton: HTMLImageElement = <HTMLImageElement>target.previousSibling;
        sessionStorage.setItem("eyeColourimage", imagevordemButton.src);
        console.log(imagevordemButton.src);

    }

    function generateBodyElement(_body: HumanBody): HTMLElement {
        let div: HTMLDivElement = document.createElement("div");
        div.classList.add("step2");

        let image: HTMLImageElement = document.createElement("img");
        image.src = _body.image;
        div.appendChild(image);
        let button: HTMLButtonElement = document.createElement("button");
        button.addEventListener("click", showskinColour);
        button.classList.add("next");
        button.dataset.skinColour = _body.skinColour.toString();
        button.innerText = "skinColour: " + _body.skinColour;
        div.appendChild(button);
        return div;
    }

    function showskinColour(_event: MouseEvent): void {
        let target: HTMLElement = <HTMLElement>_event.target;
        for (let i: number = 0; i < humanSelection.body.length; i++) {
            if (humanSelection.body[i].skinColour.toString() == target.dataset.skinColour) {
                // console.log(humanSelection.body[i]);
            }
        }
        //A.1 b)
        sessionStorage.setItem("skinColour", target.dataset.skinColour);
        let imagevordemButton: HTMLImageElement = <HTMLImageElement>target.previousSibling;
        sessionStorage.setItem("skinColourimage", imagevordemButton.src);
    }

    function generateLegElement(_leg: HumanLeg): HTMLElement {
        let div: HTMLDivElement = document.createElement("div");
        div.classList.add("step3");
        // div.classList.add("Page3");

        let image: HTMLImageElement = document.createElement("img");
        image.src = _leg.image;
        div.appendChild(image);
        let button: HTMLButtonElement = document.createElement("button");
        button.addEventListener("click", showshoeColour);
        button.classList.add("next");
        button.dataset.shoeColour = _leg.shoeColour.toString();
        button.innerText = "shoeColour: " + _leg.shoeColour;
        div.appendChild(button);
        return div;
    }

    function showshoeColour(_event: MouseEvent): void {
        let target: HTMLElement = <HTMLElement>_event.target;
        for (let i: number = 0; i < humanSelection.leg.length; i++) {
            if (humanSelection.leg[i].shoeColour.toString() == target.dataset.shoeColour) {
                // console.log(humanSelection.leg[i]);
            }
        }
        //A.1 b)
        sessionStorage.setItem("shoeColour", target.dataset.shoeColour);
        let imagevordemButton: HTMLImageElement = <HTMLImageElement>target.previousSibling;
        sessionStorage.setItem("shoeColourimage", imagevordemButton.src);
    }

    //A.1 b) --> bzw siehe unter den drei jeweiligen Funtionen
    //sessionStorage
    let selection: HumanSelection = {};
    // nutzen was ich im session Storage hbae, WENN da etwas drin ist.
    let storedSelection: string = sessionStorage.getItem("selection");
    if (storedSelection) {
        selection = JSON.parse(storedSelection);
    }

    let nextButton: HTMLCollection = document.getElementsByClassName("next");  //--> Damit ich auf die neue "seite" kann
    let currentStep: number = 1;
    for (let index: number = 0; index < nextButton.length; index++) {
        nextButton[index].addEventListener("click", nextStep);
    }

    //A.1 c)
    function nextStep(): void {
        let display: HTMLDivElement = <HTMLDivElement>document.getElementById("displayChoice");
        auswahl();
        if (currentStep == 1) {
            let step1: HTMLCollection = document.getElementsByClassName("step1");

            for (let index: number = 0; index < step1.length; index) {
                // console.log(step1[index]);
                // console.log(index);

                step1[index].remove();
            }
            for (let i: number = 0; i < humanSelection.body.length; i++) {
                let x: HTMLElement = generateBodyElement(humanSelection.body[i]);

                document.body.appendChild(x);
            }

            let nextButton: HTMLCollection = document.getElementsByClassName("next");
            console.log(nextButton);

            for (let index: number = 0; index < nextButton.length; index++) {
                nextButton[index].addEventListener("click", nextStep);
            }

            currentStep = 2;
        }

        else if (currentStep == 2) {
            let step2: HTMLCollection = document.getElementsByClassName("step2");
            for (let index: number = 0; index < step2.length; index) {

                step2[index].remove();
            }
            for (let i: number = 0; i < humanSelection.leg.length; i++) {
                let x: HTMLElement = generateLegElement(humanSelection.leg[i]);

                document.body.appendChild(x);
            }

            let nextButton: HTMLCollection = document.getElementsByClassName("next");
            for (let index: number = 0; index < nextButton.length; index++) {
                nextButton[index].addEventListener("click", nextStep);
            }

            currentStep = 3;


        } else if (currentStep == 3) {
            let step3: HTMLCollection = document.getElementsByClassName("step3");
            for (let index: number = 0; index < step3.length; index) {

                step3[index].remove();
            }
        }
    }

    //A.d
    function auswahl(): void {

        let selectionPreview: HTMLElement = <HTMLElement>document.getElementById("alreadySelected"); //siehe id in index.html

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



    function createImage(_src: string): HTMLImageElement { //funktion kreiert und returnt das image, weil die DIV-Funktion von oben nicht damit funktioniert? 
        //diese bilder sollen ohne button und description (div) angezeigt werden.
        let img: HTMLImageElement = document.createElement("img");
        img.src = _src;
        return img;
    }

}