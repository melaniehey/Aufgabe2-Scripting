namespace Aufgabe2_3 {
    //A.1
    function recFunc(): void {
        let rectangle: HTMLDivElement = document.createElement("div");
        let recContainer: HTMLElement = document.getElementById("recContainer");
        rectangle.classList.add("recClass"); //ClassList setzt eine Klasse, wo alle Rectangles dazu gehören
        rectangle.style.height = (Math.random() * 100).toString() + "px";
        rectangle.style.width = (Math.random() * 100).toString() + "px";
        recContainer.append(rectangle);

    }
    for (let index: number = 0; index < 5; index++) {
        recFunc();
    }

    let addR: HTMLElement = document.querySelector("#addRec");
    addR.addEventListener("click", recFunc);

    //Listener installieren für den zweiten Button

    let reset: HTMLElement = document.querySelector("#window");
    reset.addEventListener("click", resetWindow);

    function resetWindow(_event: Event): void {
        location.reload();
    }

    //A.2a) + b)
    export interface Human {
        face: HumanFace;
        body: HumanBody;
        leg: HumanLeg;

    }

    export interface HumanFace {
        eyeColour: string;
        accessory: string;
        image: string;
    }


    export interface HumanBody {
        skinColour: string;
        image: string;
    }

    // let body1: HumanBody = { skinColour: "brown" };
    // let body2: HumanBody = { skinColour: "green" };
    // let body3: HumanBody = { skinColour: "black" };

    // let allBodysArray: HumanBody[] = [body1, body2, body3];

    export interface HumanLeg {
        shoeColour: string;
        image: string;
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
    function generateFaceElement(_face: HumanFace): HTMLElement {
        let div: HTMLDivElement = document.createElement("div");

        let image: HTMLImageElement = document.createElement("img");
        image.src = _face.image;
        div.appendChild(image);
        let button: HTMLButtonElement = document.createElement("button");
        button.addEventListener("click", showeyeColour);
        button.dataset.eyeColour = _face.eyeColour.toString();
        button.innerText = "eyeColour: " + _face.eyeColour;
        div.appendChild(button);

        return div; //Speichert was man erstellt hat
    }
    //läuft durch alle faces und nimmt das auf das gedrückt wurde
    for (let i: number = 0; i < allFacesArray.length; i++) {
        let x: HTMLElement = generateFaceElement(allFacesArray[i]);

        document.body.appendChild(x);
    }

    //c)
    function showeyeColour(_event: MouseEvent): void {

        console.log(_event.target);

        let target: HTMLElement = <HTMLElement>_event.target;
        console.log(target.dataset.eyeColour);


        for (let i: number = 0; i < allFacesArray.length; i++) {

            if (allFacesArray[i].eyeColour.toString() == target.dataset.eyeColour) {
                console.log(allFacesArray[i]);

            }
        }
    }
}