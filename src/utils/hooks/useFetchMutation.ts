import { ref } from 'vue';

export function useFetchMutation<T, K>(apiCall: (palyload: T) => Promise<K>) {
  const loading = ref<boolean>(false);
  const error = ref<any>(null);
  const data = ref<K | null>(null);

  async function mutate(palyload: T): Promise<K | undefined> {
    loading.value = true;
    error.value = null;
    data.value = null;

    try {
      // @ts-ignore
      const res: { data: K, code: number } = await apiCall(palyload);
      if(res.code == 200){
        data.value = res.data;
        return res.data;
      }else{
        error.value = res
      }
    } catch (err) {
      error.value = err as Error;
    } finally {
      loading.value = false
    }
  }

  return {
    mutate,
    loading,
    data,
    error
  };
}
