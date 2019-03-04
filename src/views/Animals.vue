<template>
  <cards
    :cards="animals"
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
  name: 'Animals',
  data() {
    return {
      animals: [
        'Bear',
        'Dog',
        'Cat',
        'Fox',
        'Bee',
        'Monkey',
      ],
    };
  },
})
export default class Animals extends Vue {}
</script>
