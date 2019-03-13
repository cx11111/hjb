<template>
    <div>
        <mt-swipe :auto="4000" :showIndicators="false">
        <mt-swipe-item></mt-swipe-item>
        <mt-swipe-item></mt-swipe-item>
        <mt-swipe-item></mt-swipe-item>
	<mt-swipe-item></mt-swipe-item>
</mt-swipe>

	        <ul class="mui-table-view mui-grid-view mui-grid-9">
		            <router-link to="/home/supermarket" class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-4"><a href="#">
		                    <img  src="../image/menu1.png" alt="">
		                    <div class="mui-media-body">超市</div></a></router-link>
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-4"><a href="#">
		                    <img src="../image/menu2.png" alt="">
		                    <div class="mui-media-body">海外购</div></a></li>
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-4"><a href="#">
		                    <img src="../image/menu3.png" alt="">
		                    <div class="mui-media-body">服饰</div></a></li>
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-4"><a href="#">
		                    <img src="../image/menu4.png" alt="">
		                    <div class="mui-media-body">生鲜</div></a></li>
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-4"><a href="#">
		                    <img src="../image/menu5.png" alt="">
		                    <div class="mui-media-body">9.9包邮</div></a></li>
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-4"><a href="#">
		                    <img src="../image/menu6.png" alt="">
		                    <div class="mui-media-body">领劵</div></a></li>
		        
		        </ul> 
    </div>
</template>
<script>
export default {
    
}
</script>
<style>
.mint-swipe-items-wrap {
    height: 150px;
}

.mui-table-view-cell img{
    width: 60px;height: 60px;
}
.mint-swipe-item:nth-child(1){
	background: url("../image/2.jpg") no-repeat;
	background-size: 100%;
}
.mint-swipe-item:nth-child(2){
	background: url("../image/3.jpg") no-repeat;
	background-size: 100%;
}
.mint-swipe-item:nth-child(3){
	background: url("../image/4.jpg") no-repeat;
	background-size: 100%;
}
.mint-swipe-item:nth-child(4){
	background: url("../image/5.jpg") no-repeat;
	background-size: 100%;
}
</style>


