<script>
export default {
  
}
</script>
<template>
  <header>
    <div class="container-fluid">
        <div class="row">
            <div class="col-2 bg">
              <i class="fa-solid fa-plane-departure fa-2xl mt ms" style="color: #ffffff;"></i>
                
            </div>
            <div class="col-8 bg ">
                <div class="content-footer text-center">
                    <ul class="text-flex">
                        <li class="menu">home</li>
                        <li class="menu">viaggi</li>
                        <li class="menu">offerte</li>
                        <li class="menu">hotel</li>
                        <li class="menu">migliori posti</li>
                        <li class="menu">contacts</li>
                    </ul>

                </div>
            </div>
            <div class="col-2 bg">
                <h1 class="text-center mt-2 cursor"><i class="fa-solid fa-cart-shopping fa-2xs cursor" style="color: #aab4bb;"></i>
                </h1>
            </div>
        </div>
    </div>
</header>
</template>
<style lang="scss" scoped>
ul {
  list-style-type: none;
  margin: 10px 0;
}

ul li {
  margin: 10px 0;
  color: #fff;
  cursor: pointer;
}

ul li:hover {
  color: #5d38ff;
  cursor: pointer;
}

.text-flex {
  display: flex;
  justify-content: space-around;
  text-align: center;
}

.bg{
  background-color: rgb(37, 43, 95);
}
.mt{
  margin-top: 32px;
}

.ms{
  margin-left: 80px;
}


.cursor {
  cursor: pointer;
}


</style>