export interface EndpointConfig {
  url: string;
  method: 'GET' | 'POST'; // 可以扩展到其他HTTP方法
  fetchName: string;
  paramsAddUrlSearch?: boolean; // POST等请求下body参数，是否需要将参数拼接到url后面
  headers?: Record<string, string>; // 可选的headers属性
}

export interface IUseFetchOptions {
  interface: (data: any, additionalHeaders?: Record<string, string>) => Promise<any>;
  initParams: any;
  initData: any;
  notFetch?: (params?:any) => boolean;
  onSuccess?:(data:any) => void;
  onFailed?:(err:any) => void;
}

export interface IUseFetchReturns {
 
}
