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
	
</style>
