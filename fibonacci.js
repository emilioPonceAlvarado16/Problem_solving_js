
/**
 * Fibonacci
 * 
 * First number of the sequence is 0, second number is 1, the n Number will be (n-1) the next will be (n-2) ...
 * this returns the n number of the fibonacci sequence
 * 
 * O(2^n) time | O(n) space
 * 
 * @param {number} n 
 * @returns 
 */
function getFib(n) {
    if(n===2){
        return 1;
    }else if(n==1){
        return 0;
    }
        else{
            return getFib(n-1)+getFib(n-2);
        }
    }
    
    
    exports.getFib = getFib;

    const n=6;
    //output 5 ||| 0,1,2,3,4,5
    console.log(getFib(n));