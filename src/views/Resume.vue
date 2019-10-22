<template>
  <div class="resume">
    <div class="container">
      <div class="row d-flex justify-content-center">
        <div class="col-10">
          <h2 class="heading-s text-center">Resume</h2>
        </div>
      </div>

      <div class="row d-flex justify-content-center">
        <div class="col-12 col-md-6">
          <experience />
        </div>
        <div class="col-12 col-md-6">
          <education />
          <langauge />
        </div>
        <div class="col-12 col-md-6">
          <skills />
        </div>
        <div class="col-12 col-md-6">
          <courses />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'
import Experience from "../components/Resume/Experience";
import Education from "../components/Resume/Education";
import Langauge from "../components/Resume/Langauge";
import Skills from "../components/Resume/Skills";
import Courses from "../components/Resume/Courses";

export default {
  name: "resume",
  components: {
    Experience,
    Education,
    Langauge,
    Skills,
    Courses
  }
};
</script>
