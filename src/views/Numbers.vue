<template>
  <div>
    <span v-on:click="activate"></span>
  </div>
</template>

<script>
export default {
  name: 'Numbers',
  data() {
    return {
      finish: 10,
      current: 1,
    };
  },
  methods: {
    hue() {
      return 'rgb('
      + (Math.floor(Math.random() * 256))
      + ','
      + (Math.floor(Math.random() * 256))
      + ','
      + (Math.floor(Math.random() * 256))
      + ')';
    },

    size(max = 200, min = 50, unit = 'px') {
      return Math.floor(Math.random() * (max - min)) + min + unit;
    },

    speak(text) {
      const msg = new SpeechSynthesisUtterance();
      const voices = window.speechSynthesis.getVoices();
      const voice = voices.filter((el) => ['en'].includes(el.lang))[0];
      msg.text = text;
      msg.rate = 0.7;
      msg.pitch = 1.2;
      msg.voice = voice;
      window.speechSynthesis.speak(msg);
    },

    randomize(el) {
      Object.assign(
        el.style, {
          background: this.hue(),
          height: this.size(300, 100, 'px'),
          width: this.size(300, 100, 'px'),
          marginTop: this.size(-25, 25, 'vh'),
          marginLeft: this.size(-25, 25, 'vw'),
        },
      );
      el.innerText = this.current++;

      if (el.innerText >= this.finish) {
        this.current = 1;
      }
    },

    activate(event) {
      this.randomize(this.$el.children[0]);
      window.speechSynthesis.cancel();
      this.speak(this.$el.children[0].innerText);
    },
  },

  mounted() {
    this.randomize(this.$el.children[0]);
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  div {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100vh;
    width: 100vw;
  }
  span {
    display: flex;
    background: red;
    color: white;
    font-size: 3rem;
    align-items: center;
    justify-content: center;
    font-weight: 700;
    transition: all .2s;
    user-select: none;
    cursor: pointer;
    border-radius: .5vw;
    text-shadow: 0.2vh 0.4vw 0.8vw #333;
    border: 0.5rem solid white;
  }
</style>
