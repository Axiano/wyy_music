<template>
	<div class="home">
		<div class="noLogin">
			<img :src="profile.avatarUrl" />
			<h2 v-if="Islogin">欢迎 {{profile.nickname}}</h2>
			<h2 v-else @click="goLogin">点击登录,尊享丝滑</h2>
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
				console.log(1)
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
		// background-color: #fff;
		text-align: center;

		img {
			width: 15%;
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
</style>
