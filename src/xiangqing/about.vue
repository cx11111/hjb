<template>
    <div>
        <header id="header" class="mui-bar mui-bar-nav">
			<a class="mui-action-back mui-icon mui-icon-left-nav mui-pull-left"></a>
			<div class="mui-content">
                <div style="padding: 10px 10px;">
                    <div id="segmentedControl" class="mui-segmented-control">
                        <a class="mui-control-item mui-active" href="#item1">商品</a>
                        <a class="mui-control-item" href="#item2">评价</a>
                        <a class="mui-control-item" href="#item3">详情</a>
                        <a class="mui-control-item" href="#item4">推荐</a>
                    </div>
                </div>
			</div>
		</header>
        <div>
                    <div id="item1" class="mui-control-content mui-active">
                       <div class="mui-card about-in">
				            <div class="mui-card-header"><img src="../image/f1.jpg" alt=""></div>
				                <div class="mui-card-content">
					                <div class="mui-card-content-inner">
                                        粗粮新语【手工现做顺丰航空】健身全麦面包干酪奶酪欧包蔓越莓可可粗粮杂粮代餐糕点无油早餐夹心食品糕点
                                        <div class="price">
                                            <span>￥36</span>
                                            <span>￥29.9</span>
                                        </div>
					                </div>
				                </div>
				            <div class="mui-card-footer">
                                <div class="xiang">
                                    <p>
                                        已选
                                        <span>1个</span>
                                        <span class="righ">···</span>
                                         
                                    </p>
                                    <p>
                                        送至
                                        <span>山西省临汾市尧都区</span>
                                        <span class="righ">···</span>
                                    </p>
                                    <p>
                                        运费
                                        <span>免运费</span>
                                        <span class="righ">···</span>
                                    </p>
                                </div>
                            </div>
			            </div>
                    </div>
                    <div id="item2" class="mui-control-content">
                        <div class="mui-card">
				            <div class="mui-card-header">
                                D****c 
                                <span class="star">☆☆☆☆☆</span>
                            </div>
				                <div class="mui-card-content">
					                <div class="mui-card-content-inner">
                                        这次换个地方，物流挺快的，隔天就到了，这个全麦干酪欧包要自己去切开的，味道还挺不错的！
					                </div>
				                </div>
				            <div class="mui-card-footer">
                                <img src="../image/f1.jpg" alt="">
                                <img src="../image/f1.jpg" alt="">
                                <img src="../image/f1.jpg" alt="">
                            </div>
			            </div>
                        <div class="mui-card">
				            <div class="mui-card-header">
                                不****到 
                                <span class="star">☆☆☆☆☆</span>
                            </div>
				                <div class="mui-card-content">
					                <div class="mui-card-content-inner">
                                        首先顺丰真的很给力，隔天就到了，拿到手时顿时感受到盒子的凉意～保鲜做的极好呀～卖家很贴心的送了小礼物，本子上的字也是棒棒的，包装特别好特别卫生，然后我迫不及待的替大家尝了一口，无糖，但是特别美味，满满的幸福感～总之超级大的好评一定会回购，打算尝尝抹茶紫薯，据说也很不错👍
					                </div>
				                </div>
				            <div class="mui-card-footer">
                                <img src="../image/f2.jpg" alt="">
                                <img src="../image/f2.jpg" alt="">
                                <img src="../image/f2.jpg" alt="">
                            </div>
			            </div>
				    </div>
				    <div id="item3" class="mui-control-content">
                        <img class="xi" src="../image/x1.jpg" alt="">
				    </div>
                    <div id="item4" class="mui-control-content">
                        <ul class="mui-table-view mui-grid-view">
		        <li class="mui-table-view-cell mui-media mui-col-xs-6">
		            <router-link to="/home/supermarket/about" href="#">
		                <img class="mui-media-object" src="../image/f1.jpg">
		                <div class="mui-media-body">￥39.9</div></router-link></li>
		        <li class="mui-table-view-cell mui-media mui-col-xs-6">
		            <a href="#">
		                <img class="mui-media-object" src="../image/f2.jpg">
		                <div class="mui-media-body">￥59.9</div></a></li>
		        <li class="mui-table-view-cell mui-media mui-col-xs-6">
		            <a href="#"><img class="mui-media-object" src="../image/f3.jpg">
		                <div class="mui-media-body">￥38.8</div></a></li>
		        <li class="mui-table-view-cell mui-media mui-col-xs-6">
		            <a href="#">
		                <img class="mui-media-object" src="../image/f4.jpg">
		                <div class="mui-media-body">￥29.9</div></a></li>
		    </ul>    
				    </div>
                </div>
            <!-- 底部 -->
            <nav class="mui-bar mui-bar-tab buy">
		            <a class="mui-col-xs-2" href="#">
		                    <span class="mui-icon mui-icon-chatbubble"></span>
		                    <div class="mui-media-body">联系客服</div></a>
		            <a class="mui-col-xs-2" href="#">
		                   <span class="mui-icon mui-icon-upload"></span>
		                    <div class="mui-media-body">进店</div></a>
		            <a class="mui-col-xs-2" href="#">
		                    <span class="mui-icon-extra mui-icon-extra-cart"></span>
		                    <div class="mui-media-body">购物车</div></a>
                    <router-link to="/char" href="#" class="mui-col-xs-3">
                        加入购物车
                    </router-link>
                    <a href="#" class="mui-col-xs-3">
                        立即购买
                    </a>
		    </nav>
    </div>
</template>

<script>
export default {

}
</script>

<style scoped>
    #item2 .mui-card:nth-child(1){
        margin-top: 70px;
    }
    #item1 .mui-card{
        margin-top: 70px;
        margin-bottom: 70px;
    }
    .mui-segmented-control{
        border: none;
    }
    .mui-segmented-control .mui-control-item{
        border-left: none;
    }
    .mui-bar{
        height: 50px;
        padding: 0px;
    }
    .mui-bar-nav.mui-bar .mui-icon{
        line-height: 50px;
        margin-left: 5px;
        margin-right: 5px;
    }
    .mui-card-header > img:first-child{
        width: 100%;
        height: 100%;
    }
    .price span:nth-child(1){
        color: #999;
        text-decoration: line-through;
    }
    .price span:nth-child(2){
        color: red;
        font-weight:900; 
        font-size: 18px;
    }
    .xiang{
        width: 100%;
    }
    .xiang span{
        color:#000;
    }
    .righ{
        float: right;
        font-weight: bolder;
    }
    .mui-card-footer img{
        width: 80px;
        height: 80px;
    }
    .star{
        color: yellow;
    }
    .xi{
        width: 100%;
        height: 100%;
    }
    .buy{
        position: fixed;
        bottom: 0px;
        z-index: 20;
    }
    .buy a{
        display: inline-block;
        color: #000;
        text-align: center;
        margin: 5px 0px;
    }
    .buy a:nth-child(1) div{
        font-size: 14px;
    }
    .mui-bar .mui-icon{
        padding: 0px;
    }
    .buy a:nth-child(4){
        background: orange;
        color: #fff;
        line-height: 50px;
        position: absolute;
        margin: 0px;
    }
    .buy a:nth-child(5){
        background: red;
        color: #fff;
        line-height: 50px;
        position: absolute;
        right: 0px;
        margin: 0px;
    }
    .mui-pull-left{
        margin-top: 10px;
    }
</style>
