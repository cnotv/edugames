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
        {face: '🐻', name: 'Bear'},
        {face: '🐷', name: 'Pig'},
        {face: '🐮', name: 'Cow'},
        {face: '🐴', name: 'Horse'},
        {face: '🐷', name: 'Pig'},
        {face: '🐶', name: 'Dog'},
        {face: '🦁', name: 'Lion'},
        {face: '🐱', name: 'Cat'},
        {face: '🦊', name: 'Fox'},
        {face: '🐝', name: 'Bee'},
        {face: '🐵', name: 'Monkey'},
      ],
    };
  },
})
export default class Animals extends Vue {}
</script>
