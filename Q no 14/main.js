"use strict";
// name array
let guestArray = ["rehan", "wahaj", "khalil"];
// can't make it dinner
let canNotAttend = "rehan";
console.log(`${canNotAttend} can not make it for dinner`);
// invite new guest
let newGuest = "adnan";
guestArray[guestArray.indexOf(canNotAttend)] = newGuest;
console.log(guestArray);
// send message
guestArray.map((list) => console.log(`hello,${list} you are invited to dinner`));
