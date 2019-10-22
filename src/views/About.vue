<template>
  <div class="about ">
    <div class="container">
      <div class="row d-flex justify-content-center">
        <profile/>
        <about-me/>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Profile from '../components/about/Profile'
import AboutMe from '../components/about/AboutMe'

export default {
  name: "about",
  components : {
    Profile,AboutMe
  }
};
</script>
