
/**
 * 
 * Returns a sorted array of integers using the sort algorithm to sort the array
 * Best: O(n) time | O(1) space
 * Average O(n^2) time | O(1) space
 * Worst O(n^2) time | O(1) space
 * @param {array} array 
 * @returns 
 */
function insertionSort(array) {
    for(var i=1;i<array.length;i++){
          var j=i;
          while(j>0 && array[j]<array[j-1]){
              swap(j,j-1, array);
              j-=1;
          }
      }
      return array;
  }
  function swap(i,j, array){
      const temp=array[j];
      array[j]=array[i];
      array[i]=temp;
  }
  
  
  exports.insertionSort = insertionSort;
  