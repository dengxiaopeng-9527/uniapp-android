import {
	http,
	toast
} from 'uview-plus';

export const requestInterceptors = (vm: any) => {
	/**
	 * 请求拦截
	 * @param {Object} http
	 */
	http.interceptors.request.use(
		(config: any) => {
			// 初始化请求拦截器时，会执行此方法，此时data为undefined，赋予默认{}
			config.data = config.data || {};
			return config
		},
		(config: any) => Promise.reject(config)
	)
}

export const responseInterceptors = (vm: any) => {
	/**
	 * 响应拦截
	 * @param {Object} http 
	 */
	http.interceptors.response.use((response: any) => {
		console.log("response:", response)
		const data = response.data
		if (data.code != 200) {
			toast(data?.message || "请求出错")
			return data;
		}
		return data.data || {}
	},
		(error: any) => {
			// 如果响应失败，根据状态码进行不同的错误处理
			if (error.statusCode) {
				const statusCode = error.statusCode;

				if (statusCode >= 400 && statusCode < 500) {
					// 客户端错误
					switch (statusCode) {
						case 400:
							toast('请求无效');
							break;
						case 401:
							toast('未授权，请登录');
							break;
						case 403:
							toast('没有权限访问该资源');
							break;
						case 404:
							toast('请求的资源不存在');
							break;
						case 422:
							toast('请求的数据无效');
							break;
						default:
							toast(`客户端错误: ${statusCode}`);
					}
				} else if (statusCode >= 500 && statusCode < 600) {
					toast('服务器内部错误，请稍后再试');
				} else {
					toast('网络请求出现未知错误');
				}

				// 返回Promise.reject以确保链式调用中的catch可以捕获到错误
				return Promise.reject(error);
			} else {
				toast('网络请求失败，请检查您的网络连接');
				return Promise.reject(error);
			}

		})
}