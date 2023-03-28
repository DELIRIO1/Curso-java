//'use strict'; // ativando modo restrito para o script

/*
function logger () {
    console.log('My name is Jonas');
}

logger();
logger();
logger();

 function fruitProcessor(apples , oranges){
    console.log(apples, oranges);
    const juice = `Juice whith ${apples} apples and ${oranges} oranges.`;
    return juice;

 }

 const appleJuice = fruitProcessor(5, 0);
 console.log(appleJuice);

 const appleJuiceOrangeJuice = fruitProcessor(2, 4);
 console.log(appleJuiceOrangeJuice);


//function declaration
function calcAge1(birthyear){
    
    return 2037 - birthyear;

}
//function expression
 const age1 = calcAge1(1991);
 console.log(age1);

 const calcAge2 = function (birthyear){
    return 2037 - birthyear;
 }

 const age2 = calcAge2(1991);
 console.log(age1, age2);
 */

 
 

 // Arrow function 
 /*const calcAge3 = birthyear => 2037 - birthyear;
 const age3 = calcAge3(1991);
 console.log(age3);

 const yearsUtilRetirement = (birthyear, firstName) => {
    const age = 2037 - birthyear;
    const retirement = 65 - age;
    //return retirement;
    return `${firstName} retires in ${retirement} years`
 }

 console.log(yearsUtilRetirement(1991, 'jonas'));
 console.log(yearsUtilRetirement(1980, 'Bob'));
*/
/*
function cutFruitPieaces(fruit){
   return fruit * 4;
}


 function fruitProcessor(apples, oranges){
const applePieces = cutFruitPieaces(apples);
const orangesPieces = cutFruitPieaces(oranges);

  
   const juice = `Juice whith ${applePieces} Piece of apples and ${orangesPieces} oranges.`;
   return juice;

}
console.log(fruitProcessor(2, 3)); // chamando a função 

*//*
const calcAge = function (birthyear){
   return 2037 - birthyear;
}

const yearsUtilRetirement =  function (birthyear, firstName) {
  const age = calcAge(birthyear);
   const retirement = 65 - age;

   if( retirement > 0){
      console.log(`${firstName} retires in ${retirement} years`)
      return retirement;
   }else{
      console.log(`${firstName} has already retired🎉🎉`);
      return -1;
   }
  
  // return `${firstName} retires in ${retirement} years`
}



console.log(yearsUtilRetirement(1991, 'jonas'));
console.log(yearsUtilRetirement(1950, 'Mike'));
*/


const calcAverage = (a,b, c) =>(a+b+c) /3;
console.log(calcAverage(3,4,5));

const scoreDolphins = calcAverage(44,23,71);
const scoreKoalas = calcAverage(65, 54, 49);

console.log(scoreDolphins, scoreKoalas);

const checkWinner = function(avgDophins, avgKoalas){
if (avgDophins >= 2 * avgKoalas){
   console.log(`Dolphins Win🎉 (${avgDophins} vs ${avgKoalas}`);

}else if(avgKoalas >= 2 * avgDophins){
   console.log(`Koalas Win🎉 (${avgKoalas} vs. ${avgDophins})`);
}else {
   console.log('No team wins');
}
}

checkWinner(scoreDolphins, scoreKoalas);
checkWinner(561, 124)