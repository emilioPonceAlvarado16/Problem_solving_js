/**
 * Competition array represents 1vs1 competition using a programming language, 
 * and the results array represents the result of that competition, the index of the results array 
 * is the same for the competition array.
 * if result[i]==0 means that the first team lose else means that the second team lose and the other team wins.
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
      var home="";
      var away="";
      for(var i=0;i<len;i++){
        home=competitions[i][0];
        away=competitions[i][1];
          if(results[i]==1){
             
              register[home]=register[home] ? register[home] + 1 : 1;
              if(register[home]>=max){
                  max=register[home];
                  output=home;
              }
          }
          else{
                          register[away]=register[away] ? register[away] + 1 : 1;
                  if(register[away]>=max){
                          max=register[away];
                  output=away;
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