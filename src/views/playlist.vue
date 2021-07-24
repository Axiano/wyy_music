<template>
	<div>
		<div class="ListBoxs">
			<h1>{{list.name}}</h1>
			<div class="listBox">
				<div class="musicBox" v-for="(item,index) in list.tracks" :key="index">
					<h2>{{item.name}}</h2>
				</div>
			</div>
		</div>
		<addButton></addButton>
	</div>
</template>

<script>
	import addButton from '../components/addButton.vue'
	export default {
		data() {
			return {
				list: [],
			}
		},
		created() {},
		mounted() {
			this.getMusicList()
		},
		methods: {
			async getMusicList() {
				const id = this.$route.query.id
				const res = await this.$axios.get(`/playlist/detail?id=${id}&cookie=${this.$cookies.get("cookie")}`)
				this.list = res.data.playlist
				console.log(this.list)
			},
		},
		components:{
			addButton
		}
	}
</script>

<style lang="scss">
	.ListBoxs {
		width: 60%;
		height: 600px;
		background-color: #FFFFFF;
		margin: 0 auto;
		margin-top: 30px;
		padding-top: 20px;
	}

	.ListBoxs H1 {
		font-size: 25px;
		text-align: center;
	}

	.listBox {
		.musicBox {
			width: 80%;
			height: 100px;
			background-color: aqua;
			margin: 0 auto;
			box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
			border-radius: 20px;

			h2 {
				font-size: 20px;
			}
		}
	}

	// 测试



	
</style>
