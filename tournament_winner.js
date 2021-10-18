/**
 * Competition array represents 1vs1 competition using a programming language, 
 * and the results array represents the result of that competition, the index of the results array 
 * is the same for the competition array.
 * 
 * Returns the programming language which has more winning frequency
 * 
 * @param {array} competitions 
 * @param {array} results 
 * @returns {string}
 */

function tournamentWinner(competitions, results) {
    var register={};
      var max=0;
      var output=""
      const len=competitions.length;
  
      for(var i=0;i<len;i++){
          if(results[i]==1){
              register[competitions[i][0]]=register[competitions[i][0]] ? register[competitions[i][0]] + 1 : 1;
              if(register[competitions[i][0]]>=max){
                  max=register[competitions[i][0]];
                  output=competitions[i][0];
              }
          }
          else{
                          register[competitions[i][1]]=register[competitions[i][1]] ? register[competitions[i][1]] + 1 : 1;
                  if(register[competitions[i][1]]>=max){
                          max=register[competitions[i][1]];
                  output=competitions[i][1];
              }
          }
      
          
      }
      
      
      
      return output;
  
      
  }
  

  exports.tournamentWinner = tournamentWinner;
  const competition=[["HTML", "C#"],
  ["C#", "Python"],
  ["Python", "HTML"],
];
const results=[0,0,1];
const result=tournamentWinner(competition,results)

  console.log(result);