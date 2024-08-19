function duplicates(array) {
  const duplicados = {};

  for (const elemento of array) {
    const elementoString = elemento.toString();
    if (elementoString in duplicados) {
        duplicados[elementoString]++;
    } else {
        duplicados[elementoString] = 1;
    };   
  }
  
  let resultado = 0;
  for (const elemento in duplicados) {
    if (duplicados[elemento] > 1) {
      resultado++;
    }
  }

  console.log(resultado);
}

const lista = [1, 2, 2, 3, 4, 4, 4, 5];
duplicates(lista);