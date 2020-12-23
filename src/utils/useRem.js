// 使用rem单位
export function useRem() {
  var html = document.documentElement;
  html.style.fontSize = '20px';
  window.onresize = function () {
    let windowW = document.clientWidth || document.body.clientWidth;
    html.style.fontSize = 20 * (windowW / 375) + 'px';
  }
}