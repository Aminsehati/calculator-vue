<template>
  <div :class="classes">
    <div class="tottal">
      <div class="tottal-wrapper">
        <div class="display">{{ logList + current }}</div>
        <div class="answer">{{ answer }}</div>
      </div>
    </div>
    <div class="bottom">
      <span class="square grey1 mr-15" @click="clear"> C </span>
      <span class="square grey1 mr-15" @click="sign"> +/- </span>
      <span class="square grey1 mr-15" @click="percent"> % </span>
      <span class="square blue" @click="divide"> ÷ </span>
      <span class="square grey2 mt-15 mr-15" @click="append('7')"> 7 </span>
      <span class="square grey2 mt-15 mr-15" @click="append('8')"> 8 </span>
      <span class="square grey2 mt-15 mr-15" @click="append('8')"> 9 </span>
      <span class="square blue mt-15" @click="times"> × </span>
      <span class="square grey2 mt-15 mr-15" @click="append('4')"> 4 </span>
      <span class="square grey2 mt-15 mr-15" @click="append('5')"> 5 </span>
      <span class="square grey2 mt-15 mr-15" @click="append('6')"> 6 </span>
      <span class="square blue mt-15" @click="minus">–</span>
      <span class="square grey2 mt-15 mr-15" @click="append('1')"> 1 </span>
      <span class="square grey2 mt-15 mr-15" @click="append('2')"> 2 </span>
      <span class="square grey2 mt-15 mr-15" @click="append('3')"> 3 </span>
      <span class="square blue mt-15" @click="plus"> + </span>
      <span class="square grey2 mt-15 mr-15" @click="dot"> . </span>
      <span class="square grey2 mt-15 mr-15" @click="append('0')"> 0 </span>
      <span class="square grey2 mt-15 mr-15">
        <img :src="deleteIcon"/>
      </span>
      <span class="square blue mt-15" @click="equal"> = </span>
    </div>
  </div>
</template>
<script>
import "./style.css";
export default {
  data() {
    return {
      logList: "",
      current: "",
      answer: "",
      operatorClicked: true,
      deleteIcon : require('../../assets/icon/deleteIcon.svg')
    };
  },
  props: {
    light: {
      type: Boolean,
      default: false,
    },
  },
  methods: {
    append(number) {
      if (this.operatorClicked) {
        this.current = "";
        this.operatorClicked = false;
      }
      this.current = `${this.current}${number}`;
    },
    addtoLog(operator) {
      if (this.operatorClicked == false) {
        this.logList += `${this.current} ${operator} `;
        this.current = "";
        this.operatorClicked = true;
      }
    },
    clear() {
      this.current = "";
      this.answer = "";
      this.logList = "";
      this.operatorClicked = false;
    },
    sign() {
      if (this.current != "") {
        this.current =
          this.current.charAt(0) === "-"
            ? this.current.slice(1)
            : `-${this.current}`;
      }
    },
    percent() {
      if (this.current != "") {
        this.current = `${parseFloat(this.current) / 100}`;
      }
    },
    dot() {
      if (this.current.indexOf(".") === -1) {
        this.append(".");
      }
    },
    divide() {
      this.addtoLog("/");
    },
    times() {
      this.addtoLog("*");
    },
    minus() {
      this.addtoLog("-");
    },
    plus() {
      this.addtoLog("+");
    },
    equal() {
      if (this.operatorClicked == false) {
        this.answer = eval(this.logList + this.current);
      } else {
        this.answer = "WHAT?!!";
      }
    },
  },
  computed: {
    classes() {
      return [
        "calculator-wrapper",
        {
          "light-calculator": this.light,
        },
      ];
    },
  },
};
</script>