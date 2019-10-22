<template>
  <div class="main-footer d-flex">
    <p>Created & Coded with</p>
    <i class="fas fa-heart"></i>
    <p>by</p>
    <a href="https://hossammarey.com/">Hossam Marey</a>
  </div>
</template>

<script>
export default {
  name: "main-footer"
};
</script>

<style lang="scss">
@import "@/styles/_styles.scss";

.main-footer {
  height: 9rem;
  background-color: $color-white;
  justify-content: center;
  align-items: center;
  margin-top: 4rem;
  box-shadow: 0 -2px 2px rgba(25, 32, 56, 0.05);

  &:hover i {
    animation: heartanim 1s ease-out infinite forwards;
  }

  p {
    color: $color-text-s;
    margin: 0;
    padding: 0 0.7rem;
  }
  i {
    color: $color-pink;
  }
}

@keyframes heartanim {
  0% {
    transform: scale(1.5);
  }
}
</style>