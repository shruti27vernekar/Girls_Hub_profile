<template>
<div>
    <div>
        <h1 class="head">Favorite xGirls</h1>
        <section class="product">
        
            <div class="product-inner" v-for="product in products" :key="product.name" >
                <div class="product-image-wrap">
                    <img v-bind:src="product.src" class="image"/>
                </div>
                <div class="product-text-wrap">
                    <h2 >{{product.name}} </h2>
                    <h4>{{product.content}} </h4>
                </div>
            </div>
    
        </section>
    </div>

    <div>
        <h1 class="head">new xgirls</h1>
    
        <section class="product">
        
            <div class="product-inner" v-for="product in products" :key="product.name" >
                <div class="product-image-wrap">
                    <img v-bind:src="product.src" class="image"/>
                </div>
                <div class="product-text-wrap">
                    <h2 >{{product.name}} </h2>
                    <h4>{{product.content}} </h4>
                 </div>
            </div>
         </section>
    </div>

    <div>
        <h1 class="head">all xGirls</h1>
    
        <section class="product">
        
             <div class="product-inner" v-for="product in products" :key="product.name" >
                <div class="product-image-wrap">
                    <img v-bind:src="product.src" class="image"/>
                 </div>
                <div class="product-text-wrap">
                    <h2 >{{product.name}} </h2>
                    <h4>{{product.content}} </h4>
                </div>
            </div>
        </section>
    </div>
</div>
   
    
</template>

<script>
    export default {
        name: "CardProfile",
        data() {
            return {
                products: [
                    {
                        name: 'Red Kitty',
                        content: 'Claim free trial link',
                        src: require('../assets/Red Kitty.png')
                    },
                    {
                        name: 'Vicky Wild',
                        content: 'Claim free trial link',
                        src: require('../assets/Vicky Wild.png')
                    },
                    {
                        name: 'Zuzu Sweet',
                        content: 'Claim free trial link',
                        src: require('../assets/Zuzu Sweet.png') 
                    },
                    {
                        name: 'Sweet Cheecks Julie',
                        content: 'Claim free trial link',
                        src: require('../assets/Sweet Cheecks Julie.png')
                    },
                    {
                        name: 'Eva Bane',
                        content: 'Claim free trial link',
                        src: require('../assets/Eva Bane.png')
                    }
                ]
            }
        }
    }
</script>

<style>
    .product{
        display: flex;
        max-width: 1100px;
        padding: 20px;
        margin: 0 auto;
        flex: 1 1 33.333%;
        width: 100%;
        
    }

    .product-inner{
        position: relative;
        padding: 25px;
        box-shadow: 0px 0px 16px rgba(0, 0, 0, 0.25);
    }

    .product-image-wrap .image{
        width: 100%;
        border-radius: 10px;
    }
    

    .product-text-wrap {
        
        box-sizing: border-box;
        position: absolute;
        width: 170px;
        height: 80px;
        left: 35px;
        top: 260px;
        background: rgba(30, 22, 40, 0.8);
        -webkit-backdrop-filter: blur(12px);
        backdrop-filter: blur(12px);
        border-radius: 16px;
    }

    .product-text-wrap h2 {
        position: absolute;
        width: 105px;
        height: 31px;
        left: 24px;
        top: 5px;
        font-family: 'Clash Display';
        font-style: normal;
        font-weight: 500;
        font-size: 15px;
        line-height: 130%;
        font-feature-settings: 'pnum' on, 'lnum' on;
        color: #FFFFFF;
    }

    .product-text-wrap h4{
            position: absolute;
    width: 185px;
    height: 19px;
    left: 24px;
    top: 50px;
    font-family: 'Clash Grotesk';
    font-style: normal;
    font-weight: 400;
    font-size: 8px;
    line-height: 130%;
    letter-spacing: 1px;
    text-transform: uppercase;
    color: #FFFFFF;
    }

    .head{
        height: 38px;
        font-family: 'Clash Display';
        font-style: normal;
        font-weight: 400;
        font-size: 25px;
        line-height: 230%;
        letter-spacing: 16px;
        text-transform: uppercase;
        font-feature-settings: 'pnum' on, 'lnum' on;
        color: #EEF2F7;
        margin: 0 auto;
        text-align: center;
    }
</style>