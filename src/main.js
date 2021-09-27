import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import mixins from './mixins'
import i18nPlugin from './plugins/i18n'

const i18nStrings = {
    en: {
        hi: 'Hello!'
    },
    ko: {
        hi: '안녕하세요!'
    }
}

const app = createApp(App)

app.directive('focus', {
    mounted(el){
        el.focus()
    }
})

app.use(router)
app.mixin(mixins)
app.mount('#app')
app.use(i18nPlugin, i18nStrings) 
window.Kakao.init("3acfd69fd8bc529b2b0ed8a15f4bf428") // 발급받은 kakao JS키