<template>
  <div class="col-10 col-md-8 about-me">
    <div class="h-card d-flex">
      <h3 class="heading-t h-card-sec">About Me</h3>
      <p
        class="p h-card-sec"
      >Hello! I’m Hossam Marey. Web designer from Egypt, Mansoura. I have a passion in website designing and building, also I am good at wordpress builders. I love to talk with you about our unique.</p>
      <div class="h-card-sec info">
        <p>
          <strong>Nationality : ..</strong> Egyptian
        </p>
        <p>
          <strong>DOP : ..</strong> 07/11/1992
        </p>
        <p>
          <strong>Adress : ..</strong> Mansoura (ready to relocate)
        </p>
        <p>
          <strong>Freelance : ..</strong> Available
        </p>
        <p>
          <strong>Status : ..</strong> Looking for a job
        </p>
      </div>
      <div class="hire-me">
        <router-link to="/contact" class="btn btn-secondary">Hire Me</router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "about-me"
};
</script>

<style lang="scss" scoped>
.about-me {
  padding: 0 1rem;
  .h-card {
    flex-direction: column;
    width: 100%;
    margin: 2rem auto;

    .info p {
      display: inline-block;
      width: 50%;
    }
    .hire-me {
      text-align: center;
      margin: 1.8rem 0;
    }
  }
}

@media (max-width: 576px) {
  .about-me {
    .h-card {
      .info p {
        width: 90%;
      }
    }
  }
}
</style>