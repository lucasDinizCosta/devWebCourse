<template>
  <div class="calculator">
    <DisplayScreen :value="displayValue" />
    <ButtonElement label="AC" triple @onClick="clearMemory" />
    <ButtonElement label="/" operation @onClick="setOperation" />
    <ButtonElement label="7" @onClick="addDigit" />
    <ButtonElement label="8" @onClick="addDigit" />
    <ButtonElement label="9" @onClick="addDigit" />
    <ButtonElement label="*" operation @onClick="setOperation" />
    <ButtonElement label="4" @onClick="addDigit" />
    <ButtonElement label="5" @onClick="addDigit" />
    <ButtonElement label="6" @onClick="addDigit" />
    <ButtonElement label="-" operation @onClick="setOperation" />
    <ButtonElement label="1" @onClick="addDigit" />
    <ButtonElement label="2" @onClick="addDigit" />
    <ButtonElement label="3" @onClick="addDigit" />
    <ButtonElement label="+" operation @onClick="setOperation" />
    <ButtonElement label="0" double @onClick="addDigit" />
    <ButtonElement label="." @onClick="addDigit"/>
    <ButtonElement label="=" operation @onClick="setOperation" />
  </div>
</template>

<script>
import DisplayScreen from "../components/DisplayScreen";
import ButtonElement from "../components/ButtonElement";

export default {
    data: function() {
        return {
            displayValue: "0",
            clearDisplay: false,
            operation: null,
            values: [0, 0],
            current: 0,
        }
    },
  components: { ButtonElement, DisplayScreen },
  methods: {
    clearMemory() {
        //   console.log("Limpar Memória!");
        // Volta com o objeto para o estado inicial
        Object.assign(this.$data, this.$options.data())
    },
    setOperation(operation) {
        // console.log("Operação " + operation);
        if(this.current === 0){
            this.operation = operation
            this.current = 1
            this.clearDisplay = true
        } else {
            const equals = operation === "="
            const currentOperation = this.operation

            try {
                this.values[0] = eval(
                    `${this.values[0]} ${currentOperation} ${this.values[1]}`
                )
                // Bug de Not a Number e Infinity
                if (isNaN(this.values[0]) || !isFinite(this.values[0])) {
                    this.clearMemory()
                    return
                }
            } catch (error) {
                this.$emit('onError', error)
            }

            this.values[1] = 0
            this.displayValue = this.values[0]
            this.operation = equals ? null : operation
            this.current = equals ? 0 : 1
            this.clearDisplay = !equals
        }
    },
    addDigit(n) {
        //   console.log("Digito " + n);
        if(n === "." && this.displayValue.includes(".")) {
            return
        }

        const clearDisplay = this.displayValue === "0" || this.clearDisplay

        const currentValue = clearDisplay ? "" : this.displayValue
        const displayValue = currentValue + n

        this.displayValue = displayValue
        this.clearDisplay = false

        // Alternativa 1
        this.values[this.current] = displayValue

        // Alternativa 2
        // if(n !== ".") {
        //     const i = this.current
        //     const newValue = parseFloat(displayValue)
        //     this.values[i] = newValue
        // }
    },
  },
};
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
