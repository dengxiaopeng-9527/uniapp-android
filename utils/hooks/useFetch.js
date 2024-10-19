import { ref, watchEffect } from 'vue';
/**
 * @param {Object} options - 配置选项
 * @param {Function} options.interface - 发起请求的函数
 * @param {Object} [options.initParams={}] - 初始请求参数
 * @param {Object} [options.initData={}] - 初始数据
 * @param {Function} [options.notFetch] - 一个返回布尔值的函数，用于决定是否发起请求
 * @param {Function} [options.onSuccess] - 请求成功时的回调函数
 * @param {Function} [options.onFailed] - 请求失败时的回调函数
 * @returns {Object} 返回一个对象，包含 loading, data, setFetchParams 和 refreshFetch 方法
 */
export function useFetch(options) {
  const { 
    interface: fetchFn, 
    initParams = null, 
    initData = null, 
    notFetch = () => false,
    onSuccess = () => {},
    onFailed = () => {}
  } = options;

  const loading = ref(false);
  const data = ref(initData);
  const params = ref(initParams);

  const setFetchParams = (newParams) => {
    params.value = newParams;
  };

  const fetchData = async () => {
    if (notFetch(params.value)) {
      return;
    }

    loading.value = true;
    try {
      const res = await fetchFn(params.value);
      if (res.code == 200) {
        data.value = res.data;
        onSuccess(res.data);
      } else {
        onFailed(res);
      }
    } catch (error) {
      onFailed(error);
    } finally {
      loading.value = false;
    }
  };

  // 监听 params 的变化，自动触发请求
  watchEffect(fetchData);

  return {
    loading,
    data,
    setFetchParams,
    refreshFetch: fetchData
  };
}