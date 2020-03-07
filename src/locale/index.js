import Vue from 'vue'
import VueI18n from 'vue-i18n'
import elmentEnLocale from 'element-ui/lib/locale/lang/en'
import elmentZhLocale from 'element-ui/lib/locale/lang/zh-CN'

import en from './en-US'
import zh from './zh-CN'

Vue.use(VueI18n)

const messages = {
  en: {
    elmentEnLocale,
    en
  },
  zh: {
    elmentZhLocale,
    zh
  }
}
const lang = 'zh_CN'

export default new VueI18n({
  locale: lang,
  messages
})
