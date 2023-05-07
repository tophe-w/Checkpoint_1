/*
Tu dois écrire une fonction permettant de déterminer si une année est bissextile.
Elle renverra un boolean, true si l'année passée en paramêtre est bissextile et false si ce n'est pas le cas.
Pour rappel, une année est bissextile:
 - si elle est divisible par 4 sans être divisible par 100,
 OU
 - si elle est divisible par 400.
Les années 2004, 2016 et 2020 sont bissextiles.
Autre rappel: Tu dois utiliser l'opérateur modulo (%) pour vérifier si un nombre est divisible par un autre.
*/

function isLeapYear(year) {
  let bissextile = false;
  if (year %4 === 0 && year %100 !== 0) {
    bissextile = true;
  } else if (year %400 ===0 ) {
    bissextile = true;
  }
  return bissextile;
}

module.exports = isLeapYear;
