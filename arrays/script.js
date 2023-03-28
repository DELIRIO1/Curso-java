/*
const frined1 = 'Michael';
const friend2 = 'Steven';

const friends = ['Michael', 'Steven', 'Peter'];
console.log(friends);

const years = new Array(1991, 1984, 2008, 2020);

console.log(friends[0]);
console.log(friends[2]);

console.log(friends.length);
console.log(friends[friends.length -1]);


friends[2] = 'jay'; // reposicionando com um novo elemento
console.log(friends);


const firstName = 'jonas';
const jonas = [firstName, 'Dionizio', 2037 - 1991,
'Teacher', friends];
console.log(jonas.length);

// Exercise

const calcAge = function (birthyear){
    return 2037 - birthyear;
 }

 const years1 = [1990, 1995, 1967, 2010, 2018];

 const age1 =calcAge(years1[0]);
 const age2 =calcAge(years1[1]);
 const age3 =calcAge(years1[years1.length -1]);

 console.log(age1, age2, age3);

 const ages = [calcAge(years1[0]),calcAge(years1[1]), calcAge(years1[years1.length -1])];
 console.log(ages);
 */

 // adiciona Elementos

/*
 const friends = ['Michael','Steve', 'Peter'];
const newLength = friends.push('jay' );
console.log(friends);

console.log(newLength);

friends.unshift('john');//adicionar no inicio do array
console.log(friends);

//remove elementos
const popped = friends.pop();// ultimo 
console.log(popped);
console.log(friends);


friends.shift(); // Primeiro
console.log(friends);

console.log(friends.indexOf('Steve'));
console.log(friends.indexOf('bob'));

friends.push(23);

console.log(friends.includes('Steve'));
console.log(friends.includes('Bob'));
console.log(friends.includes(23));

if(friends.includes('Peter')){
    console.log('You have a friend called Peter');
}


*/


/*
const calcTIP = function (bill){
    return bill >= 50 && bill <= 300? bill *0.15 : bill * 0.2;
}

const bills = [125, 555, 44];

const tips = [calcTIP(bills[0]), calcTIP(bills[1]), calcTIP(bills[2])];
const totals = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]];
console.log(bills, tips, totals);

const verHora = function(hora){
    return hora = 12;
}

//console.log(veraHora());
 

const totalLanches = function (lanche){
    return lanche * 2;
};

const ingredientes = function (hamburguer, pao){
    const tipohaburguer = totalLanches(hamburguer);
    const tipopao = totalLanches(pao);

    const combo = `sandwich ${tipohaburguer} e ${tipopao}`
    return combo;
};



console.log(ingredientes(2, 3));

const bolo = function(prato){
    return prato * 2;
}

const festa = function(pedacoP, pedacoG){
    const pedacoPequeno = bolo(pedacoP);

    const pedacogrande = bolo(pedacoG);
    const fimfesta = `${pedacoP} e ${pedacoG}`
    return  fimfesta ;
}

console.log(festa(1, 2));
*/

//const jonasArray =[
  //  'jonas', 'Dionizio', 2037 - 1991, 'teacher', 
    //'Michael', 'Peter', 'Steven'
//];
// abaixo uma construção de objeto usa o colchetes temos as 5 chaves e cada chave tem um valor. 
// objeto literal sintaxe 

/*
const jonas = {
    firstName: 'jonas',
    lastName: 'Dionizio',
    age: 2037 - 1991,
    job: 'teacher',
    friends: ['Mychael', 'Peter', 'Steve']
};

console.log(jonas);

console.log(jonas.lastName);// extraindo a propriedade de um objeto como ponto ex: jonas.LastName
console.log(jonas['LastName', 'age']); //extraindo a propriedade com [], dentro apêndice [] podemos colocar qualquer expressão 

const nameKey = 'Name'; // palavra ou parte do nome da propriedade
console.log(jonas['first'+ nameKey]);
console.log(jonas['last'+ nameKey]);

const interestedIn = prompt("What do you Want to Know about Jonas? Chose between firstName, lasName, age,job, and friends");


if(jonas[interestedIn]){
    console.log(jonas[interestedIn]);
}else{
   console.log('Resposta errada! Chose between firstName, lasName, age,job, and friends')
}

jonas.location = 'Portugal';
jonas['twitter'] = '@jonasschmedtman';
console.log(jonas);


console.log(`${jonas.firstName} has ${jonas.friends.length} and his best fried is called ${jonas.friends[0]}`);

*/
/*
const jonas = {
    firstName: 'jonas',
    lastName: 'Dionizio',
    birthYear: 1991,
    job: 'teacher',
    friends: ['Mychael', 'Peter', 'Steve'],
    hasDriverLicense: true,
*/
   // calcAge: function (birthYear){
      //  return 2037 - birthYear;
   // }

   //calcAge: function (){
    //console.log(this);
     //return 2037 - this.birthYear;
 //}
/*
 calcAge: function (){             // dotnotaion pode ser usado para criar novas propriedades
    this.age = 2037 - this.birthYear; // isto é um metodo, um metodo é um comportamento no código sempre fará isto.
     return this.age ;
 },

 getSummary: function(){
    return`${this.firstName} is a ${this.age} Years old ${this.job} and his has ${this.hasDriverLicense ? 'a': 'no'} driver's license`
 }

};

console.log(jonas.calcAge(1992));

console.log(jonas.age);
console.log(jonas.age);
console.log(jonas.age);
console.log(jonas.age);


//console.log(jonas['calcAge'](1991));


console.log(jonas.getSummary());

const Marck = {
    firstName: 'Marck',
    secondName: 'Smith',
    mass: 78,
    height: 1.69,
      
    calcBmi: function() { // isto é um metodo, um metodo é um comportamento no código sempre fará isto.
      this.bmi = this.mass / this.height ** 2; 
           
      return this.bmi;
     
    }
   
  };

 
  
  

const John ={
    firstName : 'John',
    secondName : 'bildo',
    mass : 92,
    height : 1.95,

    calcBmi: function() {
        this.bmi = this.mass / this.height ** 2; 
             
        return this.bmi;
       
      }
    
};

Marck.calcBmi();
console.log(Marck.bmi);

John.calcBmi();
console.log(John.bmi);


if(Marck.bmi > John.bmi){
    console.log(`${Marck.firstName} BMI (${Marck.bmi})is higher than ${John.firstName}'s Bmi (${John.bmi})`)
}else if (John.bmi > Marck.bmi){ 
    console.log(`${John.firstName} BMI (${John.bmi})is higher than ${Marck.firstName}'s Bmi (${Marck.bmi})`)


};

*/
/*

for(let rep = 1; rep<= 1; rep++){
   // console.log(`jonas is amazing${rep}`);
}

const types =[];

const jonas =[
    'jonas',
     'Dionizio',
      2037 - 1991, 
      'teacher', 
    'Michael', 'Peter', 'Steven',
    true
];

for(let i =0; i < jonas.length; i++){
console.log(jonas[i], typeof jonas[i]);

//types[i] = typeof jonas[i];

types.push(typeof jonas[i]);

}

console.log(types);

const years = [1991, 2007, 1969, 2020];
const ages = [];

for(let i = 0; i < years.length; i++){
   ages.push( 2037 -  years[i]);
}

console.log(ages);


// continue and break

console.log('===== Only Strings =====')
for(let i =0; i < jonas.length; i++){
    if(typeof jonas[i] !== 'string')continue;
        
    
    console.log(jonas[i], typeof jonas[i]);
       
    };
    console.log('===== Break With Number =====')

    for(let i =0; i < jonas.length; i++){
        if(typeof jonas[i] == 'number')break;
            
        
        console.log(jonas[i], typeof jonas[i]);
           
        }
        */

        /*
        const jonas =[
            'jonas',
             'Dionizio',
              2037 - 1991, 
              'teacher', 
            'Michael', 'Peter', 'Steven',
            true
            
        ];

        for(let i = jonas.length -1; i >= 0; i--){// o codigo funcionar pq >= pergunta qual o maior que zero que é o valor do [i] do array em sequencia até o tamanho do loop acabar
            console.log(i,jonas[i]);


        }

        for(let exercise =1; exercise <4; exercise++){
            console.log(`================Starting exercise ${exercise}`);
            for(let rep=1; rep < 6; rep++){
                console.log(`Lifting weith repretition ${exercise} Lifting weight ${rep} Repetition`);
            }
        }
        */

        for(let i = 0; i < 4; i++){ // o codigo funcionar pq >= pergunta qual o maior que zero que é o valor do [i] do array em sequencia até o tamanho do loop acabar
            console.log('ad');
        };

        let rep =1;

        while(rep <10){
            console.log(`While loop${rep}`);
            rep++;

        }

        

        let dice = Math.trunc(Math.random() * 6) + 1;
        console.log(`Violet${dice}`);

        while(dice !== 6){
            console.log(`you rolled a${dice} `);
            dice = Math.trunc(Math.random() * 6) + 1;
            if(dice === 6 ) console.log('Loop is about to end...');



        };

       


 
 const calcTIP = function (bill){
    return bill >= 50 && bill <= 300? bill *0.15 : bill * 0.2;
}

const bills = [22, 295,176, 440,
37, 105,10, 1100,86,
52];

const tips = [];
const totals =[];


//const tips = [calcTIP(bills[0]), calcTIP(bills[1]), calcTIP(bills[2])];
//const totals = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]];
console.log(bills, tips, totals);

for(let i =0; i<bills.length; i++){
    const tip = calcTIP(bills[i]);
    tips.push(tip);
    totals.push(tip + bills[i]);
}

console.log(bills, tips, totals);



const calAverage = function(arr){
    let sum = 0 ;

    for(let i=0; i < arr.length; i++){
        // sum = sum + arr[i];
        sum += arr[i];

    }    
    return sum / arr.length;

}
//console.log(calAverage([2, 3, 6]));
console.log(calAverage(totals));