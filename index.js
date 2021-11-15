let vName = "Osei";
let nName = "Makangu";

let pZahl = 51379;
let lZahl = 3;

const Hobbies = ["Musik","Sport","Serien"];
const zahl = [316, 146, 231];

console.log(vName);
console.log(nName);
console.log(pZahl);
console.log(lZahl);
console.log(Hobbies);
console.log(zahl);

Hobbies.push("Lesen");
Hobbies.push("Gemeinschaft");

Hobbies.splice(2, 1);
console.log(Hobbies);

Hobbies.push("arbeiten");
console.log(Hobbies);
Hobbies.pop();
console.log(Hobbies);