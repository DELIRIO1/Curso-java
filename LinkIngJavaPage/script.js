/*let js = "amazing";
console.log(40+98+6-10);

console.log("Jonas");
console.log(23);

let firstName = "Jonas";
console.log(firstName);
*/

//let javaScriptIsFun = true;
//console.log(javaScriptIsFun);
/*
console.log(typeof true); // mostrar o tipo dados
console.log(typeof 23);
console.log(typeof 'jonas');

javaScriptIsFun = 'YES!'; // mudando o tipo de dados para STRING.
console.log( typeof javaScriptIsFun);

let year; // variavel vazia indefinida
console.log(year);

year = 1991;// passando valor
console.log(year);

console.log(typeof null);      
*/

/*
let age = 30; // mudar um valor "MUtate"
age = 31;

const birth = 1991; // constnte não muda.

var job = 'programer';
job = 'teacher';

LastName = 'drumond';
console.log(LastName); // declarando váriavel sem o var  mas sempre tem que declarar a variavel
*/
/*
const now = 2037;
const ageJonas = now - 1991;
const ageSarah = now - 2018;
console.log(ageJonas, ageSarah);

console.log(ageJonas * 2, ageJonas / 10, 2**3); // operadores


const firstName = 'jonas';
const LastName = 'Dionizio';
console.log(firstName + ' ' +LastName);

let x = 10 +5;

x+=10;//
x*=4;
console.log(x);

console.log(ageJonas >ageSarah); // cpmára se ageJonas > agesarah e retorna true; OU FALSE
console.log(ageSarah >= 18);

const isFullAge = ageSarah>=18;

console(now - 1991 > now -2018);
*/

/*const ageJonas = now - 1991;
const ageSarah = now - 2018;

let x, y;
x = y = 25  -10  -5;
console.log(x, y)

const averageAge = (ageJonas + ageSarah) /2;
console.log(averageAge);
*/

//let marksWheigths = 78;
//let marksHeiths = 1.69;

//let johnWeights = 92;
//let jonHeights = 1.95;



//let marksWheigths = 95;
//let marksHeiths = 1.88;
/*

let johnWeights = 85;
let jonHeights = 1.76;




 let markHigherBMI = marksWheigths / marksHeiths **2 ;
 let johnHigherBMI  = johnWeights / (jonHeights * jonHeights);


console.log(markHigherBMI, johnHigherBMI);

console.log(markHigherBMI > johnHigherBMI);

*/

/*const firstName = 'jonas';
const job = 'ti';
const birthYear = 1991;
const year = 2037;

const jonas = "I'm " + firstName + ', a ' + (year - birthYear) + ' years old ' + job + '!';
console.log(jonas)

const jonasNew = `I'm sou ${firstName} a ${year - birthYear} year old ${job}!`; // templates literal

console.log(`regular string`);

console.log(`String with pula linha \n\ 
multiple \n\
 lines`);

 console.log(`string
 multiple
 lines`) // multiplas linhas mais fácil com templates literal 
 */

/* const age = 15;
 const isOldEnough = age >= 18;

 if(isOldEnough){
    console.log( 'Sarah can start Driving licence🚗');

 }else{
    const yearsLeaft = 18 - age;
    console.log(`Sarah is too young. Waint another ${yearsLeaft} years :)`)
 }

 const birthYear = 1991;

let century;

if(birthYear <= 2000){
     century = 20;

}else{
     century = 21;
    
}

console.log(century);
*/

/*
let marksWheigths = 78;
let marksHeiths = 1.69;

let johnWeight = 92;
let jonHeights = 1.95;



let marksmass= 95;
let marksHeith = 1.88;


let johnmass = 85;
let jonHeight = 1.76;




 let markHigherBMI = marksmass/ marksHeiths **2 ;
 let johnHigherBMI  = johnWeight / (jonHeights * jonHeights);
console.log(johnHigherBMI)

if( markHigherBMI > johnHigherBMI){
   console.log(`MarkBMI ${markHigherBMI} Is higher `)
   
}else{ 
   console.log(`johnHigherBMI ${johnHigherBMI} is higher than   `);
   
}
*/
/*
// conversão de tipo
const  inputYear = '1991';
console.log(Number (inputYear), inputYear); / / CONVERTENDO STRING PARA NÚMEROS
console.log(Number(inputYear) + 18);

console.log(Number('jonas'));
console.log(typeof NaN);

console.log(String(23) , 23);

// type coercion

console.log('I am' + 23 +'yars old' );// quando houver a concateção de numero com string o numero sera transfromado em string 
console.log('23' - '10' - 3); // string sendo coercitada por números
console.log('23' * '2');
console.log('23' / '2');

let n = '1' + 1; // string 11
n = n-1;
console.log(n); 
*/
/*
console.log( Boolean(0));
console.log(Boolean(undefined));
console.log( Boolean('jonas'));
console.log( Boolean({}));

const money = 0;
if(money){
   console.log("Don't spedn it all ;)");

}else{
   console.log('You should get a job!');
}

let height;

if(height) {
   console.log('Yay! Height is defined');

}else{
   console.log('Hieght is Undefiend');
}
*/

/*
const age = 18;
if(age === 18) console.log('you just became an adult'); //  operador de comparação === só retorna true se os dois valores forem os mesmos


const favourite =  Number (prompt("what is your favorite number?"));
console.log(favourite);

if(favourite === 23){ // '23 == 23 coerção 
   console.log('Cool! 23 is an amazing number!')
}else if(favourite === 7){
   console.log('7 is also cool number')
}else{
   console.log('Number is not 23 or 7')

}



if(favourite !== 23){
   console.log('why not 23?');
}

*/
/*
const hasDriversLicence = true; //A
const hasGoodVision = true; //B

console.log(hasDriversLicence && hasGoodVision);
console.log(hasDriversLicence || hasGoodVision);
console.log(!hasDriversLicence );

const shoulDrive = hasDriversLicence && hasGoodVision;

//if(hasDriversLicence && hasGoodVision){
   console.log('sara is able to drive!')
//}else{
   console.log('Someone else should drive...');
//}

const isTired = false; // C
console.log(hasDriversLicence && hasGoodVision && isTired);

if(hasDriversLicence && hasGoodVision && !isTired){
   console.log('sara is able to drive!')
}else{
   console.log('Someone else should drive...');
}
*/

/*
koalas = (88 + 91 + 110) /3;
dolphins = (96 + 108 + 89) /3;

minimunScore = 100;

if (dolphins >= minimunScore && dolphins > koalas) {
   console.log(dolphins +  ` the average points of dolPhins is higher dolphis wins`);
}else if(dolphins === koalas && koalas && dolphins < minimunScore ){
   console.log(`Draw game`)
}else{
   console.log(koalas + ` The average poinst of koalas is higher than dolphins Koalas wins`);
}
*/

/*
const day = 'thursday';

switch(day){ // day === 'monday'
case'monday':;
console.log('plan couser structured');
console.log('Go to coding meetu');
break;
case 'tuesday':
   console.log( 'Prepare theory videos')
   break;
   case 'wednesday':
   case 'thursday':
      console.log('Write code examples');
      case 'friday':
         break;
         console.log('Record videos');
         case 'santurday':
            case 'sunday':
               console.log('Enjoy weekend ');
               break;
               default:
                  console.log('Not a valid day!')
      


}
*/

  /* if ( 23 > 10){
      const str = '23 is bigger';
      console.log( str);
   }
      */

   /*const age = 18;
   age >= 18 ? console.log('I like to drink wine wi') :  // conditional ternary if else statment em um só linha
   console.log('I like to drink water ')

   const drink = age >= 18 ? 'wine' :' whater ';
   console.log(drink);



console.log(`I like to drink ${age >= 18 ? 'wine' : 'whater'}`); // é mais utilizado quando o javascript espera receber uma impressão 

*/
const bill = 275;
const tip = bill <= 300 && bill >= 50? bill * 0.15 : bill * 0.2;
console.log(`The bill Was ${bill}, the tip was ${tip}, and the total value ${bill + tip}`);

