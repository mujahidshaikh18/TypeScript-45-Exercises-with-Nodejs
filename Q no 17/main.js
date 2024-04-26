var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var likeTovisit = ["UAE", "Canada", "America", "Russia", "Qatar"];
console.log("Original order:", likeTovisit);
console.log("Alphabetical order:", __spreadArray([], likeTovisit, true).sort());
console.log("still in original order:", likeTovisit);
console.log("Reverse order:", __spreadArray([], likeTovisit, true).reverse());
console.log("still in original order:", likeTovisit);
console.log("original Array Reversed:", likeTovisit.reverse());
console.log("Back to Original Order:", likeTovisit.reverse());
var sortedArray = ["UAE", "Canada", "America", "Russia", "Qatar"];
sortedArray.sort();
console.log(sortedArray);
sortedArray.reverse();
console.log(sortedArray);
