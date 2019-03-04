<template lang="pug">
  ul
    li(v-for="card in cards", 'v-on:click'='activate') {{card}}

</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component({
  components: {
    Cards,
  },
  name: 'cards',
  props: [
    'cards',
  ],
  data() {
    return {
      animations: ['bounce', 'rubberBand', 'shake', 'swing', 'tada', 'wobble', 'jello'],
      voices: window.speechSynthesis.getVoices(),
    };
  },
  methods: {
    speak(text) {
      const msg = new SpeechSynthesisUtterance();
      msg.text = text;
      // Set the attributes.
      // msg.volume = 100
      // msg.rate = 1
      // msg.pitch = 150
      msg.voice = this.voices[5];
      window.speechSynthesis.speak(msg);
    },
    activate(event) {
      window.speechSynthesis.cancel();
      // read this
      this.speak(event.target.innerText);
      event.target.classList.remove(...this.animations);
      event.target.classList.add(
        this.animations[Math.floor(Math.random() * this.animations.length)],
        'animated',
      );
    },
  },
})
export default class Cards extends Vue {}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
*:hover,
*:active,
*:focus {
  -webkit-tap-highlight-color: transparent;
}

html, body, ul  {
  overflow: hidden;
  background-color: white;
}

ul {
  padding: 0;
  margin: 0;

  height: 100vh;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
  grid-column-gap: 1px;
  grid-row-gap: 1px;

  font-size: 5vw;
  line-height: 100%;
  text-align: center;
  text-transform: uppercase;
  color: white;
  font-weight: 700;
  user-select: none;
  cursor: pointer;
}

li {
  transition: font-size .2s;
  display: grid;
  align-items: center;
  text-shadow: 0.2vh 0.4vw 0.8vw #333;
  &:active {
    font-size: 1.5em;
  }
  &:focus{
    box-shadow: 0px 3px 3px rgba(0,0,0,.5);
  }
}

@function hslColor($hue: 0, $saturation: 70%, $lightness: 65%) {
  @return hsl($hue, $saturation, $lightness);
}

@for $i from 1 through 26 {
  li:nth-of-type(#{$i}) {
    $color: hslColor($hue: $i*80);
    background-color: $color;
  }
}
</style>
