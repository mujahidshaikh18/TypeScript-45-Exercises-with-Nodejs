// name array
let guestArray:string[] = ["rehan","wahaj","khalil"];

// can't make it dinner
let canNotAttend:string ="rehan";
console.log(`${canNotAttend} can not make it for dinner`);

// invite new guest
let newGuest:string ="adnan";
guestArray[guestArray.indexOf(canNotAttend)]=newGuest;

console.log(guestArray);

// send message
guestArray.map((list)=> console.log(`hello,${list} you are invited to dinner`));