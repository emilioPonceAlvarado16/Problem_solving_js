
/**Return a sorted squared array 
 * O(n) time | O(n) space -where n is the length of the array.

 * @param {array} array 
 * @returns 
 */

function sortedSquaredArray(array) {
    var output=[];
   for(var i=0;i<array.length;i++){
       output.push(array[i]**2);
   }
  
   output.sort(function(a, b){return a-b});
 return output;
}

exports.sortedSquaredArray = sortedSquaredArray;

const results=sortedSquaredArray([1,8,5,8,9]);
console.log(results);