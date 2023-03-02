import Vue from "vue";
import App from "./App.vue";
import VueRouter from "vue-router";
import HomePage from "./components/HomePage.vue";
// import NewsArticles from './components/NewsArticles.vue'
import BusinessNews from "./components/BusinessNews.vue";
import SportsNews from "./components/SportsNews.vue";
import ScienceNews from "./components/ScienceNews.vue";
import BollywoodNews from "./components/BollywoodNews.vue";
import HollywoodNews from "./components/HollywoodNews.vue";
import KidsNews from "./components/KidsNews.vue";
import TeslaNews from "./components/TeslaNews.vue";

import NorthAmerica from "./components/northamerica/NorthAmerica.vue";
import NABusiness from "./components/northamerica/NABusiness.vue";
import NASports from "./components/northamerica/NASports.vue";
import NAHollywood from "./components/northamerica/NAHollywood.vue";
import NAMurder from "./components/northamerica/NAMurders.vue";
import NACanada from "./components/northamerica/NACanada.vue";
import NAUsa from "./components/northamerica/NAUsa.vue";

import NewsArticles from "./components/NewsArticles.vue";

import SouthAmerica from "./components/southamerica/SouthAmerica.vue";
import SABusiness from "./components/southamerica/SABusiness.vue";
import SASports from "./components/southamerica/SASports.vue";
import SAHollywood from "./components/southamerica/SAHollywood.vue";
import SAMurder from "./components/southamerica/SAMurders.vue";
import SABrazil from "./components/southamerica/SABrazil.vue";
import SAArgentina from "./components/southamerica/SAArgentina.vue";

import EuropeC from "./components/europe/EuropeC.vue";
import EUBusiness from "./components/europe/EUBusiness.vue";
import EUSports from "./components/europe/EUSports.vue";
import EUHollywood from "./components/europe/EUHollywood.vue";
import EUMurder from "./components/europe/EUMurders.vue";
import EUSpain from "./components/europe/EUSpain.vue";
import EUFrance from "./components/europe/EUFrance.vue";

import AustraliaC from "./components/australia/AustraliaC.vue";
import AUBusiness from "./components/australia/AUBusiness.vue";
import AUSports from "./components/australia/AUSports.vue";
import AUHollywood from "./components/australia/AUHollywood.vue";
import AUMurder from "./components/australia/AUMurders.vue";
import AUWestAus from "./components/australia/AUWestAus.vue";
import AUQueensland from "./components/australia/AUQueensland.vue";


import AsiaC from "./components/asia/AsiaC.vue";
import ASBusiness from "./components/asia/ASBusiness.vue";
import ASSports from "./components/asia/ASSports.vue";
import ASBollywood from "./components/asia/ASBollywood.vue";
import ASMurder from "./components/asia/ASMurders.vue";
import ASIndia from "./components/asia/ASIndia.vue";
import ASChina from "./components/asia/ASChina.vue";
import ASRussia from "./components/asia/ASRussia.vue";


import AfricaC from "./components/africa/AfricaC.vue";
import AfBusiness from "./components/africa/AfBusiness.vue";
import AfSports from "./components/africa/AfSports.vue";
import AfHollywood from "./components/africa/AfHollywood.vue";
import AfMurder from "./components/africa/AfMurders.vue";
import AfSouthAfrica from "./components/africa/AfSouthAfrica.vue";
import AfEgypt from "./components/africa/AfEgypt.vue";

Vue.config.productionTip = false;

Vue.use(VueRouter);

const routes = [
  { path: "/", component: HomePage },
  {
    path: "/search/:query",
    name: "search",
    component: NewsArticles,
    props: true,
  },
  { path: "/business", component: BusinessNews },
  { path: "/sports", component: SportsNews },
  { path: "/science", component: ScienceNews },
  { path: "/bollywood", component: BollywoodNews },
  { path: "/hollywood", component: HollywoodNews },
  { path: "/kids", component: KidsNews },
  { path: "/tesla", component: TeslaNews },
  {
    path: "/northamerica",
    component: NorthAmerica,
    children: [
      {
        path: "business",
        component: NABusiness,
      },
      {
        path: "sports",
        component: NASports,
      },
      {
        path: "hollywood",
        component: NAHollywood,
      },
      {
        path: "murders",
        component: NAMurder,
      },
      {
        path: "canada",
        component: NACanada
      },
      {
        path: "usa",
        component: NAUsa
      }
    ],
  },
  {
    path: "/southamerica",
    component: SouthAmerica,
    children: [
      {
        path: "business",
        component: SABusiness,
      },
      {
        path: "sports",
        component: SASports,
      },
      {
        path: "hollywood",
        component: SAHollywood,
      },
      {
        path: "murders",
        component: SAMurder,
      },
      {
        path: "brazil",
        component: SABrazil
      },
      {
        path: "argentina",
        component: SAArgentina
      }
    ],
  },
  {
    path: "/europe",
    component: EuropeC,
    children: [
        {
          path: "spain",
          component: EUSpain
        },
        {
          path: "business",
          component: EUBusiness,
        },
        {
          path: "sports",
          component: EUSports,
        },
        {
          path: "hollywood",
          component: EUHollywood,
        },
        {
          path: "murders",
          component: EUMurder,
        },
        {
          path: "france",
          component: EUFrance
        }
    ]
  },
  {
    path: "/australia",
    component: AustraliaC,
    children: [
      {
        path: "business",
        component: AUBusiness,
      },
      {
        path: "sports",
        component: AUSports,
      },
      {
        path: "hollywood",
        component: AUHollywood,
      },
      {
        path: "murders",
        component: AUMurder,
      },
      {
        path: "western-australia",
        component: AUWestAus
      },
      {
        path: "queensland",
        component: AUQueensland
      }
    ],
  },
  {
    path: "/asia",
    component: AsiaC,
    children: [
      {
        path: "business",
        component: ASBusiness,
      },
      {
        path: "sports",
        component: ASSports,
      },
      {
        path: "bollywood",
        component: ASBollywood,
      },
      {
        path: "murders",
        component: ASMurder,
      },
      {
        path: "india",
        component: ASIndia
      },
      {
        path: "china",
        component: ASChina
      },
      {
        path: "russia",
        component: ASRussia
      }
    ],
  },
  {
    path: "/africa",
    component: AfricaC,
    children: [
      {
        path: "business",
        component: AfBusiness,
      },
      {
        path: "sports",
        component: AfSports,
      },
      {
        path: "hollywood",
        component: AfHollywood,
      },
      {
        path: "murders",
        component: AfMurder,
      },
      {
        path: "south-africa",
        component: AfSouthAfrica
      },
      {
        path: "egypt",
        component: AfEgypt
      }
    ],
  },
];

const router = new VueRouter({
  mode: "history",
  routes,
  linkExactActiveClass: "active",
});

new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");
