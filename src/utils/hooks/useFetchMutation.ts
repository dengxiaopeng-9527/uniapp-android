import { ref } from 'vue';

export function useFetchMutation<T, K>(apiCall: (variables: T) => Promise<K>) {
  const loading = ref<boolean>(false);
  const error = ref<any>(null);
  const data = ref<K | null>(null);

  async function mutate(variables: T): Promise<K | undefined> {
    loading.value = true;
    error.value = null;
    data.value = null;

    try {
      const res = await apiCall(variables);
      data.value = res.data;
      return res.data;
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
