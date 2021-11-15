/* const users = ["andy","michael", "bernd"];
console.log (users);

// Array mit Automarken
const carBrands = ["BMW", "Audi", "Mercedes-Benz", "Volkswagen"];
​
// Array mit Früchten
const fruits = ["Apple", "Orange", "Banana", "Mango"];
​
// Array mit Nutzern
const users = ["John Smith", "Bob Kurk", "Chuck Simpson", "Robert Smith"];
​
/*
Anhängen von Elementen an Array
*/
/*
carBrands.push("Renault");
​
fruits.push("Coconut");
​
users.push("Bob Conners");
users.push("Tim Clarc");
​
/*
Entfernen des letzten Elements
*/
/*
carBrands.pop();
fruits.pop();
users.pop();
​
/*
Löschen von bestimmten Elementen
Splice
const carBrands = ["BMW", "Audi", "Mercedes-Benz", "Volkswagen"];
const users = ["John Smith", "Bob Kurk", "Chuck Simpson", "Robert Smith"];
*/
/*
users.splice(0, 1);
console.log(users);
*/
/*
const Vorname = [Michael];
const Nachname = [Sprotte];
var Postleitzahl = (42553);
const Zahl = [42];
const Hobby = ["Musik", "Party", "Pc"];
*/


const vorName = ["Michael", "Bernd", "Tim"];


 const nachName = ["Sprotte", "Lang", "Kurz"];



 var plz = 42553;



 const Lieblingszahl = ["42", "3", "9"];



 const Hobbies = [];


 Hobbies[0]= "Musik";
 Hobbies[1]= "Diskutieren";
 Hobbies[2]= "Commputer";


 vorName.splice(1);
 console.log(vorName);

 nachName.splice(1);
 console.log(nachName);

 console.log(plz);

 Lieblingszahl.splice(1, );
 console.log(Lieblingszahl);

 Hobbies.splice(1, 3);
 console.log(Hobbies);
