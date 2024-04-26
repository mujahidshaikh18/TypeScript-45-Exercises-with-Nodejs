// name array
let guestArray:string []= ["rehan","wahaj","khalil"];

// can't make it dinner
let canNotAttend:string ="rehan";

// invite new guest
let newGuest:string ="adnan";
guestArray  [guestArray.indexOf(canNotAttend)] = newGuest;

guestArray.unshift("jivani");

let middleGuest:string = "khurram";
let middleIndex = guestArray.length/2;
guestArray.splice(middleIndex,0,middleGuest);

guestArray.push("adil");
console.log(guestArray);

console.log("we can invite only two people for dinner!");

while(guestArray.length>2){
    let removeguest = guestArray.pop();
    console.log(`\nSorry ${removeguest} we can't invite you to dinner`);
};

guestArray.map((item)=> console.log(`\nDear ${item} You are invited to dinner!`));

guestArray.pop();
guestArray.pop();
console.log(guestArray);