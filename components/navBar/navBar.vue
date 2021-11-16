<template>
        <div class="banner-div row ">
            <div class="left-banner col-6">
                <a href="#">
                    <img :src="bannerImg.leftBanner">
                </a>
            </div>
            <div class="right-banner col-6">
                <a href="http://design.yayati.co/">
                    <img :src="bannerImg.rightBanner">
                </a>
            </div>            
        </div>
</template>

<script>
    export default {
        data(){
            return{
                bannerImg: this.$store.state.bannerImg
            }
        }
    }
</script>

<style scoped>
    body{
        line-height: 0px!important;
    }    
    .right-banner {
        display: flex;
        justify-content: right;
        padding-right: 2%;
    }
    .left-banner {
        display: flex;
        justify-content: left;
        padding-left: 2%;
    }
    .banner-div {
        width: 100%;
    }
    p{
        margin: 0px;
    }
    img{
        height: 100px;
        width: 200px;
    }
    @media(max-width: 400px){
        img{
            height: 100px;
            width: 100px;
        }   
    }
</style>
