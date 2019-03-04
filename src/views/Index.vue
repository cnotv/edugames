<template>
  <main>
    <header>
      <!-- <img src="./../assets/logo.svg" alt="cnotv"> -->
      <h1>kid-games</h1>
    </header>
    <section>
      <ul>
        <li>
          <router-link to="/alphabet">ABC</router-link>
        </li>
        <li>
          <router-link to="/numbers">123</router-link>
        </li>
        <li>
          <router-link to="/animals">Animals</router-link>
        </li>
      </ul>
      </section>
  </main>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

export default class Home extends Vue {}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

header {
  text-align: center;
  text-transform: uppercase;
}

h1 {
  margin: 2rem 0;
  font-size: 5rem;
  padding-top: 2rem;
  letter-spacing: 0.1em;
}

header img {
  height: 150px;
}

ul {
  padding: 5vh 10vw;
  list-style: none;
  text-align: center;
}

a {
  font-size: 2rem;
  color: white;
  line-height: 1;
  padding: 0.7em 0.5em;
  background-color: tomato;
  border-radius: 2em;
  display: block;
  max-width: 500px;
  margin: auto;
  letter-spacing: 0.1em;
  font-weight: 700;
  box-shadow: 0 0 0px 3px rgb(204, 204, 204),
              0 0 0 12px #fff,
              inset 6px 6px 18px 10px rgba(255,255,255,0.2),
              inset -4px -4px 18px 4px rgba(0,0,0,0.4),
              0 0 18px 7px #333;;
  text-shadow: 0.2vh 0.4vw 0.8vw #333;
  transition: background-color .5s;
}
a:hover {
  background-color: darkseagreen;
}

li + li{
  margin-top: 8vh;
}
</style>
