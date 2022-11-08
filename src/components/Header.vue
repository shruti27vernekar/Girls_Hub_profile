<template>
  
  <div class ="header">
    <div class="logo">
        <img class="img-fluid" src="../assets/Vector.png" alt=""> 
        <h3 class="text">GIRL HUB</h3>
    </div>
    <div class="navbar">
        <a href="#">Sign in</a>
        <a href="#">Categories</a>
        <a href="#">Models</a>
        <a href="#">Home</a>
    </div>
   
  </div>
</template>

<script>
export default {
  name: 'HeaderPage',
  
}
</script>

<style scoped>
    .header{
         position: absolute;
        width: 1728px;
        height: 160px;
        left: calc(50% - 1728px/2);
        top: 3px;

        background: rgba(11, 4, 19, 0.01);
        backdrop-filter: blur(24px);
    }
    .logo{
        margin-right: auto!important;
        display: block;
        word-wrap: normal;
        text-align: center;
        text-decoration: none;
        color: #000;
        background-color: transparent;
        border-right: 1px solid #d6d3d3;
        margin-left: 5px;
    }
    .img-fluid{
           position: absolute;
            left: 10.07%;
            top: 22.02%;
    }
    
    .text{
        position: absolute;
        left: 11.81%;
        top: 0%;
        bottom: 20.99%;
        size: 5px;
        color: rgb(238, 231, 231);
    }
    .navbar{
            right: 30%;
    }

    .navbar a {
        float: right;
    color: rgb(238, 231, 231);
    padding: 10px 10px;
    text-align: center;
    font-size: 17px;
    text-decoration: none;
    margin-right: 150px;
    }
    
</style>