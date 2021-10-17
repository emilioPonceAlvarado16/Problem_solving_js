
/**
 *  Verify if an array is the subsequence of another.
 * @param {array} array 
 * @param {array} sequence 
 * @returns {boolean}
 */
function isValidSubsequence(array, sequence) {
    const arrayN=array.length;
        var seqIdx=0;
        const sequenceN=sequence.length;
        for(var i=0; i<arrayN;i++){
             if(array[i]==sequence[seqIdx]){
                 seqIdx++;
             }
            
        }
        return sequenceN===seqIdx;
    }
    exports.isValidSubsequence = isValidSubsequence;
    
    const array=[5,1,22,25,6,-1,8,10];
    const sequence=[1,6,-1,10];
    const result=isValidSubsequence(array,sequence);
    console.log(result);