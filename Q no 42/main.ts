//define the function to show magician names
function show_magicians(magicians: string[]){
    magicians.forEach(name => console.log(name));
}

//function to make magician great through .map() it will modify array
function make_great(magicians: string[]){
    return magicians.map(name => `The Great ${name}`);
}

//define an array of magician names
let magicians_names = ["Yaqoob","John","Peter","Smith"]

//making a copy of orignal array through .slice function
let copy_magician_names = magicians_names.slice()

//modifiy the copied array to include "The Great" with their names
let copy_great_names = make_great(copy_magician_names);

//Original
console.log("\nOrinal Array\n");
show_magicians(magicians_names);

//copied
console.log("\nCopied Array");
show_magicians(copy_great_names)