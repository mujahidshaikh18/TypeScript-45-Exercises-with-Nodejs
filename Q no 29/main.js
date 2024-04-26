var userNames = ["Azhar", "Huraira", "Bilal", "Wahaj", "Admin"];
//using foreach loop on array
userNames.forEach(function (oneUser) {
    if (oneUser === "Admin") {
        console.log("Hello ".concat(oneUser, ", would you liketo see a status report?"));
    }
    else {
        console.log("Hello ".concat(oneUser, ", thank you for loggin in again."));
    }
});
