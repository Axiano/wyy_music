<template>
	<div id="app">
		<div class="app-container">
			<div class="app-header">
				<div class="app-header-left">
					<!-- <span class="app-icon"></span> -->
					<i class="el-icon-s-fold menuBtn"  @click="openDrawer"> </i>
					<p class="app-name">网易云</p>
					<div class="musicBox">
						<img src="https://pan.axian.fun/view.php/ea2a4a59a26bc71c0f294a1edb42f38d.jpg">
						<div class="controlBox">
							<div>
								<p class="musicName">美好的一天</p>
								<p class="avatarName">阿贤</p>
							</div>
							<div class="controlBtn">
								<i class="el-icon-caret-left iconStyle"></i>
								<svg class="icon iconStyle" aria-hidden="true" v-if="IsPlay">
									<use xlink:href="#icon-kaishi"></use>
								</svg>
								<svg class="icon iconStyle" aria-hidden="true" v-if="!IsPlay">
									<use xlink:href="#icon-zantingtingzhi"></use>
								</svg>
								<i class="el-icon-caret-right iconStyle"></i>
							</div>
						</div>
						<!-- <audio src="/i/horse.ogg" controls="controls"></audio> -->
					</div>
					<!-- 					<div class="search-wrapper">
						<input class="search-input" type="text" placeholder="Search">
						<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" stroke="currentColor"
							stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
							class="feather feather-search" viewBox="0 0 24 24">
							<defs></defs>
							<circle cx="11" cy="11" r="8"></circle>
							<path d="M21 21l-4.35-4.35"></path>
						</svg>
					</div> -->
				</div>
				<div class="app-header-right">
					<button class="mode-switch" title="Switch Theme">
						<svg class="moon" fill="none" stroke="currentColor" stroke-linecap="round"
							stroke-linejoin="round" stroke-width="2" width="24" height="24" viewBox="0 0 24 24">
							<defs></defs>
							<path d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z"></path>
						</svg>
					</button>
					<!-- 					<button class="add-btn" title="Add New Project">
						<svg class="btn-icon feather feather-plus" xmlns="http://www.w3.org/2000/svg" width="16"
							height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3"
							stroke-linecap="round" stroke-linejoin="round">
							<line x1="12" y1="5" x2="12" y2="19" />
							<line x1="5" y1="12" x2="19" y2="12" />
						</svg>
					</button> -->
					<!-- 					<button class="notification-btn">
						<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
							stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
							class="feather feather-bell">
							<path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9" />
							<path d="M13.73 21a2 2 0 0 1-3.46 0" />
						</svg>
					</button> -->
					<button class="profile-btn" v-if="IsLogin">
						<img src="https://assets.codepen.io/3306515/IMG_2025.jpg" />
						<span>Aybüke C.</span>
					</button>
					<button class="profile-btn" v-if="!IsLogin">
						<img src="https://assets.codepen.io/3306515/IMG_2025.jpg" />
						<span>Aybüke C.</span>
					</button>
				</div>
				<button class="messages-btn">
					<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none"
						stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
						class="feather feather-message-circle">
						<path
							d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
					</svg>
				</button>
			</div>
			<div class="app-content">
				<div class="app-sidebar">
					<a href="" class="app-sidebar-link active">
						<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
							stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
							class="feather feather-home">
							<path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
							<polyline points="9 22 9 12 15 12 15 22" />
						</svg>
					</a>
					<a href="" class="app-sidebar-link">
						<svg class="link-icon feather feather-pie-chart" xmlns="http://www.w3.org/2000/svg" width="24"
							height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
							stroke-width="2" viewBox="0 0 24 24">
							<defs />
							<path d="M21.21 15.89A10 10 0 118 2.83M22 12A10 10 0 0012 2v10z" />
						</svg>
					</a>
					<a href="" class="app-sidebar-link">
						<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
							stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
							class="feather feather-calendar">
							<rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
							<line x1="16" y1="2" x2="16" y2="6" />
							<line x1="8" y1="2" x2="8" y2="6" />
							<line x1="3" y1="10" x2="21" y2="10" />
						</svg>
					</a>
					<a href="" class="app-sidebar-link">
						<svg class="link-icon feather feather-settings" xmlns="http://www.w3.org/2000/svg" width="24"
							height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
							stroke-width="2" viewBox="0 0 24 24">
							<defs />
							<circle cx="12" cy="12" r="3" />
							<path
								d="M19.4 15a1.65 1.65 0 00.33 1.82l.06.06a2 2 0 010 2.83 2 2 0 01-2.83 0l-.06-.06a1.65 1.65 0 00-1.82-.33 1.65 1.65 0 00-1 1.51V21a2 2 0 01-2 2 2 2 0 01-2-2v-.09A1.65 1.65 0 009 19.4a1.65 1.65 0 00-1.82.33l-.06.06a2 2 0 01-2.83 0 2 2 0 010-2.83l.06-.06a1.65 1.65 0 00.33-1.82 1.65 1.65 0 00-1.51-1H3a2 2 0 01-2-2 2 2 0 012-2h.09A1.65 1.65 0 004.6 9a1.65 1.65 0 00-.33-1.82l-.06-.06a2 2 0 010-2.83 2 2 0 012.83 0l.06.06a1.65 1.65 0 001.82.33H9a1.65 1.65 0 001-1.51V3a2 2 0 012-2 2 2 0 012 2v.09a1.65 1.65 0 001 1.51 1.65 1.65 0 001.82-.33l.06-.06a2 2 0 012.83 0 2 2 0 010 2.83l-.06.06a1.65 1.65 0 00-.33 1.82V9a1.65 1.65 0 001.51 1H21a2 2 0 012 2 2 2 0 01-2 2h-.09a1.65 1.65 0 00-1.51 1z" />
						</svg>
					</a>
				</div>
				<router-view></router-view>
			</div>
		</div>
		<!-- 抽屉 -->
		<el-drawer :visible.sync="drawer" :direction="direction" class="drawerBox" :show-close="false">
			<div class="musicDrawerPlay">
				<div class="boxHeader"><i class="el-icon-circle-close" @click="drawer = false"></i></div>
				<div class="musicInfoBox">
					<img src="https://pan.axian.fun/view.php/ea2a4a59a26bc71c0f294a1edb42f38d.jpg">
					<div class="musicInfo">
						<h2>歌曲名</h2>
						<p>创作者</p>
					</div>
				</div>
				<div class="musicBtn">
					<div class="controlBtn2 ">
						<i class="el-icon-caret-left iconStyle2"></i>
						<svg class="icon iconStyle2" aria-hidden="true" v-if="IsPlay">
							<use xlink:href="#icon-kaishi"></use>
						</svg>
						<svg class="icon iconStyle2" aria-hidden="true" v-if="!IsPlay">
							<use xlink:href="#icon-zantingtingzhi"></use>
						</svg>
						<i class="el-icon-caret-right iconStyle2"></i>
					</div>
					<div class="block">
						<el-slider v-model="progress"></el-slider>
					</div>
				</div>
			</div>
			<div class="musicListDrawer">
				<ul class="ulBox">
					<li v-for="(item,index) in musicList" :key="index" class="box">
						<img type="image" :src="item.al.picUrl" />
						<h2>{{item.name}}</h2>
					</li>
				</ul>
			</div>
		</el-drawer>
	</div>
</template>

<script>
	// document.addEventListener('DOMContentLoaded', function() {
	// 	var modeSwitch = document.querySelector('.mode-switch');

	// 	modeSwitch.addEventListener('click', function() {
	// 		document.documentElement.classList.toggle('dark');
	// 		modeSwitch.classList.toggle('active');
	// 	});

	// })
	export default {
		data() {
			return {
				IsLogin: false,
				IsPlay: true,
				drawer: true,
				direction: 'ltr',
				progress: 0,
				musicList: []
			}
		},
		mounted() {
			this.getpopularList
		},
		methods: {
			async login() {

			},
			async getpopularList() {
				const {
					data: res
				} = await this.$axios.get(`/top/playlist?limit=${this.limit}&order=${this.order}`)
				if (res.code === 200) {
					this.popularList = res.playlists
					console.log(this.popularList)
				} else {
					this.open4()
				}
			},
			// 打开抽屉按钮
			openDrawer() {
				if (this.$store.state.musicList) {
					console.log(this.$store.state.musicList)
					this.musicList = this.$store.state.musicList
				} else {
					console.log('没有列表')
				}
				this.drawer = true
			}
		},
	}
</script>
<style lang="scss">
	@media screen and (max-width: 500px) {
		.drawerBox {
			overflow: hidden;
			width: 335% !important;
		}
		.menuBtn {
			margin-right: 10px;
		}
	}
	
	@media screen and (min-width: 501px) {

	}
	
	@media screen and (max-width: 900px) {
	}
	
	@media screen and (min-width: 901px) {
		.drawerBox {
			overflow: hidden;
			width: 120%;
		}
	}
	// top音乐组件
	.musicBox {
		height: 40px;
		display: flex;
		flex-direction: row;

		// background-color: #42d6ff;
		img {
			width: 30px;
			height: 30px;
			border-radius: 50%;
			margin-right: 10px;
			margin-top: 5px;
		}

		.musicName {
			font-size: 12px;
			margin: 0;
			margin-top: 5px;
		}

		.avatarName {
			font-size: 8px;
			margin: 0;
			color: #817370;
		}
	}

	.controlBox {
		display: flex;
		flex-direction: row;

		.controlBtn {
			font-size: 20px;
			line-height: 40px;
			height: 40px;
		}
	}

	.iconStyle {
		margin: 0 10px;
		cursor: pointer;
	}

	.drawerBox {
		overflow: hidden;

		.el-drawer__header {
			display: none;
		}

		.musicDrawerPlay {
			width: 100%;
			height: 30%;
			background-color: #fff9e1;

			.boxHeader {
				height: 40px;

				.el-icon-circle-close {
					font-size: 24px;
					float: right;
					margin: 10px;
					cursor: pointer;
				}
			}
		}

		.musicListDrawer {
			overflow: auto;
			height: 70%;
			.ulBox {
				padding: 0 20px;
				overflow: auto;
			}
			.box {
				cursor: pointer;
				box-sizing: border-box;
				display: flex;
				flex-direction: row;
				width: 100%;
				background-color: #8c95af;
				margin: 0 auto;
				margin-top: 10px;
				padding: 10px;
				img {
					width: 40px;
					height: 40px;
					margin-right: 15px ;
				}
				h2 {
					line-height: 40px;
					margin: 0;
					font-size: 20px;
					white-space: nowrap;
					overflow: hidden;
					text-overflow: ellipsis;
				}
			}
		}
	}

	.musicInfoBox {
		display: flex;
		flex-direction: row;
		box-sizing: border-box;
		padding: 25px;
		width: 100%;
		// background-color: #000;

		img {
			width: 100px;
			box-shadow: 1px 1px 4px 2px #939393;
			margin-right: 20px;
		}

		.musicInfo {
			h2 {
				font-size: 25px;
				margin: 0;
			}

			p {
				margin: 0;
				margin-top: 10px;
				font-size: 15px;
				color: #a7a7a7;
			}
		}
	}

	.musicBtn {
		display: flex;
		flex-direction: row;

		.controlBtn2 {
			box-sizing: border-box;
			padding-top: 5px;
			margin: 0 10px;

			.iconStyle2 {
				font-size: 25px;
				margin: 0 10px;
			}
		}

		.block {
			width: 140px;
		}
	}
	.menuBtn {
		cursor: pointer; 
		font-size: 30px;
	}
</style>
