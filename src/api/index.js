import { post, get } from '@/utils/request.js'
import { APIHOST, ENV } from './config'

export const imgHost = APIHOST.imgHost
export const videoHost = APIHOST.videoHost
export const nodeEnv = ENV

export const register = p => post('/admin/register', p) //登录
export const login = p => get('/admin/login', p) //登录