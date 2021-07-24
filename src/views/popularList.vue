<template>
	<div class="projects-section">
		<div class="projects-section-header">
			<p>热门热单</p>
			<p class="time">December, 12</p>
		</div>
		<div class="container">
			<transition name="el-fade-in">
				<ul class="hotMusicList" v-if="Isshow">
					<li class="musicListBoxStyle" v-for="(item,index) in popularList" :key="index"
						@click="musicListBtn(item.id)">
						<img type="image" :src="item.coverImgUrl" />
						<h2>{{item.name}}</h2>
						<div class="tagBox">
						</div>
					</li>
				</ul>
			</transition>
			<transition name="el-fade-in">
				<button class="backBtn" @click="IsshowBtn" v-if="!Isshow2"><i class="el-icon-arrow-left"></i>返回</button>
			</transition>
			<transition name="el-fade-in">
				<button class="addListBtn" v-if="!Isshow2" @click="addMusicBtn">添加播放列表</button>
			</transition>
			<transition name="el-fade-in">
				<div class="musicListBox" v-if="!Isshow2">
					<div class="musicListBoxStyle" v-for="(item,index) in musicList.tracks" :key="index"
						@click="musicListBtn(item.id)">
						<img type="image" :src="item.al.picUrl" />
						<h2>{{item.name}}</h2>
						<div class="tagBox">
						</div>
					</div>
					<el-alert title="没有啦,登录查看等多" type="info" center show-icon />
				</div>
			</transition>
		</div>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				order: 'hot', //new
				limit: 6,
				popularList: [],
				musicList: [],
				Isshow: true,
				Isshow2: true,
			}
		},
		mounted() {
			this.getpopularList()
		},
		methods: {
			// 获取歌单列表
			async getpopularList() {
				const {
					data: res
					// `/top/playlist?limit=${this.limit}&order=${this.order}`
				} = await this.$axios.get(`/top/playlist/highquality`)
				if (res.code === 200) {
					this.popularList = res.playlists
					console.log(this.popularList)
				} else {
					this.open4()
				}
			},
			// 获取歌曲列表
			async musicListBtn(itemId) {
				this.Isshow = !this.Isshow
				setTimeout(() => {
					this.Isshow2 = !this.Isshow2
				}, 300)
				const id = this.$route.query.id
				if (this.$cookies.get("cookie") !== null) {
					const res = await this.$axios.get(
						`/playlist/detail?id=${id}&cookie=${this.$cookies.get("cookie")}`)
					this.musicList = res.data.playlist
				} else {
					const res = await this.$axios.get(`/playlist/detail?id=${itemId}`)
					this.musicList = res.data.playlist
				}
			},
			// 显示隐藏
			IsshowBtn() {
				this.Isshow2 = true
				setTimeout(() => {
					this.Isshow = true
				}, 300)
			},
			// 添加音乐到列表
			async addMusicBtn() {
				this.$store.commit('addMusic',this.musicList.tracks)
			}
		}
	}
</script>

<style lang="scss" scoped>
	.container {
		height: 75vh;
		overflow: hidden;
		padding-bottom: 20px;
	}

	.hotMusicList {
		overflow: auto;
		height: 100%;
		margin: 0 auto;
		padding-left: 0;
	}

	.musicListBoxStyle {
		display: flex;
		flex-direction: row;
		border-radius: 15px;
		padding: 10px;
		padding-left: 20px;
		margin: 10px;
		background-color: #c3cff4;
		transition: all .5s;
		cursor: pointer;
		h2 {
			font-size: 15px;
			white-space: nowrap;
			overflow: hidden;
			text-overflow: ellipsis;
		}

		img {
			width: 40px;
			height: 40px;
			border-radius: 50%;
			margin-right: 5%;
			// margin-top: 5%;
		}
	}

	.musicListBoxStyle:hover {
		transition: all .5s;
		background-color: #8c95af;
		box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1)
	}

	.tagBox span {
		margin: 0 7px;
		margin-top: 2%;
		font-size: 8px;
	}

	.musicListBox {
		box-sizing: border-box;
		height: 100%;
		overflow: auto;
		margin: 0 auto;
		padding-bottom: 35px;
		.el-alert {
			width: 90%;
			margin: 0 auto;
			border-radius: 15px;
		}
	}

	.backBtn {
		width: 80px;
		padding: 5px 15px;
		background-color: #d8d8d8;
		border: none;
		border-radius: 10px;
		transition: all .5s;
	}

	.backBtn:hover {
		background-color: #c3c3c3;
	}

	.addListBtn {
		margin: 10px;
		padding: 5px 15px;
		background-color: #409EFF;
		color: #ffffff;
		border: none;
		border-radius: 10px;
		transition: all .5s;
	}

	.addListBtn:hover {
		background-color: #3381ce;
	}
</style>
