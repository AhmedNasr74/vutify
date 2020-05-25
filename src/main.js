import Vue from "vue";
import axios from "axios";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./scss/main.scss";
import "normalize.css";
import "./filters";

Vue.config.productionTip = false;

new Vue({
    router,
    store,
    axios,
    render: h => h(App)
}).$mount("#app");
