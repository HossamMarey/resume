import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    websites: [
      {
        name: "Todo Vue App",
        imgName: "todo-app.png",
        desc:
          "A simple project to add tasks with a filters and search for tasks , build with VueJs and Firebase DB ",
        url: "https://todos-vue.netlify.com/",
        tags: [
          "html",
          "css",
          "sass",
          "javascript",
          "bootstrap",
          "VueJs",
          "Firebase"
        ]
      },
      {
        name: "My Old Resume",
        imgName: "old-resume.png",
        desc:
          "My old resume inspired by a UI design templete from themeforest but I wrote 100% of the code and make it responsive without using any framework. ",
        url: "https://hossammarey.com/demo/old-resume",
        tags: ["html", "css", "sass", "javascript"]
      },
      {
        name: "NaTours Landing Page",
        imgName: "natours.jpg",
        desc:
          "A beautiful Landing Page based on -Advanced CSS and Sass: Flexbox, Grid, Animations and More!- Udemy course ",
        url: "https://hossammarey.com/demo/natours/",
        tags: ["html", "css", "sass"]
      },
      {
        name: "Ostora Website",
        imgName: "ostora.jpg",
        desc:
          "A beautiful website for real estate company, I built it in the internship using jQuery and small javascript libraries for sliders and maps ",
        url: "https://hossammarey.com/demo/ostora/",
        tags: ["html", "css", "javascript", "jquery", "bootstrap"]
      },
      {
        name: "Recipe App",
        imgName: "recipe.png",
        desc:
          "A simple project to add recipes ,edit and delete them with a dynamic routing , build with VueJs and Firebase DB",
        url: "https://vue-recipe-ninja.web.app/",
        tags: [
          "html",
          "css",
          "sass",
          "javascript",
          "materalize",
          "VueJs",
          "Firebase"
        ]
      },
      {
        name: "Serazatia website",
        imgName: "sera.jpg",
        desc:
          "A woocommerce website to sell online designing services build based on wordpress ,astra theme and Elementor Wp builder and it is also my ui design",
        url: "https://serazatia.com/",
        tags: ["wordpress", "woocommerce", "elementor"]
      },
      {
        name: "My Resume",
        imgName: "vue-resume.png",
        desc:
          "My resume website is built with VueJs framework and data is handeled by vuex , also it is my design ",
        url: "https://hossammarey.com/",
        tags: ["html", "css", "sass", "javascript", "bootstrap", "VueJs"]
      },
      // {
      //   name: 'Chat App',
      //   imgName: 'vue-resume.png',
      //   desc: 'A simple project to chat , build with VueJs and Firebase DB',
      //   url : 'https://hossammarey.com/demo/chat/',
      //   tags: ['html','css','javascript', 'materalize', 'VueJs', 'Firebase']
      // },
      {
        name: "Budget App",
        imgName: "budget.jpg",
        desc: "A simple project calculate your budget and track your money",
        url: "https://hossammarey.com/demo/budget/",
        tags: ["html", "css", "javascript"]
      },
      {
        name: "Dice Game",
        imgName: "dice.jpg",
        desc: "A simple javascript game based on a roundom dice ",
        url: "https://hossammarey.com/demo/dice/",
        tags: ["html", "css", "javascript"]
      },
      {
        name: "Ipda3 Website",
        imgName: "ipda3.jpg",
        desc:
          "A beautiful website for Digital Agancy company, I built it in the internship using jQuery and small javascript libraries for sliders and maps ",
        url: "https://hossammarey.com/demo/ipda3/",
        tags: ["html", "css", "javascript", "jquery", "bootstrap"]
      },
      {
        name: "Quotes App",
        imgName: "quotes.png",
        desc:
          "A simple project to manipulate data based on Udemy course : Vue JS 2 - The Complete Guide",
        url: "https://hossammarey.com/demo/quotes/",
        tags: ["html", "css", "javascript", "bootstrap", "VueJs"]
      },
      {
        name: "Shagret Al-Durr Website",
        imgName: "durr.jpg",
        desc:
          "A beautiful website for saudi company, I built it as a freelance  using jQuery and bootstrap ",
        url: "https://hossammarey.com/demo/shajaret-durr/",
        tags: ["html", "css", "javascript", "jquery", "bootstrap"]
      },
      {
        name: "ArabWp website",
        imgName: "arabwp.png",
        desc:
          "A personal website to share my knowledge about building websites with wordpress for non technical people in arabic .",
        url: "https://arabwp.net/",
        tags: ["wordpress", "woocommerce", "elementor"]
      }
    ],
    filtered: [],
    experience: [
      {
        name: "Front-End Developer",
        date: "Aug - Oct 2019",
        company: "Devs On Duty - intern"
      },
      {
        name: "Graphic Designer",
        date: "Jan - Sep 2019",
        company: "ColorMix Agancy - Mansoura"
      },
      {
        name: "Graphic Designer",
        date: "Jun 2015 - Present",
        company: "Freelancer"
      },
      {
        name: "Affiliate Marketer",
        date: "2013 - 2016",
        company: "LinkShare (online)"
      }
    ],
    btnTags: [
      { name: "All", active: true },
      { name: "SASS", active: false },
      { name: "JavaScript", active: false },
      { name: "jQuery", active: false },
      { name: "bootstrap", active: false },
      { name: "VueJs", active: false },
      // { name: "NuxtJs", active: false },
      { name: "WP Builders", active: false }
    ]
  },
  getters: {
    getExp(state) {
      return state.experience;
    },
    getbtnTags(state) {
      return state.btnTags;
    },
    getProjects(state) {
      state.filtered = state.websites;
      return state.websites;
    },
    getFiltered(state) {
      return state.filtered;
    }
  },
  mutations: {
    sbtnTags(state, tags) {
      state.btnTags = tags;
    },
    fProjects(state, tagName) {
      let webs = state.websites;

      if (tagName.toLowerCase() == "all") {
        state.filtered = webs;
      } else {
        let newwebs = webs.filter(el => {
          let tags = el.tags;

          let newtags = tags.find(tg => {
            if (tagName.toLowerCase() == "WP Builders".toLowerCase()) {
              tagName = "wordpress";
            }
            return tg.toLowerCase() == tagName.toLowerCase();
          });
          return el.tags.includes(newtags);
        });
        state.filtered = newwebs;
        // console.log(newwebs);
      }
    }
  },
  ///////////////
  actions: {
    setbtnTags({ commit }, tags) {
      commit("sbtnTags", tags);
    },
    filterProjects({ commit }, tagName) {
      commit("fProjects", tagName);
    }
  }
});
