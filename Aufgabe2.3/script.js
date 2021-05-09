"use strict";
var Aufgabe2_3;
(function (Aufgabe2_3) {
    //A.1
    function recFunc() {
        let rectangle = document.createElement("div");
        let recContainer = document.getElementById("recContainer");
        rectangle.classList.add("recClass"); //ClassList setzt eine Klasse, wo alle Rectangles dazu gehören
        rectangle.style.height = (Math.random() * 100).toString() + "px";
        rectangle.style.width = (Math.random() * 100).toString() + "px";
        recContainer.append(rectangle);
    }
    for (let index = 0; index < 5; index++) {
        recFunc();
    }
    let addR = document.querySelector("#addRec");
    addR.addEventListener("click", recFunc);
    //Listener installieren für den zweiten Button
    let reset = document.querySelector("#window");
    reset.addEventListener("click", resetWindow);
    function resetWindow(_event) {
        location.reload();
    }
    //A3 b)
    // function bestimmeGesicht(_eyeColour: HumanFace): HTMLElement {  //funktioniert ohne daten ändern (DYNAMISCH) wenn ich noch ein face4 hinzufüge, muss ich bei der function nichts ändern-> veralgemeinert, also nur in data ändern
    //     let div: HTMLDivElement = document.createElement("div");
    //     let image: HTMLImageElement = document.createElement("img");
    //     image.src = _eyeColour.image;
    //     div.appendChild(image);
    //     let button: HTMLButtonElement = document.createElement("button");
    //     button.innerText = "eyeColour: " + _eyeColour;
    //     div.appendChild(button);
    //     //Funktion für alles erstellt div (beingaltet image und button) das wird dann ausgegeben
    //     //
    //     return div; //Speichert was man erstellt hat
    // }
    // //läuft durch alle faces und nimmt das auf das gedrückt wurde
    // for (let i: number = 0; i < allFacesArray.length; i++) {
    //     let x: HTMLElement = bestimmeGesicht(allFacesArray[i]);
    //     document.body.appendChild(x);
    // }
    // document.addEventListener("click", showeyeColour);
    //b)
    //funktioniert ohne daten ändern (DYNAMISCH) wenn ich noch ein face4 hinzufüge, 
    //muss ich bei der function nichts ändern-> veralgemeinert, also nur in data ändern.
    //Funktion für alles erstellt div (beingaltet image und button) das wird dann ausgegeben
    function generateFaceElement(_face) {
        let div = document.createElement("div");
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
    for (let i = 0; i < Aufgabe2_3.allFacesArray.length; i++) {
        let x = generateFaceElement(Aufgabe2_3.allFacesArray[i]);
        document.body.appendChild(x);
    }
    //c)
    function showeyeColour(_event) {
        console.log(_event.target);
        let target = _event.target;
        console.log(target.dataset.eyeColour);
        for (let i = 0; i < Aufgabe2_3.allFacesArray.length; i++) {
            if (Aufgabe2_3.allFacesArray[i].eyeColour.toString() == target.dataset.eyeColour) {
                console.log(Aufgabe2_3.allFacesArray[i]);
            }
        }
    }
})(Aufgabe2_3 || (Aufgabe2_3 = {}));
//# sourceMappingURL=script.js.map