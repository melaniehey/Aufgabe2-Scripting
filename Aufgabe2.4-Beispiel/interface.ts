namespace Aufgabe2_4_Beispiel {

    export interface HumanSelection {

        face?: HumanFace[];
        body?: HumanBody[];
        leg?: HumanLeg[];
        // ? ist notwendig wegen A1 b)
    }

    export interface Human {
        face: HumanFace;
        body: HumanBody;
        leg: HumanLeg;
        image: string; //wegen allgemeine Funktion hinzugefügt
    }

    export interface HumanFace {
        eyeColour: string;
        image: string;
    }

    export interface HumanBody {
        skinColour: string;
        image: string;
    }

    export interface HumanLeg {
        shoeColour: string;
        image: string;
    }
}