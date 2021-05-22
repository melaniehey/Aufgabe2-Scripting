"use strict";
var Aufgabe2_4_Beispiel;
(function (Aufgabe2_4_Beispiel) {
    //A1 a)
    //gespeicherte Daten/Arrays von oben im TS-Objekt in einen JSON String konvertiert:
    //generiert:
    // let myIceCream: Ice = {waffles: waffles, scoops: scoops, creams: creams};
    // console.log(JSON.stringify(myIceCream));
    //von Hand:
    Aufgabe2_4_Beispiel.humanPartsJSON = `
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
                "image": "Bilder/Frau2Body.PNG"
            },
            {
                "skinColour": "red",
                "image": "Bilder/TypBody.PNG"
            }
        ],
        "leg": [
            {
                "shoeColour": "brown",
                "image": "Bilder/Frau1Leg.PNG"
            },
            {
                "shoeColour": "green",
                "image": "Bilder/Frau2Leg.PNG"
            },
            {
                "shoeColour": "red",
                "image": "Bilder/TypLeg.PNG"
            }
        ]
    } 
    `;
})(Aufgabe2_4_Beispiel || (Aufgabe2_4_Beispiel = {}));
//# sourceMappingURL=data.js.map