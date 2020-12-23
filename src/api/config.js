
export const ENV = process.env.ENV
const apiHost = {
  // 资源域名
  imgHost: 'https://image.xxx.com',
  imgHost_dev: 'https://imagedev.xxx.com',
  videoHost: 'https://video.xxx.com',
  videoHost_dev: 'https://videodev.xxx.com'
}
let api = {
  imgHost: '',
  videoHost: ''
}
if (ENV === 'production') {
  api.imgHost = apiHost.imgHost_dev
  api.videoHost = apiHost.videoHost_dev
} else {
  api.imgHost = apiHost.imgHost
  api.videoHost = apiHost.videoHost
}
export const APIHOST = api