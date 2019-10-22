<template>
  <div class="main-header">
    <div class="d-flex justify-content-between container">
      <router-link to="/" class="h-link"  exact-active-class="h-active">
        <i class="fas fa-user"></i>
        <a>About</a>
      </router-link>
      <router-link to="/resume" class="h-link" active-class="h-active">
        <i class="fas fa-file-alt"></i>
        <a>Resume</a>
      </router-link>
      <router-link to="/portfolio" class="h-link" active-class="h-active">
        <i class="fas fa-th-large"></i>
        <a>Portfolio</a>
      </router-link>
      <router-link to="/contact" class="h-link" active-class="h-active">
        <i class="fas fa-paper-plane"></i>
        <a>Contact</a>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "main-header"
};
</script>

<style lang="scss">
@import "@/styles/_styles.scss";
.main-header {
  background-color: $color-white;
  height: 6rem;
  box-shadow: $main-shadow;
  overflow: hidden;
  margin-bottom: 2.5rem;
  .container {
  }
  .h-link {
    height: 6rem;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    padding: 0 4rem;
    font-size: 2rem;
    color: $color-text-h;
    transition: all 0.2s;
    &:hover {
      background-color: $color-blue-active;
      border-bottom: 4px solid $color-blue;
    }
  }
  .h-active {
    background-color: $color-blue-active;
    border-bottom: 4px solid $color-blue;
  }

  i {
    margin-right: 1rem;
    color: $color-gray-dark;
  }
}
@media (max-width: 576px) {
  .main-header {
    
    i {
      display: none;
    }
      .h-link {
        padding: 0 1.5rem;
        
      }
  }
}
</style>