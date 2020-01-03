<template>
<div class="shareArea cflex">

</div>

</template>

<script>


export default {
    
}
</script>>

<style lang="scss" scoped>
.shareArea{
		width: 340px;
		align-items: center;
		background: #fff;
		border-radius: 4px;
         .shareTitle{
            border-bottom: 1px solid #e8e8e8;
            padding: 10px;
            box-sizing: border-box;
            width: 100%;
            font-size:14px;
        }
		.bottom{
			align-items: center;
			padding: 20px 8px;
			width: 100%;
			height: 100%;
			box-sizing: border-box;
			.toTitle{
				font-size: 13px;
			}
			 .shareUl{
				justify-content: space-between;
				li{
					display: flex;
					flex-direction: column;
					align-items: center;
					position: relative;
					cursor: pointer;
					.title{
						margin-bottom: 10px;
						font-size: 13px;
						color:#a9d86e;
					}
					.item{
						background: #EFF2F7;
						width: 40px;
						height: 40px;
						border-radius: 50%;
						display: flex;
						justify-content: center;
						align-items: center;
						.svg-icon{
							font-size: 24px;
						}
						.active{
							color:#FF6C60;
						}
					}
					.qrcodeArea{
						position: absolute;
						top: 50px;
						left: -30px;
						text-align: center;
						border: 1px solid #a9d86e;
						border-radius: 4px;
						padding: 10px;
						z-index: 99;
						background: #fff;
						.saoTitle{
							font-size: 14px;
							color:#a9d86e;
							margin-bottom: 5px;
						}
					}
				}
			}
		}
     
	}
</style>