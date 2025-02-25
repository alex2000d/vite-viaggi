<script>

export default {
  
}
</script>
<template>
  <div class="container-fluid bg">
    <div class="row ">
        <div class=" col-12 col-lg-5">
            <h2 class="text-white mt-5 p-3 titolo">Pronto a viaggiare con noi? <br> Nuovi posti ti attendono</h2>
            <p class="text-white p-3 testo">Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur vel
                recusandae
                libero architecto!
                Laboriosam ad veniam corrupti, laudantium iure eaque, reprehenderit cupiditate, ab dignissimos
                vel
                cumque architecto perferendis magnam quos!</p>
            <button class="button mt-3 ms-3 tasto">Scopri di più<i class="fa-solid fa-plane fa-rotate-90 ms-3 tasto" style="color: #f5f5f5;"></i>
            </button>
        </div>
        <div class=" col-12 col-lg-7 aereo">
            <iframe src='https://my.spline.design/untitled-0bc442b91bebf6840d0e0b7d0eaeffb4/' frameborder='0'
                width='100%' height='700px'></iframe>
        </div>
    </div>
</div>
</template>
<style lang="scss" scoped>
.bg {
  background-image: url(../assets/img/cielo.jpg);
}

/* From Uiverse.io by gharsh11032000 */ 
.button {
    cursor: pointer;
    position: relative;
    padding: 10px 24px;
    font-size: 18px;
    color: rgb(193, 163, 98);
    border: 2px solid rgb(193, 163, 98);
    border-radius: 34px;
    background-color: transparent;
    font-weight: 600;
    transition: all 0.3s cubic-bezier(0.23, 1, 0.320, 1);
    overflow: hidden;
  }
  
  .button::before {
    content: '';
    position: absolute;
    inset: 0;
    margin: auto;
    width: 50px;
    height: 50px;
    border-radius: inherit;
    scale: 0;
    z-index: -1;
    background-color: rgb(193, 163, 98);
    transition: all 0.6s cubic-bezier(0.23, 1, 0.320, 1);
  }
  
  .button:hover::before {
    scale: 3;
  }
  
  .button:hover {
    color: #212121;
    scale: 1.1;
    box-shadow: 0 0px 20px rgba(193, 163, 98,0.4);
  }
  
  .button:active {
    scale: 1;
  }
  
  .testo{
    opacity: 0;
  }

  .aereo{
    opacity: 0;
  }
  

</style>