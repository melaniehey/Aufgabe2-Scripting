"use strict";
var Aufgabe2_4;
(function (Aufgabe2_4) {
    // //Face (Erste Möglichkeit der Darstellung)
    // let face1: HumanFace = { eyeColour: "brown", image: "Bilder/Frau1Face.png" };
    // let face2: HumanFace = { eyeColour: "green", image: "Bilder/Frau2Face.png" };
    // let face3: HumanFace = { eyeColour: "black", image: "Bilder/TypFace.png" };
    // export let allFacesArray: HumanFace[] = [face1, face2, face3];
    // //Bilder werden bei github pages nicht anngezeigt. wenn ich die index.html datei in den Browser ziehe schon 
    // //Body (Zweite Möglichkeit der Darstellung)
    // let body1: HumanBody = { skinColour: "brown", image: "Bilder/Frau1Body.png" };
    // let body2: HumanBody = { skinColour: "green", image: "Bilder/Frau2Body.png" };
    // let body3: HumanBody = { skinColour: "black", image: "Bilder/TypBody.png" };
    // export let allBodyArray: HumanBody[] = [body1, body2, body3];
    // //Leg (Dritte Möglichkeit der Darstellung)
    // let leg1: HumanLeg = { shoeColour: "brown", image: "Bilder/Frau1Leg.png" };
    // let leg2: HumanLeg = { shoeColour: "green", image: "Bilder/Frau2Leg.png" };
    // let leg3: HumanLeg = { shoeColour: "black", image: "Bilder/TypLeg.png" };
    // export let allLegArray: HumanLeg[] = [leg1, leg2, leg3];
    //A1 a)
    //gespeicherte Daten/Arrays von oben im TS-Objekt in einen JSON String konvertiert:
    //generiert:
    // let myIceCream: Ice = {waffles: waffles, scoops: scoops, creams: creams};
    // console.log(JSON.stringify(myIceCream));
    //von Hand:
    Aufgabe2_4.humanPartsJSON = `
        {
        "face": [
        
            {
                "eyeColour": "brown",
                "image": "Bilder/Frau1Face.PNG"
            },
            {
                "eyeColour": "green",
                "image": "Bilder/Frau2Face.PNG"
            },
            {
                "eyeColour": "red",
                "image": "Bilder/TypFace.PNG"
            }
        ],
        "body": [
            {
                "skinColour": "brown",
                "image": "Bilder/Frau1Body.PNG"
            },
            {
                "skinColour": "green",
                "image": "Bilder/Frau2Body.png"
            },
            {
                "skinColour": "red",
                "image": "Bilder/TypBody.png"
            }
        ],
        "leg": [
            {
                "shoeColour": "brown",
                "image": "Bilder/Frau1Leg.png"
            },
            {
                "shoeColour": "green",
                "image": "Bilder/Frau2Leg.png"
            },
            {
                "shoeColour": "red",
                "image": "Bilder/TypLeg.png"
            }
        ]
    } 
    `;
})(Aufgabe2_4 || (Aufgabe2_4 = {}));
//# sourceMappingURL=data.js.map