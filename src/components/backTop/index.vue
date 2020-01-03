<template>
    <div class="backTop" v-show="goTop" @click="handleScrollTop">
        <div class="back"></div>
    </div>
</template>

<script>
   export default {
       name: 'backTop',
       data () {
           return {
               goTop: false,
               scrollHeight: 200
           }
       },
       props: ['ele'],
       mounted() {
           window.addEventListener('scroll', this.handleScroll, true)
       },
       methods: {
           handleScroll(e) {
               this.goTop = e.target.scrollTop > this.scrollHeight ? true : false
           },
           handleScrollTop() {
               this.$$nextTick(() => {
                   this.ele.scrollTop = 0
               })
           }
       },
       destroyed() {
         window.removeEventListener('scroll');
       }
   }

</script>


<style lang="scss" scoped>
    .backTop{
        position: fixed;
        right: 50px;
        bottom: 50px;
        z-index: 10;
        cursor: pointer;
        opacity: .3;
        &:hover{
            opacity: 1;
        }
        .back{
        background: url('../../assets/img/backTop.png') no-repeat;
        background-position: center;
        background-size: 16px;
        background-color: #1890ff;
        width: 40px;
        height: 40px;
        overflow: hidden;
        color: #fff;
        text-align: center;
        border-radius: 50%;
        transition: all .3s;
        box-shadow: 0 0 15px 1px rgba(69,65,78,.1)
        }
    }
</style>