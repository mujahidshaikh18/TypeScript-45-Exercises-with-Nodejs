// name array
var guestArray = ["rehan", "wahaj", "khalil"];
// can't make it dinner
var canNotAttend = "rehan";
// invite new guest
var newGuest = "adnan";
guestArray[guestArray.indexOf(canNotAttend)] = newGuest;
console.log("\n Hi! welcome all I found a bigger dinner table");
guestArray.unshift("jivani");
var middleGuest = "khurram";
var middleIndex = guestArray.length / 2;
guestArray.splice(middleIndex, 0, middleGuest);
guestArray.push("adil");
guestArray.map(function (item) { return console.log("\nDear ".concat(item, " you are invited to dinner!")); });
