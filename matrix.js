function matrix(r,c){
  //r = rows
  //c= column
  let arrOne = [];
  
  for(let i =0; i <r; i++){
    let arrTwo = [];
     for(let j = 0; j<c;j++){
        arrTwo.push(0);
     }
     arrOne.push(arrTwo)
  }
  return arrOne;
}

matrix(3,2)
