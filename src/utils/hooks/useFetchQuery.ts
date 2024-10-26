import { computed, ref, onMounted } from 'vue';

interface IUseFetchQuery<T, K> {
  queryFn: (paylod: T) => Promise<K>;
  initToFetch?: boolean;
  initParams?: T
}

export function useFetchQuery<T, K>(options: IUseFetchQuery<T, K>) {
  const {
    queryFn,
    initToFetch = true,
    initParams
  } = options

  const loading = ref<boolean>(false);
  const error = ref<any>(null);
  const data = ref<K | null>(null);

  const fetchData = async (paylod: T) => {
    try {
      loading.value = true
      // @ts-ignore
      const res: { data: K, code: number } = await queryFn(paylod);
      if (res.code == 200) {
        data.value = res.data;
        return res;
      } else {
        error.value = res
      }
    } catch (error: any) {
      error.value = error
    } finally {
      loading.value = false;
    }
  };

  onMounted(() => {
    if (initToFetch) fetchData(initParams || {} as T)
  })

  return {
    loading,
    data,
    error,
    fetchData
  };
}
