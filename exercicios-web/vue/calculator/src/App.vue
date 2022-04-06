<template>
  <div id="app2">
      <h1>Calculadora</h1>
      <CalculatorDevice />
  </div>
</template>

<script>
// Javascript
import CalculatorDevice from "./main/CalculatorDevice"

export default {
    components: { CalculatorDevice }
}
</script>

<style>
/* CSS */
@font-face {
    font-family: "RobotoMono";
    src: url("./fonts/RobotoMono-Thin.ttf");
}

* {
    font-family: "RobotoMono", monospace;
}

body {
    margin: 0;
}

/* 
    --{ MUDANÇA IMPORTANTE }--
- Troquei o nome da classe para app2 pois a div padrão app do vue por 
algum motivo nao esta sobre-escrevendo 

- Caso deixe o mesmo nome 'app', haverá duas divs com o mesmo nome e portanto,
ao atribuir as propriedades do CSS abaixo do gradiente de fundo, ficará estranho.
*/

#app2 {
    display: flex;
    flex-direction: column;
    height: 100vh;
    justify-content: center;
    align-items: center;
    text-align: center;

    color: #fff;
    background: linear-gradient(to right, rgb(83, 105, 118), rgb(41, 46, 73));
}

</style>