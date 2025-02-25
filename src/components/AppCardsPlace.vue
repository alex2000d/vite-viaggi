<script>
export default {
    
}
</script>
<template>
   <div class="container-fluid bg">
    <div class="row">
        <div class="col-12 text-center mt-5">
            <h1> Le migliori mete del 2023/2024</h1>
        </div>
        <div class="col-4">
            <div class="content-place mt-5">
                <img src="../assets/img/parigi.jpeg" alt="parigi">
                <h2 class="text-center">Parigi</h2>
                <p class="p-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur dolorem perferendis rem facere dignissimos. Ratione quod recusandae laborum tempore quia facere doloremque in deserunt, rerum eaque aperiam, aut quisquam error?</p>
                <div class="p-2">
                    <i class="fa-solid fa-star" style="color: #FFD43B;"></i>
                    <i class="fa-solid fa-star" style="color: #FFD43B;"></i>
                    <i class="fa-solid fa-star" style="color: #FFD43B;"></i>
                    <i class="fa-solid fa-star" style="color: #FFD43B;"></i>
                    <i class="fa-solid fa-star" style="color: #FFD43B;"></i>
                </div>
            </div>
        </div>
        <div class="col-4">
            <div class="content-place mt-5">
                <img src="../assets/img/roma.webp" alt="roma">
                <h2 class="text-center">Roma</h2>
                <p class="p-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur dolorem perferendis rem facere dignissimos. Ratione quod recusandae laborum tempore quia facere doloremque in deserunt, rerum eaque aperiam, aut quisquam error?</p>
                <div class="p-2">
                    <i class="fa-solid fa-star" style="color: #FFD43B;"></i>
                    <i class="fa-solid fa-star" style="color: #FFD43B;"></i>
                    <i class="fa-solid fa-star" style="color: #FFD43B;"></i>
                    <i class="fa-solid fa-star" style="color: #FFD43B;"></i>
                    <i class="fa-solid fa-star" style="color: #FFD43B;"></i>
                </div> 
            </div>
        </div>
        <div class="col-4">
            <div class="content-place mt-5">
                <img src="../assets/img/santorini.avif" alt="santorini">
                <h2 class="text-center">Santorini</h2>
                <p class="p-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur dolorem perferendis rem facere dignissimos. Ratione quod recusandae laborum tempore quia facere doloremque in deserunt, rerum eaque aperiam, aut quisquam error?</p>
                <div class="p-2">
                    <i class="fa-solid fa-star" style="color: #FFD43B;"></i>
                    <i class="fa-solid fa-star" style="color: #FFD43B;"></i>
                    <i class="fa-solid fa-star" style="color: #FFD43B;"></i>
                    <i class="fa-solid fa-star" style="color: #FFD43B;"></i>
                    <i class="fa-solid fa-star" style="color: #FFD43B;"></i>
                </div>
            </div>
        </div>
        <div class="col-4">
            <div class="content-place mt-5">
                <img src="../assets/img/dubai.jpg" alt="dubai">
                <h2 class="text-center">Dubai</h2>
                <p class="p-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur dolorem perferendis rem facere dignissimos. Ratione quod recusandae laborum tempore quia facere doloremque in deserunt, rerum eaque aperiam, aut quisquam error?</p>
                <div class="p-2">
                    <i class="fa-solid fa-star" style="color: #FFD43B;"></i>
                    <i class="fa-solid fa-star" style="color: #FFD43B;"></i>
                    <i class="fa-solid fa-star" style="color: #FFD43B;"></i>
                    <i class="fa-solid fa-star" style="color: #FFD43B;"></i>
                    <i class="fa-solid fa-star" style="color: #FFD43B;"></i>
                </div>
            </div>
        </div>
        <div class="col-4">
            <div class="content-place mt-5">
                <img src="../assets/img/Vienna.webp" alt="vienna">
                <h2 class="text-center">Vienna</h2>
                <p class="p-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur dolorem perferendis rem facere dignissimos. Ratione quod recusandae laborum tempore quia facere doloremque in deserunt, rerum eaque aperiam, aut quisquam error?</p>
                <div class="p-2">
                    <i class="fa-solid fa-star" style="color: #FFD43B;"></i>
                    <i class="fa-solid fa-star" style="color: #FFD43B;"></i>
                    <i class="fa-solid fa-star" style="color: #FFD43B;"></i>
                    <i class="fa-solid fa-star" style="color: #FFD43B;"></i>
                    <i class="fa-solid fa-star" style="color: #FFD43B;"></i>
                </div>
            </div>
        </div>
        <div class="col-4">
            <div class="content-place mt-5">
                <img src="../assets/img/egitto.jpg" alt="egitto">
                <h2 class="text-center">Egitto</h2>
                <p class="p-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur dolorem perferendis rem facere dignissimos. Ratione quod recusandae laborum tempore quia facere doloremque in deserunt, rerum eaque aperiam, aut quisquam error?</p>
                <div class="p-2">
                    <i class="fa-solid fa-star" style="color: #FFD43B;"></i>
                    <i class="fa-solid fa-star" style="color: #FFD43B;"></i>
                    <i class="fa-solid fa-star" style="color: #FFD43B;"></i>
                    <i class="fa-solid fa-star" style="color: #FFD43B;"></i>
                    <i class="fa-solid fa-star" style="color: #FFD43B;"></i>
                </div>
            </div>
        </div>
    </div>
   </div>
</template>
<style lang="scss" scoped>
    .content-place{
        background-color: gray;
        border-radius: 20px;
       
        
    }
    .content-place img{
        width: 100%;
        border-radius: 20px;
     
    }

    .bg{
        background: rgb(219, 219, 219);
        overflow: hidden;
       
    }

    .content-place {
        cursor: pointer;
        position: relative;
        padding: 10px 24px;
        background-color: transparent;
        font-weight: 600;
        transition: all 0.3s cubic-bezier(0.23, 1, 0.320, 1);
        overflow: hidden;
        margin-bottom: 30px;
      }
      
      .content-place::before {
        content: '';
        position: absolute;
        inset: 0;
        margin: auto;
        width: 50px;
        height: 50px;
        border-radius: inherit;
        scale: 0;
        z-index: -1;
       
        transition: all 0.6s cubic-bezier(0.23, 1, 0.320, 1);
      }
      
      .content-place:hover::before {
        scale: 3;
      }
      
      .content-place:hover {
        color: #212121;
        scale: 1.1;
        box-shadow: 0 0px 20px rgba(193, 163, 98,0.4);
      }
      
      .content-place:active {
        scale: 1;
      }
      
</style>