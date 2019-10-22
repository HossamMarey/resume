<template>
  <div class="col-10 col-md-4 profile">
    <div class="h-card d-flex">
      <div class="profile-img">
        <img src="../../assets/img/profile.png" alt="Hossam Profile Image" />
      </div>
      <h1 class="heading-p">Hossam Marey</h1>
      <div class="profile-job">
        <h3 class="job-1">Front-End Developer</h3>
        <h3 class="job-2">UI Designer</h3>
      </div>
      <div class="profile-icons">
        <a href="https://wa.me/201207721288" target="_blank">
          <i class="fab fa-whatsapp"></i>
        </a>
        <a href="https://www.linkedin.com/in/hossam-marey/" target="_blank">
          <i class="fab fa-linkedin"></i>
        </a>
        <a href="https://behance.net/HossamMarey" target="_blank">
          <i class="fab fa-behance-square"></i>
        </a>
        <a href="https://github.com/HossamMarey" target="_blank">
          <i class="fab fa-github"></i>
        </a>
        <a href="https://www.bocourses.net/" target="_blank">
          <i class="fab fa-blogger"></i>
        </a>
        <a href="https://www.youtube.com/hossammarey" target="_blank">
          <i class="fab fa-youtube"></i>
        </a>
      </div>
      <a href="https://hossammarey.com/myresume/HossamMareyCV.pdf" class="profile-download" target="_blank">
        <i class="fas fa-download"></i>
        <span>Download Resume</span>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name: "profile"
};
</script>

<style lang="scss" scoped>
@import "@/styles/_styles.scss";

.about {
  .profile {
    padding: 0 1rem;
    h1 {
      text-align: center;
    }

    .h-card {
      flex-direction: column;
      align-items: center;
      width: 100%;
      margin: 2rem auto;
    }
    &-img img {
      border-radius: 20rem;
      margin: 2rem 0;
    }
    &-job {
      text-align: center;
      width: 100%;
      background-color: $color-gray-white;
      margin: 2rem 0;
      padding: 2rem 0;
      overflow: hidden;
      display: flex;
      position: relative;
      justify-content: center;
      align-items: center;

      h3 {
        color: $color-text-t;
        font-size: 2rem;
        position: absolute;
      }
      .job-1 {
        // left: 95px;
        // transform: skewY(-10deg) translateY(-60px);
        animation: titleAnimation 6s ease-in-out infinite;
        // -webkit-animation-fill-mode: forwards;
      }
      .job-2 {
        // left: 140px;

        animation: titleAnimation2 6s ease-in-out infinite;
      }
    }
    &-icons i {
      color: $color-gray-dark;
      font-size: 2rem;
      margin: 0.5rem;
      transition: color 0.3s;
      &:hover {
        color: $color-text-h;
      }
    }
    &-download {
      width: 100%;
      margin-top: 2rem;
      border-top: 1px solid $color-gray-light;
      text-align: center;
      color: $color-text-t;
      padding: 1.5rem 0;
      transition: all 0.3s;
      &:hover {
        color: $color-white;
        background-color: $color-blue-dark;
        border-bottom-left-radius: 4px;
        border-bottom-right-radius: 4px;
        i {
          color: $color-white;
        }
      }
      i {
        color: $color-gray-dark;
        margin-right: 1rem;
      }
    }
  }
}

@keyframes titleAnimation {
  0% {
    opacity: 0;
    transform: skewY(-10deg) translateY(-40px);
  }
  10% {
    opacity: 1;
    transform: skewY(0) translateY(0);
  }
  35% {
    transform: skewY(0) translateY(0);
    opacity: 1;
  }
  45% {
    transform: skewY(-10deg) translateY(40px);
    opacity: 0;
  }
  100% {
    opacity: 0;
  }
}
@keyframes titleAnimation2 {
  0% {
    opacity: 0;
    transform: skewY(10deg) translateY(-40px);
  }
  50% {
    transform: skewY(10deg) translateY(-40px);
    opacity: 0;
  }
  60% {
    transform: skewY(0) translateY(0);
    opacity: 1;
  }
  90% {
    opacity: 1;
    transform: skewY(0) translateY(0);
  }
  100% {
    opacity: 0;
    transform: skewY(10deg) translateY(40px);
  }
}

</style>