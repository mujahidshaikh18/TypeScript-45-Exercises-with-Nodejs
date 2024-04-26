//define the function to show magician names
function show_magicians(magicians) {
    magicians.forEach(function (name) { return console.log(name); });
}
//function to make magician great through .map() it will modify array
function make_great(magicians) {
    return magicians.map(function (name) { return "The Great ".concat(name); });
}
//define an array of magician names
var magicians_names = ["Yaqoob", "John", "Peter", "Smith"];
//making a copy of orignal array through .slice function
var copy_magician_names = magicians_names.slice();
//modifiy the copied array to include "The Great" with their names
var copy_great_names = make_great(copy_magician_names);
//Original
console.log("\nOrinal Array\n");
show_magicians(magicians_names);
//copied
console.log("\nCopied Array");
show_magicians(copy_great_names);
