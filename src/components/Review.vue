<template>
<div>
    <h1>reviews</h1>
    <section class="review-card">
        <div class="review-inner" v-for="review in reviews" :key="review.title">
        <div class="review-profile" >
            <div class="review-head">
                <h2>{{review.title}} </h2>
            </div>
            <p>{{review.content}} </p>
            
        </div>
        </div>
    </section>
</div>
    

</template>

<script>
    export default {
        name: "ReviewData",
        data() {
            return {
                reviews : [
                    {
                        title: "CassandraAura",
                        content: "I've been looking for a website where I could find hot girls and xGirlHub is the best. I am able to see the girls before I pay for a subscription which is really helpful. It's also great that you can pay with crypto."
                        
                    },
                    {
                        title: "CassandraAura",
                        content: "I am using xGirlHub for a few weeks now and I am really happy with it. It's nice to have a chance to see the girls before paying for a subscription. I find that the site very attractive and easy to use.  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque maecenas eu elementum vehicula adipiscing dolor tortor malesuada."
                       
                    },
                    {
                        title: "CassandraAura",
                        content: "I've been looking for a website where I could find hot girls and xGirlHub is the best. I am able to see the girls before I pay for a subscription which is really helpful. It's also great that you can pay with crypto."
                        
                    },
                    {
                        title: "CassandraAura",
                        content: "I've been looking for a website where I could find hot girls and xGirlHub is the best. I am able to see the girls before I pay for a subscription which is really helpful. It's also great that you can pay with crypto."
                        
                    },

                ]
            }
        }
    }
</script>

<style scoped>
    h1{
        width: 601px;
    height: 105px;
    left: calc(50% - 601px/2 - 380.5px);
    top: 100px;
    font-family: 'Clash Display';
    font-style: normal;
    font-weight: 500;
    font-size: 30px;
    line-height: 100%;
    letter-spacing: 16px;
    text-transform: uppercase;
    font-feature-settings: 'pnum' on, 'lnum' on;
    color: #EEF2F7;
    }
    .review-card {
       display: flex;
        max-width: 1100px;
        padding: 20px;
        margin: 0 auto;
        flex: 1 1 33.333%;
        width: 100%;
    }
    .review-inner{
        position: relative;
        padding: 25px;
        box-shadow: 0px 0px 16px rgba(0, 0, 0, 0.25);
    }
    .review-profile {
        display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 0px;
    /* position: absolute; */
    width: 250px;
    height: 250px;
    /* left: calc(50% - 380px/2 - 491px); */
    top: 3419px;
    background: #0B0413;
    border-radius: 40px;
}
    .review-head  {
        width: 250px;
    height: 70px;
    background: #EEF2F7;
    border-radius: 0px 0px 40px 0px;
    flex: none;
    order: 1;
    flex-grow: 0;
    position: ab;
    position: absolute;
    }

    .review-profile p {
       font-family: 'Clash Grotesk';
    font-style: normal;
    font-weight: 400;
    font-size: 15px;
    line-height: 130%;
    color: #FFFFFF;
    flex: none;
    order: 1;
    flex-grow: 0;
    }
    h2 {
        font-size: 15px;
    text-align: center;
    }
</style>
