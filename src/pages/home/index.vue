<template>
  <view style="font-size: 24rpx">
    <view>
      <view style="text-align: center"> count--------- {{ count }} </view>
      <view style="text-align: center"> doubleCount--------- {{ doubleCount }} </view>
      <up-button
        style="margin-top: 24rpx"
        @click="add"
        type="success"
        text="add"
      ></up-button>

      <up-button
        :loading="loading"
        style="margin-top: 24rpx"
        @click="getuserInfo"
        type="success"
        text="发起请求"
      ></up-button>
    </view>
  </view>
</template>

<script setup lang="ts">
import { useStore } from "vuex";
import { computed } from "vue";

import api from "@/utils/request/api";
import { useFetch } from "../../utils/hooks/useFetch.js";

const store = useStore();
const count = computed(() => store.state.home.count);
const doubleCount = computed(() => store.getters["home/doubleCount"]);

const add = () => {
  store.dispatch("home/add");
};

const {
  loading,
  data,
  setFetchParams, // 重新设置参数，设置后自动发起请求
  // refreshFetch
} = useFetch({
  interface: api.getUserInfo, // 请求的方法
  initParams: null,
  initData: {},
  notFetch: (params: any) => !params,
  onSuccess: (data: any) => {
    console.log("data==>", data);
  },
  onFailed: (err: any) => {
    console.log("errData==>", err);
  },
});

const getuserInfo = async () => {
  console.log("loading===>", loading);
  setFetchParams({ id: 2 });
};
</script>

<style></style>
