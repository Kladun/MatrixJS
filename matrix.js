function matrix(m,n){
  //m = rows
  //n = column
  let arrOne = [];
  
  for(let i =0; i <m; i++){
    let arrTwo = [];
     for(let j = 0; j<n; j++){
        arrTwo.push(0);
     }
     arrOne.push(arrTwo)
  }
  return arrOne;
}

matrix(3,2)
