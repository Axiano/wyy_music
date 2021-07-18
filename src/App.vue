<template>
	<div id="app">
		<header>
			<router-link :to="{name: 'Home'}">
				<div class="left">
					网易云
				</div>
			</router-link>
		</header>
		<router-view></router-view>
	</div>
</template>

<script>
	export default {
		data() {
			return {}
		},
		methods: {
			async login() {

			}
		},
	}
</script>
<style lang="scss">
	header {
		box-sizing: border-box;
		width: 100%;
		height: 50px;
		padding: 0 40px;
		background-color: #ffffff;
		font-size: 25px;
		font-weight: 600;
		line-height: 50px;
	}
</style>
