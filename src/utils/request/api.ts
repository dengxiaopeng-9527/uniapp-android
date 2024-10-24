import {
	http
} from 'uview-plus';

import service from "../../service/index.js"
import type { EndpointConfig } from '@/pages/types/service.js';

interface ApiMethods<T> {
	[key: string]: (data: T, additionalHeaders: any) => any;
}

// 创建一个对象来存储请求函数
const api: { [key: string]: <T>(data: T, additionalHeaders?: Record<string, string>) => Promise<any> } = {};

// 通用的请求处理函数
const createRequestFunction = (item: EndpointConfig) => {
	return function <T>(data: T, additionalHeaders: Record<string, string> = {}) {
		const headers = {
			// "Authorization": uni.getStorageSync("Access_token") || '',
			...item.headers,
			...additionalHeaders
		};
		const options = {
			header: headers
		};

		if (!item.method || item.method === 'GET') {
			// 如果是GET请求，data应该是params
			return http.get(item.url, {
				params: data,
				...options
			});
		} else {
			// 对于其他类型的请求，data直接作为body传递
			if(item.paramsAddUrlSearch && typeof data === 'object'){
				 // 将参数拼接到URL后面 
				 // @ts-ignore
				 const searchParams = new URLSearchParams(Object.entries(data));
				 item.url += '?' + searchParams.toString();
			}

			return http[item.method.toLowerCase()](item.url, data, options);
		}
	};
};

// 遍历service并为每个元素创建一个请求方法
service.forEach(item => {
	api[item.fetchName] = createRequestFunction(item);
});


export default api;