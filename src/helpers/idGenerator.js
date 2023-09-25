export function idGenerator() {
    // Genera un timestamp actual
    const timestamp = new Date().getTime();
  
    // Genera un número aleatorio entre 1 y 1000 (puedes ajustar el rango según tus necesidades)
    const numeroAleatorio = Math.floor(Math.random() * 1) + 1;
  
    // Combina el timestamp y el número aleatorio para crear un ID único
    const idUnico = `${timestamp}-${numeroAleatorio}`;
  
    return idUnico;
  }