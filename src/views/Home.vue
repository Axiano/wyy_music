<template>
	<div class="home">
		<div class="noLogin">
			<img v-if="Islogin" :src="profile.avatarUrl" />
			<svg v-else class="icon avatarIcon" aria-hidden="true">
				<use xlink:href="#icon-yinle"></use>
			</svg>
			<h2 v-if="Islogin">欢迎 {{profile.nickname}}</h2>
			<h2 v-else @click="goLogin">点击登录,尊享丝滑</h2>
			<div class="nav">
				<el-tooltip content="我的歌单" placement="top" effect="light" :enterable="false">
					<svg class="icon navIcon" aria-hidden="true">
						<use xlink:href="#icon-gedan"></use>
					</svg>
				</el-tooltip>
				<el-tooltip content="个人中心" placement="top" effect="light" :enterable="false">
					<svg class="icon navIcon" aria-hidden="true">
						<use xlink:href="#icon-gerenzhongxin"></use>
					</svg>
				</el-tooltip>
			</div>
		</div>
		<div class="loginFormBox" v-if="show">
			<div class="formheader">
				<span>登录</span>
				<svg class="icon" aria-hidden="true" @click="closeLoginForm">
					<use xlink:href="#icon-guanbi"></use>
				</svg>
			</div>
			<el-form :model="ruleForm" status-icon :rules="rules" ref="ruleForm" label-width="80px"
				class="demo-ruleForm" size="small">
				<el-form-item label="手机号" prop="phone">
					<el-input v-model.number="ruleForm.phone" clearable></el-input>
				</el-form-item>
				<el-form-item label="密码" prop="pass">
					<el-input type="password" v-model="ruleForm.pass" auto-complete="off" clearable></el-input>
				</el-form-item>
				<el-form-item>
					<el-button type="primary" plain @click="submitForm('ruleForm')">提交</el-button>
				</el-form-item>
			</el-form>
		</div>
		<div class="popularBoxs">
			<h2>推荐歌单</h2>
			<div class="popular">
				<div class="popularBox" v-for="(item,index) in popularList" :key="index">
					<div class="songListInfo">
						<h2>{{item.name}}</h2>
					</div>
					<img :src="item.coverImgUrl"/>
				</div>
			</div>
		</div>

	</div>
</template>

<script>
	export default {
		data() {
			var validatePass = (rule, value, callback) => {
				if (value === '') {
					callback(new Error('请输入密码'));
				} else {
					if (this.ruleForm.checkPass !== '') {
						this.$refs.ruleForm.validateField('checkPass');
					}
					callback();
				}
			};
			var validatephone = (rule, value, callback) => {
				if (value === '') {
					callback(new Error('请输入手机号'));
				} else {
					if (this.ruleForm.checkPass !== '') {
						this.$refs.ruleForm.validateField('checkPass');
					}
					callback();
				}
			};
			return {
				show: false,
				Islogin: false,
				order: 'hot', //new
				limit: 6,
				popularList: [],
				profile: {
					avatarUrl: '../assets/avatar.jpg'
				},
				ruleForm: {
					phone: '15149494081',
					pass: 'wx123456',
					checkPass: '',
				},
				rules: {
					phone: [{
						validator: validatephone,
						trigger: 'blur'
					}],
					pass: [{
						validator: validatePass,
						trigger: 'blur'
					}]
				},
			}
		},
		created() {
			if (window.sessionStorage.getItem('token')) {
				this.Islogin = true
				this.getuserInfo()
			}
			this.getpopularList()
		},
		methods: {
			success() {
				this.$notify({
					title: '提示',
					message: '登录成功',
					type: 'success'
				});
			},
			error() {
				this.$notify.error({
					title: '提示',
					message: '账号密码错误'
				});
			},
			open4() {
				this.$message.error('加载歌曲列表失败...');
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
			submitForm(formName) {
				this.$refs[formName].validate(async (valid) => {
					if (valid) {
						const res = await this.$axios.post(
							`/login/cellphone?phone=${this.ruleForm.phone}&password=${this.ruleForm.pass}`)
						if (res.status.code !== 200) {
							this.success()
							window.sessionStorage.setItem('token', res.data.cookie)
							window.sessionStorage.setItem('userId', res.data.profile.userId)
							this.profile = res.data.profile
							this.Islogin = true
							this.show = false
						} else {
							this.error()
						}
					} else {
						console.log('error submit!!');
						return false;
					}
				});
			},
			async getuserInfo() {
				const userId = window.sessionStorage.getItem('userId')
				const res = await this.$axios.post(`/user/detail?uid=${userId}`)
				this.profile = res.data.profile
			},
			goLogin() {
				this.show = true
			},
			closeLoginForm() {
				this.show = false
			}
		}

	}
</script>

<style lang="scss" scoped>
	.noLogin {
		width: 50%;
		margin: 0 auto;
		margin-top: 40px;
		padding: 40px;
		text-align: center;

		img {
			width: 70px;
			text-align: center;
			border-radius: 10px;
		}

		h2 {
			font-size: 25px;
			cursor: pointer
		}
	}

	.loginFormBox {
		position: fixed;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
		width: 30%;
		height: 300px;
		background-color: #fff;
		padding: 20px;
		padding-top: 0;
		padding-right: 0;
		border-radius: 15px;

		.el-form {
			padding-right: 40px;
		}

		.el-button {
			float: right;
		}

		.formheader {
			display: flex;
			flex-direction: row;
			justify-content: space-between;
			align-content: center;
			height: 60px;

			span {
				font-size: 25px;
				line-height: 60px;
				text-align: center;
				flex: 9 0 auto;
			}

			.icon {
				font-size: 25px;
				margin-top: 10px;
				flex: 1 0 auto;
			}
		}
	}

	.avatarIcon {
		font-size: 70px;
	}

	.navIcon {
		font-size: 25px;
		margin: 0 5px;
	}

	@media screen and (max-width: 500px) {
		.popularBoxs {
			width: 100% !important;
			margin: 0 !important;
		}
		.popularBox{
			width: 100% !important;
			// height: 100% !important;
		}
		.loginFormBox{
			width: 90% !important;
		}
	}

	@media screen and (min-width: 501px) {
		.popularBoxs {
			width: 90% !important;
			margin: 0 !important;
		}
		.popularBox{
			width: 90%;
			// height: 90% !important;
		}
	}

	@media screen and (max-width: 900px) {
		.popularBoxs {
			width: 80%;
		}
		.popularBox{
			width: 70%;
			// height: 70%;
		}
	}

	@media screen and (min-width: 901px) {
		.popularBoxs {
			width: 80%;
		}
		.popularBox{
			width: 42%;
		}
	}
	.popularBoxs {
		box-sizing: border-box;
		margin: 0 auto;
		padding: 20px;
		// background-color: #9e9e94;
	}
	.popular {
		display: flex;
		flex-direction: row;
		flex-flow: wrap;
		justify-content: space-evenly;
	}

	.popularBox {
		box-sizing: border-box;
		height: 150px;
		background-color: #fff;
		padding: 10px;
		margin: 20px 20px;
		border-radius: 20px;
		transition: all .5s;
		border: 3px #FFFFFF solid;
		display: flex;
		flex-direction: row;
		justify-content: space-between;
	}
	.popularBox img {
		width: 120px;
		height: 120px;
		transition: all .5s;
	}
	.popularBox:hover {
		border: 3px #1f4d8f solid;
		img {
			transform: translateX(5%);
		}
		.songListInfo {
			transform: translateX(2%);
		}
	}

	.popularBoxs h2 {
		font-size: 30px;
	}
	.songListInfo {
		transition: all .5s;
	}
	.songListInfo h2 {
		font-size: 20px;
	}
</style>
