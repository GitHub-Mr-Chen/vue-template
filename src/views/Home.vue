<template>
	<div class="home">
		<img alt="Vue logo" src="../assets/logo.png" />
		<el-button type="primary">测试按钮</el-button>
		<el-card :body-style="{ padding: '0px' }">
			<div slot="header">
				<span>card title</span>
			</div>card body
		</el-card>

		<HelloWorld msg="Welcome to Your Vue.js App" />
	</div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'Home',
  components: {
    HelloWorld
  }
}
</script>
