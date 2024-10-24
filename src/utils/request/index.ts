// 引入配置
import { BASE_URL } from './config';
// 引入拦截器配置
import { requestInterceptors, responseInterceptors } from './interceptors.js';
// 引入luch-request
import { http } from "uview-plus";

//  初始化请求配置
export const initRequest = (vm: any) => {
	http.setConfig((defaultConfig: any) => {
		/* defaultConfig 为默认全局配置 */
		defaultConfig.baseURL = BASE_URL /* 根域名 */
		return defaultConfig
	})
	requestInterceptors(vm)
	responseInterceptors(vm)
}


