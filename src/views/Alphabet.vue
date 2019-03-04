<template>
  <cards
    :cards="letters"
  >
  </cards>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Cards from '@/components/Cards.vue'; // @ is an alias to /src

@Component({
  components: {
    Cards,
  },
  name: 'Alphabet',
  data() {
    return {
      letters: ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l',
       'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'],
    };
  },
})
export default class Alphabet extends Vue {}
</script>
