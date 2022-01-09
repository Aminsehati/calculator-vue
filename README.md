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
## Support

For support, email fake@fake.com or join our Slack channel.

## Setup
Parameters

| Props(Parameter)| Type |              Default        | Description
| ----------------- |--------------------- |-------------- | --------------
| light | Number | false | ...

