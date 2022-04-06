<template>
  <div class="calculator">
      <DisplayScreen value="1000"/>
      <ButtonElement label="AC" triple/>
      <ButtonElement label="/" operation/>
      <ButtonElement label="7"/>
      <ButtonElement label="8"/>
      <ButtonElement label="9"/>
      <ButtonElement label="*" operation/>
      <ButtonElement label="4"/>
      <ButtonElement label="5"/>
      <ButtonElement label="6"/>
      <ButtonElement label="-" operation/>
      <ButtonElement label="1"/>
      <ButtonElement label="2"/>
      <ButtonElement label="3"/>
      <ButtonElement label="+" operation/>
      <ButtonElement label="0" double/>
      <ButtonElement label="." />
      <ButtonElement label="=" operation/>
      
      
      
  </div>
</template>

<script>
import DisplayScreen from "../components/DisplayScreen"
import ButtonElement from "../components/ButtonElement"

export default {
    components: { ButtonElement, DisplayScreen }
}
</script>

<style>
.calculator {
    height: 320px;
    width: 235px;
    border-radius: 5px;
    overflow: hidden;

    display: grid;
    grid-template-columns: repeat(4, 25%);
    grid-template-rows: 1fr 48px 48px 48px 48px 48px;
}
</style>