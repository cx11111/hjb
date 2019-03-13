<template>
	<div>
		<h3>这是注册组件</h3>
	</div>
</template>
<script type="text/javascript">
	export default{

	}
</script>
<!-- scoped属性加上之后只对本组件起左右,如果不加,则会对全部组件产生作用 -->
<!-- lang属性为设置css格式,如果不加,就只支持css语法,加上之后可以支持less,sass,scss等语法 -->
<style type="text/css" scoped>
		div{
			color: red;
		}
</style>