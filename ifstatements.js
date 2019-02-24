"use strict";

/* All men are mortal
   Socrates is a man
   Therefore, socrates is mortal 
*/

var mortal = men;
var man = mortal;
var socrates = man;

if(mortal === men && man === mortal && socrates === man) {
    console.log("All men are mortal, Socrates is a man, Therefore; socrates is mortal");
}