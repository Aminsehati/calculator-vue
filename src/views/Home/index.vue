<template>
  <div class="home">
    <calculator/>
    </div>
</template>

<script>
import './style.css'
import calculator from "calculator-vue"
export default {
  name: 'Home',
  components:{
    calculator
  },
}
</script>
