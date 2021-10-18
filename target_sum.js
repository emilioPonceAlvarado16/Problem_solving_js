/**
 * Find two numbers inside the array as input, in order that the sum is equals to targetSum
 * O(n) time | O(n) space -where n is the length of the array.
 * 
 * @param {array} array 
 * @param {number} targetSum 
 * @returns {array}
 */

function twoNumberSum(array, targetSum) {
	
	
  
        const outPutArray=[];
        const len= array.length;
        let sum=0;
        var n1=0;
        var n2=0;
        for(var i=0;i<len;i++){
            for(var j=i+1;j<len;j++){
             n1=array[i];
             n2=array[j];
             sum=n1+n2;
            if (sum==targetSum){
                 outPutArray.push(n1);
                outPutArray.push(n2);
                return outPutArray;
            }	
            
                
            }
            
        }
        return outPutArray;
    }
    
    exports.twoNumberSum = twoNumberSum;
    const array=[3,5,-4,8,11,1,-1,6];
    const targetSum=10;
    var result=twoNumberSum(array,targetSum);    
    console.log(result);