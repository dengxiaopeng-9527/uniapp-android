<template>
  <view style="font-size: 24rpx">
    <view>
      <view style="text-align: center"> count--------- {{ count }} </view>
      <view style="text-align: center"> doubleCount--------{{ doubleCount }} </view>
      <up-button
        style="margin-top: 24rpx"
        @click="add"
        type="success"
        text="add"
      ></up-button>

      <up-button
        :loading="loading"
        style="margin-top: 24rpx"
        @click="getUser"
        type="success"
        text="发起请求"
      ></up-button>

      <up-button
        :loading="updateLoading"
        style="margin-top: 24rpx"
        @click="postUser"
        type="success"
        text="发起请求POST"
      ></up-button>

      
    </view>
  </view>
</template>

<script setup lang="ts">
import { useStore } from "vuex";
import { computed } from "vue";

import { useFetchQuery } from "@/utils/hooks/useFetchQuery";
import { getUserInfo, updateInfo } from "@/service/home";
import { useFetchMutation } from "@/utils/hooks/useFetchMutation";

const store = useStore();
const count = computed(() => store.state.home.count);
const doubleCount = computed(() => store.getters["home/doubleCount"]);

const add = () => {
  store.dispatch("home/add");
};

const { data, error, loading, fetchData } = useFetchQuery<IUserParams, IUserInfo>({
  queryFn: getUserInfo,
  initParams: { id: 3 },
  initToFetch: false,
});

const getUser = async () => {
  fetchData({ id: 2 }).then((re) => {
    console.log(re, "111");
  });
};

const { mutate, loading: updateLoading } = useFetchMutation<IUserInfo, IUserInfo>(
  updateInfo
);
const postUser = async () => {
  mutate({ id: 2, name: "张三" });
};
</script>

<style></style>
