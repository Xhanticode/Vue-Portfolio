import { createStore } from "vuex";

export default createStore({
  state: {
    project: [],
    projects: [
      {
        id: 0,
        title: "Restaurantly",
        img: "https://i.postimg.cc/65Dc5M6F/Restaurantly-Site.png",
        github: "",
        live: "",
      },
      {
        id: 1,
        title: "Xhanti Portfolio",
        img: "https://i.postimg.cc/qMk0DGdV/Mock-Portfolio-Site.png",
      },
      {
        id: 2,
        title: "iX",
        img: "https://i.postimg.cc/T1Ypqvdh/iX-Site.png",
        github: "",
        live: "",
      },
      {
        id: 3,
        title: "Daily Planner",
        img: "https://i.postimg.cc/CxVpWH8s/Daily-Planner-Site.png",
        github: "",
        live: "",
      },
    ],
  },
  getters: {},
  mutations: {},
  actions: {},
  modules: {},
});
