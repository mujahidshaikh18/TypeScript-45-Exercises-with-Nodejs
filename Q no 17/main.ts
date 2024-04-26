let likeTovisit:string[] = ["UAE","Canada","America","Russia","Qatar"];

 console.log("Original order:",likeTovisit);
 console.log("Alphabetical order:",[...likeTovisit].sort());
 console.log("still in original order:",likeTovisit);
 console.log("Reverse order:",[...likeTovisit].reverse());
 console.log("still in original order:",likeTovisit);
 console.log("original Array Reversed:", likeTovisit.reverse());
 console.log("Back to Original Order:",likeTovisit.reverse());

let sortedArray = ["UAE","Canada","America","Russia","Qatar"];
sortedArray.sort();
console.log(sortedArray);

sortedArray.reverse();
console.log(sortedArray);