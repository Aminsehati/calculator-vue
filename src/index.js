import calculator from "../dist/calculator.common";
import '../dist/calculator.css'
const calculatorExample = {
 install(Vue, options) {
  Vue.component("calculator", calculator);
 }
};

export default calculatorExample;