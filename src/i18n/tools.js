
export function changeLang(__this, v) {
  localStorage.setItem('lang', v)
  __this.$i18n.locale = localStorage.getItem('lang')
}