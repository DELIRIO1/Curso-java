"use strict";

//const x = 23;

//if (x === 23) console.log(23);

// entendendo o problema :
// um array com temperaturas do dia calcule a amplitude de temperatura, as vezes aparece um error no sensor

const temperatures = [3, -2, -6, -1, "error", 9, 13, 17, 15, 14, 9, 5];

//1) o que é amplitude? resposta: diferença de temperatura a maior e a menor temperatura
//como calcular a maior e a temperatura minima?
// o que é um sesor de erros? o que faz?

//2) quebrando o problema
// como ignorar erros?
// encontrando o valor max e minino do array
// subtrair Minimo do max ( amplitude) e retornar.

/*
const calctempAplitude = function (temps) {
  let max = temps[0];
  let min = temps[0];

  for (let i = 0; i < temps.length; i++) {
    const curTemp = temps[i];
    if (typeof curTemp !== "number") continue;

    if (curTemp > max) max = curTemp;
    if (curTemp < min) min = curTemp;
  }
  console.log(max, min);
  return max - min;
};

calctempAplitude([3, 7, 4, 1, 8]);
const amplitude = calctempAplitude(temperatures);
console.log(amplitude);

const calctempAplitudeNew = function (t1, t2) {
  const temps = t1.concat(t2);
  console.log(temps);

  let max = temps[0];
  let min = temps[0];

  for (let i = 0; i < temps.length; i++) {
    const curTemp = temps[i];
    if (typeof curTemp !== "number") continue;

    if (curTemp > max) max = curTemp;
    if (curTemp < min) min = curTemp;
  }
  console.log(max, min);
  return max - min;
};

const amplitudeNew = calctempAplitudeNew([3, 5, 1], [9, 0, 5]);
console.log(amplitudeNew);
*/

const measureKelvin = function () {
  const measurement = {
    type: "temp",
    Unit: "celsius",
    //   value: Number(prompt("Degrees celsius:")),
    value: 10,
  };
  console.log(measurement);

  console.log(measurement.value);
  //console.warn(measurement.value);

  const kelvin = measurement.value + 273;
  return kelvin;
};
console.log(measureKelvin());

// Utilizando um debuguer de código

const calctempAplitudeBug = function (t1, t2) {
  const temps = t1.concat(t2);
  console.log(temps);

  let max = temps[0];
  let min = temps[0];

  for (let i = 0; i < temps.length; i++) {
    const curTemp = temps[i];
    if (typeof curTemp !== "number") continue;

    if (curTemp > max) max = curTemp;
    if (curTemp < min) min = curTemp;
  }
  console.log(max, min);
  return max - min;
};

const data1 = [17, 21, 23];
const data2 = [12, 5, -5, 0, 4];

console.log(`...${data1[0]}ºC... ${data1[1]}ºC ... ${data1[2]}ºC ...`);

const printForecast = function (arr) {
  let str = "";
  for (let i = 0; i < arr.length; i++) {
    str = str + `${arr[i]}ºC in ${i + 1} days ... `;
  }
  console.log("..." + str);
};

printForecast(data1);
