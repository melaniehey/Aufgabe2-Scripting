//Aufgabe 1
function a1(): void {
    let x: string = "Alles";
    console.log(x);             //-->Alles
    func1();                    //-->Klar?
    console.log("Logo!");       //-->Logo!
}

a1();                           //--> hier wird das oben abgefragt.

function func1(): void {
    console.log("Klar?");
}

/* 
a) Ausgabe
Alles
Klar?
Logo?
Welche Variablennamen sind zulässig, welche nicht?
Ziffern von 0-9, alle Groß- und Kleinbuchstanben, $ und _ funktionieren. 
Es darf nur nicht mit einer Zahl beginnen oder Leerzeichen und Bindestriche enthalten.
Auch darf man keine Schlüsselwörter nutzen.

b)Verfolgen Sie, welcher Codeabschnitt wann ausgeführt wird und in welcher Reihenfolge 
die Funktionen aufgerufen werden.
*/
//c) ODER WIE BEI AUFGABE 4
let x: string = "Alles";
function a2(): void {
    console.log(x);                 //1. Alles
    func2();
}
function func3(): void {
    console.log("Klar?");           //4. Klar?
    console.log(x);                 //5. Alles
    func4();
}

function func2(): void {
    console.log("Gute!");            //2. Gute!
    console.log(x);                  //3. Alles
    func3();
}
function func4(): void {
    console.log("Logo!");            //6. Logo!
}

//Aufgabe2 - Kontinuierliche Variablenmanipulation
function a3(): void {
    let i: number = 9;

    do {
        console.log(i);
        i = i - 1;
    } while (i > 0);
}
a3();
/*Do-Schleife läuft 1x durch und gibt aus wie groß i momentan ist, also 9.
Dann wird gerechnet 9 - 1 = 8. So lang, wie i größer als 0 ist, geht die
Schleife weiter durch. Wenn 1-1=0 gerechnet wird, bricht die Schleife ab. 
Ausgegeben wird 9, 8, 7, 6, 5, 4, 3, 2, 1.
*/

//Aufgabe 3 - Fehler erkennen und vermeiden lernen
//a)

//Aufgabe 4 - Gobal vs Lokal
let z: string = "Hallo";            //Erste Möglichkeit ein String anzulegen - bei Variable
console.log(z);
func5(z);               
console.log(z);
func6();
func7();
console.log(z);

function func5(w: string): void {   //Zweite Möglichkeit ein String anzulegen - bei Funktion
    w = "Bla";
    console.log(w);
}

function func6(): void {
    let z: string = "Blubb";
    console.log(z);
}

function func7(): void {
    z = "Test";
}

/*a)Ausgabe:
Hallo, Bla, Hallo, Blubb, Test

b)Unterschied zwischen globalen Variablen, lokalen Variablen und Übergabeparametern:
Eine lokale Variable ist eine Variable, die nur innerhalb einer Funktionsdefinition 
benutzt wird. Beachte: Die Parameter einer Funktion gehören auch zu diesen lokalen 
Variablen.
Eine globale Variable ist eine Variable, die im Hauptprogramm eingeführt wird.

Inwiefern unterscheiden sich “normale” Variablen wie Zahlen und strings von 
Funktionen? Inwiefern sind sie gleich?
Bei Funktionen wird ein Block mit einer Anweisung ausgeführt und kann an einer 
anderen Stelle Aufgerufen werden. Es kann auch was auswerfen (Wert) oder auch nichts (void).
Variablen sind Schpeicherplätze mit Schlüsselwörter/namen die man zum Teil frei 
wählen kann. Diese können unterschiedlche Typen sein und Werte besitzen. 
Gleich sind sie bei der Namensgebung, da sind beide relativ frei.
*/

//Aufgabe 5 - Schleifen, Funktionen und andere Kontrollstrukturen
//a)
let _param1: number = 2;
let _param2: number = 5;
function multiply(): number {
    return _param1 * _param2;
}
console.log(multiply());
//oder
function multiply2(_n: number): number {
    return _n * _n;
}
console.log(multiply2(2));


//b)
function max(_a: number, _b: number): number {
    if (_a < _b) {
        return _b;
    } else {
        return _a;
    }
}
console.log(max(12, 10));
//c)
let i: number = 1;
while (i <= 100) {
    console.log(i);

    i++;
}
//d)
for (let index: number = 0; index < 10; index++) {
    console.log(Math.floor(Math.random() * 100));
}
//e)
function factorial(_n: number): number {
    //Zwischenspeicher
    let result: number = 1;

    if (_n < 1) {
        return 1;
    } else {
        for (let index: number = 1; index <= _n; index++) {
            result = result * index;
        }

        return result;
    }
}

console.log(factorial(4));
//f)
function leapyears(): void {
    for (let index: number = 1900; index <= 2021; index++) {
        if ((index % 400 == 0) || (index % 4 == 0 && index % 100 != 0)) {
            console.log(index);
        }
    }
}

leapyears();
//Aufgabe 6 - Mehr Schleifen und Funktionen
//a)
for (let index1: number = 1; index1 <= 7; index1++) {
    //Zwischenspeicher
    let print: string = "";

    for (let index2: number = 1; index2 <= index1; index2++) {
        print += "#";
    }

    console.log(print);
}

//b)
for (let index: number = 1; index <= 100; index++) {
    if (index % 5 == 0) {
        console.log("Buzz");
    } else if (index % 3 == 0) {
        console.log("Fizz");
    } else {
        console.log(index);
    }
}

//c)
for (let index: number = 1; index <= 100; index++) {
    if (index % 5 == 0 && index % 3 == 0) {
        console.log("FizzBuzz");
    } else {
        console.log(index);
    }
}
//zweite möglichkeit
for (let index: number = 1; index <= 100; index++) {
    if (index % 15 == 0) {
        console.log("FizzBuzz");
    } else {
        console.log(index);
    }
}

//d)
function func(): void {
    let result: string = "";


    for (let index1: number = 0; index1 < 8; index1++) {

        for (let index2: number = 0; index2 < 8; index2++) {

            if (index1 % 2 == 0) {
                if (index2 % 2 == 0) {
                    result += "#";
                } else {
                    result += " ";
                }
            } else {
                if (index2 % 2 == 0) {
                    result += " ";
                } else {
                    result += "#";
                }
            }

           
        }

        //Zeilenumbruch
        result += "\n";
    }

    console.log(result);
}

func();


//e)
function chess(_n: number): void {
    let result: string = "";


    for (let index1: number = 0; index1 < _n; index1++) {

        for (let index2: number = 0; index2 < _n; index2++) {

            if (index1 % 2 == 0) {
                if (index2 % 2 == 0) {
                    result += "#";
                } else {
                    result += " ";
                }
            } else {
                if (index2 % 2 == 0) {
                    result += " ";
                } else {
                    result += "#";
                }
            }

           
        }

        //Zeilenumbruch
        result += "\n";
    }

    console.log(result);
}

chess(13);