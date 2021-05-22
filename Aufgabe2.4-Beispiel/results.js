"use strict";
// namespace Aufgabe2_4_Beispiel {
//     let selection: HumanSelection = {};
//     let storedSelection: string = localStorage.getItem("selection");
//     if (storedSelection) {
//       selection = JSON.parse(storedSelection);
//     }
//    //hier wird beschlossen was auf der letzten seite angezeigt wird
//     // let wrapper: HTMLDivElement = <HTMLDivElement>document.getElementById("displayResult"); //siehe id in result.html
//     // if (selection.face) {
//     //     //zum wrapper wird image kreiert (siehe unten) das zu dem jeweiligen face gehört
//     //   wrapper.appendChild(createImage(selection.face.image)); 
//     // } else {
//     //   wrapper.appendChild(createImage("./img/none.png"));
//     // }
//     // if (selection.body) {
//     //   wrapper.appendChild(createImage(selection.body.image));
//     // } else {
//     //   wrapper.appendChild(createImage("./img/none.png"));
//     // }
//     // if (selection.leg) {
//     //   wrapper.appendChild(createImage(selection.leg.image));
//     // } else {
//     //   wrapper.appendChild(createImage("./img/none.png"));
//     // }
//     function createImage(_src: string): HTMLImageElement {
//       let img: HTMLImageElement = document.createElement("img");
//       img.src = _src;
//       return img;
//     }
//     document.getElementById("tryagain").addEventListener("click", restart);  //siehe id in result.html
//     function restart(): void {
//       localStorage.clear();
//       window.location.assign("./");
//     }
//   }
//# sourceMappingURL=results.js.map