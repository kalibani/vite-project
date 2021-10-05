<script setup lang="ts">
import { ref } from "vue";

import HelloWorld from "./components/HelloWorld.vue";

const name = ref<string>("testlagi");
// interface Props {
//   msg?: string;
// }

// const props = withDefaults(defineProps<Props>(), {
//   msg: "hello",
// });

function changeName(names: string) {
  name.value = names;
}
</script>

<template>
  <div class="app">{{ name }}</div>
  <HelloWorld msg="kamu" />
  <button @click="changeName('halo')">change name</button>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
