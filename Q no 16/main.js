// name array
var guestArray = ["rehan", "wahaj", "khalil"];
// can't make it dinner
var canNotAttend = "rehan";
// invite new guest
var newGuest = "adnan";
guestArray[guestArray.indexOf(canNotAttend)] = newGuest;
guestArray.unshift("jivani");
var middleGuest = "khurram";
var middleIndex = guestArray.length / 2;
guestArray.splice(middleIndex, 0, middleGuest);
guestArray.push("adil");
console.log(guestArray);
console.log("we can invite only two people for dinner!");
while (guestArray.length > 2) {
    var removeguest = guestArray.pop();
    console.log("\nSorry ".concat(removeguest, " we can't invite you to dinner"));
}
;
guestArray.map(function (item) { return console.log("\nDear ".concat(item, " You are invited to dinner!")); });
guestArray.pop();
guestArray.pop();
console.log(guestArray);
