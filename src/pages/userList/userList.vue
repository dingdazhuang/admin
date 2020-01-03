<template>
    <div class="fillcontain">
        <div class="contain">
            <div class="table_container">
                <el-table
                    :data="tableData"
                    width="100%"
                    border
                    stripe
                    highlight-current-row
                    header-cell-class-name="table-header-class"
                >
                <el-table-column
                    label="序号"
                    width="60"
                    align="center"
                >
                <template slot-scope="scope">
                    <span>{{scope.$index+(paginations.pageIndex - 1) * paginations.pageSize + 1}} </span>
                    <!-- <span>{{(page - 1) * pageSize + scope.$index + 1}}</span> -->
                </template>
                </el-table-column>
                <el-table-column
                   property="username"
                   label="用户姓名"
                   width="80"
                   align='center'>
                </el-table-column>
                <el-table-column
                   property="email"
                   label="邮箱地址"
                   width="180"
                   align='center'>
                </el-table-column>
                <el-table-column
                   property="address"
                   label="注册地址"
                   align='center'>
                </el-table-column>
                 <el-table-column
                   property="region"
                   label="地区"
                   width="80"
                   align='center'>
                </el-table-column> 
                  <el-table-column
                   property="isp"
                   label="网络"
                   width="80"
                   align='center'>
                </el-table-column> 
                 <el-table-column
                   property="ip"
                   label="IP地址"
                   width="180"
                   align='center'>
                </el-table-column>
                <el-table-column
                   property="createTime"
                   label="注册时间"
                   width="180"
                   align='center'>
                </el-table-column>
                <el-table-column
                   property="updateTime"
                   label="登录时间"
                   width="180"
                   align='center'>
                </el-table-column>
                </el-table>
                <el-row>
                    <el-col :span="24">
                        <div class="pagination">
                            <el-pagination
                            :total="paginations.total"
                            :page-size="paginations.pageSize"
                            :page-sizes="paginations.pageSizes"
                            layout="total, sizes, prev, pager, next, jumper"
                            :current-page="paginations.pageIndex"
                            @current-change="handleCurrentChange"
                            @size-change="handleSizeChange"
                            >

                            </el-pagination>
                        </div>
                    </el-col>
                </el-row>
            </div>
        </div>
    </div>
</template>

<script>
    // import { getUserList } from "@/api/user";
    export default {
        data() {
            return {
                tableData: [{"id":"C2eF8665-Cf9B-0Db3-cfFF-D6DfF891AF7e","sortnum":1,"username":"锺杰","address":"陕西省 咸阳市 渭城区","createTime":"2014-06-27 20:41:04","updateTime":"2020-01-03 16:31:05","ip":"60.71.208.227","region":"西北","areaId":"4363833","email":"c.bcvwuneg@ulvfhpik.pr","isp":"铁通"},{"id":"7EdF6FCf-F698-D9b6-Ecb6-9A1d63CfceF2","sortnum":2,"username":"薛刚","address":"山东省 菏泽市 单县","createTime":"2012-01-21 12:34:47","updateTime":"2020-01-03 16:31:05","ip":"131.243.58.166","region":"华南","areaId":"1613846","email":"s.emgh@vrmkojhbj.bz","isp":"铁通"},{"id":"7fcFfDF0-0Df2-dcDE-14A9-DEFDc25aE597","sortnum":3,"username":"康军","address":"天津 天津市 武清区","createTime":"2007-04-14 03:35:50","updateTime":"2020-01-03 16:31:05","ip":"182.216.19.114","region":"华北","areaId":"5265581","email":"d.ccnim@dpdvpguby.lu","isp":"移动"},{"id":"f69C3EF8-Aefe-35Ac-3d6D-5eb0FC3A38EB","sortnum":4,"username":"冯艳","address":"北京 北京市 昌平区","createTime":"1991-10-30 22:39:29","updateTime":"2020-01-03 16:31:05","ip":"64.52.125.247","region":"华中","areaId":"9335821","email":"w.ybhpoyx@rsdi.mz","isp":"移动"},{"id":"BbC4FCcC-4c27-bcbF-eCcd-83FBb9FbBFEd","sortnum":5,"username":"廖霞","address":"青海省 玉树藏族自治州 玉树市","createTime":"1988-09-05 17:26:41","updateTime":"2020-01-03 16:31:05","ip":"48.167.54.240","region":"华北","areaId":"6276743","email":"r.ytpowd@jzpf.tm","isp":"联通"},{"id":"11F6a730-fBbA-1Ecb-CFC5-BDb3bA13dD76","sortnum":6,"username":"夏芳","address":"上海 上海市 长宁区","createTime":"2016-04-28 22:59:45","updateTime":"2020-01-03 16:31:05","ip":"46.67.253.115","region":"华南","areaId":"2763568","email":"d.dmcob@bgcufhc.za","isp":"移动"},{"id":"16A42314-3Eab-Cf43-8A9e-E8b96D5ecb8d","sortnum":7,"username":"吴敏","address":"内蒙古自治区 鄂尔多斯市 东胜区","createTime":"1981-11-02 12:17:38","updateTime":"2020-01-03 16:31:05","ip":"32.103.116.112","region":"华北","areaId":"6943815","email":"k.fhimmksntz@atxgaxhxqg.vg","isp":"移动"},{"id":"e8D80bF4-EAde-69eb-DDa1-5FBa9F17Fe8d","sortnum":8,"username":"蔡洋","address":"台湾 新北市 石门区","createTime":"1988-09-02 14:04:00","updateTime":"2020-01-03 16:31:05","ip":"241.24.175.118","region":"华中","areaId":"8661713","email":"q.ssxsyu@hqxyncw.it","isp":"电信"},{"id":"b148cEeE-Ae76-6Bdd-4DDc-71c9edeDB57D","sortnum":9,"username":"尹娜","address":"湖南省 郴州市 汝城县","createTime":"1972-12-15 04:35:36","updateTime":"2020-01-03 16:31:05","ip":"63.200.167.151","region":"华北","areaId":"7549322","email":"l.ceupo@yzhstosznb.jm","isp":"联通"},{"id":"3ea464ce-bB96-9bCd-C33d-eF35eAbEeAB3","sortnum":10,"username":"袁刚","address":"江苏省 淮安市 淮阴区","createTime":"2013-05-29 01:36:14","updateTime":"2020-01-03 16:31:05","ip":"100.160.201.68","region":"西北","areaId":"1232866","email":"f.ydhyfvths@wzmfcd.no","isp":"移动"},{"id":"5608824A-058b-7C9E-5005-84fb68feA83D","sortnum":11,"username":"熊洋","address":"河北省 邢台市 巨鹿县","createTime":"1983-07-04 04:13:46","updateTime":"2020-01-03 16:31:05","ip":"179.191.212.19","region":"西北","areaId":"1766058","email":"w.trogvoa@mqdepblvwz.ai","isp":"电信"},{"id":"2Eaed75b-C644-cA9C-AfDe-Cb2D41f9789F","sortnum":12,"username":"曹勇","address":"河南省 三门峡市 陕县","createTime":"2014-08-05 07:30:47","updateTime":"2020-01-03 16:31:05","ip":"233.110.209.182","region":"华东","areaId":"7304383","email":"s.uqymndsf@apvyoawe.gw","isp":"电信"},{"id":"eFadECbf-5b68-e6AB-6AB3-86Abbfc86B56","sortnum":13,"username":"夏芳","address":"新疆维吾尔自治区 伊犁哈萨克自治州 霍城县","createTime":"1978-07-23 15:30:15","updateTime":"2020-01-03 16:31:05","ip":"140.221.187.122","region":"华北","areaId":"3410728","email":"q.omsscoqr@micmmo.md","isp":"铁通"},{"id":"19eF2cC9-4BEe-d407-7E8D-dAd94c605FFc","sortnum":14,"username":"段超","address":"安徽省 宿州市 灵璧县","createTime":"1986-04-05 07:04:51","updateTime":"2020-01-03 16:31:05","ip":"169.96.81.8","region":"华中","areaId":"4488974","email":"c.xkkfuo@okh.sd","isp":"铁通"},{"id":"39EBce25-1FBB-60f1-3b7B-FABCE27C6DEE","sortnum":15,"username":"白涛","address":"西藏自治区 那曲地区 申扎县","createTime":"2018-05-14 11:16:19","updateTime":"2020-01-03 16:31:05","ip":"146.107.100.84","region":"东北","areaId":"7952855","email":"w.rwzan@aubmi.et","isp":"移动"},{"id":"42CCFF3e-eDB1-cDFb-61A5-60aeD5e17F72","sortnum":16,"username":"潘强","address":"天津 天津市 河北区","createTime":"1978-04-06 22:17:33","updateTime":"2020-01-03 16:31:05","ip":"46.223.169.232","region":"华中","areaId":"1017127","email":"q.kqiyyq@xswlk.fm","isp":"联通"},{"id":"fba916D8-4b35-E5AD-D417-C65E89cA4edD","sortnum":17,"username":"魏娜","address":"香港特别行政区 九龙 黄大仙区","createTime":"1994-01-10 13:02:56","updateTime":"2020-01-03 16:31:05","ip":"96.11.189.212","region":"华中","areaId":"6981256","email":"i.ipqimifz@xdxd.mr","isp":"移动"},{"id":"e0882ECe-5fB1-0cF1-E163-eAAD4AAfcDda","sortnum":18,"username":"阎军","address":"辽宁省 大连市 中山区","createTime":"1972-06-23 00:06:44","updateTime":"2020-01-03 16:31:05","ip":"208.196.243.49","region":"西南","areaId":"2237567","email":"d.kqooeybgf@kobxmjd.pg","isp":"移动"},{"id":"FD23d5b0-2F67-f5D7-9e82-36f2aBcDE322","sortnum":19,"username":"冯秀兰","address":"贵州省 铜仁市 思南县","createTime":"1975-03-07 16:08:23","updateTime":"2020-01-03 16:31:05","ip":"207.109.15.208","region":"华南","areaId":"7631636","email":"j.ixkyxru@xmep.na","isp":"移动"},{"id":"55De4eaf-92c3-7CD1-b1ae-FdA2C332B2bF","sortnum":20,"username":"邓强","address":"江苏省 扬州市 江都区","createTime":"1995-10-24 01:46:22","updateTime":"2020-01-03 16:31:05","ip":"216.139.207.24","region":"华南","areaId":"9326510","email":"i.gnqr@thysjhzvh.py","isp":"联通"}],
                paginations: {
                    pageIndex: 1,
                    total: 0,
                    pageSize: 10,
                    pageSizes: [10, 20, 50]
                }
            }
        },
        mounted() {
            this.getList();
        },
        methods: {
            getList() {
                let params = {
                    limit: this.paginations.pageSize,
                    page: this.paginations.pageIndex
                }
                // getUserList(params).then(res => {
                //     this.paginations.total = res.data.total;
                //     this.tableData = res.data.userList
                // })
            },
            handleSizeChange(pageSize) {
                this.paginations.pageSize = pageSize
            },
            handleSizeChange(page) {
                this.pageIndex.pageIndex = page
            }
        }
    }
</script>

<style lang="scss" scoped>
    .fillcontain{
        padding-bottom: 0;
    }
    .contain{
        background: #fff;
        padding: 10px;
        margin-bottom: 20px;
    }
   .pagination{
       padding: 10px 20px;
       text-align: right;
   }
</style>



