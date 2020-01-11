<template>
    <div class="shareContainer" ref="shareContainer">
        <el-row :gutter="20">
            <el-col :span="6">
                <Hengshare @shareToQQ="shareToQQ" />
            </el-col>
            <el-col :span="6">
                <JianshuLeftShare />
            </el-col>
            <el-col :span="6">
                
            </el-col>
        </el-row>
        <wx-code-modal v-if="wxModal.show" :wxModal="wxModal" @hideWxCodeModal="hideWxCodeModal"></wx-code-modal>
    </div>


</template>

<script>
import {Hengshare, JianshuLeftShare, WxCodeModal} from "./components";
import * as mutils from '@/utils/mUtils'
export default {
  data() {
    return {
      wxModal: {
        show: false,
        width: "358px",
        height: "358px"
      }
    };
  },
  components: {
    Hengshare,
    JianshuLeftShare,
    WxCodeModal
  },
  mounted() {
    mutils.setContentHeight(this, this.$refs.shareContainer, 210);
  },
  methods: {
    hideWxCodeModal() {
      this.wxModal.show = false;
    },
    shareToWeixin() {
      this.wxModal.show = true;
    },
    shareToQQ() {
      this.shareConfig("qq");
    },
    shareToQQzone() {
      this.shareConfig("qqZone");
    },
    shareToWeibo() {
      this.shareConfig("weibo");
    },
    shareToDouban() {
      this.shareConfig("douban");
    }
  }
};
</script>>

<style lang="scss" scoped>
	.shareContainer{
		display: flex;
		flex-direction: column;
		justify-content: space-around;
		padding: 20px;
		.el-row:first-child{
			margin-bottom: 20px;
		}
		.el-row{
			height:210px;
			.el-col{
				height:100%;
				.shareArea{
					height: 100%;
					width:100%;
				}
			}
		}
	}
</style>