"use strict";
var Aufgabe2_3;
(function (Aufgabe2_3) {
    //A.c)
    // let allFacesArray: HumanFace[] = [face1, face2, face3];
    // let allBodysArray: HumanBody[] = [body1, body2, body3];
    // let allLegsArray: HumanLeg[] = [leg1, leg2, leg3];
    // let face: HumanFace
    //hier kommen alle daten/variablen/eigenschadften von allen interfaces/kategorien rein 
    //in ein Array!
    //Face (Erste Möglichkeit der Darstellung)
    let face1 = { eyeColour: "brown", accessory: "flower", image: "Bilder/Frau1Face.png" };
    let face2 = { eyeColour: "green", accessory: "earring", image: "Bilder/Frau2Face.png" };
    let face3 = { eyeColour: "black", accessory: "star-sunglasses", image: "Bilder/TypFace.png" };
    Aufgabe2_3.allFacesArray = [face1, face2, face3];
    //Body (Zweite Möglichkeit der Darstellung)
    //Funktioniert nicht:
    // export let body: HumanBody[] = [];
    // let body1: HumanBody;
    // body1.skinColour = "grey";
    // body1.image = "Bilder/Frau1Body.png";
    // body.push(body1);
    // let body2: HumanBody;
    // body2.skinColour = "green";
    // body2.image = "Bilder/Frau2Body.png";
    // body.push(body2);
    // let body3: HumanBody;
    // body3.skinColour = "black";
    // body3.image = "Bilder/TypBody.png";
    // body.push(body3);
    let body1 = { skinColour: "brown", image: "Bilder/Frau1Body.png" };
    let body2 = { skinColour: "green", image: "Bilder/Frau2Body.png" };
    let body3 = { skinColour: "black", image: "Bilder/TypBody.png" };
    Aufgabe2_3.allBodyArray = [body1, body2, body3];
    //Leg (Dritte Möglichkeit der Darstellung)
    Aufgabe2_3.leg = [];
    Aufgabe2_3.leg.push({ shoeColour: "brown", image: "Bilder/Frau1Leg.png" });
    Aufgabe2_3.leg.push({ shoeColour: "green", image: "Bilder/Frau2Leg.png" });
    Aufgabe2_3.leg.push({ shoeColour: "black", image: "Bilder/TypLeg.png" });
})(Aufgabe2_3 || (Aufgabe2_3 = {}));
//# sourceMappingURL=data.js.map