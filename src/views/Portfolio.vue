<template>
  <div class="portfolio">
    <div class="container">
      <div class="row d-flex justify-content-center">
        <div class="col-10">
          <h2 class="heading-s text-center">Portfolio</h2>
        </div>
      </div>
      <div class="row d-flex justify-content-center">
        <!-- ////////////////// -->
        <div class="col-12 col-md-6 p-4">
          <div class="h-card">
            <h2 class="h-card-head h-card-sec d-flex justify-content-between">
              <span>ui & gRAPHIC dESIGN</span>
              <i class="fab fa-behance"></i>
            </h2>
            <div class="link">
              <a href="https://behance.net/HossamMarey" target="_blank">
                <img src="../assets/img/design.png" alt="graphic design" />
                <i class="fab fa-behance"></i>
              </a>
            </div>
          </div>
        </div>
        <!-- //////////// -->
        <div class="col-12 col-md-6 p-4">
          <div class="h-card">
            <h2 class="h-card-head h-card-sec d-flex justify-content-between">
              <span>Front-end Dev</span>
              <i class="fas fa-th-large"></i>
            </h2>
            <div class="link">
              <router-link tag="a" to="/portfolio/front-end">
                <img src="../assets/img/web.png" alt="graphic design" />
                <i class="fas fa-th-large"></i>
              </router-link>
            </div>
          </div>
        </div>
        <!-- ///////////// -->
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
@import "@/styles/_styles.scss";

.portfolio {
  // .container {
  //   margin: 0 auto !important;
  // }
  // .row {
  //   transform: translateX(-2%);
  // }
  .h-card {
    // margin: 2rem;
  }
  .link {
    position: relative;
    transition: all 0.3s;
    img {
      width: 100%;
      height: 100%;
    }
    i {
      display: none;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      font-size: 7rem;
      color: $color-white;
      z-index: 3;
      opacity: 0.7;
    }
    &:hover {
      a:after {
        content: "";
        display: block;
        width: 100%;
        height: 100%;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        background: $gold-gradient;
        opacity: 0.9;
      }
      i {
        display: inline-block;
      }
    }
  }
}
</style>
