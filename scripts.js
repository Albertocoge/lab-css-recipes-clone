const checkMax = (notesArr) => {
    let max = 0;
    
    for (let i = 0; i < notesArr.length; i++) {
    if notesArr[i].length > max
    return max;
  }
  
  // test. DO NOT CHANGE THE TEST VALUES
  let myNotes1 = [70, 34, 56, 77, 67, 56, 76];
  console.log( checkMax(myNotes1) ); // => 77
  let myNotes2 = [33, 5, 42, 4, 3, 67];
  console.log( checkMax(myNotes2) ); // => 67


  /*Complete la función anterior checkMax que toma un parámetro (una matriz de números)
La función debe recorrer la matriz para verificar el número máximo.
¡ Usa solo forloop o for ofbucle para resolver la actividad! (y no use Math.max();))
Ejemplo de la matriz: [70, 34, 56, 77, 67, 56, 76];para regresar77