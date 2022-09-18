<template>
  <div class="app3">
    APP3 created with vue@3
    <img src="./assets/logo.png" class="vue-logo" />
  </div>
</template>

<script>
export default {
  name: "App",
  setup() {
    // setup() receives props as the first argument.
  },
};
</script>

<style>
.app3 {
  background-color: #03efb942;
  font-size: 18px;
  font-weight: bold;
  text-align: center;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
.vue-logo {
  height: 100px;
}
</style>
