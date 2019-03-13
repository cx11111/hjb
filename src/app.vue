<template>
	<div class="bod">
		<!-- 头部  header -->
		<mt-header fixed class="head"></mt-header>

		<!-- 中间内容部分 -->
		<router-view></router-view>
		<!-- tabbar  底部导航 -->
		<nav class="mui-bar mui-bar-tab">
			<router-link class="mui-tab-item mui-active" to="/home">
				<span class="mui-icon mui-icon-home"></span>
				<span class="mui-tab-label">首页</span>
			</router-link>
			<router-link class="mui-tab-item" to="/member">
				<span class="mui-icon mui-icon-contact"></span>
				<span class="mui-tab-label">用户</span>
			</router-link>
			<router-link class="mui-tab-item" to="/char">
				<span class="mui-icon mui-icon-extra mui-icon-extra-cart"><span class="mui-badge">5</span></span>
				<span class="mui-tab-label">购物车</span>
			</router-link>
			<router-link class="mui-tab-item" to="/search">
				<span class="mui-icon mui-icon-search"></span>
				<span class="mui-tab-label">搜索</span>
			</router-link>
		</nav>
	</div>
</template>
<script type="text/javascript">

</script>
<style type="text/css">
	img{
		height: 300px;
	}
	.bod{
		margin-top: 40px;
		
	}
	.mint-header.is-fixed{
		background: red;
		color: blue;
	}
	
</style>