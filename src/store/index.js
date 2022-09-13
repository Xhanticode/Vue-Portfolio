import { createStore } from "vuex";

export default createStore({
  state: {
    project: [],
    projects: [
      {
        id: 0,
        title: "Jewels",
        img: "https://i.postimg.cc/JzxGSQ2k/Screenshot-2022-09-13-at-15-27-55.png",
        github: "https://github.com/Xhanticode/jewels",
        live: "https://roaring-dodol-729410.netlify.app/",
      },
      {
        id: 1,
        title: "Xhvnti",
        img: "https://i.postimg.cc/qMZF2wvm/Screenshot-2022-09-13-at-14-47-09.png",
        github: "https://github.com/Xhanticode/xhvnti_frontend",
        live: "https://xhvnti.co.za",
      },
      {
        id: 2,
        title: "Restaurantly",
        img: "https://i.postimg.cc/65Dc5M6F/Restaurantly-Site.png",
        github: "https://github.com/Xhanticode/Restaurant",
        live: "https://ephemeral-hamster-c1068a.netlify.app",
      },
      {
        id: 3,
        title: "Xhanti Portfolio",
        img: "https://i.postimg.cc/qMk0DGdV/Mock-Portfolio-Site.png",
        live: "https://xhantimpu.co.za",
      },
      {
        id: 4,
        title: "iX",
        img: "https://i.postimg.cc/T1Ypqvdh/iX-Site.png",
        github: "https://github.com/Xhanticode/iX",
        live: "https://gentle-taiyaki-943237.netlify.app",
      },
      {
        id: 5,
        title: "Daily Planner",
        img: "https://i.postimg.cc/CxVpWH8s/Daily-Planner-Site.png",
        github: "https://github.com/Xhanticode/To-Do-List-App",
        live: "https://cosmic-mandazi-4135ee.netlify.app",
      },
    ],
  },
  getters: {},
  mutations: {},
  actions: {},
  modules: {},
});
