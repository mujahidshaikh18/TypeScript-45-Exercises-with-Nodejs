//define a function with a rest parameter
function make_sandwich() {
    var items = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        items[_i] = arguments[_i];
    }
    console.log("\nMaking a sandwich with the following items: \n");
    items.forEach(function (singleItem) { return console.log(singleItem); });
    console.log("\nNow Enjoy The Sandwich");
}
//call the functions 3 times with 3 different numbers of arguments
make_sandwich("chicken", "cheese", "mayogarlic", "egg");
make_sandwich("bread", "butter", "olive");
make_sandwich("bread", "butter", "chicken", "cheese", "mayogarlic", "egg");
