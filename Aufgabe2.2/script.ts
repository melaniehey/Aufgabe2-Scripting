namespace Aufgabe22 {

    //Aufgabe 1 
    //a)
    console.log("Aufgabe 1a)");

    function min(_num1: number, _num2: number, _num3: number): number {
        if (_num1 < _num2 && _num1 < _num3) {
            return _num1;
        } else if (_num2 < _num1 && _num2 < _num3) {
            return _num2;
        } else {
            return _num3;
        }
    }

    // function min2(...args: number[]): number {
        // return Math.min(args[]);
    // }
    // min2(2, 4, 4, 32, 2, 4);


    console.log(min(3, 6, 56));

    //b)
    console.log("Hier Aufgabe 1 b)");

    let safeNumber: number = -16;
    function isEven(_n: number): boolean {  //boolean
        if (_n == 0) {
            return true; //Gerade
        }
        if (_n == 1) {
            return false; //Ungerade
        }
        if (_n < 0) {
            return isEven(_n += 2);
        }
        return isEven(_n -= 2);
    }
    console.log(isEven(safeNumber));
    //Bei -1 geht es ins Unendliche, da es nie 0 oder 1 wird. Es geht immer weiter -3, -5, ...
    //Lösung ins plus gehen
    //c) 1
    interface SchoolSystem {
        firstName: string;
        lastName: string;
        gender: boolean; //true - girl, false - boy
    }

    //c) 2
    let student1: SchoolSystem = { firstName: "Melanie", lastName: "Kirchkesner", gender: true };
    // let student1: SchoolSystem = new SchoolSystem("Melanie", "Kirchkesner", true);
    let student2: SchoolSystem = { firstName: "Maik", lastName: "Dieterle", gender: false };
    let student3: SchoolSystem = { firstName: "Daisy", lastName: "Boo", gender: true };

    //c) 3
    console.log("Aufgabe 1c)-3");
    let allStudentsArray: SchoolSystem[] = [student1, student2, student3, { firstName: "Rosi", lastName: "Ne", gender: true }];  //Für Aufgabe c) 3

    console.log(allStudentsArray[3].firstName);
    console.log(student1);
    console.log(student2.firstName);
    console.log(student3.gender);

    //c) 4
    console.log("Aufgabe 1c)-4");
    function showInfo(_student: SchoolSystem): void {
        console.log("Firstname: " + _student.firstName + "\nLastname: " + _student.lastName + "\nGender: " + _student.gender);
    }
    for (let index: number = 0; index < allStudentsArray.length; index++) {
        showInfo(allStudentsArray[index]);

    }

    //c) 5
    console.log("Hier aufgabe c)-5");

    class SchoolSystem2 {
        firstName: string;
        lastName: string;
        gender: boolean; //true - girl, false - boy

        constructor(_firstname: string, _lastName: string, _gender: boolean) {
            this.firstName = _firstname;  //_firstname existiert nur im Konstrukor, Übergangsparameter
            this.lastName = _lastName;
            this.gender = _gender;
        }

        showInfo2(): void {
            console.log("Firstname: " + this.firstName + "\nLastname: " + this.lastName + "\nGender: " + this.gender);
        }
    }

    let student4: SchoolSystem2 = new SchoolSystem2("Melanie", "Kirchkesner", true);
    let student5: SchoolSystem2 = new SchoolSystem2("Maik", "Dieterle", false);
    let student6: SchoolSystem2 = new SchoolSystem2("Rosi", "Ne", true);

    let allStudentsArray2: SchoolSystem2[] = [student4, student5, student6];
    for (let index: number = 0; index < allStudentsArray2.length; index++) {
        allStudentsArray2[index].showInfo2();

    }

    //Aufgabe2 - Arrays
    //a)
    console.log("Hier aufgabe 2a)");

    let numArray: number[] = [4, 74, 21, 9, 54, 232];
    function backwards(_numbers: number[]): void {     //number[], weil es einArray mit numbers ist. [] = Array. - statt number oder string
        for (let i: number = _numbers.length; i > 0; i--) {
            console.log(_numbers[i - 1]);
        }
    }
    backwards(numArray); //funktion wird aufgerufen. funktion nutzt array von oben

    //b)
    console.log("Hier Aufgabe 2b)");

    // let numArray2: Array[] = new Array({ name: "lang", value: "English" }, { name: "age", value: "18" }); //zwei objekte

    let numArray2: number[] = [32, 6, 97, 25]; //variable definiert array
    function join(_numArray: number[], _numArray2: number[]): void {
        for (let i: number = 0; i < _numArray2.length; i++) {
            _numArray.push(_numArray2[i]);
        }
        console.log(_numArray);
    }
    join(numArray, numArray2);  //push() fügt ein Element ans Ende des Arrays an

    //c)
    console.log("Hier Aufgabe 2c)");

    let index1: number = 0;
    let index2: number = 4;
    function split(_numArray: number[], _index1: number, _index2: number): number[] {
        return _numArray.slice(_index1, _index2); //zwischen 2 und 4 ausgeben
    }
    console.log(split(numArray, index1, index2));

    //Andere Möglichkeit
    function split2(_numArray: number[], _index1: number, _index2: number): number[] {
        let result: number[] = [];
        for (let index: number = _index1; index < _index2; index++) {
            result.push(_numArray[index]);
        }
        return result;
    }
    console.log(split2(numArray, index1, index2));

    //Testcode

    // let arr: number[] = [5, 42, 17, 2018, -10, 60, -10010];
    // let arrBack: number[] = backwards(arr);
    // console.log(arr);
    // console.log(arrBack);
    // console.log(join(arr, [15, 9001, -440]));
    // console.log(join([123, 666, -911], arr, [15, 9001, -440, 1024])); // Bonus b)
    // arr = split(arr, 0, 4);
    // console.log(arr);
    // console.log(split(arr, 1, 2));
    // console.log(split(arr, 2, 0));     // Bonus c)
    // console.log(split(arr, -1, 2));    // Bonus c)
    // console.log(split(arr, 0, 7));     // Bonus c)

    //Aufgabe3
    //a)
    let canvas: HTMLCanvasElement = <HTMLCanvasElement>document.getElementById("myCanvas");
    let context: CanvasRenderingContext2D = canvas.getContext("2d");

    //LANDSCHAFT
    //Background
    context.fillStyle = "lightblue";
    context.fillRect(0, 0, 500, 300); //X-Koordin, Y-Koordin, Breite, Höhe
    context.fillStyle = "lightgreen";
    context.fillRect(0, 300, 500, 200);

    //House
    //context.lineWidth = 5;
    //context.strokeRect(75, 140, 150, 110); //Rahmen
    context.fillStyle = "purple";
    context.fillRect(75, 200, 150, 150);
    context.fillStyle = "black";
    context.fillRect(130, 290, 40, 60);

    //Roof
    context.beginPath();
    context.moveTo(50, 220);
    context.lineTo(150, 130);
    context.lineTo(250, 220);
    context.closePath();
    context.fillStyle = "black";
    context.fill();
    context.strokeStyle = "black";
    context.stroke();

    //Tree
    context.beginPath();
    context.moveTo(400, 280);
    context.lineTo(400, 450);
    context.lineWidth = 50;
    // context.lineCap = "round";
    context.strokeStyle = "brown";
    context.stroke();

    context.beginPath();
    context.arc(400, 270, 90, 0, Math.PI * 2);
    context.fillStyle = "darkgreen";
    context.fill();
    context.closePath();

    //Cloud
    context.beginPath();
    context.arc(370, 60, 20, 0, Math.PI * 2);
    context.arc(390, 80, 20, 0, Math.PI * 2);
    context.arc(390, 40, 20, 0, Math.PI * 2);
    context.arc(420, 70, 20, 0, Math.PI * 2);
    context.arc(450, 60, 20, 0, Math.PI * 2);
    context.arc(420, 50, 20, 0, Math.PI * 2);
    context.strokeStyle = "white";
    context.fill();
    context.stroke(); //färbt Wolke weiß aber verformt auch die Wolke

    //Sun
    context.beginPath();
    context.arc(canvas.width / 2, 100, 40, 0, Math.PI * 2); //x=100, y=100 ist das Zentrum des Kreises, 40 ist der Radius, 0 für Startangle, Math.PI * 2 für endangle (Wird ein geschlossener Kreis)
    context.fillStyle = "yellow";
    context.fill();

    //TEST
    //Lines
    // context.beginPath();
    // context.moveTo(40, 10);
    // context.lineTo(450, 500);
    // context.lineWidth = 15;
    // context.lineCap = "round";
    // context.stroke();

    // context.beginPath();
    // context.moveTo(40, 10);
    // context.lineTo(50, 400);
    // context.lineWidth = 10;
    // context.strokeStyle = "#FF4040";
    // context.stroke();

    // context.beginPath();
    // context.moveTo(50, 400);
    // context.lineTo(450, 70);
    // context.lineWidth = 30;
    // context.strokeStyle = "#FF4590";
    // context.stroke();

    //Curves
    // let xCurve = canvas.width / 2;
    // let yCurve = canvas.height / 2;
    // let radius = 75;
    // var startAngle = 1;
    // var endAngle = 3;
    // var startAngle = 1.1 * Math.PI;
    // var endAngle = 1.9 * Math.PI;
    // var counterClockwise = true;

    // context.beginPath();
    // context.arc(xCurve, yCurve, radius, startAngle, endAngle, counterClockwise);
    // context.lineWidth = 15;

    // context.strokeStyle = 'black';
    // context.stroke();


    // var x = canvas.width / 2;
    // var y = canvas.height / 2;
    // var radius = 75;
    // var startAngle = 1.1 * Math.PI;
    // var endAngle = 1.1 * Math.PI;
    // var counterClockwise = true;

    // context.beginPath();
    // context.arc(x, y, radius, startAngle, endAngle, counterClockwise);
    // context.lineWidth = 15;

    // context.strokeStyle = '#ff4590';
    // context.stroke();

    // //GIS Skript - Haus
    // context.lineWidth = 10;

    // context.strokeRect(75, 140, 150, 110);

    // context.fillRect(130, 190, 40, 60);

    // context.beginPath();
    // context.moveTo(50, 140);
    // context.lineTo(150, 60);
    // context.lineTo(250, 140);
    // context.closePath();
    // context.strokeStyle = '#ff9960';
    // context.stroke();

    //b) Interface
    // console.log("Hier Aufgabe 3b)");
    // interface RectangleInter {
    //     width: number;
    //     height: number;
    // }
    // let r1: RectangleInter = { width: 23, height: 63 };
    // console.log(r1);

    //b)Bonus + c) --> zufälliges Rechteck erzeugen
    let canvas2: HTMLCanvasElement = <HTMLCanvasElement>document.getElementById("mySecondCanvas");
    let context2: CanvasRenderingContext2D = canvas2.getContext("2d");

    class Rectangle {
        width: number;
        height: number;
        xCordinate: number;
        yCordinate: number;
        //Anstelle von einer Funktion kommt ein Konstruktor rein, weil Funktionen in der Klasse nicht funktionieren.
        //Konstruktor ohne Übergabeparameter?
        constructor() {    //Konstruktor gibt nie was zurück. also kein void oder number, ...
            this.createRect();
        }
        createRect(): void {
            this.width = Math.random() * 400;
            this.height = Math.random() * 400;
            this.xCordinate = Math.random() * 400;
            this.yCordinate = Math.random() * 400;
        } //bei Klassen keine "Function" schrieben

        //d)-->Funktion erstellt/malt das Rechteck
        drawRect(): void {
            context2.fillRect(this.width, this.height, this.xCordinate, this.yCordinate);
        }

    }
    //e)-->Es wird zusammengebracht
    let recArray: Rectangle[] = [];
    for (let index: number = 0; index < 5; index++) {
        recArray.push(new Rectangle);
        recArray[index].drawRect();
    }
}
