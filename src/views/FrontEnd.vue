<template>
  <div class="front-end">
    <div class="container">
      <div class="row d-flex justify-content-center">
        <div class="col-10">
          <h2 class="heading-s text-center">Recent Works</h2>
        </div>
      </div>
      <!-- /// filter //// -->
      <div class="row d-flex justify-content-center mb-4">
        <!-- filter btns ///////  -->
        <button
          class="btn btn-primary"
          v-for="(btn, i) in btnTags"
          :key="i"
          :class="{'btn-active': btn.active}"
          @click="filterTags(btn)"
        >{{btn.name}}</button>
      </div>
      <!-- /////// portfolio ///////// -->
      <transition name="fade" appear mode="out-in">
        <div class="row d-flex justify-content-center">
          <!-- ///////////// looooooo projects  /////////// -->

          <div class="col-12 col-md-6 col-lg-4 porto-item" v-for="(pro,i) in projects" :key="i">
            <div class="h-card">
              <div class="img" @click="viewProject(i)">
                <img :src=" require(`@/assets/img/${pro.imgName}`)" alt="project description" />
                <div class="btn">View Project</div>
              </div>
              <div class="h-card-bottom">
                <h3 class="heading-t text-center">{{pro.name}}</h3>
              </div>
            </div>

            <!-- ////// project view /////// -->
            <project v-if="opened" :proIndex="proIndex" @cView="cView">
              <span class="p-delete" @click="closeProject">X</span>
            </project>
            <!-- ////// project view /////// -->
          </div>
          <!-- ////// loooooop//////  -->
        </div>
      </transition>
    </div>
  </div>
</template>

<script>
import Project from "../components/Project";
export default {
  components: {
    Project
  },
  data() {
    return {
      opened: false,
      proIndex: 1
    };
  },
  computed: {
    btnTags() {
      return this.$store.getters.getbtnTags;
    },
    projects() {
      if (this.$store.getters.getFiltered.length == 0) {
        return this.$store.getters.getProjects;
      } else {
        return this.$store.getters.getFiltered;
      }
    }
  },
  methods: {
    viewProject(index) {
      this.opened = !this.opened;
      this.proIndex = index;
    },
    closeProject() {
      this.opened = !this.opened;
    },
    cView() {
      this.opened = false;
    },
    filterTags(tag) {
     
      const tags = this.btnTags;
      tags.forEach(el => {
        el.active = false;
        if (el.name === tag.name) {
          el.active = true;
        }
      });
      this.$store.dispatch("filterProjects", tag.name);
      this.$store.dispatch("setbtnTags", tags);

    }
  }
};
</script>

<style lang="scss" scoped>
@import "../styles/_styles.scss";

// .fade-enter {
//   opacity: 0;
// }
// .fade-enter-active {
//   transition: opacity 2s;
// }
// .fade-leave {
//   opacity: 1;
// }
// .fade-leave-active {
//   transition: opacity 2s;
//   opacity: 0;
// }
.fade-enter-active, .fade-leave-active {
  transition: all .5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}


.front-end {
  .btn-active {
    background-color: $color-text-h !important;
  }
  .h-card {
    overflow: hidden;
  }
  .porto-item {
    .heading-t {
      font-weight: 400;
      font-size: 1.8rem !important;
    }
    .img {
      position: relative;
      .btn {
        display: none;
      }
      &:hover:after {
        content: "";
        display: block;
        width: 100%;
        height: 100%;
        background: $gold-gradient;
        opacity: 0.7;
        position: absolute;
        top: 0;
        left: 0;
        cursor: pointer;
      }
      &:hover .btn {
        display: inline-block !important;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        cursor: pointer;
      }
      img {
        width: 100%;
      }
    }
  }
}
</style>
