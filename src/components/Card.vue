<template>
    <div>
        <section >
            <HomePage  :products="products">
            </HomePage>
        </section>
    
    </div>
   
</template>

<script>
import HomePage from './HomePage.vue'
    export default {
        name: "ProfileCard",
        components : {
            HomePage
        },
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
                    }
                ]
            }
        }
    }
</script>
