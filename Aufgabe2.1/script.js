"use strict";
//Aufgabe 1
function a1() {
    let x = "Alles";
    console.log(x); //-->Alles
    func1(); //-->Klar?
    console.log("Logo!"); //-->Logo!
}
a1(); //--> hier wird das oben abgefragt.
function func1() {
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
let x = "Alles";
function a2() {
    console.log(x); //1. Alles
    func2();
}
function func3() {
    console.log("Klar?"); //4. Klar?
    console.log(x); //5. Alles
    func4();
}
function func2() {
    console.log("Gute!"); //2. Gute!
    console.log(x); //3. Alles
    func3();
}
function func4() {
    console.log("Logo!"); //6. Logo!
}
//Aufgabe2 - Kontinuierliche Variablenmanipulation
function a3() {
    let i = 9;
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
let z = "Hallo"; //Erste Möglichkeit ein String anzulegen - bei Variable
console.log(z);
func5(z);
console.log(z);
func6();
func7();
console.log(z);
function func5(w) {
    w = "Bla";
    console.log(w);
}
function func6() {
    let z = "Blubb";
    console.log(z);
}
function func7() {
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
function multiply(_param1, _param2) {
    return _param1 * _param2;
}
console.log(multiply(2, 4));
//oder
function multiply2(_n) {
    return _n * _n;
}
console.log(multiply2(2));
//b)
function max(_a, _b) {
    if (_a < _b) {
        return _b;
    }
    else {
        return _a;
    }
}
console.log(max(12, 10));
//c)
let i = 1;
while (i <= 100) {
    console.log(i);
    i++;
}
//d)
for (let index = 0; index < 10; index++) {
    console.log(Math.floor(Math.random() * 100));
}
//e)
function factorial(_n) {
    //Zwischenspeicher
    let result = 1;
    if (_n < 1) {
        return 1;
    }
    else {
        for (let index = 1; index <= _n; index++) {
            result = result * index;
        }
        return result;
    }
}
console.log(factorial(4));
//f)
function leapyears() {
    for (let index = 1900; index <= 2021; index++) {
        if ((index % 400 == 0) || (index % 4 == 0 && index % 100 != 0)) {
            console.log(index);
        }
    }
}
leapyears();
//Aufgabe 6 - Mehr Schleifen und Funktionen
//a)
for (let index1 = 1; index1 <= 7; index1++) {
    //Zwischenspeicher
    let print = "";
    for (let index2 = 1; index2 <= index1; index2++) {
        print += "#";
    }
    console.log(print);
}
//b)
for (let index = 1; index <= 100; index++) {
    if (index % 5 == 0) {
        console.log("Buzz");
    }
    else if (index % 3 == 0) {
        console.log("Fizz");
    }
    else {
        console.log(index);
    }
}
//c)
for (let index = 1; index <= 100; index++) {
    if (index % 5 == 0 && index % 3 == 0) {
        console.log("FizzBuzz");
    }
    else {
        console.log(index);
    }
}
//zweite möglichkeit
for (let index = 1; index <= 100; index++) {
    if (index % 15 == 0) {
        console.log("FizzBuzz");
    }
    else {
        console.log(index);
    }
}
//d)
function func() {
    let result = "";
    for (let index1 = 0; index1 < 8; index1++) {
        for (let index2 = 0; index2 < 8; index2++) {
            if (index1 % 2 == 0) {
                if (index2 % 2 == 0) {
                    result += "#";
                }
                else {
                    result += " ";
                }
            }
            else {
                if (index2 % 2 == 0) {
                    result += " ";
                }
                else {
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
function chess(_n) {
    let result = "";
    for (let index1 = 0; index1 < _n; index1++) {
        for (let index2 = 0; index2 < _n; index2++) {
            if (index1 % 2 == 0) {
                if (index2 % 2 == 0) {
                    result += "#";
                }
                else {
                    result += " ";
                }
            }
            else {
                if (index2 % 2 == 0) {
                    result += " ";
                }
                else {
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
//# sourceMappingURL=script.js.map