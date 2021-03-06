import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import ElementUI, {Popover} from 'element-ui';
import SvgIcon from 'vue-svgicon';
import mavonEditor from 'mavon-editor';

import '@/icons/components'
import '@/assets/less/index.less';
import 'element-ui/lib/theme-chalk/index.css';
import 'mavon-editor/dist/css/index.css';

Vue.use(ElementUI);
Vue.use(mavonEditor);
Vue.config.productionTip = false

Vue.use(SvgIcon, {
  tagName: 'svg-icon',
  defaultWidth: '1em',
  defaultHeight: '1em'
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
