import Vue from "vue";
import "iview/dist/styles/iview.css";
import {
	Input,
	Button,
	Icon,
	DatePicker,
} from 'iview'
Vue.component('Input', Input)
Vue.component('Button', Button)
Vue.component('Icon', Icon)
Vue.component('DatePicker', DatePicker)

import App from "@/App";

new Vue({
  el: "#app",
  components: { App },
  template: "<App/>"
});
