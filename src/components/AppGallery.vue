<script>
export default {
    
}
</script>
<template>
    <div class="bg">
        <div class="container">
            <div class="row">
                <div class="col-12 text-center mt-5">
                    <h3>Make your tour more pleasure</h3>
                    <h1>Recent Gallery</h1>
                </div>
            </div>
            <div class="row">
                <div class="col-3">
                    <div class="content-place mt-5 heigth">
                        <img src="../assets/img/gallery-2.jpg" alt="parigi">
                    </div>
                </div>
                <div class="col-3">
                    <div class="content-place mt-5 width-2">
                        <img src="../assets/img/gallery-5.jpg" alt="parigi">
                    </div>
                    <div class="content-place mt-3 width-2">
                        <img src="../assets/img/gallery-1.jpg" alt="parigi">
                    </div>
                </div>
                <div class="col-6">
                    <div class="content-place mt-5 width">
                        <img src="../assets/img/gallery-6.jpg" alt="parigi">
                    </div>
                    <div class="content-place mt-3 width-3 d-flex">
                        <img class="me-3" src="../assets/img/gallery-3.jpg" alt="parigi">
                            <img class="width-4" src="../assets/img/gallery-4.jpg" alt="parigi">
                        
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<style lang="scss" scoped>
.content-place{
    border-radius: 20px;
  
   
    
}
.content-place img{
    height: 95%;
    border-radius: 20px;
    max-width: 100%;
    width: 95%;
    display: flex;
 
}

.content-place img:hover{
    width: 100%;
    height: 100%;
    transition: 0.5s;
    cursor: pointer;
}

.width{
width: 630px;
height: 305px;
}

.width-2{
    height: 305px;
}
.width-3{
    height: 305px;
    width: 310px;
}

.heigth{
    height: 640px;
}

.bg{
    background: rgb(219, 219, 219);
    overflow: hidden;
   
}
</style>