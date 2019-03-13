<template>
    <div>
        <header id="header" class="mui-bar mui-bar-nav">
			<a class="mui-action-back mui-icon mui-icon-left-nav mui-pull-left"></a>
			<h1 class="mui-title">购物车</h1>
		</header>
        <div class="mui-card">
			<div class="mui-card-header">
                 <span>
                     <span class="mui-icon mui-icon-location-filled"></span>山西省临汾市 
                 </span>
                 <a href="#" style="color:red">编辑商品</a>
            </div>
			<div class="mui-card-content">
				<div class="mui-card-content-inner">
                    <div class="mui-input-row mui-checkbox mui-left">
						<label>自营<span style="float:right;color:red">商家免邮</span></label>
						<input name="checkbox" value="Item 1" type="checkbox" >
                        <div style="font-size:13px;">
                            <span style="margin-left:15px;" class="mui-badge mui-badge-danger">优惠</span>
                            已购满一件，享受满30-25优惠 
                        </div>
                        <div class="mui-input-row mui-checkbox mui-left">
                            <label>
                                <ul class="mui-table-view">
				                    <li class="mui-table-view-cell mui-media">
					                    <a href="javascript:;">
						                    <img class="mui-media-object mui-pull-left" src="../image/f1.jpg">
						                    <div class="mui-media-body">
                                                派力特 方便食品 掌心脆干脆面<BR/>
                                                 办公室休闲零食方便面干吃面...
                                                    <span class="ding">购买数量：</span>
				                                    <div class="mui-numbox" data-numbox-min='1' data-numbox-max='100'>
					                                <button class="mui-btn mui-btn-numbox-minus" type="button">-</button>
					                                <input class="mui-input-numbox" type="number" value="1"/>
					                                <button class="mui-btn mui-btn-numbox-plus" type="button">+</button>
				                                </div>
                                                
						                    </div>
					                    </a>
				                    </li>
                                </ul>
                            </label>
						    <input class="onee" name="checkbox" value="Item 1" type="checkbox" >  
                        </div>
					</div>
                      
				</div>
			</div>
		</div>
         <nav class="mui-bar mui-bar-tab buy">
		            <a class="mui-col-xs-4" href="#">
                        <div class="mui-input-row mui-checkbox mui-left">
						<label>全选</label>
						<input name="checkbox" value="Item 1" type="checkbox" >
					</div>
                    </a>
                    <a href="#" class="mui-col-xs-4">
                       <strong>总计：</strong><span style="color:red">￥15.5</span><br/>
                       <span style="color:#999;font-size:13px">总额50，立减34.5</span>
                    </a>
                    <a href="#" class="mui-col-xs-4">
                        去结算
                    </a>
		    </nav>
    </div>
</template>
<script src="../js/mui.js"></script>

<script>
export default {
    
}
</script>
<style scoped>
    .mui-card-content-inner{
        padding: 0px;
    }
    .ding{
        position: absolute;
        left: 0px;
        top: 50px;
        color: red;
        font-size: 18px;
        line-height: 54px;
    }
    .onee{
    margin-top: 30px;
    }
    .mui-input-row .mui-numbox{
        margin-top: 20px;
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
    
    .buy a:nth-child(3){
        background: red;
        color: #fff;
        line-height: 60px;
        position: absolute;
        right: 0px;
        margin: 0px;
    }
    .mui-pull-left{
        margin-top: 10px;
    }
</style>
