<script>
export default {
    
}
</script>
<template>
    <div class="container">
        <div class="row">
            <div class="col-6">
                <div class="content-place mt ms-5">
                    <img src="../assets/img/gallery-2.jpg" alt="parigi">
                </div>
                <div class="content-place mt position">
                    <img src="../assets/img/gallery-4.jpg" alt="parigi">
                </div>
            </div>
            <div class="col-6 mt">
                <h1 class="plans">Plan your Trip With Us</h1>
                <p class="plans">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus est blanditiis quod, fugit delectus facilis nam, saepe architecto et tenetur libero magni iure pariatur omnis odit odio. Necessitatibus, autem voluptatibus!
                </p>
                <div class="row">
                    <div class="col-2 mt-3 destination plans">
                        <img src="../assets/img/destination.png" alt="">
                    </div>
                    <div class="col-10">
                        <h3 class="plans">Exclusive Trip</h3>
                        <p class="plans">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum, repudiandae vero sed harum impedit in saepe illo aut tenetur.</p>
                    </div>
                    <div class="col-2 mt-4 destination plans">
                        <img src="../assets/img/airplane.png" alt="">
                    </div>
                    <div class="col-10 mt-4">
                        <h3 class="plans">Best Place</h3>
                        <p class="plans">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum, repudiandae vero sed harum impedit in saepe illo aut tenetur.</p>
                    </div>
                    <div class="col-2 mt-4 destination plans">
                        <img src="../assets/img/travel-agency.png" alt="">
                    </div>
                    <div class="col-10 mt-4">
                        <h3 class="plans">Agency Professionals</h3>
                        <p class="plans">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum, repudiandae vero sed harum impedit in saepe illo aut tenetur.</p>
                        <button class="button mt-3 ms-3 tasto">Scopri di più</button>
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
    height: 50%;
    border-radius: 20px;
    max-width: 100%;
    width: 50%;
}

.position{
    position: relative;
    top: -220px;
    left: 190px;
}

.mt{
    margin-top: 100px;
}

.destination img{
    width: 60%;
}

/* From Uiverse.io by gharsh11032000 */ 
.button {
    cursor: pointer;
    position: relative;
    padding: 10px 24px;
    font-size: 18px;
    color: rgb(255, 252, 246);
    border: 2px solid rgb(193, 163, 98);
    border-radius: 34px;
    background-color: rgb(5, 19, 174);
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
    background-color: rgb(168, 129, 45);
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

  
</style>