<template>
	<view class="content">
		<up-button @click="getFn()" type="primary" :plain="true" :hairline="true" text="发请求"></up-button>
	</view>
</template>

<script setup lang="ts">
	import api from "../../utils/request/api.js"
		
	const getFn = async () => {

	 	api.getUserInfo()
	}

</script>

<style>
	.content {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}

	.logo {
		height: 200rpx;
		width: 200rpx;
		margin-top: 200rpx;
		margin-left: auto;
		margin-right: auto;
		margin-bottom: 50rpx;
	}

	.text-area {
		display: flex;
		justify-content: center;
	}

	.title {
		font-size: 36rpx;
		color: #8f8f94;
	}
</style>
