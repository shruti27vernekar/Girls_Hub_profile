<template>
    <div class ="flex -m-4 bg-gray-700 h-80 justify-around text-white">
      <div class="top-0, right-0 px-20 py-10 ">
          <img class="h-10 w-10 -py-5 " src="../assets/Vector.png" alt=""> 
          <h3 class="px-10  w-10 font-serif text-4xl font-bold tracking-wider">GIRL HUB</h3>
      </div>
    <div class=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2 py-10 space-x-7">
        <div class="mb-6">
            <h3 class="text-2xl font-semibold font-serif" >Company</h3>
            <ul class="py-2 space-y-2 ">
              <li>About Us</li>
              <li>Partnership</li>
              <li>Support</li>
            </ul>
        </div>

        <div class="mb-5">
            <h3 class="text-2xl font-semibold font-serif">Contact</h3>
            <ul class="py-2 space-y-2 ">
              <li>Twitter</li>
              <li>Instagram</li>
              <li>Facebook</li>
            </ul>
        </div>

        <div class="mb-5">
            <h3 class="text-2xl font-semibold font-serif">Information</h3>
            <ul class="py-2 space-y-2 ">
              <li>FAQ</li>
              <li>Privacy Policy</li>
              <li>Terms of service</li>
              <li>Pricing</li>
            </ul>
        </div>
        
    </div>
   
  </div>
</template>

<script>
    export default {
  name: 'FooterPage',
  
}
</script>


