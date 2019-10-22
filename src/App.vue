<template>
  <div id="app">
    <main-header />
    <router-view />
    <main-footer />
  </div>
</template>

<script>
import MainHeader from "./components/MainHeader";
import MainFooter from "./components/MainFooter";
export default {
  components: {
    MainHeader,
    MainFooter
  }
};
</script>

<style lang="scss">
@import "@/styles/_styles.scss";
body {
  // , -moz-
  &::-webkit-scrollbar {
    background-color: $color-gray-light;
    width: 12px;
  }

  &::-webkit-scrollbar-track {
    background-color: $color-white;
  }
  // &::-webkit-scrollbar-track:hover {
  //     background-color:$color-gray-light;
  // }

  &::-webkit-scrollbar-thumb {
    background-color: $color-gray-middle;
    border-radius: 4px;
    border: 2px solid $color-white;
  }
  &::-webkit-scrollbar-thumb:hover {
    background-color: darken($color: $color-gray-middle, $amount: 15);
    // $color-text-t
  }

  &::-webkit-scrollbar-button {
    display: none;
  }
}
</style>
