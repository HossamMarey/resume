<template>
  <div class="langauge">
    <div class="h-card">
      <h2 class="h-card-head h-card-sec d-flex justify-content-between">
        <span>Langauge</span>
        <i class="fas fa-globe"></i>
      </h2>

      <div class="h-card-sec d-flex">
        <div class="flag">
          <img src="../../assets/img/svg/egypt.svg" alt />
        </div>
        <div class="lang ml-4">
          <h3 class="heading-t-dark">Arabic</h3>
          <p>Mother Langauge</p>
        </div>
      </div>

      <div class="h-card-sec d-flex">
        <div class="flag">
          <img src="../../assets/img/svg/usa.svg" alt />
        </div>
        <div class="lang ml-4">
          <h3 class="heading-t-dark">English</h3>
          <p>Very Good</p>
        </div>
      </div>



    </div>
  </div>
</template>

<script>
export default {
  name: "langauge"
};
</script>

<style lang="scss" scoped>
.langauge {
  .flag {
    width: 5rem;
    height: 5rem;
    img {
      width: 5rem;
      height: 5rem;
    }
  }
}
</style>