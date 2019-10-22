<template>
  <div class="project">
    <div class="screen d-flex justify-content-center align-items-center" @click.self="closeView">
      <div class="container" @click.self="closeView">
        <div class="row d-flex justify-content-center align-items-center" @click.self="closeView">
          <div class="h-card d-flex justify-content-between">
            <div class="img">
              <img
                :src=" require(`@/assets/img/${projects[proIndex].imgName}`)"
                :alt="projects[proIndex].desc"
              />
            </div>
            <div class="pdata">
              <div class="h-card-sec">
                <p class="p-name heading-t">{{ projects[proIndex].name }}</p>
                <!-- <span class="p-delete" @click="closeProject">X</span> -->
                <slot></slot>
              </div>
              <div class="h-card-sec">
                <p class="text-center">{{projects[proIndex].desc}}</p>
              </div>

              <div class="tags text-center">
                <span v-for=" (tag, i) in projects[proIndex].tags" :key="i">{{ tag }}</span>
              </div>
              <div class="h-card-bottom p-link d-flex justify-content-center">
                <a :href="projects[proIndex].url" target="_blank">Visit this Project</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "project",
  data() {
    return {
      imgName: "natours.jpg"
    };
  },
  computed: {
    projects() {
      if (this.$store.getters.getFiltered.length == 0) {
        return this.$store.getters.getProjects;
      } else {
        return this.$store.getters.getFiltered;
      }
    }
  },
  props: ["proIndex"],
  methods: {
    closeView() {
      this.$emit("cView");
    }
  }
};
</script>

<style lang="scss" scoped>
@import "@/styles/_styles.scss";

.project {
  .screen {
    width: 100vw;
    height: 100vh;
    background: #192038b0;
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
  .h-card {
    width: 70vw;
    min-height: 70vh;
    position: relative;
    .img {
      width: 45%;
      overflow: hidden;
      img {
        width: 100%;
        // height: 100%;
      }
    }
    .pdata {
      width: 55%;

      .p-name {
        text-align: center;
      }
      .p-delete {
        position: absolute;
        transform: scaleX(1.2);
        right: 2rem;
        top: 2rem;
        padding: 0.5rem 1rem;
        border-radius: 4rem;
        &:hover {
          box-shadow: $main-shadow;
          background: $color-gray-middle;
          cursor: pointer;
        }
      }
    }
    .p-link {
      position: absolute;
      bottom: 0;
      width: 55%;
      a {
        color: $color-white;
        &:hover {
          color: $color-text-h;
        }
      }
    }
    .tags {
      padding: 1rem 2rem;
      display: flex;
      flex-wrap: wrap;
      span {
        padding: 0.5rem 0.8rem;
        margin: 0.2rem 0.2rem;
        border-radius: 40px;
        cursor: context-menu;
        &:hover {
          background-color: $color-gray-white;
        }
      }
    }
  }
}



// tablets
@media (max-width: 768px) {
  .project {
    .h-card {
      flex-direction: column;
    }
    .img {
      height: 30rem;
      width: 100% !important;
      background-size: cover !important;
      background-position: center top;
    }
    .pdata {
      width: 100% !important;
      height: 41rem;
      .p-delete {
        background: $color-gray-middle;
        box-shadow: $main-shadow;
      }
      .p-link {
        width: 100% !important;
      }
    }
    p {
      line-height: 1.2;
    }
  }
}
@media (max-width: 576px) {
  .project {
    .h-card {
      height: 80vh;
      flex-direction: column;
    }
    .img {
      height: 20rem;
    }
    .p-link {
      z-index: 2;
    }
    .tags {
      width: 100%;
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      align-items: flex-start;
      align-content: flex-start;
      margin-bottom: 6rem !important;
      span {
        margin: 0.2rem 0.2rem !important;
        padding: 0.3rem 0.4rem !important;
        margin-bottom: 0 !important;
      }
    }
  }
}
</style>