// name array
let guestArray:string[] = ["rehan","wahaj","khalil"];

// can't make it dinner
let canNotAttend:string ="rehan";

// invite new guest
let newGuest:string ="adnan";
guestArray[guestArray.indexOf(canNotAttend)]=newGuest;

console.log("\n Hi! welcome all I found a bigger dinner table");

guestArray.unshift("jivani");

let middleGuest:string = "khurram";
let middleIndex = guestArray.length/2;
guestArray.splice(middleIndex,0,middleGuest);

guestArray.push("adil");

guestArray.map((item)=> console.log(`\nDear ${item} you are invited to dinner!`));