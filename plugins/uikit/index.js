import Vue from 'vue'

import UIkit from 'uikit'
import Icons from 'uikit/dist/js/uikit-icons'
import jquery from 'jquery'

UIkit.use(Icons)
UIkit.container = '#__nuxt'

Vue.prototype.$uikit = UIkit
Vue.prototype.jQuery = jquery
window.UIkit = UIkit;