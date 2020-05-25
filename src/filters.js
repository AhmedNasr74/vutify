import Vue from "vue";

Vue.filter("upper", function(v) {
    return v.toUpperCase();
});
