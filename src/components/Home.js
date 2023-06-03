import React from 'react'

function Home() {
  return (
   <>
   <section>

   <div id="carouselExampleCaptions" class="carousel slide" data-ride="carousel">
  <ol class="carousel-indicators">
    <li data-target="#carouselExampleCaptions" data-slide-to="0" class="active"></li>
    <li data-target="#carouselExampleCaptions" data-slide-to="1"></li>
    <li data-target="#carouselExampleCaptions" data-slide-to="2"></li>
  </ol>
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src="https://imechewebresources.blob.core.windows.net/imeche-web-content/journals/coffee-car-home.jpg?sfvrsn=50f5cd12_0" class="d-block w-100" alt="..." style={{height:'550px'}}/>
      <div class="carousel-caption d-none d-md-block">
        <h1>Beans to Fuel</h1>
        <h5>Innovating with Coffee Waste for Bioenergy</h5>
      </div>
    </div>
    <div class="carousel-item">
      <img src="https://th.bing.com/th/id/OIP.SUxJe5YYZ04AphWxHGAEXQHaC9?pid=ImgDet&rs=1" class="d-block w-100" alt="..." style={{height:'550px'}}/>
      <div class="carousel-caption d-none d-md-block">
        <h1>Wake Up to Renewable Energy</h1>
        <h5>Converting Coffee Residues into Biofuel</h5>
      </div>
    </div>
    <div class="carousel-item">
      <img src="https://www.fueltek.co.uk/wp-content/uploads/2020/06/Electric-Vehicles-768x383.jpg" class="d-block w-100" alt="..." style={{height:'550px'}}/>
      <div class="carousel-caption d-none d-md-block">
        <h1>Caffeine-powered</h1>
        <h5>Unleashing the Potential of Coffee Waste as Biofuel</h5>
      </div>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-target="#carouselExampleCaptions" data-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="sr-only">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-target="#carouselExampleCaptions" data-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="sr-only">Next</span>
  </button>
</div>
   </section>
   </>
   
  )
}

export default Home
