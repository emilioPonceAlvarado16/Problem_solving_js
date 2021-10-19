/**
 * Call the binarySearchHelper method and find the index of the target number
 * by using the binary search.
 * 
 * @param {array} array 
 * @param {number} target 
 * @returns 
 */
function binarySearch(array, target) {
    return binarySearchHelper(array, target,0, array.length-1);
}

/**
 * Receive the indexes, target number and the array as parameters
 * Recursive method
 * 
 * @param {array} array 
 * @param {number} target 
 * @param {number} left 
 * @param {number} right 
 * @returns 
 */
function binarySearchHelper(array, target, left, right){
	if(left>right) return -1;
	
	const middle_pointer=Math.floor((left+right)/2);
	const potential_match=array[middle_pointer];
	if(target==potential_match){
		return middle_pointer;
	}else if(target< potential_match){
		return binarySearchHelper(array, target, left, middle_pointer-1);
	}else{
		return binarySearchHelper(array, target, middle_pointer+1, right);
			
	}
	
}
exports.binarySearch = binarySearch;


const array=[0,1,21,33,45,61,71,72,73];
const target=33;
var result=binarySearch(array, target);
//should print the index 3
console.log(result);