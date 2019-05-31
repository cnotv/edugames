<template>
  <router-view id="app"/>
</template>

<style lang="scss" src="./assets/scss/main.scss"></style>

<script lang="ts">
import Vue from 'vue';
import * as Sentry from '@sentry/browser';
import * as Integrations from '@sentry/integrations';

Sentry.init({
  dsn: 'https://22553bd0e4cf47d487248ac2547e8047@sentry.io/1379644',
  integrations: [new Integrations.Vue({Vue, attachProps: true})],
  environment: process.env.NODE_ENV,
  release: process.env.VERSION,
});
</script>
