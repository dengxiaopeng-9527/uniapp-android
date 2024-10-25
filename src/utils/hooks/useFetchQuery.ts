import { computed, ref, watchEffect } from 'vue';
interface IUseFetchQuery<T, K> {
  queryFn: (paylod: T) => Promise<K>;
  onSuccess?: (data: K) => void;
  onFailed?: (err: { code: number, data: K }) => void;
  initToFetch?: boolean;
}

export function useFetchQuery<T, K>(options: IUseFetchQuery<T, K>) {
  const {
    queryFn,
    onSuccess,
    onFailed,
    initToFetch = false
  } = options

  const loading = ref<boolean>(false);
  const error = ref<any>(null);
  const data = ref<K | null>(null);

  const fetchData = async (paylod: T) => {
    try {
      loading.value = true
      const res = await queryFn(paylod);
      onSuccess && onSuccess(res);
      data.value = res;
      return res;
    } catch (error: any) {
      error.value = error
      onFailed && onFailed(error)
    } finally {
      loading.value = false;
    }
  };


  return {
    loading,
    data,
    error,
    fetchData
  };
}
