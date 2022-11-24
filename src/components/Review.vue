<template>
<div>
    <section class="-m-4 bg-gray-800 py-10 px-20 ">
        <h1 class="font-sans text-3xl font-bold tracking-widest leading-2  text-white uppercase px-20 py-10">reviews</h1>
        <!-- card -->
        <div class="flex space-x-8 justify-center ">
            <div v-for="review in reviews" :key="review.title">
                <div class="flex bg-black bottom-0 right-0 left-0 m-2 h-80 w-60 py-2 rounded-lg justify-left relative space-x-8">
                    <div class=" flex top-0 right-0 left-0 absolute py-2 bg-white h-20 rounded-tl-lg rounded-tr-lg rounded-br-lg  ">
                        <img src="../assets/avatar.png" class="py-2 px-2 "  >
                        <h2 class="text-lg font-semibold py-5 px-2 text-black">{{review.title}} </h2>
                    </div>
                    <div class="py-20 text-0.1rem  px-2 text-white ">
                        <p> {{review.content}}</p>
                    </div>
                
                </div>
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
                        content: "I am using xGirlHub for a few weeks now and I am really happy with it. It's nice to have a chance to see the girls before paying for a subscription. I find that the site very attractive and easy to use."
                
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