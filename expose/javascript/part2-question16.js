for (let property in statistics) {
  if ((property[0] === 'r') || (typeof statistics[property] === 'number' && statistics[property] % 2 !== 0)){
    console.log(statistics[property]);
  }
}