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
   <section id='services'>
    <h1 className='text-center my-4' style={{color:"#18d918",fontSize:"60px"}}>How It All Started</h1>
    <div className="row mb-2">
        <div className="col-md-6">

            <img src="https://ethanolproducer.com/uploads/posts/magazine/2014/04/jatrodiesel-biodiesel_13968876754762.jpg" style={{height:"100%",width:"100%"}} alt="" />
        </div>
        <div className="col-sm-6">

        <div className='container py-2 px-6' style={{fontSize:"26px"}}>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum eaque sunt illo voluptas asperiores impedit voluptatum, voluptatibus veniam. Itaque deleniti exercitationem quas dolorum consectetur rerum fugiat nobis aperiam omnis quos corporis ipsam iure illo impedit tempora, consequuntur fugit at a. Voluptatem vitae at nam impedit! Non laudantium eos iste sed possimus quod officiis magni enim cumque! Veritatis quisquam provident laborum rem sed impedit quaerat. Maxime quisquam dolore dolorum! Dicta quibusdam facilis </p>
        </div>
        </div>
    </div>
   
   </section>

   </>
  )
}

export default Home
