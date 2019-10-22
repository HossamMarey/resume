<template>
  <div class="experience">
    <div class="h-card">
      <h2 class="h-card-head h-card-sec d-flex justify-content-between">
        <span>Experience</span>
        <i class="fas fa-briefcase"></i>
      </h2>

      <div class="h-card-sec" v-for="(e, i) in exps" :key="i">
        <h3 class="heading-t-dark"> {{ e.name }}</h3>
        <small> {{e.date}} </small>
        <p> {{e.company}}</p>
      </div>

      
    </div>
  </div>
</template>

<script>
export default {
  name: "experience",
  computed: {
    exps(){
      return this.$store.getters.getExp;
    }
  }
};
</script>

<style>
</style>