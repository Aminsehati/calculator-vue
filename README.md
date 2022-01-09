## Install
```bash
  npm install calculator-vue
```
    ## Add to project
Global
```javascript
// main.js
import calculator from "calculator-vue"
Vue.component('Calculator', calculator);
```
Local Usage
```javascript
<template>
  <div>
      <Calculator/>
  </div>
</template>
<script>
  import calculator from "calculator-vue"
  export default {
    components: {calculator},
  }
</script> 
```
## Setup
Parameters

| Props(Parameter)| Type |              Default        | Description
| ----------------- |--------------------- |-------------- | --------------
| light | Number | false | ...

