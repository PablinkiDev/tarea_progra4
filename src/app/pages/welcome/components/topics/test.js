import { signal, effect } from "@preact/signals-core";

const contador = signal(0);

effect(() => {
  console.log(`El contador es: ${contador.value}`);
});

contador.value++; 
contador.value = 10; 

